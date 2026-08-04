import { MetadataRoute } from 'next';
import { fetchAPI } from '@/lib/strapi/client';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Fetch all pages from Strapi
  const res = await fetchAPI('/pages', { fields: ['full_path', 'updatedAt'] });
  
  const pages = res?.data || [];
  
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.seppasolutions.com';

  const sitemapEntries = pages.map((page: any) => ({
    url: `${baseUrl}${page.full_path}`,
    lastModified: new Date(page.updatedAt || new Date()),
    changeFrequency: 'weekly' as const,
    priority: page.full_path === '/' ? 1 : 0.8,
  }));

  // Add static routes or other collections (like blog posts)
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    ...sitemapEntries
  ];
}
