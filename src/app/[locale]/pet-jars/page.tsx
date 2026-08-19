import React from 'react';
import { getTranslations, getMessages, setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { routing } from '@/i18n/routing';
import { getRelatedBlogs } from '@/lib/strapi/client';
import PackagingPageLayout, { PackagingPageData } from '@/components/packaging/PackagingPageLayout';

import bannerImg from '@/assets/pet/generated/pet_banner_1782103218408.png';
import overviewImg from '@/assets/pet/generated/pet_overview_1782103229961.png';
import img1 from '@/assets/pet/generated/pet_cb1_1782103242917.png';
import over from '@/assets/pet/generated/pet_whychoose_1782103256501.png';

import meth1 from '@/assets/pet/generated/pet_meth1_1782103277774.png';
import meth2 from '@/assets/pet/generated/pet_meth2_1782103291753.png';
import meth3 from '@/assets/pet/generated/pet_meth3_1782103305856.png';
import meth4 from '@/assets/pet/generated/pet_meth4_1782103318966.png';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function PetJarsPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'petjars' });
  const messages = await getMessages({ locale });

  // Fetch blogs related to this page automatically
  const relatedBlogs = await getRelatedBlogs('/pet-jars', locale);

  const pageData: PackagingPageData = {
    title: t('title'),
    breadcrumbName: t('breadcrumbName'),
    rootBreadcrumbName: t('rootBreadcrumbName'),
    rootBreadcrumbPath: t('rootBreadcrumbPath'),
    headerImage: bannerImg.src,
    overviewTitle: t('overviewTitle'),
    overviewDescription: t('overviewDescription'),
    overviewsubDescription: Array.isArray(t.raw('overviewsubDescription')) ? t.raw('overviewsubDescription') : [],
    overviewImage: overviewImg.src,
    contentBlocks: (t.raw('contentBlocks') as any[]).map((block: any) => ({
      title: block.title,
      paragraphs: block.paragraphs,
      image1: img1.src,
      reverse: true
    })),
    featuresTitle: t('featuresTitle'),
    featuresSubtitle: t('featuresSubtitle'),
    features: Array.isArray(t.raw('features')) ? t.raw('features') : [],
    applicationsTitle: t('applicationsTitle'),
    applicationsSubtitle: t('applicationsSubtitle'),
    applications: Array.isArray(t.raw('applications')) ? t.raw('applications') : [],
    whyChoose: {
      title: t('whyChoose.title'),
      description: t('whyChoose.description'),
      paragraphs: Array.isArray(t.raw('whyChoose.paragraphs')) ? t.raw('whyChoose.paragraphs') : [],
      image: over.src
    },
    methodology: {
      title: t('methodology.title'),
      steps: (t.raw('methodology.steps') as any[]).map((step: any, index: number) => ({
        title: step.title,
        description: step.description,
        image: [meth1.src, meth2.src, meth3.src, meth4.src][index] || meth1.src
      })),
      outro: Array.isArray(t.raw('methodology.outro')) 
        ? t.raw('methodology.outro') 
        : (t.raw('methodology.outro') ? [t.raw('methodology.outro')] : [])
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
