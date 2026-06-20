import React from 'react';
import PackagingPageLayout, { PackagingPageData } from '@/components/packaging/PackagingPageLayout';

// Reusing generic industrial processing images due to generation limits
import bannerImg from '@/assets/processing/generated/processing_banner_1781759101340.png';
import overviewImg from '@/assets/blowing/generated/blowing_overview_1781759662496.png';
import img1 from '@/assets/processing/generated/processing_cb1_1781759122683.png';
import img2 from '@/assets/processing/generated/processing_cb2_1781759136791.png';
import img3 from '@/assets/blowing/generated/blowing_cb3_1781759707330.png';
import img4 from '@/assets/blowing/generated/blowing_cb1_1781759674231.png';
import over from '@/assets/processing/generated/processing_whychoose_1781759182691.png';

import meth1 from '@/assets/processing/generated/processing_meth1_1781759196548.png';
import meth2 from '@/assets/processing/generated/processing_meth2_1781759215088.png';
import meth3 from '@/assets/processing/generated/processing_meth3_1781759228926.png';
import meth4 from '@/assets/processing/generated/processing_meth4_1781759240871.png';

const pageData: PackagingPageData = {
  title: "KOMBOPURE Blow Fill Cap Technology",
  breadcrumbName: "KOMBOPURE",
  rootBreadcrumbName: "Equipments",
  rootBreadcrumbPath: "/equipments",
  headerImage: bannerImg.src,
  overviewTitle: "What is KOMBOPURE Blow Fill Cap Technology?",
  overviewDescription: "As plant floor space becomes increasingly premium and hygiene standards turn non negotiable, the modern beverage factory is phasing out fragmented production lines in favour of a unified blow fill seal machine. Traditionally, blowing bottles and filling them occurred in distinct silos, connected by extensive air conveyors that invited particulate risk and drove up energy loads.",
  overviewsubDescription: [
    "The KOMBOPURE system dismantles this outdated architecture by merging the entire process into a seamless monoblock system that operates far more efficiently than a conventional beverage filling machine.",
    "By synchronizing the stretch blow molding, filling, and capping modules into one streamlined kombo architecture, Seppa Solutions eliminates external contamination vectors while reducing energy overhead. Instead of exposing raw containers to an open factory floor, bottles remain cocooned within a controlled environment throughout their lifecycle. This structural integration cuts mechanical footprint while optimizing thermal management."
  ],
  overviewImage: overviewImg.src,
  contentBlocks: [
    {
      title: "How the Integrated Blow-Fill-Cap Process Works",
      paragraphs: [
        "The process starts from the infrared heater oven where PET preforms are allowed to rotate at uniform intervals to ensure that optimum heat is generated, resulting in the most efficient use of material with reduced electricity usage by up to 30%. After they are heated, the PET preforms are subjected to high pressure blow molding. Because it acts as an integrated blow fill seal machine, there is zero waiting time or exposure to ambient plant conditions before the container moves forward.",
        "The container is immediately transferred by a starwheel mechanism using neck handling technology directly to the filling valves. This continuous kombo configuration drastically simplifies the liquid packaging workflow compared to traditional line designs.",
        "In a standard setup utilizing a standalone beverage filling machine, the transport phase introduces multiple points of vulnerability where bottles can jam or pick up airborne contaminants. Instead, the KOMBOPURE system behaves as a fully isolated, synchronized automatic bottle filling machine, using electronic flow meters to inject the exact liquid volume into the freshly blown, hot sterile bottle, which is then immediately sealed by the capping turret."
      ],
      image1: img1.src,
      reverse: true
    },
    {
      title: "Key Features and Technical Advantages",
      paragraphs: [
        "The brilliance of this technology lies in its granular mechanical and digital control. Traditional production lines rely on friction heavy mechanical clutches and long conveyor accumulation tables to balance line speeds. In contrast, the KOMBOPURE platform utilizes centralized servomotor driven synchronization, ensuring that every pitch, rotation, and hand off occurs with millisecond accuracy.",
        "Furthermore, the air consumption optimization framework captures up to 40% of the high pressure exhaust air from the blow molding cycle and recycles it for pre blowing or pneumatic operations elsewhere within the blow fill seal machine.",
        "Hygiene is maintained via a positive pressure HEPA filtration enclosure that isolates the filling and capping zones. This ensures that the system performs as a cleanroom grade automatic bottle filling machine, driving microbial contamination risk down to absolute zero. Additionally, the integration of contactless, electromagnetic flow meters guarantees real time volume verification with an accuracy of +0.2%."
      ],
      image1: img2.src,
      reverse: false
    },
    {
      title: "Benefits of Combining Blowing, Filling, and Capping",
      paragraphs: [
        "By eliminating the accumulation conveyors that typically snake across hundreds of square meters of plant floor, manufacturers reclaim up to 45% of their facility footprint. This compact layout allows for localized cleanroom environments, meaning you only need to sanitize a small, enclosed zone rather than an entire room.",
        "Efficiency Takeaway: Reclaiming up to 45% of the production footprint reduces the factory area requiring cleanroom grade environmental conditioning, drastically lowering HVAC energy costs.",
        "When engineering a line for premium water, exposure to ambient air can alter the taste or introduce microscopic particulate. Deploying the KOMBOPURE as a specialized water bottling machine ensures product purity from the moment the PET plastic expands until the cap is locked. Labor efficiency also rises; instead of separate operators for the blower and capper, one technician oversees the integrated kombo system via a centralized HMI panel."
      ],
      image1: img3.src,
      reverse: true
    },
    {
      title: "Applications in Diverse Product Matrices",
      paragraphs: [
        "Flexibility is critical, and the KOMBOPURE excels at managing diverse product matrices. Regardless of whether it is the carbonation process for soft drinks or filling of hot juice drinks, the monoblock process is flexible in terms of quick changeover which helps reduce downtime to a few minutes. The proximity of the blow molds to the fill valves in high speed carbonation processes ensures no reduction in temperature.",
        "In sensitive juice manufacturing, where precise temperature regulation is paramount, the kombo setup shines by allowing for closed loop CIP and SIP protocols that clean the fluid path seamlessly.",
        "The structural safety provided by a high performance blow fill seal machine allows brands to down gauge their PET usage, cutting plastic consumption and enhancing their corporate sustainability metrics. Every milligram of plastic saved per bottle translates directly into thousands of dollars saved annually."
      ],
      image1: img4.src,
      reverse: false
    }
  ],
  whyChoose: {
    title: "Why Choose Seppa Solutions for Blow Fill Cap Machines?",
    description: "Selecting a technology partner for high speed automated packaging requires looking past raw metrics to analyze long term engineering pedigree and global support frameworks.",
    paragraphs: [
      "Seppa Solutions has spent decades pioneering monoblock architectures that balance maximum throughput with rock solid durability. Our machines are built with heavy duty stainless steel frames, advanced vibration dampening geometries, and top-tier electronics from global automation leaders.",
      "When you invest in our kombo machinery, you are not just purchasing hardware; you are onboarding a highly optimized, custom engineered manufacturing ecosystem designed to drive down your Total Cost of Ownership.",
      "Seppa’s commitment to innovation is visible in every sub assembly, from our low wear stretching rods to our predictive maintenance diagnostic software that flags potential issues before they cause unplanned downtime. Major global bottlers choose us because we understand that a high output beverage filling machine must deliver maximum Overall Equipment Effectiveness (OEE) day in and day out, across multi shift operations."
    ],
    image: over.src
  },
  methodology: {
    title: "KOMBOPURE Integration Workflow",
    steps: [
      {
        title: "Initial Analysis",
        description: "Whether it be for upgrading any line that is already being run, or even creating an entirely new plant, our highly trained staffs will be able to help you with integration.",
        image: meth1.src
      },
      {
        title: "Custom Engineering",
        description: "We design a localized cleanroom environment tailored to the exact footprint of your facility, reclaiming up to 45% of the standard production space.",
        image: meth2.src
      },
      {
        title: "Precision Installation",
        description: "Deployment of heavy duty stainless steel frames, advanced vibration dampening geometries, and centralized servomotor driven synchronization for millisecond accuracy.",
        image: meth3.src
      },
      {
        title: "Commissioning & Support",
        description: "Our team ensures the automatic bottling machine integrates smoothly into your business, setting up closed loop CIP/SIP protocols and predictive maintenance software.",
        image: meth4.src
      }
    ]
  },
  faqTitle: "Frequently Asked Questions",
  faqs: [
    {
      question: "What makes the energy efficiency of the KOMBOPURE system superior to standard packaging lines?",
      answer: "The energy efficiency stems from two core innovations: our optimized infrared preform heating ovens and our advanced air recovery system. By recycling up to 40% of the high pressure blowing air, we drastically reduce the load on your air compressors, yielding massive utility savings. Removing long air conveyor networks cuts electricity usage significantly."
    },
    {
      question: "How does the architecture improve product yield and minimize material waste?",
      answer: "Our integrated kombo design completely eliminates bottle transfer jams and tip overs. Furthermore, the system acts as an ultra precise water bottling machine by utilizing electromagnetic flow meters that measure filling volume in real time, eliminating overfilling and dropping product giveaway to less than 0.2%."
    },
    {
      question: "Why does this system beat a standard automatic bottle filling machine for long-term ROI?",
      answer: "While the initial capital expenditure might be higher, it functions as an all in one blower, filler, and capper. By wiping out massive conveyor systems, reducing maintenance points by 35%, and lowering footprint and labor requirements, the long term ROI is realized much faster, typically within 18 to 24 months."
    },
    {
      question: "Can the KOMBOPURE handle ultra lightweight bottles without compromising line speed?",
      answer: "Yes. As the bottles will be held by their necks constantly during the whole blowing, filling, and capping process, there is absolutely no mechanical stress on thin wall and ultralight weighted PET bottles. It is a very dependable bottle filling machine for brands wishing to meet sustainability objectives."
    },
    {
      question: "How does Seppa Solutions guarantee the aseptic integrity of the filling environment?",
      answer: "The complete filling and capping station is located in an environment protected by high efficiency particulate air filters, which provides Class 100 air quality conditions. This isolation ensures total sterility when the product is put into the bottle, serving as a great shield against contamination."
    }
  ]
};

const KombopurePage = () => {
  return <PackagingPageLayout data={pageData} />;
};

export default KombopurePage;
