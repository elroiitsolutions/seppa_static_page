import React from 'react';
import PackagingPageLayout, { PackagingPageData } from '@/components/packaging/PackagingPageLayout';

import meth1 from '@/assets/processing/generated/processing_meth1_1781759196548.png';
import meth2 from '@/assets/processing/generated/processing_meth2_1781759215088.png';
import meth3 from '@/assets/processing/generated/processing_meth3_1781759228926.png';
import meth4 from '@/assets/processing/generated/processing_meth4_1781759240871.png';

const pageData: PackagingPageData = {
  title: "Coolant Chiller Shell and Coil Overview for Industrial Cooling Applications",
  breadcrumbName: "Coolant Chillers",
  rootBreadcrumbName: "Equipments",
  rootBreadcrumbPath: "/equipments",
  headerImage: "/images/equipments/coolant_chiller_banner.png",
  overviewTitle: "Coolant Chiller Shell and Coil Overview",
  overviewDescription: "Machine tools depend on a circulating fluid to keep cutting zones, spindles, and workpieces from overheating. That fluid is the coolant water or oil based and its temperature directly governs dimensional accuracy and tool longevity. A coolant chiller does one specific job: pull heat laden fluid from the machine circuit, strip out the accumulated thermal energy, and return it at a controlled setpoint. When the load is high and continuous, the shell and coil condenser is the right architecture for that job.",
  overviewsubDescription: [
    "The shell and coil condenser routes hot process fluid through a helical coil submerged inside a sealed, pressure rated shell. Refrigerant on the shell side absorbs heat through the coil wall. The spiral path keeps wall contact time high and fluid velocity turbulent even at moderate flow rates which is why heat transfer holds up under sustained industrial loads where plate exchangers would foul and lose efficiency over time.",
    "A production ready coolant chiller using this design draws filtered coolant through an inbuilt pump, passes it through the coil side, rejects the heat into the refrigerant loop, and returns cooled fluid to the spindles at target temperature. The units are compact and quiet. Particulate matter passes straight through rather than bridging across narrow plate exchangers."
  ],
  overviewImage: "/images/equipments/chiller_overview.png",
  contentBlocks: [
    {
      title: "Key Features and Technical Specifications for Enhanced Performance",
      paragraphs: [
        "Coil material sets the thermal ceiling. Copper offers conductivity around 390 W/m·K and suits most water based circuits. Stainless steel drops to roughly 16 W/m·K but resists aggressive cutting fluid chemistries that corrode copper over time. Seppa's engineers specify the right alloy based on coolant pH, chloride content, and temperature range not on unit cost.",
        "Helical geometry does more than add surface area. The curved path forces Dean vortices that break the thermal boundary layer at the tube wall, raising the local heat transfer coefficient without higher pump head. The water chiller system achieves rated performance at lower pressure drops than straight tube alternatives, meaning smaller pump motors and lower operating energy over the unit's service life.",
        "Electronic controllers on each cooling water chiller monitor supply temperature, return temperature, flow rate, and compressor discharge pressure in real time. PID based control holds setpoint deviation within +0.5°C under varying heat loads."
      ],
      image1: "/images/equipments/chiller_overview.png",
      reverse: true
    },
    {
      title: "Benefits of Precise Coolant Temperature Control for Machinery",
      paragraphs: [
        "Temperature drift in the coolant loop produces dimensional error at the spindle. Steel expands at roughly 12 µm/m·°C a 5°C swing across a 500 mm workpiece generates 30 µm of thermal growth, enough to push a tolerance critical bore out of specification. A stable industrial water chiller removes that variable entirely.",
        "Tool life follows the same logic. When coolant temperature drifts upward, the delta between cutting edge and fluid narrows, heat extraction slows, and carbide edge wear accelerates. A correctly specified coolant chiller keeps the thermal gradient consistent throughout the operation. Surface finish follows too: coolant temperature oscillation causes cyclical variation in chip formation that leaves measurable texture variation on machined surfaces. Stable chiller water cooling eliminates that process noise.",
        "One more benefit that tends to get overlooked consistent temperature slows fluid degradation. Elevated temperatures accelerate bacterial growth, oxidation, and emulsifier breakdown in water soluble cutting fluids. A well controlled cooling water chiller keeps the bulk fluid below the threshold where degradation accelerates, stretching coolant service intervals."
      ],
      image1: "/images/equipments/chiller_overview.png",
      reverse: false,
      bgClass: "bg-light"
    }
  ],
  applicationsTitle: "Industrial Applications and Use Cases Across Manufacturing Industries",
  applicationsSubtitle: "Coolant Chillers ensure precision across various heavy-duty industrial tasks.",
  applications: [
    { title: "CNC Machining Centres", description: "CNC machining centres are the most common application. Spindle bearings and motor windings generate heat continuously at high speeds, and the machine's internal loop must stay within a narrow band to hold geometric accuracy. Seppa's chiller water cooling systems integrate into both new installations and retrofits with minimal pipework change." },
    { title: "Laser Cutting Systems", description: "Laser cutting systems depend on chiller water cooling to hold resonator and beam path optics at stable temperatures. A 1°C shift can change kerf width on thin sheet work. The coolant chiller on a laser cutter is part of the beam quality chain, not an optional add on." },
    { title: "Plastics Processing", description: "For plastics processing, a correctly sized coolant chiller cuts injection moulding cycle times by pulling heat out of the mould faster, improving part consistency across the run." },
    { title: "EDM Machines", description: "EDM machines run dielectric fluid that doubles as coolant; temperature drift causes dimensional shift in the workpiece. Seppa's EDM configurations use the shell and coil exchange principle, which handles dielectric fluid without the fouling problems that plate type exchangers develop." }
  ],
  whyChoose: {
    title: "Why Choose Seppa Solutions for Reliable Chiller Systems",
    description: "",
    paragraphs: [
      "Seppa Solutions has engineered industrial water chiller units for machine tool applications across India and export markets, from 0.5 TR to 60 TR. Each water chiller system ships with site matched refrigerant charge, factory tested controls, and PLC interface documentation. Every coolant chiller goes through a full load factory run test before dispatch the first time it sees rated thermal load should not be on a customer's shop floor.",
      "Chiller water cooling circuits include dual circuit options for facilities supplying two independent coolant loops at different setpoints from one machine. Each cooling water chiller configuration is fully documented and tested before leaving the factory. Shell and coil condenser assemblies carry material traceability records covering tube alloy, wall thickness, pressure test results, and brazing inspection the paper trail ISO 9001 environments require, provided without making it an upsell."
    ],
    image: "/images/equipments/chiller_overview.png"
  },
  methodology: {
    title: "How the Shell and Coil Cooling Methodology Works Efficiently",
    steps: [
      {
        title: "Coolant Intake",
        description: "Hot coolant exits the cutting zone typically 3°C to 8°C above the supply setpoint. The coolant chiller's pump draws it in through a particle strainer and into the shell and coil condenser. Inside, the fluid spirals through the helical coil while refrigerant at evaporating pressure surrounds it on the shell side entering as a saturated mixture, leaving as superheated vapour.",
        image: meth1.src
      },
      {
        title: "Counter Current Flow",
        description: "Counter current flow, with refrigerant entering at the coolant outlet end, keeps the temperature driving force high across the full exchanger length. That is why the shell and coil condenser outperforms co current designs at equivalent surface area: the differential does not collapse at one end.",
        image: meth2.src
      },
      {
        title: "Refrigerant Cycle",
        description: "The superheated vapour enters the compressor, passes through the condenser, rejects heat to ambient, and expands back through the valve to evaporating pressure.",
        image: meth3.src
      },
      {
        title: "Chilled Coolant Return",
        description: "Chilled coolant then passes through the buffer tank and returns to the machine. The controller trims compressor capacity through hot gas bypass or variable speed adjustment, which is how a modern water chiller system holds +0.5°C stability even as heat load ramps up and down through the machining cycle.",
        image: meth4.src
      }
    ]
  },
  faqTitle: "Frequently Asked Questions About Coolant Chillers",
  faqs: [
    {
      question: "How often does a shell and coil condenser require maintenance?",
      answer: "Less often than a plate exchanger on the same duty. The open tube geometry does not foul the way narrow plate designs do when process fluid carries metallic particulate. Annual tube inspection and coolant analysis covers most installations; Seppa recommends a full internal check every two years for continuous duty environments."
    },
    {
      question: "What separates a standard industrial water chiller from a precision machining coolant chiller?",
      answer: "A standard unit targets general process cooling with wide temperature ranges and catalogue refrigerant charge. A precision machining coolant chiller adds tight PID control at +0.5°C, a buffer tank to damp compressor cycling, and a pump matched to the machine's internal flow resistance. Both use the same core cooling water chiller architecture the difference is how closely controls and sizing are matched to the actual duty cycle."
    },
    {
      question: "How can a facility optimise chiller water cooling performance over time?",
      answer: "Start with coolant quality. Fluids running below pH 8.5 or with high chloride concentration corrode copper coil surfaces and degrade heat transfer. Regular analysis, pH correction, and biocide treatment keep the coil clean. On the refrigerant side, annual superheat and subcooling checks confirm the compressor stays in its efficiency band. Seppa's commissioning reports include baseline data so maintenance teams have a reference point at each annual check."
    },
    {
      question: "Why does water purity matter in a water chiller system?",
      answer: "Scale from hard water reduces effective wall thickness on the heat transfer surface and drops the heat transfer coefficient. A 1 mm calcium carbonate layer can reduce efficiency by 20% or more. Seppa recommends that water chiller system installations on hard-water supplies include a softener or inhibitor program, and sizes pump head with margin for the gradual pressure drop increase scale accumulation produces between service visits."
    },
    {
      question: "Why do manufacturers specify Seppa cooling water chiller systems for production lines?",
      answer: "Reliability of the heat exchanger design matters, but customers come back for the application-specific configuration. A Seppa coolant chiller is specified for the coil material the coolant chemistry actually requires, the refrigerant charge the heat load demands, and the ambient rating the site sees not averaged across a product family."
    }
  ]
};

const CoolantChillersPage = () => {
  return <PackagingPageLayout data={pageData} />;
};

export default CoolantChillersPage;
