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
    name: "Basic Plan",
    price: "49",
    billing: "/month",
    description: "Perfect for small businesses starting their textile journey.",
    features: [
      { text: "Up to 500 meters of standard fabric", included: true },
      { text: "Basic color customization", included: true },
      { text: "Standard 3-week delivery", included: true },
      { text: "Dedicated account manager", included: false },
      { text: "24/7 priority support", included: false },
    ],
    isPopular: false,
    buttonText: "Get Started"
  },
  {
    name: "Standard Plan",
    price: "99",
    billing: "/month",
    description: "Our most popular tier for growing fashion brands.",
    features: [
      { text: "Up to 2,000 meters of premium fabric", included: true },
      { text: "Advanced color & pattern customization", included: true },
      { text: "Expedited 2-week delivery", included: true },
      { text: "Dedicated account manager", included: true },
      { text: "24/7 priority support", included: false },
    ],
    isPopular: true,
    buttonText: "Choose Standard"
  },
  {
    name: "Premium Plan",
    price: "199",
    billing: "/month",
    description: "For enterprise clients demanding the highest quality and speed.",
    features: [
      { text: "Unlimited fabric sourcing", included: true },
      { text: "Full R&D custom blend development", included: true },
      { text: "Express 1-week delivery", included: true },
      { text: "Dedicated account manager", included: true },
      { text: "24/7 priority support", included: true },
    ],
    isPopular: false,
    buttonText: "Contact Us"
  }
];

const PricingPlanView = () => {
  return (
    <div className="bg-light min-h-screen">
      <PageHeader 
        title="Pricing Plan" 
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Pricing Plan" }
        ]} 
      />

      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-24">
            <AnimatedHeading 
              text="Choose The Right Plan For Your Business" 
              elementType="h2" 
              className="text-4xl md:text-5xl font-heading font-bold text-dark mb-6" 
            />
            <p className="text-gray-600 text-lg">
              Transparent pricing with no hidden fees. Select a plan that scales with your textile manufacturing needs.
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
                  plan.isPopular ? 'border-2 border-gold transform lg:-translate-y-4 shadow-lg' : 'border border-gray-100'
                }`}
              >
                {plan.isPopular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-white text-dark text-sm font-bold uppercase tracking-wider py-1.5 px-4 rounded-full shadow-md">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8 border-b border-gray-100 pb-8">
                  <h3 className="text-2xl font-heading font-bold text-dark mb-4">{plan.name}</h3>
                  <p className="text-gray-500 mb-6 min-h-[48px]">{plan.description}</p>
                  <div className="flex justify-center items-end gap-1">
                    <span className="text-3xl font-bold text-gold">$</span>
                    <span className="text-6xl font-heading font-bold text-dark leading-none">{plan.price}</span>
                    <span className="text-gray-500 font-medium mb-2">{plan.billing}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className={`mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs ${
                        feature.included ? 'bg-white/10 text-gold' : 'bg-gray-100 text-gray-400'
                      }`}>
                        {feature.included ? <FiCheck strokeWidth={3} /> : <FiX strokeWidth={3} />}
                      </span>
                      <span className={feature.included ? 'text-gray-700' : 'text-gray-400 line-through'}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <button 
                  className={`w-full h-14 rounded-full font-bold transition-colors duration-300 ${
                    plan.isPopular 
                      ? 'bg-white text-dark hover:bg-dark' 
                      : 'bg-dark text-white hover:bg-white'
                  }`}
                >
                  {plan.buttonText}
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PricingPlanView;
