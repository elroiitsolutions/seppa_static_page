"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';
import AnimatedHeading from './AnimatedHeading';
import Link from 'next/link';
import { FiArrowUpRight, FiCheckCircle } from 'react-icons/fi';
import { FaPhoneAlt } from 'react-icons/fa';

export interface ContentBlockProps {
  badge?: string;
  title?: string;
  paragraphs: (string | React.ReactNode)[];
  features?: string[];
  image1?: string;
  image2?: string;
  bgClass?: string;
  reverse?: boolean;
  layout?: 'side-by-side' | 'stacked';
}

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9, x: 20 },
  visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const ContentBlock: React.FC<ContentBlockProps> = ({ badge, title, paragraphs, features, image1, image2, bgClass = "bg-[#fdfbf6] m-3 rounded-2xl", reverse = false, layout = 'side-by-side' }) => {
  const hasImages = image1 || image2;

  return (
    <section className={`py-16 lg:py-24 ${bgClass} overflow-hidden relative`}>
      <div className="container mx-auto px-4 relative z-10">
        
        {layout === 'stacked' ? (
          <div className="flex flex-col w-full text-start">
            {badge && (
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white mb-6 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-seppa-red"></span>
                <span className="text-sm font-medium text-dark uppercase tracking-wider">{badge}</span>
              </motion.div>
            )}
            {title && (
              <AnimatedHeading 
                text={title} 
                elementType="h2" 
                className="text-3xl md:text-4xl lg:text-[42px] font-heading font-bold text-dark leading-tight mb-12" 
              />
            )}
            
            {hasImages && (
              <div className="relative w-[90%] md:w-[65%] h-[300px] md:h-[400px] mb-20 md:mb-24 mx-auto">
                <motion.div 
                  className={`absolute top-0 left-0 w-full h-full rounded-[2rem] overflow-hidden shadow-2xl group/image cursor-pointer z-10`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  variants={imageVariants}
                >
                  <img 
                    src={image1 || ''} 
                    alt={title || "Industrial machinery"} 
                    className="w-full h-full object-cover group-hover/image:scale-105 transition-transform duration-700 ease-in-out"
                  />
                  <div className="shine-overlay" />
                </motion.div>
                
                {image2 && (
                  <motion.div 
                    className="absolute -bottom-8 -left-4 md:-bottom-16 md:-left-16 w-[70%] md:w-[55%] aspect-video rounded-[2rem] overflow-hidden shadow-2xl border-[6px] md:border-8 border-white group group/image2 cursor-pointer z-20"
                    initial={{ opacity: 0, scale: 0.8, x: -20, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                  >
                    <img 
                      src={image2} 
                      alt="Packaging detail" 
                      className="w-full h-full object-cover group-hover/image:scale-105 transition-transform duration-700 ease-in-out"
                    />
                    <div className="shine-overlay" />
                  </motion.div>
                )}
              </div>
            )}

            <div className="space-y-6 text-left w-full">
              {paragraphs.map((content, idx) => (
                <motion.div key={idx} variants={fadeInUp}>
                  {typeof content === 'string' ? (
                    <p className="text-base md:text-lg text-gray-600 leading-relaxed indent-8 md:indent-12">
                      {content}
                    </p>
                  ) : (
                    content
                  )}
                </motion.div>
              ))}
            </div>

            {features && features.length > 0 && (
              <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 w-full text-left">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-seppa-red/10 flex items-center justify-center text-seppa-red flex-shrink-0">
                      <FiCheckCircle className="text-xl" />
                    </div>
                    <span className="text-dark font-medium text-base md:text-lg">{feature}</span>
                  </div>
                ))}
              </motion.div>
            )}
          </div>
        ) : hasImages ? (
          <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 items-center`}>
            {/* Content */}
            <motion.div 
              className="w-full lg:w-1/2 order-2 lg:order-1"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={staggerContainer}
            >
              {badge && (
                <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white mb-6 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-seppa-red"></span>
                  <span className="text-sm font-medium text-dark uppercase tracking-wider">{badge}</span>
                </motion.div>
              )}
              
              {title && (
                <AnimatedHeading 
                  text={title} 
                  elementType="h2" 
                  className="text-3xl md:text-4xl lg:text-[42px] font-heading font-bold text-dark leading-tight mb-6" 
                />
              )}
              
              <div className="space-y-4 mb-10">
                {paragraphs.map((content, idx) => (
                  <motion.div key={idx} variants={fadeInUp}>
                    {typeof content === 'string' ? (
                      <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                        {content}
                      </p>
                    ) : (
                      content
                    )}
                  </motion.div>
                ))}
              </div>

              {features && features.length > 0 && (
                <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                  {features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-seppa-red/10 flex items-center justify-center text-seppa-red flex-shrink-0">
                        <FiCheckCircle className="text-xl" />
                      </div>
                      <span className="text-dark font-medium text-base md:text-lg">{feature}</span>
                    </div>
                  ))}
                </motion.div>
              )}
            </motion.div>

            {/* Images */}
            <div className="w-full lg:w-1/2 relative h-[500px] md:h-[600px] order-1 lg:order-2">
              <motion.div 
                className={`absolute top-0 right-0 ${image2 ? 'w-[85%] h-[80%]' : 'w-full h-full'} rounded-[2rem] overflow-hidden shadow-2xl group/image cursor-pointer z-10`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={imageVariants}
              >
                <img 
                  src={image1 || ''} 
                  alt="Industrial machinery" 
                  className="w-full h-full object-cover group-hover/image:scale-105 transition-transform duration-700 ease-in-out"
                />
                <div className="shine-overlay" />
              </motion.div>
              
              {image2 && (
                <motion.div 
                  className="absolute bottom-0 left-0 w-[65%] h-[60%] rounded-[2rem] overflow-hidden shadow-2xl border-8 border-[#fdfbf6] group/image cursor-pointer z-20"
                  initial={{ opacity: 0, scale: 0.8, x: -20, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                >
                  <img 
                    src={image2} 
                    alt="Packaging line scheme" 
                    className="w-full h-full object-cover group-hover/image:scale-105 transition-transform duration-700 ease-in-out"
                  />
                  <div className="shine-overlay" />
                </motion.div>
              )}
            </div>
          </div>
        ) : (
          /* Centered Text Layout (Fallback if no images) */
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {badge && (
              <motion.div variants={fadeInUp} className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white mb-6 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-seppa-red"></span>
                <span className="text-sm font-medium text-dark uppercase tracking-wider">{badge}</span>
              </motion.div>
            )}
            
            {title && (
              <div className="mb-8 flex justify-center">
                 <AnimatedHeading 
                   text={title} 
                   elementType="h2" 
                   className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-dark leading-tight" 
                 />
              </div>
            )}

            <div className="space-y-6">
              {paragraphs.map((text, idx) => (
                <motion.p key={idx} variants={fadeInUp} className="text-base md:text-lg text-gray-600 leading-relaxed">
                  {text}
                </motion.p>
              ))}
            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
};

export default ContentBlock;
