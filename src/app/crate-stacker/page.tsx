import React from 'react';
import PackagingPageLayout, { PackagingPageData } from '@/components/packaging/PackagingPageLayout';

import bannerImg from '@/assets/processing/generated/processing_banner_1781759101340.png';
import overviewImg from '@/assets/blowing/generated/blowing_overview_1781759662496.png';
import img1 from '@/assets/processing/generated/processing_cb1_1781759122683.png';
import img2 from '@/assets/processing/generated/processing_cb2_1781759136791.png';
import over from '@/assets/processing/generated/processing_whychoose_1781759182691.png';

import meth1 from '@/assets/processing/generated/processing_meth1_1781759196548.png';
import meth2 from '@/assets/processing/generated/processing_meth2_1781759215088.png';
import meth3 from '@/assets/processing/generated/processing_meth3_1781759228926.png';
import meth4 from '@/assets/processing/generated/processing_meth4_1781759240871.png';

const pageData: PackagingPageData = {
  title: "Crate Stacker Technology",
  breadcrumbName: "Crate Stacker",
  rootBreadcrumbName: "Equipments",
  rootBreadcrumbPath: "/equipments",
  headerImage: bannerImg.src,
  overviewTitle: "Master Vertical Storage with Seppa Crate Stacker Technology",
  overviewDescription: "In the hyper-competitive landscape of modern intralogistics and high-density warehouse environments, floor space is an exceptionally valuable commodity. Facilities are continuously challenged by the spatial economics of manufacturing: how to store exponentially increasing volumes of product without undertaking costly structural expansions.",
  overviewsubDescription: [
    "A crate stacker is the definitive engineering solution designed to seamlessly reclaim this vertical warehouse real estate. Far more than a simple lifting mechanism, a professional stacker rack transforms chaotic, sprawling, floor-level inventory into rigorously organized, high-density vertical storage columns.",
    "By capitalizing on intelligent vertical gravity management, warehouse operations can exponentially increase their holding capacity within their existing square footage. Unlike rudimentary, manually operated setups, a modern rack stacker operates as a highly calibrated, deterministic network. It ensures that every available millimeter of overhead space is utilized safely and efficiently.",
    "As you begin the process of evaluating and analyzing your overall material handling equipment strategy, changing the approach to automation by moving away from inefficient floor stacking to a full stacker rack system is key. In terms of functionality, this process hinges entirely upon the ability of the stacker rack to endure heavy loads, since these stacker rack are designed for constant use, 24 hours per day."
  ],
  overviewImage: overviewImg.src,
  contentBlocks: [
    {
      title: "Benefits of Automated Crate Stacking",
      paragraphs: [
        "The operational and financial advantages of upgrading to a fully automated vertical system are profound. By implementing a high-capacity stacker rack, facilities immediately achieve maximum physical footprint utility. Floor space that was previously choked by sprawling, single-level pallets is instantly reclaimed, offering a massive and verifiable return on investment (ROI). Furthermore, relying on an autonomous rack stacker radically diminishes the daily risk of manual crate damage and product loss.",
        "Human error is entirely removed from the lift equation. The advanced electric stacker unit mathematically ensures smooth, highly controlled acceleration and deceleration throughout the entire vertical lift sequence, protecting fragile fast-moving consumer goods (FMCG).",
        "Beyond the obvious space savings and damage reduction, the comprehensive safety profile of the warehouse drastically improves. Operator safety is inherently increased when heavy, repetitive lifting is delegated to advanced, fail-safe machinery. By deliberately structuring your storage around a meticulously engineered stacker rack, you completely eliminate the severe ergonomic hazards and potential workplace injuries associated with manual lifting, driving both strict regulatory compliance and absolute operational peace of mind."
      ],
      image1: img1.src,
      reverse: true
    },
    {
      title: "How the Crate Stacker Improves Production Efficiency",
      paragraphs: [
        "Efficiency in industrial logistics is ultimately measured by cycle-time optimization and the ability to maintain steady-state throughput regardless of volume spikes. A specialized material handling equipment setup featuring synchronized vertical lifts ensures that the primary production line remains entirely clear of bottlenecks.",
        "By significantly minimizing the transit time from end-of-line packaging to vertical holding zones, operations are permitted to run leaner, faster, and more predictably. Maintaining this continuous, uninterrupted flow requires robust infrastructure; hence, a high-output stacker rack is critical for sustaining modern production quotas.",
        "When this framework is seamlessly integrated with advanced micro-positioning guidance mechanisms like the shoe stacker tooling, the automated system achieves micro-millimeter placement accuracy. This operational synergy shaves critical seconds off every single deposit and retrieval cycle. Consequently, the entire stacker rack infrastructure functions as a highly responsive, high-speed buffer zone, fully capable of absorbing sudden production surges without overwhelming your critical floor logistics."
      ],
      image1: img2.src,
      reverse: false
    }
  ],
  featuresTitle: "Key Features of the Crate Stacker",
  featuresSubtitle: "The technical superiority of Seppa’s systems is rooted in uncompromising engineering principles. Modern high-density storage requires far more than brute force; it demands absolute precision.",
  features: [
    { title: "Electric Stacker Module", description: "This highly sophisticated unit is engineered with high-torque lifting mechanisms specifically mapped to manage extreme lift-capacity dynamics without sacrificing speed or stability." },
    { title: "Industrial-Grade Metallurgy", description: "To guarantee long-term structural integrity under rigorous, high-throughput continuous cycling, we utilize industrial-grade steel alloys and advanced composites as our primary rack material." },
    { title: "Specialized Shoe Stacker", description: "Our most advanced system configurations seamlessly integrate a specialized shoe stacker—a high-precision end-of-arm tooling component specifically designed for narrow-aisle guidance." },
    { title: "Precise Sensor Arrays", description: "The exacting core design of the stacker rack is complemented by precise sensor arrays (such as photoelectric and ultrasonic proximity sensors) that keep track of the loading balance and positioning at all times." },
    { title: "Scalable Modularity", description: "Allows growing facilities to expand their operations and add storage tiers sequentially without experiencing catastrophic downtime. Regenerative brakes and PLC connectivity make our automated lifts a cornerstone of safe material handling." }
  ],
  whyChoose: {
    title: "Why Choose Seppa Solutions for Crate Stackers?",
    description: "Major FMCG brands and heavy industrial manufacturing firms consistently trust our engineering pedigree because we understand vertical space optimization at a profoundly granular level.",
    paragraphs: [
      "Seppa Solutions confidently leads the automation industry through our uncompromising selection of heavy-duty rack material, ensuring that every installation securely outlasts the competition under the harshest operational conditions.",
      "We masterfully integrate cutting-edge material handling equipment into existing legacy warehouse layouts without disrupting ongoing, daily operations. The unique system designs we employ, most of which make use of our advanced shoe stacker tooling, ensure minimal variation during operations.",
      "This commitment to perfection in engineering ensures that every one of our stacker racks used is a perfectly calibrated and customized solution that has been engineered specifically to meet your capacity requirements."
    ],
    image: over.src
  },
  methodology: {
    title: "Crate Stacker Methodology: The SEPPA End of Line Solution",
    steps: [
      {
        title: "Product Indexing",
        description: "Filled bottles or crates proceed downstream directly to the dedicated indexing mechanism, where they are automatically and flawlessly indexed by 90 degrees and seamlessly pushed onto the dynamic rack elevator system.",
        image: meth1.src
      },
      {
        title: "Synchronization",
        description: "Once the payload is entirely in position, specialized synchronization flaps located at the bottom activate to ensure the absolute correct physical spacing between the bottles or crates.",
        image: meth2.src
      },
      {
        title: "Loading & Filling",
        description: "A calibrated pneumatic device pushes the synchronized load deep into the stacker rack. The vertically integrated electric stacker elevator system moves intelligently up or down to efficiently fill the crates into the next sequentially empty tier.",
        image: meth3.src
      },
      {
        title: "Reset & Repeat",
        description: "Once a rack is completely filled to capacity, the automated cycle instantly resets and precisely begins the identical operation for another empty stacker rack.",
        image: meth4.src
      }
    ]
  },
  faqTitle: "Frequently Asked Questions",
  faqs: [
    {
      question: "What is the maximum load capacity of a standard rack stacker system?",
      answer: "Load capacity is directly dictated by the structural integrity of the engineered rack material and the specific motor specifications of the lifting module. Most of our heavy-duty vertical systems can comfortably and repeatedly handle thousands of kilograms per individual column, managed safely by an advanced electric stacker drive system."
    },
    {
      question: "How does a stacker rack adapt to different crate footprints and bottle sizes?",
      answer: "Our automated systems utilize highly modular PLC programming combined with dynamically adjustable pneumatic pushers. Whether you are using a standard square base or require high-precision shoe stacker end-of-arm tooling for uniquely shaped crates, the entire system seamlessly accommodates varying dimensions via simple interface adjustments."
    },
    {
      question: "Why is a dedicated rack stacker often considered more economical than full 6-axis robotics?",
      answer: "While highly articulated robotic arms offer multi-directional flexibility, a dedicated vertical lift system focuses entirely on highly efficient gravity management and rapid high-density indexing. This specialized focus makes our stacker rack solutions vastly more cost-effective regarding initial capital outlay and maintenance, while consistently delivering identical—if not vastly superior—vertical cycle times."
    },
    {
      question: "How does the system handle predictive maintenance to minimize downtime?",
      answer: "Seppa systems utilize integrated PLC diagnostics to track motor thermal profiles and torque variances in real time, catching mechanical deviations before they cause a fault. Thanks to our modular component architecture, routine servicing is fast and straightforward, keeping your high-density columns running around the clock."
    },
    {
      question: "Which communication protocols bridge the physical system with a corporate WMS?",
      answer: "We use industry-standard industrial Ethernet protocols like PROFINET, EtherNet/IP, and Modbus TCP. This creates a real-time data link between the material handling equipment and your Warehouse Management System (WMS) for instant inventory tracking and location verification."
    }
  ]
};

const CrateStackerPage = () => {
  return <PackagingPageLayout data={pageData} />;
};

export default CrateStackerPage;
