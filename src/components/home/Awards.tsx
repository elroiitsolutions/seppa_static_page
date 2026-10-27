import React from 'react';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import AnimatedHeading from '../ui/AnimatedHeading';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

import achieve1 from '@/assets/achievements/achieve1.jpeg';
import achieve2 from '@/assets/achievements/achieve2.jpeg';
import achieve3 from '@/assets/achievements/achieve3.jpeg';
import achieve4 from '@/assets/achievements/achieve4.jpeg';
import achieve5 from '@/assets/achievements/achieve5.jpeg';

const achievements = [
  { id: 1, title: 'National Packaging Excellence Award - Seppa Solutions', image: achieve1 },
  { id: 2, title: 'Industry Leadership in Liquid Packaging Automation', image: achieve2 },
  { id: 3, title: 'Manufacturing Innovation & Sustainability Award', image: achieve3 },
  { id: 4, title: 'Global Quality Milestone Recognition', image: achieve4 },
  { id: 5, title: 'Beverage Industry Pioneer Honor', image: achieve5 }
];

import { useTranslations, useLocale } from 'next-intl';
import enHome from '@/messages/en/home.json';
import { usePathname } from 'next/navigation';

const AwardsContent = ({ getT }: { getT: (key: string) => string }) => {
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
            <span className="text-sm font-medium text-dark uppercase tracking-wider">
              {getT('tag')}
            </span>
          </motion.div>
          
          <div className='w-full max-w-[1000px] mx-auto flex justify-center text-center mb-6'>
            <AnimatedHeading 
              text={getT('heading')} 
              elementType="h2" 
              className="text-4xl md:text-5xl lg:text-[52px] font-heading font-bold text-dark leading-tight [&>span]:justify-center" 
            />
          </div>
          <motion.p variants={fadeInUp} className="text-gray-500 max-w-3xl mx-auto text-lg leading-relaxed">
            {getT('description')}
          </motion.p>
        </motion.div>

        {/* Marquee Slider */}
        <motion.div
          dir="ltr"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="relative w-full overflow-hidden py-2 marquee-container"
        >
          {/* CSS Marquee Implementation with will-change for GPU acceleration */}
          <div className="flex w-max animate-marquee will-change-transform">
            
            {/* First set of images */}
            <div className="flex shrink-0 items-center">
              {achievements.map((achievement) => (
                <div key={`first-${achievement.id}`} className="w-[200px] md:w-[280px] lg:w-[350px] mx-6 md:mx-10 flex-shrink-0 transition-all duration-300 cursor-pointer flex justify-center">
                  <Image 
                    src={achievement.image} 
                    alt={achievement.title} 
                    width={350}
                    height={192}
                    sizes="(max-width: 768px) 200px, (max-width: 1024px) 280px, 350px"
                    loading="lazy"
                    style={{ width: 'auto', height: 'auto' }}
                    className="max-h-32 md:max-h-40 lg:max-h-48 object-contain drop-shadow-sm rounded-lg" 
                  />
                </div>
              ))}
            </div>

            {/* Second set of images for seamless infinite loop */}
            <div className="flex shrink-0 items-center" aria-hidden="true">
              {achievements.map((achievement) => (
                <div key={`second-${achievement.id}`} className="w-[200px] md:w-[280px] lg:w-[350px] mx-6 md:mx-10 flex-shrink-0 transition-all duration-300 cursor-pointer flex justify-center">
                  <Image 
                    src={achievement.image} 
                    alt="" 
                    width={350}
                    height={192}
                    sizes="(max-width: 768px) 200px, (max-width: 1024px) 280px, 350px"
                    loading="lazy"
                    style={{ width: 'auto', height: 'auto' }}
                    className="max-h-32 md:max-h-40 lg:max-h-48 object-contain drop-shadow-sm rounded-lg" 
                  />
                </div>
              ))}
            </div>

          </div>
        </motion.div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translate3d(0%, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
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

const LocalizedAwards = () => {
  const t = useTranslations('home');
  const getT = (key: string) => t(`Awards.${key}`);
  return <AwardsContent getT={getT} />;
};

const StaticAwards = () => {
  const getT = (key: string) => ((enHome as any).Awards?.[key] || key);
  return <AwardsContent getT={getT} />;
};

const Awards = () => {
  const pathname = usePathname() || '';
  const isLocalized = pathname.startsWith('/ar') || pathname.startsWith('/en') || pathname.startsWith('/de');
  return isLocalized ? <LocalizedAwards /> : <StaticAwards />;
};

export default Awards;
