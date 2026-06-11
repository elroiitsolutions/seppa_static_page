"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { FiBox, FiShield, FiCheckCircle, FiLayers, FiGlobe } from 'react-icons/fi';
import AnimatedHeading from '../ui/AnimatedHeading';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const defaultReasons = [
  {
    id: 1,
    icon: <FiBox />,
    title: 'Customizable Solutions',
    description: 'We offer tailored machinery designs that meet the exact requirements of your products, ensuring a perfect fit and high efficiency.'
  },
  {
    id: 2,
    icon: <FiShield />,
    title: 'Uncompromised Protection',
    description: 'Our packaging lines are engineered for maximum durability, keeping your products safe during the entire production process.'
  },
  {
    id: 3,
    icon: <FiCheckCircle />,
    title: 'Premium Quality Standards',
    description: 'Every machine undergoes rigorous quality assurance to meet international standards and exceed your expectations.'
  },
  {
    id: 4,
    icon: <FiLayers />,
    title: 'Advanced Technology',
    description: 'We are committed to continuous innovation, utilizing state-of-the-art automation to reduce environmental impact and increase speed.'
  },
  {
    id: 5,
    icon: <FiGlobe />,
    title: 'Global Support Network',
    description: 'With a robust global logistics and support network, we ensure timely delivery and maintenance of your packaging solutions anywhere.'
  }
];

const PackagingWhyChooseUs = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <motion.div 
            className="w-full lg:w-5/12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
          >
            <div className="rounded-[2rem] overflow-hidden h-[750px] w-full shadow-lg relative bg-light">
              <img 
                src="https://demo.awaikenthemes.com/yarnex/wp-content/uploads/2026/02/why-choose-us-img.jpg" 
                alt="Packaging Quality" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-dark/20 mix-blend-multiply"></div>
            </div>
          </motion.div>

          <motion.div 
            className="w-full lg:w-7/12 lg:pl-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-seppa-red"></span>
              <span className="text-sm font-medium text-dark uppercase tracking-wider">Why Choose SEPPA</span>
            </motion.div>
            
            <AnimatedHeading 
              text="Elevating Your Brand with Superior Automation" 
              elementType="h2" 
              className="text-4xl md:text-5xl lg:text-5xl font-heading font-bold text-dark leading-tight mb-6" 
            />
            
            <motion.p variants={fadeInUp} className="text-lg text-gray-500 mb-10 leading-relaxed">
              We combine innovative designs, sustainable operations, and advanced manufacturing technologies to deliver automated solutions that protect your products and captivate your customers.
            </motion.p>

            <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
              {defaultReasons.map((reason) => (
                <div key={reason.id} className="flex gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-light rounded-xl flex items-center justify-center text-seppa-red text-2xl shadow-sm">
                    {reason.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold font-heading text-dark mb-2">{reason.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PackagingWhyChooseUs;
