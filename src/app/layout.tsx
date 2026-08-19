import type { Metadata } from "next";
import Script from "next/script";
import { Poppins } from 'next/font/google';
import localFont from 'next/font/local';
import "./globals.css";
import MainLayout from "../layouts/MainLayout";
import { NextIntlClientProvider } from 'next-intl';
import enHeader from '@/messages/en/header.json';
import enFooter from '@/messages/en/footer.json';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const calSans = localFont({
  src: [
    {
      path: '../../public/fonts/CalSans-SemiBold.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/CalSans-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/CalSans-Bold.woff2',
      weight: '700',
      style: 'normal',
    }
  ],
  variable: '--font-heading',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "seppa solutions.com",
  description: "Seppa Solutions",
};

const defaultMessages = {
  header: enHeader,
  footer: enFooter,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;  
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning className={`${poppins.variable} ${calSans.variable}`}>
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-M6BJ5F4L');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body suppressHydrationWarning>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M6BJ5F4L"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
      </body>
    </html>
  );
}


