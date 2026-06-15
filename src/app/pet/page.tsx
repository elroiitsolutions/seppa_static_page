"use client";
import React from 'react';
import PageHeader from '@/components/layout/PageHeader';
import PetWhyChooseUs from '@/components/pet/PetWhyChooseUs';
import Clients from '@/components/home/Clients';
import Testimonials from '@/components/home/Testimonials';
import Partners from '@/components/home/Partners';
import PetContact from '@/components/pet/PetContact';
import Awards from '@/components/home/Awards';
import LatestBlogs from '@/components/home/LatestBlogs';
import Accordion from '@/components/ui/Accordion';
import AnimatedHeading from '@/components/ui/AnimatedHeading';
import { motion } from 'framer-motion';

const petFaqs = [
  {
    question: "Why are PET plastic bottles better than glass for beverage packaging?",
    answer: "PET plastic bottles weigh up to 90% less than glass, which cuts transportation costs and eliminates breakage losses from factory to customer. They offer strong barrier properties against moisture, oxygen, and CO2, making them suitable for water, carbonated drinks, juices, and dairy. PET plastic bottles mould into virtually any shape or colour, giving brands shelf differentiation at a lower package cost."
  },
  {
    question: "What is the pet bottle manufacturing plant cost for SEPPA machines?",
    answer: "Pet bottle manufacturing plant cost depends on automation level, line speed, and cavity count. SEPPA's semi automatic SSB-D series has the lowest entry point, suitable for small and medium producers. Fully automatic SSB-SLE configurations cost more upfront but deliver 1,500 to 2,000 bottles per cavity per hour, bringing the per bottle cost down considerably over time. SEPPA provides transparent cost breakdowns on request for every series."
  },
  {
    question: "How do I find a pet bottle factory near me using SEPPA technology?",
    answer: "SEPPA machines are deployed globally across hundreds of facilities, so a pet bottle factory near me in your region is quite likely already running SEPPA equipment. Contact SEPPA directly their team can connect you with nearby reference plants or guide you through setting up your own production line."
  },
  {
    question: "What should I look for in a plastic bottle maker supplier?",
    answer: "A reliable plastic bottle maker should supply a complete line blower, rinse, filler, capper, labeled, and palletizer all engineered to run together. A good supplier also provides after sales support, spare parts, and operator training. SEPPA covers all of this with semi-auto to fully automatic configurations and a turnkey line option."
  },
  {
    question: "Can a plastic bottle factory produce recycled plastic bottles with rPET?",
    answer: "Yes. A plastic bottle factory running SEPPA machines can produce recycled plastic bottles using rPET without separate tooling or machine modifications. rPET has a narrower processing temperature window, but SEPPA's individually controlled infrared lamps and camera feedback manage blend ratios smoothly. Market demand for sustainable rPET packaging is rising fast, and SEPPA equipment handles that transition without compromise on output speed or bottle quality."
  }
];

const PetPage: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Banner/Hero Section */}
      <PageHeader 
        title="PET Solutions" 
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Packaging', path: '/services/packaging' },
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
      <section className="py-24 bg-[#fdfbf6] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://demo.awaikenthemes.com/yarnex/wp-content/uploads/2026/02/bg-pattern.png')] bg-repeat pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-8 items-start">
            <motion.div 
              className="w-full lg:w-5/12 lg:sticky lg:top-32"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <AnimatedHeading 
                text="FAQ’S" 
                elementType="h2" 
                className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-[#101934] leading-tight mb-6 max-w-[400px]" 
              />
            </motion.div>
            <motion.div 
              className="w-full lg:w-7/12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Accordion items={petFaqs} defaultOpenIndex={0} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Awards & Achievements */}
      <Awards />

      {/* Blog Section */}
      <LatestBlogs />
    </div>
  );
};

export default PetPage;
