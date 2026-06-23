import React from 'react';
import PackagingPageLayout, { PackagingPageData } from '@/components/packaging/PackagingPageLayout';

// Reusing generic industrial images due to generation limits
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
  title: "Automatic Labeling Machine",
  breadcrumbName: "Labelling",
  rootBreadcrumbName: "Equipments",
  rootBreadcrumbPath: "/equipments",
  headerImage: bannerImg.src,
  overviewTitle: "Automatic Labeling Machine: Precision, Speed, and Line Integration",
  overviewDescription: "Every product that leaves a manufacturing facility carries two things: what's inside and what's on the outside. The label is the first thing a retailer scans, the first thing a consumer reads, and in regulated industries the first thing an auditor checks. Getting it wrong costs more than a reprint run. It costs shelf approvals, compliance certifications, and occasionally entire batches.",
  overviewsubDescription: [
    "An automatic labeling machine eliminates that risk. But 'automatic' is a loose word. What separates a high performance system from a basic label dispenser is the engineering underneath: servo motor synchronization, sensor triggered application timing, PLC managed label spacing, and adhesive compatibility across substrates.",
    "At its most direct, an automatic labeling machine is the final branding and compliance checkpoint before a product reaches distribution. Every unit passing through the system gets a precisely positioned, wrinkle free label front, back, wrap around, or tamper evident regardless of line speed or container geometry.",
    "A bottle labeling machine in a beverage or pharmaceutical setting must handle containers that are rarely perfectly round, rarely perfectly centered, and rarely fed at perfectly consistent spacing. Indexing systems solve the first two problems. Variable speed conveyor synchronization addresses the third. The result is label placement accuracy to +0.5mm, even at throughputs that would overwhelm any manual crew."
  ],
  overviewImage: overviewImg.src,
  contentBlocks: [
    {
      title: "Key Features of SEPPA's Automatic Labeling Systems",
      paragraphs: [
        "Servo Driven Application Heads: The application head is where label meets container. SEPPA's label applicator machine heads use servo motor drives rather than pneumatic actuators, which means position control is programmable rather than fixed. Pressure, speed, and dwell time adjust per product profile stored in the HMI and recalled in under two minutes for a format change.",
        "High Resolution Optical Sensors: Label registration starts before the label leaves the liner. Optical sensors detect the leading edge of each label with sub millimeter resolution, triggering the dispensing sequence in sync with container position. On an automatic sticker labeling machine handling pressure sensitive labels, this timing is the difference between a label that lies flat and one that wrinkles or bridges a shoulder radius.",
        "Tool-Less Changeover Design: Production schedules rarely respect single SKU runs. SEPPA's systems are built for rapid, tool less changeover guide rail adjustments, label reel swaps, and applicator head repositioning without spanners or downtime beyond the format recall time.",
        "PLC Logic and HMI Interface: Label spacing, conveyor speed ratios, reject gate logic, and production counters are all managed through a Siemens or Allen Bradley PLC with a colour touchscreen HMI. Deviation alarms trigger before defective labeling can accumulate into a rework event."
      ],
      image1: img1.src,
      reverse: true
    },
    {
      title: "Types of Labeling Applications Supported",
      paragraphs: [
        "Rotary and Linear Labeling Machines: High speed rotary systems handle cylindrical containers water, carbonated beverages, spirits where throughput is the primary constraint. SEPPA's rotary automatic labeling machine configurations support wrap around, front/back, and neck label application simultaneously. Linear systems accommodate a wider range of container shapes at moderate speeds, handling square, rectangular, and oval containers predictably.",
        "Self Adhesive and Shrink Sleeve Labeling: Pressure sensitive labels on a peel and apply dispensing head cover everything from pharmaceutical vials to retail jars. Where full body decoration or tamper evidence is required, shrink sleeve labeling applies a PVC or OPS sleeve around the container. SEPPA's tunnel systems use high velocity air circulation for uniform shrinkage.",
        "Cold Glue and Hot Glue Labeling Machines: Paper labels on glass bottles typically require glue based application for the adhesive permanence and wet look finish. Cold glue systems run continuously without adhesive warming cycles; hot melt systems offer faster bond tack on high speed lines."
      ],
      image1: img2.src,
      reverse: false,
      bgClass: "bg-light"
    },
    {
      title: "Benefits of Automated Labeling for Production Lines",
      paragraphs: [
        "A packaging labeling machine is not just a labour saving device it's an OEE lever. Overall Equipment Effectiveness depends on availability, performance rate, and quality rate. Manual labeling degrades all three.",
        "Consistency is the most obvious gain. An automatic labeling machine applies labels at the same position, the same tension, and the same pressure on the first unit and the ten thousandth unit. There's no fatigue, no attention drift, and no variation introduced by a shift change.",
        "Speed is the second factor. Depending on configuration, SEPPA's labeling systems operate from 60 containers per minute on a standard linear bottle labeling machine up to several hundred containers per minute on rotary platforms. The less discussed benefit is reject rate reduction. A vision system downstream of the applicator head catches missing labels, skewed applications, and label defects before they reach the packing station."
      ],
      image1: img3.src,
      reverse: true
    }
  ],
  whyChoose: {
    title: "Why Choose SEPPA Solutions for Labeling Equipment?",
    description: "SEPPA Solutions builds automatic labeling machine systems for beverage, food, pharmaceutical, and personal care manufacturers across export markets.",
    paragraphs: [
      "The engineering specification starts from the container geometry and production speed target not from a catalog configuration that gets adapted after the fact.",
      "What that means practically: every sticker labeling machine or glue-based system SEPPA supplies has been designed for the adhesive type, label material, and surface finish of the actual container it will label. High tack adhesive compatibility testing, liner release force calibration, and applicator head geometry are determined before fabrication, not after installation.",
      "Support is built into the supply model. Remote HMI access for parameter adjustment, on-site commissioning, and operator training are standard not optional line items."
    ],
    image: over.src
  },
  methodology: {
    title: "Accurate and Efficient Label Application Process",
    steps: [
      {
        title: "Container Indexing & Detection",
        description: "Infeed starwheels or screw conveyors separate containers to a consistent pitch before the labeling zone. A photocell or laser sensor detects the container leading edge and sends a signal to the PLC, calculating the exact dispense timing based on conveyor speed.",
        image: meth1.src
      },
      {
        title: "Label Peeling & Dispensing",
        description: "Pulls the label across a sharp angle peel plate, separating it from the liner. Liner tension is servo controlled to maintain consistent peel force regardless of reel diameter.",
        image: meth2.src
      },
      {
        title: "Synchronous Application",
        description: "Synchronous application pressure brings the label into contact with the container surface using a wipe on roller or blow on air nozzle. The applicator speed matches conveyor speed to prevent label stretch or wrinkling.",
        image: meth3.src
      },
      {
        title: "Vision System Inspection",
        description: "A camera checks label position, orientation, and completeness for every container. Non conforming units are diverted by a pneumatic reject gate before the outfeed conveyor.",
        image: meth4.src
      }
    ]
  },
  faqTitle: "Frequently Asked Questions",
  faqs: [
    {
      question: "How often does a packaging labeling machine require maintenance?",
      answer: "Preventive maintenance intervals depend on throughput and adhesive type, but most systems require daily cleaning of the applicator head and peel plate, weekly inspection of conveyor belts and drive components, and quarterly calibration of optical sensors."
    },
    {
      question: "How do I choose the right label applicator machine for my container dimensions?",
      answer: "Container diameter, height, label width, and label length are the primary inputs. SEPPA's engineering team performs a container audit before recommending a configuration cylindrical containers suit rotary systems; square or rectangular containers typically require a linear automatic labeling machine."
    },
    {
      question: "Why does an automatic sticker labeling machine outperform manual labeling?",
      answer: "Manual application introduces placement variance of several millimeters per unit, slows at sustained throughputs, and cannot integrate with upstream or downstream line controls. An automatic sticker labeling machine holds +0.5mm placement accuracy, maintains consistent speed across full shifts, and feeds reject data back into the production control system."
    },
    {
      question: "What label materials are compatible with SEPPA's systems?",
      answer: "SEPPA's automatic labeling machine configurations support paper, BOPP, PET, and foil pressure sensitive labels, as well as PVC and OPS shrink sleeves, and paper labels applied with cold or hot glue."
    },
    {
      question: "Why is SEPPA Solutions a reliable supplier for automatic labeling machine equipment?",
      answer: "SEPPA builds to export standards, with electrical panels certified for CE marking and PLC programming documented for in house maintenance. Every automatic labeling machine system shipped includes full wiring schematics, spare parts recommendations, and operator training."
    }
  ]
};

const LabellingPage = () => {
  return <PackagingPageLayout data={pageData} />;
};

export default LabellingPage;
