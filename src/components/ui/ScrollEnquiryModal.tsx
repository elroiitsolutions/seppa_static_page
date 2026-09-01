"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi';

import { usePathname } from 'next/navigation';
import enEnquiry from '@/messages/en/enquiry.json';
import arEnquiry from '@/messages/ar/enquiry.json';
import SuccessModal from '@/components/ui/SuccessModal';
import InternationalPhoneInput, { validatePhoneNumber, validateEmail, formatEmailInput, validateName, formatNameInput } from '@/components/ui/InternationalPhoneInput';
import CountrySelectDropdown from '@/components/ui/CountrySelectDropdown';

const ScrollEnquiryModal: React.FC = () => {
  const pathname = usePathname();
  const isArabic = pathname.startsWith('/ar');
  const isDe = pathname.startsWith('/de');

  const getT = (key: string) => {
    const keys = key.split('.');
    let val: any = isArabic ? arEnquiry : enEnquiry;
    for (const k of keys) {
      val = val?.[k];
    }
    return val || key;
  };

  const [isOpen, setIsOpen] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);

  // Form states
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', country: '', city: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Always listen for the custom event to open the modal
    const handleOpenModalEvent = () => setIsOpen(true);
    window.addEventListener('open-enquiry-modal', handleOpenModalEvent);
    return () => window.removeEventListener('open-enquiry-modal', handleOpenModalEvent);
  }, []);

  useEffect(() => {
    // Check if the user has already seen the modal via scroll in this session
    const sessionKey = 'seppa_enquiry_modal_seen';
    if (sessionStorage.getItem(sessionKey)) {
      setHasOpened(true);
      return;
    }

    const handleScroll = () => {
      if (hasOpened) return;

      const scrollY = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      
      const scrollPercentage = (scrollY / (documentHeight - windowHeight)) * 100;

      if (scrollPercentage > 15) {
        setIsOpen(true);
        setHasOpened(true);
        sessionStorage.setItem(sessionKey, 'true');
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Check immediately in case page is loaded already scrolled
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasOpened]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleInputChange = (field: string, value: string) => {
    let val = value;
    if (field === 'email') {
      val = formatEmailInput(value);
    } else if (field === 'name') {
      val = formatNameInput(value);
    }

    setFormData(prev => ({ ...prev, [field]: val }));
    if (errors[field]) {
      setErrors(prev => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = isArabic ? "الاسم مطلوب" : 'Name is required';
    } else if (!validateName(formData.name)) {
      newErrors.name = isArabic 
        ? "الاسم يجب أن يحتوي على أحرف فقط (بدون أرقام)" 
        : 'Name must contain letters only (no numbers)';
    }

    if (!formData.phone || !formData.phone.trim()) {
      newErrors.phone = isArabic ? "رقم الهاتف مطلوب" : 'Phone number is required';
    } else if (!validatePhoneNumber(formData.phone)) {
      newErrors.phone = isArabic ? "يرجى إدخال رقم هاتف صحيح" : 'Please enter a valid phone number';
    }
    if (!formData.email.trim()) {
      newErrors.email = isArabic ? "البريد الإلكتروني مطلوب" : 'Email address is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = isArabic 
        ? "يرجى إدخال بريد إلكتروني صحيح (أحرف صغيرة، @، و .com)" 
        : 'Email must be lowercase and contain @ and .com (e.g. name@domain.com)';
    }
    if (!formData.country.trim()) {
      newErrors.country = isArabic ? "الدولة مطلوبة" : 'Country is required';
    }
    if (!formData.message.trim()) newErrors.message = isArabic ? "الرسالة مطلوبة" : 'Message is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsOpen(false);
      setShowSuccessModal(true);
      setFormData({ name: '', email: '', phone: '', country: '', city: '', message: '' });
    }, 500);
  };

  const handleClose = () => {
    setIsOpen(false);
    setErrors({});
  };

  return (
    <>
      <SuccessModal 
        isOpen={showSuccessModal} 
        onClose={() => setShowSuccessModal(false)} 
        title={isArabic ? "شكراً لاستفسارك!" : "Thank You!"}
        message={isArabic ? "تم استلام طلبك بنجاح وسنتواصل معك قريباً." : "Your enquiry has been received. Our team will contact you shortly."}
      />
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm"
            />

            {/* Modal Content Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-lg bg-[#101934] rounded-3xl shadow-2xl overflow-hidden border border-white/10 my-auto z-10 max-h-[85vh] sm:max-h-[90vh] flex flex-col"
              style={{ direction: isArabic ? 'rtl' : 'ltr' }}
            >
              {/* Close Button */}
              <button 
                suppressHydrationWarning={true}
                onClick={handleClose}
                className={`absolute top-4 ${isArabic ? 'left-4' : 'right-4'} z-20 w-10 h-10 bg-white/10 hover:bg-seppa-red text-white rounded-full flex items-center justify-center transition backdrop-blur-md`}
                aria-label="Close modal"
              >
                <FiX className="text-xl" />
              </button>

              {/* Background Decorative Gradients */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-seppa-red rounded-full mix-blend-multiply filter blur-3xl opacity-30 transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#cda262] rounded-full mix-blend-multiply filter blur-3xl opacity-20 transform -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

              <div className="relative z-10 p-5 sm:p-8 text-start overflow-y-auto">
                <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white mb-2">{isArabic ? "طلب تسعيرة" : "Request a Quote"}</h3>
                <p className="text-gray-300 text-sm mb-6">
                  {isArabic 
                    ? "أخبرنا بما تحتاجه، وسيتصل بك خبراؤنا في أقرب وقت ممكن."
                    : "Let us know what you need, and our experts will get back to you."}
                </p>
                
                <form className="space-y-4" onSubmit={handleSubmit} noValidate>
                  <div>
                    <input 
                      suppressHydrationWarning={true}
                      type="text" 
                      placeholder={isArabic ? "الاسم الكامل *" : "Enter your full name *"} 
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className={`w-full px-5 py-3 rounded-xl bg-white/10 border ${errors.name ? 'border-red-400' : 'border-white/20'} text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-seppa-red transition`}
                    />
                    {errors.name && <p className="text-red-400 text-xs mt-1 ml-2 font-medium">{errors.name}</p>}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="w-full sm:w-1/2">
                      <input 
                        suppressHydrationWarning={true}
                        type="email" 
                        placeholder={isArabic ? "البريد الإلكتروني *" : "Email Address *"} 
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className={`w-full px-5 py-3 rounded-xl bg-white/10 border ${errors.email ? 'border-red-400' : 'border-white/20'} text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-seppa-red transition truncate`}
                      />
                      {errors.email && <p className="text-red-400 text-xs mt-1 ml-2 font-medium">{errors.email}</p>}
                    </div>
                    <div className="w-full sm:w-1/2">
                      <InternationalPhoneInput
                        value={formData.phone}
                        onChange={(val) => handleInputChange('phone', val)}
                        onCountryChange={(_code, countryName) => {
                          if (countryName) {
                            handleInputChange('country', countryName);
                          }
                        }}
                        error={errors.phone}
                        placeholder={isArabic ? "رقم الهاتف *" : "Phone Number *"}
                        variant="dark"
                        locale={isArabic ? 'ar' : 'en'}
                      />
                    </div>
                  </div>

                  {/* Country (All Countries Dropdown) and City (Optional) */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="w-full sm:w-1/2">
                      <CountrySelectDropdown
                        value={formData.country}
                        onChange={(val) => handleInputChange('country', val)}
                        error={errors.country}
                        placeholder={isArabic ? "اختر الدولة *" : "Select Country *"}
                        variant="dark"
                        locale={isArabic ? 'ar' : 'en'}
                      />
                    </div>
                    <div className="w-full sm:w-1/2">
                      <input 
                        suppressHydrationWarning={true}
                        type="text" 
                        placeholder={isArabic ? "المدينة (اختياري)" : "City (Optional)"} 
                        value={formData.city}
                        onChange={(e) => handleInputChange('city', e.target.value)}
                        className="w-full px-5 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-seppa-red transition truncate"
                      />
                    </div>
                  </div>

                  <div>
                    <textarea 
                      suppressHydrationWarning={true}
                      placeholder={isArabic ? "أخبرنا عن متطلبات المشروع... *" : "Tell us about your project, capacity requirements, and any specific details... *"} 
                      rows={3}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className={`w-full px-5 py-3 rounded-xl bg-white/10 border ${errors.message ? 'border-red-400' : 'border-white/20'} text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-seppa-red transition resize-none`}
                    ></textarea>
                    {errors.message && <p className="text-red-400 text-xs mt-1 ml-2 font-medium">{errors.message}</p>}
                  </div>
                  
                  <button 
                    suppressHydrationWarning={true}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-seppa-red hover:bg-white hover:text-seppa-red text-white font-bold rounded-xl transition duration-300 mt-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (isArabic ? 'جاري الإرسال...' : 'Submitting...') : (isArabic ? 'إرسال الطلب' : 'Submit Enquiry')}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ScrollEnquiryModal;
