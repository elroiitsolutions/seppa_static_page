import React, { useState, useRef, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import AnimatedHeading from '../ui/AnimatedHeading';
import aquafina from '@/assets/logo/aquafina-logo-vector.png';
import atlas from '@/assets/logo/atlas.jpg';
import bis from '@/assets/logo/bis.jpg';
import direct from '@/assets/logo/direct.jpg';
import foster from '@/assets/logo/foster.jpg';
import haywards from '@/assets/logo/haywards.jpg';
import hello from '@/assets/logo/hello.jpg';
import kingfish from '@/assets/logo/kingfish.jpg';
import mcdo from '@/assets/logo/mcdo.jpg';
import perno from '@/assets/logo/perno.jpg';
import sabol from '@/assets/logo/sabol.jpg';
import seagrams from '@/assets/logo/seagrams.jpg';
import sip from '@/assets/logo/sip.jpg';
import playboy from '@/assets/logo/playboy.png';
import royalchallenge from '@/assets/logo/royalchallenge.png';

import { useTranslations, useLocale } from 'next-intl';
import enHome from '@/messages/en/home.json';
import { usePathname } from 'next/navigation';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const clients = [
  { id: 1, name: 'Aquafina', image: aquafina },
  { id: 2, name: 'Atlas Copco', image: atlas },
  { id: 3, name: 'Bisleri', image: bis },
  { id: 4, name: 'Direct', image: direct },
  { id: 5, name: "Foster's", image: foster },
  { id: 6, name: 'Haywards 5000', image: haywards },
  { id: 7, name: 'Hello', image: hello },
  { id: 8, name: 'Kingfisher', image: kingfish },
  { id: 9, name: "McDowell's No. 1", image: mcdo },
  { id: 10, name: 'Pernod Ricard', image: perno },
  { id: 11, name: 'Sabol', image: sabol },
  { id: 12, name: "Seagram's", image: seagrams },
  { id: 13, name: 'Sip', image: sip },
  { id: 14, name: 'Playboy Beer', image: playboy },
  { id: 15, name: 'Royal Challenge', image: royalchallenge }
];

const ClientsContent = ({ getT }: { getT: (key: string) => string }) => {
  const [activeClientId, setActiveClientId] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleClientClick = (clientId: number) => {
    setActiveClientId(clientId);
    setIsPaused(true);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setActiveClientId(null);
      setIsPaused(false);
    }, 3000);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <section className="py-12 lg:py-24 bg-white overflow-hidden">
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
            <span className="text-sm font-medium text-dark uppercase tracking-wider">
              {getT('tag')}
            </span>
          </motion.div>
          
          <div className='w-full max-w-[1000px] mx-auto flex justify-center text-center'>
            <AnimatedHeading 
              text={getT('heading')} 
              elementType="h2" 
              className="text-4xl md:text-5xl lg:text-[52px] font-heading font-bold text-dark leading-tight [&>span]:justify-center" 
            />
          </div>
        </motion.div>

        {/* Marquee Slider */}
        <motion.div
          dir="ltr"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInUp}
          className={`relative w-full overflow-hidden py-8 marquee-container ${isPaused ? 'is-paused' : ''}`}
        >
          {/* CSS Marquee Implementation with GPU acceleration */}
          <div className="flex w-max animate-marquee will-change-transform">
            
            {/* First set of logos */}
            <div className="flex shrink-0 items-center">
              {clients.map((client) => (
                <div 
                  key={`first-${client.id}`} 
                  onClick={() => handleClientClick(client.id)}
                  className={`client-logo-interactive w-[140px] md:w-[180px] lg:w-[220px] mx-6 md:mx-10 flex-shrink-0 transition-all duration-300 cursor-pointer flex justify-center ${activeClientId === client.id ? 'grayscale-0 opacity-100' : 'grayscale opacity-60'}`}
                >
                  <Image 
                    src={client.image} 
                    alt={`${client.name} Client Logo - Seppa Solutions`} 
                    width={180}
                    height={80}
                    sizes="(max-width: 768px) 140px, (max-width: 1024px) 180px, 220px"
                    loading="lazy"
                    style={{ width: 'auto', height: 'auto' }}
                    className="max-h-20 object-contain drop-shadow-sm" 
                  />
                </div>
              ))}
            </div>

            {/* Second set of logos for seamless infinite loop */}
            <div className="flex shrink-0 items-center" aria-hidden="true">
              {clients.map((client) => (
                <div 
                  key={`second-${client.id}`} 
                  onClick={() => handleClientClick(client.id)}
                  className={`client-logo-interactive w-[140px] md:w-[180px] lg:w-[220px] mx-6 md:mx-10 flex-shrink-0 transition-all duration-300 cursor-pointer flex justify-center ${activeClientId === client.id ? 'grayscale-0 opacity-100' : 'grayscale opacity-60'}`}
                >
                  <Image 
                    src={client.image} 
                    alt="" 
                    width={180}
                    height={80}
                    sizes="(max-width: 768px) 140px, (max-width: 1024px) 180px, 220px"
                    loading="lazy"
                    style={{ width: 'auto', height: 'auto' }}
                    className="max-h-20 object-contain drop-shadow-sm" 
                  />
                </div>
              ))}
            </div>

          </div>
        </motion.div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translate3d(0%, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .is-paused .animate-marquee {
          animation-play-state: paused !important;
        }
        @media (hover: hover) {
          .marquee-container:hover .animate-marquee {
            animation-play-state: paused !important;
          }
          .client-logo-interactive:hover {
            filter: grayscale(0) !important;
            opacity: 1 !important;
            transform: scale(1.05);
          }
        }
      `}} />
    </section>
  );
};

const LocalizedClients = () => {
  const t = useTranslations('home');
  const getT = (key: string) => t(`Clients.${key}`);
  return <ClientsContent getT={getT} />;
};

const StaticClients = () => {
  const getT = (key: string) => ((enHome as any).Clients?.[key] || key);
  return <ClientsContent getT={getT} />;
};

const Clients = () => {
  const pathname = usePathname() || '';
  const isLocalized = pathname.startsWith('/ar') || pathname.startsWith('/en') || pathname.startsWith('/de');
  return isLocalized ? <LocalizedClients /> : <StaticClients />;
};

export default Clients;
