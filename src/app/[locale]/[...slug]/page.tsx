import React from 'react';
import { getTranslations, getMessages, setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import PackagingPageLayout from '@/components/packaging/PackagingPageLayout';
import BlogTemplate from '@/components/templates/BlogTemplate';
import { getPageBySlug } from '@/lib/strapi/client'; 

interface Props {
  params: Promise<{ locale: string; slug: string[] }>;
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
  if (pageData.template === 'blog') {
    TemplateComponent = BlogTemplate;
  }
  // Add other templates (e.g. 'home', 'machine') as they are built

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <TemplateComponent data={pageData} locale={locale} />
    </NextIntlClientProvider>
  );
}
