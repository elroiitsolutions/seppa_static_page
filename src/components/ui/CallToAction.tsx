"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export interface CTAProps {
  title: string;
  description: string;
  buttonText?: string;
  buttonLink?: string;
}

const CallToAction: React.FC<CTAProps> = ({ 
  title, 
  description, 
  buttonText = "Get in Touch", 
  buttonLink = "/contact-us" 
}) => {
  return (
    <section className="py-24 bg-[#101934] relative overflow-hidden my-12 mx-3 rounded-[2rem] shadow-2xl">
      <div className="absolute inset-0 opacity-10 bg-[url('https://demo.awaikenthemes.com/yarnex/wp-content/uploads/2026/02/bg-pattern.png')] bg-repeat" />
      
      {/* Decorative Blur Orbs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-seppa-red/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-seppa-red/20 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-8">
            {title}
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-12">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
