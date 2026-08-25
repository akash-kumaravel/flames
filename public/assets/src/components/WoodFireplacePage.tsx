import { motion } from 'motion/react';
import { 
  Flame, Shield, Sparkles, Layers, ArrowRight, 
  Trees, Wrench, Thermometer, Droplets
} from 'lucide-react';
import { ActiveSection } from '../types';
import WhatsAppIcon from './WhatsAppIcon';
import FaqAccordion from './FaqAccordion';

interface WoodFireplacePageProps {
  onNavigate: (section: ActiveSection) => void;
}

export default function WoodFireplacePage({ onNavigate }: WoodFireplacePageProps) {
  const benefits = [
    {
      title: "Authentic Scent & Crackle",
      desc: "Natural woodfire aroma, soothing ambient crackle, and rich radiant warmth extending well over 4 meters on cool desert winter evenings.",
      icon: Trees
    },
    {
      title: "Micro-Mesh Spark Containment",
      desc: "Heavy-gauge 304 stainless steel spark screen dome arrests 99% of flying sparks and embers while preserving an unobstructed 360° flame view.",
      icon: Shield
    },
    {
      title: "1400°C Refractory Firebricks",
      desc: "High-density refractory brick hearth lining absorbs and radiates intense heat for hours, protecting the outer metal shell from thermal fatigue.",
      icon: Thermometer
    },
    {
      title: "Effortless Ash Cleanout Drawer",
      desc: "Slide-out lower stainless steel ash collector drawer allows zero-mess cleanup in under 30 seconds without scooping or vacuuming.",
      icon: Wrench
    },
    {
      title: "Corten & 304 Marine Stainless",
      desc: "Weather-resistant architectural corten steel develops a protective self-healing patina, 100% resistant to UAE UV rays, humidity, and sand.",
      icon: Layers
    },
    {
      title: "Integrated Rain Drainage",
      desc: "Precision laser-cut base weep channels prevent water stagnation during seasonal rains or garden pressure washing.",
      icon: Droplets
    }
  ];

  const woodFaqs = [
    {
      question: "Can wood fireplaces be installed in Dubai villa gardens and residential communities?",
      answer: "Yes. Our wood fireplaces and chimeneas are engineered with heavy 304 stainless steel micro-mesh spark arrestor screens to prevent flying embers. We ensure compliant clearances from property walls, trees, and neighboring structures in accordance with UAE Civil Defense safety guidelines."
    },
    {
      question: "What wood burns best with minimal smoke in the UAE climate?",
      answer: "We strongly recommend kiln-dried seasoned hardwoods such as Oak, Olive wood, Beech, or Birch with moisture content below 18%. Seasoned hardwoods burn hotter, produce longer-lasting embers, and release virtually zero excess smoke compared to softwoods."
    },
    {
      question: "Can an outdoor wood fireplace sit on a wooden deck patio or synthetic grass?",
      answer: "Wood-burning features must always be placed on a non-combustible foundation such as porcelain tiles, natural stone pavers, gravel beds, or a concrete hearth pad. We provide custom refractory stone heat pads to protect delicate decking and ensure a 2-meter safe perimeter."
    },
    {
      question: "Does the spark arrestor dome screen block the view or heat of the fire?",
      answer: "Not at all. The 304 stainless micro-perforated mesh is optically optimized to provide clear visibility of the glowing logs and dancing flames while transmitting over 95% of radiant infrared heat outwards into your seating area."
    },
    {
      question: "How does Corten steel withstand coastal humidity and desert sandstorms?",
      answer: "Corten (weathering steel) forms a dense, stable oxide patina on its outer surface when exposed to the elements. This oxidized outer layer acts as an impervious protective barrier, preventing deep corrosion even in high-salinity beachfront villas in Palm Jumeirah or Jumeirah Islands."
    },
    {
      question: "Do you manufacture custom sizes and built-in masonry hearth inserts?",
      answer: "Yes. In addition to freestanding chimeneas and circular fire pits (60cm to 120cm), our Dubai metal fabrication facility crafts bespoke custom-dimensioned wood fireboxes, firebrick-lined hearths, and flue chimney caps tailored to your architectural plans."
    }
  ];

  return (
    <div id="wood-fireplace-page" className="bg-[#0b0b0b] text-neutral-100 selection:bg-orange-500 selection:text-white pb-24">
      
      {/* ──── SECTION 1: HERO SECTION ──── */}
      <section className="relative overflow-hidden pt-28 sm:pt-36 pb-16 lg:pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(251,146,60,0.18),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(249,115,22,0.12),_transparent_35%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              {/* Product Badge */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/25 text-orange-400 text-xs font-semibold uppercase tracking-wider mb-6"
              >
                <Flame className="w-3.5 h-3.5 text-orange-500" />
                <span>AUTHENTIC WOOD FIRE · UAE CERTIFIED</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="font-sans font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-tight mb-6"
              >
                Wood Fire Place
              </motion.h1>

              {/* Product Tagline & Description */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="text-lg text-orange-400/90 font-medium mb-4"
              >
                Authentic Wood-Burning Hearths, Fire Pits &amp; Chimeneas for UAE Gardens &amp; Estates
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl mb-8 font-light"
              >
                Experience the authentic primal allure, hypnotic aroma, and crackling heat of an authentic wood-burning fire feature. Handcrafted from heavy-gauge Corten steel, marine-grade stainless steel, and high-density refractory firebricks with precision engineered spark containment.
              </motion.p>

              {/* Quick Specs / Capabilities Tags */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="flex flex-wrap gap-2.5 mb-8"
              >
                <span className="text-xs px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-orange-400" /> Spark Arrestor Dome
                </span>
                <span className="text-xs px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 flex items-center gap-1.5">
                  <Thermometer className="w-3.5 h-3.5 text-orange-400" /> 1400°C Refractory Firebricks
                </span>
                <span className="text-xs px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-orange-400" /> Heavy-Gauge Corten Steel
                </span>
                <span className="text-xs px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 flex items-center gap-1.5">
                  <Wrench className="w-3.5 h-3.5 text-orange-400" /> Slide-Out Ash Pan
                </span>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5"
              >
                <button
                  id="quote-cta-wood-fireplace"
                  onClick={() => onNavigate('contact')}
                  className="px-7 py-3.5 rounded-full bg-orange-600 hover:bg-orange-500 text-white font-sans text-xs font-semibold shadow-lg shadow-orange-600/20 hover:shadow-orange-500/30 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer group"
                >
                  Request Technical Quotation
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <a
                  id="wa-cta-wood-fireplace"
                  href="https://wa.me/971542112891?text=Hi%20Flames%20Fireplace%2C%20I'm%20inquiring%20about%20Wood%20Fire%20Places."
                  target="_blank"
                  rel="noreferrer noopener"
                  className="px-6 py-3.5 rounded-full bg-[#161616] hover:bg-[#202020] border border-neutral-700/80 hover:border-orange-500/50 transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer text-xs font-semibold text-neutral-200 hover:text-orange-400"
                >
                  <WhatsAppIcon className="w-4 h-4 shrink-0" />
                  Chat on WhatsApp
                </a>
              </motion.div>
            </div>

            {/* Showcase Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative rounded-3xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-2xl group"
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src="https://www.flamesfireplace.com/assets/Wood%20Fire%20Place.webp"
                  alt="Outdoor Wood Fire Place with authentic crackling logs and refractory firebrick hearth in Dubai — Flames Fireplace"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs text-neutral-300">
                <span className="bg-black/70 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-white/10">
                  Custom lengths &amp; diameters 60cm – 200cm
                </span>
                <span className="bg-orange-500/90 text-white px-3.5 py-1.5 rounded-lg font-medium">
                  UAE Certified Ember Containment
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ──── SECTION 2: SYSTEM ARCHITECTURE & OVERVIEW ──── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="bg-[#121212] rounded-3xl p-8 sm:p-12 border border-neutral-800">
          <div className="flex items-center gap-2 text-orange-400 text-xs uppercase tracking-[0.2em] font-semibold mb-3">
            <Sparkles className="w-4 h-4" />
            <span>Heavy-Duty Thermal Engineering</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-6">
            Engineered Woodfire Systems for Luxury Desert Living
          </h2>
          <p className="text-neutral-300 leading-relaxed text-base sm:text-lg font-light max-w-4xl">
            Designed for luxury villa gardens, desert courtyards, and open-air rooftop terraces, our wood fireplace systems combine heavy-duty weather-resistant materials with precision engineered ember control. Available as freestanding chimeneas, circular steel fire bowls, or custom masonry hearth inserts with integrated spark protection screens, high-density refractory firebricks, and slide-out ash cleanout pans.
          </p>
        </div>
      </section>

      {/* ──── SECTION 3: KEY ADVANTAGES & FEATURES (Grid) ──── */}
      <section className="bg-[#0f0f0f] py-20 border-y border-neutral-800/80">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-[0.25em] text-orange-500 font-semibold">Engineered Superiority</span>
            <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-semibold text-white">
              Why Choose Our Wood Fireplace Systems
            </h2>
            <p className="mt-3 text-neutral-400 text-sm font-light">
              Built with industrial-grade materials to withstand the intense thermal cycles of authentic wood burning and the outdoor UAE environment.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => {
              const IconComponent = benefit.icon;
              return (
                <div key={idx} className="rounded-2xl border border-neutral-800 bg-[#141414] p-6 hover:border-orange-500/40 transition-colors">
                  <div className="p-3 rounded-xl bg-orange-500/10 text-orange-400 w-fit mb-4">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">{benefit.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ──── SECTION 4: FREQUENTLY ASKED QUESTIONS (Accordion) ──── */}
      <FaqAccordion
        items={woodFaqs}
        title="Wood Fireplace FAQs"
        subtitle="Clarifications regarding seasoned wood selection, spark arrestor safety, UAE villa garden clearances, and ash cleanout maintenance."
        eyebrow="Technical Q&A"
        whatsappMessage="Hi Flames Fireplace, I'd like to ask a few questions regarding outdoor wood fireplace designs and safety."
        onNavigate={onNavigate}
      />

      {/* ──── SECTION 5: BOTTOM CONSULTATION & SITE VISIT BANNER ──── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-8 pb-12">
        <div className="rounded-3xl bg-[#121212] border border-neutral-800 p-8 sm:p-12 text-center text-white relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Custom Wood Fireplace &amp; Chimenea Construction in Dubai
            </h3>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-8 font-light">
              Discuss custom firebrick sizing, corten steel pit fabrication, or spark arrestor fitments with our Dubai installation engineering team.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://wa.me/971542112891?text=Hi%20Flames%20Fireplace%2C%20I'm%20inquiring%20about%20Custom%20Outdoor%20Wood%20Fireplaces."
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2.5 rounded-full bg-[#182a1d] hover:bg-[#1e3825] border border-emerald-500/40 text-emerald-400 px-7 py-3.5 text-xs font-semibold shadow-lg transition-all cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4 shrink-0" />
                Inquire on WhatsApp
              </a>
              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-2 rounded-full bg-orange-600 hover:bg-orange-500 text-white px-7 py-3.5 text-xs font-semibold shadow-lg shadow-orange-600/20 transition-all cursor-pointer"
              >
                Book Site Assessment
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
