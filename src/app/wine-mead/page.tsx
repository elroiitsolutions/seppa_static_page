import React from 'react';
import PackagingPageLayout, { PackagingPageData } from '@/components/packaging/PackagingPageLayout';
import bannerImg from '@/assets/packaging/generated/wine_banner.png';
import overviewImg from '@/assets/packaging/generated/wine_overview.png';

const pageData: PackagingPageData = {
  title: "Complete Wine & Spirits Processing Solutions | Seppa Solutions",
  breadcrumbName: "Wine & Mead",
  rootBreadcrumbName: "Liquid",
  rootBreadcrumbPath: "/liquid",
  headerImage: bannerImg.src,
  overviewTitle: "Complete Wine & Spirits Processing Solutions",
  overviewDescription: "Bad equipment costs more than the price tag. Anyone who's watched a batch of Chardonnay go flat from oxygen pickup during transfer, or seen a single malt overfilled because the dosing system drifted at temperature, knows exactly what's at stake. The aroma, mouthfeel, and finish of a premium wine or spirit don't survive sloppy handling and once a customer notices, that trust is gone.",
  overviewsubDescription: [
    "The wines and spirits category has been on a consistent upward trajectory. A major industry forecast put the global luxury wines and spirits market at over $812 billion in 2015, with projections to $1.1 trillion by 2022 at a 4.8% CAGR. India's wine market alone grew at double digits between 2015 and 2018. Cocktail culture, rising incomes, and a real shift in how consumers approach what they drink from rum and vodka toward cognac, tequila, and premium whites have all pushed the category higher.",
    "That growth creates opportunity, but it also raises the bar. Consumers paying premium prices notice things. They notice consistency. They notice bottle presentation. They notice whether the last bottle tasted the same as the first.",
    "Seppa Solutions builds the processing infrastructure that makes consistency achievable wine plants, filling lines, and complete bottling systems for producers who are serious about quality at scale."
  ],
  overviewImage: overviewImg.src,
  featuresTitle: "Wine Production Process and Plant Design",
  featuresSubtitle: "Engineering for Delicate Products",
  features: [
    { title: "Precision Engineering", description: "Wine production has changed dramatically over the last twenty years. Today's consumers are more knowledgeable, global competition is stronger, and even small inconsistencies in fermentation or filtration can affect the final product. Quality standards are higher than ever, leaving little room for error." },
    { title: "Sparkling White Wine Challenges", description: "Sparkling white wine is the hardest case. Maintaining CO₂ saturation from tank to sealed bottle requires isobaric counter pressure filling any pressure drop during the bottling process causes foam loss and inconsistent carbonation." },
    { title: "Gas Management", description: "Our sparkling white wine lines use closed-loop gas management to hold target CO₂ within +0.1 vol, which means the product in bottle three thousand matches the product in bottle one. For sparkling white wine producers, that's not a premium feature. It's table stakes." },
    { title: "Hygiene", description: "Hygiene is the other non negotiable. CIP and SIP cycles are built into every Seppa wine plant as standard. Documentation meets international food safety requirements, which matters when your products cross borders." }
  ],
  applicationsTitle: "Automated Wine Filling and Bottling Lines",
  applicationsSubtitle: "Precision at Every Stage",
  applications: [
    { title: "Precision Filling", description: "A bottling line is where the product either lands or doesn't. All the careful work upstream the fermentation management, the filtration, the storage can be undone in thirty seconds by a poorly calibrated fill or a labeled that can't hold registration on a non standard bottle. Our lines use volumetric dosing accurate to +1 ml across all formats. For wines and spirits producers running five or ten SKUs, the ability to switch formats in under twenty minutes without tools isn't a convenience it directly determines whether a changeover eats an hour of production or a shift." },
    { title: "Handling Custom Bottle Formats", description: "Bottle shapes have gotten more varied. Producers use embossed glass, proprietary formats, and custom wine glasses as part of how they tell their brand story. Standard bottling equipment handles rectangular Bordeaux bottles reasonably well. It handles unusual geometries poorly. Seppa's gripping and transfer systems are built to accommodate tapered necks, heavy base custom wine glasses, and irregular profiles without the constant jams that generic lines produce with specialty formats." },
    { title: "Oxygen Protection", description: "Oxygen pickup remains the technical enemy, regardless of bottle shape. For still wines and spirits, keeping dissolved oxygen below 0.05 mg/L during filling is what separates a product with a twelve-month shelf life from one that peaks at six. That target holds across all our fillers, whether the line is running standard 750ml bottles or limited edition custom wine glasses." }
  ],
  whyChoose: {
    title: "How Seppa Solutions Delivers Advanced Wine & Spirits Processing Plants",
    description: "What Actually Differentiates the Equipment. There's no shortage of equipment suppliers in the wines and spirits sector. The difference, in practice, comes down to engineering decisions that don't show up in spec sheets how the internals are finished, how the dosing system handles temperature variation, whether the sanitary design was built in or bolted on later.",
    reasons: [
      { title: "316L Stainless Steel", description: "Every product contact surface in a Seppa plant tanks, valves, pipework, filling heads is 316L stainless steel with electropolished finishes held below Ra 0.8 µm. That surface roughness threshold is where biofilm adhesion becomes a real operational problem in humid bottling environments. We design to that standard from the start, not as a retrofit." },
      { title: "Inert Gas Management", description: "Inert gas management is built in for wines and spirits that need it, which is most of them. Premium reds, many white varietals, and virtually all aged spirits require nitrogen or CO₂ blanketing to exclude oxygen from the headspace during filling. Getting that right can add several months to shelf life with no change to the recipe it's one of the higher-return technical decisions a producer can make." },
      { title: "Temperature Dependent Dosing", description: "The spirits dosing system handles something that simpler equipment misses: temperature dependent density variation. At 40% ABV, a 2°C swing changes the volume to weight ratio enough to push fills out of compliance on net contents declarations in regulated export markets. Our system compensates in real time. For producers shipping to the EU, UK, or US, that matters." },
      { title: "Counter Pressure Filling", description: "For sparkling white wine and carbonated spirits, counter pressure filling maintains consistent fill levels even when carbonation varies between batches which it always does with secondary fermentation products." }
    ],
    image: overviewImg.src
  },
  methodology: {
    title: "Methodology: From Concept to Commissioning",
    subtitle: "How a Seppa Project Actually Works",
    steps: [
      { title: "Phase 1: Feasibility Study", description: "We start with a feasibility study. Not a quote. Before we specify any equipment, we need to understand the product range, the physical constraints of the site, the current bottlenecks, and where the operation is headed in three to five years. For wines and spirits producers trying to expand capacity, this stage regularly surfaces process inefficiencies that a new bottling line won't fix on its own.", image: overviewImg.src },
      { title: "Phase 2: Process Integration", description: "Process integration for wine production is the next step mapping everything from grape reception or raw spirit intake through to palletized finished goods. The question at every point is whether automation reduces cost and error, or just adds complexity. Not every wine plant needs robotics across the board. The right answer depends on SKU count, shift structure, and how much technical maintenance capability exists on site.", image: bannerImg.src },
      { title: "Phase 3: Installation and Commissioning", description: "Installation and commissioning are handled by Seppa's own engineers. Factory Acceptance Testing happens at our facility before anything ships. Site Acceptance Testing confirms that throughput, fill accuracy, and CIP validation all perform to specification under actual production conditions not controlled lab conditions. We don't sign off until they do.", image: overviewImg.src },
      { title: "Phase 4: Operator Training", description: "Operator training is last, and it gets underestimated more often than anything else. The difference between catching a dosing drift early and losing a batch is usually a trained operator noticing something feels off. We run hands-on training with the shift team, not a binder drop.", image: bannerImg.src }
    ]
  },
  faqTitle: "Frequently Asked Questions",
  faqs: [
    {
      question: "How do you protect aroma in premium wines and spirits during high-speed filling?",
      answer: "The two main culprits are oxygen pickup and temperature shock. Our filling heads flush with inert gas before each fill cycle, keeping dissolved oxygen below 0.05 mg/L. The filling bowl temperature is monitored continuously and held within +1°C of target. For aromatic wines and spirits late harvest Rieslings, aged cognac, any product where volatiles matter those controls have to be running reliably every cycle, not just when someone checks."
    },
    {
      question: "Can the wine plants scale when production volumes increase?",
      answer: "Yes, and the architecture is designed specifically for that. Filling lines, filtration capacity, and tank farms can all be expanded independently. Most clients start somewhere between 3,000 and 5,000 bottles per hour and eventually run 10,000+ BPH on the same core infrastructure. The wine plant doesn't need to be rebuilt to grow."
    },
    {
      question: "How does the gas management system handle sparkling white wine specifically?",
      answer: "Our sparkling white wine lines use isobaric counter-pressure filling with closed loop CO₂ monitoring. The system reads carbonation in the product tank continuously and adjusts back pressure in the filling bowl to match. The result is consistent fill levels and no foam loss, even at higher speeds where conventional fillers start producing rejects with sparkling white wine."
    },
    {
      question: "Do the lines actually handle custom wine glasses and unusual bottle formats?",
      answer: "They do, and this comes up more than people expect. We've run lines handling everything from standard Bordeaux shapes to heavy base custom wine glasses and bespoke decanters. The gripping, rinsing, and filling modules adjust across a wide range of dimensions. Format changeover is tool-free and takes under twenty minutes. If you're running limited edition custom wine glasses alongside standard bottles in the same shift, the line handles both without a separate setup."
    },
    {
      question: "What does a realistic cost picture look like for a new wine plant?",
      answer: "the biggest savings come from making the right decisions early. When the layout, workflow, and automation level are planned properly from the start, overall ownership costs can be reduced by 15–25% over a ten year period. In contrast, piecing together a production line from separate off the shelf components often leads to inefficiencies, higher maintenance demands, and increased operating costs down the road."
    }
  ]
};

const WineMeadPage = () => {
  return <PackagingPageLayout data={pageData} />;
};

export default WineMeadPage;
