import React from 'react';
import { motion, Variants } from 'framer-motion';
import AnimatedHeading from '../ui/AnimatedHeading';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const awards = [
  {
    id: 1,
    title: 'Industry Leader Award',
    description: 'Recognized for outstanding leadership and innovation in the manufacturing sector.',
    image: 'https://placehold.co/600x400/273051/FFFFFF/png?text=Award+1'
  },
  {
    id: 2,
    title: 'Excellence in Quality',
    description: 'Awarded for maintaining the highest standards of quality control across all product lines.',
    image: 'https://placehold.co/600x400/273051/FFFFFF/png?text=Award+2'
  },
  {
    id: 3,
    title: 'Global Export Award',
    description: 'Honored for exceptional contribution to global trade and expanding international reach.',
    image: 'https://placehold.co/600x400/273051/FFFFFF/png?text=Award+3'
  },
  {
    id: 4,
    title: 'Sustainability Champion',
    description: 'Celebrating our commitment to eco-friendly practices and sustainable manufacturing.',
    image: 'https://placehold.co/600x400/273051/FFFFFF/png?text=Award+4'
  },
  {
    id: 5,
    title: 'Innovation of the Year',
    description: 'Received for developing cutting-edge technology that revolutionized packaging lines.',
    image: 'https://placehold.co/600x400/273051/FFFFFF/png?text=Award+5'
  }
];

const Awards = () => {
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
            <span className="text-sm font-medium text-dark uppercase tracking-wider">Recognition</span>
          </motion.div>
          
          <div className='w-full max-w-[1000px] mx-auto flex justify-center text-center mb-6'>
            <AnimatedHeading 
              text="Awards & Achievements" 
              elementType="h2" 
              className="text-4xl md:text-5xl lg:text-[52px] font-heading font-bold text-dark leading-tight [&>span]:justify-center" 
            />
          </div>
          <motion.p variants={fadeInUp} className="text-gray-500 max-w-3xl mx-auto text-lg leading-relaxed">
            Our relentless pursuit of excellence and innovation has been recognized globally. We take pride in the milestones we've achieved on our journey to transforming the industry.
          </motion.p>
        </motion.div>

        {/* Awards Flex Grid */}
        <motion.div 
          className="flex flex-wrap justify-center gap-6 lg:gap-8 max-w-[1200px] mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {/* {awards.map((award) => (
            <motion.div 
              key={award.id} 
              variants={fadeInUp} 
              className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1.35rem)] group cursor-pointer"
            >
              <div className="bg-white rounded-[2rem] overflow-hidden p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full hover:-translate-y-2"> */}
                
                {/* Image Container */}
                {/* <div className="w-full h-48 md:h-56 rounded-2xl overflow-hidden mb-6 relative bg-gray-50">
                  <div className="absolute inset-0 bg-dark/5 group-hover:bg-transparent transition-colors duration-300 z-10 pointer-events-none"></div>
                  <img 
                    src={award.image} 
                    alt={award.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div> */}

                {/* Content */}
                {/* <div className="flex flex-col flex-grow text-center">
                  <h3 className="text-xl md:text-2xl font-bold font-heading text-dark group-hover:text-seppa-red transition duration-300 mb-3">
                    {award.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                    {award.description}
                  </p>
                </div>

              </div>
            </motion.div>
          ))} */}
        </motion.div>

      </div>
    </section>
  );
};

export default Awards;
