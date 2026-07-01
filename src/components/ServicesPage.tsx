import { useState } from 'react';
import { motion } from 'motion/react';
import { Flame, Droplets, Compass, ArrowRight } from 'lucide-react';

interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  badge: string;
  category: 'indoor' | 'outdoor';
  waMessage: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: "indoor-water-vapor",
    title: "3D Water Vapor Fireplaces",
    subtitle: "Eco-Safe Mist Technology",
    description: "Realistic clean flames using ultrasonic water mist and colored LEDs. 100% cool-to-touch and safe beneath smart TV media centers.",
    image: "https://images.unsplash.com/photo-1545048702-79362596cdc9?auto=format&fit=crop&q=80&w=1200",
    badge: "3D WATER MIST",
    category: "indoor",
    waMessage: "Inquiry regarding premium Indoor 3D Water Vapor Fireplaces"
  },
  {
    id: "indoor-bioethanol",
    title: "Bio-Ethanol Fireplaces",
    subtitle: "Ventless Living Flames",
    description: "Authentic physical heat and beautiful golden flames burning clean renewable liquid fuel with zero smoke, ash, or soot.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200",
    badge: "BIO-ETHANOL FLAMES",
    category: "indoor",
    waMessage: "Inquiry regarding bespoke Indoor Bio-Ethanol Fireplaces"
  },
  {
    id: "outdoor-fire-pits",
    title: "Premium Fire Pits & Tables",
    subtitle: "Architectural Fire Features",
    description: "Durable concrete fire tables and fire bowls running on clean bioethanol or gas, completed with tempered wind safety guards.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1200",
    badge: "FIRE PITS & BOWLS",
    category: "outdoor",
    waMessage: "Inquiry regarding custom Outdoor Fire Pits & Fire Tables"
  },
  {
    id: "outdoor-kitchens",
    title: "Bespoke Outdoor Kitchens",
    subtitle: "Culinary Luxury",
    description: "Custom premium modular kitchens with high-durability sintered stone countertops, fully rated for extreme Gulf climates.",
    image: "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=1200",
    badge: "MODULAR KITCHENS",
    category: "outdoor",
    waMessage: "Inquiry regarding custom Outdoor Kitchens in Dubai"
  },
  {
    id: "built-in-bbqs",
    title: "Premium Built-In BBQs",
    subtitle: "High-Performance Grills",
    description: "Heavy-duty 304/316 marine-grade stainless steel grills integrated seamlessly into bespoke granite and marble countertops.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=1200",
    badge: "PREMIUM GRILLS",
    category: "outdoor",
    waMessage: "Inquiry regarding Built-In BBQs & Side Burners"
  }
];

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState<'all' | 'indoor' | 'outdoor'>('all');

  const filteredServices = activeTab === 'all' 
    ? SERVICES 
    : SERVICES.filter(s => s.category === activeTab);

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
          Bespoke Indoor &amp; Outdoor Services
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
            <div
              key={srv.id}
              id={`service-card-${srv.id}`}
              className="bg-white rounded-3xl border border-neutral-200/50 overflow-hidden hover:border-orange-500/25 hover:shadow-xl hover:shadow-orange-500/[0.02] transition-all duration-300 flex flex-col justify-between group h-full"
            >
              <div className="relative h-52 w-full overflow-hidden bg-neutral-100">
                <img
                  src={srv.image}
                  alt={srv.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-103"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md border border-neutral-200/40 px-3 py-1 rounded-full text-[9px] font-bold text-neutral-800 tracking-wider uppercase font-mono">
                  {srv.category}
                </div>
              </div>

              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-orange-600 font-mono">
                      {srv.badge}
                    </span>
                    <h3 className="font-sans text-lg font-semibold text-neutral-900 tracking-tight leading-snug group-hover:text-orange-600 transition-colors">
                      {srv.title}
                    </h3>
                    <p className="font-sans text-[11px] font-medium text-neutral-400 italic">
                      {srv.subtitle}
                    </p>
                  </div>

                  <p className="font-sans text-xs text-neutral-500 leading-relaxed font-light">
                    {srv.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-100">
                  <a
                    id={`wa-cta-service-${srv.id}`}
                    href={`https://wa.me/971542112891?text=${encodeURIComponent(srv.waMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-xl bg-white hover:bg-emerald-50 border border-neutral-250 hover:border-emerald-350 text-neutral-800 font-sans text-xs font-semibold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 175.216 175.552" className="w-4 h-4 shrink-0 select-none">
                      <defs>
                        <linearGradient id={`b-wa-feat-srv-${srv.id}`} x1="85.915" x2="86.535" y1="32.567" y2="137.092" gradientUnits="userSpaceOnUse">
                          <stop offset="0" stopColor="#57d163"/>
                          <stop offset="1" stopColor="#23b33a"/>
                        </linearGradient>
                      </defs>
                      <path fill="#fff" d="m12.966 161.238 10.439-38.114a73.42 73.42 0 0 1-9.821-36.772c.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954z"/>
                      <path fill={`url(#b-wa-feat-srv-${srv.id})`} d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.559 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.524h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.929z"/>
                      <path fill="#fff" fillRule="evenodd" d="M68.016 54.843c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043c-1.226 0-3.218.46-4.902 2.3s-6.435 6.287-6.435 15.332 6.588 17.785 7.506 19.013c.918 1.228 12.718 20.381 31.405 27.75 15.529 6.124 18.689 4.906 22.061 4.6s10.877-4.447 12.408-8.74c1.531-4.293 1.531-7.971 1.072-8.74-.459-.769-1.685-1.226-3.525-2.146s-10.877-5.367-12.562-5.981-2.91-.919-4.137.921-4.746 5.979-5.819 7.206-2.144 1.381-3.984.462-7.76-2.861-14.784-9.124c-5.465-4.873-9.154-10.891-10.228-12.73s-.114-2.835.808-3.751c.825-.824 1.838-2.147 2.759-3.22s1.224-1.84 1.836-3.065.307-2.301-.153-3.22-4.032-10.011-5.666-13.647"/>
                    </svg>
                    Inquire on WhatsApp
                  </a>
                </div>
              </div>
            </div>
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
