"use client";
import React, { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import PageHeader from '@/components/layout/PageHeader';

// Industrial machinery spare parts and component catalog
const products = [
  { id: 1, name: 'PET Blow Mold Cavities (500ml - 2L)', image: '/pics/pet-blower.jpg', price: 450.00, oldPrice: 520.00, rating: 5, slug: 'pet-blow-mold-cavities' },
  { id: 2, name: 'Aseptic Non-Contact Filling Valve', image: '/pics/pet-filling-machine.jpg', price: 320.00, oldPrice: 380.00, rating: 5, slug: 'aseptic-filling-valve' },
  { id: 3, name: 'Stainless Beverage Can Seaming Head', image: '/pics/can-filling-machine.jpg', price: 580.00, oldPrice: 650.00, rating: 5, slug: 'can-seaming-head' },
  { id: 4, name: 'Crown Capping Chuck Assembly (28mm)', image: '/pics/glass-filling-machine.jpg', price: 210.00, oldPrice: 250.00, rating: 5, slug: 'capping-chuck-assembly' },
  { id: 5, name: '5-Gallon Jar Gripper & Rinsing Nozzle', image: '/pics/large-bottle-filling-machine.jpg', price: 175.00, oldPrice: 195.00, rating: 5, slug: 'jar-gripper-nozzle' },
  { id: 6, name: 'Sanitary CIP Spray Ball (316L)', image: '/pics/process-technology.jpg', price: 95.00, oldPrice: 120.00, rating: 5, slug: 'cip-spray-ball' },
  { id: 7, name: 'Large Preform Neck Guide System', image: '/pics/LARGE-PET-BOTTLE.jpg', price: 290.00, oldPrice: 330.00, rating: 5, slug: 'preform-neck-guide' },
  { id: 8, name: 'Conveyor Table-Top Slat Chain (SS)', image: '/pics/PET-HOUSEHOLD.png', price: 140.00, oldPrice: 165.00, rating: 5, slug: 'conveyor-slat-chain' },
];

const Shop: React.FC = () => {
  const [sortBy, setSortBy] = useState('menu_order');

  return (
    <>
      <PageHeader 
        title="Spares & Components Catalog" 
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Spares & Components' }
        ]} 
      />

      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          
          {/* Shop Header (Results Count & Sorting) */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-10">
            <p className="text-gray-600 mb-4 sm:mb-0 font-medium">Showing all {products.length} spare parts & components</p>
            <form className="woocommerce-ordering">
              <select 
                name="orderby" 
                className="bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-10 rounded-md focus:outline-none focus:border-gold appearance-none cursor-pointer"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                style={{ backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23333%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right .7em top 50%', backgroundSize: '.65em auto' }}
              >
                <option value="menu_order">Default sorting</option>
                <option value="popularity">Sort by popularity</option>
                <option value="rating">Sort by average rating</option>
                <option value="date">Sort by latest</option>
                <option value="price">Sort by price: low to high</option>
                <option value="price-desc">Sort by price: high to low</option>
              </select>
            </form>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map(product => (
              <div key={product.id} className="group relative bg-white overflow-hidden rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition duration-300 flex flex-col justify-between">
                {/* Sale Badge */}
                {product.oldPrice && (
                  <span className="absolute top-4 left-4 z-10 bg-seppa-red text-white text-xs font-bold px-3 py-1 uppercase tracking-wider rounded-full shadow-md">
                    In Stock
                  </span>
                )}
                
                {/* Product Image */}
                <Link href={`/product-enquiry`} className="block relative overflow-hidden aspect-square bg-gray-50">
                  <Image 
                    src={product.image} 
                    alt={product.name} 
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover transform group-hover:scale-105 transition duration-500"
                  />
                  {/* Quick Add To Cart Overlay on Hover */}
                  <div className="absolute bottom-[-50px] left-0 w-full bg-dark bg-opacity-90 flex justify-center py-4 opacity-0 group-hover:opacity-100 group-hover:bottom-0 transition-all duration-300">
                    <span className="text-white font-medium text-sm flex items-center gap-2">
                      Request Part Quote
                    </span>
                  </div>
                </Link>

                {/* Product Info */}
                <div className="p-6 text-center">
                  <h2 className="text-xl font-heading font-bold mb-2">
                    <Link href={`/product-details`} className="hover:text-gold transition">
                      {product.name}
                    </Link>
                  </h2>
                  
                  {/* Rating Stars */}
                  <div className="flex justify-center text-gold mb-3 text-sm">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                    ))}
                  </div>
                  
                  {/* Price */}
                  <div className="text-lg font-bold">
                    {product.oldPrice && (
                      <span className="text-gray-400 line-through mr-2 font-normal">${product.oldPrice.toFixed(2)}</span>
                    )}
                    <span className="text-dark">${product.price.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
};

export default Shop;
