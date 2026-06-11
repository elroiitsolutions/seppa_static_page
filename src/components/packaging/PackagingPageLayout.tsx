"use client";
import React from 'react';
import PageHeader from '@/components/layout/PageHeader';
import OverviewSection from './OverviewSection';
import FeaturesSection, { FeatureItem } from './FeaturesSection';
import PackagingWhyChooseUs from './PackagingWhyChooseUs';
import Clients from '@/components/home/Clients';
import Testimonials from '@/components/home/Testimonials';
import Partners from '@/components/home/Partners';
import PackagingContact from './PackagingContact';
import HomeFAQs from '@/components/home/HomeFAQs';
import Awards from '@/components/home/Awards';
import LatestBlogs from '@/components/home/LatestBlogs';

export interface PackagingPageData {
  title: string;
  breadcrumbName: string;
  headerImage?: string;
  overviewTitle: string;
  overviewDescription: string;
  overviewBenefits: string[];
  overviewImage: string;
  featuresTitle: string;
  featuresSubtitle: string;
  features: FeatureItem[];
}

interface PackagingPageLayoutProps {
  data: PackagingPageData;
}

const PackagingPageLayout: React.FC<PackagingPageLayoutProps> = ({ data }) => {
  return (
    <div className="overflow-hidden">
      {/* Banner/Hero Section */}
      <PageHeader 
        title={data.title} 
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Packaging', path: '/pack.html' },
          { name: data.breadcrumbName }
        ]} 
      />

      {/* Overview Section */}
      <OverviewSection 
        title={data.overviewTitle}
        description={data.overviewDescription}
        benefits={data.overviewBenefits}
        imageSrc={data.overviewImage}
      />

      {/* Features & Advantages */}
      <FeaturesSection 
        title={data.featuresTitle}
        subtitle={data.featuresSubtitle}
        features={data.features}
      />

      {/* Why Choose SEPPA */}
      <PackagingWhyChooseUs />

      {/* Our Clients */}
      <Clients />

      {/* Client Testimonials */}
      <Testimonials />

      {/* Our Partners */}
      <Partners />

      {/* Awards & Achievements */}
      <Awards />

      {/* FAQ Section */}
      {/* Reusing HomeFAQs for now as per generic structure */}
      <HomeFAQs />

      {/* Contact Us */}
      <PackagingContact />

      {/* Blog Section */}
      <LatestBlogs />
    </div>
  );
};

export default PackagingPageLayout;
