import React from 'react';
import { getTranslations, getMessages, setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { routing } from '@/i18n/routing';
import { getRelatedBlogs } from '@/lib/strapi/client';
import PackagingPageLayout, { PackagingPageData } from '@/components/packaging/PackagingPageLayout';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function TeasPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'teas' });

  // Fetch blogs related to this page automatically
  const relatedBlogs = await getRelatedBlogs('/teas', locale);

  const pageData: PackagingPageData = {
    title: t('title'),
    breadcrumbName: t('breadcrumbName'),
    rootBreadcrumbName: t('rootBreadcrumbName'),
    rootBreadcrumbPath: t('rootBreadcrumbPath'),
    headerImage: "/images/tea_header_1782124573295.png",
    overviewTitle: t('overviewTitle'),
    overviewDescription: t('overviewDescription'),
    overviewsubDescription: Array.isArray(t.raw('overviewsubDescription')) ? t.raw('overviewsubDescription') : [],
    overviewImage: "/images/tea_production_line_1782122036848.png",
    featuresTitle: t('featuresTitle'),
    featuresSubtitle: t('featuresSubtitle'),
    features: Array.isArray(t.raw('features')) ? t.raw('features') : [],
    whyChoose: {
      title: t('whyChoose.title'),
      description: t('whyChoose.description'),
      image: "/images/tea_why_choose_1782124586376.png",
      paragraphs: Array.isArray(t.raw('whyChoose.paragraphs')) ? t.raw('whyChoose.paragraphs') : []
    },
    methodology: {
      title: t('methodology.title'),
      subtitle: t('methodology.subtitle'),
      steps: (Array.isArray(t.raw('methodology.steps')) ? t.raw('methodology.steps') as any[] : []).map((step: any, index: number) => {
        // Re-inject images from the old hardcoded English version
        const images = [
          "/images/tea_header_1782124573295.png",
          "/images/tea_why_choose_1782124586376.png",
          "/images/tea_production_line_1782122036848.png",
          "/images/tea_why_choose_1782124586376.png"
        ];
        return { ...step, image: images[index] || "" };
      }),
      outro: Array.isArray(t.raw('methodology.outro')) ? t.raw('methodology.outro') : []
    },
    faqTitle: t('faqTitle'),
    faqs: Array.isArray(t.raw('faqs')) ? t.raw('faqs') : [],
    applicationsTitle: t('applicationsTitle'),
    applicationsSubtitle: t('applicationsSubtitle'),
    applications: Array.isArray(t.raw('applications')) ? t.raw('applications') : []
  };

  const messages = await getMessages({ locale });

    pageData.trending_articles = relatedBlogs?.length > 0 ? relatedBlogs : undefined;

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <PackagingPageLayout data={pageData} locale={locale} />
    </NextIntlClientProvider>
  );
}

