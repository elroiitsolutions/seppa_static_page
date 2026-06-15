"use client";
import React, { useState, useMemo, useCallback, useEffect, useRef } from 'react';
import PageHeader from '@/components/layout/PageHeader';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlay, FiSearch, FiX, FiGrid, FiFilter, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

/* ──────────────────────── Video Data ──────────────────────── */

interface Video {
  id: string;
  youtubeId: string;
  title: string;
  category: string;
}

const videos: Video[] = [
  // PET Blowing Machines
  {
    id: "v1",
    youtubeId: "WKW7HZa45K8",
    title: "Automatic PET Blowing Machine 1 Cavity",
    category: "PET Blowing Machines",
  },
  {
    id: "v2",
    youtubeId: "uzGJhc2_c3U",
    title: "Fully Automatic PET Blow Machine 2 Cavity",
    category: "PET Blowing Machines",
  },
  {
    id: "v3",
    youtubeId: "L07vIHIuqQI",
    title: "Fully / Semi Automatic PET Blow Machine 3 Cavity",
    category: "PET Blowing Machines",
  },
  {
    id: "v4",
    youtubeId: "RwrvUUXnSRk",
    title: "Automatic PET Blow Machine 4 Cavity",
    category: "PET Blowing Machines",
  },

  // Complete Line Equipment
  {
    id: "v5",
    youtubeId: "ZkDnmRGnZjU",
    title: "Fully Automatic PET Bottle Blow Machine 6 Cavity",
    category: "Complete Line Equipment",
  },
  {
    id: "v6",
    youtubeId: "xaL-E3GDIKc",
    title: "Glass Bottle Cleaning Machine | Glass Bottle Washer",
    category: "Complete Line Equipment",
  },
  {
    id: "v7",
    youtubeId: "R40XfJrqFEM",
    title: "PET Bottle Unscrambler Machine",
    category: "Complete Line Equipment",
  },
  {
    id: "v8",
    youtubeId: "BtJa38tvhU4",
    title: "Jar Blowing Machine",
    category: "Complete Line Equipment",
  },

  // Industrial Solutions
  {
    id: "v9",
    youtubeId: "r9-gL1zcyRs",
    title: "8 Cavity Fully Automatic PET Bottle Blowing Machine — SSB SLE 80",
    category: "Industrial Solutions",
  },
  {
    id: "v10",
    youtubeId: "SpkvdyyB2AQ",
    title: "Containerised Sea Water Desalination Systems",
    category: "Industrial Solutions",
  },
  {
    id: "v11",
    youtubeId: "L1QD9RZ_Iwk",
    title: "Mineral Water Plant — Industrial Water Treatment Plant — Fosters",
    category: "Industrial Solutions",
  },
  {
    id: "v12",
    youtubeId: "1NZSCJl-otM",
    title: "Soda Filling Machine",
    category: "Industrial Solutions",
  },

  // Packaging & Processing
  {
    id: "v13",
    youtubeId: "h7x6XjY0faA",
    title: "Shrink Wrapping Machine | Tertiary Packaging Machine",
    category: "Packaging & Processing",
  },
  {
    id: "v14",
    youtubeId: "Y2mFKTJ78H8",
    title: "BLUE RO — Water Purifier Plant — RO Plant",
    category: "Packaging & Processing",
  },
  {
    id: "v15",
    youtubeId: "XoUIjfrMzpQ",
    title: "BLUE RO — Domestic Reverse Osmosis Plant — RO Plant for Residence",
    category: "Packaging & Processing",
  },
  {
    id: "v16",
    youtubeId: "NGM9k1PsOfM",
    title: "Rinser Filler Capper Machine — 200 Bottles Per Minute",
    category: "Packaging & Processing",
  },
];

const allCategories = ["All", ...Array.from(new Set(videos.map((v) => v.category)))];

/* ──────────────────────── Animations ──────────────────────── */

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.95,
    transition: { duration: 0.3 },
  },
};

/* ──────────────────────── Component ──────────────────────── */

const VideoGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [playingVideo, setPlayingVideo] = useState<Video | null>(null);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const filterScrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const filtered = useMemo(() => {
    return videos.filter((v) => {
      const matchesCategory = activeCategory === "All" || v.category === activeCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        v.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        v.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const handlePlay = useCallback((video: Video) => {
    setPlayingVideo(video);
    document.body.style.overflow = "hidden";
  }, []);

  const handleClose = useCallback(() => {
    setPlayingVideo(null);
    document.body.style.overflow = "";
  }, []);

  /* Handle escape key to close modal */
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && playingVideo) {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [playingVideo, handleClose]);

  /* Check filter scroll overflow for arrow indicators */
  const checkFilterScroll = useCallback(() => {
    const el = filterScrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, []);

  useEffect(() => {
    checkFilterScroll();
    window.addEventListener("resize", checkFilterScroll);
    return () => window.removeEventListener("resize", checkFilterScroll);
  }, [checkFilterScroll]);

  const scrollFilters = (direction: "left" | "right") => {
    const el = filterScrollRef.current;
    if (!el) return;
    el.scrollBy({ left: direction === "left" ? -200 : 200, behavior: "smooth" });
    setTimeout(checkFilterScroll, 350);
  };

  return (
    <div className="bg-gray-50">
      <PageHeader
        title="Video Gallery"
        breadcrumbs={[{ name: "Home", path: "/" }, { name: "Video Gallery" }]}
      />

      {/* ──── Main Content Section ──── */}
      <section className="py-10 sm:py-14 md:py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          {/* ── Section Heading ── */}
          <motion.div
            className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-14"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-seppa-red font-medium uppercase tracking-wider text-xs sm:text-sm mb-1.5 sm:mb-2">
              Our Products In Action
            </h3>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-[#101934] leading-tight">
              Product Videos
            </h2>
            <p className="mt-2.5 sm:mt-3 md:mt-4 text-gray-600 text-sm sm:text-base lg:text-lg px-2 sm:px-0">
              See our world-class machinery and complete line solutions in real-world operation across facilities worldwide.
            </p>
          </motion.div>

          {/* ── Filter & Search Controls ── */}
          <motion.div
            className="mb-8 sm:mb-10 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            {/* Mobile: Search bar first, filter button second */}
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

              {/* Search Bar — full width on mobile, fixed width on desktop */}
              <div className="relative w-full md:w-72 lg:w-80 order-1 md:order-2">
                <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  id="video-search"
                  type="text"
                  placeholder="Search videos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-10 py-3 sm:py-3 rounded-full bg-white border border-gray-200 text-gray-700 text-sm sm:text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-seppa-red/40 focus:border-seppa-red transition shadow-sm"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-seppa-red transition"
                    aria-label="Clear search"
                  >
                    <FiX size={16} />
                  </button>
                )}
              </div>

              {/* Mobile Filter Toggle Button (visible < md) */}
              <button
                onClick={() => setShowMobileFilters(!showMobileFilters)}
                className="flex md:hidden items-center justify-center gap-2 px-5 py-3 bg-white rounded-full border border-gray-200 text-gray-700 font-semibold text-sm shadow-sm active:scale-[0.97] transition order-2"
              >
                <FiFilter size={16} className="text-seppa-red" />
                {activeCategory === "All" ? "Filter by Category" : activeCategory}
                <span className="ml-auto text-xs text-gray-400">
                  {activeCategory !== "All" && (
                    <span
                      onClick={(e) => { e.stopPropagation(); setActiveCategory("All"); setShowMobileFilters(false); }}
                      className="text-seppa-red underline"
                    >
                      Clear
                    </span>
                  )}
                </span>
              </button>

              {/* Mobile Filter Dropdown (visible < md when toggled) */}
              <AnimatePresence>
                {showMobileFilters && (
                  <motion.div
                    className="flex md:hidden flex-wrap gap-2 order-3"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    {allCategories.map((cat) => (
                      <button
                        key={cat}
                        id={`filter-mobile-${cat.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                        onClick={() => { setActiveCategory(cat); setShowMobileFilters(false); }}
                        className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                          activeCategory === cat
                            ? "bg-seppa-red text-white shadow-md shadow-seppa-red/25"
                            : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Desktop / Tablet Category Tabs with horizontal scroll (visible >= md) */}
              <div className="hidden md:flex items-center gap-2 order-1 md:order-1 relative min-w-0 flex-1 mr-4">
                <FiFilter className="text-seppa-red shrink-0" size={18} />

                {/* Scroll Left Arrow */}
                {canScrollLeft && (
                  <button
                    onClick={() => scrollFilters("left")}
                    className="shrink-0 w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-seppa-red hover:border-seppa-red transition shadow-sm"
                    aria-label="Scroll filters left"
                  >
                    <FiChevronLeft size={16} />
                  </button>
                )}

                {/* Scrollable Filter Container */}
                <div
                  ref={filterScrollRef}
                  onScroll={checkFilterScroll}
                  className="flex gap-2 overflow-x-auto scrollbar-hide scroll-smooth"
                >
                  {allCategories.map((cat) => (
                    <button
                      key={cat}
                      id={`filter-${cat.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                      onClick={() => setActiveCategory(cat)}
                      className={`px-4 lg:px-5 py-2 lg:py-2.5 rounded-full text-xs lg:text-sm font-semibold transition-all duration-300 whitespace-nowrap shrink-0 ${
                        activeCategory === cat
                          ? "bg-seppa-red text-white shadow-lg shadow-seppa-red/30"
                          : "bg-white text-gray-600 hover:bg-[#101934] hover:text-white border border-gray-200 hover:border-transparent"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                {/* Scroll Right Arrow */}
                {canScrollRight && (
                  <button
                    onClick={() => scrollFilters("right")}
                    className="shrink-0 w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-seppa-red hover:border-seppa-red transition shadow-sm"
                    aria-label="Scroll filters right"
                  >
                    <FiChevronRight size={16} />
                  </button>
                )}
              </div>
            </div>
          </motion.div>

          {/* ── Results Count ── */}
          <div className="flex items-center gap-2 mb-6 sm:mb-8 text-gray-500">
            <FiGrid size={14} className="sm:w-4 sm:h-4" />
            <span className="text-xs sm:text-sm font-medium">
              Showing {filtered.length} of {videos.length} videos
            </span>
          </div>

          {/* ──── Video Grid ────
               Mobile (< 640px):      1 column
               Small tablet (640px):   2 columns (iPad Mini portrait friendly)
               iPad Mini/Air (768px):  2 columns
               iPad Air landscape (1024px+): 3 columns
               Desktop (1280px+):      3 columns with wider gaps
          */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory + searchQuery}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {filtered.map((video) => (
                <motion.div
                  key={video.id}
                  variants={cardVariants}
                  layout
                  className="group relative bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-500 border border-gray-100"
                >
                  {/* Thumbnail */}
                  <div
                    className="relative aspect-video overflow-hidden cursor-pointer"
                    onClick={() => handlePlay(video)}
                  >
                    <img
                      src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                      alt={video.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                    {/* Play Button — smaller on mobile */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full bg-seppa-red/90 backdrop-blur-md flex items-center justify-center shadow-xl shadow-seppa-red/30 transition-all duration-500 group-hover:scale-110 group-hover:bg-seppa-red">
                        <FiPlay className="text-white ml-0.5 sm:ml-1" size={20} />
                      </div>
                    </div>

                    {/* Category Badge — smaller on mobile, hidden on very small screens */}
                    <div className="absolute top-2 left-2 sm:top-3 sm:left-3 md:top-4 md:left-4">
                      <span className="px-2 py-1 sm:px-3 sm:py-1.5 bg-white/15 backdrop-blur-md text-white text-[10px] sm:text-xs font-semibold rounded-full border border-white/20 line-clamp-1 max-w-[140px] sm:max-w-none truncate">
                        {video.category}
                      </span>
                    </div>
                  </div>

                  {/* Card Info */}
                  <div className="p-3.5 sm:p-4 md:p-5 lg:p-6">
                    <h3 className="text-sm sm:text-base lg:text-lg font-bold font-heading text-[#101934] leading-snug group-hover:text-seppa-red transition-colors duration-300 line-clamp-2">
                      {video.title}
                    </h3>


                    <button
                      onClick={() => handlePlay(video)}
                      className="mt-2.5 sm:mt-3 md:mt-4 inline-flex items-center gap-1.5 sm:gap-2 text-seppa-red font-semibold text-xs sm:text-sm hover:gap-3 transition-all duration-300"
                    >
                      <FiPlay size={12} className="sm:w-3.5 sm:h-3.5" />
                      Watch Video
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* ── Empty State ── */}
          {filtered.length === 0 && (
            <motion.div
              className="text-center py-12 sm:py-16 md:py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 mx-auto rounded-full bg-gray-100 flex items-center justify-center mb-4 sm:mb-6">
                <FiSearch className="text-gray-400" size={24} />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-heading font-bold text-[#101934] mb-2">
                No videos found
              </h3>
              <p className="text-gray-500 text-sm sm:text-base mb-4 sm:mb-6 px-4">
                Try adjusting your search or filter to find what you&apos;re looking for.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("All");
                }}
                className="px-5 sm:px-6 py-2.5 sm:py-3 bg-seppa-red text-white rounded-full text-sm sm:text-base font-semibold hover:bg-[#101934] transition-colors duration-300"
              >
                Reset Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* ──── CTA Section ──── */}
      <section className="relative py-14 sm:py-16 md:py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[#101934]" />
        <div className="absolute top-0 right-0 w-60 h-60 sm:w-80 sm:h-80 md:w-[500px] md:h-[500px] bg-seppa-red rounded-full mix-blend-multiply filter blur-[80px] sm:blur-[100px] md:blur-[120px] opacity-15 translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-64 sm:h-64 md:w-[400px] md:h-[400px] bg-gold rounded-full mix-blend-multiply filter blur-[60px] sm:blur-[80px] md:blur-[100px] opacity-10 -translate-x-1/3 translate-y-1/3" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-seppa-red font-medium uppercase tracking-wider text-xs sm:text-sm mb-2 sm:mb-3">
              Ready to Get Started?
            </h3>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white leading-tight mb-4 sm:mb-6 max-w-3xl mx-auto px-2">
              Experience Our Machines In Your Facility
            </h2>
            <p className="text-gray-400 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto px-2">
              From PET blowing to complete line solutions, Seppa delivers world-class engineering. Contact our experts for a personalized consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
              <a
                href="/product-enquiry"
                className="px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 bg-seppa-red text-white rounded-full font-bold text-sm sm:text-base lg:text-lg hover:bg-white hover:text-seppa-red transition-all duration-300 shadow-lg shadow-seppa-red/30 text-center"
              >
                Product Enquiry
              </a>
              <a
                href="/contact-us"
                className="px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 bg-white/10 text-white border border-white/30 rounded-full font-bold text-sm sm:text-base lg:text-lg hover:bg-white hover:text-[#101934] transition-all duration-300 backdrop-blur-sm text-center"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ──── Lightbox Modal ────
           Fully responsive: fills nearly all viewport on mobile,
           proper padding on tablets, constrained max-width on desktop.
           Close button repositioned for touch accessibility on mobile.
      */}
      <AnimatePresence>
        {playingVideo && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-2 sm:p-4 md:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
              onClick={handleClose}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Content — responsive max-width */}
            <motion.div
              className="relative z-10 w-full max-w-[95vw] sm:max-w-[90vw] md:max-w-3xl lg:max-w-5xl"
              initial={{ scale: 0.85, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 40 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as const }}
            >
              {/* Close Button — inside on mobile for better touch, outside on desktop */}
              <button
                onClick={handleClose}
                className="absolute -top-1 right-1 sm:-top-10 sm:right-0 md:-top-12 md:right-0 z-20 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-white/20 sm:bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-seppa-red transition-colors duration-300 border border-white/20"
                aria-label="Close video"
              >
                <FiX size={16} className="sm:w-5 sm:h-5" />
              </button>

              {/* Video Player — responsive aspect ratio */}
              <div className="aspect-video rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-2xl bg-black border border-white/10 mt-8 sm:mt-0">
                <iframe
                  src={`https://www.youtube.com/embed/${playingVideo.youtubeId}?autoplay=1&rel=0`}
                  title={playingVideo.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Title — responsive text sizes */}
              <div className="mt-3 sm:mt-4 md:mt-5 text-center px-2">
                <h3 className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-heading font-bold line-clamp-2">
                  {playingVideo.title}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm mt-1">{playingVideo.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default VideoGallery;
