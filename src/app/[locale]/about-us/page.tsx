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

  const industriesText = t.has('industriesText') ? {
    title: t('industriesText.title'),
    paragraphs: getArray(t.raw('industriesText.paragraphs'))
  } : undefined;

  const equipmentFeatures = t.has('equipment.features') ? getArray(t.raw('equipment.features')) : [];
  const industryFeatures = t.has('industries.features') ? getArray(t.raw('industries.features')) : [];
  const faqs = getArray(t.raw('faqs'));

  const whyChoose = {
    title: t('whyChoose.title'),
    description: t.has('whyChoose.description') ? t('whyChoose.description') : "",
    paragraphs: getArray(t.raw('whyChoose.paragraphs'))
  };

  const whyChooseText = t.has('whyChooseText') ? {
    title: t('whyChooseText.title'),
    paragraphs: getArray(t.raw('whyChooseText.paragraphs'))
  } : undefined;

  const messages = await getMessages({ locale });

  const translations = {
    title: t('title'),
    breadcrumbName: t('breadcrumbName'),
    equipmentTitle: t.has('equipment.title') ? t('equipment.title') : "",
    equipmentSubtitle: t.has('equipment.subtitle') ? t('equipment.subtitle') : "",
    industriesTitle: t.has('industries.title') ? t('industries.title') : "",
    industriesSubtitle: t.has('industries.subtitle') ? t('industries.subtitle') : "",
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
        industriesText={industriesText}
        equipmentFeatures={equipmentFeatures}
        industryFeatures={industryFeatures}
        faqs={faqs}
        whyChoose={whyChoose}
        whyChooseText={whyChooseText}
      />
    </NextIntlClientProvider>
  );
}
