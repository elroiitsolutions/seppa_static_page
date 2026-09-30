import React from 'react';
import { getTranslations, getMessages, setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { routing } from '@/i18n/routing';
import { getRelatedBlogs } from '@/lib/strapi/client';
import PackagingPageLayout, { PackagingPageData } from '@/components/packaging/PackagingPageLayout';

import top from '@/assets/packaging/generated/aseptic_drum_closeup_1781701609871.png';
import machine from '@/assets/packaging/generated/modern_beverage_factory_1781701623841.png';
import packag from '@/assets/packaging/generated/stainless_steel_tanks_1781701637471.png';
import brickCarton from '@/assets/packaging/generated/csd_filler_wide_1781701435025.png';
import brickAvif from '@/assets/packaging/generated/juice_processing_wide_1781701462502.png';
import drumBanner from '@/assets/packaging/generated/aseptic_drum_filler_1781701596612.png';
import meth1 from '@/assets/packaging/generated/spirits_distillery_wide_1781701553769.png';
import meth2 from '@/assets/packaging/generated/wine_production_wide_1781701527332.png';
import meth3 from '@/assets/packaging/generated/brewery_line_wide_1781701502517.png';
import meth4 from '@/assets/packaging/generated/csd_bottles_closeup_1781701449618.png';
import meth5 from '@/assets/packaging/generated/glass_bottling_wide_1781701406159.png';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function AsepticDrumPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'drum' });
  const messages = await getMessages({ locale });

  // Fetch blogs related to this page automatically
  const relatedBlogs = await getRelatedBlogs('/aseptic-drum', locale);

  const pageData: PackagingPageData = {
    title: t('title'),
    breadcrumbName: t('breadcrumbName'),
    headerImage: drumBanner.src,
    overviewTitle: t('overviewTitle'),
    overviewLayout: "stacked",
    overviewDescription: t('overviewDescription'),
    overviewsubDescription: Array.isArray(t.raw('overviewsubDescription')) ? t.raw('overviewsubDescription') : [],
    overviewImage: top.src,
    contentBlocks: (t.raw('contentBlocks') as any[]).map((block: any, index: number) => ({
        title: block.title,
        paragraphs: block.paragraphs,
        image1: [brickCarton.src, packag.src, machine.src][index] || brickCarton.src,
        reverse: [false, true, false][index] || false,
        bgClass: [undefined, "bg-white", "bg-white"][index]
      })),
    featuresTitle: t('featuresTitle'),
    featuresSubtitle: t('featuresSubtitle'),
    features: Array.isArray(t.raw('features')) ? t.raw('features') : [],
    methodology: {
      title: t('methodology.title'),
      subtitle: t('methodology.subtitle'),
      steps: (t.raw('methodology.steps') as any[]).map((step: any, index: number) => ({
        title: step.title,
        description: step.description,
        image: [meth1.src, meth2.src, meth3.src, meth4.src, meth5.src][index] || meth1.src
      }))
    },
    whyChoose: {
      title: t('whyChoose.title'),
      description: t.has('whyChoose.description') ? t('whyChoose.description') : undefined,
      paragraphs: t.has('whyChoose.paragraphs') ? t.raw('whyChoose.paragraphs') : undefined,
      reasons: t.has('whyChoose.reasons') ? t.raw('whyChoose.reasons') : undefined,
      image: brickAvif.src
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
