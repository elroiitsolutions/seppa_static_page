import React from 'react';
import PackagingPageLayout, { PackagingPageData } from '@/components/packaging/PackagingPageLayout';

// Using generic images for the layout
import bannerImg from '@/assets/processing/generated/processing_banner_1781759101340.png';
import overviewImg from '@/assets/blowing/generated/blowing_overview_1781759662496.png';
import meth1 from '@/assets/processing/generated/processing_meth1_1781759196548.png';
import meth2 from '@/assets/processing/generated/processing_meth2_1781759215088.png';
import meth3 from '@/assets/processing/generated/processing_meth3_1781759228926.png';
import meth4 from '@/assets/processing/generated/processing_meth4_1781759240871.png';
import over from '@/assets/processing/generated/processing_whychoose_1781759182691.png';

const pageData: PackagingPageData = {
  title: "Water & Sparkling Water Lines",
  breadcrumbName: "Water & Sparkling Water",
  rootBreadcrumbName: "Processing",
  rootBreadcrumbPath: "/processing",
  headerImage: bannerImg.src,
  overviewTitle: "Water & Sparkling Water Processing Lines: Industrial Carbonation Technology by Seppa Solutions",
  overviewDescription: "Producing water sparkling at commercial scale is harder than the finished product suggests. A clear, fizzing liquid in a sealed bottle looks uncomplicated. Behind it: water treatment, CO2 saturation, aseptic filling, and quality checks all running in tight sequence. Any weak link shows up in the product. Seppa Solutions designs these systems as turnkey installations engineered for the uptime a long-term capital commitment demands.",
  overviewsubDescription: [
    <div key="overview-sub" className="space-y-4">
      <p className="text-base md:text-lg text-gray-600 leading-relaxed indent-8 md:indent-12">
        A professional water sparkling line runs from raw water intake to palletised, labelled bottle. Every step belongs to a single engineered flow. The mineral water plant configuration and the water bottling plant machinery are designed together from the start, not assembled from separate suppliers and hoped into working together.
      </p>
      <p className="text-base md:text-lg text-gray-600 leading-relaxed indent-8 md:indent-12">
        Seppa builds to ISO 22000 and food-grade GMP standards by default, whether the installation is a large mineral water plant running multiple formats or a compact single-SKU line. These aren't extras. They're the floor.
      </p>
    </div>
  ],
  overviewImage: overviewImg.src,
  featuresTitle: "Key Features of the Water & Sparkling Water Line",
  features: [
    {
      title: "High Efficiency Water Treatment",
      description: "The journey of all water sparkling lines begins at the water treatment plant. Seppa uses multi-staged filtration systems in which sand filtration is done for removing suspended particles, carbon filtration for eliminating chlorine and organic compounds, and ultra-rejection RO membranes that lower the dissolved load to single-digit mg/L levels. Following RO, a re-mineralisation dosing system helps add calcium, magnesium, and bicarbonate minerals into it according to the recipe. Airborne contamination is controlled by positive pressure with HEPA filters. UV and ozone sterilisation provide protection against microbes in the final packaging stage."
    },
    {
      title: "Real-Time Process Monitoring",
      description: "CO2 saturation drifts with temperature, flow rate, and back-pressure changes throughout a run. Seppa integrates inline carbonation sensors that read dissolved CO2 continuously, correcting automatically at the manifold when a reading strays. No alarm, no manual adjustment. pH is monitored post-RO, post-mineralisation, and post-carbonation, with every batch logged for traceability."
    },
    {
      title: "Isobaric Filling Technology",
      description: "The water filling machine on Seppa's water sparkling line runs isobaric counter-pressure valves. The filling head equalises pressure between the reservoir and the bottle before liquid moves. That step keeps CO2 in solution and stops foam building at the valve. Carousels run at 12,000 to 36,000 bottles per hour, with servo-controlled valve timing across different neck geometries and carbonation targets."
    }
  ],
  applicationsTitle: "Applications of Water & Sparkling Water Production Lines",
  applications: [
    {
      title: "High Volume Mineral Water Plant Operations",
      description: "High-throughput mineral water plant lines often run several SKUs (water sparkling, lightly carbonated, still) and need to switch without burning hours on changeover. Seppa handles this with tool-free changeover hardware and recipe-driven HMI controls. An operator selects the product; the system adjusts carbonation, fill volume, and capping torque. Most of the changeover work is in the software."
    },
    {
      title: "Flexible Artisanal and Mid-Scale Lines",
      description: "Not every water bottling plant runs at industrial volume. Craft producers and private-label clients often have unusual bottle formats and variable carbonation targets. Seppa designs smaller water sparkling lines with the same hygiene standards and automation as the larger builds."
    },
    {
      title: "Still Water Conversion Capability",
      description: "Seppa's dual-mode configurations bypass the carbonation stage entirely for still water runs. The water filling machine operates identically either way; only the product routing changes."
    }
  ],
  methodology: {
    title: "Methodology: How the Water Sparkling & Water Line Works",
    steps: [
      {
        title: "Stage 1: Influent Treatment",
        description: "Raw water enters the mineral water filling machine through a sand filter, then an activated carbon bed that handles residual chlorine and dissolved organics. Both beds run automated backwash on schedule.",
        image: meth1.src
      },
      {
        title: "Stage 2: Reverse Osmosis",
        description: "High-pressure RO membranes bring total dissolved solids below 10 mg/L. Permeate recovery runs at 70–75%, a figure Seppa optimises per installation.",
        image: meth2.src
      },
      {
        title: "Stage 3: Mineral Correction",
        description: "Stripped water passes through a dosing manifold where food-grade minerals are injected against a product recipe to create a well-balanced output.",
        image: meth3.src
      },
      {
        title: "Stage 4: Carbonation",
        description: "Water enters the carbonation unit at 4–6°C. Inside a pressurised mixing vessel, water and food-grade CO2 meet at 4–6 bar. Inline sensors verify dissolved gas against the recipe.",
        image: meth4.src
      },
      {
        title: "Stage 5: Isobaric Filling and Sealing",
        description: "The mineral water filling machine takes carbonated water under constant back-pressure. Each valve runs through open, equalise, fill, and close in a PLC and servo-controlled sequence. The capper applies closures at set torque.",
        image: meth1.src
      },
      {
        title: "Stage 6: Final QC",
        description: "Bottles pass under ozone tunnels and UV arrays ahead of labelling. Micro-filtration units on the product circuit sit as the last microbiological check before the product is sealed in.",
        image: meth2.src
      }
    ]
  },
  whyChoose: {
    title: "Why Choose Seppa Solutions",
    paragraphs: [
      "Seppa Solutions has built water sparkling infrastructure for municipal water brands, private-label operations, and artisanal producers. A water bottling plant purchase has a 15–20 year horizon, and most of the real cost of a poorly specified line doesn't show up on the purchase order. It shows up in maintenance spend, downtime, and quality holds in year three.",
      "Every mineral water bottling machine manufactured by Seppa comes with accessibility for maintenance incorporated into its structure. Product contact surfaces are made of stainless steel polished to Ra ≤ 0.8 μm. The clean-in-place system is incorporated into the structure of the line rather than installed separately. Caustic, acid, and sterile rinse cycles occur automatically in between batches.",
      "The heat exchangers installed on the RO and carbonation lines recover thermal energy which is wasted in most installations. The use of variable frequency drives on pump motors reduces energy consumption by 25–35% compared to the fixed speed pumps."
    ],
    image: over.src
  },
  faqTitle: "Frequently Asked Questions",
  faqs: [
    {
      question: "1. How often does the water treatment plant require maintenance?",
      answer: "It depends on feed water quality and throughput. Sand and carbon beds need backwash daily; skipping it is where filter performance quietly degrades before anyone notices. RO membranes get quarterly inspection and chemical cleaning when normalised permeate flow drops below 85% of baseline. Membrane replacement falls at the 3–5 year mark under standard conditions."
    },
    {
      question: "2. How does Seppa ensure the efficiency of a mineral water filling machine over time?",
      answer: "Seal replacement intervals are set in the PLC maintenance manager rather than left to memory. Any mineral water filling machine valve deviating beyond ±1 mL on fill volume triggers an alert before it produces out-of-spec output. Spare parts kits are available through Seppa's after-sales team."
    },
    {
      question: "3. What are the technical differences between still and water sparkling production?",
      answer: "The water treatment plant and mineral dosing stages are identical for both. What changes downstream: the carbonation unit, the valve type, and back-pressure management on the water filling machine. Still water uses gravity or volumetric valves; water sparkling requires isobaric counter-pressure heads. On dual-mode lines, switching is a recipe selection on the HMI."
    },
    {
      question: "4. Why do Seppa's water bottling plant designs consume less energy than alternatives?",
      answer: "Energy savings from heat recovery in RO system and chilling system are the energy savings from the energy which is wasted if not recovered. Using variable frequency drive for pumps ensures that the power is consumed according to requirement and is not wasted even if there is no work to be done. In the water treatment plant, stages are used in pressurization rather than a single high pressure pump."
    },
    {
      question: "5. Why is Seppa Solutions the right source for water filling machine procurement?",
      answer: "Seppa's water filling machine equipment is built to IEC and CE standards, with hygienic design per EHEDG guidelines. More practically: the filling carousel, CIP system, mineral dosing unit, and water treatment plant all come from one engineering team that designed them to work together. For anyone commissioning a water sparkling production line, that means one point of accountability when something needs to be resolved."
    }
  ]
};

const WaterSparklingPage = () => {
  return <PackagingPageLayout data={pageData} />;
};

export default WaterSparklingPage;
