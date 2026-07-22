"use client";
import React, { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname() || '/';
  
  const isArabic = pathname.startsWith('/ar/') || pathname === '/ar';
  const activeLocale = isArabic ? 'ar' : 'en';

  useEffect(() => {
    document.documentElement.lang = activeLocale;
    document.documentElement.dir = activeLocale === 'ar' ? 'rtl' : 'ltr';
  }, [activeLocale]);

  const toggleLanguage = () => {
    const nextLocale = activeLocale === 'en' ? 'ar' : 'en';
    let newPath = pathname;
    if (pathname.startsWith('/en/')) {
      newPath = pathname.replace(/^\/en\//, `/${nextLocale}/`);
    } else if (pathname === '/en') {
      newPath = `/${nextLocale}`;
    } else if (pathname.startsWith('/ar/')) {
      newPath = pathname.replace(/^\/ar\//, `/${nextLocale}/`);
    } else if (pathname === '/ar') {
      newPath = `/${nextLocale}`;
    } else {
      // If it's a root-level page, prepend /ar or /en
      newPath = pathname === '/' ? `/${nextLocale}` : `/${nextLocale}${pathname}`;
    }
    router.replace(newPath);
  };

  return (
    <div className="fixed top-24 right-6 z-[999] md:right-8">
      <button
        onClick={toggleLanguage}
        className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-seppa-blue/95 border border-white/20 text-white font-semibold text-sm shadow-xl backdrop-blur-md hover:bg-gold hover:text-dark transition-all duration-300 transform hover:scale-105 active:scale-95"
      >
        <span className="flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        {activeLocale === 'en' ? 'العربية' : 'English'}
      </button>
    </div>
  );
}
