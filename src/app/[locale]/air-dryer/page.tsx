import React from 'react';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { routing } from '@/i18n/routing';
import { getRelatedBlogs } from '@/lib/strapi/client';
import PackagingPageLayout, { PackagingPageData } from '@/components/packaging/PackagingPageLayout';

import bannerImg from '@/assets/processing/generated/processing_banner_1781759101340.png';
import overviewImg from '@/assets/blowing/generated/blowing_overview_1781759662496.png';
import img1 from '@/assets/processing/generated/processing_cb1_1781759122683.png';
import img2 from '@/assets/processing/generated/processing_cb2_1781759136791.png';
import over from '@/assets/processing/generated/processing_whychoose_1781759182691.png';

import meth1 from '@/assets/processing/generated/processing_meth1_1781759196548.png';
import meth2 from '@/assets/processing/generated/processing_meth2_1781759215088.png';
import meth3 from '@/assets/processing/generated/processing_meth3_1781759228926.png';
import meth4 from '@/assets/processing/generated/processing_meth4_1781759240871.png';

interface Props {
  params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocalizedAirDryerPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  
  const t = await getTranslations({ locale, namespace: 'dryer' });
  const tEn = await getTranslations({ locale: 'en', namespace: 'dryer' });
  
  const getT = (key: string) => t(key);
  const getRaw = (key: string) => t.raw(key);

  const messages = await getMessages({ locale });

  // Fetch blogs related to this page automatically
  const relatedBlogs = await getRelatedBlogs('/air-dryer', locale);

  const pageData: PackagingPageData = {
    title: getT('title'),
    breadcrumbName: getT('breadcrumbName'),
    rootBreadcrumbName: getT('rootBreadcrumbName'),
    rootBreadcrumbPath: getT('rootBreadcrumbPath'),
    headerImage: bannerImg.src,
    overviewTitle: getT('overviewTitle'),
    overviewDescription: getT('overviewDescription'),
    overviewsubDescription: getRaw('overviewsubDescription'),
    overviewImage: overviewImg.src,
    contentBlocks: [
      {
        title: getT('contentBlocks.0.title'),
        paragraphs: getRaw('contentBlocks.0.paragraphs'),
        image1: img1.src,
        reverse: true
      },
      {
        title: getT('contentBlocks.1.title'),
        paragraphs: getRaw('contentBlocks.1.paragraphs'),
        image1: img2.src,
        reverse: false
      },
      {
        title: getT('contentBlocks.2.title'),
        paragraphs: getRaw('contentBlocks.2.paragraphs'),
        image1: img1.src,
        reverse: true
      },
      {
        title: getT('contentBlocks.3.title'),
        paragraphs: getRaw('contentBlocks.3.paragraphs'),
        image1: img2.src,
        reverse: false
      }
    ],
    applicationsTitle: getT('applicationsTitle'),
    applicationsSubtitle: getT('applicationsSubtitle'),
    applications: (getRaw('applications') as any[]).map((app: any) => ({
      title: app.title,
      description: app.description
    })),
    whyChoose: {
      title: getT('whyChoose.title'),
      description: getT('whyChoose.description'),
      paragraphs: getRaw('whyChoose.paragraphs'),
      image: over.src
    },
    methodology: {
      title: getT('methodology.title'),
      subtitle: getT('methodology.subtitle'),
      steps: (getRaw('methodology.steps') as any[]).map((step: any, index: number) => ({
        title: step.title,
        description: step.description,
        image: [meth1.src, meth2.src, meth3.src, meth4.src][index] || meth1.src
      })),
      outro: getRaw('methodology.outro') ? (Array.isArray(getRaw('methodology.outro')) ? getRaw('methodology.outro') : [getT('methodology.outro')]) : undefined
    },
    faqTitle: getT('faqTitle'),
    faqs: getRaw('faqs')
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
