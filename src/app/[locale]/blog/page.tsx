import React from 'react';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { routing } from '@/i18n/routing';
import PageContent from './page-content';

import { getAllBlogs } from '@/lib/strapi/client';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function LocalizedPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = await getMessages({ locale });
  const blogs = await getAllBlogs(locale);

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <PageContent blogs={blogs} />
    </NextIntlClientProvider>
  );
}
