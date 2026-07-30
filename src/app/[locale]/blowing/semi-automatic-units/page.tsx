import React from 'react';
import { getTranslations, getMessages, setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { routing } from '@/i18n/routing';
import PackagingPageLayout, { PackagingPageData } from '@/components/packaging/PackagingPageLayout';

import bannerImg from '@/assets/processing/generated/processing_banner_1781759101340.png';
import overviewImg from '@/assets/processing/generated/processing_overview_1781759112202.png';
import img1 from '@/assets/processing/generated/processing_cb1_1781759122683.png';
import img2 from '@/assets/processing/generated/processing_cb2_1781759136791.png';
import over from '@/assets/processing/generated/processing_whychoose_1781759182691.png';

import meth1 from '@/assets/processing/generated/processing_meth1_1781759196548.png';
import meth2 from '@/assets/processing/generated/processing_meth2_1781759215088.png';
import meth3 from '@/assets/processing/generated/processing_meth3_1781759228926.png';
import meth4 from '@/assets/processing/generated/processing_meth4_1781759240871.png';

import Link from 'next/link';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function SemiAutomaticPetBlowingPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'semiautomaticpetblowing' });
  const messages = await getMessages({ locale });

  const pageData: PackagingPageData = {
    title: t('title'),
    breadcrumbName: t('breadcrumbName'),
    rootBreadcrumbName: t('rootBreadcrumbName'),
    rootBreadcrumbPath: t('rootBreadcrumbPath'),
    headerImage: bannerImg.src,
    overviewTitle: t('overviewTitle'),
    overviewDescription: t('overviewDescription'),
    overviewsubDescription: (() => {
      try {
        const raw = t.raw('overviewsubDescription');
        if (Array.isArray(raw)) return raw;
      } catch (e) {}
      return [];
    })(),
    overviewImage: overviewImg.src,
    contentBlocks: (() => {
      try {
        const raw = t.raw('contentBlocks');
        if (Array.isArray(raw)) {
          return raw.map((block: any, index: number) => ({
            title: block.title,
            paragraphs: block.paragraphs,
            image1: [img1.src, img2.src][index] || undefined,
            reverse: [true, false][index] || false,
            bgClass: [undefined, "bg-light"][index] || undefined
          }));
        }
      } catch (e) {}
      return [];
    })(),
    applicationsTitle: t('applicationsTitle'),
    applicationsSubtitle: t.has('applicationsSubtitle') ? t('applicationsSubtitle') : undefined,
    applications: (() => {
      try {
        const raw = t.raw('applications');
        if (Array.isArray(raw)) return raw;
      } catch (e) {}
      return [];
    })(),
    whyChoose: {
      title: t('whyChoose.title'),
      description: t.has('whyChoose.description') ? t('whyChoose.description') : undefined,
      paragraphs: (() => {
        try {
          const raw = t.raw('whyChoose.paragraphs');
          if (Array.isArray(raw)) return raw;
        } catch (e) {}
        return [];
      })(),
      image: over.src
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
      outro: t.has('methodology.outro') ? (Array.isArray(t.raw('methodology.outro')) ? t.raw('methodology.outro') : []) : undefined
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

  const gridItems = [
    { title: "SEPPA SSB-05A", img: img1.src, slug: "ssb-05a" },
    { title: "SEPPA SSB-05B", img: meth1.src, slug: "ssb-05b" },
    { title: "SEPPA SSB-05C", img: meth2.src, slug: "ssb-05c" },
    { title: "SEPPA SSB-20C", img: img2.src, slug: "ssb-20c" },
    { title: "SEPPA SSB-2D", img: meth3.src, slug: "ssb-2d" },
    { title: "SEPPA SSB-2D-AT", img: meth4.src, slug: "ssb-2d-at" },
    { title: "SEPPA SSB-4D", img: over.src, slug: "ssb-4d" },
    { title: "SEPPA SSB-4D-AT", img: overviewImg.src, slug: "ssb-4d-at" }
  ];

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <div dir={locale === 'ar' ? 'rtl' : 'ltr'}>
        <PackagingPageLayout data={pageData} locale={locale}>
          {/* 8 Semi-Automatic Models Grid */}
          <section className="py-16 bg-white relative">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white mb-6 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-seppa-red"></span>
                  <span className="text-xs font-semibold text-[#101934] uppercase tracking-wider">
                    {locale === 'ar' ? 'موديلات نصف آلية' : (locale === 'nl' ? 'SEMI-AUTOMATISCHE MODELLEN' : 'SEMI-AUTOMATIC MODELS')}
                  </span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-[#101934] leading-tight max-w-4xl mx-auto">
                  {locale === 'ar' ? 'سلسلة ماكينات نفخ PET نصف الآلية' : (locale === 'nl' ? 'Semi-Automatische PET Blaasmachines Serie' : 'Semi-Automatic PET Blow Molding Machine Series')}
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {gridItems.map((item, idx) => (
                  <Link
                    href={`/${locale}/blowing/semi-automatic-units/${item.slug}`}
                    key={idx}
                    className="relative rounded-[2rem] overflow-hidden group shadow-lg hover:shadow-xl transition-all duration-300 aspect-[4/3] cursor-pointer block"
                  >
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-white font-bold text-sm md:text-base font-heading tracking-wide uppercase">{item.title}</h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </PackagingPageLayout>
      </div>
    </NextIntlClientProvider>
  );
}
