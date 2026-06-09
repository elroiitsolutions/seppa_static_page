import React from 'react';
import { motion , Variants } from 'framer-motion';
import Link from 'next/link';
import AnimatedHeading from '../ui/AnimatedHeading';

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
    title: 'Custom Textiles',
    image: 'https://demo.awaikenthemes.com/yarnex/wp-content/uploads/2026/02/service-image-1.jpg'
  },
  {
    title: 'Fabric Manufacturing',
    image: 'https://demo.awaikenthemes.com/yarnex/wp-content/uploads/2026/02/service-image-2.jpg'
  },
  {
    title: 'Sustainable Practices',
    image: 'https://demo.awaikenthemes.com/yarnex/wp-content/uploads/2026/02/service-image-3.jpg'
  }
];

const Services = () => {
  return (
    <section className="py-24 bg-[#141414] relative overflow-hidden m-3 rounded-2xl">
      {/* Background Pattern Overlay (Optional subtle texture) */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header Section */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-700 bg-[#1c1c1c] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
            <span className="text-sm font-medium text-gray-300 uppercase tracking-wider">Our Services</span>
          </motion.div>
          
          <AnimatedHeading 
            text="Comprehensive textile services you can trust" 
            elementType="h2" 
            className="text-4xl md:text-5xl lg:text-[52px] font-heading font-bold text-white leading-tight" 
          />
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {services.map((service, idx) => (
            <motion.div key={idx} variants={fadeInUp} className="group cursor-pointer">
              <div className="bg-[#1c1c1c] rounded-3xl overflow-hidden p-3 shadow-lg border border-gray-800 transition duration-300 hover:border-gray-600">
                <div className="rounded-2xl overflow-hidden aspect-[4/3] mb-4">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700" 
                  />
                </div>
                <div className="text-center pb-4 pt-2">
                  <h3 className="text-xl font-bold font-heading text-white group-hover:text-gold transition duration-300">
                    {service.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Callout */}
        <motion.div 
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
        </motion.div>

      </div>
    </section>
  );
};

export default Services;
