"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';

export interface AccordionItemProps {
  question: string;
  answer: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItemProps[];
  defaultOpenIndex?: number | null;
}

const Accordion: React.FC<AccordionProps> = ({ items, defaultOpenIndex = 0 }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full flex flex-col gap-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div 
            key={index} 
            className={`border rounded-xl transition-colors duration-300 overflow-hidden ${
              isOpen ? 'border-gold bg-white shadow-sm' : 'border-gray-200 bg-white hover:border-gray-300'
            }`}
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
              aria-expanded={isOpen}
            >
              <span className={`font-heading font-bold text-lg transition-colors ${isOpen ? 'text-gold' : 'text-dark'}`}>
                {item.question}
              </span>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className={`flex-shrink-0 text-xl transition-colors ${isOpen ? 'text-gold' : 'text-gray-400'}`}
              >
                <FiChevronDown />
              </motion.div>
            </button>
            
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4 mt-2">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
