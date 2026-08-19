import React from 'react';
import { getTranslations, getMessages, setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { routing } from '@/i18n/routing';
import { getRelatedBlogs } from '@/lib/strapi/client';
import PackagingPageLayout, { PackagingPageData } from '@/components/packaging/PackagingPageLayout';
import bannerImg from '@/assets/packaging/generated/spirits_distillery_wide_1781701553769.png';
import overviewImg from '@/assets/packaging/generated/premium_spirits_closeup_1781701569217.png';
import wineProd from '@/assets/packaging/generated/wine_production_wide_1781701527332.png';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function AlcoholSpiritsPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'alcohol-spirits' });

  const getArray = (val: any): any[] => {
    if (Array.isArray(val)) return val;
    if (val !== null && typeof val === 'object') return Object.values(val);
    return val ? [val] : [];
  };

  // Fetch blogs related to this page automatically
  const relatedBlogs = await getRelatedBlogs('/alcohol-spirits', locale);

  const pageData: PackagingPageData = {
    title: t('title'),
    breadcrumbName: t('breadcrumbName'),
    rootBreadcrumbName: t('rootBreadcrumbName'),
    rootBreadcrumbPath: t('rootBreadcrumbPath'),
    headerImage: bannerImg.src,
    overviewTitle: t('overviewTitle'),
    overviewDescription: t('overviewDescription'),
    overviewsubDescription: getArray(t.raw('overviewsubDescription')),
    overviewImage: overviewImg.src,
    featuresTitle: t('featuresTitle'),
    featuresSubtitle: t('featuresSubtitle'),
    features: getArray(t.raw('features')),
    whyChoose: {
      title: t('whyChoose.title'),
      description: t('whyChoose.description'),
      image: wineProd.src,
      paragraphs: getArray(t.raw('whyChoose.paragraphs'))
    },
    methodology: {
      title: t('methodology.title'),
      subtitle: t('methodology.subtitle'),
      steps: getArray(t.raw('methodology.steps')).map((step: any, index: number) => {
        const images = [wineProd.src, bannerImg.src, overviewImg.src, wineProd.src];
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
      const images = [bannerImg.src];
      return { ...block, paragraphs: getArray(block.paragraphs), image1: images[index] || "" };
    })
  };

  const messages = await getMessages({ locale });

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <PackagingPageLayout data={pageData} locale={locale} />
    </NextIntlClientProvider>
  );
}
