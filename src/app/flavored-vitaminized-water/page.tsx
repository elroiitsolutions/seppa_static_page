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
  title: "Flavored Vitamin Water Production",
  breadcrumbName: "Flavored Vitamin Water",
  rootBreadcrumbName: "Liquid",
  rootBreadcrumbPath: "/liquid",
  headerImage: bannerImg.src,
  overviewTitle: "What Is Flavored Vitaminized Water?",
  overviewDescription: "At its simplest, flavored vitamin water is purified or spring water dosed with water soluble vitamins, minerals, and natural flavor essences, blended to a precise, repeatable formulation. The \"simple\" part stops there. Making flavored vitamin water on an industrial scale requires blending micro dosed micronutrients with flavors in a manner that remains chemically stable throughout its entire shelf life period.",
  overviewsubDescription: [
    "Vitamin C, B vitamins and some minerals are sensitive to light, air and even to traces of metal, which results in gradual loss of effectiveness prior to the product reaching the hands of consumers. A formula that is both well balanced and visually appealing upon filling can lose up to 20-30 percent of Vitamin C concentration after a couple of months if proper blending technique was not used.",
    "That's why vitamin enhanced water demands equipment built around ingredient stability, not a generic water line with a dosing pump bolted on the side."
  ],
  overviewImage: overviewImg.src,
  contentBlocks: [
    {
      title: "Benefits of Flavored Vitaminized Water for Healthy Hydration",
      paragraphs: [
        "Consumer demand for nutrient enhanced water has climbed steadily as people look for hydration that does more than hydrate. Pure water does not have an attached nutrition narrative; however, flavoured vitamin waters do, and this makes sales. The consumer buys it because it takes care of two issues simultaneously: the tediousness of pure water and the difficulty of taking the vitamin separately.",
        "The need is valid only as long as the product lives up to what it claims on the label until its expiry. A nutrient enriched water that gets reduced by half in efficacy in just two months cannot be considered a health drink; rather, it is flavoured water with a misleading label. Nutrient efficacy and undistorted flavor make a brand stay alive.",
        "Natural flavored water variants add another layer of demand. Consumers increasingly distrust artificial flavor compounds and read labels before checking price. A flavored vitamin water formulation built around real fruit extracts commands a premium, but it's also less forgiving during processing natural compounds oxidize and separate more readily than synthetic flavor systems."
      ],
      image1: img1.src,
      reverse: true
    }
  ],
  featuresTitle: "Features of Flavored Vitaminized Water Processing Solutions",
  featuresSubtitle: "Producing stable functional water at scale comes down to engineering decisions generic bottling lines don't make.",
  features: [
    { title: "High Accuracy Multi Head Dosing", description: "Vitamin micro dosing tolerances are tight, often within +2% of target concentration. Multi head dosing pumps with electronic flow verification track each batch's ingredient input in real time, because a single mis dosed batch can mean a full recall." },
    { title: "Magnetic Drive Agitation", description: "Standard mechanical agitators introduce shear stress and metal on product contact points that accelerate vitamin breakdown. Magnetic drive agitators eliminate the seal interface entirely, keeping the blend homogeneous without mechanically stressing sensitive micronutrients." },
    { title: "Inline Ingredient Injectors and Closed Loop Circuits", description: "Vitamins degrade faster the longer they sit exposed to air and light. Inline injection dosing ingredients directly into a sealed, light shielded flow path right before bottling cuts that exposure window from hours down to seconds." },
    { title: "Material Hygiene and Light Shielding", description: "The type of stainless steel used, gaskets used, and order of the CIP cycle can all impact metal ion leaching. The use of light protected storage tanks and amber rated transfer lines ensures photosensitive chemicals like riboflavin are protected." }
  ],
  applicationsTitle: "Applications Across Beverage, Fitness, Wellness, and Retail Markets",
  applicationsSubtitle: "Flavored vitamin water shows up everywhere from gas station coolers to premium wellness boutiques, and the machinery has to flex across all of it.",
  applications: [
    { title: "High-Volume Retail Brands", description: "A national retail brand running flavored vitamin water at 40,000 bottles per hour needs throughput above almost everything else." },
    { title: "Boutique Natural Labels", description: "A boutique label producing small batch natural flavored water in runs of a few thousand units cares more about flexibility and rapid changeover between flavors." },
    { title: "Fitness and Recovery", description: "Brands lean toward electrolyte heavy functional water formulations, often paired with B vitamins for energy claims." },
    { title: "Private Label Programs", description: "Want a line that can run multiple SKUs of nutrient enhanced water back to back without lengthy sanitation downtime between flavor changes." }
  ],
  whyChoose: {
    title: "Why Choose the Seppa Solution for Flavored Vitaminized Water Production?",
    description: "Seppa Solutions builds turnkey lines for manufacturers who need their flavored vitamin water to perform the way the label promises, batch after batch, for the full shelf life. We're engineers first every line starts with the chemistry of the formulation, not a catalogue template.",
    paragraphs: [
      "Major producers come to us because generic bottling equipment wasn't built to protect light sensitive, oxygen sensitive ingredients at high speed. Our systems maintain the stability of vitamin enhanced water through closed loop processing, electronic batch tracking, and energy efficient low heat pasteurization that preserves nutrient integrity instead of cooking it away.",
      "Our track record on natural flavored water lines reflects something most vendors don't prioritize: handling unstable, all natural ingredient systems without sacrificing line speed a narrower problem than most manufacturers realize until they've tried running real fruit extracts through equipment built for synthetic concentrates."
    ],
    image: over.src
  },
  methodology: {
    title: "Our Methodology for Designing Flavored Vitaminized Water Processing Lines",
    steps: [
      {
        title: "Formulation Specific Batching Analysis",
        description: "We study your exact vitamin and flavor formulation to understand its oxidation, light sensitivity, and shear stress risks.",
        image: meth1.src
      },
      {
        title: "Precision Injection Loop Design",
        description: "We engineer injection points to minimize exposure time and contact with reactive surfaces.",
        image: meth2.src
      },
      {
        title: "Low Shear Blending Implementation",
        description: "Magnetic drive systems and controlled flow rates keep the formulation homogeneous without degrading sensitive compounds.",
        image: meth3.src
      },
      {
        title: "Final QC Validation",
        description: "Every line ships with documented nutrient retention testing, confirming the finished flavored vitamin water meets label claims before it reaches a customer's shelf.",
        image: meth4.src
      }
    ]
  },
  faqTitle: "Frequently Asked Questions",
  faqs: [
    { question: "Does flavored vitamin water lose nutrient potency over time, even when properly bottled?", answer: "Yes, to some degree the water soluble vitamins in nutrient enhanced water degrade gradually no matter how well it's bottled. Good engineering doesn't aim for zero degradation, it slows that curve enough that the product still meets label claims at the end of its stated shelf life, typically 9-12 months." },
    { question: "What's the real difference between a mass market line and a premium functional water line?", answer: "Throughput tolerance and flexibility. Mass market lines optimize for speed and a narrow set of stable formulations. Premium lines trade some throughput for tighter dosing accuracy and the ability to handle less stable, natural ingredient systems." },
    { question: "How does Seppa ensure the nutrient potency of vitamin enhanced water through the full production run?", answer: "Through inline dosing verification, light shielded transfer paths, low- heat pasteurization, and closed loop processing that minimizes oxygen and light exposure at every stage, not just at bottling." },
    { question: "What purity standards apply to natural flavored water ingredients during processing?", answer: "Natural flavor and vitamin inputs are tracked through certified supply chains, and our equipment uses food grade, non reactive material surfaces that prevent contamination or unwanted chemical interaction during blending." },
    { question: "Why does Seppa Solutions lead in functional beverage packaging innovation?", answer: "Because we treat ingredient stability as the central engineering problem, not an afterthought bolted onto standard bottling equipment. That focus shapes every dosing system, agitator, and bottling line we design for flavored vitamin water and other functional water formulations." }
  ]
};

const FlavoredVitaminWaterPage = () => {
  return <PackagingPageLayout data={pageData} />;
};

export default FlavoredVitaminWaterPage;
