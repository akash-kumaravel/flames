import { motion } from 'motion/react';
import { Check, ArrowRight, Flame, Shield, Sparkles, Sliders, Layers, Zap } from 'lucide-react';
import { ActiveSection } from '../types';
import WhatsAppIcon from './WhatsAppIcon';
import FaqAccordion from './FaqAccordion';

interface ProductPageProps {
  productId: string;
  title: string;
  tagline: string;
  description: string;
  detailedDescription: string;
  imageUrl: string;
  features?: string[];
  benefits: string[];
  howItWorks: string[];
  faqs: { question: string; answer: string }[];
  bgGradient: string;
  onNavigate: (section: ActiveSection) => void;
}

export default function ProductPage({
  productId,
  title,
  tagline,
  description,
  detailedDescription,
  imageUrl,
  features,
  benefits,
  howItWorks,
  faqs,
  bgGradient,
  onNavigate
}: ProductPageProps) {
  return (
    <div id={`product-${productId}`} className="bg-[#0b0b0b] text-neutral-100 selection:bg-orange-500 selection:text-white pb-24">
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
                <span>FLAMES FIREPLACE DUBAI • PREMIUM CRAFT</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="font-sans font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-tight mb-6"
              >
                {title}
              </motion.h1>

              {/* Tailored Product Paragraph with Core Keywords */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl mb-8"
              >
                {description || tagline}
              </motion.p>

              {/* Quick Feature Badges */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="flex flex-wrap gap-2.5 mb-8"
              >
                <span className="text-xs px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-orange-400" /> Certified UAE Safety
                </span>
                <span className="text-xs px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-orange-400" /> Custom Dimensional Fabrication
                </span>
                <span className="text-xs px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-orange-400" /> Turnkey Dubai Installation
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
                  id={`quote-cta-service-${productId}`}
                  onClick={() => onNavigate('contact')}
                  className="px-7 py-3.5 rounded-full bg-orange-600 hover:bg-orange-500 text-white font-sans text-xs font-semibold shadow-lg shadow-orange-600/20 hover:shadow-orange-500/30 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer group"
                >
                  Request Technical Quotation
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <a
                  id={`wa-cta-service-${productId}`}
                  href={`https://wa.me/971542112891?text=${encodeURIComponent(`Hi Flames Fireplace, I'm inquiring about ${title}.`)}`}
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
                  src={imageUrl}
                  alt={`Premium ${title} installation showroom view — Flames Fireplace Dubai`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs text-neutral-300">
                <span className="bg-black/70 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-white/10">
                  Custom Engineering & Finishing
                </span>
                <span className="bg-orange-500/90 text-white px-3.5 py-1.5 rounded-lg font-medium">
                  Dubai Verified Standards
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
              <span>Engineered Architecture</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-5">
              {title}: System Profile & Performance
            </h2>
            <p className="text-neutral-300 leading-relaxed text-base sm:text-lg font-light">
              {detailedDescription || description}
            </p>
          </div>

          {/* Right Card: Consultation & Sizing */}
          <div className="space-y-6 lg:sticky lg:top-28">
            <div className="rounded-3xl border border-orange-500/30 bg-gradient-to-b from-neutral-900 to-black p-8 text-white shadow-xl shadow-orange-500/5">
              <span className="text-xs uppercase tracking-[0.25em] text-orange-400 font-semibold">Custom UAE Solutions</span>
              <h3 className="mt-3 text-xl font-semibold">Need Sizing & Material Guidance?</h3>
              <p className="mt-3 text-neutral-300 text-sm leading-relaxed font-light">
                We assist architects, landscapers, and homeowners across Dubai in selecting and engineering fireplace models that match your spatial aesthetics, safety parameters, and budget.
              </p>
              <a
                href={`https://wa.me/971542112891?text=${encodeURIComponent(`Hi Flames Fireplace, I'd like a custom consultation for ${title}.`)}`}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-orange-600 hover:bg-orange-500 px-6 py-3.5 text-sm font-semibold text-white transition-all cursor-pointer shadow-md shadow-orange-600/30"
              >
                Inquire on WhatsApp
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="bg-[#121212] rounded-3xl p-8 border border-neutral-800">
              <h4 className="text-base font-semibold text-white mb-4 uppercase tracking-[0.16em] text-orange-400">
                Explore Direct Options
              </h4>
              <ul className="space-y-3 text-sm text-neutral-300">
                <li>
                  <a
                    href="https://www.flamesfireplace.com/services"
                    onClick={(e) => { e.preventDefault(); onNavigate('services'); }}
                    className="hover:text-orange-500 transition-colors flex items-center gap-2"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-orange-500" />
                    All Fireplace Collections
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.flamesfireplace.com/best-fireplace-dubai"
                    onClick={(e) => { e.preventDefault(); onNavigate('best-fireplace-dubai'); }}
                    className="hover:text-orange-500 transition-colors flex items-center gap-2"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-orange-500" />
                    Best Fireplaces in Dubai
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.flamesfireplace.com/contact"
                    onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}
                    className="hover:text-orange-500 transition-colors flex items-center gap-2"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-orange-500" />
                    Book On-Site Measurement
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ──── SECTION 3: KEY ADVANTAGES ──── */}
      {benefits && benefits.length > 0 && (
        <section className="bg-[#0f0f0f] py-20 border-y border-neutral-800/80">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs uppercase tracking-[0.25em] text-orange-500 font-semibold">Engineered Superiority</span>
              <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-semibold text-white">
                Key Advantages & Capabilities
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
      )}

      {/* ──── SECTION 4: FREQUENTLY ASKED QUESTIONS ──── */}
      {faqs && faqs.length > 0 && (
        <FaqAccordion
          items={faqs}
          title="Frequently Asked Questions"
          subtitle={`Everything you need to know about ${title} specifications, clearance distances, and installation in Dubai.`}
          eyebrow="Got Questions?"
          whatsappMessage={`Hi Flames Fireplace, I have a question regarding ${title} technical details and pricing.`}
          onNavigate={onNavigate}
        />
      )}

      {/* ──── SECTION 5: BOTTOM CALL TO ACTION BANNER ──── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-8 pb-12">
        <div className="rounded-3xl bg-[#121212] border border-neutral-800 p-8 sm:p-12 text-center text-white relative overflow-hidden">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Make your next fireplace the best one yet.
          </h2>
          <p className="mx-auto max-w-2xl text-neutral-300 leading-relaxed text-sm sm:text-base mb-8 font-light">
            Talk to our Dubai team for a tailored recommendation, fast installation, and a solution that matches your design, safety, and lifestyle goals.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`https://wa.me/971542112891?text=${encodeURIComponent(`Hi Flames Fireplace, I'd like to schedule a consultation for ${title}.`)}`}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2.5 rounded-full bg-[#182a1d] hover:bg-[#1e3825] border border-emerald-500/40 text-emerald-400 px-7 py-3.5 text-xs font-semibold shadow-lg transition-all cursor-pointer"
            >
              <WhatsAppIcon className="w-4 h-4 shrink-0" />
              Schedule on WhatsApp
            </a>
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 rounded-full bg-orange-600 hover:bg-orange-500 text-white px-7 py-3.5 text-xs font-semibold shadow-lg shadow-orange-600/20 transition-all cursor-pointer"
            >
              Contact Our Team
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
