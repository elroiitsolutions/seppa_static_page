import React from 'react';
import PackagingPageLayout, { PackagingPageData } from '@/components/packaging/PackagingPageLayout';
import imgA from '@/assets/packaging/generated/juice_processing_wide_1781701462502.png';
import imgB from '@/assets/packaging/generated/juice_bottling_closeup_1781701475686.png';
import imgC from '@/assets/packaging/generated/modern_beverage_factory_1781701623841.png';
import imgD from '@/assets/packaging/generated/stainless_steel_tanks_1781701637471.png';
import imgE from '@/assets/packaging/generated/wine_production_wide_1781701527332.png';
import imgF from '@/assets/packaging/generated/glass_bottles_closeup_1781701419649.png';

const pageData: PackagingPageData = {
  title: "Complete Juice Processing Plant Solutions",
  breadcrumbName: "Juice Line Machines",
  rootBreadcrumbName: "Complete Lines",
  rootBreadcrumbPath: "/complete-lines",
  headerImage: imgA.src,
  overviewTitle: "Complete Juice Processing Plant Solutions",
  overviewDescription: "A juice processing line is not a collection of machines bolted together in sequence. Each stage depends on what came before it and directly affects what follows. Extraction conditions set the burden on filtration. Thermal treatment decisions ripple back into how pressing parameters are dialled in. Get any handoff wrong and the consequences compound downstream off-flavours, microbial instability, or inconsistent Brix across production batches.",
  overviewLayout: "stacked",
  overviewsubDescription: [
    "Seppa designs every juice processing line as an integrated system. Fruit reception, washing, pressing, enzyme treatment, filtration, pasteurisation, deaeration, and thermal hold all share a common control architecture. That means an operator can tune one variable upstream pulp retention, say without manually recalibrating downstream fill temperatures. Inside a large scale juice processing plant running thousands of litres per hour, that kind of inter system intelligence separates consistent product from batch to batch guesswork.",
    "Thermal stages in a Seppa juice processing line use plate or tubular heat exchangers sized for the specific viscosity and particulate load of each product type. Pasteurisation temperatures are held within +0.5°C of target across the full production run. That precision matters: enzyme inactivation requires hitting a minimum lethal temperature, but the aromatic volatiles that make a fresh juice taste like the fruit it came from start degrading above certain thresholds."
  ],
  overviewImage: imgB.src,
  contentBlocks: [
    {
      title: "Types of Juice Products We Process",
      paragraphs: [
        "The right juice line for clarified apple concentrate differs substantially from what pulpy mango nectar needs. These are not just different products they are different engineering problems.",
        "Citrus juices contain suspended pulp solids and volatile flavour compounds which are easily affected. They need an extraction process that involves low shear, deaeration for controlled exposure to oxidation, and pasteurization at conditions that destroy pectin methylesterase activity without thermal destruction of volatile flavour components. Tropical nectars and high pulp blends add another layer: they need specialised homogenisers and recirculation loops that keep particle distribution uniform right through to the filler, which is harder than it sounds when you are working at production speeds.",
        "Clear shelf stable juices and concentrates sit at the other end. Their fruit juice production line includes centrifugal or ultrafiltration steps to remove haze forming compounds, followed by multi stage evaporation where required. Aseptic filling becomes the critical final step for concentrates going into long cold chain export channels.",
        "Seppa's modular design means one juice processing line can handle multiple product types on the same footprint seasonal changeover rather than separate dedicated lines. When production schedules shift or a new product enters the range, the plant adapts rather than requiring a full capital build."
      ],
      image1: imgE.src,
      reverse: true
    },
    {
      title: "Juice Production Process Flow",
      paragraphs: [
        "The process starts before the first fruit is pressed. Incoming raw material is inspected, washed, and sorted to remove damaged or contaminated fruit. Brix and titratable acidity are measured at reception to set baseline processing targets for the batch.",
        "Pressing or extraction follows, with method chosen to match the fruit. Citrus uses in line extractors that separate juice from peel oil simultaneously. Stone fruits and apples typically pass through crushing and pressing stages where enzyme addition controls pectin breakdown to the target clarity level.",
        "Filtration removes suspended solids to the target specification, coarse for nectars and fine for clear juices, and is followed by deaeration. Removing dissolved oxygen at this stage directly limits oxidative degradation during storage. It is a step that under specified juice processing line frequently skip, and the consequences tend to show up in accelerated shelf life testing six months later.",
        "Pasteurisation in a high efficiency fruit juice production line typically uses an HTST profile 95 to 100°C for 15 to 30 seconds for not from concentrate products. Peroxidase and polyphenol oxidase are the primary enzymatic targets; both are inactivated in this window without the extended dwell time that causes measurable caramelisation in sugar bearing juices. Cooling follows immediately through regenerative heat exchange, recovering thermal energy and dropping product temperature to fill ready levels within seconds."
      ],
      image1: imgC.src,
      reverse: false,
      bgClass:"bg-light"
    },
    {
      title: "Juice Filling and Packaging Systems",
      paragraphs: [
        "Once the product leaves the pasteuriser, it enters the most contamination sensitive phase of the juice processing line. Microbiological ingress between the cooler and the sealed container undoes the thermal work that came before it a fact that is easy to state and surprisingly easy to overlook in plant layout decisions.",
        "Seppa's juice filling line operates with a sterile zone architecture where the fill head, container feed, and cap application all run under positive pressure filtered air. For hot fill products, fill temperatures between 85°C and 92°C are maintained within +1°C. Tight enough to ensure container sterilisation from the product temperature itself, but not so tight that thermal stress cracks PET or HDPE bottles. Pulpy products are managed through temperature controlled recirculation at the fill head, preventing settling between fill cycles without mechanical agitation that would damage fruit particles.",
        "The transition to the juice packaging line brings a different set of requirements. Labelling, date and batch coding, secondary packaging, and palletising all have to execute without creating contamination points or mechanical stress on sealed containers. Seppa integrates these downstream stages including Kombopure aseptic fill cap units and end of line stretch wrapping into the same control system governing the upstream juice processing line. Traceability from finished pallet back to raw material lot is available without manual record reconstruction.",
        "For aseptic cold fill applications, the juice filling line changes substantially. Containers are sterilised separately using hydrogen peroxide or UV treatment. The fill environment is maintained at ISO Class 5 or better. Fill temperatures match ambient or slightly below."
      ],
      image1: imgD.src,
      reverse: true,
      layout:"stacked"
    },
    {
      title: "Benefits of Seppa Juice Processing Plants",
      paragraphs: [
        "Seppa juice processing plants are designed for a low footprint layout where each stage is positioned to minimise transfer piping length. Shorter transfer lines mean faster CIP cycles, less product retained in dead legs between runs, and lower cleaning chemical consumption per litre of output.",
        "On waste reduction: pomace from pressing passes through a recovery system that captures residual juice before the solid fraction exits the line. Thermal energy from pasteurisation is recovered regeneratively at rates above 90%. Water consumption per litre of finished product is set as a target during system design and tracked continuously during production not estimated and forgotten.",
        "The modular architecture of a Seppa juice processing line means capacity additions do not require taking down the existing line. A plant running 5,000 litres per hour can add a parallel pasteuriser and additional fill heads as volume grows. That is a planning advantage that compounds over time.",
        "All product contact surfaces are 316L stainless, electropolished to Ra ≤ 0.8 µm. Gaskets are FDA compliant elastomers. No dead end pipework. No horizontal runs where condensate accumulates. These decisions are made at the design stage because correcting them after installation is expensive and disruptive."
      ],
      image1: imgF.src,
      reverse: false,
      bgClass:"bg-light"
    }
  ],
  whyChoose: {
    title: "Why Choose Seppa for Your Juice Processing Plant?",
    paragraphs: [
      "Seppa has built complete juice processing line solutions for producers ranging from regional fruit processors to multinational aseptic concentrate exporters. The range of applications matters practically: Seppa's engineers have encountered the specific process failures that arise in high speed juice production foaming at deaeration, pulp settling in long transfer lines, fill weight variance in viscous nectars, CIP validation failures in complex manifold arrangements. Solutions to those problems are already in the design library. Customers do not pay to rediscover them.",
      "The juice processing line Seppa delivers includes intelligent CIP integration as standard. Caustic and acid sequence parameters are pre set based on the soil load for each product type, and the system logs every cycle with temperature, flow, and conductivity confirmation. That documentation is available for regulatory audit without manual reconstruction.",
      "Commissioning support from Seppa continues until production targets are consistently met not until the machines simply turn on. Operator and maintenance training is part of delivery. Spare parts stocking is part of the supply agreement."
    ],
    image:imgA.src
  },
  faqTitle: "Frequently Asked Questions",
  faqs: [
    {
      question: "How does a juice filling line preserve heat sensitive vitamins like Vitamin C?",
      answer: "Ascorbic acid degrades through two mechanisms: thermal oxidation and dissolved oxygen mediated oxidation. Deaeration upstream of the pasteuriser removes dissolved oxygen before heat is applied. HTST pasteurisation then minimises the thermal exposure window. For products where Vitamin C retention is a primary specification, aseptic cold fill configurations remove heat from the fill stage entirely the juice is pasteurised, rapidly cooled, and filled cold into a separately sterilised container."
    },
    {
      question: "What throughput can a fruit juice production line realistically achieve?",
      answer: "Seppa configures fruit juice production lines from 3,000 to 36,000 containers per hour. The practical figure depends on container size, fill volume, and product viscosity. High pulp nectars can reduce effective throughput by 10 to 15% on the same juice filling line compared to a clear product the fill head takes longer to settle each fill, and the capper has to keep pace."
    },
    {
      question: "How is an aseptic juice line validated and maintained?",
      answer: "Validation involves media fill trials using commercially sterile nutrient broth, run at normal production speed. The juice line must demonstrate zero contamination across a statistically significant container count before product filling begins. Ongoing maintenance focuses on sterile zone integrity: filter integrity testing on the sterile air supply, leak testing on aseptic valve seats, and regular CIP log review to confirm that detergent contact time and temperature stay within validated parameters."
    },
    {
      question: "Can a high speed juice packaging line handle multiple container formats?",
      answer: "It can, but format change over time varies significantly by how the line was specified. Seppa's juice packaging line configurations include quick release format parts for bottle guides, fill heads, and capping heads. Most format changes take under 30 minutes. The important point is that multi format capability needs to be specified at the design stage. Retrofitting it costs more and almost always involves compromises on changeover time that a purpose specified line would not have."
    },
    {
      question: "What is Kombopure and how does it fit into a complete juice processing line?",
      answer: "Kombopure is Seppa's integrated blow fill cap unit for aseptic PET packaging. Bottle blowing, sterile filling, and capping happen inside a single sterile enclosure, which eliminates the stage where open, unsterilised bottles would otherwise move through ambient air. In a complete juice processing line, Kombopure sits between the pasteuriser cooler and the downstream juice packaging line stages labelling, coding, secondary packing, and palletising."
    }
  ]
};

const JuiceLineMachinesPage = () => {
  return <PackagingPageLayout data={pageData} />;
};

export default JuiceLineMachinesPage;
