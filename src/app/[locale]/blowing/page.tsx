import React from 'react';
import { getTranslations, getMessages, setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { routing } from '@/i18n/routing';
import PackagingPageLayout, { PackagingPageData } from '@/components/packaging/PackagingPageLayout';
import Link from 'next/link';
// import ProcessingLinesCarousel from '@/components/blowing/ProcessingLinesCarousel';

import bannerImg from '@/assets/blowing/generated/blowing_banner_1781759651271.png';
import overviewImg from '@/assets/blowing/generated/blowing_overview_1781759662496.png';
import img1 from '@/assets/blowing/generated/blowing_cb1_1781759674231.png';
import img2 from '@/assets/blowing/generated/blowing_cb2_1781759687509.png';
import img3 from '@/assets/blowing/generated/blowing_cb3_1781759707330.png';
import over from '@/assets/blowing/generated/blowing_whychoose_1781759720818.png';

// Reusing processing images for methodology due to image generation limits
import meth1 from '@/assets/processing/generated/processing_meth1_1781759196548.png';
import meth2 from '@/assets/processing/generated/processing_meth2_1781759215088.png';
import meth3 from '@/assets/processing/generated/processing_meth3_1781759228926.png';
import meth4 from '@/assets/processing/generated/processing_meth4_1781759240871.png';

import glassLineImg from '@/assets/packaging/generated/glass_bottling_wide_1781701406159.png';
import canLineImg from '@/assets/packaging/can/Can-Filling-Packaging-Line.webp';
import largeLineImg from '@/assets/packaging/generated/csd_filler_wide_1781701435025.png';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function BlowingPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'blowing' });
  const messages = await getMessages({ locale });

  const pageData: PackagingPageData = {
    title: t('title'),
    breadcrumbName: t('breadcrumbName'),
    rootBreadcrumbName: "Equipments",
    rootBreadcrumbPath: "/equipments",
    headerImage: bannerImg.src,
    overviewTitle: t('overviewTitle'),
    overviewDescription: t('overviewDescription'),
    overviewsubDescription: Array.isArray(t.raw('overviewsubDescription')) ? t.raw('overviewsubDescription') : [],
    overviewImage: overviewImg.src,
    contentBlocks: (t.raw('contentBlocks') as any[]).map((block: any, index: number) => {
      let paragraphs: any[] = block.paragraphs;
      
      if (index === 0 && locale === 'en') {
        paragraphs = [<React.Fragment key="blowing-types">
          <span className="font-bold"><span className="text-seppa-red text-xl"> • </span> Semi Automatic Units:</span> Semi automatic machines suit pilot lines, specialty formats, and operations where output volumes sit below 2,000 bottles per hour. Manual preform loading is the trade off; the upside is lower capital cost and flexibility on neck finish. A semi automatic plastic bottle maker is a reasonable starting point when SKU range is wide and runs are short.<Link href="blowing/semi-automatic-units" className="text-primary cursor-pointer text-seppa-red hover:border-b hover:border-seppa-red ml-1">Learn More</Link><br/>
          <span className="font-bold"><span className="text-seppa-red text-xl"> • </span> Linear Automatic Machines:</span> Linear platforms carry two to twelve cavities in a fixed-pitch arrangement. They cover the mid volume range from roughly 2,000 to 12,000 bottles per hour and suit operations with infrequent format changes. As a plastic pet bottle making machine, linear designs have straightforward maintenance access and lower initial tooling cost than rotary equivalents factors that matter when a project is working against a tight pet bottle manufacturing plant cost budget.<Link href="blowing/linear-automatic-machines" className="text-primary cursor-pointer text-seppa-red hover:border-b border-seppa-red ml-1">Learn More</Link><br/>
          <span className="font-bold"><span className="text-seppa-red text-xl"> • </span> Rotary High speed Systems:</span> Rotary blow molders are where output rates and container quality both peak. Seppa's rotary platforms carry up to 24 cavities on a continuously rotating wheel, achieving outputs above 24,000 bottles per hour on standard 0.5 litre water formats. Preforms move through dedicated infrared oven segments in continuous flow, arrive at blowing stations at precise temperature, and exit as finished containers without interruption.<Link href="blowing/rotary-high-speed-systems" className="text-primary cursor-pointer text-seppa-red hover:border-b hover:border-seppa-red ml-1">Learn More</Link>
          </React.Fragment>
        ];
      } else if (index === 0 && locale === 'ar') {
        paragraphs = [<React.Fragment key="blowing-types-ar">
          <span className="font-bold"><span className="text-seppa-red text-xl"> • </span> الوحدات نصف الأوتوماتيكية:</span> تناسب خطوط الإنتاج التجريبية والعبوات ذات الأشكال الخاصة والتشغيل غير المستمر بطاقات أقل من 2000 عبوة/ساعة. وتتميز بانخفاض التكلفة الاستثمارية وسرعة التهيئة وتعديل عنق الزجاجة بما يخدم المشروعات المبتدئة.<Link href="/ar/blowing/semi-automatic-units" className="text-primary cursor-pointer text-seppa-red hover:border-b hover:border-seppa-red mr-1">اقرأ المزيد</Link><br/>
          <span className="font-bold"><span className="text-seppa-red text-xl"> • </span> الماكينات الأوتوماتيكية الخطية:</span> تعتمد على ترتيب طولي ثابت من تجويفين إلى 12 تجويفاً وتغطي الطاقات المتوسطة بين 2000 و 12000 زجاجة في الساعة، مع سهولة تامة بالصيانة وتغيير القوالب بما يتلاءم مع ميزانية تكلفة مصنع زجاجات PET المحدودة.<Link href="/ar/blowing/linear-automatic-machines" className="text-primary cursor-pointer text-seppa-red hover:border-b border-seppa-red mr-1">اقرأ المزيد</Link><br/>
          <span className="font-bold"><span className="text-seppa-red text-xl"> • </span> الأنظمة الدوارة عالية السرعة:</span> وهي القمة في الكفاءة والسرعة، حيث تصل طاقة ماكينة نفخ عبوات PET الدوارة من سيبا إلى أكثر من 24 ألف عبوة/ساعة للعبوات القياسية 0.5 لتر عبر 24 تجويفاً يدورون باستمرار وحركة نقل آلية للبريفورم عبر مناطق تسخين دقيقة بالأشعة تحت الحمراء.<Link href="/ar/blowing/rotary-high-speed-systems" className="text-primary cursor-pointer text-seppa-red hover:border-b hover:border-seppa-red mr-1">اقرأ المزيد</Link>
          </React.Fragment>
        ];
      }

      return {
        title: block.title,
        paragraphs: paragraphs,
        image1: [img1.src, img3.src][index] || img1.src,
        reverse: index % 2 === 0,
        bgClass: index === 1 ? "bg-light" : "bg-white"
      };
    }),
    featuresTitle: t('featuresTitle'),
    features: Array.isArray(t.raw('features')) ? t.raw('features') : [],
    whyChoose: {
      title: t('whyChoose.title'),
      description: t.has('whyChoose.description') ? t('whyChoose.description') : "",
      paragraphs: t.has('whyChoose.paragraphs') ? t.raw('whyChoose.paragraphs') : undefined,
      reasons: t.has('whyChoose.reasons') ? t.raw('whyChoose.reasons') : undefined,
      image: over.src
    },
    methodology: {
      title: t('methodology.title'),
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

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {[
                  {
                    title: locale === 'ar' ? "نافخ PET" : "Seppa SSB-SL-PNEUMATIC",
                    img: img1.src,
                    link: locale === 'ar' ? "/ar/blowing/pneumatic" : "/en/blowing/pneumatic"
                  },
                  {
                    title: locale === 'ar' ? "تكنولوجيا المعالجة" : "Seppa SSB-SLE-ELECTRIC",
                    img: meth1.src,
                    link: locale === 'ar' ? "/ar/electric-pet-blowing" : "/en/electric-pet-blowing"
                  },
                  {
                    title: locale === 'ar' ? "خط تعبئة PET" : "Seppa SSB-R-ROTARY",
                    img: meth4.src,
                    link: locale === 'ar' ? "/ar/blowing/rotary-high-speed-systems" : "/en/blowing/rotary-high-speed-systems"
                  },
                  {
                    title: locale === 'ar' ? "خط تعبئة الزجاج" : "SEMI-AUTOMATIC PET STRETCH BLOW MOULDING",
                    img: img3.src,
                    link: locale === 'ar' ? "/ar/blowing/semi-automatic-units" : "/en/blowing/semi-automatic-units"
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
