"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';
import AnimatedHeading from '../ui/AnimatedHeading';
import { FiStar } from 'react-icons/fi';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

export interface FeatureItem {
  title: string;
  description: string;
}

interface FeaturesSectionProps {
  title: string;
  subtitle: string;
  features: FeatureItem[];
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ title, subtitle, features }) => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-seppa-red"></span>
            <span className="text-sm font-medium text-dark uppercase tracking-wider">Features & Advantages</span>
          </motion.div>
          
          <AnimatedHeading 
            text={title} 
            elementType="h2" 
            className="text-4xl md:text-5xl font-heading font-bold text-dark leading-tight mb-6" 
          />
          
          <motion.p variants={fadeInUp} className="text-lg text-gray-600">
            {subtitle}
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {features.map((feature, idx) => (
            <motion.div 
              key={idx} 
              variants={fadeInUp} 
              className="bg-light rounded-[2rem] p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-seppa-red text-2xl mb-6 shadow-sm group-hover:-translate-y-1 transition-transform duration-300">
                <FiStar />
              </div>
              <h3 className="text-xl font-bold font-heading text-dark mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default FeaturesSection;
