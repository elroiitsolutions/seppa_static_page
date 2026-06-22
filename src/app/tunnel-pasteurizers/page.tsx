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
  title: "Tunnel Pasteurizers",
  breadcrumbName: "Tunnel Pasteurizers",
  rootBreadcrumbName: "Equipments",
  rootBreadcrumbPath: "/equipments",
  headerImage: bannerImg.src,
  overviewTitle: "Advanced Thermal Processing: The Engineering Excellence of Tunnel Pasteurization",
  overviewDescription: "In the highly competitive beverage and liquid food sectors, maintaining biological stability while preserving pristine sensory profiles is a critical engineering challenge. A tunnel pasteurizer serves as the essential protector of product shelf life and microbiological safety.",
  overviewsubDescription: [
    "When dealing with mass distribution, investing in a premium pasteurizer machine represents a definitive step toward achieving automated, continuous thermal processing. This sophisticated machinery utilizes a controlled thermal treatment schedule to systematically eliminate pathogenic and spoilage micro organisms without compromising the fragile nutritional characteristics, flavour notes, or visual clarity of the final product.",
    "Think of our pasteurizer as a way to keep your product safe without ruining what makes it taste good. It uses precise heat to eliminate bacteria while being careful not to \"cook\" the flavour out of your drink. Our automated tunnel system takes the guesswork out of that process, giving every single bottle or can the exact same, consistent treatment.",
    "That way, you know everything leaving your line is perfectly safe and still tastes exactly how it should."
  ],
  overviewImage: overviewImg.src,
  contentBlocks: [
    {
      title: "How Does a Tunnel Pasteurizer Work?",
      paragraphs: [
        "The core operation of a continuous thermal processor relies on passing packaged products through a series of systematically regulated temperature zones. As containers progress through the system on a heavy duty conveyor, they encounter multiple heating, holding, and cooling zones designed to manage the thermal shock experienced by the packaging material.",
        "To fully understand how a modern pasteurizer machine operates, one must look at the internal fluid dynamics and thermodynamic cycles. High efficiency pumps deliver water through specialized spray assemblies, creating a uniform thermal envelope around each container. During this progression, maintaining strict Pasteurization Unit (PU) control is critical. A single PU is defined as one minute of exposure to a temperature of 60°C for beer.",
        "Inside our pasteurizer, smart sensors keep a close eye on the temperature right at the center of your containers. If the production line slows down or speeds up, the machine automatically tweaks its heat levels to make sure your product is never under done which would be a safety risk or over done, which would ruin the flavour."
      ],
      image1: img1.src,
      reverse: true
    },
    {
      title: "Applications of Tunnel Pasteurizers across the Beverage Industry",
      paragraphs: [
        "The versatility of continuous tunnel pasteurization makes it the backbone of modern large scale beverage manufacturing lines. Different products possess unique physical and biochemical properties, necessitating highly adaptable thermal configurations. Operating a high speed beer pasteurizer requires an incredibly precise understanding of dissolved oxygen levels and carbonation dynamics.",
        "Overheating can cause off flavours, haze formation, or excessive internal pressure, leading to package failure. Our advanced beer pasteurizer solutions utilize precise PU accumulation algorithms to preserve delicate hop aromatics and malt profiles while ensuring complete enzymatic inactivation.",
        "Conversely, the parameters of a juice pasteurizer machine must handle complex enzymatic requirements, such as pectinesterase inactivation, alongside acid tolerant mold spores. Because fruit juices contain natural sugars and heat sensitive vitamins, our specialized juice pasteurizer machine options safeguard nutrients while neutralizing potential pathogens."
      ],
      image1: img2.src,
      reverse: false
    },
    {
      title: "Key Features of SEPPA Tunnel Pasteurizers",
      paragraphs: [
        "SEPPA-Rita positions itself at the pinnacle of thermal processing engineering through a strategic Technical Collaboration with M/s. Rita Bottling Machines Private Limited. Incorporating world renowned German technology, our automatic tunnel pasteurizers and coolers represent the vanguard of industrial liquid food preservation.",
        "Engineered specifically for continuous, high volume production, every SEPPA pasteurizer machine features robust mechanical and thermodynamic integrations designed to minimize operational expenses while maximizing utility efficiency."
      ],
      image1: img1.src,
      reverse: true
    }
  ],
  featuresTitle: "Incorporating the Single Deck Series Architecture",
  featuresSubtitle: "Our flagship Single Deck Series is built upon a foundation of structural integrity and thermal optimization. As a benchmark in industrial pasteurization equipment design, the system integrates several proprietary engineering advancements:",
  features: [
    { title: "Quick Heat Transfer Super Heat Zone", description: "Accelerates initial thermal transfer, bringing products up to pasteurization temperatures rapidly and uniformly, minimizing the time products spend in transitional thermal phases." },
    { title: "Defined Pasteurization Units", description: "Advanced PLC tracking ensures exact PU target execution with zero deviation, maintaining the perfect balance between food safety and sensory quality." },
    { title: "Low Water & Minimum Steam", description: "Integrated regenerative loops capture and reuse thermal energy from the cooling zones to feed the heating zones, vastly reducing carbon footprints and utility costs." },
    { title: "Heavy Duty Conveyor Systems", description: "Features a premium stainless steel in feed and out feed paired with an extra heavy duty flat mesh belt capable of handling high speed container lines smoothly." },
    { title: "Clog-Free Spray Pans", description: "Ensures uninterrupted, uniform water-spray distribution without nozzle blockage, maintaining consistent heat delivery across the entire width of the deck." },
    { title: "Modern Pumping System", description: "High performance hydraulic pumps maintain steady pressure and flow rates across all zones, eliminating cold spots." }
  ],
  whyChoose: {
    title: "Why Choose SEPPA Solutions?",
    description: "With an established engineering pedigree and a vast global footprint, SEPPA-Rita is recognized as one of the leading manufacturers of tunnel pasteurizers in India and abroad.",
    paragraphs: [
      "Major beverage producers trust our pasteurization equipment systems for their exceptional energy saving capabilities, structural durability, and unmatched precision in managing delicate liquids. The deployment of a custom juice pasteurizer machine ensures optimal colour and vitamin retention, while the performance of every beer pasteurizer installed by our team guarantees flavour stability.",
      "We’ve got your back from day one. Our technicians are trained directly by the experts at Rita Bottling, so we make the setup, installation, and ongoing maintenance feel effortless.",
      "At the end of the day, we just want to help you keep your drinks fresh and safe for months without needing to lean on harsh chemicals or fake preservatives. Our tech gives you the peace of mind that your products are protected from spoilage, all while keeping that natural, delicious taste your customers expect."
    ],
    image: over.src
  },
  methodology: {
    title: "SEPPA's Pasteurization Methodology",
    steps: [
      {
        title: "Site-Specific Thermal Modelling",
        description: "A data driven pathway focusing on site specific customization of heating, holding, and cooling zones tailored specifically for continuous tunnel configurations.",
        image: meth1.src
      },
      {
        title: "Energy Recovery Integration",
        description: "Transferring thermal energy between the cooling and heating zones via high efficiency plate heat exchangers. Regenerative water loops achieve unparalleled utility economy.",
        image: meth2.src
      },
      {
        title: "Unbroken Inline Processing",
        description: "Unlike a traditional batch pasteurizer which processes products in stationary lots, our continuous tunnel systems provide unbroken inline processing, maintaining steady thermodynamic equilibrium.",
        image: meth3.src
      },
      {
        title: "Rigorous Validation of PU Targets",
        description: "Advanced algorithms ensure exact Pasteurization Unit tracking and validation, avoiding the localized temperature variances that plague static batch systems.",
        image: meth4.src
      }
    ]
  },
  faqTitle: "Frequently Asked Questions",
  faqs: [
    {
      question: "What does the routine maintenance of an industrial pasteurizer machine involve?",
      answer: "Routine maintenance of an industrial pasteurizer machine involves verifying the nozzle spray patterns, cleaning the clog free stainless steel spray pans, and checking the tension of the heavy duty flat mesh belt. Regular calibration of the temperature sensors and PLC logic is also necessary to ensure that the defined pasteurization units are consistently achieved without drifting over time."
    },
    {
      question: "What is the energy saving potential of modern pasteurization equipment?",
      answer: "The energy saving potential of modern pasteurization equipment is exceptionally high, primarily driven by regenerative heat recovery loops. By utilizing the heat removed from pasteurized containers in the cooling zones to pre heat cold incoming containers in the pre heating zones, steam and cooling water consumption can be reduced by up to 60-70% compared to non regenerative systems."
    },
    {
      question: "How do you optimize a beer pasteurizer for various container volumes and geometries?",
      answer: "To optimize a beer pasteurizer for various container volumes and geometries, operators must adjust the conveyor belt speed and modify the zone temperature setpoints within the PLC control panel. Because glass bottles and aluminum cans possess different thermal conductivity rates and masses, the modern beer pasteurizer relies on programmed recipes to dynamically adjust the thermal profile, ensuring identical PU accumulation across all packaging formats."
    },
    {
      question: "What variables determine the throughput capacity of a juice pasteurizer machine?",
      answer: "The throughput capacity of a juice pasteurizer machine depends on the physical dimensions of the tunnel, the container diameter, the required residence time for enzymatic inactivation, and the heat transfer rate of the product. Implementing advanced water spray dynamics enables each juice pasteurizer machine to scale production speeds while maintaining strict thermal control."
    },
    {
      question: "When should a producer choose a tunnel system over a batch pasteurizer machine?",
      answer: "Selecting an industrial pasteurizer machine requires analyzing your target production volume and packaging flexibility. The primary difference between a tunnel system and a batch pasteurizer machine lies in throughput continuity; the batch pasteurizer machine operates on a static cycle best suited for diverse, small batch seasonal runs. For high volume, continuous lines requiring long shelf life stabilization without preservatives, ensuring your pasteurizer machine matches your line speed with an automated tunnel system is the superior engineering choice."
    }
  ]
};

const TunnelPasteurizersPage = () => {
  return <PackagingPageLayout data={pageData} />;
};

export default TunnelPasteurizersPage;
