import React from 'react';
import PackagingPageLayout, { PackagingPageData } from '@/components/packaging/PackagingPageLayout';

import bannerImg from '@/assets/processing/generated/processing_banner_1781759101340.png';
import overviewImg from '@/assets/blowing/generated/blowing_overview_1781759662496.png';
import img1 from '@/assets/processing/generated/processing_cb1_1781759122683.png';
import img2 from '@/assets/processing/generated/processing_cb2_1781759136791.png';
import over from '@/assets/processing/generated/processing_whychoose_1781759182691.png';

import meth1 from '@/assets/processing/generated/processing_meth1_1781759196548.png';
import meth2 from '@/assets/processing/generated/processing_meth2_1781759215088.png';
import meth3 from '@/assets/processing/generated/processing_meth3_1781759228926.png';
import meth4 from '@/assets/processing/generated/processing_meth4_1781759240871.png';

const pageData: PackagingPageData = {
  title: "Air Dryers & Bottling Support",
  breadcrumbName: "Air Dryers",
  rootBreadcrumbName: "Equipments",
  rootBreadcrumbPath: "/equipments",
  headerImage: bannerImg.src,
  overviewTitle: "Why Dew Point Control Decides Whether Your Bottling Line Runs or Stops",
  overviewDescription: "Compressed air looks clean. Honestly, it’s not. Right out of the compressor, that air is a mess packed with water vapor, oil mist, and abrasive particles just waiting to wreck your pneumatic components down the line.",
  overviewsubDescription: [
    "On an RFC (Rinsing, Filling, and Capping) monoblock, that contamination doesn't just stay trapped safely in the main piping. It migrates straight into your valve actuators, indexing cylinders, and sterile air blow off nozzles.",
    "Once inside, that moisture condenses, corrodes valve seats, and turns what should be a precise, synchronized operation into an unpredictable, erratic headache.",
    "This is where air dryers earn their place in the utility room. A bottle filling machine depends on dozens of pneumatic actuations per minute, and each one needs dry, oil free air to behave predictably. Remove the moisture before it reaches the RFC machine's pneumatic header, and you eliminate one of the most common, and least visible, causes of unplanned downtime on a bottle packaging machine or any liquid filling machine running at production speed."
  ],
  overviewImage: overviewImg.src,
  contentBlocks: [
    {
      title: "What Separates a Good Air Dryer from an Adequate One",
      paragraphs: [
        "Modern refrigerated air dryers aren't just air conditioners bolted onto a compressor line. The better units use thermal mass designs that store cooling capacity, so the refrigeration compressor doesn't run constantly just to hold a stable dew point, which matters when energy costs are a real line item rather than an afterthought.",
        "High capacity filtration sits both ahead of and behind the cooling stage, catching oil aerosols and particulate before air reaches the RFC machine. Constant dew point monitoring, instead of a one-time factory setting, lets the system adjust to seasonal humidity swings rather than quietly drifting out of spec over a few months.",
        "For a bottle filling machine running three shifts, these aren't nice to haves. They're what keeps a bottle packaging machine's pneumatic logic, the valves, sensors, and actuators that choreograph every cycle, working the same way in August as it does in January."
      ],
      image1: img1.src,
      reverse: true
    },
    {
      title: "Inside a Refrigerated Air Dryer",
      paragraphs: [
        <div key="cooling" className="space-y-4 text-left">
          <h4 className="text-xl font-bold text-[#101934]">The Cooling Stage</h4>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            The thermodynamic cycle behind a refrigerated air dryer is simple in concept, even if the engineering to do it efficiently is not. Hot, moisture laden air from the compressor first passes through an air to air heat exchanger, giving up some of its heat to outgoing dry air. It then enters a refrigerant cooled exchanger, where the temperature drops low enough to push the air toward its pressure dew point, typically somewhere between 3°C and 10°C for industrial applications.
          </p>
          <h4 className="text-xl font-bold text-[#101934] mt-8">Condensation and Reheat</h4>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            At that point, water vapor condenses into liquid and is separated out and drained automatically. The air then passes back through the first heat exchanger, picking up heat again so it doesn't arrive at the RFC machine ice cold and prone to forming condensation on contact with warmer components downstream.
          </p>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            This reheat step matters more than people expect. Cold, damp air reaching a bottle filling machine's sensors can cause false triggers, and an RFC machine misreading its own sensors is an RFC machine about to throw an unplanned stop.
          </p>
        </div>
      ],
      image1: img2.src,
      reverse: false
    },
    {
      title: "Keeping the System Running: Maintenance That Actually Matters",
      paragraphs: [
        "None of this works if the dryer itself gets neglected. Condensate drains are usually the first thing to fail. Float type drains stick open or stick closed, and either failure causes problems, from wasted compressed air to moisture passing straight through to the RFC machine's pneumatic lines.",
        "Filter elements have a service life measured in operating hours, not calendar months, though most maintenance schedules track them by the latter anyway. A pre filter that's overdue for replacement increases pressure drop, which forces the dryer to work harder and can push the dew point higher than the spec sheet promises.",
        "For a bottle packaging machine running continuously, even a two or three degree shift in dew point can be the difference between a clean production run and a shift spent chasing intermittent valve faults that look, at first glance, like an electrical problem."
      ],
      image1: img1.src,
      reverse: true
    },
    {
      title: "Sizing it Right: Flow Rate, Pressure, and ISO 8573.1",
      paragraphs: [
        "Specifying an air dryer for bottling support comes down to matching three numbers to your line: volume flow rate, usually in cubic meters per minute or scfm, maximum operating pressure, and target pressure dew point. Undersize the flow rate and the dryer can't keep up during peak demand, which usually shows up as moisture problems only during the busiest part of a shift.",
        "Most beverage grade applications target ISO 8573.1 Class 4 or better for particulates, water, and oil content, the standard reference for air quality in food and beverage manufacturing. A high performance liquid filling machine running at high cycle rates is more sensitive to dew point excursions than a slower line, simply because there's less time between cycles for residual moisture to evaporate before the next one starts.",
        "For an RFC machine integrated with a water bottle filling machine, we typically size dryers with 15 to 20 percent headroom above calculated demand to account for line expansion and seasonal variation."
      ],
      image1: img2.src,
      reverse: false
    }
  ],
  applicationsTitle: "Where High Purity Air Becomes Non Negotiable",
  applications: [
    { title: "Standard PET Containers", description: "A water bottle filling machine handling standard PET containers needs air dry enough that condensation doesn't form inside the bottle neck during blow off. Any residual moisture there becomes a place for bacteria to grow before the cap goes on." },
    { title: "Glass Water Bottle Lines", description: "Glass doesn't flex the way PET does, so an RFC machine running glass containers depends even more heavily on precise pneumatic timing for indexing and orientation. A glass water bottle that arrives at the capping head a fraction of a second off cycle can chip, jam the line, or break outright." },
    { title: "Pharmaceutical & Dairy Processing", description: "Beyond beverages, the same dryers support pharmaceutical packaging, dairy processing, and food-grade aerosol filling, anywhere compressed air comes into contact with a product or its container." }
  ],
  whyChoose: {
    title: "Why Plants Choose Seppa Solutions for Air Drying",
    description: "We've built air drying systems for beverage plants that run three shifts and cannot afford a line stop over something as basic as a stuck condensate drain. That experience shapes how we spec equipment.",
    paragraphs: [
      "We would rather size a dryer slightly larger than the calculated minimum than have a customer call us in month four asking why their RFC machine keeps throwing pneumatic faults during humid weeks.",
      "Our designs favour compact footprints, because utility rooms are usually the last thing anyone plans space for, and PLC integration that talks to your existing line controls rather than running as an isolated box.",
      "Whether you are running a single bottle filling machine or a multi line bottle packaging machine with several water bottle filling machine cells side by side, the dryer should be sized and controlled as part of that system, not added on afterward. For plants running a liquid filling machine on viscous or temperature sensitive products, we also factor in how dryer placement affects ambient heat load near the filling heads."
    ],
    image: over.src
  },
  methodology: {
    title: "Methodology: Our Air Drying Process",
    steps: [
      {
        title: "Intake Filtration",
        description: "Intake filtration removes bulk particulate and oil aerosols.",
        image: meth1.src
      },
      {
        title: "Refrigerated Cooling",
        description: "Refrigerated cooling brings the air down to its pressure dew point.",
        image: meth2.src
      },
      {
        title: "Moisture Separation",
        description: "Moisture separation pulls out condensed water before it can re enter the airstream.",
        image: meth3.src
      },
      {
        title: "Conditioned Distribution",
        description: "The conditioned air is then distributed to the RFC machine's pneumatic headers through dedicated, properly sized piping. We size piping runs based on the actual layout, not a generic chart.",
        image: meth4.src
      }
    ]
  },
  faqTitle: "Frequently Asked Questions",
  faqs: [
    {
      question: "How does moisture affect an RFC machine?",
      answer: "Even small amounts of condensation inside an RFC machine's pneumatic system can corrode valve seats, cause cylinders to stick mid stroke, and introduce bacteria into the sterile air used for bottle blow off. Most of the intermittent faults we get called out for trace back to a dew point that has drifted higher than spec without anyone noticing."
    },
    {
      question: "Why do glass water bottle lines need such dry air?",
      answer: "A glass water bottle does not deform the way a PET bottle does, so timing has to be close to exact during indexing and capping. Moisture in the pneumatic system causes small delays in actuator response, and on a glass water bottle line those delays show up as chips, jams, or breakage rather than a cosmetic defect."
    },
    {
      question: "What is the payback period on a high efficiency dryer for a bottle packaging machine?",
      answer: "It depends on your current downtime from pneumatic faults, but most plants we have worked with see the dryer pay for itself within 12 to 18 months through reduced unplanned stops and lower compressed air waste alone."
    },
    {
      question: "Do water bottle filling machine and liquid filling machine lines need different dew point targets?",
      answer: "Not usually for the dryer itself, but a liquid filling machine running viscous or hot fill products may need extra attention to ambient heat near the dryer intake, since warm intake air holds more moisture and makes the dryer work harder."
    },
    {
      question: "Why work with Seppa Solutions on bottling support air systems?",
      answer: "We spec, size, and integrate dryers as part of the wider line rather than as a standalone box, which is usually where the gap is between a dryer that looks right on paper and one that actually holds dew point under real production load."
    }
  ]
};

const AirDryerPage = () => {
  return <PackagingPageLayout data={pageData} />;
};

export default AirDryerPage;
