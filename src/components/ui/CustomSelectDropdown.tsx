"use client";

import React, { useState, useRef, useEffect } from 'react';
import { FiChevronDown } from 'react-icons/fi';

export interface CustomSelectDropdownProps {
  value: string;
  onChange: (val: string) => void;
  options: string[];
  placeholder?: string;
  error?: string;
  variant?: 'dark' | 'light';
  className?: string;
  id?: string;
  name?: string;
  disabled?: boolean;
}

export const CustomSelectDropdown: React.FC<CustomSelectDropdownProps> = ({
  value,
  onChange,
  options,
  placeholder = 'Select Option *',
  error,
  variant = 'dark',
  className = '',
  disabled = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const isDark = variant === 'dark';

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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
        <span
          className={`truncate text-sm font-medium ${
            !value
              ? 'text-gray-400'
              : isDark
              ? 'text-white'
              : 'text-gray-800'
          }`}
        >
          {value || placeholder}
        </span>
        <FiChevronDown
          className={`text-gray-400 text-base transition-transform duration-200 shrink-0 ml-2 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Options Popover */}
      {isOpen && (
        <div
          className={`absolute top-full left-0 right-0 mt-2 rounded-2xl shadow-2xl z-[9999] overflow-hidden flex flex-col p-2 backdrop-blur-xl border ${
            isDark
              ? 'bg-[#101934] border-white/20 text-white shadow-black/50'
              : 'bg-white border-gray-200 text-gray-900 shadow-xl'
          }`}
        >
          <div className="overflow-y-auto max-h-60 space-y-1 custom-scrollbar pr-0.5">
            {options.map((opt, i) => {
              const isSelected = value === opt;
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => {
                    onChange(opt);
                    setIsOpen(false);
                  }}
                  suppressHydrationWarning={true}
                  className={`w-full flex items-center justify-between px-4 py-3 text-xs sm:text-sm rounded-xl transition cursor-pointer text-left ${
                    isSelected
                      ? 'bg-seppa-red text-white font-bold shadow-sm'
                      : isDark
                      ? 'text-gray-200 hover:bg-white/10'
                      : 'text-gray-800 hover:bg-gray-100'
                  }`}
                >
                  <span className="truncate">{opt}</span>
                </button>
              );
            })}
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

export default CustomSelectDropdown;
