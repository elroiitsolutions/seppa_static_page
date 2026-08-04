import React from 'react';
import { getTranslations, getMessages, setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { routing } from '@/i18n/routing';
import { getRelatedBlogs } from '@/lib/strapi/client';
import PackagingPageLayout, { PackagingPageData } from '@/components/packaging/PackagingPageLayout';

import img2 from '@/assets/packaging/can/Can-Filling-Packaging-Line.webp';
import img1 from '@/assets/packaging/can/gtl-packaging-filling-line-scheme.webp';
import overview from '@/assets/packaging/can/overview.jpg';
import filling from '@/assets/packaging/can/filling.png';
import still from '@/assets/packaging/can/still.webp';
import execute from '@/assets/packaging/can/execute.webp';
import install from '@/assets/packaging/can/install.webp';
import commissing from '@/assets/packaging/can/commissing.jpeg';
import training from '@/assets/packaging/can/training.webp';
import sales from '@/assets/packaging/can/sales.webp';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function CanPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'can' });
  const messages = await getMessages({ locale });


  // Fetch blogs related to this page automatically
  const relatedBlogs = await getRelatedBlogs('/can', locale);

  const pageData: PackagingPageData = {
    title: t('title'),
    breadcrumbName: t('breadcrumbName'),
    headerImage: overview.src,
    overviewTitle: t('overviewTitle'),
    overviewDescription: t('overviewDescription'),
    overviewBenefits: t.raw('overviewBenefits'),
    overviewsubDescription: Array.isArray(t.raw('overviewsubDescription')) ? t.raw('overviewsubDescription') : [],
    overviewImage: overview.src,
    contentBlocks: (t.raw('contentBlocks') as any[]).map((block: any, index: number) => ({
        title: block.title,
        paragraphs: block.paragraphs,
        image1: [img1.src][index] || img1.src,
        reverse: [false][index] || false,
        bgClass: [undefined][index]
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
      paragraphs: Array.isArray(t.raw('whyChoose.paragraphs')) ? t.raw('whyChoose.paragraphs') : [],
      image: filling.src
    },
    methodology: {
      title: t('methodology.title'),
      subtitle: t('methodology.subtitle'),
      steps: (t.raw('methodology.steps') as any[]).map((step: any, index: number) => ({
        title: step.title,
        description: step.description,
        image: [still.src, execute.src, install.src, commissing.src, training.src, sales.src][index] || still.src
      })),
      outro: Array.isArray(t.raw('methodology.outro')) 
        ? t.raw('methodology.outro') 
        : (t.raw('methodology.outro') ? [t.raw('methodology.outro')] : [])
    },
    faqTitle: t('faqTitle'),
    faqs: Array.isArray(t.raw('faqs')) ? t.raw('faqs') : [],
    cta: {
      title: t('cta.title'),
      description: t('cta.description'),
      buttonText: t('cta.buttonText'),
      buttonLink: '/contact-us'
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



