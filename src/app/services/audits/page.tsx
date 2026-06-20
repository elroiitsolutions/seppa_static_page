import React from 'react';
import PackagingPageLayout, { PackagingPageData } from '@/components/packaging/PackagingPageLayout';

import bannerImg from '@/assets/processing/generated/processing_banner_1781759101340.png';
import overviewImg from '@/assets/blowing/generated/blowing_overview_1781759662496.png';
import img1 from '@/assets/processing/generated/processing_cb1_1781759122683.png';
import over from '@/assets/processing/generated/processing_whychoose_1781759182691.png';

import meth1 from '@/assets/processing/generated/processing_meth1_1781759196548.png';
import meth2 from '@/assets/processing/generated/processing_meth2_1781759215088.png';
import meth3 from '@/assets/processing/generated/processing_meth3_1781759228926.png';
import meth4 from '@/assets/processing/generated/processing_meth4_1781759240871.png';

const pageData: PackagingPageData = {
  title: "Audits",
  breadcrumbName: "Audits",
  rootBreadcrumbName: "Services",
  rootBreadcrumbPath: "/services",
  headerImage: bannerImg.src,
  overviewTitle: "Mastering Plant Efficiency: A Practical Guide to Energy Audit Services",
  overviewDescription: "Running a high capacity manufacturing plant feels like steering a massive ship through a narrow channel. But here is a basic truth from the factory floor: you cannot optimize what you do not measure.",
  overviewsubDescription: [
    "True manufacturing excellence requires absolute data transparency and clear asset visibility across your production lines. This is why professional energy audit services are a vital strategic roadmap for facility wide optimization.",
    "Independent engineering teams executing a performance audit uncover hidden resource leaks and stabilize utility spending. At Seppa Solutions, we know proper observation and deep line analysis drive long-term profitability."
  ],
  overviewImage: overviewImg.src,
  contentBlocks: [
    {
      title: "Benefits of Regular Industrial Audit Services",
      paragraphs: [
        "Periodic plant diagnostics are a vital mechanism for sustained enterprise growth. By regularly partnering with Seppa Solutions for professional energy audit services, businesses unlock significant operational advantages that directly protect the bottom line. The most immediate realization is a sharp reduction in monthly utility expenditures, achieved by eliminating compressed air leaks and optimizing thermal energy networks.",
        "Furthermore, the data compiled during a thorough performance audit empowers plant engineering teams with predictive failure detection capabilities. By understanding exact machine stresses before a breakdown occurs, plants can minimize unscheduled downtime and extend asset lifespans.",
        "Ultimately, a periodic performance audit provides executive leadership with reliable data required for long term capital expenditure planning, ensuring every modernization dollar yields maximum returns."
      ],
      image1: img1.src,
      reverse: true
    }
  ],
  featuresTitle: "Key Features of Our Industrial Audit Services",
  featuresSubtitle: "Our diagnostics focus on the invisible flows of power, air, and heat that keep your facility moving.",
  features: [
    { title: "Airborne Ultrasonic Leak Detection", description: "Identify costly compressed air leaks that silently drain compressor efficiency." },
    { title: "Thermal Imaging Scans", description: "Expose severe insulation degradation across boiler walls and uncover overheating electrical components." },
    { title: "Electrical Load Profiling", description: "Monitor power quality and evaluate voltage imbalances at main distribution panels to prevent unexpected equipment failures." },
    { title: "Objective Bottleneck Identification", description: "Examine machinery through dedicated equipment audits to ensure all components perform optimally as per their original design." }
  ],
  applicationsTitle: "Industries Served with Specialized Audit Services",
  applicationsSubtitle: "Pneumatic bottling lines face entirely different challenges than a high care pharmaceutical cleanroom. Seppa delivers customized facility reviews tailored to specific market demands.",
  applications: [
    { title: "FMCG or Liquid Packaging", description: "Focus centers on high speed line synchronization, mass balance verification, and minimizing liquid product giveaway." },
    { title: "Chemical Processing", description: "Deep analysis of thermal dynamics and aggressive wear vectors to optimize heavy manufacturing environments." }
  ],
  whyChoose: {
    title: "Why Choose Seppa Solutions for Audit Services",
    description: "Selecting an audit partner requires finding an organization that combines deep theoretical engineering pedigree with practical, hands on field experience.",
    paragraphs: [
      "Major global manufacturing brands and leading FMCG firms continuously trust Seppa Solutions to deliver their energy audit services because we do not just deliver generic checklists; we provide actionable engineering blueprints. Our highly trained and knowledgeable engineers possess deep experience diagnosing complex process interactions, fluid dynamics, and automated packaging systems.",
      "We excel at conducting an exhaustive performance audit that translates dense electrical and thermal data into transparent financial metrics. Our commitment to objectivity means our industrial inspection services are entirely data driven, utilizing advanced calibrated instrumentation to back up every observation.",
      "When you choose Seppa Solutions for specialized energy audit services, you are partnering with a dedicated consultant devoted to transforming hidden resource leaks into measurable, bottom line profitability."
    ],
    image: over.src
  },
  methodology: {
    title: "Our Proven Audit Service Methodology",
    steps: [
      {
        title: "Pre Audit Intake",
        description: "Reviewing historical utility bills, single line electrical diagrams, and process flowcharts to establish an initial plant profile and map boundaries.",
        image: meth1.src
      },
      {
        title: "Systematic Execution",
        description: "Deploying specialized diagnostic tools to measure real time power draws, mass flow rates, and thermal losses across the factory floor.",
        image: meth2.src
      },
      {
        title: "Data Synthesis & Gap Analysis",
        description: "Building a baseline model to isolate structural inefficiencies, culminating in a multi tiered report highlighting critical utility savings.",
        image: meth3.src
      },
      {
        title: "Post Audit Implementation",
        description: "Assisting internal engineering teams in deploying our recommended improvements to optimize productivity, enhance hygiene, and reduce energy consumption.",
        image: meth4.src
      }
    ]
  },
  faqTitle: "Frequently Asked Questions",
  faqs: [
    { question: "How often should our facility schedule a professional manufacturing process audit?", answer: "For high capacity facilities on multi shift schedules, we recommend a comprehensive manufacturing process audit every 12 to 24 months. Regular intervals ensure that minor operational drift does not compound into major bottlenecks." },
    { question: "What are the tangible savings uncovered during a standard energy audit?", answer: "A standard industrial energy audit typically uncovers immediate energy savings between 15% and 30%. These reductions are achieved through low cost corrections like optimizing air compressor setpoints and fixing steam traps." },
    { question: "What do specialized equipment audits reveal about long term maintenance needs?", answer: "Targeted equipment audits look deep into the mechanical health of your machinery, revealing hidden bearing wear, shaft misalignments, and lubrication breakdown to provide a predictive maintenance roadmap." },
    { question: "Why should we rely on professional industrial inspection services instead of our internal maintenance team?", answer: "Professional industrial inspection services provide an unbiased third party perspective backed by advanced diagnostic equipment that standard toolboxes lack, allowing plants to see hidden inefficiencies." },
    { question: "How do the energy audit services provided by Seppa Solutions lead in facility wide diagnostic innovation?", answer: "The energy audit services from Seppa Solutions combine thermodynamic analysis with software and mechanical reviews to ensure that there is no inefficiency due to the control and instrumentation system integrating equipment." }
  ]
};

const AuditsPage = () => {
  return <PackagingPageLayout data={pageData} />;
};

export default AuditsPage;
