import React from 'react';
import { getTranslations, getMessages, setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { routing } from '@/i18n/routing';
import { getRelatedBlogs } from '@/lib/strapi/client';
import PackagingPageLayout, { PackagingPageData } from '@/components/packaging/PackagingPageLayout';

import bannerImg from '@/assets/services/generated/training_banner_1782102515585.png'; // fallback
import overviewImg from '@/assets/pet/generated/pet_overview_1782103229961.png';
import img1 from '@/assets/pet/generated/pet_cb1_1782103242917.png';
import over from '@/assets/pet/generated/pet_whychoose_1782103256501.png';

import meth1 from '@/assets/pet/generated/pet_meth1_1782103277774.png';
import meth2 from '@/assets/pet/generated/pet_meth2_1782103291753.png';
import meth3 from '@/assets/pet/generated/pet_meth3_1782103305856.png';
import meth4 from '@/assets/pet/generated/pet_meth4_1782103318966.png';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function JuicesNectarsPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'juicenectars' });

  // Fetch blogs related to this page automatically
  const relatedBlogs = await getRelatedBlogs('/juice&nectars', locale);

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
      image1: [img1.src, over.src][index % 2] || img1.src,
      reverse: index % 2 === 0,
      bgClass: index % 2 === 1 ? "bg-light" : "bg-white",
      layout: (block.paragraphs && block.paragraphs.length >= 3) ? ("stacked" as const) : undefined
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
      title: t.has('methodology.title') ? t('methodology.title') : (t.raw('methodology') as any)?.title,
      subtitle: t.has('methodology.subtitle') ? t('methodology.subtitle') : (t.raw('methodology') as any)?.subtitle,
      steps: (() => {
        try {
          const raw = t.raw('methodology.steps');
          if (Array.isArray(raw) && raw.length > 0) {
            return raw.map((step: any, index: number) => ({
              title: step.title || "",
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

  const messages = await getMessages({ locale });
  pageData.trending_articles = relatedBlogs?.length > 0 ? relatedBlogs : undefined;

  const hasConclusion = t.has('conclusion') && t.raw('conclusion') && t.raw('conclusion').title;
  const conclusionData = hasConclusion ? t.raw('conclusion') : null;

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <div dir={locale === 'ar' ? 'rtl' : 'ltr'}>
        <PackagingPageLayout data={pageData} locale={locale} />
        {conclusionData && (
          <section className="py-12 lg:py-16 bg-[#fdfbf6] overflow-hidden m-3 rounded-2xl">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-dark mb-6">
                {conclusionData.title}
              </h2>
              {Array.isArray(conclusionData.paragraphs) && conclusionData.paragraphs.map((p: string, idx: number) => (
                <p key={idx} className="text-gray-600 text-base md:text-lg leading-relaxed mb-4">
                  {p}
                </p>
              ))}
            </div>
          </section>
        )}
      </div>
    </NextIntlClientProvider>
  );
}
