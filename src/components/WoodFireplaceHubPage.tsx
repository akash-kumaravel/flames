import { motion } from 'motion/react';
import { Check, Shield, Sparkles, Sliders, Trees, Wrench, ArrowRight, Flame } from 'lucide-react';
import { ActiveSection } from '../types';
import { WOOD_VARIANTS } from '../data';
import ServiceCard from './ServiceCard';
import WhatsAppIcon from './WhatsAppIcon';
import FaqAccordion from './FaqAccordion';

interface WoodFireplaceHubProps {
  onNavigate: (section: ActiveSection) => void;
}

export default function WoodFireplaceHubPage({ onNavigate }: WoodFireplaceHubProps) {

  const generalFaqs = [
    {
      question: "Can wood fireplaces be safely used in residential gardens and patios in Dubai?",
      answer: "Yes, provided they are installed on non-combustible stone, tiled, or concrete surfaces with adequate open-air clearance. All our wood fireplaces include stainless steel spark arrestor mesh domes to contain floating embers."
    },
    {
      question: "What wood is recommended for low smoke burning in the UAE?",
      answer: "We recommend kiln-dried seasoned hardwoods such as oak, olive wood, or birch. These hardwoods have a moisture content under 18%, producing maximum radiant heat, long-lasting coals, and virtually zero acrid smoke."
    },
    {
      question: "Do you supply heavy-duty Corten steel and custom masonry hearth designs?",
      answer: "Yes. We design and custom-build heavy Corten steel chimeneas that develop a protective rustic patina, as well as 304 stainless steel fire pits and refractory firebrick masonry hearths tailored to UAE villa architecture."
    },
    {
      question: "How do you clean and maintain outdoor wood fire pits?",
      answer: "Our wood fire features come equipped with slide-out stainless steel ash collection drawers and base rainwater drain plugs, making maintenance fast, clean, and effortless."
    }
  ];

  return (
    <div id="wood-fireplace-hub" className="min-h-screen bg-[#0b0b0b] text-neutral-100 selection:bg-orange-500 selection:text-white pb-28">
      {/* Hero Header Section */}
      <section className="relative overflow-hidden pt-28 sm:pt-36 pb-16 lg:pb-24 border-b border-neutral-800/80 bg-[#0e0e0e]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/25 text-orange-400 text-xs font-semibold uppercase tracking-wider mb-6"
          >
            <Flame className="w-3.5 h-3.5 text-orange-500" />
            <span>AUTHENTIC WOOD-BURNING COLLECTION • DESERT LIVING</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-sans font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-tight max-w-4xl mx-auto mb-6"
          >
            Authentic Outdoor Wood Fireplaces in Dubai
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-neutral-300 max-w-3xl mx-auto leading-relaxed font-light mb-8"
          >
            Experience the timeless crackling warmth, hypnotic aroma, and primal campfire atmosphere of authentic wood-burning hearths, heavy corten pits, and engineered chimeneas.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-8 text-xs font-medium text-neutral-300"
          >
            <span className="inline-flex items-center gap-1.5 bg-neutral-900/90 px-3.5 py-1.5 rounded-lg border border-neutral-800">
              <Check className="w-3.5 h-3.5 text-orange-400" /> Heavy-Gauge Corten & 304 Steel
            </span>
            <span className="inline-flex items-center gap-1.5 bg-neutral-900/90 px-3.5 py-1.5 rounded-lg border border-neutral-800">
              <Check className="w-3.5 h-3.5 text-orange-400" /> 1400°C Refractory Firebrick Lining
            </span>
            <span className="inline-flex items-center gap-1.5 bg-neutral-900/90 px-3.5 py-1.5 rounded-lg border border-neutral-800">
              <Check className="w-3.5 h-3.5 text-orange-400" /> Spark Arrestor Safety Screens
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3.5"
          >
            <button
              onClick={() => onNavigate('contact')}
              className="px-7 py-3.5 rounded-full bg-orange-600 hover:bg-orange-500 text-white font-sans text-xs font-semibold shadow-lg shadow-orange-600/20 hover:shadow-orange-500/30 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer group"
            >
              Request Technical Quotation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="https://wa.me/971542112891?text=Hi%20Flames%20Fireplace%2C%20I'd%20like%20to%20consult%20with%20an%20engineer%20regarding%20an%20outdoor%20wood%20fireplace."
              target="_blank"
              rel="noreferrer noopener"
              className="px-6 py-3.5 rounded-full bg-[#161616] hover:bg-[#202020] border border-neutral-700/80 hover:border-orange-500/50 transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer text-xs font-semibold text-neutral-200 hover:text-orange-400"
            >
              <WhatsAppIcon className="w-4 h-4 shrink-0" />
              Chat on WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      {/* Model Cards Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-orange-500 font-semibold">Featured Woodfire Model</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white">Wood Fireplace Engineering</h2>
          <p className="mt-4 text-neutral-400 max-w-2xl mx-auto text-sm sm:text-base font-light">
            Explore complete technical specifications, ember control screens, firebrick thermal linings, and custom hearth installations across Dubai and the UAE.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-8">
          {WOOD_VARIANTS.map((item) => (
            <div key={item.id}>
              <ServiceCard 
                service={item} 
                onNavigate={() => onNavigate(item.id as ActiveSection)} 
              />
            </div>
          ))}
        </div>
      </section>

      {/* Safety & Construction Highlights */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 border-t border-neutral-800/80">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-orange-500 font-semibold">Crafted for Performance</span>
          <h2 className="mt-3 text-3xl font-bold text-white">Built for Outdoor Desert Living</h2>
          <p className="mt-3 text-neutral-400 text-sm font-light">
            Engineered with high-temperature alloys and smart ember control to ensure authentic fires with absolute safety.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-[#121212] border border-neutral-800">
            <div className="p-3 rounded-xl bg-orange-500/10 text-orange-400 w-fit mb-4">
              <Trees className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-white">Natural Radiant Heating</h4>
            <p className="text-xs text-neutral-400 mt-2 font-light leading-relaxed">
              Provides genuine woodfire aroma, crackle, and high thermal radius extending well over 4 meters in cool winter nights.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#121212] border border-neutral-800">
            <div className="p-3 rounded-xl bg-orange-500/10 text-orange-400 w-fit mb-4">
              <Shield className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-white">Micro-Mesh Spark Containment</h4>
            <p className="text-xs text-neutral-400 mt-2 font-light leading-relaxed">
              Heavy 304 stainless steel spark screen dome traps sparks and flying embers while allowing unobstructed flame view.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#121212] border border-neutral-800">
            <div className="p-3 rounded-xl bg-orange-500/10 text-orange-400 w-fit mb-4">
              <Wrench className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-white">Effortless Ash Drawer Cleanout</h4>
            <p className="text-xs text-neutral-400 mt-2 font-light leading-relaxed">
              Integrated lower slide-out ash pan and bottom rainwater drain holes prevent soot buildup and water stagnation.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <FaqAccordion
        items={generalFaqs}
        title="Wood Fireplace FAQs"
        subtitle="Clarifications regarding seasoned wood selection, ember arrestors, villa garden clearances, and ash cleanout maintenance."
        eyebrow="Technical Q&A"
        whatsappMessage="Hi Flames Fireplace, I'd like to ask a few questions regarding outdoor wood fireplace designs and safety."
        onNavigate={onNavigate}
      />

      {/* Consultation Banner */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-8 pb-12">
        <div className="rounded-3xl bg-[#121212] border border-neutral-800 p-8 sm:p-12 text-center text-white relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Custom Wood Fireplace & Chimenea Construction in Dubai
            </h3>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-8 font-light">
              Discuss custom firebrick sizing, corten steel pit fabrication, or spark arrestor fitments with our Dubai installation team.
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
                Book a Site Assessment
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
