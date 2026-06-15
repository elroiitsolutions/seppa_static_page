"use client";
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX, FiChevronDown, FiChevronRight } from 'react-icons/fi';

import logoImg from '@/assets/logo/logo.png';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Handle scroll event for sticky header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dynamic header classes - sticky behavior only on desktop
  const headerClass = `top-0 left-0 w-full z-50 transition-all duration-300 absolute lg:fixed ${
    scrolled 
      ? 'bg-transparent lg:bg-[#101934]/95 lg:backdrop-blur-md pt-4 lg:pt-3 lg:pb-0 lg:shadow-lg' 
      : 'bg-transparent pt-4 lg:pt-8'
  }`;

  const linkClass = "font-medium hover:text-gold transition flex items-center gap-1 py-2 text-white";

  const dropdownClass = "absolute top-full left-0 mt-2 w-56 bg-seppa-red text-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50 flex flex-col py-2";
  const dropdownItemClass = "px-6 py-2.5 hover:text-dark transition-colors block w-full text-left";

  return (
    <header className={headerClass}>
      <div className={`container mx-auto px-4 flex justify-between items-center pb-4 lg:pb-6 border-b transition-colors duration-300 ${scrolled ? 'border-transparent' : 'border-white/20'}`}>
        {/* Logo */}
        <div className="logo z-50 relative">
          <Link href="/">
            <div className='w-fit h-fit rounded-xl overflow-hidden bg-white p-2'>
              <img
                src={logoImg.src}
                alt="Seppa Solutions Logo"
                className="h-10 md:h-10 transition-all duration-300 "
              />
            </div>
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center space-x-8">
          <div className="relative group">
            <Link href="/" className={linkClass}>
              Home
            </Link>
          </div>
          <div className="relative group">
            <button className={linkClass}>
              Packaging <FiChevronDown className="text-sm opacity-70" />
            </button>
            <div className={dropdownClass}>

              <div className="relative group/sub">
                <div className={`${dropdownItemClass} flex items-center justify-between cursor-pointer gap-2`}>
                  <span className="leading-snug">Pet Blowers</span>
                  <FiChevronRight className="text-sm opacity-70 shrink-0" />
                </div>
                <div className="absolute top-0 left-full w-64 bg-seppa-red text-white rounded-md shadow-lg opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300 transform translate-x-2 group-hover/sub:translate-x-0 z-50 flex flex-col py-2">
                  <Link href="/automatic" className={dropdownItemClass}>Automatic Pet Blowers</Link>
                  <Link href="/semi-automatic" className={dropdownItemClass}>Semi Automatic Pet Blowers</Link>
                  <Link href="/pet-jars" className={dropdownItemClass}>Pet Jar Blowing Machine</Link>
                </div>
              </div>
              <Link href="/pet" className={dropdownItemClass}>Pet</Link>
              <Link href="/can" className={dropdownItemClass}>Can</Link>
              <Link href="/glass" className={dropdownItemClass}>Glass</Link>
              <Link href="/pouch" className={dropdownItemClass}>Pouch</Link>
              <Link href="/brick-carton" className={dropdownItemClass}>Brick Carton</Link>
              <Link href="/gable-top-carton" className={dropdownItemClass}>Gable Top Carton</Link>
              <Link href="/aseptic-drum" className={dropdownItemClass}>Aseptic Drum</Link>


            </div>
          </div>
          <div className="relative group">
            <button className={linkClass}>
              Liquid <FiChevronDown className="text-sm opacity-70" />
            </button>
            <div className={dropdownClass}>
              <div className="relative group/sub">
                <Link href="/mineral-water-line-machines" className="px-6 py-2.5 hover:text-dark transition-colors w-full flex items-center justify-between gap-2 group/link">
                  <span className="leading-snug">Mineral Water Line Machines</span>
                  <FiChevronRight className="text-sm opacity-70 shrink-0" />
                </Link>
                <div className="absolute top-0 left-full w-64 bg-seppa-red text-white rounded-md shadow-lg opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300 transform translate-x-2 group-hover/sub:translate-x-0 z-50 flex flex-col py-2">
                  <Link href="/still-water" className={dropdownItemClass}>Still Water</Link>
                  <Link href="/mineral-water" className={dropdownItemClass}>Mineral Water</Link>
                  <Link href="/alkaline-water" className={dropdownItemClass}>Alkaline Water</Link>
                  <Link href="/sparkling-water" className={dropdownItemClass}>Sparkling Water</Link>
                  <Link href="/structured-water" className={dropdownItemClass}>Structured Water</Link>
                  <Link href="/flavored-vitaminized-water" className={dropdownItemClass}>Flavored Vitaminized Water</Link>
                </div>
              </div>
              <Link href="/soft-drink-line-machines" className={dropdownItemClass}>Soft Drink / Beverages</Link>
              <div className="relative group/sub">
                <Link href="/juice" className="px-6 py-2.5 hover:text-dark transition-colors w-full flex items-center justify-between gap-2 group/link">
                  <span className="leading-snug">Juices & Nectars</span>
                  <FiChevronRight className="text-sm opacity-70 shrink-0" />
                </Link>
                <div className="absolute top-0 left-full w-64 bg-seppa-red text-white rounded-md shadow-lg opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300 transform translate-x-2 group-hover/sub:translate-x-0 z-50 flex flex-col py-2">
                  <Link href="/juice" className={dropdownItemClass}>Juice , Nectars soft drinks</Link>
                  <Link href="/isotonics" className={dropdownItemClass}>Isotonics</Link>
                  <Link href="/teas" className={dropdownItemClass}>Teas (JNSDIT)</Link>
                </div>
              </div>
              <Link href="/beer" className={dropdownItemClass}>Beer</Link>
              <Link href="/alcohol-spirits" className={dropdownItemClass}>Alcohol & Spirits</Link>
              <Link href="/wine-mead" className={dropdownItemClass}>Wine & Mead</Link>
              <Link href="/rt" className={dropdownItemClass}>RTD's & Seltzers</Link>
              <Link href="/ldp" className={dropdownItemClass}>LDP (Liquid Dairy Products)</Link>
              <Link href="/ketchups-sauces" className={dropdownItemClass}>Tomato & Ketchups</Link>
            </div>
          </div>
          <div className='relative group'>
            <button className={linkClass}>
              Services <FiChevronDown className="text-sm opacity-70" />
            </button>
            <div className={dropdownClass}>
              <Link href="/services/packaging" className={dropdownItemClass}>Packaging</Link>
              <Link href="/services/spare-parts-and-logistics-training" className={dropdownItemClass}>Spare parts & Logistics Training</Link>
              <Link href="/services/maintenance" className={dropdownItemClass}>Maintenance</Link>
              <Link href="/services/line-improvement" className={dropdownItemClass}>Line Improvement</Link>
              <Link href="/services/line-conversions-and-moulds" className={dropdownItemClass}>Line Conversions & Moulds</Link>
              <Link href="/services/audits" className={dropdownItemClass}>Audits</Link>
              <Link href="/services/training" className={dropdownItemClass}>Training</Link>
            </div>
          </div>
          <div className='relative group'>
            <button className={linkClass}>
              Complete Lines  <FiChevronDown className="text-sm opacity-70" />
            </button>
            <div className={dropdownClass}>
              <Link href="/complete-lines" className={dropdownItemClass}>Complete Lines</Link>
              <Link href="/liquid" className={dropdownItemClass}>Water Lines</Link>
              <Link href="/soft-drink-line-machines" className={dropdownItemClass}>Soft Drink & Beverages Lines</Link>
              <Link href="/juice-line-machines" className={dropdownItemClass}>Juice & Nectars Lines</Link>
              <Link href="/beer-line-machines" className={dropdownItemClass}>Beer Lines</Link>
              <Link href="/wine-me" className={dropdownItemClass}>Wine & Mead Lines</Link>
              <Link href="/liquor-spirits-line-machines" className={dropdownItemClass}>Liquor & Spirits Lines</Link>
              <Link href="/dairy-product-line-machines" className={dropdownItemClass}>Liquid  Dairy Products</Link>
              <Link href="/ketchup-sauce-filling-line-machines" className={dropdownItemClass}>Ketchups & Sauces </Link>
            </div>
          </div>
          <div className='relative group'>
            <button className={linkClass}>
              Equipments<FiChevronDown className="text-sm opacity-70" />
            </button>
            <div className="absolute top-full -left-64 mt-2 w-[90vw] lg:w-[900px] bg-seppa-red text-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50 p-3 grid grid-rows-6 grid-flow-col">
              {/* Column 1 */}
              <Link href="/processing" className={dropdownItemClass}>Processing</Link>
              <Link href="/blowing" className={dropdownItemClass}>Blowing</Link>
              <Link href="/pre-form-sterilization" className={dropdownItemClass}>Pre Form Sterlization</Link>
              <Link href="/unscramblers" className={dropdownItemClass}>Unscramblers</Link>
              <Link href="/rinser-filler-capper" className={dropdownItemClass}>Rinser Filler Capper</Link>
              <Link href="/kombo" className={dropdownItemClass}>Kombo</Link>

              {/* Column 2 */}
              <Link href="/elevators" className={dropdownItemClass}>Elevators</Link>
              <Link href="/labelling" className={dropdownItemClass}>Labelling</Link>
              <Link href="/batch-coders" className={dropdownItemClass}>Batch Coders</Link>
              <Link href="/bottle-handling-systems" className={dropdownItemClass}>Bottle Handling</Link>
              <Link href="/shrink-wrapping" className={dropdownItemClass}>Shrink Wrapping</Link>
              <Link href="/carton-handling" className={dropdownItemClass}>Carton Handling</Link>

              {/* Column 3 */}
              <Link href="/pallet-equipment" className={dropdownItemClass}>Pallet Equipment</Link>
              <Link href="/stretch-wrapping" className={dropdownItemClass}>Stretch Wrapping</Link>
              <Link href="/crate-stacker" className={dropdownItemClass}>Crate Stacker</Link>
              <Link href="/refrigeration-system" className={dropdownItemClass}>Refrigeration System</Link>
              <Link href="/air-dryer" className={dropdownItemClass}>Air Dryer</Link>
              <Link href="/crate-washers" className={dropdownItemClass}>Crate Washers</Link>

              {/* Column 4 */}
              <Link href="/glass-bottle-washer" className={dropdownItemClass}>Glass Bottle Washer</Link>
              <Link href="/glass-bottle-filler-capper" className={dropdownItemClass}>Glass Bottle Filler Capper</Link>
              <Link href="/tunnel-pasteurizers" className={dropdownItemClass}>Tunnel Pasteurizers</Link>
              <Link href="/tunnel-cooler" className={dropdownItemClass}>Tunnel Cooler</Link>
              <Link href="/de-capper" className={dropdownItemClass}>De Capper</Link>
              <Link href="/large-bottle-filler" className={dropdownItemClass}>Large Bottle Filler</Link>
            </div>
          </div>
          <div className='relative group'>
            <button className={linkClass}>
              Enquiry  <FiChevronDown className="text-sm opacity-70" />
            </button>
            <div className={dropdownClass}>
              <Link href="/product-enquiry" className={dropdownItemClass}>Product Enquiry</Link>
              <Link href="/investors" className={dropdownItemClass}>Investors</Link>
              <Link href="/dealers" className={dropdownItemClass}>Dealers</Link>
            </div>
          </div>
          <Link href="/video-gallery" className={linkClass}>Videos</Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-2 group cursor-pointer">
          <Link
            href="/contact-us"
            className="px-6 py-3 rounded-full font-bold transition duration-300 bg-[#101934] text-white group-hover:bg-seppa-red tracking-wide"
          >
            Contact Us
          </Link>
          <Link
            href="/contact-us"
            className="w-12 h-12 rounded-full bg-seppa-red group-hover:bg-[#101934] transition duration-300 flex items-center justify-center text-white shadow-md shrink-0"
          >
            <svg className="transform transition-transform duration-300 group-hover:rotate-45" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="19" x2="19" y2="5"></line><polyline points="9 5 19 5 19 15"></polyline></svg>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`lg:hidden text-2xl z-50 relative text-white`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu Content */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-[#101934] z-40 pt-24 pb-8 px-6 overflow-y-auto shadow-2xl animate-in slide-in-from-right duration-300">
          <div className="flex flex-col space-y-4 text-lg pb-10">
            <Link href="/" className="text-white font-medium font-heading hover:text-[#cda262] transition border-b border-white/10 pb-2" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            
            {/* Products */}
            <details className="group border-b border-white/10 pb-2">
              <summary className="flex justify-between items-center text-white font-medium font-heading cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                Products <FiChevronDown className="transition-transform group-open:rotate-180" />
              </summary>
              <div className="flex flex-col space-y-3 mt-3 pl-4 text-base">
                <Link href="/complete-lines" className="text-gray-300 hover:text-seppa-red pl-2 flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>Complete Lines</span>
                </Link>
                
                <div className="font-medium text-seppa-red">Bottling</div>
                <Link href="/soft-drink-line-machines" className="text-gray-300 hover:text-seppa-red pl-2 flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>Soft Drinks / Carbonated Beverages</span>
                </Link>
                <Link href="/juice-line-machines" className="text-gray-300 hover:text-seppa-red pl-2 flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>Juice / Non-Carbonated Beverages</span>
                </Link>
                <Link href="/beer-line-machines" className="text-gray-300 hover:text-seppa-red pl-2 flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>Beer</span>
                </Link>
                <Link href="/dairy-product-line-machines" className="text-gray-300 hover:text-seppa-red pl-2 flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>Dairy</span>
                </Link>
                <Link href="/ketchup-sauce-filling-line-machines" className="text-gray-300 hover:text-seppa-red pl-2 flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>Ketchup / Sauce</span>
                </Link>
                <Link href="/water-bottle-filling-machines" className="text-gray-300 hover:text-seppa-red pl-2 flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>Water</span>
                </Link>
                
                <div className="font-medium text-seppa-red pt-2">Filling Technologies</div>
                <Link href="/rinsing-machines" className="text-gray-300 hover:text-seppa-red pl-2 flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>Rinsers</span>
                </Link>
                <Link href="/capping-machines" className="text-gray-300 hover:text-seppa-red pl-2 flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>Cappers</span>
                </Link>
                <Link href="/labeling-machines" className="text-gray-300 hover:text-seppa-red pl-2 flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>Labellers</span>
                </Link>
                <Link href="/bottle-handling-systems" className="text-gray-300 hover:text-seppa-red pl-2 flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>Bottle Handling Systems</span>
                </Link>
                <Link href="/conveyors" className="text-gray-300 hover:text-seppa-red pl-2 flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>Conveyors</span>
                </Link>
                <Link href="/kombination-machines" className="text-gray-300 hover:text-seppa-red pl-2 flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>Kombination Machines (Rinser-Filler-Capper)</span>
                </Link>
                <Link href="/monobloc-filling-machines" className="text-gray-300 hover:text-seppa-red pl-2 flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>Monobloc Filling Machines</span>
                </Link>
              </div>
            </details>

            {/* Packaging */}
            <details className="group border-b border-white/10 pb-2">
              <summary className="flex justify-between items-center text-white font-medium font-heading cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                Packaging <FiChevronDown className="transition-transform group-open:rotate-180" />
              </summary>
              <div className="flex flex-col space-y-3 mt-3 pl-4 text-base">
                <div className="font-medium text-seppa-red">Pet Blowers</div>
                <Link href="/automatic" className="text-gray-300 hover:text-seppa-red pl-2 flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>Automatic Pet Blowers</span>
                </Link>
                <Link href="/semi-automatic" className="text-gray-300 hover:text-seppa-red pl-2 flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>Semi Automatic Pet Blowers</span>
                </Link>
                <Link href="/pet-jars" className="text-gray-300 hover:text-seppa-red pl-2 flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>Pet Jar Blowing Machine</span>
                </Link>
                <Link href="/pet" className="text-gray-300 hover:text-seppa-red flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>Pet</span>
                </Link>
                <Link href="/can" className="text-gray-300 hover:text-seppa-red flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>Can</span>
                </Link>
                <Link href="/glass" className="text-gray-300 hover:text-seppa-red flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>Glass</span>
                </Link>
                <Link href="/pouch" className="text-gray-300 hover:text-seppa-red flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>Pouch</span>
                </Link>
                <Link href="/brick-carton" className="text-gray-300 hover:text-seppa-red flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>Brick Carton</span>
                </Link>
                <Link href="/gable-top-carton" className="text-gray-300 hover:text-seppa-red flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>Gable Top Carton</span>
                </Link>
                <Link href="/aseptic-drum" className="text-gray-300 hover:text-seppa-red flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>Aseptic Drum</span>
                </Link>
              </div>
            </details>

            {/* Liquid */}
            <details className="group border-b border-white/10 pb-2">
              <summary className="flex justify-between items-center text-white font-medium font-heading cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                Liquid <FiChevronDown className="transition-transform group-open:rotate-180" />
              </summary>
              <div className="flex flex-col space-y-3 mt-3 pl-4 text-base">
                <div className="font-medium text-seppa-red">Mineral Water Line Machines</div>
                <Link href="/still-water" className="text-gray-300 hover:text-seppa-red pl-2 flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>Still Water</span>
                </Link>
                <Link href="/mineral-water" className="text-gray-300 hover:text-seppa-red pl-2 flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>Mineral Water</span>
                </Link>
                <Link href="/alkaline-water" className="text-gray-300 hover:text-seppa-red pl-2 flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>Alkaline Water</span>
                </Link>
                <Link href="/sparkling-water" className="text-gray-300 hover:text-seppa-red pl-2 flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>Sparkling Water</span>
                </Link>
                <Link href="/structured-water" className="text-gray-300 hover:text-seppa-red pl-2 flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>Structured Water</span>
                </Link>
                <Link href="/flavored-vitaminized-water" className="text-gray-300 hover:text-seppa-red pl-2 flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>Flavored Vitaminized Water</span>
                </Link>
                
                <Link href="/soft-drink-line-machines" className="text-gray-300 hover:text-seppa-red flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>Soft Drink / Beverages</span>
                </Link>
                
                <div className="font-medium text-seppa-red pt-2">Juices & Nectars</div>
                <Link href="/juice" className="text-gray-300 hover:text-seppa-red pl-2 flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>Juice , Nectars soft drinks</span>
                </Link>
                <Link href="/isotonics" className="text-gray-300 hover:text-seppa-red pl-2 flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>Isotonics</span>
                </Link>
                <Link href="/teas" className="text-gray-300 hover:text-seppa-red pl-2 flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>Teas (JNSDIT)</span>
                </Link>

                <Link href="/beer" className="text-gray-300 hover:text-seppa-red pt-2 flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>Beer</span>
                </Link>
                <Link href="/alcohol-spirits" className="text-gray-300 hover:text-seppa-red flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>Alcohol & Spirits</span>
                </Link>
                <Link href="/wine-mead" className="text-gray-300 hover:text-seppa-red flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>Wine & Mead</span>
                </Link>
                <Link href="/rt" className="text-gray-300 hover:text-seppa-red flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>RTD's & Seltzers</span>
                </Link>
                <Link href="/ldp" className="text-gray-300 hover:text-seppa-red flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>LDP (Liquid Dairy Products)</span>
                </Link>
                <Link href="/ketchups-sauces" className="text-gray-300 hover:text-seppa-red flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>Tomato & Ketchups</span>
                </Link>
              </div>
            </details>

            {/* Services */}
            <details className="group border-b border-white/10 pb-2">
              <summary className="flex justify-between items-center text-white font-medium font-heading cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                Services <FiChevronDown className="transition-transform group-open:rotate-180" />
              </summary>
              <div className="flex flex-col space-y-3 mt-3 pl-4 text-base">
                <Link href="/services/packaging" className="text-gray-300 hover:text-seppa-red flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>Packaging</span>
                </Link>
                <Link href="/services/spare-parts-and-logistics-training" className="text-gray-300 hover:text-seppa-red flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>Spare parts & Logistics Training</span>
                </Link>
                <Link href="/services/maintenance" className="text-gray-300 hover:text-seppa-red flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>Maintenance</span>
                </Link>
                <Link href="/services/line-improvement" className="text-gray-300 hover:text-seppa-red flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>Line Improvement</span>
                </Link>
                <Link href="/services/line-conversions-and-moulds" className="text-gray-300 hover:text-seppa-red flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>Line Conversions & Moulds</span>
                </Link>
                <Link href="/services/audits" className="text-gray-300 hover:text-seppa-red flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>Audits</span>
                </Link>
                <Link href="/services/training" className="text-gray-300 hover:text-seppa-red flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>Training</span>
                </Link>
              </div>
            </details>

            {/* Complete Lines */}
            <details className="group border-b border-white/10 pb-2">
              <summary className="flex justify-between items-center text-white font-medium font-heading cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                Complete Lines <FiChevronDown className="transition-transform group-open:rotate-180" />
              </summary>
              <div className="flex flex-col space-y-3 mt-3 pl-4 text-base">
                <Link href="/complete-lines" className="text-gray-300 hover:text-seppa-red flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>Complete Lines</span>
                </Link>
                <Link href="/liquid" className="text-gray-300 hover:text-seppa-red flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>Water Lines</span>
                </Link>
                <Link href="/soft-drink-line-machines" className="text-gray-300 hover:text-seppa-red flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>Soft Drink & Beverages Lines</span>
                </Link>
                <Link href="/juice-line-machines" className="text-gray-300 hover:text-seppa-red flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>Juice & Nectars Lines</span>
                </Link>
                <Link href="/beer-line-machines" className="text-gray-300 hover:text-seppa-red flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>Beer Lines</span>
                </Link>
                <Link href="/wine-me" className="text-gray-300 hover:text-seppa-red flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>Wine & Mead Lines</span>
                </Link>
                <Link href="/liquor-spirits-line-machines" className="text-gray-300 hover:text-seppa-red flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>Liquor & Spirits Lines</span>
                </Link>
                <Link href="/dairy-product-line-machines" className="text-gray-300 hover:text-seppa-red flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>Liquid Dairy Products</span>
                </Link>
                <Link href="/ketchup-sauce-filling-line-machines" className="text-gray-300 hover:text-seppa-red flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>Ketchups & Sauces</span>
                </Link>
              </div>
            </details>

            {/* Equipments */}
            <details className="group border-b border-white/10 pb-2">
              <summary className="flex justify-between items-center text-white font-medium font-heading cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                Equipments <FiChevronDown className="transition-transform group-open:rotate-180" />
              </summary>
              <div className="flex flex-col space-y-3 mt-3 pl-4 text-base">
                <div className="font-medium text-seppa-red">Processing & Handling</div>
                <Link href="/processing" className="text-gray-300 hover:text-seppa-red pl-2 flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>Processing</span>
                </Link>
                <Link href="/blowing" className="text-gray-300 hover:text-seppa-red pl-2 flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>Blowing</span>
                </Link>
                <Link href="/pre-form-sterilization" className="text-gray-300 hover:text-seppa-red pl-2 flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>Pre Form Sterlization</span>
                </Link>
                <Link href="/unscramblers" className="text-gray-300 hover:text-seppa-red pl-2 flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>Unscramblers</span>
                </Link>
                <Link href="/rinser-filler-capper" className="text-gray-300 hover:text-seppa-red pl-2 flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>Rinser Filler Capper</span>
                </Link>
                <Link href="/kombo" className="text-gray-300 hover:text-seppa-red pl-2 flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>Kombo</span>
                </Link>
                <Link href="/elevators" className="text-gray-300 hover:text-seppa-red pl-2 flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>Elevators</span>
                </Link>
                <Link href="/bottle-handling-systems" className="text-gray-300 hover:text-seppa-red pl-2 flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>Bottle Handling</span>
                </Link>
                <Link href="/carton-handling" className="text-gray-300 hover:text-seppa-red pl-2 flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>Carton Handling</span>
                </Link>
                
                <div className="font-medium text-seppa-red pt-2">Labelling & Packaging</div>
                <Link href="/labelling" className="text-gray-300 hover:text-seppa-red pl-2 flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>Labelling</span>
                </Link>
                <Link href="/batch-coders" className="text-gray-300 hover:text-seppa-red pl-2 flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>Batch Coders</span>
                </Link>
                <Link href="/shrink-wrapping" className="text-gray-300 hover:text-seppa-red pl-2 flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>Shrink Wrapping</span>
                </Link>
                <Link href="/pallet-equipment" className="text-gray-300 hover:text-seppa-red pl-2 flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>Pallet Equipment</span>
                </Link>
                <Link href="/stretch-wrapping" className="text-gray-300 hover:text-seppa-red pl-2 flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>Stretch Wrapping</span>
                </Link>
                
                <div className="font-medium text-seppa-red pt-2">Ancillary & Others</div>
                <Link href="/crate-stacker" className="text-gray-300 hover:text-seppa-red pl-2 flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>Crate Stacker</span>
                </Link>
                <Link href="/refrigeration-system" className="text-gray-300 hover:text-seppa-red pl-2 flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>Refrigeration System</span>
                </Link>
                <Link href="/air-dryer" className="text-gray-300 hover:text-seppa-red pl-2 flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>Air Dryer</span>
                </Link>
                <Link href="/crate-washers" className="text-gray-300 hover:text-seppa-red pl-2 flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>Crate Washers</span>
                </Link>
                <Link href="/glass-bottle-washer" className="text-gray-300 hover:text-seppa-red pl-2 flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>Glass Bottle Washer</span>
                </Link>
                <Link href="/glass-bottle-filler-capper" className="text-gray-300 hover:text-seppa-red pl-2 flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>Glass Bottle Filler Capper</span>
                </Link>
                <Link href="/tunnel-pasteurizers" className="text-gray-300 hover:text-seppa-red pl-2 flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>Tunnel Pasteurizers</span>
                </Link>
                <Link href="/tunnel-cooler" className="text-gray-300 hover:text-seppa-red pl-2 flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>Tunnel Cooler</span>
                </Link>
                <Link href="/de-capper" className="text-gray-300 hover:text-seppa-red pl-2 flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>De Capper</span>
                </Link>
                <Link href="/large-bottle-filler" className="text-gray-300 hover:text-seppa-red pl-2 flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>Large Bottle Filler</span>
                </Link>
              </div>
            </details>

            {/* Enquiry */}
            <details className="group border-b border-white/10 pb-2">
              <summary className="flex justify-between items-center text-white font-medium font-heading cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                Enquiry <FiChevronDown className="transition-transform group-open:rotate-180" />
              </summary>
              <div className="flex flex-col space-y-3 mt-3 pl-4 text-base">
                <Link href="/product-enquiry" className="text-gray-300 hover:text-seppa-red flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>Product Enquiry</span>
                </Link>
                <Link href="/investors" className="text-gray-300 hover:text-seppa-red flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>Investors</span>
                </Link>
                <Link href="/dealers" className="text-gray-300 hover:text-seppa-red flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>Dealers</span>
                </Link>
              </div>
            </details>

            <Link href="/video-gallery" className="text-white font-medium font-heading hover:text-[#cda262] transition border-b border-white/10 pb-2" onClick={() => setIsMobileMenuOpen(false)}>Videos</Link>
            {/* <Link href="/contact-us" className="text-white font-medium font-heading hover:text-[#cda262] transition border-b border-white/10 pb-2" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link> */}

            <div className="pt-6 mt-auto">
              <Link href="/contact-us" className="bg-seppa-red text-white px-6 py-4 rounded-full font-medium hover:bg-white hover:text-[#101934] transition flex items-center justify-center gap-2 w-full text-center shadow-md" onClick={() => setIsMobileMenuOpen(false)}>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
