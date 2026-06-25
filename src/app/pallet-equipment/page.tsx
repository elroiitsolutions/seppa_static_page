import React from 'react';
import PackagingPageLayout, { PackagingPageData } from '@/components/packaging/PackagingPageLayout';

import bannerImg from '@/assets/processing/generated/processing_banner_1781759101340.png';
import overviewImg from '@/assets/blowing/generated/blowing_overview_1781759662496.png';
import img1 from '@/assets/processing/generated/processing_cb1_1781759122683.png';
import img2 from '@/assets/processing/generated/processing_cb2_1781759136791.png';
import img3 from '@/assets/blowing/generated/blowing_cb3_1781759707330.png';
import img4 from '@/assets/blowing/generated/blowing_cb1_1781759674231.png';
import over from '@/assets/processing/generated/processing_whychoose_1781759182691.png';

import meth1 from '@/assets/processing/generated/processing_meth1_1781759196548.png';
import meth2 from '@/assets/processing/generated/processing_meth2_1781759215088.png';
import meth3 from '@/assets/processing/generated/processing_meth3_1781759228926.png';
import meth4 from '@/assets/processing/generated/processing_meth4_1781759240871.png';

const pageData: PackagingPageData = {
  title: "Palletizing Machine Solutions",
  breadcrumbName: "Pallet Equipment",
  rootBreadcrumbName: "Equipments",
  rootBreadcrumbPath: "/equipments",
  headerImage: bannerImg.src,
  overviewTitle: "Palletizing Machine Solutions: Where End of Line Automation Actually Earns Its Keep",
  overviewDescription: "Walk into any busy production facility around 2 a.m., and you'll see where margins are won or lost. It's rarely in the mixer, the filler, or the labeller. It's at the very end that last stretch where finished goods either flow out smoothly toward the trucks or pile up in a slow, expensive bottleneck. That's the moment a wellbuilt palletizing machine quietly proves its worth, day after day, shift after shift.",
  overviewsubDescription: [
    "At Seppa Solutions, we've spent years designing systems for that exact moment. Not glossy showroom demos, but real lines running real product in plants that can't afford an hour of downtime.",
    "Strip away the jargon, and a palletizing system is simply the handshake between your production line and your warehouse. Cases, sacks, crates, bottles whatever your plant produces arrive in a stream, and somewhere between that stream and the outbound truck, they need to become neat, stable, transportable loads.",
    "A good system has to read incoming product, calculate interlock patterns on the fly, manage center of gravity as the stack grows, and hand off to wrapping all while keeping pace with whatever the line in front of it is doing. A modern palletizing machine handles 1,200 to 2,400 cases an hour with placement repeatability you can measure in fractions of a millimeters."
  ],
  overviewLayout:"stacked",
  overviewImage: overviewImg.src,
  contentBlocks: [
    {
      title: "Types of Palletizing Solutions (and Why the Choice Matters)",
      paragraphs: [
        "The Robotic Palletizer: For plants juggling 30, 50, or 100+ SKUs, a robotic palletizer is usually the smarter bet. A 4 axis or 6 axis articulated arm gives you the flexibility to switch from cartons to sacks to shrink-wrapped bundles inside the same shift. What really sells operators is the adaptive end of arm tooling. Vacuum, fork, clamp, magnetic, hybrid grippers the gripper is matched to the product.",
        "The Gantry Style Automatic Palletizer: When throughput trumps flexibility, the traditional gantry automatic palletizer still rules. You see them on beverage lines, chemical lines, anywhere SKU count is low and case count is brutal. Seppa's automatic palletizer uses a sliding palletizing head built from rectified steel, fed by pre formation roller conveyors.",
        "Picking the Right Pallet Equipment: How many SKUs? How often do they change? What's your peak hourly rate? Light, unsteady goods favour flexible pallet equipment. Heavy, uniform loads favour brute force gantry pallet equipment."
      ],
      image1: img1.src,
      reverse: true
    },
    {
      title: "The Benefits Nobody Argues With",
      paragraphs: [
        <div key="benefits-list" className="space-y-4">
          <p className="text-base md:text-lg text-[#101934] font-bold mb-4">
            When customers ask about ROI, we usually skip the slide deck and just talk numbers from real installations:
          </p>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-seppa-red mt-2 flex-shrink-0"></span>
              <span className="text-base md:text-lg text-gray-600 leading-relaxed">
                <strong className="text-[#101934] font-bold">Stack quality stops being a coin flip.</strong> Algorithmic pattern execution means every pallet looks like the last one.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-seppa-red mt-2 flex-shrink-0"></span>
              <span className="text-base md:text-lg text-gray-600 leading-relaxed">
                <strong className="text-[#101934] font-bold">Ergonomic risk drops to zero.</strong> Nobody should be lifting 20 kg cases six hundred times a shift. A robotic palletizer ends that conversation.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-seppa-red mt-2 flex-shrink-0"></span>
              <span className="text-base md:text-lg text-gray-600 leading-relaxed">
                <strong className="text-[#101934] font-bold">OEE climbs, usually meaningfully.</strong> We see 18-27% gains within six months, mostly from faster changeovers and fewer micro stoppages.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-seppa-red mt-2 flex-shrink-0"></span>
              <span className="text-base md:text-lg text-gray-600 leading-relaxed">
                <strong className="text-[#101934] font-bold">Damage claims fall.</strong> On fragile SKUs, in transit damage drops 40-60% once a properly tuned robotic palletizer takes over.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-seppa-red mt-2 flex-shrink-0"></span>
              <span className="text-base md:text-lg text-gray-600 leading-relaxed">
                <strong className="text-[#101934] font-bold">Labor gets redeployed, not eliminated.</strong> Operators move from stacking to supervision, quality, and improvement work higher value roles that are harder to fill manually.
              </span>
            </li>
          </ul>
        </div>
      ],
      image1: img4.src,
      reverse: false,
      bgClass:"bg-white"
    }
  ],
  featuresTitle: "Key Features That Actually Matter",
  featuresSubtitle: "Spec sheets are full of features that look impressive on paper and matter very little on the floor. Here's what we've learned to focus on with our pallet handling equipment:",
  features: [
    { title: "Pattern programming that operators can actually use", description: "If your shift supervisor needs a PhD to add a new pattern, the system will sit unused. Seppa's HMI lets operators build and validate new patterns in minutes." },
    { title: "Motion control with real feedback loops", description: "Servo driven axes, closed-loop position monitoring, jerk limited acceleration. The result: +0.5 mm repeatability and no shocked glassware." },
    { title: "Tooling that doesn't fight you", description: "Modular tool changers and dual zone vacuum circuits mean a single palletizing machine can swing between SKUs without somebody breaking out a wrench." },
    { title: "Safety that doesn't kill cycle time", description: "Light curtains, area scanners, software defined exclusion zones Category 3 performance, but configured so the cell doesn't trip every time a forklift drives past." },
    { title: "Built for the long haul", description: "Sealed bearings, self lubricating bushes, variable frequency drives. Our pallet handling equipment routinely clocks 8,000+ hours of MTBF, which is what 24/7 operations actually need." }
  ],
  applicationsTitle: "Where Palletizing Systems Earn Their Place",
  applicationsSubtitle: "The honest answer is: almost everywhere discrete goods move. A precision palletizing machine doesn't care much about the industry label. It cares about the package, the pattern, and the pace.",
  applications: [
    { title: "Food and beverage", description: "Glass bottles, cartons, tetrapaks fragile, fastmoving, unforgiving of rough handling. Neck handling grippers and soft motion profiles make Seppa's pallet handling equipment a natural fit." },
    { title: "Industrial chemicals", description: "Sacks, pails, IBC totes, sometimes in explosion rated environments. Payload management and electrical compliance matter more than raw speed." },
    { title: "Pharmaceuticals", description: "GMP compliance, audit trails, serialization. The pallet equipment here has to talk cleanly to track and trace systems." },
    { title: "Beverage crates and returnables", description: "High cycle robotic cells that handle empties on the way in and full bottles on the way out, often from the same footprint." },
    { title: "Paper, building materials, bulk goods", description: "Heavy gantry systems, stack integrity verified layer by layer." }
  ],
  whyChoose: {
    title: "Why Seppa Solutions?",
    description: "We're not the biggest name in the catalogue, and we're fine with that. What we offer instead is engineering attention.",
    paragraphs: [
      "Custom integration. From the MEC ARM compact robotic cell to full gantry configurations, every install is engineered for the actual site.",
      "PLC changeovers you control. New pallet patterns are programmed in house by your team, not by a service call to Italy.",
      "A complete ecosystem. Empty pallet magazines, roller conveyors, layer pad inserters, CE compliant safety guards Seppa's pallet equipment is a turnkey suite, not a pile of components.",
      "Real support after the truck leaves. Operator training, spares availability, self certification documentation. Stretch wrapping built in closing the loop for light or unstable goods."
    ],
    image: over.src
  },
  methodology: {
    title: "How the Process Actually Flows",
    steps: [
      {
        title: "Product Arrives & Buffering",
        description: "Cases hit the accumulation conveyor; photo eyes and scanners confirm what's coming. Upstream zones arrange products into rows matching the active pattern recipe.",
        image: meth1.src
      },
      {
        title: "The Palletizer Executes",
        description: "The robotic palletizer (or gantry head) executes. Layer by layer, under servo control, with collision avoidance running in the background.",
        image: meth2.src
      },
      {
        title: "Slip Sheets & Wrapping",
        description: "Automated pad inserters drop layer cushions where the pattern calls for them. The completed pallet exits the automatic palletizer to an integrated stretch wrapper for multilayer film containment.",
        image: meth3.src
      },
      {
        title: "Discharge",
        description: "Wrapped pallets are weighed, labelled, and pushed to outbound staging. That's it. Boring when it works which is exactly what you want from end of line equipment.",
        image: meth4.src
      }
    ]
  },
  faqTitle: "Frequently Asked Questions",
  faqs: [
    {
      question: "How much maintenance does a robotic palletizer really need?",
      answer: "Less than people expect. A modern robotic palletizer wants lubrication around the 2,000 hour mark, quarterly EOAT seal checks, and an annual servo recalibration. Predictive monitoring on torque and cycle time usually flags emerging issues weeks ahead of failure."
    },
    {
      question: "What kind of footprint does an automatic palletizer take up?",
      answer: "A full gantry automatic palletizer infeed, pallet magazine, discharge typically lives in 35 to 55 m². Compact robotic cells like the MEC ARM fit into 18 to 25 m², which is why they win retrofit projects so often."
    },
    {
      question: "How does pallet handling equipment improve stack safety?",
      answer: "By taking guesswork out of the equation. Engineered pallet handling equipment enforces pattern compliance, validates interlock geometry, and checks center of gravity before the pallet leaves the cell. The load shifts and trailer collapses that haunt manual operations simply stop happening."
    },
    {
      question: "Why is Seppa Solutions a serious choice for palletizing machine innovation?",
      answer: "Because we've been doing this long enough to know what breaks, what lasts, and what customers actually need on day 700, not just day one. Our palletizing machine designs run in food, beverage, chemical, and pharmaceutical plants across multiple continents."
    },
    {
      question: "Can existing lines be retrofitted, or does it have to be a greenfield build?",
      answer: "Retrofit is the norm, not the exception. Seppa's modular pallet equipment is built to mate with the conveyors, ERP, and WMS you already have. Most installations don't disrupt upstream operations at all."
    }
  ]
};

const PalletEquipmentPage = () => {
  return <PackagingPageLayout data={pageData} />;
};

export default PalletEquipmentPage;
