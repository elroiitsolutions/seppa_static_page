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
  title: "Batch Coding Machine",
  breadcrumbName: "Batch Coders",
  rootBreadcrumbName: "Equipments",
  rootBreadcrumbPath: "/equipments",
  headerImage: bannerImg.src,
  overviewTitle: "What Is a Batch Coding Machine and How Does It Work?",
  overviewDescription: "Every product leaving a production line carries data that regulators, distributors, and end consumers all depend on. The system that puts that data there correctly, at speed, without stopping the line is the batch coding machine.",
  overviewsubDescription: [
    "A batch coding machine applies variable information directly onto product surfaces as they move along a conveyor. Internally, a gear pump or external compressed gas forces ink through precision nozzles, generating charged droplets that are deflected through an electric field and deposited at exact coordinates on the substrate. The printhead never touches the surface. That matters when you're running glass bottles at 200 units per minute or flexible pouches that a contact printer would distort.",
    "Modern systems connect directly to PLC and MES networks. The batch coding machine pulls live production data batch numbers, shift codes, timestamps and updates print content automatically when a batch changes. No operator intervention. No reprint downtime. The mark on the product matches the record in the system, which is exactly what a traceability audit requires."
  ],
  overviewImage: overviewImg.src,
  contentBlocks: [
    {
      title: "Key Features of Our Industrial Batch Coding Machines",
      paragraphs: [
        "Rapid Dry Ink Systems for Diverse Substrates: Ink that doesn't dry fast enough smears. Ink formulated for the wrong substrate peels. Seppa's automatic batch coding machine uses solvent based rapid dry inks selected for substrate compatibility on PET and glass, the ink bonds at the molecular level within seconds; on paper and cardboard, capillary absorption locks the mark in place.",
        "Touch Screen HMI: Font size, character height, line count, and print position are all configurable from the touch screen interface. The coding machine supports single line date stamps and complex multi field messages serial numbers, barcodes, lot codes in the same template library. Operators switch between saved templates in under ten seconds.",
        "Printhead Housing Built for Factory Conditions: Seppa's industrial inkjet printer runs in environments that are hot, humid, and sometimes chemically aggressive. The printhead sits in an IP rated enclosure with a stainless steel body. Washdown conditions don't compromise seals or electronics."
      ],
      image1: img1.src,
      reverse: true
    },
    {
      title: "Applications Across Industries",
      paragraphs: [
        "In pharmaceutical packaging, blister packs and cartons receive lot numbers and expiry dates at 300+ units per minute. The coding machine maintains print registration throughout the run without recalibration.",
        "In food and beverage, the same machine marks PET water bottles, glass juice containers, metal cans, and foil pouches. Condensation is a constant issue in beverage lines the industrial inkjet printer accounts for this by using adhesion optimized inks that bond before moisture interferes.",
        "Cosmetics lines use the automatic batch coding machine on curved tube bodies and cap surfaces, where a 0.1 mm positional error shows. Electronics manufacturers mark cable sheaths, PCB surfaces, and ABS housings."
      ],
      image1: img2.src,
      reverse: false
    },
    {
      title: "Types of Information Printed Using Batch Coders",
      paragraphs: [
        "Batch Numbers: A batch number contains a quality incident. When a recall is issued, the number identifies the exact production run not an approximate date window, but the specific lot.",
        "Manufacturing and Expiry Dates: Date codes give internal quality teams the ability to trace a finished product back to a shift or raw material lot. The inkjet coding printer applies expiry information directly onto primary packaging, holding up under retail fluorescent lighting and refrigerated storage.",
        "Barcodes and QR Codes: The inkjet coding printer generates 1D and 2D codes at resolutions that pass retail scanner reads. QR codes printed with batch and serial data let consumers verify product authenticity with a phone scan."
      ],
      image1: img3.src,
      reverse: true
    }
  ],
  whyChoose: {
    title: "Why Choose Seppa Solutions for Batch Coding Machines?",
    description: "Seppa builds coding machine systems around the reality that production floors run continuously and coding failures stop lines.",
    paragraphs: [
      "The hardware reflects that: German imported pumps, precision machined printheads, and aviation grade power supplies rated for 24/7 operation.",
      "The industrial inkjet printer platforms Seppa supplies handle multiple substrate types within a single installation. A line running PET in the morning and glass in the afternoon doesn't require a hardware change operators switch substrate profiles on the HMI. The industrial inkjet printer maintains the same print resolution and mark durability across both runs.",
      "Major manufacturers in food, pharma, and cosmetics trust Seppa's batch coding machine hardware because print quality holds over long production runs. The mark at hour eight of a shift is the same as the mark at hour one."
    ],
    image: over.src
  },
  methodology: {
    title: "Methodology: Our Approach to Batch Coding Integration",
    steps: [
      {
        title: "Site Assessment",
        description: "Engineers assess substrate materials, line speeds, environmental conditions (temperature, humidity, chemical exposure), and existing PLC architecture.",
        image: meth1.src
      },
      {
        title: "Mounting & Ink Selection",
        description: "The batch coding machine mounts at the identified print station on the conveyor. Ink selection is matched to substrate: solvent based for non porous surfaces like glass and PET, water based for paper and board.",
        image: meth2.src
      },
      {
        title: "Calibration",
        description: "The system calibrates for print position and droplet size. Substrate ink compatibility testing runs before any live production print occurs.",
        image: meth3.src
      },
      {
        title: "Commissioning & Support",
        description: "Commissioning covers HMI operation, message template setup, and maintenance procedures. Seppa provides remote diagnostics support for the first 90 days post handover.",
        image: meth4.src
      }
    ]
  },
  faqTitle: "Frequently Asked Questions",
  faqs: [
    {
      question: "What maintenance does an inkjet coding printer require on a continuous production line?",
      answer: "Automated purge and cap cycles handle most printhead maintenance without operator input. Manual tasks are limited to ink and solvent top ups, and filter replacements every 500 to 1,000 operating hours."
    },
    {
      question: "How does a coding machine print accurately on curved or irregular surfaces?",
      answer: "The coding machine printhead mounts on an adjustable bracket. Setting the correct throw distance for the substrate geometry whether that's a round bottle, an oval tube, or a tapered can is the main calibration step."
    },
    {
      question: "Why is an automatic batch coding machine required for regulatory compliance?",
      answer: "Regulations require legible, documented batch identification on every primary package. An automatic batch coding machine applies that identification at line speed, consistently, and records each print event with a timestamp."
    },
    {
      question: "What makes Seppa's industrial inkjet printer faster than competing systems?",
      answer: "The printhead technology, solvent resistant rapid dry inks, and direct PLC integration work together. Seppa's industrial inkjet printer sustains print quality at 300+ units per minute without degradation across long production runs."
    },
    {
      question: "Can the batch coding machine mark labels and secondary packaging as well as primary containers?",
      answer: "Yes. The batch coding machine hardware doesn't change the substrate profile does. Labels, cardboard outers, shrink wrapped multipacks, and plastic secondary trays all accept coding from the same installation."
    }
  ]
};

const BatchCodersPage = () => {
  return <PackagingPageLayout data={pageData} />;
};

export default BatchCodersPage;
