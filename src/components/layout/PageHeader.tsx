"use client";
import React from 'react';
import Link from "next/link";
import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  breadcrumbs: { name: string; path?: string }[];
  bgImage?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, breadcrumbs, bgImage }) => {
  const backgroundUrl = bgImage || "https://demo.awaikenthemes.com/yarnex/wp-content/uploads/2026/02/page-header-bg.jpg";
  
  return (
    <section className="pt-52 pb-28 relative overflow-hidden">
      {/* Background Image with Animation */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${backgroundUrl}')` }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-dark/60"></div>
      
      <div className="container mx-auto px-4 relative z-10 text-left">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 relative inline-block"
        >
          <h1 className="text-5xl md:text-[64px] font-heading font-bold text-white text-left">
            {title}
          </h1>
        </motion.div>
        
        <motion.nav 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center justify-start space-x-2 text-white font-medium text-lg"
        >
          {breadcrumbs.map((crumb, index) => (
            <React.Fragment key={index}>
              {index > 0 && <span className="text-white mx-2">/</span>}
              {crumb.path ? (
                <Link href={crumb.path} className="hover:text-gold transition duration-300">
                  {crumb.name}
                </Link>
              ) : (
                <span className="text-white">{crumb.name}</span>
              )}
            </React.Fragment>
          ))}
        </motion.nav>
      </div>
    </section>
  );
};

export default PageHeader;
