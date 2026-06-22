import React from 'react';
import PackagingPageLayout, { PackagingPageData } from '@/components/packaging/PackagingPageLayout';
import bannerImg from '@/assets/packaging/pouch/pouch-banner.webp';
import overviewImg from '@/assets/packaging/generated/sauce_overview.png';
import img1 from '@/assets/packaging/pouch/pouch-machine.jpg';
import img2 from '@/assets/packaging/generated/wine_banner.png';
import img3 from '@/assets/packaging/brick/orange.jpg';
import meth1 from '@/assets/packaging/pouch/moderm.webp';
import meth2 from '@/assets/packaging/can/commissing.webp';
import meth3 from '@/assets/packaging/can/install.webp';
import meth4 from '@/assets/packaging/can/training.webp';

const pageData: PackagingPageData = {
  title: "Complete Dairy Product Lines by SEPPA Solutions",
  breadcrumbName: "Liquid Dairy Products",
  rootBreadcrumbName: "Complete Lines",
  rootBreadcrumbPath: "/complete-lines",
  headerImage: bannerImg.src,
  overviewTitle: "Complete Dairy Product Lines by SEPPA Solutions",
  overviewDescription: "SEPPA has been building complete dairy product lines for over 50 years. With more than 7,000 installations worldwide, the company works across small cooperative setups and large industrial operations and the engineering approach does not change much between them. You get the same focus on hygiene, the same obsession with consistency, and the same drive to cut waste wherever the line allows.",
  overviewsubDescription: [
    "This page covers how SEPPA designs and commissions a full dairy processing plant, from the moment raw milk arrives at the farm gate to the moment a labelled, coded bottle leaves the palletizer."
  ],
  overviewImage: overviewImg.src,
  contentBlocks: [
    {
      title: "What a Complete Dairy Line Actually Means",
      paragraphs: [
        "A complete dairy production line is not a collection of standalone machines connected by hope. Each step must communicate with the following step, from receiving to pasteurizing, homogenizing, bottling, and packaging. Rates, temperatures, and pressure all have to be coordinated with one another. Otherwise, there will either be loss of product or problems with hygiene.",
        "SEPPA engineers each dairy processing plant as a single system rather than a series of procurement decisions. That distinction matters for dairy processing plant managers who have spent years managing the friction between equipment from five different vendors that was never really designed to work together.",
        "The goal at every site is the same: the highest possible yield from raw input, the lowest possible footprint, and zero compromise on food safety."
      ],
      image1: img1.src,
      reverse: true
    },
    {
      title: "Raw Milk Reception and Storage",
      paragraphs: [
        "Every milk processing plant starts at reception. If the raw milk quality is poor, nothing downstream fixes it.",
        "SEPPA's reception systems include inline conductivity testing, acidity measurement, and fat/protein analysis before milk even enters the silo. Cooling begins within minutes of arrival. The milk processing plant workflow specifies that milk must drop below 4°C and hold there anything above that is a food safety flag, not a preference.",
        "Cold storage silos are insulated stainless steel vessels with CIP (Clean in Place) systems built into the design from day one. There is no retrofitting CIP onto a tank that was not built for it; that approach creates dead zones and contamination risks that no cleaning protocol fully eliminates.",
        "Filtration at the reception stage removes physical debris but does not touch microbial load that is the job of what comes next."
      ],
      image1: img2.src,
      reverse: false
    },
    {
      title: "Pasteurization and Homogenization",
      paragraphs: [
        "This is the technical heart of any dairy processing plant. The decisions made here determine shelf life, nutritional profile, taste, and regulatory compliance.",
        "SEPPA's milk processing line uses plate heat exchangers for standard pasteurization (72°C for 15 seconds) and tubular exchangers for UHT applications (135–140°C for 2–4 seconds). The distinction between the two is not just temperature it is the product texture and shelf life outcome. UHT milk processed on a properly configured dairy processing plant can achieve ambient shelf life beyond 12 months without preservatives. ESL (Extended Shelf Life) products processed at intermediate temperatures typically hold 45–60 days refrigerated.",
        "Thermal mapping matters more than most buyers realize. SEPPA's dairy processing equipment uses precision sensors across every heat exchange zone, with data logged continuously. If a zone deviates by more than 0.5°C from target, the system flags it before product reaches the downstream stages. This is not optional on a modern dairy processing plant food safety regulations in most export markets require documented thermal validation.",
        "Homogenization happens in line after pasteurization. SEPPA's high pressure homogenizers run at 150–200 bar, breaking fat globules to less than 1 micron. The result is a stable, consistent product that does not separate on the shelf. The dairy processing equipment handles this automatically, with pressure adjustable from the control panel based on fat content of the incoming batch.",
        "A milk processing line running integrated pasteurization and homogenization through a single PLC-controlled system is dramatically easier to validate, audit, and maintain than a line where those stages operate independently."
      ],
      image1: img3.src,
      reverse: true
    },
    {
      title: "Filling, Packaging, and Coding",
      paragraphs: [
        "Once the product is processed, it moves into the filling section and this is where contamination risk spikes if the system design is weak.",
        "SEPPA offers aseptic and ESL filling heads for ambient and refrigerated applications. The dairy farm equipment used upstream specifically the reception and storage system directly affects what the filling stage has to manage. Consistent input quality means consistent fill weights and lower rejection rates.",
        "PET bottle blowing is integrated on SEPPA lines using a blow-fill-seal approach where bottle formation and filling happen in a clean zone without the bottle ever touching an unsterile surface between moldings and sealing. The bottles SEPPA engineers are typically 25% lighter than standard market equivalents but achieve more than 30% better top load performance relevant for stacking during transit and retail display.",
        "This weight reduction does not compromise design freedom. SEPPA can accommodate custom bottle profiles, including asymmetric and ergonomic forms that would stress a less capable blow moldings station.",
        "After filling and sealing, the dairy processing plant line runs products through labelling, date coding, and batch coding before packing and palletizing. These stages are automated and integrated the batch code applied at coding is the same identifier logged at reception, creating full traceability across the dairy processing plant lifecycle. If there is ever a recall or quality event, you can pull every affected unit by batch in minutes rather than hours.",
        "Stretch wrapping and palletizing close out the line. SEPPA's pallet patterns are optimized by product and transport mode refrigerated truck loads are configured differently from ambient container loads."
      ],
      image1: img1.src,
      reverse: false
    }
  ],
  whyChoose: {
    title: "Why Choose SEPPA for Dairy Product Lines",
    description: "SEPPA has been in this industry long enough to have made, and corrected, most of the mistakes that newer dairy farm equipment suppliers are still making. There are a few things that distinguish a SEPPA dairy processing plant from what you get when you assemble a line from component suppliers:",
    reasons: [
      {
        id: "source",
        title: "Single source accountability",
        description: "One engineering team is responsible for every stage of the milk processing plant. If there is a flow problem between the pasteurizer and the filler, there is no vendor dispute SEPPA owns both."
      },
      {
        id: "design",
        title: "Sanitary design from first principles",
        description: "SEPPA's dairy processing equipment is designed to 3-A and EHEDG standards. That means no threads inside product contact zones, no horizontal surfaces where liquid can pool, no gaps where biofilm can establish. These are not certifications obtained by audit they are the result of designing the dairy farm equipment correctly the first time."
      },
      {
        id: "validation",
        title: "Validated commissioning",
        description: "Every milk processing line SEPPA installs goes through a sterile commissioning protocol before the customer accepts product. This involves full CIP validation, thermal mapping under load, and a production run under SEPPA supervision."
      },
      {
        id: "support",
        title: "Long term support",
        description: "SEPPA maintains spare parts availability for more than 15 years after installation. For a dairy processing plant with a capital cost in the millions, that is not a minor consideration."
      }
    ]
  },
  methodology: {
    title: "Methodology: How SEPPA Designs and Builds Your Dairy Processing Line",
    steps: [
      {
        title: "Site Planning",
        description: "The process starts with site planning capacity requirements, utility availability, headroom, drainage, and ambient temperature. These inputs drive the configuration of the dairy processing plant layout before any equipment is specified.",
        image: meth1.src
      },
      {
        title: "Equipment Selection",
        description: "Equipment selection for the milk processing plant comes next. SEPPA's engineers match machine capacity to your production schedule, not to the nearest standard configuration. A line sized 20% over your actual demand is waste; a line sized 5% under it is a production problem every shift.",
        image: meth2.src
      },
      {
        title: "Fabrication & FAT",
        description: "Fabrication and assembly happen at SEPPA's manufacturing facilities. Factory acceptance testing (FAT) lets customers review and run dairy processing equipment before it ships. This catches design mismatches before installation when they are cheap to fix rather than after.",
        image: meth3.src
      },
      {
        title: "Installation & Commissioning",
        description: "Installation on site is followed by commissioning. SEPPA's engineers do not leave until thermal validation is complete, CIP cycles are documented, and the operations team can run the milk processing line without them.",
        image: meth4.src
      }
    ]
  },
  faqTitle: "Frequently Asked Questions",
  faqs: [
    {
      question: "What sanitation protocols does a milk processing plant require?",
      answer: "A properly designed milk processing plant runs CIP cycles between every product batch and at shift end. SEPPA's systems automate CIP sequencing caustic wash, acid rinse, sanitizer flush, water rinse with conductivity monitoring to confirm chemical concentration at every stage. CIP validation records are stored and exportable for audit."
    },
    {
      question: "How do you maintain a high speed dairy production line without downtime?",
      answer: "SEPPA's control systems include predictive maintenance alerts based on vibration, temperature, and cycle count data. Most wear parts on a SEPPA dairy production line are accessible without dismantling adjacent equipment. Planned maintenance windows are typically 2–4 hours per week on a well configured line."
    },
    {
      question: "How do we upgrade from basic dairy farm equipment to industrial scale?",
      answer: "The usual path is a staged upgrade rather than a full replacement. SEPPA assesses existing dairy farm equipment, identifies which stages can be retained, and engineers integration points for new machinery. Most operations can increase throughput 3–5x on an existing footprint with targeted dairy processing equipment upgrades rather than greenfield investment."
    },
    {
      question: "What are the advantages of a turnkey dairy processing plant?",
      answer: "A turnkey dairy processing plant reduces integration risk, shortens commissioning time, and gives you a single point of accountability for performance guarantees. You also get a single validated traceability chain from raw milk intake to finished goods something that is very difficult to achieve when your dairy production line is assembled from multiple vendors' equipment."
    },
    {
      question: "Can SEPPA's systems handle multiple product types?",
      answer: "Yes. SEPPA designs multi product configurations that can switch between full cream milk, skimmed milk, flavoured milk, and dairy based beverages on the same milk processing line with a validated changeover sequence. Changeover time on a well configured dairy production line is typically under 90 minutes including CIP."
    }
  ]
};

const DairyProductLineMachinesPage = () => {
  return <PackagingPageLayout data={pageData} />;
};

export default DairyProductLineMachinesPage;
