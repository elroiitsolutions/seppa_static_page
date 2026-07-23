import React from 'react';
import { getTranslations, getMessages, setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { routing } from '@/i18n/routing';
import PackagingPageLayout, { PackagingPageData } from '@/components/packaging/PackagingPageLayout';

import bannerImg from '@/assets/processing/generated/processing_banner_1781759101340.png';
import overviewImg from '@/assets/blowing/generated/blowing_overview_1781759662496.png';
import img1 from '@/assets/processing/generated/processing_cb1_1781759122683.png';
import img2 from '@/assets/processing/generated/processing_cb2_1781759136791.png';
import img3 from '@/assets/blowing/generated/blowing_cb3_1781759707330.png';
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

export default async function ElectricPetBlowingPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'electricpetblowing' });
  const messages = await getMessages({ locale });

  const pageData: PackagingPageData = {
    title: t('title'),
    breadcrumbName: t('breadcrumbName'),
    rootBreadcrumbName: t('rootBreadcrumbName'),
    rootBreadcrumbPath: t('rootBreadcrumbPath'),
    headerImage: bannerImg.src,
    overviewTitle: t('overviewTitle'),
    overviewDescription: t('overviewDescription'),
    overviewsubDescription: Array.isArray(t.raw('overviewsubDescription')) ? t.raw('overviewsubDescription') : [],
    overviewImage: overviewImg.src,
    contentBlocks: (t.raw('contentBlocks') as any[] || []).map((block: any, index: number) => ({
      title: block.title,
      paragraphs: block.paragraphs,
      image1: [img1.src, img2.src, img3.src][index] || undefined,
      reverse: [true, false, true][index] || false,
      bgClass: [undefined, "bg-light", undefined][index] || undefined
    })),
    whyChoose: {
      title: t('whyChoose.title'),
      description: t.has('whyChoose.description') ? t('whyChoose.description') : undefined,
      paragraphs: Array.isArray(t.raw('whyChoose.paragraphs')) ? t.raw('whyChoose.paragraphs') : [],
      image: over.src
    },
    methodology: {
      title: t('methodology.title'),
      steps: (t.raw('methodology.steps') as any[] || []).map((step: any, index: number) => ({
        title: step.title,
        description: step.description,
        image: [meth1.src, meth2.src, meth3.src, meth4.src][index] || meth1.src
      }))
    },
    faqTitle: t('faqTitle'),
    faqs: Array.isArray(t.raw('faqs')) ? t.raw('faqs') : []
  };

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <div dir={locale === 'ar' ? 'rtl' : 'ltr'}>
        <PackagingPageLayout data={pageData} locale={locale}>
          {/* Custom Section 2: Comprehensive Lines */}
          <section className="py-16 bg-white relative">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white mb-6 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-seppa-red"></span>
                  <span className="text-xs font-semibold text-[#101934] uppercase tracking-wider">{locale === 'ar' ? 'حلول الخطوط الكاملة' : 'COMPLETE LINE SOLUTIONS'}</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-[#101934] leading-tight max-w-4xl mx-auto">
                  {locale === 'ar' ? 'خطوط معالجة المشروبات والألبان الشاملة' : 'Comprehensive Beverage & Dairy Processing Lines'}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {[
                  {
                    title: "Seppa SSB-SLE-40",
                    img: img1.src,
                    link: locale === 'ar' ? "/ar/electric-pet-blowing/ssb-sle-40" : "/en/electric-pet-blowing/ssb-sle-40"
                  },
                  {
                    title: "Seppa SSB-SLE-60",
                    img: meth1.src,
                    link: locale === 'ar' ? "/ar/electric-pet-blowing/ssb-sle-60" : "/en/electric-pet-blowing/ssb-sle-60"
                  },
                  {
                    title: "Seppa SSB-SLE-80",
                    img: meth2.src,
                    link: locale === 'ar' ? "/ar/electric-pet-blowing/ssb-sle-80" : "/en/electric-pet-blowing/ssb-sle-80"
                  },
                  {
                    title: "Seppa SSB-SLE-100",
                    img: meth3.src,
                    link: locale === 'ar' ? "/ar/electric-pet-blowing/ssb-sle-100" : "/en/electric-pet-blowing/ssb-sle-100"
                  },
                  {
                    title: "Seppa SSB-SLE-120",
                    img: img2.src,
                    link: locale === 'ar' ? "/ar/electric-pet-blowing/ssb-sle-120" : "/en/electric-pet-blowing/ssb-sle-120"
                  },
                  {
                    title: "Seppa SSB-SLE-150",
                    img: img3.src,
                    link: locale === 'ar' ? "/ar/electric-pet-blowing/ssb-sle-150" : "/en/electric-pet-blowing/ssb-sle-150"
                  }
                ].map((item, idx) => (
                  <Link href={item.link} key={idx} className="relative rounded-[2rem] overflow-hidden group shadow-lg hover:shadow-xl transition-all duration-300 aspect-[4/3] cursor-pointer block">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-white font-bold text-lg md:text-xl font-heading tracking-wide uppercase">{item.title}</h3>
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
