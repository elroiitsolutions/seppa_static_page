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

  // Dynamic header classes - static/absolute positioning (no sticky behavior)
  const headerClass = "absolute top-0 left-0 w-full z-50 bg-transparent pt-6 lg:pt-12";

  const linkClass = "font-medium hover:text-gold transition flex items-center gap-1 py-2 text-white";

  const dropdownClass = "absolute top-full left-0 mt-2 w-56 bg-seppa-red text-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50 flex flex-col py-2";
  const dropdownItemClass = "px-6 py-2.5 hover:text-dark transition-colors block w-full text-left";

  return (
    <header className={headerClass}>
      <div className="container mx-auto px-4 flex justify-between items-center pb-4 lg:pb-6 border-b border-white/20">
        {/* Logo */}
        <div className="logo z-50 relative">
          <Link href="/">
            <img
              src={logoImg.src}
              alt="Seppa Solutions Logo"
              className="h-10 md:h-14 transition-all duration-300 bg-white"
            />
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
              <Link href="Gable-top-carton" className={dropdownItemClass}>Gable Top Carton</Link>
              <Link href="Aseptic-drum" className={dropdownItemClass}>Aseptic Drum</Link>


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
              <Link href="/pet" className={dropdownItemClass}>Soft Drink / Beverages</Link>
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
              <Link href="/complete-lines" className={dropdownItemClass}>Packaging</Link>
              <Link href="/liquid" className={dropdownItemClass}>Spare parts & Logistics Training</Link>
              <Link href="/soft-drink-line-machines" className={dropdownItemClass}>Maintenance</Link>
              <Link href="/juice-line-machines" className={dropdownItemClass}>Line Improvement</Link>
              <Link href="/beer-line-machines" className={dropdownItemClass}>Line Conversions & Moulds</Link>
              <Link href="/wine-me" className={dropdownItemClass}>Audits</Link>
              <Link href="/liquor-spirits-line-machines" className={dropdownItemClass}>Training</Link>
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
              <Link href="/complete-lines" className={dropdownItemClass}>Processing</Link>
              <Link href="/liquid" className={dropdownItemClass}>Blowing</Link>
              <Link href="/soft-drink-line-machines" className={dropdownItemClass}>Pre Form Sterlization</Link>
              <Link href="/juice-line-machines" className={dropdownItemClass}>Unscramblers</Link>
              <Link href="/beer-line-machines" className={dropdownItemClass}>Rinser Filler Capper</Link>
              <Link href="/wine-me" className={dropdownItemClass}>Kombo</Link>

              {/* Column 2 */}
              <Link href="/liquor-spirits-line-machines" className={dropdownItemClass}>Elevators</Link>
              <Link href="/dairy-product-line-machines" className={dropdownItemClass}>Labelling</Link>
              <Link href="/ketchup-sauce-filling-line-machines" className={dropdownItemClass}>Batch Coders</Link>
              <Link href="/bottle-handling-systems" className={dropdownItemClass}>Bottle Handling</Link>
              <Link href="/labeling-machines" className={dropdownItemClass}>Shrink Wrapping</Link>
              <Link href="/labeling-machines" className={dropdownItemClass}>Carton Handling</Link>

              {/* Column 3 */}
              <Link href="/labeling-machines" className={dropdownItemClass}>Pallet Equipment</Link>
              <Link href="/labeling-machines" className={dropdownItemClass}>Stretch Wrapping</Link>
              <Link href="/labeling-machines" className={dropdownItemClass}>Crate Stacker</Link>
              <Link href="/labeling-machines" className={dropdownItemClass}>Refrigeration System</Link>
              <Link href="/labeling-machines" className={dropdownItemClass}>Air Dryer</Link>
              <Link href="/labeling-machines" className={dropdownItemClass}>Crate Washers</Link>

              {/* Column 4 */}
              <Link href="/labeling-machines" className={dropdownItemClass}>Glass Bottle Washer</Link>
              <Link href="/labeling-machines" className={dropdownItemClass}>Glass Bottle Filler Capper</Link>
              <Link href="/labeling-machines" className={dropdownItemClass}>Tunnel Pasteurizers</Link>
              <Link href="/labeling-machines" className={dropdownItemClass}>Tunnel Cooler</Link>
              <Link href="/labeling-machines" className={dropdownItemClass}>De Capper</Link>
              <Link href="/labeling-machines" className={dropdownItemClass}>Large Bottle Filler</Link>
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
          <Link href="/videos" className={linkClass}>Videos</Link>
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
                <Link href="/complete-lines" className="text-gray-300 hover:text-seppa-red pl-2" onClick={() => setIsMobileMenuOpen(false)}>Complete Lines</Link>
                
                <div className="font-medium text-seppa-red">Bottling</div>
                <Link href="/liquid" className="text-gray-300 hover:text-seppa-red pl-2" onClick={() => setIsMobileMenuOpen(false)}>Soft Drinks / Carbonated Beverages</Link>
                <Link href="/juice-line-machines" className="text-gray-300 hover:text-seppa-red pl-2" onClick={() => setIsMobileMenuOpen(false)}>Juice / Non-Carbonated Beverages</Link>
                <Link href="/beer-line-machines" className="text-gray-300 hover:text-seppa-red pl-2" onClick={() => setIsMobileMenuOpen(false)}>Beer</Link>
                <Link href="/dairy-product-line-machines" className="text-gray-300 hover:text-seppa-red pl-2" onClick={() => setIsMobileMenuOpen(false)}>Dairy</Link>
                <Link href="/ketchup-sauce-filling-line-machines" className="text-gray-300 hover:text-seppa-red pl-2" onClick={() => setIsMobileMenuOpen(false)}>Ketchup / Sauce</Link>
                <Link href="/water-bottle-filling-machines" className="text-gray-300 hover:text-seppa-red pl-2" onClick={() => setIsMobileMenuOpen(false)}>Water</Link>
                
                <div className="font-medium text-seppa-red pt-2">Filling Technologies</div>
                <Link href="/rinsing-machines" className="text-gray-300 hover:text-seppa-red pl-2" onClick={() => setIsMobileMenuOpen(false)}>Rinsers</Link>
                <Link href="/capping-machines" className="text-gray-300 hover:text-seppa-red pl-2" onClick={() => setIsMobileMenuOpen(false)}>Cappers</Link>
                <Link href="/labeling-machines" className="text-gray-300 hover:text-seppa-red pl-2" onClick={() => setIsMobileMenuOpen(false)}>Labellers</Link>
                <Link href="/bottle-handling-systems" className="text-gray-300 hover:text-seppa-red pl-2" onClick={() => setIsMobileMenuOpen(false)}>Bottle Handling Systems</Link>
                <Link href="/conveyors" className="text-gray-300 hover:text-seppa-red pl-2" onClick={() => setIsMobileMenuOpen(false)}>Conveyors</Link>
                <Link href="/kombination-machines" className="text-gray-300 hover:text-seppa-red pl-2" onClick={() => setIsMobileMenuOpen(false)}>Kombination Machines (Rinser-Filler-Capper)</Link>
                <Link href="/monobloc-filling-machines" className="text-gray-300 hover:text-seppa-red pl-2" onClick={() => setIsMobileMenuOpen(false)}>Monobloc Filling Machines</Link>
              </div>
            </details>

            {/* Packaging */}
            <details className="group border-b border-white/10 pb-2">
              <summary className="flex justify-between items-center text-white font-medium font-heading cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                Packaging <FiChevronDown className="transition-transform group-open:rotate-180" />
              </summary>
              <div className="flex flex-col space-y-3 mt-3 pl-4 text-base">
                <div className="font-medium text-seppa-red">Pet Blowers</div>
                <Link href="/automatic" className="text-gray-300 hover:text-seppa-red pl-2" onClick={() => setIsMobileMenuOpen(false)}>Automatic Pet Blowers</Link>
                <Link href="/semi-automatic" className="text-gray-300 hover:text-seppa-red pl-2" onClick={() => setIsMobileMenuOpen(false)}>Semi Automatic Pet Blowers</Link>
                <Link href="/pet-jars" className="text-gray-300 hover:text-seppa-red pl-2" onClick={() => setIsMobileMenuOpen(false)}>Pet Jar Blowing Machine</Link>
                <Link href="/pet" className="text-gray-300 hover:text-seppa-red" onClick={() => setIsMobileMenuOpen(false)}>Pet</Link>
                <Link href="/can" className="text-gray-300 hover:text-seppa-red" onClick={() => setIsMobileMenuOpen(false)}>Can</Link>
                <Link href="/glass" className="text-gray-300 hover:text-seppa-red" onClick={() => setIsMobileMenuOpen(false)}>Glass</Link>
                <Link href="/pouch" className="text-gray-300 hover:text-seppa-red" onClick={() => setIsMobileMenuOpen(false)}>Pouch</Link>
                <Link href="/brick-carton" className="text-gray-300 hover:text-seppa-red" onClick={() => setIsMobileMenuOpen(false)}>Brick Carton</Link>
                <Link href="/Gable-top-carton" className="text-gray-300 hover:text-seppa-red" onClick={() => setIsMobileMenuOpen(false)}>Gable Top Carton</Link>
                <Link href="/Aseptic-drum" className="text-gray-300 hover:text-seppa-red" onClick={() => setIsMobileMenuOpen(false)}>Aseptic Drum</Link>
              </div>
            </details>

            {/* Liquid */}
            <details className="group border-b border-white/10 pb-2">
              <summary className="flex justify-between items-center text-white font-medium font-heading cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                Liquid <FiChevronDown className="transition-transform group-open:rotate-180" />
              </summary>
              <div className="flex flex-col space-y-3 mt-3 pl-4 text-base">
                <div className="font-medium text-seppa-red">Mineral Water Line Machines</div>
                <Link href="/still-water" className="text-gray-300 hover:text-seppa-red pl-2" onClick={() => setIsMobileMenuOpen(false)}>Still Water</Link>
                <Link href="/mineral-water" className="text-gray-300 hover:text-seppa-red pl-2" onClick={() => setIsMobileMenuOpen(false)}>Mineral Water</Link>
                <Link href="/alkaline-water" className="text-gray-300 hover:text-seppa-red pl-2" onClick={() => setIsMobileMenuOpen(false)}>Alkaline Water</Link>
                <Link href="/sparkling-water" className="text-gray-300 hover:text-seppa-red pl-2" onClick={() => setIsMobileMenuOpen(false)}>Sparkling Water</Link>
                <Link href="/structured-water" className="text-gray-300 hover:text-seppa-red pl-2" onClick={() => setIsMobileMenuOpen(false)}>Structured Water</Link>
                <Link href="/flavored-vitaminized-water" className="text-gray-300 hover:text-seppa-red pl-2" onClick={() => setIsMobileMenuOpen(false)}>Flavored Vitaminized Water</Link>
                
                <Link href="/pet" className="text-gray-300 hover:text-seppa-red" onClick={() => setIsMobileMenuOpen(false)}>Soft Drink / Beverages</Link>
                
                <div className="font-medium text-seppa-red pt-2">Juices & Nectars</div>
                <Link href="/juice" className="text-gray-300 hover:text-seppa-red pl-2" onClick={() => setIsMobileMenuOpen(false)}>Juice , Nectars soft drinks</Link>
                <Link href="/isotonics" className="text-gray-300 hover:text-seppa-red pl-2" onClick={() => setIsMobileMenuOpen(false)}>Isotonics</Link>
                <Link href="/teas" className="text-gray-300 hover:text-seppa-red pl-2" onClick={() => setIsMobileMenuOpen(false)}>Teas (JNSDIT)</Link>

                <Link href="/beer" className="text-gray-300 hover:text-seppa-red pt-2" onClick={() => setIsMobileMenuOpen(false)}>Beer</Link>
                <Link href="/alcohol-spirits" className="text-gray-300 hover:text-seppa-red" onClick={() => setIsMobileMenuOpen(false)}>Alcohol & Spirits</Link>
                <Link href="/wine-mead" className="text-gray-300 hover:text-seppa-red" onClick={() => setIsMobileMenuOpen(false)}>Wine & Mead</Link>
                <Link href="/rt" className="text-gray-300 hover:text-seppa-red" onClick={() => setIsMobileMenuOpen(false)}>RTD's & Seltzers</Link>
                <Link href="/ldp" className="text-gray-300 hover:text-seppa-red" onClick={() => setIsMobileMenuOpen(false)}>LDP (Liquid Dairy Products)</Link>
                <Link href="/ketchups-sauces" className="text-gray-300 hover:text-seppa-red" onClick={() => setIsMobileMenuOpen(false)}>Tomato & Ketchups</Link>
              </div>
            </details>

            {/* Services */}
            <details className="group border-b border-white/10 pb-2">
              <summary className="flex justify-between items-center text-white font-medium font-heading cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                Services <FiChevronDown className="transition-transform group-open:rotate-180" />
              </summary>
              <div className="flex flex-col space-y-3 mt-3 pl-4 text-base">
                <Link href="/complete-lines" className="text-gray-300 hover:text-seppa-red" onClick={() => setIsMobileMenuOpen(false)}>Packaging</Link>
                <Link href="/liquid" className="text-gray-300 hover:text-seppa-red" onClick={() => setIsMobileMenuOpen(false)}>Spare parts & Logistics Training</Link>
                <Link href="/soft-drink-line-machines" className="text-gray-300 hover:text-seppa-red" onClick={() => setIsMobileMenuOpen(false)}>Maintenance</Link>
                <Link href="/juice-line-machines" className="text-gray-300 hover:text-seppa-red" onClick={() => setIsMobileMenuOpen(false)}>Line Improvement</Link>
                <Link href="/beer-line-machines" className="text-gray-300 hover:text-seppa-red" onClick={() => setIsMobileMenuOpen(false)}>Line Conversions & Moulds</Link>
                <Link href="/wine-me" className="text-gray-300 hover:text-seppa-red" onClick={() => setIsMobileMenuOpen(false)}>Audits</Link>
                <Link href="/liquor-spirits-line-machines" className="text-gray-300 hover:text-seppa-red" onClick={() => setIsMobileMenuOpen(false)}>Training</Link>
              </div>
            </details>

            {/* Complete Lines */}
            <details className="group border-b border-white/10 pb-2">
              <summary className="flex justify-between items-center text-white font-medium font-heading cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                Complete Lines <FiChevronDown className="transition-transform group-open:rotate-180" />
              </summary>
              <div className="flex flex-col space-y-3 mt-3 pl-4 text-base">
                <Link href="/complete-lines" className="text-gray-300 hover:text-seppa-red" onClick={() => setIsMobileMenuOpen(false)}>Complete Lines</Link>
                <Link href="/liquid" className="text-gray-300 hover:text-seppa-red" onClick={() => setIsMobileMenuOpen(false)}>Water Lines</Link>
                <Link href="/soft-drink-line-machines" className="text-gray-300 hover:text-seppa-red" onClick={() => setIsMobileMenuOpen(false)}>Soft Drink & Beverages Lines</Link>
                <Link href="/juice-line-machines" className="text-gray-300 hover:text-seppa-red" onClick={() => setIsMobileMenuOpen(false)}>Juice & Nectars Lines</Link>
                <Link href="/beer-line-machines" className="text-gray-300 hover:text-seppa-red" onClick={() => setIsMobileMenuOpen(false)}>Beer Lines</Link>
                <Link href="/wine-me" className="text-gray-300 hover:text-seppa-red" onClick={() => setIsMobileMenuOpen(false)}>Wine & Mead Lines</Link>
                <Link href="/liquor-spirits-line-machines" className="text-gray-300 hover:text-seppa-red" onClick={() => setIsMobileMenuOpen(false)}>Liquor & Spirits Lines</Link>
                <Link href="/dairy-product-line-machines" className="text-gray-300 hover:text-seppa-red" onClick={() => setIsMobileMenuOpen(false)}>Liquid Dairy Products</Link>
                <Link href="/ketchup-sauce-filling-line-machines" className="text-gray-300 hover:text-seppa-red" onClick={() => setIsMobileMenuOpen(false)}>Ketchups & Sauces</Link>
              </div>
            </details>

            {/* Equipments */}
            <details className="group border-b border-white/10 pb-2">
              <summary className="flex justify-between items-center text-white font-medium font-heading cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                Equipments <FiChevronDown className="transition-transform group-open:rotate-180" />
              </summary>
              <div className="flex flex-col space-y-3 mt-3 pl-4 text-base">
                <div className="font-medium text-seppa-red">Processing & Handling</div>
                <Link href="/complete-lines" className="text-gray-300 hover:text-seppa-red pl-2" onClick={() => setIsMobileMenuOpen(false)}>Processing</Link>
                <Link href="/liquid" className="text-gray-300 hover:text-seppa-red pl-2" onClick={() => setIsMobileMenuOpen(false)}>Blowing</Link>
                <Link href="/soft-drink-line-machines" className="text-gray-300 hover:text-seppa-red pl-2" onClick={() => setIsMobileMenuOpen(false)}>Pre Form Sterlization</Link>
                <Link href="/juice-line-machines" className="text-gray-300 hover:text-seppa-red pl-2" onClick={() => setIsMobileMenuOpen(false)}>Unscramblers</Link>
                <Link href="/beer-line-machines" className="text-gray-300 hover:text-seppa-red pl-2" onClick={() => setIsMobileMenuOpen(false)}>Rinser Filler Capper</Link>
                <Link href="/wine-me" className="text-gray-300 hover:text-seppa-red pl-2" onClick={() => setIsMobileMenuOpen(false)}>Kombo</Link>
                <Link href="/liquor-spirits-line-machines" className="text-gray-300 hover:text-seppa-red pl-2" onClick={() => setIsMobileMenuOpen(false)}>Elevators</Link>
                <Link href="/bottle-handling-systems" className="text-gray-300 hover:text-seppa-red pl-2" onClick={() => setIsMobileMenuOpen(false)}>Bottle Handling</Link>
                <Link href="/labeling-machines" className="text-gray-300 hover:text-seppa-red pl-2" onClick={() => setIsMobileMenuOpen(false)}>Carton Handling</Link>
                
                <div className="font-medium text-seppa-red pt-2">Labelling & Packaging</div>
                <Link href="/dairy-product-line-machines" className="text-gray-300 hover:text-seppa-red pl-2" onClick={() => setIsMobileMenuOpen(false)}>Labelling</Link>
                <Link href="/ketchup-sauce-filling-line-machines" className="text-gray-300 hover:text-seppa-red pl-2" onClick={() => setIsMobileMenuOpen(false)}>Batch Coders</Link>
                <Link href="/labeling-machines" className="text-gray-300 hover:text-seppa-red pl-2" onClick={() => setIsMobileMenuOpen(false)}>Shrink Wrapping</Link>
                <Link href="/labeling-machines" className="text-gray-300 hover:text-seppa-red pl-2" onClick={() => setIsMobileMenuOpen(false)}>Pallet Equipment</Link>
                <Link href="/labeling-machines" className="text-gray-300 hover:text-seppa-red pl-2" onClick={() => setIsMobileMenuOpen(false)}>Stretch Wrapping</Link>
                
                <div className="font-medium text-seppa-red pt-2">Ancillary & Others</div>
                <Link href="/labeling-machines" className="text-gray-300 hover:text-seppa-red pl-2" onClick={() => setIsMobileMenuOpen(false)}>Crate Stacker</Link>
                <Link href="/labeling-machines" className="text-gray-300 hover:text-seppa-red pl-2" onClick={() => setIsMobileMenuOpen(false)}>Refrigeration System</Link>
                <Link href="/labeling-machines" className="text-gray-300 hover:text-seppa-red pl-2" onClick={() => setIsMobileMenuOpen(false)}>Air Dryer</Link>
                <Link href="/labeling-machines" className="text-gray-300 hover:text-seppa-red pl-2" onClick={() => setIsMobileMenuOpen(false)}>Crate Washers</Link>
                <Link href="/labeling-machines" className="text-gray-300 hover:text-seppa-red pl-2" onClick={() => setIsMobileMenuOpen(false)}>Glass Bottle Washer</Link>
                <Link href="/labeling-machines" className="text-gray-300 hover:text-seppa-red pl-2" onClick={() => setIsMobileMenuOpen(false)}>Glass Bottle Filler Capper</Link>
                <Link href="/labeling-machines" className="text-gray-300 hover:text-seppa-red pl-2" onClick={() => setIsMobileMenuOpen(false)}>Tunnel Pasteurizers</Link>
                <Link href="/labeling-machines" className="text-gray-300 hover:text-seppa-red pl-2" onClick={() => setIsMobileMenuOpen(false)}>Tunnel Cooler</Link>
                <Link href="/labeling-machines" className="text-gray-300 hover:text-seppa-red pl-2" onClick={() => setIsMobileMenuOpen(false)}>De Capper</Link>
                <Link href="/labeling-machines" className="text-gray-300 hover:text-seppa-red pl-2" onClick={() => setIsMobileMenuOpen(false)}>Large Bottle Filler</Link>
              </div>
            </details>

            {/* Enquiry */}
            <details className="group border-b border-white/10 pb-2">
              <summary className="flex justify-between items-center text-white font-medium font-heading cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                Enquiry <FiChevronDown className="transition-transform group-open:rotate-180" />
              </summary>
              <div className="flex flex-col space-y-3 mt-3 pl-4 text-base">
                <Link href="/product-enquiry" className="text-gray-300 hover:text-seppa-red" onClick={() => setIsMobileMenuOpen(false)}>Product Enquiry</Link>
                <Link href="/investors" className="text-gray-300 hover:text-seppa-red" onClick={() => setIsMobileMenuOpen(false)}>Investors</Link>
                <Link href="/dealers" className="text-gray-300 hover:text-seppa-red" onClick={() => setIsMobileMenuOpen(false)}>Dealers</Link>
              </div>
            </details>

            <Link href="/videos" className="text-white font-medium font-heading hover:text-[#cda262] transition border-b border-white/10 pb-2" onClick={() => setIsMobileMenuOpen(false)}>Videos</Link>
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
