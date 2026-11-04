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
  title: {
    default: "Seppa Solutions | Beverage Processing, PET Bottling & Packaging Machinery",
    template: "%s | Seppa Solutions",
  },
  description: "Global manufacturer of advanced liquid processing equipment, PET blow moulding machinery, water bottling plants, and automated packaging lines.",
  keywords: [
    "beverage processing machinery",
    "PET bottling line",
    "blow moulding machine",
    "water treatment plant",
    "liquid packaging automation",
    "aseptic filling machines",
    "Seppa Solutions"
  ],
  metadataBase: new URL("https://seppasolutions.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Seppa Solutions | Processing & Packaging Technology",
    description: "Complete bottling and packaging machinery solutions for water, soft drinks, juices, beer, and liquid packaging worldwide.",
    url: "https://seppasolutions.com",
    siteName: "Seppa Solutions",
    locale: "en_US",
    type: "website",
  },
  verification: {
    google: "wcF2xooOMglCm4txniropgRgpvhtE8aEN-U9iW9_oY0",
  },
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
        <meta name="google-site-verification" content="wcF2xooOMglCm4txniropgRgpvhtE8aEN-U9iW9_oY0" />
        {/* Google tag (gtag.js) - Google Ads & Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-HYNF3GKR6K"
        />
        <Script
          id="google-tag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-18368451165');
              gtag('config', 'G-HYNF3GKR6K');
            `,
          }}
        />
      </head>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}


