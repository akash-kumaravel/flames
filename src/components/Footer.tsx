import { Flame, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { ActiveSection } from '../types';
import { BRAND, TAGLINE } from '../data';

interface FooterProps {
  onNavigate: (section: ActiveSection) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer
      id="flames-global-footer"
      className="bg-neutral-900 text-neutral-400 font-sans border-t border-neutral-800"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        
        {/* Top Segment: Brand logo to social columns split */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 pb-16 border-b border-neutral-800">
          
          {/* Brand/Slogan Column */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-orange-500 flex items-center justify-center text-white">
                <Flame className="w-5 h-5 fill-white" />
              </div>
              <span className="font-sans font-semibold text-white text-lg tracking-tight">
                {BRAND}
              </span>
            </div>
            
            <p className="text-sm font-medium text-neutral-300 italic">
              {TAGLINE}
            </p>
            
            <p className="text-xs text-neutral-500 leading-relaxed max-w-sm">
              Flames is the leading supplier of clean, smokeless decorative fire features. Utilizing premium, clean bio-ethanol combustion and eco-friendly designs, we make warmth and ambience fully accessible.
            </p>
          </div>

          {/* Quick structural catalog links column */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Bespoke Spaces
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  id="footer-nav-services"
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition cursor-pointer text-orange-400 font-medium"
                >
                  Engineering &amp; Services
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-portfolio"
                  onClick={() => onNavigate('portfolio')}
                  className="hover:text-white transition cursor-pointer text-orange-400 font-medium"
                >
                  Project Portfolio
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-contact"
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition cursor-pointer text-orange-400 font-medium"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Editorial / Info column */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Our Organization
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  id="footer-nav-about"
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition cursor-pointer"
                >
                  Our Story &amp; Values
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-why-choose"
                  onClick={() => onNavigate('why-choose')}
                  className="hover:text-white transition cursor-pointer"
                >
                  Why Choose Us
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-faq"
                  onClick={() => onNavigate('faq')}
                  className="hover:text-white transition cursor-pointer"
                >
                  FAQs &amp; Buyer Guides
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-blog"
                  onClick={() => onNavigate('blog')}
                  className="hover:text-white transition cursor-pointer"
                >
                  Blog
                </button>
              </li>
            </ul>
          </div>

          {/* Local UAE NAP details column */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Flames Office UAE
            </h4>
            
            <ul className="space-y-3.5 text-xs">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-orange-500 shrink-0" />
                <span>Office 1420, Primetime Tower, Business Bay, Dubai, United Arab Emirates</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-orange-500 shrink-0" />
                <span>+971 4 234 5678</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-orange-500 shrink-0" />
                <span>info@flamesfireplace.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Segment: Corporate Rights and SEO notations */}
        <div className="pt-10 flex flex-col lg:flex-row items-center justify-between gap-6 text-xs text-neutral-500">
          
          <div>
            <span>&copy; {new Date().getFullYear()} Flames UAE. All rights reserved.</span>
            <span className="mx-2">|</span>
            <span className="hover:text-white transition cursor-pointer">Privacy Charter</span>
            <span className="mx-2">|</span>
            <span className="hover:text-white transition cursor-pointer">Security Standards</span>
          </div>

          {/* Schema designations */}
          <div className="flex gap-4 items-center">
            <span className="px-2 py-0.5 rounded-sm border border-neutral-800 text-[10px] font-semibold text-neutral-600 uppercase">
              Schema: Organization
            </span>
            <span className="px-2 py-0.5 rounded-sm border border-neutral-800 text-[10px] font-semibold text-neutral-600 uppercase">
              Schema: LocalBusiness
            </span>
            <span className="px-2 py-0.5 rounded-sm border border-neutral-800 text-[10px] font-semibold text-neutral-600 uppercase">
              Schema: FAQPage
            </span>
          </div>

        </div>

      </div>
    </footer>
  );
}
