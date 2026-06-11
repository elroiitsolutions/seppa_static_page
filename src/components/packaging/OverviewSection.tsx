"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';
import AnimatedHeading from '../ui/AnimatedHeading';
import { FiCheckCircle } from 'react-icons/fi';

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
  description: string;
  benefits: string[];
  imageSrc: string;
}

const OverviewSection: React.FC<OverviewSectionProps> = ({ title, description, benefits, imageSrc }) => {
  return (
    <section className="py-24 bg-light overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <motion.div 
            className="w-full lg:w-1/2"
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
              className="text-4xl md:text-5xl lg:text-5xl font-heading font-bold text-dark leading-tight mb-6" 
            />
            
            <motion.p variants={fadeInUp} className="text-lg text-gray-600 mb-8 leading-relaxed">
              {description}
            </motion.p>

            <motion.div variants={fadeInUp}>
              <h4 className="text-xl font-bold font-heading text-dark mb-4">Key Benefits</h4>
              <ul className="space-y-4">
                {benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <FiCheckCircle className="text-seppa-red text-xl flex-shrink-0 mt-1" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

          </motion.div>

          <motion.div 
            className="w-full lg:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
          >
            <div className="rounded-[2rem] overflow-hidden shadow-xl aspect-[4/3] bg-white p-4">
              <div className="w-full h-full rounded-2xl overflow-hidden relative">
                <img 
                  src={imageSrc} 
                  alt={title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-dark/10"></div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
