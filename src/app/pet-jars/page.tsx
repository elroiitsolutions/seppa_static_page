import React from 'react';
import PackagingPageLayout, { PackagingPageData } from '@/components/packaging/PackagingPageLayout';

const pageData: PackagingPageData = {
  title: "PET Jar Blowing Machine",
  breadcrumbName: "PET Jars Machine",
  overviewTitle: "Wide-Mouth PET Jar Blow Moulding",
  overviewDescription: "The PET Jar Blowing Machine is specifically designed to produce wide-mouth PET containers and jars. Perfect for packaging cosmetics, dry foods, pickles, and confectionery, this machine utilizes specialized heating and stretching technology to handle large neck diameters with unparalleled precision.",
  overviewBenefits: [
    "Specialized for wide-mouth jar production",
    "Even heat distribution for large preforms",
    "High clarity and strength in finished jars",
    "Adjustable neck positioning for different jar sizes",
    "Stable and vibration-free operation"
  ],
  overviewImage: "https://demo.awaikenthemes.com/yarnex/wp-content/uploads/2026/02/services-single-img-3.jpg",
  featuresTitle: "Specialized Jar Production Features",
  featuresSubtitle: "Engineered specifically to tackle the unique challenges of wide-mouth PET container manufacturing.",
  features: [
    {
      title: "Intensive Heating Zone",
      description: "Features specially designed heating modules that concentrate heat on thick-walled preforms required for large jars."
    },
    {
      title: "Custom Neck Protection",
      description: "Advanced cooling and shielding mechanisms protect the wide neck thread from deformation during the intense heating process."
    },
    {
      title: "Heavy-Duty Clamping",
      description: "Reinforced clamping units provide the massive force needed to blow large-volume jars without visible parting lines."
    },
    {
      title: "Flexible Capacity",
      description: "Capable of blowing jars ranging from small 200ml cosmetic containers to massive 5-liter dry food storage jars."
    },
    {
      title: "User-Friendly HMI",
      description: "Intuitive touch screen interface allows operators to easily save and recall specific heating and blowing parameters for different jar types."
    },
    {
      title: "Automated Preform Loading",
      description: "Optional automated wide-mouth preform loading systems can be integrated to increase production speed and reduce labor."
    }
  ]
};

const PetJarsMachinePage = () => {
  return <PackagingPageLayout data={pageData} />;
};

export default PetJarsMachinePage;
