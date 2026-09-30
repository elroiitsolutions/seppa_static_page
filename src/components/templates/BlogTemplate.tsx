"use client";
import React from 'react';
import { usePathname } from 'next/navigation';
import { Link } from '@/i18n/routing';
import PageHeader from '@/components/layout/PageHeader';
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

  // Resolve header background image
  const rawBanner = data.hero?.background_image?.url || "/pics/packaging_blog_banner.png";
  const strapiBase = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
  const bannerBg = (rawBanner.startsWith('http') || rawBanner.startsWith('//') || rawBanner.startsWith('/pics/'))
    ? rawBanner
    : `${strapiBase}${rawBanner.startsWith('/') ? '' : '/'}${rawBanner}`;

  return (
    <div className="bg-[#fdfbf6] relative">
      {/* Top Banner with Background Image & Breadcrumbs */}
      <PageHeader 
        title={data.hero?.title || data.title}
        bgImage={bannerBg}
        breadcrumbs={[
          { name: isAr ? 'الرئيسية' : 'Home', path: '/' },
          { name: isAr ? 'المدونة' : 'Blog', path: '/blog' },
          { name: data.title }
        ]}
      />
      
      {/* Main Blog Layout (Two Column) */}
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-12 relative">
            
            {/* Left Column: Blog Content (8 cols / ~67%) */}
            <div className="lg:col-span-8 min-w-0">

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
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-dark leading-tight mb-8">
                {data.hero?.title || data.title}
              </h1>

              {/* Hero Image / Video */}
              {data.hero?.background_image?.url && (() => {
                const rawUrl = data.hero.background_image.url;
                const strapiBase = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
                const mediaUrl = (rawUrl.startsWith('http') || rawUrl.startsWith('//')) 
                  ? rawUrl 
                  : `${strapiBase}${rawUrl.startsWith('/') ? '' : '/'}${rawUrl}`;

                return (
                  <div className="rounded-2xl overflow-hidden mb-10 shadow-md aspect-video relative">
                    {data.hero.background_image.mime?.startsWith('video/') ? (
                      <video 
                        src={mediaUrl} 
                        controls 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <img 
                        src={mediaUrl} 
                        alt={data.hero.title || data.title} 
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                );
              })()}

              {/* Dynamic Zone Content Blocks */}
              <div className="blog-content prose prose-lg max-w-none prose-headings:font-heading prose-headings:font-bold prose-a:text-seppa-red">
                <DynamicZoneRenderer sections={data.body} />
              </div>

            </div>

            {/* Right Column: Sticky Sidebar (4 cols / ~33%) */}
            <div className="lg:col-span-4 relative">
              <div className="sticky top-28 space-y-8">
                
                {/* Search or CTA Banner */}
                <div className="bg-seppa-red rounded-2xl p-8 text-white shadow-lg">
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
