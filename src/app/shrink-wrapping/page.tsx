import React from 'react';
import PackagingPageLayout, { PackagingPageData } from '@/components/packaging/PackagingPageLayout';

import bannerImg from '@/assets/processing/generated/processing_banner_1781759101340.png';
import overviewImg from '@/assets/blowing/generated/blowing_overview_1781759662496.png';
import img1 from '@/assets/processing/generated/processing_cb1_1781759122683.png';
import img2 from '@/assets/processing/generated/processing_cb2_1781759136791.png';
import img3 from '@/assets/blowing/generated/blowing_cb3_1781759707330.png';
import over from '@/assets/processing/generated/processing_whychoose_1781759182691.png';

import meth1 from '@/assets/processing/generated/processing_meth1_1781759196548.png';
import meth2 from '@/assets/processing/generated/processing_meth2_1781759215088.png';
import meth3 from '@/assets/processing/generated/processing_meth3_1781759228926.png';
import meth4 from '@/assets/processing/generated/processing_meth4_1781759240871.png';

const pageData: PackagingPageData = {
  title: "Shrink Wrapping Machine",
  breadcrumbName: "Shrink Wrapping",
  rootBreadcrumbName: "Equipments",
  rootBreadcrumbPath: "/equipments",
  headerImage: bannerImg.src,
  overviewTitle: "What Is a Shrink Wrapping Machine?",
  overviewDescription: "Secondary packaging has a thankless job. Nobody notices when it works. The beverage multipack arrives intact, the pharmaceutical carton survives the distribution chain, the retailer pulls product off the truck shelf ready and no one thinks about why. A shrink wrapping machine is the reason that happens.",
  overviewsubDescription: [
    "At its core, a shrink wrapping machine wraps grouped products in polymer film, drives them through a heat tunnel, and what comes out is a dimensionally stable, tamper evident bundle ready for logistics. No padding, no secondary boxing, no manual banding. For any serious production line moving volume to retail, a reliable shrink wrapping is no longer optional equipment it's foundational infrastructure.",
    "SEPPA's sleeve wrapping machine range handles sealing widths from 500 mm to 1800 mm, runs Polyethylene film from 13 microns up, and reaches throughput targets up to 35 packs per minute depending on configuration a result of redesign work that reduced footprint, improved pack presentation, and cut energy consumption compared to the previous generation."
  ],
  overviewImage: overviewImg.src,
  contentBlocks: [
    {
      title: "Key Features of SEPPA's Shrink Wrapping Machine",
      paragraphs: [
        "The frame is welded steel box section with CNC machined components. That matters in production environments where frame flex eventually shifts seal geometry. The sealing system on this shrink film wrapping machine uses a pneumatically controlled hot knife, which extends seal bar service life and handles a wider film gauge range without adjustment.",
        "Two sealing variants are available: a fixed head stop start system for medium throughput lines, and a moving head continuous motion system where speed is the priority. At the upper end, a progressive twin belt infeed configuration reaches 35 packs per minute.",
        "The wrapping machine runs on PLC control with an HMI touchscreen. Temperature profiles, dwell times, and conveyor speeds are all operator adjustable without service intervention. Clear view interlocked safety doors let operators watch the seal zone during production a small detail that saves significant troubleshooting time during startup."
      ],
      image1: img1.src,
      reverse: true
    },
    {
      title: "How the Shrink Wrapping Process Works",
      paragraphs: [
        "Products enter the infeed of the sleeve wrapping machine, get collated into the target bundle format, and film wraps the group before the seal bar closes. From there, bundles enter the shrink tunnel machine.",
        "SEPPA's shrink tunnel machine uses base mounted turbo heater fans that recycle and recirculate air continuously. It's thermostatically controlled rather than setpoint based, so the thermal profile across the conveyor width stays consistent as product density varies between batches. Heavy insulation in the tunnel body retains heat between product intervals.",
        "The output is uniform film contraction. Not tighter on one face consistent shrink that holds dimensional tolerance through the cooling zone. Every bundle leaving the wrapping machine matches the one before it structurally. This consistency is what separates a production grade shrink film wrapping machine from a commodity unit."
      ],
      image1: img2.src,
      reverse: false,
      bgClass: "bg-light"
    },
    {
      title: "Applications Across Industries",
      paragraphs: [
        "The sleeve wrapping machine runs beverage multipacks, pharmaceutical carton collation, industrial goods bundling, and food sector applications. For food and dairy lines, SEPPA builds in stainless steel fabrication and panel options on the shrink wrapping machine to meet hygiene requirements.",
        "As a packaging machinery manufacturer operating for 49 years, SEPPA has configured this shrink film wrapping machine into enough different production halls to know that standard infeeds and outfeeds rarely fit without adjustment.",
        "The wrapping machine range accounts for that collating systems are designed to the product, side entry configurations available, and conveyor sets matched to the application. Whether the line runs glass bottles, blister packs, or canned goods, the shrink wrapping machine adapts to the format rather than forcing the product to fit the equipment."
      ],
      image1: img3.src,
      reverse: true
    }
  ],
  whyChoose: {
    title: "Why Choose SEPPA Shrink Wrapping Solutions?",
    description: "The shrink wrapping machine is designed and built in house in Poole. The team that engineered the wrapping machine supports it after installation.",
    paragraphs: [
      "Choosing a UK based packaging machinery manufacturer with this kind of vertical integration eliminates the delays common with distributor-sold equipment.",
      "FMCG producers who have run SEPPA equipment through long production cycles cite low maintenance burden as the main reason they stay. The shrink tunnel machine's energy performance recycled air, thick insulation, silicone curtains reduces per bundle energy draw noticeably on multi shift operations.",
      "The current shrink wrapping machine generation came directly from customer engineer input on the previous design. Smaller footprint, better pack presentation, improved efficiency: those were the stated requirements, and the redesign addressed them."
    ],
    image: over.src
  },
  methodology: {
    title: "Methodology: How SEPPA Integrates Shrink Wrap Packaging",
    steps: [
      {
        title: "Site Layout Analysis",
        description: "Installation of the shrink wrapping machine starts with site layout analysis column positions, upstream conveyor heights, line speeds, product mix.",
        image: meth1.src
      },
      {
        title: "Configuration",
        description: "The sleeve wrapping machine is then configured to the application before any fabrication is finalized. PLC programming matches upstream conveyor synchronization.",
        image: meth2.src
      },
      {
        title: "Throughput Validation",
        description: "Throughput validation before handover confirms the wrapping machine meets target rates under production representative conditions.",
        image: meth3.src
      },
      {
        title: "Service Contracts",
        description: "Service contracts on every shrink tunnel machine are available from day one, with response-time tiers matched to operational criticality.",
        image: meth4.src
      }
    ]
  },
  faqTitle: "Frequently Asked Questions",
  faqs: [
    {
      question: "How often does a shrink wrapping machine need maintenance?",
      answer: "Maintenance intervals depend on production volume rather than calendar time. SEPPA provides specific recommendations per shrink wrapping machine variant. The accessible component layout reduces how long each scheduled service takes."
    },
    {
      question: "How does a packaging machinery manufacturer ensure film-shrink uniformity?",
      answer: "Uniformity depends on air velocity profiles and temperature stability. SEPPA's shrink tunnel machine recirculates air from base mounted turbo fans under thermostatic control rather than fixed element heating."
    },
    {
      question: "What energy savings does a modern shrink tunnel machine provide?",
      answer: "Thick insulation, recycled air circulation, and double silicone curtains at both ends of the shrink tunnel machine reduce heat loss per cycle considerably, providing real operational savings."
    },
    {
      question: "What film types does a SEPPA shrink film wrapping machine support?",
      answer: "Polyethylene shrink film from 13 microns minimum. The twin reel system and optional film splicing unit allow roll changes without stopping production."
    },
    {
      question: "Why choose SEPPA for an automated wrapping machine?",
      answer: "49 years of build experience as a packaging machinery manufacturer, in house fabrication, and direct after sales support from the manufacturing team. Every shrink wrapping machine is CE guarded, PLC controlled, and configured to the application."
    }
  ]
};

const ShrinkWrappingPage = () => {
  return <PackagingPageLayout data={pageData} />;
};

export default ShrinkWrappingPage;
