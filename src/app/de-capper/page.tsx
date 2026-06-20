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
  title: "Advanced Decapping Machine Technology",
  breadcrumbName: "De-Capper",
  rootBreadcrumbName: "Equipments",
  rootBreadcrumbPath: "/equipments",
  headerImage: bannerImg.src,
  overviewTitle: "Optimizing Container Reclamation: The Definitive Guide to Advanced Decapping Machine Technology",
  overviewDescription: "In the world of circular economy manufacturing, your reverse logistics are only as good as your material recovery speed.",
  overviewsubDescription: [
    "For any business handling returnable containers whether that means 3 to 6 gallon beverage carboys, high value pharmaceutical vials, or rugged chemical jugs getting secure closures off efficiently is a massive operational headache. That is where a modern decapping machine comes into play. This piece of engineering is purpose built to transform a chaotic influx of dirty, sealed, returned containers into a smooth, predictable stream of reusable assets.",
    "By automating this critical step, an advanced decapping machine completely eliminates the physical strain of manual labor, protects the structural integrity of your containers, and ensures that outside contaminants are isolated before things move down the line to final purification."
  ],
  overviewImage: overviewImg.src,
  contentBlocks: [
    {
      title: "Overview of Automatic Bottle Decapping Machine Systems",
      paragraphs: [
        "Think of an automatic decapping machine as your frontline defense for container reclamation and quality control. When returnable bottles make their way back from the market, they arrive in every condition imaginable. They feature a messy mix of closure styles from classic screw caps and snap ons to temperamental Roll On Pilfer Proof (ROPP) aluminum seals all tightened to wildly different torques.",
        "A professional decapping machine handles the heavy lifting by facilitating the safe, rapid, and fully automated removal of closures, making container reuse and recycling a seamless reality. Frankly, without this automation, running a high volume returnable line is virtually impossible.",
        "When you integrate an industrial grade decapper directly into your intake conveyor line, you get smooth, uninterrupted movement from the moment a pallet is unloaded to the final sanitization rinse. Best of all, it cradles the container neck finish, ensuring no cracking or warping occurs to mess up your next filling and sealing cycle."
      ],
      image1: img1.src,
      reverse: true
    },
    {
      title: "Benefits of Bottle Decapping Automation",
      paragraphs: [
        <div key="benefits" className="space-y-4 text-left">
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
            Trading in your manual sorting benches for a fully automated decapping machine brings some massive, immediate upgrades to your daily operations:
          </p>
          <ul className="space-y-6">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-seppa-red mt-2 flex-shrink-0"></span>
              <span className="text-base md:text-lg text-gray-600 leading-relaxed">
                <strong className="text-[#101934] font-bold">No More Labor Intensive Strain:</strong> Forcing workers to sort and twist caps off returned bottles manually is a recipe for repetitive strain injuries (RSI). It also exposes them to whatever chemical or biological leftovers are lurking inside the bottles. An automated decapping machine handles the dirty work so your team doesn't have to.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-seppa-red mt-2 flex-shrink-0"></span>
              <span className="text-base md:text-lg text-gray-600 leading-relaxed">
                <strong className="text-[#101934] font-bold">Maximum Reclamation Velocity and Throughput:</strong> An employee using a manual tube decapper or hand tool slows down as the shift drags on. An automated decapper, on the other hand, never gets tired. It synchronizes perfectly with your line's conveyor speed to process thousands of units per hour without breaking a sweat.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-seppa-red mt-2 flex-shrink-0"></span>
              <span className="text-base md:text-lg text-gray-600 leading-relaxed">
                <strong className="text-[#101934] font-bold">Keeping Your Fleet In One Piece:</strong> Using a precision engineered capper decapper mechanism instead of raw human force stops bottle necks from fracturing and cracking. This small detail saves a fortune by extending the lifespan of your expensive multi trip PET or glass container fleet.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-seppa-red mt-2 flex-shrink-0"></span>
              <span className="text-base md:text-lg text-gray-600 leading-relaxed">
                <strong className="text-[#101934] font-bold">Making Sustainability Actually Profitable:</strong> For any recycling initiative to last, recovering a container has to cost less than buying a brand new one. A high performance decapping machine minimizes your cost per unit, giving you the financial justification needed to back up your green initiatives.
              </span>
            </li>
          </ul>
        </div>
      ],
      image1: img2.src,
      reverse: false
    }
  ],
  featuresTitle: "Key Features of Advanced Decapping Engineering",
  featuresSubtitle: "An industrial decapping machine relies entirely on mechanical touch and smart sensor timing. Today's fast paced packaging lines need machinery that instantly adapts to fluctuating bottle heights, tough closure materials, and unexpected residual torque.",
  features: [
    { title: "Variable Torque Extraction Heads", description: "You can't treat a flexible plastic cap the same way you treat hardened aluminum. High end decapping machine units use intelligent programmable logic controllers (PLCs) to adjust gripping force and rotational pull on the fly, guaranteeing a completely non destructive cap removal process." },
    { title: "Sensor Led Bottle Stabilization", description: "To keep things running fast, every single bottle must be perfectly centered under the extraction axis. Fast acting pneumatic or servo driven neck clamps lock the container body in place, preventing it from spinning or lifting during the upward pull." },
    { title: "Smart Debris Management", description: "Twisting off a stubborn metal or plastic cap can generate tiny plastic shavings or metal micro debris. Premium decapper systems use localized vacuums or positive air knives to instantly clear away these fragments, ensuring they never drop inside the clean bottle." }
  ],
  applicationsTitle: "Applications and Industries Served",
  applicationsSubtitle: "The need to strip closures quickly and cleanly spans across several strict industries, each demanding its own specific sanitary and physical layout.",
  applications: [
    { title: "Food and Beverage Packaging", description: "In the large format bottled water industry, 3 to 6 gallon jugs face a massive risk of various contaminants when returning from the market. Integrating a dual-function setup keeps these heavy lines moving without a single hand touching them." },
    { title: "Pharma and Biotech Labs", description: "Clinical trials and R&D labs generate thousands of small vials that must be safely emptied for testing or disposal. Because avoiding cross contamination is a non negotiable rule, a specialized decapping machine handles small glass tubes with absolute precision." },
    { title: "Consumer Goods & Production Run Errors", description: "Even the best factories suffer from filling defects or labeling misprints. Instead of throwing away entire rejected batches of product, manufacturers can route those lots through an automated decapping machine to safely salvage the liquids inside." }
  ],
  whyChoose: {
    title: "SEPPA Decapping Methodology & Why Choose SEPPA Solutions",
    description: "Leading recycling operations, major beverage brands, and chemical manufacturers rely on SEPPA Solutions for one simple reason: our machines just work.",
    paragraphs: [
      "With over 25 years of immense experience managing large bottle lines, SEPPA has incorporated simple, comprehensive line solutions to handle returnable bottles coming back from the market. We don't believe in one size fits all machinery. Our process starts by assessing your exact closure torque profiles and bottle shapes.",
      "Our decapping machine systems feature a modular design, meaning you can start out with a semi automatic setup and easily scale up to a fully automated, lightning fast line as your business grows. We design our units to drop straight into your current washing and filling setup without causing a logistical headache.",
      "We also specialize in a smart, pre wash integrated reclamation strategy. Stripping the cap off a bottle is only half the battle; if you leave that bottle open to ambient factory air for too long, dust and debris will get inside. Our systems resolve this by kicking off the internal and external rinse cycles immediately after the cap is removed.",
      "With SEPPA, you aren't just buying hardware you are investing in a system that protects your bottle fleet, cuts down on utility waste, and optimizes your line speed."
    ],
    image: over.src
  },
  methodology: {
    title: "How the Bottle Decapping Process Works",
    steps: [
      {
        title: "Container Indexing",
        description: "Bottles travel down the conveyor line right into the decapping machine. Precision proximity sensors spot the incoming bottle and signal the indexing gates to isolate it right beneath the extraction head.",
        image: meth1.src
      },
      {
        title: "Precise Closure Gripping",
        description: "The decapper engages a custom pneumatic cap clamp system shaped to match your specific cap profile. Built from tough, non marring materials, these jaws grab the cap tightly without crushing the threads underneath.",
        image: meth2.src
      },
      {
        title: "Torque-Controlled Extraction",
        description: "The machinery performs a smooth, simultaneous twisting and lifting motion, snapping the tamper evident bands cleanly. The moment the cap clears the bottle, the jaws release it into a disposal chute using a quick blast of air.",
        image: meth3.src
      },
      {
        title: "Multi Stage Pre Wash",
        description: "Decapped bottles are loaded into heavy duty bottle holders. The system washes the bottle inside out with high pressure jets over 3 to 5 distinct stages. Finally, the prewashed bottles are automatically deloaded to a discharge conveyor.",
        image: meth4.src
      }
    ]
  },
  faqTitle: "Frequently Asked Questions",
  faqs: [
    {
      question: "What kind of routine maintenance does an automated decapping machine need?",
      answer: "It's surprisingly low maintenance. All it takes is a weekly check on the non marring jaw inserts for normal wear, verifying your air pressure settings, and keeping the guide rails lubricated. Because SEPPA designs every decapping machine with modular parts, replacing a gripper tool or changing setups is completely tool less and takes just minutes."
    },
    {
      question: "When is the right time to upgrade from a manual tube decapper?",
      answer: "If your facility is processing more than a couple of hundred bottles a day, or if your team is accidentally breaking bottle necks due to fatigue, it’s time to move on. A manual tube decapper works fine for low volume lab tests or tiny batches, but it simply can’t compete with the blistering speed, safety, and consistency of an automated industrial decapper."
    },
    {
      question: "Why do I need a multi stage pre wash cycle before the final inspection?",
      answer: "Because returnable bottles face the risk of various contaminants when returning from the market, hitting them with an initial pre wash is vital. It power washes away caked on dirt and loose debris the moment the cap comes off. This leaves the bottle sparkling clean so that downstream optical inspection sensors can spot microscopic cracks or flaws without being blinded by surface mud."
    },
    {
      question: "Can a single capper decapper system handle totally different styles of caps?",
      answer: "Absolutely. A well configured capper decapper system handles multiple closure styles using quick change chucks and adjustable torque settings in the PLC. Whether you're running snap on lids or threaded tops, you can swap profiles on the HMI touchscreen and have the machine adjusted in less than two minutes."
    },
    {
      question: "What makes SEPPA Solutions the leader in container reclamation?",
      answer: "We bring 25 years of hands on floor experience to the table, combining it with advanced fluid dynamics and smooth robotics. Our machines don't just yank caps off; they connect container indexing, exact torque control, and high pressure pre wash rinsing into one seamless system that delivers the lowest total cost of ownership in the industry."
    }
  ]
};

const DecapperPage = () => {
  return <PackagingPageLayout data={pageData} />;
};

export default DecapperPage;
