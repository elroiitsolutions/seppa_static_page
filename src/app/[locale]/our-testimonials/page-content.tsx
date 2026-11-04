"use client";
import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import PageHeader from '@/components/layout/PageHeader';
import AnimatedHeading from '@/components/ui/AnimatedHeading';
import { FiStar, FiCheckCircle } from 'react-icons/fi';
import { Link } from '@/i18n/routing';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const testimonials = [
  {
    name: "Rajesh Vardhan",
    role: "Director of Operations",
    company: "Himalayan Spring Water",
    image: "/pics/Rajesh.jpg",
    rating: 5,
    quote: "Seppa's Kombo Pure monobloc system cut our floor footprint by 40% while maintaining absolute sterility. Their turnkey water line engineering is unmatched in the industry."
  },
  {
    name: "Marcus Vance",
    role: "Plant General Manager",
    company: "Apex Beverages USA",
    image: "/pics/Marcus.jpg",
    rating: 5,
    quote: "Their high-speed RFC filling system and four-axis automated palletizer completely streamlined our CSD production, halving our end-of-line logistics costs and increasing overall line efficiency to 98%."
  },
  {
    name: "Amara Vance",
    role: "Chief Quality Officer",
    company: "Nile Beverage Corp",
    image: "/pics/Amara.jpg",
    rating: 5,
    quote: "Seppa's cold non-thermal pasteurization preserved the delicate taste and nutritional profile of our natural juices while guaranteeing complete aseptic safety and extended shelf life."
  },
  {
    name: "David Chen",
    role: "Senior Director of Operations",
    company: "Pacific Bottlers",
    image: "/pics/corporate.jpg",
    rating: 5,
    quote: "From plant layout design to electrical automation and on-site commissioning, Seppa delivered on time and within budget. Their after-sales support across North America is exemplary."
  },
  {
    name: "Elena Rostova",
    role: "VP Manufacturing",
    company: "Eurasia Dairy Group",
    image: "/pics/customer.jpg",
    rating: 5,
    quote: "Switching to Seppa's servo-driven electric PET blowing systems slashed our energy consumption by 32% per bottle while meeting the strictest sanitary standards for liquid dairy products."
  },
  {
    name: "Tariq Al-Mansoor",
    role: "Managing Director",
    company: "Gulf Pure Drinks UAE",
    image: "/pics/istockphoto-2209086842-612x612.jpg",
    rating: 5,
    quote: "Operating in extreme Middle Eastern temperatures demands robust machinery. Seppa's filling lines have run 24/7 with zero unscheduled downtime for over three years."
  }
];

export default function OurTestimonials() {
  return (
    <div className="bg-light min-h-screen">
      <PageHeader 
        title="Client Testimonials" 
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Testimonials" }
        ]} 
      />

      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-24">
            <motion.div 
              variants={fadeInUp} 
              initial="hidden" 
              whileInView="visible"
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-seppa-red"></span>
              <span className="text-sm font-medium text-dark uppercase tracking-wider">Proven Global Track Record</span>
            </motion.div>

            <AnimatedHeading 
              text="What Global Beverage Leaders Say About Seppa Automation" 
              elementType="h2" 
              className="text-4xl md:text-5xl font-heading font-bold text-dark mb-6 leading-tight" 
            />
            <p className="text-gray-600 text-lg">
              Empowering over 1,000 industrial packaging and bottling plants across 60+ countries worldwide.
            </p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {testimonials.map((item, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-gold mb-6">
                    {[...Array(item.rating)].map((_, i) => (
                      <FiStar key={i} className="fill-current text-[#e5a824]" size={18} />
                    ))}
                  </div>

                  <p className="text-gray-600 text-base md:text-lg italic leading-relaxed mb-8">
                    "{item.quote}"
                  </p>
                </div>

                <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0 border-2 border-seppa-red/30">
                    <Image 
                      src={item.image} 
                      alt={item.name} 
                      fill 
                      sizes="56px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-dark text-lg">{item.name}</h3>
                    <p className="text-gray-500 text-xs font-medium">{item.role}</p>
                    <p className="text-seppa-red text-xs font-semibold">{item.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom Banner */}
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-20 bg-dark rounded-[2.5rem] p-10 lg:p-14 text-white text-center relative overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 opacity-15 bg-[url('/pics/process-technology.jpg')] bg-cover bg-center"></div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Ready to Automate Your Bottling Plant?
              </h3>
              <p className="text-gray-300 text-lg mb-8">
                Consult with our specialized beverage engineering team for custom line design, capacity analysis, and turnkey plant execution.
              </p>
              <Link 
                href="/contact-us"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-seppa-red hover:bg-white hover:text-dark text-white font-bold transition-colors duration-300 shadow-lg"
              >
                Schedule Technical Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
