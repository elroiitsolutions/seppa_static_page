import React from 'react';
import { getTranslations, getMessages, setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { routing } from '@/i18n/routing';
import { getRelatedBlogs } from '@/lib/strapi/client';
import PackagingPageLayout, { PackagingPageData } from '@/components/packaging/PackagingPageLayout';

import bannerImg from '@/assets/blowing/generated/blowing_banner_1781759651271.png';
import overviewImg from '@/assets/blowing/generated/blowing_overview_1781759662496.png';
import img1 from '@/assets/blowing/generated/blowing_cb1_1781759674231.png';
import img2 from '@/assets/blowing/generated/blowing_cb2_1781759687509.png';
import over from '@/assets/blowing/generated/blowing_whychoose_1781759720818.png';

import meth1 from '@/assets/processing/generated/processing_meth1_1781759196548.png';
import meth2 from '@/assets/processing/generated/processing_meth2_1781759215088.png';
import meth3 from '@/assets/processing/generated/processing_meth3_1781759228926.png';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function SsbSl20Page({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'ssbsl20' });
  const messages = await getMessages({ locale });

  // Fetch blogs related to this page automatically
  const relatedBlogs = await getRelatedBlogs('/blowing/pneumatic/ssb-sl-20', locale);

  const pageData: PackagingPageData = {
    title: t('title'),
    breadcrumbName: t('breadcrumbName'),
    rootBreadcrumbName: t('rootBreadcrumbName'),
    rootBreadcrumbPath: t('rootBreadcrumbPath'),
    headerImage: bannerImg.src,
    overviewTitle: t('overviewTitle'),
    overviewDescription: t('overviewDescription'),
    overviewsubDescription: Array.isArray(t.raw('overviewsubDescription')) ? t.raw('overviewsubDescription') : [],
    overviewImage: overviewImg.src,
    contentBlocks: t.has('contentBlocks') && Array.isArray(t.raw('contentBlocks')) ? (t.raw('contentBlocks') as any[]).map((block: any, index: number) => ({
      title: block.title,
      paragraphs: block.paragraphs,
      image1: [img1.src, img2.src][index] || undefined,
      reverse: [true, false][index] || false,
      bgClass: [undefined, "bg-light"][index] || undefined
    })) : undefined,
    featuresTitle: t.has('featuresTitle') ? t('featuresTitle') : undefined,
    features: t.has('features') && Array.isArray(t.raw('features')) ? t.raw('features') : [],
    applicationsTitle: t('applicationsTitle'),
    applicationsSubtitle: t.has('applicationsSubtitle') ? t('applicationsSubtitle') : undefined,
    applications: Array.isArray(t.raw('applications')) ? t.raw('applications') : [],
    whyChoose: {
      title: t('whyChoose.title'),
      description: t.has('whyChoose.description') ? t('whyChoose.description') : undefined,
      paragraphs: Array.isArray(t.raw('whyChoose.paragraphs')) ? t.raw('whyChoose.paragraphs') : [],
      image: over.src
    },
    methodology: {
      title: t('methodology.title'),
      subtitle: t.has('methodology.subtitle') ? t('methodology.subtitle') : undefined,
      steps: (t.raw('methodology.steps') as any[] || []).map((step: any, index: number) => ({
        title: step.title,
        description: step.description,
        image: [meth1.src, meth2.src, meth3.src][index] || meth1.src
      })),
      outro: t.has('methodology.outro') ? (Array.isArray(t.raw('methodology.outro')) ? t.raw('methodology.outro') : []) : undefined
    },
    faqTitle: t('faqTitle'),
    faqs: Array.isArray(t.raw('faqs')) ? t.raw('faqs') : []
  };

    pageData.trending_articles = relatedBlogs?.length > 0 ? relatedBlogs : undefined;

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <PackagingPageLayout data={pageData} locale={locale} />
    </NextIntlClientProvider>
  );
}
