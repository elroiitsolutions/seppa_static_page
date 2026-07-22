import React from 'react';
import { getTranslations, getMessages, setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { routing } from '@/i18n/routing';
import PackagingPageLayout, { PackagingPageData } from '@/components/packaging/PackagingPageLayout';

import bannerImg from '@/assets/packaging/generated/mineral_banner_1781682222147.png';
import overviewImg from '@/assets/packaging/generated/mineral_overview_1781682238039.png';
import img1 from '@/assets/packaging/generated/mineral_m1_1781682252112.png';
import img2 from '@/assets/packaging/generated/csd_filler_wide_1781701435025.png';
import img3 from '@/assets/packaging/generated/mineral_m2_1781682264072.png';
import meth1 from '@/assets/packaging/generated/mineral_m3_1781682280126.png';
import meth2 from '@/assets/packaging/generated/mineral_overview_1781682238039.png';
import meth3 from '@/assets/packaging/generated/mineral_banner_1781682222147.png';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function LiquidPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'liquid' });
  const messages = await getMessages({ locale });

  const contentBlockImages = [img1.src, img2.src, img3.src];
  const rawContentBlocks = t.raw('contentBlocks') as any[];
  
  const contentBlocks = rawContentBlocks.map((block: any, index: number) => ({
    title: block.title,
    paragraphs: block.paragraphs,
    image1: contentBlockImages[index] || img1.src,
    reverse: index % 2 === 0,
    bgClass: index % 2 === 1 ? "bg-light" : "bg-white"
  }));

  const pageData: PackagingPageData = {
    title: t('title'),
    breadcrumbName: t('breadcrumbName'),
    rootBreadcrumbName: t('rootBreadcrumbName'),
    rootBreadcrumbPath: t('rootBreadcrumbPath'),
    headerImage: bannerImg.src,
    overviewTitle: t('overviewTitle'),
    overviewDescription: t.has('overviewDescription') ? t('overviewDescription') : "",
    overviewsubDescription: Array.isArray(t.raw('overviewsubDescription')) ? t.raw('overviewsubDescription') : [],
    overviewImage: overviewImg.src,
    contentBlocks,
    featuresTitle: t.has('featuresTitle') ? t('featuresTitle') : undefined,
    featuresSubtitle: t.has('featuresSubtitle') ? t('featuresSubtitle') : undefined,
    features: t.has('features') ? t.raw('features') : undefined,
    applicationsTitle: t.has('applicationsTitle') ? t('applicationsTitle') : undefined,
    applicationsSubtitle: t.has('applicationsSubtitle') ? t('applicationsSubtitle') : undefined,
    applications: t.has('applications') ? t.raw('applications') : undefined,
    whyChoose: {
      title: t('whyChoose.title'),
      description: t.has('whyChoose.description') ? t('whyChoose.description') : "",
      paragraphs: t.has('whyChoose.paragraphs') ? t.raw('whyChoose.paragraphs') : undefined,
      image: img1.src
    },
    methodology: {
      title: t('methodology.title'),
      steps: (t.raw('methodology.steps') as any[]).map((step: any, index: number) => ({
        title: step.title,
        description: step.description,
        image: [meth1.src, meth2.src, meth3.src][index] || meth1.src
      }))
    },
    faqTitle: t('faqTitle'),
    faqs: t.raw('faqs')
  };

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <div dir={locale === 'ar' ? 'rtl' : 'ltr'}>
        <PackagingPageLayout data={pageData} locale={locale} />
      </div>
    </NextIntlClientProvider>
  );
}
