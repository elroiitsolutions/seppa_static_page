import React from 'react';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { routing } from '@/i18n/routing';
import { getRelatedBlogs } from '@/lib/strapi/client';
import PackagingPageLayout, { PackagingPageData } from '@/components/packaging/PackagingPageLayout';

import bannerImg from '@/assets/packaging/generated/banner_crate_washer.png';
import overviewImg from '@/assets/packaging/generated/overview_crate_washer.png';
import img1 from '@/assets/packaging/generated/cb1_crate_washer.png';
import img2 from '@/assets/packaging/generated/cb2_crate_washer.png';
import whyChooseImg from '@/assets/packaging/generated/why_choose_crate_washer.png';

import meth1Img from '@/assets/packaging/generated/methodology_1.png';
import meth2Img from '@/assets/packaging/generated/methodology_2.png';
import meth3Img from '@/assets/packaging/generated/methodology_3.png';
import meth4Img from '@/assets/packaging/generated/methodology_4.png';
import meth5Img from '@/assets/packaging/generated/methodology_5.png';

interface Props {
  params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocalizedCrateWashersPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  
  const t = await getTranslations({ locale, namespace: 'washers' });
  const messages = await getMessages({ locale });

  // Fetch blogs related to this page automatically
  const relatedBlogs = await getRelatedBlogs('/crate-washers', locale);

  const rawContentBlocks = (t.raw('contentBlocks') as any[]) || [];

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
    contentBlocks: rawContentBlocks.map((block: any, index: number) => ({
      title: block.title,
      paragraphs: block.paragraphs,
      image1: [img1.src, img2.src][index] || img1.src,
      reverse: index % 2 === 1,
      bgClass: index % 2 === 1 ? "bg-light" : "bg-white",
      layout: (block.paragraphs && block.paragraphs.length >= 4) ? ("stacked" as const) : undefined
    })),
    featuresTitle: t.has('features') && Array.isArray(t.raw('features')) && t.raw('features').length > 0 && t.has('featuresTitle') ? t('featuresTitle') : undefined,
    featuresSubtitle: t.has('features') && Array.isArray(t.raw('features')) && t.raw('features').length > 0 && t.has('featuresSubtitle') ? t('featuresSubtitle') : undefined,
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
    applicationsSubtitle: t.has('applications') && Array.isArray(t.raw('applications')) && t.raw('applications').length > 0 && t.has('applicationsSubtitle') ? t('applicationsSubtitle') : undefined,
    applications: (() => {
      try {
        const raw = t.raw('applications');
        if (Array.isArray(raw) && raw.length > 0) {
          return raw.map((app: any) => ({
            title: app.title,
            description: app.description
          }));
        }
      } catch (e) {}
      return undefined;
    })(),
    whyChoose: {
      title: t('whyChoose.title'),
      description: t.has('whyChoose.description') ? t('whyChoose.description') : "",
      paragraphs: Array.isArray(t.raw('whyChoose.paragraphs')) ? t.raw('whyChoose.paragraphs') : [],
      image: whyChooseImg.src
    },
    methodology: {
      title: t('methodology.title'),
      subtitle: (t.raw('methodology') as any)?.subtitle || (t.has('methodology.subtitle') ? t('methodology.subtitle') : undefined),
      steps: (() => {
        try {
          const raw = t.raw('methodology.steps');
          if (Array.isArray(raw) && raw.length > 0) {
            return raw.map((step: any, index: number) => ({
              title: step.title,
              description: step.description,
              image: [meth1Img.src, meth2Img.src, meth3Img.src, meth4Img.src, meth5Img.src][index] || meth1Img.src
            }));
          }
        } catch (e) {}
        return [];
      })(),
      outro: (() => {
        try {
          const raw = (t.raw('methodology') as any)?.outro || (t.has('methodology.outro') ? t.raw('methodology.outro') : undefined);
          if (Array.isArray(raw) && raw.length > 0) return raw;
        } catch (e) {}
        return undefined;
      })()
    },
    faqTitle: t('faqTitle'),
    faqs: t.raw('faqs')
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
