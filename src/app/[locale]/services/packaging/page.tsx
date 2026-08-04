import React from 'react';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { routing } from '@/i18n/routing';
import { getRelatedBlogs } from '@/lib/strapi/client';
import PackagingPageLayout, { PackagingPageData } from '@/components/packaging/PackagingPageLayout';

import bannerImg from '@/assets/packaging/generated/modern_beverage_factory_1781701623841.png';
import overviewImg from '@/assets/packaging/can/overview.jpg';
import img1 from '@/assets/packaging/can/Can-Filling-Packaging-Line.webp';
import img2 from '@/assets/packaging/can/filling.png';
import over from '@/assets/packaging/can/gtl-packaging-filling-line-scheme.webp';

import meth1 from '@/assets/packaging/can/commissing.jpeg';
import meth2 from '@/assets/packaging/can/install.webp';
import meth3 from '@/assets/packaging/can/training.webp';
import meth4 from '@/assets/packaging/can/overview.jpg';

interface Props {
  params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocalizedServicePackagingPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  
  const t = await getTranslations({ locale, namespace: 'servicepackaging' });
  const tEn = await getTranslations({ locale: 'en', namespace: 'servicepackaging' });
  
  const getT = (key: string) => t(key);
  const getRaw = (key: string) => t.raw(key);

  const messages = await getMessages({ locale });

  // Fetch blogs related to this page automatically
  const relatedBlogs = await getRelatedBlogs('/services/packaging', locale);

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
        reverse: false,
        bgClass: "bg-light"
      },
      {
        title: getT('contentBlocks.2.title'),
        paragraphs: getRaw('contentBlocks.2.paragraphs'),
        image1: img1.src,
        reverse: true
      }
    ],
    featuresTitle: getT('featuresTitle'),
    featuresSubtitle: getT('featuresSubtitle'),
    features: (getRaw('features') as any[]).map((feat: any) => ({
      title: feat.title,
      description: feat.description
    })),
    whyChoose: {
      title: getT('whyChoose.title'),
      description: getT('whyChoose.description') || "",
      paragraphs: getRaw('whyChoose.paragraphs'),
      image: over.src
    },
    methodology: {
      title: getT('methodology.title'),
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
