"use client";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiCheck, FiHome } from 'react-icons/fi';

const translations: Record<string, { title: string; subtitle: string; description: string; button: string; brand: string }> = {
  en: {
    title: 'Thank You!',
    subtitle: 'Your enquiry has been submitted successfully.',
    description: 'Our team will review your request and get back to you within 24-48 hours. We appreciate your interest in Seppa Solutions.',
    button: 'Back to Home',
    brand: 'Simple Innovations for a Better Tomorrow'
  },
  ar: {
    title: '!شكراً لك',
    subtitle: 'تم إرسال استفسارك بنجاح.',
    description: 'سيقوم فريقنا بمراجعة طلبك والرد عليك خلال 24-48 ساعة. نقدر اهتمامك بشركة سيبا سوليوشنز.',
    button: 'العودة للرئيسية',
    brand: 'ابتكارات بسيطة لغد أفضل'
  },
  de: {
    title: 'Vielen Dank!',
    subtitle: 'Ihre Anfrage wurde erfolgreich eingereicht.',
    description: 'Unser Team wird Ihre Anfrage prüfen und sich innerhalb von 24-48 Stunden bei Ihnen melden. Wir schätzen Ihr Interesse an Seppa Solutions.',
    button: 'Zurück zur Startseite',
    brand: 'Einfache Innovationen für eine bessere Zukunft'
  },
  nl: {
    title: 'Bedankt!',
    subtitle: 'Uw aanvraag is succesvol ingediend.',
    description: 'Ons team zal uw verzoek bekijken en binnen 24-48 uur contact met u opnemen. Wij waarderen uw interesse in Seppa Solutions.',
    button: 'Terug naar Home',
    brand: 'Eenvoudige Innovaties voor een Betere Toekomst'
  },
  fr: {
    title: 'Merci !',
    subtitle: 'Votre demande a été soumise avec succès.',
    description: 'Notre équipe examinera votre demande et vous répondra sous 24 à 48 heures. Nous vous remercions de votre intérêt pour Seppa Solutions.',
    button: 'Retour à l\'accueil',
    brand: 'Des innovations simples pour un avenir meilleur'
  }
};

const ThankYouContent = () => {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const locale = pathname?.split('/')[1] || 'en';
  const isArabic = locale === 'ar';
  const t = translations[locale] || translations.en;

  return (
    <div
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #080e1e 0%, #101934 40%, #1a2550 70%, #0d1529 100%)',
        direction: isArabic ? 'rtl' : 'ltr'
      }}
    >
      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
      />

      {/* Decorative glows */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#c8102e]/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-[#cda262]/6 rounded-full blur-[100px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-xl px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >


          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 180, damping: 14, delay: 0.25 }}
            className="mx-auto mb-8 relative w-28 h-28"
          >
            {/* Outer subtle ring */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="absolute inset-0 rounded-full border-2 border-emerald-500/20"
            />
            {/* Main circle */}
            <div className="absolute inset-3 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-[0_0_40px_rgba(16,185,129,0.25)]">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.55, type: "spring", stiffness: 250 }}
              >
                <FiCheck className="text-white text-5xl" strokeWidth={2.5} />
              </motion.div>
            </div>
            {/* Pulse ring */}
            {mounted && (
              <motion.div
                initial={{ opacity: 0.4, scale: 1 }}
                animate={{ opacity: 0, scale: 1.5 }}
                transition={{ delay: 0.7, duration: 2, repeat: Infinity, repeatDelay: 1 }}
                className="absolute inset-0 rounded-full border border-emerald-400/40"
              />
            )}
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.5 }}
            className="text-4xl sm:text-5xl font-bold font-heading text-white mb-4 tracking-tight"
          >
            {t.title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-xl text-gray-300 mb-4 font-medium"
          >
            {t.subtitle}
          </motion.p>

          {/* Red accent line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="w-20 h-1 bg-seppa-red mx-auto rounded-full mb-6"
          />

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.5 }}
            className="text-gray-400 text-base leading-relaxed mb-12 max-w-md mx-auto"
          >
            {t.description}
          </motion.p>

          {/* Single Home Button */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <Link
              href={`/${locale}`}
              className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-seppa-red hover:bg-white hover:text-seppa-red text-white font-bold rounded-full transition-all duration-300 shadow-lg shadow-seppa-red/20 hover:shadow-white/10 text-lg group"
            >
              <FiHome className="text-xl group-hover:scale-110 transition-transform" />
              {t.button}
            </Link>
          </motion.div>

          {/* Branding */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="text-gray-600 text-xs mt-14 tracking-wider uppercase"
          >
            Seppa Solutions — {t.brand}
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default ThankYouContent;
