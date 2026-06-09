import React from 'react';
import { motion , Variants } from 'framer-motion';
import AnimatedHeading from '../ui/AnimatedHeading';
import Link from 'next/link';

const fadeInUp:Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const testimonials = [
  {
    name: "Jacob Jones",
    quote: "The quality of fabrics and consistently meet international their team is reliable, responsive time.",
    image: "https://demo.awaikenthemes.com/yarnex/wp-content/uploads/2026/02/testimonial-1.jpg",
    rating: 5
  },
  {
    name: "Annette Black",
    quote: "The quality of fabrics and consistently meet international their team is reliable, responsive time.",
    image: "https://demo.awaikenthemes.com/yarnex/wp-content/uploads/2026/02/testimonial-2.jpg",
    rating: 5
  },
  {
    name: "Brooklyn Simmons",
    quote: "The quality of fabrics and consistently meet international their team is reliable, responsive time.",
    image: "https://demo.awaikenthemes.com/yarnex/wp-content/uploads/2026/02/testimonial-3.jpg",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
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
              <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
              <span className="text-sm font-medium text-dark uppercase tracking-wider">Our Testimonials</span>
            </motion.div>
            
            <AnimatedHeading 
              text="Client experiences that define our textile excellence" 
              elementType="h2" 
              className="text-4xl md:text-5xl lg:text-[52px] font-heading font-bold text-dark leading-tight" 
            />
          </motion.div>

          <motion.div 
            className="flex items-center gap-6 bg-white p-4 rounded-2xl shadow-sm border border-gray-100"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="text-2xl font-bold text-[#4285F4] flex items-center">
              G<span className="text-[#EA4335]">o</span><span className="text-[#FBBC05]">o</span>g<span className="text-[#34A853]">l</span><span className="text-[#EA4335]">e</span>
            </div>
            
            <div className="w-px h-10 bg-gray-200"></div>

            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                <img src="https://demo.awaikenthemes.com/yarnex/wp-content/uploads/2026/02/author-1.jpg" alt="User" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                <img src="https://demo.awaikenthemes.com/yarnex/wp-content/uploads/2026/02/author-2.jpg" alt="User" className="w-10 h-10 rounded-full border-2 border-white object-cover relative z-10" />
                <img src="https://demo.awaikenthemes.com/yarnex/wp-content/uploads/2026/02/author-3.jpg" alt="User" className="w-10 h-10 rounded-full border-2 border-white object-cover relative z-20" />
              </div>
              
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-dark text-lg">4.5</span>
                  <div className="flex text-gold text-sm">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill={i === 5 ? "url(#halfGradient)" : "currentColor"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <defs>
                          <linearGradient id="halfGradient">
                            <stop offset="50%" stopColor="currentColor" />
                            <stop offset="50%" stopColor="transparent" />
                          </linearGradient>
                        </defs>
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-500 text-xs font-medium">(1000+ Review)</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Testimonials Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {testimonials.map((testimonial, idx) => (
            <motion.div key={idx} variants={fadeInUp} className="group cursor-pointer">
              <div className="relative rounded-[2rem] overflow-hidden aspect-[3/4] shadow-lg">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700" 
                />
                
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent opacity-90 group-hover:opacity-100 transition duration-300"></div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 w-full p-8">
                  <div className="flex text-gold mb-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                    ))}
                  </div>
                  
                  <p className="text-gray-300 text-lg leading-relaxed mb-6 font-medium italic">
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

        {/* Bottom Bar */}
        <motion.div 
          className="text-center flex items-center justify-center gap-3 border-t border-gray-200/50 pt-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <img src="https://demo.awaikenthemes.com/yarnex/wp-content/uploads/2026/02/author-1.jpg" alt="Icon" className="w-6 h-6 rounded-full object-cover" />
          <p className="text-gray-600 font-medium text-sm md:text-base">
            From raw fibers to refined fabrics – <Link href="/about-us" className="text-gold font-bold hover:underline">Sustainability Woven Into Every Thread.</Link>
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Testimonials;
