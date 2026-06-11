import React from 'react';
import PackagingPageLayout, { PackagingPageData } from '@/components/packaging/PackagingPageLayout';

const pageData: PackagingPageData = {
  title: "Semi-Automatic PET Stretch Blow Moulding Machine",
  breadcrumbName: "Semi-Automatic",
  overviewTitle: "Cost-Effective Semi-Automatic PET Blowing",
  overviewDescription: "Our Semi-Automatic PET Stretch Blow Moulding machines provide the perfect balance of affordability and quality for small to medium scale production. Ideal for startups and specialized bottle designs, these machines offer flexible operation with robust construction.",
  overviewBenefits: [
    "Low initial investment cost",
    "High flexibility for various bottle designs",
    "Easy to operate and maintain",
    "Compact design suitable for limited spaces",
    "Reliable pneumatic components for consistent blowing"
  ],
  overviewImage: "https://demo.awaikenthemes.com/yarnex/wp-content/uploads/2026/02/services-single-img-2.jpg",
  featuresTitle: "Reliable & Flexible Features",
  featuresSubtitle: "Discover the practical advantages of our semi-automatic blow moulding technology.",
  features: [
    {
      title: "Separate Heater & Blower",
      description: "The independent heating and blowing units allow for customized adjustments and easier maintenance without affecting the entire system."
    },
    {
      title: "Microcomputer Control",
      description: "Equipped with a precise microcomputer control system to regulate heating time and blowing pressure accurately."
    },
    {
      title: "High Safety Standards",
      description: "Features a double-hand operation start mechanism to ensure maximum safety for operators during the blowing process."
    },
    {
      title: "Versatile Production",
      description: "Capable of producing a wide range of PET containers, from small cosmetic bottles to large water containers, by simply changing molds."
    },
    {
      title: "Durable Clamping System",
      description: "Robust toggle clamping system provides high clamping force, preventing mold expansion during high-pressure blowing."
    },
    {
      title: "Low Energy Consumption",
      description: "Optimized heating elements and pneumatic systems ensure that the machine operates with minimal power and air consumption."
    }
  ]
};

const SemiAutomaticPage = () => {
  return <PackagingPageLayout data={pageData} />;
};

export default SemiAutomaticPage;
