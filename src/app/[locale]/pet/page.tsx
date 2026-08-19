import React from 'react';
import { getTranslations, getMessages, setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { routing } from '@/i18n/routing';
import PackagingPageLayout, { PackagingPageData } from '@/components/packaging/PackagingPageLayout';

import bannerImg from '@/assets/packaging/generated/banner_pet_manufacturing.png';
import overviewImg from '@/assets/packaging/generated/overview_pet.png';
import whyChooseImg from '@/assets/packaging/generated/why_choose_pet.png';
import meth1Img from '@/assets/packaging/generated/methodology_1.png';
import meth2Img from '@/assets/packaging/generated/methodology_2.png';
import meth3Img from '@/assets/packaging/generated/methodology_3.png';
import meth4Img from '@/assets/packaging/generated/methodology_4.png';
import meth5Img from '@/assets/packaging/generated/methodology_5.png';

import { getRelatedBlogs } from '@/lib/strapi/client';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function PetPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'pet' });
  const messages = await getMessages({ locale });

  // Fetch blogs related to PET automatically
  const relatedBlogs = await getRelatedBlogs('/pet', locale);

  const pageData: PackagingPageData = {
    title: t('title'),
    breadcrumbName: t('breadcrumbName'),
    headerImage: bannerImg.src,
    overviewTitle: t('overviewTitle'),
    overviewDescription: t('overviewDescription'),
    overviewsubDescription: Array.isArray(t.raw('overviewsubDescription')) ? t.raw('overviewsubDescription') : [],
    overviewBenefits: t.raw('overviewBenefits'),
    overviewImage: overviewImg.src,
    applicationsTitle: t('applicationsTitle'),
    applicationsSubtitle: t('applicationsSubtitle'),
    applications: Array.isArray(t.raw('applications')) ? t.raw('applications') : [],
    featuresTitle: t('featuresTitle'),
    featuresSubtitle: t('featuresSubtitle'),
    features: Array.isArray(t.raw('features')) ? t.raw('features') : [],
    methodology: {
      badge: t('methodology.badge') || "Process",
      title: t('methodology.title'),
      subtitle: t('methodology.subtitle'),
      steps: (t.raw('methodology.steps') as any[]).map((step: any, index: number) => ({
        title: step.title,
        description: step.description,
        image: [meth1Img.src, meth2Img.src, meth3Img.src, meth4Img.src, meth5Img.src][index] || meth1Img.src
      })),
      outro: Array.isArray(t.raw('methodology.outro')) 
        ? t.raw('methodology.outro') 
        : (t.raw('methodology.outro') ? [t.raw('methodology.outro')] : [])
    },
    whyChoose: {
      title: t('whyChoose.title'),
      description: t('whyChoose.description'),
      paragraphs: Array.isArray(t.raw('whyChoose.paragraphs')) ? t.raw('whyChoose.paragraphs') : [],
      reasons: t.raw('whyChoose.reasons'),
      image: whyChooseImg.src
    },
    faqTitle: t('faqTitle'),
    faqs: t.raw('faqs'),
    trending_articles: relatedBlogs
  };

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <div dir={locale === 'ar' ? 'rtl' : 'ltr'}>
        <PackagingPageLayout data={pageData} locale={locale} />
      </div>
    </NextIntlClientProvider>
  );
}
