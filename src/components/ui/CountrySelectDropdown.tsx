"use client";

import React, { useState, useRef, useEffect, useMemo } from 'react';
import { getCountries, Country } from 'react-phone-number-input';
import flags from 'react-phone-number-input/flags';
import { getCountryName } from '@/components/ui/InternationalPhoneInput';
import { FiSearch, FiChevronDown, FiX } from 'react-icons/fi';

export interface CountryOption {
  code: string;
  name: string;
}

export interface CountrySelectDropdownProps {
  value: string;
  onChange: (countryName: string) => void;
  error?: string;
  placeholder?: string;
  variant?: 'dark' | 'light';
  locale?: string;
  className?: string;
  id?: string;
  name?: string;
  required?: boolean;
  disabled?: boolean;
}

/**
 * Generates an alphabetically sorted list of all 200+ world countries
 */
export const getAllCountries = (locale: string = 'en'): CountryOption[] => {
  const codes = getCountries();
  const list = codes.map((code) => ({
    code,
    name: getCountryName(code, locale) || code,
  }));
  return list.sort((a, b) => a.name.localeCompare(b.name, locale));
};

/**
 * Reusable Custom Searchable Country Select Component with Flags
 * Features:
 * - Search bar for live country filtering
 * - Renders official SVG country flag next to each country
 * - High-contrast readable dark & light popover dropdowns
 * - Prevents OS native select styling bugs
 */
export const CountrySelectDropdown: React.FC<CountrySelectDropdownProps> = ({
  value,
  onChange,
  error,
  placeholder = 'Select Country *',
  variant = 'dark',
  locale = 'en',
  className = '',
  disabled = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const isDark = variant === 'dark';

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Generate list of all countries sorted alphabetically
  const countries = useMemo(() => getAllCountries(locale), [locale]);

  // Filter countries by search input
  const filteredCountries = useMemo(() => {
    if (!search.trim()) return countries;
    const term = search.toLowerCase().trim();
    return countries.filter(
      (c) => c.name.toLowerCase().includes(term) || c.code.toLowerCase().includes(term)
    );
  }, [countries, search]);

  // Find currently selected country code (for showing flag)
  const selectedCountryObj = useMemo(() => {
    if (!value) return null;
    return countries.find((c) => c.name.toLowerCase() === value.toLowerCase());
  }, [countries, value]);

  const SelectedFlag = selectedCountryObj ? flags[selectedCountryObj.code as Country] : null;

  return (
    <div className={`w-full relative ${className}`} ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        type="button"
        disabled={disabled}
        onClick={() => setIsOpen(!isOpen)}
        suppressHydrationWarning={true}
        className={`w-full flex items-center justify-between transition focus:outline-none backdrop-blur-sm cursor-pointer ${
          isDark
            ? `px-6 py-4 rounded-full bg-white/10 border ${
                error ? 'border-red-400' : 'border-white/20'
              } text-white focus:ring-2 focus:ring-seppa-red`
            : `px-6 py-4 rounded-full bg-light border ${
                error ? 'border-red-400' : 'border-gray-200'
              } text-gray-700 focus:ring-2 focus:ring-seppa-red`
        }`}
      >
        <div className="flex items-center gap-3 truncate">
          {SelectedFlag && (
            <div className="w-5 h-3.5 rounded overflow-hidden shrink-0 shadow-sm flex items-center justify-center">
              <SelectedFlag title={value} />
            </div>
          )}
          <span className={`truncate text-sm font-medium ${!value ? (isDark ? 'text-gray-400' : 'text-gray-400') : (isDark ? 'text-white' : 'text-gray-800')}`}>
            {value || placeholder}
          </span>
        </div>
        <FiChevronDown className={`text-gray-400 text-base transition-transform duration-200 shrink-0 ml-2 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Searchable Options Popover */}
      {isOpen && (
        <div
          className={`absolute top-full left-0 right-0 mt-2 rounded-2xl shadow-2xl z-[9999] overflow-hidden flex flex-col p-3 backdrop-blur-xl border ${
            isDark
              ? 'bg-[#101934] border-white/20 text-white shadow-black/50'
              : 'bg-white border-gray-200 text-gray-900 shadow-xl'
          }`}
        >
          {/* Search Box */}
          <div className="relative mb-2 shrink-0">
            <FiSearch className={`absolute left-3.5 top-1/2 -translate-y-1/2 text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
            <input
              type="text"
              autoFocus
              placeholder="Search country..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              suppressHydrationWarning={true}
              className={`w-full pl-9 pr-8 py-2.5 text-xs rounded-xl border focus:outline-none transition ${
                isDark
                  ? 'bg-white/10 text-white placeholder-gray-400 border-white/10 focus:ring-1 focus:ring-seppa-red'
                  : 'bg-gray-50 text-gray-900 placeholder-gray-500 border-gray-200 focus:ring-1 focus:ring-seppa-red'
              }`}
            />
            {search && (
              <button
                type="button"
                onClick={() => setSearch('')}
                suppressHydrationWarning={true}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
              >
                <FiX className="text-xs" />
              </button>
            )}
          </div>

          {/* List of Countries */}
          <div className="overflow-y-auto max-h-60 space-y-1 custom-scrollbar pr-0.5">
            {filteredCountries.length === 0 ? (
              <div className="py-4 text-center text-xs text-gray-400">No matching country found</div>
            ) : (
              filteredCountries.map((c) => {
                const isSelected = value.toLowerCase() === c.name.toLowerCase();
                const Flag = flags[c.code as Country];

                return (
                  <button
                    key={c.code}
                    type="button"
                    onClick={() => {
                      onChange(c.name);
                      setIsOpen(false);
                      setSearch('');
                    }}
                    suppressHydrationWarning={true}
                    className={`w-full flex items-center gap-3 px-3.5 py-2.5 text-xs rounded-xl transition cursor-pointer text-left ${
                      isSelected
                        ? 'bg-seppa-red text-white font-bold shadow-sm'
                        : isDark
                        ? 'text-gray-200 hover:bg-white/10'
                        : 'text-gray-800 hover:bg-gray-100'
                    }`}
                  >
                    <div className="w-5 h-3.5 rounded overflow-hidden shrink-0 shadow-sm flex items-center justify-center">
                      {Flag && <Flag title={c.name} />}
                    </div>
                    <span className="truncate">{c.name}</span>
                  </button>
                );
              })
            )}
          </div>
        </div>
      )}

      {error && (
        <p className="text-red-400 text-xs mt-1.5 ml-3 font-medium">
          {error}
        </p>
      )}
    </div>
  );
};

export default CountrySelectDropdown;
