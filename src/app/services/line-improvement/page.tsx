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
  title: "Line Improvement",
  breadcrumbName: "Line Improvement",
  rootBreadcrumbName: "Services",
  rootBreadcrumbPath: "/services",
  headerImage: bannerImg.src,
  overviewTitle: "Production Line Automation: Engineering the Future of High Velocity Manufacturing",
  overviewDescription: "At SEPPA, we hold onto a simple idea: a machine should keep getting better long after it leaves our workshop.",
  overviewsubDescription: [
    "That belief is what drives our team to keep tinkering, refining, and pushing technology forward work that quietly lifts machine performance, sharpens product output, and chips away at operating cost month after month.",
    "These improvements are not just for brand new equipment. We routinely fold them into older machines too, giving our customers a steady drip of upgrades that stretch equipment life and pull more value from assets they already own. Some upgrades are software based, others involve a bit of hardware swapping we plan around a short, predictable downtime window so nothing blows up your production schedule."
  ],
  overviewImage: overviewImg.src,
  contentBlocks: [
    {
      title: "Introduction to Production Line Automation Solutions",
      paragraphs: [
        "If you spend any time around manufacturing today, you notice something pretty quickly. The plants pulling ahead and the ones falling behind are usually divided by a single thing production line automation. The market moves too fast now for facilities still running on manual workflows and tired control systems.",
        "Here is something we see all the time: a 20 year old packaging hall, retrofitted carefully with servo drives, smart sensors, and a modern PLC backbone, suddenly starts behaving like a completely different facility. Cycle times tighten up. Rejects drop. Operators stop spending their days putting out fires.",
        "At Seppa Solutions, this is the kind of work we genuinely enjoy building industrial automation solutions that respect the money you have already spent while unlocking output you did not know you had."
      ],
      image1: img1.src,
      reverse: true
    },
    {
      title: "Benefits of Upgrading Existing Production Lines",
      paragraphs: [
        "When production line automation is handled well, the benefits show up surprisingly fast. The first one is obvious real production efficiency improvement. We routinely see 30–45% cycle time reductions once manual stations are swapped for integrated robotic cells.",
        "The second one is reining in the chaos caused by human error, which still quietly eats up more OEE than anything else in most mature plants. Steady manufacturing productivity improvement only really happens when you have high fidelity, data driven automation underneath it.",
        "Maybe the most underrated benefit, though you can grow capacity without building a whole new plant. A well targeted production efficiency improvement project, done through modular upgrades, can often double effective output for a fraction of greenfield cost."
      ],
      image1: img1.src,
      reverse: false,
      bgClass:"bg-light"
    }
  ],
  featuresTitle: "Key Features and Capabilities of Automated Production Lines",
  featuresSubtitle: "A modern automatic production line is an orchestra of synchronized actions. When our engineers design a line, three things are non negotiable:",
  features: [
    { title: "High Speed Material Handling", description: "We lean on servo driven indexers, vacuum transfer modules, and delta robots to move product quickly without bruising it often north of 600 units per minute even with fragile SKUs." },
    { title: "Synchronized Motion Control", description: "Motion control runs over deterministic networks like Ether CAT or PROFINET. That tight coordination kills off the drift and phase errors that haunt older, relay logic systems." },
    { title: "Adaptive Sensing Layer", description: "Laser triangulation, capacitive proximity, high resolution vision—when those work together, the line develops self awareness to catch problems and correct itself before a human spots them." }
  ],
  whyChoose: {
    title: "Why Choose Seppa Solutions for Line Improvement",
    description: "Our team has been doing this work for decades, and every production line automation project we take on benefits from that hard earned experience.",
    paragraphs: [
      "FMCG leaders across beverages, dairy, confectionery, and personal care keep coming back to us because we bring two things together that rarely live in the same room: deep process knowledge and genuinely strong systems integration ability.",
      "We do not push cookie cutter packages we engineer industrial automation solutions built around your specific product mix, plant layout, and where you actually want to be five years from now.",
      "What really makes a difference, though, is our ability to bring an aging automatic production line back to life. That comes from a pretty rare blend: solid mechanical design, sharp controls engineering, and a real, lived in respect for what your operators are dealing with every day. We know upgrades cannot derail production."
    ],
    image: over.src
  },
  methodology: {
    title: "Our Proven Automation Implementation Methodology",
    steps: [
      {
        title: "Comprehensive Bottleneck Analysis",
        description: "Mapping cycle times, finding the real constraint stations, and putting numbers on OEE losses across availability, performance, and quality.",
        image: meth1.src
      },
      {
        title: "Design and Simulation",
        description: "Using digital twin tools to model the proposed automatic line under different SKU mixes. Catching problems here is a lot cheaper than catching them at commissioning.",
        image: meth2.src
      },
      {
        title: "Phased Integration",
        description: "Rolling out automation solutions in carefully sequenced waves so the plant keeps producing while the upgrade happens around it.",
        image: meth3.src
      },
      {
        title: "Ongoing Optimization & Validation",
        description: "Measuring actual performance against simulation targets, providing firmware updates, mechanical tweaks, and emerging best practices long after the project wraps.",
        image: meth4.src
      }
    ]
  },
  faqTitle: "Frequently Asked Questions",
  faqs: [
    { question: "What is the typical cost to value ratio of a production line automation project?", answer: "Most of our clients reach payback within 14–22 months. After that, the ROI keeps compounding as labor costs ease, OEE climbs, and waste shrinks." },
    { question: "How do you balance legacy hardware with new manufacturing productivity improvement tools?", answer: "Hybrid architectures are our bread and butter. We bridge legacy PLCs into modern SCADA layers through standard protocols, so you keep what you already paid for and still get next generation analytics." },
    { question: "What measurable impacts on production efficiency improvement can we expect?", answer: "Realistic numbers from past projects: 25–40% cycle time reduction, 15–30% OEE uplift, and over 50% reduction in changeover time within the first operational quarter." },
    { question: "How disruptive is the implementation to our current production schedules?", answer: "Less than most people brace for. Our phased approach keeps downtime inside short, pre scheduled windows often lined up with planned maintenance anyway." },
    { question: "Why is Seppa Solutions the right partner for our next automatic production line project?", answer: "Because we engineer outcomes, not just equipment. Our track record of successful automatic production line deployments across global FMCG leaders speaks for itself." }
  ]
};

const LineImprovementPage = () => {
  return <PackagingPageLayout data={pageData} />;
};

export default LineImprovementPage;
