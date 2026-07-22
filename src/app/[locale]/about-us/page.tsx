import React from 'react';
import { getTranslations, getMessages, setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { routing } from '@/i18n/routing';
import AboutUsClient from './AboutUsClient';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function AboutUsPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'about-us' });

  const getArray = (val: any): any[] => {
    if (Array.isArray(val)) return val;
    if (val !== null && typeof val === 'object') return Object.values(val);
    return val ? [val] : [];
  };

  const whoWeAre = {
    title: t('whoWeAre.title'),
    description: t('whoWeAre.description'),
    subDescription: getArray(t.raw('whoWeAre.subDescription'))
  };

  const whatWeBuild = {
    title: t('whatWeBuild.title'),
    paragraphs: getArray(t.raw('whatWeBuild.paragraphs'))
  };

  const expertise = {
    title: t('expertise.title'),
    paragraphs: getArray(t.raw('expertise.paragraphs'))
  };

  const equipmentFeatures = getArray(t.raw('equipment.features'));
  const industryFeatures = getArray(t.raw('industries.features'));
  const faqs = getArray(t.raw('faqs'));

  const whyChoose = {
    title: t('whyChoose.title'),
    description: t('whyChoose.description'),
    paragraphs: getArray(t.raw('whyChoose.paragraphs'))
  };

  const whyChooseText = {
    title: t('whyChooseText.title'),
    description: t('whyChooseText.description'),
    
    paragraphs: getArray(t.raw('whyChooseText.paragraphs'))
  };

  const messages = await getMessages({ locale });

  const translations = {
    title: t('title'),
    breadcrumbName: t('breadcrumbName'),
    equipmentTitle: t('equipment.title'),
    equipmentSubtitle: t('equipment.subtitle'),
    industriesTitle: t('industries.title'),
    industriesSubtitle: t('industries.subtitle'),
    faqTitle: t('faqTitle')
  };

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <AboutUsClient
        locale={locale}
        translations={translations}
        whoWeAre={whoWeAre}
        whatWeBuild={whatWeBuild}
        expertise={expertise}
        equipmentFeatures={equipmentFeatures}
        industryFeatures={industryFeatures}
        faqs={faqs}
        whyChoose={whyChoose}
        // whyChooseText={whyChoose}
      />
    </NextIntlClientProvider>
  );
}
