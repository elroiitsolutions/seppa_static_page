"use client";
import React from 'react';
import PageHeader from '@/components/layout/PageHeader';
import { motion } from 'framer-motion';
import { FiPhoneCall, FiMail, FiMapPin } from 'react-icons/fi';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const ContactUs: React.FC = () => {
  return (
    <div className="overflow-hidden">
      <PageHeader 
        title="Contact us" 
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Contact Us' }]} 
      />
      
      <section className="py-20 lg:py-28 bg-white">
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
              <motion.h3 variants={fadeInUp} className="text-gold font-medium uppercase tracking-wider mb-2">
                Contact Details
              </motion.h3>
              <motion.h2 variants={fadeInUp} className="text-4xl lg:text-5xl font-heading font-bold text-dark leading-tight mb-8">
                Get In Touch
              </motion.h2>

              <motion.div variants={fadeInUp} className="space-y-6">
                <a href="tel:123456789" className="flex items-center gap-6 p-6 bg-light rounded-2xl hover:shadow-md transition group">
                  <div className="w-16 h-16 bg-white text-gold rounded-full flex items-center justify-center text-2xl shrink-0 group-hover:bg-white hover:text-dark group-hover:text-white transition shadow-sm">
                    <FiPhoneCall />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-heading text-dark mb-1">Need Help:</h3>
                    <p className="text-gray-600">+(123) 456-789</p>
                  </div>
                </a>

                <a href="mailto:info@yarnex.com" className="flex items-center gap-6 p-6 bg-light rounded-2xl hover:shadow-md transition group">
                  <div className="w-16 h-16 bg-white text-gold rounded-full flex items-center justify-center text-2xl shrink-0 group-hover:bg-white hover:text-dark group-hover:text-white transition shadow-sm">
                    <FiMail />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-heading text-dark mb-1">Quick Email:</h3>
                    <p className="text-gray-600">info@seppasolutions.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-6 p-6 bg-light rounded-2xl hover:shadow-md transition group">
                  <div className="w-16 h-16 bg-white text-gold rounded-full flex items-center justify-center text-2xl shrink-0 group-hover:bg-white hover:text-dark group-hover:text-white transition shadow-sm">
                    <FiMapPin />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-heading text-dark mb-1">Office Address:</h3>
                    <p className="text-gray-600">Apt. 3B, 456 Elm Street</p>
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
              <div className="bg-light p-10 lg:p-14 rounded-3xl h-full">
                <h3 className="text-3xl font-bold font-heading text-dark mb-8">Send us a message</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <input 
                        type="text" 
                        placeholder="Your Name" 
                        className="w-full px-6 py-4 rounded-full bg-white border-0 text-gray-700 focus:outline-none focus:ring-2 focus:ring-gold transition shadow-sm" 
                      />
                    </div>
                    <div>
                      <input 
                        type="email" 
                        placeholder="Email Address" 
                        className="w-full px-6 py-4 rounded-full bg-white border-0 text-gray-700 focus:outline-none focus:ring-2 focus:ring-gold transition shadow-sm" 
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <input 
                        type="tel" 
                        placeholder="Phone Number" 
                        className="w-full px-6 py-4 rounded-full bg-white border-0 text-gray-700 focus:outline-none focus:ring-2 focus:ring-gold transition shadow-sm" 
                      />
                    </div>
                    <div>
                      <input 
                        type="text" 
                        placeholder="Subject" 
                        className="w-full px-6 py-4 rounded-full bg-white border-0 text-gray-700 focus:outline-none focus:ring-2 focus:ring-gold transition shadow-sm" 
                      />
                    </div>
                  </div>
                  <div>
                    <textarea 
                      rows={5} 
                      placeholder="Write Message..." 
                      className="w-full px-6 py-4 rounded-3xl bg-white border-0 text-gray-700 focus:outline-none focus:ring-2 focus:ring-gold transition shadow-sm resize-none"
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="bg-dark text-white px-10 py-4 rounded-full font-medium hover:bg-white hover:text-dark transition duration-300 w-auto"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="pb-20 lg:pb-28 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full h-[500px] rounded-3xl overflow-hidden shadow-lg border-8 border-light"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.2528000654!2d-74.14448744574972!3d40.69766374865766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1707998651817!5m2!1sen!2sbd" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
