import React from 'react';
import PackagingPageLayout, { PackagingPageData } from '@/components/packaging/PackagingPageLayout';

// Using generated and placeholder images
import bannerImg from '@/assets/services/generated/training_banner_1782102515585.png'; // fallback
import overviewImg from '@/assets/pet/generated/pet_overview_1782103229961.png';
import img1 from '@/assets/pet/generated/pet_cb1_1782103242917.png';
import over from '@/assets/pet/generated/pet_whychoose_1782103256501.png';

import meth1 from '@/assets/pet/generated/pet_meth1_1782103277774.png';
import meth2 from '@/assets/pet/generated/pet_meth2_1782103291753.png';
import meth3 from '@/assets/pet/generated/pet_meth3_1782103305856.png';
import meth4 from '@/assets/pet/generated/pet_meth4_1782103318966.png';

const pageData: PackagingPageData = {
  title: "Mineral Water Production Lines",
  breadcrumbName: "Mineral Water",
  rootBreadcrumbName: "Liquid",
  rootBreadcrumbPath: "/liquid",
  headerImage: bannerImg.src,
  overviewTitle: "The Engineering Behind Mineral Water: From Aquifer to Sealed Bottle",
  overviewDescription: "When you uncap a bottle of mineral water, you rarely think about what happened in the six hours between the spring tapping and the cap torque test. You should. Behind every liter sits a quietly complex industrial process one where a single degree of temperature drift or a stray microgram of ozone residual can ruin months of careful aquifer management. At Seppa Solutions, we build the machinery that keeps that process honest.",
  overviewsubDescription: [
    <span key="desc1"><strong className='font-medium text-seppa-red'>What Is Mineral Water and Why It Matters for Everyday Hydration: </strong> Let's get clear about the terminology. The mineral water is neither just filtered water in different packaging nor is it just groundwater. This water comes from an identified, geologically protected source and is rich in the concentration of natural minerals such as calcium, magnesium, and bicarbonate.</span>,
    "The Codex Alimentarius, as well as the EU Directive 2009/54/EC, requires that the natural mineral water should come to consumers without changing its mineral content at all. This requirement alone defines the whole production process. You cannot treat this product the way you treat soft drinks or purified water. On the other hand, reverse osmosis would reduce Total Dissolved Solids (TDS) to 10-20 ppm, which is clean indeed, but commercial junk if you have a bottle label indicating 380 ppm of bicarbonate character.",
    "Nano filtration, on the contrary, keeps divalent cations such as Ca²⁺, Mg²⁺ and eliminates pathogens and chosen anions, and that is why all the top mineral waters do not use RO at all and utilize micron filtration with ozone or UV treatment. The infrastructure has to be capable of two contradictory things at once: leaving the water chemically untouched, and making it microbiologically perfect."
  ],
  overviewImage: overviewImg.src,
  contentBlocks: [
    {
      title: "Benefits of Natural Mineral Content in Mineral Water for Health and Hydration",
      paragraphs: [
        "The health case for natural mineral water is well documented but often oversold. The science behind mineral water is actually much more exciting than the marketing claims. Mineral water containing high levels of bicarbonate (above 600 mg/L HCO₃⁻) acts as an effective buffer against stomach acid as well as facilitates recovery after exercise. Food rich in calcium is essential in providing the daily recommended value of 1,000 mg. Magnesium from water is absorbed faster than magnesium from food as it has been pre-ionized.",
        "This is precisely why top shelf producers will not compromise on their processing. As soon as you over-process pure mineral water through aeration, deionization, or thermal pasteurization, you alter its chemistry that gives justification for its cost on the shelves. An intelligent processing facility understands that the product was complete upon extraction from the rock. Our job is to move it, disinfect its surfaces, and seal it without editing the contents. That's a harder engineering brief than it sounds."
      ],
      image1: img1.src,
      reverse: true
    }
  ],
  featuresTitle: "Key Features of Seppa Mineral Water Processing Solutions",
  featuresSubtitle: "The engineering choices that distinguish a competent mineral water line from a mediocre one are not always visible to the buyer. Here's what actually matters.",
  features: [
    { title: "Wetted Surfaces and Piping", description: "All product contact piping in our systems is AISI 316L stainless steel with electropolished interiors (Ra ≤ 0.4 µm). Rougher surfaces harbor biofilm, the most common cause of TPC failures." },
    { title: "Balanced Ozone and UV Disinfection", description: "We size ozone contact tanks for a CT value of ~1.6 mg·min/L, holding 0.2–0.4 ppm residual O₃ for 4–6 minutes. UV-C at 254 nm serves as a final polish step immediately before the filler." },
    { title: "Precision Filling", description: "For premium glass, we deploy electronic weight based filling valves with load cells accurate to +0.5 g across a 750 mL fill. For high speed PET, electromagnetic flow meter volumetric filling delivers comparable accuracy." },
    { title: "Monoblock Architecture", description: "Rinser filler capper monoblocks reduce openair bottle exposure to under three seconds. Class 100 HEPA filtered air curtains isolate the filling zone, or fully enclosed isolators with positive-pressure differential." }
  ],
  applicationsTitle: "Applications of Mineral Water Across Diverse Industries",
  applicationsSubtitle: "The market for mineral water is broader and messier than most outsiders realize.",
  applications: [
    { title: "Mass Distributed Bottled Mineral Water", description: "500 mL and 1.5 L PET formats running at 36,000 bottles per hour, sold on price, distributed through every supermarket on the continent. The machinery has to be fast, forgiving, and run three shifts." },
    { title: "Premium Mineral Water (Glass Packaging)", description: "Destined for hotels, fine dining, and export. Volumes drop, but tolerances tighten dramatically. Might involve heavier glass, ceramic finish printing, and a swing top or crown closure each requiring a different handling cassette on the filler." },
    { title: "HoReCa Formats & Sparkling Variants", description: "In between sit HoReCa formats, sparkling variants requiring CO₂ injection at 4–7 g/L with cryogenic precision, alkaline mineral water lines, and increasingly, returnable glass programs driven by sustainability mandates. A serious bottling line has to flex across all of it." }
  ],
  whyChoose: {
    title: "Why Choose Seppa Solutions for Mineral Water Production Lines",
    description: "Honestly, most equipment failures in this industry aren't dramatic. They're slow: a bottle washer that gradually drifts out of spec, a CIP loop that doesn't quite reach the dead leg, an ozone generator that loses 8% output over eighteen months.",
    paragraphs: [
      "Seppa Solutions builds for the boring failures. Our installed base includes producers running natural mineral water at SKU portfolios above 40 references, and we've kept their lines synchronized through expansions, format changes, and sourcewater seasonal variation. Our engineers come from process backgrounds not just mechanical assembly which means when your conductivity probe drifts in winter, we understand why before we replace it.",
      "The track record on bottled mineral water facilities matters too. We've commissioned plants in regions with hard alkaline source water, in tropical climates with persistent biofilm pressure, and in high altitude facilities where CO₂ solubility curves break standard sparkling-line assumptions. The machinery adapts. The principles don't."
    ],
    image: over.src
  },
  methodology: {
    title: "Methodology for End to End Mineral Water Plant Implementation",
    steps: [
      {
        title: "Source Characterization",
        description: "We analyze a minimum twelvemonth ion profile of the aquifer: TDS, hardness, alkalinity, trace metals, and microbiological baseline. Source variability dictates downstream architecture.",
        image: meth1.src
      },
      {
        title: "Custom Treatment Train Design",
        description: "Based on the profile, we specify the filtration sequence typically multimedia → activated carbon → 5 µm → 1 µm → 0.45 µm membrane, with ozone or UV integrated at the right hydraulic point.",
        image: meth2.src
      },
      {
        title: "Synchronized Filling Line",
        description: "Rinsers, fillers, cappers, labelers, and end of line palletizers are commissioned as a single integrated system. Every bottle moves on servo controlled timing screws.",
        image: meth3.src
      },
      {
        title: "Validation",
        description: "We run 72 hour challenge tests against ISO 22000, FSSC, and source country regulations. Only after three consecutive shifts of clean microbiological pulls do we hand over the line.",
        image: meth4.src
      }
    ]
  },
  faqTitle: "Frequently Asked Questions",
  faqs: [
    { question: "Why can't I just use the same line I use for purified water?", answer: "Because purified water tolerates aggressive treatment; mineral water doesn't. The mineral profile is the product. RO membranes, hot pasteurization, and ion exchange will all strip or shift the chemistry that defines your label claim." },
    { question: "What's the real difference between mass market and premium mineral water packaging?", answer: "Speed versus precision. Mass market PET prioritizes throughput and cost per unit. Premium glass prioritizes fill accuracy, closure integrity, and presentation. Different fillers, different rinsers, different conveyors sometimes different buildings." },
    { question: "Why do bottled mineral water lines need such specific sanitization cycles?", answer: "Because the product has no preservatives. Any organism that enters during filling will multiply over shelf life. CIP/SIP cycles are tuned to the exact biofilm risk of the source water, not a generic schedule." },
    { question: "Is pure mineral water actually relevant to current health trends?", answer: "Yes particularly mineralized and alkaline variants. Consumer demand for functional hydration has grown faster than the soft drink category for six consecutive years." },
    { question: "Why Seppa specifically?", answer: "Because we engineer for the source, not the catalogue. Every line is profiled to its water, and we don't ship machinery we wouldn't operate ourselves." }
  ]
};

const MineralWaterPage = () => {
  return <PackagingPageLayout data={pageData} />;
};

export default MineralWaterPage;
