import React from 'react';
import PackagingPageLayout, { PackagingPageData } from '@/components/packaging/PackagingPageLayout';

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
  title: "Bottle Handling Systems",
  breadcrumbName: "Bottle Handling Systems",
  rootBreadcrumbName: "Equipments",
  rootBreadcrumbPath: "/equipments",
  headerImage: bannerImg.src,
  overviewTitle: "What Is a Bottle Handling System and Why Is It Essential?",
  overviewDescription: "Every bottling plant runs on movement. Bottles travel from the blow molder or depalletizer through filling, capping, labelling, and inspection before reaching the end of line packer and every meter of that journey depends on bottle handling. If flow breaks down at any stage, the entire line stops.",
  overviewsubDescription: [
    "The difficulty is not moving containers from one point to another. It is doing so consistently at speeds that can exceed 600 bottles per minute, across multiple container formats, without tip overs, jams, or surface damage. At those throughputs, a two second micro stop cascades backward into accumulation zones and forward into starvation at the filler.",
    "A chain and a motor are not enough you need a coordinated system where every conveyor segment, guide rail, and drive unit responds to the same real time production signal. SEPPA designs bottle conveyor system around this reality. The architecture is always site-specific; the component selection always follows the bottle, not the catalog."
  ],
  overviewImage: overviewImg.src,
  contentBlocks: [
    {
      title: "Range of Bottle Handling Equipment",
      paragraphs: [
        "Air Conveyance for Empty PET: For empty PET bottles, pneumatic conveyance is the starting point. An air conveyor system suspends bottles by their neck ring and moves them through an overhead track using directed airflow from centrifugal blowers. Friction is essentially zero. Tip overs are mechanically impossible. Speeds routinely reach 800–1,200 bottles per minute without any surface contact between containers.",
        "Mechanical Chain Conveyance for Filled Bottles: Once bottles are filled and their center of gravity shifts below the container midpoint, mechanical conveyance takes over. SEPPA's industrial conveyor systems include slat chain conveyors, belt conveyors, accumulation conveyors, and crate chain conveyors.",
        "Bottle Inverters: SEPPA manufactures bottle inverters as part of the standard bottling line equipment range. When hot filled product requires neck sterilization, the inverter rotates containers through a controlled arc and holds them inverted for a defined dwell time."
      ],
      image1: img1.src,
      reverse: true
    },
    {
      title: "Key Features and Benefits",
      paragraphs: [
        "Low friction UHMW wear strips on guide rails reduce the lateral force bottles exert against guides. This cuts abrasion on PET labels and chip risk on glass, and it also reduces drive motor load over the length of the run. Side rails with tool free micro adjustment allow format changeovers in under ten minutes.",
        "VFDs on every conveyor motor are standard on all SEPPA industrial conveyor systems. They allow each segment to ramp speed up or down in response to PLC signals from neighboring machines. When the filler slows due to a downstream event, the infeed conveyor decelerates proportionally instead of piling bottles against a dead stop.",
        "Accumulation table sizing matters more than most people budget for. A mass flow accumulation table positioned between the filler and labeller absorbs speed mismatches and gives the filler time to run through minor downstream interruptions without stopping."
      ],
      image1: img2.src,
      reverse: false,
      bgClass: "bg-light"
    },
    {
      title: "Applications Across Industries",
      paragraphs: [
        "Beverage prioritizes throughput above everything else. Lines run continuously for extended shifts. Slat chain conveyors rated for 24/7 operation and accumulation systems sized for 60–90 seconds of buffer at full line speed are the baseline.",
        "Pharmaceutical and nutraceutical lines add constraints that do not exist in food and beverage. Bottle handling here must support clean in place protocols, use 316L stainless steel on all product contact surfaces, and operate with only NSF certified lubricants.",
        "FMCG and personal care present a different problem: high SKU count, frequent format changes, and shorter production runs. Here, flexibility matters as much as speed. Side rail systems with rapid adjust mechanisms are what these lines need."
      ],
      image1: img3.src,
      reverse: true
    }
  ],
  whyChoose: {
    title: "Why Choose SEPPA Solutions for Bottle Handling?",
    description: "SEPPA builds conveyor frames from large section tubulars with stainless steel side panels. Frame rigidity affects bottle stability directly, especially on curves and at transitions between segments.",
    paragraphs: [
      "The bottle conveyor system each customer receives is engineered for that site. Standard catalog conveyors require compromise in length, curve radius, and drive placement. SEPPA's process starts with the layout constraints and designs the industrial conveyor systems around them.",
      "What major bottlers consistently cite is predictable maintenance. Chain stretch rates, wear strip replacement cycles, and motor service schedules are documented with each system not left for the maintenance team to determine through trial and error.",
      "The full scope air conveyor systems, slat chain conveyors, accumulation tables, bottle inverters, and packing conveyor stations is supplied and commissioned under a single engineering responsibility. This eliminates interface disputes."
    ],
    image: over.src
  },
  methodology: {
    title: "Our Methodology for Designing and Integrating",
    steps: [
      {
        title: "Layout Analysis",
        description: "SEPPA maps available floor space, ceiling height, and utility connections against the required throughput and bottle format range. This determines whether an air conveyor system or mechanical chain is appropriate.",
        image: meth1.src
      },
      {
        title: "Drive Architecture",
        description: "PLC linked VFD control is configured across all motor driven segments so speed changes propagate through the bottle handling system in sequence, not as shock loads.",
        image: meth2.src
      },
      {
        title: "Synchronization",
        description: "Synchronization parameters are set during commissioning on the actual line they cannot be reliably estimated from a desk.",
        image: meth3.src
      },
      {
        title: "Interface Validation",
        description: "SEPPA runs timed trials at each machine interface before sign off to confirm that the infeed condition is within the packer manufacturer's specification.",
        image: meth4.src
      }
    ]
  },
  faqTitle: "Frequently Asked Questions",
  faqs: [
    {
      question: "What does maintaining a bottle conveyor system actually involve?",
      answer: "On slat chain conveyors, the routine work is chain tension checks, drive sprocket lubrication, and wear strip replacement. Wear strip replacement is typically an annual or eighteen month job. SEPPA provides service interval documentation with every system."
    },
    {
      question: "Why is an air conveyor system specifically better for empty PET bottles?",
      answer: "Mechanical chain at speeds above 400 BPM generates lateral energy to tip lightweight PET containers. An air conveyor system moves bottles by suspending them from the neck ring with no body contact. No tip overs. Significantly less label abrasion."
    },
    {
      question: "How does bottle handling upstream affect the bottle packing machine's performance?",
      answer: "Irregular spacing from the upstream bottling line equipment system causes the packer to fault or forces it to run below rated speed. The infeed condition is the single largest variable affecting packing efficiency."
    },
    {
      question: "What container types does SEPPA's bottling line equipment cover?",
      answer: "Glass, PET, HDPE, and other plastics across a wide capacity range from small pharmaceutical vials to 5 liter bottles."
    },
    {
      question: "Why use SEPPA for the full industrial conveyor systems scope rather than multiple vendors?",
      answer: "Single vendor responsibility eliminates interface disputes. When the entire system is engineered by the same team, any performance issue belongs to one party to resolve."
    }
  ]
};

const BottleHandlingPage = () => {
  return <PackagingPageLayout data={pageData} />;
};

export default BottleHandlingPage;
