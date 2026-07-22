import React from 'react';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { routing } from '@/i18n/routing';
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
  const tEn = await getTranslations({ locale: 'en', namespace: 'servicetraining' });
  
  const isDe = locale === 'de';
  const getT = (key: string) => isDe ? tEn(key) : t(key);
  const getRaw = (key: string) => isDe ? tEn.raw(key) : t.raw(key);

  const messages = await getMessages({ locale });

  const pageData: PackagingPageData = {
    title: getT('title'),
    breadcrumbName: getT('breadcrumbName'),
    rootBreadcrumbName: getT('rootBreadcrumbName'),
    rootBreadcrumbPath: getT('rootBreadcrumbPath'),
    headerImage: bannerImg.src,
    overviewTitle: getT('overviewTitle'),
    overviewDescription: getT('overviewDescription'),
    overviewsubDescription: getRaw('overviewsubDescription'),
    overviewImage: overviewImg.src,
    contentBlocks: [
      {
        title: getT('contentBlocks.0.title'),
        paragraphs: getRaw('contentBlocks.0.paragraphs'),
        image1: img1.src,
        reverse: true
      }
    ],
    featuresTitle: getT('featuresTitle'),
    featuresSubtitle: getT('featuresSubtitle'),
    features: (getRaw('features') as any[]).map((feat: any) => ({
      title: feat.title,
      description: feat.description
    })),
    applicationsTitle: getT('applicationsTitle'),
    applicationsSubtitle: getT('applicationsSubtitle'),
    applications: (getRaw('applications') as any[]).map((app: any) => ({
      title: app.title,
      description: app.description
    })),
    whyChoose: {
      title: getT('whyChoose.title'),
      description: getT('whyChoose.description') || "",
      paragraphs: getRaw('whyChoose.paragraphs'),
      image: over.src
    },
    methodology: {
      title: getT('methodology.title'),
      steps: (getRaw('methodology.steps') as any[]).map((step: any, index: number) => ({
        title: step.title,
        description: step.description,
        image: [meth1.src, meth2.src, meth3.src, meth4.src][index] || meth1.src
      }))
    },
    faqTitle: getT('faqTitle'),
    faqs: getRaw('faqs')
  };

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <div dir={locale === 'ar' ? 'rtl' : 'ltr'}>
        <PackagingPageLayout data={pageData} locale={locale} />
      </div>
    </NextIntlClientProvider>
  );
}
