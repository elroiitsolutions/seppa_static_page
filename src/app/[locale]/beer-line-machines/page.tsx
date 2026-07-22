import React from 'react';
import { getTranslations, getMessages, setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { routing } from '@/i18n/routing';
import PackagingPageLayout, { PackagingPageData } from '@/components/packaging/PackagingPageLayout';

import imgA from '@/assets/packaging/generated/brewery_line_wide_1781701502517.png';
import imgB from '@/assets/packaging/generated/beer_bottling_closeup_1781701513819.png';
import imgC from '@/assets/packaging/generated/modern_beverage_factory_1781701623841.png';
import imgD from '@/assets/packaging/generated/stainless_steel_tanks_1781701637471.png';
import imgE from '@/assets/packaging/generated/spirits_distillery_wide_1781701553769.png';
import imgF from '@/assets/packaging/generated/wine_production_wide_1781701527332.png';
import imgG from '@/assets/packaging/generated/csd_filler_wide_1781701435025.png';
import imgH from '@/assets/packaging/generated/glass_bottling_wide_1781701406159.png';
import meth4 from '@/assets/packaging/can/training.webp';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function BeerLineMachinesPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'beer' });
  const messages = await getMessages({ locale });

  const pageData: PackagingPageData = {
    title: t('title'),
    breadcrumbName: t('breadcrumbName'),
    rootBreadcrumbName: t('rootBreadcrumbName'),
    rootBreadcrumbPath: t('rootBreadcrumbPath'),
    headerImage: imgA.src,
    overviewTitle: t('overviewTitle'),
    overviewDescription: t('overviewDescription'),
    overviewsubDescription: Array.isArray(t.raw('overviewsubDescription')) ? t.raw('overviewsubDescription') : [],
    overviewImage: imgB.src,
    featuresTitle: t('featuresTitle'),
    featuresSubtitle: t('featuresSubtitle'),
    features: Array.isArray(t.raw('features')) ? t.raw('features') : [],
    contentBlocks: (t.raw('contentBlocks') as any[]).map((block: any, index: number) => ({
        title: block.title,
        paragraphs: block.paragraphs,
        image1: [imgC.src, imgD.src][index] || imgC.src,
        reverse: [true, false][index] || false,
        bgClass: [undefined, "bg-light"][index]
      })),
    whyChoose: {
      title: t('whyChoose.title'),
      paragraphs: Array.isArray(t.raw('whyChoose.paragraphs')) ? t.raw('whyChoose.paragraphs') : [],
      image: imgB.src
    },
    methodology: {
      title: t('methodology.title'),
      steps: (t.raw('methodology.steps') as any[]).map((step: any, index: number) => ({
        title: step.title,
        description: step.description,
        image: [imgE.src, imgF.src, imgG.src, imgH.src, meth4.src][index] || imgE.src
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
