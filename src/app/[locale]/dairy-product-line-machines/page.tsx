import React from 'react';
import { getTranslations, getMessages, setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { routing } from '@/i18n/routing';
import PackagingPageLayout, { PackagingPageData } from '@/components/packaging/PackagingPageLayout';

import bannerImg from '@/assets/packaging/pouch/pouch-banner.webp';
import overviewImg from '@/assets/packaging/generated/sauce_overview.png';
import img1 from '@/assets/packaging/pouch/pouch-machine.jpg';
import img2 from '@/assets/packaging/generated/wine_banner.png';
import img3 from '@/assets/packaging/brick/orange.jpg';
import meth1 from '@/assets/packaging/pouch/moderm.webp';
import meth2 from '@/assets/packaging/can/commissing.webp';
import meth3 from '@/assets/packaging/can/install.webp';
import meth4 from '@/assets/packaging/can/training.webp';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function DairyProductLinePage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'dairyline' });
  const messages = await getMessages({ locale });

  const pageData: PackagingPageData = {
    title: t('title'),
    breadcrumbName: t('breadcrumbName'),
    rootBreadcrumbName: "Complete Lines",
    rootBreadcrumbPath: "/complete-lines",
    headerImage: bannerImg.src,
    overviewTitle: t('overviewTitle'),
    overviewDescription: t('overviewDescription'),
    overviewsubDescription: Array.isArray(t.raw('overviewsubDescription')) ? t.raw('overviewsubDescription') : [],
    overviewImage: overviewImg.src,
    contentBlocks: (t.raw('contentBlocks') as any[]).map((block: any, index: number) => ({
      title: block.title,
      paragraphs: block.paragraphs,
      image1: [img1.src, img2.src, img3.src, img1.src][index] || img1.src,
      reverse: index % 2 === 0,
      bgClass: index === 1 || index === 3 ? "bg-light" : undefined
    })),
    whyChoose: {
      title: t('whyChoose.title'),
      description: t.has('whyChoose.description') ? t('whyChoose.description') : "",
      paragraphs: t.has('whyChoose.paragraphs') ? t.raw('whyChoose.paragraphs') : undefined,
      reasons: t.has('whyChoose.reasons') ? t.raw('whyChoose.reasons') : undefined,
      image: img2.src
    },
    methodology: {
      title: t('methodology.title'),
      subtitle: t.has('methodology.subtitle') ? t('methodology.subtitle') : "",
      steps: (t.raw('methodology.steps') as any[]).map((step: any, index: number) => ({
        title: step.title,
        description: step.description,
        image: [meth1.src, meth2.src, meth3.src, meth4.src][index] || meth1.src
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
