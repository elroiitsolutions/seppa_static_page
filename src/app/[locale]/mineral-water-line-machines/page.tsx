import React from 'react';
import { getTranslations, getMessages, setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { routing } from '@/i18n/routing';
import { getRelatedBlogs } from '@/lib/strapi/client';
import PackagingPageLayout, { PackagingPageData } from '@/components/packaging/PackagingPageLayout';

import overview from '@/assets/packaging/generated/mineral_overview.png';
import execute from '@/assets/packaging/generated/mineral_m1.png';
import install from '@/assets/packaging/generated/mineral_m2.png';
import commissing from '@/assets/packaging/can/commissing.jpeg';
import training from '@/assets/packaging/can/training.webp';
import bannerImg from '@/assets/packaging/generated/mineral_banner.png';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function MineralWaterLinePage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'mineral' });
  const messages = await getMessages({ locale });

  // Fetch blogs related to this page automatically
  const relatedBlogs = await getRelatedBlogs('/mineral-water-line-machines', locale);

  const pageData: PackagingPageData = {
    title: t('title'),
    breadcrumbName: t('breadcrumbName'),
    rootBreadcrumbName: t('rootBreadcrumbName'),
    rootBreadcrumbPath: t('rootBreadcrumbPath'),
    headerImage: bannerImg.src,
    overviewTitle: t('overviewTitle'),
    overviewDescription: t('overviewDescription'),
    overviewsubDescription: Array.isArray(t.raw('overviewsubDescription')) ? t.raw('overviewsubDescription') : [],
    overviewLayout: "stacked",
    overviewImage: overview.src,
    contentBlocks: (t.raw('contentBlocks') as any[]).map((block: any, index: number) => ({
        title: block.title,
        paragraphs: block.paragraphs,
        image1: [overview.src, execute.src][index] || overview.src,
        reverse: [false, true][index] || false,
        bgClass: [undefined, "bg-white"][index]
      })),
    applicationsTitle: t('applicationsTitle'),
    applicationsSubtitle: t('applicationsSubtitle'),
    applications: Array.isArray(t.raw('applications')) ? t.raw('applications') : [],
    featuresTitle: t('featuresTitle'),
    featuresSubtitle: t('featuresSubtitle'),
    features: Array.isArray(t.raw('features')) ? t.raw('features') : [],
    methodology: {
      title: t('methodology.title'),
      steps: (t.raw('methodology.steps') as any[]).map((step: any, index: number) => ({
        title: step.title,
        description: step.description,
        image: [execute.src, install.src, commissing.src, training.src][index] || execute.src
      }))
    },
    whyChoose: {
      title: t('whyChoose.title'),
      description: t.has('whyChoose.description') ? t('whyChoose.description') : undefined,
      paragraphs: t.has('whyChoose.paragraphs') ? t.raw('whyChoose.paragraphs') : undefined,
      reasons: t.has('whyChoose.reasons') ? t.raw('whyChoose.reasons') : undefined,
      image: install.src
    },
    faqTitle: t('faqTitle'),
    faqs: Array.isArray(t.raw('faqs')) ? t.raw('faqs') : [],
    hideWhyChoose: false
  };

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <div dir={locale === 'ar' ? 'rtl' : 'ltr'}>
        <PackagingPageLayout data={pageData} locale={locale} />
      </div>
    </NextIntlClientProvider>
  );
}
