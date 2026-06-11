import React from 'react';
import { motion, Variants } from 'framer-motion';
import AnimatedHeading from '../ui/AnimatedHeading';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';

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
    title: 'PET BLOWER',
    subtitle: 'Complete Line Solutions for PET Blowing.',
    image: 'pics/pet-blower.jpg'
  },
  {
    title: 'PROCESS TECHNOLOGY',
    subtitle: 'Complete Line Solutions for Process Technology.',
    image: 'pics/process-technology.jpg'
  },
  {
    title: 'PET FILLING LINE',
    subtitle: 'Complete Line Solutions for PET Filling.',
    image: 'pics/pet-filling-machine.jpg'
  },
  {
    title: 'GLASS FILLING LINE',
    subtitle: 'Complete Line Solutions for Glass Filling.',
    image: 'pics/glass-filling-machine.jpg'
  },
  {
    title: 'CAN FILLING LINE',
    subtitle: 'Complete Line Solutions for Can Filling.',
    image: 'pics/can-filling-machine.jpg'
  },
  {
    title: 'LARGE BOTTLE FILLING LINE',
    subtitle: 'Complete Line Solutions for Large Bottles.',
    image: 'pics/large-bottle-filling-machine.jpg'
  }
];

const Projects = () => {
  return (
    <section className="pt-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">

        {/* Header Section */}
        <motion.div
           className="text-center max-w-[1200px] mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-seppa-red"></span>

            <span className="text-sm font-medium text-dark uppercase tracking-wider">COMPLETE LINE SOLUTIONS</span>
          </motion.div>
     <div className='w-full max-w-[1000px] mx-auto flex justify-center text-center'>
          <AnimatedHeading
            text="Comprehensive Beverage & Dairy Processing Lines"
            elementType="h2"
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-dark leading-tight [&>span]:justify-center"
          />
          </div>
        </motion.div>

        {/* Projects Carousel */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="relative group"
        >
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            spaceBetween={32}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            pagination={{ clickable: true }}
            navigation={{
              prevEl: '.projects-prev',
              nextEl: '.projects-next',
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            className="w-full pb-16 px-4"
          >
            {projects.map((project, idx) => (
              <SwiperSlide key={idx} className="h-auto py-4">
                <motion.div variants={fadeInUp} className="group/item cursor-pointer h-full">
                  <div className="relative rounded-[2rem] overflow-hidden aspect-[4/3] shadow-lg h-full">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover/item:scale-110 transition duration-700"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent opacity-80 group-hover/item:opacity-90 transition duration-300"></div>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 w-full p-8 transform translate-y-4 group-hover/item:translate-y-0 transition duration-300">
                      <h3 className="text-2xl font-bold font-heading text-white mb-2 leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 text-sm opacity-0 group-hover/item:opacity-100 transition duration-300 delay-100">
                        {project.subtitle}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Arrows */}
          <button className="projects-prev absolute left-0 md:-left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full flex items-center justify-center text-dark shadow-xl border border-gray-100 hover:bg-seppa-red hover:text-white transition duration-300 opacity-0 group-hover:opacity-100 disabled:opacity-0 hidden md:flex">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>
          <button className="projects-next absolute right-0 md:-right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full flex items-center justify-center text-dark shadow-xl border border-gray-100 hover:bg-seppa-red hover:text-white transition duration-300 opacity-0 group-hover:opacity-100 disabled:opacity-0 hidden md:flex">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
        </motion.div>

        {/* Bottom Marquee / Text */}
        <motion.div
          className="mt-20 text-center flex items-center justify-center gap-3 border-t border-gray-200 pt-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          {/* <img src="https://demo.awaikenthemes.com/yarnex/wp-content/uploads/2026/02/author-1.jpg" alt="Icon" className="w-6 h-6 rounded-full object-cover" />
          <p className="text-gray-600 font-medium">
            From raw fibers to refined fabrics – <span className="text-gold font-bold underline">Sustainability Woven Into Every Thread.</span>
          </p> */}
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
