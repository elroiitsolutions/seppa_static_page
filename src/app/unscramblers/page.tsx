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
  title: "Bottle Unscrambler Machine",
  breadcrumbName: "Unscramblers",
  rootBreadcrumbName: "Equipments",
  rootBreadcrumbPath: "/equipments",
  headerImage: bannerImg.src,
  overviewTitle: "What Is a Bottle Unscrambler Machine?",
  overviewDescription: "Every high speed filling line has a bottleneck that rarely surfaces in procurement discussions: container orientation. Bottles arrive at the filling station in bulk tumbled, randomly positioned, and thoroughly unhelpful and the filler needs them upright, neck forward, and evenly spaced. That gap is where a bottle unscrambler machine does its work.",
  overviewsubDescription: [
    "At its operational core, a bottle unscrambler machine takes randomly oriented containers from a bulk hopper and delivers them to the outfeed conveyor in a consistent upright position at production grade speeds. In dairy and beverage environments, the same unit frequently runs as an integrated pre treatment station. The SEPPA BUS-200, for instance, offers a de ionized air rinse station as a standard option which means it operates as a milk bottle cleaning machine and an orienter within a single machine footprint. On a line feeding a dairy filler, combining rinsing and orientation eliminates one transfer station, removes a set of format change components, and shrinks the line's floor space requirement.",
    "This is why operators sourcing unscrambling machinery for dairy or liquid food production routinely specify milk bottle cleaning machine functionality alongside throughput rate. The container arrives at the filler neck clean and correctly oriented. No separate rinser step, no additional infeed transfer."
  ],
  overviewImage: overviewImg.src,
  contentBlocks: [
    {
      title: "Key Features of Seppa's Bottle Unscrambler Machines",
      paragraphs: [
        "Centrifugal Disc and Rotary Bowl Orientation: Seppa bottle unscramblers use centrifugal disc or rotary bowl mechanisms, selected based on required output rate and container geometry. In centrifugal designs, the rotating disc imparts outward force to the bulk container mass, driving individual bottles toward guide rails where neck weight differential tips each one into the correct orientation. Rotary bowl designs use a shallower container travel path bottles rotate within the bowl until their centre of gravity causes them to drop into capture pockets at the correct angle.",
        "Both mechanisms feed into the same variable speed drive logic downstream. Output is not locked to a fixed rate; it responds to the filler's demand signal. That prevents over accumulation on the infeed conveyor and protects thin walled containers from impact damage caused by bunching.",
        "PLC Controls and Exit Sensor Logic: Each BUS model runs PLC controlled orientation verification at the exit point of the orienting mechanism. Sensors confirm neck position before a container transitions to the outfeed conveyor. Any container that exits inverted or sideways is intercepted before it reaches the main line. On the BUS-300, this verification runs continuously at up to 350 BPM without manual monitoring.",
        "Construction and Changeover Design: Frames are fabricated in 304 grade stainless steel throughout, with food grade contact surfaces across the bottle travel path. The BUS-200 achieves a complete format changeover in under ten minutes using three change parts."
      ],
      image1: img1.src,
      reverse: true
    },
    {
      title: "Container Compatibility",
      paragraphs: [
        "The BUS range handles containers from 50 ml to 5 liters across PET, HDPE, PP, and glass within the applicable speed ratings. The same orientation logic applied to a 1 litre HDPE milk bottle feeding a milk bottle cleaning machine air rinse station also handles a 250 ml PET water bottle, a 500 ml cosmetic HDPE, or a 3 litre PP chemical canister.",
        "The BUS-100 handles containers up to 2 litres. The BUS-300 covers a broader size range. For outputs between 400 and 500 containers per minute, the BUS-400 and BUS-500 are available on request, with hopper volumes up to 13 cubic meters. Accessory options inversion stations for asymmetric bottle shapes, vacuum belt conveyors, and variable-size bottle bins extend compatibility further without requiring a different base machine."
      ],
      image1: img2.src,
      reverse: false,
      bgClass: "bg-light"
    },
    {
      title: "Benefits of an Automatic Bottle Unscrambler",
      paragraphs: [
        "Manual container feeding to a line running at 150 BPM or above is not practical production planning. A sustained manual rate tops out at roughly 20–30 containers per minute per operator. An automatic bottle unscrambler at the BUS-100's rated speed delivers five times that throughput continuously, without the variation introduced by fatigue.",
        "Container breakage adds a cost that sits below labour in most capital justification documents but accumulates quickly in practice. Thin walled PET bottles are particularly vulnerable to neck damage during manual handling on high speed lines. A damaged neck that clears the unscrambler station wastes a full rinse cycle on a container that cannot be filled. The BUS range's gentle neck handling guide rail geometry and low-noise operation are there to prevent this.",
        "Unplanned downtime is usually the number that closes the ROI argument. On a line running multiple shifts, one unplanned stop per day costs more annually than the full maintenance budget of a BUS machine. Wear components on the BUS range are accessible without major disassembly, HMI operation is straightforward across all three standard models, and format changeover stays under ten minutes."
      ],
      image1: img3.src,
      reverse: true
    }
  ],
  whyChoose: {
    title: "Why Choose Seppa Solutions",
    description: "Seppa designs unscrambling machinery with RFC (Rinse Fill Cap) machine integration as a baseline assumption, not an afterthought.",
    paragraphs: [
      "The speed synchronization between the unscrambler's output, air conveyance timing, and filler infeed is specified from initial machine design. That is why production managers running a milk bottle cleaning machine or dairy filler downstream of their pet bottle unscrambler tend to specify Seppa the handoff between machines is engineered, not improvised in commissioning.",
      "The BUS range covers 100 to 300 containers per minute in the standard lineup. The BUS-400 and BUS-500 extend that to 500 per minute for high output operations. Low noise emission, gentle container handling, and sub ten minute format changeover are standard across all models.",
      "A pet bottle unscrambler is not a commodity purchase for a line running multiple container formats or feeding thin walled PET to a dairy filler. The BUS range is built for that operational profile multi format, high speed, low maintenance, and directly integrated with the downstream milk bottle cleaning machine or filler it feeds."
    ],
    image: over.src
  },
  methodology: {
    title: "How the Bottle Unscrambling Process Works",
    steps: [
      {
        title: "Bulk Loading",
        description: "Containers load into the hopper either manually via the separate hopper arrangement on the BUS-100, or through an elevator feeding the integrated hopper on the BUS-200 and BUS-300.",
        image: meth1.src
      },
      {
        title: "Orientation",
        description: "They enter the centrifugal disc or rotary bowl zone, where mechanical geometry and rotational forces work the containers into vertical orientation. Correctly oriented containers ride guide rails to the exit track.",
        image: meth2.src
      },
      {
        title: "Verification & Rinsing",
        description: "At exit, sensors verify neck position. On BUS-200 configurations with the de ionized air rinse option, containers pass immediately through the rinse station functioning simultaneously as a milk bottle cleaning machine.",
        image: meth3.src
      },
      {
        title: "Delivery to Main Line",
        description: "Delivery to the main line conveyor runs via air conveyance, with speed matched to the filler's infeed via the PLC variable speed link. A high speed bottle unscrambler at 300 BPM puts a container at the filler neck every 0.2 seconds.",
        image: meth4.src
      }
    ]
  },
  faqTitle: "Frequently Asked Questions",
  faqs: [
    {
      question: "What throughput rates does an automatic bottle unscrambler achieve?",
      answer: "The BUS-100 runs at up to 150 BPM. The BUS-200 reaches 200 BPM. The BUS-300 operates at up to 350 BPM. For higher volume requirements, the BUS-400 and BUS-500 reach 400–500 containers per minute on special request."
    },
    {
      question: "What does routine maintenance on a bottle unscrambler machine involve?",
      answer: "Guide rail wear surfaces and sensor calibration are the primary maintenance focus. Wear components are accessible without major disassembly. On the BUS 200, a full format changeover takes under ten minutes with three change parts the maintenance schedule is designed around production environments that cannot absorb long unplanned stops."
    },
    {
      question: "Why is a pet bottle unscrambler the right choice for lightweight PET containers?",
      answer: "Thin walled PET bottles are easily damaged at contact points neck deformation or body crush during transfer renders a container unusable before it reaches the filler. A pet bottle unscrambler with neck contact guide geometry and variable speed control handles that container type without the impact loading that a conventional belt transfer introduces."
    },
    {
      question: "How does a high speed bottle unscrambler compare to manual feeding on ROI?",
      answer: "The arithmetic is straightforward. A high speed bottle unscrambler at 200 BPM replaces several sustained manual operators while running continuously without variation. In multi shift production environments, labour cost reduction alone typically brings payback within the first operating year. Breakage reduction and avoided downtime tighten that figure further."
    },
    {
      question: "Can Seppa's unscrambler function as a milk bottle cleaning machine?",
      answer: "On BUS 200 configurations with the de ionized air rinse station fitted, yes the machine orients and air rinses in a single pass. The rinse station sits immediately downstream of the orientation exit, before the container reaches the main conveyor. For dairy and juice lines with regulatory requirements on container cleanliness, that integrated milk bottle cleaning machine function removes the need for a standalone rinser."
    }
  ]
};

const UnscramblersPage = () => {
  return <PackagingPageLayout data={pageData} />;
};

export default UnscramblersPage;
