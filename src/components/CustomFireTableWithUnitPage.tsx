import { motion } from 'motion/react';
import { Check, ArrowRight, Flame, Shield, Sparkles, Sliders, Layers, Zap } from 'lucide-react';
import { ActiveSection } from '../types';
import WhatsAppIcon from './WhatsAppIcon';
import FaqAccordion from './FaqAccordion';

interface CustomFireTableProps {
  onNavigate: (section: ActiveSection) => void;
}

export default function CustomFireTableWithUnitPage({ onNavigate }: CustomFireTableProps) {

  const benefits = [
    "Custom Dimensions & Seating: Fabricated to exact millimeter measurements for coffee, lounge, or 8–12 seat dining height",
    "Luxury Sintered Tops: Choose from Dekton, Neolith, natural Italian Calacatta marble, Nero Marquina, granite, or GRC stone",
    "Active Thermal Isolation: Table perimeter stays cool to the touch even during peak heat and maximum flame operation",
    "Concealed Gas Cylinder Bay: Built-in magnetic flush hatch discreetly encloses standard 5kg / 11kg composite LPG bottles",
    "Dual Fuel Engineering: Seamlessly engineered for bottled LPG propane or centralized municipal natural gas networks across the UAE",
    "Turnkey 3D CAD & Installation: Detailed 3D preview before fabrication with direct on-site commissioning and Dubai Civil Defense compliance"
  ];

  const howItWorks = [
    "Spatial Planning & 3D CAD: We measure your patio and generate accurate 3D renders with surface finish options.",
    "Material & Burner Selection: Choose from Dekton / Marble tops and smart remote, push-to-turn, or key-valve burners.",
    "Precision Fabrication: Marine-grade aluminum or 316 stainless structural frame fabrication with thermal shields.",
    "On-Site Installation: Full connection, gas safety pressure testing, wind glass shield mounting, and client handover."
  ];

  const specs = [
    { label: "Top Material Options", value: "Sintered Dekton, Calacatta Marble, Nero Marquina, GRC Stone" },
    { label: "Internal Frame", value: "Marine-Grade 316 Stainless Steel & Heavy Aluminum" },
    { label: "Burner System", value: "Linear Trough, Circular Ring, or Star Burner (40,000 - 120,000 BTU)" },
    { label: "Gas Compatibility", value: "LPG (Propane) or Municipal Natural Gas (NG)" },
    { label: "Ignition Options", value: "Home Automation, RF Remote, Push & Turn, Brass Key Valve" },
    { label: "Turnaround Time", value: "10 to 14 business days across Dubai & UAE" }
  ];

  const faqs = [
    {
      question: "Can I use the custom fire table for full dining with plates and drinks?",
      answer: "Yes! We design custom tables with generous perimeter dining ledges (minimum 25-35cm clearance) and internal thermal isolation barriers that keep table edges completely cool while the burner is running."
    },
    {
      question: "Is there an optional matching cover lid to turn the fire pit into a solid tabletop?",
      answer: "Yes. We fabricate flush-fitting tabletop lids from matching Dekton, marble, or 316 stainless steel, transforming your fire table into a seamless flat dining surface during daytime."
    },
    {
      question: "Can the table conceal an LPG gas cylinder inside its base?",
      answer: "Absolutely. For properties without underground gas pipe infrastructure, we engineer concealed magnetic access doors inside the table pedestal to house standard 5kg or 11kg composite LPG bottles."
    },
    {
      question: "What is the lead time for a custom fire table in Dubai?",
      answer: "Standard turnaround from 3D CAD drawing approval to on-site delivery and installation is typically 10 to 14 business days across Dubai and the UAE."
    }
  ];

  return (
    <div id="custom-fire-table-unit" className="bg-[#0b0b0b] text-neutral-100 selection:bg-orange-500 selection:text-white pb-24">
      {/* ──── SECTION 1: HERO SECTION ──── */}
      <section className="relative overflow-hidden pt-28 sm:pt-36 pb-16 lg:pb-24 bg-[#0e0e0e] border-b border-neutral-800/80">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/25 text-orange-400 text-xs font-semibold uppercase tracking-wider mb-6"
              >
                <Flame className="w-3.5 h-3.5 text-orange-500" />
                <span>CUSTOM OUTDOOR FIRE TABLE</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="font-sans font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-tight mb-6"
              >
                Customized Fire Table with Fire Unit
              </motion.h1>

              {/* Tailored Product Paragraph with Core Keywords */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl mb-8"
              >
                Custom luxury outdoor dining, coffee, and lounge tables with integrated certified gas burner troughs, sintered Dekton stone or Italian marble tops, and concealed LPG cylinder compartments engineered for Dubai villas and luxury hospitality.
              </motion.p>

              {/* Quick Spec Badges */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="flex flex-wrap gap-2.5 mb-8"
              >
                <span className="text-xs px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-orange-400" /> Dekton & Sintered Stone
                </span>
                <span className="text-xs px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-orange-400" /> Hidden LPG Compartment
                </span>
                <span className="text-xs px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-orange-400" /> 10-14 Day Dubai Delivery
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
                  id="quote-cta-custom-fire-table"
                  onClick={() => onNavigate('contact')}
                  className="px-7 py-3.5 rounded-full bg-orange-600 hover:bg-orange-500 text-white font-sans text-xs font-semibold shadow-lg shadow-orange-600/20 hover:shadow-orange-500/30 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer group"
                >
                  Request Technical Quotation
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <a
                  id="wa-cta-custom-fire-table"
                  href="https://wa.me/971542112891?text=Hi%20Flames%20Fireplace%2C%20I'm%20inquiring%20about%20a%20Customized%20Fire%20Table%20with%20Integrated%20Fire%20Unit."
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
                  src="https://www.flamesfireplace.com/assets/Fire%20Table.webp"
                  alt="Customized Fire Table with Integrated Burner Unit Dubai Showroom"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs text-neutral-300">
                <span className="bg-black/70 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-white/10">
                  Precision Sintered Dekton Tops
                </span>
                <span className="bg-orange-500/90 text-white px-3.5 py-1.5 rounded-lg font-medium">
                  Handcrafted in Dubai
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ──── SECTION 2: PRODUCT ARCHITECTURE & OVERVIEW ──── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid lg:grid-cols-[1.3fr_0.9fr] gap-12 items-start">
          <div className="bg-[#121212] rounded-3xl p-8 sm:p-10 border border-neutral-800">
            <div className="flex items-center gap-2 text-orange-400 text-xs uppercase tracking-[0.2em] font-semibold mb-3">
              <Sparkles className="w-4 h-4" />
              <span>Custom Engineering</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-5">
              Tailored Outdoor Fire Dining & Lounge Tables
            </h2>
            <p className="text-neutral-300 leading-relaxed text-base sm:text-lg font-light">
              Our custom fire tables are hand-engineered in Dubai to unite culinary dining comfort with living fire luxury. From oversized 10-seater Dekton dining tables to low-slung lounge coffee tables, every piece is customized with marine-grade 316 internal framing, certified gas burners, thermal barrier shields, and custom flush covers.
            </p>
          </div>

          {/* 3D Render Consultation Box */}
          <div className="rounded-3xl border border-orange-500/30 bg-gradient-to-b from-neutral-900 to-black p-8 text-white shadow-xl shadow-orange-500/5 lg:sticky lg:top-28">
            <span className="text-xs uppercase tracking-[0.25em] text-orange-400 font-semibold">Turnkey Fabrication</span>
            <h3 className="mt-3 text-xl font-semibold">Request Custom 3D CAD Renders</h3>
            <p className="mt-3 text-neutral-300 text-sm leading-relaxed font-light">
              Share your patio dimensions and preferred surface material. Our design team will provide realistic 3D CAD renders and a formal quote within 24 hours.
            </p>
            <a
              href="https://wa.me/971542112891?text=Hi%20Flames%20Fireplace%2C%20please%20send%20CAD%20drawings%20and%20a%20custom%20quote%20for%20a%20Customized%20Fire%20Table."
              target="_blank"
              rel="noreferrer noopener"
              className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-orange-600 hover:bg-orange-500 px-6 py-3.5 text-sm font-semibold text-white transition-all cursor-pointer shadow-md shadow-orange-600/30"
            >
              Inquire on WhatsApp
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ──── SECTION 3: KEY ADVANTAGES (Distinct, Non-Duplicate Grid) ──── */}
      <section className="bg-[#0f0f0f] py-20 border-y border-neutral-800/80">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-[0.25em] text-orange-500 font-semibold">Engineered Superiority</span>
            <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-semibold text-white">
              Why Choose Our Custom Fire Tables
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="rounded-2xl border border-neutral-800 bg-[#141414] p-6 hover:border-orange-500/40 transition-colors">
                <div className="flex items-start gap-3.5">
                  <span className="w-8 h-8 rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4" />
                  </span>
                  <p className="text-sm sm:text-base font-medium text-neutral-200 leading-relaxed">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──── SECTION 4: FREQUENTLY ASKED QUESTIONS ──── */}
      {faqs && faqs.length > 0 && (
        <FaqAccordion
          items={faqs}
          title="Frequently Asked Questions"
          subtitle="Clear information regarding tabletop materials, heat barrier protection, LPG bottle storage, and custom sizing."
          eyebrow="Common Queries"
          whatsappMessage="Hi Flames Fireplace, I'd like to ask a few questions regarding Custom Fire Tables."
          onNavigate={onNavigate}
        />
      )}

      {/* ──── SECTION 5: BOTTOM CONSULTATION BANNER ──── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-8 pb-12">
        <div className="rounded-3xl bg-[#121212] border border-neutral-800 p-8 sm:p-12 text-center text-white relative overflow-hidden">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Design Your Custom Fire Table with Our Dubai Team
          </h2>
          <p className="mx-auto max-w-2xl text-neutral-300 leading-relaxed text-sm sm:text-base mb-8 font-light">
            Get personalized material samples, CAD drawings, and turn your outdoor terrace or villa pool deck into an unforgettable luxury gathering space.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/971542112891?text=Hi%20Flames%20Fireplace%2C%20I'd%20like%20to%20book%20a%20consultation%20for%20a%20Customized%20Fire%20Table."
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2.5 rounded-full bg-[#182a1d] hover:bg-[#1e3825] border border-emerald-500/40 text-emerald-400 px-7 py-3.5 text-xs font-semibold shadow-lg transition-all cursor-pointer"
            >
              <WhatsAppIcon className="w-4 h-4 shrink-0" />
              Chat on WhatsApp
            </a>
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 rounded-full bg-orange-600 hover:bg-orange-500 text-white px-7 py-3.5 text-xs font-semibold shadow-lg shadow-orange-600/20 transition-all cursor-pointer"
            >
              Book Site Visit
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
