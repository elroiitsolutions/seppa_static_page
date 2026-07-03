import React from 'react';
import PackagingPageLayout, { PackagingPageData } from '@/components/packaging/PackagingPageLayout';

import meth1 from '@/assets/processing/generated/processing_meth1_1781759196548.png';
import meth2 from '@/assets/processing/generated/processing_meth2_1781759215088.png';
import meth3 from '@/assets/processing/generated/processing_meth3_1781759228926.png';
import meth4 from '@/assets/processing/generated/processing_meth4_1781759240871.png';

const pageData: PackagingPageData = {
  title: "Water Cooled Scroll Chiller: Industrial Cooling Systems by Seppa Solutions",
  breadcrumbName: "Water Cooled Scroll Chillers",
  rootBreadcrumbName: "Equipments",
  rootBreadcrumbPath: "/equipments",
  headerImage: "/images/equipments/immersion_chiller_banner.png",
  overviewTitle: "Overview of Water Cooled Scroll Chillers for Industrial Cooling",
  overviewDescription: "When a production facility runs around the clock, temperature deviation isn't just an efficiency problem it's a production risk. The water cooled chiller solves this with a degree of thermal precision that air-cooled alternatives simply can't match in high-load environments.",
  overviewsubDescription: [
    "Unlike air-cooled systems that reject heat into ambient surroundings (and suffer badly when ambient temperatures climb), a water cooled chiller routes all rejected heat into a closed-loop condenser water circuit. That circuit carries the thermal load away reliably, independent of outdoor conditions.",
    "Combine that with scroll compressor architecture — which uses two interlocking spiral elements to compress refrigerant with minimal friction, no suction or discharge valves, and nearly zero vibration and you get an industrial cooling system that stays stable under exactly the kind of continuous-duty pressure that manufacturing demands.",
    "Seppa Solutions engineers these systems for production environments where \"close enough\" doesn't exist. Every water cooled chiller in our lineup is designed around one principle: reliable, consistent chilled water supply, day after day, without thermal drift."
  ],
  overviewImage: "/images/equipments/chiller_overview.png",
  contentBlocks: [
    {
      title: "Benefits of Using Water Cooled Scroll Chillers",
      paragraphs: [<React.Fragment key="benefits">
        The advantages over air-cooled alternatives become clear fast when you run the numbers.<br/>
        <span className="font-bold"><span className='text-seppa-red text-xl'> • </span>Energy Efficiency:</span> A well-configured water cooled chiller typically achieves EER values of 5.5–7.0 at standard conditions. Air-cooled systems in the same capacity range tend to land between 3.0–4.5. The difference compounds over an annual operating cycle. For a 100-ton installation running 6,000 hours per year, that efficiency gap represents significant electrical cost savings.<br/><br/>
        <span className="font-bold"><span className='text-seppa-red text-xl'> • </span>Indoor Heat Load:</span> Air-cooled systems reject heat indoors (or into the immediate building environment if rooftop-mounted). A water cooled chiller keeps that heat out of the facility entirely. In temperature-controlled manufacturing areas, this reduces the load on building HVAC — an indirect efficiency gain that often gets ignored in system comparisons.<br/><br/>
        <span className="font-bold"><span className='text-seppa-red text-xl'> • </span>Noise:</span> Scroll compressors are inherently quieter than reciprocating alternatives. Without the air-cooled condenser fans that run continuously at high CFM, a water cooling system installation is substantially quieter. This matters in facilities where noise regulations apply or where workers are in close proximity.<br/><br/>
        <span className="font-bold"><span className='text-seppa-red text-xl'> • </span>Longevity:</span> Seppa's industrial water chiller units are built for 15–20 year service lives under industrial operating conditions. Corrosion-resistant materials, robust compressor selection, and conservative refrigerant circuit design contribute to low maintenance requirements and high mean-time-between-failure values.<br/><br/>
        </React.Fragment>
      ],
      image1: "/images/equipments/chiller_overview.png",
      reverse: true
    }
  ],
  featuresTitle: "Key Features & Technical Specifications",
  featuresSubtitle: "Built for maximum thermal precision and stability in high-load industrial environments.",
  features: [
    { title: "Hermetic Scroll Compressors", description: "The scroll compressor is the reason this technology holds up so well. Compared to reciprocating alternatives, scroll geometry delivers higher volumetric efficiency — typically above 90% at rated conditions — with far lower mechanical stress. Seppa integrates variable-frequency drives (VFDs) into compressor motor control, reducing electrical consumption by 30–45%." },
    { title: "High-Performance Condensers", description: "Seppa uses shell-and-tube designs with enhanced copper tubes and corrosion-resistant tube sheets, sized for low refrigerant-side pressure drop and high heat-transfer coefficients." },
    { title: "Evaporator & Refrigerant", description: "Seppa's flooded shell-and-tube evaporators maintain approach temperatures between 1–1.5°C, maximizing the temperature lift. Refrigerant charge is optimized to specific geometry to avoid overcharge/undercharge issues." }
  ],
  applicationsTitle: "Industrial Applications Across Manufacturing Sectors",
  applicationsSubtitle: "The versatility of a water cooled chiller is one of its underrated strengths.",
  applications: [
    { title: "Plastic Injection & Blow Molding", description: "Mold temperature directly controls cycle time and part quality. Seppa holds coolant supply within ±0.5°C of setpoint, which tightens cycle times and reduces reject rates." },
    { title: "Laser Cutting & Processing", description: "High-power laser heads generate localized thermal loads that destabilize beam quality if coolant temperature fluctuates. Seppa systems provide necessary temperature stability." },
    { title: "Chemical & Pharmaceutical", description: "Reaction kinetics are temperature-dependent. An unstable industrial water chiller can alter product chemistry. Seppa's systems are designed for the temperature accuracy required." },
    { title: "Food & Beverage Processing", description: "Hygienic process cooling for jacketed tanks, plate heat exchangers, and CIP circuits. Designs accommodate food-grade material standards and sanitary connection requirements." }
  ],
  whyChoose: {
    title: "Why Choose Seppa Solutions for Water Cooled Scroll Chillers",
    description: "",
    paragraphs: [
        "Seppa isn't a catalogue supplier. We're engineers who design systems around your process, not the other way around.",
        "Every water cooled chiller we produce goes through thermal performance validation before shipment. We specify VFD configurations, condenser tube materials, refrigerant charge, and control logic based on actual facility operating conditions not generic defaults.",
        "We support turnkey delivery: system design, fabrication, installation supervision, commissioning, and post-commissioning service contracts. For clients specifying their first large industrial cooling system, that full-scope capability matters because equipment performance depends as much on installation quality as on the hardware itself."
    ],
    image: "/images/equipments/chiller_overview.png"
  },
  methodology: {
    title: "Working Methodology of Water Cooled Scroll Chillers",
    steps: [
      {
        title: "Evaporator Phase",
        description: "Warm process fluid enters the evaporator. There, it gives up heat to the refrigerant — which absorbs that energy and evaporates.",
        image: meth1.src
      },
      {
        title: "Compression Phase",
        description: "The refrigerant vapor moves to the scroll compressor, where it is compressed because of the spiraling nature to increase pressure and temperature.",
        image: meth2.src
      },
      {
        title: "Condenser Heat Rejection",
        description: "The high-pressure refrigerant moves into the shell and tube condenser, where condenser water removes the heat from the refrigerant and circulates through the water cooling circuit (typically a cooling tower).",
        image: meth3.src
      },
      {
        title: "Expansion and Re-cooling",
        description: "Condensation occurs again, followed by movement to the expansion valve. The cycle runs efficiently due to the low condensing temperature provided by cooling tower water (typically 29–32°C).",
        image: meth4.src
      }
    ]
  },
  faqTitle: "Frequently Asked Questions",
  faqs: [
    { question: "What maintenance does a water cooled chiller require?", answer: "An annually water-cooled chiller maintenance routine includes brushing of condenser tubes, leak testing of the refrigeration circuit, oil analysis of the compressors, and maintenance of water treatment. Fouling of evaporator and condenser tubes must be inspected after 12 to 18 months. With good water treatment practices, overhaul will normally occur every 5 to 7 years." },
    { question: "How does water quality affect a water cooling system?", answer: "Poor water chemistry is one of the leading causes of premature tube failure. Scaling deposits reduce heat transfer and can require expensive tube cleaning or replacement. Seppa recommends automatic chemical dosing and continuous conductivity monitoring to keep condenser water within specified parameters." },
    { question: "Why is scroll compressor design important for energy savings in a scroll chiller?", answer: "Scroll geometry eliminates the valve losses and pressure pulsations found in reciprocating compressors. The continuous compression arc maintains high volumetric efficiency across a wide range of operating pressures. Combined with VFD control, scroll compressors can modulate output to match actual load." },
    { question: "How do I select the right size industrial water chiller?", answer: "The proper sizing relies on accurate thermal load information such as the rate of flow of the process fluid, the temperature of the inlet and outlet fluid, peak thermal loads, and average thermal loads. Under-sized systems run at 100% capacity constantly; oversized units short cycle and underperform." },
    { question: "Why is Seppa Solutions a trusted water chiller manufacturer for industrial clients?", answer: "Seppa combines in-house thermodynamic design capability with manufacturing control over critical components. We engineer the refrigerant circuit, specify material grades, and validate thermal performance before any unit leaves our facility." }
  ]
};

const WaterCooledScrollChillersPage = () => {
  return <PackagingPageLayout data={pageData} />;
};

export default WaterCooledScrollChillersPage;
