import React from 'react';
import { getTranslations, getMessages, setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import PackagingPageLayout from '@/components/packaging/PackagingPageLayout';
import BlogTemplate from '@/components/templates/BlogTemplate';
import { getPageBySlug, getAllPageSlugs } from '@/lib/strapi/client'; 

import { routing } from '@/i18n/routing';

interface Props {
  params: Promise<{ locale: string; slug: string[] }>;
}

export const dynamicParams = false;

export async function generateStaticParams() {
  const fallbackSlugs = [
    'dummy-slug',
    'can/blog/pet-vs-glass-vs-aluminium-cans',
    'can/blog/innovations-in-can-filling',
    'pet/blog/next-gen-pet-stretch-blow-moulding',
    'mineral-water/blog/maintaining-purity-in-mineral-water-bottling',
    'alcohol-spirits-pet-blowing',
    'pharma-cosmetics-pet-blowing',
    'blowing/electric/ssb-sle-40',
    'blowing/electric/ssb-sle-60',
    'blowing/electric/ssb-sle-80',
    'blowing/electric/ssb-sle-100',
    'blowing/electric/ssb-sle-120',
    'blowing/electric/ssb-sle-150',
    'blowing/pneumatic/ssb-sl-10',
    'blowing/pneumatic/ssb-sl-20',
    'blowing/pneumatic/ssb-sl-40',
    'blowing/pneumatic/ssb-sl-60'
  ];

  try {
    const cmsSlugs = await getAllPageSlugs();
    const allSlugs = Array.from(new Set([...fallbackSlugs, ...cmsSlugs]));

    return routing.locales.flatMap((locale) =>
      allSlugs.map((slugStr) => ({
        locale,
        slug: slugStr.split('/'),
      }))
    );
  } catch (e) {
    return routing.locales.flatMap((locale) =>
      fallbackSlugs.map((slugStr) => ({
        locale,
        slug: slugStr.split('/'),
      }))
    );
  }
}

export default async function CatchAllPage({ params }: Props) {
  const { locale, slug } = await params;

  // Immediately reject invalid locales, internal Next.js assets, sourcemaps, or devtools requests
  if (
    !routing.locales.includes(locale as any) ||
    !slug ||
    slug.length === 0 ||
    slug.some((s) => s.endsWith('.map') || s.endsWith('.json') || s.startsWith('.'))
  ) {
    notFound();
  }

  setRequestLocale(locale);

  const fullPath = '/' + slug.join('/');
  const pageData = await getPageBySlug(fullPath, locale);

  if (!pageData) {
    notFound();
  }

  const messages = await getMessages({ locale });

  // Map CMS data to components
  let TemplateComponent = PackagingPageLayout;
  if (pageData && pageData.template === 'blog') {
    TemplateComponent = BlogTemplate;
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <TemplateComponent data={pageData} locale={locale} />
    </NextIntlClientProvider>
  );
}
