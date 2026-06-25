import React from 'react';
import PackagingPageLayout, { PackagingPageData } from '@/components/packaging/PackagingPageLayout';

import meth1 from '@/assets/processing/generated/processing_meth1_1781759196548.png';
import meth2 from '@/assets/processing/generated/processing_meth2_1781759215088.png';
import meth3 from '@/assets/processing/generated/processing_meth3_1781759228926.png';
import meth4 from '@/assets/processing/generated/processing_meth4_1781759240871.png';

const pageData: PackagingPageData = {
  title: "Hydraulic Oil Chiller Systems for Industrial Machinery",
  breadcrumbName: "Hydraulic Chillers",
  rootBreadcrumbName: "Equipments",
  rootBreadcrumbPath: "/equipments",
  headerImage: "/images/equipments/hydraulic_chiller_banner.png",
  overviewTitle: "Hydraulic Oil Chiller Systems",
  overviewDescription: "Most plant engineers don't think about their hydraulic oil until something goes wrong. A press starts drifting. A moulding line cycles inconsistently. A CNC machine loses positional accuracy mid shift. And nine times out of ten, it's not the pump or the valve block that's failed. It's the oil temperature.",
  overviewsubDescription: [
    "By the time the symptoms are obvious, the fluid's been degrading for hours sometimes longer.",
    "A correctly specified hydraulic oil chiller stops that problem before it starts."
  ],
  overviewImage: "/images/equipments/chiller_overview.png",
  contentBlocks: [
    {
      title: "The Theory Behind Hydraulic Oil Chillers",
      paragraphs: [
        "The theory is simple. The hydraulic oil chiller extracts heat from the hydraulic oil flow and sends the oil back to an optimum operating temperature, which is often within 35°C to 55°C, depending upon the type of oil and the pressure in the system. Why does it even matter? There is constant generation of heat in hydraulic equipment. Due to inefficiencies in the pump and losses due to the valve drop and actuator friction, the heat builds up in the system much faster than it dissipates by itself.",
        "Thinner oil means thinner films across pump faces, valve spools, and cylinder seals the parts that are expensive and time consuming to replace. Seppa's I-HOC (Industrial Hydraulic Oil Chiller) is built around internal gear pumps and plate heat exchangers. It handles oils from 32 to 68 CST viscosity, which covers the full range of ISO VG 32 through VG 68 hydraulic fluids in common industrial use.",
        "The gear pump choice isn't arbitrary internal gear designs run quieter than external gear alternatives and handle mid viscosity oils more cleanly at the flow rates these systems require."
      ],
      image1: "/images/equipments/chiller_overview.png",
      reverse: true
    },
    {
      title: "Key Features & Performance Advantages for Efficient Cooling",
      paragraphs: [
        "There's a difference between an engineered hydraulic cooling system and a generic cooler bolted onto a reservoir. The difference shows up in how the unit handles varying load conditions not just at steady state.",
        "Plate Exchangers Over Air Blast Cooling: Seppa's hydraulic oil cooling units use plate type heat exchangers. Plate exchangers pack far more heat transfer area into a compact footprint than air blast alternatives, and they do it at lower pressure drop on the oil side. That matters because back pressure from the cooling circuit is parasitic it makes the hydraulic pump work harder for no useful output.",
        "Closed Loop Temperature Control: If the hydraulic oil chiller is operating at maximum capacity regardless of the heat load present, it will be energy intensive and will overcool at times of reduced heat load. The Seppa chillers have a closed loop feedback system wherein an electronic sensor measures the temperature of the oil being returned back. The oil stays at setpoint without the chiller hunting or cycling unnecessarily. This is what separates an active hydraulic oil cooling system from passive arrangements. It responds to what's actually happening in the circuit, not to ambient conditions."
      ],
      image1: "/images/equipments/chiller_overview.png",
      reverse: false,
      bgClass: "bg-light"
    }
  ],
  featuresTitle: "Benefits of Hydraulic Oil Temperature Control in Industrial Systems",
  featuresSubtitle: "The operational case for a hydraulic oil cooling unit isn't complicated. It comes down to four things that show up in maintenance records.",
  features: [
    { title: "Fluid life", description: "hydraulic oil cooler oxidises faster at elevated temperatures roughly doubling in degradation rate for every 10°C above 60°C. Holding oil at 45°C instead of 70°C can double or triple drain intervals. At industrial fluid volumes, that's meaningful cost avoidance." },
    { title: "Seal and actuator service life", description: "Seals are designed for a viscosity range. Run oil too hot, and you're running undersized films across the sealing surfaces. Premature leaks follow. Cylinder rod seals on production presses are particularly expensive to replace because the machine has to stop." },
    { title: "Machine accuracy", description: "Thermal expansion changes dimensions in valve bodies, cylinders, and manifold blocks. On tight tolerance equipment injection moulding presses, horizontal machining centres that drift shows up as dimensional variation in the product. A stable hydraulic cooling system keeps the machine at its calibrated condition throughout a shift, not just at startup." },
    { title: "Repair cost versus chiller cost", description: "A hydraulic pump rebuild costs more than a year of chiller operating costs. That's before counting production losses. The arithmetic isn't difficult." }
  ],
  applicationsTitle: "Industrial Applications Across Various Industries",
  applicationsSubtitle: "Industries that routinely specify a hydraulic oil cooling unit.",
  applications: [
    { title: "Injection Moulding & Die Casting", description: "Any process where hydraulic circuits run long hours under high duty cycles is a candidate for active chilling." },
    { title: "Press Lines & CNC Machining", description: "Essential for maintaining positional accuracy and consistent cycle times in press lines and CNC machining centres." },
    { title: "Rubber Processing & Automated Packaging", description: "Routinely specified to ensure reliable continuous operations under demanding conditions." }
  ],
  whyChoose: {
    title: "Why Choose Seppa Solutions for Reliable Hydraulic Oil Chillers",
    description: "",
    paragraphs: [
      "Seppa builds hydraulic oil chillers as complete, self contained units. The pump, heat exchanger, refrigerant circuit, and control system are sized to work together not assembled from general purpose components and handed over with an integration problem. The I-HOC unit connects to the hydraulic return line and the electrical supply. Commissioning is typically measured in hours.",
      "The engineering starts with the oil, not the catalogue. Selecting heat exchanger geometry for a given viscosity, matching pump flow to the system's peak heat load, specifying controls that handle both light cycle and heavy cycle conditions without instability these are decisions that need to be made at the design stage, not resolved on site after delivery.",
      "Seppa's installed base runs across injection moulding operations, press shops, die casting facilities, and automated manufacturing lines. The hydraulic oil cooling system is a standard specification on repeat orders from those clients which is usually a better indicator of unit performance than any technical brochure. If you're sizing a new hydraulic oil chiller or replacing an undersized cooler on an existing line, Seppa's team can work from your hydraulic circuit data pump flow rate, operating pressure, peak heat load and specify the right unit for the application."
    ],
    image: "/images/equipments/chiller_overview.png"
  },
  methodology: {
    title: "Working Methodology & Cooling Process for Temperature Control",
    steps: [
      {
        title: "Hot oil enters the cooling circuit",
        description: "Return line oil typically 10 to 20°C above target after a full production run enters the chiller's oil side inlet.",
        image: meth1.src
      },
      {
        title: "Oil passes through heat exchanger",
        description: "hydraulic oil cooler fluid flows across one side of the plates. Chilled refrigerant circulates on the other. Heat transfers from oil to refrigerant. The oil exits cooler.",
        image: meth2.src
      },
      {
        title: "Refrigerant side heat rejection",
        description: "The absorbed heat moves through the refrigerant circuit to the condenser air cooled or water cooled depending on site conditions and is rejected to atmosphere or a cooling tower.",
        image: meth3.src
      },
      {
        title: "Temperature feedback and modulation",
        description: "The controller reads the oil outlet temperature. If it's within setpoint, the compressor modulates down. If temperature rises during a heavy production cycle, the compressor ramps up. No manual intervention needed.",
        image: meth4.src
      }
    ]
  },
  faqTitle: "Frequently Asked Questions",
  faqs: [
    {
      question: "How do I size a hydraulic oil chiller correctly?",
      answer: "Sizing is based on heat load typically 20 to 30% of total hydraulic power input in continuous duty systems, though servo intensive circuits run higher. You need pump flow rate, system pressure, and duty cycle to calculate it. Undersizing is the most common mistake. Seppa's team can run the sizing calculation from your circuit data before any commitment is made."
    },
    {
      question: "Does a hydraulic oil cooler reduce energy use?",
      answer: "Indirectly, then, yes. The oil with proper viscosity will ensure that the hydraulic pump works at optimum efficiency. If the oil is overheated, there will be excessive internal slippage of the hydraulic pump, thereby wasting energy. While the chiller uses energy, if the machine is properly designed with a variable speed compressor, it will cost less to operate than the production loss and pump deterioration."
    },
    {
      question: "What maintenance does a hydraulic oil cooling system need?",
      answer: "Annual refrigerant circuit checks by a qualified technician, plate heat exchanger cleaning if oil contamination is present, and filter element replacement on the oil side circuit. Seppa units include integrated filtration as standard, which extends both oil service intervals and heat exchanger service life. Control system setpoint accuracy should be verified at each scheduled maintenance visit."
    },
    {
      question: "Air cooled versus water cooled hydraulic cooling systems which is right?",
      answer: "Air cooling models are easier to install and suitable for environments where temperatures do not exceed 35 degrees Celsius. Water cooled models have proven to be more energy efficient in environments that are warm and where there is high heat load, but such models will need cooling towers and treatment of water. Seppa offers all."
    },
    {
      question: "What viscosity range does Seppa's hydraulic oil chiller handle?",
      answer: "The I-HOC handles oils from 32 to 68 CST covering ISO VG 32, VG 46, and VG 68 hydraulic fluids. That's the operating range for the large majority of industrial hydraulic systems. If your application runs an unusual fluid grade or extended viscosity requirement, Seppa's engineering team can advise on the appropriate configuration."
    }
  ]
};

const HydraulicChillersPage = () => {
  return <PackagingPageLayout data={pageData} />;
};

export default HydraulicChillersPage;
