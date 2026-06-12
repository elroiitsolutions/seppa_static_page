"use client";
import { useState, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { FiCheckCircle, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const tabsData = [
  {
    id: 'organic',
    title: 'Juices, Drinks & Isotonics',
    image: 'pics/pexels-photo-17559580.jpg',
    features: [
      "Industry-leading expertise",
      "Innovative product technology",
      "Competitive pricing global reach",
      "Dedicated customer support"
    ]
  },
  {
    id: 'fresh',
    title: 'Carbonated Soft Drinks',
    image: 'pics/c4ee15bc22fa3a63fce34fd4017026e4.jpg',
    features: [
      "Sustainable raw materials",
      "Eco-friendly manufacturing",
      "Ethical labor practices",
      "Premium quality assurance"
    ]
  },
  {
    id: 'delivery',
    title: 'Liquid Dairy Products',
    image: 'pics/large.jpg',
    features: [
      "Global logistics network",
      "On-time delivery tracking",
      "Secure packaging solutions",
      "24/7 support availability"
    ]
  },
  {
    id: 'beer',
    title: 'Beer',
    image: 'pics/a-beermovie.jpg',
    features: [
      "Global logistics network",
      "On-time delivery tracking",
      "Secure packaging solutions",
      "24/7 support availability"
    ]
  }
];
const OurIndustries = () => {
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
              <span className="text-sm font-medium text-dark uppercase tracking-wider">The Seppa Advantage</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-dark leading-tight mb-6">
              WHY SEPPA SOLUTIONS? <br className="hidden md:block" /> An Uncompromising Operational Efficiency, Engineered Internationally
            </h2>
            
            <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
              Decades of specialized liquid engineering allows Seppa to deliver reliable, highly adaptable multi-product systems. We build machinery that meets strict global safety standards while ensuring rapid ROI for modern bottling plants.
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
            <img 
              src="pics/corporate.jpg" 
              alt="Factory machinery" 
              className="w-full md:w-[85%] rounded-[2rem] shadow-xl object-cover mx-auto aspect-[16/9] md:aspect-[21/9]"
            />
            <img 
              src="pics/seppa logo.png" 
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

            <div 
              ref={scrollContainerRef}
              className="flex items-center md:justify-center gap-8 relative overflow-x-auto whitespace-nowrap [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] w-full px-2 lg:px-8"
            >
              {tabsData.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab)}
                  className={`text-lg lg:text-xl font-bold font-heading relative pb-4 lg:pb-5 transition-colors duration-300 ${
                    activeTab.id === tab.id ? 'text-dark' : 'text-gray-400 hover:text-dark'
                  }`}
                >
                  {tab.title}
                  {activeTab.id === tab.id && (
                    <motion.div 
                      layoutId="activeTabIndicator"
                      className="absolute bottom-[-1px] left-0 w-full h-[3px] bg-[#b88f45]"
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

          {/* Tab Content */}
          <motion.div variants={fadeInUp} className="w-full max-w-6xl mx-auto min-h-[350px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col lg:flex-row gap-12 items-center bg-white rounded-[2.5rem] p-6 lg:p-10 shadow-sm border border-gray-100"
              >
                <div className="w-full lg:w-1/2 rounded-3xl overflow-hidden shadow-sm aspect-[4/3] lg:aspect-auto lg:h-[400px]">
                  <img 
                    src={activeTab.image} 
                    alt={activeTab.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <h3 className="text-3xl font-heading font-bold text-dark mb-8 hidden lg:block">{activeTab.title}</h3>
                  <ul className="space-y-6">
                    {activeTab.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-[#f9f8f4] flex items-center justify-center flex-shrink-0">
                          <FiCheckCircle className="text-[#b88f45] text-xl" />
                        </div>
                        <span className="text-gray-700 font-medium text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Button */}
          <motion.div variants={fadeInUp} className="mt-16 text-center">
            <Link href="/about-us" className="inline-flex items-center gap-3 group cursor-pointer">
              <span className="inline-flex bg-[#101934] text-white px-6 md:px-8 py-4 md:py-[18px] rounded-full font-bold text-base md:text-lg group-hover:bg-seppa-red transition duration-300 tracking-wide text-center">
                Schedule a Technical Consultation
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
