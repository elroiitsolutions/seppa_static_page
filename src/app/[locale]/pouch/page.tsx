import React from 'react';
import { getTranslations, getMessages, setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { routing } from '@/i18n/routing';
import { getRelatedBlogs } from '@/lib/strapi/client';
import PackagingPageLayout, { PackagingPageData } from '@/components/packaging/PackagingPageLayout';

import img1 from '@/assets/packaging/pouch/overview.webp';
import img2 from '@/assets/packaging/pouch/moderm.webp';
import pack from '@/assets/packaging/pouch/pouch.webp';
import pouch from '@/assets/packaging/pouch/pouch-package.jpg';
import machine from '@/assets/packaging/pouch/pouch-machine.jpg';
import pouchBanner from '@/assets/packaging/pouch/pouch-banner.webp';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function PouchPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'pouch' });
  const messages = await getMessages({ locale });

  // Fetch blogs related to this page automatically
  const relatedBlogs = await getRelatedBlogs('/pouch', locale);

  const pageData: PackagingPageData = {
    title: t('title'),
    breadcrumbName: t('breadcrumbName'),
    headerImage: pouchBanner.src,
    overviewTitle: t('overviewTitle'),
    overviewDescription: t('overviewDescription'),
    overviewLayout: "stacked",
    overviewsubDescription: Array.isArray(t.raw('overviewsubDescription')) ? t.raw('overviewsubDescription') : [],
    overviewImage: pouchBanner.src,
    contentBlocks: (t.raw('contentBlocks') as any[]).map((block: any, index: number) => ({
        title: block.title,
        paragraphs: block.paragraphs,
        image1: [img1.src, pouch.src][index] || img1.src,
        reverse: [false, true][index] || false,
        bgClass: [undefined, "bg-light"][index]
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
      image: machine.src
    },
    methodology: {
      title: t('methodology.title'),
      subtitle: t('methodology.subtitle'),
      steps: (t.raw('methodology.steps') as any[]).map((step: any, index: number) => ({
        title: step.title,
        description: step.description,
        image: [pack.src, img2.src, pouch.src, machine.src, img1.src][index] || pack.src
      }))
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

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <div dir={locale === 'ar' ? 'rtl' : 'ltr'}>
        <PackagingPageLayout data={pageData} locale={locale} />
      </div>
    </NextIntlClientProvider>
  );
}
