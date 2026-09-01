"use client";
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { FiPhoneCall, FiMail, FiMapPin } from 'react-icons/fi';
import enPet from '@/messages/en/pet.json';
import frPet from '@/messages/fr/pet.json';
import SuccessModal from '@/components/ui/SuccessModal';
import InternationalPhoneInput, { validatePhoneNumber, validateEmail, formatEmailInput, validateName, formatNameInput } from '@/components/ui/InternationalPhoneInput';
import CountrySelectDropdown from '@/components/ui/CountrySelectDropdown';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export const PetContact: React.FC = () => {
  const pathname = usePathname();
  const isArabic = pathname.startsWith('/ar');
  const isFrench = pathname.startsWith('/fr');

  const getT = (key: string) => {
    const keys = key.split('.');
    let val: any = isFrench ? frPet : enPet;
    for (const k of keys) {
      val = val?.[k];
    }
    return val || key;
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

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

    if (!formData.email.trim()) {
      newErrors.email = isArabic ? "البريد الإلكتروني مطلوب" : 'Email address is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = isArabic 
        ? "يرجى إدخال بريد إلكتروني صحيح (أحرف صغيرة، @، و .com)" 
        : 'Email must be lowercase and contain @ and .com';
    }
    if (!formData.phone || !formData.phone.trim()) {
      newErrors.phone = isArabic ? "رقم الهاتف مطلوب" : 'Phone number is required';
    } else if (!validatePhoneNumber(formData.phone)) {
      newErrors.phone = isArabic ? "يرجى إدخال رقم هاتف صحيح" : 'Please enter a valid phone number';
    }
    if (!formData.country.trim()) {
      newErrors.country = isArabic ? "الدولة مطلوبة" : 'Country is required';
    }
    if (!formData.message.trim()) {
      newErrors.message = isArabic ? "الرسالة مطلوبة" : 'Message is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccessModal(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        country: '',
        message: ''
      });
    }, 600);
  };

  return (
    <section className="py-20 bg-white relative">
      <SuccessModal 
        isOpen={showSuccessModal} 
        onClose={() => setShowSuccessModal(false)} 
        title={isArabic ? "شكراً لك!" : "Thank You!"}
        message={isArabic ? "تم استلام استفسارك بنجاح وسيتواصل معك فريقنا قريباً." : "Your enquiry has been received. Our team will contact you shortly."}
      />
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto bg-gray-50 rounded-3xl p-8 lg:p-14 shadow-sm border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Details */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="space-y-8"
            >
              <div>
                <span className="text-seppa-red font-medium uppercase tracking-wider text-sm">
                  {getT('contactSubtitle')}
                </span>
                <h2 className="text-3xl lg:text-4xl font-heading font-bold text-dark mt-2">
                  {getT('contactTitle')}
                </h2>
                <p className="text-gray-600 mt-4 leading-relaxed">
                  {getT('contactDescription')}
                </p>
              </div>

              <div className="space-y-6 pt-4">
                <a href="tel:180042520000" className="flex items-center gap-6 p-5 bg-white rounded-2xl hover:shadow-md transition group border border-gray-100">
                  <div className="w-14 h-14 bg-seppa-red/10 text-seppa-red rounded-full flex items-center justify-center text-xl shrink-0 group-hover:bg-seppa-red group-hover:text-white transition">
                    <FiPhoneCall />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-heading text-dark mb-1">{getT('callUs')}</h3>
                    <p className="text-gray-600">1800-4252-0000</p>
                  </div>
                </a>

                <a href="mailto:info@seppasolutions.com" className="flex items-center gap-6 p-5 bg-white rounded-2xl hover:shadow-md transition group border border-gray-100">
                  <div className="w-14 h-14 bg-seppa-red/10 text-seppa-red rounded-full flex items-center justify-center text-xl shrink-0 group-hover:bg-seppa-red group-hover:text-white transition">
                    <FiMail />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-heading text-dark mb-1">{getT('emailUs')}</h3>
                    <p className="text-gray-600">info@seppasolutions.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-6 p-5 bg-white rounded-2xl hover:shadow-md transition group border border-gray-100">
                  <div className="w-14 h-14 bg-seppa-red/10 text-seppa-red rounded-full flex items-center justify-center text-xl shrink-0 group-hover:bg-seppa-red group-hover:text-white transition">
                    <FiMapPin />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-heading text-dark mb-1">{getT('headOffice')}</h3>
                    <p className="text-gray-600 text-sm">Chennai, Tamil Nadu, India</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
            >
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div>
                  <input 
                    type="text" 
                    placeholder={getT('fields.namePlaceholder')} 
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    suppressHydrationWarning={true}
                    className={`w-full px-6 py-4 rounded-full bg-light border ${errors.name ? 'border-red-400' : 'border-0'} text-gray-700 focus:outline-none focus:ring-2 focus:ring-seppa-red transition shadow-sm`} 
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1.5 ml-3 font-medium">{errors.name}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <input 
                      type="email" 
                      placeholder={getT('fields.emailPlaceholder')} 
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      suppressHydrationWarning={true}
                      className={`w-full px-6 py-4 rounded-full bg-light border ${errors.email ? 'border-red-400' : 'border-0'} text-gray-700 focus:outline-none focus:ring-2 focus:ring-seppa-red transition shadow-sm`} 
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1.5 ml-3 font-medium">{errors.email}</p>}
                  </div>

                  <div>
                    <InternationalPhoneInput
                      value={formData.phone}
                      onChange={(val) => handleInputChange('phone', val)}
                      onCountryChange={(_code, countryName) => {
                        if (countryName) {
                          handleInputChange('country', countryName);
                        }
                      }}
                      error={errors.phone}
                      placeholder={getT('fields.phonePlaceholder') || 'Phone Number *'}
                      variant="light"
                      locale={isArabic ? 'ar' : isFrench ? 'fr' : 'en'}
                    />
                  </div>
                </div>

                <div>
                  <CountrySelectDropdown
                    value={formData.country}
                    onChange={(val) => handleInputChange('country', val)}
                    error={errors.country}
                    placeholder={isArabic ? 'اختر الدولة *' : isFrench ? 'Sélectionner le pays *' : 'Select Country *'}
                    variant="light"
                    locale={isArabic ? 'ar' : isFrench ? 'fr' : 'en'}
                  />
                </div>

                <div>
                  <textarea 
                    rows={4} 
                    placeholder={getT('fields.messagePlaceholder')} 
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    suppressHydrationWarning={true}
                    className={`w-full px-6 py-4 rounded-3xl bg-light border ${errors.message ? 'border-red-400' : 'border-0'} text-gray-700 focus:outline-none focus:ring-2 focus:ring-seppa-red transition shadow-sm resize-none`}
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-xs mt-1.5 ml-3 font-medium">{errors.message}</p>}
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  suppressHydrationWarning={true}
                  className="w-full bg-seppa-red text-white py-4 rounded-full font-bold hover:bg-dark transition duration-300 shadow-md disabled:opacity-50"
                >
                  {isSubmitting ? (isArabic ? 'جاري الإرسال...' : 'Sending...') : getT('submitButton')}
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default PetContact;
