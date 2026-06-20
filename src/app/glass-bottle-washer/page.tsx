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

const pageData: PackagingPageData = {
  title: "Glass Bottle Washer Solutions",
  breadcrumbName: "Glass Bottle Washer",
  rootBreadcrumbName: "Equipments",
  rootBreadcrumbPath: "/equipments",
  headerImage: bannerImg.src,
  overviewTitle: "The Definitive Guide to the Modern Glass Bottle Washer: Engineering Sterile Packaging at Industrial Scale",
  overviewDescription: "In the precision driven world of beverage and pharmaceutical bottling, the integrity of the final product begins long before filling. Your entire production line’s success actually hinges right at the start with the glass bottle washer it's the quiet gatekeeper that decides whether your batch meets strict sterility standards or fails them completely.",
  overviewsubDescription: [
    "At Seppa Solutions, we look at every single bottle as a high stakes variable that can't be left to chance. That’s why our machines are built on decades of hands on experience, perfecting the tricky balance of caustic chemistry, thermal shock management, and high velocity jetting to ensure your glass comes out absolutely pristine every single time.",
    "This guide walks through the architecture, methodology, and operational advantages of the modern glass bottle washer machine, with specific reference to Seppa's Rita SRM series engineering benchmarks."
  ],
  overviewImage: overviewImg.src,
  contentBlocks: [
    {
      title: "Overview of the Glass Bottle Washer Machine",
      paragraphs: [
        "A glass bottle washer is far more than a rinsing device. It is a multi stage, thermally regulated, chemically calibrated decontamination system engineered to remove organic residues, biofilms, labels, foils, mineral scaling, and microbial contaminants from returnable and new glass containers.",
        "A good bottle washer has to pull off a serious balancing act: it needs to be tough enough to blast away stubborn, baked on grime and sticky label glue, but gentle enough that it doesn’t crack or weaken the glass.",
        "Seppa’s Rita SRM series hits that exact sweet spot. It uses perfectly synchronized carrier chains to keep the bottles moving smoothly, careful temperature zoning to avoid thermal shock, and targeted high pressure internal jetting to clean every single inch without beating up your inventory. In short, an industrial bottle washer is the foundational quality assurance asset of any bottling line. Without it, every downstream investment fillers, cappers, labelers operates on compromised input."
      ],
      image1: img1.src,
      reverse: true
    },
    {
      title: "Benefits of Using an Automatic Glass Bottle Washer",
      paragraphs: [
        <div key="benefits" className="space-y-4">
          <p className="text-base md:text-lg text-gray-600 mb-4">
            Operational advantages of a Seppa glass bottle washer machine extend well beyond cleanliness:
          </p>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-seppa-red mt-2 flex-shrink-0"></span>
              <span className="text-base md:text-lg text-gray-600">
                <strong className="text-[#101934] font-bold">Consistent high purity results:</strong> automated chemistry and temperature control eliminate operator variability.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-seppa-red mt-2 flex-shrink-0"></span>
              <span className="text-base md:text-lg text-gray-600">
                <strong className="text-[#101934] font-bold">Reduced water consumption:</strong> multi stage water cascading recycles rinse water upstream, reducing fresh water demand by up to 60% versus legacy systems.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-seppa-red mt-2 flex-shrink-0"></span>
              <span className="text-base md:text-lg text-gray-600">
                <strong className="text-[#101934] font-bold">Minimized breakage:</strong> gentle pocket grippers and controlled bottle indexing keep breakage rates below 0.05% on properly maintained lines.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-seppa-red mt-2 flex-shrink-0"></span>
              <span className="text-base md:text-lg text-gray-600">
                <strong className="text-[#101934] font-bold">Lower total cost of ownership (TCO):</strong> energy regeneration, caustic recovery, and CIP integration combine to deliver significant operational savings over a 10–15 year machine lifespan.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-seppa-red mt-2 flex-shrink-0"></span>
              <span className="text-base md:text-lg text-gray-600">
                <strong className="text-[#101934] font-bold">Label and foil separation:</strong> integrated label separators remove debris completely, preventing nozzle fouling.
              </span>
            </li>
          </ul>
          <p className="text-base md:text-lg text-[#101934] font-bold mt-4">
            A well specified bottle washing machine is therefore not a cost center it is a margin protector.
          </p>
        </div>
      ],
      image1: img2.src,
      reverse: false
    },
    {
      title: "Types of Bottles Compatible with the Washing System",
      paragraphs: [
        "Mechanical adaptability is central to Seppa's design philosophy. The bottle washing machine accommodates containers from miniature cosmetic vials (50 ml) to large-format spirits bottles (up to 1 litre on the Rita SRM 130/140/150 platforms).",
        "It gracefully handles varied neck finishes including crown, screw, swing top, and cork; glass thicknesses from lightweight non returnable to heavy returnable; and mixed soil profiles from fresh line new glass to heavily soiled returnable inventory.",
        "This adaptability allows a single industrial bottle washer to support multiple SKUs without sacrificing throughput or cleaning efficacy."
      ],
      image1: img1.src,
      reverse: true
    },
    {
      title: "Seppa's Rita SRM Series: Single Soak and Multi Soak Variants",
      paragraphs: [
        "The Rita SRM series is available in two principal configurations. The Single Soak Variant is engineered for the brewery, dairy, distillery, juices, soft drinks, and ketchup sectors. Larger soaking and spraying cycles ensure thorough washing of recycled dirty bottles without pre washing. Label separators remove labels and foils completely. Machines are supplied ready for commissioning.",
        "The Multi Soak Variant (SRM 130/140/150) is designed for high outputs and heavily soiled bottles with labels and foils. Three to four multi soak tanks deliver intensive soaking plus high pressure internal and external spraying. Continuous carrier chain motion maximizes soak time.",
        "Steam and water consumption are minimized through energy regeneration and stage by stage water recycling, yielding a highly eco efficient platform. Optional automatic caustic measuring and dosing is available."
      ],
      image1: img2.src,
      reverse: false
    }
  ],
  featuresTitle: "Key Features and Technical Specifications",
  featuresSubtitle: "A professional bottle cleaning machine is defined by its mechanical architecture, hydraulic precision, and chemical control systems. Seppa's Rita SRM platforms incorporate the following engineering benchmarks:",
  features: [
    { title: "Stainless Steel Architecture", description: "Full AISI 304/316 construction across wetted parts ensures resistance to caustic concentrations of 2–4% NaOH at elevated temperatures (typically 60–85°C). This is non negotiable for industrial use." },
    { title: "Multi Stage Soaking Compartments", description: "The Rita SRM multi soak variant deploys 3 to 4 sequential caustic soak tanks, allowing progressive dissolution of soils. This staged approach prevents chemical shock load." },
    { title: "Internal High Pressure Spray Nozzles", description: "Internal jetting pressures of 1.5–3.0 bar are directed through rotating or fixed nozzle arrays. Dedicated manifolds ensure caustic spray, fresh water, and sterile rinse are never cross contaminated." },
    { title: "Thermal Gradient Control", description: "To prevent thermal shock (the leading cause of glass breakage), inlet and outlet temperatures are stepped in increments of 15–20°C. Energy regeneration heat exchangers recover thermal energy." },
    { title: "Automated Caustic Concentration Control", description: "An optional automatic caustic measuring and dosing device maintains NaOH concentration within +0.2% tolerance, ensuring consistent decontamination chemistry across multi shift operation." }
  ],
  applicationsTitle: "Applications Across Beverage and Packaging Industries",
  applicationsSubtitle: "The versatility of Seppa's glass bottle washer is reflected in its installed base across multiple sectors. Each sector presents distinct challenges, but the underlying requirement is identical: repeatable sterility at high throughput.",
  applications: [
    { title: "Brewery", description: "Operations handling returnable beer bottles with heavy label adhesion requiring rigorous soaking and jetting." },
    { title: "Dairy", description: "Lines requiring strict microbial control to ensure maximum product safety and freshness of milk and related products." },
    { title: "Distillery", description: "Facilities processing premium spirits glassware, relying on the washer to handle ornate profiles without scuffing or breakage." },
    { title: "Juices & Soft Drinks", description: "Producers managing thick sugar residues and organic soils from high brix beverages." },
    { title: "Ketchup & Condiments", description: "Fillers contending with viscous organic soils, requiring highly intensive thermal and caustic interventions." }
  ],
  whyChoose: {
    title: "How the Glass Bottle Washer Machine Improves Production Efficiency",
    description: "High speed bottling lines operate on tightly choreographed timing. Any deviation upstream propagates into filler starvation or downstream jams.",
    paragraphs: [
      "Seppa's industrial bottle washer integrates through synchronized infeed via an automatic auto loader, ensuring bottles enter the carrier chain at the exact pitch.",
      "Additionally, the CAM system outfeed provides controlled discharge timing perfectly matched to the downstream filler.",
      "By minimizing breakage, managing labels and soils effectively, and ensuring consistent output, a well specified bottle washing machine acts as a definitive margin protector and efficiency catalyst for your entire line."
    ],
    image: over.src
  },
  methodology: {
    title: "Methodology: How the Glass Bottle Washing Process Works",
    steps: [
      {
        title: "Indexing, Infeed & Pre Soak",
        description: "Bottles enter via an automated auto loader into pocket carriers. A warm water pre soak (35–45°C) softens labels and soils while initiating the thermal ramp.",
        image: meth1.src
      },
      {
        title: "Caustic Soak & Spray",
        description: "Bottles pass through sequential caustic tanks (60–85°C) with label separators. High pressure internal and external caustic jets then dislodge residual soils.",
        image: meth2.src
      },
      {
        title: "Fresh Water & Sterile Rinse",
        description: "Cascading fresh water rinses remove caustic residues, aided by CIP. A terminal sterile water rinse then delivers the final purity guarantee.",
        image: meth3.src
      },
      {
        title: "Inverted Drying & Discharge",
        description: "Bottles invert during the final transit, drain completely, and discharge via the CAM system to the filler, ready for immediate filling with no recontamination risk.",
        image: meth4.src
      }
    ]
  },
  faqTitle: "Frequently Asked Questions",
  faqs: [
    {
      question: "What sanitation standards does a Seppa glass bottle washer meet?",
      answer: "Seppa machines are engineered to meet FDA, EHEDG, and ISO 22000 hygienic design principles, with bacterial reduction validated to log 5 levels through the final sterile rinse."
    },
    {
      question: "Why is a dedicated bottle cleaning machine superior to generic washing alternatives?",
      answer: "A dedicated bottle cleaning machine controls thermal gradients, caustic chemistry, and jetting geometry simultaneously parameters that generic cleaning equipment cannot reconcile without compromising either sterility or glass integrity."
    },
    {
      question: "How are the internal nozzle arrays of the glass bottle washer machine maintained?",
      answer: "Nozzles are accessible through removable manifold sections. Recommended maintenance includes weekly visual inspection, monthly descaling, and annual nozzle replacement on high output lines. CIP cycles in the fresh water zone reduce manual cleaning frequency."
    },
    {
      question: "What makes Seppa Solutions a leader in high speed glass sanitization?",
      answer: "Seppa combines proven Rita SRM mechanical architecture with energy regeneration, caustic recovery systems, and gentle bottle handling grippers delivering high throughput without compromising bottle integrity or sterility."
    },
    {
      question: "Can the bottle washing machine handle returnable bottles without pre washing?",
      answer: "Yes. The multi soak configuration is specifically engineered to process heavily soiled returnable bottles directly, with integrated label separators removing labels and foils during the wash cycle itself."
    }
  ]
};

const GlassBottleWasherPage = () => {
  return <PackagingPageLayout data={pageData} />;
};

export default GlassBottleWasherPage;
