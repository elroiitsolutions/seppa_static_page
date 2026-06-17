"use client";
import React from 'react';
import PageHeader from '@/components/layout/PageHeader';
import OverviewSection from './OverviewSection';
import FeaturesSection, { FeatureItem } from './FeaturesSection';
import MethodologySection, { MethodologyStep } from './MethodologySection';
import PackagingWhyChooseUs from './PackagingWhyChooseUs';
import Clients from '@/components/home/Clients';
import Testimonials from '@/components/home/Testimonials';
import Partners from '@/components/home/Partners';
import CallToAction, { CTAProps } from '@/components/ui/CallToAction';
import PackagingContact from './PackagingContact';
import HomeFAQs from '@/components/home/HomeFAQs';
import Awards from '@/components/home/Awards';
import LatestBlogs from '@/components/home/LatestBlogs';
import Accordion from '@/components/ui/Accordion';
import AnimatedHeading from '@/components/ui/AnimatedHeading';
import bgPattern from '@/assets/bg/bg-section-bg-image.png';
import { motion, Variants } from 'framer-motion';
import ContentBlock, { ContentBlockProps } from '@/components/ui/ContentBlock';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

export interface PackagingPageData {
  title: string;
  breadcrumbName: string;
  rootBreadcrumbName?: string;
  rootBreadcrumbPath?: string;
  headerImage?: string;
  overviewTitle: string;
  overviewDescription: string;
  overviewsubDescription?: string[];
  overviewBenefits?: string[];
  overviewImage: string;
  overviewImage2?: string;
  overviewLayout?: 'side-by-side' | 'stacked';
  contentBlocks?: ContentBlockProps[];
  applicationsTitle?: string;
  applicationsSubtitle?: string;
  applications?: FeatureItem[];
  featuresTitle?: string;
  featuresSubtitle?: string;
  features?: FeatureItem[];
  whyChoose?: {
    title?: string;
    description?: string;
    paragraphs?: string[];
    reasons?: { id?: number | string; icon?: React.ReactNode; title: string; description: string }[];
    image?: string;
  };
  methodology?: {
    badge?: string;
    title: string;
    subtitle?: string;
    steps: MethodologyStep[];
    outro?: string[];
  };
  faqs?: { question: string; answer: string }[];
  faqTitle?: string;
  faqSubtitle?: string;
  cta?: CTAProps;
  hideWhyChoose?: boolean;
}

interface PackagingPageLayoutProps {
  data: PackagingPageData;
}

const PackagingPageLayout: React.FC<PackagingPageLayoutProps> = ({ data }) => {
  return (
    <div className="overflow-hidden">
      {/* Banner/Hero Section */}
      <PageHeader
        title={data.title}
        bgImage={data.headerImage}
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: data.rootBreadcrumbName || 'Packaging', path: data.rootBreadcrumbPath || '/services/packaging' },
          { name: data.breadcrumbName }
        ]}
      />

      {/* Overview Section */}
      <OverviewSection
        title={data.overviewTitle}
        description={data.overviewDescription}
        benefits={data.overviewBenefits}
        subDescription={data.overviewsubDescription}
        imageSrc={data.overviewImage}
        imageSrc2={data.overviewImage2}
        layout={data.overviewLayout}
      />

      {/* Dynamic Content Blocks */}
      {data.contentBlocks && data.contentBlocks.map((block, idx) => (
        <ContentBlock key={idx} {...block} />
      ))}

      {/* Applications Section */}
      {data.applications && data.applications.length > 0 && (
        <FeaturesSection
          badge="Applications"
          title={data.applicationsTitle || "Applications"}
          subtitle={data.applicationsSubtitle}
          features={data.applications}
          columns={4}
          centerLastRow={true}
        />
      )}

      {/* Features & Advantages */}
      {data.features && data.features.length > 0 && (
        <FeaturesSection
          title={data.featuresTitle || "Features & Advantages"}
          subtitle={data.featuresSubtitle}
          features={data.features}
          columns={data.features.length === 4 ? 4 : 3}
          centerLastRow={true}
          bgClass="bg-[#fdfbf6] m-3 rounded-2xl relative"
        />
      )}

      {/* Why Choose SEPPA */}
      {!data.hideWhyChoose && (
        <PackagingWhyChooseUs
          title={data.whyChoose?.title}
          description={data.whyChoose?.description}
          paragraphs={data.whyChoose?.paragraphs}
          reasons={data.whyChoose?.reasons}
          imageSrc={data.whyChoose?.image}
        />
      )}

      {/* Methodology Section */}
      {data.methodology && (
        <MethodologySection {...data.methodology} />
      )}



      {/* FAQ Section */}
      {data.faqs ? (
        <section className="py-12 lg:py-24 bg-[#fdfbf6] relative overflow-hidden m-3 rounded-2xl">
          <div className="absolute inset-0 pointer-events-none bg-repeat opacity-100" style={{ backgroundImage: `url(${bgPattern.src})`, backgroundSize: 'auto' }}></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col lg:flex-row gap-16 items-start">
              <motion.div
                className="w-full lg:w-5/12 lg:sticky lg:top-24"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={staggerContainer}
              >
                <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white mb-6 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-seppa-red"></span>
                  <span className="text-sm font-medium text-[#101934] uppercase tracking-wider">Frequently Asked Questions.</span>
                </motion.div>
                <AnimatedHeading
                  text={data.faqTitle || "Common Questions"}
                  elementType="h2"
                  className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-[#101934] leading-tight mb-6 max-w-[400px]"
                />
                {data.faqSubtitle && (
                  <motion.p variants={fadeInUp} className="text-gray-600 mb-8">
                    {data.faqSubtitle}
                  </motion.p>
                )}
              </motion.div>
              <motion.div
                className="w-full lg:w-7/12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={fadeInUp}
              >
                <Accordion items={data.faqs} defaultOpenIndex={0} />
              </motion.div>
            </div>
          </div>
        </section>
      ) : (
        <HomeFAQs />
      )}

      {/* Call to Action */}
      {data.cta && (
        <CallToAction
          title={data.cta.title}
          description={data.cta.description}
          buttonText={data.cta.buttonText}
          buttonLink={data.cta.buttonLink}
        />
      )}

      {/* Our Clients */}
      <Clients />

      {/* Client Testimonials */}
      <Testimonials />

      {/* Our Partners */}
      <Partners />

      {/* Awards & Achievements */}
      <Awards />

      {/* Contact Us */}
      <PackagingContact />

      {/* Blog Section */}
      <LatestBlogs />
    </div>
  );
};

export default PackagingPageLayout;
