import React from 'react';
import { getTranslations, getMessages, setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { routing } from '@/i18n/routing';
import { getRelatedBlogs } from '@/lib/strapi/client';
import PackagingPageLayout, { PackagingPageData } from '@/components/packaging/PackagingPageLayout';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function RtPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'rt' });

  const getArray = (val: any): any[] => {
    if (Array.isArray(val)) return val;
    if (val !== null && typeof val === 'object') return Object.values(val);
    return val ? [val] : [];
  };

  // Fetch blogs related to this page automatically
  const relatedBlogs = await getRelatedBlogs('/rt', locale);

  const pageData: PackagingPageData = {
    title: t('title'),
    breadcrumbName: t('breadcrumbName'),
    rootBreadcrumbName: t('rootBreadcrumbName'),
    rootBreadcrumbPath: t('rootBreadcrumbPath'),
    headerImage: "/images/rtd_header_1782124646462.png",
    overviewTitle: t('overviewTitle'),
    overviewDescription: t('overviewDescription'),
    overviewsubDescription: getArray(t.raw('overviewsubDescription')),
    overviewImage: "/images/rtd_seltzer_line_1782122068049.png",
    featuresTitle: t('featuresTitle'),
    featuresSubtitle: t('featuresSubtitle'),
    features: getArray(t.raw('features')),
    whyChoose: {
      title: t('whyChoose.title'),
      description: t('whyChoose.description'),
      image: "/images/rtd_why_choose_1782124660243.png",
      paragraphs: getArray(t.raw('whyChoose.paragraphs'))
    },
    methodology: {
      title: t('methodology.title'),
      subtitle: t('methodology.subtitle'),
      steps: getArray(t.raw('methodology.steps')).map((step: any, index: number) => {
        const images = [
          "/images/rtd_mix_1782124623101.png", 
          "/images/rtd_fill_1782124584288.png", 
          "/images/rtd_can_1782124513134.png",
          "/images/rtd_content_block_1782124674023.png"
        ];
        return { ...step, image: images[index] || "" };
      }),
      outro: getArray(t.raw('methodology.outro'))
    },
    faqTitle: t('faqTitle'),
    faqs: getArray(t.raw('faqs')),
    applicationsTitle: t('applicationsTitle'),
    applicationsSubtitle: t('applicationsSubtitle'),
    applications: getArray(t.raw('applications')),
    contentBlocks: getArray(t.raw('contentBlocks')).map((block: any, index: number) => {
      const images = ["/images/rtd_content_block_1782124674023.png"];
      return { ...block, paragraphs: getArray(block.paragraphs), image1: images[index] || "" };
    })
  };

  const messages = await getMessages({ locale });

    pageData.trending_articles = relatedBlogs?.length > 0 ? relatedBlogs : undefined;

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <PackagingPageLayout data={pageData} locale={locale} />
    </NextIntlClientProvider>
  );
}
