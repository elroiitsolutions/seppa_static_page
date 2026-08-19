"use client";
import React, { useEffect, useState, useRef } from 'react';
import { motion, useSpring } from 'framer-motion';

const MagicCursor: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const isVisibleRef = useRef(false);

  // Smooth springs for the dot delay
  const springX = useSpring(0, { stiffness: 300, damping: 30 });
  const springY = useSpring(0, { stiffness: 300, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      springX.set(e.clientX - 4); // Center the 8px dot
      springY.set(e.clientY - 4);
      if (!isVisibleRef.current) {
        isVisibleRef.current = true;
        setIsVisible(true);
      }
    };

    const handleMouseLeave = () => {
      isVisibleRef.current = false;
      setIsVisible(false);
    };
    const handleMouseEnter = () => {
      isVisibleRef.current = true;
      setIsVisible(true);
    };

    const handleLinkHoverStart = () => setIsHovering(true);
    const handleLinkHoverEnd = () => setIsHovering(false);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.body.addEventListener('mouseleave', handleMouseLeave);
    document.body.addEventListener('mouseenter', handleMouseEnter);

    // Attach hover listeners to all clickable elements
    const interactiveElements = document.querySelectorAll('a, button, input, select, textarea, [role="button"]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleLinkHoverStart);
      el.addEventListener('mouseleave', handleLinkHoverEnd);
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
      
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleLinkHoverStart);
        el.removeEventListener('mouseleave', handleLinkHoverEnd);
      });
    };
  }, [springX, springY]);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

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
