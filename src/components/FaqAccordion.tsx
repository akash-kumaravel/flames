import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, HelpCircle, ArrowRight, Phone } from 'lucide-react';
import { ActiveSection } from '../types';
import WhatsAppIcon from './WhatsAppIcon';

export interface FaqItem {
  question: string;
  answer: string;
  tag?: string;
}

export interface FaqAccordionProps {
  items: FaqItem[];
  title?: string;
  subtitle?: string;
  eyebrow?: string;
  showSupportCard?: boolean;
  whatsappMessage?: string;
  onNavigate?: (section: ActiveSection) => void;
  className?: string;
  defaultOpenIndex?: number | null;
}

export default function FaqAccordion({
  items,
  title = 'Frequently Asked Questions',
  subtitle = 'Find clear answers regarding heat clearances, installation timelines, gas lines, and UAE safety standards.',
  eyebrow = 'Got Questions?',
  showSupportCard = true,
  whatsappMessage = "Hi Flames Fireplace, I have a few questions regarding fireplace specifications and installation in Dubai.",
  onNavigate,
  className = '',
  defaultOpenIndex = 0,
}: FaqAccordionProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(defaultOpenIndex);

  const toggleFaq = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  if (!items || items.length === 0) return null;

  return (
    <section className={`w-full max-w-4xl mx-auto px-6 md:px-12 py-16 sm:py-20 ${className}`}>
      {/* Header */}
      <div className="text-center mb-10 sm:mb-14">
        {eyebrow && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/25 text-orange-400 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <HelpCircle className="w-3.5 h-3.5 text-orange-500" />
            <span>{eyebrow}</span>
          </motion.div>
        )}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight"
        >
          {title}
        </motion.h2>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="mt-3 text-neutral-400 max-w-2xl mx-auto text-xs sm:text-sm md:text-base font-light leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
      </div>

      {/* Accordion Stack */}
      <div className="space-y-3.5">
        {items.map((faq, idx) => {
          const isOpen = expandedIndex === idx;
          const formattedIndex = String(idx + 1).padStart(2, '0');

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                isOpen
                  ? 'bg-[#151515] border-orange-500/40 shadow-lg shadow-orange-500/5 ring-1 ring-orange-500/20'
                  : 'bg-[#111111] border-neutral-800/80 hover:border-neutral-700 hover:bg-[#141414]'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleFaq(idx)}
                aria-expanded={isOpen}
                className="w-full px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left gap-4 cursor-pointer group"
              >
                <div className="flex items-center gap-3.5 sm:gap-4 flex-1 min-w-0">
                  {/* Number Badge */}
                  <span
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center text-xs font-mono font-bold shrink-0 transition-all duration-300 ${
                      isOpen
                        ? 'bg-orange-500 text-white shadow-sm shadow-orange-500/30 scale-105'
                        : 'bg-neutral-900 border border-neutral-800 text-neutral-400 group-hover:text-neutral-200 group-hover:border-neutral-700'
                    }`}
                  >
                    {formattedIndex}
                  </span>
                  
                  {/* Question Title */}
                  <span
                    className={`text-sm sm:text-base font-semibold leading-snug transition-colors duration-200 ${
                      isOpen ? 'text-orange-400' : 'text-neutral-100 group-hover:text-white'
                    }`}
                  >
                    {faq.question}
                  </span>
                </div>

                {/* Toggle Plus/Minus Button */}
                <div
                  className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                    isOpen
                      ? 'bg-orange-500/20 text-orange-400 border border-orange-500/40 rotate-45'
                      : 'bg-neutral-900 border border-neutral-800 text-neutral-400 group-hover:text-white group-hover:border-neutral-700'
                  }`}
                >
                  <Plus className="w-4 h-4 transition-transform duration-300" />
                </div>
              </button>

              {/* Animated Expandable Answer */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: 'auto',
                      opacity: 1,
                      transition: {
                        height: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
                        opacity: { duration: 0.25, delay: 0.05 },
                      },
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                      transition: {
                        height: { duration: 0.2, ease: [0.16, 1, 0.3, 1] },
                        opacity: { duration: 0.15 },
                      },
                    }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-1">
                      <div className="border-t border-neutral-800/80 pt-4 pl-10 sm:pl-12">
                        <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* Direct Support Quick-Help Bar */}
      {showSupportCard && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 p-5 sm:p-7 rounded-2xl bg-[#121212] border border-neutral-800/90 flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left"
        >
          <div className="max-w-md">
            <div className="flex items-center justify-center sm:justify-start gap-2 mb-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <h4 className="text-sm font-semibold text-white">Have a specific question or custom layout?</h4>
            </div>
            <p className="text-xs text-neutral-400 font-light leading-relaxed">
              Our Dubai fireplace engineers provide free CAD reviews, heat clearance verification, and turnkey project estimates.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href={`https://wa.me/971542112891?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#182a1d] hover:bg-[#1e3825] border border-emerald-500/40 text-emerald-400 text-xs font-semibold transition-all cursor-pointer"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" />
              <span>Ask on WhatsApp</span>
            </a>
            {onNavigate && (
              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-semibold transition-all cursor-pointer"
              >
                <span>Contact Desk</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </motion.div>
      )}
    </section>
  );
}
