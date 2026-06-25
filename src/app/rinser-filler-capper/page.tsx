import React from 'react';
import PackagingPageLayout, { PackagingPageData } from '@/components/packaging/PackagingPageLayout';

// Reusing processing/blowing images due to generation limits
import bannerImg from '@/assets/processing/generated/processing_banner_1781759101340.png';
import overviewImg from '@/assets/blowing/generated/blowing_overview_1781759662496.png';
import img1 from '@/assets/processing/generated/processing_cb1_1781759122683.png';
import img2 from '@/assets/processing/generated/processing_cb2_1781759136791.png';
import img3 from '@/assets/blowing/generated/blowing_cb3_1781759707330.png';
import over from '@/assets/processing/generated/processing_whychoose_1781759182691.png';

import meth1 from '@/assets/processing/generated/processing_meth1_1781759196548.png';
import meth2 from '@/assets/processing/generated/processing_meth2_1781759215088.png';
import meth3 from '@/assets/processing/generated/processing_meth3_1781759228926.png';
import meth4 from '@/assets/processing/generated/processing_meth4_1781759240871.png';

const pageData: PackagingPageData = {
  title: "Rinser Filler Capper Machine",
  breadcrumbName: "Rinser Filler Capper",
  rootBreadcrumbName: "Equipments",
  rootBreadcrumbPath: "/equipments",
  headerImage: bannerImg.src,
  overviewTitle: "Rinser Filler Capper Machine: The Monoblock Standard in Modern Bottling",
  overviewDescription: "Most bottling problems start between stations. A bottle exits the rinser. It waits. Air touches the neck. The filling head drops, but the timing is off by 30 milliseconds. By the time the cap goes on, you have either an underfill, a contamination risk, or a torque variance that fails QA. Nobody blames the individual machines. The machines were probably fine. The problem was the gap between them.",
  overviewsubDescription: [
    "That's the engineering case for a rinser filler capper monoblock. It removes the gaps. A rinser filler capper handles all three stages on a single rotating platform. Rinsing, filling, and capping happen in one synchronised rotation, on a shared frame, under a controlled enclosure. There's no conveyance dead zone between stages, no speed mismatch between three different PLCs, no hygiene risk from ambient air contact during transfer.",
    "SEPPA's EVATS-1000 RFC is built around this logic. The monoblock isn't a convenience feature it's how you get consistent output at 50,000 bottles per hour without tolerating the errors that standalone units accumulate.",
    "A rinsing filling capping machine integrates three sequential bottling operations into a single rotating platform. Bottles enter the monoblock from an infeed starwheel, pass through the rinsing carousel, transfer directly into the filling zone, and exit capped all without leaving the controlled environment of the machine. The EVATS 1000 RFC handles this through a neck handling transfer system. Bottles are gripped at the neck throughout, so the machine accommodates different body shapes and lower grammage PET without requiring height adjustment at the filler."
  ],
  overviewImage: overviewImg.src,
  contentBlocks: [
    {
      title: "Key Components of the RFC Machine",
      paragraphs: [
        <div key="key-components" className="space-y-6 text-base md:text-lg text-gray-600">
          <p>The rfc machine or bottle filling machine in monoblock format breaks into three functional modules, though they share a common mechanical backbone.</p>
          
          <div className="space-y-2">
            <h4 className="text-xl font-bold text-[#101934]">Rotary Rinsing Carousel</h4>
            <p>The rinsing stage inverts PET or glass bottles and flushes them before filling. In SEPPA's design, neck handling carries the bottle through the rinsing arc without a gripping change. This preserves the sterile integrity of the bottle interior if you're switching grippers between stations, you're also introducing contact points. The EVATS 1000 avoids this.</p>
          </div>

          <div className="space-y-2">
            <h4 className="text-xl font-bold text-[#101934]">Gravity and Volumetric Filling Valves</h4>
            <p>SEPPA offers two valve configurations for the rfc machine: gravity filling (EVATS 1000 GT) for cold and hot non carbonated products, and contact less volumetric filling for aseptic and high hygiene applications. The contact less variant uses magnetic flow meters to control fill volume. There are no mechanical parts dipping into the product during the fill cycle, which reduces both contamination pathways and wear. Fill temperatures run from 0°C to 95°C depending on the configuration cold fill for water and spirits, hot fill for juices, milk, and RTD tea.</p>
            <p>The HR variant of the valve handles pulp up to 3 mm in diameter and 10 mm in length, with constant recirculation to prevent pulp settling during stops. This isn't a minor spec detail. If you're filling a juice product with visible pulp and you don't have controlled recirculation, you get inconsistent product distribution and blockages in the valves.</p>
          </div>

          <div className="space-y-2">
            <h4 className="text-xl font-bold text-[#101934]">Capping and Closure Module</h4>
            <p>The capping stage in a rinser filler capper applies consistent torque across every closure. Torque variation is one of the most common quality complaints on bottling lines too loose means leaks and tamper evidence failure, too tight means consumer difficulty opening. SEPPA's pick and place and magnetic capping heads are calibrated for torque consistency, not just cap placement.</p>
          </div>
        </div>
      ],
      image1: img1.src,
      image2: img2.src,
      reverse: true
    }
  ],
  featuresTitle: "Features of the Rinser Filler Capper Machine",
  featuresSubtitle: "The EVATS-1000 RFC is designed for operational teams who have to run it across shifts, not just engineers who configured it once.",
  features: [
    {
      title: "CIP Integration",
      description: "The machine supports high temperature Clean in Place cycles. Dummy bottles engage for sanitation automatically as an option using a bayonet connection that keeps operators from touching the fill valves directly. There are no dynamic gaskets in contact with the product, which means fewer wear parts and simpler CIP validation."
    },
    {
      title: "No Bottle No Fill",
      description: "The rinser filler capper runs entirely mechanical \"no bottle, no fill\" logic. No electronics required. If a bottle isn't present, the valve doesn't open. This reduces product waste and avoids flooding the drip tray during infeed gaps."
    },
    {
      title: "Changeover",
      description: "The rinsing filling capping machine's stainless draining base and neck handling system reduce changeover time between formats. A centralized level adjustment means one operator intervention point, not three."
    },
    {
      title: "Hygienic Design",
      description: "No dead zones or wells inside the valve body. The shutter is sealed by a membrane rather than a dynamic gasket, which protects the filling mechanism from contamination without adding maintenance complexity. The rinsing filling capping machine is also available with a microbiological isolator (ISO 7) enclosure for ultra clean or aseptic applications."
    }
  ],
  applicationsTitle: "Applications Across Industries",
  applicationsSubtitle: "The bottle filling machine configuration changes depending on the product, but the rinser machine stage serves the same function across all of them: clean bottles before filling, without adding contamination. What stays constant is the monoblock architecture.",
  applications: [
    {
      title: "Water and Beverages",
      description: "Cold fill, gravity valves, high speed output to 50,000 bottles per hour. The rinser machine stage is doing light contamination removal here the main case is throughput and format flexibility."
    },
    {
      title: "Juices and RTD Tea",
      description: "Hot fill up to 95°C. The EVATS 1000 GT HF adds a pneumatic recirculation valve, a rotating manifold, and an external recovery tank for recycled product. For pulp containing juices, the HR valve variant with 3 mm pulp clearance handles what standard gravity valves can't."
    },
    {
      title: "Dairy",
      description: "Milk and milk based products require temperature controlled filling and tight hygiene standards. The contact less filling system applies here, keeping metal parts away from the product surface."
    },
    {
      title: "Spirits and Wine",
      description: "The EVATS 1000 GT handles spirits and wine in cold fill mode, with fill to brim capability via the HR valve configuration. Accurate fill volumes matter for both regulatory compliance and presentation."
    },
    {
      title: "Carbonated Beverages and Beer",
      description: "The bottle filling machine has a variant for carbonated fill. This requires isobaric counter pressure to prevent CO₂ loss during filling standard gravity valves don't work here."
    }
  ],
  whyChoose: {
    title: "Why Choose SEPPA Rinser Filler Capper Machines?",
    description: "SEPPA has been building bottling lines for over 50 years. The installed base is above 7,000 systems globally. Each bottle filling machine in that fleet reflects accumulated line engineering across food, dairy, beverage, and spirits sectors.",
    paragraphs: [
      "That's not a marketing number it's a field data set. When you've installed that many lines, you learn where machines fail: the seal geometry in hot fill valves, the torque drift in high speed cappers, the hygiene dead zones that CIP cycles don't reach.",
      "The EVATS 1000 rinser filler capper reflects that. The all AISI 316L stainless contact parts, the membrane sealed shutter, the neck-handling transfer system these aren't features added to a spec sheet. They're engineering responses to failure modes that show up on real production lines.",
      "SEPPA also offers the Kombopure technology for lightweight PET bottle engineering, which works with the RFC's neck-handling system to handle low grammage bottles that conventional grip transfer systems crush or misalign."
    ],
    image: over.src
  },
  methodology: {
    title: "Rinser Filler Capper Machine Methodology",
    steps: [
      {
        title: "Facility Flow Analysis",
        description: "A SEPPA project starts with facility flow analysis. Capacity matched sizing of the rinsing filling capping machine matters before fabrication begins. A line built for 20,000 bottles per hour uses different valve counts, different starwheel geometry, and different drive configurations than one at 50,000.",
        image: meth1.src
      },
      {
        title: "Precision Fabrication",
        description: "Precision fabrication in AISI 304/316/316L, factory acceptance testing, on site installation, and validation of the rinsing filling capping machine against agreed production targets.",
        image: meth2.src
      },
      {
        title: "Validation & Handover",
        description: "SEPPA's team validates fill accuracy, CIP cycle effectiveness, and cap torque consistency before handover. Customers receive a machine that's been confirmed to meet their throughput and hygiene spec not one that needs to be dialled in on the production floor.",
        image: meth3.src
      },
      {
        title: "Modular Expansion",
        description: "The TRI BLOCK configuration adds rinsing, filling, and capping in a single integrated frame available as a modular extension, so lines can be scaled without replacing the core RFC unit.",
        image: meth4.src
      }
    ]
  },
  faqTitle: "Frequently Asked Questions",
  faqs: [
    {
      question: "How often does a high-speed bottle filling machine need scheduled maintenance?",
      answer: "Maintenance intervals depend on product type and run hours. Gravity valves with no dynamic gaskets in product contact have lower wear rates than traditional valve designs. SEPPA recommends scheduled CIP validation, membrane inspection, and torque calibration checks at defined run hour intervals."
    },
    {
      question: "What's the actual benefit of integrating a rinser machine into a monoblock vs. running it as a standalone unit?",
      answer: "The core benefit is contamination control. A standalone rinser machine completes its rinse cycle, then transfers the bottle to a conveyor before the filler. That gap is a contamination window. In the monoblock, the bottle moves from the rinser directly into the filler via a controlled neck-handling starwheel. No ambient air exposure between stages."
    },
    {
      question: "How does an rfc machine compare to running separate units at the same output speed?",
      answer: "In practice, speed matching between three separate drive systems creates synchronisation errors that accumulate into jams, misfills, and downtime. The rfc machine runs on one synchronised drive. When the line slows, all three stages slow at the same rate. You also need less floor space, fewer operators, and one CIP cycle instead of three."
    },
    {
      question: "What happens if we need to scale the rinser filler capper capacity in three years?",
      answer: "The EVATS 1000 RFC is modular. Valve count can be increased within the existing frame footprint up to the machine's rated configuration. For larger capacity jumps, SEPPA engineers size the upgrade path during the initial project so the mechanical infrastructure supports expansion without a full line replacement."
    },
    {
      question: "Can the same rinsing filling capping machine handle both hot fill and cold fill products?",
      answer: "Yes. The GT HF configuration ships with a hot fill kit pneumatic recirculation valve, rotating manifold, and recovery tank that can be fitted to the base GT machine. This gives operators flexibility to run both product types on a single line without separate machines for each fill temperature range."
    }
  ]
};

const RinserFillerCapperPage = () => {
  return <PackagingPageLayout data={pageData} />;
};

export default RinserFillerCapperPage;
