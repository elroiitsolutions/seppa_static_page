"use client";
import React from 'react';
import PageHeader from '@/components/layout/PageHeader';
import { motion } from 'framer-motion';
import { FiPhoneCall, FiMail, FiMapPin, FiGlobe } from 'react-icons/fi';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const offices = [
  {
    city: "Mumbai (Corporate Office)",
    address: "712 Shivai Plaza, Andheri (East), Mumbai-400059, India",
    phone: ["1-800-425-20000", "+91-9384806105"],
    email: "info@seppasolutions.com",
    country: "India"
  },
  {
    city: "Chennai",
    address: "Vatsala Eashwaran Estate, No. 7, Paarivakkam Road, Chennai - 600056, Tamilnadu, India",
    phone: ["1-800-425-20000", "+91-9384806105"],
    email: "dgmw@canadiancrystalline.net",
    country: "India"
  },
  {
    city: "Bengaluru",
    address: "137/34, 10th Floor, HM Ambassador Towers, Residency Road, Bangalore - 560025",
    phone: ["+91-9483525500"],
    email: "info@seppasolutions.com",
    country: "India"
  },
  {
    city: "New Delhi",
    address: "No.1305, 13th Floor, Vikram Towers, Building no-16, Rajendra place, New Delhi - 110008",
    phone: ["1-800-425-20000", "+91-9384806105"],
    email: "info@seppasolutions.com",
    country: "India"
  },
  {
    city: "Hyderabad",
    address: "Hyderabad Region",
    mapQuery: "Hyderabad, India",
    phone: ["+91-9384806105"],
    email: "info@seppasolutions.com",
    country: "India"
  },
  {
    city: "USA",
    address: "439 N Briery Road, Biery Industrial Area, Irving, Texas",
    phone: ["Toll Free: 1-(888)-270-2217", "+1 267 7339 732"],
    email: "mail@seppasolutions.com",
    country: "USA"
  },
  {
    city: "Canada (Edmonton)",
    address: "Alberta Region",
    mapQuery: "Edmonton, Alberta, Canada",
    mapZoom: 10,
    phone: ["+1-(403)-469-4015"],
    email: "ccw@canadianclear.com",
    country: "Canada"
  },
  {
    city: "UAE",
    address: "Ajman Free Zone, U.A.E.",
    phone: ["+971507726933"],
    email: "mail@seppasolutions.com",
    country: "UAE"
  },
  {
    city: "United Kingdom",
    address: "UK Region",
    mapQuery: "United Kingdom",
    mapZoom: 5,
    phone: ["+44 20300 27711"],
    email: "mail@seppasolutions.com",
    country: "UK"
  },
  {
    city: "Germany & Belgium",
    address: "Brussels Region",
    mapQuery: "Brussels, Belgium",
    mapZoom: 6,
    phone: ["+4917622913101"],
    email: "ccw@canadianclear.com",
    country: "Europe"
  },
  {
    city: "Australia",
    address: "Australia Region",
    mapQuery: "Australia",
    mapZoom: 6,
    phone: ["+61363877084"],
    email: "mail@seppasolutions.com",
    country: "Australia"
  },
  {
    city: "Armenia",
    address: "Armenia Region",
    mapQuery: "Armenia",
    mapZoom: 6,
    phone: ["+37494890965"],
    email: "mail@seppasolutions.com",
    country: "Armenia"
  }
];

const ContactUs: React.FC = () => {
  const [activeOffice, setActiveOffice] = React.useState(offices[0]);

  return (
    <div className="bg-gray-50">
      <PageHeader 
        title="Contact Us" 
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Contact Us' }]} 
      />
      
      {/* Main Contact Section */}
      <section className="py-20 lg:py-28 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Primary Contact Details */}
            <motion.div 
              className="lg:w-1/3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.h3 variants={fadeInUp} className="text-seppa-red font-medium uppercase tracking-wider mb-2">
                Headquarters
              </motion.h3>
              <motion.h2 variants={fadeInUp} className="text-4xl lg:text-5xl font-heading font-bold text-[#101934] leading-tight mb-8">
                Get In Touch
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-gray-600 mb-8">
                Reach out to our corporate headquarters or explore our global branch offices to connect with a representative near you.
              </motion.p>

              <motion.div variants={fadeInUp} className="space-y-6">
                <a href="tel:180042520000" className="flex items-center gap-6 p-6 bg-white rounded-2xl hover:shadow-md transition group border border-gray-100">
                  <div className="w-16 h-16 bg-[#101934]/5 text-seppa-red rounded-full flex items-center justify-center text-2xl shrink-0 group-hover:bg-seppa-red group-hover:text-white transition shadow-sm">
                    <FiPhoneCall />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-heading text-[#101934] mb-1">Toll Free:</h3>
                    <p className="text-gray-600">1-800-425-20000</p>
                  </div>
                </a>

                <a href="mailto:info@seppasolutions.com" className="flex items-center gap-6 p-6 bg-white rounded-2xl hover:shadow-md transition group border border-gray-100">
                  <div className="w-16 h-16 bg-[#101934]/5 text-seppa-red rounded-full flex items-center justify-center text-2xl shrink-0 group-hover:bg-seppa-red group-hover:text-white transition shadow-sm">
                    <FiMail />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-heading text-[#101934] mb-1">Quick Email:</h3>
                    <p className="text-gray-600">info@seppasolutions.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-6 p-6 bg-white rounded-2xl hover:shadow-md transition group border border-gray-100">
                  <div className="w-16 h-16 bg-[#101934]/5 text-seppa-red rounded-full flex items-center justify-center text-2xl shrink-0 group-hover:bg-seppa-red group-hover:text-white transition shadow-sm">
                    <FiMapPin />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-heading text-[#101934] mb-1">Corporate Office:</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">712 Shivai Plaza, Andheri(E),<br/>Mumbai-400059, India</p>
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
              <div className="bg-[#101934] p-8 lg:p-14 rounded-3xl h-full shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-seppa-red rounded-full mix-blend-multiply filter blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
                
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold font-heading text-white mb-8">Send us a message</h3>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <input 
                          type="text" 
                          placeholder="Your Name *" 
                          required
                          className="w-full px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-seppa-red transition backdrop-blur-sm" 
                        />
                      </div>
                      <div>
                        <input 
                          type="email" 
                          placeholder="Email Address *" 
                          required
                          className="w-full px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-seppa-red transition backdrop-blur-sm" 
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <input 
                          type="tel" 
                          placeholder="Phone Number *" 
                          required
                          className="w-full px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-seppa-red transition backdrop-blur-sm" 
                        />
                      </div>
                      <div>
                        <input 
                          type="text" 
                          placeholder="Location *" 
                          required
                          className="w-full px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-seppa-red transition backdrop-blur-sm" 
                        />
                      </div>
                    </div>
                    <div>
                      <textarea 
                        rows={5} 
                        required
                        placeholder="Write Message... *" 
                        className="w-full px-6 py-4 rounded-3xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-seppa-red transition resize-none backdrop-blur-sm"
                      ></textarea>
                    </div>
                    <button 
                      type="submit" 
                      className="bg-seppa-red text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-seppa-red transition duration-300 w-full md:w-auto shadow-lg"
                    >
                      Submit Message
                    </button>
                  </form>
                </div>
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* Global Offices Grid & Dynamic Map Section */}
      <section className="py-20 lg:py-28 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h3 className="text-seppa-red font-medium uppercase tracking-wider mb-2">Our Network</h3>
            <h2 className="text-4xl font-heading font-bold text-[#101934]">Global Branch Offices</h2>
            <p className="mt-4 text-gray-600">Select any office below to view its location on the map.</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Scrollable Offices List */}
            <div className="w-full lg:w-1/3 space-y-4">
              {offices.map((office, idx) => (
                <div 
                  key={idx}
                  onClick={() => setActiveOffice(office)}
                  className={`border p-6 rounded-2xl cursor-pointer transition-all duration-300 group ${
                    activeOffice.city === office.city 
                      ? 'bg-seppa-red/5 border-seppa-red shadow-md' 
                      : 'bg-gray-50 border-gray-100 hover:border-seppa-red/50 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                      activeOffice.city === office.city ? 'bg-seppa-red text-white' : 'bg-seppa-red/10 text-seppa-red group-hover:bg-seppa-red group-hover:text-white'
                    }`}>
                      <FiGlobe size={14} />
                    </div>
                    <h4 className={`text-lg font-bold font-heading transition-colors ${
                      activeOffice.city === office.city ? 'text-seppa-red' : 'text-[#101934] group-hover:text-seppa-red'
                    }`}>{office.city}</h4>
                  </div>
                  
                  <div className="space-y-3 text-sm text-gray-600">
                    <div className="flex items-start gap-3">
                      <FiMapPin className="text-seppa-red mt-1 shrink-0" />
                      <p className="leading-relaxed">{office.address}</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <FiPhoneCall className="text-seppa-red mt-1 shrink-0" />
                      <div>
                        {office.phone.map((ph, i) => (
                          <p key={i}>{ph}</p>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <FiMail className="text-seppa-red mt-1 shrink-0" />
                      <p className="truncate">{office.email}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Dynamic Map Display */}
            <div className="w-full lg:w-2/3 lg:sticky lg:top-28">
              <motion.div 
                key={activeOffice.city}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full h-[600px] rounded-3xl overflow-hidden shadow-2xl border-8 border-gray-50 relative"
              >
                <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm border border-gray-100 font-bold text-[#101934] flex items-center gap-2">
                  <FiMapPin className="text-seppa-red" />
                  Showing: {activeOffice.city}
                </div>
                <iframe 
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(activeOffice.mapQuery || activeOffice.address)}&t=&z=${activeOffice.mapZoom || 14}&ie=UTF8&iwloc=&output=embed`}
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Map showing ${activeOffice.city}`}
                ></iframe>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
