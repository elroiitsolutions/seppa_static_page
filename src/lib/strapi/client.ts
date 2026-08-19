import qs from 'qs';

export const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

export async function fetchAPI(path: string, urlParamsObject = {}, options: RequestInit = {}) {
  const mergedOptions: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
      ...(process.env.STRAPI_API_TOKEN ? { Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}` } : {}),
    },
    ...options,
  };

  const queryString = qs.stringify(urlParamsObject, { encodeValuesOnly: true });
  const requestUrl = `${STRAPI_URL}/api${path}${queryString ? `?${queryString}` : ''}`;

  const MAX_RETRIES = 3;
  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 3000);
      const res = await fetch(requestUrl, {
        ...mergedOptions,
        signal: controller.signal,
      });
      clearTimeout(timeoutId);

      if (!res.ok) {
        console.warn(`Strapi HTTP ${res.status}: ${res.statusText} for ${requestUrl}`);
        return null;
      }
      return await res.json();
    } catch (error: any) {
      if (attempt >= MAX_RETRIES) {
        console.warn(`Strapi fetch skipped for ${requestUrl}: ${error?.message || error}`);
        return null;
      }
    }
  }
  return null;
}

export async function getPageBySlug(slug: string, locale: string = 'en') {
  // Filters by full_path
  const query = {
    filters: {
      full_path: {
        $eq: slug,
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
  const normalizedPath = pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
  
  const query = {
    filters: {
      full_path: {
        $startsWith: `${normalizedPath}/blog/`
      }
    },
    locale,
    populate: {
      hero: { populate: '*' }
    }
  };

  const res = await fetchAPI('/pages', query);
  if (res?.data && res.data.length > 0) {
    return res.data;
  }

  // Fallback: return all published blogs so page is never empty or showing static defaults
  return getAllBlogs(locale);
}

export async function getAllBlogs(locale: string = 'en') {
  const query = {
    filters: {
      $or: [
        { template: { $eq: 'blog' } },
        { full_path: { $contains: '/blog' } }
      ]
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
