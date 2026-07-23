import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Link } from '@/i18n/routing';
import { FiCheckCircle, FiPlay } from 'react-icons/fi';

import { useTranslations, useLocale } from 'next-intl';
import enHome from '@/messages/en/home.json';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const HomeHero = () => {
  const t = useTranslations('home');
  const locale = useLocale();
  const isArabic = locale === 'ar';
  const isDe = locale === 'de';

  const getT = (key: string) => isDe ? ((enHome as any).HomeHero?.[key] || key) : t(`HomeHero.${key}`);

  const bullets = [
    getT('bullet1'),
    getT('bullet2'),
    getT('bullet3'),
    getT('bullet4')
  ];

  return (
    <section className="relative min-h-[100dvh] w-full overflow-hidden flex flex-col justify-between">
      {/* Background Video Wrapper - uses hero-video-wrapper class defined in globals.css */}
      <div className="hero-video-wrapper absolute inset-0 z-0 pointer-events-none">
        <div className="relative w-full h-full bg-dark overflow-hidden pointer-events-auto hero-video-inner">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source
              src="/videos/stock-footage-shop-for-the-production-of-drinking-water-on-the-conveyor-moving-water-bottles-production-of.mp4"
              type="video/mp4"
            />
          </video>

          {/* Using inline rgba() for cross-browser gradient consistency */}
          <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(0,0,0,0.65), rgba(0,0,0,0.35))' }}></div>

          {/* Diagonal Lines */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[15, 35, 55, 75, 95].map((pos, idx) => (
              <div
                key={idx}
                style={{ left: `${pos}%` }}
                className="absolute top-[-50%] bottom-[-50%] w-px bg-white/10 rotate-[20deg] hidden md:block"
              />
            ))}
          </div>
        </div>
      </div>
      {/* 
        Using responsive Tailwind containers to ensure proper scaling across 
        1366x768, 1440p, 1080p, 4K, and Ultrawide monitors.
      */}
      <div className="container mx-auto 2xl:max-w-screen-2xl px-4 sm:px-6 md:px-12 lg:px-24 relative z-10 flex-1 flex flex-col justify-center pt-24 sm:pt-28 lg:pt-32 pb-6 lg:pb-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="flex flex-col items-start text-left w-full max-w-[750px]"
        >
          {/* Top avatars and subtitle */}
          <motion.div variants={fadeInUp} className="flex flex-row items-center justify-start gap-2.5 sm:gap-4 mb-3 sm:mb-4">
            <div className="flex -space-x-2 md:-space-x-3">
              <img src="https://demo.awaikenthemes.com/yarnex/wp-content/uploads/2026/02/author-1.jpg" alt="Avatar" className="w-6 h-6 md:w-10 md:h-10 rounded-full border-2 border-dark object-cover" />
              <img src="https://demo.awaikenthemes.com/yarnex/wp-content/uploads/2026/02/author-2.jpg" alt="Avatar" className="w-6 h-6 md:w-10 md:h-10 rounded-full border-2 border-dark object-cover" />
              <img src="https://demo.awaikenthemes.com/yarnex/wp-content/uploads/2026/02/author-3.jpg" alt="Avatar" className="w-6 h-6 md:w-10 md:h-10 rounded-full border-2 border-dark object-cover" />
            </div>
            <span className="text-white font-medium text-xs sm:text-sm md:text-base tracking-wide">
              {getT('sub')}
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={fadeInUp}
            className="font-heading font-bold text-white text-fluid-hero"
          >
            {getT('heading')}
          </motion.h1>

          {/* Subtitle */}
          <motion.p variants={fadeInUp} className="text-sm sm:text-base md:text-lg 2xl:text-xl text-gray-300 leading-relaxed max-w-[650px] mt-3 sm:mt-4 lg:mt-6">
            {getT('desc')}
          </motion.p>

          {/* Buttons */}
          <motion.div variants={fadeInUp} className="flex flex-wrap sm:flex-nowrap items-center mt-5 sm:mt-6 lg:mt-10 gap-3 sm:gap-4 lg:gap-6">
            {/* Primary CTA */}
            <div className="flex items-center gap-2 sm:gap-3 group cursor-pointer shrink-0">
              <Link href={isArabic ? "/contact-us" : "/contact-us"} className="inline-flex bg-seppa-blue text-white px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-[16px] rounded-full font-bold text-sm sm:text-base md:text-lg group-hover:bg-seppa-red transition duration-300 tracking-wide text-center">
                {getT('cta')}
              </Link>
              <Link href={isArabic ? "/contact-us" : "/contact-us"} className="w-10 h-10 sm:w-12 sm:h-12 md:w-[56px] md:h-[56px] flex-shrink-0 bg-seppa-red flex items-center justify-center text-white rounded-full group-hover:bg-seppa-blue transition duration-300 shadow-md">
                <svg className="transform transition-transform duration-300 group-hover:rotate-45 w-4 h-4 sm:w-5 sm:h-5 md:w-[22px] md:h-[22px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="19" x2="19" y2="5"></line><polyline points="9 5 19 5 19 15"></polyline></svg>
              </Link>
            </div>

            {/* Secondary CTA / Watch Video */}
            <a
              href="#about-industries"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('about-industries')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex items-center gap-3 sm:gap-4 cursor-pointer group shrink-0"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-[56px] md:h-[56px] rounded-full bg-white/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full bg-seppa-red flex items-center justify-center text-white pl-0.5">
                  <FiPlay size={16} fill="currentColor" />
                </div>
              </div>
              <span className="text-white font-bold text-sm sm:text-base md:text-lg tracking-wide group-hover:text-seppa-red transition-colors duration-300">
                {getT('video')}
              </span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Checklists */}
      <div className="relative w-full to-transparent pt-3 pb-3 lg:pt-4 lg:pb-5 z-10 mt-auto border-t border-white/10">
        <div className="container mx-auto 2xl:max-w-screen-2xl px-4 sm:px-6 md:px-12 lg:px-24">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-wrap items-center justify-start gap-x-4 sm:gap-x-6 2xl:gap-x-12 gap-y-2.5 w-full"
          >
            {bullets.map((text, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="flex items-center gap-2">
                <FiCheckCircle className="text-seppa-red text-base sm:text-lg lg:text-xl shrink-0" />
                <span className="text-white font-medium text-xs sm:text-sm lg:text-base">{text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
