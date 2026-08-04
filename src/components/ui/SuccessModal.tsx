"use client";
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCheck, FiX } from 'react-icons/fi';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
  buttonText?: string;
}

const SuccessModal: React.FC<SuccessModalProps> = ({
  isOpen,
  onClose,
  title = "Thank You for Your Enquiry!",
  message = "Your message has been submitted successfully. Our team will get back to you shortly.",
  buttonText = "Close"
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: -20 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="relative w-full max-w-md bg-[#101934] rounded-3xl p-8 shadow-2xl border border-white/20 z-10 text-center overflow-hidden"
          >
            {/* Decorative background blur circles */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-seppa-red rounded-full mix-blend-multiply filter blur-3xl opacity-30 pointer-events-none"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#cda262] rounded-full mix-blend-multiply filter blur-3xl opacity-20 pointer-events-none"></div>

            {/* Close Icon Button */}
            <button
              suppressHydrationWarning
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white bg-white/10 hover:bg-seppa-red p-2 rounded-full transition"
              aria-label="Close popup"
            >
              <FiX className="text-lg" />
            </button>

            {/* Success Icon */}
            <div className="w-20 h-20 bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 rounded-full flex items-center justify-center text-4xl mx-auto mb-5 shadow-lg">
              <FiCheck />
            </div>

            {/* Title & Message */}
            <h3 className="text-2xl font-bold font-heading text-white mb-3">
              {title}
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
              {message}
            </p>

            {/* Action Button */}
            <button
              suppressHydrationWarning
              onClick={onClose}
              className="w-full py-3.5 bg-seppa-red hover:bg-white hover:text-seppa-red text-white font-bold rounded-full transition duration-300 shadow-md text-base"
            >
              {buttonText}
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default SuccessModal;
