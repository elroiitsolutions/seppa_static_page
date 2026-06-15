import React from 'react';
import Link from 'next/link';

interface SidebarItem {
  id: string;
  title: string;
  link?: string;
}

interface ServicesSidebarProps {
  activeId: string | undefined;
  title?: string;
  items?: SidebarItem[];
}

const servicesList: SidebarItem[] = [
  { id: 'packaging', title: 'Packaging' },
  { id: 'spare-parts-and-logistics-training', title: 'Spare parts & Logistics Training' },
  { id: 'maintenance', title: 'Maintenance' },
  { id: 'line-improvement', title: 'Line Improvement' },
  { id: 'line-conversions-and-moulds', title: 'Line Conversions & Moulds' },
  { id: 'audits', title: 'Audits' },
  { id: 'training', title: 'Training' },
];

const ServicesSidebar: React.FC<ServicesSidebarProps> = ({ activeId, title, items }) => {
  const displayTitle = title || "Explore Our Services";
  const displayItems = items || servicesList;
  return (
    <div className="w-full lg:w-1/3 order-2 lg:order-1 lg:sticky lg:top-28">
      <div className="flex flex-col gap-8">
        {/* Services Menu */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-sm">
          <div className="bg-[#8b3236] p-8">
            <h3 className="text-2xl font-bold font-heading text-white">{displayTitle}</h3>
          </div>
          <div className="p-4">
            <ul className="flex flex-col">
              {displayItems.map((service, index) => {
                const isActive = activeId === service.id;
                const linkHref = service.link || `/services/${service.id}`;
                return (
                  <li key={service.id}>
                    <Link 
                      href={linkHref} 
                      className={`flex items-center justify-between p-4 group transition-colors ${isActive ? 'text-seppa-red' : 'text-gray-600 hover:text-seppa-red'}`}
                    >
                      <span className={`text-[17px] ${isActive ? 'font-medium' : ''}`}>{service.title}</span>
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className={`w-5 h-5 transition-transform ${isActive ? 'text-seppa-red' : 'text-gray-900 group-hover:text-seppa-red'}`} 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor" 
                        strokeWidth="2"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
                      </svg>
                    </Link>
                    {index < servicesList.length - 1 && (
                      <hr className="border-gray-100 mx-4" />
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Contact Card */}
        <div className="bg-[#1c1c1c] rounded-[2rem] overflow-hidden shadow-xl text-center relative pb-10">
          <div className="h-48 relative">
            <img 
              src="https://demo.awaikenthemes.com/yarnex/wp-content/uploads/2026/02/service-single.jpg" 
              alt="Contact Us" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
          
          {/* Floating Icon */}
          <div className="absolute top-48 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#d3a35d] rounded-full flex items-center justify-center border-4 border-[#1c1c1c] text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>

          <div className="pt-12 px-6">
            <h4 className="text-white text-xl font-bold font-heading mb-1">Phone Number</h4>
            <p className="text-gray-400 mb-6">+123 456 789</p>
            
            <h4 className="text-white text-xl font-bold font-heading mb-1">Email Address</h4>
            <p className="text-gray-400">info@domainname.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSidebar;
