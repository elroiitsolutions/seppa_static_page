import React from 'react';
import PackagingPageLayout, { PackagingPageData } from '@/components/packaging/PackagingPageLayout';

const pageData: PackagingPageData = {
  title: "Ketchup & Sauce Filling Line Machines",
  breadcrumbName: "Ketchup & Sauce Filling Line Machines",
  rootBreadcrumbName: "Services",
  rootBreadcrumbPath: "/services",
  overviewTitle: "Premium Solutions for Ketchup & Sauce Filling Line Machines",
  overviewDescription: "We provide comprehensive, high-quality, and state-of-the-art solutions tailored for Ketchup & Sauce Filling Line Machines. Our systems are designed for maximum efficiency, precision, and durability, ensuring your production lines operate flawlessly.",
  overviewBenefits: [
    "High efficiency and operational speed",
    "Robust and hygienic design",
    "Low maintenance and downtime",
    "Advanced automation and real-time monitoring",
    "Eco-friendly and energy-saving technology"
  ],
  overviewImage: "https://demo.awaikenthemes.com/yarnex/wp-content/uploads/2026/02/services-single-img-1.jpg",
  featuresTitle: "Key Features of Our Ketchup & Sauce Filling Line Machines Systems",
  featuresSubtitle: "Discover the innovative features that set our solutions apart in the industry.",
  features: [
    {
      title: "Advanced Technology",
      description: "Incorporates the latest technological advancements to deliver superior performance and reliability."
    },
    {
      title: "Customizable Configurations",
      description: "Our solutions can be tailored to meet the specific requirements and scale of your operations."
    },
    {
      title: "Seamless Integration",
      description: "Designed to easily integrate with existing production lines and systems without major disruptions."
    },
    {
      title: "Quality Assurance",
      description: "Built with premium materials to meet rigorous international quality and safety standards."
    }
  ]
};

const Page = () => {
  return <PackagingPageLayout data={pageData} />;
};

export default Page;
