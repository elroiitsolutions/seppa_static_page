"use client";
import React from 'react';
import PackagingPageLayout, { PackagingPageData } from '@/components/packaging/PackagingPageLayout';

import bannerImg from '@/assets/processing/generated/processing_banner_1781759101340.png';
import overviewImg from '@/assets/blowing/generated/blowing_overview_1781759662496.png';
import img1 from '@/assets/processing/generated/processing_cb1_1781759122683.png';
import img2 from '@/assets/processing/generated/processing_cb2_1781759136791.png';
import over from '@/assets/processing/generated/processing_whychoose_1781759182691.png';

import meth1 from '@/assets/processing/generated/processing_meth1_1781759196548.png';
import meth2 from '@/assets/processing/generated/processing_meth2_1781759215088.png';
import meth3 from '@/assets/processing/generated/processing_meth3_1781759228926.png';
import meth4 from '@/assets/processing/generated/processing_meth4_1781759240871.png';
import { span } from 'framer-motion/client';
import Link from 'next/link';

const pageData: PackagingPageData = {
  title: "Modern Refrigeration System Design",
  breadcrumbName: "Refrigeration System",
  rootBreadcrumbName: "Equipments",
  rootBreadcrumbPath: "/equipments",
  headerImage: bannerImg.src,
  overviewTitle: "What is an Industrial Refrigeration System?",
  overviewDescription: "Modern production facilities depend heavily on a robust refrigeration system to sustain rigorous manufacturing workflows. What is an industrial refrigeration system? Simply put, it is the thermal backbone of modern manufacturing.",
  overviewsubDescription: [
    "From precise chemical synthesis inside exothermic reactors to sub zero food preservation, high performance temperature control dictates product quality, process safety, and throughput speed.",
    "At its thermodynamic core, a refrigeration system operates on a precise vapour compression cycle designed to continuously remove heat from a process medium and reject it into the environment.",
    "When evaluating an industrial refrigeration system, the refrigerant heat transfer coefficients must be maximized across both the latent heat absorption phase and the sensible cooling stages. Achieving high thermodynamic stability requires meticulous control over mass flow rates and pressure differentials, ensuring that the plant delivers stable, uninterrupted cooling regardless of peak external thermal disruptions."
  ],
  overviewImage: overviewImg.src,
  contentBlocks: [
    {
      title: "Seppa’s Advanced Engineering: Oil Chillers",
      paragraphs: [
        <>Engineered specifically for machinery maintenance and fluid integrity, our oil chillers feature a cooling capacity range from 1.75 kW to 35 kW. Seppa’s Air Cooled Chillers are a perfect solution for any application requiring a reliable industrial chiller. They are split into specialized configurations to maintain optimal fluid viscosity:<Link href='/equipments/oil-chillers' className='text-seppa-red hover:border-b hover:border-seppa-red'>Learn More</Link><br />
          <span className="font-bold"><span className='text-seppa-red text-xl'> • </span> Hydraulic Oil Chiller:</span> Prevents the thermal degradation of hydraulic fluids under heavy mechanical cycles <Link href="/equipments/hydraulic-chillers" className='text-seppa-red hover:border-b hover:border-seppa-red'>Learn More.</Link><br />
          <span className="font-bold"><span className='text-seppa-red text-xl'> • </span> Coolant Chiller:</span> Formulated to regulate cutting fluids and cooling liquids in heavy machining applications.<Link href="/equipments/coolant-chillers" className='text-seppa-red hover:border-b hover:border-seppa-red'>Learn More.</Link><br />
          <span className="font-bold"><span className='text-seppa-red text-xl'> • </span> Coolant Chiller I Dip:</span> Designed for direct immersion applications where fluids must be cooled within an active reservoir without external loop piping.<Link href="/equipments/coolant-chiller-ip" className='text-seppa-red hover:border-b hover:border-seppa-red'>Learn More.</Link><br />
        </>
      ],
      image1: img1.src,
      reverse: true
    },
    {
      title: "Air Cooled & Water Cooled Scroll Chillers",
      paragraphs: [
        "Air Cooled Scroll Chiller: With a versatile cooling capacity range from 1.75 kW to 1050 kW, Seppa’s cooled scroll chillers are distributed over four distinct series. These are broadly categorized based on the water quality used for the process and the ambient temperatures under which they are made to operate. All these chillers are made to be compatible for both indoor and outdoor installation.",
        "Water Cooled Scroll Chiller: Providing a dedicated cooling capacity range from 17.5 kW to 462 kW, Seppa’s Water Cooled Scroll Chillers are built with shell and tube condensers and evaporators which ensure high efficiencies and trouble free operation. Redundancy models are made available in chillers of capacities 10 TR and upwards to eliminate single points of failure."
      ],
      image1: img2.src,
      reverse: false,
      bgClass: "bg-light"
    },
    {
      title: "Energy Efficient & Smart Screw Chillers",
      paragraphs: [
        "Energy Efficient Chillers: Seppa has designed and built cooling systems and components that avoid excess energy consumption, thus cutting down operating expenses for the buyers who use our products. Seppa’s energy efficient models utilize modulating technology to scale output in real time, matching the heat load linearly.",
        "Smart Screw Chiller Series: For heavy duty manufacturing tasks, our smart screw series delivers a cooling capacity range from 140 kW to 875 kW. These units feature a highly efficient and proven Bitzer compressor operating seamlessly with eco friendly refrigerants like R134a, R407C, and R404A. A built in sub cooler is integrated to enhance performance during high ambient conditions."
      ],
      image1: img1.src,
      reverse: true
    }
  ],
  featuresTitle: "Key Components of a Refrigeration System",
  featuresSubtitle: "To achieve extreme precision and continuous reliability, every key component within the refrigeration system must be engineered for maximum thermal efficiency. A breakdown of these core components reveals a tightly synchronized mechanical network:",
  features: [
    { title: "High-Efficiency Compressors", description: "Whether utilizing advanced scroll technology or heavy duty twin screw configurations, the compressor establishes the pressure differential necessary for the phase change cycle. Modern systems integrate Variable Frequency Drives (VFDs) to maximize the Compressor Energy Efficiency Ratio." },
    { title: "Premium Evaporators & Condensers", description: "Utilizing highly optimized brazed plate heat exchangers or robust shell and tube configurations guarantees superior heat transfer coefficients. Every heavy duty refrigeration plant must be built with premium, corrosion resistant components." },
    { title: "Intelligent Expansion Valves", description: "Electronic expansion valves (EEVs) modulate the precise refrigerant mass flow entering the evaporator. By continuously tracking superheat values via sensors, the EEV prevents liquid slugging back into the compressor." },
    { title: "Intelligent PLC Control Panels", description: "The brain of the infrastructure. Integrating a smart PLC control layer ensures that the refrigeration system responds dynamically to load fluctuations, logs real time operational data, and communicates seamlessly with centralized SCADA systems." }
  ],
  applicationsTitle: "Applications of Refrigeration Systems Across Industries",
  applicationsSubtitle: "The adaptability of modern thermal regulation systems allows them to serve as foundational components across diverse sectors. The versatility of a heavy duty industrial refrigeration system is evident in cold chain logistics and deep freeze warehousing.",
  applications: [
    { title: "Brewery Operations", description: "The necessity of a dedicated water chilling plant in brewery operations cannot be overstated; accurate wort cooling and fermentation temperature management directly dictate yeast health and flavour profiles." },
    { title: "Polymer Industry", description: "An industrial chiller is vital for high temperature plastic molding processes. Rapid, uniform heat extraction from molds increases output and eliminates structural warping." },
    { title: "Large Scale Manufacturing", description: "For facilities requiring large scale fluid cooling, a custom engineered water chilling plant provides centralized control over large scale manufacturing pipelines." }
  ],
  whyChoose: {
    title: "Why Seppa is the Best Choice for Industrial Refrigeration Solutions",
    description: "Forward thinking manufacturers trust our tailored refrigeration system designs because they are built for the future.",
    paragraphs: [
      "Our pedigree is reflected in our selection of durable refrigeration equipment designed for rigorous environments, ensuring your entire refrigeration plant performs flawlessly under extreme environmental conditions.",
      "We bring unmatched mastery in engineering a high efficiency industrial refrigeration system that grows with your business needs, backed by decades of technical expertise and smart IoT enabled telemetry."
    ],
    image: over.src
  },
  methodology: {
    title: "Our Refrigeration System Design & Implementation Process",
    steps: [
      {
        title: "Thermal Load Assessment",
        description: "Phase one begins with an extensive thermal load calculation before defining any refrigeration system parameters. We evaluate flow rates, delta T targets, and ambient extremes.",
        image: meth1.src
      },
      {
        title: "Custom Plant Sizing",
        description: "The next phase moves to custom refrigeration plant sizing based on peak load conditions, choosing between scroll or screw architectures.",
        image: meth2.src
      },
      {
        title: "Seamless System Integration",
        description: "We engineer the smooth integration of an industrial chiller with existing production lines, ensuring proper hydraulics, minimal pressure drops, and electrical safety.",
        image: meth3.src
      },
      {
        title: "Commissioning & Testing",
        description: "Through rigorous pressure testing, evacuation, and hot-run testing, we seamlessly transition from design to full water chilling plant installation.",
        image: meth4.src
      }
    ]
  },
  faqTitle: "Frequently Asked Questions (FAQ)",
  faqs: [
    {
      question: "What factors influence the energy consumption of a water chilling plant?",
      answer: "Operating a heavy duty water chilling plant requires optimizing the Compressor Energy Efficiency Ratio (EER). Energy consumption is primarily influenced by the lift temperature (the difference between evaporation and condensation temperatures), fouled heat exchanger tubes, and inadequate compressor capacity modulation. Using a multi compressor setup or VFD driven screw compressors mitigates these losses, maximizing the overall efficiency of your centralized water chilling plant under variable ambient temperatures."
    },
    {
      question: "Why is preventive maintenance critical for a refrigeration system?",
      answer: "Proactive maintenance of your refrigeration system prevents refrigerant fluid leaks and maintains high heat transfer coefficients. Scale accumulation of just 1mm in condenser tubes can degrade efficiency by up to 40%. Scheduled audits protect structural parts, verify oil levels in compressors, and check sensor calibration to keep the entire thermal loop operating safely."
    },
    {
      question: "How often should heavy duty refrigeration equipment undergo technical audits?",
      answer: "Regular technical inspections ensure that your specialized refrigeration equipment operates at peak thermodynamic efficiency. We recommend quarterly checks for minor parameters and a comprehensive annual thermodynamic audit. Investing in high grade refrigeration equipment minimizes structural wear and tear over decades of continuous use, but proactive care remains mandatory."
    },
    {
      question: "What is the typical operational life cycle of a high capacity refrigeration plant?",
      answer: "With proper maintenance, a premier industrial refrigeration plant can operate efficiently for 20 to 25 years. This thermodynamic longevity makes a Seppa refrigeration plant a highly secure, long term capital asset for any manufacturing operation."
    },
    {
      question: "What are the primary differences between an air cooled and a water cooled industrial chiller?",
      answer: "An air cooled system rejects heat utilizing ambient air blown across condenser fins via fans, making it simpler to install. Conversely, a water cooled configuration utilizes an external cooling tower loop to reject heat, offering superior thermodynamic efficiency at high ambient temperatures. Choosing the right industrial chiller depends heavily on available space and local water quality."
    }
  ]
};

const RefrigerationSystemPage = () => {
  return <PackagingPageLayout data={pageData} />;
};

export default RefrigerationSystemPage;
