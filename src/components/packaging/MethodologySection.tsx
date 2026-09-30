"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';
import AnimatedHeading from '../ui/AnimatedHeading';
import { FiCheck, FiCircle, FiStar } from 'react-icons/fi';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

export interface MethodologyStep {
  title: string;
  description: string | string[];
  image: string;
}

export interface MethodologySectionProps {
  badge?: string;
  title: string;
  subtitle?: string;
  steps: MethodologyStep[];
  outro?: string[];
  keyAdvantages?: {
    title?: string;
    items: string[];
  };
}

const MethodologySection: React.FC<MethodologySectionProps> = ({ 
  badge = "Methodology", 
  title, 
  subtitle, 
  steps,
  outro,
  keyAdvantages
}) => {
  return (
    <section className="py-12 lg:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white mb-6 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-seppa-red"></span>
            <span className="text-sm font-medium text-dark uppercase tracking-wider">{badge}</span>
          </motion.div>
          
          <AnimatedHeading 
            text={title} 
            elementType="h2" 
            className="text-4xl md:text-5xl font-heading font-bold text-dark leading-tight mb-6" 
          />
          
          {subtitle && (
            <motion.p variants={fadeInUp} className="text-base md:text-lg text-gray-600 leading-relaxed">
              {subtitle}
            </motion.p>
          )}
        </motion.div>

        {/* Alternating Steps */}
        <div className="space-y-16 md:space-y-24">
          {steps.map((step, idx) => {
            const isEven = idx % 2 === 0;
            const title = step?.title || "";
            const isPhaseOrStep = typeof title === 'string' && (title.toLowerCase().startsWith('phase') || title.toLowerCase().startsWith('step'));
            return (
              <motion.div 
                key={idx}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerContainer}
              >
                {/* Content */}
                <motion.div variants={fadeInUp} className="w-full lg:w-1/2 group cursor-pointer">
                  {title && title.trim() !== "" && (
                    <div className={`flex items-center ${isPhaseOrStep ? 'gap-0' : 'gap-4'} mb-6`}>
                      {!isPhaseOrStep && (
                        <span className="w-12 h-12 shrink-0 rounded-full flex items-center justify-center text-seppa-red font-bold font-heading text-xl shadow-sm group-hover:bg-seppa-red group-hover:text-white group-hover:border-seppa-red transition-all duration-500">
                          <FiStar size={24}/>
                        </span>
                      )}
                      <h3 className="text-3xl md:text-4xl font-bold font-heading text-dark leading-tight">{title}</h3>
                    </div>
                  )}
                  {Array.isArray(step?.description) ? (
                    <div className="space-y-4">
                      {step.description.map((desc, i) => (
                        <p key={i} className="text-gray-600 text-base md:text-lg leading-relaxed text-start">
                          {desc}
                        </p>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-600 text-base md:text-lg leading-relaxed text-start">
                      {step?.description || ""}
                    </p>
                  )}
                </motion.div>

                {/* Image */}
                <motion.div 
                  variants={fadeInUp} 
                  className="w-full lg:w-1/2 group relative"
                >
                  <div className="rounded-[2rem] overflow-hidden aspect-[4/3] shadow-2xl relative">
                    {step.image ? (
                      <img 
                        src={step.image} 
                        alt={step.title} 
                        className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                      />
                    ) : null}
                    <div className="absolute inset-0 bg-dark/10 group-hover:bg-transparent transition-colors duration-500"></div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Outro */}
        {outro && outro.length > 0 && (
          <motion.div
            className="mt-20 max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="bg-[#FAF9F6] rounded-2xl border-l-4 border-seppa-red p-8 md:p-10 shadow-sm relative">
              <div className="pl-6 space-y-6">
                {outro.map((p, idx) => (
                  <p key={idx} className="text-lg md:text-xl text-gray-700 leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}

      </div>
    </section>
  );
};

export default MethodologySection;
