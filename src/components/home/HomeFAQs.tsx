"use client";
import React from 'react';
import { motion , Variants } from 'framer-motion';
import { Link } from '@/i18n/routing';
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

import { useTranslations, useLocale } from 'next-intl';
import enHome from '@/messages/en/home.json';
import { usePathname } from 'next/navigation';

const HomeFAQsContent = ({ getT, isArabic }: { getT: (key: string) => string; isArabic: boolean }) => {
  const homeFaqs = [
    {
      question: getT('q1'),
      answer: getT('a1')
    },
    {
      question: getT('q2'),
      answer: getT('a2')
    },
    {
      question: getT('q3'),
      answer: getT('a3')
    },
    {
      question: getT('q4'),
      answer: getT('a4')
    },
    {
      question: getT('q5'),
      answer: getT('a5')
    }
  ];

  return (
    <section className="py-12 lg:py-24 bg-[#fdfbf6] relative overflow-hidden m-3 rounded-2xl">
      <div className="absolute inset-0 pointer-events-none bg-repeat opacity-100" style={{ backgroundImage: `url(${bgPattern.src})`, backgroundSize: 'auto' }}></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
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
              <span className="text-sm font-medium text-dark uppercase tracking-wider">
                {getT('tag')}
              </span>
            </motion.div>
            
            <AnimatedHeading 
              text={getT('heading')} 
              elementType="h2" 
              className="text-3xl md:text-4xl lg:text-6xl font-heading font-bold text-dark leading-tight mb-10 max-w-[400px]" 
            />
            
            <motion.div variants={fadeInUp} className="flex items-center gap-3 group cursor-pointer w-max">
              <Link href={"/faqs"} className="inline-flex bg-[#101934] text-white px-7 py-3 md:py-4 rounded-full font-bold text-base md:text-lg group-hover:bg-seppa-red transition duration-300 tracking-wide">
                {getT('viewAll')}
              </Link>
              <Link href={"/faqs"} className="w-12 h-12 md:w-14 md:h-14 flex-shrink-0 bg-seppa-red flex items-center justify-center text-white rounded-full group-hover:bg-[#101934] transition duration-300 shadow-md">
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

const LocalizedHomeFAQs = () => {
  const t = useTranslations('home');
  const locale = useLocale();
  const isArabic = locale === 'ar';
  const getT = (key: string) => t(`HomeFAQs.${key}`);
  return <HomeFAQsContent getT={getT} isArabic={isArabic} />;
};

const StaticHomeFAQs = () => {
  const pathname = usePathname() || '';
  const isArabic = pathname.startsWith('/ar') || pathname.startsWith('/ar/');
  const getT = (key: string) => ((enHome as any).HomeFAQs?.[key] || key);
  return <HomeFAQsContent getT={getT} isArabic={isArabic} />;
};

const HomeFAQs = () => {
  const pathname = usePathname() || '';
  const isLocalized = pathname.startsWith('/ar') || pathname.startsWith('/en') || pathname.startsWith('/de');
  return isLocalized ? <LocalizedHomeFAQs /> : <StaticHomeFAQs />;
};

export default HomeFAQs;
