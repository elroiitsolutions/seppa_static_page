"use client";

import React, { useState } from 'react';
import { MessageCircle, X, Send, Bot, Construction } from 'lucide-react';
import { FaWhatsapp, FaPhone } from 'react-icons/fa';
import { LuMessageSquareText } from 'react-icons/lu';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const openEnquiryModal = () => {
    setIsOpen(false);
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('open-enquiry-modal'));
    }
  };

  return (
    <div className="relative">
      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-[110%] right-0 mb-2 w-[350px] sm:w-[400px] h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-100 animate-in slide-in-from-bottom-5 z-[60]">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#20B2AA] to-[#0f8c85] p-4 text-white flex justify-between items-center shadow-md">
            <div>
              <h3 className="font-bold text-lg leading-tight">Seppa Support</h3>
              <p className="text-xs opacity-90 flex items-center gap-1.5 mt-0.5">
                <span className="w-2 h-2 rounded-full bg-amber-300 animate-pulse inline-block" />
                <span>Under Construction</span>
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/20 rounded-full transition-colors"
                aria-label="Close chat"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50 flex flex-col gap-3">
            {/* System Banner */}
            <div className="flex justify-center my-1">
              <span className="bg-amber-100 text-amber-800 text-[11px] font-medium px-3 py-1 rounded-full flex items-center gap-1 border border-amber-200">
                <Construction size={13} className="text-amber-600" />
                Live AI Assistant Upgrade in Progress
              </span>
            </div>

            {/* AI Assistant Message Bubble */}
            <div className="flex justify-start">
              <div className="flex gap-2 max-w-[88%] flex-row">
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-[#20B2AA] text-white shadow-sm">
                  <Bot size={18} />
                </div>
                <div className="p-3.5 rounded-2xl text-sm bg-white text-gray-800 shadow-sm border border-gray-100 rounded-tl-sm space-y-2.5">
                  <p className="leading-relaxed">
                    Hello! 👋 Our automated <strong>24/7 AI Support Chat</strong> is currently <strong>under construction</strong> and will be launching soon.
                  </p>
                  <p className="text-xs text-gray-600">
                    In the meantime, our sales and engineering team is available through the following channels:
                  </p>

                  {/* Action Contact Cards */}
                  <div className="pt-1 flex flex-col gap-2">
                    <a
                      href="https://wa.me/+919841002334?text=Hi%2C%20I%20need%20more%20details%20about%20Seppa%20machinery..."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 rounded-xl bg-green-50 hover:bg-green-100 text-green-800 text-xs font-semibold transition-colors border border-green-200/60"
                    >
                      <FaWhatsapp className="text-green-600 text-base" />
                      <span>Chat on WhatsApp</span>
                    </a>

                    <a
                      href="tel:9841002334"
                      className="flex items-center gap-2 px-3 py-2 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-800 text-xs font-semibold transition-colors border border-blue-200/60"
                    >
                      <FaPhone className="text-blue-600 text-xs -scale-x-100" />
                      <span>Call Us: +91 98410 02334</span>
                    </a>

                    <button
                      onClick={openEnquiryModal}
                      className="flex items-center gap-2 px-3 py-2 rounded-xl bg-red-50 hover:bg-red-100 text-seppa-red text-xs font-semibold transition-colors border border-red-200/60 text-left w-full"
                    >
                      <LuMessageSquareText className="text-seppa-red text-sm" />
                      <span>Request a Quote / Enquiry</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Input Area */}
          <div className="p-3 bg-white border-t border-gray-100 flex gap-2 items-center">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Chat currently under construction..."
              disabled={true}
              className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm focus:outline-none transition-all disabled:opacity-60 text-gray-500 cursor-not-allowed"
            />
            <button 
              type="button"
              disabled={true}
              className="p-2 bg-[#20B2AA] text-white rounded-full transition-colors disabled:opacity-50 flex-shrink-0 cursor-not-allowed"
            >
              <Send size={18} className="ml-0.5" />
            </button>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        suppressHydrationWarning={true}
        className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-[#20B2AA] to-[#0f8c85] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-2xl transition-all duration-300 relative z-50 group"
        aria-label="Open Chat Support"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        <span className="absolute right-full mr-3 px-3 py-1 bg-dark text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Seppa Support
        </span>
      </button>
    </div>
  );
}


