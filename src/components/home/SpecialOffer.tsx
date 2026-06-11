import React from 'react';
import { motion , Variants } from 'framer-motion';
import Link from 'next/link';
import AnimatedHeading from '../ui/AnimatedHeading';
import bgPattern from '@/assets/bg/black-line-1.png';

const fadeInUp:Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const reports = [
  {
    title: 'MINERAL WATER HIGH GROWTH AND HIGH PROFITABILITY',
    image: 'https://demo.awaikenthemes.com/yarnex/wp-content/uploads/2026/02/service-image-1.jpg'
  },
  {
    title: 'MICROBREWERY ENHANCED EXPERIENCE - HUGE PROFIT',
    image: 'https://demo.awaikenthemes.com/yarnex/wp-content/uploads/2026/02/service-image-2.jpg'
  },
  {
    title: 'PET THE FUTURE OF PACKAGING MULTIPLE FOLD REQUIREMENT',
    image: 'https://demo.awaikenthemes.com/yarnex/wp-content/uploads/2026/02/service-image-3.jpg'
  },
  {
    title: 'COLD PRESS JUICE GROWING EXPONENTIALLY',
    image: 'https://demo.awaikenthemes.com/yarnex/wp-content/uploads/2026/02/service-image-1.jpg'
  },
  {
    title: 'TOMATO PROCESS : CONSISTENCY GROWTH ENDLESS DEMAND',
    image: 'https://demo.awaikenthemes.com/yarnex/wp-content/uploads/2026/02/service-image-2.jpg'
  },
  {
    title: 'RECYCLE GLASS BOTTLE WASHER INFINITY DEMAND / REVENUE',
    image: 'https://demo.awaikenthemes.com/yarnex/wp-content/uploads/2026/02/service-image-3.jpg'
  },
  {
    title: 'COMMERCIAL BREWERY GROWING MARKET SPIRALLING VOLUME OF BEER',
    image: 'https://demo.awaikenthemes.com/yarnex/wp-content/uploads/2026/02/service-image-1.jpg'
  }
];

const SpecialOffer = () => {
  return (
    <section className="py-24 bg-seppa-red relative overflow-hidden m-3 rounded-2xl">
      {/* Background Pattern Overlay (Optional subtle texture) */}
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
            <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
            <span className="text-sm font-medium text-gray-300 uppercase tracking-wider">Special Offer</span>
          </motion.div>
          
          <div className='w-full max-w-[1000px] mx-auto flex justify-center text-center'>
            <AnimatedHeading 
              text="Get Your Free Copy Of Project Reports" 
              elementType="h2" 
              className="text-4xl md:text-5xl lg:text-[52px] font-heading font-bold text-white leading-tight [&>span]:justify-center" 
            />
          </div>
        </motion.div>

        {/* Services Flex Grid */}
        <motion.div 
          className="flex flex-wrap justify-center gap-6 lg:gap-8 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {reports.map((report, idx) => (
            <motion.div 
              key={idx} 
              variants={fadeInUp} 
              className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.5rem)] group cursor-pointer"
            >
              <div className="bg-[#273051] rounded-3xl overflow-hidden p-6 md:p-8 shadow-lg border border-gray-800 transition duration-300 hover:border-gray-600 h-full flex flex-col items-center justify-center min-h-[180px]">
                <h3 className="text-[13px] md:text-[15px] font-bold font-heading text-white group-hover:text-gold transition duration-300 text-center leading-relaxed">
                  {report.title}
                </h3>
              </div>
            </motion.div>
          ))}
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

export default SpecialOffer;
