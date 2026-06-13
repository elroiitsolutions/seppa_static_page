"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi';

const ScrollEnquiryModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);

  useEffect(() => {
    // Check if the user has already seen the modal in this session
    const sessionKey = 'seppa_enquiry_modal_seen';
    if (sessionStorage.getItem(sessionKey)) {
      setHasOpened(true);
      return;
    }

    const handleScroll = () => {
      if (hasOpened) return;

      const scrollY = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      
      const scrollPercentage = (scrollY / (documentHeight - windowHeight)) * 100;

      if (scrollPercentage > 45) {
        setIsOpen(true);
        setHasOpened(true);
        sessionStorage.setItem(sessionKey, 'true');
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Check immediately in case page is loaded already scrolled
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasOpened]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-lg bg-[#101934] rounded-3xl shadow-2xl overflow-hidden"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-seppa-red rounded-full mix-blend-multiply filter blur-3xl opacity-30 transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#cda262] rounded-full mix-blend-multiply filter blur-3xl opacity-20 transform -translate-x-1/2 translate-y-1/2"></div>

          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/10 hover:bg-seppa-red hover:text-white text-gray-300 rounded-full flex items-center justify-center transition-colors duration-300"
            aria-label="Close modal"
          >
            <FiX className="w-5 h-5" />
          </button>

          {/* Form */}
          <div className="relative z-10 p-8 sm:p-10">
            <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white mb-2">Request a Quote</h3>
            <p className="text-gray-300 text-sm mb-6">Let us know what you need, and our experts will get back to you.</p>
            
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setIsOpen(false); }}>
              <div className="relative">
                <input 
                  type="text" 
                  required 
                  placeholder="Your Full Name" 
                  className="w-full px-5 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-seppa-red focus:border-transparent transition"
                />
                <span className="absolute top-3 right-3 text-white">*</span>
              </div>
              <div className="flex gap-4 relative">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full px-5 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-seppa-red focus:border-transparent transition"
                />
                <input 
                  type="tel" 
                  required 
                  placeholder="Phone Number" 
                  className="w-full px-5 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-seppa-red focus:border-transparent transition"
                />
                <span className="absolute top-3 right-3 text-white">*</span>
                
              </div>
              <div>
                <textarea 
                  required 
                  placeholder="Your Message" 
                  rows={3}
                  className="w-full px-5 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-seppa-red focus:border-transparent transition resize-none"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full py-4 bg-seppa-red hover:bg-white hover:text-seppa-red text-white font-bold rounded-xl transition duration-300 mt-2"
              >
                Send Enquiry
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ScrollEnquiryModal;
