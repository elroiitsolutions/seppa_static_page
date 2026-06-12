"use client";
import React from 'react';
import { motion , Variants } from 'framer-motion';
import Link from 'next/link';
import AnimatedHeading from '../ui/AnimatedHeading';
import Accordion from '../ui/Accordion';
import bgPattern from '@/assets/bg/bg-section-bg-image.png';

const fadeInUp:Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const homeFaqs = [
  {
    question: "What complete turnkey lines and machinery does Seppa Solutions manufacture?",
    answer: "We design and engineer fully automated, end-to-end production lines for mineral water, carbonated soft drinks (CSD), juices, liquid dairy, and commercial brewery plants. Our proprietary machinery covers high-speed PET stretch blow molding, advanced Rinser-Filler-Capper (RFC) monoblocs, and smart end-of-line palletizing logistics."
  },
  {
    question: "How do your Aseptic Non-Contact Fillers prevent product contamination?",
    answer: "Our Aseptic Non-Contact Fillers utilize high-sterility volumetric dispensing tech that fills liquids precisely without ever physically touching the bottle mouth. This eliminates cross-contamination risks entirely, making it the perfect solution for sensitive beverages like juices, nectars, and dairy products."
  },
  {
    question: "What are the operational and cost benefits of the Seppa Kombo Pure system?",
    answer: "The Kombo Pure is a specialized monobloc architecture that integrates bottle blowing, sterile liquid filling, and capping into a single enclosed environment. This innovative layout slashes your initial capital expenditure (CAPEX), reduces your production floor space footprint by up to 40%, and significantly drops daily power consumption."
  },
  {
    question: "Do you provide custom plant layout engineering and post-installation support?",
    answer: "Yes. We handle the entire project lifecycle including custom factory floor layout engineering, technical feasibility analysis, and liquid testing. Following plant commissioning, we provide rigorous operator training, lifetime proactive engineering audits, and a seamless global supply chain for certified spare parts."
  },
  {
    question: "What international regions and compliance standards do your systems support?",
    answer: "Backed by 50 years of engineering experience, Seppa operates across key manufacturing hubs in India, the USA, and the Middle East. All of our processing and packaging lines are built to satisfy strict global safety, health, and environmental compliance regulations, serving brands across 5 continents."
  }
];

const HomeFAQs = () => {
  return (
    <section className="py-12 lg:py-24 bg-[#fdfbf6] relative overflow-hidden m-3 rounded-2xl">
      <div className="absolute inset-0 pointer-events-none bg-repeat opacity-100" style={{ backgroundImage: `url(${bgPattern.src})`, backgroundSize: 'auto' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left Content */}
          <motion.div 
            className="w-full lg:w-5/12 lg:sticky lg:top-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white mb-6 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-seppa-red"></span>
              <span className="text-sm font-medium text-dark uppercase tracking-wider">Frequently Asked Questions.</span>
            </motion.div>
            
            <AnimatedHeading 
              text="Expert answers to liquid packaging & processing questions" 
              elementType="h2" 
              className="text-3xl md:text-4xl lg:text-6xl font-heading font-bold text-dark leading-tight mb-10 max-w-[400px]" 
            />
            
            <motion.div variants={fadeInUp} className="flex items-center gap-3 group cursor-pointer w-max">
              <Link href="/faqs" className="inline-flex bg-[#101934] text-white px-7 py-3 md:py-4 rounded-full font-bold text-base md:text-lg group-hover:bg-seppa-red transition duration-300 tracking-wide">
                View all FAQ's
              </Link>
              <Link href="/faqs" className="w-12 h-12 md:w-14 md:h-14 flex-shrink-0 bg-seppa-red flex items-center justify-center text-white rounded-full group-hover:bg-[#101934] transition duration-300 shadow-md">
                <svg className="transform transition-transform duration-300 group-hover:rotate-45" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="19" x2="19" y2="5"></line><polyline points="9 5 19 5 19 15"></polyline></svg>
              </Link>
            </motion.div>
            
          </motion.div>

          {/* Right Accordion */}
          <motion.div 
            className="w-full lg:w-7/12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
          >
            {/* The Accordion component we built earlier */}
            <Accordion items={homeFaqs} defaultOpenIndex={0} />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HomeFAQs;
