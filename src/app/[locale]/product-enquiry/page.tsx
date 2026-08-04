import React from 'react';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { routing } from '@/i18n/routing';
import EnquiryPageLayout, { EnquiryPageData } from '@/components/enquiry/EnquiryPageLayout';
import bannerImg from '@/assets/about-us/generated/header.png';

interface Props {
  params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocalizedProductEnquiryPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: 'enquiry' });
  const tEn = await getTranslations({ locale: 'en', namespace: 'enquiry' });

  const isDe = locale === 'de';
  const getT = (key: string) => isDe ? tEn(key) : t(key);
  const getRaw = (key: string) => isDe ? tEn.raw(key) : t.raw(key);

  const messages = await getMessages({ locale });

  const pageData: EnquiryPageData = {
    title: getT('title'),
    breadcrumbName: getT('breadcrumbName'),
    bgImage: bannerImg.src,
    heading: getT('heading'),
    subheading: getT('subheading'),
    formTitle: getT('formTitle'),
    submitButtonText: getT('submitButtonText'),
    formFields: [
      {
        name: "name",
        label: getT('fields.name'),
        type: "text",
        placeholder: getT('fields.namePlaceholder'),
        required: true,
        halfWidth: true
      },
      {
        name: "email",
        label: getT('fields.email'),
        type: "email",
        placeholder: getT('fields.emailPlaceholder'),
        required: true,
        halfWidth: true
      },
      {
        name: "phone",
        label: getT('fields.phone'),
        type: "tel",
        placeholder: getT('fields.phonePlaceholder'),
        required: true,
        halfWidth: true
      },
      {
        name: "location",
        label: getT('fields.location'),
        type: "text",
        placeholder: getT('fields.locationPlaceholder'),
        required: true,
        halfWidth: true
      },
      {
        name: "product",
        label: getT('fields.product'),
        type: "select",
        required: true,
        options: getRaw('fields.products') as string[]
      },
      {
        name: "message",
        label: getT('fields.message'),
        type: "textarea",
        placeholder: getT('fields.messagePlaceholder'),
      }
    ]
  };

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <div dir={locale === 'ar' ? 'rtl' : 'ltr'}>
        <EnquiryPageLayout data={pageData} />
      </div>
    </NextIntlClientProvider>
  );
}
