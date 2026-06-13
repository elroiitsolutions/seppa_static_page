import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHeader from '@/components/layout/PageHeader';

const Page = () => {
  return (
    <>
      <Header />
      {/* Page Header */}
      <PageHeader 
        title="Pre Form Sterilization"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Equipments', path: '/equipments' },
          { name: 'Pre Form Sterilization' }
        ]}
        bgImage="https://demo.awaikenthemes.com/yarnex/wp-content/uploads/2026/02/service-single.jpg"
      />

      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold font-heading text-dark mb-6 capitalize">{'pre-form-sterilization'.replace('-', ' ')}</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our {'pre-form-sterilization'.replace('-', ' ')} systems are designed with the latest technology to ensure maximum efficiency, speed, and reliability in your production line.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
