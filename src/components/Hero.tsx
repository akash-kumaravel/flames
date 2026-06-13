import { ArrowRight, ShieldCheck, Flame } from 'lucide-react';
import { ActiveSection } from '../types';
import { TRUST_BAR, GENERAL_STATS, PRODUCTS, BRAND } from '../data';
import { motion } from 'motion/react';

interface HeroProps {
  onNavigate: (section: ActiveSection) => void;
  onSelectProduct: (productId: string) => void;
}

export default function Hero({ onNavigate, onSelectProduct }: HeroProps) {
  // Map our product IDs to active section keys for routing
  const productSectionMap: Record<string, ActiveSection> = {
    "vapor-fireplace": "product-watercolor",
    "indoor-ethanol": "product-indoor",
    "outdoor-ethanol": "product-outdoor"
  };

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
          AEO & GEO Optimized Living Fire Designs
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
          Premium 3D Water Vapor Fireplaces and Bio Ethanol Fireplaces for indoor and outdoor living. Smokeless. Safe. Timeless.
        </motion.p>

        <motion.div
          id="hero-cta-group"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 mt-10"
        >
          <button
            id="hero-explore-products-btn"
            onClick={() => onNavigate('products')}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-neutral-900 hover:bg-orange-500 text-white font-sans text-sm font-semibold hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 group"
          >
            Explore Systems
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
            3D Water Vapor Illusion Fireplace integrated inside high-end architectural sandstone plaster blocks.
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
            Whether you are looking for the mesmerising hologram of real flames with zero emissions through our 3D Water Vapor Fireplaces, 
            or the direct clean-burning wood heat of Bio Ethanol Fireplaces, we formulate products engineered for sheer visual beauty, domestic safety, and physical permanence.
          </p>
          <p>
            From modern city apartments to expansive seaside pool gardens, our smokeless fire solutions are trusted by luxury homeowners, interior designers, architects, and hospitality specialists across the UAE.
          </p>
        </div>
      </section>

      {/* 4. Products Highlights Grid (Cards) */}
      <section className="max-w-7xl mx-auto mb-28">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-500 block mb-2">Premium Curations</span>
          <h2 className="font-sans text-3xl font-semibold text-neutral-900 tracking-tight">Our Distinct Fireplace Line</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRODUCTS.map((prod) => (
            <div
              key={prod.id}
              className="bg-white rounded-3xl overflow-hidden border border-neutral-200/50 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={prod.imageUrl}
                    alt={prod.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale-5 cursor-pointer hover:scale-105 transition-transform duration-500"
                    onClick={() => {
                      onSelectProduct(prod.id);
                      onNavigate(productSectionMap[prod.id]);
                    }}
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full border border-neutral-200">
                    <span className="font-mono text-[10px] font-bold text-neutral-700">Premium Class</span>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="font-sans text-xl font-semibold text-neutral-900 tracking-tight mb-2">
                    {prod.name}
                  </h3>
                  <p className="font-sans text-xs text-neutral-400 italic mb-4">{prod.tagline}</p>
                  <p className="font-sans text-sm text-neutral-500 leading-relaxed">
                    {prod.description}
                  </p>
                </div>
              </div>

              <div className="px-8 pb-8 pt-2">
                <button
                  id={`hero-card-learn-${prod.id}`}
                  onClick={() => {
                    onSelectProduct(prod.id);
                    onNavigate(productSectionMap[prod.id]);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full py-3.5 rounded-full bg-neutral-50 hover:bg-orange-500 text-neutral-800 hover:text-white font-sans text-xs font-semibold tracking-wide border border-neutral-200/50 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  Explore Core Specifications
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
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
              We engineer our components with premium double-wall structural steels, high-density ultrasonic mist layers, and robust wind-guards.
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
