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
  overviewTitle: "Automatic Labeling Machine: Precision, Speed, and Line Integration for Modern Packaging",
  overviewDescription: "Every product that leaves a manufacturing facility carries two things: what's inside and what's on the outside. The label is the first thing a retailer scans, the first thing a consumer reads, and in regulated industries the first thing an auditor checks. Getting it wrong costs more than a reprint run. It costs shelf approvals, compliance certifications, and occasionally entire batches.",
  overviewsubDescription: [
    <div key="overview-sub" className="space-y-4">
      <p className="text-base md:text-lg text-gray-600 leading-relaxed indent-8 md:indent-12">
        An automatic labeling machine eliminates that risk. But "automatic" is a loose word. What separates a high performance system from a basic label dispenser is the engineering underneath: servo motor synchronization, sensor triggered application timing, PLC managed label spacing, and adhesive compatibility across substrates. That's what this page covers.
      </p>
      <h3 className="text-2xl font-bold text-dark mt-8 mb-4">What Is an Automatic Bottle Labeling Machine?</h3>
      <p className="text-base md:text-lg text-gray-600 leading-relaxed indent-8 md:indent-12">
        At its most direct, an automatic labeling machine is the final branding and compliance checkpoint before a product reaches distribution. Every unit passing through the system gets a precisely positioned, wrinkle free label front, back, wrap around, or tamper evident regardless of line speed or container geometry.
      </p>
      <p className="text-base md:text-lg text-gray-600 leading-relaxed indent-8 md:indent-12">
        A bottle labeling machine in a beverage or pharmaceutical setting must handle containers that are rarely perfectly round, rarely perfectly centered, and rarely fed at perfectly consistent spacing. Indexing systems solve the first two problems. Variable speed conveyor synchronization addresses the third. The result is label placement accuracy to +0.5mm, even at throughputs that would overwhelm any manual crew.
      </p>
      <p className="text-base md:text-lg text-gray-600 leading-relaxed indent-8 md:indent-12">
        SEPPA Solutions engineers both rotary and linear labeling configurations, along with self adhesive, shrink sleeve, cold glue, and hot glue variants. Each serves a distinct application profile covered in detail below.
      </p>
    </div>
  ],
  overviewImage: overviewImg.src,
  featuresTitle: "Key Features of SEPPA's Automatic Labeling Systems",
  features: [
    {
      title: "Servo Driven Application Heads",
      description: "The application head is where label meets container. SEPPA's label applicator machine heads use servo motor drives rather than pneumatic actuators, which means position control is programmable rather than fixed. Pressure, speed, and dwell time adjust per product profile stored in the HMI and recalled in under two minutes for a format change."
    },
    {
      title: "High Resolution Optical Sensors",
      description: "Label registration starts before the label leaves the liner. Optical sensors detect the leading edge of each label with sub millimeter resolution, triggering the dispensing sequence in sync with container position. On an automatic sticker labeling machine handling pressure sensitive labels, this timing is the difference between a label that lies flat and one that wrinkles or bridges a shoulder radius."
    },
    {
      title: "Tool-Less Changeover Design",
      description: "Production schedules rarely respect single SKU runs. An automatic sticker labeling machine in a contract packaging environment may process four or five different container formats in a single shift. SEPPA's systems are built for rapid, tool less changeover guide rail adjustments, label reel swaps, and applicator head repositioning without spanners or downtime beyond the format recall time."
    },
    {
      title: "PLC Logic and HMI Interface",
      description: "Label spacing, conveyor speed ratios, reject gate logic, and production counters are all managed through a Siemens or Allen Bradley PLC with a colour touchscreen HMI. Operators set parameters; the machine maintains them. Deviation alarms trigger before defective labeling can accumulate into a rework event."
    }
  ],
  applicationsTitle: "Types of Labeling Applications Supported",
  applications: [
    {
      title: "Rotary Labeling Machines",
      description: "High speed rotary systems handle cylindrical containers water, carbonated beverages, spirits where throughput is the primary constraint. SEPPA's rotary automatic labeling machine configurations support wrap around, front/back, and neck label application simultaneously at speeds suited for beverage production lines."
    },
    {
      title: "Linear Labeling Machines",
      description: "Linear systems accommodate a wider range of container shapes at moderate speeds. Square, rectangular, and oval containers that a rotary system would struggle to register consistently move through a linear label applicator machine with predictable orientation control."
    },
    {
      title: "Self Adhesive Labeling Machines",
      description: "Pressure sensitive labels on a peel and apply dispensing head. SEPPA's self adhesive automatic labeling machine range covers everything from pharmaceutical vials to retail jars, with head configurations for top, side, front/back, and wraparound application."
    },
    {
      title: "Shrink Sleeve Labeling",
      description: "Where full body decoration or tamper evidence is required, shrink sleeve labeling applies a PVC or OPS sleeve around the container, which then passes through a shrink tunnel. SEPPA's tunnel systems use high velocity air circulation for uniform shrinkage no hot spots, no distortion across the label print.",
      link: "/labelling/self-adhesive-labellers"
    },
    {
      title: "Cold Glue and Hot Glue Labeling Machines",
      description: "Paper labels on glass bottles beer, sauces, premium spirits typically require glue based application for the adhesive permanence and wet look finish that pressure sensitive labels don't replicate. Cold glue systems run continuously without adhesive warming cycles; hot melt systems offer faster bond tack on high speed lines. Both configurations are available as a packaging labeling machine within SEPPA's line up.",
      link: "/labelling/hot-glue-labelling"
    }
  ],
  contentBlocks: [
    {
      title: "Benefits of Automated Labeling for Production Lines",
      paragraphs: [
        "A packaging labeling machine is not just a labour saving device it's an OEE lever. Overall Equipment Effectiveness depends on availability, performance rate, and quality rate. Manual labeling degrades all three.",
        "Consistency is the most obvious gain. An automatic labeling machine applies labels at the same position, the same tension, and the same pressure on the first unit and the ten thousandth unit. There's no fatigue, no attention drift, and no variation introduced by a shift change.",
        "Speed is the second factor. Depending on configuration, SEPPA's labeling systems operate from 60 containers per minute on a standard linear bottle labeling machine up to several hundred containers per minute on rotary platforms. No manual crew approaches those numbers.",
        "The less discussed benefit is reject rate reduction. A vision system downstream of the applicator head catches missing labels, skewed applications, and label defects before they reach the packing station. Catching a labeling fault at the machine costs seconds. Catching it after palletization costs hours."
      ],
      image1: img3.src,
      reverse: false,
      bgClass: "bg-light"
    }
  ],
  whyChoose: {
    title: "Why Choose SEPPA Solutions for Labeling Equipment?",
    paragraphs: [
      "SEPPA Solutions builds automatic labeling machine systems for beverage, food, pharmaceutical, and personal care manufacturers across export markets. The engineering specification starts from the container geometry and production speed target not from a catalog configuration that gets adapted after the fact.",
      "What that means practically: every sticker labeling machine or glue-based system SEPPA supplies has been designed for the adhesive type, label material, and surface finish of the actual container it will label. High tack adhesive compatibility testing, liner release force calibration, and applicator head geometry are determined before fabrication, not after installation.",
      "Support is built into the supply model. Remote HMI access for parameter adjustment, on-site commissioning, and operator training are standard not optional line items."
    ],
    image: over.src
  },
  methodology: {
    title: "How SEPPA's Labeling Machine Ensures Accurate and Efficient Label Application",
    subtitle: "The process sequence is worth understanding in detail, because each step is where accuracy is either maintained or lost.",
    steps: [
      {
        title: "Container Indexing",
        description: "Infeed starwheels or screw conveyors separate containers to a consistent pitch before the labeling zone. Without defined spacing, label timing cannot be held.",
        image: meth1.src
      },
      {
        title: "Sensor Detection",
        description: "A photocell or laser sensor detects the container leading edge and sends a signal to the PLC, which calculates the exact dispense timing based on conveyor speed.",
        image: meth2.src
      },
      {
        title: "Label Peeling and Dispensing",
        description: "Pulls the label across a sharp angle peel plate, separating it from the liner. Liner tension is servo controlled to maintain consistent peel force regardless of reel diameter.",
        image: meth3.src
      },
      {
        title: "Synchronous Application Pressure",
        description: "Brings the label into contact with the container surface using a wipe on roller or blow on air nozzle, depending on container shape. The applicator speed matches conveyor speed to prevent label stretch or wrinkling.",
        image: meth4.src
      },
      {
        title: "Vision System Inspection",
        description: "A camera checks label position, orientation, and completeness for every container. Non conforming units are diverted by a pneumatic reject gate before the outfeed conveyor.",
        image: meth1.src
      }
    ],
    outro: [
      "This sequence executed reliably thousands of times per hour is what makes a bottle labeling machine a production asset rather than a production liability."
    ]
  },
  faqTitle: "Frequently Asked Questions",
  faqs: [
    {
      question: "1. How often does a packaging labeling machine require maintenance?",
      answer: "Preventive maintenance intervals depend on throughput and adhesive type, but most packaging labeling machine systems require daily cleaning of the applicator head and peel plate, weekly inspection of conveyor belts and drive components, and quarterly calibration of optical sensors. SEPPA provides a maintenance schedule specific to the installed configuration."
    },
    {
      question: "2. How do I choose the right label applicator machine for my container dimensions?",
      answer: "Container diameter, height, label width, and label length are the primary inputs. A label applicator machine is specified around these dimensions plus the required throughput and label material. SEPPA's engineering team performs a container audit before recommending a configuration cylindrical containers suit rotary systems; square or rectangular containers typically require a linear automatic labeling machine."
    },
    {
      question: "3. Why does an automatic sticker labeling machine outperform manual labeling?",
      answer: "Manual application introduces placement variance of several millimeters per unit, slows at sustained throughputs, and cannot integrate with upstream or downstream line controls. An automatic sticker labeling machine holds +0.5mm placement accuracy, maintains consistent speed across full shifts, and feeds reject data back into the production control system. The OEE impact is measurable within the first month of operation."
    },
    {
      question: "4. What label materials are compatible with SEPPA's systems?",
      answer: "SEPPA's automatic labeling machine configurations support paper, BOPP, PET, and foil pressure sensitive labels, as well as PVC and OPS shrink sleeves, and paper labels applied with cold or hot glue. Adhesive compatibility is verified during the design phase against the specific container surface finish."
    },
    {
      question: "5. Why is SEPPA Solutions a reliable supplier for automatic labeling machine equipment?",
      answer: "SEPPA builds to export standards, with electrical panels certified for CE marking and PLC programming documented for in house maintenance. Every automatic labeling machine system shipped includes full wiring schematics, spare parts recommendations, and operator training. The build quality and post sale support structure are why repeat orders from established customers account for a significant share of SEPPA's production volume."
    }
  ]
};

const LabellingPage = () => {
  return <PackagingPageLayout data={pageData} />;
};

export default LabellingPage;
