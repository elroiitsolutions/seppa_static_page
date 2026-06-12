import React from 'react';
import { motion  ,Variants} from 'framer-motion';
import Link from 'next/link';
import { FiCheckCircle, FiPlay } from 'react-icons/fi';

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
  return (
    <section className="relative h-[100vh] overflow-hidden ">
    {/* Background Video */}
      <div className="absolute inset-0 z-0 bg-dark md:m-3 md:rounded-2xl overflow-hidden">
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

 <div className="absolute inset-0 bg-gradient-to-r from-dark/90 to-dark/10"></div>

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
      <div className="container mx-auto px-4 relative z-10 h-full flex items-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-4xl"
        >
          {/* Top avatars and subtitle */}
          <motion.div variants={fadeInUp} className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
            <div className="flex -space-x-2 md:-space-x-3">
              <img src="https://demo.awaikenthemes.com/yarnex/wp-content/uploads/2026/02/author-1.jpg" alt="Avatar" className="w-6 h-6 md:w-12 md:h-12 rounded-full border-2 border-dark" />
              <img src="https://demo.awaikenthemes.com/yarnex/wp-content/uploads/2026/02/author-2.jpg" alt="Avatar" className="w-6 h-6 md:w-12 md:h-12 rounded-full border-2 border-dark" />
              <img src="https://demo.awaikenthemes.com/yarnex/wp-content/uploads/2026/02/author-3.jpg" alt="Avatar" className="w-6 h-6 md:w-12 md:h-12 rounded-full border-2 border-dark" />
            </div>
            <span className="text-white font-small text-sm md:text-base tracking-wide">Crafting quality machinery for global industries
</span>
          </motion.div>
          
          {/* Main Heading */}
          <motion.h1
            variants={fadeInUp}
            className="text-3xl md:text-5xl lg:text-[52px] font-heading font-bold text-white leading-[1.2] md:leading-[1.1] mb-4 md:mb-6"
          >
            Global Leader in Processing & Packaging Technology
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p variants={fadeInUp} className="text-base md:text-xl text-gray-300 mb-8 md:mb-10 max-w-2xl leading-relaxed">
            Engineering high-efficiency, fully automated lines for Water, Soft Drinks, Juices, Beer, Spirits, and Liquid Dairy. Powered by 50 years of manufacturing excellence across the India, USA, and Middle East markets.
          </motion.p>
          
          {/* Buttons */}
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-start sm:items-center gap-6 md:gap-10">
            {/* Book Consultation */}
            <div className="flex items-center gap-2 md:gap-3 group cursor-pointer">
              <Link href="/contact-us" className="inline-flex bg-[#101934] text-white px-6 md:px-8 py-3 md:py-[18px] rounded-full font-bold text-base md:text-lg group-hover:bg-seppa-red transition duration-300 tracking-wide text-center">
                Book Consultation
              </Link>
              <Link href="/contact-us" className="w-12 h-12 md:w-[60px] md:h-[60px] flex-shrink-0 bg-seppa-red flex items-center justify-center text-white rounded-full group-hover:bg-[#101934] transition duration-300 shadow-md">
                <svg className="transform transition-transform duration-300 group-hover:rotate-45 w-5 h-5 md:w-[22px] md:h-[22px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="19" x2="19" y2="5"></line><polyline points="9 5 19 5 19 15"></polyline></svg>
              </Link>
            </div>
            
            {/* Watch Video */}
            <div className="flex items-center gap-4 cursor-pointer group">
              <div className="w-[72px] h-[72px] rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 backdrop-blur-sm">
                <div className="w-[56px] h-[56px] rounded-full bg-black/40 flex items-center justify-center">
                  <div className="w-11 h-11 rounded-full bg-[#101934] flex items-center justify-center text-white pl-1 shadow-lg group-hover:bg-seppa-red transition-colors duration-300">
                    <FiPlay size={18} fill="currentColor" />
                  </div>
                </div>
              </div>
              <span className="text-white font-bold text-xl tracking-wide group-hover:text-seppa-red transition-colors duration-300">Watch Video to know us</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Checklists */}
     <div className="absolute bottom-0 left-0 w-full to-transparent pt-16 pb-8 md:pb-8 z-10">
        <div className="container mx-auto px-4 pb-6 md:pb-14">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-x-12 gap-y-3"
          >
            {[
              "Eco-Friendly Dyeing Processes",
              "Aseptic Non-Contact Fillers",
              "Non-Thermal Pasteurization",
              "High-Speed Electric PET Blowing"
            ].map((text, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="flex items-center gap-2">
                <FiCheckCircle className="text-seppa-red text-xl" />
                <span className="text-white font-medium">{text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
