"use client";
import React from 'react';
import PageHeader from '@/components/layout/PageHeader';
import OverviewSection from '@/components/packaging/OverviewSection';
import ContentBlock from '@/components/ui/ContentBlock';
import FeaturesSection from '@/components/packaging/FeaturesSection';
import PackagingWhyChooseUs from '@/components/packaging/PackagingWhyChooseUs';
import Accordion from '@/components/ui/Accordion';
import AnimatedHeading from '@/components/ui/AnimatedHeading';
import bgPattern from '@/assets/bg/bg-section-bg-image.png';
import { motion, Variants } from 'framer-motion';
import Clients from '@/components/home/Clients';
import Partners from '@/components/home/Partners';
import Awards from '@/components/home/Awards';
import LatestBlogs from '@/components/home/LatestBlogs';

import headerImg from '@/assets/about-us/generated/header.png';
import whoWeAreImg from '@/assets/about-us/generated/who_we_are.png';
import whatWeBuildImg from '@/assets/about-us/generated/what_we_build.png';
import whyChooseImg from '@/assets/about-us/generated/why_choose.png';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const AboutUsPage = () => {
  const faqs = [
    {
      question: "What types of beverage processing equipment does SEPPA supply?",
      answer: "Processing systems, PET blowing machines, rinser filler capper units, liquid filling machine configurations, labelling systems, batch coders, shrink wrappers, carton handlers, pallet equipment, and complete integrated production line packages."
    },
    {
      question: "Can packaging solutions be customized to our facility?",
      answer: "Every project is different. We design packaging solutions around your capacity targets, product specs, facility dimensions, and operational requirements."
    },
    {
      question: "Do you handle international plant installations?",
      answer: "Yes. We provide project management, on site support, and technical assistance for operations across multiple countries and regions."
    },
    {
      question: "How does SEPPA approach food safety in equipment design?",
      answer: "Stainless steel contact surfaces, CIP compatibility, automated cleaning, and sealed drive assemblies where required. These are engineering requirements built into every project, not optional additions."
    },
    {
      question: "Why choose a turnkey approach over sourcing equipment separately?",
      answer: "Single vendor turnkey delivery removes integration risk. Every machine is configured to work with the next one. Sourcing equipment separately puts the integration burden on the client and integration failures are expensive to fix after the fact."
    }
  ];

  const equipmentFeatures = [
    {
      title: "Processing Systems",
      description: "Heat exchangers, blenders, carbonation units, homogenizers, filtration systems, and CIP circuits. The core of any beverage manufacturing plant."
    },
    {
      title: "Liquid Filling Machine Configurations",
      description: "We supply liquid filling machine setups for still water, carbonated beverages, juices, spirits, dairy, and wine. Each is matched to the product's viscosity, carbonation level, container type, and required fill accuracy not just selected from a chart."
    },
    {
      title: "PET Blowing Machines",
      description: "Automatic and semi automatic PET blowers for standard bottles, wide mouth formats, and large containers. Our PET jar blowing machines handle wider-neck formats used in water dispensing and food packaging."
    },
    {
      title: "Rinser Filler Capper Systems",
      description: "Monoblock rinser filler capper units engineered for high speed, hygienic operation across still and carbonated products. Configurations vary based on output speed and cap type."
    },
    {
      title: "Packaging Solutions",
      description: "Labelling systems, shrink wrappers, carton handlers, stretch wrappers, crate stackers, and pallet equipment selected and configured to match line speed, output format, and facility layout."
    },
    {
      title: "Bottling Line Equipment",
      description: "Complete bottling line equipment packages for water, CSD, juice, beer, wine, and spirits. We configure multi SKU setups where lines handle more than one product or container size."
    }
  ];

  const industryFeatures = [
    {
      title: "Water Production",
      description: "Still, mineral, alkaline, sparkling, structured, and flavoured vitamin water. Lines are sized by fill rate and container format from small PET to 19 liter jars."
    },
    {
      title: "Carbonated Soft Drinks",
      description: "CSD complete lines with carbonation, syrup dosing, mixing, and high speed filling. Matched to output targets and container type."
    },
    {
      title: "Juice, Nectars & Isotonics",
      description: "Hot fill and cold fill systems for juice, nectar, isotonic beverages, and teas. Pasteurization and aseptic options available depending on shelf life requirements."
    },
    {
      title: "Beer & Brewing",
      description: "Brewing, fermentation, filtration, tunnel pasteurization, and complete beer bottling line equipment. Built for craft and commercial scale."
    },
    {
      title: "Wine, Spirits & RTDs",
      description: "Processing and packaging solutions for wine, mead, spirits, RTD beverages, and hard seltzers. Glass, PET, and can formats supported."
    },
    {
      title: "Dairy Products",
      description: "Liquid dairy processing and filling systems for milk, flavoured dairy drinks, and UHT formats."
    },
    {
      title: "Sauces & Ketchup",
      description: "Filling systems for tomato based products, ketchup, and pourable sauces with viscosity appropriate valve configurations."
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Banner/Hero Section */}
      <PageHeader
        title="About SEPPA Solutions"
        bgImage={headerImg.src}
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'About Us' }
        ]}
      />

      {/* Who We Are */}
      <OverviewSection
        title="Who We Are"
        description="SEPPA Solutions supplies beverage processing equipment and complete production systems for liquid manufacturers across the globe. We help businesses build plants that run well, not just ones that look good on paper."
        subDescription={[
          "Our clients operate in mineral water, carbonated soft drinks, juices, dairy, beer, wine, spirits, and ready to drink sectors. Some arrive with detailed engineering plans. Others have a product and an empty floor. Either way, we put the right systems in place and stay involved until they work the way they should.",
          "What actually separates us from equipment vendors is accountability. Our team handles consultation, plant engineering, manufacturing, installation, commissioning, and technical support. There is always one team responsible for the whole thing which is not something most suppliers offer."
        ]}
        imageSrc={whoWeAreImg.src}
        layout="side-by-side"
      />

      {/* What We Build */}
      <ContentBlock
        title="What We Build"
        paragraphs={[
          "The international beverages processing industry market surpassed the USD 29 billion mark in 2025. This industry growth has been supported due to an increase in the number of packaged beverages, growing demand for automation, and increasing food safety regulations across the globe.",
          "At SEPPA, we build production systems for two situations: manufacturers starting from scratch and those expanding an existing operation. The output looks different in each case. The engineering approach is the same. We look at your production targets, product mix, and facility constraints then build around those specifics, not around a standard catalogue offering.",
          "Our systems cover multiple container formats. PET bottles, cans, glass, pouches, brick cartons, gable tops, aseptic drums each format has its own filling sequence, hygiene requirements, and downstream packaging solutions configuration. We design complete systems for all of them."
        ]}
        image1={whatWeBuildImg.src}
        reverse={true}
        bgClass={'bg-light'}
      />

      {/* Equipment We Supply */}
      <FeaturesSection
        badge="Equipment"
        title="Equipment We Supply"
        subtitle="From precise filling to efficient packaging, we engineer components for every stage of your production line."
        features={equipmentFeatures}
        columns={3}
        bgClass="bg-[#fdfbf6] m-3 rounded-2xl relative"
      />

      {/* Industries We Serve */}
      <FeaturesSection
        badge="Industries"
        title="Industries We Serve"
        subtitle="Solutions built to handle the unique demands of each beverage sector."
        features={industryFeatures}
        columns={4}
        centerLastRow={true}
        bgClass="bg-white"
      />

      {/* Why Manufacturers Choose SEPPA */}
      <PackagingWhyChooseUs
        title="Why Manufacturers Choose SEPPA"
        description="There is no shortage of beverage processing equipment suppliers in this sector. The reason manufacturers come back and refer others comes down to a few consistent things."
        paragraphs={[
          "We do not push standard configurations. Every line we deliver is engineered around the client's product, output volume, and facility not around what we happen to stock. The difference between a line running at 85% efficiency and one running at 95% is usually in the engineering details: machine sequencing, buffer zones, CIP integration, operator interface design. Those details require engineering judgment, not catalogue selection.",
          "We handle complexity well. Multi format plants, multi product lines, simultaneous liquid and carton output, phased construction projects we manage the complexity so our clients do not have to.",
          "We stay reachable. International projects, regional support, spare parts logistics our team is structured to support production operations wherever they operate."
        ]}
        imageSrc={whyChooseImg.src}
      />

      {/* FAQ Section */}
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
                text="Common Questions"
                elementType="h2"
                className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-[#101934] leading-tight mb-6 max-w-[400px]"
              />
            </motion.div>
            <motion.div
              className="w-full lg:w-7/12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeInUp}
            >
              <Accordion items={faqs} defaultOpenIndex={0} />
            </motion.div>
          </div>
        </div>
      </section>

      <Clients />
      <Partners />
      <Awards />
      <LatestBlogs />

    </div>
  );
};

export default AboutUsPage;
