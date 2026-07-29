import React from 'react';
import { motion, Variants } from 'framer-motion';
import AnimatedHeading from '../ui/AnimatedHeading';
import { Link } from '@/i18n/routing';
import { useTranslations, useLocale } from 'next-intl';
import enHome from '@/messages/en/home.json';
import { usePathname } from 'next/navigation';

const fadeInUp:Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const TestimonialsContent = ({ getT }: { getT: (key: string) => string }) => {
  const testimonials = [
    {
      name: getT('name1'),
      quote: getT('quote1'),
      image: "/pics/Rajesh.jpg",
      rating: 5
    },
    {
      name: getT('name2'),
      quote: getT('quote2'),
      image: "/pics/Marcus.jpg",
      rating: 5
    },
    {
      name: getT('name3'),
      quote: getT('quote3'),
      image: "/pics/Amara.jpg",
      rating: 5
    }
  ];

  return (
    <section className="py-12 lg:py-24 bg-white relative overflow-hidden">
      {/* Background Dot Pattern (Optional) */}
      <div className="absolute inset-0 opacity-40 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#e5e7eb 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row items-end justify-between gap-8 mb-16">
          <motion.div 
            className="max-w-2xl"
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
            
            <AnimatedHeading 
              text={getT('heading')} 
              elementType="h2" 
              className="text-[28px] md:text-[52px] font-heading font-bold text-dark leading-tight break-words" 
            />
          </motion.div>
        </div>

        {/* Testimonials Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {testimonials.map((testimonial, idx) => (
            <motion.div 
              key={idx} 
              variants={fadeInUp} 
              className={`group cursor-pointer ${idx === 2 ? 'md:col-span-2 md:w-[calc(50%-1rem)] md:mx-auto lg:col-span-1 lg:w-full' : ''}`}
            >
              <div className="relative rounded-[2rem] overflow-hidden aspect-[3/4] shadow-lg">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700" 
                />
                
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent opacity-90 group-hover:opacity-100 transition duration-300"></div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 w-full p-5 md:p-8">
                  <div className="flex text-gold mb-3 md:mb-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                    ))}
                  </div>
                  
                  <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-4 md:mb-6 font-medium italic">
                    "{testimonial.quote}"
                  </p>
                  
                  <h4 className="text-xl font-bold font-heading text-white">
                    {testimonial.name}
                  </h4>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

const LocalizedTestimonials = () => {
  const t = useTranslations('home');
  const locale = useLocale();
  const getT = (key: string) => t(`Testimonials.${key}`);
  return <TestimonialsContent getT={getT} />;
};

const StaticTestimonials = () => {
  const getT = (key: string) => ((enHome as any).Testimonials?.[key] || key);
  return <TestimonialsContent getT={getT} />;
};

const Testimonials = () => {
  const pathname = usePathname() || '';
  const isLocalized = pathname.startsWith('/ar') || pathname.startsWith('/en') || pathname.startsWith('/de');
  return isLocalized ? <LocalizedTestimonials /> : <StaticTestimonials />;
};

export default Testimonials;
