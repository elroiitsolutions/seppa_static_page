import React from 'react';
import { motion , Variants } from 'framer-motion';
import Link from 'next/link';
import AnimatedHeading from '../ui/AnimatedHeading';
import bgPattern from '@/assets/bg/black-line-1.png';

const fadeInUp:Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const services = [
  {
    title: 'Complete Beer/Wine & Mead processing and packaging lines',
    image: 'pics/360_F_98234483_dlK6t4pwm8npmgVjzoYi0QvVPd3M90xc.jpg'
  },
  {
    title: 'Complete liquor & spirits/RTDs & seltzers processing and packaging lines',
    image: 'pics/istockphoto-2209086842-612x612.jpg'
  },
  {
    title: 'Complete mineral water/Alkaline water processing and packaging lines',
    image: 'pics/360_F_643784437_OcJMafVBr2EFvS0uN6TrXI8b9CwuZAew.jpg'
  },
  {
    title: 'Complete soft drinks/juice/milk processing and packaging lines',
    image: 'pics/pexels-photo-17559580.jpg'
  }
  
];

const Services = () => {
  return (
    <section className="py-12 lg:py-24 bg-[#101934] relative overflow-hidden m-3 rounded-2xl">
      {/* Background Pattern Overlay (Optional subtle texture) */}
       <div className="absolute inset-0 pointer-events-none bg-no-repeat bg-center bg-cover opacity-15" style={{ backgroundImage: `url(${bgPattern.src})` }}></div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header Section */}
        <motion.div 
          className="text-center max-w-[1200px] mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-700 bg-[#1c1c1c] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-seppa-red"></span>
            <span className="text-sm font-medium text-gray-300 uppercase tracking-wider">Our Services</span>
          </motion.div>
          
          <div className='w-full max-w-[1000px] mx-auto flex justify-center text-center'>
            <AnimatedHeading 
              text="Comprehensive Processing & Packaging Systems You Can Trust" 
              elementType="h2" 
              className="text-4xl md:text-5xl lg:text-[52px] font-heading font-bold text-white leading-tight [&>span]:justify-center" 
            />
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {services.map((service, idx) => (
            <motion.div key={idx} variants={fadeInUp} className="group cursor-pointer h-full">
              <div className="bg-[#1c1c1c] rounded-3xl overflow-hidden p-3 shadow-lg border border-gray-800 transition duration-300 hover:border-gray-600 h-full flex flex-col">
                <div className="rounded-2xl overflow-hidden aspect-[4/3] mb-4 shrink-0 relative group/image">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover/image:scale-105 transition-transform duration-700 ease-in-out" 
                  />
                  <div className="shine-overlay" />
                </div>
                <div className="text-center pb-4 pt-2 flex-grow flex flex-col justify-center">
                  <h3 className="text-xl font-bold font-heading text-white group-hover:text-gold transition duration-300">
                    {service.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Callout */}
        {/* <motion.div 
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <p className="text-gray-400 text-lg flex items-center justify-center flex-wrap gap-2">
            <span className="bg-[seppa-red] text-white text-xs font-bold uppercase px-2 py-1 rounded">Free</span>
            Let's make something great work together. <Link href="/contact-us" className="text-gold font-bold hover:underline">Get Free Quote.</Link>
          </p>
        </motion.div> */}

      </div>
    </section>
  );
};

export default Services;
