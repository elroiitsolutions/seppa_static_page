"use client";
import React from 'react';
import { usePathname } from 'next/navigation';
import { Link } from '@/i18n/routing';
import { DynamicZoneRenderer } from '@/lib/sections/registry';
import LatestBlogs from '@/components/home/LatestBlogs';
import { FiClock, FiUser, FiCalendar, FiTag } from 'react-icons/fi';
import Image from 'next/image';

interface BlogTemplateProps {
  data: any;
  locale?: string;
}

const BlogTemplate: React.FC<BlogTemplateProps> = ({ data, locale }) => {
  const pathname = usePathname() || '';
  const isAr = locale === 'ar' || pathname.startsWith('/ar') || pathname.includes('/ar/');
  
  // Extract relations safely
  const authorName = data.author?.name || 'Seppa Team';
  const authorAvatar = data.author?.avatar?.url;
  const categoryName = data.category?.name || 'Blog';
  const publishDate = data.publishedAt ? new Date(data.publishedAt).toLocaleDateString(locale, { year: 'numeric', month: 'long', day: 'numeric' }) : 'Recently Published';
  
  // Estimate reading time based on body text length (very rough estimate)
  const readingTime = data.body ? Math.max(1, Math.ceil(JSON.stringify(data.body).split(' ').length / 200)) : 3;

  return (
    <div className="overflow-hidden bg-[#fdfbf6]">
      
      {/* Main Blog Layout (Two Column) */}
      <section className="pt-32 pb-12 lg:pt-40 lg:pb-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Left Column: Blog Content (70%) */}
            <div className="w-full lg:w-8/12">
              
              {/* Breadcrumbs */}
              <nav className="flex flex-wrap items-center justify-start gap-y-1 text-gray-500 font-medium text-sm mb-6">
                <Link href="/" className="hover:text-seppa-red transition duration-300">Home</Link>
                <span className="mx-2 shrink-0">/</span>
                <Link href="/blog" className="hover:text-seppa-red transition duration-300">Blog</Link>
                <span className="mx-2 shrink-0">/</span>
                <span className="text-dark font-bold">{data.title}</span>
              </nav>

              {/* Blog Meta Data */}
              <div className="bg-white rounded-xl p-3 md:p-4 mb-6 shadow-sm border border-gray-100 flex flex-wrap items-center gap-4 text-sm">
                {authorAvatar && (
                  <div className="flex items-center gap-2">
                    <img src={authorAvatar} alt={authorName} className="w-8 h-8 rounded-full object-cover" />
                    <div>
                      <p className="text-xs text-gray-500 font-medium">Written by</p>
                      <p className="font-bold text-dark text-sm">{authorName}</p>
                    </div>
                  </div>
                )}
                {!authorAvatar && (
                  <div className="flex items-center gap-1.5 text-gray-600 font-medium">
                    <FiUser className="text-seppa-red" />
                    <span>{authorName}</span>
                  </div>
                )}
                
                <div className="flex items-center gap-1.5 text-gray-600 font-medium">
                  <FiCalendar className="text-seppa-red" />
                  <span>{publishDate}</span>
                </div>
                
                <div className="flex items-center gap-1.5 text-gray-600 font-medium">
                  <FiClock className="text-seppa-red" />
                  <span>{readingTime} min read</span>
                </div>
                
                <div className="flex items-center gap-1.5 text-gray-600 font-medium">
                  <FiTag className="text-seppa-red" />
                  <span className="bg-gray-100 px-2.5 py-0.5 rounded-full text-xs">{categoryName}</span>
                </div>
              </div>

              {/* Title */}
              <h1 className={`text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-dark leading-tight ${data.hero?.subtitle ? 'mb-4' : 'mb-8'}`}>
                {data.hero?.title || data.title}
              </h1>

              {/* Subtitle */}
              {data.hero?.subtitle && (
                <h2 className="text-xl md:text-2xl text-gray-600 mb-8 font-medium leading-relaxed">
                  {data.hero.subtitle}
                </h2>
              )}

              {/* Hero Image / Video */}
              {data.hero?.background_image?.url && (
                <div className="rounded-2xl overflow-hidden mb-10 shadow-md aspect-video relative">
                  {data.hero.background_image.mime?.startsWith('video/') ? (
                    <video 
                      src={data.hero.background_image.url} 
                      controls 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <img 
                      src={data.hero.background_image.url} 
                      alt={data.hero.title || data.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              )}

              {/* Dynamic Zone Content Blocks */}
              <div className="blog-content prose prose-lg max-w-none prose-headings:font-heading prose-headings:font-bold prose-a:text-seppa-red">
                <DynamicZoneRenderer sections={data.body} />
              </div>

            </div>

            {/* Right Column: Sidebar (30%) */}
            <div className="w-full lg:w-4/12">
              <div className="sticky top-32">
                
                {/* Search or CTA Banner (Optional) */}
                <div className="bg-seppa-red rounded-2xl p-8 text-white mb-8 shadow-lg">
                  <h3 className="text-2xl font-bold font-heading mb-4">Looking for Packaging Solutions?</h3>
                  <p className="mb-6 text-white/90">Get expert advice tailored for your product lines.</p>
                  <a href="/contact-us" className="inline-block bg-white text-seppa-red font-bold px-6 py-3 rounded-full hover:bg-gray-50 transition">
                    Contact Us Today
                  </a>
                </div>

                {/* Trending / Latest Blogs Feed */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                  <div className="bg-gray-50 border-b border-gray-100 px-4 py-2">
                    <h3 className="text-lg font-bold font-heading text-dark flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-seppa-red"></span>
                      Trending Articles
                    </h3>
                  </div>
                  <div className="p-2">
                    <LatestBlogs 
                      layout="compact" 
                      selected_blogs={data.trending_articles && data.trending_articles.length > 0 ? data.trending_articles : undefined} 
                    />
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default BlogTemplate;
