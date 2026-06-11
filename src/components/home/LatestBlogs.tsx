import React from 'react';
import { motion , Variants} from 'framer-motion';
import Link from 'next/link';
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

const blogs = [
  {
    title: "Sustainable Textile Trends Shaping Global Industry Today",
    date: "February 14, 2026",
    image: "https://demo.awaikenthemes.com/yarnex/wp-content/uploads/2026/02/blog-1.jpg"
  },
  {
    title: "Key Quality Standards Every Textile Manufacturer Should Follow",
    date: "February 14, 2026",
    image: "https://demo.awaikenthemes.com/yarnex/wp-content/uploads/2026/02/blog-2.jpg"
  },
  {
    title: "How Sustainable Practices Improve Textile Manufacturing Efficiency",
    date: "February 14, 2026",
    image: "https://demo.awaikenthemes.com/yarnex/wp-content/uploads/2026/02/blog-3.jpg"
  }
];

const LatestBlogs = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
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
            <span className="text-sm font-medium text-dark uppercase tracking-wider">Latest Blogs</span>
          </motion.div>
          
          <AnimatedHeading 
            text="Informing you with industry focused updates" 
            elementType="h2" 
            className="text-4xl md:text-5xl lg:text-[52px] font-heading font-bold text-dark leading-tight" 
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
                  <Link href="/blog">
                    {blog.title}
                  </Link>
                </h3>
                
                <div className="flex items-center justify-between border-t border-gray-100 pt-6">
                  <div className="flex items-center gap-2 text-gray-500 font-medium text-sm">
                    <FiCalendar className="text-gold" />
                    <span>{blog.date}</span>
                  </div>
                  
                  <Link href="/blog" className="flex items-center gap-2 text-dark font-bold hover:text-gold transition-colors duration-300 text-sm">
                    Read More
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

export default LatestBlogs;
