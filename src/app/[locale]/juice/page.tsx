import React from 'react';
import { getTranslations, getMessages, setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { routing } from '@/i18n/routing';
import { getRelatedBlogs } from '@/lib/strapi/client';
import PackagingPageLayout, { PackagingPageData } from '@/components/packaging/PackagingPageLayout';

import imgA from '@/assets/packaging/generated/juice_processing_wide_1781701462502.png';
import imgB from '@/assets/packaging/generated/juice_bottling_closeup_1781701475686.png';
import imgC from '@/assets/packaging/generated/sauce_banner.png';
import imgD from '@/assets/packaging/generated/sauce_overview.png';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function JuicePage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'juiceprocessing' });
  const messages = await getMessages({ locale });

  // Fetch blogs related to this page automatically
  const relatedBlogs = await getRelatedBlogs('/juice', locale);

  const pageData: PackagingPageData = {
    title: t('title'),
    breadcrumbName: t('breadcrumbName'),
    rootBreadcrumbName: t('rootBreadcrumbName'),
    rootBreadcrumbPath: t('rootBreadcrumbPath'),
    headerImage: imgA.src,
    overviewTitle: t('overviewTitle'),
    overviewDescription: t('overviewDescription'),
    overviewsubDescription: Array.isArray(t.raw('overviewsubDescription')) ? t.raw('overviewsubDescription') : [],
    overviewLayout: "stacked",
    overviewImage: imgB.src,
    featuresTitle: t.has('featuresTitle') ? t('featuresTitle') : "",
    featuresSubtitle: t.has('featuresSubtitle') ? t('featuresSubtitle') : "",
    features: Array.isArray(t.raw('features')) ? t.raw('features') : [],
    applicationsTitle: t.has('applicationsTitle') ? t('applicationsTitle') : "",
    applicationsSubtitle: t.has('applicationsSubtitle') ? t('applicationsSubtitle') : "",
    applications: t.has('applications') ? t.raw('applications') : undefined,
    contentBlocks: (() => {
      try {
        const raw = t.raw('contentBlocks');
        if (Array.isArray(raw)) {
          return raw.map((block: any, index: number) => ({
            title: block.title,
            paragraphs: block.paragraphs,
            image1: [imgC.src, imgD.src][index] || imgC.src,
            layout: "stacked",
          }));
        }
      } catch (e) {}
      return undefined;
    })(),
    whyChoose: {
      title: t('whyChoose.title'),
      image: imgA.src,
      description: t.has('whyChoose.description') ? t('whyChoose.description') : "",
      paragraphs: (() => {
        try {
          const raw = t.raw('whyChoose.paragraphs');
          return Array.isArray(raw) ? raw : undefined;
        } catch (e) {}
        return undefined;
      })(),
      reasons: (() => {
        try {
          if (t.has('whyChoose.reasons')) {
            const raw = t.raw('whyChoose.reasons');
            return Array.isArray(raw) ? raw : undefined;
          }
        } catch (e) {}
        return undefined;
      })()
    },
    methodology: {
      title: t.has('methodology.title') ? t('methodology.title') : "",
      subtitle: t.has('methodology.subtitle') ? t('methodology.subtitle') : "",
      steps: (() => {
        try {
          const raw = t.raw('methodology.steps');
          if (Array.isArray(raw)) {
            return raw.map((step: any, index: number) => ({
              title: step.title,
              description: step.description,
              image: [imgB.src, imgC.src, imgD.src, imgA.src][index] || imgB.src
            }));
          }
        } catch (e) {}
        return [];
      })(),
      outro: (() => {
        try {
          if (t.has('methodology.outro')) {
            const raw = t.raw('methodology.outro');
            return Array.isArray(raw) ? raw : [raw];
          }
        } catch (e) {}
        return undefined;
      })()
    },
    faqTitle: t.has('faqTitle') ? t('faqTitle') : "",
    faqs: (() => {
      try {
        const raw = t.raw('faqs');
        return Array.isArray(raw) ? raw : [];
      } catch (e) {}
      return [];
    })(),
    // faqTitle: t('faqTitle'),
    // faqs: t.raw('faqs'),
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
