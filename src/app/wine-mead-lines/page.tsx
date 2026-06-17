import React from 'react';
import PackagingPageLayout, { PackagingPageData } from '@/components/packaging/PackagingPageLayout';
import bannerImg from '@/assets/packaging/generated/wine_production_wide_1781701527332.png';
import overviewImg from '@/assets/packaging/generated/wine_bottles_closeup_1781701540385.png';
import img1 from '@/assets/packaging/generated/modern_beverage_factory_1781701623841.png';
import img2 from '@/assets/packaging/generated/stainless_steel_tanks_1781701637471.png';
import img3 from '@/assets/packaging/generated/wine_production_wide_1781701527332.png';
import meth1 from '@/assets/packaging/pouch/moderm.webp';
import meth2 from '@/assets/packaging/can/commissing.webp';
import meth3 from '@/assets/packaging/can/install.webp';
import meth4 from '@/assets/packaging/can/training.webp';

const pageData: PackagingPageData = {
  title: "Complete Wine Line Solutions | SEPPA Solutions",
  breadcrumbName: "Wine & Mead Lines",
  rootBreadcrumbName: "Complete Lines",
  rootBreadcrumbPath: "/complete-lines",
  headerImage: bannerImg.src,
  overviewTitle: "The State of Modern Wine Production",
  overviewDescription: "Wine is one of the few agricultural products where the method of production is considered as important as the product itself. Winemakers spend years perfecting fermentation profiles, barrel programs, and blending ratios then risk undoing all of it during the final bottling run if the equipment is not up to the task.",
  overviewsubDescription: [
    "That tension sits at the center of what SEPPA has been solving for over 50 years. A properly integrated wine on line does not just automate tasks. The protection goes to the decisions that the winemaker made months or even years back before the product was bottled. Each step in the process, from the fermentation of the Wine on line in the fermenter, to filtration, bottling, labeling, and palletization, influences the organoleptic profile, the shelf life of the product, and the brand image.",
    "The range of configurations available today single variety runs, multi label flexibility, export grade line speeds reflects the actual diversity of how wine is made and sold globally."
  ],
  overviewImage: overviewImg.src,
  contentBlocks: [
    {
      title: "Automated Wine Bottling Lines",
      paragraphs: [
        "Most of the oxygen absorption takes place at the filling step. Any slight dissolved oxygen increase while bottling may result in early oxidation, reduction in aromas, and destruction of the tannins' profile. This is highly significant for high quality whites, sparkling wines, and natural low sulfur wines that have a low resistance to oxidation.",
        "SEPPA's wine filling machine uses vacuum based filling technology specifically to address this. Since the evacuation process takes place before any liquid enters the bottle, it is possible to maintain dissolved oxygen levels less than 0.1ppm a level which would not have been possible to achieve without dedicated machinery just a few years back. In addition, the Wine on line filling machine uses servo controlled nozzles, meaning the accuracy remains consistent with bottle filling irrespective of speed.",
        "The bottling sequence filling, corking, capsule application, and sealing runs in coordinated synchronization across the Wine on line lines. Downtime between stations is minimized. Pressure transitions between the filler and the corker are buffered to prevent turbulence that could affect fill levels or disturb sediment in unfiltered wines.",
        "The SEPPA's wine filling systems come in various production capacities, ranging from 1,500 bottles an hour for specialty production to above 30,000 an hour for higher production. These systems come with both the CIP and SIP capabilities."
      ],
      image1: img1.src,
      reverse: true
    },
    {
      title: "Wine Packaging and Labelling Systems",
      paragraphs: [
        "Labelling is not merely an embellishment. When you are dealing with a premium Wine on line brand, labelling may well be the first point of engagement between the product and its user. Incorrect alignment, poor application of glue, or uneven positioning renders the investment in design meaningless.",
        "SEPPA integrates high speed labelling modules directly into the wine on line architecture. Label application is synchronized with bottle rotation sensors, which eliminates the slippage common in older friction drive systems. Whether the bottle profile is Bordeaux, Burgundy, Champagne, or a proprietary shape, the system adjusts without manual reconfiguration.",
        "Date and batch coding modules are embedded in the same line sequence, so traceability data is applied at the same station without adding a separate handling step. This matters for export compliance and increasingly for direct to consumer markets where lot transparency is expected.",
        "The wine bottling equipment at the labelling stage is built to handle paper, synthetic, and film labels with equal accuracy. Shrink sleeve application, neck foil, and back label modules are available as integrated add ons, all controlled from a single HMI interface."
      ],
      image1: img2.src,
      reverse: false
    },
    {
      title: "Custom Winery Solutions for Different Wine Types",
      paragraphs: [
        "Not every wine is made the same way. A high volume commercial rosé operates under completely different production logic than a single barrel Barolo or a method traditionnelle sparkling Wine on line. The equipment choices and especially the wine fermenter configuration reflect those differences directly.",
        "In small batch, artisan production environments, SEPPA engineers compact wine on line processing facilities using temperature controlled fermenters with glycol cooling jackets, and the ability to manage the exact temperatures required for fermentation is the key distinction between a “good” ferment and a problematic one that results in either getting “stuck” or being otherwise compromised by thermal stress.",
        "For larger operations, the wine fermenter selection shifts toward high capacity vessels with integrated lees management systems and automated pump over scheduling. These scale with the wine on line to support continuous production across multiple varietals simultaneously, each tracked independently through the line control system.",
        "SEPPA's team works through the varietal requirements, production volume targets, and facility constraints before specifying the equipment. The wine lines are built around those differences, not retrofitted to ignore them."
      ],
      image1: img3.src,
      reverse: true
    },
    {
      title: "Wine Filtration System and Turnkey Engineering Support",
      paragraphs: [
        "Filtration is the quality stabilization step that most consumers never think about and that winemakers think about constantly. A poorly specified wine filtration system removes too much and strips the wine of texture, colour, or aromatic complexity. One that is under specified allows microbial instability or protein haze that shortens shelf life and generates returns.",
        "SEPPA designs the filtration system around the specific wine type, target market, and stability requirements. Cross flow filtration is the preferred method for wines that need to be clear but not have their taste compromised due to the loss of flavour experienced when using diatomaceous earth or plate and frame filtration methods.",
        "The turnkey engineering model covers facility audit, equipment specification, civil work coordination, installation, commissioning, and sterile validation. For the wine filtration system specifically, commissioning includes integrity testing of membrane elements, validation of clean in place protocols, and documentation suitable for regulatory or export certification purposes.",
        "SEPPA's engineering team stays involved through the production ramp-up phase, not just the installation. This is where most line efficiency problems surface and where early intervention avoids the kind of process variability that shows up in finished product quality."
      ],
      image1: img1.src,
      reverse: false
    },
    {
      title: "Benefits of a Complete Wine Production Line",
      paragraphs: [
        "The case for an integrated line versus assembled point solutions comes down to three things: consistency, traceability, and total cost of ownership.",
        "Consistency improves when all equipment runs under coordinated control. A wine filling machine that communicates with upstream filtration and downstream labelling eliminates the buffer losses and manual handling steps that introduce variability. Fill accuracy, label registration, and closure torque are all monitored from a single system.",
        "Traceability is complete when the wine on line generates unified production records. Batch coding, CIP logs, fill weight data, and filtration pressure trends are captured in one platform rather than across multiple disconnected systems.",
        "Total cost of ownership is lower when wine bottling equipment is designed for maintainability. SEPPA builds equipment with standardized components, accessible service points, and predictive maintenance alerts built into the HMI."
      ],
      image1: img2.src,
      reverse: true
    }
  ],
  whyChoose: {
    title: "Why Choose SEPPA for Wine Production Lines",
    paragraphs: [
      "SEPPA's track record across 7,000+ installations in more than 50 countries is a starting point but what matters more to a winery evaluating equipment is whether the system will work for their specific product, volume, and facility constraints.",
      "SEPPA constructs the Wine on line using modular designs to be incorporated with existing infrastructure wherever feasible, and replacement will only be advised if the engineering justifies doing so. This has firsthand knowledge of the engineering aspects involved in making wine: oxygen free filling, material compatibility with sulfites, controlled temperatures during conveyance for sparkling wine, among others.",
      "A complete wine on line from SEPPA is not a catalogue sale. It is a specified, installed, and validated system, backed by service infrastructure that outlasts the installation team's visit."
    ]
  },
  methodology: {
    title: "Wine Production Line Methodology",
    steps: [
      {
        title: "Facility Audit",
        description: "The first step in this process involves conducting a site review to ascertain the nature of the existing utility systems, floor space, ceiling height, temperature control system, and equipment present at the location.",
        image: meth1.src
      },
      {
        title: "Equipment Selection",
        description: "The fermenter specification, wine filtration system sizing, filling speed, and packaging configuration are determined based on production targets and product mix. This is where the wine on line design takes shape.",
        image: meth2.src
      },
      {
        title: "Installation & Commissioning",
        description: "SEPPA's installation teams work in coordination with local civil contractors. Equipment is installed, utilities are connected, and the full wine on line is tested under production conditions before handover.",
        image: meth3.src
      },
      {
        title: "Validation",
        description: "The filling equipment and filtration system undergo protocol based validation, including fill accuracy tests, dissolved oxygen measurement, and CIP verification. Documentation is provided as part of the commissioning package.",
        image: meth4.src
      },
      {
        title: "Ongoing Support",
        description: "Spare parts, remote diagnostics, and field service are available post commissioning. The wine lines are supported through their full operational life.",
        image: meth1.src
      }
    ]
  },
  faqTitle: "Frequently Asked Questions",
  faqs: [
    {
      question: "How often does a high speed wine filling machine require maintenance?",
      answer: "Routine maintenance intervals depend on throughput and product characteristics. SEPPA's filling equipment is designed for daily CIP cycles and periodic mechanical inspection. Most high speed lines run 6 month scheduled service intervals for seal replacement and nozzle calibration. The integrated HMI logs wear indicators and generates alerts before failures occur, which reduces unplanned downtime significantly."
    },
    {
      question: "How do I select the right wine filtration system for my winery?",
      answer: "Choosing a proper filtration system is determined by the type of wine you produce, its targeted level of clarity and stability. For most types of table wine, cross flow filtration is ideal as it ensures that both texture and microbial load are preserved in the wine. Sterile membrane filtration may be necessary when your wine has a long shelf life period, especially when exporting it to tropical destinations."
    },
    {
      question: "What are the fermentation benefits of integrating a modern wine fermenter?",
      answer: "A properly designed wine fermenter helps the winemaker to control temperature, pump over schedule, and duration of contact with lees. Glycol jacketed tanks with programmable temperature schedules ensure consistent fermentation cycles from year to year. Nitrogen blanketing capability is included in the designs offered by SEPPA, a process important especially for aromatic whites and low intervention Wine on line."
    },
    {
      question: "What is the ROI timeline for upgrading a complete wine production line?",
      answer: "ROI depends heavily on current throughput, labour costs, and reject rates. The upfront cost of quality wine bottling equipment is usually recovered faster than operators expect. Most wineries that upgrade to a fully integrated wine on line see payback within 3–5 years, driven by reduced labour hours, lower reject rates at filling and labelling, and decreased sanitation costs from CIP automation."
    },
    {
      question: "Can SEPPA's wine lines handle multiple wine types on the same production run?",
      answer: "Yes. SEPPA engineers wine lines for multi SKU flexibility. Changeover between bottle formats, closure types, and label sets is handled through the line's HMI control system, with saved recipes for each configuration. CIP protocols are run between product types to prevent cross contamination. The wine on line architecture supports mixed format production without requiring separate equipment for each varietal or brand."
    }
  ]
};

const WineMeadLinesPage = () => {
  return <PackagingPageLayout data={pageData} />;
};

export default WineMeadLinesPage;
