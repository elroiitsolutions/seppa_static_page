"use client";
import React from 'react';
import { motion } from 'framer-motion';

interface ServiceContentProps {
  serviceName: string;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

const ServiceContent: React.FC<ServiceContentProps> = ({ serviceName }) => {
  return (
    <div className="w-full lg:w-2/3 order-1 lg:order-2">
      {/* Large Service Image */}
      <motion.div 
        className="rounded-3xl overflow-hidden mb-10 shadow-md shine-overlay"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <img 
          src="https://demo.awaikenthemes.com/yarnex/wp-content/uploads/2026/02/service-single.jpg" 
          alt={serviceName} 
          className="w-full aspect-[16/10] object-cover"
        />
      </motion.div>
      
      {/* Service Details */}
      <motion.div 
        className="bg-white p-8 lg:p-10 rounded-3xl shadow-sm"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeInUp}
      >
        <motion.p 
          className="text-gray-600 text-lg leading-relaxed mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Our <span className="font-medium text-dark">{serviceName}</span> service is designed to deliver tailored solutions that match your exact specifications. From initial planning to final implementation, we work closely with clients to develop systems that meet unique operational, performance, and compliance requirements.
        </motion.p>
        
        <motion.h2 
          className="text-3xl md:text-4xl font-heading font-bold text-dark mb-6 mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          Our {serviceName.toLowerCase()} process
        </motion.h2>
        
        <motion.p 
          className="text-gray-600 text-lg leading-relaxed mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          We provide industry-leading solutions designed to maximize your efficiency while maintaining the highest standards of quality control. Whether you need scalable manufacturing, rapid audits, or comprehensive training, our expert team utilizes advanced methodologies to deliver outstanding results tailored specifically to your business needs.
        </motion.p>

        <motion.div 
          className="mt-10 bg-[#f9f8f4] p-8 rounded-2xl border-l-4 border-seppa-red"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <h4 className="text-xl font-bold text-dark mb-4 font-heading">Key Advantages</h4>
          <ul className="list-disc pl-5 text-gray-600 space-y-3 text-lg">
            <li>Strategic planning tailored to your operational goals.</li>
            <li>State-of-the-art methodology ensuring consistency.</li>
            <li>Rigorous quality assurance at every single step.</li>
            <li>Highly customizable solutions to meet specific industry requirements.</li>
          </ul>
        </motion.div>
        
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-dark mb-8">Frequently Asked Questions.</h2>
          <div className="space-y-4">
            {[
              { q: "What types of solutions do you manufacture and supply?", a: "We combine eco friendly processes, responsible sourcing & advance technology to deliver sustainable solutions without compromising quality or performance." },
              { q: "What quality standards do your products follow?", a: "Our facilities and processes adhere to the highest international quality and safety certifications." },
              { q: "Are your manufacturing processes sustainable?", a: "Yes, sustainability is at the core of our operations, emphasizing energy efficiency and waste reduction." },
              { q: "Do you provide samples before bulk production?", a: "Absolutely. We ensure you are completely satisfied with prototypes and samples before we commence full-scale production." },
              { q: "Which industries do you serve?", a: "We serve a wide variety of sectors including beverages, dairy, cosmetics, and specialized industrial manufacturing." }
            ].map((faq, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <details className="group bg-white rounded-xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border border-gray-100 overflow-hidden" open={i === 0}>
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-lg text-dark group-open:text-seppa-red transition-colors">
                    <span className="font-bold">{faq.q}</span>
                    <span className="transition group-open:rotate-180 bg-[#d3a35d] text-white rounded-full p-1 shrink-0 group-open:bg-[#8b3236]">
                      <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                    </span>
                  </summary>
                  <div className="text-gray-600 px-6 pb-6 text-lg leading-relaxed animate-fadeIn">
                    {faq.a}
                  </div>
                </details>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ServiceContent;
