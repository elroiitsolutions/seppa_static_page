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
  title: "Spare Parts & Logistics Training",
  breadcrumbName: "Spare Parts",
  rootBreadcrumbName: "Services",
  rootBreadcrumbPath: "/services",
  headerImage: bannerImg.src,
  overviewTitle: "Spare Parts: The Difference Between Planned Maintenance and an Unplanned Shutdown",
  overviewDescription: "Nobody budgets for a 3 a.m. line stoppage. But that's exactly when a worn bearing or a degraded seal decides to fail, and what happens next depends on one thing: whether the right spare parts are sitting on a shelf or sitting in a shipping container somewhere overseas.",
  overviewsubDescription: [
    "Operational continuity isn't really about the big capital equipment, it's about whether the small, replaceable components keep that equipment running. A proactive maintenance strategy built around reliable spare parts is what separates a plant that absorbs a failure in twenty minutes from one that loses a week of output.",
    "SEPPA holds a large inventory of recommended and frequently required spare parts in its own service warehouse, precisely so that gap between \"something broke\" and \"it's running again\" stays measured in hours, not weeks."
  ],
  overviewImage: overviewImg.src,
  contentBlocks: [
    {
      title: "Why component reliability is a numbers problem",
      paragraphs: [
        "Mean time between failures (MTBF) is the metric that should be driving spare parts strategy, and too often isn't. Every component has a failure curve, and the plants that track it know roughly when a given part is statistically likely to need replacement, long before it actually fails on the line. That's the difference between ordering spare parts on a schedule and ordering them in a panic.",
        "Non OEM components muddy this picture badly. A part that looks like a drop in replacement but wasn't engineered to the same tolerance throws off system alignment in ways that aren't obvious right away. The machine keeps running, just slightly off spec, and that mismatch accelerates wear on everything around it.",
        "It's worth saying plainly: not using genuine SEPPA components raises the odds of a breakdown that isn't a quick fix. In some cases the damage is permanent, and a repair that should take a day stretches into months of downtime and lost productivity."
      ],
      image1: img1.src,
      reverse: true
    },
    {
      title: "What's actually in a spare parts inventory",
      paragraphs: [
        "A useful way to think about industrial spare parts is by where they sit on the line, because the engineering demands differ at each stage. Conveyor spare parts handle constant mechanical load, belts, rollers, bearings, drive components, and they fail predictably from friction and cyclic stress. Keeping conveyor spare parts in stock matters because a conveyor failure doesn't just stop one station, it stops everything downstream of it.",
        "Filling machine spare parts are a different animal entirely. Precise liquid dosing depends on tight tolerances in valves, nozzles, and seals, and minor wear changes the fill volume before anyone notices on a quality check.",
        "Then there are packaging machine spare parts, which keep output consistent at the end of the line: forming components, sealing elements, sensors, and the wear items inside servo driven stations. Tracking packaging machine spare parts wear on a fixed schedule is part of what keeps that end of line consistency from slipping."
      ],
      image1: img1.src,
      reverse: false,
      bgClass:"bg-light"
    }
  ],
  featuresTitle: "Engineering standards behind the parts",
  featuresSubtitle: "Precision manufacturing defines part longevity and line performance.",
  features: [
    { title: "CNC Machined Tolerances", description: "Produced to certified material traceability standards, so every part can be tracked back to its material batch and machining run. Tolerances aren't a marketing detail; they're the reason a part performs." },
    { title: "Wear-Resistant Polymers & Steels", description: "Specified based on what a component actually experiences in service, not a generic catalogues spec. A roller under constant friction load needs a different material profile than a seal exposed to cleaning chemicals." },
    { title: "Compatibility Testing", description: "Seppa's parts go through fit and function verification before they ship, so what arrives on site performs at OEM spec from the first run, not after a break in period of adjustments." }
  ],
  applicationsTitle: "Where this matters across the plant floor",
  applicationsSubtitle: "Different lines demand different spare part priorities.",
  applications: [
    { title: "High Pressure Beverage Lines", description: "Unforgiving about filling machine spare parts specifically, because pressure inconsistency at the filler shows up as foaming, underfilling, or seal failure almost immediately." },
    { title: "Heavy Duty Assembly Lines", description: "Sustained mechanical load over long runs, where robust industrial machine spare parts earn their cost and a thin inventory becomes a liability fast." }
  ],
  whyChoose: {
    title: "What genuine spare parts actually buy you",
    description: "The ROI case for spare parts is straightforward once total cost of ownership replaces unit price as the comparison.",
    paragraphs: [
      "Extended asset life is the obvious benefit, but reduced energy consumption from proper alignment is the one plants underestimate. A component running out of tolerance makes the motor or drive system work harder to compensate, and that extra draw adds up across thousands of operating hours.",
      "Seppa's genuine spare parts are built around a simple guarantee: optimized efficiency, maximized productivity, increased performance, low energy consumption, and the peace of mind that comes from not wondering whether a part is going to hold up.",
      "Seppa keeps a large inventory of the most frequently required spare parts in its own service warehouse, specifically so a plant isn't waiting on a six week lead time when a line goes down. Rapid response procurement for conveyor spare parts and the ability to track down even obscure packaging equipment parts on demand are why Seppa ends up as the default call when something fails unexpectedly."
    ],
    image: over.src
  },
  methodology: {
    title: "Spare Parts Provisioning Methodology",
    steps: [
      {
        title: "Diagnostic Assessment",
        description: "Identifying which components on a given line are wear prone, and how often they're likely to need replacement.",
        image: meth1.src
      },
      {
        title: "Inventory Level Optimization",
        description: "Setting stocking levels for critical spare parts based on actual failure data, not guesswork.",
        image: meth2.src
      },
      {
        title: "Expedited Global Shipping",
        description: "Handling the parts that aren't stocked locally with prioritized logistics ensuring minimal downtime.",
        image: meth3.src
      },
      {
        title: "Onsite Technical Integration",
        description: "Technical support during installation makes sure the integration goes smoothly, shrinking the mean time to repair.",
        image: meth4.src
      }
    ]
  },
  faqTitle: "Frequently Asked Questions",
  faqs: [
    { question: "What actually happens when a plant uses non genuine industrial machine spare parts?", answer: "Often nothing dramatic at first. The real cost shows up later, in accelerated wear on adjacent components and reduced equipment lifespan that's hard to trace back to the original substitution." },
    { question: "Why keep an inventory of critical conveyor spare parts on hand?", answer: "Because conveyor failures cascade. A single bearing or belt failure stops every station downstream of it, and the cost of that idle time almost always exceeds the cost of stocking conveyor spare parts in the first place." },
    { question: "How does Seppa guarantee the quality of its filling machine spare parts?", answer: "Through certified material traceability and compatibility testing before shipment, so dosing precision matches OEM specification from installation." },
    { question: "Is it worth paying more for genuine spare parts over cheaper alternatives?", answer: "Almost always, once total cost of ownership is the comparison instead of sticker price. The energy savings and avoided secondary damage usually pay for the price difference within the first year." },
    { question: "Why is Seppa Solutions the right partner for spare parts sourcing?", answer: "Because the inventory, the technical expertise, and the rapid response logistics all exist for the same reason: keeping a plant from losing days of production over a part that should have been on the shelf." }
  ]
};

const SparePartsPage = () => {
  return <PackagingPageLayout data={pageData} />;
};

export default SparePartsPage;
