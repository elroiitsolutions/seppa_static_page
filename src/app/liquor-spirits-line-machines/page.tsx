import React from 'react';
import PackagingPageLayout, { PackagingPageData } from '@/components/packaging/PackagingPageLayout';
import bannerImg from '@/assets/packaging/generated/glass_bottling_wide_1781701406159.png';
import overviewImg from '@/assets/packaging/generated/glass_bottles_closeup_1781701419649.png';
import wineProd from '@/assets/packaging/generated/wine_bottles_closeup_1781701540385.png';

const pageData: PackagingPageData = {
  title: "Liquor & Spirits Line Machines",
  breadcrumbName: "Liquor & Spirits Line Machines",
  rootBreadcrumbName: "Services",
  rootBreadcrumbPath: "/services",
  headerImage: bannerImg.src,
  overviewTitle: "Engineering Precision: The Architecture of a High Performance Spirits Line",
  overviewDescription: "In the world of ultra premium alcohol, the final transition from maturation vessel to the consumer’s glass is a moment of critical vulnerability. And it is at this point that the spirits line acts as the final protector of brand purity and fluid quality.",
  overviewsubDescription: [
    "As the masters of the distillation process and having had years of experience working within the distillery plant, we know that bottling high alcohol content spirits does not just mean handling them; it means engineering them using utmost accuracy, safety, and an instinctive understanding of their highly volatile chemical nature.",
    "At Seppa Solutions, every spirits line is engineered such that it becomes an intrinsic extension of the master distiller’s vision with the exact flavour, colour, and scent profile retained all through."
  ],
  overviewImage: overviewImg.src,
  featuresTitle: "Key Components of a Complete Spirits Line",
  featuresSubtitle: "To achieve industry leading efficiency, a spirits line must be composed of modular, high spec hardware.",
  features: [
    {
      title: "Delicate Glass Integrity Management",
      description: "The process begins at the depalletizing station, where delicate glass integrity management is prioritized to prevent micro fractures. From there, the containers transition through an ionized air rinser."
    },
    {
      title: "Specialized Liquid Filling Machine",
      description: "Must be constructed from 316L stainless steel, utilizing non reactive seals that withstand high proof solvent exposure. The incorporation of a bottle filler machine makes it possible for the producer to perform changes without tools."
    },
    {
      title: "ATEX Rated Safety Integration",
      description: "Because safety is the backbone of any liquor manufacturing plant, all electrical components within a radius of the filling carousel must be ATEX rated."
    },
    {
      title: "Servo Motor Cap System",
      description: "This type of protection has been applied to the monoblock cap system in which torque is regulated by using servo motors. This guarantees that the sealing process is perfect and without any stress breaks in the glass neck."
    }
  ],
  whyChoose: {
    title: "Why Choose Seppa Solutions for Liquor & Spirits Lines?",
    description: "Distillers choose Seppa Solutions because we understand that building a liquor line is an exercise in precision engineering.",
    image: wineProd.src,
    paragraphs: [
      "We are not just equipment suppliers; we are process architects. We have spent years refining the mechanics of the liquid filling machine to ensure that high proof liquids are handled with care, maintaining compliance with both domestic and international safety standards.",
      "When you partner with us for your liquor manufacturing plant, you gain access to an unparalleled depth of expertise in ATEX compliance, vapor recovery systems, and glass handling dynamics. A Seppa designed spirits line is built to last, designed to evolve, and engineered to outperform. We take pride in the fact that our clients trust us with their most valuable products, knowing that our spirits bottling line technology will deliver perfect results, time and time again."
    ]
  },
  methodology: {
    title: "Liquor & Spirits Line Methodology: The Engineering Journey",
    subtitle: "The lifecycle of a bottle within our systems is choreographed for maximum efficiency.",
    steps: [
      {
        title: "Automated Glass Input & Rinse",
        description: "The bottling process begins with robotic depalletizing. Bottles are fed into an inverted rinser that uses air or spirit to clean the interior, ensuring no foreign particles enter the high value product.",
        image: bannerImg.src
      },
      {
        title: "Nitrogen Purge & Precision Filling",
        description: "Once the containers reach the liquid filling machine, they are purged with nitrogen. The filling process itself is the most critical stage; our non drip nozzle technology prevents splashing and surface tension issues, ensuring that the neck of the bottle remains perfectly clean a requirement for automated labelling.",
        image: overviewImg.src
      },
      {
        title: "Synchronized Capping Process",
        description: "Immediately following the fill, the bottle enters the capper. Whether handling T-corks, screw caps, or complex ROPP closures, the spirits bottling line applies exact torque to guarantee a hermetic seal.",
        image: wineProd.src
      },
      {
        title: "High Resolution Inspection",
        description: "Before leaving the liquor line, each unit passes through automated optical inspection. Cameras verify fill heights, closure integrity, and label placement, ensuring that only flawless products leave the facility.",
        image: overviewImg.src
      }
    ]
  },
  faqTitle: "Frequently Asked Questions",
  faqs: [
    {
      question: "How does maintenance on a spirits line differ from standard beverage lines?",
      answer: "A spirits line requires specialized protocols for ethanol resistance. Seal materials, lubrication types, and even the electronics due to the ATEX requirement must be audited more frequently to ensure there is no degradation or sparking risk, unlike a standard bottle filling machine which might handle non volatile liquids."
    },
    {
      question: "Why is a liquor line required to have ATEX rated components?",
      answer: "High proof alcohol creates a potentially explosive atmosphere, especially during the filling process. Every liquor manufacturing plant must mitigate this risk by using non sparking, explosion proof electrical components across the entire liquor line."
    },
    {
      question: "What makes your liquid filling machine more accurate than a standard model?",
      answer: "Our technology uses mass flow or high resolution electronic load cells rather than volumetric pistons. This ensures that the liquid filling machine delivers the exact weight regardless of temperature fluctuations, which is essential for consistent alcohol density."
    },
    {
      question: "How does Seppa ensure the long term reliability of a spirits bottling line?",
      answer: "We carry out remote diagnostic monitoring and adopt a proactive modular parts strategy. Thanks to the construction of each spirit bottling system using high performing standard parts, we ensure that our customers get reduced downtime and predictable maintenance schedules that maximize production capabilities."
    }
  ],
  applicationsTitle: "Applications of Liquor & Spirits Processing Lines",
  applicationsSubtitle: "Modern distilleries need a line that is as adaptable as it is durable.",
  applications: [
    {
      title: "Adaptable for All Scales",
      description: "Be your operation large scale and mass oriented or small scale and more artistic in nature, we have the technology that will work for you."
    },
    {
      title: "Diverse Bottle Configurations",
      description: "An adaptable liquid line is capable of processing bottles in many different configurations from elaborate and bulky bottles to the smaller high speed lightweight bottles without losing efficiency or ruining the integrity of the glass."
    },
    {
      title: "Consistent Alcohol Proof",
      description: "The application of a specialized bottle filling machine in these settings ensures that the alcohol proof remains consistent, as the system minimizes evaporation and air exposure."
    },
    {
      title: "Weight Based Electronic Filling",
      description: "By employing a spirits bottling line that utilizes weight based electronic filling, we ensure that operators can switch between products with minimal downtime. This flexibility is a hallmark of a world class liquor manufacturing plant."
    }
  ],
  contentBlocks: [
    {
      title: "What is a Liquor & Spirits Line?",
      image1: bannerImg.src,
      paragraphs: [
        "A professional spirits line is an integrated, high precision ecosystem designed to handle the complexities of volatile, high value liquids. Unlike standard beverage packaging, a liquor line must navigate the stringent requirements of explosion proof environments while maintaining micro liter accuracy in dosage. The line acts as the ultimate safeguard in a liquor production facility, which requires that the fusion between mechanical output and chemical integrity is essential.",
        "An effectively designed spirits line employs automated glass transport, atmosphere management, and rapid capping in order to guarantee that each bottle accurately portrays the meticulous process employed at the distillery. In designing a spirits bottling line, we treat your liquor as a precious commodity by using innovative technology in order to prevent oxidation and achieve perfect fill level accuracy on all SKUs."
      ],
      layout: "stacked"
    },
    {
      title: "Benefits of an Automated Spirits Line",
      image1: wineProd.src,
      paragraphs: [
        "The shift toward full automation in the distillery sector is driven by the demand for repeatability and risk mitigation. An automated spirits line provides three distinct advantages: Volumetric Accuracy: By utilizing high precision sensors, a modern liquid filling machine can maintain a variance of +1ml, significantly reducing product giveaway a critical metric for high margin products.",
        "Nitrogen Blanketing: To prevent oxidation, every spirits line we build incorporates neck space inverting. This pushes oxygen out of the headspace, extending shelf life and preserving the nuanced characteristics of aged liquids. Torque Consistency: Automated capping on a high speed spirits bottling line ensures each closure is applied with an exact Nm (Newton meter) force, preventing leaks during transit and ensuring a premium user experience upon opening.",
        "For a modern liquor manufacturing plant, the operational ROI is clear: lower waste, higher speed, and fewer safety related downtimes. A reliable liquor line is not an expense; it is a fundamental pillar of production quality."
      ],
      layout: "stacked"
    }
  ]
};

const Page = () => {
  return <PackagingPageLayout data={pageData} />;
};

export default Page;
