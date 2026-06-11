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
    question: "What types of textiles do you manufacture and supply?",
    answer: "We combine eco friendly processes, responsible sourcing & advance technology to deliver sustainable textiles without compromising quality or performance."
  },
  {
    question: "What quality standards do your textile products follow?",
    answer: "All our products undergo strict quality control procedures to meet international standards. We are ISO certified and ensure consistency across all batches."
  },
  {
    question: "Are your textile manufacturing processes sustainable?",
    answer: "Yes, sustainability is at the core of our operations. We utilize eco-friendly dyes, minimize water consumption, and source ethically produced raw materials."
  },
  {
    question: "Do you provide samples before bulk textile production?",
    answer: "Absolutely. We encourage clients to request samples to verify texture, color, and quality before committing to bulk production orders."
  },
  {
    question: "Which industries do you serve with textile solutions?",
    answer: "We serve a wide range of industries including fashion, automotive, interior design, medical, and industrial safety applications."
  }
];

const HomeFAQs = () => {
  return (
    <section className="py-24 bg-[#fdfbf6] relative overflow-hidden m-3 rounded-2xl">
      <div className="absolute inset-0 pointer-events-none bg-repeat opacity-100" style={{ backgroundImage: `url(${bgPattern.src})`, backgroundSize: 'auto' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left Content */}
          <motion.div 
            className="w-full lg:w-5/12 sticky top-24"
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
              text="Helpful answer to textile industry questions" 
              elementType="h2" 
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-dark leading-tight mb-10 max-w-[400px]" 
            />
            
            <motion.div variants={fadeInUp} className="flex items-center gap-3 group cursor-pointer w-max">
              <Link href="/faqs" className="inline-flex bg-[#273051] text-white px-7 py-3 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-seppa-red transition duration-300 tracking-wide">
                View all FAQ's
              </Link>
              <Link href="/faqs" className="w-12 h-12 md:w-14 md:h-14 bg-seppa-red flex items-center justify-center text-white rounded-full hover:bg-[#273051] transition duration-300 shadow-md">
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
