"use client";
import React from 'react';
import { Link } from '@/i18n/routing';
import { motion, Variants } from 'framer-motion';
import PageHeader from '@/components/layout/PageHeader';
import AnimatedHeading from '@/components/ui/AnimatedHeading';



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

interface BlogViewProps {
  blogs?: any[];
}

const BlogView: React.FC<BlogViewProps> = ({ blogs = [] }) => {
  return (
    <div className="bg-light min-h-screen">
      <PageHeader 
        title="Our Blog" 
        bgImage="/pics/packaging_blog_banner.png"
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
            {blogs.length === 0 ? (
              <div className="col-span-full text-center text-gray-500 py-12">
                No blog posts found.
              </div>
            ) : (
              blogs.map((post, index) => {
                const imageUrl = post.hero?.background_image?.url || "https://demo.awaikenthemes.com/yarnex/wp-content/uploads/2026/02/blog-1.jpg";
                const title = post.hero?.title || post.title;
                const description = post.seo?.metaDescription || post.hero?.subtitle || "Read this amazing blog post to learn more about our packaging innovations.";
                const dateObj = new Date(post.publishedAt || post.createdAt);
                const dateStr = dateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
                const url = post.full_path || "#";

                return (
                  <motion.div 
                    key={index} 
                    variants={blogCardVariants}
                    className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={imageUrl} 
                        alt={title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4 bg-white text-dark text-sm font-bold py-1 px-4 rounded-full shadow-lg">
                        {dateStr}
                      </div>
                    </div>
                    
                    <div className="p-8">
                      <h3 className="text-2xl font-heading font-bold text-dark mb-4 hover:text-gold transition-colors duration-300 cursor-pointer">
                        <Link href={url}>{title}</Link>
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                        {description}
                      </p>
                      
                      <Link href={url} className="inline-flex items-center text-dark font-bold hover:text-gold transition-colors duration-300">
                        Read More 
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                    </div>
                  </motion.div>
                );
              })
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BlogView;
