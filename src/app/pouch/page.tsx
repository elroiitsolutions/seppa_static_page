import React from 'react';
import PackagingPageLayout, { PackagingPageData } from '@/components/packaging/PackagingPageLayout';

const pageData: PackagingPageData = {
  title: "Pouch Packaging Machines",
  breadcrumbName: "Pouch",
  overviewTitle: "Flexible Pouch Filling & Sealing",
  overviewDescription: "Pouch packaging is rapidly growing due to its convenience and lower carbon footprint. Our Form-Fill-Seal (FFS) and pre-made pouch packaging machines offer versatile solutions for liquids, pastes, powders, and granules. Designed for high efficiency, they produce stand-up pouches, spouted pouches, and flat sachets with perfect seal integrity.",
  overviewBenefits: [
    "High versatility for various product types",
    "Reduced material costs compared to rigid packaging",
    "Exceptional seal strength and leak prevention",
    "Support for zippers, spouts, and tear notches",
    "Compact machine footprint"
  ],
  overviewImage: "https://demo.awaikenthemes.com/yarnex/wp-content/uploads/2026/02/services-single-img-3.jpg",
  featuresTitle: "Advanced Flexible Packaging Features",
  featuresSubtitle: "Our pouch machines deliver speed, accuracy, and strong seals for maximum product protection.",
  features: [
    {
      title: "Rotary & Linear Options",
      description: "Available in both rotary designs for pre-made pouches and linear Form-Fill-Seal (FFS) systems for roll-stock films."
    },
    {
      title: "Precision Dosing",
      description: "Equipped with high-accuracy piston fillers for liquids/pastes and multi-head weighers for dry solids."
    },
    {
      title: "Ultrasonic Sealing",
      description: "Optional ultrasonic sealing technology provides clean, strong seals even through product contamination in the seal area."
    },
    {
      title: "Spout Insertion",
      description: "Automated spout insertion and sealing capabilities for liquid products like juices, purees, and detergents."
    },
    {
      title: "Nitrogen Flushing",
      description: "Integrated nitrogen gas flushing to displace oxygen, extending the shelf life of sensitive food products."
    },
    {
      title: "Quick Format Change",
      description: "Tool-less adjustment mechanisms allow operators to switch between different pouch widths and lengths in minutes."
    }
  ]
};

const PouchPage = () => {
  return <PackagingPageLayout data={pageData} />;
};

export default PouchPage;
