"use client";

import React, { useEffect, useState, useRef } from 'react';
import PhoneInput, { 
  getCountryCallingCode, 
  isValidPhoneNumber, 
  parsePhoneNumber,
  Value, 
  Country 
} from 'react-phone-number-input';
import flags from 'react-phone-number-input/flags';
import 'react-phone-number-input/style.css';
import { FiSearch, FiChevronDown, FiX } from 'react-icons/fi';

export interface InternationalPhoneInputProps {
  value: string;
  onChange: (value: string) => void;
  onCountryChange?: (countryCode: string, countryName: string) => void;
  error?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  variant?: 'dark' | 'light';
  className?: string;
  id?: string;
  name?: string;
  locale?: string;
  defaultCountry?: Country;
}

/**
 * Converts ISO 2-letter country code (e.g., "US", "IN", "GM") to localized country name
 */
export const getCountryName = (countryCode?: string, locale: string = 'en'): string => {
  if (!countryCode) return '';
  try {
    const regionNames = new Intl.DisplayNames([locale], { type: 'region' });
    return regionNames.of(countryCode.toUpperCase()) || countryCode;
  } catch (e) {
    return countryCode;
  }
};

/**
 * Custom Searchable Country Select Component displaying Flag, Calling Code & Chevron Arrow
 */
const SearchableCountrySelect = ({ 
  value, 
  onChange, 
  options, 
  iconComponent: Icon, 
  variant = 'dark', 
  locale = 'en', 
  onManualSelect,
  selectedCountry: selectedCountryProp 
}: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Always prefer the user's locked selected country state over PhoneInput's transient undefined value
  const selectedCountry = selectedCountryProp || value || 'US';
  const callingCode = selectedCountry ? getCountryCallingCode(selectedCountry as Country) : '1';
  const isDark = variant === 'dark';

  // Filter countries by name, code or dial code
  const filteredCountries = options.filter(({ value: countryCode }: any) => {
    if (!countryCode) return false;
    const name = getCountryName(countryCode, locale).toLowerCase();
    const code = getCountryCallingCode(countryCode as Country);
    const searchLower = search.toLowerCase().trim();
    const searchDigits = searchLower.replace(/\+/g, '');
    
    return (
      name.includes(searchLower) ||
      countryCode.toLowerCase().includes(searchLower) ||
      code.includes(searchDigits)
    );
  });

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      {/* Trigger Button - Flag, Calling Code & Chevron Arrow */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-1.5 focus:outline-none cursor-pointer py-1 px-1.5 rounded-lg transition ${
          isDark ? 'hover:bg-white/10 text-white' : 'hover:bg-gray-100 text-gray-800'
        }`}
        aria-label="Select Country"
      >
        <div className="w-5 h-3.5 rounded overflow-hidden shadow-sm flex items-center justify-center shrink-0">
          <Icon country={selectedCountry} label={getCountryName(selectedCountry, locale)} />
        </div>
        <span className="text-xs font-semibold opacity-95">+{callingCode}</span>
        <FiChevronDown className={`text-xs transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Searchable Dropdown Popover */}
      {isOpen && (
        <div
          className={`absolute top-full left-0 mt-2 w-72 max-h-80 rounded-2xl shadow-2xl z-[9999] overflow-hidden flex flex-col p-2.5 backdrop-blur-xl border ${
            isDark
              ? 'bg-[#101934] border-white/20 text-white shadow-black/50'
              : 'bg-white border-gray-200 text-gray-900 shadow-xl'
          }`}
        >
          {/* Search Bar Input */}
          <div className="relative mb-2 shrink-0">
            <FiSearch className={`absolute left-3 top-1/2 -translate-y-1/2 text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
            <input
              type="text"
              autoFocus
              placeholder="Search country or code (+1, US...)"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className={`w-full pl-8 pr-8 py-2 text-xs rounded-xl border focus:outline-none transition ${
                isDark
                  ? 'bg-white/10 text-white placeholder-gray-400 border-white/10 focus:ring-1 focus:ring-seppa-red'
                  : 'bg-gray-50 text-gray-900 placeholder-gray-500 border-gray-200 focus:ring-1 focus:ring-seppa-red'
              }`}
            />
            {search && (
              <button
                type="button"
                onClick={() => setSearch('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
              >
                <FiX className="text-xs" />
              </button>
            )}
          </div>

          {/* Scrollable Country List */}
          <div className="overflow-y-auto max-h-60 space-y-0.5 custom-scrollbar pr-0.5">
            {filteredCountries.length === 0 ? (
              <div className="py-4 text-center text-xs text-gray-400">No matching country found</div>
            ) : (
              filteredCountries.map(({ value: countryCode }: any) => {
                const countryName = getCountryName(countryCode, locale);
                const code = getCountryCallingCode(countryCode as Country);
                const isSelected = countryCode === selectedCountry;
                const Flag = flags[countryCode as Country];

                return (
                  <button
                    key={countryCode}
                    type="button"
                    onClick={() => {
                      onChange(countryCode);
                      if (onManualSelect) {
                        onManualSelect(countryCode as Country);
                      }
                      setIsOpen(false);
                      setSearch('');
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2 text-xs rounded-xl transition cursor-pointer text-left ${
                      isSelected
                        ? 'bg-seppa-red text-white font-bold shadow-sm'
                        : isDark
                        ? 'text-gray-200 hover:bg-white/10'
                        : 'text-gray-800 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 truncate">
                      <div className="w-5 h-3.5 rounded overflow-hidden shrink-0 shadow-sm font-sans flex items-center justify-center">
                        {Flag && <Flag title={countryName} />}
                      </div>
                      <span className="truncate">{countryName}</span>
                    </div>
                    <span
                      className={`text-[11px] font-mono shrink-0 ml-2 ${
                        isSelected ? 'text-white' : isDark ? 'text-gray-400' : 'text-gray-500'
                      }`}
                    >
                      +{code}
                    </span>
                  </button>
                );
              })
            )}
          </div>
        </div>
      )}
    </div>
  );
};

/**
 * Reusable International Phone Number Input Component for Next.js App Router
 */
export const InternationalPhoneInput: React.FC<InternationalPhoneInputProps> = ({
  value,
  onChange,
  onCountryChange,
  error,
  placeholder = 'Phone Number *',
  required = false,
  disabled = false,
  variant = 'dark',
  className = '',
  id,
  name = 'phone',
  locale = 'en',
  defaultCountry = 'US',
}) => {
  const [mounted, setMounted] = useState(false);
  const [country, setCountry] = useState<Country>(defaultCountry);

  // Avoid SSR hydration mismatch in Next.js App Router & report initial default country
  useEffect(() => {
    setMounted(true);
    if (onCountryChange) {
      onCountryChange(defaultCountry, getCountryName(defaultCountry, locale));
    }
  }, []);

  const handlePhoneChange = (newVal?: Value) => {
    onChange(newVal || '');
  };

  const handleManualCountrySelect = (newCountryCode: Country) => {
    if (!newCountryCode) return;
    setCountry(newCountryCode);
    if (onCountryChange) {
      const countryName = getCountryName(newCountryCode, locale);
      onCountryChange(newCountryCode, countryName);
    }
  };

  const isDark = variant === 'dark';

  if (!mounted) {
    return (
      <div className={`w-full ${className}`}>
        <div
          className={`w-full px-5 py-3 rounded-xl border ${
            isDark
              ? 'bg-white/10 border-white/20 text-white placeholder-gray-400'
              : 'bg-light border-gray-200 text-gray-700 placeholder-gray-400'
          } animate-pulse h-[46px]`}
        />
      </div>
    );
  }

  return (
    <div className={`w-full ${className}`}>
      <style jsx global>{`
        /* Global CSS Overrides for react-phone-number-input */
        .seppa-phone-input-container .PhoneInput {
          display: flex;
          align-items: center;
          width: 100%;
          border-radius: 0.75rem; /* rounded-xl */
          padding: 0.65rem 1.1rem;
          transition: all 0.2s ease-in-out;
        }

        /* Dark Variant */
        .seppa-phone-input-container.variant-dark .PhoneInput {
          background-color: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #ffffff;
        }

        .seppa-phone-input-container.variant-dark .PhoneInput:focus-within {
          outline: none;
          border-color: #e31e24;
          box-shadow: 0 0 0 2px rgba(227, 30, 36, 0.4);
        }

        .seppa-phone-input-container.variant-dark.has-error .PhoneInput {
          border-color: #f87171;
        }

        /* Light Variant */
        .seppa-phone-input-container.variant-light .PhoneInput {
          background-color: #f8f9fa;
          border: 1px solid #e5e7eb;
          color: #1f2937;
        }

        .seppa-phone-input-container.variant-light .PhoneInput:focus-within {
          outline: none;
          border-color: #e31e24;
          box-shadow: 0 0 0 2px rgba(227, 30, 36, 0.3);
        }

        .seppa-phone-input-container.variant-light.has-error .PhoneInput {
          border-color: #ef4444;
        }

        /* Country Selector Container */
        .seppa-phone-input-container .PhoneInputCountry {
          display: flex;
          align-items: center;
          margin-right: 0.75rem;
          position: relative;
        }

        [dir="rtl"] .seppa-phone-input-container .PhoneInputCountry {
          margin-right: 0;
          margin-left: 0.75rem;
        }

        /* Input Element Styling */
        .seppa-phone-input-container .PhoneInputInput {
          flex: 1;
          min-width: 0;
          background: transparent !important;
          border: none !important;
          outline: none !important;
          font-size: 0.95rem;
          font-family: inherit;
        }

        .seppa-phone-input-container.variant-dark .PhoneInputInput {
          color: #ffffff;
        }

        .seppa-phone-input-container.variant-dark .PhoneInputInput::placeholder {
          color: #9ca3af;
        }

        .seppa-phone-input-container.variant-light .PhoneInputInput {
          color: #1f2937;
        }

        .seppa-phone-input-container.variant-light .PhoneInputInput::placeholder {
          color: #6b7280;
        }
      `}</style>

      <div
        className={`seppa-phone-input-container variant-${variant} ${
          error ? 'has-error' : ''
        }`}
      >
        <PhoneInput
          id={id}
          name={name}
          country={country}
          defaultCountry={country}
          value={value as Value}
          onChange={handlePhoneChange}
          countrySelectComponent={(props: any) => (
            <SearchableCountrySelect
              {...props}
              selectedCountry={country}
              variant={variant}
              locale={locale}
              onManualSelect={handleManualCountrySelect}
            />
          )}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
        />
      </div>

      {error && (
        <p className="text-red-400 text-xs mt-1.5 ml-2 font-medium">
          {error}
        </p>
      )}
    </div>
  );
};

/**
 * Checks if a phone number is a fake/dummy pattern like 0123456789, 9876543210, 1234567890, or repeating digits
 */
export const isDummyPhoneNumber = (phone: string): boolean => {
  if (!phone) return true;
  const digitsOnly = phone.replace(/\D/g, '');
  if (digitsOnly.length < 6) return true;

  // 1. All identical digits (e.g. 0000000000, 1111111111, 9999999999)
  const firstDigit = digitsOnly[0];
  if (digitsOnly.split('').every((d) => d === firstDigit)) {
    return true;
  }

  // 2. Sequential patterns
  const seqInc = "01234567890123456789";
  const seqDec = "98765432109876543210";

  if (
    seqInc.includes(digitsOnly) ||
    seqDec.includes(digitsOnly) ||
    digitsOnly.includes("0123456789") ||
    digitsOnly.includes("1234567890") ||
    digitsOnly.includes("9876543210") ||
    digitsOnly.includes("8765432109")
  ) {
    return true;
  }

  // 3. Known dummy & test number patterns
  const knownFakes = [
    '0123456789',
    '1234567890',
    '2345678901',
    '3456789012',
    '9876543210',
    '8765432109',
    '7654321098',
    '1234512345',
    '1231231231',
    '0000000000',
    '1111111111',
    '2222222222',
    '3333333333',
    '4444444444',
    '5555555555',
    '6666666666',
    '7777777777',
    '8888888888',
    '9999999999',
  ];

  for (const fake of knownFakes) {
    if (digitsOnly.endsWith(fake) || digitsOnly.includes(fake)) {
      return true;
    }
  }

  return false;
};

/**
 * Strict country-specific mobile number validation checking:
 * 1. Exact required digit length per country
 * 2. Valid starting digits for mobile numbers in that country
 */
export const validateCountryMobileNumber = (phone: string): boolean => {
  if (!phone || !phone.trim()) return false;

  // Check general E.164 validity
  if (!isValidPhoneNumber(phone)) return false;

  const parsed = parsePhoneNumber(phone);
  if (!parsed) return false;

  const country = parsed.country;
  const national = parsed.nationalNumber;

  if (!national) return false;

  const len = national.length;

  // Country-specific rules for mobile starting digits and exact lengths
  switch (country) {
    case 'IN': // India (+91)
      // Must be 10 digits and start with 6, 7, 8, or 9
      if (len !== 10) return false;
      if (!/^[6-9]/.test(national)) return false;
      break;

    case 'US': // United States (+1)
    case 'CA': // Canada (+1)
      // Must be 10 digits and first digit of area code must be 2-9
      if (len !== 10) return false;
      if (!/^[2-9]/.test(national)) return false;
      break;

    case 'GB': // United Kingdom (+44)
      // Must be 10 digits and start with 7
      if (len !== 10) return false;
      if (!/^7/.test(national)) return false;
      break;

    case 'FR': // France (+33)
      // Must be 9 digits and start with 6 or 7
      if (len !== 9) return false;
      if (!/^[67]/.test(national)) return false;
      break;

    case 'DE': // Germany (+49)
      // Must be 10-11 digits and start with 15, 16, or 17
      if (len < 10 || len > 11) return false;
      if (!/^1[567]/.test(national)) return false;
      break;

    case 'AE': // UAE (+971)
      // Must be 9 digits and start with 5
      if (len !== 9) return false;
      if (!/^5/.test(national)) return false;
      break;

    case 'SA': // Saudi Arabia (+966)
      // Must be 9 digits and start with 5
      if (len !== 9) return false;
      if (!/^5/.test(national)) return false;
      break;

    case 'GM': // Gambia (+220)
      // Must be 7 digits and start with 2, 3, 5, 7, or 9
      if (len !== 7) return false;
      if (!/^[23579]/.test(national)) return false;
      break;

    case 'AU': // Australia (+61)
      // Must be 9 digits and start with 4
      if (len !== 9) return false;
      if (!/^4/.test(national)) return false;
      break;

    case 'SG': // Singapore (+65)
      // Must be 8 digits and start with 8 or 9
      if (len !== 8) return false;
      if (!/^[89]/.test(national)) return false;
      break;

    case 'MY': // Malaysia (+60)
      // Must be 9-10 digits and start with 1
      if (len < 9 || len > 10) return false;
      if (!/^1/.test(national)) return false;
      break;

    default:
      // Generic strict bounds for all other countries
      if (len < 6 || len > 14) return false;
      break;
  }

  return true;
};

/**
 * Comprehensive utility helper function to validate E.164 phone numbers (rejects incomplete, invalid starting digits & dummy numbers)
 */
export const validatePhoneNumber = (phone: string): boolean => {
  if (!phone || !phone.trim()) return false;
  if (isDummyPhoneNumber(phone)) return false;
  if (!validateCountryMobileNumber(phone)) return false;
  return true;
};

/**
 * Strict email validation enforcing lowercase letters, '@' symbol, and domain extension like '.com'
 */
export const validateEmail = (email: string): boolean => {
  if (!email || !email.trim()) return false;
  const trimmed = email.trim();

  // Must not contain uppercase letters
  if (/[A-Z]/.test(trimmed)) return false;

  // Must contain '@' and '.'
  if (!trimmed.includes('@') || !trimmed.includes('.')) return false;

  // Strict email regex: lowercase letters/numbers + @ + domain + TLD (.com, .org, .net, .io, etc.)
  const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  return emailRegex.test(trimmed);
};

/**
 * Automatically formats email input to lowercase
 */
export const formatEmailInput = (email: string): string => {
  return email ? email.toLowerCase().trim() : '';
};

/**
 * Auto-filters name input to disallow numbers (0-9)
 */
export const formatNameInput = (name: string): string => {
  if (!name) return '';
  return name.replace(/[0-9]/g, '');
};

/**
 * Validates that name contains only letters, spaces, hyphens, and apostrophes (no numbers)
 */
export const validateName = (name: string): boolean => {
  if (!name || !name.trim()) return false;
  const trimmed = name.trim();
  
  // Reject if contains any digits 0-9
  if (/\d/.test(trimmed)) return false;

  // Validate letters (Latin, Arabic, French, etc.), spaces, hyphens, apostrophes
  const nameRegex = /^[a-zA-Z\u00C0-\u024F\u0600-\u06FF\s'-]{2,}$/;
  return nameRegex.test(trimmed);
};

export default InternationalPhoneInput;
