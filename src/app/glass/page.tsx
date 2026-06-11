import React from 'react';
import PackagingPageLayout, { PackagingPageData } from '@/components/packaging/PackagingPageLayout';

const pageData: PackagingPageData = {
  title: "Glass Bottle Filling & Packaging",
  breadcrumbName: "Glass",
  overviewTitle: "Premium Glass Bottle Packaging Lines",
  overviewDescription: "Glass packaging remains the gold standard for premium beverages, offering unmatched purity and aesthetic appeal. Our glass bottle filling lines are tailored for wine, spirits, premium water, and juices, providing gentle handling, precise filling, and robust capping solutions to protect your high-value products.",
  overviewBenefits: [
    "Gentle handling to prevent bottle breakage",
    "High-precision vacuum and gravity filling options",
    "Versatile capping (corks, crown caps, ROPP)",
    "Hygienic stainless steel construction",
    "Integrated bottle washing and sterilization"
  ],
  overviewImage: "https://demo.awaikenthemes.com/yarnex/wp-content/uploads/2026/02/services-single-img-2.jpg",
  featuresTitle: "Excellence in Glass Packaging",
  featuresSubtitle: "Our glass lines are built to handle fragile containers with care while maintaining high-speed production.",
  features: [
    {
      title: "Gentle Bottle Transfer",
      description: "Utilizes smooth star-wheels and guides to prevent glass-to-glass contact, minimizing noise and risk of breakage."
    },
    {
      title: "Vacuum Filling Technology",
      description: "Low vacuum filling ensures precise fill levels and eliminates dripping, perfect for high-viscosity liquids and spirits."
    },
    {
      title: "Multi-Cap Compatibility",
      description: "Flexible capping turrets can be equipped to apply natural corks, aluminum screw caps (ROPP), or crown seals."
    },
    {
      title: "CIP & SIP Ready",
      description: "Fully automated Clean-In-Place and Sterilize-In-Place systems guarantee the highest level of hygiene."
    },
    {
      title: "Bottle Washing Integration",
      description: "Seamless integration with rotary bottle washers to ensure every glass container is perfectly clean before filling."
    },
    {
      title: "Automated Inspection",
      description: "In-line inspection systems verify cap presence, fill levels, and label placement, ensuring only perfect bottles reach the market."
    }
  ]
};

const GlassPage = () => {
  return <PackagingPageLayout data={pageData} />;
};

export default GlassPage;
