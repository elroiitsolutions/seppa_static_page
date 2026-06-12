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
        title: 'MINERAL WATER / SOFT DRINK PET BOTTLE MACHINE',
        subtitle: 'MINERAL WATER / SOFT DRINK PET BOTTLE MACHINE',
        image: 'pics/360_F_643784437_OcJMafVBr2EFvS0uN6TrXI8b9CwuZAew.jpg'
    },
    {
        title: 'MILK / JUICE PET BOTTLE MACHINE',
        subtitle: 'Complete Line Solutions for Process Technology.',
        image: 'pics/large.jpg'
    },
    {
        title: 'PET HOUSEHOLD CLEANING PRODUCTS',
        subtitle: 'Complete Line Solutions for PET Filling.',
        image: 'pics/PET-HOUSEHOLD.png'
    },
    {
        title: 'OIL / KETCHUPS PET BOTTLE MACHINE',
        subtitle: 'Complete Line Solutions for Glass Filling.',
        image: 'pics/ar-taste-test-ketchup-hero-01-4x3-691200ff01674e20805c9ed469841597.jpg'
    },
    {
        title: 'ALCOHOL AND SPRITS PET BOTTLE',
        subtitle: 'Complete Line Solutions for Can Filling.',
        image: 'pics/360_F_98234483_dlK6t4pwm8npmgVjzoYi0QvVPd3M90xc.jpg'
    },
    {
        title: 'LARGE PET BOTTLE FOR 3 TO 20 LITERS',
        subtitle: 'Complete Line Solutions for Large Bottles.',
        image: 'pics/LARGE-PET-BOTTLE.jpg'
    },
    {
        title: 'PHARMA / COSMETICS BOTTLE PET MACHINE',
        subtitle: 'Complete Line Solutions for Large Bottles.',
        image: 'pics/pharmaceutical-packaging-bottles-134.jpg'
    }
];

const Projects = () => {
    return (
        <section className="py-12 lg:py-24 bg-white overflow-hidden">
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

                        <span className="text-sm font-medium text-dark uppercase tracking-wider">PET TECHNOLOGY</span>
                    </motion.div>

                    <div className='w-full max-w-[1000px] mx-auto flex justify-center text-center'>
                        <AnimatedHeading
                            text={"Select a SEPPA PET SOLUTIONS you are looking for\u00A0?"}
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



            </div>
        </section>
    );
};

export default Projects;
