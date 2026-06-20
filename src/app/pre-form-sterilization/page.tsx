import React from 'react';
import PackagingPageLayout, { PackagingPageData } from '@/components/packaging/PackagingPageLayout';

// Reusing processing images due to generation limits, they fit the industrial context well
import bannerImg from '@/assets/processing/generated/processing_banner_1781759101340.png';
import overviewImg from '@/assets/processing/generated/processing_overview_1781759112202.png';
import img1 from '@/assets/processing/generated/processing_cb1_1781759122683.png';
import img2 from '@/assets/processing/generated/processing_cb2_1781759136791.png';
import over from '@/assets/processing/generated/processing_whychoose_1781759182691.png';

import meth1 from '@/assets/processing/generated/processing_meth1_1781759196548.png';
import meth2 from '@/assets/processing/generated/processing_meth2_1781759215088.png';
import meth3 from '@/assets/processing/generated/processing_meth3_1781759228926.png';
import meth4 from '@/assets/processing/generated/processing_meth4_1781759240871.png';

const pageData: PackagingPageData = {
  title: "PET Preform Sterilization with Hydrogen Peroxide",
  breadcrumbName: "Sterilization",
  rootBreadcrumbName: "Equipments",
  rootBreadcrumbPath: "/equipments",
  headerImage: bannerImg.src,
  overviewTitle: "What Is PET Preform Sterilization?",
  overviewDescription: "Before any liquid touches the inside of an aseptic bottle, the container has to be clean in a very specific, measurable sense. Not visually clean. Microbiologically clean. This distinction matters more than most people outside the industry realize, and it sits at the center of everything a competent pet preform manufacturer thinks about when designing for aseptic cold fill applications.",
  overviewsubDescription: [
    "The problem begins with the preform itself. There are several stages that are associated with the production of PET preforms: manufacturing, distribution, storage, and staging before getting into the filling lines. At each stage, there is an opportunity for microbial contamination. In particular, spore forming bacteria, fungi, and yeast can contaminate the equipment and survive.",
    "In this case, the closing of the gap takes place with hydrogen peroxide sterilization. It involves the process of vaporization of hydrogen peroxide at specific temperatures just seconds before blowing the preform into the blow molder. Hydrogen peroxide is an organic oxidizing agent. The mechanism used in aseptic packaging is exactly the same as was performed for millions of years: the destruction of proteins, cell walls, and viruses.",
    "The added oxygen atom oxidizes anything that comes into contact with it quickly. This becomes more intense at higher temperatures. Consequently, the effectiveness of aseptic filling machinery designed using vaporized hydrogen peroxide has surpassed conventional wet bath systems."
  ],
  overviewImage: overviewImg.src,
  contentBlocks: [
    {
      title: "Key Features of the SEPPA System",
      paragraphs: [
        "The core of any competent hydrogen peroxide sterilization system is where and how vapor is generated. SEPPA uses a patented single point vaporizer in which hot air and H2O2 are blended before injection into each preform. This matters because it eliminates the concentration gradients that plague multi point injection architectures. When vapor enters a preform from a single, precisely controlled origin, treatment uniformity is not aspirational. It is measurable and reproducible.",
        "Monitoring is continuous. A dedicated probe itself patented tracks active H2O2 concentration throughout the process cycle in real time. If any parameter drifts outside defined tolerances, the machine halts. This is not a soft alarm. The line stops because the alternative is releasing unsterilized containers into an aseptic environment.",
        "Standard systems found among generic pet preform manufacturers near me listings often rely on off line or semi automated sterilization steps that introduce manual handling between the sterilization and blowing stages. SEPPA's integrated architecture hands the sterilized preform directly into the blow molder without external transport, eliminating that exposure window entirely.",
        "Dried residues from the vaporization process stay confined inside the vaporizer unit itself not dispersed through the line. This makes cleaning validation straightforward, reduces maintenance burden, and keeps residue carryover into the final container at levels well below regulatory limits."
      ],
      image1: img1.src,
      reverse: true
    },
    {
      title: "Benefits of PET Preform Sterilization",
      paragraphs: [
        "The most commercially significant outcome of proper hydrogen peroxide sterilization is extended ambient shelf life. For beverages like fruit juices, plant based drinks, ready to drink teas, and flavoured waters, shelf life targets of 12 months without refrigeration depend entirely on the microbial load entering the sealed bottle being close to zero.",
        "Thermal processing can achieve sterilization, but it degrades heat sensitive compounds vitamins, volatile aromatics, colour pigments. Cold aseptic filling sidesteps that trade off. The product is processed at ultra high temperature upstream, cooled, and then filled into a container that has been independently sterilized by VHP.",
        "The efficiency case is less obvious but equally real. A pet preform making machine integrated within an aseptic line that sterilizes in line eliminates the logistics cost of pre sterilized container procurement, the cold chain requirements for sterile packaging, and the inventory complexity that comes with both. Plants running SEPPA systems fill from raw preform to sealed ambient bottle in a continuous, uninterrupted sequence."
      ],
      image1: img2.src,
      reverse: false
    }
  ],
  whyChoose: {
    title: "Why Choose SEPPA Sterilization Systems",
    description: "Companies evaluating filling line technology typically vet the sterilization subsystem separately from the blow fill cap sequence, because they understand it is the step most likely to create regulatory and food safety liability if it underperforms.",
    paragraphs: [
      "SEPPA built its hydrogen peroxide sterilization platform with that risk in mind. The patented vaporizer and concentration monitoring probe combination means the system does not rely on indirect evidence of effective treatment it measures what is actually happening in each container, every cycle.",
      "For preform bottle manufacturers looking at turnkey line solutions, SEPPA's integration architecture reduces the qualification burden considerably. The sterilization, blowing, filling, and capping steps are designed as a single system, validated together. A facility does not need to source separate equipment from different vendors and attempt to synchronize them.",
      "SEPPA is India's largest manufacturer of filling and capping machines, with deployed installations across dairy, juice, sauce, and water categories. Beverage producers across sensitive categories segments where every pet preform manufacturer in the supply chain is evaluated closely have chosen SEPPA's sterilization systems precisely because the engineering supports validation at commercial speeds."
    ],
    image: over.src
  },
  methodology: {
    title: "Process Methodology",
    steps: [
      {
        title: "Automated In-Feed",
        description: "The process sequence on a SEPPA line follows a fixed, validated pathway. Preforms are fed automatically from a bulk hopper or storage system, oriented, and introduced into the sterilization zone without manual handling, eliminating the human hand as a source of recontamination.",
        image: meth1.src
      },
      {
        title: "Vapor Injection",
        description: "Inside the sterilization zone, the patented vaporizer injects the H2O2 hot air mixture into each preform at defined concentration and temperature. Dwell time is set based on the log reduction requirement for the target product category and the line speed.",
        image: meth2.src
      },
      {
        title: "Sterile Hot Air Rinse",
        description: "After vapor treatment, a sterile hot air rinse removes residual H2O2. This dry vapor system does not introduce moisture that could interfere with downstream sealing, differentiating it sharply from wet sterilization approaches.",
        image: meth3.src
      },
      {
        title: "Direct Transfer",
        description: "The preform then passes directly to the blow molder inside a sterile air filtered housing. This closed chain architecture means the bottle takes its final shape in a protected environment and transfers immediately to the filling station.",
        image: meth4.src
      }
    ]
  },
  faqTitle: "Frequently Asked Questions",
  faqs: [
    {
      question: "Are hydrogen peroxide residues in the final bottle a safety concern?",
      answer: "At the concentrations used in dry vapor systems, and after the sterile air rinse step, H2O2 residues in the finished container fall well below the limits established by regulatory bodies including the FDA and EFSA. SEPPA's confined vaporizer design ensures that dried residues remain in the vaporizer unit."
    },
    {
      question: "How do I select the right pet preform manufacturer for an aseptic filling line?",
      answer: "The preform specification for aseptic applications is demanding. Wall thickness uniformity, neck finish geometry, and surface cleanliness affect sterilization efficacy. Request documentation of their surface bioburden control processes and verify that their preform geometry has been qualified on a VHP system."
    },
    {
      question: "How energy efficient is the hydrogen peroxide sterilization process?",
      answer: "Dry vapor sterilization uses significantly less energy than wet steam based systems. Because no water heating or condensate management is required, the thermal load is lower. SEPPA's single point vaporizer concentrates energy consumption in one precisely controlled location, simplifying energy monitoring."
    },
    {
      question: "How does SEPPA's system compare to standard preform bottle manufacturers?",
      answer: "Most preform bottle manufacturers supply preforms for non-aseptic applications. The continuous concentration monitoring and automatic line stop functionality of SEPPA provide a level of process control that generic or offline sterilization approaches cannot match."
    },
    {
      question: "Can the system handle both plastic preforms and aluminum or plastic caps?",
      answer: "Yes. SEPPA's hydrogen peroxide sterilization platform has been deployed for aluminum cap and plastic closure treatment in addition to PET preform decontamination. The same core vapor generation and monitoring technology applies, with modified injection configurations."
    }
  ]
};

const SterilizationPage = () => {
  return <PackagingPageLayout data={pageData} />;
};

export default SterilizationPage;
