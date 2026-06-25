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
  title: "Carton Handling Systems",
  breadcrumbName: "Carton Handling",
  rootBreadcrumbName: "Equipments",
  rootBreadcrumbPath: "/equipments",
  headerImage: bannerImg.src,
  overviewTitle: "What Is a Carton Handling System?",
  overviewDescription: "Packaging lines fail where you least expect them not at the filler, not at the labeller, but at the point where a flat blank becomes a sealed, shippable box. That transition is where carton handling either earns its keep or becomes the bottleneck that costs a shift.",
  overviewsubDescription: [
    "Carton handling covers the full sequence of automated operations from flat corrugated blank to formed, loaded, and sealed case ready for the palletizer. It is not one machine. It is three discrete machine stages erecting, packing, sealing each with its own mechanical demands, running in tight synchronization.",
    "Get the timing wrong between stages and the line chokes. A carton packing machine that runs at 40 cases per minute does nothing useful if the erector upstream is feeding it at 32. Throughput is always governed by the slowest stage, which is why Seppa engineers carton handling equipment as complete line solutions rather than isolated units."
  ],
  overviewImage: overviewImg.src,
  contentBlocks: [
    {
      title: "Key Features of Our Carton Handling Solutions",
      paragraphs: [
        "Suction-Cup Blank Feeding and Squaring: The first mechanical event in any carton handling line is drawing a single flat blank from the magazine and opening it square. Seppa's carton erecting machines use a suction disk system in continuous motion not indexed stop start to maintain reliable blank separation at production speed without doubling or misfeeds.",
        "Sensor-Based Alignment for Automatic Loading: An automatic carton packing machine needs to know exactly where the open case sits before any loading motion begins. Seppa's packing stations use optical sensors at infeed to confirm position and squareness. If a case arrives off square, the sensor flags it for rejection rather than letting the machine pack and seal a box that will buckle on a pallet.",
        "Rapid Changeover: Seppa's carton packaging machine range supports tool free format changes. Side guides, flap folders, and compression belts adjust via handwheels with indexed position markers. A trained operator can reformat a case in under 15 minutes."
      ],
      image1: img1.src,
      reverse: true
    },
    {
      title: "Types of Carton Handling Equipment",
      paragraphs: [
        "Carton Erecting Machines: Take flat blanks and produce open, bottom sealed boxes. Seppa supplies erectors for both PVC tape and hot melt adhesive bottom flap sealing. The tape option works well in cold or humid environments. Hot melt gives cleaner closure at higher speeds.",
        "Carton Packing Machine: Where product enters the box. For beverage and FMCG lines, Seppa's wraparound carton packaging machine models reach 45 packs per minute. The wraparound format wraps a corrugated blank tightly around a collated product group, which is more material efficient than top-load.",
        "Carton Sealing Machine: Handles both upper and lower flap closure on filled cases. Side driven belts transport cases through at controlled speed; injectors apply adhesive strips; a presser plate holds the flaps under compression until the adhesive sets."
      ],
      image1: img2.src,
      reverse: false,
      bgClass: "bg-light"
    },
    {
      title: "Benefits of Automated Carton Handling",
      paragraphs: [
        "Automating carton handling removes manual erecting and sealing from the labour budget. Those are repetitive, high injury tasks automating them frees workers for roles where judgment matters.",
        "Consistency is the other argument. A tuned carton sealing machine applies adhesive at the same temperature, volume, and position on every case. Manual gluing varies between operators and gets worse as a shift progresses. A box that closes with even flap pressure comes off the line squarer.",
        "Material waste drops because the machines meter consumables precisely. Hot melt carton sealing machine models dispense a calculated bead volume per cycle; tape models apply a fixed strip length."
      ],
      image1: img3.src,
      reverse: true
    }
  ],
  whyChoose: {
    title: "Why Choose Seppa Solutions for Carton Handling Systems?",
    description: "Two things keep clients running Seppa carton handling equipment long term: maintenance frequency and parts access.",
    paragraphs: [
      "The Nordson gluing unit on the hot melt sealer is a field serviceable module. Your maintenance team replaces a glue head without scheduling a technician visit.",
      "The control architecture uses standard PLC platforms, not proprietary systems, so your electricians can fault find with tools they already own.",
      "Seppa's carton packaging machine configurations come with in line and 90 degree infeed options, which covers most plant layout requirements without custom fabrication. Integration engineering happens during the quoting phase, not after installation."
    ],
    image: over.src
  },
  methodology: {
    title: "Methodology: Our Carton Handling Process",
    steps: [
      {
        title: "Flat Blank Feeding & Erecting",
        description: "The suction disk system draws one blank per cycle from the erector magazine. Levers and guides fold the lower flaps into position, applying tape or hot melt to the bottom seam.",
        image: meth1.src
      },
      {
        title: "Product Loading",
        description: "The open box transfers to the automatic carton packing machine. Optical sensors confirm case position before the loading mechanism actuates.",
        image: meth2.src
      },
      {
        title: "Upper Flap Sealing",
        description: "The filled case enters the carton sealing machine. Driven belts carry it through the flap folding section; injectors apply adhesive strips; the presser holds closure under compression.",
        image: meth3.src
      },
      {
        title: "Discharge",
        description: "The sealed case exits onto a discharge conveyor for check weighing, labelling, or direct palletizer transfer.",
        image: meth4.src
      }
    ]
  },
  faqTitle: "Frequently Asked Questions",
  faqs: [
    {
      question: "How often does a carton sealing machine need maintenance?",
      answer: "Hot melt models need daily glue level checks, weekly belt and presser plate wear inspections, and monthly injector nozzle checks. Tape case sealers need tape head tension checks weekly. Neither is particularly maintenance intensive."
    },
    {
      question: "How do I choose the right carton packaging machine for my throughput?",
      answer: "Cases per minute, case size range, and product type are the three variables to nail down first. Wraparound models suit bottles and cans at medium to high speeds. Top load configurations work better for products that cannot be collated flat."
    },
    {
      question: "What efficiency gains come from an automatic carton packing machine?",
      answer: "Replacing a manual packing station with an automatic carton packing machine typically removes two to three operators per shift. The consistency gain is often worth more than the headcount reduction."
    },
    {
      question: "Why do carton erecting machines use hot melt rather than tape at high speeds?",
      answer: "Hot melt bonds across the full width of the flap interface. Above 20 cases per minute it is also more reliable to inspect a missed glue bead shows up clearly by temperature signature."
    },
    {
      question: "What makes Seppa's carton handling systems easier to integrate into an existing line?",
      answer: "The in line and 90 degree infeed options handle most plant layouts without custom fabrication. Standard PLC control means your team can maintain the equipment without external support."
    }
  ]
};

const CartonHandlingPage = () => {
  return <PackagingPageLayout data={pageData} />;
};

export default CartonHandlingPage;
