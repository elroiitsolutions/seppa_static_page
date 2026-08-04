"use client";
import React from 'react';
import PageHeader from '@/components/layout/PageHeader';
import { motion } from 'framer-motion';
import { FiPhoneCall, FiMail, FiMapPin } from 'react-icons/fi';
import SuccessModal from '@/components/ui/SuccessModal';

export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'textarea' | 'select';
  placeholder?: string;
  options?: string[];
  required?: boolean;
  halfWidth?: boolean;
}

export interface EnquiryPageData {
  title: string;
  breadcrumbName: string;
  heading: string;
  subheading: string;
  formTitle: string;
  formFields: FormField[];
  submitButtonText?: string;
  bgImage?: string;
}

interface EnquiryPageLayoutProps {
  data: EnquiryPageData;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const EnquiryPageLayout: React.FC<EnquiryPageLayoutProps> = ({ data }) => {
  const [formData, setFormData] = React.useState<Record<string, string>>({});
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [showSuccessModal, setShowSuccessModal] = React.useState(false);

  const handleInputChange = (name: string, value: string, type?: string) => {
    let sanitizedValue = value;
    if (type === 'tel') {
      sanitizedValue = value.replace(/[^0-9+\s-]/g, '');
    }
    setFormData(prev => ({ ...prev, [name]: sanitizedValue }));
    if (errors[name]) {
      setErrors(prev => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    data.formFields.forEach(field => {
      const val = (formData[field.name] || '').trim();
      if (field.required && !val) {
        newErrors[field.name] = `${field.label} is required`;
      } else if (field.type === 'email' && val && !/\S+@\S+\.\S+/.test(val)) {
        newErrors[field.name] = 'Please enter a valid email address';
      } else if (field.type === 'tel' && val) {
        const digitsOnly = val.replace(/\D/g, '');
        if (digitsOnly.length < 10 || digitsOnly.length > 15) {
          newErrors[field.name] = 'Please enter a valid phone number (10-15 digits)';
        }
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccessModal(true);
      setFormData({});
    }, 600);
  };

  return (
    <div className="overflow-hidden">
      <SuccessModal 
        isOpen={showSuccessModal} 
        onClose={() => setShowSuccessModal(false)} 
        title="Thank You for Your Enquiry!"
        message="Your request has been submitted successfully. Our team will contact you shortly."
      />
      <PageHeader 
        title={data.title} 
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Enquiry', path: '/product-enquiry' },
          { name: data.breadcrumbName }
        ]} 
        bgImage={data.bgImage}
      />
      
      <section className="py-20 lg:py-28 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Contact / Value Proposition Details */}
            <motion.div 
              className="lg:w-1/3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.h3 variants={fadeInUp} className="text-seppa-red font-medium uppercase tracking-wider mb-2">
                Get In Touch
              </motion.h3>
              <motion.h2 variants={fadeInUp} className="text-4xl lg:text-5xl font-heading font-bold text-[#101934] leading-tight mb-6">
                {data.heading}
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-gray-600 mb-10 text-lg">
                {data.subheading}
              </motion.p>

              <motion.div variants={fadeInUp} className="space-y-6">
                <a href="tel:1800-4252-0000" className="flex items-center gap-6 p-6 bg-gray-50 rounded-2xl hover:shadow-md transition group border border-gray-100">
                  <div className="w-16 h-16 bg-white text-seppa-red rounded-full flex items-center justify-center text-2xl shrink-0 group-hover:bg-seppa-red group-hover:text-white transition shadow-sm border border-gray-100">
                    <FiPhoneCall />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-heading text-[#101934] mb-1">Call Us:</h3>
                    <p className="text-gray-600">1800-4252-0000</p>
                  </div>
                </a>

                <a href="mailto:info@seppasolutions.com" className="flex items-center gap-6 p-6 bg-gray-50 rounded-2xl hover:shadow-md transition group border border-gray-100">
                  <div className="w-16 h-16 bg-white text-seppa-red rounded-full flex items-center justify-center text-2xl shrink-0 group-hover:bg-seppa-red group-hover:text-white transition shadow-sm border border-gray-100">
                    <FiMail />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-heading text-[#101934] mb-1">Email Us:</h3>
                    <p className="text-gray-600">info@seppasolutions.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-6 p-6 bg-gray-50 rounded-2xl hover:shadow-md transition group border border-gray-100">
                  <div className="w-16 h-16 bg-white text-seppa-red rounded-full flex items-center justify-center text-2xl shrink-0 group-hover:bg-seppa-red group-hover:text-white transition shadow-sm border border-gray-100">
                    <FiMapPin />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-heading text-[#101934] mb-1">Head Office:</h3>
                    <p className="text-gray-600">Chennai, Tamil Nadu, India</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              className="lg:w-2/3"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-[#101934] p-8 lg:p-14 rounded-3xl h-full shadow-2xl relative overflow-hidden flex flex-col justify-center">
                {/* Decorative background circle */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-seppa-red rounded-full mix-blend-multiply filter blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#cda262] rounded-full mix-blend-multiply filter blur-3xl opacity-20 transform -translate-x-1/2 translate-y-1/2"></div>

                <div className="relative z-10">
                  <h3 className="text-3xl font-bold font-heading text-white mb-8">{data.formTitle}</h3>
                  <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                    <div className="flex flex-wrap -mx-3">
                      {data.formFields.map((field, index) => (
                        <div key={index} className={`w-full ${field.halfWidth ? 'md:w-1/2' : ''} px-3 mb-6`}>
                          <label className="block text-gray-300 text-sm font-medium mb-2 ml-1" htmlFor={field.name}>
                            {field.label} {field.required && <span className="text-seppa-red">*</span>}
                          </label>
                          
                          {field.type === 'textarea' ? (
                            <textarea 
                              id={field.name}
                              name={field.name}
                              value={formData[field.name] || ''}
                              onChange={(e) => handleInputChange(field.name, e.target.value, field.type)}
                              placeholder={field.placeholder} 
                              rows={5}
                              suppressHydrationWarning={true}
                              className={`w-full px-6 py-4 rounded-2xl bg-white/10 border ${errors[field.name] ? 'border-red-400' : 'border-white/20'} text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-seppa-red focus:border-transparent transition shadow-sm resize-none backdrop-blur-sm`}
                            ></textarea>
                          ) : field.type === 'select' ? (
                            <div className="relative">
                              <select 
                                id={field.name}
                                name={field.name}
                                value={formData[field.name] || ''}
                                onChange={(e) => handleInputChange(field.name, e.target.value, field.type)}
                                suppressHydrationWarning={true}
                                className={`w-full px-6 py-4 rounded-full bg-white/10 border ${errors[field.name] ? 'border-red-400' : 'border-white/20'} text-white appearance-none focus:outline-none focus:ring-2 focus:ring-seppa-red focus:border-transparent transition shadow-sm backdrop-blur-sm`}
                              >
                                <option value="" disabled className="text-gray-900">{field.placeholder || `Select ${field.label}`}</option>
                                {field.options?.map((opt, i) => (
                                  <option key={i} value={opt} className="text-gray-900">{opt}</option>
                                ))}
                              </select>
                              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-6 text-gray-400">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                              </div>
                            </div>
                          ) : (
                            <input 
                              type={field.type} 
                              id={field.name}
                              name={field.name}
                              value={formData[field.name] || ''}
                              onChange={(e) => handleInputChange(field.name, e.target.value, field.type)}
                              placeholder={field.placeholder} 
                              suppressHydrationWarning={true}
                              className={`w-full px-6 py-4 rounded-full bg-white/10 border ${errors[field.name] ? 'border-red-400' : 'border-white/20'} text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-seppa-red focus:border-transparent transition shadow-sm backdrop-blur-sm`} 
                            />
                          )}
                          {errors[field.name] && (
                            <p className="text-red-400 text-xs mt-1.5 ml-2 font-medium">{errors[field.name]}</p>
                          )}
                        </div>
                      ))}
                    </div>
                    
                    <div className="pt-2">
                      <button 
                        type="submit" 
                        disabled={isSubmitting}
                        suppressHydrationWarning={true}
                        className="bg-seppa-red text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-seppa-red transition duration-300 w-full sm:w-auto text-lg shadow-lg disabled:opacity-50"
                      >
                        {isSubmitting ? 'Submitting...' : (data.submitButtonText || 'Submit Enquiry')}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnquiryPageLayout;
