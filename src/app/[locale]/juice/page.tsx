import React from 'react';
import { getTranslations, getMessages, setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { routing } from '@/i18n/routing';
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
  const t = await getTranslations({ locale, namespace: 'juice' });
  const messages = await getMessages({ locale });

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
    contentBlocks: (() => {
      try {
        const raw = t.raw('contentBlocks');
        if (Array.isArray(raw)) {
          return raw.map((block: any, index: number) => ({
            title: block.title,
            paragraphs: block.paragraphs,
            image1: [imgC.src, imgD.src][index] || imgC.src,
            reverse: [true, false][index] || false,
            bgClass: [undefined, "bg-light"][index]
          }));
        }
      } catch (e) {}
      return undefined;
    })(),
    whyChoose: {
      title: t('whyChoose.title'),
      image: imgA.src,
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
      title: t('methodology.title'),
      steps: (t.raw('methodology.steps') as any[]).map((step: any, index: number) => ({
        title: step.title,
        description: step.description,
        image: [imgB.src, imgC.src, imgD.src, imgA.src][index] || imgB.src
      }))
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
