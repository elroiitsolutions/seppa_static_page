"use client";
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FiMenu, FiX, FiChevronDown, FiChevronRight } from 'react-icons/fi';

import logoImg from '@/assets/logo/logo.png';
import enHeader from '@/messages/en/header.json';
import arHeader from '@/messages/ar/header.json';
import deHeader from '@/messages/de/header.json';
import nlHeader from '@/messages/nl/header.json';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const isArabic = pathname.startsWith('/ar');
  const isGerman = pathname.startsWith('/de');
  const isDutch = pathname.startsWith('/nl');

  const menu = isArabic ? arHeader : isGerman ? deHeader : isDutch ? { ...enHeader, ...nlHeader } : enHeader;

  const getLink = (path: string) => {
    if (path === '/') {
      return isArabic ? '/ar' : isGerman ? '/de' : isDutch ? '/nl' : '/en';
    }
    const prefix = isArabic ? '/ar' : isGerman ? '/de' : isDutch ? '/nl' : '/en';
    return `${prefix}${path}`;
  };

  const currentLocale = isArabic ? 'ar' : isGerman ? 'de' : isDutch ? 'nl' : 'en';

  const getLocaleLabel = (loc: string) => {
    switch (loc) {
      case 'ar': return 'العربية';
      case 'de': return 'Germany';
      case 'nl': return 'Dutch';
      default: return 'English';
    }
  };

  const changeLanguage = (newLocale: string) => {
    if (newLocale === currentLocale) return;
    const prefix = currentLocale === 'en' ? '/en' : currentLocale === 'ar' ? '/ar' : currentLocale === 'de' ? '/de' : '/nl';
    const targetPrefix = newLocale === 'en' ? '/en' : newLocale === 'ar' ? '/ar' : newLocale === 'de' ? '/de' : '/nl';
    router.replace(pathname.replace(prefix, targetPrefix));
  };

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

  // Sync HTML lang and dir attributes based on current language
  useEffect(() => {
    const lang = isArabic ? 'ar' : isGerman ? 'de' : 'en';
    document.documentElement.lang = lang;
    document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
  }, [isArabic, isGerman]);

  // Handle scroll event for sticky header
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));
    };

    // Check scroll position immediately on mount (handles page refresh when already scrolled)
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dynamic header classes - sticky behavior across all viewports
  const headerClass = `fixed inset-x-0 mx-auto z-50 transition-all duration-300 px-3 sm:px-6 lg:px-8 ${scrolled
      ? 'w-full top-0 bg-seppa-blue shadow-lg py-2.5 lg:py-3.5 rounded-none'
      : 'w-full lg:max-w-[1700px] lg:w-[96%] top-0 lg:top-3 2xl:top-6 lg:rounded-[24px] xl:rounded-[30px] bg-transparent py-3 lg:py-4'
    }`;

  const linkClass = `font-medium hover:text-gold transition flex items-center gap-0.5 xl:gap-1 py-1.5 text-white ${isGerman ? 'text-[11px] lg:text-xs xl:text-[13px] 2xl:text-base tracking-tight' : 'text-xs xl:text-sm 2xl:text-base'}`;

  const dropdownClass = "absolute top-full left-0 rtl:left-auto rtl:right-0 mt-2 w-56 bg-seppa-red text-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50 flex flex-col py-2";
  const dropdownItemClass = "px-4 py-1.5 hover:text-dark transition-colors block w-full text-left text-xs xl:text-sm";

  return (
    <>
      <header className={headerClass}>
        <div className="w-full flex justify-between items-center transition-colors duration-300">
        {/* Left: Logo */}
        <div className="shrink-0 flex justify-start items-center z-50 relative mr-2 lg:mr-3 xl:mr-4 rtl:ml-2 rtl:lg:ml-3 rtl:xl:ml-4">
          <Link href="/" className="shrink-0">
            <div className='w-fit h-fit rounded-xl overflow-hidden bg-white p-1.5 lg:p-2 shrink-0'>
              <img
                src={logoImg.src}
                alt="Seppa Solutions Logo"
                className="h-7 lg:h-8 xl:h-10 w-auto transition-all duration-300 shrink-0"
              />
            </div>
          </Link>
        </div>

        {/* Center: Desktop Menu */}
        <nav className={`hidden lg:flex flex-none justify-center items-center ${isGerman ? 'gap-1.5 lg:gap-2 xl:gap-3.5 2xl:gap-6' : 'gap-2.5 lg:gap-3.5 xl:gap-5 2xl:gap-8'}`}>
          <div className="relative group">
            <Link href={getLink("/")} className={linkClass}>
              {menu.home}
            </Link>
          </div>
          <div className="relative group">
            <button suppressHydrationWarning className={linkClass}>
              {menu.packaging} <FiChevronDown className="text-xs opacity-70" />
            </button>
            <div className={dropdownClass}>

              <div className="relative group/sub">
                <div className={`${dropdownItemClass} flex items-center justify-between cursor-pointer gap-2`}>
                  <span className="leading-snug">{menu.petBlowers}</span>
                  <FiChevronRight className="text-sm opacity-70 shrink-0 rtl:rotate-180" />
                </div>
                <div className="absolute top-0 left-full rtl:left-auto rtl:right-full w-64 bg-seppa-red text-white rounded-md shadow-lg opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300 transform translate-x-2 rtl:-translate-x-2 group-hover/sub:translate-x-0 z-50 flex flex-col py-2">
                  <Link href={getLink("/automatic")} className={dropdownItemClass}>{menu.automaticPetBlowers}</Link>
                  <Link href={getLink("/semi-automatic")} className={dropdownItemClass}>{menu.semiAutomaticPetBlowers}</Link>
                  <Link href={getLink("/pet-jars")} className={dropdownItemClass}>{menu.petJarBlowing}</Link>
                </div>
              </div>
              <Link href={getLink("/pet")} className={dropdownItemClass}>{menu.pet}</Link>
              <Link href={getLink("/can")} className={dropdownItemClass}>{menu.can}</Link>
              <Link href={getLink("/glass")} className={dropdownItemClass}>{menu.glass}</Link>
              <Link href={getLink("/pouch")} className={dropdownItemClass}>{menu.pouch}</Link>
              <Link href={getLink("/brick-carton")} className={dropdownItemClass}>{menu.brickCarton}</Link>
              <Link href={getLink("/gable-top-carton")} className={dropdownItemClass}>{menu.gableTopCarton}</Link>
              <Link href={getLink("/aseptic-drum")} className={dropdownItemClass}>{menu.asepticDrum}</Link>


            </div>
          </div>
          <div className="relative group">
            <button suppressHydrationWarning className={linkClass}>
              {menu.liquid} <FiChevronDown className="text-xs opacity-70" />
            </button>
            <div className={dropdownClass}>
              <div className="relative group/sub">
                <Link href={getLink("/mineral-water-line-machines")} className={`${dropdownItemClass} flex items-center justify-between cursor-pointer gap-2`}>
                  <span className="leading-snug">{menu.mineralWaterLine}</span>
                  <FiChevronRight className="text-sm opacity-70 shrink-0 rtl:rotate-180" />
                </Link>
                <div className="absolute top-0 left-full rtl:left-auto rtl:right-full w-64 bg-seppa-red text-white rounded-md shadow-lg opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300 transform translate-x-2 rtl:-translate-x-2 group-hover/sub:translate-x-0 z-50 flex flex-col py-2">
                  <Link href={getLink("/still-water")} className={dropdownItemClass}>{menu.stillWater}</Link>
                  <Link href={getLink("/mineral-water")} className={dropdownItemClass}>{menu.mineralWater}</Link>
                  <Link href={getLink("/alkaline-water")} className={dropdownItemClass}>{menu.alkalineWater}</Link>
                  <Link href={getLink("/sparkling-water")} className={dropdownItemClass}>{menu.sparklingWater}</Link>
                  <Link href={getLink("/structured-water")} className={dropdownItemClass}>{menu.structuredWater}</Link>
                  <Link href={getLink("/flavored-vitaminized-water")} className={dropdownItemClass}>{menu.flavoredWater}</Link>
                </div>
              </div>
              <Link href={getLink("/soft-drinks")} className={dropdownItemClass}>{menu.softDrinks}</Link>
              <div className="relative group/sub">
                <Link href={getLink("/juice")} className={`${dropdownItemClass} flex items-center justify-between cursor-pointer gap-2`}>
                  <span className="leading-snug">{menu.juicesNectars}</span>
                  <FiChevronRight className="text-sm opacity-70 shrink-0 rtl:rotate-180" />
                </Link>
                <div className="absolute top-0 left-full rtl:left-auto rtl:right-full w-64 bg-seppa-red text-white rounded-md shadow-lg opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300 transform translate-x-2 rtl:-translate-x-2 group-hover/sub:translate-x-0 z-50 flex flex-col py-2">
                  <Link href={getLink("/juice&nectars")} className={dropdownItemClass}>{menu.juiceNectarsSoftDrinks}</Link>
                  <Link href={getLink("/isotonics")} className={dropdownItemClass}>{menu.isotonics}</Link>
                  <Link href={getLink("/teas")} className={dropdownItemClass}>{menu.teas}</Link>
                </div>
              </div>
              <Link href={getLink("/beer")} className={dropdownItemClass}>{menu.beer}</Link>
              <Link href={getLink("/alcohol-spirits")} className={dropdownItemClass}>{menu.alcoholSpirits}</Link>
              <Link href={getLink("/wine-mead")} className={dropdownItemClass}>{menu.wineMead}</Link>
              <Link href={getLink("/rt")} className={dropdownItemClass}>{menu.rtdsSeltzers}</Link>
              <Link href={getLink("/ldp")} className={dropdownItemClass}>{menu.ldp}</Link>
              <Link href={getLink("/ketchups-sauces")} className={dropdownItemClass}>{menu.tomatoKetchups}</Link>
            </div>
          </div>
          <div className='relative group'>
            <button suppressHydrationWarning className={linkClass}>
              {menu.services} <FiChevronDown className="text-xs opacity-70" />
            </button>
            <div className={dropdownClass}>
              <Link href={getLink("/services/packaging")} className={dropdownItemClass}>{menu.packaging}</Link>
              <Link href={getLink("/services/spare-parts-and-logistics-training")} className={dropdownItemClass}>{menu.spareParts}</Link>
              <Link href={getLink("/services/maintenance")} className={dropdownItemClass}>{menu.maintenance}</Link>
              <Link href={getLink("/services/line-improvement")} className={dropdownItemClass}>{menu.lineImprovement}</Link>
              <Link href={getLink("/services/line-conversions-and-moulds")} className={dropdownItemClass}>{menu.lineConversions}</Link>
              <Link href={getLink("/services/audits")} className={dropdownItemClass}>{menu.audits}</Link>
              <Link href={getLink("/services/training")} className={dropdownItemClass}>{menu.training}</Link>
            </div>
          </div>
          <div className='relative group'>
            <button suppressHydrationWarning className={linkClass}>
              {menu.completeLines}  <FiChevronDown className="text-xs opacity-70" />
            </button>
            <div className={dropdownClass}>
              <Link href={getLink("/complete-lines")} className={dropdownItemClass}>{menu.completeLines}</Link>
              <Link href={getLink("/liquid")} className={dropdownItemClass}>{menu.waterLines}</Link>
              <Link href={getLink("/soft-drink-lines")} className={dropdownItemClass}>{menu.softDrinkLines}</Link>
              <Link href={getLink("/juice-line-machines")} className={dropdownItemClass}>{menu.juiceLines}</Link>
              <Link href={getLink("/beer-line-machines")} className={dropdownItemClass}>{menu.beerLines}</Link>
              <Link href={getLink("/wine-mead-lines")} className={dropdownItemClass}>{menu.wineLines}</Link>
              <Link href={getLink("/liquor-spirits-line-machines")} className={dropdownItemClass}>{menu.liquorLines}</Link>
              <Link href={getLink("/dairy-product-line-machines")} className={dropdownItemClass}>{menu.dairyLines}</Link>
              <Link href={getLink("/ketchup-sauce-filling-line-machines")} className={dropdownItemClass}>{menu.ketchupsSauces}</Link>
            </div>
          </div>
          <div className='relative group'>
            <button suppressHydrationWarning className={linkClass}>
              {menu.equipments}<FiChevronDown className="text-xs opacity-70" />
            </button>
            <div className="absolute top-full -left-54 mt-2 w-[90vw] lg:w-[750px] xl:w-[850px] bg-seppa-red text-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50 p-4 lg:p-6 grid grid-cols-2 lg:grid-cols-4 gap-y-2 lg:gap-x-4">
              {/* Column 1 */}
              <Link href={getLink("/processing")} className={dropdownItemClass}>{menu.processing}</Link>
              <Link href={getLink("/blowing")} className={dropdownItemClass}>{menu.blowing}</Link>
              <Link href={getLink("/pre-form-sterilization")} className={dropdownItemClass}>{menu.preFormSterilization}</Link>
              <Link href={getLink("/unscramblers")} className={dropdownItemClass}>{menu.unscramblers}</Link>
              <Link href={getLink("/rinser-filler-capper")} className={dropdownItemClass}>{menu.rinserFillerCapper}</Link>
              <Link href={getLink("/kombo")} className={dropdownItemClass}>{menu.kombo}</Link>

              {/* Column 2 */}
              <Link href={getLink("/elevators")} className={dropdownItemClass}>{menu.elevators}</Link>
              <Link href={getLink("/labelling")} className={dropdownItemClass}>{menu.labelling}</Link>
              <Link href={getLink("/batch-coders")} className={dropdownItemClass}>{menu.batchCoders}</Link>
              <Link href={getLink("/bottle-handling-systems")} className={dropdownItemClass}>{menu.bottleHandling}</Link>
              <Link href={getLink("/shrink-wrapping")} className={dropdownItemClass}>{menu.shrinkWrapping}</Link>
              <Link href={getLink("/carton-handling")} className={dropdownItemClass}>{menu.cartonHandling}</Link>

              {/* Column 3 */}
              <Link href={getLink("/pallet-equipment")} className={dropdownItemClass}>{menu.palletEquipment}</Link>
              <Link href={getLink("/stretch-wrapping")} className={dropdownItemClass}>{menu.stretchWrapping}</Link>
              <Link href={getLink("/crate-stacker")} className={dropdownItemClass}>{menu.crateStacker}</Link>
              <Link href={getLink("/refrigeration-system")} className={dropdownItemClass}>{menu.refrigerationSystem}</Link>
              <Link href={getLink("/air-dryer")} className={dropdownItemClass}>{menu.airDryer}</Link>
              <Link href={getLink("/crate-washers")} className={dropdownItemClass}>{menu.crateWashers}</Link>

              {/* Column 4 */}
              <Link href={getLink("/glass-bottle-washer")} className={dropdownItemClass}>{menu.glassBottleWasher}</Link>
              <Link href={getLink("/glass-bottle-filler-capper")} className={dropdownItemClass}>{menu.glassBottleFillerCapper}</Link>
              <Link href={getLink("/tunnel-pasteurizers")} className={dropdownItemClass}>{menu.tunnelPasteurizers}</Link>
              <Link href={getLink("/tunnel-cooler")} className={dropdownItemClass}>{menu.tunnelCooler}</Link>
              <Link href={getLink("/de-capper")} className={dropdownItemClass}>{menu.deCapper}</Link>
              <Link href={getLink("/large-bottle-filler")} className={dropdownItemClass}>{menu.largeBottleFiller}</Link>
            </div>
          </div>
          <div className='relative group'>
            <button suppressHydrationWarning className={linkClass}>
              {menu.enquiry}  <FiChevronDown className="text-xs opacity-70" />
            </button>
            <div className={dropdownClass}>
              <Link href={getLink("/product-enquiry")} className={dropdownItemClass}>{menu.productEnquiry}</Link>
              <Link href={getLink("/investors")} className={dropdownItemClass}>{menu.investors}</Link>
              <Link href={getLink("/dealers")} className={dropdownItemClass}>{menu.dealers}</Link>
            </div>
          </div>
          <Link href={getLink("/video-gallery")} className={linkClass}>{menu.videos}</Link>
        </nav>

        {/* Right: CTA Button & Language Switcher */}
        <div className="hidden lg:flex flex-none justify-end items-center group cursor-pointer gap-2 xl:gap-3 shrink-0 ml-2 lg:ml-3">
          <div className="flex items-center gap-1 xl:gap-2">
            <Link
              href={getLink("/contact-us")}
              className="px-3 xl:px-4 2xl:px-6 py-2 xl:py-2.5 2xl:py-3 rounded-full font-bold transition duration-300 bg-seppa-blue text-white hover:bg-seppa-red tracking-wide text-xs xl:text-sm 2xl:text-base flex items-center justify-center"
            >
              {menu.contactUs}
            </Link>
            <Link
              href={getLink("/contact-us")}
              className="w-8 h-8 xl:w-9 xl:h-9 2xl:w-12 2xl:h-12 rounded-full bg-seppa-red group-hover:bg-seppa-blue transition duration-300 flex items-center justify-center text-white shadow-md shrink-0 animate-pulse"
            >
              <svg className="transform transition-transform duration-300 group-hover:rotate-45 w-[14px] h-[14px] xl:w-[15px] xl:h-[15px] 2xl:w-[18px] 2xl:h-[18px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="19" x2="19" y2="5"></line><polyline points="9 5 19 5 19 15"></polyline></svg>
            </Link>
          </div>
          <div className="relative group/lang shrink-0">
            <button
              suppressHydrationWarning
              className="px-2.5 xl:px-4 py-1.5 xl:py-2.5 rounded-full bg-gold text-[#0d162a] font-bold text-xs xl:text-sm shadow-md hover:bg-white transition-all duration-300 flex items-center gap-1"
            >
              <span>{getLocaleLabel(currentLocale)}</span>
              <FiChevronDown className="transition-transform group-hover/lang:rotate-180 text-xs" />
            </button>
            <div className="absolute right-0 top-full mt-2 w-32 bg-[#0d162a] border border-gold/20 text-white rounded-md shadow-lg opacity-0 invisible group-hover/lang:opacity-100 group-hover/lang:visible transition-all duration-300 transform translate-y-2 group-hover/lang:translate-y-0 z-50 flex flex-col py-1.5 overflow-hidden">
              {['en', 'ar', 'de', 'nl'].map((loc) => (
                <button
                  key={loc}
                  suppressHydrationWarning
                  onClick={() => changeLanguage(loc)}
                  className={`px-4 py-1.5 text-xs xl:text-sm text-center hover:bg-gold hover:text-[#0d162a] transition-colors ${currentLocale === loc ? 'text-gold font-bold' : 'text-white'}`}
                >
                  {getLocaleLabel(loc)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex-grow-0 flex lg:hidden justify-end">
          <button
            suppressHydrationWarning
            className={`text-2xl z-50 relative text-white`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      </header>

      {/* Mobile Menu Content */}
      {isMobileMenuOpen && (
        <div className="xl:hidden fixed inset-0 bg-seppa-blue z-40 pt-24 pb-8 px-6 overflow-y-auto shadow-2xl animate-in slide-in-from-right duration-300">
          <div className="flex flex-col space-y-4 text-lg pb-10">
          <Link href={getLink("/")} className="text-white font-medium font-heading hover:text-[#cda262] transition border-b border-white/10 pb-2" onClick={() => setIsMobileMenuOpen(false)}>{menu.home}</Link>
            {/* Packaging */}
            <details className="group border-b border-white/10 pb-2">
              <summary className="flex justify-between items-center text-white font-medium font-heading cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                {menu.packaging} <FiChevronDown className="transition-transform group-open:rotate-180" />
              </summary>
              <div className="flex flex-col space-y-3 mt-3 pl-4 text-base">
                <div className="font-medium text-seppa-red">{menu.petBlowers}</div>
                <Link href={getLink("/automatic")} className="text-gray-300 hover:text-seppa-red pl-2 flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>{menu.automaticPetBlowers}</span>
                </Link>
                <Link href={getLink("/semi-automatic")} className="text-gray-300 hover:text-seppa-red pl-2 flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>{menu.semiAutomaticPetBlowers}</span>
                </Link>
                <Link href={getLink("/pet-jars")} className="text-gray-300 hover:text-seppa-red pl-2 flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>{menu.petJarBlowing}</span>
                </Link>
                <Link href={getLink("/pet")} className="text-gray-300 hover:text-seppa-red flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>{menu.pet}</span>
                </Link>
                <Link href={getLink("/can")} className="text-gray-300 hover:text-seppa-red flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>{menu.can}</span>
                </Link>
                <Link href={getLink("/glass")} className="text-gray-300 hover:text-seppa-red flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>{menu.glass}</span>
                </Link>
                <Link href={getLink("/pouch")} className="text-gray-300 hover:text-seppa-red flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>{menu.pouch}</span>
                </Link>
                <Link href={getLink("/brick-carton")} className="text-gray-300 hover:text-seppa-red flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>{menu.brickCarton}</span>
                </Link>
                <Link href={getLink("/gable-top-carton")} className="text-gray-300 hover:text-seppa-red flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>{menu.gableTopCarton}</span>
                </Link>
                <Link href={getLink("/aseptic-drum")} className="text-gray-300 hover:text-seppa-red flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>{menu.asepticDrum}</span>
                </Link>
              </div>
            </details>

            {/* Liquid */}
            <details className="group border-b border-white/10 pb-2">
              <summary className="flex justify-between items-center text-white font-medium font-heading cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                {menu.liquid} <FiChevronDown className="transition-transform group-open:rotate-180" />
              </summary>
              <div className="flex flex-col space-y-3 mt-3 pl-4 text-base">
                <div className="font-medium text-seppa-red">{menu.mineralWaterLine}</div>
                <Link href={getLink("/still-water")} className="text-gray-300 hover:text-seppa-red pl-2 flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>{menu.stillWater}</span>
                </Link>
                <Link href={getLink("/mineral-water")} className="text-gray-300 hover:text-seppa-red pl-2 flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>{menu.mineralWater}</span>
                </Link>
                <Link href={getLink("/alkaline-water")} className="text-gray-300 hover:text-seppa-red pl-2 flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>{menu.alkalineWater}</span>
                </Link>
                <Link href={getLink("/sparkling-water")} className="text-gray-300 hover:text-seppa-red pl-2 flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>{menu.sparklingWater}</span>
                </Link>
                <Link href={getLink("/structured-water")} className="text-gray-300 hover:text-seppa-red pl-2 flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>{menu.structuredWater}</span>
                </Link>
                <Link href={getLink("/flavored-vitaminized-water")} className="text-gray-300 hover:text-seppa-red pl-2 flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>{menu.flavoredWater}</span>
                </Link>

                <Link href={getLink("/soft-drinks")} className="text-gray-300 hover:text-seppa-red pl-2 flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>{menu.softDrinks}</span>
                </Link>

                <div className="font-medium text-seppa-red pt-2">{menu.juicesNectars}</div>
                <Link href={getLink("/juice&nectars")} className="text-gray-300 hover:text-seppa-red pl-2 flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>{menu.juiceNectarsSoftDrinks}</span>
                </Link>
                <Link href={getLink("/isotonics")} className="text-gray-300 hover:text-seppa-red pl-2 flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>{menu.isotonics}</span>
                </Link>
                <Link href={getLink("/teas")} className="text-gray-300 hover:text-seppa-red pl-2 flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>{menu.teas}</span>
                </Link>

                <Link href={getLink("/beer")} className="text-gray-300 hover:text-seppa-red pt-2 flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>{menu.beer}</span>
                </Link>
                <Link href={getLink("/alcohol-spirits")} className="text-gray-300 hover:text-seppa-red flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>{menu.alcoholSpirits}</span>
                </Link>
                <Link href={getLink("/wine-mead")} className="text-gray-300 hover:text-seppa-red flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>{menu.wineMead}</span>
                </Link>
                <Link href={getLink("/rt")} className="text-gray-300 hover:text-seppa-red flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>{menu.rtdsSeltzers}</span>
                </Link>
                <Link href={getLink("/ldp")} className="text-gray-300 hover:text-seppa-red flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>{menu.ldp}</span>
                </Link>
                <Link href={getLink("/ketchups-sauces")} className="text-gray-300 hover:text-seppa-red flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>{menu.tomatoKetchups}</span>
                </Link>
              </div>
            </details>

            {/* Services */}
            <details className="group border-b border-white/10 pb-2">
              <summary className="flex justify-between items-center text-white font-medium font-heading cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                {menu.services} <FiChevronDown className="transition-transform group-open:rotate-180" />
              </summary>
              <div className="flex flex-col space-y-3 mt-3 pl-4 text-base">
                <Link href={getLink("/services/packaging")} className="text-gray-300 hover:text-seppa-red flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>{menu.packaging}</span>
                </Link>
                <Link href={getLink("/services/spare-parts-and-logistics-training")} className="text-gray-300 hover:text-seppa-red flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>{menu.spareParts}</span>
                </Link>
                <Link href={getLink("/services/maintenance")} className="text-gray-300 hover:text-seppa-red flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>{menu.maintenance}</span>
                </Link>
                <Link href={getLink("/services/line-improvement")} className="text-gray-300 hover:text-seppa-red flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>{menu.lineImprovement}</span>
                </Link>
                <Link href={getLink("/services/line-conversions-and-moulds")} className="text-gray-300 hover:text-seppa-red flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>{menu.lineConversions}</span>
                </Link>
                <Link href={getLink("/services/audits")} className="text-gray-300 hover:text-seppa-red flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>{menu.audits}</span>
                </Link>
                <Link href={getLink("/services/training")} className="text-gray-300 hover:text-seppa-red flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>{menu.training}</span>
                </Link>
              </div>
            </details>

            {/* Complete Lines */}
            <details className="group border-b border-white/10 pb-2">
              <summary className="flex justify-between items-center text-white font-medium font-heading cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                {menu.completeLines} <FiChevronDown className="transition-transform group-open:rotate-180" />
              </summary>
              <div className="flex flex-col space-y-3 mt-3 pl-4 text-base">
                <Link href={getLink("/complete-lines")} className="text-gray-300 hover:text-seppa-red flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>{menu.completeLines}</span>
                </Link>
                <Link href={getLink("/liquid")} className="text-gray-300 hover:text-seppa-red flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>{menu.waterLines}</span>
                </Link>
                <Link href={getLink("/soft-drink-lines")} className="text-gray-300 hover:text-seppa-red flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>{menu.softDrinkLines}</span>
                </Link>
                <Link href={getLink("/juice-line-machines")} className="text-gray-300 hover:text-seppa-red flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>{menu.juiceLines}</span>
                </Link>
                <Link href={getLink("/beer-line-machines")} className="text-gray-300 hover:text-seppa-red flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>{menu.beerLines}</span>
                </Link>
                <Link href={getLink("/wine-mead-lines")} className="text-gray-300 hover:text-seppa-red flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>{menu.wineLines}</span>
                </Link>
                <Link href={getLink("/liquor-spirits-line-machines")} className="text-gray-300 hover:text-seppa-red flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>{menu.liquorLines}</span>
                </Link>
                <Link href={getLink("/dairy-product-line-machines")} className="text-gray-300 hover:text-seppa-red flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>{menu.dairyLines}</span>
                </Link>
                <Link href={getLink("/ketchup-sauce-filling-line-machines")} className="text-gray-300 hover:text-seppa-red flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>{menu.ketchupsSauces}</span>
                </Link>
              </div>
            </details>

            {/* Equipments */}
            <details className="group border-b border-white/10 pb-2">
              <summary className="flex justify-between items-center text-white font-medium font-heading cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                {menu.equipments} <FiChevronDown className="transition-transform group-open:rotate-180" />
              </summary>
              <div className="flex flex-col space-y-3 mt-3 pl-4 text-base">
                <div className="font-medium text-seppa-red">{menu.processing}</div>
                <Link href={getLink("/processing")} className="text-gray-300 hover:text-seppa-red pl-2 flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>{menu.processing}</span>
                </Link>
                <Link href={getLink("/blowing")} className="text-gray-300 hover:text-seppa-red pl-2 flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>{menu.blowing}</span>
                </Link>
                <Link href={getLink("/pre-form-sterilization")} className="text-gray-300 hover:text-seppa-red pl-2 flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>{menu.preFormSterilization}</span>
                </Link>
                <Link href={getLink("/unscramblers")} className="text-gray-300 hover:text-seppa-red pl-2 flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>{menu.unscramblers}</span>
                </Link>
                <Link href={getLink("/rinser-filler-capper")} className="text-gray-300 hover:text-seppa-red pl-2 flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>{menu.rinserFillerCapper}</span>
                </Link>
                <Link href={getLink("/kombo")} className="text-gray-300 hover:text-seppa-red pl-2 flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>{menu.kombo}</span>
                </Link>
                <Link href={getLink("/elevators")} className="text-gray-300 hover:text-seppa-red pl-2 flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>{menu.elevators}</span>
                </Link>
                <Link href={getLink("/bottle-handling-systems")} className="text-gray-300 hover:text-seppa-red pl-2 flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>{menu.bottleHandling}</span>
                </Link>
                <Link href={getLink("/carton-handling")} className="text-gray-300 hover:text-seppa-red pl-2 flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>{menu.cartonHandling}</span>
                </Link>

                <div className="font-medium text-seppa-red pt-2">{menu.labelling}</div>
                <Link href={getLink("/labelling")} className="text-gray-300 hover:text-seppa-red pl-2 flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>{menu.labelling}</span>
                </Link>
                <Link href={getLink("/batch-coders")} className="text-gray-300 hover:text-seppa-red pl-2 flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>{menu.batchCoders}</span>
                </Link>
                <Link href={getLink("/shrink-wrapping")} className="text-gray-300 hover:text-seppa-red pl-2 flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>{menu.shrinkWrapping}</span>
                </Link>
                <Link href={getLink("/pallet-equipment")} className="text-gray-300 hover:text-seppa-red pl-2 flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>{menu.palletEquipment}</span>
                </Link>
                <Link href={getLink("/stretch-wrapping")} className="text-gray-300 hover:text-seppa-red pl-2 flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>{menu.stretchWrapping}</span>
                </Link>

                <div className="font-medium text-seppa-red pt-2">{menu.crateStacker}</div>
                <Link href={getLink("/crate-stacker")} className="text-gray-300 hover:text-seppa-red pl-2 flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>{menu.crateStacker}</span>
                </Link>
                <Link href={getLink("/refrigeration-system")} className="text-gray-300 hover:text-seppa-red pl-2 flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>{menu.refrigerationSystem}</span>
                </Link>
                <Link href={getLink("/air-dryer")} className="text-gray-300 hover:text-seppa-red pl-2 flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>{menu.airDryer}</span>
                </Link>
                <Link href={getLink("/crate-washers")} className="text-gray-300 hover:text-seppa-red pl-2 flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>{menu.crateWashers}</span>
                </Link>
                <Link href={getLink("/glass-bottle-washer")} className="text-gray-300 hover:text-seppa-red pl-2 flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>{menu.glassBottleWasher}</span>
                </Link>
                <Link href={getLink("/glass-bottle-filler-capper")} className="text-gray-300 hover:text-seppa-red pl-2 flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>{menu.glassBottleFillerCapper}</span>
                </Link>
                <Link href={getLink("/tunnel-pasteurizers")} className="text-gray-300 hover:text-seppa-red pl-2 flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>{menu.tunnelPasteurizers}</span>
                </Link>
                <Link href={getLink("/tunnel-cooler")} className="text-gray-300 hover:text-seppa-red pl-2 flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>{menu.tunnelCooler}</span>
                </Link>
                <Link href={getLink("/de-capper")} className="text-gray-300 hover:text-seppa-red pl-2 flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>{menu.deCapper}</span>
                </Link>
                <Link href={getLink("/large-bottle-filler")} className="text-gray-300 hover:text-seppa-red pl-2 flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>{menu.largeBottleFiller}</span>
                </Link>
              </div>
            </details>

            {/* Enquiry */}
            <details className="group border-b border-white/10 pb-2">
              <summary className="flex justify-between items-center text-white font-medium font-heading cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                {menu.enquiry} <FiChevronDown className="transition-transform group-open:rotate-180" />
              </summary>
              <div className="flex flex-col space-y-3 mt-3 pl-4 text-base">
                <Link href={getLink("/product-enquiry")} className="text-gray-300 hover:text-seppa-red flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>{menu.productEnquiry}</span>
                </Link>
                <Link href={getLink("/investors")} className="text-gray-300 hover:text-seppa-red flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>{menu.investors}</span>
                </Link>
                <Link href={getLink("/dealers")} className="text-gray-300 hover:text-seppa-red flex items-start gap-3 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2"></span>
                  <span>{menu.dealers}</span>
                </Link>
              </div>
            </details>

            <Link href={getLink("/video-gallery")} className="text-white font-medium font-heading hover:text-[#cda262] transition border-b border-white/10 pb-2" onClick={() => setIsMobileMenuOpen(false)}>{menu.videos}</Link>
            
            <div className="pt-6 mt-auto flex flex-col gap-3">
              <div className="flex justify-around gap-2 bg-[#0d162a]/50 p-2 rounded-xl border border-white/10">
                {['en', 'ar', 'de', 'nl'].map((loc) => (
                  <button
                    key={loc}
                    suppressHydrationWarning
                    onClick={() => { changeLanguage(loc); setIsMobileMenuOpen(false); }}
                    className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${currentLocale === loc ? 'bg-gold text-[#0d162a]' : 'text-white hover:text-gold'}`}
                  >
                    {getLocaleLabel(loc)}
                  </button>
                ))}
              </div>
              <Link href={getLink("/contact-us")} className="bg-seppa-red text-white px-6 py-4 rounded-full font-medium hover:bg-white hover:text-[#101934] transition flex items-center justify-center gap-2 w-full text-center shadow-md" onClick={() => setIsMobileMenuOpen(false)}>
                {menu.contactUs}
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
