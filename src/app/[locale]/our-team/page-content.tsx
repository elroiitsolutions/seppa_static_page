"use client";
import React from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { FiFacebook, FiInstagram, FiLinkedin, FiDribbble } from 'react-icons/fi';
import PageHeader from '@/components/layout/PageHeader';

const fadeInUp:Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const teamMembers = [
  {
    name: "Cody Fisher",
    role: "Operations Manager",
    image: "https://demo.awaikenthemes.com/yarnex/wp-content/uploads/2026/02/team-1.jpg",
    socials: { facebook: "#", dribbble: "#", instagram: "#", linkedin: "#" }
  },
  {
    name: "Savannah Nguyen",
    role: "Chief Operations Office",
    image: "https://demo.awaikenthemes.com/yarnex/wp-content/uploads/2026/02/team-2.jpg",
    socials: { facebook: "#", dribbble: "#", instagram: "#", linkedin: "#" }
  },
  {
    name: "Devon Lane",
    role: "Quality Assurance Lead",
    image: "https://demo.awaikenthemes.com/yarnex/wp-content/uploads/2026/02/team-3.jpg",
    socials: { facebook: "#", dribbble: "#", instagram: "#", linkedin: "#" }
  },
  {
    name: "Kathryn Murphy",
    role: "Export Sales Manager",
    image: "https://demo.awaikenthemes.com/yarnex/wp-content/uploads/2026/02/team-4.jpg",
    socials: { facebook: "#", dribbble: "#", instagram: "#", linkedin: "#" }
  },
  {
    name: "Annette Black",
    role: "Merchandising Manager",
    image: "https://demo.awaikenthemes.com/yarnex/wp-content/uploads/2026/02/team-5.jpg",
    socials: { facebook: "#", dribbble: "#", instagram: "#", linkedin: "#" }
  },
  {
    name: "Kristin Watson",
    role: "Supply Chain Manager",
    image: "https://demo.awaikenthemes.com/yarnex/wp-content/uploads/2026/02/team-6.jpg",
    socials: { facebook: "#", dribbble: "#", instagram: "#", linkedin: "#" }
  }
];

const OurTeam = () => {
  return (
    <div className="overflow-hidden bg-light">
      <PageHeader 
        title="Our Team" 
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Our Team" }
        ]} 
      />

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {teamMembers.map((member, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 bg-white">
                <div className="relative overflow-hidden aspect-[4/5] w-full">
                  <div className="absolute inset-0 bg-dark opacity-0 group-hover:opacity-20 transition duration-300 z-10"></div>
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                  
                  {/* Social Links Overlay */}
                  <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-20 translate-y-16 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <a href={member.socials.facebook} className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-dark hover:bg-white hover:text-dark hover:text-white transition-colors duration-300 shadow-lg">
                      <FiFacebook size={18} />
                    </a>
                    <a href={member.socials.dribbble} className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-dark hover:bg-white hover:text-dark hover:text-white transition-colors duration-300 shadow-lg">
                      <FiDribbble size={18} />
                    </a>
                    <a href={member.socials.instagram} className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-dark hover:bg-white hover:text-dark hover:text-white transition-colors duration-300 shadow-lg">
                      <FiInstagram size={18} />
                    </a>
                    <a href={member.socials.linkedin} className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-dark hover:bg-white hover:text-dark hover:text-white transition-colors duration-300 shadow-lg">
                      <FiLinkedin size={18} />
                    </a>
                  </div>
                </div>
                
                <div className="bg-white p-6 text-center border-t border-gray-100">
                  <h3 className="text-2xl font-bold font-heading text-dark mb-1 group-hover:text-gold transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-gray-500 font-medium">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default OurTeam;
