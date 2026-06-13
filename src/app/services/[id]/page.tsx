"use client";
import React from 'react';
import { useParams } from "next/navigation";
import PageHeader from '@/components/layout/PageHeader';
import ServicesSidebar from '@/components/services/ServicesSidebar';
import ServiceContent from '@/components/services/ServiceContent';

const SingleService: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // A hardcoded list to derive the proper title just for the header/content
  const titles: Record<string, string> = {
    'packaging': 'Packaging',
    'spare-parts-and-logistics-training': 'Spare parts & Logistics Training',
    'maintenance': 'Maintenance',
    'line-improvement': 'Line Improvement',
    'line-conversions-and-moulds': 'Line Conversions & Moulds',
    'audits': 'Audits',
    'training': 'Training',
  };

  const categories: Record<string, string> = {
    'automatic': 'Packaging',
    'semi-automatic': 'Packaging',
    'pet-jars': 'Packaging',
    'pet': 'Packaging',
    'can': 'Packaging',
    'glass': 'Packaging',
    'pouch': 'Packaging',
    'brick-carton': 'Packaging',
    'gable-top-carton': 'Packaging',
    'aseptic-drum': 'Packaging',
    
    'still-water': 'Liquid',
    'mineral-water': 'Liquid',
    'alkaline-water': 'Liquid',
    'sparkling-water': 'Liquid',
    'structured-water': 'Liquid',
    'flavored-vitaminized-water': 'Liquid',
    'soft-drink-line-machines': 'Liquid',
    'juice': 'Liquid',
    'isotonics': 'Liquid',
    'teas': 'Liquid',
    'beer': 'Liquid',
    'alcohol-spirits': 'Liquid',
    'wine-mead': 'Liquid',
    'rt': 'Liquid',
    'ldp': 'Liquid',
    'ketchups-sauces': 'Liquid',
  };

  const serviceName = titles[id] || (id ? id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') : 'Service Details');
  const categoryName = categories[id] || 'Services';

  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: categoryName, path: `/${categoryName.toLowerCase()}` },
    { name: serviceName }
  ];

  const packagingItems = [
    { id: 'pet-blowers', title: 'Pet Blowers', link: '/automatic' },
    { id: 'pet', title: 'Pet', link: '/pet' },
    { id: 'can', title: 'Can', link: '/can' },
    { id: 'glass', title: 'Glass', link: '/glass' },
    { id: 'pouch', title: 'Pouch', link: '/pouch' },
    { id: 'brick-carton', title: 'Brick Carton', link: '/brick-carton' },
    { id: 'gable-top-carton', title: 'Gable Top Carton', link: '/gable-top-carton' },
    { id: 'aseptic-drum', title: 'Aseptic Drum', link: '/aseptic-drum' },
  ];

  const isPackaging = id === 'packaging';

  return (
    <div>
      <PageHeader 
        title={serviceName}
        breadcrumbs={breadcrumbs} 
        bgImage="https://demo.awaikenthemes.com/yarnex/wp-content/uploads/2026/02/service-single.jpg"
      />
      
      <section className="py-16 lg:py-24 bg-[#f9f8f4]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <ServicesSidebar 
              activeId={id} 
              title={isPackaging ? "Explore Packaging" : undefined}
              items={isPackaging ? packagingItems : undefined}
            />
            <ServiceContent serviceName={serviceName} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleService;
