"use client";
import React from 'react';
import { useParams } from "next/navigation";
import PageHeader from '@/components/layout/PageHeader';
import { motion } from 'framer-motion';

const SingleService: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // In a real app, you would fetch service data based on the ID here.
  // We'll just display the ID capitalized for now.
  const serviceName = id ? id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') : 'Service Details';

  return (
    <div>
      <PageHeader 
        title={serviceName}
        breadcrumbs={[
          { name: 'Home', path: '/' }, 
          { name: 'Services', path: '/services' },
          { name: serviceName }
        ]} 
      />
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://demo.awaikenthemes.com/yarnex/wp-content/uploads/2026/02/service-single.jpg" 
              alt={serviceName} 
              className="w-full rounded-3xl shadow-xl mb-12 bg-gray-200 aspect-video object-cover"
            />
            
            <h2 className="text-3xl font-heading font-bold text-dark mb-6">{serviceName} Solutions</h2>
            
            <div className="text-gray-600 space-y-6 text-lg">
              <p>
                We provide industry-leading solutions for {serviceName.toLowerCase()}. Our processes are designed to maximize efficiency while maintaining the highest standards of quality control. 
              </p>
              <p>
                Whether you need scalable manufacturing for global export or specialized custom textiles, our expert team utilizes advanced machinery and sustainable practices to deliver outstanding results tailored specifically to your business needs.
              </p>
            </div>
            
            <div className="mt-12 bg-light p-8 rounded-2xl border-l-4 border-gold">
              <h4 className="text-xl font-bold text-dark mb-2">Key Benefits</h4>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>High-quality materials sourced sustainably.</li>
                <li>State-of-the-art machinery ensuring consistency.</li>
                <li>Rigorous quality assurance at every step.</li>
                <li>Customizable solutions to meet specific requirements.</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SingleService;
