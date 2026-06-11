import React from 'react';
import PackagingPageLayout, { PackagingPageData } from '@/components/packaging/PackagingPageLayout';

const pageData: PackagingPageData = {
  title: "Automatic PET Stretch Blow Moulding Machine",
  breadcrumbName: "Automatic",
  overviewTitle: "High-Speed Automatic PET Blow Moulding",
  overviewDescription: "Our Automatic PET Stretch Blow Moulding machines are engineered for high-volume production with precision and reliability. Designed to manufacture perfect PET bottles for water, CSD, juice, and more, these machines integrate advanced heating and blowing technology to ensure uniform wall thickness and exceptional clarity.",
  overviewBenefits: [
    "High production speed and efficiency",
    "Energy-saving servo-driven operations",
    "Consistent bottle quality and clarity",
    "Fully automated preform feeding and bottle discharge",
    "User-friendly PLC interface for easy operation"
  ],
  overviewImage: "https://demo.awaikenthemes.com/yarnex/wp-content/uploads/2026/02/services-single-img-1.jpg",
  featuresTitle: "Advanced Automation Features",
  featuresSubtitle: "Built for performance, our automatic machines provide state-of-the-art capabilities for your production line.",
  features: [
    {
      title: "Servo Motor Driven",
      description: "Utilizes advanced servo motors for mold clamping, stretching, and transfer, ensuring high speed, precision, and lower energy consumption."
    },
    {
      title: "Infrared Heating System",
      description: "Optimized infrared heating lamps provide uniform heat distribution to preforms, resulting in flawless stretch blow moulding."
    },
    {
      title: "Air Recovery System",
      description: "An integrated air recovery system reuses high-pressure blowing air for machine movements, significantly reducing energy costs."
    },
    {
      title: "Quick Mold Changeover",
      description: "Designed with a drawer-type mold structure, allowing operators to change bottle molds quickly and efficiently with minimal downtime."
    },
    {
      title: "Intelligent Fault Diagnosis",
      description: "The advanced PLC system continuously monitors machine operations and instantly displays fault diagnostics for quick troubleshooting."
    },
    {
      title: "Compact Footprint",
      description: "The streamlined, enclosed design maximizes your factory floor space while maintaining high accessibility for maintenance."
    }
  ]
};

const AutomaticPage = () => {
  return <PackagingPageLayout data={pageData} />;
};

export default AutomaticPage;
