import React from 'react';
import { getTranslations, getMessages, setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import PackagingPageLayout from '@/components/packaging/PackagingPageLayout';
import BlogTemplate from '@/components/templates/BlogTemplate';
import { getPageBySlug, fetchAPI } from '@/lib/strapi/client';
import { routing } from '@/i18n/routing';
import { pickMessages } from '@/lib/i18n-helper';

interface Props {
  params: Promise<{ locale: string; slug: string[] }>;
}

export async function generateStaticParams() {
  try {
    const res = await fetchAPI('/pages', { fields: ['full_path'] });
    const pages = res?.data || [];
    
    const params: { locale: string; slug: string[] }[] = [];
    
    for (const locale of routing.locales) {
      for (const page of pages) {
        if (page.full_path) {
          const slug = page.full_path.replace(/^\//, '').split('/').filter(Boolean);
          if (slug.length > 0) {
            params.push({ locale, slug });
          }
        }
      }
    }
    
    if (params.length === 0) {
      // Fallback dummy param so Next.js doesn't crash if Strapi is empty/failing during export
      for (const locale of routing.locales) {
        params.push({ locale, slug: ['_fallback_'] });
      }
    }
    
    return params;
  } catch (error) {
    console.error('Error in generateStaticParams:', error);
    
    // Return fallback on error to prevent build failure
    const fallbackParams: { locale: string; slug: string[] }[] = [];
    for (const locale of routing.locales) {
      fallbackParams.push({ locale, slug: ['_fallback_'] });
    }
    return fallbackParams;
  }
}

export default async function CatchAllPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const firstSegment = slug[0] || '';
  const lastSegment = slug[slug.length - 1] || '';

  if (
    firstSegment === 'api' ||
    firstSegment === 'uploads' ||
    lastSegment.includes('.')
  ) {
    notFound();
  }

  const fullPath = '/' + slug.join('/');
  const pageData = await getPageBySlug(fullPath, locale);

  if (!pageData) {
    notFound();
  }

  const messages = await getMessages({ locale });
  const filteredMessages = pickMessages(messages, ['home']);

  // Map CMS data to components
  let TemplateComponent = PackagingPageLayout;
  if (pageData.template === 'blog') {
    TemplateComponent = BlogTemplate;
  }
  // Add other templates (e.g. 'home', 'machine') as they are built

  return (
    <NextIntlClientProvider locale={locale} messages={filteredMessages}>
      <TemplateComponent data={pageData} locale={locale} />
    </NextIntlClientProvider>
  );
}
