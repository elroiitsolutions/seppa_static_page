import React from 'react';
import { motion, Variants } from 'framer-motion';
import AnimatedHeading from '../ui/AnimatedHeading';
import logoImg from '@/assets/logo/logo.png';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const partners = [
  { id: 1, name: 'Partner 1', image: logoImg.src },
  { id: 2, name: 'Partner 2', image: logoImg.src },
  { id: 3, name: 'Partner 3', image: logoImg.src },
  { id: 4, name: 'Partner 4', image: logoImg.src }
];

const Partners = () => {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* Header Section */}
        <motion.div 
          className="text-center max-w-[1200px] mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-seppa-red"></span>
            <span className="text-sm font-medium text-dark uppercase tracking-wider">Our Partners</span>
          </motion.div>
          
          <div className='w-full max-w-[1000px] mx-auto flex justify-center text-center'>
            <AnimatedHeading 
              text="Collaborating with the Best in the Industry" 
              elementType="h2" 
              className="text-4xl md:text-5xl lg:text-[52px] font-heading font-bold text-dark leading-tight [&>span]:justify-center" 
            />
          </div>
        </motion.div>

        {/* Partners Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[1200px] mx-auto"
        >
          {partners.map((partner) => (
            <motion.div 
              key={partner.id} 
              variants={fadeInUp}
              className="bg-white rounded-3xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 overflow-hidden p-8 flex flex-col items-center justify-center group cursor-pointer"
            >
              <div className="h-24 w-full flex items-center justify-center mb-6">
                <img 
                  src={partner.image} 
                  alt={partner.name} 
                  className="max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500 opacity-60 group-hover:opacity-100" 
                />
              </div>
              <h3 className="text-lg md:text-xl font-bold font-heading text-dark group-hover:text-seppa-red transition-colors duration-300 text-center">
                {partner.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Partners;
