"use client";
import React from 'react';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import AnimatedHeading from '../ui/AnimatedHeading';
import { FiStar, FiX } from 'react-icons/fi';
import { useState } from 'react';

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
  badge?: string;
  title: string;
  subtitle?: string;
  features: FeatureItem[];
  columns?: 3 | 4;
  centerLastRow?: boolean;
  bgClass?: string;
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ 
  badge = "Features & Advantages", 
  title, 
  subtitle, 
  features,
  columns = 3,
  centerLastRow = false,
  bgClass = "bg-white"
}) => {
  const [selectedFeature, setSelectedFeature] = useState<FeatureItem | null>(null);

  const gridClass = centerLastRow 
    ? "flex flex-wrap justify-center items-start gap-8" 
    : (columns === 4 ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-start gap-8" : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start gap-8");

  const itemClass = centerLastRow 
    ? (columns === 4 ? "w-full md:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)]" : "w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.333rem)]")
    : "";

  return (
    <>
      <section className={`py-24 overflow-hidden ${bgClass}`}>
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
            <span className="text-sm font-medium text-dark uppercase tracking-wider">{badge}</span>
          </motion.div>
          
          <AnimatedHeading 
            text={title} 
            elementType="h2" 
            className="text-4xl md:text-5xl font-heading font-bold text-dark leading-tight mb-6" 
          />
          
          {subtitle && (
            <motion.p variants={fadeInUp} className="text-lg text-gray-600">
              {subtitle}
            </motion.p>
          )}
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          className={gridClass}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {features.map((feature, idx) => {
            return <FeatureCard key={idx} feature={feature} itemClass={itemClass} onReadMore={() => setSelectedFeature(feature)} />;
          })}
        </motion.div>

        </div>
      </section>

      {/* Modal Overlay */}
      <AnimatePresence>
        {selectedFeature && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedFeature(null)}
              className="absolute inset-0 bg-dark/60 backdrop-blur-sm cursor-pointer"
            />
            
            {/* Modal Content */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-2xl bg-white rounded-3xl p-8 md:p-12 shadow-2xl z-10"
            >
              <button 
                onClick={() => setSelectedFeature(null)}
                className="absolute top-6 right-6 w-10 h-10 bg-light rounded-full flex items-center justify-center text-dark hover:bg-seppa-red hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <FiX className="text-xl" />
              </button>
              
              <div className="flex items-center gap-6 mb-6 mt-2">
                <div className="w-16 h-16 flex-shrink-0 bg-light rounded-2xl flex items-center justify-center text-seppa-red text-3xl shadow-sm">
                  <FiStar />
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold font-heading text-dark leading-tight">
                  {selectedFeature.title}
                </h3>
              </div>
              
              <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                {selectedFeature.description}
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

const FeatureCard: React.FC<{ feature: FeatureItem; itemClass: string; onReadMore: () => void }> = ({ feature, itemClass, onReadMore }) => {
  const maxLength = 120;
  const needsTruncation = feature.description.length > maxLength;

  return (
    <motion.div 
      variants={fadeInUp} 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className={`${itemClass} bg-light rounded-[2rem] p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 group`}
    >
      <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-seppa-red text-2xl mb-6 shadow-sm group-hover:-translate-y-1 transition-transform duration-300 flex-shrink-0">
        <FiStar />
      </div>
      <h3 className="text-xl font-bold font-heading text-dark mb-4">{feature.title}</h3>
      <p className="text-gray-600 leading-relaxed transition-all duration-300">
        {needsTruncation ? `${feature.description.substring(0, maxLength).trim()}... ` : feature.description}
        {needsTruncation && (
          <button 
            onClick={onReadMore}
            className="text-seppa-red font-bold text-sm hover:underline ml-2 uppercase tracking-wider transition-colors inline"
          >
            Read More
          </button>
        )}
      </p>
    </motion.div>
  );
};

export default FeaturesSection;
