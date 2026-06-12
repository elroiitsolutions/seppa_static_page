import React from 'react';
import { motion, Variants } from 'framer-motion';
import AnimatedHeading from '../ui/AnimatedHeading';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

import achieve1 from '@/assets/achievements/achieve1.jpeg';
import achieve2 from '@/assets/achievements/achieve2.jpeg';
import achieve3 from '@/assets/achievements/achieve3.jpeg';
import achieve4 from '@/assets/achievements/achieve4.jpeg';
import achieve5 from '@/assets/achievements/achieve5.jpeg';

const achievements = [
  { id: 1, image: achieve1.src },
  { id: 2, image: achieve2.src },
  { id: 3, image: achieve3.src },
  { id: 4, image: achieve4.src },
  { id: 5, image: achieve5.src }
];

const Awards = () => {
  return (
    <section className="py-12 md:py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* Header Section */}
        <motion.div 
          className="text-center max-w-[1200px] mx-auto mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-seppa-red"></span>
            <span className="text-sm font-medium text-dark uppercase tracking-wider">Recognition</span>
          </motion.div>
          
          <div className='w-full max-w-[1000px] mx-auto flex justify-center text-center mb-6'>
            <AnimatedHeading 
              text="Awards & Achievements" 
              elementType="h2" 
              className="text-4xl md:text-5xl lg:text-[52px] font-heading font-bold text-dark leading-tight [&>span]:justify-center" 
            />
          </div>
          <motion.p variants={fadeInUp} className="text-gray-500 max-w-3xl mx-auto text-lg leading-relaxed">
            Our relentless pursuit of excellence and innovation has been recognized globally. We take pride in the milestones we've achieved on our journey to transforming the industry.
          </motion.p>
        </motion.div>

        {/* Marquee Slider */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
          className="relative w-full overflow-hidden py-2 marquee-container"
        >
          {/* CSS Marquee Implementation */}
          <div className="flex w-max animate-marquee">
            
            {/* First set of images */}
            <div className="flex shrink-0 items-center">
              {achievements.map((achievement) => (
                <div key={`first-${achievement.id}`} className="w-[200px] md:w-[280px] lg:w-[350px] mx-6 md:mx-10 flex-shrink-0 transition-all duration-500 cursor-pointer flex justify-center">
                  <img 
                    src={achievement.image} 
                    alt={`Achievement ${achievement.id}`} 
                    className="max-h-32 md:max-h-40 lg:max-h-48 w-auto object-contain drop-shadow-sm rounded-lg" 
                  />
                </div>
              ))}
            </div>

            {/* Second set of images (duplicate for seamless infinite loop) */}
            <div className="flex shrink-0 items-center">
              {achievements.map((achievement) => (
                <div key={`second-${achievement.id}`} className="w-[200px] md:w-[280px] lg:w-[350px] mx-6 md:mx-10 flex-shrink-0 transition-all duration-500 cursor-pointer flex justify-center">
                  <img 
                    src={achievement.image} 
                    alt={`Achievement ${achievement.id}`} 
                    className="max-h-32 md:max-h-40 lg:max-h-48 w-auto object-contain drop-shadow-sm rounded-lg" 
                  />
                </div>
              ))}
            </div>

          </div>
        </motion.div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .marquee-container:hover .animate-marquee {
          animation-play-state: paused !important;
        }
      `}} />
    </section>
  );
};

export default Awards;
