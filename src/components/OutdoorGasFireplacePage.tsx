import { motion } from 'motion/react';
import { Check, Shield, Sparkles, Sliders, ArrowRight, Flame } from 'lucide-react';
import { ActiveSection } from '../types';
import { OUTDOOR_GAS_VARIANTS } from '../data';
import ServiceCard from './ServiceCard';
import WhatsAppIcon from './WhatsAppIcon';
import FaqAccordion from './FaqAccordion';

interface OutdoorGasProps {
  onNavigate: (section: ActiveSection) => void;
}

export default function OutdoorGasFireplacePage({ onNavigate }: OutdoorGasProps) {

  const generalFaqs = [
    {
      question: "Which gas supply is required for outdoor gas fireplaces in Dubai?",
      answer: "All our outdoor gas burners are dual-certified and can be factory-jetted for either LPG (bottled/bulk propane tanks) or centralized municipal Natural Gas (NG) lines across Dubai and the UAE."
    },
    {
      question: "Can outdoor gas fireplaces be left outside year-round in Dubai's heat and dust?",
      answer: "Yes. Our burners and pans are fabricated from marine-grade 304 and 316 stainless steel with drain holes and weather-resistant sealed valve enclosures specifically built to withstand high UAE humidity, intense summer temperatures, and coastal salt air."
    },
    {
      question: "What is the difference between Home Automated, Remote, Push & Turn, and Key Valve?",
      answer: "Home Automated links directly to central smart home systems (Crestron, Lutron, KNX, Control4). Remote Operated uses a wireless handheld RF controller. Push & Turn uses an independent battery-spark rotary knob without electrical wires. Key Valve is 100% mechanical with a removable brass key for tamper-proof security."
    },
    {
      question: "Do you supply custom fire glass, lava rock, and wind glass guards?",
      answer: "Yes, we custom-fabricate tempered wind glass shields, drop-in pans, burner rings, and supply volcanic lava rocks, ceramic logs, and reflective fire glass media in various colors."
    }
  ];

  return (
    <div id="outdoor-gas-fireplace-hub" className="min-h-screen bg-[#0b0b0b] text-neutral-100 selection:bg-orange-500 selection:text-white pb-28">
      {/* Hero Header Section */}
      <section className="relative overflow-hidden pt-28 sm:pt-36 pb-16 lg:pb-24 border-b border-neutral-800/80 bg-[#0e0e0e]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/25 text-orange-400 text-xs font-semibold uppercase tracking-wider mb-6"
          >
            <Flame className="w-3.5 h-3.5 text-orange-500" />
            <span>FLAMES FIREPLACE DUBAI • REAL FLAME GAS COLLECTION</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-sans font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-tight max-w-4xl mx-auto mb-6"
          >
            Engineered Outdoor Gas Fireplaces in Dubai
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-neutral-300 max-w-3xl mx-auto leading-relaxed font-light mb-8"
          >
            Explore our 5 specialized ignition and automation configurations — from seamless smart home BMS integrations to handheld remote controls and heavy-duty brass key valves.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-8 text-xs font-medium text-neutral-300"
          >
            <span className="inline-flex items-center gap-1.5 bg-neutral-900/90 px-3.5 py-1.5 rounded-lg border border-neutral-800">
              <Check className="w-3.5 h-3.5 text-orange-400" /> Marine 316 Stainless Steel
            </span>
            <span className="inline-flex items-center gap-1.5 bg-neutral-900/90 px-3.5 py-1.5 rounded-lg border border-neutral-800">
              <Check className="w-3.5 h-3.5 text-orange-400" /> LPG & Natural Gas Certified
            </span>
            <span className="inline-flex items-center gap-1.5 bg-neutral-900/90 px-3.5 py-1.5 rounded-lg border border-neutral-800">
              <Check className="w-3.5 h-3.5 text-orange-400" /> Custom Built for UAE Weather
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
              href="https://wa.me/971542112891?text=Hi%20Flames%20Fireplace%2C%20I'd%20like%20to%20consult%20with%20an%20engineer%20regarding%20an%20outdoor%20gas%20fireplace."
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

      {/* 5 Product Models Containers Grid (Like Service Page Containers) */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-orange-500 font-semibold">Choose Your Control System</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white">5 Specialized Gas Fireplace Models</h2>
          <p className="mt-4 text-neutral-400 max-w-2xl mx-auto text-sm sm:text-base font-light">
            Select a model below to explore in-depth technical specifications, installation guidelines, CAD drawings, and custom fabrication options.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {OUTDOOR_GAS_VARIANTS.map((item) => (
            <div key={item.id}>
              <ServiceCard 
                service={item} 
                onNavigate={() => onNavigate(item.id as ActiveSection)} 
              />
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <FaqAccordion
        items={generalFaqs}
        title="Frequently Asked Questions"
        subtitle="Key insights into burner selections, gas pipe routing, remote integrations, and UAE outdoor weather resilience."
        eyebrow="Got Questions?"
        whatsappMessage="Hi Flames Fireplace, I'd like to consult with an engineer regarding Outdoor Gas Fireplace installation and gas supplies."
        onNavigate={onNavigate}
      />

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-8 pb-12">
        <div className="rounded-3xl bg-[#121212] border border-neutral-800 p-8 sm:p-12 text-center text-white relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Need a Custom Gas Fireplace Design in Dubai?
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-8 font-light">
              Send us your architectural drawings, landscape plans, or space dimensions for a full technical proposal, burner sizing, and site visit.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/971542112891?text=Hi%20Flames%20Fireplace%2C%20I'd%20like%20to%20consult%20with%20an%20engineer%20regarding%20an%20outdoor%20gas%20fireplace."
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2.5 rounded-full bg-[#182a1d] hover:bg-[#1e3825] border border-emerald-500/40 text-emerald-400 px-7 py-3.5 text-xs font-semibold shadow-lg transition-all cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4 shrink-0" />
                Consult on WhatsApp
              </a>
              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-2 rounded-full bg-orange-600 hover:bg-orange-500 text-white px-7 py-3.5 text-xs font-semibold shadow-lg shadow-orange-600/20 transition-all cursor-pointer"
              >
                Request a Site Visit
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
