import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ActiveSection } from '../types';

interface HeaderProps {
  activeSection: ActiveSection;
  onNavigate: (section: ActiveSection) => void;
}

export default function Header({ activeSection, onNavigate }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; value: ActiveSection }[] = [
    { label: 'Home', value: 'home' },
    { label: 'About Us', value: 'about' },
    { label: 'Services', value: 'services' },
    { label: 'Portfolio', value: 'portfolio' },
    { label: 'Why Choose Us', value: 'why-choose' },
    { label: 'FAQs', value: 'faq' },
    { label: 'Blog', value: 'blog' },
  ];

  return (
    <header
      id="header-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF9F6]/95 backdrop-blur-md border-b border-neutral-200/40 py-2.5 sm:py-3 shadow-xs'
          : 'bg-[#FAF9F6]/80 backdrop-blur-xs py-3.5 sm:py-5 border-b border-neutral-200/20'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          id="logo-btn"
          onClick={() => {
            onNavigate('home');
            window.scrollTo(0, 0);
          }}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <img
            src="/assets/flames%20logo.svg"
            alt="Flames logo"
            className="h-6 sm:h-7 w-auto object-contain"
          />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = item.value === activeSection;

            return (
              <button
                key={item.value}
                id={`nav-${item.value}`}
                onClick={() => onNavigate(item.value)}
                className={`font-sans text-sm font-medium transition-all duration-300 relative py-1 cursor-pointer ${
                  isActive
                    ? 'text-orange-600'
                    : 'text-neutral-500 hover:text-neutral-800'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <button
            id="header-cta-btn"
            onClick={() => onNavigate('contact')}
            className="flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-neutral-900 text-white font-sans text-xs font-semibold hover:bg-orange-500 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300 cursor-pointer"
          >
            Contact Us
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Control */}
        <button
          id="mobile-menu-toggle"
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-full text-neutral-700 hover:bg-neutral-100 transition-colors cursor-pointer"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer with Backdrop and animations */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop behind mobile drawer */}
            <motion.div
              key="mobile-menu-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="lg:hidden fixed inset-0 bg-neutral-900/35 backdrop-blur-xs z-40"
            />

            {/* Mobile Drawer Panel */}
            <motion.div
              key="mobile-menu-panel"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              id="mobile-drawer"
              className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-neutral-100 border-b border-neutral-200 shadow-xl z-50 py-3.5 px-4 flex flex-col gap-1.5 max-h-[calc(100vh-120px)] overflow-y-auto"
            >
              <div className="grid grid-cols-2 gap-1.5 p-1">
                {navItems.map((item) => {
                  const isActive = activeSection === item.value;
                  return (
                    <button
                      key={item.value}
                      id={`mobile-nav-${item.value}`}
                      onClick={() => {
                        onNavigate(item.value);
                        setMobileMenuOpen(false);
                      }}
                      className={`text-left font-sans text-xs font-medium py-2.5 px-3 rounded-lg flex items-center justify-between transition-all duration-150 cursor-pointer ${
                        isActive
                          ? 'bg-orange-50 text-orange-600 font-semibold border-l-2 border-orange-500 pl-2'
                          : 'text-neutral-700 hover:bg-neutral-50 active:bg-neutral-100'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronRight className={`w-3 h-3 transition-transform duration-150 ${isActive ? 'text-orange-500 scale-105' : 'text-neutral-400'}`} />
                    </button>
                  );
                })}
              </div>

              <div className="pt-2.5 border-t border-neutral-100 mt-1">
                <button
                  id="mobile-cta-btn"
                  onClick={() => {
                     onNavigate('contact');
                     setMobileMenuOpen(false);
                  }}
                  className="w-full text-center py-2.5 rounded-lg bg-neutral-900 text-white font-sans text-xs font-semibold hover:bg-orange-600 active:scale-[0.98] transition-all cursor-pointer shadow-xs flex items-center justify-center gap-1"
                >
                  <span>Contact Us</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-orange-400" />
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
