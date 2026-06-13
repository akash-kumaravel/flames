import { useState, useEffect } from 'react';
import { Flame, Menu, X, ArrowUpRight } from 'lucide-react';
import { ActiveSection } from '../types';
import { BRAND } from '../data';

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
    { label: 'Our Products', value: 'products' },
    { label: 'FAQs', value: 'faq' },
    { label: 'Blog', value: 'blog' },
  ];

  return (
    <header
      id="header-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-neutral-50/80 backdrop-blur-xl border-b border-neutral-200/50 py-3 shadow-xs'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          id="logo-btn"
          onClick={() => {
            onNavigate('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white shadow-lg shadow-orange-500/20 group-hover:scale-105 transition-transform duration-300">
            <Flame className="w-5 h-5 fill-white" />
          </div>
          <span className="font-sans font-semibold text-lg tracking-tight text-neutral-900 group-hover:text-orange-500 transition-colors duration-300">
            {BRAND}
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive =
              item.value === activeSection ||
              (item.value === 'products' &&
                ['product-watercolor', 'product-indoor', 'product-outdoor'].includes(activeSection));

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
            Get a Quote
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Control */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-full text-neutral-700 hover:bg-neutral-100 transition-colors cursor-pointer"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer"
          className="lg:hidden absolute top-full left-0 right-0 bg-neutral-50 border-b border-neutral-200/50 shadow-xl overflow-hidden py-6 px-8 flex flex-col gap-4"
        >
          {navItems.map((item) => (
            <button
              key={item.value}
              id={`mobile-nav-${item.value}`}
              onClick={() => {
                onNavigate(item.value);
                setMobileMenuOpen(false);
              }}
              className={`font-sans text-left text-base font-semibold py-2 cursor-pointer ${
                activeSection === item.value ? 'text-orange-600' : 'text-neutral-600'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            id="mobile-cta-btn"
            onClick={() => {
              onNavigate('contact');
              setMobileMenuOpen(false);
            }}
            className="w-full text-center py-3 mt-2 rounded-xl bg-orange-500 text-white font-sans text-sm font-semibold hover:bg-orange-600 cursor-pointer"
          >
            Get a Free Quote
          </button>
        </div>
      )}
    </header>
  );
}
