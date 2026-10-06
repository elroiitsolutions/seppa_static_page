import qs from 'qs';

export const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

export async function fetchAPI(path: string, urlParamsObject = {}, options: RequestInit = {}) {
  // Merge default and user options
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(options.headers as Record<string, string> || {}),
  };

  if (process.env.STRAPI_API_TOKEN) {
    headers['Authorization'] = `Bearer ${process.env.STRAPI_API_TOKEN}`;
  }

  const mergedOptions: RequestInit = {
    headers,
    ...options,
  };

  // Build request URL
  const queryString = qs.stringify(urlParamsObject, { encodeValuesOnly: true });
  const requestUrl = `${STRAPI_URL}/api${path}${queryString ? `?${queryString}` : ''}`;

  // Trigger API call
  try {
    const isDev = process.env.NODE_ENV === 'development';
    const fetchConfig: RequestInit = isDev
      ? { ...mergedOptions, cache: 'no-store' }
      : { ...mergedOptions, next: { revalidate: 60 } };

    const response = await fetch(requestUrl, fetchConfig);

    // Handle response
    if (!response.ok) {
      console.warn(`Strapi request warning for ${requestUrl}: ${response.status} ${response.statusText}`);
      return null;
    }
    const text = await response.text();
    if (!text || !text.trim()) {
      return null;
    }
    try {
      const data = JSON.parse(text);
      return data;
    } catch {
      return null;
    }
  } catch (error) {
    console.warn(`Fetch error for ${requestUrl}:`, error);
    return null;
  }
}

export async function getPageBySlug(slug: string, locale: string = 'en') {
  const cleanPath = '/' + slug.replace(/^\/+|\/+$/g, '');
  // Filters by full_path (matching with or without trailing slash)
  const query = {
    filters: {
      full_path: {
        $in: [cleanPath, `${cleanPath}/`],
      },
    },
    locale,
    populate: {
      hero: { populate: '*' },
      body: { populate: '*' },
      seo: { populate: '*' },
      category: { populate: '*' },
      author: { populate: '*' },
      tags: { populate: '*' },
      trending_articles: {
        populate: {
          hero: { populate: '*' }
        }
      }
    },
  };

  const res = await fetchAPI('/pages', query);
  if (res && res.data && res.data.length > 0) {
    return res.data[0];
  }
  return null;
}

export async function getRelatedBlogs(pathname: string, locale: string = 'en') {
  // Ensure pathname doesn't have a trailing slash
  const normalizedPath = pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
  
  const query = {
    filters: {
      full_path: {
        $startsWith: `${normalizedPath}/blog/`
      },
      template: {
        $eq: 'blog'
      }
    },
    locale,
    populate: {
      hero: { populate: '*' }
    }
  };

  const res = await fetchAPI('/pages', query);
  return res?.data || [];
}

export async function getAllBlogs(locale: string = 'en') {
  const query = {
    filters: {
      template: {
        $eq: 'blog'
      }
    },
    locale,
    populate: {
      hero: { populate: '*' },
      author: { populate: '*' },
      category: { populate: '*' }
    },
    sort: ['publishedAt:desc']
  };

  const res = await fetchAPI('/pages', query);
  return res?.data || [];
}

export async function getAllPageSlugs(): Promise<string[]> {
  const res = await fetchAPI('/pages', {
    fields: ['full_path'],
    pagination: { pageSize: 200 },
  });

  if (res && res.data && Array.isArray(res.data)) {
    return res.data
      .map((item: any) => item.full_path ? item.full_path.replace(/^\/+/, '') : '')
      .filter(Boolean);
  }
  return [];
}

