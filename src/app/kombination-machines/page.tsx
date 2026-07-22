"use client";
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RedirectPage() {
  const router = useRouter();

  useEffect(() => {
    const lang = typeof navigator !== 'undefined' ? navigator.language : 'en';
    const detectedLang = lang?.startsWith('ar') ? 'ar' : lang?.startsWith('de') ? 'de' : 'en';
    router.replace(`/${detectedLang}/kombination-machines`);
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0d162a] text-white">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#cda262]"></div>
      <p className="mt-4 text-lg font-medium opacity-80 animate-pulse">Redirecting...</p>
    </div>
  );
}
