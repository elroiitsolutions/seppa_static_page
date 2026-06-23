import React from 'react';
import PackagingPageLayout, { PackagingPageData } from '@/components/packaging/PackagingPageLayout';

import bannerImg from '@/assets/packaging/generated/modern_beverage_factory_1781701623841.png';
import overviewImg from '@/assets/packaging/can/overview.jpg';
import meth1 from '@/assets/packaging/can/commissing.jpeg';
import meth2 from '@/assets/packaging/can/install.webp';
import meth3 from '@/assets/packaging/can/training.webp';
import meth4 from '@/assets/packaging/can/overview.jpg';

const pageData: PackagingPageData = {
  title: "Tunnel Cooler Systems",
  breadcrumbName: "Tunnel Cooler",
  rootBreadcrumbName: "Equipments",
  rootBreadcrumbPath: "#",
  headerImage: bannerImg.src,
  overviewTitle: "Tunnel Cooler Systems for Beverage and Food Processing",
  overviewDescription: "If you've ever watched a glass bottle come off a pasteurizer at 65°C and wondered how it safely reaches ambient temperature without warping, cracking, or losing carbonation that's a tunnel cooler doing its job. Pull that unit off a line and the entire operation falls apart.",
  overviewsubDescription: [
    "The post thermal gap between processing and downstream packaging is exactly where this technology operates. Without one, containers exit pasteurization in a thermally stressed state. Pressure dynamics inside the bottle shift. Labels won't adhere properly. Secondary packaging fails. Products that were sterile going in get compromised on the way out.",
    "Seppa Solutions builds tunnel cooler systems to close that gap, with engineering that accounts for the full thermal journey not just the exit temperature."
  ],
  overviewImage: overviewImg.src,
  featuresTitle: "Key Features of Seppa Tunnel Coolers and Performance Benefits",
  featuresSubtitle: "Precision engineered for reliability, energy efficiency, and total thermal control.",
  features: [
    {
      title: "Zone by Zone Temperature Control",
      description: "The worst thing any tunnel cooling system can do is drop product temperature too fast. Thermal shock degrades carbonation integrity, stresses PET preforms, and in glass containers, causes microscopic fractures. Seppa uses variable zone spray headers across 4 to 7 independent thermal stages. Each zone runs at a calculated delta T maintained within +1.5°C."
    },
    {
      title: "Integrated Heat Recovery",
      description: "Seppa's cooling conveyor system includes closed loop heat recovery modules that recirculate warmed water from early zones as pre heated supply for later stages. This cuts net water consumption by 30–40% compared to open-drain designs. Spray nozzles are sanitary, clog resistant, and calibrated for uniform fan patterns."
    },
    {
      title: "Modular Stainless Construction",
      description: "Seppa's tunnel cooler is modular. Sections bolt together, which matters more than it sounds. Lines expand. Throughput targets change. Each module is 304 grade stainless, with low friction surfaces that maintain stable tracking under variable load. That becomes operationally critical at 36,000 bottles per hour."
    }
  ],
  applicationsTitle: "Applications of Tunnel Coolers Across Industries",
  applicationsSubtitle: "Designed to handle the distinct thermal requirements of different product categories.",
  applications: [
    {
      title: "Standard Beverage Lines",
      description: "A tunnel cooler is standard equipment on CSD, beer, and RTD beverage lines. Post pasteurization, product exits at 58–72°C depending on the process. The tunnel cooling system brings this down to 20–25°C before handoff to the labelling and secondary packaging section to protect downstream equipment."
    },
    {
      title: "Dairy and Juice Processing",
      description: "High viscosity, low acid products require longer dwell times and gentler thermal gradients. Seppa's tunnel cooling system for dairy lines uses extended conveyor paths with lower spray velocities, reducing the risk of surface temperature bounce back after product exits the zone."
    },
    {
      title: "Chocolate and Confectionery Lines",
      description: "Chocolate solidification is a crystallization process. Seppa builds each chocolate cooling tunnel with precision airflow control rather than spray water. Zone temperatures run from 18°C to 12°C through the length of the unit, with humidity controlled air to produce consistent gloss and structural integrity."
    }
  ],
  contentBlocks: [
    {
      title: "Benefits of Using a Tunnel Cooler in Production Lines",
      paragraphs: [
        "**Shelf Life and Flavour Stability:** Overcooled and undercooled product both cause problems. Overcooling in carbonated beverages reduces dissolved CO₂ retention when product later warms. Undercooling accelerates microbiological activity in products that weren't fully sterilized. A well calibrated system holds exit temperature within a tight band throughout the production run.",
        "**Reduced Footprint vs. Older Designs:** Early single temperature units required substantial floor length to achieve adequate cooling. Modern multi zone systems accomplish the same thermal work in shorter conveyor paths. Seppa's compact tunnel cooling system configurations recover valuable floor space without sacrificing performance.",
        "**Lower Utility Cost:** In a facility running two 8 hour shifts, the water and energy savings from closed loop recovery versus open drain add up significantly over a production year. Insulation along the full unit body also reduces thermal bleed to the surrounding environment which affects HVAC load."
      ],
      image1: meth2.src,
      reverse: true,
      bgClass: "bg-light"
    }
  ],
  methodology: {
    title: "How a Tunnel Cooler Works",
    subtitle: "Methodology & Process Flow",
    steps: [
      {
        title: "Initial Heat Extraction",
        description: "Product enters the cooling tunnel at the discharge end of the pasteurizer or heater. In zone 1, spray water runs 15–20°C below incoming product surface temperature enough to begin heat extraction without thermal shock.",
        image: meth1.src
      },
      {
        title: "Incremental Cooling Stages",
        description: "As the product moves through successive stages, water temperatures drop incrementally. The cooling conveyor system carries containers at a line speed matched to the thermal load calculation for that specific product container combination.",
        image: meth2.src
      },
      {
        title: "Final Target Attainment",
        description: "Final stages in Seppa's tunnel cooler bring product to within 3–5°C of the target storage temperature. Exit temperature sensors feed back to the zone control system, automatically adjusting spray flow rates.",
        image: meth3.src
      },
      {
        title: "Downstream Handoff",
        description: "Output then hands off directly to downstream bottling line equipment conveyors, labellers, inspection systems, cold fill fillers. All of it depends on product arriving at a consistent, predictable temperature.",
        image: meth4.src
      }
    ]
  },
  whyChoose: {
    title: "Why Choose Seppa Solutions for Tunnel Cooler Systems",
    description: "Seppa Solutions doesn't supply bottling line equipment as a commodity. Engineering starts at the process design phase, where thermal load calculations, line speed targets, and container specifications all feed into the configuration before hardware is ordered.",
    paragraphs: [
      "For standard beverage lines, this means equipment sized to the actual pasteurizer discharge temperature and line throughput, not a generic catalogue unit. For specialized applications, it means a chocolate cooling tunnel built around the crystallization physics of the specific formulation being run.",
      "Major producers trust Seppa's bottling line equipment because the integration work is done properly. A tunnel cooler doesn't get dropped into the line as an afterthought. It's engineered as part of the production system, with full consideration of upstream discharge characteristics and downstream requirements.",
      "Seppa's service team supports each cooling conveyor system through commissioning, calibration, and preventive maintenance programs. A tunnel cooler running at 97% uptime is operationally very different from one running at 91%. At high volume operations, that gap translates directly to missed production targets."
    ],
    image: overviewImg.src
  },
  faqTitle: "Frequently Asked Questions About Tunnel Coolers",
  faqs: [
    {
      question: "How energy efficient is a modern tunnel cooler?",
      answer: "Seppa's tunnel cooler uses closed loop heat recovery, recirculating warm water from early zones to reduce net energy and water consumption. Compared to open drain designs, most installations see 30–40% lower water usage. Insulated panels throughout the cooling tunnel body also reduce thermal bleed to the production environment."
    },
    {
      question: "What maintenance does a cooling conveyor system require?",
      answer: "Spray nozzles need periodic inspection and cleaning to prevent scaling and maintain even distribution. Chain lubrication, water quality monitoring, and zone temperature sensor calibration are the main scheduled tasks. Seppa provides maintenance protocols tailored to each installation."
    },
    {
      question: "How does Seppa's system compare to older single-temperature designs?",
      answer: "Older units can't manage delta T precisely across the full container surface. Seppa's multi zone cooling tunnel uses independently controlled spray headers per zone, giving operators real time adjustment capability. The result is tighter exit temperature control and better container integrity at high line speeds."
    },
    {
      question: "What makes a chocolate cooling tunnel different from a beverage cooling tunnel?",
      answer: "Chocolate is sensitive to moisture, so a chocolate cooling tunnel uses controlled humidity air rather than spray water. The temperature profile is shallower and longer to support proper beta V crystal formation. Seppa engineers each unit around the specific product and belt width rather than adapting standard bottling line equipment."
    },
    {
      question: "Can Seppa's tunnel cooling system scale with production growth?",
      answer: "Yes. Modular construction means sections can be added to extend the conveyor path without replacing the whole unit. Each Seppa installation is designed with expansion in mind from the initial configuration stage."
    }
  ]
};

const TunnelCoolerPage = () => {
  return <PackagingPageLayout data={pageData} />;
};

export default TunnelCoolerPage;
