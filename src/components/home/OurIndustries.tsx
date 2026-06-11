"use client";
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { FiCheckCircle } from 'react-icons/fi';

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
    title: 'Carbonated Soft Drinks',
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
    title: 'Liquid Dairy Products',
    image: 'https://demo.awaikenthemes.com/yarnex/wp-content/uploads/2026/02/service-image-3.jpg',
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
    image: 'https://demo.awaikenthemes.com/yarnex/wp-content/uploads/2026/02/service-image-3.jpg',
    features: [
      "Global logistics network",
      "On-time delivery tracking",
      "Secure packaging solutions",
      "24/7 support availability"
    ]
  }
];
const OurIndustries = () => {
  const [activeTab, setActiveTab] = useState(tabsData[0])
  return (
    <section className="py-20 lg:py-28 bg-[#f9f8f4]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Content */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white mb-6 shadow-sm">
              {/* <span className="w-1.5 h-1.5 rounded-full bg-gold"></span> */}
              <span className="w-1.5 h-1.5 rounded-full bg-seppa-red"></span>
              <span className="text-sm font-medium text-dark uppercase tracking-wider">Why seppa</span>
            </motion.div>

            <motion.h2 variants={fadeInUp} className="text-4xl lg:text-5xl font-heading font-bold text-dark leading-tight mb-6">
              Welcome to Seppa – Global Leader in Processing and Packaging Solutions
            </motion.h2>
            
            <motion.p variants={fadeInUp} className="text-gray-600 text-lg mb-8 leading-relaxed">
           50 YEARS OF COMPLETE LINE SOLUTION
            </motion.p>
            <motion.p variants={fadeInUp} className="text-gray-600 text-lg mb-8 leading-relaxed">
            SEPPA is a world leader in complete line solutions. with over 50 years of experience in packaging equipments and complete line solutions covering water, soft drink, juice, sparkling water, beer, liquor and milk with a state of art design and production center in India, USA and Middle East to deliver multi product solutions.
            </motion.p>
             {/* Custom Tabs */}
                        <motion.div variants={fadeInUp} className="mb-10">
                          <div className="flex items-center gap-8 border-b border-gray-200 relative overflow-x-auto whitespace-nowrap [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
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
                                    className="absolute bottom-[-1px] left-0 w-full h-[3px] bg-[#b88f45]"
                                  />
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
            <motion.div variants={fadeInUp}>
              <Link href="/about-us" className="mt-12 flex items-center gap-3 group cursor-pointer w-max">
                <span className="inline-flex bg-[#273051] text-white px-8 py-[18px] rounded-full font-bold text-lg group-hover:bg-seppa-red transition duration-300 tracking-wide">
                  About Us
                </span>
                <span className="w-[60px] h-[60px] bg-seppa-red flex items-center justify-center text-white rounded-full group-hover:bg-[#273051] transition duration-300 shadow-md">
                  <svg className="transform transition-transform duration-300 group-hover:rotate-45" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="19" x2="19" y2="5"></line><polyline points="9 5 19 5 19 15"></polyline></svg>
                </span>
              </Link>
            </motion.div>
            {/* Grid Items */}
            {/* <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-gold shadow-sm group-hover:bg-gold group-hover:text-white transition duration-300">
                  <FiTrendingUp className="text-xl" />
                </div>
                <span className="font-medium text-dark group-hover:text-gold transition duration-300">Automotive & Transportation</span>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-gold shadow-sm group-hover:bg-gold group-hover:text-white transition duration-300">
                  <FiHome className="text-xl" />
                </div>
                <span className="font-medium text-dark group-hover:text-gold transition duration-300">Construction & Infrastructure</span>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-gold shadow-sm group-hover:bg-gold group-hover:text-white transition duration-300">
                  <FiShoppingBag className="text-xl" />
                </div>
                <span className="font-medium text-dark group-hover:text-gold transition duration-300">Hospitality & Home Furnishing</span>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-gold shadow-sm group-hover:bg-gold group-hover:text-white transition duration-300">
                  <FiBox className="text-xl" />
                </div>
                <span className="font-medium text-dark group-hover:text-gold transition duration-300">Industrial Safety Applications</span>
              </div>
            </motion.div>
             */}
            {/* Call to Actions */}
            {/* <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-6 mt-8">
              <div className="flex items-center gap-2 group cursor-pointer">
                <Link href="/contact-us" className="bg-[#7A4B45] text-white px-8 py-4 rounded-full font-medium transition duration-300 hover:bg-dark">
                  Get A Quote
                </Link>
                <Link href="/contact-us" className="w-[54px] h-[54px] shrink-0 bg-gold flex items-center justify-center text-white rounded-full group-hover:bg-dark transition duration-300 shadow-md">
                  <svg className="transform transition-transform duration-300 group-hover:rotate-45" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="19" x2="19" y2="5"></line><polyline points="9 5 19 5 19 15"></polyline></svg>
                </Link>
              </div>
              
              <div className="flex items-center gap-4 ml-0 md:ml-4">
                <div className="w-14 h-14 rounded-full bg-[#7A4B45] text-white flex items-center justify-center shadow-md">
                  <FiHeadphones className="text-2xl" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm mb-1">Need Any Help?</p>
                  <p className="text-dark font-bold text-lg font-heading">+(123) 456-789</p>
                </div>
              </div>
            </motion.div> */}
            
          </motion.div>

          {/* Right Content - Images */}
          <motion.div 
            className="w-full lg:w-1/2 relative mt-12 lg:mt-0 mb-12 lg:mb-0"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="https://demo.awaikenthemes.com/yarnex/wp-content/uploads/2026/02/industries-image-1.jpg" 
              alt="Factory machinery" 
              className="w-[85%] rounded-3xl shadow-xl object-cover ml-auto"
            />
            <img 
              src="https://demo.awaikenthemes.com/yarnex/wp-content/uploads/2026/02/industries-image-2.jpg" 
              alt="Girl sewing" 
              className="w-[55%] absolute -bottom-10 left-0 border-[10px] border-[#f9f8f4] rounded-[2rem] shadow-2xl object-cover z-10"
            />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default OurIndustries;
