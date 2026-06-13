import React from 'react';
import EnquiryPageLayout, { EnquiryPageData } from '@/components/enquiry/EnquiryPageLayout';

const pageData: EnquiryPageData = {
  title: "Dealers",
  breadcrumbName: "Dealers",
  heading: "Partner With Us",
  subheading: "Join our global network of authorized dealers. We provide industry-leading filling and packaging solutions. Fill out the form below to apply to become a Seppa dealer in your region.",
  formTitle: "Dealer Application",
  submitButtonText: "Apply Now",
  formFields: [
    {
      name: "name",
      label: "Full Name",
      type: "text",
      placeholder: "Your full name",
      required: true,
      halfWidth: true
    },
    {
      name: "company",
      label: "Company Name",
      type: "text",
      placeholder: "Your company name",
      required: true,
      halfWidth: true
    },
    {
      name: "email",
      label: "Email Address",
      type: "email",
      placeholder: "Business email",
      required: true,
      halfWidth: true
    },
    {
      name: "phone",
      label: "Phone Number",
      type: "tel",
      placeholder: "Contact number",
      required: true,
      halfWidth: true
    },
    {
      name: "region",
      label: "Proposed Dealership Region",
      type: "text",
      placeholder: "City, State, or Country",
      required: true
    },
    {
      name: "message",
      label: "Business Proposal",
      type: "textarea",
      placeholder: "Tell us about your current business, network, and why you want to partner with us...",
      required: true
    }
  ]
};

const DealersPage = () => {
  return <EnquiryPageLayout data={pageData} />;
};

export default DealersPage;
