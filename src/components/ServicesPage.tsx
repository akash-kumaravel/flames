import { useState } from 'react';
import { motion } from 'motion/react';
import { Flame, Droplets, Compass, ArrowRight } from 'lucide-react';
import { SERVICES } from '../data';
import { ActiveSection } from '../types';
import ServiceCard from './ServiceCard';

interface ExtendedService {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  badge: string;
  category: 'indoor' | 'outdoor';
  waMessage: string;
}

const EXTENDED_SERVICES: ExtendedService[] = [
  ...SERVICES
];

interface ServicesPageProps {
  onNavigate?: (section: ActiveSection) => void;
}

export default function ServicesPage({ onNavigate }: ServicesPageProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'indoor' | 'outdoor'>('all');

  const filteredServices = activeTab === 'all' 
    ? EXTENDED_SERVICES
    : EXTENDED_SERVICES.filter(s => s.category === activeTab);

  return (
    <div id="services-page" className="min-h-screen bg-[#FAF9F6] text-neutral-800 pb-28 selection:bg-orange-500 selection:text-white">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-8 pb-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-orange-100/60 text-orange-700 font-sans text-xs font-semibold uppercase tracking-wider mb-5"
        >
          <Compass className="w-3.5 h-3.5" />
          Our Professional Solutions
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-sans font-semibold text-3xl sm:text-4xl md:text-5xl text-neutral-900 tracking-tight leading-tight max-w-4xl mx-auto"
        >
          Custom Indoor &amp; Outdoor Services
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-sans text-sm text-neutral-500 max-w-2xl mx-auto mt-4 leading-relaxed font-light"
        >
          Discover safe indoor fireplaces and weather-proof outdoor kitchens built for UAE environments.
        </motion.p>
      </section>

      {/* Segmented Filter Control */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <div className="flex justify-center">
          <div className="bg-neutral-100 p-1.5 rounded-2xl inline-flex items-center gap-1 border border-neutral-200/50">
            <button
              id="btn-filter-all"
              onClick={() => setActiveTab('all')}
              className={`px-5 py-2.5 rounded-xl font-sans text-xs font-medium transition-all duration-300 cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-neutral-900 text-white shadow-sm'
                  : 'text-neutral-500 hover:text-neutral-800 hover:bg-neutral-200/50'
              }`}
            >
              All Services ({EXTENDED_SERVICES.length})
            </button>
            <button
              id="btn-filter-indoor"
              onClick={() => setActiveTab('indoor')}
              className={`px-5 py-2.5 rounded-xl font-sans text-xs font-medium transition-all duration-300 cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'indoor'
                  ? 'bg-orange-500 text-white shadow-sm'
                  : 'text-neutral-500 hover:text-neutral-800 hover:bg-neutral-200/50'
              }`}
            >
              <Droplets className="w-3.5 h-3.5" />
              Indoor Features ({EXTENDED_SERVICES.filter(s => s.category === 'indoor').length})
            </button>
            <button
              id="btn-filter-outdoor"
              onClick={() => setActiveTab('outdoor')}
              className={`px-5 py-2.5 rounded-xl font-sans text-xs font-medium transition-all duration-300 cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'outdoor'
                  ? 'bg-orange-500 text-white shadow-sm'
                  : 'text-neutral-500 hover:text-neutral-800 hover:bg-neutral-200/50'
              }`}
            >
              <Flame className="w-3.5 h-3.5 fill-current text-orange-600" />
              Outdoor Features ({EXTENDED_SERVICES.filter(s => s.category === 'outdoor').length})
            </button>
          </div>
        </div>
      </section>

      {/* Service Blocks Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((srv) => (
            <ServiceCard 
              key={srv.id} 
              service={srv as any} 
              onNavigate={onNavigate ? () => onNavigate(srv.id as ActiveSection) : undefined} 
            />
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-12 mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] gap-8">
          <div className="bg-white rounded-3xl border border-neutral-200/60 p-8 md:p-10 shadow-sm">
            <span className="text-xs font-bold uppercase tracking-[0.24em] text-orange-700">Why clients choose us</span>
            <h3 className="font-sans text-2xl md:text-3xl font-semibold text-neutral-900 tracking-tight mt-4">
              Fire features with technical support from concept to handover.
            </h3>
            <p className="font-sans text-sm text-neutral-600 leading-relaxed mt-4">
              Whether your brief is a clean indoor flame feature or a full outdoor chef’s kitchen, our team delivers design guidance, installation details, and aftercare support for every project.
            </p>
          </div>
          <div className="bg-neutral-900 rounded-3xl p-8 md:p-10 text-white shadow-sm">
            <h3 className="font-sans text-xl font-semibold">Need a tailored recommendation?</h3>
            <p className="font-sans text-sm text-neutral-300 mt-3 leading-relaxed">Tell us about your space, preferred finish, and project scope and we will help you choose the best fireplace or outdoor feature solution.</p>
            <a href="https://wa.me/971542112891?text=Hi%20Flames%20Fireplace%20team%2C%20I%20would%20like%20a%20tailored%20recommendation%20for%20my%20project." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-6 px-5 py-3 rounded-full bg-orange-600 hover:bg-orange-500 text-white font-sans text-sm font-semibold transition cursor-pointer">
              Start a WhatsApp Consultation
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Advisory & Direct Support CTA */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mt-32">
        <div className="bg-neutral-900 text-white rounded-3xl p-8 md:p-14 relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-radial from-orange-500/10 to-transparent blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl space-y-6">
            <span className="text-[10px] font-mono font-bold text-orange-400 uppercase tracking-widest block">
              REAL DESIGN INTEGRATION &amp; FIELD ADVISORY
            </span>
            <h3 className="font-sans text-2xl md:text-3xl font-semibold tracking-tight">
              Ready to Design Your Indoor &amp; Outdoor Sanctuary?
            </h3>
            <p className="font-sans text-xs md:text-sm text-neutral-300 leading-relaxed font-light">
              We collaborate with premier interior designers, landscape architects, luxury pool builders, and private residential owners across all Emirates. Contact our engineering office directly to receive full dimensional specifications, custom layouts, and integration manuals.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <a
                id="services-bottom-wa-btn"
                href="https://wa.me/971542112891?text=Hi%20Flames%20Fireplace%20team%2C%20I'd%20like%20to%20consult%20with%20you%20on%20my%20indoor%20and%20outdoor%20design%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold font-sans transition flex items-center gap-2 cursor-pointer"
              >
                Inquire on WhatsApp
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
