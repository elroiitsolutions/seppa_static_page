import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import AnimatedHeading from '../ui/AnimatedHeading';
import { FiPhoneCall, FiMail } from 'react-icons/fi';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const locations = [
  { id: 'usa', name: 'USA', desc: 'Irving, Texas', top: '35%', left: '22%', flag: 'https://flagcdn.com/w80/us.png' },
  { id: 'canada', name: 'Canada', desc: 'Edmonton, Alberta', top: '22%', left: '18%', flag: 'https://flagcdn.com/w80/ca.png' },
  { id: 'uk', name: 'UK', desc: 'United Kingdom', top: '25%', left: '46%', flag: 'https://flagcdn.com/w80/gb.png' },
  { id: 'belgium', name: 'Brussels', desc: 'Belgium', top: '27%', left: '48%', flag: 'https://flagcdn.com/w80/be.png' },
  { id: 'germany', name: 'Germany', desc: 'Europe', top: '25%', left: '51%', flag: 'https://flagcdn.com/w80/de.png' },
  { id: 'armenia', name: 'Armenia', desc: 'Eurasia', top: '30%', left: '59%', flag: 'https://flagcdn.com/w80/am.png' },
  { id: 'uae', name: 'UAE', desc: 'Ajman Free Zone', top: '42%', left: '61%', flag: 'https://flagcdn.com/w80/ae.png' },
  { id: 'australia', name: 'Australia', desc: 'Oceania', top: '75%', left: '85%', flag: 'https://flagcdn.com/w80/au.png' },
];

const indiaLocation = { id: 'india', name: 'India', desc: 'Click to view cities', top: '45%', left: '68%', flag: 'https://flagcdn.com/w80/in.png' };
const indiaCities = ['Mumbai (Corporate Office)', 'Bengaluru', 'New Delhi', 'Hyderabad', 'Chennai'];

const ContactMap = () => {
  const [showIndiaList, setShowIndiaList] = useState(false);

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
            <span className="w-1.5 h-1.5 rounded-full bg-seppa-red"></span>
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

              <div className="flex flex-col gap-6">
                <a href="tel:+1234567890" className="flex items-center gap-5 group">
                  <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center text-seppa-red group-hover:bg-seppa-red group-hover:text-white transition-colors duration-300 shadow-sm">
                    <FiPhoneCall className="text-2xl" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium mb-1">Call Us Anytime</p>
                    <h4 className="text-xl font-bold font-heading text-dark group-hover:text-seppa-red transition-colors duration-300">
                      +1 (234) 567-890
                    </h4>
                  </div>
                </a>
                
                <a href="mailto:info@seppasolutions.com" className="flex items-center gap-5 group">
                  <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center text-seppa-red group-hover:bg-seppa-red group-hover:text-white transition-colors duration-300 shadow-sm">
                    <FiMail className="text-2xl" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium mb-1">Send an Email</p>
                    <h4 className="text-xl font-bold font-heading text-dark group-hover:text-seppa-red transition-colors duration-300">
                      info@seppasolutions.com
                    </h4>
                  </div>
                </a>
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
                  (e.target as HTMLImageElement).src = "https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg";
                  (e.target as HTMLImageElement).style.opacity = "0.2";
                }}
              />
            </div>

            {/* Render 8 International Pins */}
            {locations.map((loc) => (
              <div 
                key={loc.id} 
                className="absolute group cursor-pointer z-10 hover:z-30" 
                style={{ top: loc.top, left: loc.left }}
              >
                <div className="relative transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-[3px] border-white shadow-xl overflow-hidden group-hover:scale-110 transition-transform duration-300 relative">
                    <img src={loc.flag} alt={loc.name} className="w-full h-full object-cover" />
                  </div>
                  {/* Red dot status indicator */}
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-seppa-red rounded-full border-2 border-white group-hover:scale-110 transition-transform duration-300"></div>
                  
                  {/* Tooltip on Hover */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 bg-white px-5 py-3 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] w-max opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pointer-events-none before:content-[''] before:absolute before:-top-2 before:left-1/2 before:-translate-x-1/2 before:border-8 before:border-transparent before:border-b-white z-40">
                    <h4 className="text-dark font-bold text-sm mb-1">{loc.name}</h4>
                    <p className="text-gray-500 text-xs">{loc.desc}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Render India Pin */}
            <div 
              className="absolute z-20 hover:z-40 group" 
              style={{ top: indiaLocation.top, left: indiaLocation.left }}
            >
              <div className="relative transform -translate-x-1/2 -translate-y-1/2">
                <div 
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full border-[4px] border-white shadow-xl overflow-hidden hover:scale-110 transition-transform duration-300 cursor-pointer relative"
                  onClick={() => setShowIndiaList(!showIndiaList)}
                >
                  <img src={indiaLocation.flag} alt={indiaLocation.name} className="w-full h-full object-cover" />
                </div>
                {/* Red dot status indicator */}
                <div className="absolute bottom-1 right-0 w-3.5 h-3.5 bg-seppa-red rounded-full border-2 border-white pointer-events-none"></div>

                {/* India Ping Animation */}
                <div className="absolute inset-0 rounded-full border-2 border-seppa-red animate-ping opacity-70 pointer-events-none"></div>
                
                {/* Clickable India Tooltip / Dropdown */}
                <div className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-3 bg-white rounded-xl shadow-[0_15px_40px_rgba(0,0,0,0.15)] w-56 transition-all duration-300 origin-top before:content-[''] before:absolute before:-top-2 before:left-1/2 before:-translate-x-1/2 before:border-8 before:border-transparent before:border-b-white z-50 ${showIndiaList ? 'opacity-100 visible scale-100' : 'opacity-0 invisible scale-95'}`}>
                  <div className="p-4 border-b border-gray-100">
                    <h4 className="text-dark font-bold text-base">India Locations</h4>
                    <p className="text-gray-500 text-xs mt-1">Our offices across the country</p>
                  </div>
                  <ul className="p-2">
                    {indiaCities.map((city, idx) => (
                      <li key={idx} className="px-3 py-2 text-sm text-gray-600 hover:bg-[#f8f6f0] hover:text-seppa-red rounded-lg transition-colors cursor-pointer flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-seppa-red opacity-50"></span>
                        {city}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Normal Hover Tooltip (hides when clicked) */}
                <div className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-3 bg-white px-5 py-3 rounded-xl shadow-xl w-max transition-opacity duration-300 pointer-events-none before:content-[''] before:absolute before:-top-2 before:left-1/2 before:-translate-x-1/2 before:border-8 before:border-transparent before:border-b-white ${showIndiaList ? 'opacity-0 invisible' : 'opacity-0 invisible group-hover:opacity-100 group-hover:visible'}`}>
                  <h4 className="text-dark font-bold text-sm mb-1">{indiaLocation.name}</h4>
                  <p className="text-gray-500 text-xs">{indiaLocation.desc}</p>
                </div>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactMap;
