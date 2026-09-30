"use client";
import React from 'react';
import PageHeader from '@/components/layout/PageHeader';
import OverviewSection from '@/components/packaging/OverviewSection';
import ContentBlock from '@/components/ui/ContentBlock';
import FeaturesSection from '@/components/packaging/FeaturesSection';
import PackagingWhyChooseUs from '@/components/packaging/PackagingWhyChooseUs';
import Accordion from '@/components/ui/Accordion';
import Clients from '@/components/home/Clients';
import Partners from '@/components/home/Partners';
import Awards from '@/components/home/Awards';
import LatestBlogs from '@/components/home/LatestBlogs';

import headerImg from '@/assets/about-us/generated/header.png';
import whoWeAreImg from '@/assets/about-us/generated/who_we_are.png';
import whatWeBuildImg from '@/assets/about-us/generated/what_we_build.png';
import whyChooseImg from '@/assets/about-us/generated/why_choose.png';

interface AboutUsClientProps {
  locale: string;
  translations: {
    title: string;
    breadcrumbName: string;
    equipmentTitle: string;
    equipmentSubtitle: string;
    industriesTitle: string;
    industriesSubtitle: string;
    faqTitle: string;
  };
  whoWeAre: {
    title: string;
    description: string;
    subDescription: any[];
  };
  whatWeBuild: {
    title: string;
    paragraphs: any[];
  };
  expertise: {
    title: string;
    paragraphs: any[];
  };
  industriesText?: {
    title: string;
    paragraphs: any[];
  };
  equipmentFeatures: any[];
  industryFeatures: any[];
  faqs: any[];
  whyChoose: {
    title: string;
    description?: string;
    paragraphs: any[];
  };
  whyChooseText?: {
    title: string;
    paragraphs: any[];
  };
}

export default function AboutUsClient({
  locale,
  translations,
  whoWeAre,
  whatWeBuild,
  expertise,
  industriesText,
  equipmentFeatures,
  industryFeatures,
  faqs,
  whyChoose,
  whyChooseText
}: AboutUsClientProps) {
  const isAr = locale === 'ar';

  return (
    <div className="overflow-hidden">
      {/* Banner/Hero Section */}
      <PageHeader
        title={translations.title}
        bgImage={headerImg.src}
        breadcrumbs={[
          { name: isAr ? 'الرئيسية' : 'Home', path: '/' },
          { name: translations.breadcrumbName }
        ]}
      />

      {/* Who We Are */}
      <OverviewSection
        title={whoWeAre.title}
        description={whoWeAre.description}
        subDescription={whoWeAre.subDescription}
        imageSrc={whoWeAreImg.src}
        layout="side-by-side"
        locale={locale}
      />

      {/* What We Build */}
      <ContentBlock
        title={whatWeBuild.title}
        paragraphs={whatWeBuild.paragraphs}
        image1={whatWeBuildImg.src}
        reverse={true}
        bgClass="bg-light"
        layout={whatWeBuild.paragraphs && whatWeBuild.paragraphs.length >= 3 ? "stacked" : undefined}
      />

      {/* Our Expertise / Équipements que nous fournissons */}
      {expertise.paragraphs && expertise.paragraphs.length > 0 && (
        <ContentBlock
          title={expertise.title}
          paragraphs={expertise.paragraphs}
          image1={whyChooseImg.src}
          reverse={false}
          bgClass="bg-white"
          layout={expertise.paragraphs.length >= 3 ? "stacked" : undefined}
        />
      )}

      {/* Equipment We Supply (Features) */}
      {equipmentFeatures && equipmentFeatures.length > 0 && (
        <FeaturesSection
          badge={isAr ? "المعدات" : "Equipment"}
          title={translations.equipmentTitle}
          subtitle={translations.equipmentSubtitle}
          features={equipmentFeatures}
          columns={3}
          bgClass="bg-[#fdfbf6] m-3 rounded-2xl relative"
        />
      )}

      {/* Industries We Serve (Features) */}
      {industryFeatures && industryFeatures.length > 0 && (
        <FeaturesSection
          badge={isAr ? "الصناعات" : "Industries"}
          title={translations.industriesTitle}
          subtitle={translations.industriesSubtitle}
          features={industryFeatures}
          columns={4}
          centerLastRow={true}
          bgClass="bg-white"
        />
      )}

      {/* Industries Text Block / Secteurs que nous desservons */}
      {industriesText?.paragraphs && industriesText.paragraphs.length > 0 && (
        <ContentBlock
          title={industriesText.title}
          paragraphs={industriesText.paragraphs}
          image1={whatWeBuildImg.src}
          reverse={true}
          bgClass="bg-light"
          layout={industriesText.paragraphs.length >= 3 ? "stacked" : undefined}
        />
      )}

      {/* Why Manufacturers Choose SEPPA */}
      <PackagingWhyChooseUs
        title={whyChoose.title}
        description={whyChoose.description}
        paragraphs={whyChoose.paragraphs}
        imageSrc={whyChooseImg.src}
      />

      {/* Why Choose SEPPA (Detailed Text) */}
      {whyChooseText?.paragraphs && whyChooseText.paragraphs.length > 0 && (
        <ContentBlock
          title={whyChooseText.title}
          paragraphs={whyChooseText.paragraphs}
          image1={whatWeBuildImg.src}
          reverse={true}
          bgClass="bg-light"
          layout={whyChooseText.paragraphs.length >= 3 ? "stacked" : undefined}
        />
      )}

      {/* FAQ Section */}
      <section className="py-12 lg:py-24 bg-[#fdfbf6] relative overflow-hidden m-3 rounded-2xl">
        <div className="absolute inset-0 pointer-events-none bg-repeat opacity-100"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="w-full lg:w-5/12 lg:sticky lg:top-24">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white mb-6 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-seppa-red"></span>
                <span className="text-sm font-medium text-[#101934] uppercase tracking-wider">
                  {isAr ? "الأسئلة الشائعة" : "Frequently Asked Questions"}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-[#101934] leading-tight mb-6 max-w-[400px]">
                {translations.faqTitle}
              </h2>
            </div>
            <div className="w-full lg:w-7/12">
              <Accordion items={faqs} defaultOpenIndex={0} />
            </div>
          </div>
        </div>
      </section>

      <Clients />
      <Partners />
      <Awards />
      <LatestBlogs />
    </div>
  );
}
