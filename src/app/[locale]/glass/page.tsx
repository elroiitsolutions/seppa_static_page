import React from 'react';
import { getTranslations, getMessages, setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { routing } from '@/i18n/routing';
import { getRelatedBlogs } from '@/lib/strapi/client';
import PackagingPageLayout, { PackagingPageData } from '@/components/packaging/PackagingPageLayout';

import top from '@/assets/packaging/generated/glass_bottles_closeup_1781701419649.png';
import machine from '@/assets/packaging/generated/modern_beverage_factory_1781701623841.png';
import packag from '@/assets/packaging/generated/wine_bottles_closeup_1781701540385.png';
import brickCarton from '@/assets/packaging/generated/beer_bottling_closeup_1781701513819.png';
import brickAvif from '@/assets/packaging/generated/premium_spirits_closeup_1781701569217.png';
import fillingImg from '@/assets/packaging/generated/glass_bottling_wide_1781701406159.png';
import pouchMachine from '@/assets/packaging/generated/spirits_distillery_wide_1781701553769.png';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function GlassPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'glass' });
  const messages = await getMessages({ locale });

  // Fetch blogs related to this page automatically
  const relatedBlogs = await getRelatedBlogs('/glass', locale);

  const pageData: PackagingPageData = {
    title: t('title'),
    breadcrumbName: t('breadcrumbName'),
    headerImage: fillingImg.src,
    overviewTitle: t('overviewTitle'),
    overviewDescription: t('overviewDescription'),
    overviewsubDescription: Array.isArray(t.raw('overviewsubDescription')) ? t.raw('overviewsubDescription') : [],
    overviewImage: top.src,
    contentBlocks: (t.raw('contentBlocks') as any[]).map((block: any, index: number) => ({
        title: block.title,
        paragraphs: block.paragraphs,
        image1: [brickCarton.src, packag.src, machine.src, brickAvif.src, fillingImg.src, pouchMachine.src][index] || brickCarton.src,
        reverse: [false, true, false, true, false, true][index] || false,
        bgClass: [undefined, "bg-white", undefined, "bg-white", undefined, "bg-white"][index]
      })),
    featuresTitle: t('featuresTitle'),
    featuresSubtitle: t('featuresSubtitle'),
    features: Array.isArray(t.raw('features')) ? t.raw('features') : [],
    faqTitle: t('faqTitle'),
    faqs: Array.isArray(t.raw('faqs')) ? t.raw('faqs') : [],
    hideWhyChoose: true,
    cta: {
      title: t('cta.title'),
      description: t('cta.description'),
      buttonText: t('cta.buttonText'),
      buttonLink: '/contact-us'
    }
  };

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <div dir={locale === 'ar' ? 'rtl' : 'ltr'}>
        <PackagingPageLayout data={pageData} locale={locale} />
      </div>
    </NextIntlClientProvider>
  );
}
