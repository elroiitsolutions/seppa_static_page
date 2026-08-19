import React from 'react';
import { getTranslations, getMessages, setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { routing } from '@/i18n/routing';
import { getRelatedBlogs } from '@/lib/strapi/client';
import PackagingPageLayout, { PackagingPageData } from '@/components/packaging/PackagingPageLayout';

import img2 from '@/assets/packaging/can/Can-Filling-Packaging-Line.webp';
import img1 from '@/assets/packaging/brick/brick-carton.jpg';
import orange from '@/assets/packaging/brick/orange.jpg';
import packag from '@/assets/packaging/brick/package.webp';
import machine from '@/assets/packaging/brick/machine.jpg';
import modernFactory from '@/assets/packaging/generated/modern_beverage_factory_1781701623841.png';
import steelTanks from '@/assets/packaging/generated/stainless_steel_tanks_1781701637471.png';
import m1 from '@/assets/packaging/generated/methodology_1.png';
import m2 from '@/assets/packaging/generated/methodology_2.png';
import m3 from '@/assets/packaging/generated/methodology_3.png';
import m4 from '@/assets/packaging/generated/methodology_4.png';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function BrickCartonPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'brick' });
  const messages = await getMessages({ locale });

  // Fetch blogs related to this page automatically
  const relatedBlogs = await getRelatedBlogs('/brick-carton', locale);

  const blockImages = [img1.src, modernFactory.src, steelTanks.src, packag.src];
  const stepImages = [m1.src, m2.src, m3.src, m4.src];

  const pageData: PackagingPageData = {
    title: t('title'),
    breadcrumbName: t('breadcrumbName'),
    headerImage: orange.src,
    overviewLayout: "stacked",
    overviewTitle: t('overviewTitle'),
    overviewDescription: React.createElement('span', { className: 'text-seppa-red font-bold' }, t('overviewDescription')),
    overviewsubDescription: Array.isArray(t.raw('overviewsubDescription')) ? t.raw('overviewsubDescription') : [],
    overviewImage: machine.src,
    contentBlocks: (t.raw('contentBlocks') as any[]).map((block: any, index: number) => ({
      title: block.title,
      paragraphs: block.paragraphs,
      image1: blockImages[index % blockImages.length],
      reverse: index % 2 === 1,
      bgClass: index % 2 === 1 ? 'bg-gray-50' : undefined
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
      steps: (t.raw('methodology.steps') as any[]).map((step: any, index: number) => ({
        title: step.title,
        description: step.description,
        image: stepImages[index % stepImages.length]
      }))
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
