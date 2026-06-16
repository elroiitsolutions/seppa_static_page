import React from 'react';
import PackagingPageLayout, { PackagingPageData } from '@/components/packaging/PackagingPageLayout';
import img2 from '@/assets/packaging/can/Can-Filling-Packaging-Line.webp';
import img1 from '@/assets/packaging/can/gtl-packaging-filling-line-scheme.webp';
import overview from '@/assets/packaging/can/overview.jpg';
import filling from '@/assets/packaging/can/filling.png';
import still from '@/assets/packaging/can/still.webp';
import execute from '@/assets/packaging/can/execute.webp';
import install from '@/assets/packaging/can/install.webp';
import commissing from '@/assets/packaging/can/commissing.jpeg';
import training from '@/assets/packaging/can/training.webp';
import sales from '@/assets/packaging/can/sales.webp';
//import canBanner from '@/assets/packaging/can/can-banner.png';

const pageData: PackagingPageData = {
  title: "Engineering the Future of Beverage Packaging: Complete Aluminium Can Filling & Sealing Solutions by Seppa",
  breadcrumbName: "Can",
  headerImage: overview.src,
  overviewTitle: "Introduction to Aluminium Can Packaging Solutions",
  overviewDescription: "Aluminium Cans are the most sustainable beverage package on virtually every measure. Aluminium Cans have a high recycling rate and more recycled content than competing packaging types. They are light weight, stackable and strong allowing brands to package and transport more beverages using less material. As also, Aluminium Cans are far more valuable than glass or plastic ensuring recycling more variable and effective.",
  overviewBenefits: [
    "Most of all Aluminium Cans are recycled over and over again in a true closed loop process.",
    "Aluminium Cans are widely used in CSD, Beer and other Beverages. "
  ],
  overviewsubDescription: ["SEPPA offers a wide range of Can Filling and Scaling equipment’s, Semi automatic to Fully automatic, low speed as well as high speed lines to service the needs of various industries and products", "SEPPA also offers complete line solutions for Cans. This includes Rinse filler, Capper, Labellers’, Date and Batch Coders, Tunnel Pasteurizers/Colliers, Multiple Shrink/Carton packaging equipment’s, Palletizers and Stretch Wrappers.", "SEPPA offers complete Aluminium Can line solutions for Beer, CSD, RTD’s, Beverage as well as Tin Can lines for Tomato paste and puree’s."],
  overviewImage: overview.src,
  contentBlocks: [
    {
      //badge: "Turnkey Lines",
      title: "Complete Can Filling & Packaging Line Solutions",
      paragraphs: [
        "Seppa Solutions isn't simply a machine vendor. We design and build complete, turnkey filling lines from the depalletize to the final pallet. We don’t cut corners, because we know the 'small' details today are what prevent expensive downtime and customer complaints six months from now.",
        "The line starts with air or ionized rinsing water free, fast, and environmentally sensible. From there, aluminium cans enter the heart of any modern canning operation: the isobaric counter pressure filler. Built for carbonated and nitrogen dosed beverages, the filler holds volumetric accuracy within +0.5% while keeping dissolved oxygen pickup below 30 ppb. For anyone working with beer or premium sparkling drinks, those two numbers are everything.",
        "A seamer immediately downstream applies the can end under a nitrogen flush, locking in freshness before atmospheric oxygen gets a chance. Warmers, coders, sleeve or label applicators, multi packers, and palletizers handle everything after that. Drawing on years of work as a hands on liquid filling machine supplier, our engineers tune every module to the customer's actual product mix because real world aluminium can production rarely looks like a textbook flow diagram."
      ],
      image1: img1.src,
      image2: img2.src
    }
  ],
  applicationsTitle: "Applications of Aluminium Can Packaging",
  applicationsSubtitle: "The strength of aluminium cans is their versatility. Every beverage category has its quirks, and good engineering respects that.",
  applications: [
    { title: "Beer", description: "Brewers love aluminium cans for two reasons: complete light protection and an oxygen barrier that glass simply can't match. Our isobaric fillers protect dissolved CO₂ levels and shield delicate hop aromas from the oxidation that quietly destroys beer flavour over time." },
    { title: "Carbonated Soft Drinks", description: "This is the category that built the entire format. Whether you're filling 12,000 or 90,000 aluminium soda cans an hour, carbonation retention has to be flawless consumers notice flatness before anything else." },
    { title: "Energy Drinks", description: "Vitamin packages, taurine, caffeine, and aggressive flavour systems all demand corrosion resistant contact parts and gentle handling. Our fillers protect the functional payload without damaging the formulation." },
    { title: "Sparkling Water", description: "Low foam tolerance liquids need long tube counter-pressure filling quiet, smooth, and far more predictable than older volumetric systems." },
    { title: "Juice Beverages", description: "Hot fill, cold fill, and aseptic compatible configurations let aluminium can producers move into shelf stable nutrition and functional juice categories without buying an entirely new line." },
    { title: "RTD Drinks", description: "The ready to drink segment grew in 16 of 20 monitored markets in 2024, with aluminium cans leading the pack (Crown Holdings). Our lines handle fast SKU rotation essential when a brand might launch four flavour variants in a single quarter." },
    { title: "Functional Beverages", description: "Nootropic shots, protein drinks, electrolyte blends. These products live and die on dosing accuracy and sanitary integrity. Both are non negotiable on our platforms." },
    { title: "Alcoholic Beverages", description: "Hard seltzers, canned wine, spirits based RTDs ABV up to 20%, contact materials rated for prolonged ethanol exposure. This category is also where many aluminium can producers quietly expand into higher margin adjacent SKUs. Aluminium soda cans that start out as one product line often become a gateway into the premium beverage tier." }
  ],
  featuresTitle: "Key Features & Benefits of Our Can Filling Systems",
  featuresSubtitle: "What separates a good canning line from a great one usually comes down to five things and they all show up in the P&L eventually.",
  features: [
    {
      title: "High speed output",
      description: "Our modular rotary platforms run from 60 to 1,500 cans per minute. That range matters because a craft brand scaling from regional to national distribution doesn't want to replace their capital equipment in year three."
    },
    {
      title: "Precision filling",
      description: "Servo valves paired with load cells or electromagnetic flow meters hold variance below 0.3%. Doesn't sound like much until you multiply it across a million aluminium cans a month that's where fill giveaway either eats your margin or doesn't."
    },
    {
      title: "Energy efficiency",
      description: "Variable frequency drives, regenerative braking, optimized pneumatics. Twenty to twenty five percent lower energy draw versus older systems. In high volume aluminium can production, that's not a footnote it's a real line item on your utility bill."
    },
    {
      title: "Hygienic design",
      description: "304/316L stainless throughout, crevice free welds, automated CIP/SIP cycles. EHEDG and 3-A compliant the basics that food safety auditors no longer treat as optional."
    },
    {
      title: "Smart automation",
      description: "Modern beverage brands need to move fast. That's why we build filling lines that switch between glass, PET, and aluminium cans in under 45 minutes. Your equipment should be an asset that evolves with the market, not a rigid cost centre you eventually have to rip out."
    }
  ],
  whyChoose: {
    title: "Why Choose Seppa for Can Filling & Packaging Solutions",
    description: "Plenty of aluminium can suppliers can sell you a machine. Far fewer will still be on the phone at 2 a.m. when a seamer throws a fault code two months after commissioning. That difference matters more than any spec sheet comparison.",
    paragraphs: [
      "Seppa operates across more than 40 countries, building turnkey lines that cover water treatment, syrup rooms, blending, carbonation, filling, and end of line robotics. Customization isn't a marketing word here it's the actual way we work. Whether you're a newer brand carving out shelf space against established aluminium can suppliers, or adding a third line to an existing plant, our team builds around your floor plan, utility profile, and product roadmap.",
      "Decades of supporting aluminium can producers across different markets has taught us one thing clearly: no two operations are the same. Every Seppa line for aluminium cans is engineered around what the customer actually needs not pulled from a catalogue and rebadged. That matters when you're trying to compete against aluminium can suppliers who move faster and spend less per unit than you do today.",
      "And because we work with both large scale industrial bottlers and emerging brands, we understand the pressures from both ends. A serious liquid filling machine supplier doesn't just drop off equipment and disappear. We're there through commissioning, training, and the years of production that follow."
    ],
    image: filling.src
  },
  methodology: {
    title: "Methodology: From Blueprint to Production Floor",
    subtitle: "Good aluminium can production lines aren't bought off a shelf. They're engineered, phase by phase, by people who know what goes wrong when shortcuts are taken.",
    steps: [
      {
        title: "Design",
        description: "Our process engineers model throughput, utilities, and floor layout in 3D catching bottlenecks before a single piece of steel gets cut.",
        image: still.src
      },
      {
        title: "Execution",
        description: "In house fabrication of fillers, seamers, and conveyors. We don't outsource the parts that matter most. We build them ourselves, so you get a machine that was actually built to spec not assembled from whatever was in stock.",
        image: execute.src
      },
      {
        title: "Installation",
        description: "Factory trained technicians supervise mechanical, piping, and electrical integration at the customer's site.",
        image: install.src
      },
      {
        title: "Commissioning",
        description: "Cold and hot runs validate fill accuracy, seam integrity, and microbiological hygiene against FAT and SAT protocols.",
        image: commissing.src
      },
      {
        title: "Training",
        description: "Operators and maintenance crews get structured classroom and hands on instruction. A machine without trained people is just expensive scenery.",
        image: training.src
      },
      {
        title: "After Sales Service",
        description: "Spare parts logistics, remote diagnostics, and scheduled audits for the life of the equipment.",
        image: sales.src
      }
    ],
    outro: [
      "Structured aluminium can production like this start to finish is what separates a serious liquid filling machine supplier from a one and done vendor. It's also why customers who compare multiple liquid filling machine supplier proposals tend to come back to Seppa."
    ]
  },
  faqTitle: "Expert answers to can filling & packaging questions",
  faqs: [
    {
      question: "What production speeds can Seppa's aluminium can filling lines achieve?",
      answer: "Anywhere from 3,000 BPH for craft setups to 90,000 BPH for large scale industrial bottlers. The right speed depends on your product mix, can size, and what your downstream packaging can actually absorb—something experienced aluminium can producers often learn the hard way."
    },
    {
      question: "Can your machines handle multiple can sizes—slim, sleek, standard 330ml, 500ml?",
      answer: "Yes. Switching between can sizes, from 200ml slims to 500ml tallboys, is just part of the business. The real advantage is doing it quickly. Changeovers in under 45 minutes mean you can manage a broad portfolio of aluminium soda cans and RTDs without stalling your production schedule."
    },
    {
      question: "How does Seppa compare with other aluminium can suppliers?",
      answer: "Most aluminium can suppliers sell components. Seppa delivers integrated turnkey lines, manufactures critical equipment in house, and provides 24/7 global service. Few aluminium can suppliers offer all three under one contract."
    },
    {
      question: "What's a realistic ROI horizon for a new aluminium soda cans line?",
      answer: "For mid volume operators, most projects pay back inside 24–36 months driven by lower per unit packaging cost, stronger shelf presence, and reduced fill giveaway from precision filling."
    },
    {
      question: "Do you support hybrid lines that handle aluminium cans alongside other formats?",
      answer: "Absolutely. Investing in a line that can only do one format is a real business risk. Our filling machines are built for flexibility from the start. Whether you run PET, glass, or cans, our systems are designed to switch formats with minimal downtime."
    }
  ],
  cta: {
    title: "Ready to Build Your Next Canning Line?",
    description: "If you're entering aluminium can production for the first time, or scaling an existing facility into new categories, Seppa Solutions brings the engineering depth and global support to make the investment perform from day one. Get in touch with our team to discuss your project.",
    buttonText: "Get in Touch",
    buttonLink: "/contact-us"
  }
};

const CanPage = () => {
  return <PackagingPageLayout data={pageData} />;
};

export default CanPage;
