"use client";

//import React from 'react';
import HomeHero from '@/components/home/HomeHero';
import AboutIndustries from '@/components/home/AboutIndustries';
import Services from '@/components/home/Services';
import OurIndustries from '@/components/home/OurIndustries';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import Projects from '@/components/home/Projects';
import HowItWorks from '@/components/home/HowItWorks';
import HomeFAQs from '@/components/home/HomeFAQs';
import ContactMap from '@/components/home/ContactMap';
import Testimonials from '@/components/home/Testimonials';
import LatestBlogs from '@/components/home/LatestBlogs';
import PetTechnology from '@/components/home/PetTechnology';
import Clients from '@/components/home/Clients';
import Partners from '@/components/home/Partners';
import Awards from '@/components/home/Awards';
import SpecialOffer from '@/components/home/SpecialOffer';

export default function HomeView() {
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
      <Testimonials />
      <Partners />
      <ContactMap />
      <HomeFAQs />
      <Awards />
      <LatestBlogs />
    </>
  );
}
