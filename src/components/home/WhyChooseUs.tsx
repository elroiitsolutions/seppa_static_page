"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import Link from 'next/link';
import { FiCheckCircle } from 'react-icons/fi';
import AnimatedHeading from '../ui/AnimatedHeading';

const fadeInUp:Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const tabsData = [
  {
    id: 'organic',
    title: 'Organic Farming',
    image: 'https://demo.awaikenthemes.com/yarnex/wp-content/uploads/2026/02/why-choose-us-tab-1.jpg',
    features: [
      "Industry-leading expertise",
      "Innovative product technology",
      "Competitive pricing global reach",
      "Dedicated customer support"
    ]
  },
  {
    id: 'fresh',
    title: 'Fresh Produce',
    image: 'https://demo.awaikenthemes.com/yarnex/wp-content/uploads/2026/02/service-image-2.jpg',
    features: [
      "Sustainable raw materials",
      "Eco-friendly manufacturing",
      "Ethical labor practices",
      "Premium quality assurance"
    ]
  },
  {
    id: 'delivery',
    title: 'Delivery & Supply',
    image: 'https://demo.awaikenthemes.com/yarnex/wp-content/uploads/2026/02/service-image-3.jpg',
    features: [
      "Global logistics network",
      "On-time delivery tracking",
      "Secure packaging solutions",
      "24/7 support availability"
    ]
  }
];

const WhyChooseUs = () => {
  const [activeTab, setActiveTab] = useState(tabsData[0]);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Large Image */}
          <motion.div 
            className="w-full lg:w-5/12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
          >
            <div className="rounded-[2rem] overflow-hidden h-[800px] w-full shadow-lg">
              <img 
                src="https://demo.awaikenthemes.com/yarnex/wp-content/uploads/2026/02/why-choose-us-img.jpg" 
                alt="Woman inspecting thread" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div 
            className="w-full lg:w-7/12 lg:pl-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
              <span className="text-sm font-medium text-dark uppercase tracking-wider">Why Choose Us</span>
            </motion.div>
            
            <AnimatedHeading 
              text="Why choose us sustainable textile manufacturing" 
              elementType="h2" 
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-dark leading-tight mb-6" 
            />
            
            <motion.p variants={fadeInUp} className="text-lg text-gray-500 mb-12 leading-relaxed">
              We combine eco-friendly processes, responsible sourcing & advanced technology to deliver sustainable textiles without compromising quality or performance.
            </motion.p>

            {/* Custom Tabs */}
            <motion.div variants={fadeInUp} className="mb-10">
              <div className="flex items-center gap-8 border-b border-gray-200 pb-4 relative">
                {tabsData.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab)}
                    className={`text-lg font-bold font-heading relative pb-4 transition-colors duration-300 ${
                      activeTab.id === tab.id ? 'text-dark' : 'text-gray-400 hover:text-dark'
                    }`}
                  >
                    {tab.title}
                    {activeTab.id === tab.id && (
                      <motion.div 
                        layoutId="activeTabIndicator"
                        className="absolute bottom-[-1px] left-0 w-full h-[3px] bg-white flex justify-center"
                      >
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white border-[3px] border-white box-content"></div>
                      </motion.div>
                    )}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Tab Content */}
            <motion.div variants={fadeInUp} className="min-h-[220px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col sm:flex-row gap-8 items-center"
                >
                  <div className="w-full sm:w-2/5 rounded-[2rem] overflow-hidden shadow-sm aspect-[4/3]">
                    <img 
                      src={activeTab.image} 
                      alt={activeTab.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-full sm:w-3/5">
                    <ul className="space-y-4">
                      {activeTab.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <FiCheckCircle className="text-gold text-xl flex-shrink-0" />
                          <span className="text-gray-600 font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Button */}
            <motion.div variants={fadeInUp} className="mt-12 flex items-center gap-3 group cursor-pointer w-max">
              <Link href="/about-us" className="inline-flex bg-[#273051] text-white px-8 py-[18px] rounded-full font-bold text-lg group-hover:bg-seppa-red transition duration-300 tracking-wide">
                Explore Fabrics
              </Link>
              <Link href="/about-us" className="w-[60px] h-[60px] bg-seppa-red flex items-center justify-center text-white rounded-full group-hover:bg-[#273051] transition duration-300 shadow-md">
                <svg className="transform transition-transform duration-300 group-hover:rotate-45" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="19" x2="19" y2="5"></line><polyline points="9 5 19 5 19 15"></polyline></svg>
              </Link>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
