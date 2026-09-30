import React from 'react';
import { setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import ThankYouContent from './page-content';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function ThankYouPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ThankYouContent />;
}
