import { MetadataRoute } from 'next';
import { fetchAPI } from '@/lib/strapi/client';
import { routing } from '@/i18n/routing';

export const dynamic = 'force-static';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://seppasolutions.com';
  
  // Fetch dynamic CMS pages from Strapi
  let pages: any[] = [];
  try {
    const res = await fetchAPI('/pages', { fields: ['full_path', 'updatedAt'], pagination: { pageSize: 250 } });
    pages = res?.data || [];
  } catch (e) {
    pages = [];
  }

  // Core static localized routes
  const corePaths = [
    '',
    '/about-us',
    '/contact-us',
    '/services',
    '/projects',
    '/equipments',
    '/faqs',
  ];

  const entries: MetadataRoute.Sitemap = [];

  // Generate localized entries for core pages
  for (const locale of routing.locales) {
    for (const path of corePaths) {
      entries.push({
        url: `${baseUrl}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency: path === '' ? 'daily' : 'weekly',
        priority: path === '' ? (locale === 'en' ? 1.0 : 0.9) : 0.8,
      });
    }
  }

  // Generate localized entries for CMS pages
  for (const page of pages) {
    if (!page.full_path) continue;
    const cleanPath = page.full_path.startsWith('/') ? page.full_path : `/${page.full_path}`;
    for (const locale of routing.locales) {
      entries.push({
        url: `${baseUrl}/${locale}${cleanPath}`,
        lastModified: new Date(page.updatedAt || new Date()),
        changeFrequency: 'weekly',
        priority: 0.7,
      });
    }
  }

  return entries;
}
