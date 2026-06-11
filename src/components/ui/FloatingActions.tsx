"use client";
import React from 'react';
import { FaWhatsapp, FaPhone } from 'react-icons/fa';

const FloatingActions = () => {
  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3 p-3">
      <a 
        href="https://wa.me/dummy" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 hover:bg-green-600 transition-all duration-300 group relative"
        aria-label="WhatsApp"
      >
        <FaWhatsapp className="text-2xl" />
        <span className="absolute left-full ml-3 px-3 py-1 bg-dark text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          WhatsApp Us
        </span>
      </a>
      
      <a 
        href="tel:+1234567890" 
        className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 hover:bg-blue-600 transition-all duration-300 group relative"
        aria-label="Call Us"
      >
        <FaPhone className="text-xl -scale-x-100" />
        <span className="absolute left-full ml-3 px-3 py-1 bg-dark text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Call Us
        </span>
      </a>
    </div>
  );
};

export default FloatingActions;
