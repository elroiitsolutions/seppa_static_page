import React from 'react';
import PackagingPageLayout, { PackagingPageData } from '@/components/packaging/PackagingPageLayout';
import imgA from '@/assets/packaging/generated/brewery_line_wide_1781701502517.png';
import imgB from '@/assets/packaging/generated/beer_bottling_closeup_1781701513819.png';
import imgC from '@/assets/packaging/generated/modern_beverage_factory_1781701623841.png';
import imgD from '@/assets/packaging/generated/stainless_steel_tanks_1781701637471.png';
import imgE from '@/assets/packaging/generated/spirits_distillery_wide_1781701553769.png';
import imgF from '@/assets/packaging/generated/wine_production_wide_1781701527332.png';
import imgG from '@/assets/packaging/generated/csd_filler_wide_1781701435025.png';
import imgH from '@/assets/packaging/generated/glass_bottling_wide_1781701406159.png';
import meth4 from '@/assets/packaging/can/training.webp';

const pageData: PackagingPageData = {
  title: "Complete Beer Production Line From Brewing to Packaging",
  breadcrumbName: "Beer Lines",
  rootBreadcrumbName: "Complete Lines",
  rootBreadcrumbPath: "/complete-lines",
  headerImage: imgA.src,
  overviewTitle: "Complete Beer Production Line From Brewing to Packaging",
  overviewDescription: "Beer is biologically fragile. From the moment yeast finishes in the fermentation vessel, every pump, valve, transfer line, and filling head downstream is a potential source of quality loss. An integrated beer production line exists to close those gaps to move liquid from brewhouse to sealed container without introducing oxygen, microbial contamination, or pressure instability.",
  overviewsubDescription: [
    "In a large-scale beer manufacturing plant, fermentation vessel discharge rates, bright beer tank pressures, carbonation set points, and filler throughput targets must work as a single system, not as adjacent departments that happen to share a building. Seppa Solutions has been engineering this integration for over 50 years, with more than 7,000 installations across small craft operations and full-scale industrial facilities worldwide."
  ],
  overviewImage: imgB.src,
  featuresTitle: "Key Components of a Complete Beer Line",
  featuresSubtitle: "Understanding the core functions that keep a beer production line efficient and hygienic.",
  features: [
    {
      title: "Fermentation Storage and Transfer",
      description: "Conditioning tanks hold finished beer under controlled CO₂ back-pressure, typically 1.5 to 2.5 bar depending on style. Transfer to the bright beer tank uses oxygen-free purging protocols CO₂ pre evacuation of receiving vessels before liquid arrives because dissolved oxygen pickup at this stage is essentially irreversible. A properly engineered beer line targets DO below 50 parts per billion at the bright beer tank outlet."
    },
    {
      title: "Filtration",
      description: "Most lager and ale styles require diatomaceous earth or membrane filtration before packaging. The beer line moves product through these stages under constant back-pressure to prevent CO₂ break out, which destabilizes carbonation and creates foaming problems at the filler."
    },
    {
      title: "Carbonation",
      description: "Inline carbonation modules dose CO₂ into the beer stream via high precision mass flow controllers. Volume targets typically run +0.05 volumes CO₂ of specification. Seppa's carbonation systems integrate directly with beer packaging line controls and adjust dose rates automatically when filler speed changes."
    },
    {
      title: "The Beer Packaging Line",
      description: "This is where product integrity is either preserved or lost. Seppa's beer packaging line uses isobaric filling technology: the filling vessel and container are brought to equal CO₂ pressure before liquid transfer begins, eliminating the pressure differential that causes foaming and CO₂ loss. Electronic filling valves individually controlled per filling head deliver fill volumes within +1 ml at speeds exceeding 60,000 bottles per hour on high capacity lines."
    }
  ],
  contentBlocks: [
    {
      title: "Beer Production Process Flow",
      paragraphs: [
        "A functional beer production line follows a defined sequence from the bright beer tank to the palletizer.",
        <strong key="flow" className="text-black font-bold block my-4 text-base md:text-lg">Bright beer tank → deaeration → carbonation → filler → crowner/capper → pasteurizer → labeler → date and batch coder → packer → palletizer → stretch wrapper.</strong>,
        "Seppa covers the full scope, including its proprietary KomboPure aseptic filling system for sensitive products requiring sterile barrier environments. The beer bottling line stage is where dissolved oxygen control matters most. Premium lager and ale products typically target less than 10 ppb total package oxygen.",
        "Seppa's beer bottling line achieves this through CO₂ counterpressure filling, nitrogen snifting at the crowner, and inline DO monitoring with closed loop feedback to the filler. No manual intervention is needed between product changeovers.",
        "Servo-driven conveyor timing buffers containers between stations across the beer bottling line, absorbing speed mismatches before they become pile ups or line stops. Container agitation during stoppages is one of the more overlooked causes of CO₂ loss on high speed lines the control architecture here is not incidental."
      ],
      image1: imgC.src,
      reverse: true
    },
    {
      title: "Custom Brewery Solutions for Every Production Scale",
      paragraphs: [
        "No two facilities share the same floor layout, utility supply, or product mix. A beer production line built for a 50,000 hl/year craft operation looks fundamentally different from one at a 2 million hl/year beer manufacturing plant not just in size, but in automation architecture, CIP frequency, changeover design, and control system complexity.",
        "Seppa's engineering team starts with a feasibility study and CAD-based layout planning before any fabrication begins. This lets the beer production line be shaped around the specific footprint, keeping utility runs short and civil works minimal. The modular design allows sections to be added as volume grows a craft brewer might start with a 10,000 BPH beer bottling line and expand to 30,000 BPH on the same control platform without starting over.",
        "The Kombo block integrates blowing, rinsing, filling, and capping into a single compact unit, reducing the overall beer line footprint by up to 40% versus conventional standalone configurations. For operators needing validated aseptic processing, KomboPure provides sterile barrier technology within the same modular framework. Seppa also engineers its PET bottles with up to 25% less material weight while improving top-load strength by over 30% a measurable input cost reduction without compromising shelf aesthetics or structural performance."
      ],
      image1: imgD.src,
      reverse: false,
      bgClass:"bg-light"
    }
  ],
  whyChoose: {
    title: "Why Choose Seppa Solutions for Complete Beer Lines?",
    paragraphs: [
      "Capital equipment in brewing gets evaluated on three things: initial quality, long term reliability, and what it actually costs to run over a 15 to 20 year horizon.",
      "Seppa's beer production line technology holds up across all three. Electronic filling valves and intelligent CIP integration cut product waste at startup and between cycles. High precision conveyor controls reduce unplanned stops that translate directly into lost production volume. Standardized components across Seppa's equipment families simplify spare parts management and reduce repair downtime relevant in any beer manufacturing plant running multiple shifts.",
      "Seppa provides structured service programs, remote diagnostics, operator training, and upgrade pathways after commissioning. The beer production line is designed to hit specified efficiency rates not just at handover, but five and ten years into production."
    ],
    image:imgB.src
  },
  methodology: {
    title: "Complete Beer Line Methodology",
    steps: [
      {
        title: "Feasibility and Process Design",
        description: "Production targets, raw material specifications, utility availability, and floor constraints are assessed before a single component is specified. Brewhouse output data drives the beer production line design not standard cataloge assumptions.",
        image: imgE.src
      },
      {
        title: "CAD Layout and P&ID Development",
        description: "Full 3D layout modelling of the beer packaging line and upstream stages prevents interference conflicts and optimizes maintenance access before fabrication begins.",
        image: imgF.src
      },
      {
        title: "Fabrication and Factory Acceptance Testing",
        description: "Equipment is built to hygienic engineering standards (EHEDG, 3-A where applicable) and run at full production speed in Seppa's factory before shipment.",
        image: imgG.src
      },
      {
        title: "Installation and Commissioning",
        description: "Seppa field engineers handle mechanical installation, utility connection, and sterile commissioning of the beer packaging line. Commissioning includes CIP validation and DO measurement across all critical transfer points.",
        image: imgH.src
      },
      {
        title: "Training and Handover",
        description: "Operators are trained across the complete beer line tank management through palletizing and stretch wrapping before formal handover.",
        image: meth4.src
      }
    ]
  },
  faqTitle: "Frequently Asked Questions",
  faqs: [
    {
      question: "How does a beer bottling line minimize dissolved oxygen pickup?",
      answer: "Seppa's beer bottling line uses CO₂ counterpressure filling with electronic valve control, container pre evacuation before liquid enters, and nitrogen snifting at the seaming station. Inline DO sensors monitor the process continuously with closed-loop feedback to the filler. Total package oxygen below 10 ppb is achievable under normal operating conditions. Whether that matters for your product depends on style and shelf life targets worth discussing at feasibility."
    },
    {
      question: "What throughput can a beer production line achieve?",
      answer: "Seppa configures each beer production line to the capacity established in the feasibility study, ranging from 5,000 to over 80,000 containers per hour. Throughput on any beer production line is effectively constrained by the slowest process step typically the filler or pasteurizer so Seppa balances station capacity across the line rather than over specifying individual machines."
    },
    {
      question: "How is a complex beer line maintained?",
      answer: "CIP circuits are integrated into every wetted component, with automated sequences running between batches without manual disassembly. Preventive maintenance intervals are scheduled through the beer line control system, and Seppa's remote diagnostics platform identifies wear indicators before equipment fails. Spare part stocking recommendations come from actual line data, not generic service manuals."
    },
    {
      question: "What is the ROI of an automated beer manufacturing plant?",
      answer: "It varies. A fully automated beer manufacturing plant typically recovers capital cost within four to seven years through reduced labour, lower product losses, and higher overall line efficiency but that range shifts depending on incumbent labour costs and current wastage rates. Seppa builds production models at the feasibility stage so the numbers are based on your facility's actual cost structure."
    },
    {
      question: "Can Seppa upgrade an existing beer line?",
      answer: "Yes. Seppa's modular equipment architecture lets new technology integrate into existing beer line infrastructure without replacing everything upstream or downstream. Control system upgrades, new filling heads, and carbonation modules have been retrofitted into operational beer production line installations with minimal downtime and no major civil work."
    }
  ]
};

const BeerLineMachinesPage = () => {
  return <PackagingPageLayout data={pageData} />;
};

export default BeerLineMachinesPage;
