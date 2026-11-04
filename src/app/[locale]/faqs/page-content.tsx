"use client";
import React from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { FiChevronRight, FiPhoneCall, FiMail } from 'react-icons/fi';
import PageHeader from '@/components/layout/PageHeader';
import AnimatedHeading from '@/components/ui/AnimatedHeading';
import Accordion from '@/components/ui/Accordion';

const fadeInUp:Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const faqCategories = [
  "General Machinery & Plant Engineering",
  "Bottle Formats & Line Capacities",
  "Sterility, Hygiene & ISO Standards",
  "Custom Turnkey Solutions",
  "Commissioning & Worldwide Support"
];

const generalQuestions = [
  {
    question: "What types of beverage and packaging machinery does Seppa provide?",
    answer: "Seppa Solutions engineers complete turnkey lines for Mineral Water, Carbonated Soft Drinks, Juices, Beer, Spirits, Dairy, and Liquid Packaging. Our portfolio includes high-speed Electric PET Blowers, Non-Contact Aseptic Monoblocs, Rinsing-Filling-Capping systems, Labelers, and Robotic Palletizers."
  },
  {
    question: "What bottle materials, sizes, and capacities do your lines accommodate?",
    answer: "Our machinery accommodates PET bottles, Glass bottles, Aluminum Cans, Pouches, and Large format containers (from 200ml up to 20-liter jars). Line throughput ranges from 2,000 BPH up to 36,000 BPH depending on plant configuration."
  },
  {
    question: "What sanitary and quality certifications do Seppa machines follow?",
    answer: "All our beverage machinery is fabricated using certified food-grade stainless steel (SS304/SS316L) adhering to ISO 9001, CE, ASME, and global FDA hygiene and sterility compliance."
  },
  {
    question: "Do you offer full plant layout, engineering, and turnkey integration?",
    answer: "Yes. We manage the entire lifecycle: water treatment, processing, blow molding, filling, secondary packaging, conveyor automation, factory layout optimization, and plant SCADA integration."
  },
  {
    question: "What after-sales, warranty, and spare parts support is available?",
    answer: "We provide comprehensive on-site installation, operator training, rapid global spare parts dispatch, and 24/7 technical assistance across our offices in USA, UAE, India, Africa, and Europe."
  }
];

const Faqs = () => {
  return (
    <div className="bg-white overflow-hidden">
      <PageHeader 
        title="Frequently asked questions" 
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "FAQs" }
        ]} 
      />

      <section className="py-20 lg:py-28 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Sidebar */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="lg:w-1/3 space-y-8"
            >
              {/* Categories */}
              <motion.div variants={fadeInUp} className="bg-light p-8 rounded-2xl">
                <ul className="space-y-4">
                  {faqCategories.map((category, idx) => (
                    <li key={idx}>
                      <a href={`#category-${idx}`} className="flex items-center gap-3 text-dark font-heading font-bold text-lg hover:text-gold transition-colors duration-300 group">
                        <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-gold group-hover:bg-white hover:text-dark group-hover:text-white transition-colors duration-300 shadow-sm">
                          <FiChevronRight />
                        </span>
                        {category}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Contact CTA */}
              <motion.div variants={fadeInUp} className="relative rounded-2xl overflow-hidden bg-dark text-white p-8">
                <div className="absolute inset-0 opacity-20 bg-[url('/pics/process-technology.jpg')] bg-cover bg-center"></div>
                <div className="relative z-10">
                  <AnimatedHeading 
                    text="Need More Help?" 
                    elementType="h3" 
                    className="text-3xl font-heading font-bold mb-6" 
                  />
                  
                  <div className="space-y-6">
                    <a href="tel:+919940097000" className="flex items-center gap-4 bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/10 hover:bg-white hover:text-dark hover:border-gold transition duration-300 cursor-pointer">
                      <div className="w-12 h-12 rounded-full bg-white text-dark flex items-center justify-center text-xl">
                        <FiPhoneCall />
                      </div>
                      <div>
                        <p className="text-sm text-gray-300">Phone Support</p>
                        <p className="font-bold">+91 99400 97000</p>
                      </div>
                    </a>

                    <a href="mailto:info@seppasolutions.com" className="flex items-center gap-4 bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/10 hover:bg-white hover:text-dark hover:border-gold transition duration-300 cursor-pointer">
                      <div className="w-12 h-12 rounded-full bg-white text-dark flex items-center justify-center text-xl">
                        <FiMail />
                      </div>
                      <div>
                        <p className="text-sm text-gray-300">Email Address</p>
                        <p className="font-bold">info@seppasolutions.com</p>
                      </div>
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Main Content */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="lg:w-2/3"
            >
              <div id="category-0" className="mb-12">
                <AnimatedHeading 
                  text="General Questions" 
                  elementType="h2" 
                  className="text-4xl md:text-5xl font-heading font-bold text-dark mb-8" 
                />
                <motion.div variants={fadeInUp}>
                  <Accordion items={generalQuestions} defaultOpenIndex={0} />
                </motion.div>
              </div>

              {/* Placeholder for next category to show layout scaling */}
              <div id="category-1" className="mb-12 pt-8 border-t border-gray-100">
                <AnimatedHeading 
                  text="Products & Customization" 
                  elementType="h2" 
                  className="text-4xl md:text-5xl font-heading font-bold text-dark mb-8" 
                />
                <motion.div variants={fadeInUp}>
                  <Accordion items={generalQuestions.slice(2, 4)} defaultOpenIndex={null} />
                </motion.div>
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faqs;
