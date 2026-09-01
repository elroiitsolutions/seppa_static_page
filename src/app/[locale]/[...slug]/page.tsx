import React from 'react';
import { getTranslations, getMessages, setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import PackagingPageLayout from '@/components/packaging/PackagingPageLayout';
import BlogTemplate from '@/components/templates/BlogTemplate';
import { getPageBySlug } from '@/lib/strapi/client'; 

import { routing } from '@/i18n/routing';

interface Props {
  params: Promise<{ locale: string; slug: string[] }>;
}

export async function generateStaticParams() {
  const fallbackSlugs = [
    'dummy-slug',
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

  return routing.locales.flatMap((locale) =>
    fallbackSlugs.map((slugStr) => ({
      locale,
      slug: slugStr.split('/'),
    }))
  );
}

export default async function CatchAllPage({ params }: Props) {
  const { locale, slug } = await params;
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
