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
  title: "Sparkling Water Production Lines",
  breadcrumbName: "Sparkling Water",
  rootBreadcrumbName: "Liquid",
  rootBreadcrumbPath: "/liquid",
  headerImage: bannerImg.src,
  overviewTitle: "What Is Sparkling Water and How It Works?",
  overviewDescription: "CO2 doesn't just mix with water. It dissolves into it under pressure, at controlled temperatures, until the liquid holds more gas than it would naturally want to. That's the core tension inside every bottle of sparkling mineral water: a system held in stable disequilibrium, engineered to stay that way until the consumer opens it.",
  overviewsubDescription: [
    "The science is simple in principle. CO2 solubility in water increases as temperature drops and pressure rises Henry's Law. In effect, obtaining the right level of carbonation (which is usually 3.5 to 6.5 volume of CO2) requires careful manipulation of both these variables. Any variation in temperature by a few degrees during bottling will force the dissolved gases to escape from the beverage.",
    "This creates foaming, reduction of carbonation, and a beverage that is no longer capable of providing the mouthfeel that makes premium carbonated water worth purchasing.",
    "The purity of the CO2 gas (99.9% purity) is more important than what many manufacturers think. For sparkling mineral water specifically, where the water carries its own mineral signature, any off character in the CO2 lands directly in the finished product."
  ],
  overviewImage: overviewImg.src,
  contentBlocks: [
    {
      title: "Benefits of Sparkling Water for Daily Refreshment",
      paragraphs: [
        "Global sparkling mineral water consumption has grown for over a decade without flattening. Understanding the sparkling water benefits driving that growth starts with where the category sits in the market: carbonated soft drink sales have declined as consumers move away from sugar and artificial flavouring. Flat water doesn't fill the same sensory gap.",
        "The sparkling water benefits that drive purchases are mostly tactile: a slight acidity on the palate, a sensation in the throat, a sense of occasion around hydration. The sparkling water benefits for health-conscious consumers are equally clear no sweeteners, no calories, a clean label. Those cues have real commercial weight.",
        "Carbonated products support higher retail price points. Because sparkling mineral water draws on source identity where the water comes from, what minerals it carries, how it's handled producers who protect those characteristics have something competitors can't easily replicate."
      ],
      image1: img1.src,
      reverse: true
    },
    {
      title: "Applications of Sparkling Water in the Modern Beverage Industry",
      paragraphs: [
        "Sparkling mineral water appears across more commercial contexts than the category suggests. Glass bottled sparkling natural mineral water serves restaurants and hotels where source provenance is part of the product story. Large format PET lines supply retail and food service at volumes where cost per litre and line efficiency take priority.",
        "Seppa's filling technology covers both ends. Lines scale from small format glass at 6,000 BPH to high capacity PET exceeding 30,000 BPH. Changeovers across bottle formats use rapid adjustment filling heads without separate reprogramming. The same line can handle lightly carbonated spritz variants and co-pack runs for multiple brands."
      ],
      bgClass: "bg-light",
      reverse:false,
      image1:meth4.src
    }
  ],
  featuresTitle: "Key Features of Our Sparkling Water Solutions",
  featuresSubtitle: "Seppa Solutions designs sparkling mineral water lines around one constraint: dissolved CO2 has to reach the sealed bottle at the exact concentration it was dosed at.",
  features: [
    { title: "In-line Carbonators", description: "Dissolve CO2 into chilled water under controlled pressure. Gas to liquid ratios are monitored in real time; deviations trigger automatic correction." },
    { title: "Isobaric Filling Monoblocks", description: "Hold the bottle's internal pressure above CO2 partial pressure throughout the fill cycle. The bottle is pre pressurized with CO2 to protect carbonation levels from the first bottle to the last." },
    { title: "Precision Chilling Systems", description: "Maintain product temperature at 2–4°C through the filling zone using plate heat exchangers with glycol circuits sized to line capacity." },
    { title: "Automated CIP", description: "Cleans and sanitizes all product contact surfaces between runs without manual disassembly. Crucial for premium sparkling water to ensure microbiological neutrality." }
  ],
  applicationsTitle: "Types of Sparkling Water Available in the Market",
  applicationsSubtitle: "The retail shelf looks simpler than it is.",
  applications: [
    { title: "Natural Sparkling Water", description: "Comes from a naturally carbonated source, bottled at or near origin. Handling means minimizing gas loss during transfer re carbonating after unnecessary degassing defeats the product premise." },
    { title: "Sparkling Natural Mineral Water", description: "Carries a documented mineral profile drawn from a protected underground source. Requires gentle handling throughout low turbulence transfer pumps, pre fill chilling, and isobaric filling." },
    { title: "High Volume Carbonated Water", description: "From treated municipal or well sources. Carbonation levels can be set to spec, adjusted by SKU, and recalibrated. Engineering focus shifts to throughput stability and sanitary consistency." }
  ],
  whyChoose: {
    title: "Why Choose Seppa Solutions for Sparkling Mineral Water Projects?",
    description: "Seppa has commissioned sparkling mineral water lines across multiple markets for boutique operations with a single source and for co packers running a dozen SKUs on the same line.",
    paragraphs: [
      "Integration is where Seppa differs from component suppliers. A carbonator, filler, and CIP system sourced separately can each perform to spec in isolation and still underperform as a system when pressure management, timing, and temperature control aren't coordinated.",
      "Seppa designs the line as one controlled process, with electronic pressure management across both zones and monitoring that flags deviations before they become rejects. For natural sparkling water and sparkling natural mineral water producers especially, this matters. The source is the product. Filling process failures can't be corrected downstream."
    ],
    image: over.src
  },
  methodology: {
    title: "Methodology for Sparkling Mineral Water Processing and Production",
    steps: [
      {
        title: "Water Treatment and Filtration",
        description: "Strip particulates and address microbiological risk typically UV or ozone for natural sparkling water, where the mineral profile must stay intact.",
        image: meth1.src
      },
      {
        title: "CO2 Dosing and Saturation",
        description: "Happen in the carbonator, where residence time and pressure are set to achieve full saturation at the target level.",
        image: meth2.src
      },
      {
        title: "Chilling and Isobaric Filling",
        description: "Chilling to 2–4°C before filling keeps CO2 in solution. Isobaric filling ensures CO2 pre pressurization, counter pressure filling, and no atmospheric exposure.",
        image: meth3.src
      },
      {
        title: "Capping Under Pressure",
        description: "Seals the bottle immediately after filling, before any gas can escape.",
        image: meth4.src
      }
    ]
  },
  faqTitle: "Frequently Asked Questions",
  faqs: [
    { question: "What CO2 volumes are typical for sparkling mineral water, and how does Seppa control them?", answer: "Most products in this category target 4.0 to 6.0 volumes of CO2. Seppa's inline systems dose to ±0.1 volumes accuracy with automatic correction, while the chilling circuit holds those levels stable through filling." },
    { question: "What distinguishes standard sparkling water from premium sparkling water?", answer: "Source, mineral content, and processing constraints. Standard products come from treated water with added carbonation. Premium sparkling water draws on a documented mineral source with geographical protection." },
    { question: "How does Seppa manage temperature in natural sparkling water bottling?", answer: "Product enters the filling zone at 2–4°C via plate heat exchangers on a glycol loop. If temperature rises above threshold, the system flags it before carbonation in the bottle is affected." },
    { question: "What are the practical sparkling water benefits of isobaric filling over standard methods?", answer: "At atmospheric pressure, CO2 flashes out of solution the moment product contacts the open bottle. Isobaric filling pre pressurizes the bottle first consistent carbonation, no foam related fill level variation across the run." },
    { question: "Why does CO2 purity matter in sparkling mineral water production?", answer: "Off flavours from impure CO2 are detectable at low concentrations especially in sparkling mineral water, where there are no sweeteners to mask them. Seppa specifies food grade CO2 at ≥99.9% purity." }
  ]
};

const SparklingWaterPage = () => {
  return <PackagingPageLayout data={pageData} />;
};

export default SparklingWaterPage;
