import React from 'react';
import PackagingPageLayout, { PackagingPageData } from '@/components/packaging/PackagingPageLayout';

import bannerImg from '@/assets/processing/generated/processing_banner_1781759101340.png';
import overviewImg from '@/assets/processing/generated/processing_overview_1781759112202.png';
import img1 from '@/assets/processing/generated/processing_cb1_1781759122683.png';
import img2 from '@/assets/processing/generated/processing_cb2_1781759136791.png';
import img3 from '@/assets/processing/generated/processing_cb3_1781759152456.png';
import img4 from '@/assets/processing/generated/processing_cb4_1781759168304.png';
import over from '@/assets/processing/generated/processing_whychoose_1781759182691.png';
import meth1 from '@/assets/processing/generated/processing_meth1_1781759196548.png';
import meth2 from '@/assets/processing/generated/processing_meth2_1781759215088.png';
import meth3 from '@/assets/processing/generated/processing_meth3_1781759228926.png';
import meth4 from '@/assets/processing/generated/processing_meth4_1781759240871.png';

const pageData: PackagingPageData = {
  title: "Processing Equipment",
  breadcrumbName: "Processing",
  rootBreadcrumbName: "Equipments",
  rootBreadcrumbPath: "/equipments",
  headerImage: bannerImg.src,
  overviewTitle: "SEPPA Processing Equipment: Built for Industrial Scale Output",
  overviewDescription: "There is a version of beverage and food manufacturing where things go wrong slowly inconsistent extraction yields, unexpected downtime, batches that miss quality specs by just enough to hurt. Most of the time, the processing equipment’s are the reason. Not operator error. Not raw material variance. The processing equipment’s themselves.",
  overviewsubDescription: [
    "SEPPA Solutions was built around one belief: the engineering decisions made at the system design stage determine everything downstream. The thermal tolerances you specify, the hygienic surface finishes you require, the control architecture you integrate from day one these are not details. They are your quality floor. Our processing equipment’s are designed to set that floor high and hold it there, cycle after cycle, across every production shift.",
    "When manufacturers invest in the right processing equipment’s from the start, they are not just buying steel and motors. They are buying consistent product character, auditable process control, and a production system that does not quietly degrade over three years. That distinction matters more than most buyers realise until they have experienced both."
  ],
  overviewImage: overviewImg.src,
  contentBlocks: [
    {
      title: "Types of Processing Equipment We Offer",
      paragraphs: [
        "SEPPA's product range covers the full extraction to packaging continuum. For liquid processing equipment, we supply centrifugal and membrane filtration units capable of handling viscosities from light beverages to dense fruit concentrates. Our thermal treatment stations including plate heat exchangers and tubular pasteurizers achieve +0.5°C temperature accuracy across continuous flow volumes up to 50,000 litres per hour.",
        "Our concentration systems use falling film evaporation, which recovers more than 85% of thermal energy through multi effect configurations. Extraction units are available in both counter current and co current configurations, depending on the solute sensitivity of your raw material.",
        "The result is a complete processing capability that spans extraction, thermal treatment, concentration, filtration, and deaeration all engineered as an integrated system rather than a collection of standalone machines. Whether your plant handles fruit juices, dairy, herbal extracts, or fermented beverages, the system fits without forcing you to compromise on throughput.",
        "We also supply food processing equipment for solid liquid separation, homogenisation, and deaeration steps that most manufacturers treat as afterthoughts but which quietly determine shelf life, texture, and microbial load. Every food processing equipment unit we supply is designed to operate as part of a broader process, not in isolation."
      ],
      image1: img1.src,
      reverse: true
    },
    {
      title: "Automation and Process Control Integration",
      paragraphs: [
        "SEPPA integrates Siemens S7 and Allen Bradley PLC platforms as standard, with open OPC-UA protocols for connectivity to any SCADA or MES layer the customer already runs. Our liquid processing equipment ships with pre configured PID loops for temperature, flow, and pressure tested and tuned before installation, not during commissioning.",
        "The HMI shows real time trends for every process variable, with configurable alarm thresholds and automatic batch records stored in a SQL database. Regulatory compliance FDA 21 CFR Part 11, for example is handled through audit trail logging and electronic signature workflows built into the software.",
        "Predictive maintenance is not a marketing phrase in our processing equipment's. Vibration sensors on all pump housings and CIP skids feed into a condition monitoring module that flags bearing wear 3–6 weeks before failure, based on frequency domain analysis. On average, customers using this feature see unplanned downtime drop by 60–70% within the first year. That alone changes the economics of running complex liquid processing equipment at scale."
      ],
      image1: over.src,
      reverse: false,
      bgClass: "bg-light"
    },
    {
      title: "Quality, Hygiene, and Safety Standards",
      paragraphs: [
        "Our food processing equipment is designed to EHEDG Type EL Asept Class I and 3 A Sanitary Standards both of which specify geometry, surface finish, and drainage criteria that prevent contamination under real production conditions, not just in test labs.",
        "CIP circuits are fully automated and validated. Cleaning cycles are documented with conductivity and temperature logging, so every clean is auditable. This matters if you are supplying retailers or food service customers who require FSSC 22000 or BRC certification the evidence comes out of the system automatically.",
        "Pressure relief devices, interlocked access panels, and ATEX rated electrical components in solvent handling zones are standard. The complete processing system is CE marked and comes with full technical documentation for IQ and OQ protocols. Processing equipment's of this specification do not just protect the product they protect the people operating them."
      ],
      image1: img1.src,
      reverse: true,
      bgClass: "bg-white"
    }
  ],
  featuresTitle: "Key Features of Our Processing Systems",
  featuresSubtitle: "",
  features: [
    { 
      title: "Materials and Surface Standards", 
      description: "Every wetted surface in our liquid processing equipment is fabricated from AISI 316L stainless steel with electropolished Ra ≤ 0.8 µm finishes. That is not an aesthetic choice. Surface roughness at that level prevents biofilm formation in a measurable way meaning your CIP cycles work as designed, rather than fighting contamination that should not exist. All gaskets and seals are FDA-compliant EPDM or PTFE, rated for steam-in-place (SIP) temperatures up to 140°C. The complete processing line from inlet to discharge is designed with no dead legs, no horizontal pipe runs without drainage gradient, and no internal crevices where product residue can pool." 
    },
    { 
      title: "Modular Design Logic", 
      description: "Our processing machinery uses a skid based modular architecture. A pilot scale 500 L/h unit can be upgraded to 5,000 L/h by adding parallel processing modules, not by replacing the base system. This matters for capital planning. Your initial investment in processing equipment’s does not become obsolete when volumes grow the processing equipment’s scale with the business. Heat exchange modules are designed for tool free plate removal, which cuts maintenance labour by roughly 40% compared with welded frame alternatives. The same processing machinery platform that runs at 1,000 L/h today is the same one that runs at 4,000 L/h after a module addition same PLC, same CIP skid, same operator interface." 
    },
    { 
      title: "Energy Efficiency", 
      description: "Across our installed base, customers running our processing machinery report 18–25% lower energy consumption compared with their previous systems. The gains come from three sources: better insulation on thermal circuits, variable frequency drives on all pump motors, and heat recovery loops that capture and redirect thermal energy between process stages." 
    },
    {
      title:"Water & Water Sparkling",
      description: "SEPPA's processing equipment includes carbonators, saturators, and deaerators rated for capacities from 1,000 L/h through 30,000 L/h. These are not aquarium grade systems. They run on carbon dioxide pressures up to 10 bar, with jacketed stainless steel vessels and integrated refrigeration loops to ensure stable dissolution regardless of inlet water temperature fluctuations. The controls platform allows you to preset T CO₂ setpoints and flow rates: water quality can vary, but the final carbonation level won't.",
      link: "/processing/water-sparkling"
    }
  ],
  whyChoose: {
    title: "Why Choose SEPPA Solutions for Processing Equipment?",
    description: "SEPPA Solutions delivers end-to-end processing systems engineered for absolute reliability, maximum yield, and uncompromised hygiene.",
    paragraphs: [
      "We do not supply off-the-shelf catalog units. Every processing line—from thermal treatment to filtration—is custom-engineered following a rigorous site audit. We account for your specific raw materials, utility constraints, and throughput targets to guarantee performance before metal is even cut.",
      "Our systems are built on a foundation of industrial-grade durability and modularity. By integrating top-tier components and an open-architecture automation framework, we ensure that your initial capital investment scales seamlessly alongside your business growth, eliminating premature obsolescence.",
      "Post-installation support is integrated directly into our supply model. With comprehensive IQ/OQ documentation, on-site sterile commissioning, and advanced remote diagnostic capabilities, we ensure your processing plant operates at peak Overall Equipment Effectiveness (OEE) from day one."
    ],
    image: over.src
  },
  methodology: {
    title: "How SEPPA Designs and Builds Processing Equipment",
    steps: [
      {
        title: "Site Audit",
        description: "The process starts with a site audit. Engineers walk the facility, measure available utilities steam, chilled water, compressed air, drainage gradients review the raw material specifications, and benchmark existing yield data. From there, the team produces a process flow diagram and a P&ID, reviewed and signed off before any fabrication begins.",
        image: meth1.src
      },
      {
        title: "Modelling & Design",
        description: "CAD models of all processing machinery are generated in SolidWorks, and critical weld joints are stress modelled before cutting steel.",
        image: meth2.src
      },
      {
        title: "Fabrication & Acceptance",
        description: "Fabrication happens in our ISO 9001:2015 certified workshop. After pressure testing, each liquid processing equipment skid goes through Factory Acceptance Testing running on water or a product simulant against every performance specification in the purchase order. We will not ship processing equipment’s that have not passed FAT.",
        image: meth3.src
      },
      {
        title: "Installation & Commissioning",
        description: "On site installation is followed by Site Acceptance Testing and, where required, a full sterile commissioning protocol. Operator training happens during commissioning, not weeks later when the context is gone. The complete processing handover includes validated IQ/OQ documentation and a 12 month commissioning warranty.",
        image: meth4.src
      }
    ]
  },
  faqTitle: "Frequently Asked Questions",
  faqs: [
    {
      question: "Can your processing equipment’s scale if production volumes increase?",
      answer: "Yes. The modular architecture means most systems can be expanded in place. A 1,000 L/h extraction line, for example, extends to 3,000 L/h by adding parallel modules to the existing skid frame without replacing the base PLC or CIP system. We document the upgrade pathway in the original engineering package so there are no surprises when the time comes."
    },
    {
      question: "How does your food processing equipment compare to older installed systems?",
      answer: "Most legacy food processing equipment was designed when CIP automation was expensive and energy cost was not a factor. Our systems automate CIP completely, cutting chemical consumption by 30–35% and reducing cycle time from 90 minutes to under 45. On energy, the variable frequency drive configuration alone usually justifies the upgrade cost within 24–36 months."
    },
    {
      question: "What is the ROI timeline on modern processing machinery?",
      answer: "It varies by application. For plants replacing a 10 year old thermal processing line, payback periods of 18–30 months are common when you account for yield improvement, energy savings, and reduced QA rejection rates. We can model this against your existing production data during the pre engineering phase before you commit to anything."
    },
    {
      question: "What does a complete processing installation from SEPPA include?",
      answer: "A complete processing project covers site audit, process engineering, P&ID design, equipment fabrication, FAT, site installation, SAT, operator training, and a 12 month commissioning warranty. Spare parts kits and a service contract are available separately."
    },
    {
      question: "Why choose SEPPA over a regional supplier for liquid processing equipment?",
      answer: "Regional suppliers often build to national standards only. Our liquid processing equipment is designed to EHEDG, 3-A, and CE standards from the start which matters if you are exporting or supplying multinational customers. We also carry in house process engineering capability. The people who design the system are the same people who commission it, which is not common at the price points we operate at."
    }
  ]
};

const ProcessingPage = () => {
  return <PackagingPageLayout data={pageData} />;
};

export default ProcessingPage;
