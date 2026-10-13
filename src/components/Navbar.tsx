import React, { useState, useEffect } from 'react';
import { Currency } from '../types';
import { Menu, X, Compass, Globe } from 'lucide-react';

interface NavbarProps {
  currentCurrency: Currency;
  onCurrencyChange: (c: Currency) => void;
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentCurrency,
  onCurrencyChange,
  onOpenBooking,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Destinations', href: '#destinations' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Packages', href: '#packages' },
    { label: 'Itinerary', href: '#itinerary' },
    { label: 'Ceylon Guide', href: '#essentials' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#E7E9E2]/95 backdrop-blur-md shadow-xs border-b border-stone-200/80 py-2.5 sm:py-3'
          : 'bg-gradient-to-b from-black/60 via-black/30 to-transparent py-3.5 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#top"
            className={`font-display text-xl sm:text-2xl md:text-3xl tracking-wide transition-colors whitespace-nowrap ${
              isScrolled ? 'text-[#0F2E22]' : 'text-white'
            }`}
          >
            Lanka Odyssey
          </a>

          {/* Zone 2: 4-6 text navigation links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`transition-colors hover:text-[#C46835] ${
                  isScrolled ? 'text-stone-700' : 'text-stone-100 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="hidden sm:flex items-center gap-4">
            {/* Currency Selector */}
            <div className="relative inline-flex items-center gap-1.5 text-xs font-medium">
              <Globe
                className={`w-3.5 h-3.5 ${
                  isScrolled ? 'text-stone-500' : 'text-stone-300'
                }`}
              />
              <select
                value={currentCurrency}
                onChange={(e) => onCurrencyChange(e.target.value as Currency)}
                className={`cursor-pointer bg-transparent border rounded-md px-2 py-1 text-xs focus:outline-none transition-colors ${
                  isScrolled
                    ? 'border-stone-300 text-stone-800 focus:border-[#C46835]'
                    : 'border-white/30 text-white focus:border-white'
                }`}
                aria-label="Select currency"
              >
                <option value="USD" className="text-stone-900 bg-white">USD ($)</option>
                <option value="EUR" className="text-stone-900 bg-white">EUR (€)</option>
                <option value="GBP" className="text-stone-900 bg-white">GBP (£)</option>
                <option value="LKR" className="text-stone-900 bg-white">LKR (Rs)</option>
              </select>
            </div>

            {/* Primary Action CTA */}
            <button
              onClick={onOpenBooking}
              className={`px-4 py-2 text-xs font-semibold tracking-wider uppercase transition-all duration-200 rounded-md cursor-pointer whitespace-nowrap shadow-xs ${
                isScrolled
                  ? 'bg-[#0F2E22] text-[#E7E9E2] hover:bg-[#1F4D3A]'
                  : 'bg-[#C46835] text-white hover:bg-[#DF8452]'
              }`}
            >
              Plan Expedition
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center gap-1.5 sm:gap-2 lg:hidden">
            <select
              value={currentCurrency}
              onChange={(e) => onCurrencyChange(e.target.value as Currency)}
              className={`max-w-[76px] sm:max-w-none text-[11px] sm:text-xs bg-transparent border rounded-sm px-1.5 py-1 ${
                isScrolled ? 'border-stone-300 text-stone-800' : 'border-white/30 text-white'
              }`}
              aria-label="Currency"
            >
              <option value="USD" className="text-stone-900 bg-white">USD</option>
              <option value="EUR" className="text-stone-900 bg-white">EUR</option>
              <option value="GBP" className="text-stone-900 bg-white">GBP</option>
              <option value="LKR" className="text-stone-900 bg-white">LKR</option>
            </select>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-md transition-colors ${
                isScrolled ? 'text-stone-800 hover:bg-stone-100' : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden max-h-[calc(100dvh-72px)] overflow-y-auto bg-[#E7E9E2] border-b border-stone-200 px-4 sm:px-6 py-5 shadow-lg">
          <nav className="flex flex-col gap-4 text-base font-medium text-stone-800">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#C46835] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-stone-200 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-2.5 px-4 text-center text-xs font-semibold tracking-wider uppercase bg-[#0F2E22] text-[#E7E9E2] rounded-md hover:bg-[#1F4D3A] transition-colors"
              >
                Plan Expedition
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
