"use client";
import React, { useState } from 'react';
import Link from "next/link";
import PageHeader from '@/components/layout/PageHeader';

// Mock cart data
const initialCartItems = [
  {
    id: 1,
    name: 'Colorful T-shirt',
    image: 'https://demo.awaikenthemes.com/yarnex/wp-content/uploads/2026/02/product-1-100x100.jpg',
    price: 25.00,
    quantity: 1,
  },
  {
    id: 3,
    name: 'Cozy knitted blankets',
    image: 'https://demo.awaikenthemes.com/yarnex/wp-content/uploads/2026/02/product-2-100x100.jpg',
    price: 49.00,
    quantity: 2,
  }
];

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [shippingMethod, setShippingMethod] = useState('flat_rate');

  const handleQuantityChange = (id: number, newQuantity: number) => {
    if (newQuantity >= 1) {
      setCartItems(cartItems.map(item => item.id === id ? { ...item, quantity: newQuantity } : item));
    }
  };

  const handleRemove = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shippingCost = shippingMethod === 'flat_rate' ? 10.00 : 0;
  const total = subtotal + shippingCost;

  return (
    <>
      <PageHeader 
        title="Cart" 
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Cart' }
        ]} 
      />

      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          
          {cartItems.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-2xl font-heading mb-8">Your cart is currently empty.</p>
              <Link href="/shop" className="bg-dark text-white px-8 py-3 rounded hover:bg-white hover:text-dark transition font-medium">
                Return to shop
              </Link>
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row gap-10">
              
              {/* Cart Items Table */}
              <div className="lg:w-2/3">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="pb-4 font-heading font-bold uppercase text-sm tracking-wider">Product</th>
                        <th className="pb-4 font-heading font-bold uppercase text-sm tracking-wider">Price</th>
                        <th className="pb-4 font-heading font-bold uppercase text-sm tracking-wider">Quantity</th>
                        <th className="pb-4 font-heading font-bold uppercase text-sm tracking-wider">Subtotal</th>
                        <th className="pb-4 font-heading font-bold uppercase text-sm tracking-wider"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map(item => (
                        <tr key={item.id} className="border-b border-gray-100">
                          <td className="py-6">
                            <div className="flex items-center gap-4">
                              <Link href="/product-details">
                                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover border border-gray-100" />
                              </Link>
                              <Link href="/product-details" className="font-medium hover:text-gold transition">
                                {item.name}
                              </Link>
                            </div>
                          </td>
                          <td className="py-6">${item.price.toFixed(2)}</td>
                          <td className="py-6">
                            <div className="flex border border-gray-300 w-24 rounded">
                              <input 
                                type="number" 
                                value={item.quantity} 
                                onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                                min="1"
                                className="w-full py-2 text-center focus:outline-none"
                              />
                            </div>
                          </td>
                          <td className="py-6 font-bold text-dark">${(item.price * item.quantity).toFixed(2)}</td>
                          <td className="py-6 text-right">
                            <button 
                              onClick={() => handleRemove(item.id)}
                              className="text-gray-400 hover:text-red-500 transition w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center ml-auto"
                              aria-label="Remove item"
                            >
                              X
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Coupon & Update Actions */}
                <div className="flex flex-col sm:flex-row justify-between items-center mt-8 gap-4">
                  <div className="flex w-full sm:w-auto gap-2">
                    <input 
                      type="text" 
                      placeholder="Coupon code" 
                      className="border border-gray-300 px-4 py-3 rounded focus:outline-none focus:border-gold w-full sm:w-48"
                    />
                    <button className="bg-dark text-white px-6 py-3 rounded hover:bg-white hover:text-dark transition font-medium whitespace-nowrap">
                      Apply coupon
                    </button>
                  </div>
                  <button className="bg-gray-200 text-dark px-6 py-3 rounded hover:bg-gray-300 transition font-medium w-full sm:w-auto">
                    Update cart
                  </button>
                </div>
              </div>

              {/* Cart Totals */}
              <div className="lg:w-1/3">
                <div className="bg-white p-8 rounded border border-gray-200">
                  <h2 className="text-2xl font-heading font-bold mb-6 pb-4 border-b border-gray-300">Cart totals</h2>
                  
                  <div className="flex justify-between py-4 border-b border-gray-300">
                    <span className="font-bold text-dark">Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  
                  <div className="py-4 border-b border-gray-300">
                    <span className="font-bold text-dark block mb-4">Shipping</span>
                    <ul className="space-y-3">
                      <li>
                        <label className="flex items-center cursor-pointer">
                          <input 
                            type="radio" 
                            name="shipping" 
                            value="flat_rate"
                            checked={shippingMethod === 'flat_rate'}
                            onChange={() => setShippingMethod('flat_rate')}
                            className="mr-2"
                          />
                          Flat rate: <span className="ml-1 text-dark">$10.00</span>
                        </label>
                      </li>
                      <li>
                        <label className="flex items-center cursor-pointer">
                          <input 
                            type="radio" 
                            name="shipping" 
                            value="local_pickup"
                            checked={shippingMethod === 'local_pickup'}
                            onChange={() => setShippingMethod('local_pickup')}
                            className="mr-2"
                          />
                          Local pickup
                        </label>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="flex justify-between py-6">
                    <span className="font-bold text-dark text-xl">Total</span>
                    <span className="font-bold text-gold text-xl">${total.toFixed(2)}</span>
                  </div>
                  
                  <Link href="/checkout" className="block text-center bg-dark text-white px-8 py-4 rounded hover:bg-white hover:text-dark transition font-medium w-full mt-4">
                    Proceed to checkout
                  </Link>
                </div>
              </div>

            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
