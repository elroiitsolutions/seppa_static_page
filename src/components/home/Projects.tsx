import React from 'react';
import { motion , Variants } from 'framer-motion';
import AnimatedHeading from '../ui/AnimatedHeading';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const projects = [
  {
    title: 'Global Textile Innovation',
    subtitle: 'Global Textile Innovation Home Project Information Client: Savannah [...]',
    image: 'https://demo.awaikenthemes.com/yarnex/wp-content/uploads/2026/02/project-1.jpg'
  },
  {
    title: 'Textile Export Growth Initiative',
    subtitle: 'Textile Export Growth Initiative Home Project Information Client: [...]',
    image: 'https://demo.awaikenthemes.com/yarnex/wp-content/uploads/2026/02/project-2.jpg'
  },
  {
    title: 'Premium Fabric Design Hub',
    subtitle: 'Premium Fabric Design Hub Home Project Information Client: [...]',
    image: 'https://demo.awaikenthemes.com/yarnex/wp-content/uploads/2026/02/project-3.jpg'
  }
];

const Projects = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* Header Section */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
            <span className="text-sm font-medium text-dark uppercase tracking-wider">Our Projects</span>
          </motion.div>
          
          <AnimatedHeading 
            text="Our projects across global textile industry" 
            elementType="h2" 
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-dark leading-tight" 
          />
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {projects.map((project, idx) => (
            <motion.div key={idx} variants={fadeInUp} className="group cursor-pointer">
              <div className="relative rounded-[2rem] overflow-hidden aspect-[3/4] shadow-lg">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700" 
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent opacity-80 group-hover:opacity-90 transition duration-300"></div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 w-full p-8 transform translate-y-4 group-hover:translate-y-0 transition duration-300">
                  <h3 className="text-2xl font-bold font-heading text-white mb-2 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition duration-300 delay-100">
                    {project.subtitle}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Marquee / Text */}
        <motion.div 
          className="mt-20 text-center flex items-center justify-center gap-3 border-t border-gray-200 pt-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <img src="https://demo.awaikenthemes.com/yarnex/wp-content/uploads/2026/02/author-1.jpg" alt="Icon" className="w-6 h-6 rounded-full object-cover" />
          <p className="text-gray-600 font-medium">
            From raw fibers to refined fabrics – <span className="text-gold font-bold underline">Sustainability Woven Into Every Thread.</span>
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
