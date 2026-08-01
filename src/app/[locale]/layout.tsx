import { getMessages, setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { routing } from '@/i18n/routing';
import { pickMessages } from '@/lib/i18n-helper';
import MainLayout from '@/layouts/MainLayout';

interface Props {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const messages = await getMessages({ locale });
  // Layout only needs header and footer translations
  const layoutMessages = pickMessages(messages, []);

  return (
    <NextIntlClientProvider locale={locale} messages={layoutMessages}>
      <MainLayout>{children}</MainLayout>
    </NextIntlClientProvider>
  );
}
