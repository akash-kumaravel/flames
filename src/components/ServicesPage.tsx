import { useState } from 'react';
import { motion } from 'motion/react';
import { Flame, Droplets, Compass, ArrowRight } from 'lucide-react';
import { SERVICES } from '../data';
import ServiceCard from './ServiceCard';

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState<'all' | 'indoor' | 'outdoor'>('all');

  const filteredServices = activeTab === 'all' 
    ? SERVICES.filter(s => s.id !== 'outdoor-kitchens')
    : SERVICES.filter(s => s.category === activeTab && s.id !== 'outdoor-kitchens');

  return (
    <div id="services-page" className="min-h-screen bg-[#FAF9F6] text-neutral-800 pt-28 pb-28 selection:bg-orange-500 selection:text-white">
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
          Discover premium, safe visual indoor fireplaces and weather-proof luxury outdoor kitchens built for UAE environments.
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
              All Services ({SERVICES.length})
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
              Indoor Features ({SERVICES.filter(s => s.category === 'indoor').length})
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
              Outdoor Features ({SERVICES.filter(s => s.category === 'outdoor').length})
            </button>
          </div>
        </div>
      </section>

      {/* Service Blocks Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((srv) => (
            <ServiceCard key={srv.id} service={srv} onNavigate={() => undefined} />
          ))}
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
                href="https://wa.me/971542112891?text=Hi%20Flames%20team%2C%20I'd%20like%20to%20consult%20with%20you%20on%20my%20indoor%20and%20outdoor%20design%20project."
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
