"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { FiPhoneCall, FiMail, FiMapPin } from 'react-icons/fi';
import { usePathname, useRouter } from 'next/navigation';
import InternationalPhoneInput, { validatePhoneNumber, validateEmail, formatEmailInput, validateName, formatNameInput } from '@/components/ui/InternationalPhoneInput';
import CountrySelectDropdown from '@/components/ui/CountrySelectDropdown';

import enEnquiry from '@/messages/en/enquiry.json';
import frEnquiry from '@/messages/fr/enquiry.json';
import arEnquiry from '@/messages/ar/enquiry.json';
import deEnquiry from '@/messages/de/enquiry.json';
import nlEnquiry from '@/messages/nl/enquiry.json';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const translations: Record<string, {
  badge: string;
  title: string;
  description: string;
  callUsLabel: string;
  phone: string;
  emailUsLabel: string;
  email: string;
  locationLabel: string;
  address: string;
  formTitle: string;
  namePlaceholder: string;
  emailPlaceholder: string;
  phonePlaceholder: string;
  countryPlaceholder: string;
  packagingTypeDefault: string;
  messagePlaceholder: string;
  submitButtonText: string;
  submittingText: string;
  errNameRequired: string;
  errNameInvalid: string;
  errEmailRequired: string;
  errEmailInvalid: string;
  errPhoneRequired: string;
  errPhoneInvalid: string;
  errMessageRequired: string;
}> = {
  en: {
    badge: "GET IN TOUCH",
    title: "Let's Discuss Your Packaging Needs",
    description: "Reach out to our experts to find the perfect packaging solutions tailored for your business. We are here to help you succeed.",
    callUsLabel: "Call Us:",
    phone: "+91 93848 06105",
    emailUsLabel: "Email Us:",
    email: "info@seppasolutions.com",
    locationLabel: "Location:",
    address: "No. 7, Parivakkam Road , Chennai - 600 056, Tamilnadu, India.",
    formTitle: "Request a Quote",
    namePlaceholder: "Enter your full name",
    emailPlaceholder: "Enter your email",
    phonePlaceholder: "Enter your phone number",
    countryPlaceholder: "Select Country *",
    packagingTypeDefault: "Packaging Inquiry",
    messagePlaceholder: "Tell us about your packaging requirements...",
    submitButtonText: "Submit Enquiry",
    submittingText: "Submitting...",
    errNameRequired: "Name is required",
    errNameInvalid: "Name must contain letters only (no numbers)",
    errEmailRequired: "Email address is required",
    errEmailInvalid: "Email must be lowercase and contain @ and .com (e.g. name@domain.com)",
    errPhoneRequired: "Phone number is required",
    errPhoneInvalid: "Please enter a valid phone number",
    errMessageRequired: "Message is required",
  },
  fr: {
    badge: "CONTACTEZ-NOUS",
    title: "Discutons de vos besoins d'emballage",
    description: "Contactez nos experts pour trouver les solutions d'emballage parfaites adaptées à votre entreprise. Nous sommes là pour vous aider à réussir.",
    callUsLabel: "Appelez-nous :",
    phone: "+91 93848 06105",
    emailUsLabel: "Écrivez-nous :",
    email: "info@seppasolutions.com",
    locationLabel: "Adresse :",
    address: "No. 7, Parivakkam Road , Chennai - 600 056, Tamilnadu, Inde.",
    formTitle: "Demander un devis",
    namePlaceholder: "Entrez votre nom complet",
    emailPlaceholder: "Entrez votre adresse e-mail",
    phonePlaceholder: "Entrez votre numéro de téléphone",
    countryPlaceholder: "Sélectionner le pays *",
    packagingTypeDefault: "Demande d'emballage",
    messagePlaceholder: "Parlez-nous de vos besoins d'emballage...",
    submitButtonText: "Soumettre la demande",
    submittingText: "Envoi en cours...",
    errNameRequired: "Le nom est requis",
    errNameInvalid: "Le nom ne doit contenir que des lettres (pas de chiffres)",
    errEmailRequired: "L'adresse e-mail est requise",
    errEmailInvalid: "L'e-mail doit être en minuscules et contenir @ et .com (ex. nom@domaine.com)",
    errPhoneRequired: "Le numéro de téléphone est requis",
    errPhoneInvalid: "Veuillez entrer un numéro de téléphone valide",
    errMessageRequired: "Le message est requis",
  },
  ar: {
    badge: "تواصل معنا",
    title: "دعنا نناقش احتياجات التعبئة والتغليف الخاصة بك",
    description: "تواصل مع خبرائنا للعثور على حلول التعبئة والتغليف المثالية المخصصة لعملك. نحن هنا لمساعدتك على النجاح.",
    callUsLabel: "اتصل بنا:",
    phone: "+91 93848 06105",
    emailUsLabel: "البريد الإلكتروني:",
    email: "info@seppasolutions.com",
    locationLabel: "الموقع:",
    address: "رقم 7، طريق باريفاكام، تشيناي - 600 056، تاميل نادو، الهند.",
    formTitle: "طلب تسعيرة",
    namePlaceholder: "أدخل اسمك الكامل",
    emailPlaceholder: "أدخل بريدك الإلكتروني",
    phonePlaceholder: "أدخل رقم هاتفك",
    countryPlaceholder: "اختر الدولة *",
    packagingTypeDefault: "استفسار عن التعبئة والتغليف",
    messagePlaceholder: "أخبرنا عن متطلبات التعبئة والتغليف الخاصة بك...",
    submitButtonText: "إرسال الاستفسار",
    submittingText: "جاري الإرسال...",
    errNameRequired: "الاسم مطلوب",
    errNameInvalid: "الاسم يجب أن يحتوي على أحرف فقط (بدون أرقام)",
    errEmailRequired: "البريد الإلكتروني مطلوب",
    errEmailInvalid: "يرجى إدخال بريد إلكتروني صحيح (أحرف صغيرة، @، و .com)",
    errPhoneRequired: "رقم الهاتف مطلوب",
    errPhoneInvalid: "يرجى إدخال رقم هاتف صحيح",
    errMessageRequired: "الرسالة مطلوبة",
  },
  de: {
    badge: "KONTAKT AUFNEHMEN",
    title: "Lassen Sie uns Ihre Verpackungsanforderungen besprechen",
    description: "Wenden Sie sich an unsere Experten, um die perfekten Verpackungslösungen für Ihr Unternehmen zu finden. Wir sind hier, um Ihren Erfolg zu unterstützen.",
    callUsLabel: "Rufen Sie uns an:",
    phone: "+91 93848 06105",
    emailUsLabel: "Schreiben Sie uns:",
    email: "info@seppasolutions.com",
    locationLabel: "Standort:",
    address: "Nr. 7, Parivakkam Road , Chennai - 600 056, Tamilnadu, Indien.",
    formTitle: "Angebot anfordern",
    namePlaceholder: "Geben Sie Ihren vollständigen Namen ein",
    emailPlaceholder: "Geben Sie Ihre E-Mail-Adresse ein",
    phonePlaceholder: "Geben Sie Ihre Telefonnummer ein",
    countryPlaceholder: "Land auswählen *",
    packagingTypeDefault: "Verpackungsanfrage",
    messagePlaceholder: "Teilen Sie uns Ihre Verpackungsanforderungen mit...",
    submitButtonText: "Anfrage absenden",
    submittingText: "Wird gesendet...",
    errNameRequired: "Name ist erforderlich",
    errNameInvalid: "Name darf nur Buchstaben enthalten (keine Zahlen)",
    errEmailRequired: "E-Mail-Adresse ist erforderlich",
    errEmailInvalid: "E-Mail muss klein geschrieben sein und @ sowie .com enthalten",
    errPhoneRequired: "Telefonnummer ist erforderlich",
    errPhoneInvalid: "Bitte geben Sie eine gültige Telefonnummer ein",
    errMessageRequired: "Nachricht ist erforderlich",
  },
  nl: {
    badge: "NEEM CONTACT OP",
    title: "Laten we uw verpakkingsbehoeften bespreken",
    description: "Neem contact op met onze experts voor de perfecte verpakkingsoplossingen op maat van uw bedrijf. Wij staan klaar om u te helpen slagen.",
    callUsLabel: "Bel ons:",
    phone: "+91 93848 06105",
    emailUsLabel: "E-mail ons:",
    email: "info@seppasolutions.com",
    locationLabel: "Locatie:",
    address: "Nr. 7, Parivakkam Road , Chennai - 600 056, Tamilnadu, India.",
    formTitle: "Offerte aanvragen",
    namePlaceholder: "Voer uw volledige naam in",
    emailPlaceholder: "Voer uw e-mailadres in",
    phonePlaceholder: "Voer uw telefoonnummer in",
    countryPlaceholder: "Selecteer Land *",
    packagingTypeDefault: "Verpakkingsaanvraag",
    messagePlaceholder: "Vertel ons over uw verpakkingsvereisten...",
    submitButtonText: "Aanvraag verzenden",
    submittingText: "Verzenden...",
    errNameRequired: "Naam is verplicht",
    errNameInvalid: "Naam mag alleen letters bevatten (geen cijfers)",
    errEmailRequired: "E-mailadres is verplicht",
    errEmailInvalid: "E-mail moet in kleine letters zijn en @ en .com bevatten",
    errPhoneRequired: "Telefoonnummer is verplicht",
    errPhoneInvalid: "Voer een geldig telefoonnummer in",
    errMessageRequired: "Bericht is verplicht",
  }
};

const PackagingContact = () => {
  const pathname = usePathname() || '';
  const locale = (pathname.split('/')[1] || 'en') as keyof typeof translations;
  const t = translations[locale] || translations.en;
  const isArabic = locale === 'ar';

  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    packagingType: t.packagingTypeDefault,
    message: ''
  });
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    setFormData(prev => ({
      ...prev,
      packagingType: t.packagingTypeDefault
    }));
  }, [locale, t.packagingTypeDefault]);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = t.errNameRequired;
    } else if (!validateName(formData.name)) {
      newErrors.name = t.errNameInvalid;
    }

    if (!formData.email.trim()) {
      newErrors.email = t.errEmailRequired;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = t.errEmailInvalid;
    }

    if (!formData.phone || !formData.phone.trim()) {
      newErrors.phone = t.errPhoneRequired;
    } else if (!validatePhoneNumber(formData.phone)) {
      newErrors.phone = t.errPhoneInvalid;
    }

    if (!formData.message.trim()) {
      newErrors.message = t.errMessageRequired;
    }

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
          country: formData.country,
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
        country: '',
        packagingType: t.packagingTypeDefault,
        message: ''
      });
      router.push(`/${locale}/thank-you`);
    }
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
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white mb-6 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-seppa-red"></span>
              <span className="text-sm font-medium text-dark uppercase tracking-wider">{t.badge}</span>
            </motion.div>
            
            <motion.h2 variants={fadeInUp} className="text-4xl lg:text-5xl font-heading font-bold text-dark leading-tight mb-8">
              {t.title}
            </motion.h2>
            
            <motion.p variants={fadeInUp} className="text-gray-600 mb-8">
              {t.description}
            </motion.p>

            <motion.div variants={fadeInUp} className="space-y-6">
              <a href="tel:+919384806105" className="flex items-center gap-6 p-6 bg-white rounded-2xl hover:shadow-md transition group shadow-sm border border-gray-100">
                <div className="w-16 h-16 bg-light text-seppa-red rounded-full flex items-center justify-center text-2xl shrink-0 group-hover:bg-seppa-red group-hover:text-white transition shadow-sm">
                  <FiPhoneCall />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading text-dark mb-1">{t.callUsLabel}</h3>
                  <p className="text-gray-600">{t.phone}</p>
                </div>
              </a>

              <a href="mailto:info@seppasolutions.com" className="flex items-center gap-6 p-6 bg-white rounded-2xl hover:shadow-md transition group shadow-sm border border-gray-100">
                <div className="w-16 h-16 bg-light text-seppa-red rounded-full flex items-center justify-center text-2xl shrink-0 group-hover:bg-seppa-red group-hover:text-white transition shadow-sm">
                  <FiMail />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading text-dark mb-1">{t.emailUsLabel}</h3>
                  <p className="text-gray-600">{t.email}</p>
                </div>
              </a>

              <div className="flex items-center gap-6 p-6 bg-white rounded-2xl hover:shadow-md transition group shadow-sm border border-gray-100">
                <div className="w-16 h-16 bg-light text-seppa-red rounded-full flex items-center justify-center text-2xl shrink-0 group-hover:bg-seppa-red group-hover:text-white transition shadow-sm">
                  <FiMapPin />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading text-dark mb-1">{t.locationLabel}</h3>
                  <p className="text-gray-600 text-sm">{t.address}</p>
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
              <h3 className="text-3xl font-bold font-heading text-dark mb-8">
                {t.formTitle}
              </h3>
              <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input 
                      suppressHydrationWarning
                      type="text" 
                      placeholder={t.namePlaceholder} 
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
                      placeholder={t.emailPlaceholder} 
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className={`w-full px-6 py-4 rounded-full bg-light border ${errors.email ? 'border-red-400' : 'border-0'} text-gray-700 focus:outline-none focus:ring-2 focus:ring-seppa-red transition shadow-sm`} 
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1.5 ml-3 font-medium">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                      placeholder={t.phonePlaceholder}
                      variant="light"
                      locale={locale}
                    />
                  </div>
                  <div>
                    <CountrySelectDropdown
                      value={formData.country}
                      onChange={(val) => handleInputChange('country', val)}
                      error={errors.country}
                      placeholder={t.countryPlaceholder}
                      variant="light"
                      locale={locale}
                    />
                  </div>
                </div>

                <div>
                  <textarea 
                    suppressHydrationWarning
                    rows={5} 
                    placeholder={t.messagePlaceholder} 
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
                  {isSubmitting ? t.submittingText : t.submitButtonText}
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