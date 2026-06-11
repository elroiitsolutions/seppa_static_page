import React from 'react';
import Link from "next/link";
import { FiFacebook, FiInstagram, FiTwitter, FiArrowUpRight } from 'react-icons/fi';
import { FaPinterestP } from 'react-icons/fa';
import logoImg from '@/assets/logo/logo.png';
import bgPattern from '@/assets/bg/black-line-1.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#101934] text-white pt-20 pb-8 mt-20 relative overflow-hidden m-3 rounded-2xl">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none bg-no-repeat bg-center bg-cover opacity-15" style={{ backgroundImage: `url(${bgPattern.src})` }}></div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Top Section: Logo & Newsletter */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-16 pb-12 border-b border-white/10">
          <div className="shrink-0 flex items-center gap-3">
            <Link href="/">
              <img 
                src={logoImg.src} 
                alt="Seppa Solutions Logo" 
                className="h-14 transition-all duration-300 bg-white px-2 py-1 rounded" 
              />
            </Link>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <h3 className="text-xl font-heading font-bold">Subscribe Our Newsletter's</h3>
            <form className="flex w-full sm:w-auto">
              <input 
                type="email" 
                placeholder="Enter Email Address *" 
                required
                className="bg-white/10 backdrop-blur-sm text-white px-6 py-4 rounded-l-lg w-full sm:w-[300px] focus:outline-none border border-white/20 border-r-0 placeholder-gray-400"
              />
              <button 
                type="submit" 
                className="bg-seppa-red text-white px-6 py-4 rounded-r-lg hover:bg-white hover:text-[#101934] transition flex items-center justify-center"
              >
                <FiArrowUpRight size={20} />
              </button>
            </form>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row gap-16 mb-16">
          
          {/* Left Column: Heading & Button */}
          <div className="w-full lg:w-5/12">
            <h2 className="text-4xl md:text-5xl lg:text-[52px] font-heading font-bold leading-tight mb-10 pr-8">
              Let’s engineer high-performance packaging lines together
            </h2>
            <div className="flex items-center gap-3 group cursor-pointer w-max">
              <Link href="/contact-us" className="inline-flex bg-seppa-red text-white px-8 py-[18px] rounded-full font-bold text-lg group-hover:bg-white group-hover:text-seppa-red transition duration-300 tracking-wide">
                Get In Touch
              </Link>
              <Link href="/contact-us" className="w-[60px] h-[60px] bg-white flex items-center justify-center text-seppa-red rounded-full group-hover:bg-seppa-red group-hover:text-white transition duration-300 shadow-md">
                <FiArrowUpRight className="transform transition-transform duration-300 group-hover:rotate-45" size={22} strokeWidth={2.5} />
              </Link>
            </div>
          </div>

          {/* Right Columns: Links */}
          <div className="w-full lg:w-7/12 grid grid-cols-1 sm:grid-cols-3 gap-8">
            
            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-heading font-bold mb-8">Quick Links</h3>
              <ul className="space-y-4 text-gray-300 font-medium">
                <li><Link href="/" className="hover:text-seppa-red transition">Home</Link></li>
                <li><Link href="/about-us" className="hover:text-seppa-red transition">About Us</Link></li>
                <li><Link href="/projects" className="hover:text-seppa-red transition">Our Projects</Link></li>
                <li><Link href="/blog" className="hover:text-seppa-red transition">Our Blog</Link></li>
                <li><Link href="/contact-us" className="hover:text-seppa-red transition">Contact Us</Link></li>
              </ul>
            </div>

            {/* Our Services */}
            <div>
              <h3 className="text-xl font-heading font-bold mb-8">Our Services</h3>
              <ul className="space-y-4 text-gray-300 font-medium">
                <li><Link href="/services" className="hover:text-seppa-red transition">Custom Textiles</Link></li>
                <li><Link href="/services" className="text-seppa-red transition">Fabric Manufacturing</Link></li>
                <li><Link href="/services" className="hover:text-seppa-red transition">Quality Testing</Link></li>
                <li><Link href="/services" className="hover:text-seppa-red transition">Sustainable Practices</Link></li>
                <li><Link href="/services" className="hover:text-seppa-red transition">Textile Printing</Link></li>
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-xl font-heading font-bold mb-8">Contact Information</h3>
              <ul className="space-y-6 text-gray-300 font-medium">
                <li className="flex items-start gap-4">
                  <div className="text-seppa-red mt-1 shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  </div>
                  <a href="tel:+123456789" className="hover:text-seppa-red transition">+1 (234) 567-890</a>
                </li>
                <li className="flex items-start gap-4">
                  <div className="text-seppa-red mt-1 shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  </div>
                  <a href="mailto:info@domainname.com" className="hover:text-seppa-red transition">info@seppasolutions.com</a>
                </li>
                <li className="flex items-start gap-4">
                  <div className="text-seppa-red mt-1 shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  </div>
                  <span>439 N Briery Road, Biery Industrial Area, Irving, Texas</span>
                </li>
              </ul>
            </div>
            
          </div>
        </div>
         
        {/* Bottom Footer Area */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 font-medium text-sm md:text-base">
            Copyright © {new Date().getFullYear()} <span className="text-white hover:text-seppa-red transition cursor-pointer">Seppa Solutions</span>. All rights reserved.
          </div>
          <div className="flex gap-2">
            <a href="#" aria-label="Pinterest" className="w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition">
              <FaPinterestP />
            </a>
            <a href="#" aria-label="X Twitter" className="w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition">
              <FiTwitter />
            </a>
            <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition">
              <FiFacebook />
            </a>
            <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition">
              <FiInstagram />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
