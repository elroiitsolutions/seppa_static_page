import React from 'react';
import PackagingPageLayout, { PackagingPageData } from '@/components/packaging/PackagingPageLayout';

// Reusing generic industrial processing images due to generation limits
import bannerImg from '@/assets/processing/generated/processing_banner_1781759101340.png';
import overviewImg from '@/assets/blowing/generated/blowing_overview_1781759662496.png';
import img1 from '@/assets/processing/generated/processing_cb1_1781759122683.png';
import img2 from '@/assets/processing/generated/processing_cb2_1781759136791.png';
import img3 from '@/assets/blowing/generated/blowing_cb3_1781759707330.png';
import over from '@/assets/processing/generated/processing_whychoose_1781759182691.png';
import Link from 'next/link';
import meth1 from '@/assets/processing/generated/processing_meth1_1781759196548.png';
import meth2 from '@/assets/processing/generated/processing_meth2_1781759215088.png';
import meth3 from '@/assets/processing/generated/processing_meth3_1781759228926.png';
import meth4 from '@/assets/processing/generated/processing_meth4_1781759240871.png';

const pageData: PackagingPageData = {
  title: "SEPPA SSB SLE Electric PET Blower",
  breadcrumbName: "Electric PET Blower",
  rootBreadcrumbName: "Equipments",
  rootBreadcrumbPath: "/equipments",
  headerImage: bannerImg.src,
  overviewTitle: "The Servo Driven Future of Container Manufacturing",
  overviewDescription: "Walk onto most PET bottling floors and you'll hear it before you see it: pneumatic cylinders firing away, chasing compressed air that costs money whether it's doing useful work or leaking out of a worn fitting. The SEPPA SSB SLE electric PET blower gets rid of that noise, and a good chunk of the energy waste pneumatic-dominant systems have carried for decades.",
  overviewsubDescription: [
    "An electric pet blowing machine replaces the compressed air cylinders that drive stretch rods and clamping mechanisms with servo motors. That's the short version. The longer version is that this swap touches almost everything downstream: repeatability, energy draw, maintenance schedules, even the acoustic profile of the production floor.",
    "Traditional pneumatic blow molding relies on air pressure to move parts, and air is compressible, so the exact position of a stretch rod at any given millisecond drifts. An electric pet system doesn't have that problem. Servo motors hold position electronically, so the same stretch profile repeats bottle after bottle, shift after shift. For a pet bottle blowing machine running 24/7, that consistency is the difference between a wall thickness spec you can defend to a client and one you're constantly chasing.",
    "There's also the chiller question. Pneumatic systems generate compressed air through processes that dump heat into the plant, and that heat has to go somewhere, usually into a chiller loop that's running just to counteract a subsystem the machine didn't strictly need. Strip out the pneumatics and the pet blow moulding machine's architecture sidesteps a meaningful slice of that thermal load entirely."
  ],
  overviewImage: overviewImg.src,
  contentBlocks: [
    {
      title: "Features of the SEPPA SSB-SLE Electric PET Blower",
      paragraphs: [
        "The SSB-SLE line is built around a handful of engineering decisions that matter more than they sound like they should. Start with the stretch rods. Each axis runs on its own high torque servo motor, with electronic cam profiling standing in for the mechanical cams and pneumatic dashpots older machines rely on. Changing a stretch curve means a few minutes on the HMI, not swapping hardware.",
        "Clamping works the same way. Mold clamping on a pet blow moulding machine has to hit a narrow window: enough force to prevent flash, not so much that you're wearing out tooling faster than you should. Servo electric clamping lets the operator dial in exact tonnage and hold it there, mold after mold.",
        "Then there's energy recovery. When a servo motor decelerates, that kinetic energy has to go somewhere, and on the SSB-SLE it gets fed back into the drive bus instead of dissipated as heat. It's a quiet reason an electric pet bottle manufacturing machine pulls less from the grid than its pneumatic counterpart. A high performance pet bottle manufacturing machine really does need electric drives to hit this level of part consistency. Pneumatics can't match the positional accuracy servo motors deliver by default, not without a lot of expensive compensation hardware bolted on afterward."
      ],
      image1: img1.src,
      reverse: true
    },
    {
      title: "Applications of the Electric PET Blowing Machine",
      paragraphs: [
        "The versatility here surprises people who assume \"servo driven\" means \"built for one narrow application.\" High speed mineral water lines are the obvious fit. High volume, tight margins, every second of cycle time matters. But the same electric pet blow moulding machine platform handles cosmetic and personal care containers just as well, where bottle geometry gets fussy and preform wall distribution has almost no room for error.",
        "Carbonated soft drink lines lean on the pressure resistance that comes from consistent stretch-blow ratios, something a pet bottle blowing machine with servo control delivers far more reliably than one fighting air pressure drift.",
        "Edible oil and pharmaceutical adjacent packaging benefit from the reduced particulate risk. No compressed air blasting through the work area means fewer contamination pathways in clean room adjacent settings. Across all of it, the pet bottle making machine approach holds up as a quiet, sustainable option regardless of what's going into the bottle afterward."
      ],
      image1: img2.src,
      reverse: false,
      bgClass: "bg-light"
    },
    {
      title: "Benefits of Using an Electric PET Blowing Machine",
      paragraphs: [
        "Lower energy consumption is the headline number, and it holds up: servo motors only draw power when they're doing work, unlike a compressed air system that leaks capacity constantly through fittings, valves, and long pneumatic runs. But the second order benefits matter almost as much.",
        "On any pet bottle manufacturing machine, mechanical wear drops because there's no reciprocating pneumatic cylinder wearing seals down cycle after cycle. Hydraulic oil contamination, a real headache in some legacy blow molding designs, simply isn't a factor here, since there's no hydraulic circuit to leak in the first place. Maintenance shifts from \"replace worn pneumatic components on a schedule\" to \"monitor servo drive diagnostics,\" which is a very different kind of maintenance conversation with your plant manager.",
        "Put it together and the electric pet platform ends up being the cleanest pet bottle making machine option on the market for a facility trying to cut both energy cost and unplanned downtime at the same time."
      ],
      image1: img3.src,
      reverse: true
    }
  ],
  whyChoose: {
    title: "Why Choose SEPPA Solutions for Electric PET Blowing Machines",
    description: "We didn't back into electric drive expertise. Servo synchronization across multiple axes is a control systems problem as much as a mechanical one, and it's where a lot of integrators fall short.",
    paragraphs: [
      "The mechanical hardware is available off the shelf, but tuning six or eight servo axes to move in concert, cycle after cycle, at commercial line speeds, takes years of accumulated tuning data.",
      "That's the track record major FMCG brands are actually buying when they choose an electric pet bottle manufacturing machine from SEPPA: not just the motor count on the spec sheet, but the uptime history behind the control architecture.",
      "Our engineering team designs each pet bottle making machine installation around the specific preform geometry and output target a client brings us, rather than shipping a one size fits all unit and hoping it fits."
    ],
    image: over.src
  },
  methodology: {
    title: "Methodology of the Electric PET Blowing Machine",
    steps: [
      {
        title: "Preform Loading",
        description: "Preforms drop into the heating carousel via a starwheel or robotic pick, oriented neck up for precise handling.",
        image: meth1.src
      },
      {
        title: "Servo Optimized Thermal Conditioning",
        description: "Infrared lamp banks bring the preform body to its stretch ready temperature window while the neck finish stays cool and dimensionally stable.",
        image: meth2.src
      },
      {
        title: "High Precision Electric Clamping",
        description: "The mold halves close under servo controlled force: fast approach, then a controlled final clamp that avoids the shock loading pneumatic clamps are prone to.",
        image: meth3.src
      },
      {
        title: "Synchronized Servo Stretching & Ejection",
        description: "The stretch rod extends on its own electronically profiled curve while blow air inflates the preform against the mold wall. The finished container releases, cools briefly, and moves to the next station.",
        image: meth4.src
      }
    ]
  },
  faqTitle: "Frequently Asked Questions",
  faqs: [
    {
      question: "How much energy does an electric pet blower actually save versus a traditional pneumatic unit?",
      answer: "It varies by line speed and utilization, but facilities typically see a substantial cut in compressed air related electricity draw, plus a smaller but real reduction in chiller load since there's less waste heat to remove."
    },
    {
      question: "Is a servo driven pet bottle making machine harder to maintain?",
      answer: "Generally the opposite. There are fewer wear parts overall, and servo drive diagnostics tend to flag developing issues before they cause downtime, rather than after a seal fails."
    },
    {
      question: "Why is Seppa's pet bottle blowing machine a better fit for clean room adjacent production?",
      answer: "Removing high pressure compressed air from the immediate work envelope cuts down on particulate movement and noise, both of which matter in cosmetic, pharmaceutical, and personal-care packaging lines."
    },
    {
      question: "What makes SEPPA's electric pet designs different from other servo blow molding machines?",
      answer: "Mostly the synchronization tuning. Getting multiple servo axes to hold tight timing at full production speed is where most of the engineering hours go, and it's not something you can shortcut."
    },
    {
      question: "Is SEPPA investing further in electric pet bottle manufacturing machine technology?",
      answer: "Yes. The SSB-SLE platform is under continuous refinement, particularly around energy recovery efficiency and faster changeover between preform formats."
    }
  ]
};

import { useLocale } from 'next-intl';

const ElectricPetBlowingPage = () => {
  const locale = useLocale();
  return (
    <PackagingPageLayout data={pageData} locale={locale}>
      {/* Custom Section 2: Comprehensive Lines */}
      <section className="py-16 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white mb-6 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-seppa-red"></span>
              <span className="text-xs font-semibold text-[#101934] uppercase tracking-wider">{locale === 'ar' ? 'حلول الخطوط الكاملة' : 'COMPLETE LINE SOLUTIONS'}</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#101934] leading-tight max-w-4xl mx-auto">
              {locale === 'ar' ? 'خطوط معالجة المشروبات والألبان الشاملة' : 'Comprehensive Beverage & Dairy Processing Lines'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: locale === 'ar' ? "نافخ PET" : "Seppa SSB-SL-10",
                img: img1.src,
                link: `/${locale}/blowing/pneumatic/ssb-sl-10`
              },
              {
                title: locale === 'ar' ? "تكنولوجيا المعالجة" : "Seppa SSB-SL-20",
                img: meth1.src,
                link: `/${locale}/blowing/pneumatic/ssb-sl-20`
              },
              {
                title: locale === 'ar' ? "خط تعبئة PET" : "Seppa SSB-SL-40",
                img: meth2.src,
                link: `/${locale}/blowing/pneumatic/ssb-sl-40`
              },
              {
                title: locale === 'ar' ? "خط تعبئة الزجاج" : "Seppa SSB-SL-60",
                img: meth3.src,
                link: `/${locale}/blowing/pneumatic/ssb-sl-60`
              }
            ].map((item, idx) => (
              <Link href={item.link} key={idx} className="relative rounded-[2rem] overflow-hidden group shadow-lg hover:shadow-xl transition-all duration-300 aspect-[4/3] cursor-pointer block">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white font-bold text-lg md:text-xl font-heading tracking-wide uppercase">{item.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PackagingPageLayout>
  );
};

export default ElectricPetBlowingPage;
