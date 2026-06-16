"use client";
import React from 'react';
import PackagingPageLayout, { PackagingPageData } from '@/components/packaging/PackagingPageLayout';
import img2 from '@/assets/packaging/can/Can-Filling-Packaging-Line.webp';
import img1 from '@/assets/packaging/can/gtl-packaging-filling-line-scheme.webp';
import still from '@/assets/packaging/can/still.webp';
const pageData: PackagingPageData = {
  title: "PLASTIC POUCH Low Cost, Flexible Solutions",
  breadcrumbName: "Pouch",
  overviewTitle: "Water, Beverage and Milk in a Pouch",
  overviewDescription: "In several countries, the drinking Water, Beverage and Dairy industry is also using pouch packaging for milk. Made from Polypropylene, this pouch is reusable, easy to pour and produces 75% less waste than conventional milk packaging. Plastic packaging is commercially feasible and stabilizes the cost of raw materials, making it easy and practical to execute.",
  overviewBenefits: [
    "It replaces the high cost of other types of packaging reducing the cost of the final product.",
    "Reduced material costs compared to rigid packaging",
    "Exceptional seal strength and leak prevention",
    "Support for zippers, spouts, and tear notches",
    "Compact machine footprint"
  ],
    overviewsubDescription:["SEPPA offers a wide range of Pouch Sterilizing, Filling and Sealing equipment’s fully automatic, low speed and high speed lines for Water, Milk, Beverage, Oil, and petroleum products. This includes Pouch Sterilizer, Filler and Sealer, Date and Batch Coders, Shrink/Carton packaging equipment, Palletizers and Stretch Wrappers.", "The global flexible packaging market crossed $260 billion in 2023 and continues growing at 4.5% annually (Mordor Intelligence, 2024). Brand owners are switching from rigid containers to flexible packaging pouches because they weigh less, ship more efficiently, and use up to 70% less material per unit. For anyone running a filling line today, the choice of pouch packaging machine is one of the most commercially significant equipment decisions on the table."],
  overviewImage: "https://demo.awaikenthemes.com/yarnex/wp-content/uploads/2026/02/services-single-img-3.jpg",
   contentBlocks: [
    {
      //badge: "Turnkey Lines",
      title: "Complete Flexible Pouch Packaging Solutions for Modern Manufacturing",
      paragraphs: [
        "A pouch packaging machine doesn't do much sitting by itself in the middle of a plant floor. It works when the whole line is designed around it. At Seppa, we design the full sequence: pouch forming or pre made pouch packaging machine infeed, product dosing, filling, gas flushing where needed, sealing, inspection, coding, secondary packaging, and palletizing. One scope. One point of accountability.",
        "The forming filling sealing section is where most lines lose control of quality. Film tension, seal jaw temperature, dwell time, cooling pressure all of it has to be dialled in to the specific laminate the customer is running. A seal can look fine visually and still fail a burst test if dwell time is short by 0.2 seconds at speed. Our machines run closed-loop seal temperature control to +1°C, keeping rejection rates below 0.3% even on thin recyclable laminates. Vision systems check pouch dimensions and fill level in real time. Checkweighers catch dosing errors to +0.5g on dry products. Any out of spec pouch packaging machine gets flagged before secondary packaging that's how high throughput sites hold Six Sigma quality levels without adding manual inspection labour.",
        "The result: a complete flexible packaging solution with one supplier, one contract, and no gaps in the accountability chain."
      ],
      image1: img1.src,
      image2: img2.src
    }
  ],
   applicationsTitle: "Types of Custom Pouch Packaging for Different Product Applications",
  applicationsSubtitle: "Different products need different pouch formats, and the wrong choice costs you in filling speed, material efficiency, or shelf performance. Seppa's pouch packaging machine range covers every mainstream commercial format.",
  applications: [
    { title: "Stand Up Pouches (Doypack)", description: "have become the default retail format for baby food, pet snacks, and laundry detergent alike. They stand on shelf, accept zippers and spouts without complicated tooling, and print across 360 degrees. Our pouch filling machine configurations handle both pre made pouch feeding and form fill seal operations at 40 to 200 pouches per minute." },
    { title: "Spouted Pouches", description: "dominate children's food, juice drinks, and personal care. The spout is inserted and welded inline on our pouch packaging machine, with a leak test on every unit before it moves down the line." },
    { title: "Three Side and Four Side Seal Pouches", description: " remain the most material efficient format for condiment sachets and pharmaceutical unit doses. They're also the go to for retort pouch packaging, since the flat geometry spreads thermal stress evenly through the sterilization cycle." },
    { title: "Pillow and Back Seal Formats", description: "are the speed leaders 80 to 150 cycles per minute on a single vertical form fill seal lane for chips, nuts, and candy. Horizontal flow wrap handles products where integrity during packaging matters as much as throughput." }
  ],
  
  featuresTitle: "Applications of Food Grade Pouch Packaging Across Industries",
  featuresSubtitle: "The range of products moving through a modern pouch filling machine is broader than most plant engineers expect. Here are the sectors where Seppa has the deepest installed base.",
  features: [
    {
      title: "Snacks and Dry Foods",
      description: "Nitrogen flushed flexible packaging pouches displace oxygen before the seal closes, pushing best before dates from 6 weeks to 6 months on chips and extruded snacks. Our machines measure residual O₂ if it's above threshold, the pouch doesn't seal."
    },
    {
      title: "Sauces and Condiments",
      description: " Pasta sauces, ketchup, and honey all behave differently batch to batch. A dedicated pouch filling machine for viscous products needs volumetric or mass flow dosing that handles variation without drifting on fill weight. Our servo driven piston fillers hold +1% accuracy from water to peanut butter. Every gram of over fill at 60 pouches per minute is margin you're giving away."
    },
    {
      title: "Pet Food",
      description: "Wet pet food in pouches is one of the fastest growing segments across flexible packaging solutions globally. Retort sterilization post seal delivers 24 month ambient shelf life no cold chain required, which opens up international distribution routes that canned formats can't easily access."
    },
    {
      title: "Ready to Eat Meals",
      description: "Retort pouch packaging processes in 30 to 45 minutes versus 90+ minutes for a metal can cutting energy cost per unit by up to 40% (Packaging Digest, 2023). All Seppa retort lines comply with FDA 21 CFR and EU 10/2011 food contact requirements."
    },
    {
      title: "Beverages and Dairy",
      description: "Seppa's pouch packaging machine lines for water, milk, and beverages run at up to 3,600 pouches per hour on a single lane, with aseptic configurations available for extended shelf life without cold chain dependency."
    }
  ],
  whyChoose: {
    title: "Why Choose Seppa as Your Trusted Flexible Packaging Pouch Supplier",
    description: "Any equipment supplier will sell you a pouch packaging machine. Fewer will work through your product requirements before the sale, configure the line correctly, and still pick up the phone two years later. That's the gap we fill.",
    paragraphs: [
      "Seppa works as a turnkey project partner. We handle mechanical design, electrical engineering, control systems, hygienic compliance (EHEDG, 3-A where applicable), and CE / UL certification. A commissioning engineer ships with every machine and stays on site until agreed production rates are confirmed not just until it turns on. Our installed base spans over 40 countries, with 24 hour response for production critical queries and fast wear spares stocked for every active model.",
      "Our flexible packaging solutions scale from 2,000 pouches per hour for specialty producers to 20,000 per hour for high volume consumer goods lines. Every pouch packaging machine is built to the customer's specification no generic standard imposed where it doesn't fit."
    ],
    //image: filling.src
  },
  methodology: {
    title: "Methodology: From Packaging Design to Production Line Integration",
    subtitle: "Every Seppa project follows the same five stage engineering lifecycle refined over decades of installations, which is why our commissioning timelines are predictable.",
    steps: [
      {
        title: "Engineering & Integration",
        description: ["Our process engineers model throughput, utilities, and floor layout in 3D catching bottlenecks before a single piece of steel gets cut.",
          "We start with a structured technical intake covering product characteristics, fill weights, line speed, barrier requirements, and plant layout. Our engineers then produce 3D machine drawings and PLC architecture for customer sign off before fabrication begins. The pouch packaging machine is built and run at full speed in our factory FAT documentation covers seal integrity, fill accuracy, vision system logs, and electrical safety certification. Customers are welcome to witness FAT before shipping.",
          "On site, our engineers handle installation, utility connections, and the Site Acceptance Test against agreed KPIs. Operator training runs with the actual production team. We don't leave until the line runs independently. Post commissioning support includes a 12 month warranty, remote monitoring, and scheduled maintenance. For retort pouch packaging machine lines, annual validation visits keep customers compliant with food safety audit requirements.",
        ],
        image: still.src
      },
      
    ],
  },

  faqTitle: "Expert answers to can filling & packaging questions",
  faqs: [
    {
      question: "What throughput speeds are realistic for a pouch packaging machine in a food production environment?",
      answer: "Vertical form fill seal snack lines typically run 60 to 150 pouches per minute per lane. Liquid pouch lines reach 60 pouches per minute on a single head at +0.5% fill accuracy. Multi lane setups multiply throughput proportionally. Seppa confirms achievable speeds during feasibility using your actual product and geometry not headline numbers that don't apply to your line."
    },
    {
      question: "What barrier properties does retort pouch packaging require?",
      answer: "Retort pouches must hold past 121°C without delaminating. Standard construction is PET / adhesive / aluminium foil / adhesive / cast PP (CPP)  oxygen transmission below 0.05 cc/m²/day and water vapor transmission below 0.1 g/m²/day, sufficient for 24 month ambient shelf life on most food products. Film spec must be validated before production starts."
    },
    {
      question: "How do I calculate ROI when investing in a new pouch filling machine?",
      answer: "Key drivers are material cost reduction, labour savings from automation, less product waste from better fill accuracy, and logistics savings from lighter packaging. Customers switching to flexible packaging pouches at mid volume (5 million pouches per month) typically see payback within 18 to 30 months. Seppa builds ROI models during feasibility using your actual cost inputs."
    },
    {
      question: "Are Seppa's flexible packaging solutions compatible with recyclable film laminates?",
      answer: "Yes. Our machines run mono material PE pouches, PCR content laminates, and paper based structures alongside conventional multi layer films. Recyclable films need adjusted tension control and seal parameters handled through recipe based changeover. We run film qualification testing before finalizing machine settings."
    },
    {
      question: " What level of after sales support does Seppa provide for international installations?",
      answer: "Support teams operate across Asia, Europe, the Middle East, and Africa. Remote diagnostics through our monitoring portal enable first response troubleshooting without a site visit. Critical spare parts ship from regional hubs for same week delivery. Annual validation visits are available for retort and aseptic pouch lines under a service contract."
    }
  ],
  
};
const PetPage = () => {
  return <PackagingPageLayout data={pageData} />;
};
export default PetPage;
