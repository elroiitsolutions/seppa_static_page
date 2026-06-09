import React from 'react';
import { motion , Variants } from 'framer-motion';
import AnimatedHeading from '../ui/AnimatedHeading';

const fadeInUp:Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const ContactMap = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* Header Section */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
            <span className="text-sm font-medium text-dark uppercase tracking-wider">Contact Us</span>
          </motion.div>
          
          <AnimatedHeading 
            text="Reach us for professional textile support" 
            elementType="h2" 
            className="text-4xl md:text-5xl lg:text-[52px] font-heading font-bold text-dark leading-tight" 
          />
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Left Card */}
          <motion.div 
            className="w-full lg:w-1/3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
          >
            <div className="bg-white rounded-[2rem] p-10 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold font-heading text-dark mb-4">We're Here To Help You</h3>
              <p className="text-gray-500 mb-8 leading-relaxed">
                We're here to help you every step of and make your experience smooth.
              </p>
              
              <div className="rounded-2xl overflow-hidden mb-8 shadow-sm">
                <img 
                  src="https://demo.awaikenthemes.com/yarnex/wp-content/uploads/2026/02/contact-help-img.jpg" 
                  alt="Customer Support" 
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="flex items-center gap-6">
                <span className="text-5xl font-bold font-heading text-dark">24/7</span>
                <p className="text-gray-500 font-medium leading-snug">
                  Expert support ready to troubleshoot.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Map */}
          <motion.div 
            className="w-full lg:w-2/3 relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
          >
            {/* Using an SVG or image for the map background */}
            <div className="relative w-full opacity-60">
              <img 
                src="https://demo.awaikenthemes.com/yarnex/wp-content/uploads/2026/02/map-bg.png" 
                alt="World Map" 
                className="w-full h-auto"
                onError={(e) => {
                  // Fallback if image doesn't load
                  (e.target as HTMLImageElement).src = "https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg";
                  (e.target as HTMLImageElement).style.opacity = "0.2";
                }}
              />
            </div>

            {/* Map Pins */}
            {/* Note: Coordinates are approximate based on the screenshot */}
            <div className="absolute top-[35%] left-[25%] group cursor-pointer">
              <div className="relative">
                <div className="w-12 h-12 rounded-full border-[3px] border-white shadow-xl overflow-hidden group-hover:scale-110 transition-transform duration-300">
                  <img src="https://demo.awaikenthemes.com/yarnex/wp-content/uploads/2026/02/author-1.jpg" alt="Location" className="w-full h-full object-cover" />
                </div>
                {/* Ping animation */}
                <div className="absolute inset-0 rounded-full border-2 border-gold animate-ping opacity-70"></div>
              </div>
            </div>

            <div className="absolute top-[55%] left-[45%] group cursor-pointer">
              <div className="relative">
                <div className="w-12 h-12 rounded-full border-[3px] border-white shadow-xl overflow-hidden group-hover:scale-110 transition-transform duration-300">
                  <img src="https://demo.awaikenthemes.com/yarnex/wp-content/uploads/2026/02/author-2.jpg" alt="Location" className="w-full h-full object-cover" />
                </div>
                <div className="absolute inset-0 rounded-full border-2 border-gold animate-ping opacity-70"></div>
              </div>
            </div>

            <div className="absolute top-[40%] left-[65%] group cursor-pointer z-10">
              <div className="relative">
                <div className="w-14 h-14 rounded-full border-[4px] border-white shadow-xl overflow-hidden scale-110">
                  <img src="https://demo.awaikenthemes.com/yarnex/wp-content/uploads/2026/02/author-3.jpg" alt="Location" className="w-full h-full object-cover" />
                </div>
                
                {/* Tooltip visible by default or on hover */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 bg-white px-5 py-3 rounded-xl shadow-xl w-max opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none before:content-[''] before:absolute before:-top-2 before:left-1/2 before:-translate-x-1/2 before:border-8 before:border-transparent before:border-b-white">
                  <h4 className="text-dark font-bold text-sm mb-1">New York, USA</h4>
                  <p className="text-gray-500 text-xs">Major hub for<br/>North American</p>
                </div>
              </div>
            </div>

            <div className="absolute top-[65%] left-[80%] group cursor-pointer">
              <div className="relative">
                <div className="w-12 h-12 rounded-full border-[3px] border-white shadow-xl overflow-hidden group-hover:scale-110 transition-transform duration-300">
                  <img src="https://demo.awaikenthemes.com/yarnex/wp-content/uploads/2026/02/author-1.jpg" alt="Location" className="w-full h-full object-cover" />
                </div>
                <div className="absolute inset-0 rounded-full border-2 border-gold animate-ping opacity-70"></div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactMap;
