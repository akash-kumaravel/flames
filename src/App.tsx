import { useState } from 'react';
import { 
  Flame, Info, ShieldCheck, Eye, Check, Search, ArrowRight, MessageCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Shared types and rich database
import { ActiveSection, FAQItem } from './types';
import { 
  BRAND, PRODUCTS, TRUST_BAR, GENERAL_STATS, 
  COMMON_FAQS, META_SUMMARY, WHY_CHOOSE_EXTRA 
} from './data';

// Modular Web Components
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ProductPage from './components/ProductPage';
import ProductsOverview from './components/ProductsOverview';
import BlogPage from './components/BlogPage';
import ContactPage from './components/ContactPage';

export default function App() {
  const [activeSection, setActiveSection] = useState<ActiveSection>('home');
  const [selectedProductId, setSelectedProductId] = useState<string>('vapor-fireplace');
  const [searchQuery, setSearchQuery] = useState('');
  const [faqCategory, setFaqCategory] = useState<'all' | 'general' | 'safety' | 'fuel'>('all');
  const [seoInspectorOpen, setSeoInspectorOpen] = useState(false);

  // Auto scroll to top on page alteration
  const handleNavigation = (section: ActiveSection) => {
    setActiveSection(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProduct = (id: string) => {
    setSelectedProductId(id);
  };

  const activeProduct = PRODUCTS.find((p) => p.id === selectedProductId) || PRODUCTS[0];

  // Map active section to its relevant SEO meta summary inside data.ts
  const getActiveMetaKey = (): 'home' | 'about' | 'vapor' | 'indoor' | 'outdoor' | 'faq' | 'contact' => {
    if (activeSection === 'home') return 'home';
    if (activeSection === 'about') return 'about';
    if (activeSection === 'product-watercolor') return 'vapor';
    if (activeSection === 'product-indoor') return 'indoor';
    if (activeSection === 'product-outdoor') return 'outdoor';
    if (activeSection === 'faq') return 'faq';
    return 'contact';
  };

  const currentMeta = META_SUMMARY[getActiveMetaKey()] || META_SUMMARY.home;

  const filteredFaqs = COMMON_FAQS.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (faqCategory === 'all') return matchesSearch;
    if (faqCategory === 'general') return matchesSearch && !faq.question.toLowerCase().includes('saf') && !faq.question.toLowerCase().includes('cost');
    if (faqCategory === 'safety') return matchesSearch && (faq.question.toLowerCase().includes('saf') || faq.question.toLowerCase().includes('child'));
    if (faqCategory === 'fuel') return matchesSearch && (faq.question.toLowerCase().includes('fuel') || faq.question.toLowerCase().includes('cost'));
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-neutral-800 selection:bg-orange-500/10 selection:text-orange-600 flex flex-col justify-between overflow-x-hidden antialiased">
      
      {/* 1. Global Navigation header bar */}
      <Header activeSection={activeSection} onNavigate={handleNavigation} />

      {/* 2. Main content switchboard wrapper */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            
            {/* ──── ROUTE: HOME ──── */}
            {activeSection === 'home' && (
              <div id="section-home">
                {/* Visual Intro */}
                <Hero onNavigate={handleNavigation} onSelectProduct={handleSelectProduct} />



                {/* Interactive FAQ snippet (AEO / GEO Optimized) */}
                <div className="py-20 px-6 md:px-12">
                  <div className="max-w-3xl mx-auto space-y-10">
                    <div className="text-center">
                      <span className="text-xs font-bold uppercase tracking-widest text-orange-500 block mb-2">AEO Snippet</span>
                      <h3 className="font-sans text-2xl md:text-3xl font-semibold text-neutral-900 tracking-tight">Featured Q&amp;A</h3>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="bg-white p-6 rounded-2xl border border-neutral-200/40 shadow-xs">
                        <strong className="text-sm font-bold text-neutral-900 font-sans block mb-2">Q: What is a 3D Water Vapor Fireplace?</strong>
                        <p className="text-sm text-neutral-500 leading-relaxed font-sans">
                          A 3D Water Vapor Fireplace uses ultrasonic technology to convert water into ultra-fine mist, creating a realistic 3D flame effect with no real fire, no smoke, and no harmful emissions. It is perfectly safe for children, pets, and enclosed bedrooms.
                        </p>
                      </div>
                      <div className="bg-white p-6 rounded-2xl border border-neutral-200/40 shadow-xs">
                        <strong className="text-sm font-bold text-neutral-900 font-sans block mb-2">Q: Are Bio Ethanol Fireplaces safe for indoor spaces?</strong>
                        <p className="text-sm text-neutral-500 leading-relaxed font-sans">
                          Yes. Bio Ethanol fireplaces burn plant-derived alcohol fuel cleanly, producing only water vapour and negligible concentrations of CO2 — comparable to lighting a few ambient candles. They are ventless, requiring no chimneys.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA Final Banner */}
                <div className="my-16 px-6 md:px-12">
                  <div className="max-w-7xl mx-auto bg-gradient-to-br from-neutral-900 to-neutral-950 text-white rounded-3xl p-10 md:p-16 text-center shadow-xl relative overflow-hidden">
                    <div className="absolute right-0 bottom-0 top-0 w-1/3 bg-radial from-orange-500/20 to-transparent blur-3xl pointer-events-none" />
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-orange-400">Ready to Transform Your Casing?</span>
                    <h2 className="font-sans font-light text-2xl md:text-4xl leading-tight max-w-2xl mx-auto mt-4 mb-6">
                      Redefine your living space with our premium fireplace solutions today.
                    </h2>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                      <button
                        onClick={() => handleNavigation('products')}
                        className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-sans text-xs font-semibold cursor-pointer transition"
                      >
                        Explore Casing Catalog
                      </button>
                      <button
                        onClick={() => handleNavigation('contact')}
                        className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-white font-sans text-xs font-semibold border border-white/20 cursor-pointer transition"
                      >
                        Talk to an Advisor
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ──── ROUTE: ABOUT US ──── */}
            {activeSection === 'about' && (
              <div id="section-about" className="pt-28 pb-20 px-6 md:px-12">
                <div className="max-w-7xl mx-auto">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
                    <div className="lg:col-span-6 space-y-6">
                      <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-semibold uppercase tracking-widest font-sans inline-block">
                        Who We Are
                      </span>
                      <h1 className="font-sans font-semibold text-3xl md:text-5xl text-neutral-900 tracking-tight leading-none">
                        Our Story
                      </h1>
                      <div className="space-y-4 font-sans text-neutral-500 leading-relaxed text-base">
                        <p>{WHY_CHOOSE_EXTRA.paragraphs[0]}</p>
                        <p>{WHY_CHOOSE_EXTRA.paragraphs[1]}</p>
                        <p>{WHY_CHOOSE_EXTRA.paragraphs[2]}</p>
                      </div>
                    </div>

                    <div className="lg:col-span-6 relative rounded-3xl overflow-hidden shadow-2xl bg-neutral-900 max-h-[440px]">
                      <img
                        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200"
                        alt="Minimal Architect Surround Interior"
                        referrerPolicy="no-referrer"
                        className="w-full h-[400px] object-cover mix-blend-overlay opacity-90"
                      />
                    </div>
                  </div>

                  {/* Core Corporate Values */}
                  <div className="bg-white rounded-3xl p-8 md:p-14 border border-neutral-200/50 mb-20">
                    <div className="text-center mb-12">
                      <span className="text-xs font-bold uppercase tracking-widest text-orange-500 block mb-2">Our Mission</span>
                      <h2 className="font-sans text-2xl md:text-3xl font-semibold text-neutral-900 tracking-tight leading-snug max-w-2xl mx-auto">
                        To make extraordinary fire experiences accessible to everyone—indoors and outdoors—through innovative products, honest pricing, and stellar personal aftercare.
                      </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-neutral-100">
                      <div className="space-y-3">
                        <div className="w-9 h-9 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center font-bold text-sm">1</div>
                        <h4 className="font-sans font-semibold text-neutral-900 text-sm">Quality First</h4>
                        <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                          We only import and manufacture fireplace structures that fulfill our strict specifications for material safety and physical longevity.
                        </p>
                      </div>
                      <div className="space-y-3">
                        <div className="w-9 h-9 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center font-bold text-sm">2</div>
                        <h4 className="font-sans font-semibold text-neutral-900 text-sm">Client Transparency</h4>
                        <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                          Honest dimensional constraints guidance, fair pricing structures, and zero hidden local delivery surcharges.
                        </p>
                      </div>
                      <div className="space-y-3">
                        <div className="w-9 h-9 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center font-bold text-sm">3</div>
                        <h4 className="font-sans font-semibold text-neutral-900 text-sm">Aesthetic Innovation</h4>
                        <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                          Consistently exploring water atomizers and biofuel safety sensors to keep bringing our clients the highest tier flame models on the market.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Commitment banner */}
                  <div className="bg-[#FAF9F6] p-8 md:p-12 rounded-3xl border border-neutral-200 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="max-w-2xl">
                      <h3 className="font-sans text-xl font-semibold text-neutral-900">Our Commitment to You</h3>
                      <p className="text-xs text-neutral-500 mt-2 leading-relaxed">
                        We are not just a fireplace supplier—we are your long-term partner in shaping spaces. From your first enquiry to years after your purchase, our team is directly available for casing diagrams, remodeling consultations, or clean-out refills.
                      </p>
                    </div>
                    <button
                      onClick={() => handleNavigation('contact')}
                      className="px-6 py-3.5 rounded-full bg-neutral-900 hover:bg-orange-500 text-white font-sans text-xs font-semibold cursor-pointer transition shrink-0"
                    >
                      Speak with our Founders
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* ──── ROUTE: PRODUCTS OVERVIEW ──── */}
            {activeSection === 'products' && (
              <ProductsOverview
                products={PRODUCTS}
                onSelectProduct={(productId, sectionId) => {
                  setSelectedProductId(productId);
                  handleNavigation(sectionId as ActiveSection);
                }}
                onNavigateContact={() => handleNavigation('contact')}
              />
            )}

            {/* ──── ROUTE: PRODUCT 3D WATER VAPOR ──── */}
            {activeSection === 'product-watercolor' && (
              <ProductPage
                product={PRODUCTS[0]}
                onNavigateContact={() => handleNavigation('contact')}
              />
            )}

            {/* ──── ROUTE: PRODUCT INDOOR ETHANOL ──── */}
            {activeSection === 'product-indoor' && (
              <ProductPage
                product={PRODUCTS[1]}
                onNavigateContact={() => handleNavigation('contact')}
              />
            )}

            {/* ──── ROUTE: PRODUCT OUTDOOR ETHANOL ──── */}
            {activeSection === 'product-outdoor' && (
              <ProductPage
                product={PRODUCTS[2]}
                onNavigateContact={() => handleNavigation('contact')}
              />
            )}

            {/* ──── ROUTE: GENERAL FAQ PAGE ──── */}
            {activeSection === 'faq' && (
              <div id="section-faq" className="pt-28 pb-20 px-6 md:px-12 bg-white">
                <div className="max-w-4xl mx-auto">
                  <div className="text-center mb-12">
                    <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-semibold uppercase tracking-widest font-sans inline-block">
                      Common Questions
                    </span>
                    <h1 className="font-sans font-semibold text-3xl md:text-5xl text-neutral-900 tracking-tight mt-4 mb-3">
                      Fireplace Buyer Guide Desk
                    </h1>
                    <p className="font-sans text-sm text-neutral-500 leading-relaxed max-w-2xl mx-auto">
                      Review direct answers to practical queries regarding safety rules, bio-ethanol liquid pure fuels, power draws, and custom architectural frame sizing.
                    </p>
                  </div>

                  {/* Search and Category Toggle controls */}
                  <div className="bg-[#FAF9F6] p-4 rounded-3xl border border-neutral-200/60 mb-12 flex flex-col md:flex-row items-center justify-between gap-4">
                    
                    {/* Live search input */}
                    <div className="relative w-full md:w-80">
                      <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3.5" />
                      <input
                        id="faq-search-input"
                        type="text"
                        placeholder="Search questions or terms..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-white pl-10 pr-4 py-3 rounded-2xl border border-neutral-200 text-xs font-sans focus:outline-none focus:border-orange-500"
                      />
                    </div>

                    {/* Filter categories tabs */}
                    <div className="flex gap-1.5 flex-wrap">
                      {(['all', 'general', 'safety', 'fuel'] as const).map((cat) => (
                        <button
                          key={cat}
                          id={`faq-cat-${cat}`}
                          onClick={() => setFaqCategory(cat)}
                          className={`px-4 py-2 rounded-xl text-[10px] font-semibold uppercase tracking-wider font-sans cursor-pointer transition-all ${
                            faqCategory === cat
                              ? 'bg-neutral-900 text-white shadow-sm'
                              : 'bg-white hover:bg-neutral-100 text-neutral-500 border border-neutral-200'
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Accordion FAQ Block */}
                  {filteredFaqs.length > 0 ? (
                    <div className="space-y-4">
                      {filteredFaqs.map((faq, idx) => (
                        <FAQAccordionItem
                          key={idx}
                          idx={idx}
                          faq={faq}
                          defaultOpen={idx === 0}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12 text-neutral-400 text-sm font-sans italic p-8 bg-neutral-50 rounded-xl">
                      No matching questions found around &ldquo;{searchQuery}&rdquo;. Try another generic phrase.
                    </div>
                  )}

                  {/* Schema disclosure section */}
                  <div className="mt-12 p-5 rounded-2xl bg-orange-50/40 border border-orange-100 text-[11px] text-neutral-500 font-sans leading-relaxed flex gap-3">
                    <Info className="w-5 h-5 text-orange-500 shrink-0" />
                    <p>
                      <strong>AEO Optimization Disclosure:</strong> This directory compiles fully declared diagnostic values corresponding to Schema.org standards (FAQPage format), ensuring correct data translation for generative search interfaces indexing fireplace solutions across the Middle East.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* ──── ROUTE: CONTACT Enquiries ──── */}
            {activeSection === 'contact' && <ContactPage />}

            {/* ──── ROUTE: BLOG / ARTICLES ──── */}
            {activeSection === 'blog' && <BlogPage onNavigateContact={() => handleNavigation('contact')} />}

          </motion.div>
        </AnimatePresence>
      </main>

      {/* 3. Global structural brand footer */}
      <Footer onNavigate={handleNavigation} />

      {/* 4. Interactive Floating SEO/AEO/GEO Meta Inspector (Page 11 alignment) */}
      <div id="inspector-widget" className="fixed bottom-6 right-6 z-40 font-sans">
        <button
          id="seo-inspector-toggle-btn"
          onClick={() => setSeoInspectorOpen(!seoInspectorOpen)}
          className="flex items-center gap-2 px-4 py-3 rounded-full bg-neutral-900 border border-neutral-800 hover:bg-orange-500 text-white text-xs font-semibold shadow-2xl transition hover:scale-105 cursor-pointer"
        >
          <Eye className="w-4 h-4 text-orange-400" />
          <span>SEO &amp; AEO Curation Inspector</span>
        </button>

        <AnimatePresence>
          {seoInspectorOpen && (
            <motion.div
              id="seo-panel-drawer"
              className="absolute bottom-16 right-0 w-80 md:w-96 bg-white rounded-3xl border border-neutral-200 p-6 shadow-2xl space-y-4"
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-between items-center pb-3 border-b border-neutral-100">
                <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                  Live Page Curation Specs (Page 11)
                </span>
                <button
                  onClick={() => setSeoInspectorOpen(false)}
                  className="text-neutral-400 hover:text-neutral-900 text-xs cursor-pointer font-bold"
                >
                  Close
                </button>
              </div>

              <div className="space-y-3.5 text-xs">
                <div>
                  <span className="text-neutral-400 font-semibold uppercase text-[9px] block">
                    Active Router Meta Title:
                  </span>
                  <span className="text-neutral-800 font-semibold mt-1 block font-sans">
                    {currentMeta.title}
                  </span>
                </div>
                <div>
                  <span className="text-neutral-400 font-semibold uppercase text-[9px] block">
                    Meta Description:
                  </span>
                  <p className="text-neutral-500 font-medium leading-relaxed mt-0.5 font-sans">
                    {currentMeta.description}
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-neutral-400 font-bold uppercase text-[9px] block">
                      Focus KW:
                    </span>
                    <span className="text-orange-600 font-bold mt-0.5 block">
                      {currentMeta.primaryKW}
                    </span>
                  </div>
                  <div>
                    <span className="text-neutral-400 font-bold uppercase text-[9px] block">
                      Secondary KWs:
                    </span>
                    <span className="text-neutral-700 font-medium mt-0.5 block">
                      {(currentMeta as any).secondaryKW || 'UAE Supplier focus'}
                    </span>
                  </div>
                </div>

                <div className="bg-neutral-100 p-3.5 rounded-2xl border border-neutral-200 mt-2">
                  <span className="text-[9px] font-bold text-neutral-400 uppercase tracking-widest block mb-1">
                    Curation Compliance Strategy
                  </span>
                  <ul className="list-disc pl-3 text-[10px] text-neutral-500 space-y-1">
                    <li>Recommended JSON-LD Structured Schema: <strong className="text-neutral-700">FAQPage, LocalBusiness</strong></li>
                    <li>Short conversational queries mapped directly for AI search engines (Perplexity/Gemini).</li>
                    <li>Casing descriptions address direct physical dimension metrics to optimize generative citations.</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 5. Floating Sticky WhatsApp Assistance Button */}
      <a
        id="floating-whatsapp-btn"
        href="https://wa.me/971542112891"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-40 group flex items-center gap-2.5 bg-emerald-500 hover:bg-emerald-600 text-white pl-3.5 pr-4 py-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-[1.03] cursor-pointer font-sans"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-5 h-5 fill-current text-white" />
        <div className="flex flex-col text-left">
          <span className="text-[9px] font-bold uppercase tracking-wider text-emerald-100 leading-none">VIP Support</span>
          <span className="text-xs font-bold leading-none mt-1">WhatsApp Chat</span>
        </div>
      </a>

    </div>
  );
}

interface FAQAccordionItemProps {
  key?: any;
  idx: number;
  faq: FAQItem;
  defaultOpen: boolean;
}

function FAQAccordionItem({ idx, faq, defaultOpen }: FAQAccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      className="bg-neutral-50/50 rounded-2xl border border-neutral-200/50 overflow-hidden"
    >
      <button
        id={`general-faq-toggle-${idx}`}
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-6 flex justify-between items-center font-sans font-semibold text-neutral-800 text-sm md:text-base hover:text-orange-500 transition-colors cursor-pointer"
      >
        <span>{faq.question}</span>
        <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center border border-neutral-200 text-neutral-400 transform transition-transform">
          <span className="text-xs">{isOpen ? '−' : '+'}</span>
        </div>
      </button>

      {isOpen && (
        <div className="p-6 pt-0 border-t border-neutral-200/30 max-w-none prose font-sans text-xs md:text-sm text-neutral-500 leading-relaxed">
          {faq.answer}
        </div>
      )}
    </div>
  );
}

