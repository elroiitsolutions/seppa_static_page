"use client";
import React from 'react';
import PageHeader from '@/components/layout/PageHeader';
import { motion } from 'framer-motion';
import Link from "next/link";
import { FiCheckCircle, FiPlay, FiTarget, FiEye } from 'react-icons/fi';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const AboutUs: React.FC = () => {
  return (
    <div className="overflow-hidden">
      <PageHeader 
        title="About us" 
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'About Us' }]} 
      />
      
      {/* About Our Industries */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              className="w-full lg:w-1/2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.h3 variants={fadeInUp} className="text-gold font-medium uppercase tracking-wider mb-2">
                About Our Industries
              </motion.h3>
              <motion.h2 variants={fadeInUp} className="text-4xl lg:text-5xl font-heading font-bold text-dark leading-tight mb-8">
                We are dedicated to crafting high quality textiles for diverse global industrial applications worldwide
              </motion.h2>

              <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                <div className="flex flex-col gap-4 p-8 bg-light rounded-2xl shadow-sm hover:shadow-md transition">
                  <div className="text-gold text-4xl">
                    <FiTarget />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold font-heading text-dark mb-2">Our Mission</h4>
                    <p className="text-gray-600">We are source, advanced manufacturing.</p>
                  </div>
                </div>
                <div className="flex flex-col gap-4 p-8 bg-light rounded-2xl shadow-sm hover:shadow-md transition">
                  <div className="text-gold text-4xl">
                    <FiEye />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold font-heading text-dark mb-2">Our Vision</h4>
                    <p className="text-gray-600">We are source, advanced manufacturing.</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="https://demo.awaikenthemes.com/yarnex/wp-content/uploads/2026/02/approach-image.jpg" 
                alt="Approach" 
                className="w-full rounded-3xl shadow-xl object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 lg:py-28 bg-light">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              className="w-full lg:w-1/2 order-2 lg:order-1 relative mb-12 lg:mb-0"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="https://demo.awaikenthemes.com/yarnex/wp-content/uploads/2026/02/industries-image-1.jpg" 
                alt="Industries" 
                className="w-[85%] rounded-3xl shadow-xl object-cover"
              />
              <img 
                src="https://demo.awaikenthemes.com/yarnex/wp-content/uploads/2026/02/industries-image-2.jpg" 
                alt="Industries Details" 
                className="w-[50%] absolute -bottom-10 -right-4 border-[10px] border-light rounded-3xl shadow-2xl object-cover z-10"
              />
            </motion.div>

            <motion.div 
              className="w-full lg:w-1/2 order-1 lg:order-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.h3 variants={fadeInUp} className="text-gold font-medium uppercase tracking-wider mb-2">
                Our Approach
              </motion.h3>
              <motion.h2 variants={fadeInUp} className="text-4xl lg:text-5xl font-heading font-bold text-dark leading-tight mb-6">
                Our strategic approach to textile excellence
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-gray-600 text-lg mb-8 leading-relaxed">
                From responsible material sourcing and advanced techniques to strict quality control and continuous improvement.
              </motion.p>
              
              <motion.div variants={fadeInUp}>
                <Link href="/contact-us" className="inline-block bg-dark text-white px-8 py-4 rounded-full font-medium hover:bg-white hover:text-dark transition duration-300">
                  Book Consultation
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Industries */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16">
            <motion.div 
              className="w-full lg:w-1/3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.h3 variants={fadeInUp} className="text-gold font-medium uppercase tracking-wider mb-2">
                Our Industries
              </motion.h3>
              <motion.h2 variants={fadeInUp} className="text-4xl lg:text-5xl font-heading font-bold text-dark leading-tight mb-6">
                Serving diverse industries with quality textiles
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-gray-600 text-lg mb-8 leading-relaxed">
                We provide high-quality textile solutions designed to meet the unique, ensuring durability, performance, and consistency across every application.
              </motion.p>
              
              <motion.div variants={fadeInUp}>
                <Link href="/contact-us" className="inline-block bg-dark text-white px-8 py-4 rounded-full font-medium hover:bg-white hover:text-dark transition duration-300">
                  Get A Quote
                </Link>
              </motion.div>
              
              <motion.div variants={fadeInUp} className="mt-8 flex items-center gap-4 p-6 bg-light rounded-2xl border-l-4 border-gold">
                <div className="text-gold text-3xl">📞</div>
                <div>
                  <h4 className="text-lg font-bold font-heading text-dark">Need Any Help?</h4>
                  <p className="text-gray-600 font-medium">+(123) 456-789</p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              className="w-full lg:w-2/3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {['Automotive & Transportation', 'Construction & Infrastructure', 'Hospitality & Home Furnishing', 'Industrial Safety Applications'].map((industry, index) => (
                  <motion.div 
                    key={index}
                    variants={fadeInUp}
                    className="p-8 bg-light rounded-2xl flex items-center gap-4 hover:shadow-md transition group"
                  >
                    <div className="text-gold text-2xl group-hover:scale-110 transition">
                      <FiCheckCircle />
                    </div>
                    <p className="font-heading font-bold text-dark text-lg">{industry}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div variants={fadeInUp} className="mt-10 p-10 bg-dark rounded-3xl relative overflow-hidden group">
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 text-white">
                  <div>
                    <h3 className="text-2xl font-bold font-heading mb-2">Watch Our industries Video</h3>
                    <p className="text-gray-300">Discover how our industry advanced processes, and commitment to quality come together in action.</p>
                  </div>
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-white shrink-0 shadow-[0_0_15px_rgba(214,168,72,0.5)] cursor-pointer group-hover:scale-110 transition">
                    <FiPlay className="ml-1 text-2xl" />
                  </div>
                </div>
                <div className="absolute inset-0 bg-[url('https://demo.awaikenthemes.com/yarnex/wp-content/themes/yarnexhttps://demo.awaikenthemes.com/yarnex/wp-content/uploads/2026/02/pattern.png')] opacity-10"></div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
