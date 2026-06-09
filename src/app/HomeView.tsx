"use client";

//import React from 'react';
import HomeHero from '@/components/home/HomeHero';
import AboutIndustries from '@/components/home/AboutIndustries';
import Services from '@/components/home/Services';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import Projects from '@/components/home/Projects';
import HowItWorks from '@/components/home/HowItWorks';
import HomeFAQs from '@/components/home/HomeFAQs';
import ContactMap from '@/components/home/ContactMap';
import Testimonials from '@/components/home/Testimonials';
import LatestBlogs from '@/components/home/LatestBlogs';

export default function HomeView() {
  return (
    <>
  
      <HomeHero />

      <AboutIndustries />
      <Services />
      <WhyChooseUs />
      <Projects />
      <HowItWorks />
      <HomeFAQs />
      <ContactMap />
      <Testimonials />
      <LatestBlogs />
    </>
  );
}
