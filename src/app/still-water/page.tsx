import React from 'react';
import PackagingPageLayout, { PackagingPageData } from '@/components/packaging/PackagingPageLayout';

// Using some generated and placeholder images due to quota limits
import bannerImg from '@/assets/services/generated/training_banner_1782102515585.png'; // fallback
import overviewImg from '@/assets/pet/generated/pet_overview_1782103229961.png';
import img1 from '@/assets/pet/generated/pet_cb1_1782103242917.png';
import over from '@/assets/pet/generated/pet_whychoose_1782103256501.png';

import meth1 from '@/assets/pet/generated/pet_meth1_1782103277774.png';
import meth2 from '@/assets/pet/generated/pet_meth2_1782103291753.png';
import meth3 from '@/assets/pet/generated/pet_meth3_1782103305856.png';
import meth4 from '@/assets/pet/generated/pet_meth4_1782103318966.png';

const pageData: PackagingPageData = {
  title: "Still Water Bottling Systems",
  breadcrumbName: "Still Water",
  rootBreadcrumbName: "Liquid",
  rootBreadcrumbPath: "/liquid",
  headerImage: bannerImg.src,
  overviewTitle: "The Engineering of Absolute Purity in Still Water Bottling Systems",
  overviewDescription: "In the fast paced world of liquid packaging, the difference between a brand that succeeds and one that struggles often comes down to the quiet, invisible science of the bottling line. When you’re dealing with premium Still Water, you aren’t just selling a product; you’re selling trust.",
  overviewsubDescription: [
    "Producing it isn't just about moving liquid from a source into a plastic container it’s about a relentless commitment to hygienic design, fluid dynamics, and sterile controls. Consumers at the top tiers of the industry are becoming increasingly educated. They are demanding perfect clarity, complete safety, and purity in terms of the flavour of every bottle of drinking water they purchase.",
    "In order to satisfy these consumers, bottling plants have to think smarter by creating architectural designs that ensure no contamination occurs before it enters the facility. For designing an effective system for Still Water, one cannot simply rely on ready made equipment. Rather, there needs to be a sophisticated multi-barrier approach that takes into account the chemistry of water without sacrificing efficiency.",
    "The combination of precision engineering and effective filtration helps us create state of the art bottling plants that provide our clients with perfect drinking water. With our automated, continuous flow monitoring, we ensure that every single drop passing through our lines hits the mark. We design our facilities to lock out environmental hazards, using positive pressure air zones and hermetically sealed lines to keep pathogens out, giving you complete peace of mind."
  ],
  overviewLayout: "stacked",
  overviewImage: overviewImg.src,
  contentBlocks: [
    {
      title: "Benefits of Automated Fluid Packaging",
      paragraphs: [
        "Upgrading to a fully automated Still Water line brings immediate, real world benefits: you get consistent hygiene, and your output hits a new level. Our monoblock systems save a huge amount of floor space and get rid of those open conveyors where contamination usually likes to hide.",
        "If you are focused on delivering reliable pure drinking water, this type of compact, isolated design is the new gold standard. It takes the \"human element\" out of the most sensitive parts of the process, which is the best way to prevent accidental contamination.",
        "On top of that, our blower synchronization and weight based filling mean you aren’t just producing more bottles you’re wasting less liquid and using less energy. As the demand for safe drinking water grows, keeping your uptime high is how you stay competitive. Our lines allow bottlers of still bottled water to switch between bottle sizes quickly, keeping your costs low and your return on investment high."
      ],
      image1: img1.src,
      reverse: true
    },
    {
      title: "Complete Production Line Components",
      paragraphs: [
        "The best production line for Still Water requires synchronization from the moment the preform gets blown into the bottle until the time when the bottle gets packaged. In still mineral water management, there is an elaborate pre treatment process to ensure the preservation of the minerals in the water. With the pre treatment process completed, our highly efficient blowers convert the preforms into PET bottles, balancing the amount of plastic used and the quality of the bottle. The bottles thus produced are then moved into a sterilized area, where they get rinsed using ionized air or ozone water, which eliminates all micro dust particles. If we are producing premium mineral water, 316L stainless steel valves are used throughout the entire process. Finally, our servo driven labelers and high speed wrappers unitize the still bottled water for shipping, with vision cameras at every stop to automatically kick out any bottles that don't meet your standards. It's all about keeping the line moving at top speed without sacrificing quality."
      ],
      bgClass: "bg-white",
      layout: "stacked"
    }
  ],
  featuresTitle: "Key Features of Our Processing & Packaging Systems",
  featuresSubtitle: "If you want to handle delicate still mineral water correctly, you need a clean room approach that was actually designed for hygienic isolation.",
  features: [
    { title: "Multi Stage Filtration", description: "Our core Still Water lines feature multi stage filtration that gets down to 0.2 microns. This lets us achieve commercial sterility without needing to heat the water to death, critical to keeping taste fresh." },
    { title: "Ozone Contact Tanks", description: "Handle a calculated oxidation process that clears out organic matter. Because ozone dissipates quickly, it leaves absolutely no aftertaste, maintaining the source's natural profile." },
    { title: "High Precision Monoblock Fillers", description: "Use electronic flow meters to hit filling targets with incredible accuracy, usually within a fraction of a milliliter." },
    { title: "Non Contact Capper Systems", description: "Use magnetic clutches to apply caps with consistent, perfect torque, eliminating the friction that usually creates plastic dust." }
  ],
  applicationsTitle: "Applications of Advanced Bottling Technologies",
  applicationsSubtitle: "The beauty of our Still Water technology is its versatility; it's just as effective for a massive high speed plant as it is for a boutique producer.",
  applications: [
    { title: "Mass Market Facilities", description: "If you're running a mass market facility, our rotary systems can pump out millions of liters of drinking water every day, day after day, without breaking a sweat." },
    { title: "Boutique & Smaller Plants", description: "If you're a smaller plant focused on still mineral water, you need a lighter touch. We can add specific features, like inert gas dosing, to protect the fragile mineral profile and prevent any oxidation." },
    { title: "Scalable Production", description: "Our systems are built to scale, handling everything from tiny 200ml bottles to those large 5 liter containers. For brands dealing in premium mineral water, this flexibility means your brand's reputation isn't held back by your machinery." },
    { title: "Versatile Deployment", description: "Whether you're outfitting a city based distribution hub or a remote source near the springs, our Still Water tech adapts to your specific situation." }
  ],
  whyChoose: {
    title: "Why Choose Seppa Solutions",
    description: "Global beverage leaders and family owned bottlers choose Seppa Solutions because we understand that you aren't just buying equipment you’re building a business. We know that creating a successful Still Water facility is about more than just bolting machines to the floor; it’s about mastering fluid dynamics and high speed mechanics.",
    paragraphs: [
      "Our engineers have spent years learning the nuances of still mineral water so that your final product tastes exactly like it came from the source. We have a long, proven track record of building systems for pure drinking water that just work.",
      "We use advanced isolation techniques, like HEPA filtered cabins over the filling area, to create a physical barrier against the outside world. And with our real time data tracking, you’ll always know exactly how your line is performing. When you partner with Seppa Solutions for your Still Water projects, you’re working with a team that cares about the safety of your drinking water as much as you do."
    ],
    image: over.src
  },
  methodology: {
    title: "Our Methodology for Line Implementation",
    steps: [
      {
        title: "Site Specific Analysis",
        description: "We start by doing a deep, site specific analysis of your water. This tells us exactly what the treatment train needs to be, so we only remove the bad stuff without stripping natural character.",
        image: meth1.src
      },
      {
        title: "3D Line Modeling",
        description: "Once we have the processing architecture right, we model out the whole line in 3D to make sure everything from the filler to the packer flows perfectly.",
        image: meth2.src
      },
      {
        title: "Custom Filter Tailoring",
        description: "We tailor make the filter media to suit the chemical composition of the water from your own source for our clients who manufacture high end mineral water.",
        image: meth3.src
      },
      {
        title: "Rigorous Testing & Validation",
        description: "Finally, we perform rigorous testing to confirm that all safety standards have been met before you take the reigns. That guarantees your investment yields pure water with complete reliability.",
        image: meth4.src
      }
    ]
  },
  faqTitle: "Frequently Asked Questions",
  faqs: [
    { question: "What are the main treatment requirements for Still Water?", answer: "It really depends on your source water, but we generally use a multi barrier approach. This includes multi media filtration to catch the big particles, activated carbon to clear out odors or organic compounds, and UV sterilizers combined with ozone injection. It’s the safest, most effective way to prep water for the pure drinking water market." },
    { question: "Why do lines for premium mineral water need special metallurgy?", answer: "Unlike distilled water, premium mineral water is full of natural, reactive minerals. To make sure those minerals don't react with your machine parts or leave a metallic taste, the entire path the water touches must be made of high grade 316L stainless steel with sanitary welds." },
    { question: "How does Seppa guarantee the safety of mass-produced pure drinking water?", answer: "We focus on environmental isolation. Our fillers sit inside Class 100 clean room enclosures with HEPA filtered air. We also use automated SIP (Sanitization in Place) systems that heat sterilize the internal pipes programmatically, which takes the risk of human error completely out of the equation." },
    { question: "How does handling still bottled water differ from carbonated drinks?", answer: "Because still bottled water doesn't have the carbonation that naturally helps keep bacteria away, it’s much more vulnerable. That’s why we take such extra care with the filler environment and cap sterilization we have to be much more vigilant to prevent any contamination from sneaking in after the bottle is filled." },
    { question: "Why is Seppa Solutions a leader in Still Water innovation?", answer: "We treat Still Water as a serious science. Whether it’s our precise weight based filling or our energy efficient blower sync, we build systems designed for companies that take their product seriously. We focus on hygiene, sustainability, and machines that are built to last for decades, not just a few years." }
  ]
};

const StillWaterPage = () => {
  return <PackagingPageLayout data={pageData} />;
};

export default StillWaterPage;
