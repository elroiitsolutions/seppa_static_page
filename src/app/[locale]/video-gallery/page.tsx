import React from 'react';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { pickMessages } from '@/lib/i18n-helper';
import { NextIntlClientProvider } from 'next-intl';
import { routing } from '@/i18n/routing';
import VideoGallery from '@/components/video-gallery/VideoGallery';

interface Props {
  params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocalizedVideoGalleryPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const messages = await getMessages({ locale });
  const filteredMessages = pickMessages(messages, ['videos']);

  return (
    <NextIntlClientProvider locale={locale} messages={filteredMessages}>
      <VideoGallery />
    </NextIntlClientProvider>
  );
}
