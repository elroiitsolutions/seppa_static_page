"use client";
import { useState, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from '@/i18n/routing';
import { FiCheckCircle, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import AnimatedHeading from '../ui/AnimatedHeading';

import { useTranslations, useLocale } from 'next-intl';
import enHome from '@/messages/en/home.json';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const OurIndustries = () => {
  const t = useTranslations('home');
  const locale = useLocale();
  const isArabic = locale === 'ar';
  const isDe = locale === 'de';

  const getT = (key: string) => isDe ? ((enHome as any).OurIndustries?.[key] || key) : t(`OurIndustries.${key}`);

  const tabsData = [
    {
      id: 'organic',
      title: getT('tab1Title'),
      image: '/pics/pexels-photo-17559580.jpg',
      description: getT('tab1Desc'),
      link: "/juice"
    },
    {
      id: 'fresh',
      title: getT('tab2Title'),
      image: '/pics/c4ee15bc22fa3a63fce34fd4017026e4.jpg',
      description: getT('tab2Desc'),
      link: "/liquid"
    },
    {
      id: 'delivery',
      title: getT('tab3Title'),
      image: '/pics/large.jpg',
      description: getT('tab3Desc'),
      link: "/dairy-product-line-machines"
    },
    {
      id: 'beer',
      title: getT('tab4Title'),
      image: '/pics/a-beermovie.jpg',
      description: getT('tab4Desc'),
      link: "/beer"
    }
  ];

  const [activeTab, setActiveTab] = useState(tabsData[0]);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 250;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };
  return (
    <section className="py-16 lg:py-28">
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex flex-col items-center w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {/* Header Section */}
          <motion.div variants={fadeInUp} className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white mb-6 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-seppa-red"></span>
              <span className="text-sm font-medium text-dark uppercase tracking-wider">
                {getT('tag')}
              </span>
            </div>
        
            <AnimatedHeading 
              text={getT('heading')} 
              elementType="h2" 
              className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-dark leading-tight mb-6 text-center" 
            />
            
            <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
              {getT('description')}
            </p>
          </motion.div>

          {/* Static Images Section */}
          <motion.div 
            className="w-full max-w-3xl mx-auto relative mb-20 mt-4 px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-full md:w-[85%] mx-auto relative group overflow-hidden rounded-[2rem] shadow-xl aspect-[16/9] md:aspect-[21/9] cursor-pointer">
              <img 
                src="/pics/corporate.jpg" 
                alt="Factory machinery" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
              <div className="shine-overlay" />
            </div>
            <img 
              src="/pics/seppa logo.png" 
              alt="Seppa logo" 
              className="w-[45%] md:w-[35%] max-w-[200px] absolute -bottom-10 left-8 md:left-[10%] border-[6px] md:border-[8px] border-[#f9f8f4] rounded-2xl shadow-xl object-cover z-10 bg-white"
            />
          </motion.div>


          {/* Custom Tabs Navigation */}
          <motion.div variants={fadeInUp} className="mb-12 relative group border-b border-gray-200 flex items-center w-full max-w-5xl mx-auto">
            
            {/* Left Arrow */}
            {/* <button 
              onClick={() => scroll('left')}
              className="absolute left-0 z-10 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md text-dark hover:bg-gray-100 hover:scale-105 transition-all opacity-80 hover:opacity-100 hidden md:flex -ml-5 border border-gray-200"
              aria-label="Scroll left"
            >
              <FiChevronLeft className="text-2xl" />
            </button> */}

            {/* Tabs List */}
            <div 
              ref={scrollContainerRef}
              className="flex overflow-x-auto w-full border-none scrollbar-hide py-2 md:justify-center gap-4 md:gap-8 px-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {tabsData.map((tab) => (
                <button
                  key={tab.id}
                  id={`tab-${tab.id}`}
                  suppressHydrationWarning
                  className={`relative pb-4 text-base md:text-[17px] font-bold font-heading transition-all duration-300 whitespace-nowrap cursor-pointer ${
                    activeTab.id === tab.id 
                      ? 'text-seppa-red font-extrabold' 
                      : 'text-[#101934]/70 hover:text-seppa-red'
                  }`}
                  onClick={() => {
                    const tabObject = tabsData.find(t => t.id === tab.id);
                    if (tabObject) setActiveTab(tabObject);
                  }}
                >
                  {tab.title}
                  {activeTab.id === tab.id && (
                    <motion.div 
                      layoutId="activeTabBorder"
                      className="absolute bottom-0 left-0 right-0 h-[3px] bg-seppa-red rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Right Arrow */}
            {/* <button 
              onClick={() => scroll('right')}
              className="absolute right-0 z-10 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md text-dark hover:bg-gray-100 hover:scale-105 transition-all opacity-80 hover:opacity-100 hidden md:flex -mr-5 border border-gray-200"
              aria-label="Scroll right"
            >
              <FiChevronRight className="text-2xl" />
            </button> */}

          </motion.div>

          {/* Dynamic Content Card */}
          <motion.div 
            className="w-full max-w-5xl mx-auto bg-[#f9f8f4] rounded-[2rem] p-6 md:p-12 shadow-sm min-h-[400px] flex items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col lg:flex-row gap-8 lg:gap-16 w-full"
              >
                <div className="w-full lg:w-1/2 relative group overflow-hidden rounded-2xl shadow-md aspect-[4/3] max-h-[300px]">
                  <img 
                    src={activeTab.image} 
                    alt={activeTab.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  />
                  <div className="shine-overlay" />
                </div>
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <div className="mb-8 hidden lg:block">
                    <AnimatedHeading 
                      text={activeTab.title}
                      elementType="h3"
                      className="text-3xl font-heading font-bold text-dark"
                    />
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed mb-8">
                    {activeTab.description}{" "}
                    <Link href={activeTab.link} className="text-seppa-red hover:underline font-medium ml-1">
                      {getT('more')}
                    </Link>
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Button */}
          <motion.div variants={fadeInUp} className="mt-16 text-center">
            <Link href={isArabic ? "/contact-us" : "/contact-us"} className="inline-flex items-center gap-3 group cursor-pointer">
              <span className="inline-flex bg-[#101934] text-white px-6 md:px-8 py-4 md:py-[18px] rounded-full font-bold text-base md:text-lg group-hover:bg-seppa-red transition duration-300 tracking-wide text-center">
                {getT('consultation')}
              </span>
              <span className="w-14 h-14 md:w-[60px] md:h-[60px] flex-shrink-0 bg-seppa-red flex items-center justify-center text-white rounded-full group-hover:bg-[#101934] transition duration-300 shadow-md">
                <svg className="transform transition-transform duration-300 group-hover:rotate-45 w-5 h-5 md:w-[22px] md:h-[22px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="19" x2="19" y2="5"></line><polyline points="9 5 19 5 19 15"></polyline></svg>
              </span>
            </Link>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default OurIndustries;
