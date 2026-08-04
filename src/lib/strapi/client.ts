import qs from 'qs';

export const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

export async function fetchAPI(path: string, urlParamsObject = {}, options = {}) {
  // Merge default and user options
  const mergedOptions = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
    ...options,
  };

  // Build request URL
  const queryString = qs.stringify(urlParamsObject, { encodeValuesOnly: true });
  const requestUrl = `${STRAPI_URL}/api${path}${queryString ? `?${queryString}` : ''}`;


  // Trigger API call
  try {
    const response = await fetch(requestUrl, mergedOptions);

    // Handle response
    if (!response.ok) {
      console.error(`Error fetching ${requestUrl}: ${response.statusText}`);
      return null;
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Fetch error for ${requestUrl}:`, error);
    return null;
  }
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
