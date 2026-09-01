"use client";
import React, { useEffect, useState, useRef } from 'react';
import { motion, useSpring } from 'framer-motion';

const MagicCursor: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const isVisibleRef = useRef(false);
  const isHoveringRef = useRef(false);

  // Smooth springs for the dot delay
  const springX = useSpring(0, { stiffness: 300, damping: 30 });
  const springY = useSpring(0, { stiffness: 300, damping: 30 });

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const handleMouseMove = (e: MouseEvent) => {
      springX.set(e.clientX - 4); // Center the 8px dot
      springY.set(e.clientY - 4);
      if (!isVisibleRef.current) {
        isVisibleRef.current = true;
        setIsVisible(true);
      }

      const target = e.target as HTMLElement | null;
      const hovering = !!(target && target.closest && target.closest('a, button, input, select, textarea, [role="button"]'));
      if (isHoveringRef.current !== hovering) {
        isHoveringRef.current = hovering;
        setIsHovering(hovering);
      }
    };

    const handleMouseLeave = () => {
      if (isVisibleRef.current) {
        isVisibleRef.current = false;
        setIsVisible(false);
      }
    };

    const handleMouseEnter = () => {
      if (!isVisibleRef.current) {
        isVisibleRef.current = true;
        setIsVisible(true);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.body.addEventListener('mouseleave', handleMouseLeave);
    document.body.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isMounted, springX, springY]);

  // Don't render on server, or during hydration
  if (!isMounted) return null;

  // Don't render on touch devices (basic check)
  if (typeof window !== 'undefined' && window.matchMedia('(hover: none) and (pointer: coarse)').matches) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]" style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.3s' }}>
      {/* Inner delayed dot — no mix-blend-mode for cross-browser consistency */}
      <motion.div 
        className="fixed top-0 left-0 w-2 h-2 bg-seppa-red rounded-full pointer-events-none"
        style={{
          x: springX,
          y: springY,
          scale: isHovering ? 0 : 1,
        }}
        transition={{ scale: { duration: 0.2 } }}
      />
    </div>
  );
};

export default MagicCursor;
