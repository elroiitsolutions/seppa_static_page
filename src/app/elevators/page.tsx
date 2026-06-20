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
  title: "Pneumatic Cap Elevators",
  breadcrumbName: "Elevators",
  rootBreadcrumbName: "Equipments",
  rootBreadcrumbPath: "/equipments",
  headerImage: bannerImg.src,
  overviewTitle: "What Is a Pneumatic Cap Elevator and How Does It Work?",
  overviewDescription: "Every high output bottling line needs a continuous supply of oriented closures arriving at the capping turret at line speed. Cap elevators are the link between the bulk storage hopper and that turret. The pneumatic variant handles that function on a different operating principle than any belt driven machine can.",
  overviewsubDescription: [
    "Instead of a rubber step conveyor lifting closures by friction, a pneumatic cap elevators uses high velocity air streams channeled through calibrated induction nozzles inside a vertical transport column. Closures load into a buffer hopper at the base. Blower driven airflow lifts them upward through a sealed channel no rollers, no belts, no driven contact surfaces.",
    "The caps ride an air cushion, separated from each other, until they reach the orientation sorter above the capping station. Because there is no mechanical grip, these cap elevators handle lightweight sport caps, fragile tamper evident closures, and synthetic corks without the surface marking or deformation that belt contact causes. The air lifts; the channel geometry orients. That's the whole mechanism."
  ],
  overviewImage: overviewImg.src,
  contentBlocks: [
    {
      title: "Key Features of the Pneumatic Cap Elevators System",
      paragraphs: [
        "The engineering inside high performance cap elevators starts with a variable speed centrifugal blower whose output responds in real time to pressure feedback from downstream sensors. When closures back up, the blower throttles down. When the buffer at the rotary cap feeder drops below threshold, flow increases. No manual adjustment, no operator attention required.",
        "Nozzle geometry along the conveying column sets both the lift rate and the spacing between closures in transit. At Seppa Solutions, the nozzle array is calibrated to the specific cap diameter and mass for each installation. This produces the air cushioning effect that distinguishes specialized cap handling equipment from generic pneumatic conveying the airflow is tuned to the closure, not estimated for a range of products.",
        "Anti jamming sensors at the column entry point and the orientation zone detect closures that have entered at a bad angle or collided and stacked. When one fires, a short reverse air pulse clears the blockage typically under 300 milliseconds without stopping the line. For bottle capping equipment running continuous motion turrets, that recovery speed is the difference between a hiccup and a stoppage."
      ],
      image1: img1.src,
      reverse: true
    },
    {
      title: "Benefits of Automated Cap Feeding",
      paragraphs: [
        "The practical advantage of pneumatic cap elevators over mechanical ones is straightforward: no belt means no belt wear. Step conveyor cap elevators use synthetic rubber belts that stretch, crack, and eventually shed particulate into the cap stream. That particulate can trigger cosmetic rejects or, in regulated sectors, quality failures. A pneumatic cap elevators system removes that failure mode entirely.",
        "Speed synchronization between the cap feeding machine and the rotary cap feeder is handled electronically. Turret encoder feedback routes to the elevator's blower controller, matching feed rate to actual demand without overfilling the chute or starving it. Consistent head pressure at the feeder bowl is what keeps cap handling equipment running jam free through a full production shift.",
        "Lines that switch from belt driven elevators to pneumatic systems typically see a noticeable drop in unplanned stops attributable to cap feed faults. Service intervals extend significantly because there is no contact surface degrading with each cycle."
      ],
      image1: img2.src,
      reverse: false
    },
    {
      title: "Applications Across Industries",
      paragraphs: [
        "Beverage filling lines carbonated soft drinks, water, juice primarily need speed and cap integrity. Sport caps, flat plastic screw caps, and synthetic corks transit through pneumatic cap elevators without surface marking. At six hundred units per minute, even a modest reduction in cosmetic damage is worth chasing.",
        "Pharmaceutical and nutraceutical operations need something different: contamination control. The sealed transport column of a pneumatic cap elevators has no open belt surfaces, no metal on cap contact, and no lubrication points near the cap stream. Bottle capping equipment on a pharmaceutical line is only as clean as the cap supply that feeds it air driven transport addresses that directly.",
        "FMCG packaging lines handling personal care or household products often run multiple closure types across the same machine. A line running tamper evident closures one shift and ROPP metal twist off caps the next via Seppa's magnetic cap elevator needs cap handling equipment that adapts without a line rebuild."
      ],
      image1: img3.src,
      reverse: true
    }
  ],
  whyChoose: {
    title: "Why Choose Seppa Solutions for Pneumatic Cap Elevators Systems?",
    description: "Seppa builds cap elevators for lines where feed reliability is not a secondary concern.",
    paragraphs: [
      "The engineering variable speed blowers, sensor linked flow control, precision nozzle calibration was developed against the specific cost of cap feeding machine downtime on high speed bottle capping equipment. That context shapes design decisions that don't always show up in a specification sheet.",
      "The product range covers pneumatic cap elevators for plastic closures, mechanical step conveyor elevators for metal caps and aluminium screw caps, and magnetic cap elevators for crown caps and ROPP closures. Hopper capacities run from 150 litres to 2,000 litres. Mounting options include fixed feet for permanent installation and self blocking castor wheels for lines that reposition between product runs.",
      "Every rotary cap feeder interface is commissioned to the specific turret, cap geometry, and line speed of the operation not set to a generic parameter. That commissioning step is where the performance gap between a Seppa system and an off the shelf installation tends to show up in the first weeks of production."
    ],
    image: over.src
  },
  methodology: {
    title: "Methodology of Pneumatic Cap Elevation and Feeding Process",
    steps: [
      {
        title: "Bulk Loading",
        description: "Bulk closures enter the buffer hopper at the base available in capacities from 150 to 2,000 litres, sized to the resupply interval the line operates on. From the hopper, an induction nozzle array draws closures into the vertical transport column.",
        image: meth1.src
      },
      {
        title: "Pneumatic Lifting",
        description: "Airflow velocity at this stage is set to the cap's mass and projected area: enough to achieve consistent vertical lift, not so high that caps collide on their way up.",
        image: meth2.src
      },
      {
        title: "Orientation & Sorting",
        description: "At the top of the column, closures enter the orientation sorting zone. A combination of mechanical guides and air assist jets presents every pneumatic cap to the downstream rotary cap feeding machine in the correct orientation. Misoriented closures are redirected back to the hopper.",
        image: meth3.src
      },
      {
        title: "Delivery to Feeder",
        description: "From the sorter, a regulated chute delivers caps at line speed to the feed bowl or direct feed chute of the bottle capping equipment. Feed rate at this stage is governed by the turret encoder feedback loop.",
        image: meth4.src
      }
    ]
  },
  faqTitle: "Frequently Asked Questions",
  faqs: [
    {
      question: "What maintenance does a pneumatic cap elevators require?",
      answer: "Less than most operators expect. There are no conveyor belts to tension or replace, no mechanical drives in contact with closures, and no lubrication points inside the cap transport path. Routine work covers blower filter cleaning, nozzle inspection at high throughput positions, and periodic sensor calibration. Most Seppa cap elevators run 18 to 24 months between scheduled service interventions."
    },
    {
      question: "Why does a pneumatic system outperform belt-driven cap handling equipment?",
      answer: "Belt elevators impose mechanical contact on every closure. Belt stretch, surface wear, and speed inconsistency accumulate over time, and when a belt fails, the line stops. A pneumatic cap elevator has no wear surface touching the cap feeding machine, no speed variance from a worn drive, and no component that degrades through normal cycle count."
    },
    {
      question: "Can a pneumatic cap feeding machine integrate into an existing line?",
      answer: "In most cases, yes. Seppa's pneumatic cap elevators range includes standalone units designed to replace existing belt elevators without major modifications to the surrounding layout. The interface to the downstream rotary cap feeder is configurable to match existing chute geometry."
    },
    {
      question: "What is the ROI on modern cap handling equipment?",
      answer: "Payback on a pneumatic system often lands under 18 months when measured against actual downtime data, factoring in frequency of cap feeding machine related stoppages, cosmetic reject rate at the capping station, and maintenance labour cost."
    },
    {
      question: "Why do FMCG manufacturers choose Seppa for cap elevator systems?",
      answer: "Usually for commissioning depth. Seppa engineers the speed sync integration to the specific bottle capping equipment already on the line, rather than handing over a pre configured unit and leaving calibration to the customer. That distinction tends to be visible in first month reliability data."
    }
  ]
};

const ElevatorsPage = () => {
  return <PackagingPageLayout data={pageData} />;
};

export default ElevatorsPage;
