import type { Metadata } from "next";
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
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}


