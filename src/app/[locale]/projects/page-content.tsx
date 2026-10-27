"use client";
import React from 'react';
import Image from 'next/image';
import PageHeader from '@/components/layout/PageHeader';
import { motion } from 'framer-motion';
import Link from "next/link";

const Projects: React.FC = () => {
  const projects = [
    { id: '1', title: 'High-Speed PET Water Bottling Line', category: 'Mineral Water Bottling', image: '/pics/pet-filling-machine.jpg' },
    { id: '2', title: 'Automated Craft Brewery & Canning Plant', category: 'Beer & Brewery Lines', image: '/pics/can-filling-machine.jpg' },
    { id: '3', title: 'Rotary Blow Moulding & Packaging System', category: 'PET Technology', image: '/pics/pet-blower.jpg' },
  ];

  return (
    <div>
      <PageHeader 
        title="Complete Line Projects" 
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Projects' }
        ]}
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative rounded-2xl overflow-hidden shadow-lg cursor-pointer"
              >
                <div className="aspect-[4/5] bg-gray-100 w-full overflow-hidden relative">
                  <div className="w-full h-full bg-dark/20 group-hover:bg-dark/40 transition duration-300 absolute inset-0 z-10 pointer-events-none"></div>
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                    className="object-cover group-hover:scale-105 transition duration-700" 
                  />
                </div>
                
                <div className="absolute bottom-0 left-0 w-full p-8 z-20 translate-y-4 group-hover:translate-y-0 transition duration-300 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                  <p className="text-seppa-red font-semibold mb-2 text-sm uppercase tracking-wider">{project.category}</p>
                  <h3 className="text-2xl font-bold font-heading text-white mb-4">{project.title}</h3>
                  <Link href="/contact-us" className="text-white hover:text-seppa-red transition flex items-center gap-2 font-medium">
                    Consult on this Solution <span className="text-xl">&rarr;</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
