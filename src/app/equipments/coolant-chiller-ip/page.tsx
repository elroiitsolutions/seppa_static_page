import React from 'react';
import PackagingPageLayout, { PackagingPageData } from '@/components/packaging/PackagingPageLayout';

import meth1 from '@/assets/processing/generated/processing_meth1_1781759196548.png';
import meth2 from '@/assets/processing/generated/processing_meth2_1781759215088.png';
import meth3 from '@/assets/processing/generated/processing_meth3_1781759228926.png';
import meth4 from '@/assets/processing/generated/processing_meth4_1781759240871.png';

const pageData: PackagingPageData = {
  title: "Industrial Coolant Chiller Immersion Type: Engineering Precision Cooling for Process Critical Applications",
  breadcrumbName: "Coolant Chiller Immersion",
  rootBreadcrumbName: "Equipments",
  rootBreadcrumbPath: "/equipments",
  headerImage: "/images/equipments/immersion_chiller_banner.png",
  overviewTitle: "Industrial Coolant Chiller Immersion Type",
  overviewDescription: "There's a reason immersion-based cooling has held its ground in large scale industrial environments for decades. When you're dealing with several thousand litres of process fluid, a chemical bath that can't tolerate a two degree swing, or a brewery wort tank that needs to hit pitching temperature before the yeast window closes surface mounted cooling systems start looking like a bad idea. The chiller immersion method solves for exactly this scenario.",
  overviewsubDescription: [
    "Seppa Solutions' SEPPA DIP series is built on this principle. The unit houses a stainless steel 304 cooling coil that submerges directly into the coolant side of the process tank, enabling aggressive heat transfer right at the source of thermal load."
  ],
  overviewImage: "/images/equipments/chiller_overview.png",
  contentBlocks: [
    {
      title: "What Makes the Chiller Immersion Method Different?",
      paragraphs: [
        "In conventional setups, the refrigerant circuit and the process fluid are separated by multiple layers external exchangers, connecting pipework, pump losses. Every interface costs you efficiency. A chiller immersion unit eliminates most of these handoffs.",
        "The evaporator coil goes into the fluid directly. Refrigerant circulates through it, absorbs heat from the surrounding liquid, and pulls temperatures down without the transfer losses you'd see in a plate exchanger configuration. For applications where the temperature setpoint is tight or the fluid volume is large, that direct contact approach is hard to argue against.",
        "The SEPPA DIP uses eco friendly refrigerants throughout, making the glycol chiller system compliant with current environmental standards without sacrificing thermal output. Microprocessor controllers manage the refrigerant circuit to maintain setpoint accuracy even as heat load changes across a production shift."
      ],
      image1: "/images/equipments/chiller_overview.png",
      reverse: true
    }
  ],
  featuresTitle: "Key Engineering Features of the SEPPA DIP Series",
  featuresSubtitle: "The SEPPA DIP series is meticulously engineered to provide exceptional cooling for immersion-based process applications.",
  features: [
    { title: "SS 304 Immersion Coil Construction", description: "The coil material matters more than most buyers initially realise. SS 304 handles a wide range of process fluids cleaning agents, brine solutions, propylene glycol mixes, mild acids without corroding or leaching contamination. For a glycol chiller system handling food contact cooling loops, that material compatibility is non negotiable. Coil geometry is customisable. Immersion depth, coil diameter, pitch spacing all of these affect the available surface area and, by extension, the convective heat transfer coefficient between the refrigerant and the surrounding fluid." },
    { title: "Fluid Agitation Requirements", description: "A chiller immersion coil only performs at rated capacity when there's adequate fluid movement around it. Stagnant fluid creates a thermal boundary layer that insulates the coil surface, dropping heat transfer rates significantly. The SEPPA DIP accounts for this. Tank agitation either via pump recirculation or dedicated agitators is specified alongside the cooling unit to ensure consistent turbulence over the coil surface." },
    { title: "Low Noise, Compact Footprint", description: "Production floors have noise constraints. The SEPPA DIP runs at low acoustic output compared to large frame industrial cooling units with open drive compressors. The compact design also matters for facilities where floor space is shared between processing and packaging lines." }
  ],
  applicationsTitle: "Applications Across Industrial Cooling Processes",
  applicationsSubtitle: "Versatile industrial applications where direct immersion cooling performs best.",
  applications: [
    { title: "Brewery Wort Cooling", description: "The immersion wort chiller configuration is probably the most demanding single application in the beverage sector. You're dropping wort from near boiling temperatures to 18–22°C (for ale fermentation) or 8–12°C (for lager), typically within a two hour window, in tanks ranging from 500 litres to several thousand." },
    { title: "Chemical Processing and Plating Baths", description: "Electroplating and etching operations run process chemistry at very specific temperatures. Deviation affects coating quality, deposit uniformity, and in some cases operator safety. These tanks can't overshoot or undershoot their setpoints." },
    { title: "General Manufacturing Coolant Loops", description: "Hydraulic power units, CNC coolant tanks, injection moulding temperature control most manufacturing environments have at least one closed coolant loop that needs active chilling. The SEPPA DIP works as an equipment cooling system across these applications, particularly where central chilled water is unavailable and a standalone unit makes more practical sense." }
  ],
  whyChoose: {
    title: "Why Manufacturers Choose Seppa Solutions",
    description: "",
    paragraphs: [
      "Seppa isn't positioning itself as a catalogue supplier. The engineering team works from your tank geometry, your process fluid, your temperature requirements, and your installation constraints. The glycol chiller system you receive is configured for your application, not downsized from a larger frame unit.",
      "As an industrial chiller manufacturer with experience across food processing, beverage, chemical, and general manufacturing sectors, Seppa understands that chiller immersion hardware needs to survive long production runs, aggressive CIP cycles, and the kind of ambient conditions that exist on actual factory floors rather than in lab specifications.",
      "The SEPPA DIP series delivers this durability. The coil construction, the compressor selection, the control architecture all of it is specified with service life in mind. Seppa's track record as an industrial chiller manufacturer includes deployments where the original chiller immersion units are still running after a decade of continuous operation."
    ],
    image: "/images/equipments/chiller_overview.png"
  },
  methodology: {
    title: "Methodology: How the Immersion Type Coolant Chiller Works",
    steps: [
      {
        title: "Thermodynamic Sequence",
        description: "The thermodynamic sequence is straightforward. The stainless coil sits inside the process tank, fully submerged. Liquid refrigerant enters the coil at low pressure and temperature, and begins absorbing heat from the surrounding fluid through the coil wall.",
        image: meth1.src
      },
      {
        title: "Evaporation Cycle",
        description: "As the refrigerant absorbs heat, it evaporates. This vapour returns to the compressor, gets compressed and condensed, and the cycle repeats.",
        image: meth2.src
      },
      {
        title: "Direct Heat Exchange",
        description: "What makes the chiller immersion approach efficient is the contact area and the absence of intermediary heat exchange surfaces. The coil surface is directly bathed in process fluid, and with adequate agitation, fresh fluid is always cycling past the coil rather than sitting in a thermal dead zone.",
        image: meth3.src
      },
      {
        title: "Microprocessor Control",
        description: "The microprocessor controller monitors both refrigerant side pressures and process side temperature, adjusting compressor output to hold the setpoint. This makes the glycol chiller system adaptable to varying heat loads across production cycles which is how real manufacturing actually works, not the steady state conditions cooling systems are often spaced for.",
        image: meth4.src
      }
    ]
  },
  faqTitle: "Frequently Asked Questions",
  faqs: [
    {
      question: "What materials are compatible with the SEPPA DIP immersion coil?",
      answer: "The SS 304 coil handles most industrial process fluids including brine, propylene glycol, mild cleaning agents, and water based coolants. For aggressive acids or chlorinated solutions, Seppa's engineering team evaluates compatibility and can specify alternative alloys where the standard construction isn't appropriate for your fluid chemistry."
    },
    {
      question: "How does Seppa size a chiller immersion unit for high viscosity fluids?",
      answer: "Viscosity affects the convective heat transfer coefficient at the coil surface. For thicker fluids sugar syrups, certain chemical solutions Seppa calculates the revised heat transfer rate, adjusts the coil surface area to compensate, and specifies the agitation system required to maintain adequate fluid movement. This keeps the industrial cooling unit performing at rated capacity."
    },
    {
      question: "Is an immersion wort chiller more efficient than an external plate exchanger for brewery applications?",
      answer: "For large volume tanks, the immersion wort chiller typically wins on simplicity and hygiene. You eliminate the pump circuit, reduce CIP complexity, and avoid the risk of wort contamination through heat exchanger fouling. The chiller immersion method also reduces the number of moving parts in the cooling loop."
    },
    {
      question: "What makes a well designed equipment cooling system critical for process quality?",
      answer: "Temperature variation directly affects product consistency. Whether you're controlling fermentation, stabilising a plating bath, or maintaining hydraulic fluid viscosity, the equipment cooling system sets the boundaries within which your process runs. An undersized or poorly controlled industrial cooling unit introduces variation that compounds downstream."
    },
    {
      question: "What sets Seppa Solutions apart as an industrial chiller manufacturer?",
      answer: "Seppa's approach as an industrial chiller manufacturer is application specific rather than product catalogue driven. Each chiller immersion system is engineered to the client's tank geometry, fluid properties, and setpoint requirements. Combined with SS 304 construction, eco friendly refrigerants, and microprocessor control, this makes the SEPPA DIP a practical choice for manufacturers who need thermal reliability rather than just a low purchase price."
    }
  ]
};

const CoolantChillerIpPage = () => {
  return <PackagingPageLayout data={pageData} />;
};

export default CoolantChillerIpPage;
