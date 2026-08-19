"use client";
import React from 'react';
import { useTranslations } from 'next-intl';
import EnquiryPageLayout, { EnquiryPageData } from '@/components/enquiry/EnquiryPageLayout';
import bannerImg from '@/assets/about-us/generated/header.png';

const InvestorsPage = () => {
  const t = useTranslations('investors');

  const pageData: EnquiryPageData = {
    formType: 'investor',
    title: t('title'),
    breadcrumbName: t('breadcrumbName'),
    bgImage: bannerImg.src,
    heading: t('heading'),
    subheading: t('subheading'),
    formTitle: t('formTitle'),
    submitButtonText: t('submitButtonText'),
    formFields: [
      {
        name: "name",
        label: t('name'),
        type: "text",
        placeholder: t('namePlaceholder'),
        required: true,
        halfWidth: true
      },
      {
        name: "email",
        label: t('email'),
        type: "email",
        placeholder: t('emailPlaceholder'),
        required: true,
        halfWidth: true
      },
      {
        name: "phone",
        label: t('phone'),
        type: "tel",
        placeholder: t('phonePlaceholder'),
        required: true,
        halfWidth: true
      },
      {
        name: "interest",
        label: t('interest'),
        type: "select",
        required: true,
        options: t.raw('options') as string[]
      },
      {
        name: "message",
        label: t('message'),
        type: "textarea",
        placeholder: t('messagePlaceholder')
      }
    ]
  };

  return <EnquiryPageLayout data={pageData} />;
};

export default InvestorsPage;
