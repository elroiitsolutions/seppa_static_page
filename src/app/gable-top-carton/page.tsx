import React from 'react';
import PackagingPageLayout, { PackagingPageData } from '@/components/packaging/PackagingPageLayout';

const pageData: PackagingPageData = {
  title: "Gable Top Carton Packaging",
  breadcrumbName: "Gable Top Carton",
  overviewTitle: "Premium Gable Top Filling Machines",
  overviewDescription: "Gable top cartons are synonymous with premium fresh milk and premium juices. Our Gable Top filling machines handle pre-formed carton blanks, erecting, filling, and sealing them with high precision. Designed for both fresh and extended shelf life (ESL) products, these machines offer excellent hygiene and operational efficiency.",
  overviewBenefits: [
    "Ideal for premium fresh dairy and juice products",
    "Excellent brand visibility and printable surface area",
    "Hygienic filling for fresh and ESL applications",
    "Precise volumetric filling prevents splashing",
    "Easy changeover between different carton volumes"
  ],
  overviewImage: "https://demo.awaikenthemes.com/yarnex/wp-content/uploads/2026/02/services-single-img-2.jpg",
  featuresTitle: "Fresh & ESL Packaging Features",
  featuresSubtitle: "Reliable carton handling and hygienic filling for your premium beverage products.",
  features: [
    {
      title: "Bottom Heating & Sealing",
      description: "Uses controlled hot air to activate the polyethylene coating, creating a strong, leak-proof bottom seal before filling."
    },
    {
      title: "Bottom-Up Filling",
      description: "The filling nozzle lowers to the bottom of the carton and rises as it fills, minimizing foaming and splashing of dairy products."
    },
    {
      title: "HEPA Air Filtration",
      description: "The filling zone is protected by a laminar flow of HEPA-filtered air to maintain a highly sanitary environment."
    },
    {
      title: "Ultrasonic Cap Application",
      description: "Optional integrated cap applicator uses ultrasonic welding to attach screw caps to the carton blanks prior to forming."
    },
    {
      title: "Top Sealing Mechanism",
      description: "The gable top is precisely folded, heated, and compressed to form the classic, secure peak seal."
    },
    {
      title: "CIP Compatibility",
      description: "Fully compatible with automated Clean-In-Place systems to ensure the highest sanitary standards between production runs."
    }
  ]
};

const GableTopCartonPage = () => {
  return <PackagingPageLayout data={pageData} />;
};

export default GableTopCartonPage;
