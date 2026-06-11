"use client";
import React from 'react';
import PageHeader from '@/components/layout/PageHeader';
import PetWhyChooseUs from '@/components/pet/PetWhyChooseUs';
import Clients from '@/components/home/Clients';
import Testimonials from '@/components/home/Testimonials';
import Partners from '@/components/home/Partners';
import PetContact from '@/components/pet/PetContact';
import HomeFAQs from '@/components/home/HomeFAQs';
import Awards from '@/components/home/Awards';
import LatestBlogs from '@/components/home/LatestBlogs';

const PetPage: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Banner/Hero Section */}
      <PageHeader 
        title="PET Solutions" 
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
          { name: 'PET' }
        ]} 
      />

      {/* Why Choose SEPPA */}
      <PetWhyChooseUs />

      {/* Our Clients */}
      <Clients />

      {/* Client Testimonials */}
      <Testimonials />

      {/* Our Partners */}
      <Partners />

      {/* Contact Us */}
      <PetContact />

      {/* FAQ Section */}
      <HomeFAQs />

      {/* Awards & Achievements */}
      <Awards />

      {/* Blog Section */}
      <LatestBlogs />
    </div>
  );
};

export default PetPage;
