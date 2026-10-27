"use client";

import dynamic from 'next/dynamic';
import HomeHero from '@/components/home/HomeHero';
import AboutIndustries from '@/components/home/AboutIndustries';
import Services from '@/components/home/Services';

// Dynamic lazy imports for below-the-fold sections to optimize initial JS bundle
const OurIndustries = dynamic(() => import('@/components/home/OurIndustries'));
const Projects = dynamic(() => import('@/components/home/Projects'));
const PetTechnology = dynamic(() => import('@/components/home/PetTechnology'));
const HowItWorks = dynamic(() => import('@/components/home/HowItWorks'));
const SpecialOffer = dynamic(() => import('@/components/home/SpecialOffer'));
const Clients = dynamic(() => import('@/components/home/Clients'));
const Partners = dynamic(() => import('@/components/home/Partners'));
const ContactMap = dynamic(() => import('@/components/home/ContactMap'));
const HomeFAQs = dynamic(() => import('@/components/home/HomeFAQs'));
const Awards = dynamic(() => import('@/components/home/Awards'));
const LatestBlogs = dynamic(() => import('@/components/home/LatestBlogs'));

export default function HomeView({ latestBlogs }: { latestBlogs?: any[] }) {
  return (
    <>

      <HomeHero />

      <AboutIndustries />
      <Services />
      <OurIndustries />
      {/* <WhyChooseUs /> */}
      <Projects />
      <PetTechnology />
      <HowItWorks />
      <SpecialOffer />
      <Clients />
      {/* <Testimonials /> */}
      <Partners />
      <ContactMap />
      <HomeFAQs />
      <Awards />
      <LatestBlogs selected_blogs={latestBlogs} />
    </>
  );
}
