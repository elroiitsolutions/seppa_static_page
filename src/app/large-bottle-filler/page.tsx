import React from 'react';
import PackagingPageLayout, { PackagingPageData } from '@/components/packaging/PackagingPageLayout';

import bannerImg from '@/assets/processing/generated/processing_banner_1781759101340.png';
import overviewImg from '@/assets/blowing/generated/blowing_overview_1781759662496.png';
import img1 from '@/assets/processing/generated/processing_cb1_1781759122683.png';
import over from '@/assets/processing/generated/processing_whychoose_1781759182691.png';

import meth1 from '@/assets/processing/generated/processing_meth1_1781759196548.png';
import meth2 from '@/assets/processing/generated/processing_meth2_1781759215088.png';
import meth3 from '@/assets/processing/generated/processing_meth3_1781759228926.png';
import meth4 from '@/assets/processing/generated/processing_meth4_1781759240871.png';

const pageData: PackagingPageData = {
  title: "Large Bottle Filler",
  breadcrumbName: "Large Bottle Filler",
  rootBreadcrumbName: "Equipments",
  rootBreadcrumbPath: "/equipments",
  headerImage: bannerImg.src,
  overviewTitle: "Large Bottle Filler: Engineering the Future of High-Volume Liquid Processing",
  overviewDescription: "Global demand for high volume hydration, industrial chemicals, and commercial liquid products keeps climbing and standard bottling lines simply weren't built for it.",
  overviewsubDescription: [
    "When you're dealing with large containers, the weight alone changes everything. The fluid dynamics are different. The structural loads are different. You can't just scale up a standard line and expect it to hold.",
    "The SEPPA PLC Series was built specifically for this. It handles the substantial mass of large format containers while keeping filling precision tight and contamination risk low. That balance structural rigidity paired with fine tuned automation is what separates a machine designed for this work from one pressed into service for it."
  ],
  overviewImage: overviewImg.src,
  contentBlocks: [
    {
      title: "Overview of the Large Bottle Filling Machine",
      paragraphs: [
        "A filled 5 gallon container weighs roughly 42 pounds. Run that at 40 bottles per minute and you're moving serious kinetic energy through your line. Standard packaging equipment isn't reinforced to handle that kind of sustained load you get component fatigue, alignment drift, and eventually downtime.",
        "The SEPPA system is built around a heavy gauge, sanitary stainless steel monoblock frame that absorbs the continuous vibration and mechanical stress of high speed operation. That structural backbone matters more than people realize until something goes wrong with a lighter duty machine.",
        "The fluid side is equally demanding. Dumping large volumes of liquid quickly through a restricted neck opening creates turbulence, foaming, and displacement none of which you want. The system addresses this with controlled laminar flow and multi stage filling velocities, keeping cycle times fast without the product loss that comes with sloppy fluid dynamics."
      ],
      image1: img1.src,
      reverse: true
    }
  ],
  featuresTitle: "Key Features and Technical Specifications",
  featuresSubtitle: "The SEPPA Evats PLC Series combines rugged mechanical design with sophisticated electronic control. Every component is engineered to maximize uptime, reduce production costs, and provide the line flexibility required to handle various container shapes and sizes.",
  features: [
    { title: "High Torque Conveying", description: "Moving heavy, empty containers into a washing chamber and transferring filled, heavy containers to a capping station requires a robust drivetrain. Supported by high torque, variable frequency drive (VFD) conveyors, these systems feature rugged neck support guides." },
    { title: "Precision Filling Manifolds", description: "The core filling architecture utilizes stainless steel descending filling heads. These assemblies lower directly into the neck of the container to control fluid distribution, running high pressure/high flow and low pressure/low flow cycles." },
    { title: "Dual Stage Delivery", description: "Managed by the central PLC, the dual stage delivery prevents air bubble formation, manages product displacement, and ensures even filling across all containers regardless of line speed variations." },
    { title: "Automated Torque Control", description: "Capping large format containers properly means applying precise, repeatable torque to seat the closure without stripping threads or damaging the neck finish. Caps are sorted and delivered via an automated sorter to the pneumatic capping assembly." }
  ],
  whyChoose: {
    title: "Why Choose Seppa Solutions for Large Bottle Filling Machines",
    description: "Major bottling plants worldwide select Seppa Solutions because of our industrial engineering pedigree and focus on production uptime. Our automatic bottle filling machine platforms are built for continuous multi shift operations.",
    paragraphs: [
      <ul key="whyChooseList" className="space-y-4 my-6">
        <li className="flex items-start gap-3">
          <span className="w-2 h-2 rounded-full bg-seppa-red mt-2 flex-shrink-0"></span>
          <span className="text-gray-600 text-base md:text-lg leading-relaxed"><strong className="text-[#101934] font-bold">Empty Bottle In Feed:</strong> Empty containers are efficiently queued via heavy duty conveyor rails.</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="w-2 h-2 rounded-full bg-seppa-red mt-2 flex-shrink-0"></span>
          <span className="text-gray-600 text-base md:text-lg leading-relaxed"><strong className="text-[#101934] font-bold">3 to 14 Stage Cleaning:</strong> Deep sanitization takes place across both internal and external surfaces.</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="w-2 h-2 rounded-full bg-seppa-red mt-2 flex-shrink-0"></span>
          <span className="text-gray-600 text-base md:text-lg leading-relaxed"><strong className="text-[#101934] font-bold">Descending Valve Fill:</strong> Controlled fluid delivery actively prevents splashing and turbulence.</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="w-2 h-2 rounded-full bg-seppa-red mt-2 flex-shrink-0"></span>
          <span className="text-gray-600 text-base md:text-lg leading-relaxed"><strong className="text-[#101934] font-bold">Torque Monitored Sealing:</strong> Mechanical capping assemblies apply precise sealing pressures.</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="w-2 h-2 rounded-full bg-seppa-red mt-2 flex-shrink-0"></span>
          <span className="text-gray-600 text-base md:text-lg leading-relaxed"><strong className="text-[#101934] font-bold">Leak Testing & Validation:</strong> Strict quality checks confirm a reliable seal before discharge.</span>
        </li>
      </ul>,
      "Choosing Seppa Solutions means investing in long term line flexibility. The SEPPA PLC Series features a multi bottle size handling system, allowing operators to change between different shapes and sizes of a large bottle with minimal changeover parts. This flexibility enables brands to launch new packaging designs and container sizes on a single production line without purchasing entirely new machinery.",
      "Additionally, our systems integrate advanced sensor networks that provide \"No Bottle No Wash\" and \"No Bottle No Fill\" protection. These features prevent product waste, eliminate chemical loss, and protect the machinery from dry cycling damage."
    ],
    image: over.src
  },
  methodology: {
    title: "Working Methodology of the Bottle Washing, Filling & Capping Process",
    steps: [
      {
        title: "Fully Automated Loading",
        description: "Empty containers travel the in feed conveyor, where a pneumatic robotic system with optical sensors lifts and places them into the bottle holders. This removes manual handling and ensures clean, consistent positioning.",
        image: meth1.src
      },
      {
        title: "Multi Stage Washing",
        description: "Sanitation runs 3 to 14 stages. The wash segment uses Nylo Brussel scrubbers and angular jet spray nozzles (0° to 15°) utilizing filtered water, hot detergent, hot water, and a final ozonized water rinse.",
        image: meth2.src
      },
      {
        title: "Precision High Speed Filling",
        description: "After washing, containers index into the fill zone. Stainless steel filling heads drop into the neck while PLC controlled valves run high flow/low flow cycles. Fluid enters along the interior container walls.",
        image: meth3.src
      },
      {
        title: "Torque Monitored Capping",
        description: "The container moves straight from filling into capping. The cap sorter delivers the closure, and the pneumatic head applies it at pre set rotational torque. Every container passes automated leak detection.",
        image: meth4.src
      }
    ]
  },
  faqTitle: "Frequently Asked Questions",
  faqs: [
    {
      question: "How does the sanitation cycle ensure complete microbiological safety?",
      answer: "Up to 14 wash stages combining hot detergent, hot water rinses, and a final ozonized water rinse through 0° to 15° angular jet nozzles. That sequence handles both internal and external contamination before anything gets near the fill station."
    },
    {
      question: "What are the throughput advantages of upgrading to an automatic water filling machine?",
      answer: "Production speeds up to 40 BPM, reduced labour costs, and fewer human handling errors. Automated indexing, pneumatic robotic loading, and synchronized fill/cap cycles cut down on both product waste and container damage."
    },
    {
      question: "How does the liquid filling machine prevent foaming during high volume transfers?",
      answer: "Descending fill heads lower into the container neck and deliver fluid via a two stage cycle high pressure/high flow first, then low pressure/low flow. That transition keeps flow laminar and prevents the turbulence that causes foaming and air entrapment."
    },
    {
      question: "What routine maintenance does the machine require?",
      answer: "Regular lubrication of conveyor bearings, inspection of pneumatic cylinder seals, and calibration of the capping torque heads. The stainless steel construction and modular component design make access and sanitation washdowns straightforward, which keeps scheduled maintenance downtime short."
    },
    {
      question: "Why does Seppa Solutions lead the industry in large bottle automation?",
      answer: "Solid engineering standards, monoblock structural designs, and line layouts that can handle multiple container sizes without extended changeovers. Pair that with reliable PLC/HMI automation and water recycling systems, and the total cost of ownership is competitive over the life of the machine."
    }
  ]
};

const LargeBottleFillerPage = () => {
  return <PackagingPageLayout data={pageData} />;
};

export default LargeBottleFillerPage;
