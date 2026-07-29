import React from 'react';
import { motion } from 'framer-motion';
import AnimatedHeading from '../ui/AnimatedHeading';
import canadian from '@/assets/logo/canadian.png';
import prodeb from '@/assets/logo/prodeb.png';
import american from '@/assets/logo/american.png';
import clear from '@/assets/logo/clear.png';
import { link } from 'fs';


// const fadeInUp: Variants = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
// };

// const staggerContainer = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
// };

const partners = [
  { id: 1, image: canadian.src, link:'https://www.canadiancrystalline.com/' },
  { id: 2, image: prodeb.src, link:'https://www.prodebbrewery.com/' },
  { id: 3, image: american.src, link:'https://www.americanbrewworks.com/' },
  { id: 4, image: clear.src, link:'https://www.canadianclear.com/' }
];

import { useTranslations, useLocale } from 'next-intl';
import enHome from '@/messages/en/home.json';
import { usePathname } from 'next/navigation';

const PartnersContent = ({ getT }: { getT: (key: string) => string }) => {
  return (
    <section>
      <div className="container mx-auto px-4">
        
        {/* Header Section */}
        <motion.div 
          className="text-center max-w-[1200px] mx-auto mb-16"
        >
          <motion.div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white mb-6">
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

        {/* Partners Grid */}
        <motion.div
          // initial="hidden"
          // whileInView="visible"
          // viewport={{ once: true, amount: 0.1 }}
          // variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[1200px] mx-auto"
        >
          {partners.map((partner) => (
            <motion.div 
              key={partner.id} 
              // variants={fadeInUp}
              className="bg-white rounded-3xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 overflow-hidden p-8 flex flex-col items-center justify-center group cursor-pointer"
            >
              <a href={partner.link}>
              <div className="h-24 w-full flex items-center justify-center mb-6">
                <img 
                  src={partner.image} 
                  className="max-h-full max-w-full hover:scale-110 transition-transform duration-300"
                />
              </div>
              </a>
              {/* <h3 className="text-lg md:text-xl font-bold font-heading text-dark group-hover:text-seppa-red transition-colors duration-300 text-center">
                {partner.name}
              </h3> */}
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

const LocalizedPartners = () => {
  const t = useTranslations('home');
  const locale = useLocale();
  const getT = (key: string) => t(`Partners.${key}`);
  return <PartnersContent getT={getT} />;
};

const StaticPartners = () => {
  const getT = (key: string) => ((enHome as any).Partners?.[key] || key);
  return <PartnersContent getT={getT} />;
};

const Partners = () => {
  const pathname = usePathname() || '';
  const isLocalized = pathname.startsWith('/ar') || pathname.startsWith('/en') || pathname.startsWith('/de');
  return isLocalized ? <LocalizedPartners /> : <StaticPartners />;
};

export default Partners;
