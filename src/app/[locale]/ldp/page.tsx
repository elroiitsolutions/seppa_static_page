import React from 'react';
import { getTranslations, getMessages, setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { routing } from '@/i18n/routing';
import { getRelatedBlogs } from '@/lib/strapi/client';
import PackagingPageLayout, { PackagingPageData } from '@/components/packaging/PackagingPageLayout';

import bannerImg from '@/assets/packaging/generated/dairy_banner.png';
import overviewImg from '@/assets/packaging/generated/dairy_overview.png';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function LdpPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'ldp' });
  const messages = await getMessages({ locale });

  // Fetch blogs related to this page automatically
  const relatedBlogs = await getRelatedBlogs('/ldp', locale);

  const pageData: PackagingPageData = {
    title: t('title'),
    breadcrumbName: t('breadcrumbName'),
    rootBreadcrumbName: "Liquid",
    rootBreadcrumbPath: "/liquid",
    headerImage: bannerImg.src,
    overviewTitle: t('overviewTitle'),
    overviewDescription: t('overviewDescription'),
    overviewsubDescription: Array.isArray(t.raw('overviewsubDescription')) ? t.raw('overviewsubDescription') : [],
    overviewImage: overviewImg.src,
    contentBlocks: (t.raw('contentBlocks') as any[]).map((block: any, index: number) => ({
      title: block.title,
      paragraphs: block.paragraphs,
      image1: bannerImg.src,
      reverse: true
    })),
    featuresTitle: t('featuresTitle'),
    featuresSubtitle: t('featuresSubtitle'),
    features: Array.isArray(t.raw('features')) ? t.raw('features') : [],
    applicationsTitle: t('applicationsTitle'),
    applicationsSubtitle: t('applicationsSubtitle'),
    applications: Array.isArray(t.raw('applications')) ? t.raw('applications') : [],
    whyChoose: {
      title: t('whyChoose.title'),
      description: t.has('whyChoose.description') ? t('whyChoose.description') : "",
      paragraphs: t.has('whyChoose.paragraphs') ? t.raw('whyChoose.paragraphs') : undefined,
      reasons: t.has('whyChoose.reasons') ? t.raw('whyChoose.reasons') : undefined,
      image: overviewImg.src
    },
    methodology: {
      title: t('methodology.title'),
      subtitle: t('methodology.subtitle') || "",
      steps: (t.raw('methodology.steps') as any[]).map((step: any, index: number) => ({
        title: step.title,
        description: step.description,
        image: [overviewImg.src, bannerImg.src, overviewImg.src, bannerImg.src, overviewImg.src][index] || overviewImg.src
      })),
      outro: t.raw('methodology.outro') ? (Array.isArray(t.raw('methodology.outro')) ? t.raw('methodology.outro') : [t('methodology.outro')]) : undefined
    },
    faqTitle: t('faqTitle'),
    faqs: t.raw('faqs'),
    trending_articles: relatedBlogs?.length > 0 ? relatedBlogs : undefined
  };

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <div dir={locale === 'ar' ? 'rtl' : 'ltr'}>
        <PackagingPageLayout data={pageData} locale={locale} />
      </div>
    </NextIntlClientProvider>
  );
}
