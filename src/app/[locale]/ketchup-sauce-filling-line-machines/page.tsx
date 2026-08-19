import React from 'react';
import { getTranslations, getMessages, setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { routing } from '@/i18n/routing';
import { getRelatedBlogs } from '@/lib/strapi/client';
import PackagingPageLayout, { PackagingPageData } from '@/components/packaging/PackagingPageLayout';

import bannerImg from '@/assets/packaging/pouch/pouch-banner.webp';
import overviewImg from '@/assets/packaging/generated/sauce_overview.png';
import img1 from '@/assets/packaging/pouch/pouch-machine.jpg';
import img2 from '@/assets/packaging/generated/wine_banner.png';
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

export default async function TomatoKetchupPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'sauceline' });
  const messages = await getMessages({ locale });

  // Fetch blogs related to this page automatically
  const relatedBlogs = await getRelatedBlogs('/ketchup-sauce-filling-line-machines', locale);

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
    featuresTitle: t('featuresTitle'),
    featuresSubtitle: t('featuresSubtitle'),
    features: Array.isArray(t.raw('features')) ? t.raw('features') : [],
    contentBlocks: (t.raw('contentBlocks') as any[]).map((block: any, index: number) => {
      let isStepList = index === 1;
      
      let paragraphs: any[] = block.paragraphs;
      if (isStepList && locale === 'ar') {
        paragraphs = block.paragraphs.map((pText: string) => {
          if (pText.includes(':')) {
            const parts = pText.split(':');
            const stepTitle = parts[0];
            const stepBody = parts.slice(1).join(':');

  return (
              <div key={stepTitle} className="mb-2">
                <h4 className="font-bold text-dark text-lg mb-2">{stepTitle}</h4>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">{stepBody}</p>
              </div>
            );
          }
          return pText;
        });
      } else if (index === 0 && locale === 'ar') {
        // First block lists, if text includes comma-separated subitems
        if (block.paragraphs[1] && block.paragraphs[1].includes(',')) {
          const listItems = block.paragraphs[1].split(',').map((item: string) => item.trim());
          paragraphs = [
            block.paragraphs[0],
            <div key="list-wrapper">
              <p className="font-bold text-gray-800 mb-4">خط إنتاج الطماطم الكامل من سيبا يغطي كل محطة:</p>
              <ul className="list-disc pl-6 space-y-4 text-base md:text-lg text-gray-600 leading-relaxed marker:text-seppa-red">
                {listItems.map((item: string, idx: number) => <li key={idx}>{item}</li>)}
              </ul>
            </div>,
            block.paragraphs[2] || ""
          ];
        }
      } else if (isStepList && locale === 'de') {
        paragraphs = block.paragraphs.map((pText: string) => {
          if (pText.includes(' - ')) {
            const parts = pText.split(' - ');
            const stepTitle = parts[0];
            const stepBody = parts.slice(1).join(' - ');
            return (
              <div key={stepTitle} className="mb-2">
                <h4 className="font-bold text-dark text-lg mb-2">{stepTitle}</h4>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">{stepBody}</p>
              </div>
            );
          }
          return pText;
        });
      } else if (index === 0 && locale === 'de') {
        if (block.paragraphs[2] && block.paragraphs[2].includes('für:')) {
          const mainPart = block.paragraphs[2].split('für:')[0] + 'für:';
          const listPart = block.paragraphs[2].split('für:')[1] || '';
          const listItems = listPart.split(',').map((item: string) => item.trim()).filter(Boolean);
          paragraphs = [
            block.paragraphs[0],
            block.paragraphs[1],
            <div key="list-wrapper">
              <p className="font-bold text-gray-800 mb-4">{mainPart}</p>
              <ul className="list-disc pl-6 space-y-4 text-base md:text-lg text-gray-600 leading-relaxed marker:text-seppa-red">
                {listItems.map((item: string, idx: number) => <li key={idx}>{item}</li>)}
              </ul>
            </div>,
            block.paragraphs[3] || ""
          ];
        }
      } else if (isStepList && locale === 'en') {
        paragraphs = [
          <div key="step-1" className="mb-2">
            <h4 className="font-bold text-dark text-lg mb-2">Step 1: Fruit Reception and Sorting</h4>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">Tomatoes arrive by truck and enter the tomato line through hydraulic flume conveying. Optical sorters and roller graders eliminate diseased, green, or bruised fruit before the first thermal stage. Yield at reception directly affects Brix input to the evaporator.</p>
          </div>,
          <div key="step-2" className="mb-2">
            <h4 className="font-bold text-dark text-lg mb-2">Step 2: Washing and Scalding</h4>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">A three-stage rotary drum washer removes field soil, pesticide residue, and surface microbes. Immediately after washing, tomatoes enter the break unit. The break temperature hot or cold defines the enzyme profile of everything downstream in the process.</p>
          </div>,
          <div key="step-3" className="mb-2">
            <h4 className="font-bold text-dark text-lg mb-2">Step 3: Break and Pulping</h4>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">SEPPA's break and finisher system uses a cascade of screens (0.8mm, 0.5mm, 0.4mm) to separate juice and pulp from seeds and skin. The finisher yield directly impacts your output solids. SEPPA's screen geometry consistently outperforms industry averages for pulp extraction efficiency.</p>
          </div>,
          <div key="step-4" className="mb-2">
            <h4 className="font-bold text-dark text-lg mb-2">Step 4: Evaporation and Concentration</h4>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">The clarified juice enters the vacuum evaporator. For a facility producing 28–30° Brix paste, a multi effect evaporator at correct vacuum levels handles 8–10 kg of evaporation per kg of steam consumed. SEPPA's falling film design protects the colour sensitive compounds that turn paste brown when overheated.</p>
          </div>,
          <div key="step-5" className="mb-2">
            <h4 className="font-bold text-dark text-lg mb-2">Step 5: Formulation (for Ketchup and Sauce Lines)</h4>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">In the process of making tomato ketchup, the concentrate paste is mixed with sugar, vinegar, salt, starch, and spice oleoresins in stainless steel blending tanks with high shear mixers. The Brix meter, pH meter, and viscosity meter work inline and send readings to the SCADA, which makes automatic corrections in real time.</p>
          </div>,
          <div key="step-6" className="mb-2">
            <h4 className="font-bold text-dark text-lg mb-2">Step 6: Pasteurization and Sterile Filling</h4>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">The finished product passes through a tubular or scraped surface heat exchanger for final pasteurization, then enters the sterile zone. SEPPA integrates aseptic fillers for bag in box (up to 1,000L aseptic drums), pouches, and PET bottles. Every seal, every gasket, and every valve is specified to 3-A sanitary standards.</p>
          </div>
        ];
      } else if (index === 0 && locale === 'en') {
        paragraphs = [
          block.paragraphs[0],
          <div key="list-wrapper">
            <p className="font-bold text-gray-800 mb-4">SEPPA's complete tomato line handles all of these:</p>
            <ul className="list-disc pl-6 space-y-4 text-base md:text-lg text-gray-600 leading-relaxed marker:text-seppa-red">
              <li>Cold break paste (68–75°C) for higher lycopene retention and brighter colour</li>
              <li>Hot break paste (85–95°C) for higher viscosity and pectin activation</li>
              <li>Diced and whole peeled tomato lines with blanching and brine injection</li>
              <li>Tomato sauce production line for retail glass or PET bottling</li>
              <li>Tomato ketchup production line with inline Brix, pH, and viscosity control</li>
              <li>Bulk aseptic filling for food industry intermediate supply</li>
            </ul>
          </div>,
          block.paragraphs[2] || ""
        ];
      }

      return {
        title: block.title,
        paragraphs: paragraphs,
        image1: [img1.src, img2.src][index] || img1.src,
        reverse: index % 2 === 0,
        bgClass: index === 1 ? "bg-light" : undefined,
        layout: index === 1 ? "stacked" : undefined
      };
    }),
    whyChoose: {
      title: t('whyChoose.title'),
      description: t.has('whyChoose.description') ? t('whyChoose.description') : "",
      paragraphs: t.has('whyChoose.paragraphs') ? t.raw('whyChoose.paragraphs') : undefined,
      reasons: t.has('whyChoose.reasons') ? t.raw('whyChoose.reasons') : undefined,
      image: meth1.src
    },
    methodology: {
      title: t('methodology.title'),
      subtitle: t.has('methodology.subtitle') ? t('methodology.subtitle') : "",
      steps: (t.raw('methodology.steps') as any[]).map((step: any, index: number) => ({
        title: step.title,
        description: step.description,
        image: [meth1.src, meth2.src, meth3.src, meth4.src, meth1.src][index] || meth1.src
      })),
      outro: t.has('outro') ? t.raw('outro') : undefined
    },
    faqTitle: t('faqTitle'),
    faqs: t.raw('faqs'),
    trending_articles: relatedBlogs?.length > 0 ? relatedBlogs : undefined
  };

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <div dir={locale === 'ar' ? 'rtl' : 'ltr'}>
        <PackagingPageLayout data={pageData} locale={locale} />
      </div>
    </NextIntlClientProvider>
  );
}
