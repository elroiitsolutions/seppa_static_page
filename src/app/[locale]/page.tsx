import HomeView from '../HomeView';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { routing } from '@/i18n/routing';
import { pickMessages } from '@/lib/i18n-helper';

interface Props {
  params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocalizedHomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const messages = await getMessages({ locale });
  const filteredMessages = pickMessages(messages, ['home', 'videos']);

  const { getAllBlogs } = await import('@/lib/strapi/client');
  const allBlogs = await getAllBlogs(locale);
  const latestBlogs = allBlogs.slice(0, 3);

  return (
    <NextIntlClientProvider locale={locale} messages={filteredMessages}>
      <HomeView latestBlogs={latestBlogs} />
    </NextIntlClientProvider>
  );
}
