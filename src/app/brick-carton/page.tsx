import React from 'react';
import PackagingPageLayout, { PackagingPageData } from '@/components/packaging/PackagingPageLayout';

const pageData: PackagingPageData = {
  title: "Brick Carton Packaging Machines",
  breadcrumbName: "Brick Carton",
  overviewTitle: "Aseptic Brick Carton Filling Solutions",
  overviewDescription: "Brick carton packaging is essential for UHT milk, juices, and dairy alternatives, providing long shelf life without refrigeration. Our Aseptic Brick Carton machines form, fill, and seal carton rolls in a completely sterile environment, guaranteeing product safety and preserving nutritional value.",
  overviewBenefits: [
    "Extended shelf life at ambient temperatures",
    "High filling accuracy and minimal product loss",
    "Complete sterile environment during packaging",
    "Compact packaging reduces logistics and storage costs",
    "Eco-friendly, recyclable carton materials"
  ],
  overviewImage: "https://demo.awaikenthemes.com/yarnex/wp-content/uploads/2026/02/services-single-img-1.jpg",
  featuresTitle: "Aseptic Carton Technology",
  featuresSubtitle: "Engineered to deliver maximum sterility and efficiency for dairy and beverage manufacturers.",
  features: [
    {
      title: "Hydrogen Peroxide Sterilization",
      description: "Uses a highly effective H2O2 bath and sterile air drying system to completely sterilize the packaging material before forming."
    },
    {
      title: "Closed Aseptic Chamber",
      description: "Filling and sealing take place inside a positive-pressure sterile chamber, preventing any external contamination."
    },
    {
      title: "Roll-Fed Forming",
      description: "Continuously forms the brick shape from a single roll of multi-layer laminate material, ensuring high-speed continuous production."
    },
    {
      title: "Induction Sealing",
      description: "High-frequency induction sealing creates strong, leak-proof longitudinal and transversal seals through the liquid."
    },
    {
      title: "Automatic Splicing",
      description: "Features an automatic paper roll splicing unit to ensure uninterrupted production when a roll finishes."
    },
    {
      title: "Integrated Straw/Cap Applicator",
      description: "Seamlessly integrates with downstream equipment for precise application of drinking straws or screw caps."
    }
  ]
};

const BrickCartonPage = () => {
  return <PackagingPageLayout data={pageData} />;
};

export default BrickCartonPage;
