import React from 'react';
import { motion, Variants } from 'framer-motion';
import AnimatedHeading from '../ui/AnimatedHeading';
import { FiCheckCircle } from 'react-icons/fi';
import { usePathname } from 'next/navigation';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

interface OverviewSectionProps {
  title: string;
  description: string | React.ReactNode;
  benefits?: string[];
  subDescription?: (string | React.ReactNode)[];
  imageSrc: string;
  imageSrc2?: string;
  layout?: 'side-by-side' | 'stacked';
  locale?: string;
}

const OverviewSection: React.FC<OverviewSectionProps> = ({ title, description, subDescription, benefits, imageSrc, imageSrc2, layout = 'side-by-side', locale }) => {
  const pathname = usePathname();
  const isAr = locale === 'ar' || pathname.startsWith('/ar') || pathname.includes('/ar/');
  
  return (
    <section className="py-12 lg:py-24 bg-light overflow-hidden">
      <div className="container mx-auto px-4">
        {layout === 'stacked' ? (
          <div className="flex flex-col w-full text-start">
            <motion.div 
              className="relative w-[90%] md:w-[65%] h-[300px] md:h-[400px] mb-20 md:mb-24 mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={staggerContainer}
            >
              <motion.div 
                className={`absolute top-0 left-0 w-full h-full rounded-[2rem] overflow-hidden shadow-2xl group/image cursor-pointer z-10`}
                variants={fadeInUp}
              >
                <img 
                  src={imageSrc} 
                  alt={title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/image:scale-105"
                />
                <div className="shine-overlay" />
              </motion.div>
              
              {imageSrc2 && (
                <motion.div 
                  className="absolute -bottom-8 -left-4 md:-bottom-16 md:-left-16 w-[70%] md:w-[55%] aspect-video rounded-[2rem] overflow-hidden shadow-2xl border-[6px] md:border-8 border-white group group/image2 cursor-pointer z-20"
                  variants={fadeInUp}
                >
                  <img 
                    src={imageSrc2} 
                    alt={`${title} Detail`} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/image2:scale-105"
                  />
                  <div className="shine-overlay" />
                </motion.div>
              )}
            </motion.div>
            
            <motion.div 
              className="w-full text-start"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-seppa-red"></span>
                <span className="text-sm font-medium text-dark uppercase tracking-wider">Overview</span>
              </motion.div>
              
              <AnimatedHeading 
                text={title} 
                elementType="h2" 
                className="text-4xl md:text-5xl lg:text-5xl font-heading font-bold text-dark leading-tight mb-8" 
              />
              
              <motion.p variants={fadeInUp} className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed indent-8 md:indent-12">
                {description}
              </motion.p>

              <motion.div variants={fadeInUp}>
                {benefits && benefits.length > 0 && (
                  <>
                    <h4 className="text-xl font-bold font-heading text-dark mb-4">{isAr ? "المزايا الرئيسية" : "Key Benefits"}</h4>
                    <ul className="space-y-4">
                      {benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <FiCheckCircle className="text-seppa-red text-xl flex-shrink-0 mt-1" />
                          <span className="text-gray-700 font-medium">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
                {subDescription && subDescription.length > 0 && (
                  <div className="mt-8 space-y-4">
                    {subDescription.map((desc, idx) => (
                      typeof desc === 'string' ? (
                        <p key={idx} className="text-base md:text-lg text-gray-600 leading-relaxed indent-8 md:indent-12">
                          {desc}
                        </p>
                      ) : (
                        <div key={idx}>{desc}</div>
                      )
                    ))}
                  </div>
                )}
              </motion.div>
            </motion.div>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div 
              className="w-full lg:w-1/2 order-2 lg:order-1"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-seppa-red"></span>
                <span className="text-sm font-medium text-dark uppercase tracking-wider">{isAr ? "نظرة عامة" : "Overview"}</span>
              </motion.div>
              
              <AnimatedHeading 
                text={title} 
                elementType="h2" 
                className="text-4xl md:text-5xl lg:text-5xl font-heading font-bold text-dark leading-tight mb-6" 
              />
              
              <motion.p variants={fadeInUp} className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
                {description}
              </motion.p>

              <motion.div variants={fadeInUp}>
                {benefits && benefits.length > 0 && (
                  <>
                    <h4 className="text-xl font-bold font-heading text-dark mb-4">{isAr ? "المزايا الرئيسية" : "Key Benefits"}</h4>
                    <ul className="space-y-4">
                      {benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <FiCheckCircle className="text-seppa-red text-xl flex-shrink-0 mt-1" />
                          <span className="text-gray-700 font-medium">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
                {subDescription && subDescription.length > 0 && (
                  <div className="mt-8 space-y-4">
                    {subDescription.map((desc, idx) => (
                      typeof desc === 'string' ? (
                        <p key={idx} className="text-base md:text-lg text-gray-600 leading-relaxed">
                          {desc}
                        </p>
                      ) : (
                        <div key={idx}>{desc}</div>
                      )
                    ))}
                  </div>
                )}
              </motion.div>
            </motion.div>

            <motion.div 
              className="w-full lg:w-1/2 order-1 lg:order-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeInUp}
            >
              <div className="rounded-[2rem] overflow-hidden shadow-xl aspect-[4/3] bg-white p-4">
                <div className="w-full h-full rounded-2xl overflow-hidden relative group">
                  <img 
                    src={imageSrc} 
                    alt={title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="shine-overlay" />
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default OverviewSection;
