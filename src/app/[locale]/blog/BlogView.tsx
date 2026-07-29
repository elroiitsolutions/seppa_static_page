"use client";
import React from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import PageHeader from '@/components/layout/PageHeader';
import AnimatedHeading from '@/components/ui/AnimatedHeading';

const blogData = [
  {
    image: "https://demo.awaikenthemes.com/yarnex/wp-content/uploads/2026/02/blog-1.jpg",
    title: "Benefits of Using Recycled Yarns",
    meta: "February 26, 2026",
    description: "Discover the environmental and economic benefits of incorporating recycled yarns into your textile production. Learn how sustainable choices impact the global market."
  },
  {
    image: "https://demo.awaikenthemes.com/yarnex/wp-content/uploads/2026/02/blog-2.jpg",
    title: "Trends in Sustainable Textiles",
    meta: "February 20, 2026",
    description: "Stay updated with the latest trends in sustainable textile manufacturing and eco-friendly materials shaping the fashion industry today."
  },
  {
    image: "https://demo.awaikenthemes.com/yarnex/wp-content/uploads/2026/02/blog-3.jpg",
    title: "The Future of Yarn Technology",
    meta: "February 15, 2026",
    description: "Explore the innovative technologies shaping the future of yarn production and textile manufacturing, from smart fabrics to 3D weaving."
  },
  {
    image: "https://demo.awaikenthemes.com/yarnex/wp-content/uploads/2026/02/blog-4.jpg",
    title: "Quality Control in Textile Production",
    meta: "February 10, 2026",
    description: "An in-depth look at the rigorous quality control measures required to produce premium textiles for industrial applications."
  },
  {
    image: "https://demo.awaikenthemes.com/yarnex/wp-content/uploads/2026/02/blog-5.jpg",
    title: "Color Trends for the Upcoming Season",
    meta: "February 5, 2026",
    description: "Our experts predict the most popular dye colors and fabric patterns that will dominate the fashion market next season."
  },
  {
    image: "https://demo.awaikenthemes.com/yarnex/wp-content/uploads/2026/02/blog-6.jpg",
    title: "Understanding Fabric Blends",
    meta: "January 30, 2026",
    description: "A comprehensive guide to understanding different fabric blends, their properties, and how to choose the right one for your project."
  }
];

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const blogCardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    }
  }
};

const BlogView = () => {
  return (
    <div className="bg-light min-h-screen">
      <PageHeader 
        title="Our Blog" 
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Blog" }
        ]} 
      />

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <AnimatedHeading 
              text="Latest News & Articles" 
              elementType="h2" 
              className="text-4xl md:text-5xl font-heading font-bold text-dark" 
            />
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {blogData.map((post, index) => (
              <motion.div 
                key={index} 
                variants={blogCardVariants}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white text-dark text-sm font-bold py-1 px-4 rounded-full shadow-lg">
                    {post.meta}
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-heading font-bold text-dark mb-4 hover:text-gold transition-colors duration-300 cursor-pointer">
                    <Link href="#">{post.title}</Link>
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {post.description}
                  </p>
                  
                  <Link href="#" className="inline-flex items-center text-dark font-bold hover:text-gold transition-colors duration-300">
                    Read More 
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BlogView;
