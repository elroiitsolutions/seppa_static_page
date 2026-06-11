import React from 'react';
import PackagingPageLayout, { PackagingPageData } from '@/components/packaging/PackagingPageLayout';

const pageData: PackagingPageData = {
  title: "Aseptic Drum Filling Machines",
  breadcrumbName: "Aseptic Drum",
  overviewTitle: "Bulk Aseptic Drum Packaging",
  overviewDescription: "For bulk transport and storage of fruit purees, concentrates, tomato pastes, and dairy products, aseptic drum filling is the ultimate solution. Our Aseptic Bag-in-Drum fillers sterilize the fitment, fill the product, and seal the bag entirely within a sterile steam chamber, ensuring long-term ambient preservation of bulk ingredients.",
  overviewBenefits: [
    "Perfect for bulk food concentrates and purees",
    "Preserves product quality without refrigeration",
    "High-capacity filling (200L drums to 1000L bins)",
    "Prevents oxidation and contamination",
    "Robust construction for heavy-duty industrial use"
  ],
  overviewImage: "https://demo.awaikenthemes.com/yarnex/wp-content/uploads/2026/02/services-single-img-3.jpg",
  featuresTitle: "Industrial Bulk Sterility",
  featuresSubtitle: "Engineered for food processors handling high-volume, high-viscosity products.",
  features: [
    {
      title: "Steam Sterilization Chamber",
      description: "The bag's spout and filling valve are completely enclosed in a chamber flooded with live steam to guarantee 100% sterility."
    },
    {
      title: "Mass Flow Metering",
      description: "Utilizes highly accurate mass flow meters or load cells to ensure precise filling weights for large volume drums."
    },
    {
      title: "Decapping & Recapping",
      description: "Fully automated process removes the pre-sterilized cap, fills the bag, and securely recaps it without breaking the sterile barrier."
    },
    {
      title: "Adjustable Roller Conveyors",
      description: "Heavy-duty integrated roller conveyors automatically position empty drums and remove filled drums safely and efficiently."
    },
    {
      title: "High Viscosity Handling",
      description: "Specially designed wide-port filling valves prevent clogging and allow smooth flow of thick pastes and products with particulates."
    },
    {
      title: "Traceability System",
      description: "Integrated barcode/label printers provide complete batch traceability for each filled drum."
    }
  ]
};

const AsepticDrumPage = () => {
  return <PackagingPageLayout data={pageData} />;
};

export default AsepticDrumPage;
