import React from 'react';
import PackagingPageLayout, { PackagingPageData } from '@/components/packaging/PackagingPageLayout';

const pageData: PackagingPageData = {
  title: "Can Filling & Packaging Machines",
  breadcrumbName: "Can",
  overviewTitle: "High-Speed Aluminum Can Packaging Lines",
  overviewDescription: "Our comprehensive Can Filling and Seaming machines are designed for the beverage industry, offering high-speed solutions for carbonated soft drinks, beer, energy drinks, and juices. Engineered for precision, our can packaging lines ensure zero product waste, perfect seaming, and extended shelf life.",
  overviewBenefits: [
    "High-speed filling up to 120,000 cans per hour",
    "Precise volumetric and electronic filling valves",
    "Advanced double-seaming technology for leak-proof sealing",
    "Hygienic design compliant with food safety standards",
    "Automated CIP (Clean-In-Place) integration"
  ],
  overviewImage: "https://demo.awaikenthemes.com/yarnex/wp-content/uploads/2026/02/services-single-img-1.jpg",
  featuresTitle: "Innovative Can Packaging Technology",
  featuresSubtitle: "Explore the features that make our can packaging lines the industry standard for beverage manufacturers.",
  features: [
    {
      title: "Isobaric Filling",
      description: "Ensures carbonated beverages are filled under pressure to prevent foaming and maintain high carbonation levels."
    },
    {
      title: "Oxygen Elimination",
      description: "CO2 flushing technology removes oxygen before seaming, preserving the flavor and extending the shelf life of beer and juices."
    },
    {
      title: "Rotary Seaming Unit",
      description: "High-speed rotary seamers provide consistent, hermetic double seams, protecting your product from contamination."
    },
    {
      title: "Flexibility & Changeover",
      description: "Quick-change handling parts allow for easy transition between different can sizes (e.g., sleek, standard, slim) with minimal downtime."
    },
    {
      title: "Automatic Lid Feeding",
      description: "Continuous and automated lid feeding systems ensure non-stop production and reduce operator intervention."
    },
    {
      title: "Real-Time Monitoring",
      description: "Advanced sensors and cameras monitor fill levels and seam quality in real-time, automatically rejecting defective cans."
    }
  ]
};

const CanPage = () => {
  return <PackagingPageLayout data={pageData} />;
};

export default CanPage;
