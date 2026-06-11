import React from 'react';
import { motion , Variants } from 'framer-motion';
import Link from 'next/link';
import AnimatedHeading from '../ui/AnimatedHeading';

const fadeInUp:Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const AboutIndustries = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* Header Section */}
        <motion.div 
          className="text-center max-w-[1200px] mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-seppa-red"></span>
            {/* <span className="w-1.5 h-1.5 rounded-full bg-white"></span> */}
            <span className="text-sm font-medium text-dark uppercase tracking-wider">About Our Industries</span>
          </motion.div>
          
          <div className='w-full max-w-[1000px] mx-auto flex justify-center text-center'>
            <AnimatedHeading 
              text="We are dedicated to crafting high quality textiles for diverse global industrial applications worldwide" 
              elementType="h2" 
              className="text-4xl md:text-5xl lg:text-[52px] font-heading font-bold text-dark leading-tight [&>span]:justify-center" 
            />
          </div>
        </motion.div>

        {/* Main Grid Content */}
        <motion.div 
          className="flex flex-col lg:flex-row items-center gap-6 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={staggerContainer}
        >
          {/* Left Card: Trusted Expertise */}
          <motion.div variants={fadeInUp} className="w-full lg:w-1/4 bg-white rounded-[2rem] p-8 shadow-sm h-full min-h-[350px] flex flex-col justify-between">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#cda262" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold font-heading text-dark mb-4">Trusted Expertise</h3>
              <p className="text-gray-500 leading-relaxed">
                Backed by years experience, we deliver reliable solutions with consistent quality.
              </p>
            </div>
          </motion.div>

          {/* Center: Large Video */}
          <motion.div variants={fadeInUp} className="w-full lg:w-2/4 relative rounded-[2rem] overflow-hidden group aspect-video shadow-lg bg-black flex items-center justify-center">
            <video 
              src="/videos/celebration_video.mp4" 
              className="w-full h-full object-cover"
              controls
              autoPlay
              muted
              loop
              playsInline
            />
          </motion.div>

          {/* Right Card: Ratings */}
          <motion.div variants={fadeInUp} className="w-full lg:w-1/4 bg-white rounded-[2rem] p-8 shadow-sm h-full min-h-[350px] flex flex-col justify-between">
            <div>
              <div className="flex -space-x-3 mb-6 relative">
                <img src="https://demo.awaikenthemes.com/yarnex/wp-content/uploads/2026/02/author-1.jpg" alt="User" className="w-12 h-12 rounded-full border-2 border-white object-cover shadow-sm" />
                <img src="https://demo.awaikenthemes.com/yarnex/wp-content/uploads/2026/02/author-2.jpg" alt="User" className="w-12 h-12 rounded-full border-2 border-white object-cover shadow-sm relative z-10" />
                <img src="https://demo.awaikenthemes.com/yarnex/wp-content/uploads/2026/02/author-3.jpg" alt="User" className="w-12 h-12 rounded-full border-2 border-white object-cover shadow-sm relative z-20" />
                <div className="w-12 h-12 rounded-full border-2 border-white bg-[seppa-red] text-white flex items-center justify-center relative z-30 font-bold text-lg shadow-sm">+</div>
              </div>
              
              <div className="flex items-end gap-2 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#cda262" stroke="#cda262" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                <span className="text-4xl font-bold font-heading text-dark leading-none">4.9</span>
                <span className="text-gray-500 font-medium pb-1">(Ratings)</span>
              </div>
              
              <p className="text-gray-500 mb-8">
                Rated excellent customers by 1K+ on Trust pilot.
              </p>
            </div>
            
            <div className="flex items-center gap-2 group cursor-pointer w-full">
              <Link href="/about-us" className="flex-1 bg-[#273051] text-white px-6 py-[14px] rounded-full font-medium transition duration-300 group-hover:bg-seppa-red text-center text-sm md:text-base">
                Learn More About
              </Link>
              <Link href="/about-us" className="w-[50px] h-[50px] shrink-0 bg-seppa-red flex items-center justify-center text-white rounded-full group-hover:bg-[#273051] transition duration-300 shadow-md">
                <svg className="transform transition-transform duration-300 group-hover:rotate-45" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="19" x2="19" y2="5"></line><polyline points="9 5 19 5 19 15"></polyline></svg>
              </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Callout */}
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-center gap-4 pt-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={fadeInUp}
        >
          {/* <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              <img src="https://demo.awaikenthemes.com/yarnex/wp-content/uploads/2026/02/author-1.jpg" alt="User" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
              <div className="w-8 h-8 rounded-full border-2 border-white bg-[seppa-red] text-white flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
            </div>
            <p className="text-gray-600 font-medium">
              The people behind our premium apartments, delivering comfort and style - <Link href="#" className="text-gold hover:underline">View All Experts.</Link>
            </p>
          </div> */}
          
          {/* <div className="hidden md:block w-px h-6 bg-gray-300 mx-4"></div>
          
          <div className="flex items-center gap-3">
            <span className="font-bold text-dark">4.9</span>
            <div className="flex text-gold">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
              ))}
            </div>
            <span className="text-dark font-bold">Over 2000 Reviews</span>
          </div> */}
        </motion.div>
        
      </div>
    </section>
  );
};

export default AboutIndustries;
