import React from 'react';
import { getTranslations, getMessages, setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { routing } from '@/i18n/routing';
import { getRelatedBlogs } from '@/lib/strapi/client';
import PackagingPageLayout, { PackagingPageData } from '@/components/packaging/PackagingPageLayout';

import imgA from '@/assets/packaging/generated/mineral_m1.png';
import imgB from '@/assets/packaging/generated/mineral_m2.png';
import imgC from '@/assets/packaging/generated/mineral_m3.png';
import imgD from '@/assets/packaging/generated/juice_processing_wide_1781701462502.png';
import imgE from '@/assets/packaging/generated/juice_bottling_closeup_1781701475686.png';
import imgF from '@/assets/packaging/generated/dairy_banner.png';
import imgG from '@/assets/packaging/generated/dairy_overview.png';
import imgH from '@/assets/packaging/generated/aseptic_drum_filler_1781701596612.png';
import imgI from '@/assets/packaging/generated/softdrink_whychoose.png';
import bannerImg from '@/assets/packaging/generated/banner_semi_automatic_pet.png';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function SemiAutomaticPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'semi' });
  const messages = await getMessages({ locale });

  // Fetch blogs related to this page automatically
  const relatedBlogs = await getRelatedBlogs('/semi-automatic', locale);

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
        image1: [imgB.src, imgC.src][index] || imgB.src,
        reverse: [true, false][index] || false,
        bgClass: [undefined, "bg-white"][index]
      })),
    featuresTitle: t('featuresTitle'),
    featuresSubtitle: t('featuresSubtitle'),
    features: Array.isArray(t.raw('features')) ? t.raw('features') : [],
    applicationsTitle: t('applicationsTitle'),
    applications: Array.isArray(t.raw('applications')) ? t.raw('applications') : [],
    methodology: {
      title: t('methodology.title'),
      subtitle: t('methodology.subtitle') || "",
      steps: (t.raw('methodology.steps') as any[]).map((step: any, index: number) => ({
        title: step.title,
        description: step.description,
        image: [imgE.src, imgF.src, imgG.src, imgH.src, imgI.src][index] || imgE.src
      }))
    },
    faqTitle: t('faqTitle'),
    faqSubtitle: t('faqSubtitle') || "",
    faqs: Array.isArray(t.raw('faqs')) ? t.raw('faqs') : [],
    whyChoose: {
      title: t('whyChoose.title'),
      description: t.has('whyChoose.description') ? t('whyChoose.description') : undefined,
      paragraphs: Array.isArray(t.raw('whyChoose.paragraphs')) ? t.raw('whyChoose.paragraphs') : [],
      image: imgD.src
    }
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
