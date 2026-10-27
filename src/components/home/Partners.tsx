import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AnimatedHeading from '../ui/AnimatedHeading';
import canadian from '@/assets/logo/canadian.png';
import prodeb from '@/assets/logo/prodeb.png';
import american from '@/assets/logo/american.png';
import clear from '@/assets/logo/clear.png';

const partners = [
  { id: 1, name: 'Canadian Crystalline', image: canadian, link: 'https://www.canadiancrystalline.com/' },
  { id: 2, name: 'Prodeb Brewery', image: prodeb, link: 'https://www.prodebbrewery.com/' },
  { id: 3, name: 'American Brewworks', image: american, link: 'https://www.americanbrewworks.com/' },
  { id: 4, name: 'Canadian Clear', image: clear, link: 'https://www.canadianclear.com/' }
];

import { useTranslations, useLocale } from 'next-intl';
import enHome from '@/messages/en/home.json';
import { usePathname } from 'next/navigation';

const PartnersContent = ({ getT }: { getT: (key: string) => string }) => {
  return (
    <section className="py-12 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        
        {/* Header Section */}
        <motion.div 
          className="text-center max-w-[1200px] mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-seppa-red"></span>
            <span className="text-sm font-medium text-dark uppercase tracking-wider">
              {getT('tag')}
            </span>
          </div>
          
          <div className='w-full max-w-[1000px] mx-auto flex justify-center text-center'>
            <AnimatedHeading 
              text={getT('heading')} 
              elementType="h2" 
              className="text-4xl md:text-5xl lg:text-[52px] font-heading font-bold text-dark leading-tight [&>span]:justify-center" 
            />
          </div>
        </motion.div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[1200px] mx-auto">
          {partners.map((partner) => (
            <div 
              key={partner.id} 
              className="bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden p-8 flex flex-col items-center justify-center group cursor-pointer"
            >
              <a href={partner.link} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center" aria-label={`Visit ${partner.name}`}>
                <div className="h-24 w-full flex items-center justify-center">
                  <Image 
                    src={partner.image} 
                    alt={`${partner.name} Partner Logo`}
                    width={200}
                    height={96}
                    loading="lazy"
                    style={{ width: 'auto', height: 'auto' }}
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300" 
                  />
                </div>
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

const LocalizedPartners = () => {
  const t = useTranslations('home');
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
