"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';

interface AnimatedHeadingProps {
  text: string;
  className?: string;
  elementType?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  delay?: number;
}

const headingVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: (customDelay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      delay: customDelay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const AnimatedHeading: React.FC<AnimatedHeadingProps> = ({ 
  text, 
  className = "", 
  elementType: Element = 'h2',
  delay = 0
}) => {
  const isArabicText = /[\u0600-\u06FF]/.test(text);

  if (isArabicText) {
    return (
      <Element className={className}>
        {text}
      </Element>
    );
  }

  return (
    <Element className={className}>
      <motion.span
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={headingVariants}
        custom={delay}
        className="block"
        style={{ textAlign: 'inherit' }}
      >
        {text}
      </motion.span>
    </Element>
  );
};

export default AnimatedHeading;
