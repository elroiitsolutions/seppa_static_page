import React from 'react';
import { getTranslations, getMessages, setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { routing } from '@/i18n/routing';
import { getRelatedBlogs } from '@/lib/strapi/client';
import PackagingPageLayout, { PackagingPageData } from '@/components/packaging/PackagingPageLayout';

import bannerImg from '@/assets/processing/generated/processing_banner_1781759101340.png';
import overviewImg from '@/assets/blowing/generated/blowing_overview_1781759662496.png';
import over from '@/assets/processing/generated/processing_whychoose_1781759182691.png';

import meth1 from '@/assets/processing/generated/processing_meth1_1781759196548.png';
import meth2 from '@/assets/processing/generated/processing_meth2_1781759215088.png';
import meth3 from '@/assets/processing/generated/processing_meth3_1781759228926.png';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function CoolantChillersPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'coolantchillers' });
  const messages = await getMessages({ locale });

  // Fetch blogs related to this page automatically
  const relatedBlogs = await getRelatedBlogs('/equipments/coolant-chillers', locale);

  const pageData: PackagingPageData = {
    title: t('title'),
    breadcrumbName: t('breadcrumbName'),
    rootBreadcrumbName: t('rootBreadcrumbName'),
    rootBreadcrumbPath: t('rootBreadcrumbPath'),
    headerImage: bannerImg.src,
    overviewTitle: t('overviewTitle'),
    overviewDescription: t('overviewDescription'),
    overviewsubDescription: (() => {
      try {
        const raw = t.raw('overviewsubDescription');
        if (Array.isArray(raw)) {
          return raw.map((paragraph, index) => (
            <p key={index} className="text-base md:text-lg text-gray-600 leading-relaxed indent-8 md:indent-12 mt-4">
              {paragraph}
            </p>
          ));
        }
      } catch (e) {}
      return undefined;
    })(),
    overviewImage: overviewImg.src,
    featuresTitle: t('featuresTitle'),
    featuresSubtitle: t('featuresSubtitle'),
    features: (() => {
      try {
        const raw = t.raw('features');
        if (Array.isArray(raw)) {
          return raw.map((feature: any) => ({
            title: feature.title,
            description: feature.description
          }));
        }
      } catch (e) {}
      return [];
    })(),
    contentBlocks: (() => {
      try {
        const raw = t.raw('contentBlocks');
        if (Array.isArray(raw)) {
          return raw.map((block: any) => ({
            title: block.title,
            paragraphs: block.paragraphs
          }));
        }
      } catch (e) {}
      return [];
    })(),
    applicationsTitle: t('applicationsTitle'),
    applicationsSubtitle: t('applicationsSubtitle'),
    applications: (() => {
      try {
        const raw = t.raw('applications');
        if (Array.isArray(raw)) {
          return raw.map((app: any) => ({
            title: app.title,
            description: app.description
          }));
        }
      } catch (e) {}
      return [];
    })(),
    whyChoose: {
      title: t('whyChoose.title'),
      description: t('whyChoose.description'),
      image: over.src,
      paragraphs: (() => {
        try {
          const raw = t.raw('whyChoose.paragraphs');
          if (Array.isArray(raw)) {
            return raw;
          }
        } catch (e) {}
        return undefined;
      })()
    },
    methodology: {
      title: t('methodology.title'),
      subtitle: t('methodology.subtitle'),
      steps: (() => {
        try {
          const raw = t.raw('methodology.steps');
          if (Array.isArray(raw)) {
            return raw.map((step: any, index: number) => ({
              title: step.title,
              description: step.description,
              image: [meth1.src, meth2.src, meth3.src][index] || meth1.src
            }));
          }
        } catch (e) {}
        return [];
      })()
    },
    faqTitle: t('faqTitle'),
    faqs: (() => {
      try {
        const raw = t.raw('faqs');
        if (Array.isArray(raw)) {
          return raw.map((faq: any) => ({
            question: faq.question,
            answer: faq.answer
          }));
        }
      } catch (e) {}
      return [];
    })()
  };

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <PackagingPageLayout data={pageData} />
    </NextIntlClientProvider>
  );
}
