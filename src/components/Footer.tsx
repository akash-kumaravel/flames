import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { ActiveSection } from '../types';
import { TAGLINE } from '../data';

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
              <img
                src="/assets/flames%20logo.svg"
                alt="Flames Fireplace logo"
                className="h-6 w-auto object-contain"
              />
            </div>
            
            <p className="text-sm font-medium text-neutral-300 italic">
              {TAGLINE}
            </p>
            
            <p className="text-xs text-neutral-500 leading-relaxed max-w-sm">
              Flames Fireplace is the leading supplier of clean, smokeless decorative fire features. Utilizing clean bio-ethanol combustion and eco-friendly designs, we make warmth and ambience fully accessible.
            </p>
          </div>

          {/* Quick structural catalog links column */}
          <div className="md:col-span-2 space-y-4">
            <p className="text-xs font-bold uppercase tracking-wider text-white">
              Custom Spaces
            </p>
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
            <p className="text-xs font-bold uppercase tracking-wider text-white">
              Our Organization
            </p>
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
            <p className="text-xs font-bold uppercase tracking-wider text-white">
              Flames Fireplace Office UAE
            </p>
            
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
        <div className="pt-10 flex flex-col lg:flex-row items-center justify-between gap-6 text-xs text-neutral-300">
          
          <div>
            <span>&copy; {new Date().getFullYear()} <a href="https://www.memoinfotech.com/" target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-white underline">Memo Infotech</a>. All rights reserved.</span>
          </div>

          {/* Schema designations removed from UI (kept in JSON-LD only) */}

        </div>

      </div>
    </footer>
  );
}
