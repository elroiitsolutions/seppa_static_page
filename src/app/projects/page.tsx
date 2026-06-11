"use client";
import React from 'react';
import PageHeader from '@/components/layout/PageHeader';
import { motion } from 'framer-motion';
import Link from "next/link";

const Projects: React.FC = () => {
  const projects = [
    { id: '1', title: 'Sustainable Fabric Initiative', category: 'Manufacturing', image: 'https://demo.awaikenthemes.com/yarnex/wp-content/uploads/2026/02/project-1.jpg' },
    { id: '2', title: 'Global Export Expansion', category: 'Logistics', image: 'https://demo.awaikenthemes.com/yarnex/wp-content/uploads/2026/02/project-2.jpg' },
    { id: '3', title: 'Eco-Friendly Dyeing Process', category: 'Innovation', image: 'https://demo.awaikenthemes.com/yarnex/wp-content/uploads/2026/02/project-3.jpg' },
  ];

  return (
    <div>
      <PageHeader 
        title="Our Projects" 
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Projects' }]} 
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
                <div className="aspect-[4/5] bg-gray-200 w-full overflow-hidden">
                  {/* Using placeholder colors if images fail to load */}
                  <div className="w-full h-full bg-dark bg-opacity-10 group-hover:bg-opacity-40 transition duration-300 absolute inset-0 z-10"></div>
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                </div>
                
                <div className="absolute bottom-0 left-0 w-full p-8 z-20 translate-y-4 group-hover:translate-y-0 transition duration-300">
                  <p className="text-gold font-medium mb-2">{project.category}</p>
                  <h3 className="text-2xl font-bold font-heading text-white mb-4">{project.title}</h3>
                  <Link href={`/projects/${project.id}`} className="text-white hover:text-gold transition flex items-center gap-2">
                    View Project <span className="text-xl">&rarr;</span>
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
