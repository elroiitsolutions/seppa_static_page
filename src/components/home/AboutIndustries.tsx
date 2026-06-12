import React from 'react';
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import AnimatedHeading from '../ui/AnimatedHeading';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const AboutIndustries = () => {
  return (
    <section className="py-12 lg:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">

        {/* Header Section */}
        <motion.div
          className="text-center max-w-[1200px] mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center justify-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-[2rem] border border-gray-200 bg-white mb-6 max-w-[95%] mx-auto">
            <span className="w-1.5 h-1.5 rounded-full bg-seppa-red flex-shrink-0"></span>
            <span className="text-[11px] sm:text-sm font-medium text-dark uppercase tracking-wider text-center sm:text-left leading-tight">About Our Company / Industry Impact</span>
          </motion.div>

          <div className='w-full max-w-[1000px] mx-auto flex justify-center text-center'>
            <AnimatedHeading
              text="We are dedicated to automating high-performance liquid lines for diverse global industries."
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
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E30D28" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold font-heading text-dark mb-4">Trusted Expertise</h3>
              <p className="text-gray-500 leading-relaxed">
                Backed by 50 years experience, we deliver reliable solutions with consistent quality.
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
                <span className="text-4xl font-bold font-heading text-dark leading-none">25+</span>
                <span className="text-gray-500 font-medium pb-1">Global Multi-Product Projects</span>
              </div>

              <p className="text-gray-500 mb-8">
                1,000+ Factories Globally Running on Seppa Systems.
              </p>
            </div>

            <div className="flex items-center gap-2 group cursor-pointer w-full">
              <Link href="/about-us" className="flex-1 bg-[#101934] text-white px-6 py-[14px] rounded-full font-medium transition duration-300 group-hover:bg-seppa-red text-center text-sm md:text-base">
                Learn More About
              </Link>
              <Link href="/about-us" className="w-[50px] h-[50px] shrink-0 bg-seppa-red flex items-center justify-center text-white rounded-full group-hover:bg-[#101934] transition duration-300 shadow-md">
                <svg className="transform transition-transform duration-300 group-hover:rotate-45" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="19" x2="19" y2="5"></line><polyline points="9 5 19 5 19 15"></polyline></svg>
              </Link>
            </div>
          </motion.div>
        </motion.div>



      </div>
    </section>
  );
};

export default AboutIndustries;
