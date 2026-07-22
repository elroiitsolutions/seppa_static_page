"use client";
import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { Link } from '@/i18n/routing';
import AnimatedHeading from '../ui/AnimatedHeading';
import bgPattern from '@/assets/bg/black-line-1.png';

import { useTranslations, useLocale } from 'next-intl';
import enHome from '@/messages/en/home.json';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const HowItWorks = () => {
  const t = useTranslations('home');
  const locale = useLocale();
  const isArabic = locale === 'ar';
  const isDe = locale === 'de';

  const getT = (key: string) => isDe ? ((enHome as any).HowItWorks?.[key] || key) : t(`HowItWorks.${key}`);

  const processes = [
    {
      num: "01",
      title: getT('process1Title'),
      desc: getT('process1Desc'),
      tags: [getT('knowMore')],
      link: "/electric-pet-blowing"
    },
    {
      num: "02",
      title: getT('process2Title'),
      desc: getT('process2Desc'),
      tags: [getT('knowMore')],
      link: "/tunnel-pasteurizers"
    },
    {
      num: "03",
      title: getT('process3Title'),
      desc: getT('process3Desc'),
      tags: [getT('knowMore')],
      link: "/rinser-filler-capper"
    },
    {
      num: "04",
      title: getT('process4Title'),
      desc: getT('process4Desc'),
      tags: [getT('knowMore')],
      link: "/pallet-equipment"
    },
    {
      num: "05",
      title: getT('process5Title'),
      desc: getT('process5Desc'),
      tags: [getT('knowMore')],
      link: "/kombo"
    },
    {
      num: "06",
      title: getT('process6Title'),
      desc: getT('process6Desc'),
      tags: [getT('knowMore')],
      link: "/semi-automatic"
    }
  ];

  // State to track which card is hovered to match the exact design behavior
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(1); // Default center card is active

  return (
    <section className="py-12 lg:py-24 bg-[#101934] relative overflow-hidden m-3 rounded-2xl">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none bg-no-repeat bg-center bg-cover opacity-15" style={{ backgroundImage: `url(${bgPattern.src})` }}></div>

      <div className="container mx-auto px-4 relative z-10">

        {/* Header Section */}
        <motion.div
          className="text-center max-w-[1200px] mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-700 bg-[#1c1c1c] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-seppa-red"></span>
            <span className="text-sm font-medium text-gray-300 uppercase tracking-wider">
              {getT('tag')}
            </span>
          </motion.div>
          <div className='w-full max-w-[1000px] mx-auto flex justify-center text-center'>
            <AnimatedHeading
              text={getT('heading')}
              elementType="h2"
              className="text-4xl md:text-5xl lg:text-[52px] font-heading font-bold text-white leading-tight [&>span]:justify-center"
            />
          </div>
        </motion.div>

        {/* Process Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {processes.map((process, idx) => {
            const isActive = hoveredIdx === idx;

            return (
              <motion.div
                key={idx}
                variants={fadeInUp}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(1)} // Reset to center card on leave to match screenshot
                className={`relative rounded-3xl p-8 min-h-[380px] flex flex-col items-center justify-between transition-all duration-500 cursor-pointer border bg-[#1a1a1a] border-gray-800 ${isActive ? 'lg:bg-[#222222] lg:border-gray-700 lg:shadow-xl lg:scale-[1.02]' : ''}`}
              >
               
                <div className={`w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold font-heading transition-colors duration-500 bg-seppa-red text-white lg:bg-[#ab0a2a] lg:text-white ${isActive ? 'lg:!bg-seppa-red lg:!text-white' : ''}`}>
                  {process.num}
                </div>

                <div className={`text-center transition-all duration-500 opacity-100 translate-y-0 lg:opacity-0 lg:translate-y-4 ${isActive ? 'lg:!opacity-100 lg:!translate-y-0' : ''}`}>
                  <h3 className="text-2xl font-bold font-heading text-white mb-4">
                    {process.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed max-w-[250px] mx-auto">
                    {process.desc}
                  </p>
                </div>
                <Link href={process.link || '#'}>
                  <div className="flex items-center gap-3 w-full justify-center pt-6 border-t border-gray-800/50 mt-auto">
                    {process.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="bg-[#141414] border border-gray-800 text-gray-400 text-xs px-4 py-2 rounded-full transition-colors hover:bg-seppa-red hover:text-white">
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Callout */}
        {/* <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <p className="text-gray-400 text-lg flex items-center justify-center flex-wrap gap-2">
            <span className="bg-[seppa-red] text-white text-xs font-bold uppercase px-2 py-1 rounded">Free</span>
            Let's make something great work together. <Link href="/contact-us" className="text-gold font-bold hover:underline">Get Free Quote.</Link>
          </p>
        </motion.div> */}

      </div>
    </section>
  );
};

export default HowItWorks;
