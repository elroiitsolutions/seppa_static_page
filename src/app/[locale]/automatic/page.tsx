import React from 'react';
import { getTranslations, getMessages, setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { routing } from '@/i18n/routing';
import { getRelatedBlogs } from '@/lib/strapi/client';
import PackagingPageLayout, { PackagingPageData } from '@/components/packaging/PackagingPageLayout';

import imgA from '@/assets/packaging/generated/modern_beverage_factory_1781701623841.png';
import imgB from '@/assets/packaging/generated/stainless_steel_tanks_1781701637471.png';
import imgD from '@/assets/packaging/generated/csd_bottles_closeup_1781701449618.png';
import imgE from '@/assets/packaging/generated/softdrink_banner.png';
import imgF from '@/assets/packaging/generated/softdrink_overview.png';
import imgG from '@/assets/packaging/generated/mineral_banner.png';
import imgH from '@/assets/packaging/generated/mineral_overview.png';
import imgI from '@/assets/packaging/generated/softdrink_execute.png';
import bannerImg from '@/assets/packaging/generated/banner_automatic_pet.png';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function AutomaticPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'automatic' });
  const messages = await getMessages({ locale });

  // Fetch blogs related to this page automatically
  const relatedBlogs = await getRelatedBlogs('/automatic', locale);

  const pageData: PackagingPageData = {
    title: t('title'),
    breadcrumbName: t('breadcrumbName'),
    headerImage: bannerImg.src,
    overviewTitle: t('overviewTitle'),
    overviewDescription: t('overviewDescription'),
    overviewsubDescription: Array.isArray(t.raw('overviewsubDescription')) ? t.raw('overviewsubDescription') : [],
    overviewImage: imgA.src,
    contentBlocks: (t.raw('contentBlocks') as any[]).map((block: any, index: number) => ({
        title: block.title,
        paragraphs: block.paragraphs,
        image1: [imgB.src, imgD.src][index] || imgB.src,
        reverse: [true, false][index] || false,
        bgClass: [undefined, "bg-light"][index]
      })),
    featuresTitle: t('featuresTitle'),
    featuresSubtitle: t('featuresSubtitle'),
    features: Array.isArray(t.raw('features')) ? t.raw('features') : [],
    applicationsTitle: t('applicationsTitle'),
    applications: Array.isArray(t.raw('applications')) ? t.raw('applications') : [],
    methodology: {
      title: t('methodology.title'),
      steps: (t.raw('methodology.steps') as any[]).map((step: any, index: number) => ({
        title: step.title,
        description: step.description,
        image: [imgF.src, imgG.src, imgH.src, imgI.src][index] || imgF.src
      }))
    },
    faqTitle: t('faqTitle'),
    faqs: Array.isArray(t.raw('faqs')) ? t.raw('faqs') : [],
    hideWhyChoose: false,
    whyChoose: {
      title: t('whyChoose.title'),
      description: t.has('whyChoose.description') ? t('whyChoose.description') : undefined,
      paragraphs: Array.isArray(t.raw('whyChoose.paragraphs')) ? t.raw('whyChoose.paragraphs') : [],
      image: imgE.src
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
