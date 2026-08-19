import React from 'react';
import { getTranslations, getMessages, setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { routing } from '@/i18n/routing';
import { getRelatedBlogs } from '@/lib/strapi/client';
import PackagingPageLayout, { PackagingPageData } from '@/components/packaging/PackagingPageLayout';

import bannerImg from '@/assets/processing/generated/processing_banner_1781759101340.png';
import overviewImg from '@/assets/blowing/generated/blowing_overview_1781759662496.png';
import img1 from '@/assets/processing/generated/processing_cb1_1781759122683.png';
import img2 from '@/assets/processing/generated/processing_cb2_1781759136791.png';
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

export default async function RinserFillerCapperPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'rfc' });
  const messages = await getMessages({ locale });

  // Build content blocks - the English version has custom JSX components, Arabic uses plain text
  const contentBlockImages = [img1.src, img2.src, img3.src];
  const rawContentBlocks = t.raw('contentBlocks') as any[];

  let contentBlocks: any[];

  if ((locale === 'en' || locale === 'de') && rawContentBlocks[0]?.hasCustomContent) {
    // English/German: render custom component blocks as structured paragraphs
    const components = rawContentBlocks[0].components as any[];
    const introText = locale === 'de'
      ? 'Die RFC Maschine im Monoblock-Design besteht aus drei funktionalen Modulen, die auf einer gemeinsamen mechanischen Plattform arbeiten.'
      : 'The rfc machine or bottle filling machine in monoblock format breaks into three functional modules, though they share a common mechanical backbone.';
    contentBlocks = [{
      title: rawContentBlocks[0].title,
      paragraphs: [
        <div key="key-components" className="space-y-6 text-base md:text-lg text-gray-600">
          <p>{introText}</p>
          {components.map((comp: any, i: number) => (
            <div key={i} className="space-y-2">
              <h4 className="text-xl font-bold text-[#101934]">{comp.title}</h4>
              <p>{comp.description}</p>
              {comp.description2 && <p>{comp.description2}</p>}
            </div>
          ))}
        </div>
      ],
      image1: img1.src,
      image2: img2.src,
      reverse: true
    }];
  } else {
    contentBlocks = rawContentBlocks.map((block: any, index: number) => ({
      title: block.title,
      paragraphs: block.paragraphs,
      image1: contentBlockImages[index] || img1.src,
      reverse: index % 2 === 0,
      bgClass: index === 1 ? "bg-light" : "bg-white"
    }));
  }

  // Fetch blogs related to this page automatically
  const relatedBlogs = await getRelatedBlogs('/rinser-filler-capper', locale);

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
    contentBlocks,
    featuresTitle: t.has('featuresTitle') ? t('featuresTitle') : undefined,
    featuresSubtitle: t.has('featuresSubtitle') ? t('featuresSubtitle') : undefined,
    features: t.has('features') ? t.raw('features') : undefined,
    applicationsTitle: t.has('applicationsTitle') ? t('applicationsTitle') : undefined,
    applicationsSubtitle: t.has('applicationsSubtitle') ? t('applicationsSubtitle') : undefined,
    applications: t.has('applications') ? t.raw('applications') : undefined,
    whyChoose: {
      title: t('whyChoose.title'),
      description: t.has('whyChoose.description') ? t('whyChoose.description') : "",
      paragraphs: t.has('whyChoose.paragraphs') ? t.raw('whyChoose.paragraphs') : undefined,
      image: over.src
    },
    methodology: {
      title: t('methodology.title'),
      steps: (t.raw('methodology.steps') as any[]).map((step: any, index: number) => ({
        title: step.title,
        description: step.description,
        image: [meth1.src, meth2.src, meth3.src, meth4.src][index] || meth1.src
      }))
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
