import { motion } from 'motion/react';
import { Check, ArrowRight, Flame } from 'lucide-react';
import { ActiveSection } from '../types';
import { FIRE_POT_VARIANTS } from '../data';
import ServiceCard from './ServiceCard';
import WhatsAppIcon from './WhatsAppIcon';
import FaqAccordion from './FaqAccordion';

interface FirePotTablesHubProps {
  onNavigate: (section: ActiveSection) => void;
}

export default function FirePotTablesHubPage({ onNavigate }: FirePotTablesHubProps) {

  const generalFaqs = [
    {
      question: "What is the difference between Concrete, Metal Powder Coated, and GRC Fire Bowls?",
      answer: "Concrete Fire Pots are cast from heavy reinforced architectural concrete offering monolithic stability in high-wind areas. Metal Powder Coated Pots are fabricated from marine-grade aluminum and stainless steel with baked electrostatic finishes in any custom RAL color. GRC (GFRC) Fire Bowls use glass fiber reinforcement to achieve stone texture at 50% lighter weight—ideal for rooftop penthouses."
    },
    {
      question: "Can these fire pots and bowls be connected to either LPG bottles or Natural Gas lines?",
      answer: "Yes. All our units are dual-certified. They can be plumbed directly into subterranean Natural Gas/LPG lines or configured with internal hidden access compartments that conceal standard 5kg or 11kg LPG composite cylinders."
    },
    {
      question: "Are fire pots safe for wooden pool decks and grass lawns in Dubai?",
      answer: "Yes, because our burner drop-in pans feature internal thermal insulation barriers and elevated air gaps that prevent downward heat transfer to delicate timber decking or outdoor tiles."
    }
  ];

  return (
    <div id="fire-pot-tables-hub" className="min-h-screen bg-[#0b0b0b] text-neutral-100 selection:bg-orange-500 selection:text-white pb-28">
      {/* Hero Header Section */}
      <section className="relative overflow-hidden pt-28 sm:pt-36 pb-16 lg:pb-24 border-b border-neutral-800/80 bg-[#0e0e0e]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/25 text-orange-400 text-xs font-semibold uppercase tracking-wider mb-6"
          >
            <Flame className="w-3.5 h-3.5 text-orange-500" />
            <span>ARCHITECTURAL FIRE VESSELS • UAE RESORT & PATIO</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-sans font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-tight max-w-4xl mx-auto mb-6"
          >
            Architectural Fire Pots & Bowls in Dubai
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-neutral-300 max-w-3xl mx-auto leading-relaxed font-light mb-8"
          >
            Discover precast concrete fire pots, powder coated marine aluminum vessels, and lightweight GRC fire bowls engineered for UAE luxury villas, poolside decks, and resort gardens.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-8 text-xs font-medium text-neutral-300"
          >
            <span className="inline-flex items-center gap-1.5 bg-neutral-900/90 px-3.5 py-1.5 rounded-lg border border-neutral-800">
              <Check className="w-3.5 h-3.5 text-orange-400" /> Precast Concrete & Monolithic Stone
            </span>
            <span className="inline-flex items-center gap-1.5 bg-neutral-900/90 px-3.5 py-1.5 rounded-lg border border-neutral-800">
              <Check className="w-3.5 h-3.5 text-orange-400" /> Marine-Grade 316 Stainless Burners
            </span>
            <span className="inline-flex items-center gap-1.5 bg-neutral-900/90 px-3.5 py-1.5 rounded-lg border border-neutral-800">
              <Check className="w-3.5 h-3.5 text-orange-400" /> Lightweight GFRC & Custom RAL Finishes
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
              href="https://wa.me/971542112891?text=Hi%20Flames%20Fireplace%2C%20I'd%20like%20to%20consult%20with%20an%20engineer%20regarding%20Fire%20Pots%20and%20Fire%20Bowls."
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

      {/* 3 Models Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-orange-500 font-semibold">Product Catalog</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white">Select Your Vessel Architecture</h2>
          <p className="mt-4 text-neutral-400 max-w-2xl mx-auto text-sm sm:text-base font-light">
            Click on any model below to view inside specifications, material samples, diameter options, and turnkey installation details.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FIRE_POT_VARIANTS.map((item) => (
            <div key={item.id}>
              <ServiceCard 
                service={item} 
                onNavigate={() => onNavigate(item.id as ActiveSection)} 
              />
            </div>
          ))}
        </div>
      </section>

      {/* Materials Comparison */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 border-t border-neutral-800/80">
        <div className="bg-[#121212] rounded-3xl border border-neutral-800/90 p-8 sm:p-10">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-[0.25em] text-orange-500 font-semibold">Material Engineering</span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mt-2">Material Comparison Matrix</h3>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800">
              <span className="px-2.5 py-0.5 rounded-full bg-orange-500/10 text-orange-400 text-[10px] font-semibold uppercase">Concrete</span>
              <h4 className="text-base font-bold text-white mt-2">Cast Concrete</h4>
              <p className="text-xs text-neutral-300 mt-2 font-light">Monolithic, wind-stable weight. Perfect for open lawns and seaside villas.</p>
              <div className="mt-4 pt-3 border-t border-neutral-800 text-[11px] text-neutral-400">Weight: 45–120kg</div>
            </div>

            <div className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800">
              <span className="px-2.5 py-0.5 rounded-full bg-orange-500/10 text-orange-400 text-[10px] font-semibold uppercase">Metal</span>
              <h4 className="text-base font-bold text-white mt-2">Powder Coated Metal</h4>
              <p className="text-xs text-neutral-300 mt-2 font-light">Marine aluminum with electrostatic RAL coating. Lightweight & rust-proof.</p>
              <div className="mt-4 pt-3 border-t border-neutral-800 text-[11px] text-neutral-400">Weight: 18–35kg</div>
            </div>

            <div className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800">
              <span className="px-2.5 py-0.5 rounded-full bg-orange-500/10 text-orange-400 text-[10px] font-semibold uppercase">GFRC</span>
              <h4 className="text-base font-bold text-white mt-2">GRC Fire Bowls</h4>
              <p className="text-xs text-neutral-300 mt-2 font-light">Glass fiber matrix stone. High tensile strength, ideal for luxury penthouses.</p>
              <div className="mt-4 pt-3 border-t border-neutral-800 text-[11px] text-neutral-400">Weight: 25–55kg</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <FaqAccordion
        items={generalFaqs}
        title="Fire Pot & Bowl FAQs"
        subtitle="Answers on architectural concrete weight, GRC advantages, hidden gas tank compartments, and burner certifications."
        eyebrow="Expert Guidance"
        whatsappMessage="Hi Flames Fireplace, I'd like to ask about Custom Fire Pots and Fire Bowl designs."
        onNavigate={onNavigate}
      />

      {/* Consultation Banner */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-8 pb-12">
        <div className="rounded-3xl bg-[#121212] border border-neutral-800 p-8 sm:p-12 text-center text-white relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Custom Fire Pot & Bowl Fabrication in Dubai
            </h3>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-8 font-light">
              Speak with our engineering team to design custom diameter vessels, choose powder coating finishes, or request customized drop-in fire pan solutions.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://wa.me/971542112891?text=Hi%20Flames%20Fireplace%2C%20I'm%20inquiring%20about%20Custom%20Fire%20Pots%20and%20Fire%20Bowls."
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
                Request 3D Concept Design
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
