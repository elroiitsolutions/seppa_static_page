"use client";
import React, { ReactNode } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MagicCursor from '@/components/ui/MagicCursor';
import FloatingActions from '@/components/ui/FloatingActions';
import ScrollEnquiryModal from '@/components/ui/ScrollEnquiryModal';

import { usePathname } from 'next/navigation';

interface MainLayoutProps { 
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const pathname = usePathname() || '/en';

  // Normalize pathname: ensure leading and trailing slash matching canonical URL structure
  const cleanPath = pathname.startsWith('/') ? pathname : `/${pathname}`;
  const normalizedPath = cleanPath.endsWith('/') ? cleanPath : `${cleanPath}/`;
  const canonicalUrl = `https://seppasolutions.com${normalizedPath}`;

  // Extract path without locale for multilingual hreflang alternates (e.g. /en/contact-us/ -> /contact-us/)
  const pathWithoutLocale = normalizedPath.replace(/^\/(en|ar|de|nl|fr)(\/|$)/, '/');
  const subPath = pathWithoutLocale.endsWith('/') ? pathWithoutLocale : `${pathWithoutLocale}/`;

  React.useEffect(() => {
    const isArabic = pathname.startsWith('/ar');
    if (isArabic) {
      document.documentElement.dir = 'rtl';
      document.documentElement.lang = 'ar';
    } else {
      document.documentElement.dir = 'ltr';
      document.documentElement.lang = 'en';
    }
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen max-w-[100vw]" style={{ minHeight: '100dvh' }}>
      {/* Canonical and Multilingual SEO Hreflang Tags */}
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:url" content={canonicalUrl} />
      <link rel="alternate" hrefLang="en" href={`https://seppasolutions.com/en${subPath === '/' ? '/' : subPath}`} />
      <link rel="alternate" hrefLang="ar" href={`https://seppasolutions.com/ar${subPath === '/' ? '/' : subPath}`} />
      <link rel="alternate" hrefLang="de" href={`https://seppasolutions.com/de${subPath === '/' ? '/' : subPath}`} />
      <link rel="alternate" hrefLang="nl" href={`https://seppasolutions.com/nl${subPath === '/' ? '/' : subPath}`} />
      <link rel="alternate" hrefLang="fr" href={`https://seppasolutions.com/fr${subPath === '/' ? '/' : subPath}`} />
      <link rel="alternate" hrefLang="x-default" href={`https://seppasolutions.com/en${subPath === '/' ? '/' : subPath}`} />

      <FloatingActions />
      <div className="flex flex-col flex-grow">
        <MagicCursor />
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
      <ScrollEnquiryModal />
    </div>
  );
};

export default MainLayout;
