"use client";
import React, { useState, useEffect } from 'react';
import { FaWhatsapp, FaPhone } from 'react-icons/fa';
import { FiArrowUp } from 'react-icons/fi';
import { LuMessageSquareText } from "react-icons/lu";

const FloatingActions = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const openEnquiryModal = () => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('open-enquiry-modal'));
    }
  };

  return (
    <div className="fixed right-3 sm:right-6 bottom-4 sm:bottom-6 z-50 flex flex-col gap-2.5 sm:gap-3 p-1 sm:p-2 pointer-events-auto">
      <a
        href="https://wa.me/+919841002334?text=Hi%2C%20I%20need%20more%20details%20about%20Seppasolutions..."
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 md:w-12 md:h-12 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 hover:bg-green-600 transition-all duration-300 group relative"
        aria-label="WhatsApp"
      >
        <FaWhatsapp className="text-xl md:text-2xl" />
        <span className="absolute right-full mr-3 px-3 py-1 bg-dark text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          WhatsApp Us
        </span>
      </a>

      <a
        href="tel:9841002334"
        className="w-10 h-10 md:w-12 md:h-12 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 hover:bg-blue-600 transition-all duration-300 group relative"
        aria-label="Call Us"
      >
        <FaPhone className="text-lg md:text-xl -scale-x-100" />
        <span className="absolute right-full mr-3 px-3 py-1 bg-dark text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Call Us
        </span>
      </a>

      {/* Quick Enquiry / Quote Form Button */}
      <button
        suppressHydrationWarning
        onClick={openEnquiryModal}
        className="w-10 h-10 md:w-12 md:h-12 bg-[#101934] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:bg-seppa-red transition-all duration-300 group relative border border-white/20"
        aria-label="Request Quote"
      >
        <LuMessageSquareText className="text-xl md:text-2xl" />
        <span className="absolute right-full mr-3 px-3 py-1 bg-dark text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Enquiry Form
        </span>
      </button>

      {/* Scroll to Top Button */}
      <button
        suppressHydrationWarning
        onClick={scrollToTop}
        className={`w-10 h-10 md:w-12 md:h-12 bg-seppa-red rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 hover:bg-[#101934] transition-all duration-300 group relative ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
          }`}
        aria-label="Scroll to top"
      >
        <FiArrowUp className="text-xl md:text-2xl" />
        <span className="absolute right-full mr-3 px-3 py-1 bg-dark text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Go to top
        </span>
      </button>
    </div>
  );
};

export default FloatingActions;
