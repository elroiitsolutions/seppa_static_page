"use client";
import React from 'react';
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FiFacebook, FiInstagram, FiArrowUpRight } from 'react-icons/fi';
import { FaYoutube } from 'react-icons/fa';
import logoImg from '@/assets/logo/logo.png';
import bgPattern from '@/assets/bg/black-line-1.png';

import { useTranslations } from 'next-intl';

const Footer: React.FC = () => {
  const t = useTranslations('footer');
  const pathname = usePathname();
  const isArabic = pathname.startsWith('/ar');
  const isGerman = pathname.startsWith('/de');
  
  const f = {
    subscribeNewsletter: t('subscribeNewsletter'),
    enterEmail: t('enterEmail'),
    engineerTogether: t('engineerTogether'),
    getInTouch: t('getInTouch'),
    quickLinks: t('quickLinks'),
    home: t('home'),
    aboutUs: t('aboutUs'),
    ourBlog: t('ourBlog'),
    contactUs: t('contactUs'),
    ourServices: t('ourServices'),
    packaging: t('packaging'),
    spareParts: t('spareParts'),
    maintenance: t('maintenance'),
    lineImprovement: t('lineImprovement'),
    lineConversions: t('lineConversions'),
    audits: t('audits'),
    training: t('training'),
    contactInformation: t('contactInformation'),
    address: t('address'),
    copyright: t('copyright'),
    seppaSolutions: t('seppaSolutions'),
    allRightsReserved: t('allRightsReserved')
  };

  const [newsletterEmail, setNewsletterEmail] = React.useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = React.useState(false);
  const [newsletterError, setNewsletterError] = React.useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim() || !/\S+@\S+\.\S+/.test(newsletterEmail.trim())) {
      setNewsletterError(isArabic ? 'يرجى إدخال بريد إلكتروني صحيح' : 'Please enter a valid email');
      return;
    }
    setNewsletterError('');
    setNewsletterSubscribed(true);
    setNewsletterEmail('');
    setTimeout(() => {
      setNewsletterSubscribed(false);
    }, 4000);
  };

  const getLink = (path: string) => {
    if (path === '/') return isArabic ? '/ar' : isGerman ? '/de' : '/en';
    const prefix = isArabic ? '/ar' : isGerman ? '/de' : '/en';
    return `${prefix}${path}`;
  };

  return (
    <footer className="bg-[#101934] text-white pt-20 pb-8 mt-12 lg:mt-20 relative overflow-hidden m-3 rounded-2xl">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none bg-no-repeat bg-center bg-cover opacity-15" style={{ backgroundImage: `url(${bgPattern.src})` }}></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        
        {/* Top Section: Logo & Newsletter */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-16 pb-12 border-b border-white/10">
          <div className="shrink-0 flex items-center gap-3">
            <Link href="/">
              <Image 
                src={logoImg} 
                alt="Seppa Solutions Logo" 
                className="h-14 w-auto transition-all duration-300 bg-white px-2 py-1 rounded" 
              />
            </Link>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <h3 className="text-xl font-heading font-bold">{f.subscribeNewsletter}</h3>
            {newsletterSubscribed ? (
              <div className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-6 py-3 rounded-lg text-sm font-medium">
                ✓ {isArabic ? 'تم الاشتراك بنجاح!' : 'Subscribed successfully!'}
              </div>
            ) : (
              <div className="flex flex-col">
                <form className="flex w-full sm:w-auto" onSubmit={handleNewsletterSubmit} noValidate>
                  <input 
                    suppressHydrationWarning
                    type="email" 
                    placeholder={f.enterEmail} 
                    value={newsletterEmail}
                    onChange={(e) => {
                      setNewsletterEmail(e.target.value);
                      if (newsletterError) setNewsletterError('');
                    }}
                    className={`bg-white/10 backdrop-blur-sm text-white px-5 sm:px-6 py-3.5 sm:py-4 rounded-l-lg w-full sm:w-[260px] md:w-[300px] max-w-full focus:outline-none border ${newsletterError ? 'border-red-400' : 'border-white/20'} border-r-0 placeholder-gray-400 text-sm sm:text-base`}
                  />
                  <button 
                    suppressHydrationWarning
                    type="submit" 
                    aria-label="Submit Newsletter"
                    className="bg-seppa-red text-white px-5 sm:px-6 py-3.5 sm:py-4 rounded-r-lg hover:bg-white hover:text-[#101934] transition flex items-center justify-center shrink-0"
                  >
                    <FiArrowUpRight size={20} />
                  </button>
                </form>
                {newsletterError && (
                  <p className="text-red-400 text-xs mt-1 ml-2 font-medium">{newsletterError}</p>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 mb-16">
          
          {/* Left Column: Heading & Button */}
          <div className="w-full lg:w-5/12">
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] 2xl:text-[52px] font-heading font-bold leading-tight mb-8 lg:mb-10 pr-0 lg:pr-8">
              {f.engineerTogether}
            </h2>
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 group cursor-pointer w-max max-w-full">
              <button suppressHydrationWarning onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('open-enquiry-modal')); }} className="inline-flex bg-seppa-red text-white px-6 sm:px-8 py-3.5 sm:py-[18px] rounded-full font-bold text-base sm:text-lg group-hover:bg-white group-hover:text-seppa-red transition duration-300 tracking-wide text-center">
                {f.getInTouch}
              </button>
              <button suppressHydrationWarning aria-label="Open Enquiry Modal" onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('open-enquiry-modal')); }} className="w-12 h-12 sm:w-[60px] sm:h-[60px] bg-white flex items-center justify-center text-seppa-red rounded-full group-hover:bg-seppa-red group-hover:text-white transition duration-300 shadow-md shrink-0">
                <FiArrowUpRight className="transform transition-transform duration-300 group-hover:rotate-45" size={22} strokeWidth={2.5} />
              </button>
            </div>
          </div>

          {/* Right Columns: Links */}
          <div className="w-full lg:w-7/12 grid grid-cols-1 sm:grid-cols-3 gap-8">
            
            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-heading font-bold mb-8">{f.quickLinks}</h3>
              <ul className="space-y-4 text-gray-300 font-medium">
                <li><Link href="/" className="hover:text-seppa-red transition">{f.home}</Link></li>
                <li><Link href={getLink("/about-us")} className="hover:text-seppa-red transition">{f.aboutUs}</Link></li>
                <li><Link href={getLink("/blog")} className="hover:text-seppa-red transition">{f.ourBlog}</Link></li>
                <li><Link href={getLink("/contact-us")} className="hover:text-seppa-red transition">{f.contactUs}</Link></li>
              </ul>
            </div>

            {/* Our Services */}
            <div>
              <h3 className="text-xl font-heading font-bold mb-8">{f.ourServices}</h3>
              <ul className="space-y-4 text-gray-300 font-medium">
                <li><Link href={getLink("/services/packaging")} className="hover:text-seppa-red transition">{f.packaging}</Link></li>
                <li><Link href={getLink("/services/spare-parts")} className="hover:text-seppa-red transition">{f.spareParts}</Link></li>
                <li><Link href={getLink("/services/maintenance")} className="hover:text-seppa-red transition">{f.maintenance}</Link></li>
                <li><Link href={getLink("/services/improvement")} className="hover:text-seppa-red transition">{f.lineImprovement}</Link></li>
                <li><Link href={getLink("/services/conversions")} className="hover:text-seppa-red transition">{f.lineConversions}</Link></li>
                <li><Link href={getLink("/services/audits")} className="hover:text-seppa-red transition">{f.audits}</Link></li>
                <li><Link href={getLink("/services/training")} className="hover:text-seppa-red transition">{f.training}</Link></li>
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-xl font-heading font-bold mb-8">{f.contactInformation}</h3>
              <ul className="space-y-6 text-gray-300 font-medium">
                <li className="flex items-start gap-4">
                  <div className="text-seppa-red mt-1 shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  </div>
                  <a href="tel:+919384806105" className="hover:text-seppa-red transition">+91-9384806105</a>
                </li>
                <li className="flex items-start gap-4">
                  <div className="text-seppa-red mt-1 shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  </div>
                  <a href="mailto:info@domainname.com" className="hover:text-seppa-red transition">info@seppasolutions.com</a>
                </li>
                <li className="flex items-start gap-4">
                  <div className="text-seppa-red mt-1 shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  </div>
                  <span>{f.address}</span>
                </li>
              </ul>
            </div>
            
          </div>
        </div>
         
        {/* Bottom Footer Area */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 font-medium text-sm md:text-base">
            {f.copyright}{' '}
            <span className="text-white hover:text-seppa-red transition cursor-pointer">
              <Link href="/">{f.seppaSolutions}</Link>
            </span>
            . {f.allRightsReserved}
          </div>
          <div className="flex gap-2">
            <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition">
              <FiFacebook />
            </a>
            <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition">
              <FiInstagram />
            </a>
            <a href="https://www.youtube.com/channel/UCRSNui4SKhLRozL29Ielyzg" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition text-lg">
              <FaYoutube />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
