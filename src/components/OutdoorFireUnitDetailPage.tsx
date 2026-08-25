import { motion } from 'motion/react';
import { Check, ArrowRight, Flame, Shield, Sparkles, Sliders, Layers, Award, Zap } from 'lucide-react';
import { ActiveSection, OutdoorFireUnitVariant } from '../types';
import { ALL_OUTDOOR_VARIANTS } from '../data';
import ServiceCard from './ServiceCard';
import WhatsAppIcon from './WhatsAppIcon';
import FaqAccordion from './FaqAccordion';

interface OutdoorFireUnitDetailPageProps {
  variantId: ActiveSection;
  onNavigate: (section: ActiveSection) => void;
}

export default function OutdoorFireUnitDetailPage({ variantId, onNavigate }: OutdoorFireUnitDetailPageProps) {

  const variant: OutdoorFireUnitVariant = ALL_OUTDOOR_VARIANTS.find(v => v.id === variantId) || ALL_OUTDOOR_VARIANTS[0];
  const siblingVariants = ALL_OUTDOOR_VARIANTS.filter(v => v.categoryId === variant.categoryId && v.id !== variant.id);

  const categoryBackMap: Record<string, { section: ActiveSection; label: string }> = {
    'outdoor-gas-fireplace': { section: 'outdoor-gas-fireplace', label: 'Outdoor Gas Fireplace Collection' },
    'ethanol-fireplace': { section: 'ethanol-fireplace', label: 'Ethanol Fireplace Collection' },
    'wood-fireplace': { section: 'wood-fireplace', label: 'Wood Fireplace Collection' },
    'rocks-media': { section: 'rocks-media', label: 'Rocks & Fire Media Collection' },
    'fire-pot-tables': { section: 'fire-pot-tables', label: 'Fire Pots & Tables Collection' },
    'custom-fire-table': { section: 'custom-fire-tables', label: 'Custom Fire Tables Collection' }
  };

  const backInfo = categoryBackMap[variant.categoryId] || { section: 'services', label: 'All Services' };

  return (
    <div id={`variant-${variant.id}`} className="bg-[#0b0b0b] text-neutral-100 selection:bg-orange-500 selection:text-white pb-24">
      {/* ──── SECTION 1: HERO SECTION ──── */}
      <section className="relative overflow-hidden pt-28 sm:pt-36 pb-16 lg:pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(251,146,60,0.18),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(249,115,22,0.12),_transparent_35%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              {/* Product Badge / Category Indicator */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/25 text-orange-400 text-xs font-semibold uppercase tracking-wider mb-6"
              >
                <Flame className="w-3.5 h-3.5 text-orange-500" />
                <span>{variant.badge || variant.categoryTitle || 'UAE CERTIFIED FIREPLACE'}</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="font-sans font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-tight mb-6"
              >
                {variant.title}
              </motion.h1>

              {/* Tailored Product Paragraph with Core Keywords */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl mb-8"
              >
                {variant.description || variant.tagline}
              </motion.p>

              {/* Quick Specs / Capabilities Tags */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="flex flex-wrap gap-2.5 mb-8"
              >
                <span className="text-xs px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-orange-400" /> UAE Weatherproof
                </span>
                <span className="text-xs px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-orange-400" /> Custom Sizing (60cm–300cm)
                </span>
                <span className="text-xs px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-orange-400" /> 316 Marine Grade
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
                  id={`quote-cta-variant-${variant.id}`}
                  onClick={() => onNavigate('contact')}
                  className="px-7 py-3.5 rounded-full bg-orange-600 hover:bg-orange-500 text-white font-sans text-xs font-semibold shadow-lg shadow-orange-600/20 hover:shadow-orange-500/30 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer group"
                >
                  Request Technical Quotation
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <a
                  id={`wa-cta-variant-${variant.id}`}
                  href={`https://wa.me/971542112891?text=${encodeURIComponent(variant.waMessage || `Hi Flames Fireplace, I'm inquiring about ${variant.title}.`)}`}
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
                  src={variant.image}
                  alt={`${variant.title} Dubai outdoor installation — Flames Fireplace`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs text-neutral-300">
                <span className="bg-black/70 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-white/10">
                  Custom lengths 60cm – 300cm
                </span>
                <span className="bg-orange-500/90 text-white px-3.5 py-1.5 rounded-lg font-medium">
                  Dubai Civil Defense Certified
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ──── SECTION 2: PRODUCT ARCHITECTURE & OVERVIEW ──── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="bg-[#121212] rounded-3xl p-8 sm:p-12 border border-neutral-800">
          <div className="flex items-center gap-2 text-orange-400 text-xs uppercase tracking-[0.2em] font-semibold mb-3">
            <Sparkles className="w-4 h-4" />
            <span>{variant.badge || 'Custom Fire Engineering'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-6">
            {variant.shortTitle || variant.title}: System Profile & Performance
          </h2>
          <p className="text-neutral-300 leading-relaxed text-base sm:text-lg font-light max-w-4xl">
            {variant.detailedDescription || variant.description}
          </p>
        </div>
      </section>

      {/* ──── SECTION 3: KEY ADVANTAGES & FEATURES (Distinct, Non-Duplicate Grid) ──── */}
      {variant.benefits && variant.benefits.length > 0 && (
        <section className="bg-[#0f0f0f] py-20 border-y border-neutral-800/80">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs uppercase tracking-[0.25em] text-orange-500 font-semibold">Engineered Superiority</span>
              <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-semibold text-white">
                Why Choose {variant.shortTitle || variant.title}
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {variant.benefits.map((benefit, idx) => (
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
      )}

      {/* ──── SECTION 4: FREQUENTLY ASKED QUESTIONS (Accordion) ──── */}
      {variant.faqs && variant.faqs.length > 0 && (
        <FaqAccordion
          items={variant.faqs}
          title="Frequently Asked Questions"
          subtitle={`Technical specifications, clearances, gas line requirements, and warranty coverage for ${variant.title}.`}
          eyebrow="Common Queries"
          whatsappMessage={`Hi Flames Fireplace, I'd like to ask a few questions regarding ${variant.title}.`}
          onNavigate={onNavigate}
        />
      )}

      {/* ──── SECTION 5: SIBLING MODELS IN THIS COLLECTION ──── */}
      {siblingVariants.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 border-t border-neutral-800/80">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-orange-500 font-semibold">Explore Collection</span>
              <h3 className="text-2xl sm:text-3xl font-semibold text-white mt-1">Other Options in this Collection</h3>
            </div>
            <button
              onClick={() => onNavigate(backInfo.section)}
              className="inline-flex items-center gap-2 text-sm font-semibold text-orange-400 hover:text-orange-300 cursor-pointer"
            >
              View All in {backInfo.label} <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {siblingVariants.map((item) => (
              <div key={item.id}>
                <ServiceCard
                  service={item}
                  onNavigate={() => onNavigate(item.id)}
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ──── SECTION 6: BOTTOM CONSULTATION & SITE VISIT BANNER ──── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-8 pb-12">
        <div className="rounded-3xl bg-[#121212] border border-neutral-800 p-8 sm:p-12 text-center text-white relative overflow-hidden">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Ready to integrate {variant.shortTitle || variant.title} into your project?
          </h2>
          <p className="mx-auto max-w-2xl text-neutral-300 leading-relaxed text-sm sm:text-base mb-8 font-light">
            Speak directly with our Dubai engineering team for custom dimensions, technical layout cutouts, gas piping advice, and turnkey installation across the UAE.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`https://wa.me/971542112891?text=${encodeURIComponent(`Hi Flames Fireplace, I'd like to book a consultation for ${variant.title}.`)}`}
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
