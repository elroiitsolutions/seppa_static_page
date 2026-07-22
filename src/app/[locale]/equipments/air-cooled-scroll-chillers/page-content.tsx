import React from 'react';
import PackagingPageLayout, { PackagingPageData } from '@/components/packaging/PackagingPageLayout';

import meth1 from '@/assets/processing/generated/processing_meth1_1781759196548.png';
import meth2 from '@/assets/processing/generated/processing_meth2_1781759215088.png';
import meth3 from '@/assets/processing/generated/processing_meth3_1781759228926.png';
import meth4 from '@/assets/processing/generated/processing_meth4_1781759240871.png';

const pageData: PackagingPageData = {
  title: "Air Cooled Scroll Chillers: The Smarter Way to Control Process Heat",
  breadcrumbName: "Air Cooled Scroll Chillers",
  rootBreadcrumbName: "Equipments",
  rootBreadcrumbPath: "/equipments",
  headerImage: "/images/equipments/immersion_chiller_banner.png",
  overviewTitle: "Air Cooled Scroll Chillers",
  overviewDescription: "Most facilities managers have fought the cooling tower battle at least once. Water treatment schedules, drift eliminator replacements, scale buildup in condenser tubes, biological treatment logs. It's a real maintenance burden — and for many production environments, it's simply not worth it.",
  overviewsubDescription: [
    "That's where the air cooled chiller changes the calculation. Strip away the water circuit entirely, replace it with forced-air heat rejection, and you get a system that's cheaper to install, significantly simpler to run, and far easier to site. Add scroll compressor technology to that, and you also get quieter operation, better part-load efficiency, and a mechanical design with fewer wear components than reciprocating alternatives.",
    "Seppa Solutions builds air cooled chiller for production environments where thermal control isn't optional and downtime isn't acceptable."
  ],
  overviewImage: "/images/equipments/chiller_overview.png",
  contentBlocks: [
    {
      title: "Condenser Coils and Fan Arrays",
      paragraphs: [
        "The condenser is where an air cooled chiller either performs or wastes energy. Seppa uses micro-channel condenser coils with fin densities calibrated to the ambient temperature range at the installation site not a generic global specification. More surface area means better heat transfer per unit of refrigerant flow.",
        "The fan cluster that pushes air through the coil is equally important. Fan motors of a fixed speed always operate at their maximum irrespective of external temperatures, although this approach may be acceptable during peak loads in summers but not advisable when nights come or even colder periods. The designs of Seppa's air-cooled chillers feature VFD controlled fan blades. data consistently shows 30–45% reduction in fan energy draw at part-load conditions compared to fixed-speed designs.",
        "Electronic expansion valves manage refrigerant charge distribution, maintaining optimal superheat across the full ambient range. Without this, an air cooled water chiller running through a hot summer afternoon behaves very differently than one running at midnight in October. The control system accounts for both."
      ],
      image1: "/images/equipments/chiller_overview.png",
      reverse: true
    },
    {
      title: "Benefits of Air Cooled Scroll Chillers",
      paragraphs: [
        "The water-cooled versus air-cooled efficiency argument is real, but it ignores a lot of cost that doesn't show up in the COP figure.",
        "Water treatment for a cooling tower is ongoing chemistry. Biocides, scale inhibitors, pH management, drift eliminator replacement, annual tower cleaning. An air cooled chiller has none of that. Quarterly condenser coil cleaning, refrigerant pressure checks, and annual electrical inspection. That's the maintenance schedule.",
        "Installation is also simpler. An air cooled water chiller ships as a largely complete refrigeration package. It needs a concrete pad, a power connection, and chilled water piping. No cooling tower civil work. No condenser water pumps. No interconnecting pipework between tower and machine room. For facilities that need cooling operational quickly, this matters.",
        "Multiple smaller scroll chiller units also provide built-in redundancy. If one compressor circuit trips, others continue running. A single large water-cooled machine with a backup doesn't give you the same flexibility. For production environments where process temperature upsets cause real losses, this architecture is worth thinking about seriously."
      ],
      image1: "/images/equipments/immersion_chiller_banner.png",
      reverse: false,
      bgClass:"bg-light"
    }
  ],
  featuresTitle: "Key Features and Technical Specifications",
  featuresSubtitle: "The defining component is the scroll compressor itself. Two spiral elements — one fixed, one orbiting — trap refrigerant pockets and compress them continuously toward a central discharge point.",
  features: [
    { title: "No Piston Mechanics", description: "No pistons. No suction valves. No reciprocating motion producing vibration." },
    { title: "Low Noise and Vibration", description: "This simply implies that the hermetic scroll chiller is less noisy, generates vibrations to a lesser degree, and has high performance during partial load operations compared to piston chiller systems." },
    { title: "High Volumetric Efficiency", description: "The volumetric efficiency level still ranges from 85 to 92 percent even when the chiller operates at 50% of its capacity." }
  ],
  applicationsTitle: "Applications Across Industries",
  applicationsSubtitle: "The air cooled chiller isn't a compromise product for facilities that can't afford water-cooled systems. It's the right choice for specific applications.",
  applications: [
    { title: "Semiconductor Cleanrooms", description: "Semiconductor cleanrooms can't tolerate water leak risk near sensitive equipment. Closed-loop chilled water from an air cooled chiller sited outside the clean zone eliminates that risk entirely." },
    { title: "Automotive Paint Shops & Welding Cells", description: "Run high-duty-cycle loads year-round; the absence of cooling tower maintenance translates directly to uptime." },
    { title: "Data Centers & Edge Compute", description: "Often lack the mechanical room space for water-cooled infrastructure — a rooftop air cooled water chiller piped to computer room air handlers solves the problem without structural complexity." },
    { title: "Food Processing Facilities", description: "Have hygiene reasons to keep cooling towers away from production areas. An air cooled chiller keeps the refrigeration circuit physically separated from anything near product contact zones. The industrial chiller footprint stays outside. The chilled water circuit stays clean." }
  ],
  whyChoose: {
    title: "Why Seppa Builds Air Cooled Chillers the Way It Does",
    description: "",
    paragraphs: [
        "Seppa doesn't select components from a catalogues and assemble standard packages. The engineering team starts with the customer's process load profile, local climate data, available footprint, and acoustic constraints — then works backward to the machine specification.",
        "Major FMCG and heavy industry customers come back to Seppa's air cooled water chiller designs because the machines perform at actual site conditions, not just at laboratory test points. Corrosion-resistant epoxy fin coatings extend coil life in coastal and high-humidity environments. Multi-compressor circuits balance run hours across scroll sets to prevent early wear on any single unit. BMS connectivity via Modbus and BACnet integrates into facility management infrastructure without third-party gateways.",
        "The result is an industrial chiller that runs the way it was specified to run at 45°C ambient in July, at 15°C ambient in January, at 40% load on a night shift, and at 100% load on a peak production day."
    ],
    image: "/images/equipments/chiller_overview.png"
  },
  methodology: {
    title: "Methodology of Air Cooled: How the Refrigeration Cycle Works",
    steps: [
      {
        title: "Evaporator Heat Absorption",
        description: "Hot process fluid returns from production loads and enters the evaporator. Low-pressure refrigerant on the other side of the heat exchanger absorbs that heat and evaporates. The scroll compressor draws in the vapor, compresses it raising both pressure and temperature and discharges superheated vapor into the condenser coil.",
        image: meth1.src
      },
      {
        title: "Condenser Heat Rejection",
        description: "The ac cooling fan array forces ambient air across the condenser fins. Heat transfers from hot refrigerant to moving air. The refrigerant condenses back to liquid.",
        image: meth2.src
      },
      {
        title: "Expansion and Recirculation",
        description: "The electronic expansion valve reduces the pressure, lowers the temperature, and sends it back into the cycle via the evaporator. The chill water circuit works in parallel fashion, whereby water supplied from the evaporator at set point (normally 7-12°C) is circulated through the process and comes back again warmer.",
        image: meth3.src
      },
      {
        title: "Smart Control System",
        description: "The air cooled chiller control system controls both the circuits at the same time. One variable the refrigeration cycle can't control is ambient temperature. Every 5°C rise above design conditions reduces capacity by roughly 3–6% and increases compressor power draw.",
        image: meth4.src
      }
    ]
  },
  faqTitle: "Frequently Asked Questions",
  faqs: [
    { question: "How much maintenance does an air cooled chiller actually need?", answer: "Quarterly: condenser coil cleaning, refrigerant pressure checks, electrical inspection. Annually: expansion valve calibration, compressor oil analysis, full electrical termination review. Compare that to a cooling tower system, which adds continuous water treatment, biological testing, and annual tower cleaning on top of the same refrigeration maintenance scope." },
    { question: "How does ambient temperature affect air cooled scroll chiller performance?", answer: "Every 5°C above design ambient reduces air cooled scroll chiller capacity by 3–6% and increases compressor power by 2–4%. Seppa's selection process sizes machines against peak local ambient temperature, not ARI standard test conditions, so customers aren't surprised by summer performance." },
    { question: "Why does ac cooling fan selection matter so much for energy costs?", answer: "The ac cooling fan system runs 8,000+ hours per year and can represent 15–25% of total chiller power draw at peak. VFD fan control saves significant energy at part-load and mild ambient conditions. Fixed-speed fans waste that energy every hour they run below peak conditions." },
    { question: "How do I size the right scroll chiller for my process?", answer: "Calculate peak process heat load, add a 15–20% margin, then specify scroll chiller capacity at your local peak ambient — not at ARI standard conditions. Undersizing causes supply temperature drift exactly when you can't afford it. Seppa's team runs this calculation with actual site climate data as part of the selection process." },
    { question: "What makes Seppa Solutions different from other industrial chiller suppliers?", answer: "Seppa treats the industrial chiller as process equipment, not commodity refrigeration. The engineering engagement starts at load profile analysis and runs through commissioning. Customers get a machine built for their specific operating conditions — not a standard unit with a label change." }
  ]
};

const AirCooledScrollChillersPage = () => {
  return <PackagingPageLayout data={pageData} />;
};

export default AirCooledScrollChillersPage;
