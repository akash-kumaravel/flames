import { ArrowRight, ShieldCheck, Flame, Check, Sparkles, Compass, Layers } from 'lucide-react';
import { ActiveSection } from '../types';
import { TRUST_BAR, GENERAL_STATS, PRODUCTS, BRAND } from '../data';
import { motion } from 'motion/react';
import { PORTFOLIO_ITEMS } from './PortfolioPage';

interface HeroProps {
  onNavigate: (section: ActiveSection) => void;
}

export default function Hero({ onNavigate }: HeroProps) {

  return (
    <div id="hero-landing-page" className="pt-24 pb-20 px-6 md:px-12 bg-[#FAF9F6]">
      {/* 1. Hero Content & Tagline Section */}
      <section className="max-w-7xl mx-auto text-center py-16 md:py-24 flex flex-col items-center">
        <motion.div
          id="hero-tagline-badge"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-1.5 px-4 y-1.5 rounded-full bg-orange-100/65 text-orange-700 font-sans text-xs font-semibold uppercase tracking-wider mb-6"
        >
          <Flame className="w-3.5 h-3.5 fill-orange-600 text-orange-600" />
          Premium Eco-Friendly Fireplaces UAE
        </motion.div>

        <motion.h1
          id="hero-headline"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="font-sans font-semibold text-4xl sm:text-5xl md:text-6xl text-neutral-900 tracking-tight leading-tight max-w-4xl"
        >
          {BRAND} — Where <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">Fire Meets Design</span>
        </motion.h1>

        <motion.p
          id="hero-subheadline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-sans text-lg md:text-xl text-neutral-500 max-w-2xl mt-6 leading-relaxed"
        >
          Premium Bio Ethanol Fireplaces, Fire Pits, and Outdoor Kitchens for indoor and outdoor living. Smokeless. Safe. Timeless.
        </motion.p>

        <motion.div
          id="hero-cta-group"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 mt-10"
        >
          <button
            id="hero-explore-services-btn"
            onClick={() => onNavigate('services')}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-sans text-sm font-semibold hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 group"
          >
            Explore Our Services
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            id="hero-view-portfolio-btn"
            onClick={() => onNavigate('portfolio')}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-neutral-900 hover:bg-orange-500 text-white font-sans text-sm font-semibold hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 group"
          >
            View Portfolio
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            id="hero-quote-btn"
            onClick={() => onNavigate('contact')}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white hover:bg-neutral-50 text-neutral-800 font-sans text-sm font-semibold border border-neutral-300 shadow-xs transition-colors cursor-pointer"
          >
            Get a Free Quote
          </button>
        </motion.div>
      </section>

      {/* 2. Panoramic Minimal Hero Casing Frame */}
      <section className="max-w-7xl mx-auto mb-24 rounded-3xl overflow-hidden relative shadow-2xl bg-neutral-800 border border-neutral-200/20">
        <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-neutral-950/80 to-transparent z-10" />
        <img
          src="https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=1600"
          alt="Premium Alabaster Plaster Fireplace Surround"
          referrerPolicy="no-referrer"
          className="w-full h-[320px] md:h-[480px] object-cover scale-100 hover:scale-102 transition-transform duration-1000"
        />
        <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12 z-20 max-w-lg text-white">
          <span className="text-[10px] uppercase font-bold tracking-widest text-orange-400 block mb-2">Featured Design</span>
          <h2 className="font-sans text-xl md:text-3xl font-light tracking-tight leading-snug">
            Premium bio ethanol fireplace integrated inside high-end architectural sandstone plaster blocks.
          </h2>
        </div>
      </section>

      {/* 3. Welcome / Intro Copy Block */}
      <section className="max-w-7xl mx-auto mb-28 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-500 block mb-3">Redefine Ambience</span>
          <h2 className="font-sans text-2xl md:text-4xl font-semibold text-neutral-900 tracking-tight leading-tight">
            An extraordinary living flame with zero emissions.
          </h2>
        </div>
        <div className="lg:col-span-7 space-y-6 text-neutral-500 font-sans text-base leading-relaxed">
          <p>
            Welcome to <strong className="text-neutral-800">Flames</strong> — your premium destination for next-generation architectural fire features. 
            Whether you are looking for elegant clean-burning Indoor Bio Ethanol Fireplaces, 
            or stunning custom-fitted Outdoor Fire Features, we formulate products engineered for sheer visual beauty, domestic safety, and physical permanence.
          </p>
          <p>
            From modern city apartments to expansive seaside pool gardens, our smokeless fire solutions are trusted by luxury homeowners, interior designers, architects, and hospitality specialists across the UAE.
          </p>
        </div>
      </section>

      {/* NEW SECTION: OUR PROFESSIONAL OUTDOOR SERVICES & FIRE FEATURES */}
      <section className="max-w-7xl mx-auto mb-28">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-500 block mb-2">Our Professional Services</span>
          <h2 className="font-sans text-3xl font-semibold text-neutral-900 tracking-tight">Outdoor Fire Features &amp; Kitchens in Dubai</h2>
          <p className="font-sans text-sm text-neutral-500 max-w-2xl mx-auto mt-3">
            Transforming luxury villas, pool decks, and gardens with weather-resistant fire pit systems, bespoke outdoor kitchens, and professional BBQ grills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Service 1 */}
          <div className="bg-white rounded-3xl p-8 border border-neutral-200/50 hover:border-orange-500/20 shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-500 group-hover:scale-105 transition-transform">
                <Flame className="w-6 h-6 fill-orange-500" />
              </div>
              <div className="space-y-2">
                <h3 className="font-sans font-semibold text-neutral-900 text-lg group-hover:text-orange-600 transition-colors">
                  Outdoor Fire Features in Dubai UAE
                </h3>
                <p className="text-xs text-neutral-500 leading-relaxed font-sans font-light">
                  Custom linear burners, weather-sealed fire tables, and safety-glass guarded wind-dancing flames. Built using premium anti-corrosive marine metals.
                </p>
              </div>
            </div>
            <div className="border-t border-neutral-100 pt-5 mt-6 flex items-center justify-between gap-3">
              <button
                onClick={() => onNavigate('services')}
                className="text-xs font-bold text-neutral-800 hover:text-orange-500 transition flex items-center gap-1 cursor-pointer"
              >
                Learn More
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <a
                href="https://wa.me/971542112891?text=Inquiry%20regarding%20Custom%20Outdoor%20Fire%20Features%20in%20Dubai%20UAE"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 rounded-xl bg-[#FAF9F6] hover:bg-emerald-50 border border-neutral-200 hover:border-emerald-300 transition-all duration-300 flex items-center gap-1.5 cursor-pointer text-[11px] font-semibold text-neutral-800"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 175.216 175.552" className="w-4 h-4 shrink-0">
                  <defs>
                    <linearGradient id="wa-sh1" x1="85.915" x2="86.535" y1="32.567" y2="137.092" gradientUnits="userSpaceOnUse">
                      <stop offset="0" stopColor="#57d163"/>
                      <stop offset="1" stopColor="#23b33a"/>
                    </linearGradient>
                  </defs>
                  <path fill="#fff" d="m12.966 161.238 10.439-38.114a73.42 73.42 0 0 1-9.821-36.772c.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954z"/>
                  <path fill="url(#wa-sh1)" d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.559 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.524h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.929z"/>
                  <path fill="#fff" fillRule="evenodd" d="M68.772 55.603c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043c-1.226 0-3.218.46-4.902 2.3s-6.435 6.287-6.435 15.332 6.588 17.785 7.506 19.013 12.718 20.381 31.405 27.75c15.529 6.124 18.689 4.906 22.061 4.6s10.877-4.447 12.408-8.74 1.532-7.971 1.073-8.74-1.685-1.226-3.525-2.146-10.877-5.367-12.562-5.981-2.91-.919-4.137.921-4.746 5.979-5.819 7.206-2.144 1.381-3.984.462-7.76-2.861-14.784-9.124c-5.465-4.873-9.154-10.891-10.228-12.73s-.114-2.835.808-3.751c.825-.824 1.838-2.147 2.759-3.22s1.224-1.84 1.836-3.065.307-2.301-.153-3.22-4.032-10.011-5.666-13.647"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>

          {/* Service 2 */}
          <div className="bg-white rounded-3xl p-8 border border-neutral-200/50 hover:border-orange-500/20 shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-500 group-hover:scale-105 transition-transform">
                <Compass className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="font-sans font-semibold text-neutral-900 text-lg group-hover:text-orange-600 transition-colors">
                  Outdoor Kitchen in Dubai
                </h3>
                <p className="text-xs text-neutral-500 leading-relaxed font-sans font-light">
                  Bespoke, fully integrated outdoor cooking modules engineered with luxury sintered countertops, outdoor cabinetry, and premium weather-resistant storage.
                </p>
              </div>
            </div>
            <div className="border-t border-neutral-100 pt-5 mt-6 flex items-center justify-between gap-3">
              <button
                onClick={() => onNavigate('services')}
                className="text-xs font-bold text-neutral-800 hover:text-orange-500 transition flex items-center gap-1 cursor-pointer"
              >
                Learn More
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <a
                href="https://wa.me/971542112891?text=Inquiry%20regarding%20Bespoke%20Outdoor%20Kitchens%20in%20Dubai"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 rounded-xl bg-[#FAF9F6] hover:bg-emerald-50 border border-neutral-200 hover:border-emerald-300 transition-all duration-300 flex items-center gap-1.5 cursor-pointer text-[11px] font-semibold text-neutral-800"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 175.216 175.552" className="w-4 h-4 shrink-0">
                  <defs>
                    <linearGradient id="wa-sh2" x1="85.915" x2="86.535" y1="32.567" y2="137.092" gradientUnits="userSpaceOnUse">
                      <stop offset="0" stopColor="#57d163"/>
                      <stop offset="1" stopColor="#23b33a"/>
                    </linearGradient>
                  </defs>
                  <path fill="#fff" d="m12.966 161.238 10.439-38.114a73.42 73.42 0 0 1-9.821-36.772c.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954z"/>
                  <path fill="url(#wa-sh2)" d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.559 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.524h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.929z"/>
                  <path fill="#fff" fillRule="evenodd" d="M68.772 55.603c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043c-1.226 0-3.218.46-4.902 2.3s-6.435 6.287-6.435 15.332 6.588 17.785 7.506 19.013 12.718 20.381 31.405 27.75c15.529 6.124 18.689 4.906 22.061 4.6s10.877-4.447 12.408-8.74 1.532-7.971 1.073-8.74-1.685-1.226-3.525-2.146-10.877-5.367-12.562-5.981-2.91-.919-4.137.921-4.746 5.979-5.819 7.206-2.144 1.381-3.984.462-7.76-2.861-14.784-9.124c-5.465-4.873-9.154-10.891-10.228-12.73s-.114-2.835.808-3.751c.825-.824 1.838-2.147 2.759-3.22s1.224-1.84 1.836-3.065.307-2.301-.153-3.22-4.032-10.011-5.666-13.647"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>

          {/* Service 3 */}
          <div className="bg-white rounded-3xl p-8 border border-neutral-200/50 hover:border-orange-500/20 shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-500 group-hover:scale-105 transition-transform">
                <Sparkles className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="font-sans font-semibold text-neutral-900 text-lg group-hover:text-orange-600 transition-colors">
                  Fire Pit Products in Dubai UAE
                </h3>
                <p className="text-xs text-neutral-500 leading-relaxed font-sans font-light">
                  Minimalist and sculptural concrete fire bowls, basalt fire pits, and premium table inserts. Clean-burning biofuel, completely smoke-free.
                </p>
              </div>
            </div>
            <div className="border-t border-neutral-100 pt-5 mt-6 flex items-center justify-between gap-3">
              <button
                onClick={() => onNavigate('services')}
                className="text-xs font-bold text-neutral-800 hover:text-orange-500 transition flex items-center gap-1 cursor-pointer"
              >
                Learn More
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <a
                href="https://wa.me/971542112891?text=Inquiry%20regarding%20Fire%20Pit%20Products%20in%20Dubai%20UAE"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 rounded-xl bg-[#FAF9F6] hover:bg-emerald-50 border border-neutral-200 hover:border-emerald-300 transition-all duration-300 flex items-center gap-1.5 cursor-pointer text-[11px] font-semibold text-neutral-800"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 175.216 175.552" className="w-4 h-4 shrink-0">
                  <defs>
                    <linearGradient id="wa-sh3" x1="85.915" x2="86.535" y1="32.567" y2="137.092" gradientUnits="userSpaceOnUse">
                      <stop offset="0" stopColor="#57d163"/>
                      <stop offset="1" stopColor="#23b33a"/>
                    </linearGradient>
                  </defs>
                  <path fill="#fff" d="m12.966 161.238 10.439-38.114a73.42 73.42 0 0 1-9.821-36.772c.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954z"/>
                  <path fill="url(#wa-sh3)" d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.559 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.524h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.929z"/>
                  <path fill="#fff" fillRule="evenodd" d="M68.772 55.603c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043c-1.226 0-3.218.46-4.902 2.3s-6.435 6.287-6.435 15.332 6.588 17.785 7.506 19.013 12.718 20.381 31.405 27.75c15.529 6.124 18.689 4.906 22.061 4.6s10.877-4.447 12.408-8.74 1.532-7.971 1.073-8.74-1.685-1.226-3.525-2.146-10.877-5.367-12.562-5.981-2.91-.919-4.137.921-4.746 5.979-5.819 7.206-2.144 1.381-3.984.462-7.76-2.861-14.784-9.124c-5.465-4.873-9.154-10.891-10.228-12.73s-.114-2.835.808-3.751c.825-.824 1.838-2.147 2.759-3.22s1.224-1.84 1.836-3.065.307-2.301-.153-3.22-4.032-10.011-5.666-13.647"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>

          {/* Service 4 */}
          <div className="bg-white rounded-3xl p-8 border border-neutral-200/50 hover:border-orange-500/20 shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-500 group-hover:scale-105 transition-transform">
                <Layers className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="font-sans font-semibold text-neutral-900 text-lg group-hover:text-orange-600 transition-colors">
                  Fireplace Products in UAE Dubai
                </h3>
                <p className="text-xs text-neutral-500 leading-relaxed font-sans font-light">
                  Architectural, ventless fireplaces that require no flue or chimney. Stunning custom cassettes and safety-engineered built-in fireplace burners.
                </p>
              </div>
            </div>
            <div className="border-t border-neutral-100 pt-5 mt-6 flex items-center justify-between gap-3">
              <button
                onClick={() => onNavigate('services')}
                className="text-xs font-bold text-neutral-800 hover:text-orange-500 transition flex items-center gap-1 cursor-pointer"
              >
                Learn More
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <a
                href="https://wa.me/971542112891?text=Inquiry%20regarding%20Fireplace%20Products%20in%20UAE%20Dubai"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 rounded-xl bg-[#FAF9F6] hover:bg-emerald-50 border border-neutral-200 hover:border-emerald-300 transition-all duration-300 flex items-center gap-1.5 cursor-pointer text-[11px] font-semibold text-neutral-800"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 175.216 175.552" className="w-4 h-4 shrink-0">
                  <defs>
                    <linearGradient id="wa-sh4" x1="85.915" x2="86.535" y1="32.567" y2="137.092" gradientUnits="userSpaceOnUse">
                      <stop offset="0" stopColor="#57d163"/>
                      <stop offset="1" stopColor="#23b33a"/>
                    </linearGradient>
                  </defs>
                  <path fill="#fff" d="m12.966 161.238 10.439-38.114a73.42 73.42 0 0 1-9.821-36.772c.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954z"/>
                  <path fill="url(#wa-sh4)" d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.559 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.524h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.929z"/>
                  <path fill="#fff" fillRule="evenodd" d="M68.772 55.603c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043c-1.226 0-3.218.46-4.902 2.3s-6.435 6.287-6.435 15.332 6.588 17.785 7.506 19.013 12.718 20.381 31.405 27.75c15.529 6.124 18.689 4.906 22.061 4.6s10.877-4.447 12.408-8.74 1.532-7.971 1.073-8.74-1.685-1.226-3.525-2.146-10.877-5.367-12.562-5.981-2.91-.919-4.137.921-4.746 5.979-5.819 7.206-2.144 1.381-3.984.462-7.76-2.861-14.784-9.124c-5.465-4.873-9.154-10.891-10.228-12.73s-.114-2.835.808-3.751c.825-.824 1.838-2.147 2.759-3.22s1.224-1.84 1.836-3.065.307-2.301-.153-3.22-4.032-10.011-5.666-13.647"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>

          {/* Service 5 */}
          <div className="bg-white rounded-3xl p-8 border border-neutral-200/50 hover:border-orange-500/20 shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-500 group-hover:scale-105 transition-transform">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="font-sans font-semibold text-neutral-900 text-lg group-hover:text-orange-600 transition-colors">
                  Outdoor BBQ Grill in Dubai
                </h3>
                <p className="text-xs text-neutral-500 leading-relaxed font-sans font-light">
                  Commercial-grade, double-walled 304/316 stainless steel built-in BBQ grills and professional accessories for ultimate performance in your garden space.
                </p>
              </div>
            </div>
            <div className="border-t border-neutral-100 pt-5 mt-6 flex items-center justify-between gap-3">
              <button
                onClick={() => onNavigate('services')}
                className="text-xs font-bold text-neutral-800 hover:text-orange-500 transition flex items-center gap-1 cursor-pointer"
              >
                Learn More
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <a
                href="https://wa.me/971542112891?text=Inquiry%20regarding%20Outdoor%20BBQ%20Grills%20in%20Dubai"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 rounded-xl bg-[#FAF9F6] hover:bg-emerald-50 border border-neutral-200 hover:border-emerald-300 transition-all duration-300 flex items-center gap-1.5 cursor-pointer text-[11px] font-semibold text-neutral-800"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 175.216 175.552" className="w-4 h-4 shrink-0">
                  <defs>
                    <linearGradient id="wa-sh5" x1="85.915" x2="86.535" y1="32.567" y2="137.092" gradientUnits="userSpaceOnUse">
                      <stop offset="0" stopColor="#57d163"/>
                      <stop offset="1" stopColor="#23b33a"/>
                    </linearGradient>
                  </defs>
                  <path fill="#fff" d="m12.966 161.238 10.439-38.114a73.42 73.42 0 0 1-9.821-36.772c.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954z"/>
                  <path fill="url(#wa-sh5)" d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.559 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.524h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.929z"/>
                  <path fill="#fff" fillRule="evenodd" d="M68.772 55.603c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043c-1.226 0-3.218.46-4.902 2.3s-6.435 6.287-6.435 15.332 6.588 17.785 7.506 19.013 12.718 20.381 31.405 27.75c15.529 6.124 18.689 4.906 22.061 4.6s10.877-4.447 12.408-8.74 1.532-7.971 1.073-8.74-1.685-1.226-3.525-2.146-10.877-5.367-12.562-5.981-2.91-.919-4.137.921-4.746 5.979-5.819 7.206-2.144 1.381-3.984.462-7.76-2.861-14.784-9.124c-5.465-4.873-9.154-10.891-10.228-12.73s-.114-2.835.808-3.751c.825-.824 1.838-2.147 2.759-3.22s1.224-1.84 1.836-3.065.307-2.301-.153-3.22-4.032-10.011-5.666-13.647"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* NEW SECTION B: Architectural Installation Gallery Case Exhibition */}
      <section className="max-w-7xl mx-auto mb-28">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-500 block mb-2">Design Inspiration</span>
          <h2 className="font-sans text-3xl font-semibold text-neutral-900 tracking-tight">Luxury UAE Architectural Showcases</h2>
          <p className="font-sans text-sm text-neutral-500 max-w-2xl mx-auto mt-3">
            Explore how premium interior designers and landscape architects integrate Flames systems inside the UAE's most prestigious living communities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PORTFOLIO_ITEMS.slice(0, 3).map((item) => (
            <div key={item.id} className="bg-white rounded-3xl overflow-hidden border border-neutral-200/50 shadow-2xs hover:shadow-lg transition duration-300 flex flex-col justify-between">
              <div>
                <div className="h-52 overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover hover:scale-103 transition duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-neutral-900/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] text-white">
                    {item.categoryLabel}
                  </div>
                </div>
                <div className="p-8 space-y-4">
                  <h3 className="font-sans font-semibold text-neutral-900 text-lg line-clamp-2">{item.title}</h3>
                  <p className="text-xs text-neutral-500 leading-relaxed font-sans line-clamp-3">
                    {item.description}
                  </p>
                </div>
              </div>
              <div className="p-8 pt-0">
                <div className="border-t border-neutral-100 pt-4 flex justify-between items-center text-[11px] font-mono text-neutral-600">
                  <span className="truncate max-w-[150px]">{item.specs[0] || 'Premium Quality'}</span>
                  <button
                    onClick={() => onNavigate('portfolio')}
                    className="text-orange-600 font-bold hover:underline cursor-pointer flex items-center gap-1 shrink-0"
                  >
                    View Project
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Trust Bar / Why Us Segment */}
      <section className="max-w-7xl mx-auto mb-24 bg-white border border-neutral-200/40 rounded-3xl p-8 md:p-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-4">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-500 block mb-3">Guaranteed High-Standards</span>
            <h3 className="font-sans text-2xl md:text-3xl font-semibold text-neutral-900 tracking-tight leading-snug">
              Premium fire features, certified UAE safety.
            </h3>
            <p className="font-sans text-sm text-neutral-500 mt-4 leading-relaxed">
              We engineer our components with premium double-wall structural steels, high-precision safety valves, and robust wind-guards.
            </p>
            <button
              id="trust-cta-btn"
              onClick={() => onNavigate('about')}
              className="mt-6 flex items-center gap-1.5 text-xs font-bold text-orange-600 hover:text-orange-700 hover:underline cursor-pointer"
            >
              Read our full story
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {TRUST_BAR.map((trust, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-orange-50/80 border border-orange-100 flex items-center justify-center text-orange-500 shrink-0">
                  <ShieldCheck className="w-5 h-5 shrink-0" />
                </div>
                <div>
                  <h4 className="font-sans text-sm font-semibold text-neutral-900">{trust.title}</h4>
                  <p className="font-sans text-xs text-neutral-500 mt-1.5 leading-relaxed">{trust.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Social Proof Banner Section */}
      <section className="bg-neutral-900 text-white rounded-3xl p-8 md:p-14 max-w-7xl mx-auto mb-24 flex flex-col md:flex-row items-center justify-around gap-8">
        {GENERAL_STATS.map((stat, idx) => (
          <div key={idx} className="text-center">
            <span className="font-sans font-semibold text-3xl md:text-5xl text-orange-400 block mb-1">
              {stat.value}
            </span>
            <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest leading-none">
              {stat.label}
            </span>
          </div>
        ))}
      </section>
    </div>
  );
}
