import React from 'react';
import { getTranslations, getMessages, setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { routing } from '@/i18n/routing';
import { getRelatedBlogs } from '@/lib/strapi/client';
import PackagingPageLayout, { PackagingPageData } from '@/components/packaging/PackagingPageLayout';

import bannerImg from '@/assets/processing/generated/processing_banner_1781759101340.png';
import overviewImg from '@/assets/processing/generated/processing_overview_1781759112202.png';
import img1 from '@/assets/processing/generated/processing_cb1_1781759122683.png';
import img2 from '@/assets/processing/generated/processing_cb2_1781759136791.png';
import img3 from '@/assets/processing/generated/processing_cb3_1781759152456.png';
import img4 from '@/assets/processing/generated/processing_cb4_1781759168304.png';
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

export default async function ProcessingPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'processing' });
  const messages = await getMessages({ locale });

  // Fetch blogs related to this page automatically
  const relatedBlogs = await getRelatedBlogs('/processing', locale);

  const pageData: PackagingPageData = {
    title: t('title'),
    breadcrumbName: t('breadcrumbName'),
    rootBreadcrumbName: "Equipments",
    rootBreadcrumbPath: "/equipments",
    headerImage: bannerImg.src,
    overviewTitle: t('overviewTitle'),
    overviewDescription: t('overviewDescription'),
    overviewsubDescription: Array.isArray(t.raw('overviewsubDescription')) ? t.raw('overviewsubDescription') : [],
    overviewImage: overviewImg.src,
    contentBlocks: (t.raw('contentBlocks') as any[]).map((block: any, index: number) => {
      let paragraphs: any[] = block.paragraphs;
      if (index === 0) {
        paragraphs = block.paragraphs.map((pText: string, pIdx: number) => {
          if (pText.includes('für:')) {
            const parts = pText.split('für:');
            const mainText = parts[0] + 'für:';
            const listItems = parts[1].split(',').map(item => item.trim()).filter(Boolean);
              pageData.trending_articles = relatedBlogs?.length > 0 ? relatedBlogs : undefined;

  return (
              <div key={pIdx}>
                <p className="mb-4 text-base md:text-lg text-gray-600 leading-relaxed">{mainText}</p>
                <ul className="list-disc pl-6 mb-4 space-y-2 text-base md:text-lg text-gray-600 leading-relaxed marker:text-seppa-red">
                  {listItems.map((item, idx) => <li key={idx}>{item}</li>)}
                </ul>
              </div>
            );
          }
          return pText;
        });
      }
      return {
        title: block.title,
        paragraphs: paragraphs,
        image1: [img1.src, over.src, img1.src][index] || img1.src,
        reverse: index % 2 === 0,
        bgClass: index === 1 ? "bg-light" : "bg-white"
      };
    }),
    featuresTitle: t('featuresTitle'),
    featuresSubtitle: t('featuresSubtitle'),
    features: Array.isArray(t.raw('features')) ? t.raw('features') : [],
    whyChoose: {
      title: t('whyChoose.title'),
      description: t.has('whyChoose.description') ? t('whyChoose.description') : "",
      paragraphs: t.has('whyChoose.paragraphs') ? t.raw('whyChoose.paragraphs') : undefined,
      reasons: t.has('whyChoose.reasons') ? t.raw('whyChoose.reasons') : undefined,
      image: over.src
    },
    methodology: {
      title: t('methodology.title'),
      subtitle: t.has('methodology.subtitle') ? t('methodology.subtitle') : "",
      steps: (t.raw('methodology.steps') as any[]).map((step: any, index: number) => ({
        title: step.title,
        description: step.description,
        image: [meth1.src, meth2.src, meth3.src, meth4.src][index] || meth1.src
      })),
      outro: t.has('outro') ? t.raw('outro') : undefined
    },
    faqTitle: t('faqTitle'),
    faqs: t.raw('faqs')
  };

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <div dir={locale === 'ar' ? 'rtl' : 'ltr'}>
        <PackagingPageLayout data={pageData} locale={locale} />
      </div>
    </NextIntlClientProvider>
  );
}
