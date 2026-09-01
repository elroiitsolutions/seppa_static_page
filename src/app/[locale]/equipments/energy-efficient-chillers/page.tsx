import React from 'react';
import { getTranslations, getMessages, setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { routing } from '@/i18n/routing';
import { getRelatedBlogs } from '@/lib/strapi/client';
import PackagingPageLayout, { PackagingPageData } from '@/components/packaging/PackagingPageLayout';

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

export default async function EnergyEfficientChillersPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'energyefficientchillers' });
  const messages = await getMessages({ locale });

  // Fetch blogs related to this page automatically
  const relatedBlogs = await getRelatedBlogs('/equipments/energy-efficient-chillers', locale);

  const rawApplications = (() => {
    try {
      const raw = t.raw('applications');
      if (Array.isArray(raw) && raw.length > 0) return raw;
    } catch (e) {}
    return undefined;
  })();

  const rawFeatures = (() => {
    try {
      const raw = t.raw('features');
      if (Array.isArray(raw) && raw.length > 0) return raw;
    } catch (e) {}
    return undefined;
  })();

  const pageData: PackagingPageData = {
    title: t('title'),
    breadcrumbName: t('breadcrumbName'),
    rootBreadcrumbName: t('rootBreadcrumbName'),
    rootBreadcrumbPath: t('rootBreadcrumbPath'),
    headerImage: "/images/equipments/immersion_chiller_banner.png",
    overviewTitle: t('overviewTitle'),
    overviewDescription: t('overviewDescription'),
    overviewsubDescription: (() => {
      try {
        const raw = t.raw('overviewsubDescription');
        if (Array.isArray(raw)) return raw;
      } catch (e) {}
      return [];
    })(),
    overviewImage: "/images/equipments/chiller_overview.png",
    featuresTitle: rawFeatures ? (t.has('featuresTitle') ? t('featuresTitle') : undefined) : undefined,
    featuresSubtitle: rawFeatures ? (t.has('featuresSubtitle') ? t('featuresSubtitle') : undefined) : undefined,
    features: rawFeatures ? rawFeatures.map((feature: any) => ({
      title: feature.title,
      description: feature.description
    })) : undefined,
    contentBlocks: (() => {
      try {
        const raw = t.raw('contentBlocks');
        if (Array.isArray(raw)) {
          return raw.map((block: any, index: number) => ({
            title: block.title,
            paragraphs: block.paragraphs,
            image1: [ "/images/equipments/chiller_overview.png" ][index] || undefined,
            reverse: [true][index] || false
          }));
        }
      } catch (e) {}
      return [];
    })(),
    applicationsTitle: rawApplications ? (t.has('applicationsTitle') ? t('applicationsTitle') : undefined) : undefined,
    applicationsSubtitle: rawApplications ? (t.has('applicationsSubtitle') ? t('applicationsSubtitle') : undefined) : undefined,
    applications: rawApplications ? rawApplications.map((app: any) => ({
      title: app.title,
      description: app.description
    })) : undefined,
    whyChoose: {
      title: t('whyChoose.title'),
      description: t.has('whyChoose.description') ? t('whyChoose.description') : "",
      paragraphs: (() => {
        try {
          const raw = t.raw('whyChoose.paragraphs');
          if (Array.isArray(raw)) return raw;
        } catch (e) {}
        return [];
      })(),
      image: "/images/equipments/chiller_overview.png"
    },
    methodology: {
      title: t('methodology.title'),
      subtitle: t.has('methodology.subtitle') ? t('methodology.subtitle') : undefined,
      steps: (() => {
        try {
          const raw = t.raw('methodology.steps');
          if (Array.isArray(raw)) {
            return raw.map((step: any, index: number) => ({
              title: step.title,
              description: step.description,
              image: [meth1.src, meth2.src, meth3.src, meth4.src][index] || meth1.src
            }));
          }
        } catch (e) {}
        return [];
      })(),
      outro: (() => {
        try {
          if (t.has('methodology.outro')) {
            const raw = t.raw('methodology.outro');
            if (Array.isArray(raw) && raw.length > 0) return raw;
            if (typeof raw === 'string' && raw.length > 0 && !raw.startsWith('methodology.')) return [raw];
          }
        } catch (e) {}
        return undefined;
      })()
    },
    faqTitle: t('faqTitle'),
    faqs: (() => {
      try {
        const raw = t.raw('faqs');
        if (Array.isArray(raw)) return raw;
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
