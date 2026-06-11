"use client";
import React from 'react';
import Link from "next/link";
import PageHeader from '@/components/layout/PageHeader';

const MyAccount: React.FC = () => {
  return (
    <>
      <PageHeader 
        title="My account" 
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'My account' }
        ]} 
      />

      <div className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            
            {/* Login Form */}
            <div>
              <h2 className="text-3xl font-heading font-bold mb-8 text-dark">Login</h2>
              <form>
                <div className="mb-6">
                  <label className="block text-sm font-bold text-dark mb-2">Username or email address *</label>
                  <input type="text" className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:border-gold" required />
                </div>
                
                <div className="mb-6">
                  <label className="block text-sm font-bold text-dark mb-2">Password *</label>
                  <input type="password" className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:border-gold" required />
                </div>
                
                <div className="flex items-center gap-4 mb-6">
                  <button type="submit" className="bg-dark text-white px-8 py-3 rounded hover:bg-white hover:text-dark transition font-medium">
                    Log in
                  </button>
                  <label className="flex items-center cursor-pointer text-gray-600">
                    <input type="checkbox" className="mr-2" />
                    Remember me
                  </label>
                </div>
                
                <div>
                  <Link href="#" className="text-gold hover:underline text-sm">
                    Lost your password?
                  </Link>
                </div>
              </form>
            </div>

            {/* Register Form */}
            <div>
              <h2 className="text-3xl font-heading font-bold mb-8 text-dark">Register</h2>
              <form>
                <div className="mb-6">
                  <label className="block text-sm font-bold text-dark mb-2">Email address *</label>
                  <input type="email" className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:border-gold" required />
                </div>
                
                <div className="mb-6 text-gray-600 text-sm leading-relaxed">
                  <p className="mb-4">A link to set a new password will be sent to your email address.</p>
                  <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <Link href="#" className="text-gold hover:underline">privacy policy</Link>.</p>
                </div>
                
                <button type="submit" className="bg-dark text-white px-8 py-3 rounded hover:bg-white hover:text-dark transition font-medium">
                  Register
                </button>
              </form>
            </div>

          </div>

        </div>
      </div>
    </>
  );
};

export default MyAccount;
