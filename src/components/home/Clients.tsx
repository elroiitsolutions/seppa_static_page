import React from 'react';
import { motion, Variants } from 'framer-motion';
import AnimatedHeading from '../ui/AnimatedHeading';
import logoImg from '@/assets/logo/logo.png';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const clients = [
  { id: 1, name: 'Client 1', image: logoImg.src },
  { id: 2, name: 'Client 2', image: logoImg.src },
  { id: 3, name: 'Client 3', image: logoImg.src },
  { id: 4, name: 'Client 4', image: logoImg.src },
  { id: 5, name: 'Client 5', image: logoImg.src },
  { id: 6, name: 'Client 6', image: logoImg.src },
  { id: 7, name: 'Client 7', image: logoImg.src },
  { id: 8, name: 'Client 8', image: logoImg.src },
  { id: 9, name: 'Client 9', image: logoImg.src },
  { id: 10, name: 'Client 10', image: logoImg.src },
  { id: 11, name: 'Client 11', image: logoImg.src },
  { id: 12, name: 'Client 12', image: logoImg.src },
  { id: 13, name: 'Client 13', image: logoImg.src },
  { id: 14, name: 'Client 14', image: logoImg.src },
  { id: 15, name: 'Client 15', image: logoImg.src },
  { id: 16, name: 'Client 16', image: logoImg.src }
];

const Clients = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* Header Section */}
        <motion.div 
          className="text-center max-w-[1200px] mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-seppa-red"></span>
            <span className="text-sm font-medium text-dark uppercase tracking-wider">Our Trusted Clients</span>
          </motion.div>
          
          <div className='w-full max-w-[1000px] mx-auto flex justify-center text-center'>
            <AnimatedHeading 
              text="Empowering Industry Leaders Worldwide" 
              elementType="h2" 
              className="text-4xl md:text-5xl lg:text-[52px] font-heading font-bold text-dark leading-tight [&>span]:justify-center" 
            />
          </div>
        </motion.div>

        {/* Marquee Slider */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInUp}
          className="relative w-full overflow-hidden py-8 marquee-container"
        >
          {/* CSS Marquee Implementation */}
          <div className="flex w-max animate-marquee">
            
            {/* First set of logos */}
            <div className="flex shrink-0 items-center">
              {clients.map((client) => (
                <div key={`first-${client.id}`} className="w-[140px] md:w-[180px] lg:w-[220px] mx-6 md:mx-10 flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100 cursor-pointer flex justify-center">
                  <img 
                    src={client.image} 
                    alt={client.name} 
                    className="max-h-20 w-auto object-contain drop-shadow-sm" 
                  />
                </div>
              ))}
            </div>

            {/* Second set of logos (duplicate for seamless infinite loop) */}
            <div className="flex shrink-0 items-center">
              {clients.map((client) => (
                <div key={`second-${client.id}`} className="w-[140px] md:w-[180px] lg:w-[220px] mx-6 md:mx-10 flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100 cursor-pointer flex justify-center">
                  <img 
                    src={client.image} 
                    alt={client.name} 
                    className="max-h-20 w-auto object-contain drop-shadow-sm" 
                  />
                </div>
              ))}
            </div>

          </div>
        </motion.div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .marquee-container:hover .animate-marquee {
          animation-play-state: paused !important;
        }
      `}} />
    </section>
  );
};

export default Clients;
