import React from 'react';
import PackagingPageLayout, { PackagingPageData } from '@/components/packaging/PackagingPageLayout';
import bannerImg from '@/assets/packaging/generated/sauce_banner.png';
import overviewImg from '@/assets/packaging/generated/sauce_overview.png';

const pageData: PackagingPageData = {
  title: "Complete Vegetable Extract Processing Plant Solutions | Seppa Solutions",
  breadcrumbName: "Ketchups & Sauces",
  rootBreadcrumbName: "Liquid",
  rootBreadcrumbPath: "/liquid",
  headerImage: bannerImg.src,
  overviewTitle: "Complete Vegetable Extract Processing Plant Solutions",
  overviewDescription: "First cultivated in Mexico, tomatoes are today grown in over 150 countries. Around 80% of the tomatoes extract in vegetable processing machine produced worldwide are consumed fresh, the remaining 20% go to the tomato processing industry. That 20% drives a market now measured in tens of millions of metric tons annually. The global tomato processing market reached roughly 34 million tons in 2016, crossed 41.5 million tons in 2017 per IMARC Group research, and is projected to reach 48 million tons by 2023, growing at a 2.5% CAGR. Sauces alone account for nearly a third of total processed tomato consumption, followed by pastes, canned products, ketchups, and juices.",
  overviewsubDescription: [
    "Behind those numbers is a demanding operational reality. Every tomato ketchup factory, every sauce bottling line, every concentrate producer is competing on consistency, yield, and cost per unit. Achieving that requires the right vegetable processing machine at every stage of the line.",
    "Seppa Solutions designs and builds that line. From raw material intake to sterile filling and packaging, every vegetable processing machine in the Seppa lineup is engineered around one objective: maximum extract yield at the lowest per unit cost, without compromising the bioactive compounds that give vegetable extracts their commercial and nutritional value.",
    "The global market for natural food colorants, functional concentrates, and plant based ingredients continues to expand, driven by shifting consumer preferences, urbanization, and the growth of fast food. Success in this market requires highest consistency, quality, and maximized production efficiency at minimum cost, ensuring enhanced product hygiene throughout. Seppa supports you in achieving this with its advanced processing and packaging equipment and strong design engineering, manufacturing, spare, and service support.",
    "Glass, PET, and cans remain the packaging formats of the present and near future. Seppa helps you design, build, and deliver an optimized production line from start to end, including aesthetically designed bottle and packaging formats, ensuring a compact plant footprint and enhanced throughput efficiency. With deep market experience, Seppa guides clients through emerging consumer trends, new demand patterns, and the technical requirements those shifts create."
  ],
  overviewLayout:"stacked",
  overviewImage: overviewImg.src,
  featuresTitle: "Types of Vegetable Extracts We Process",
  featuresSubtitle: "The term \"liquid vegetable\" covers a wide spectrum of commercial products, and Seppa's processing systems are built to handle that full range.",
  features: [
    { title: "High Viscosity Extracts", description: "At the high viscosity end, tomato paste and concentrate require tight control of thermal load during evaporation. Overprocessing at this stage degrades lycopene content and introduces off flavours that no downstream correction can fix. Seppa's falling film evaporators and multi stage concentration units hold product temperatures within narrow tolerances, preserving colour and functional compound integrity across every batch." },
    { title: "Low Viscosity Extracts", description: "At the low viscosity end, clear juice extracts and thin body liquid vegetable essences need high throughput filtration and pasteurization systems that do not introduce browning or oxidation. Seppa deploys plate heat exchangers and centrifugal separation units sized specifically for these applications." },
    { title: "Intermediate Extracts", description: "Between these poles sits a range of intermediate products: purees, sauces, brines, and specialty extract concentrates used in flavour blending and food fortification. Each requires a different configuration of the vegetable processing machine installed at the extraction or concentration stage. Seppa's modular system architecture allows the same base platform to be configured for different product viscosities without a full line change." },
    { title: "Raw Material Variation", description: "A well engineered tomato processing plant must also handle significant seasonal raw material variation, since fruit Brix and solids content shift considerably across harvest windows. Seppa's process control systems compensate in real time, maintaining output specification even when incoming raw material quality fluctuates." }
  ],
  applicationsTitle: "Benefits of an Automated Vegetable Extract Processing Plant",
  applications: [
    { title: "Throughput Gains", description: "A Seppa vegetable processing machine installation delivers measurable throughput gains, typically in the range of 30–40% over semi manual lines, through continuous operation, reduced changeover time, and elimination of operator dependent variability. Yield increases follow from tighter process control at each extraction and separation stage, the kind of marginal gains that compound quickly across a high volume season." },
    { title: "Precision Control", description: "For manufacturers producing specialty outputs like liquid plant food for vegetables or micronutrient-dense botanical extracts, precision temperature and pressure control at the extraction stage is not optional. Bioactive compounds including carotenoids, polyphenols, and organic acids degrade rapidly under thermal stress or excessive vegetable processing machine shear. Seppa's systems are designed to keep extraction conditions within validated process windows, which matters directly to the efficacy of any liquid plant food for vegetables derived from concentrated plant material." },
    { title: "Automated CIP", description: "Automated CIP (clean in place) systems reduce sanitation cycle time and chemical consumption while meeting current FDA and EU food contact standards. This is a concrete operational benefit, not a branding claim. Shorter sanitation windows mean more production hours per shift." }
  ],
  whyChoose: {
    title: "Why Choose Seppa Solutions for Vegetable Extract Processing Plants?",
    description: "Seppa builds complete lines, not component assemblies. That distinction matters when a buyer is evaluating total installed cost, commissioning timeline, and post installation service exposure.",
    paragraphs: [
      "Every tomato ketchup factory installation Seppa delivers is designed as an integrated system in vegetable processing machine. The tomato sorting machine at intake is matched to the throughput of the washing and crushing stage. The crusher output is matched to the evaporator feed capacity. The evaporator concentrate yield is matched to filling and packaging line speed. This systems level matching is what prevents the capacity mismatches and process bottlenecks that reduce effective line utilization in plants assembled from mismatched vendor equipment.",
      "Seppa's tomato sorting machine uses optical and density based grading to remove defective or unripe fruit before it enters the line. This is not a minor step. Sub grade raw material elevates vegetable processing machine losses, introduces microbial risk, and degrades finished product colour and Brix. A calibrated tomato sorting machine at the front of the line protects yield and quality downstream.",
      "Energy efficiency is built into Seppa's thermal processing architecture. Heat recovery across pasteurization and evaporation stages reduces steam demand per ton of output. For a tomato ketchup factory running 24 hours through a 90 day harvest season, the per season energy savings from a properly recovered thermal circuit are substantial.",
      "Every vegetable processing machine in the Seppa range is fabricated in 304 or 316L stainless steel with hygienic design weld finishing. Product contact surfaces meet 3 A and EHEDG standards. These are auditable specifications, verifiable by third party inspection."
    ],
    image: overviewImg.src
  },
  methodology: {
    title: "Methodology",
    subtitle: "Seppa's project delivery follows a structured engineering lifecycle that begins well before any fabrication.",
    steps: [
      { title: "Stage 1: Raw Material and Production Audit", description: "What are the incoming Brix and solids ranges? What are the target output specifications for the liquid vegetable product lines in scope? What are the site utilities, infrastructure constraints, and regulatory requirements? These inputs drive the process design.", image: overviewImg.src },
      { title: "Stage 2: Layout and Process Flow Design", description: "Seppa's engineers use process simulation to validate the equipment selection and sizing before committing to fabrication. This is where capacity mismatches get caught, not on site during commissioning.", image: bannerImg.src },
      { title: "Stage 3: Fabrication and Factory Acceptance Testing", description: "Every vegetable processing machine is tested against the contracted process performance specification before it ships. Buyers attend FAT sessions and sign off on results.", image: overviewImg.src },
      { title: "Stage 4: Site Installation and Commissioning", description: "Seppa's engineers manage the full installation sequence, from structural support and utility connection through to sterile commissioning and process validation runs. The line is handed over producing on specification output, not theoretical output.", image: bannerImg.src },
      { title: "Stage 5: Post-Installation Support", description: "Post-installation support includes spare parts supply, remote diagnostics, and on site service. For a tomato processing plant running seasonal campaigns, response time matters. Seppa's service network is structured around that reality.", image: overviewImg.src }
    ]
  },
  faqTitle: "Frequently Asked Questions",
  faqs: [
    {
      question: "What extraction yield should I expect from a Seppa tomato processing plant?",
      answer: "Yield depends on incoming raw material quality and the target product. For tomato paste at 28–30° Brix, a well tuned tomato processing plant running on ripe, high solids fruit typically achieves 95–97% solids recovery from raw input. Seppa's process guarantee is product specific and documented in the project engineering specification."
    },
    {
      question: "What sanitary standards do Seppa's machines meet?",
      answer: "All product contact components in a Seppa vegetable processing machine are fabricated to 3-A Sanitary Standards and EHEDG guidelines. CIP systems are validated to achieve the log reduction targets required by both FDA 21 CFR Part 110 and EU Regulation 852/2004."
    },
    {
      question: "How does energy consumption compare to older processing lines?",
      answer: "Seppa's thermal recovery systems reduce steam consumption per ton of output by 20–35% compared to older single pass evaporation designs. For a high volume tomato ketchup factory, this translates to a meaningful reduction in utility cost per production season."
    },
    {
      question: "Can the vegetable processing machine be adapted for non tomato extract applications?",
      answer: "Yes. Seppa's modular platform supports a range of liquid vegetable applications beyond tomato, including beet extract for natural colorants, carrot concentrate, and botanical infusions used in liquid plant food for vegetables and nutraceutical product lines. Configuration changes are managed through the control system and mechanical changeover without full line replacement."
    },
    {
      question: "What is the typical ROI timeline for a greenfield vegetable processing machine installation?",
      answer: "ROI depends on plant scale, product pricing, and baseline operational cost. For a mid scale tomato processing plant replacing semi manual operations, Seppa clients typically recover capital investment within 3–5 production seasons through yield improvement, reduced waste, lower labour cost, and energy savings. Seppa provides a full financial model as part of the project feasibility study."
    }
  ]
};

const KetchupsSaucesPage = () => {
  return <PackagingPageLayout data={pageData} />;
};

export default KetchupsSaucesPage;
