import React from 'react';
import { getTranslations, getMessages, setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { routing } from '@/i18n/routing';
import { getRelatedBlogs } from '@/lib/strapi/client';
import PackagingPageLayout, { PackagingPageData } from '@/components/packaging/PackagingPageLayout';

// Reusing generic industrial images due to generation limits
import bannerImg from '@/assets/processing/generated/processing_banner_1781759101340.png';
import overviewImg from '@/assets/blowing/generated/blowing_overview_1781759662496.png';
import img3 from '@/assets/blowing/generated/blowing_cb3_1781759707330.png';
import over from '@/assets/processing/generated/processing_whychoose_1781759182691.png';

import meth1 from '@/assets/processing/generated/processing_meth1_1781759196548.png';
import meth2 from '@/assets/processing/generated/processing_meth2_1781759215088.png';
import meth3 from '@/assets/processing/generated/processing_meth3_1781759228926.png';
import meth4 from '@/assets/processing/generated/processing_meth4_1781759240871.png';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function LabellingPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'labelling' });
  const messages = await getMessages({ locale });

  // Fetch blogs related to this page automatically
  const relatedBlogs = await getRelatedBlogs('/labelling', locale);

  const pageData: PackagingPageData = {
    title: t('title'),
    breadcrumbName: t('breadcrumbName'),
    rootBreadcrumbName: t('rootBreadcrumbName'),
    rootBreadcrumbPath: t('rootBreadcrumbPath'),
    headerImage: bannerImg.src,
    overviewTitle: t('overviewTitle'),
    overviewDescription: t('overviewDescription'),
    overviewsubDescription: t.has('overviewsubDescription') && Array.isArray(t.raw('overviewsubDescription')) ? t.raw('overviewsubDescription') : [],
    overviewImage: overviewImg.src,
    featuresTitle: t.has('features') && Array.isArray(t.raw('features')) && t.raw('features').length > 0 && t.has('featuresTitle') ? t('featuresTitle') : undefined,
    features: (() => {
      try {
        const raw = t.raw('features');
        if (Array.isArray(raw) && raw.length > 0) {
          return raw.map((feature: any) => ({
            title: feature.title,
            description: feature.description
          }));
        }
      } catch (e) {}
      return undefined;
    })(),
    applicationsTitle: t.has('applications') && Array.isArray(t.raw('applications')) && t.raw('applications').length > 0 && t.has('applicationsTitle') ? t('applicationsTitle') : undefined,
    applications: (() => {
      try {
        const raw = t.raw('applications');
        if (Array.isArray(raw) && raw.length > 0) {
          return raw.map((app: any) => ({
            title: app.title,
            description: app.description,
            link: app.link
          }));
        }
      } catch (e) {}
      return undefined;
    })(),
    contentBlocks: (() => {
      try {
        const raw = t.raw('contentBlocks');
        if (Array.isArray(raw)) {
          return raw.map((block: any, index: number) => ({
            title: block.title,
            paragraphs: block.paragraphs,
            image1: img3.src,
            reverse: index % 2 === 0,
            bgClass: index % 2 === 1 ? "bg-light" : "bg-white",
            layout: (block.paragraphs && block.paragraphs.length >= 4) ? ("stacked" as const) : undefined
          }));
        }
      } catch (e) {}
      return undefined;
    })(),
    whyChoose: {
      title: t('whyChoose.title'),
      description: t.has('whyChoose.description') ? t('whyChoose.description') : "",
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
      subtitle: (t.raw('methodology') as any)?.subtitle || (t.has('methodology.subtitle') ? t('methodology.subtitle') : undefined),
      steps: (() => {
        try {
          const raw = t.raw('methodology.steps');
          if (Array.isArray(raw)) {
            return raw.map((step: any, index: number) => ({
              title: step.title,
              description: step.description,
              image: [meth1.src, meth2.src, meth3.src, meth4.src, meth1.src][index] || meth1.src
            }));
          }
        } catch (e) {}
        return [];
      })(),
      outro: (() => {
        try {
          const raw = (t.raw('methodology') as any)?.outro || (t.has('methodology.outro') ? t.raw('methodology.outro') : undefined);
          if (Array.isArray(raw) && raw.length > 0) {
            return raw;
          }
        } catch (e) {}
        return undefined;
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

  pageData.trending_articles = relatedBlogs?.length > 0 ? relatedBlogs : undefined;

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <div dir={locale === 'ar' ? 'rtl' : 'ltr'}>
        <PackagingPageLayout data={pageData} locale={locale} />
      </div>
    </NextIntlClientProvider>
  );
}
