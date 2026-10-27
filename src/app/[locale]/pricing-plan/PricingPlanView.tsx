"use client";
import React from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { FiCheck, FiX } from 'react-icons/fi';
import PageHeader from '@/components/layout/PageHeader';
import AnimatedHeading from '@/components/ui/AnimatedHeading';

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    }
  }
};

const pricingPlans = [
  {
    name: "Modular Unit System",
    price: "Custom",
    billing: "per machine",
    description: "Ideal for boutique beverage producers seeking standalone blowing, filling, or labeling units.",
    features: [
      { text: "Semi-automatic or automatic single machines", included: true },
      { text: "Standard 2,000 - 4,000 BPH throughput", included: true },
      { text: "Compact factory footprint", included: true },
      { text: "1-Year comprehensive warranty", included: true },
      { text: "Full turnkey line synchronization", included: false },
    ],
    isPopular: false,
    buttonText: "Request Machine Quote"
  },
  {
    name: "Commercial Turnkey Line",
    price: "Turnkey",
    billing: "complete line",
    description: "Integrated Monobloc (RFC), Electric PET Blower, and automated conveyor system.",
    features: [
      { text: "High-speed 6,000 - 18,000 BPH capacity", included: true },
      { text: "Aseptic non-contact filling technology", included: true },
      { text: "Complete line synchronization & SCADA", included: true },
      { text: "Turnkey on-site installation & commissioning", included: true },
      { text: "24/7 dedicated engineering support", included: true },
    ],
    isPopular: true,
    buttonText: "Get Line Consultation"
  },
  {
    name: "Enterprise Mega-Plant",
    price: "Enterprise",
    billing: "EPC project",
    description: "End-to-end beverage plant automation with raw water processing, pasteurization & robotic palletizing.",
    features: [
      { text: "18,000 - 36,000+ BPH ultra-high speed", included: true },
      { text: "Fully automated four-axis robotic stacking", included: true },
      { text: "CIP/SIP automated sanitization stations", included: true },
      { text: "Custom factory layout & structural engineering", included: true },
      { text: "Priority worldwide spare parts & SLA", included: true },
    ],
    isPopular: false,
    buttonText: "Contact EPC Team"
  }
];

const PricingPlanView = () => {
  return (
    <div className="bg-light min-h-screen">
      <PageHeader 
        title="Equipment Packages" 
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Equipment Packages" }
        ]} 
      />

      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-24">
            <AnimatedHeading 
              text="Engineered Plant Solutions Tailored To Your Output" 
              elementType="h2" 
              className="text-4xl md:text-5xl font-heading font-bold text-dark mb-6" 
            />
            <p className="text-gray-600 text-lg">
              Scalable bottling and liquid packaging lines backed by 50 years of global engineering excellence.
            </p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center"
          >
            {pricingPlans.map((plan, index) => (
              <motion.div 
                key={index} 
                variants={cardVariants}
                className={`relative bg-white rounded-[2rem] p-8 lg:p-10 shadow-sm hover:shadow-xl transition-all duration-300 ${
                  plan.isPopular ? 'border-2 border-seppa-red transform lg:-translate-y-4 shadow-lg' : 'border border-gray-100'
                }`}
              >
                {plan.isPopular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-seppa-red text-white text-sm font-bold uppercase tracking-wider py-1.5 px-4 rounded-full shadow-md">
                      Recommended Line
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8 border-b border-gray-100 pb-8">
                  <h3 className="text-2xl font-heading font-bold text-dark mb-4">{plan.name}</h3>
                  <p className="text-gray-500 mb-6 min-h-[48px]">{plan.description}</p>
                  <div className="flex justify-center items-center gap-1">
                    <span className="text-4xl font-heading font-bold text-dark leading-none">{plan.price}</span>
                    <span className="text-gray-500 font-medium ml-2">/ {plan.billing}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className={`mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs ${
                        feature.included ? 'bg-seppa-red/10 text-seppa-red' : 'bg-gray-100 text-gray-400'
                      }`}>
                        {feature.included ? <FiCheck strokeWidth={3} /> : <FiX strokeWidth={3} />}
                      </span>
                      <span className={feature.included ? 'text-gray-700' : 'text-gray-400 line-through'}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link 
                  href="/contact-us"
                  className={`w-full h-14 rounded-full font-bold flex items-center justify-center transition-colors duration-300 ${
                    plan.isPopular 
                      ? 'bg-seppa-red text-white hover:bg-dark' 
                      : 'bg-dark text-white hover:bg-seppa-red'
                  }`}
                >
                  {plan.buttonText}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PricingPlanView;
