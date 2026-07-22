"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';
import AnimatedHeading from './AnimatedHeading';
import { Link } from '@/i18n/routing';
import { FiArrowUpRight, FiCheckCircle } from 'react-icons/fi';
import { FaPhoneAlt } from 'react-icons/fa';

export interface ContentBlockProps {
  badge?: string;
  title?: string;
  paragraphs: (string | React.ReactNode)[];
  features?: string[];
  image1?: string;
  image2?: string;
  bgClass?: string;
  reverse?: boolean;
  layout?: 'side-by-side' | 'stacked';
}

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9, x: 20 },
  visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const getLinkPathForTitle = (title: string): string => {
  const cleanTitle = title.trim().toLowerCase().replace(/:$/, '');
  if (
    cleanTitle === "oil chillers" || 
    cleanTitle === "مبردات الزيت الصناعية" ||
    cleanTitle.includes("oil chillers") ||
    cleanTitle.includes("مبردات الزيت")
  ) {
    return "/equipments/oil-chillers";
  }
  if (
    cleanTitle === "hydraulic oil chiller" || 
    cleanTitle === "hydraulic oil chillers" || 
    cleanTitle === "مبرد الزيت الهيدروليكي" ||
    cleanTitle.includes("hydraulic oil") ||
    cleanTitle.includes("الهيدروليكي")
  ) {
    return "/equipments/hydraulic-chillers";
  }
  if (
    cleanTitle === "coolant chiller" || 
    cleanTitle === "coolant chillers" || 
    cleanTitle === "مبرد سوائل التبريد" ||
    cleanTitle.includes("coolant chiller") ||
    cleanTitle.includes("سوائل التبريد")
  ) {
    if (cleanTitle.includes("i dip") || cleanTitle.includes("ip") || cleanTitle.includes("الغمر")) {
      return "/equipments/coolant-chiller-ip";
    }
    return "/equipments/coolant-chillers";
  }
  if (
    cleanTitle === "coolant chiller i dip" || 
    cleanTitle === "coolant chiller ip" || 
    cleanTitle === "مبرد الغمر المباشر" ||
    cleanTitle.includes("i dip") ||
    cleanTitle.includes("الغمر المباشر")
  ) {
    return "/equipments/coolant-chiller-ip";
  }
  if (
    cleanTitle === "air cooled scroll chiller" || 
    cleanTitle === "air cooled scroll chillers" || 
    cleanTitle === "مبرد حلزوني مبرد بالهواء" ||
    cleanTitle.includes("air cooled scroll") ||
    cleanTitle.includes("مبرد بالهواء")
  ) {
    return "/equipments/air-cooled-scroll-chillers";
  }
  if (
    cleanTitle === "water cooled scroll chiller" || 
    cleanTitle === "water cooled scroll chillers" || 
    cleanTitle === "مبرد حلزوني مبرد بالماء" ||
    cleanTitle.includes("water cooled scroll") ||
    cleanTitle.includes("مبرد بالماء")
  ) {
    return "/equipments/water-cooled-scroll-chillers";
  }
  if (
    cleanTitle === "smart screw chiller series" || 
    cleanTitle === "smart screw chillers" || 
    cleanTitle === "مبردات لولبية ذكية" ||
    cleanTitle === "سلسلة المبردات اللولبية الذكية" ||
    cleanTitle.includes("smart screw") ||
    cleanTitle.includes("لولبية")
  ) {
    return "/equipments/smart-screw-chillers";
  }
  if (
    cleanTitle === "energy efficient chillers" || 
    cleanTitle === "مبردات مياه صناعية موفرة للطاقة" ||
    cleanTitle === "مبردات موفرة للطاقة" ||
    cleanTitle.includes("energy efficient chiller") ||
    cleanTitle.includes("موفرة للطاقة")
  ) {
    return "/equipments/energy-efficient-chillers";
  }
  if (
    cleanTitle === "semi automatic pet blowing machine" || 
    cleanTitle === "ماكينة نفخ زجاجات pet نصف الأوتوماتيكية" ||
    cleanTitle === "ماكينة نصف آلية لـ pet" ||
    cleanTitle.includes("semi automatic pet") ||
    cleanTitle.includes("نصف الأوتوماتيكية")
  ) {
    return "/blowing/semi-automatic-units";
  }
  if (
    cleanTitle === "mineral water & soft drink pet bottle machine" || 
    cleanTitle === "ماكينة تصنيع زجاجات pet للمياه المعدنية والمشروبات الغازية" ||
    cleanTitle.includes("soft drink pet") ||
    cleanTitle.includes("للمياه المعدنية والمشروبات الغازية")
  ) {
    return "/soft-drink-pet-blowing";
  }
  if (
    cleanTitle === "milk / juice pet bottle machine" ||
    cleanTitle === "آلة تعبئة زجاجات عصير pet" ||
    cleanTitle === "ماكينة تصنيع زجاجات pet للعصائر" ||
    cleanTitle.includes("milk / juice pet") ||
    cleanTitle.includes("عصير pet") ||
    cleanTitle.includes("زجاجات pet للعصائر")
  ) {
    return "/milk-juice-pet-blowing";
  }
  if (
    cleanTitle === "bottle machines for household cleaning products" ||
    cleanTitle === "ماكينة تصنيع عبوات منتجات التنظيف المنزلية" ||
    cleanTitle.includes("household cleaning") ||
    cleanTitle.includes("منتجات التنظيف")
  ) {
    return "/household-cleaning-pet-blowing";
  }
  if (
    cleanTitle.includes("oil, vinegar & ketchup") ||
    cleanTitle.includes("oil, vinegar") ||
    cleanTitle.includes("عبوات الزيت من مادة pet") ||
    cleanTitle.includes("زجاجات pet للزيت") ||
    cleanTitle.includes("تعبئة الزيوت والخل")
  ) {
    return "/oil-ketchup-pet-blowing";
  }
  if (
    cleanTitle.includes("large pet bottle") ||
    cleanTitle.includes("3 to 20") ||
    cleanTitle.includes("زجاجة pet كبيرة") ||
    cleanTitle.includes("3 إلى 20 لتر") ||
    cleanTitle.includes("زجاجات pet كبيرة السعة")
  ) {
    return "/large-pet-blowing";
  }
  if (
    cleanTitle.includes("electric pet") ||
    cleanTitle.includes("كهربائية لـ pet") ||
    cleanTitle.includes("كهربائية لنفخ عبوات pet")
  ) {
    return "/electric-pet-blowing";
  }
  if (
    cleanTitle.includes("rotary") ||
    cleanTitle.includes("الدوارة") ||
    cleanTitle.includes("rotary high speed")
  ) {
    return "/blowing/rotary-high-speed-systems";
  }
  return "";
};

const ContentBlock: React.FC<ContentBlockProps> = ({ badge, title, paragraphs, features, image1, image2, bgClass = "bg-[#fdfbf6] m-3 rounded-2xl", reverse = false, layout = 'side-by-side' }) => {
  const hasImages = image1 || image2;
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className={`py-16 lg:py-24 ${bgClass} overflow-hidden relative`}>
      <div className="container mx-auto px-4 relative z-10">
        
        {layout === 'stacked' ? (
          <div className="flex flex-col w-full text-start">
            {badge && (
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white mb-6 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-seppa-red"></span>
                <span className="text-sm font-medium text-dark uppercase tracking-wider">{badge}</span>
              </motion.div>
            )}
            {title && (
              <AnimatedHeading 
                text={title} 
                elementType="h2" 
                className="text-3xl md:text-4xl lg:text-[42px] font-heading font-bold text-dark leading-tight mb-12" 
              />
            )}
            
            {hasImages && (
              <div className="relative w-[90%] md:w-[65%] h-[300px] md:h-[400px] mb-20 md:mb-24 mx-auto">
                <motion.div 
                  className={`absolute top-0 left-0 w-full h-full rounded-[2rem] overflow-hidden shadow-2xl group/image cursor-pointer z-10`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  variants={imageVariants}
                >
                  <img 
                    src={image1 || ''} 
                    alt={title || "Industrial machinery"} 
                    className="w-full h-full object-cover group-hover/image:scale-105 transition-transform duration-700 ease-in-out"
                  />
                  <div className="shine-overlay" />
                </motion.div>
                
                {image2 && (
                  <motion.div 
                    className="absolute -bottom-8 -left-4 md:-bottom-16 md:-left-16 w-[70%] md:w-[55%] aspect-video rounded-[2rem] overflow-hidden shadow-2xl border-[6px] md:border-8 border-white group group/image2 cursor-pointer z-20"
                    initial={{ opacity: 0, scale: 0.8, x: -20, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                  >
                    <img 
                      src={image2} 
                      alt="Packaging detail" 
                      className="w-full h-full object-cover group-hover/image:scale-105 transition-transform duration-700 ease-in-out"
                    />
                    <div className="shine-overlay" />
                  </motion.div>
                )}
              </div>
            )}

            <div className="space-y-6 text-start w-full">
              {paragraphs.map((content, idx) => {
                let isListItem = false;
                let title = "";
                let desc = "";
                
                if (typeof content === 'string') {
                  const match = content.match(/^([^:]+):\s+(.*)$/);
                  if (match && match[1].split(' ').length <= 10 && !match[1].includes('.')) {
                    isListItem = true;
                    title = match[1];
                    desc = match[2];
                  }
                }

                const linkPath = getLinkPathForTitle(title);

                return (
                  <motion.div key={idx} variants={fadeInUp}>
                    {isListItem ? (
                      <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                        <span className="text-seppa-red me-2 text-xl leading-none">&bull;</span>
                        <strong>{title}:</strong> {desc}
                        {linkPath && isMounted && (
                          <Link href={linkPath} className="text-seppa-red font-bold text-sm hover:underline ml-2 uppercase tracking-wider transition-colors inline-flex items-center gap-0.5">
                            Read More <FiArrowUpRight className="text-xs" />
                          </Link>
                        )}
                      </p>
                    ) : typeof content === 'string' ? (
                      <p className="text-base md:text-lg text-gray-600 leading-relaxed indent-8 md:indent-12">
                        {content}
                      </p>
                    ) : (
                      content
                    )}
                  </motion.div>
                );
              })}
            </div>

            {features && features.length > 0 && (
              <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 w-full text-start">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-seppa-red/10 flex items-center justify-center text-seppa-red flex-shrink-0">
                      <FiCheckCircle className="text-xl" />
                    </div>
                    <span className="text-dark font-medium text-base md:text-lg">{feature}</span>
                  </div>
                ))}
              </motion.div>
            )}
          </div>
        ) : hasImages ? (
          <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 items-center`}>
            {/* Content */}
            <motion.div 
              className="w-full lg:w-1/2 order-2 lg:order-1"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={staggerContainer}
            >
              {badge && (
                <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white mb-6 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-seppa-red"></span>
                  <span className="text-sm font-medium text-dark uppercase tracking-wider">{badge}</span>
                </motion.div>
              )}
              
              {title && (
                <AnimatedHeading 
                  text={title} 
                  elementType="h2" 
                  className="text-3xl md:text-4xl lg:text-[42px] font-heading font-bold text-dark leading-tight mb-6" 
                />
              )}
              
              <div className="space-y-4 mb-10">
                {paragraphs.map((content, idx) => {
                  let isListItem = false;
                  let title = "";
                  let desc = "";
                  
                  if (typeof content === 'string') {
                    const match = content.match(/^([^:]+):\s+(.*)$/);
                    if (match && match[1].split(' ').length <= 10 && !match[1].includes('.')) {
                      isListItem = true;
                      title = match[1];
                      desc = match[2];
                    }
                  }

                  const linkPath = getLinkPathForTitle(title);

                  return (
                    <motion.div key={idx} variants={fadeInUp}>
                      {isListItem ? (
                        <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                          <span className="text-seppa-red me-2 text-xl leading-none">&bull;</span>
                          <strong>{title}:</strong> {desc}
                          {linkPath && isMounted && (
                            <Link href={linkPath} className="text-seppa-red font-bold text-sm hover:underline ml-2 uppercase tracking-wider transition-colors inline-flex items-center gap-0.5">
                              Read More <FiArrowUpRight className="text-xs" />
                            </Link>
                          )}
                        </p>
                      ) : typeof content === 'string' ? (
                        <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                          {content}
                        </p>
                      ) : (
                        content
                      )}
                    </motion.div>
                  );
                })}
              </div>

              {features && features.length > 0 && (
                <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                  {features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-seppa-red/10 flex items-center justify-center text-seppa-red flex-shrink-0">
                        <FiCheckCircle className="text-xl" />
                      </div>
                      <span className="text-dark font-medium text-base md:text-lg">{feature}</span>
                    </div>
                  ))}
                </motion.div>
              )}
            </motion.div>

            {/* Images */}
            <div className="w-full lg:w-1/2 relative h-[500px] md:h-[600px] order-1 lg:order-2">
              <motion.div 
                className={`absolute top-0 right-0 ${image2 ? 'w-[85%] h-[80%]' : 'w-full h-full'} rounded-[2rem] overflow-hidden shadow-2xl group/image cursor-pointer z-10`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={imageVariants}
              >
                <img 
                  src={image1 || ''} 
                  alt="Industrial machinery" 
                  className="w-full h-full object-cover group-hover/image:scale-105 transition-transform duration-700 ease-in-out"
                />
                <div className="shine-overlay" />
              </motion.div>
              
              {image2 && (
                <motion.div 
                  className="absolute bottom-0 left-0 w-[65%] h-[60%] rounded-[2rem] overflow-hidden shadow-2xl border-8 border-[#fdfbf6] group/image cursor-pointer z-20"
                  initial={{ opacity: 0, scale: 0.8, x: -20, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                >
                  <img 
                    src={image2} 
                    alt="Packaging line scheme" 
                    className="w-full h-full object-cover group-hover/image:scale-105 transition-transform duration-700 ease-in-out"
                  />
                  <div className="shine-overlay" />
                </motion.div>
              )}
            </div>
          </div>
        ) : (
          /* Centered Text Layout (Fallback if no images) */
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {badge && (
              <motion.div variants={fadeInUp} className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white mb-6 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-seppa-red"></span>
                <span className="text-sm font-medium text-dark uppercase tracking-wider">{badge}</span>
              </motion.div>
            )}
            
            {title && (
              <div className="mb-8 flex justify-center">
                 <AnimatedHeading 
                   text={title} 
                   elementType="h2" 
                   className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-dark leading-tight" 
                 />
              </div>
            )}

            <div className="space-y-6">
              {paragraphs.map((content, idx) => {
                let isListItem = false;
                let title = "";
                let desc = "";
                
                if (typeof content === 'string') {
                  const match = content.match(/^([^:]+):\s+(.*)$/);
                  if (match && match[1].split(' ').length <= 10 && !match[1].includes('.')) {
                    isListItem = true;
                    title = match[1];
                    desc = match[2];
                  }
                }

                 const linkPath = getLinkPathForTitle(title);

                 return (
                  <motion.div key={idx} variants={fadeInUp}>
                    {isListItem ? (
                      <p className="text-base md:text-lg text-gray-600 leading-relaxed text-start">
                        <span className="text-seppa-red me-2 text-xl leading-none">&bull;</span>
                        <strong>{title}:</strong> {desc}
                        {linkPath && isMounted && (
                          <Link href={linkPath} className="text-seppa-red font-bold text-sm hover:underline ml-2 uppercase tracking-wider transition-colors inline-flex items-center gap-0.5">
                            Read More <FiArrowUpRight className="text-xs" />
                          </Link>
                        )}
                      </p>
                    ) : typeof content === 'string' ? (
                      <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                        {content}
                      </p>
                    ) : (
                      <div className="text-base md:text-lg text-gray-600 leading-relaxed">
                        {content}
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
};

export default ContentBlock;
