"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { FiPhoneCall, FiMail, FiMapPin } from 'react-icons/fi';

import { usePathname, useRouter } from 'next/navigation';
import enEnquiry from '@/messages/en/enquiry.json';
import arEnquiry from '@/messages/ar/enquiry.json';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const PackagingContact = () => {
  const pathname = usePathname();
  const isArabic = pathname.startsWith('/ar');
  const isDe = pathname.startsWith('/de');

  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    packagingType: isArabic ? "استفسار عن التعبئة والتغليف" : "Packaging Inquiry",
    message: ''
  });
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [showSuccessModal, setShowSuccessModal] = React.useState(false);
  const router = useRouter();
  const locale = pathname?.split('/')[1] || 'en';

  const handleInputChange = (field: string, value: string) => {
    let sanitizedValue = value;
    if (field === 'phone') {
      sanitizedValue = value.replace(/[^0-9+\s-]/g, '');
    }
    setFormData(prev => ({ ...prev, [field]: sanitizedValue }));
    if (errors[field]) {
      setErrors(prev => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = isArabic ? "الاسم مطلوب" : 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = isArabic ? "البريد الإلكتروني مطلوب" : 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email.trim())) {
      newErrors.email = isArabic ? "يرجى إدخال بريد إلكتروني صحيح" : 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = isArabic ? "رقم الهاتف مطلوب" : 'Phone number is required';
    } else {
      const digitsOnly = formData.phone.replace(/\D/g, '');
      if (digitsOnly.length < 10 || digitsOnly.length > 15) {
        newErrors.phone = isArabic ? "يرجى إدخال رقم هاتف صحيح (10-15 رقم)" : 'Please enter a valid phone number (10-15 digits)';
      }
    }
    if (!formData.message.trim()) newErrors.message = isArabic ? "الرسالة مطلوبة" : 'Message is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      await fetch('/api/submit-enquiry.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          form_type: 'product',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          product_name: formData.packagingType,
          message: formData.message,
          page_url: typeof window !== 'undefined' ? window.location.href : '',
        }),
      });
    } catch (err) {
      console.error('Failed to save packaging inquiry:', err);
    } finally {
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        packagingType: isArabic ? "استفسار عن التعبئة والتغليف" : "Packaging Inquiry",
        message: ''
      });
      // Redirect to thank-you page
      router.push(`/${locale}/thank-you`);
    }
  };

  const getT = (key: string) => {
    const keys = key.split('.');
    let val: any = isArabic ? arEnquiry : enEnquiry;
    for (const k of keys) {
      val = val?.[k];
    }
    return val || key;
  };

  return (
    <section className="py-20 lg:py-28 bg-light overflow-hidden">

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16" style={{ direction: isArabic ? 'rtl' : 'ltr' }}>
          
          <motion.div 
            className="lg:w-1/3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-seppa-red"></span>
              <span className="text-sm font-medium text-dark uppercase tracking-wider">{getT('getInTouch')}</span>
            </motion.div>
            
            <motion.h2 variants={fadeInUp} className="text-4xl lg:text-5xl font-heading font-bold text-dark leading-tight mb-8">
              {isArabic ? "دعنا نناقش احتياجات التعبئة والتغليف الخاصة بك" : "Let's Discuss Your Packaging Needs"}
            </motion.h2>
            
            <motion.p variants={fadeInUp} className="text-gray-600 mb-8">
              {isArabic 
                ? "تواصل مع خبرائنا للعثور على حلول التعبئة والتغليف المثالية المخصصة لعملك. نحن هنا لمساعدتك على النجاح."
                : "Reach out to our experts to find the perfect packaging solutions tailored for your business. We are here to help you succeed."}
            </motion.p>

            <motion.div variants={fadeInUp} className="space-y-6">
              <a href="tel:+91 9384806105" className="flex items-center gap-6 p-6 bg-white rounded-2xl hover:shadow-md transition group">
                <div className="w-16 h-16 bg-light text-seppa-red rounded-full flex items-center justify-center text-2xl shrink-0 group-hover:bg-seppa-red hover:text-dark group-hover:text-white transition shadow-sm">
                  <FiPhoneCall />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading text-dark mb-1">{getT('callUs')}</h3>
                  <p className="text-gray-600">+91 93848 06105</p>
                </div>
              </a>

              <a href="mailto:info@seppa.com" className="flex items-center gap-6 p-6 bg-white rounded-2xl hover:shadow-md transition group">
                <div className="w-16 h-16 bg-light text-seppa-red rounded-full flex items-center justify-center text-2xl shrink-0 group-hover:bg-seppa-red hover:text-dark group-hover:text-white transition shadow-sm">
                  <FiMail />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading text-dark mb-1">{getT('emailUs')}</h3>
                  <p className="text-gray-600"> info@seppasolutions.com</p>
                </div>
              </a>

              <div className="flex items-center gap-6 p-6 bg-white rounded-2xl hover:shadow-md transition group">
                <div className="w-16 h-16 bg-light text-seppa-red rounded-full flex items-center justify-center text-2xl shrink-0 group-hover:bg-seppa-red hover:text-dark group-hover:text-white transition shadow-sm">
                  <FiMapPin />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading text-dark mb-1">{isArabic ? "الموقع:" : "Location:"}</h3>
                  <p className="text-gray-600">No. 7, Parivakkam Road , Chennai - 600 056, Tamilnadu, India.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="lg:w-2/3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white p-10 lg:p-14 rounded-[2rem] h-full shadow-lg border border-gray-100 flex flex-col justify-center">
              <h3 className="text-3xl font-bold font-heading text-dark mb-8">{isArabic ? "طلب تسعيرة" : "Request a Quote"}</h3>
              <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input 
                      suppressHydrationWarning
                      type="text" 
                      placeholder={getT('fields.namePlaceholder')} 
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className={`w-full px-6 py-4 rounded-full bg-light border ${errors.name ? 'border-red-400' : 'border-0'} text-gray-700 focus:outline-none focus:ring-2 focus:ring-seppa-red transition shadow-sm`} 
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1.5 ml-3 font-medium">{errors.name}</p>}
                  </div>
                  <div>
                    <input 
                      suppressHydrationWarning
                      type="email" 
                      placeholder={getT('fields.emailPlaceholder')} 
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className={`w-full px-6 py-4 rounded-full bg-light border ${errors.email ? 'border-red-400' : 'border-0'} text-gray-700 focus:outline-none focus:ring-2 focus:ring-seppa-red transition shadow-sm`} 
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1.5 ml-3 font-medium">{errors.email}</p>}
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input 
                      suppressHydrationWarning
                      type="tel" 
                      placeholder={getT('fields.phonePlaceholder')} 
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className={`w-full px-6 py-4 rounded-full bg-light border ${errors.phone ? 'border-red-400' : 'border-0'} text-gray-700 focus:outline-none focus:ring-2 focus:ring-seppa-red transition shadow-sm`} 
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1.5 ml-3 font-medium">{errors.phone}</p>}
                  </div>
                  <div>
                    <input 
                      suppressHydrationWarning
                      type="text" 
                      placeholder={isArabic ? "نوع التعبئة والتغليف" : "Packaging Type"} 
                      value={formData.packagingType}
                      onChange={(e) => handleInputChange('packagingType', e.target.value)}
                      className="w-full px-6 py-4 rounded-full bg-light border-0 text-gray-700 focus:outline-none focus:ring-2 focus:ring-seppa-red transition shadow-sm" 
                    />
                  </div>
                </div>
                <div>
                  <textarea 
                    suppressHydrationWarning
                    rows={5} 
                    placeholder={isArabic ? "أخبرنا عن متطلبات التعبئة والتغليف الخاصة بك..." : "Tell us about your packaging requirements..."} 
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className={`w-full px-6 py-4 rounded-3xl bg-light border ${errors.message ? 'border-red-400' : 'border-0'} text-gray-700 focus:outline-none focus:ring-2 focus:ring-seppa-red transition shadow-sm resize-none`}
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-xs mt-1.5 ml-3 font-medium">{errors.message}</p>}
                </div>
                <button 
                  suppressHydrationWarning
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-[#101934] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-seppa-red transition duration-300 w-auto inline-block disabled:opacity-50"
                >
                  {isSubmitting ? (isArabic ? 'جاري الإرسال...' : 'Submitting...') : getT('submitButtonText')}
                </button>
              </form>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default PackagingContact;
