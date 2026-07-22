"use client";
import React, { useState } from 'react';
import Link from "next/link";
import PageHeader from '@/components/layout/PageHeader';

const Checkout: React.FC = () => {
  const [paymentMethod, setPaymentMethod] = useState('bacs');

  return (
    <>
      <PageHeader 
        title="Checkout" 
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Checkout' }
        ]} 
      />

      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          
          <div className="bg-white p-4 mb-10 border-t-2 border-gold text-gray-600 rounded">
            Returning customer? <Link href="/my-account" className="text-gold hover:underline">Click here to login</Link>
          </div>
          
          <div className="bg-white p-4 mb-10 border-t-2 border-gold text-gray-600 rounded">
            Have a coupon? <button className="text-gold hover:underline">Click here to enter your code</button>
          </div>

          <form className="flex flex-col lg:flex-row gap-10">
            
            {/* Billing Details */}
            <div className="lg:w-2/3">
              <h2 className="text-2xl font-heading font-bold mb-6">Billing details</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-bold text-dark mb-2">First name *</label>
                  <input type="text" className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:border-gold" required />
                </div>
                <div>
                  <label className="block text-sm font-bold text-dark mb-2">Last name *</label>
                  <input type="text" className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:border-gold" required />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-bold text-dark mb-2">Company name (optional)</label>
                <input type="text" className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:border-gold" />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-bold text-dark mb-2">Country / Region *</label>
                <select className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:border-gold appearance-none bg-white">
                  <option value="US">United States (US)</option>
                  <option value="UK">United Kingdom (UK)</option>
                  <option value="CA">Canada</option>
                  <option value="AU">Australia</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-bold text-dark mb-2">Street address *</label>
                <input type="text" placeholder="House number and street name" className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:border-gold mb-4" required />
                <input type="text" placeholder="Apartment, suite, unit, etc. (optional)" className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:border-gold" />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-bold text-dark mb-2">Town / City *</label>
                <input type="text" className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:border-gold" required />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-bold text-dark mb-2">State / County *</label>
                <select className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:border-gold appearance-none bg-white">
                  <option value="">Select a state&hellip;</option>
                  <option value="CA">California</option>
                  <option value="NY">New York</option>
                  <option value="TX">Texas</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-bold text-dark mb-2">Postcode / ZIP *</label>
                <input type="text" className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:border-gold" required />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-bold text-dark mb-2">Phone *</label>
                <input type="tel" className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:border-gold" required />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-bold text-dark mb-2">Email address *</label>
                <input type="email" className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:border-gold" required />
              </div>

              <div className="mt-10">
                <h2 className="text-2xl font-heading font-bold mb-6">Additional information</h2>
                <label className="block text-sm font-bold text-dark mb-2">Order notes (optional)</label>
                <textarea 
                  rows={4} 
                  placeholder="Notes about your order, e.g. special notes for delivery." 
                  className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:border-gold"
                ></textarea>
              </div>

            </div>

            {/* Your Order */}
            <div className="lg:w-1/3">
              <div className="bg-white p-8 rounded border border-gray-200">
                <h2 className="text-2xl font-heading font-bold mb-6 pb-4 border-b border-gray-300">Your order</h2>
                
                <table className="w-full mb-6">
                  <thead>
                    <tr className="border-b border-gray-300">
                      <th className="text-left pb-4 font-bold text-dark">Product</th>
                      <th className="text-right pb-4 font-bold text-dark">Subtotal</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-4 text-gray-600">Colorful T-shirt <strong className="text-dark">× 1</strong></td>
                      <td className="py-4 text-right text-dark">$25.00</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-4 font-bold text-dark">Subtotal</td>
                      <td className="py-4 text-right text-dark">$25.00</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-4 font-bold text-dark">Shipping</td>
                      <td className="py-4 text-right text-gray-600 text-sm">Flat rate: <span className="text-dark font-medium">$10.00</span></td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-6 font-bold text-dark text-xl">Total</td>
                      <td className="py-6 text-right font-bold text-gold text-xl">$35.00</td>
                    </tr>
                  </tbody>
                </table>

                {/* Payment Methods */}
                <div className="mb-6 border-b border-gray-300 pb-6">
                  <ul className="space-y-4">
                    <li>
                      <label className="flex items-start cursor-pointer">
                        <input 
                          type="radio" 
                          name="payment_method" 
                          value="bacs"
                          checked={paymentMethod === 'bacs'}
                          onChange={() => setPaymentMethod('bacs')}
                          className="mt-1 mr-3"
                        />
                        <div>
                          <span className="font-bold text-dark block mb-1">Direct bank transfer</span>
                          {paymentMethod === 'bacs' && (
                            <div className="text-sm text-gray-600 bg-white p-4 border border-gray-200 rounded mt-2">
                              Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                            </div>
                          )}
                        </div>
                      </label>
                    </li>
                    <li>
                      <label className="flex items-center cursor-pointer">
                        <input 
                          type="radio" 
                          name="payment_method" 
                          value="cheque"
                          checked={paymentMethod === 'cheque'}
                          onChange={() => setPaymentMethod('cheque')}
                          className="mr-3"
                        />
                        <span className="font-bold text-dark">Check payments</span>
                      </label>
                      {paymentMethod === 'cheque' && (
                        <div className="text-sm text-gray-600 bg-white p-4 border border-gray-200 rounded mt-2 ml-6">
                          Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.
                        </div>
                      )}
                    </li>
                    <li>
                      <label className="flex items-center cursor-pointer">
                        <input 
                          type="radio" 
                          name="payment_method" 
                          value="cod"
                          checked={paymentMethod === 'cod'}
                          onChange={() => setPaymentMethod('cod')}
                          className="mr-3"
                        />
                        <span className="font-bold text-dark">Cash on delivery</span>
                      </label>
                      {paymentMethod === 'cod' && (
                        <div className="text-sm text-gray-600 bg-white p-4 border border-gray-200 rounded mt-2 ml-6">
                          Pay with cash upon delivery.
                        </div>
                      )}
                    </li>
                    <li>
                      <label className="flex items-center cursor-pointer">
                        <input 
                          type="radio" 
                          name="payment_method" 
                          value="paypal"
                          checked={paymentMethod === 'paypal'}
                          onChange={() => setPaymentMethod('paypal')}
                          className="mr-3"
                        />
                        <span className="font-bold text-dark flex items-center gap-2">
                          PayPal 
                          <img src="https://www.paypalobjects.com/webstatic/mktg/logo/AM_mc_vs_dc_ae.jpg" alt="PayPal acceptance mark" className="h-6" />
                        </span>
                      </label>
                      {paymentMethod === 'paypal' && (
                        <div className="text-sm text-gray-600 bg-white p-4 border border-gray-200 rounded mt-2 ml-6">
                          Pay via PayPal; you can pay with your credit card if you don't have a PayPal account.
                        </div>
                      )}
                    </li>
                  </ul>
                </div>

                <div className="mb-6 text-sm text-gray-600">
                  Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <span className="text-gold">privacy policy</span>.
                </div>

                <button type="submit" className="w-full bg-dark text-white px-8 py-4 rounded hover:bg-white hover:text-dark transition font-medium text-lg">
                  Place order
                </button>
                
              </div>
            </div>

          </form>

        </div>
      </div>
    </>
  );
};

export default Checkout;
