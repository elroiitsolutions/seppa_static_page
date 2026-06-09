"use client";
import React from 'react';
import PageHeader from '@/components/layout/PageHeader';
import { motion } from 'framer-motion';
import Link from "next/link";

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
    { title: 'Custom Textiles', image: 'https://demo.awaikenthemes.com/yarnex/wp-content/uploads/2026/02/service-image-1.jpg', link: '/services/custom-textiles' },
    { title: 'Fabric Manufacturing', image: 'https://demo.awaikenthemes.com/yarnex/wp-content/uploads/2026/02/service-image-2.jpg', link: '/services/fabric-manufacturing' },
    { title: 'Sustainable Practices', image: 'https://demo.awaikenthemes.com/yarnex/wp-content/uploads/2026/02/service-image-3.jpg', link: '/services/sustainable-practices' },
    { title: 'Quality Testing', image: 'https://demo.awaikenthemes.com/yarnex/wp-content/uploads/2026/02/service-image-4.jpg', link: '/services/quality-testing' },
    { title: 'Textile Printing', image: 'https://demo.awaikenthemes.com/yarnex/wp-content/uploads/2026/02/service-image-5.jpg', link: '/services/textile-printing' },
    { title: 'Yarn Processing', image: 'https://demo.awaikenthemes.com/yarnex/wp-content/uploads/2026/02/service-image-6.jpg', link: '/services/yarn-processing' },
  ];

  const steps = [
    { number: '01', title: 'Material Selection', desc: 'Material selection begins with sourcing premium fibers and fabrics that meet the require performance.' },
    { number: '02', title: 'Manufacturing', desc: 'Our advanced manufacturing processes ensure strength, uniformity, and quality for various applications.' },
    { number: '03', title: 'Quality Assurance', desc: 'Rigorous quality testing guarantees every fabric roll meets global durability and consistency standards.' },
    { number: '04', title: 'Delivery', desc: 'Efficient packaging and global logistics ensure fast delivery for bulk orders worldwide.' }
  ];

  return (
    <div className="overflow-hidden">
      <PageHeader 
        title="Our services" 
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Services' }]} 
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
                  <div className="aspect-[4/3] w-full overflow-hidden relative">
                    <div className="absolute inset-0 bg-dark opacity-10 group-hover:opacity-30 transition duration-300 z-10"></div>
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-700" 
                    />
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
              From concept to delivery our textile process
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
