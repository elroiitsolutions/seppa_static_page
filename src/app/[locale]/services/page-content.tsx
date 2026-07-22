"use client";
import React from 'react';
import PageHeader from '@/components/layout/PageHeader';
import { motion } from 'framer-motion';
import Link from "next/link";
import banner1 from '@/assets/processing/generated/processing_banner_1781759101340.png';
import banner2 from '@/assets/blowing/generated/blowing_overview_1781759662496.png';
import banner3 from '@/assets/processing/generated/processing_cb1_1781759122683.png';
import banner4 from '@/assets/processing/generated/processing_cb2_1781759136791.png';
import banner5 from '@/assets/blowing/generated/blowing_cb3_1781759707330.png';
import banner6 from '@/assets/processing/generated/processing_whychoose_1781759182691.png';
import banner7 from '@/assets/processing/generated/processing_meth1_1781759196548.png';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const Services: React.FC = () => {
  const services = [
    { title: 'Processing', image: banner1.src, link: '/processing' },
    { title: 'Blowing', image: banner2.src, link: '/blowing' },
    { title: 'PET', image: banner3.src, link: '/pet' },
    { title: 'PET Jars', image: banner4.src, link: '/pet-jars' },
    { title: 'Rinser / Filler / Capper', image: banner5.src, link: '/rinser-filler-capper' },
    { title: 'Labelling', image: banner6.src, link: '/labelling' },
    { title: 'Refrigeration System', image: banner7.src, link: '/refrigeration-system' },
  ];

  const steps = [
    { number: '01', title: 'Consultation & Planning', desc: 'We work closely with you to understand your specific operational, performance, and compliance requirements.' },
    { number: '02', title: 'Custom Engineering', desc: 'Our advanced design processes ensure equipment tailored specifically to maximize your line efficiency.' },
    { number: '03', title: 'Manufacturing & Testing', desc: 'Rigorous quality assurance and testing guarantees every system meets global durability standards.' },
    { number: '04', title: 'Installation & Support', desc: 'Efficient installation and comprehensive training ensure smooth operations and long-term reliability.' }
  ];

  return (
    <div className="overflow-hidden">
      <PageHeader 
        title="Our services" 
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Services' }]} 
        bgImage={banner1.src}
      />
      
      {/* Services Grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                className="group relative rounded-2xl overflow-hidden shadow-lg cursor-pointer bg-light"
              >
                <Link href={service.link} className="block w-full h-full">
                  <div className="aspect-[4/3] w-full overflow-hidden relative group/image">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-700" 
                    />
                    <div className="shine-overlay"></div>
                  </div>
                  <div className="bg-white p-6 relative z-20 text-center transform group-hover:-translate-y-2 transition duration-300">
                    <h3 className="text-2xl font-bold font-heading text-dark group-hover:text-gold transition">
                      {service.title}
                    </h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 lg:py-28 bg-light">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h3 variants={fadeInUp} className="text-gold font-medium uppercase tracking-wider mb-2">
              How It Work
            </motion.h3>
            <motion.h2 variants={fadeInUp} className="text-4xl lg:text-5xl font-heading font-bold text-dark leading-tight">
              From concept to delivery our integrated process
            </motion.h2>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                className="bg-white p-10 rounded-3xl text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300 relative overflow-hidden group"
              >
                <div className="absolute -top-10 -right-10 text-9xl font-heading font-bold text-light opacity-50 group-hover:text-gold group-hover:opacity-10 transition duration-500">
                  {step.number}
                </div>
                
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-light rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white hover:text-dark transition duration-300">
                    <span className="text-2xl font-bold font-heading text-dark group-hover:text-white transition">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-dark mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
