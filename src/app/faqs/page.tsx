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
  "General Questions",
  "Products & Customization",
  "Quality & Standards",
  "Pricing & Orders",
  "Production & Delivery"
];

const generalQuestions = [
  {
    question: "What types of textiles do you manufacture and supply?",
    answer: "We combine eco friendly processes, responsible sourcing & advance technology to deliver sustainable textiles without compromising quality or performance. We manufacture a wide range of products including cotton, polyester, blended fabrics, and custom-designed textiles for industrial and fashion use."
  },
  {
    question: "What quality standards do your textile products follow?",
    answer: "We strictly adhere to international quality standards including ISO 9001 and OEKO-TEX certified processes to ensure that all our textiles are safe, durable, and of the highest premium quality."
  },
  {
    question: "Can I request custom fabric designs or specific material blends?",
    answer: "Absolutely! We offer comprehensive customization options. Our R&D team can work closely with you to develop specific fabric blends, colors, and patterns tailored to your exact requirements."
  },
  {
    question: "What is your minimum order quantity (MOQ)?",
    answer: "Our minimum order quantity varies depending on the specific textile and customization requirements. Generally, for standard fabrics, our MOQ is 1,000 meters. Please contact our sales team for detailed information regarding your specific needs."
  },
  {
    question: "How long does it take to process and deliver an order?",
    answer: "Standard orders are usually processed and shipped within 2-3 weeks. Custom orders may take 4-6 weeks depending on the complexity of the design and the volume requested."
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
                <div className="absolute inset-0 opacity-20 bg-[url('https://demo.awaikenthemes.com/yarnex/wp-content/uploads/2026/02/sidebar-cta-image.jpg')] bg-cover bg-center"></div>
                <div className="relative z-10">
                  <AnimatedHeading 
                    text="Need More Help?" 
                    elementType="h3" 
                    className="text-3xl font-heading font-bold mb-6" 
                  />
                  
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/10 hover:bg-white hover:text-dark hover:border-gold transition duration-300 cursor-pointer">
                      <div className="w-12 h-12 rounded-full bg-white text-dark flex items-center justify-center text-xl">
                        <FiPhoneCall />
                      </div>
                      <div>
                        <p className="text-sm text-gray-300">Phone Number</p>
                        <p className="font-bold">+123 456 789</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/10 hover:bg-white hover:text-dark hover:border-gold transition duration-300 cursor-pointer">
                      <div className="w-12 h-12 rounded-full bg-white text-dark flex items-center justify-center text-xl">
                        <FiMail />
                      </div>
                      <div>
                        <p className="text-sm text-gray-300">Email Address</p>
                        <p className="font-bold">info@domainname.com</p>
                      </div>
                    </div>
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
