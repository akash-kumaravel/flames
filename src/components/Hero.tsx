import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, Flame, ShieldCheck } from 'lucide-react';
import { ActiveSection } from '../types';
import { TRUST_BAR, GENERAL_STATS, PRODUCTS, BRAND, SERVICES } from '../data';
import { motion } from 'motion/react';
import { PORTFOLIO_ITEMS } from './PortfolioPage';
import ServiceCard from './ServiceCard';

interface HeroProps {
  onNavigate: (section: ActiveSection) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const heroSlides = SERVICES;
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlideIndex((prev) => (prev + 1) % heroSlides.length);
    }, 4500);

    return () => window.clearInterval(interval);
  }, [heroSlides.length]);

  useEffect(() => {
    const nextIndex = (activeSlideIndex + 1) % heroSlides.length;
    const nextImage = new Image();
    nextImage.src = heroSlides[nextIndex].image;
  }, [activeSlideIndex, heroSlides]);

  return (
    <div id="hero-landing-page" className="pb-20 px-6 md:px-12 bg-[#0b0b0b]">
      {/* 1. Hero Content & Tagline Section */}
      <section className="relative min-h-screen overflow-hidden shadow-2xl border border-neutral-200/20 rounded-none w-screen max-w-none ml-[calc(50%-50vw)]">
        <div className="absolute inset-0 z-0">
          <img
            key={heroSlides[activeSlideIndex].image}
            src={heroSlides[activeSlideIndex].image}
            alt={`Featured service ${heroSlides[activeSlideIndex].title}`}
            loading="eager"
            fetchpriority="high"
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-950/80 via-neutral-900/45 to-neutral-900/20" />
        </div>

        <div className="relative z-10 min-h-screen flex items-center justify-center px-6 md:px-12">
          <div className="text-center flex flex-col items-center max-w-5xl py-20">
          <motion.div
            id="hero-tagline-badge"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-orange-500/15 text-orange-300 font-sans text-xs font-semibold uppercase tracking-wider mb-6"
          >
            <Flame className="w-3.5 h-3.5 fill-orange-600 text-orange-600" />
            Flames Fireplace Dubai & UAE
          </motion.div>

          <motion.h1
            id="hero-headline"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="font-sans font-semibold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-tight max-w-4xl"
          >
            {BRAND} — Where <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-amber-400">Fire Meets Design</span>
          </motion.h1>

          <motion.p
            id="hero-subheadline"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-sans text-lg md:text-xl text-neutral-300 max-w-2xl mt-6 leading-relaxed"
          >
            Looking for the best fireplace in Dubai? Flames Fireplace offers premium bio ethanol fireplaces, 3D water vapor mist systems, custom fire pits, and outdoor kitchens. Smokeless. Safe. Timeless.
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
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-orange-700 hover:bg-orange-800 text-white font-sans text-sm font-semibold hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 group"
              aria-label="Explore our services"
            >
              Explore Our Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              id="hero-view-portfolio-btn"
              onClick={() => onNavigate('portfolio')}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-neutral-900/80 hover:bg-orange-500 text-white font-sans text-sm font-semibold hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 group"
            >
              View Portfolio
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              id="hero-quote-btn"
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white/15 text-white font-sans text-sm font-semibold border border-white/15 shadow-xs transition-colors cursor-pointer"
            >
              Get a Free Quote
            </button>
          </motion.div>

          <motion.div
            className="mt-12 w-full max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35 }}
          >
            <div
              role="button"
              onClick={() => onNavigate(heroSlides[activeSlideIndex].id as unknown as ActiveSection)}
              className="group cursor-pointer rounded-3xl border border-white/15 bg-white/10 backdrop-blur-xl p-6 md:p-8 hover:border-orange-300/50 hover:bg-white/15 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="space-y-3 text-left md:max-w-2xl">
                  <span className="text-xs uppercase tracking-[0.3em] text-orange-200 font-semibold">Featured Fireplace</span>
                  <h2 className="font-sans text-2xl md:text-3xl font-semibold text-white tracking-tight">
                    {heroSlides[activeSlideIndex].title}
                  </h2>
                  <p className="text-sm md:text-base text-neutral-100/90 leading-relaxed max-w-3xl">
                    {heroSlides[activeSlideIndex].subtitle || heroSlides[activeSlideIndex].description}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    onNavigate(heroSlides[activeSlideIndex].id as unknown as ActiveSection);
                  }}
                  className="inline-flex items-center gap-2 rounded-full bg-orange-600 px-5 py-3 text-sm font-semibold text-white shadow-xl shadow-orange-500/20 hover:bg-orange-700 transition-all duration-300"
                >
                  Explore {heroSlides[activeSlideIndex].title}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="mt-6 flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    setActiveSlideIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
                  }}
                  className="inline-flex items-center justify-center h-11 w-11 rounded-full border border-white/20 bg-black/20 text-white transition-colors duration-300 hover:border-orange-300/80 hover:bg-orange-500/20"
                  aria-label="Previous slide"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>

                <div className="flex items-center gap-2">
                  {heroSlides.map((slide, index) => (
                    <button
                      key={slide.id}
                      type="button"
                      onClick={(event) => {
                        event.stopPropagation();
                        setActiveSlideIndex(index);
                      }}
                      className={`h-3 w-3 rounded-full transition-all duration-200 ${index === activeSlideIndex ? 'bg-orange-500 scale-110' : 'bg-white/40 hover:bg-white/70'}`}
                      aria-label={`View ${slide.title}`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    setActiveSlideIndex((prev) => (prev + 1) % heroSlides.length);
                  }}
                  className="inline-flex items-center justify-center h-11 w-11 rounded-full border border-white/20 bg-black/20 text-white transition-colors duration-300 hover:border-orange-300/80 hover:bg-orange-500/20"
                  aria-label="Next slide"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Welcome / Intro Copy Block */}
      <section className="max-w-7xl mx-auto mt-20 mb-36 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-5">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-400 block mb-3">Redefine Ambience</span>
          <h2 className="font-sans text-2xl md:text-4xl font-semibold text-white tracking-tight leading-tight">
            An extraordinary living flame with zero emissions.
          </h2>
        </div>
        <div className="lg:col-span-7 space-y-6 text-neutral-400 font-sans text-base leading-relaxed">
          <p>
            Welcome to <strong className="text-white">Flames Fireplace</strong> — your destination for next-generation architectural fire features in Dubai and the UAE. 
            Whether you are looking for elegant clean-burning Indoor Bio Ethanol Fireplaces, 
            or stunning custom-fitted Outdoor Fire Features, we formulate products engineered for sheer visual beauty, domestic safety, and physical permanence.
          </p>
          <p>
            From modern city apartments to expansive seaside pool gardens, our smokeless fire solutions are trusted by luxury homeowners, interior designers, architects, and hospitality specialists across the UAE.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto mb-24">
        <div className="bg-[#121212] rounded-3xl border border-neutral-800 p-8 md:p-12 shadow-sm">
          <span className="text-xs font-bold uppercase tracking-[0.24em] text-orange-400">A complete fireplace experience</span>
          <h2 className="font-sans text-2xl md:text-3xl font-semibold text-white tracking-tight mt-4">
            Elegant fireplace design, professional installation, and expert support for Dubai and the UAE.
          </h2>
          <p className="font-sans text-sm md:text-base text-neutral-300 leading-relaxed mt-4 max-w-3xl">
            From concept to installation, Flames Fireplace brings together thoughtful design, certified safety, and careful craftsmanship for every project.
          </p>
        </div>
      </section>

      {/* NEW SECTION: OUR PROFESSIONAL OUTDOOR SERVICES & FIRE FEATURES */}
      <section className="max-w-7xl mx-auto mb-28">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-400 block mb-2">Our Professional Services</span>
          <h2 className="font-sans text-3xl font-semibold text-white tracking-tight">Outdoor Fire Features &amp; Kitchens in Dubai, Abu Dhabi &amp; Sharjah</h2>
          <p className="font-sans text-sm text-neutral-400 max-w-2xl mx-auto mt-3">
            Transforming luxury villas, pool decks, and gardens with weather-resistant fire features, custom kitchens, and barbecue installations across Dubai, Abu Dhabi, Sharjah, and the wider UAE.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.filter((service) => service.id !== 'outdoor-kitchens').map((service) => (
            <ServiceCard key={service.id} service={service} onNavigate={onNavigate} />
          ))}
        </div>
      </section>

      {/* NEW SECTION B: Architectural Installation Gallery Case Exhibition */}
      <section className="max-w-7xl mx-auto mb-28">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-400 block mb-2">Design Inspiration</span>
          <h2 className="font-sans text-3xl font-semibold text-white tracking-tight">Luxury UAE Architectural Showcases</h2>
          <p className="font-sans text-sm text-neutral-400 max-w-2xl mx-auto mt-3">
            Explore how interior designers and landscape architects integrate Flames Fireplace systems inside the UAE's most prestigious living communities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PORTFOLIO_ITEMS.slice(0, 3).map((item) => (
            <div key={item.id} className="bg-[#121212] rounded-3xl overflow-hidden border border-neutral-800 shadow-2xs hover:shadow-lg transition duration-300 flex flex-col justify-between">
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
                  <h3 className="font-sans font-semibold text-white text-lg line-clamp-2">{item.title}</h3>
                  <p className="text-xs text-neutral-350 leading-relaxed font-sans line-clamp-3">
                    {item.description}
                  </p>
                </div>
              </div>
              <div className="p-8 pt-0">
                <div className="border-t border-neutral-800 pt-4 flex justify-between items-center text-[11px] font-mono text-neutral-450">
                  <span className="truncate max-w-[150px]">{item.specs[0] || 'Quality Craftsmanship'}</span>
                  <button
                    onClick={() => onNavigate('portfolio')}
                    className="text-orange-400 font-bold hover:underline cursor-pointer flex items-center gap-1 shrink-0"
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
      <section className="max-w-7xl mx-auto mb-24 bg-[#121212] border border-neutral-800 rounded-3xl p-8 md:p-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-4">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-400 block mb-3">Guaranteed High-Standards</span>
            <h3 className="font-sans text-2xl md:text-3xl font-semibold text-white tracking-tight leading-snug">
              Fire features, certified UAE safety.
            </h3>
            <p className="font-sans text-sm text-neutral-450 mt-4 leading-relaxed">
              We engineer our components with double-wall structural steels, high-precision safety valves, and robust wind-guards.
            </p>
            <button
              id="trust-cta-btn"
              onClick={() => onNavigate('about')}
              className="mt-6 flex items-center gap-1.5 text-xs font-bold text-orange-400 hover:text-orange-500 hover:underline cursor-pointer"
            >
              Read our full story
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {TRUST_BAR.map((trust, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-orange-500/10 border border-orange-950 flex items-center justify-center text-orange-400 shrink-0">
                  <ShieldCheck className="w-5 h-5 shrink-0" />
                </div>
                <div>
                  <h4 className="font-sans text-sm font-semibold text-white">{trust.title}</h4>
                  <p className="font-sans text-xs text-neutral-450 mt-1.5 leading-relaxed">{trust.desc}</p>
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
