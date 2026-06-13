import React from 'react';
import EnquiryPageLayout, { EnquiryPageData } from '@/components/enquiry/EnquiryPageLayout';

const pageData: EnquiryPageData = {
  title: "Product Enquiry",
  breadcrumbName: "Product Enquiry",
  heading: "Have a project in mind?",
  subheading: "Fill out the form below to let us know about your project requirements. Our team of experts will get back to you with the best solutions tailored to your needs.",
  formTitle: "Send us an Enquiry",
  submitButtonText: "Submit Enquiry",
  formFields: [
    {
      name: "name",
      label: "Full Name",
      type: "text",
      placeholder: "Enter your full name",
      required: true,
      halfWidth: true
    },
    {
      name: "email",
      label: "Email Address",
      type: "email",
      placeholder: "Enter your email",
      required: true,
      halfWidth: true
    },
    {
      name: "phone",
      label: "Phone Number",
      type: "tel",
      placeholder: "Enter your phone number",
      required: true,
      halfWidth: true
    },
    {
      name: "location",
      label: "Location / Country",
      type: "text",
      placeholder: "Where are you located?",
      required: true,
      halfWidth: true
    },
    {
      name: "product",
      label: "Product of Interest",
      type: "select",
      required: true,
      options: [
        "Complete Lines",
        "Liquid Filling Machines",
        "PET Blowers",
        "Processing Equipment",
        "Packaging & Labeling",
        "Services & Maintenance",
        "Other"
      ]
    },
    {
      name: "message",
      label: "Project Requirements",
      type: "textarea",
      placeholder: "Tell us about your project, capacity requirements, and any specific details...",
      required: true
    }
  ]
};

const ProductEnquiryPage = () => {
  return <EnquiryPageLayout data={pageData} />;
};

export default ProductEnquiryPage;
