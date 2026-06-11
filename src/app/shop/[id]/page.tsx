"use client";
import React, { useState } from 'react';
import Link from "next/link";
import PageHeader from '@/components/layout/PageHeader';

const ProductDetails: React.FC = () => {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value);
    if (val >= 1) {
      setQuantity(val);
    }
  };

  return (
    <>
      <PageHeader 
        title="Colorful T-shirt" 
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Products', path: '/shop' },
          { name: 'Colorful T-shirt' }
        ]} 
      />

      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          
          {/* Main Product Area */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            
            {/* Product Image */}
            <div className="relative">
              <span className="absolute top-4 left-4 z-10 bg-white text-dark text-sm font-bold px-4 py-1 uppercase tracking-wider rounded-sm">
                Sale!
              </span>
              <div className="border border-gray-100 rounded overflow-hidden shadow-sm">
                <img 
                  src="https://demo.awaikenthemes.com/yarnex/wp-content/uploads/2026/02/product-1-600x600.jpg" 
                  alt="Colorful T-shirt" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex text-gold text-sm">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                  ))}
                </div>
                <a href="#reviews" className="text-gray-500 hover:text-gold transition text-sm">
                  (3 customer reviews)
                </a>
              </div>

              <div className="text-3xl font-bold mb-6">
                <span className="text-gray-400 line-through mr-4 font-normal text-2xl">$30.00</span>
                <span className="text-dark">$25.00</span>
              </div>

              <div className="prose prose-lg text-gray-600 mb-8">
                <p className="mb-4">The bright, fade-resistant colors add a fresh and trendy look, making it perfect for casual outings, daily wear, or relaxed weekends.</p>
                <ul className="list-disc pl-5 space-y-2 marker:text-gold">
                  <li>Comfortable fit with durable stitching.</li>
                  <li>Suitable for all seasons and occasions.</li>
                  <li>Easy to pair with jeans, shorts, or joggers.</li>
                </ul>
              </div>

              {/* Add to Cart Form */}
              <div className="flex flex-wrap items-center gap-4 mb-10 pb-10 border-b border-gray-200">
                <div className="flex border border-gray-300 rounded overflow-hidden">
                  <input 
                    type="number" 
                    value={quantity} 
                    onChange={handleQuantityChange}
                    min="1"
                    className="w-20 py-3 text-center focus:outline-none appearance-none"
                  />
                </div>
                <button className="bg-dark text-white px-8 py-3 rounded hover:bg-white hover:text-dark transition font-medium">
                  Add to cart
                </button>
              </div>

              {/* Product Meta */}
              <div className="space-y-3 text-sm">
                <div className="flex">
                  <span className="text-dark font-bold w-24">SKU:</span>
                  <span className="text-gray-500">N/A</span>
                </div>
                <div className="flex">
                  <span className="text-dark font-bold w-24">Category:</span>
                  <span className="text-gray-500 hover:text-gold cursor-pointer transition">Uncategorized</span>
                </div>
                <div className="flex">
                  <span className="text-dark font-bold w-24">Tags:</span>
                  <span className="text-gray-500 hover:text-gold cursor-pointer transition">accessories, fashion</span>
                </div>
              </div>
            </div>
          </div>

          {/* Product Tabs */}
          <div className="mb-20">
            <div className="flex flex-wrap gap-2 border-b border-gray-200 mb-8">
              <button 
                onClick={() => setActiveTab('description')}
                className={`py-4 px-8 font-heading font-bold text-lg transition ${activeTab === 'description' ? 'border-b-2 border-gold text-dark' : 'text-gray-500 hover:text-dark'}`}
              >
                Description
              </button>
              <button 
                onClick={() => setActiveTab('reviews')}
                className={`py-4 px-8 font-heading font-bold text-lg transition ${activeTab === 'reviews' ? 'border-b-2 border-gold text-dark' : 'text-gray-500 hover:text-dark'}`}
              >
                Reviews (3)
              </button>
            </div>

            <div className="tab-content text-gray-600 leading-relaxed">
              {activeTab === 'description' && (
                <div>
                  <h2 className="text-2xl font-heading font-bold text-dark mb-4">Description</h2>
                  <p className="mb-4">Crafted from high-quality, breathable fabric, this colorful T-shirt is designed for both style and comfort. The bright, fade-resistant colors add a fresh and trendy look, making it perfect for casual outings, daily wear, or relaxed weekends. With a comfortable fit and durable stitching, it ensures long-lasting wear while keeping you cool and confident all day long. Easy to pair with jeans, shorts, or joggers, this versatile tee is a must-have addition to any wardrobe.</p>
                </div>
              )}
              {activeTab === 'reviews' && (
                <div>
                  <h2 className="text-2xl font-heading font-bold text-dark mb-4">3 reviews for Colorful T-shirt</h2>
                  <p>Reviews will be displayed here.</p>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default ProductDetails;
