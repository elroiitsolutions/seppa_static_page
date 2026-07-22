import React from 'react';
import { motion , Variants} from 'framer-motion';
import { Link } from '@/i18n/routing';
import { FiCalendar, FiArrowUpRight } from 'react-icons/fi';
import AnimatedHeading from '../ui/AnimatedHeading';


const fadeInUp:Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

import { useTranslations, useLocale } from 'next-intl';
import enHome from '@/messages/en/home.json';
import { usePathname } from 'next/navigation';

const LatestBlogsContent = ({ getT, isArabic }: { getT: (key: string) => string; isArabic: boolean }) => {
  const blogs = [
    {
      title: getT('blog1Title'),
      date: getT('blog1Date'),
      image: "/pics/aluminium-can-vs-plastic-bottle-vs-glass-comparison.jpg"
    },
    {
      title: getT('blog2Title'),
      date: getT('blog2Date'),
      image: "/pics/aluminium-can-vs-plastic-bottle-vs-glass-comparison.jpg"
    },
    {
      title: getT('blog3Title'),
      date: getT('blog3Date'),
      image: "/pics/aluminium-can-vs-plastic-bottle-vs-glass-comparison.jpg"
    }
  ];

  return (
    <section className="py-12 lg:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* Header Section */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
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
            className="text-4xl md:text-5xl lg:text-[52px] font-heading font-bold text-dark leading-tight [&>span]:justify-center" 
          />
        </motion.div>

        {/* Blogs Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {blogs.map((blog, idx) => (
            <motion.div key={idx} variants={fadeInUp} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
              
              <div className="relative overflow-hidden aspect-[4/3] p-3">
                <div className="w-full h-full rounded-2xl overflow-hidden">
                  <img 
                    src={blog.image} 
                    alt={blog.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700" 
                  />
                </div>
              </div>
              
              <div className="p-8 pt-4">
                <h3 className="text-2xl font-bold font-heading text-dark mb-6 leading-snug group-hover:text-[seppa-red] transition-colors duration-300">
                  <Link href={"/blog"}>
                    {blog.title}
                  </Link>
                </h3>
                
                <div className="flex items-center justify-between border-t border-gray-100 pt-6">
                  <div className="flex items-center gap-2 text-gray-500 font-medium text-sm">
                    <FiCalendar className="text-seppa-red" />
                    <span>{blog.date}</span>
                  </div>
                  
                  <Link href={"/blog"} className="flex items-center gap-2 text-dark font-bold hover:text-gold transition-colors duration-300 text-sm">
                    {getT('readMore')}
                    <span className="w-6 h-6 rounded-full bg-[seppa-red] text-white flex items-center justify-center">
                      <FiArrowUpRight size={14} />
                    </span>
                  </Link>
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

const LocalizedLatestBlogs = () => {
  const t = useTranslations('home');
  const locale = useLocale();
  const isArabic = locale === 'ar';
  const isDe = locale === 'de';
  const getT = (key: string) => isDe ? ((enHome as any).LatestBlogs?.[key] || key) : t(`LatestBlogs.${key}`);
  return <LatestBlogsContent getT={getT} isArabic={isArabic} />;
};

const StaticLatestBlogs = () => {
  const pathname = usePathname() || '';
  const isArabic = pathname.startsWith('/ar') || pathname.startsWith('/ar/');
  const getT = (key: string) => ((enHome as any).LatestBlogs?.[key] || key);
  return <LatestBlogsContent getT={getT} isArabic={isArabic} />;
};

const LatestBlogs = () => {
  const pathname = usePathname() || '';
  const isLocalized = pathname.startsWith('/ar') || pathname.startsWith('/en') || pathname.startsWith('/de');
  return isLocalized ? <LocalizedLatestBlogs /> : <StaticLatestBlogs />;
};

export default LatestBlogs;
