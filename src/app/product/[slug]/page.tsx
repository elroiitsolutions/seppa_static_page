"use client";
import React, { useState } from 'react';
import { notFound } from 'next/navigation';
import PageHeader from '@/components/layout/PageHeader';
import { motion } from 'framer-motion';
import { FiStar, FiMinus, FiPlus, FiShoppingCart, FiHeart } from 'react-icons/fi';

// Mock product database
const products = {
  'colorful-t-shirt': {
    name: 'Colorful T-shirt',
    price: 25.00,
    originalPrice: 30.00,
    rating: 5,
    reviews: 3,
    description: 'The bright, fade-resistant colors add a fresh and trendy look, making it perfect for casual outings, daily wear, or relaxed weekends.',
    features: [
      'Comfortable fit with durable stitching.',
      'Suitable for all seasons and occasions.',
      'Easy to pair with jeans, shorts, or joggers.'
    ],
    image: 'https://demo.awaikenthemes.com/yarnex/wp-content/uploads/2026/02/product-1.jpg',
    category: 'Apparel',
    sku: 'TS-001'
  },
  'sewing-threads': {
    name: 'Sewing Threads',
    price: 15.00,
    originalPrice: null,
    rating: 4,
    reviews: 12,
    description: 'High tensile strength sewing threads perfect for both industrial and domestic machines. Colorfast and durable.',
    features: [
      '100% Polyester core spun',
      'No breakage at high speeds',
      'Available in 50+ vibrant colors'
    ],
    image: 'https://demo.awaikenthemes.com/yarnex/wp-content/uploads/2026/02/product-6.jpg', // Placeholder
    category: 'Accessories',
    sku: 'TH-042'
  },
  'kitchen-towels': {
    name: 'Kitchen Towels',
    price: 18.50,
    originalPrice: 22.00,
    rating: 5,
    reviews: 8,
    description: 'Ultra-absorbent, 100% cotton kitchen towels. Soft to the touch but tough on spills and stains.',
    features: [
      'Highly absorbent pure cotton',
      'Lint-free drying',
      'Machine washable & durable'
    ],
    image: 'https://demo.awaikenthemes.com/yarnex/wp-content/uploads/2026/02/product-5.jpg', // Placeholder
    category: 'Home Textiles',
    sku: 'KT-011'
  }
};

// Fallback product data for unknown slugs
const defaultProduct = {
  name: 'Premium Textile Product',
  price: 49.99,
  originalPrice: 59.99,
  rating: 4,
  reviews: 5,
  description: 'A premium quality textile product manufactured with sustainable practices and extreme attention to detail.',
  features: [
    'Premium grade materials',
    'Ethically sourced',
    'Long-lasting durability'
  ],
  image: 'https://demo.awaikenthemes.com/yarnex/wp-content/uploads/2026/02/product-2.jpg',
  category: 'Uncategorized',
  sku: 'PRD-XXX'
};

const ProductPage = ({ params }: { params: { slug: string } }) => {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  // Find the product or use default
  const productKey = params.slug.toLowerCase();
  // We use a type assertion to safely index the mock database
  const product = (products as any)[productKey] || { ...defaultProduct, name: params.slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') };

  const handleDecrease = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  const handleIncrease = () => setQuantity(prev => prev + 1);

  return (
    <div className="bg-light min-h-screen">
      <PageHeader 
        title={product.name} 
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Shop", path: "/shop" },
          { name: product.name }
        ]} 
      />

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm mb-12">
            <div className="flex flex-col lg:flex-row gap-12">
              
              {/* Product Image Gallery */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                className="lg:w-1/2"
              >
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100 group">
                  {product.originalPrice && (
                    <span className="absolute top-6 left-6 bg-white text-dark text-sm font-bold px-4 py-1 rounded-full z-10">
                      Sale!
                    </span>
                  )}
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </motion.div>

              {/* Product Info */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                className="lg:w-1/2 flex flex-col justify-center"
              >
                <h1 className="text-4xl font-heading font-bold text-dark mb-4">{product.name}</h1>
                
                {/* Rating */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="flex text-gold">
                    {[...Array(5)].map((_, i) => (
                      <FiStar key={i} className={i < product.rating ? 'fill-current' : 'text-gray-300'} />
                    ))}
                  </div>
                  <span className="text-gray-500 text-sm">({product.reviews} customer reviews)</span>
                </div>

                {/* Price */}
                <div className="flex items-end gap-3 mb-8">
                  {product.originalPrice && (
                    <span className="text-2xl text-gray-400 line-through">${product.originalPrice.toFixed(2)}</span>
                  )}
                  <span className="text-4xl font-bold text-gold">${product.price.toFixed(2)}</span>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  {product.description}
                </p>

                <ul className="space-y-2 mb-10">
                  {product.features.map((feature: string, idx: number) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-4 mb-10">
                  <div className="flex items-center border-2 border-gray-100 rounded-full bg-white px-2">
                    <button onClick={handleDecrease} className="w-10 h-12 flex items-center justify-center text-gray-500 hover:text-gold transition">
                      <FiMinus />
                    </button>
                    <input 
                      type="number" 
                      value={quantity}
                      readOnly
                      className="w-12 h-12 text-center text-dark font-bold bg-transparent outline-none pointer-events-none appearance-none m-0"
                    />
                    <button onClick={handleIncrease} className="w-10 h-12 flex items-center justify-center text-gray-500 hover:text-gold transition">
                      <FiPlus />
                    </button>
                  </div>

                  <button className="flex-1 bg-dark text-white h-14 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-white hover:text-dark transition-colors duration-300">
                    <FiShoppingCart /> Add to cart
                  </button>

                  <button className="w-14 h-14 rounded-full border-2 border-gray-100 flex items-center justify-center text-gray-400 hover:border-gold hover:text-gold transition-colors duration-300">
                    <FiHeart size={20} />
                  </button>
                </div>

                {/* Meta */}
                <div className="pt-6 border-t border-gray-100 space-y-2 text-gray-500">
                  <p><span className="text-dark font-bold mr-2">SKU:</span> {product.sku}</p>
                  <p><span className="text-dark font-bold mr-2">Category:</span> <a href="#" className="hover:text-gold transition">{product.category}</a></p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Tabs */}
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm">
            <div className="flex gap-8 border-b border-gray-100 mb-8">
              <button 
                onClick={() => setActiveTab('description')}
                className={`pb-4 text-lg font-bold font-heading transition-colors relative ${activeTab === 'description' ? 'text-gold' : 'text-gray-400 hover:text-dark'}`}
              >
                Description
                {activeTab === 'description' && (
                  <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-white" />
                )}
              </button>
              <button 
                onClick={() => setActiveTab('reviews')}
                className={`pb-4 text-lg font-bold font-heading transition-colors relative ${activeTab === 'reviews' ? 'text-gold' : 'text-gray-400 hover:text-dark'}`}
              >
                Reviews ({product.reviews})
                {activeTab === 'reviews' && (
                  <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-white" />
                )}
              </button>
            </div>

            <div>
              {activeTab === 'description' ? (
                <div className="prose max-w-none text-gray-600">
                  <p className="mb-4">
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
                  </p>
                  <p>
                    {product.description}
                  </p>
                </div>
              ) : (
                <div className="text-gray-600">
                  <h3 className="text-2xl font-bold font-heading text-dark mb-6">{product.reviews} reviews for {product.name}</h3>
                  <div className="space-y-6">
                    {/* Mock Review */}
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-gray-200 flex-shrink-0"></div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-bold text-dark">Jane Doe</h4>
                          <span className="text-gray-400 text-sm">- June 8, 2026</span>
                        </div>
                        <div className="flex text-gold text-sm mb-2">
                          <FiStar className="fill-current" /><FiStar className="fill-current" /><FiStar className="fill-current" /><FiStar className="fill-current" /><FiStar className="fill-current" />
                        </div>
                        <p>Absolutely love this product! The quality is outstanding and exactly as described.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
