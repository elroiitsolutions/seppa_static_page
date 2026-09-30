import React from 'react';
import { getTranslations, getMessages, setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { routing } from '@/i18n/routing';
import { getRelatedBlogs } from '@/lib/strapi/client';
import PackagingPageLayout, { PackagingPageData } from '@/components/packaging/PackagingPageLayout';

import top from '@/assets/packaging/gable/gabletop1.jpg';
import machine from '@/assets/packaging/brick/machine.jpg';
import packag from '@/assets/packaging/brick/package.webp';
import orange from '@/assets/packaging/brick/orange.jpg';
import pouchPackage from '@/assets/packaging/pouch/pouch-package.jpg';
import brickCarton from '@/assets/packaging/gable/gabletop.jpg';
import brickBanner from '@/assets/packaging/brick/brick-banner.png';
import execute from '@/assets/packaging/can/execute.webp';
import install from '@/assets/packaging/can/install.webp';
import training from '@/assets/packaging/can/training.webp';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function GableTopCartonPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'gable' });
  const messages = await getMessages({ locale });

  // Fetch blogs related to this page automatically
  const relatedBlogs = await getRelatedBlogs('/gable-top-carton', locale);

  const pageData: PackagingPageData = {
    title: t('title'),
    breadcrumbName: t('breadcrumbName'),
    headerImage: brickBanner.src,
    overviewTitle: t('overviewTitle'),
    overviewDescription: t('overviewDescription'),
    overviewsubDescription: Array.isArray(t.raw('overviewsubDescription')) ? t.raw('overviewsubDescription') : [],
    overviewImage: top.src,
    contentBlocks: (t.raw('contentBlocks') as any[]).map((block: any, index: number) => ({
        title: block.title,
        paragraphs: block.paragraphs,
        image1: [brickCarton.src, machine.src, pouchPackage.src][index] || brickCarton.src,
        reverse: [false, true, false][index] || false,
        bgClass: [undefined, "bg-white", undefined][index]
      })),
    applicationsTitle: t('applicationsTitle'),
    applicationsSubtitle: t('applicationsSubtitle'),
    applications: Array.isArray(t.raw('applications')) ? t.raw('applications') : [],
    featuresTitle: t('featuresTitle'),
    featuresSubtitle: t('featuresSubtitle'),
    features: Array.isArray(t.raw('features')) ? t.raw('features') : [],
    whyChoose: {
      title: t('whyChoose.title'),
      description: t('whyChoose.description'),
      reasons: t.raw('whyChoose.reasons'),
      paragraphs: t.has('whyChoose.paragraphs') ? t.raw('whyChoose.paragraphs') : undefined,
      image: orange.src
    },
    methodology: {
      title: t('methodology.title'),
      subtitle: t('methodology.subtitle') || "",
      steps: (t.raw('methodology.steps') as any[]).map((step: any, index: number) => ({
        title: step.title,
        description: step.description,
        image: [execute.src, install.src, training.src][index] || execute.src
      })),
      outro: Array.isArray(t.raw('methodology.outro')) 
        ? t.raw('methodology.outro') 
        : (t.raw('methodology.outro') ? [t.raw('methodology.outro')] : [])
    },
    faqTitle: t('faqTitle'),
    faqs: t.raw('faqs')
  };

    pageData.trending_articles = relatedBlogs?.length > 0 ? relatedBlogs : undefined;

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <div dir={locale === 'ar' ? 'rtl' : 'ltr'}>
        <PackagingPageLayout data={pageData} locale={locale} />
      </div>
    </NextIntlClientProvider>
  );
}
