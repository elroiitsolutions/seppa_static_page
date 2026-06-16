import React from 'react';
import PackagingPageLayout, { PackagingPageData } from '@/components/packaging/PackagingPageLayout';
import top from '@/assets/packaging/gable/gabletop1.jpg';
import machine from '@/assets/packaging/brick/machine.jpg';
import packag from '@/assets/packaging/brick/package.webp';
import brickCarton from '@/assets/packaging/gable/gabletop.jpg';
import brickAvif from '@/assets/packaging/brick/brickcarton.avif';

const pageData: PackagingPageData = {
  title: "The Definitive Guide to Aseptic Drum Filling: Engineering Sterility at Industrial Scale",
  breadcrumbName: "Aseptic Drum",
  overviewTitle: "Introduction to Aseptic Drum Systems",
  overviewDescription: "",
  overviewsubDescription: [
    "Producing a pasteurized product that stays shelf stable at ambient temperature without refrigeration, without preservatives, and without losing its character comes down to one thing: proper aseptic packaging. And this is where the technology parts ways with traditional canning. Instead of cooking the product inside its container, the containers themselves are pre sterilized, then filled with cold product inside a cold, commercially sterile environment, and finally sealed in a zone that stays completely sterile from start to finish. A modern aseptic filling machine handles all of this inside a sealed enclosure, with built in sterilization circuits that prepare the packaging just moments before filling begins. Most of these systems rely on hydrogen peroxide carried through a warm air stream, which essentially scrubs the filling chamber of any lingering microbes. Before the first drum is ever filled, the aseptic filling machine runs through a full conditioning cycle disinfecting every contact surface, flushing the cleaning loops, and bringing the entire sterilization train up to spec all of it aimed at knocking down the initial bioburden to negligible levels.",
    "Aseptic processing is the backbone of today's sterile supply chain, thanks to the strict discipline involved. Plus, market experts predict the global aseptic packaging sector will exceed ninety billion dollars by 2030. Why? Well, shelf stable bulk ingredients, plant based concentrates, and sterile bulk form pharmaceutical excipients are all becoming more popular. So, there's a lot driving this growth. Sitting right in the middle of that growth curve is the drum scale aseptic filling machine the workhorse that connects continuous high volume production lines to the practical reality of bulk distribution. As global food, beverage, and biopharma producers scale up, the appetite for dependable drum filling technology equipment that protects flavour and nutrition while locking in microbiological safety has never been stronger."
  ],
  overviewImage: top.src,
  contentBlocks: [
    {
      title: "Benefits of Aseptic Packaging",
      paragraphs: [
        "Because aseptic processing applies heat for short, precisely controlled bursts, the product never gets cooked into submission. The flavours, vitamins, and texture keep much better than stuff from a retort line. Plus, there are no need for chemical preservatives. Transport costs are way lower compared to IQF, and cold storage fees nearly disappear. So, the benefits really pile up fast!"
      ],
      image1: brickCarton.src
    },
    {
      title: "Aseptic Containers",
      paragraphs: [
        "The packaging itself deserves serious attention. Inside any aseptic filling system, the container is doing real work and if it can't hold a hermetic seal against oxygen and light, every bit of sterility achieved upstream is essentially wasted. Today's market has tons of aseptic bags, often used for packaging sterile products. Each one comes with a bag, a filling nozzle, and a cap, along with an outer container like a steel or plastic drum. Usually, you get sizes of 5, 10, 20, and 200 kg, though the weight can change depending on the density of what's being packed. They make these bags with stuff like vacuum metalized polyester or EVOH for extra protection, and they’re created from low or medium density polyethylene too."
      ],
      image1: packag.src,
      bgClass: "bg-white",
      reverse: true
    },
    {
      title: "Applications of Aseptic Drum Filling Across Industries",
      paragraphs: [
        "The flexibility built into today's aseptic filling equipment has turned bag in drum technology into something close to essential across a whole spread of industries. The SEPPA aseptic filling machine, in particular, was engineered to handle the demands of very different markets everything from catering kitchens to high throughput ingredient plants that never really shut down.",
        "Food service and catering operations lean heavily on low acid products: spinach leaves, whole peas, strips of peppers, diced onion, precooked meals all of which sit firmly in the danger zone for spoilage and demand airtight sterility control. Fruit processors trust aseptic filling to protect peach, apricot, strawberry, pear, apple, and tropical fruit pieces, along with the pulps, purees, and concentrates that show up in everything from baby food to smoothie chains. Tomato product manufacturers routinely ship diced tomatoes and concentrated pastes around the world in 200 liter drums filled aseptically right at the source.",
        "The story doesn't end with food. Dairy concentrate producers use bulk aseptic packaging to move cream bases, condensed milk, and whey concentrates around the globe without ever touching a refrigerated container. Pharmaceutical and nutraceutical companies depend on sterile drum filling for buffer solutions, fermentation feedstocks, and active liquid intermediates where even a single colony-forming unit can scrap a batch. Beverage ingredient suppliers think natural extracts, coffee concentrates, brewed tea bases have largely settled on drum filling as the default standard for B2B liquid transport.",
        "SEPPA designs and builds both Bag in Drum and Bag in Box type aseptic fillers. Double head configurations are on the menu too, with filling nozzles of either 1 or 2 inches chosen based on how viscous the product is and whether it carries particulates. The aseptic filling machine works with preformed, pre sterilized bags from 5 to 200 liters, including linked bag formats running 5 to 20 liters for smaller volume jobs."
      ],
      image1: machine.src
    }
  ],
  featuresTitle: "Choosing the Right Aseptic Drum Filling Solution for Your Production Line",
  featuresSubtitle: "Picking the right aseptic filling machine isn't a decision to rush. There are real engineering and operational trade offs in play, and getting it wrong tends to show up later as product loss, batch rejections, or in the worst case a recontamination event that can wipe out an entire production campaign.",
  features: [
    { title: "Fill Accuracy and Metering Technology", description: "Electronic weigh filling has quietly become the gold standard for any high value liquid stream. Today's aseptic filling equipment uses load cell based weighing that holds +0.1% repeatability, which means a 200 liter drum gets filled exactly the same way on cycle one as it does on cycle ten thousand. For thinner, lower viscosity products, flow meter based metering inside the aseptic filling machine delivers comparable precision while running at faster line speeds." },
    { title: "CIP/SIP Compatibility", description: "Clean in Place and Steam in Place capability isn't a nice to have it's the price of admission. Any serious aseptic filling system needs to support fully automated CIP cycles with documented chemical concentration, contact time, and temperature curves. SIP cycles, usually holding at 121–135 °C for validated dwell times, are what guarantee a Sterility Assurance Level (SAL) of 10⁻⁶ the threshold pharmaceutical regulators expect." },
    { title: "Throughput Scalability", description: "Production planners usually size equipment for peak demand, adding an extra 20-30%. For aseptic filling machines, proper specification means handling 60 to 120 drums an hour. This depends on bag format, product consistency, and easy to switch tooling for smooth format changes." },
    { title: "Hygienic Design Standards", description: "When picking equipment, go for 3-A Sanitary Standards, EHEDG certification, and full FDA 21 CFR Part 11 compliance for electronic batch records. Also, make sure the surface finish is Ra ≤ 0.8 μm on product contact stainless steel it's now standard, not some extra feature." }
  ],
  whyChoose: {
    title: "How Seppa Solutions Delivers Advanced Aseptic Drum Filling Systems",
    paragraphs: [
      "Everything in the Seppa Solutions aseptic filling machine platform comes back to one design conviction: sterility you can trust, on equipment your operators actually want to run. Every unit is built on a 316L stainless steel frame with crevice free welds, sloped surfaces that drain completely, and sanitary tri clamp fittings running the full length of the product path.",
      "Our aseptic valve technology uses a double seat sterile barrier with steam blocked interspaces which effectively kills any risk of cross contamination when the valve cycles. Sitting above that is a HEPA filtered laminar flow hood right over the filling nozzle, holding ISO Class 5 conditions during the moment that matters most: when the cap comes off the bag.",
      "Bag handling cap removal, fill, re cap happens automatically and stays under a continuous steam barrier from start to finish. The PLC driven HMI manages full traceability, recipe management, and real time monitoring of all critical control points. Add electronic weigh filling and servo driven nozzle positioning to the mix, and you get an aseptic filling machine that meets commercial sterility goals at top industrial speeds, no sweat."
    ],
    image: brickAvif.src
  },
  methodology: {
    title: "Methodology: From Site Audit to Validation",
    subtitle: "Installing an aseptic filling machine isn't a simple plug and play deal. Seppa Solutions follows a five phase engineering process, refined over decades, for every setup.",
    steps: [
      { title: "Site Audit & Process Mapping", description: "Our engineers walk the plant floor, take stock of utilities, look at product characteristics, pin down throughput targets, and map every connection point to upstream sterilizers and downstream palletizers.", image: top.src },
      { title: "Custom System Design", description: "A bespoke layout gets built in 3D CAD, backed by full P&ID documentation and FEA validated sanitary piping.", image: brickAvif.src },
      { title: "Precision Integration", description: "The aseptic filling equipment is fabricated, put through factory acceptance testing (FAT), and shipped in pre assembled modules so on site work stays minimal.", image: machine.src },
      { title: "Commissioning & Start Up", description: "Our team handles installation, utility hookup, and the first round of sterility qualification right alongside your crew.", image: brickCarton.src },
      { title: "Validation Support", description: "Full IQ/OQ/PQ documentation, microbiological challenge testing, and regulatory dossiers are delivered to back you up during FDA, EFSA, or local agency audits.", image: packag.src }
    ]
  },
  faqTitle: "Frequently Asked Questions",
  faqs: [
    { question: "How is sterility kept intact between back to back drum fills?", answer: "Continuous steam barriers around the filling nozzle, combined with automated SIP cycles between batches, mean the aseptic filling machine holds a validated sterile envelope across long production runs typically 20 plus hours of straight through operation." },
    { question: "Does the system work with every bag in drum format out there?", answer: "For the most part, yes. Seppa's aseptic filling equipment handles both 1 inch and 2 inch cap formats and accommodates bags from 5 to 200 liters, including linked bag configurations for smaller portion sizes." },
    { question: "What throughput should I actually plan around?", answer: "A standard single head aseptic filling machine handles 60–80 drums per hour at 200 L; the double head configurations push past 120 drums per hour, which is where most high volume tomato and fruit concentrate operations land." },
    { question: "What's the maintenance ROI compared to a traditional hot fill line?", answer: "Most customers see full payback inside 18–30 months. The savings come from cutting preservatives, slashing cold chain logistics, and the simple fact that aseptic processing burns far less energy than legacy thermal lines." },
    { question: "How fast can changeover happen between products?", answer: "With validated CIP/SIP recipes and quick release tooling, product changeover on a Seppa aseptic filling machine wraps up in 45–90 minutes full sterilization re qualification included." }
  ]
};

const AsepticDrumPage = () => {
  return <PackagingPageLayout data={pageData} />;
};

export default AsepticDrumPage;
