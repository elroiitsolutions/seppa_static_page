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
  title: "Juices, Nectars & Soft Drink Processing Solutions",
  breadcrumbName: "Juice & Nectars",
  rootBreadcrumbName: "Liquid",
  rootBreadcrumbPath: "/liquid",
  headerImage: bannerImg.src,
  overviewTitle: "Comprehensive Juices, Nectars & Soft Drink Processing Solutions",
  overviewDescription: "Walk onto most beverage plant floors and you'll find a strange split: one line built for thick, pulpy nectars, another built for clean, carbonated drinks, and almost no communication between them. That's the gap Seppa Solutions set out to close. Soft drink manufacturing today rarely means just one product. A single facility might bottle clear apple juice on Monday, a tomato-pulp nectar on Wednesday, and a CO2-loaded cola on Friday and the equipment has to keep up without three separate retrofits.",
  overviewsubDescription: [
    "That's why our platforms are built modular from the start. The same frame that handles delicate fruit juice processing can be reconfigured, often within a single shift change, to run high-speed carbonated production. We're not bolting accessories onto a fixed system; we're engineering flexibility into the core architecture.",
    "Viscosity sensors, adjustable homogenizer settings, and swappable filling heads mean a plant doesn't need a separate capital investment every time the product mix shifts. For operators managing seasonal demand citrus in winter, sparkling drinks in summer — that kind of juice manufacturing agility changes the economics of the whole operation. That's the same logic behind every soft drink manufacturing line we configure for fruit juice processing first and carbonation second, or the other way around."
  ],
  overviewImage: overviewImg.src,
  contentBlocks: [
    {
      title: "Key Features and Benefits of Our Beverage Processing Lines",
      paragraphs: [
        "The engineering backbone of any serious soft drink manufacturing line is thermal control, and we don't treat that lightly. Our plate heat exchangers hold pasteurization temperatures within a tight tolerance band, which matters more than it sounds. Push the HTST profile even a degree or two too hot, and you cook off the volatile aromatics that make a fruit beverage taste like the fruit it came from. Run it too cool, and you risk microbial survival. Precision here isn't a luxury feature; it's the difference between a product that tastes alive and one that tastes boiled. That precision is what separates reliable fruit juice processing from a line that merely works.",
        "Filtration is the second pillar. Multi-stage systems handle everything from clarified apple concentrate to nectars carrying 20% suspended pulp, without clogging or shearing the particulates into mush. We size the stages around the actual product there's no single filter setting that works for both a clear soft drink and a thick mango nectar, so we don't pretend there is.",
        "Then there's sanitation, which honestly determines whether a juice manufacturing line stays profitable or turns into a recurring headache. Automated CIP (clean-in-place) systems cycle through the entire wetted path tanks, pipework, valves, fillers without manual disassembly. Closed-loop, sanitary design isn't optional for any line touching fruit beverage products, since residual sugars and pulp solids are exactly what oxidation and bacterial growth feed on."
      ],
      image1: img1.src,
      reverse: true
    }
  ],
  applicationsTitle: "Applications Across Juice, Nectar, and Soft Drink Manufacturing",
  applicationsSubtitle: "Here's where the platform philosophy actually gets tested.",
  applications: [
    { title: "High-Pulp Fruit Processing", description: "Think mango, guava, or tomato demands wide-bore positive displacement pumps and gentle deaeration to avoid foaming and oxidation before the product ever reaches the filler. Push that same thick fruit beverage through a centrifugal pump designed for water-thin liquids, and you'll shear the pulp into something closer to puree than juice." },
    { title: "Clear and Sparkling Soft Drinks", description: "Beverages that are clear and sparkling soft drinks occupy the other end of the spectrum. CO2 volume regulation is required to be maintained constant at approximately ±0.05 volumes, as even small variations would affect the mouth feel and shelf losses in terms of carbonation. The amount of sugar, Brix content, and acids in a beverage alter its density and rheology, which our instruments measure in real-time rather than using pre-programmed values." },
    { title: "Consistent Final Stage Quality", description: "What ties it together is consistency at the final stage. Whether the product is a viscous nectar or a fizzing cola, every juice packaging unit leaving the line needs to hit the same fill accuracy, the same headspace, and the same seal integrity because a single underfilled bottle on a retail shelf does more brand damage than most marketing campaigns can repair. That consistency is what every soft drink manufacturing client expects from a juice packaging run, pulp or no pulp." }
  ],
  whyChoose: {
    title: "Why Choose Seppa Solutions for Juices, Nectars & Soft Drink Processing?",
    description: "We've spent years building lines for beverage producers who can't afford downtime or inconsistent fill weights — and that track record shows in how the equipment is specified.",
    paragraphs: [
      "Major beverage firms come to us for fruit juice processing systems precisely because we don't oversell flexibility we can't deliver; every modular component is rated for the actual viscosity and acid ranges it'll see in production, not a theoretical best case.",
      "Consistency is the real test of any fruit beverage line, and it's where a lot of off-the-shelf equipment quietly fails slight batch-to-batch drift that nobody catches until a customer complains. Our electronic mass-flow dosing and multi-format container flexibility exist specifically to close that gap. Whether you're scaling up juice manufacturing for a new SKU or retrofitting an aging soft drink manufacturing plant, we design around your actual product portfolio rather than handing you a generic catalog line. That's also why our juice packaging stations support multiple container formats PET, glass, cans on the same conveyor without a full changeover. It's the same standard for a single dedicated line as for a full multi-product soft drink manufacturing facility."
    ],
    image: over.src
  },
  methodology: {
    title: "Methodology: Our End-to-End Juice and Soft Drink Production Process",
    steps: [
      {
        title: "Intake and Analysis",
        description: "Our process starts at raw material intake, where incoming fruit concentrate, purée, or base syrup gets checked for Brix, pH, and microbial load before it goes anywhere near the line. Skip this step and you're chasing problems for the rest of the batch.",
        image: meth1.src
      },
      {
        title: "Filtration and Refinement",
        description: "From intake, product moves into filtration and refinement the stage that strips out seeds, skins, and unwanted fiber while preserving the pulp characteristics the recipe actually calls for. This leads to standardized blending wherein the flavor concentrates, sugar, and water are delivered via electronic mass flow control as opposed to timed valves. This is the only method to maintain a consistent quality from one batch to another.",
        image: meth2.src
      },
      {
        title: "Carbonation or Pasteurization",
        description: "The subsequent step will be carbonation or pasteurization according to the products – the still juices undergo HTST or UHT treatment, while the carbonated products undergo carbon dioxide injection just prior to filling.",
        image: meth3.src
      },
      {
        title: "Sterile High-Speed Packaging",
        description: "The final stage is sterile, high-speed juice packaging, where aseptic filling integrity protects shelf life without relying on preservatives the consumer doesn't want to see on the label. This systematic sequence is what lets a single soft drink manufacturing facility run a fruit juice processing batch in the morning and a carbonated batch by afternoon, without compromising either. That sequence doesn't bend just because a given week's dominant output shifts from juice manufacturing toward full soft drink manufacturing.",
        image: meth4.src
      }
    ]
  },
  faqTitle: "Frequently Asked Questions",
  faqs: [
    { question: "Are soft drink manufacturing lines safe for food-grade production?", answer: "Yes. Every line we build uses food-grade stainless steel, validated CIP cycles, and sealed sanitary fittings throughout the wetted path. Safety compliance isn't an add-on stage it's built into the pipework routing and valve selection from the first design review." },
    { question: "What's the technical difference between handling a thick fruit beverage and a clear juice?", answer: "Thick products need positive displacement pumps, wider bore piping, and gentler deaeration to avoid shearing pulp or trapping air. Clear juices can run on centrifugal pumps at higher speeds with tighter filtration, since there's no particulate load to protect." },
    { question: "How does Seppa optimize juice processing for better yield?", answer: "We tune extraction pressure, filtration cut points, and thermal exposure time specifically to the fruit's structure, minimizing product loss during transfer and filtration. Less shear and shorter hold times mean less product ends up as waste rather than finished bottles." },
    { question: "Why does sterile juice packaging matter for shelf-life?", answer: "Aseptic filling prevents post-process contamination, which is the single biggest cause of early spoilage in non-preserved beverages. A properly sealed, sterile fill can extend shelf life by months without a single added preservative." },
    { question: "What makes Seppa Solutions a leader in liquid processing innovation?", answer: "Our willingness to engineer around the product instead of forcing the product to fit a generic line. That approach has held up across pulpy nectars, clear juices, and carbonated drinks alike, and it's the same philosophy behind every soft drink manufacturing system we deliver." }
  ]
};

const JuiceAndNectarsPage = () => {
  return <PackagingPageLayout data={pageData} />;
};

export default JuiceAndNectarsPage;
