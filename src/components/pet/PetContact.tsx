"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { FiPhoneCall, FiMail, FiMapPin } from 'react-icons/fi';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const PetContact = () => {
  return (
    <section className="py-20 lg:py-28 bg-light overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Contact Details */}
          <motion.div 
            className="lg:w-1/3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-seppa-red"></span>
              <span className="text-sm font-medium text-dark uppercase tracking-wider">Contact Us</span>
            </motion.div>
            
            <motion.h2 variants={fadeInUp} className="text-4xl lg:text-5xl font-heading font-bold text-dark leading-tight mb-8">
              Let&apos;s Discuss Your Packaging Needs
            </motion.h2>
            
            <motion.p variants={fadeInUp} className="text-gray-600 mb-8">
              Reach out to our experts to find the perfect packaging solutions tailored for your business. We are here to help you succeed.
            </motion.p>

            <motion.div variants={fadeInUp} className="space-y-6">
              <a href="tel:123456789" className="flex items-center gap-6 p-6 bg-white rounded-2xl hover:shadow-md transition group">
                <div className="w-16 h-16 bg-light text-seppa-red rounded-full flex items-center justify-center text-2xl shrink-0 group-hover:bg-seppa-red hover:text-dark group-hover:text-white transition shadow-sm">
                  <FiPhoneCall />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading text-dark mb-1">Call Us:</h3>
                  <p className="text-gray-600">+(123) 456-789</p>
                </div>
              </a>

              <a href="mailto:info@seppa.com" className="flex items-center gap-6 p-6 bg-white rounded-2xl hover:shadow-md transition group">
                <div className="w-16 h-16 bg-light text-seppa-red rounded-full flex items-center justify-center text-2xl shrink-0 group-hover:bg-seppa-red hover:text-dark group-hover:text-white transition shadow-sm">
                  <FiMail />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading text-dark mb-1">Email Us:</h3>
                  <p className="text-gray-600">packaging@seppa.com</p>
                </div>
              </a>

              <div className="flex items-center gap-6 p-6 bg-white rounded-2xl hover:shadow-md transition group">
                <div className="w-16 h-16 bg-light text-seppa-red rounded-full flex items-center justify-center text-2xl shrink-0 group-hover:bg-seppa-red hover:text-dark group-hover:text-white transition shadow-sm">
                  <FiMapPin />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading text-dark mb-1">Location:</h3>
                  <p className="text-gray-600">Global Headquarters</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="lg:w-2/3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white p-10 lg:p-14 rounded-[2rem] h-full shadow-lg border border-gray-100">
              <h3 className="text-3xl font-bold font-heading text-dark mb-8">Request a Quote</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      className="w-full px-6 py-4 rounded-full bg-light border-0 text-gray-700 focus:outline-none focus:ring-2 focus:ring-seppa-red transition shadow-sm" 
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Email Address" 
                      className="w-full px-6 py-4 rounded-full bg-light border-0 text-gray-700 focus:outline-none focus:ring-2 focus:ring-seppa-red transition shadow-sm" 
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input 
                      type="tel" 
                      placeholder="Phone Number" 
                      className="w-full px-6 py-4 rounded-full bg-light border-0 text-gray-700 focus:outline-none focus:ring-2 focus:ring-seppa-red transition shadow-sm" 
                    />
                  </div>
                  <div>
                    <input 
                      type="text" 
                      placeholder="Packaging Type" 
                      defaultValue="Packaging Inquiry"
                      className="w-full px-6 py-4 rounded-full bg-light border-0 text-gray-700 focus:outline-none focus:ring-2 focus:ring-seppa-red transition shadow-sm" 
                    />
                  </div>
                </div>
                <div>
                  <textarea 
                    rows={5} 
                    placeholder="Tell us about your packaging requirements..." 
                    className="w-full px-6 py-4 rounded-3xl bg-light border-0 text-gray-700 focus:outline-none focus:ring-2 focus:ring-seppa-red transition shadow-sm resize-none"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="bg-[#101934] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-seppa-red transition duration-300 w-auto inline-block"
                >
                  Send Inquiry
                </button>
              </form>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default PetContact;
