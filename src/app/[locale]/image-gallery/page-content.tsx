"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import PageHeader from '@/components/layout/PageHeader';
import AnimatedHeading from '@/components/ui/AnimatedHeading';
import { FiMaximize2, FiX } from 'react-icons/fi';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Monobloc PET Rinsing, Filling & Capping Line",
    category: "PET Filling",
    image: "/pics/pet-filling-machine.jpg"
  },
  {
    id: 2,
    title: "High-Speed Beverage Can Filling & Seaming System",
    category: "Can Automation",
    image: "/pics/can-filling-machine.jpg"
  },
  {
    id: 3,
    title: "Precision Glass Bottle Rinser-Filler-Crown Capper",
    category: "Glass Lines",
    image: "/pics/glass-filling-machine.jpg"
  },
  {
    id: 4,
    title: "Heavy-Duty 3 to 20-Liter Large Jar Filling Plant",
    category: "Large Formats",
    image: "/pics/large-bottle-filling-machine.jpg"
  },
  {
    id: 5,
    title: "Rotary Electric Servo Stretch PET Blow Molding Unit",
    category: "PET Blowers",
    image: "/pics/pet-blower.jpg"
  },
  {
    id: 6,
    title: "Turnkey Stainless Steel Beverage Processing Plant",
    category: "Processing",
    image: "/pics/process-technology.jpg"
  },
  {
    id: 7,
    title: "High-Volume Multi-Format Large PET Container Production",
    category: "Large Formats",
    image: "/pics/LARGE-PET-BOTTLE.jpg"
  },
  {
    id: 8,
    title: "Aseptic Household & Chemical Liquid Filling Automation",
    category: "Liquid Packaging",
    image: "/pics/PET-HOUSEHOLD.png"
  },
  {
    id: 9,
    title: "Complete End-to-End Packaging Line Integration",
    category: "Turnkey Lines",
    image: "/pics/packaging_blog_banner.png"
  }
];

const categories = ["All", "PET Filling", "Can Automation", "Glass Lines", "Large Formats", "PET Blowers", "Processing"];

export default function ImageGallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);

  const filteredItems = selectedCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="bg-light min-h-screen">
      <PageHeader 
        title="Equipment Gallery" 
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Gallery" }
        ]} 
      />

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <motion.div 
              variants={fadeInUp} 
              initial="hidden" 
              whileInView="visible"
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-seppa-red"></span>
              <span className="text-sm font-medium text-dark uppercase tracking-wider">Industrial Plant Showcase</span>
            </motion.div>

            <AnimatedHeading 
              text="Explore Our Advanced Machinery & Production Installations" 
              elementType="h2" 
              className="text-4xl md:text-5xl font-heading font-bold text-dark mb-6 leading-tight" 
            />
            <p className="text-gray-600 text-lg">
              Precision engineering deployed across beverage, mineral water, dairy, brewery, and spirits facilities globally.
            </p>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap justify-center gap-2 mt-8">
              {categories.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                    selectedCategory === cat
                      ? "bg-seppa-red text-white shadow-md shadow-seppa-red/30 scale-105"
                      : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <motion.div 
            layout
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredItems.map((item) => (
                <motion.div
                  layout
                  key={item.id}
                  variants={fadeInUp}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="group relative rounded-3xl overflow-hidden aspect-[4/3] bg-white shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer"
                  onClick={() => setActiveImage(item)}
                >
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill 
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 md:p-8">
                    <span className="text-seppa-red bg-white/90 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full w-max mb-2">
                      {item.category}
                    </span>
                    <h3 className="text-white font-heading font-bold text-lg md:text-xl leading-snug">
                      {item.title}
                    </h3>
                    <div className="mt-3 flex items-center gap-2 text-white/80 text-sm font-medium">
                      <FiMaximize2 className="text-seppa-red" />
                      <span>Click to view</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
            onClick={() => setActiveImage(null)}
          >
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/20 hover:bg-white text-white hover:text-dark flex items-center justify-center transition-colors z-50"
            >
              <FiX size={24} />
            </button>

            <div 
              className="relative max-w-5xl w-full max-h-[85vh] aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl bg-dark"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={activeImage.image}
                alt={activeImage.title}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                <span className="text-xs uppercase tracking-wider font-semibold text-seppa-red bg-black/40 px-3 py-1 rounded-full">
                  {activeImage.category}
                </span>
                <h4 className="text-xl md:text-2xl font-heading font-bold mt-2">
                  {activeImage.title}
                </h4>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
