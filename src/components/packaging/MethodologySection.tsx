"use client";
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

export interface MethodologyStep {
  title: string;
  description: string;
  image: string;
}

export interface MethodologySectionProps {
  badge?: string;
  title: string;
  subtitle?: string;
  steps: MethodologyStep[];
  outro?: string[];
}

const MethodologySection: React.FC<MethodologySectionProps> = ({ 
  badge = "Methodology", 
  title, 
  subtitle, 
  steps,
  outro
}) => {
  return (
    <section className="py-24 bg-white overflow-hidden">
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
            <motion.p variants={fadeInUp} className="text-lg text-gray-600 leading-relaxed">
              {subtitle}
            </motion.p>
          )}
        </motion.div>

        {/* Alternating Steps */}
        <div className="space-y-16 md:space-y-24">
          {steps.map((step, idx) => {
            const isEven = idx % 2 === 0;
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
                <motion.div variants={fadeInUp} className="w-full lg:w-1/2">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="w-12 h-12 rounded-full bg-light flex items-center justify-center text-seppa-red font-bold font-heading text-xl shadow-sm">
                      {idx + 1}
                    </span>
                    <h3 className="text-3xl font-bold font-heading text-dark">{step.title}</h3>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed text-justify">
                    {step.description}
                  </p>
                </motion.div>

                {/* Image */}
                <motion.div 
                  variants={fadeInUp} 
                  className="w-full lg:w-1/2 group relative"
                >
                  <div className="rounded-[2rem] overflow-hidden aspect-[4/3] shadow-2xl relative">
                    <img 
                      src={step.image} 
                      alt={step.title} 
                      className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                    />
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
            className="mt-24 max-w-4xl mx-auto text-center bg-light rounded-[2rem] p-10 md:p-14 border border-gray-100 shadow-sm"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {outro.map((p, idx) => (
              <motion.p key={idx} variants={fadeInUp} className="text-xl md:text-2xl text-dark font-heading font-medium leading-relaxed mb-6 last:mb-0">
                {p}
              </motion.p>
            ))}
          </motion.div>
        )}

      </div>
    </section>
  );
};

export default MethodologySection;
