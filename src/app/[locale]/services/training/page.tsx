import React from 'react';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { routing } from '@/i18n/routing';
import { getRelatedBlogs } from '@/lib/strapi/client';
import PackagingPageLayout, { PackagingPageData } from '@/components/packaging/PackagingPageLayout';

import bannerImg from '@/assets/services/generated/training_banner_1782102515585.png';
import overviewImg from '@/assets/services/generated/training_overview_1782102530193.png';
import img1 from '@/assets/services/generated/training_cb1_1782102543995.png';
import over from '@/assets/services/generated/training_whychoose_1782102558103.png';

import meth1 from '@/assets/services/generated/training_meth1_1782102578738.png';
import meth2 from '@/assets/services/generated/training_meth2_1782102592295.png';
import meth3 from '@/assets/services/generated/training_meth3_1782102607091.png';
import meth4 from '@/assets/services/generated/training_meth4_1782102620138.png';

interface Props {
  params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocalizedServiceTrainingPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  
  const t = await getTranslations({ locale, namespace: 'servicetraining' });
  const messages = await getMessages({ locale });

  // Fetch blogs related to this page automatically
  const relatedBlogs = await getRelatedBlogs('/services/training', locale);

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
      image1: [img1.src, over.src][index] || img1.src,
      reverse: index % 2 === 0,
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
      image: over.src
    },
    methodology: {
      badge: t.has('methodology.badge') ? t('methodology.badge') : (t.raw('methodology') as any)?.badge,
      title: t('methodology.title'),
      subtitle: t.has('methodology.subtitle') ? t('methodology.subtitle') : (t.raw('methodology') as any)?.subtitle,
      steps: (() => {
        try {
          const raw = t.raw('methodology.steps');
          if (Array.isArray(raw) && raw.length > 0) {
            return raw.map((step: any, index: number) => ({
              title: step.title,
              description: step.description,
              image: [meth1.src, meth2.src, meth3.src, meth4.src, over.src][index] || meth1.src
            }));
          }
        } catch (e) {}
        return [];
      })(),
      outro: (() => {
        try {
          if (t.has('methodology.outro')) {
            const rawOutro = t.raw('methodology.outro');
            if (Array.isArray(rawOutro) && rawOutro.length > 0) return rawOutro;
            if (typeof rawOutro === 'string' && rawOutro.trim()) return [rawOutro];
          }
          const rawMeth = t.raw('methodology') as any;
          if (rawMeth && rawMeth.outro) {
            if (Array.isArray(rawMeth.outro) && rawMeth.outro.length > 0) return rawMeth.outro;
            if (typeof rawMeth.outro === 'string' && rawMeth.outro.trim()) return [rawMeth.outro];
          }
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
