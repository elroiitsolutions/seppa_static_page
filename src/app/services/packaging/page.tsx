import React from 'react';
import PackagingPageLayout, { PackagingPageData } from '@/components/packaging/PackagingPageLayout';

import bannerImg from '@/assets/packaging/generated/modern_beverage_factory_1781701623841.png';
import overviewImg from '@/assets/packaging/can/overview.jpg';
import img1 from '@/assets/packaging/can/Can-Filling-Packaging-Line.webp';
import img2 from '@/assets/packaging/can/filling.png';
import over from '@/assets/packaging/can/gtl-packaging-filling-line-scheme.webp';

import meth1 from '@/assets/packaging/can/commissing.jpeg';
import meth2 from '@/assets/packaging/can/install.webp';
import meth3 from '@/assets/packaging/can/training.webp';
import meth4 from '@/assets/packaging/can/overview.jpg';

const pageData: PackagingPageData = {
  title: "Packaging",
  breadcrumbName: "Packaging",
  rootBreadcrumbName: "Services",
  rootBreadcrumbPath: "/services",
  headerImage: bannerImg.src,
  overviewTitle: "Packaging Machine Technology: Engineering the Future of End-of-Line Production",
  overviewDescription: "A packaging machine is rarely the part of a production line that gets the spotlight. The fermenters, the filling stations, the labeling units those get the tours. But ask any plant manager where a line actually breaks, and the answer is almost always the same: the end.",
  overviewsubDescription: [
    "A packaging machine that can't keep pace with everything upstream turns a fast, efficient process into a bottleneck overnight. That's the uncomfortable truth Seppa Solutions has built its business around.",
    "Modern packaging equipment isn't just a box closer anymore. It's the last quality checkpoint before product leaves the building, and in a market where shelf readiness can make or break a brand's first impression, that checkpoint matters more than most people realize. A pack that arrives crushed, mislabeled, or unevenly stacked doesn't just cost a customer it costs trust."
  ],
  overviewImage: overviewImg.src,
  contentBlocks: [
    {
      title: "Why the packaging machine is the line's real test",
      paragraphs: [
        "Here's the thing about high speed production: upstream stations can run beautifully and still get undone by what happens at the end. Industrial packaging machines exist precisely because manual handling can't keep up with modern throughput demands, and even small inconsistencies compound fast at scale. A single misaligned carton on a line running thousands of units per hour isn't a minor glitch it's lost minutes, lost product, and sometimes a full stoppage.",
        "This is where OEE or how smoothly your line is actually running becomes the one number you really need to watch. It takes your uptime, your speed, and your product quality and bundles them into a single reality check for your floor. Sadly, the end of the line is usually where that number takes a beating.",
        "If your packaging machine is constantly hitting you with tiny micro stops, annoying jams, or minor misfeeds, it quietly bleeds your efficiency dry and those are losses that are incredibly hard to claw back anywhere else in the distillery."
      ],
      image1: img1.src,
      reverse: true
    },
    {
      title: "Where this actually gets used",
      paragraphs: [
        "Versatility is the whole point of a well engineered packaging equipment lineup. A pharmaceutical client packing blister cards has almost nothing in common with a beverage producer running cartons off a filling line different fragility, different regulatory requirements, different throughput targets.",
        "Food grade bundling needs gentle handling and clean in place compatibility; heavy industrial goods need crush resistance and a case packing machine that can build a pallet load that survives a cross-country freight haul without shifting.",
        "That's not a side note it's the actual engineering problem. A packaging machine that's overbuilt for delicate goods wastes money. One that's underbuilt for heavy product fails in the field. Seppa designs the case packing machine and surrounding packaging equipment around what's actually moving through the line, not a generic template."
      ],
      image1: img2.src,
      reverse: false,
      bgClass: "bg-light"
    },
    {
      title: "What automation actually buys a manufacturer",
      paragraphs: [
        "The ROI conversation around automated packaging systems tends to get reduced to \"fewer people on the line,\" but that's a narrow read. Consistent stack quality matters just as much a human packer's accuracy drifts across an 8 hour shift; a properly tuned industrial packaging machines doesn't.",
        "Reduced labour overhead is real, but so is reduced rework, reduced product damage in transit, and fewer customer complaints tied to inconsistent presentation.",
        "Micro-stops are the silent killer of throughput numbers. They're too short to show up as a major outage on a shift report, but they happen often enough to quietly tank OEE over a month. Automated packaging systems, properly synchronized through PLC integration, are designed to minimize exactly that kind of bleed."
      ],
      image1: img1.src,
      reverse: true
    }
  ],
  featuresTitle: "Engineering under the hood: what separates a good packaging machine from a great one",
  featuresSubtitle: "Precision and integration dictate the success of end-of-line packaging. Our solutions deliver exactly that through the following core engineering features:",
  features: [
    { title: "Modular Servo-Driven Architecture", description: "Seppa's machines are built around modular, servo driven architecture meaning individual stations can be adjusted, swapped, or upgraded without tearing apart the whole line. It shortens changeover time and keeps maintenance localized." },
    { title: "PLC and SCADA Integration", description: "Seppa designs for synchronization upstream filling speeds, conveyor timing, and case packing cycles all talking to each other in real time. When a filler slows down for a CIP cycle, the packaging side knows immediately." },
    { title: "Intuitive Human-Machine Interface", description: "A well-designed HMI surfaces the handful of things that actually need attention jam location, fault codes, changeover settings without burying them under menus nobody has time to dig through during a shift." },
    { title: "Precision Handling & Material Waste", description: "Every misformed carton, every dropped product, every over applied strip of tape is waste. Tighter tolerances in the industrial packaging machines forming and sealing stations cut that waste at the source." }
  ],
  whyChoose: {
    title: "Why manufacturers keep coming back to Seppa",
    description: "We didn't get a reputation among packaging machinery manufacturers by accident. FMCG companies running multi shift, high SKU operations need a partner who understands that an industrial packaging machine has to work at 2 a.m. on the night shift just as reliably as it does during a daytime walkthrough with the plant manager.",
    paragraphs: [
      "Logistics-heavy operations need case packing machine output that survives the supply chain, not just the factory floor. Seppa's engineering history goes back further than packaging machinery manufacturers our roots are in PET blow molding, where precision tolerances aren't optional; they're the difference between a bottle that holds pressure and one that doesn't.",
      "Twenty five years of that kind of exacting work shaped how we think about packaging more broadly. We've carried that same standard into packaging for food and beverage, health and beauty, and pharmaceutical clients, where the package itself often does as much selling as the product inside it.",
      "On a crowded shelf, a package that looks like an afterthought gets passed over; one engineered with intent gets picked up. That's not a marketing slogan it's a measurable effect on a brand's bottom line, and it's part of why we treat packaging design as inseparable from the packaging machine that produces it."
    ],
    image: over.src
  },
  methodology: {
    title: "Packaging Methodology & Integration Process",
    steps: [
      {
        title: "Site Specific Throughput Analysis",
        description: "It starts with an honest look at what the line can actually move and where the current constraints sit. From there, the packaging equipment gets selected or customized to match that reality.",
        image: meth1.src
      },
      {
        title: "PLC Integration",
        description: "Syncing the new automated packaging systems into existing line controls. Conveyor timing and case packing cycles all talk to each other in real time.",
        image: meth2.src
      },
      {
        title: "High Speed Testing",
        description: "High speed testing of the case packing machine interface, run under conditions that mimic actual production load, not idealized lab conditions.",
        image: meth3.src
      },
      {
        title: "Full Line Validation",
        description: "Full line validation closes the loop, confirming the whole system not just the new equipment in isolation performs at the throughput it was designed for.",
        image: meth4.src
      }
    ]
  },
  faqTitle: "Frequently Asked Questions",
  faqs: [
    {
      question: "How much maintenance does an industrial packaging machine actually require?",
      answer: "Less than people expect, if it's specified correctly upfront. Modular architecture means routine maintenance happens on individual stations without halting the entire line, and predictive monitoring through SCADA can flag wear before it becomes a failure."
    },
    {
      question: "Can automated packaging systems scale as our production grows?",
      answer: "Yes that's the point of modular design. Adding capacity often means adding or upgrading a station rather than replacing the whole packaging machine."
    },
    {
      question: "How does a case packing machine improve palletization density?",
      answer: "By building more consistent, tightly tolerant case patterns. Inconsistent hand packed cases leave gaps; packaging machine built cases stack predictably, which means more product per pallet and per truck."
    },
    {
      question: "What actually separates top packaging machinery manufacturers from the rest?",
      answer: "Honestly, it's whether they engineer around your specific product and throughput or sell you a standard unit and hope it fits. The difference shows up six months in, not on day one."
    },
    {
      question: "Why should Seppa Solutions be the next packaging machine investment?",
      answer: "Because we've spent twenty five years solving precision packaging problems, starting with PET blow molding and extending into full line packaging equipment. That history shows up in how the packaging machine hold tolerance under real production stress."
    }
  ]
};

const PackagingServicePage = () => {
  return <PackagingPageLayout data={pageData} />;
};

export default PackagingServicePage;
