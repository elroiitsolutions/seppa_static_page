import React from 'react';
import { getTranslations, getMessages, setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { routing } from '@/i18n/routing';
import { getRelatedBlogs } from '@/lib/strapi/client';
import PackagingPageLayout, { PackagingPageData } from '@/components/packaging/PackagingPageLayout';

import imgA from '@/assets/packaging/generated/csd_filler_wide_1781701435025.png';
import imgB from '@/assets/packaging/generated/csd_bottles_closeup_1781701449618.png';
import imgC from '@/assets/packaging/generated/modern_beverage_factory_1781701623841.png';
import imgD from '@/assets/packaging/generated/stainless_steel_tanks_1781701637471.png';
import imgE from '@/assets/packaging/generated/juice_processing_wide_1781701462502.png';
import imgF from '@/assets/packaging/generated/spirits_distillery_wide_1781701553769.png';
import imgG from '@/assets/packaging/generated/brewery_line_wide_1781701502517.png';
import imgH from '@/assets/packaging/generated/glass_bottling_wide_1781701406159.png';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function SoftDrinkLinesPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'softdrinkline' });
  const messages = await getMessages({ locale });

  // Fetch blogs related to this page automatically
  const relatedBlogs = await getRelatedBlogs('/soft-drink-lines', locale);

  const pageData: PackagingPageData = {
    title: t('title'),
    breadcrumbName: t('breadcrumbName'),
    rootBreadcrumbName: "Complete Lines",
    rootBreadcrumbPath: "/complete-lines",
    headerImage: imgA.src,
    overviewTitle: t('overviewTitle'),
    overviewDescription: t('overviewDescription'),
    overviewLayout: "stacked",
    overviewsubDescription: Array.isArray(t.raw('overviewsubDescription')) ? t.raw('overviewsubDescription') : [],
    overviewImage: imgB.src,
    overviewImage2: imgC.src,
    featuresTitle: t('featuresTitle'),
    featuresSubtitle: t('featuresSubtitle'),
    features: Array.isArray(t.raw('features')) ? t.raw('features') : [],
    contentBlocks: (t.raw('contentBlocks') as any[]).map((block: any, index: number) => ({
      title: block.title,
      paragraphs: block.paragraphs,
      image1: index === 0 ? imgD.src : imgE.src,
      reverse: index === 0,
      bgClass: index === 1 ? "bg-light" : undefined
    })),
    whyChoose: {
      title: t('whyChoose.title'),
      description: t('whyChoose.description'),
      reasons: t.raw('whyChoose.reasons'),
      image: imgB.src
    },
    methodology: {
      title: t('methodology.title'),
      subtitle: t('methodology.subtitle') || "",
      steps: (t.raw('methodology.steps') as any[]).map((step: any, index: number) => ({
        title: step.title,
        description: step.description,
        image: [imgF.src, imgG.src, imgH.src][index] || imgF.src
      })),
      outro: t.raw('methodology.outro') ? (Array.isArray(t.raw('methodology.outro')) ? t.raw('methodology.outro') : [t('methodology.outro')]) : undefined
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
