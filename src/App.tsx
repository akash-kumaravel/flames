import { useState, useEffect } from 'react';
import { 
  Flame, Info, ShieldCheck, Check, Search, ArrowRight, MessageCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Shared types and rich database
import { ActiveSection, FAQItem } from './types';
import { 
  BRAND, PRODUCTS, TRUST_BAR, GENERAL_STATS, 
  COMMON_FAQS, META_SUMMARY, WHY_CHOOSE_EXTRA,
  BLOG_ARTICLES
} from './data';

// Modular Web Components
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import BlogPage from './components/BlogPage';
import ContactPage from './components/ContactPage';
import WhyChoosePage from './components/WhyChoosePage';
import ServicesPage from './components/ServicesPage';
import PortfolioPage from './components/PortfolioPage';
import Breadcrumbs, { BreadcrumbStep } from './components/Breadcrumbs';

const sectionToPath: Record<ActiveSection, string> = {
  'home': '/',
  'about': '/about',
  'services': '/services',
  'portfolio': '/portfolio',
  'why-choose': '/why-choose',
  'faq': '/faq',
  'contact': '/contact',
  'blog': '/blog'
};

const getSectionFromPath = (): ActiveSection => {
  const path = window.location.pathname;
  if (path.includes('/about')) return 'about';
  if (path.includes('/services')) return 'services';
  if (path.includes('/portfolio')) return 'portfolio';
  if (path.includes('/why-choose')) return 'why-choose';
  if (path.includes('/faq')) return 'faq';
  if (path.includes('/contact')) return 'contact';
  if (path.includes('/blog')) return 'blog';

  return 'home';
};

// Helper component to handle scrolling to the top after page transitions complete (mount of new page)
function ScrollToTopTrigger() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return null;
}

export default function App() {
  const [activeSection, setActiveSection] = useState<ActiveSection>(() => getSectionFromPath());
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(() => {
    const matched = BLOG_ARTICLES.find(article => article.slug === window.location.pathname);
    return matched ? matched.id : null;
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [faqCategory, setFaqCategory] = useState<'all' | 'general' | 'safety' | 'fuel'>('all');

  // Sync state back to the URL Path on navigate, tracking history block
  const handleNavigation = (section: ActiveSection, updateHistory = true) => {
    setActiveSection(section);
    if (section !== 'blog') {
      setSelectedArticleId(null);
    }
    if (updateHistory) {
      const path = sectionToPath[section] || '/';
      window.history.pushState({ section, articleId: null }, '', path);
    }
  };

  const handleSelectArticle = (articleId: string | null, updateHistory = true) => {
    setSelectedArticleId(articleId);
    setActiveSection('blog');
    if (updateHistory) {
      if (articleId) {
        const article = BLOG_ARTICLES.find(a => a.id === articleId);
        const path = article ? article.slug : '/blog';
        window.history.pushState({ section: 'blog', articleId }, '', path);
      } else {
        window.history.pushState({ section: 'blog', articleId: null }, '', '/blog');
      }
    }
  };

  const getBreadcrumbsSteps = (): BreadcrumbStep[] => {
    const steps: BreadcrumbStep[] = [];
    if (activeSection === 'about') {
      steps.push({ label: 'About Us', section: 'about' });
    } else if (activeSection === 'services') {
      steps.push({ label: 'Services', section: 'services' });
    } else if (activeSection === 'portfolio') {
      steps.push({ label: 'Portfolio', section: 'portfolio' });
    } else if (activeSection === 'why-choose') {
      steps.push({ label: 'Why Choose Us', section: 'why-choose' });
    } else if (activeSection === 'faq') {
      steps.push({ label: 'FAQs', section: 'faq' });
    } else if (activeSection === 'contact') {
      steps.push({ label: 'Contact Us', section: 'contact' });
    } else if (activeSection === 'blog') {
      steps.push({ label: 'Blog', section: 'blog' });
      if (selectedArticleId) {
        const article = BLOG_ARTICLES.find(a => a.id === selectedArticleId);
        if (article) {
          steps.push({ label: article.title, section: 'blog', articleId: selectedArticleId });
        }
      }
    }
    return steps;
  };

  // Listen to browser backwards/forwards popstate navigation
  useEffect(() => {
    const handleNavigationEvent = () => {
      const matched = getSectionFromPath();
      setActiveSection(matched);
      const matchedArticle = BLOG_ARTICLES.find(article => article.slug === window.location.pathname);
      setSelectedArticleId(matchedArticle ? matchedArticle.id : null);
    };

    window.addEventListener('popstate', handleNavigationEvent);

    return () => {
      window.removeEventListener('popstate', handleNavigationEvent);
    };
  }, []);

  // Map active section to its relevant SEO meta summary inside data.ts
  const getActiveMetaKey = (): 'home' | 'about' | 'services' | 'portfolio' | 'faq' | 'contact' | 'why-choose' => {
    if (activeSection === 'home') return 'home';
    if (activeSection === 'about') return 'about';
    if (activeSection === 'services') return 'services';
    if (activeSection === 'portfolio') return 'portfolio';
    if (activeSection === 'faq') return 'faq';
    if (activeSection === 'why-choose') return 'why-choose';
    return 'contact';
  };

  // Construct dynamic SEO metadata based on whether a specific blog article is being read
  const activeArticleObj = BLOG_ARTICLES.find(a => a.id === selectedArticleId);
  const currentMeta = activeArticleObj ? {
    title: `${activeArticleObj.title} | Flames Blog`,
    description: activeArticleObj.content.intro,
    primaryKW: activeArticleObj.targetKeyword,
    secondaryKW: activeArticleObj.content.category
  } : (META_SUMMARY[getActiveMetaKey()] || META_SUMMARY.home);

  // Dynamically update the browser tab title, description metadata, canonical links, Open Graph cards, and JSON-LD structured data on route changes
  useEffect(() => {
    document.title = currentMeta.title;
    
    const currentPath = window.location.pathname;
    const origin = window.location.origin || "https://premiumflames.com"; // Fallback to live domain

    // 1. Manage Meta Description
    let descEl = document.querySelector('meta[name="description"]');
    if (!descEl) {
      descEl = document.createElement('meta');
      descEl.setAttribute('name', 'description');
      document.head.appendChild(descEl);
    }
    descEl.setAttribute('content', currentMeta.description);

    // 2. Manage Canonical Link (Protects SEO against duplicate content indices)
    let canonicalEl = document.querySelector('link[rel="canonical"]');
    if (!canonicalEl) {
      canonicalEl = document.createElement('link');
      canonicalEl.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.setAttribute('href', `${origin}${currentPath}`);

    // 3. Manage Open Graph (OG) Cards — direct injection for major indexing crawlers (Gemini, ChatGPT, Perplexity)
    const ogProperties = {
      'og:title': currentMeta.title,
      'og:description': currentMeta.description,
      'og:type': activeArticleObj ? 'article' : 'website',
      'og:url': `${origin}${currentPath}`,
      'og:image': activeArticleObj ? 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=1200' : '/assets/Bio-Ethanol Fireplace _ Product Close-up.png',
      'twitter:card': 'summary_large_image',
      'twitter:title': currentMeta.title,
      'twitter:description': currentMeta.description
    };

    Object.entries(ogProperties).forEach(([property, value]) => {
      let el = document.querySelector(`meta[property="${property}"], meta[name="${property}"]`);
      if (!el) {
        el = document.createElement('meta');
        if (property.startsWith('og:')) {
          el.setAttribute('property', property);
        } else {
          el.setAttribute('name', property);
        }
        document.head.appendChild(el);
      }
      el.setAttribute('content', value);
    });

    // 4. Inject Dynamic JSON-LD Structured Data Schema (Guarantees superb ranking & rich citations in search engines)
    let jsonLdEl = document.querySelector('script[type="application/ld+json"]');
    if (!jsonLdEl) {
      jsonLdEl = document.createElement('script');
      jsonLdEl.setAttribute('type', 'application/ld+json');
      document.head.appendChild(jsonLdEl);
    }

    let schemaObj: any = null;

    if (activeArticleObj) {
      // Blog Posting Rich Schema
      schemaObj = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": activeArticleObj.title,
        "description": activeArticleObj.content.intro,
        "datePublished": activeArticleObj.content.date,
        "author": {
          "@type": "Organization",
          "name": "Flames UAE",
          "url": origin
        },
        "publisher": {
          "@type": "Organization",
          "name": "Flames UAE",
          "logo": {
            "@type": "ImageObject",
            "url": `${origin}/assets/logo.png`
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `${origin}${currentPath}`
        }
      };
      
      // Merge FAQ format for articles having inline Q&A
      if (activeArticleObj.content.faq) {
        schemaObj = [
          schemaObj,
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [{
              "@type": "Question",
              "name": activeArticleObj.content.faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": activeArticleObj.content.faq.answer
              }
            }]
          }
        ];
      }
    } else if (activeSection === 'faq') {
      // Direct FAQ page Schema representation (makes Q&As crawlable immediately as rich search results)
      schemaObj = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": COMMON_FAQS.slice(0, 6).map(item => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer
          }
        }))
      };

    } else {
      // Global Brand Organization / Local Business Schema for Home/About paths
      schemaObj = {
        "@context": "https://schema.org",
        "@type": "Store",
        "name": "Flames Fireplaces UAE",
        "image": "/assets/Bio-Ethanol Fireplace _ Product Close-up.png",
        "@id": `${origin}/#organization`,
        "url": origin,
        "telephone": "+971542112891",
        "priceRange": "AED 4,500 - AED 18,000",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Sheikh Zayed Road",
          "addressLocality": "Dubai",
          "addressRegion": "Dubai",
          "addressCountry": "AE"
        }
      };
    }

    jsonLdEl.textContent = JSON.stringify(schemaObj, null, 2);
  }, [currentMeta]);

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
            key={`${activeSection}-${selectedArticleId || 'list'}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <ScrollToTopTrigger />
            
            {/* ──── ROUTE: HOME ──── */}
            {activeSection === 'home' && (
              <div id="section-home">
                {/* Visual Intro */}
                <Hero onNavigate={handleNavigation} />



                {/* Featured Q&A section */}
                <div className="py-20 px-6 md:px-12">
                  <div className="max-w-3xl mx-auto space-y-10">
                    <div className="text-center">
                      <span className="text-xs font-bold uppercase tracking-widest text-orange-500 block mb-2">Quick Answers</span>
                      <h3 className="font-sans text-2xl md:text-3xl font-semibold text-neutral-900 tracking-tight">Featured Q&amp;A</h3>
                    </div>
                    
                    <div className="space-y-6">
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
                        onClick={() => handleNavigation('services')}
                        className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-sans text-xs font-semibold cursor-pointer transition"
                      >
                        Explore Our Services
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
                        src="/assets/about.png"
                        alt="Minimal Architect Surround Interior"
                        referrerPolicy="no-referrer"
                        className="w-full h-[400px] object-cover"
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



            {/* ──── ROUTE: DESIGN & INSTALLATION SERVICES ──── */}
            {activeSection === 'services' && (
              <ServicesPage />
            )}

            {/* ──── ROUTE: PROJECT PORTFOLIO ──── */}
            {activeSection === 'portfolio' && (
              <PortfolioPage />
            )}

            {/* ──── ROUTE: WHY CHOOSE US ──── */}
            {activeSection === 'why-choose' && (
              <WhyChoosePage />
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

                  {/* Standards disclosure section */}
                  <div className="mt-12 p-5 rounded-2xl bg-orange-50/20 border border-orange-100/55 text-[11px] text-neutral-550 font-sans leading-relaxed flex gap-3">
                    <Info className="w-5 h-5 text-orange-500 shrink-0" />
                    <p>
                      <strong>Certification &amp; Compliance Statement:</strong> Our fireplace cassettes and bio-ethanol burners are manufactured in compliance with strict international CE, UL, and AHD safety standards, ensuring optimal security and eco-friendly operations for luxury residential and commercial installations across the UAE.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* ──── ROUTE: CONTACT Enquiries ──── */}
            {activeSection === 'contact' && <ContactPage />}

            {/* ──── ROUTE: BLOG / ARTICLES ──── */}
            {activeSection === 'blog' && (
              <BlogPage 
                onNavigateContact={() => handleNavigation('contact')} 
                selectedArticleId={selectedArticleId}
                onSelectArticle={handleSelectArticle}
              />
            )}

          </motion.div>
        </AnimatePresence>
      </main>

      {/* 3. Global structural brand footer */}
      <Footer onNavigate={handleNavigation} />

      {/* 4. Floating Sticky WhatsApp Assistance Button */}
      <a
        id="floating-whatsapp-btn"
        href="https://wa.me/971542112891"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 group flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-[1.03] cursor-pointer font-sans"
        title="WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 175.216 175.552" className="w-5 h-5 shrink-0 select-none">
          <defs>
            <linearGradient id="b-wa" x1="85.915" x2="86.535" y1="32.567" y2="137.092" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#57d163"/>
              <stop offset="1" stopColor="#23b33a"/>
            </linearGradient>
            <filter id="a-wa" width="1.115" height="1.114" x="-.057" y="-.057" colorInterpolationFilters="sRGB">
              <feGaussianBlur stdDeviation="3.531"/>
            </filter>
          </defs>
          <path fill="#b3b3b3" d="m54.532 138.45 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.523h.023c33.707 0 61.139-27.426 61.153-61.135.006-16.335-6.349-31.696-17.895-43.251A60.75 60.75 0 0 0 87.94 25.983c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.558zm-40.811 23.544L24.16 123.88c-6.438-11.154-9.825-23.808-9.821-36.772.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954zm0 0" filter="url(#a-wa)"/>
          <path fill="#fff" d="m12.966 161.238 10.439-38.114a73.42 73.42 0 0 1-9.821-36.772c.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954z"/>
          <path fill="url(#b-wa)" d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.559 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.524h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.929z"/>
          <path fill="url(#b-wa)" d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.313-6.179 22.558 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.517 31.126 8.523h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.928z"/>
          <path fill="#fff" fillRule="evenodd" d="M68.772 55.603c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043c-1.226 0-3.218.46-4.902 2.3s-6.435 6.287-6.435 15.332 6.588 17.785 7.506 19.013 12.718 20.381 31.405 27.75c15.529 6.124 18.689 4.906 22.061 4.6s10.877-4.447 12.408-8.74 1.532-7.971 1.073-8.74-1.685-1.226-3.525-2.146-10.877-5.367-12.562-5.981-2.91-.919-4.137.921-4.746 5.979-5.819 7.206-2.144 1.381-3.984.462-7.76-2.861-14.784-9.124c-5.465-4.873-9.154-10.891-10.228-12.73s-.114-2.835.808-3.751c.825-.824 1.838-2.147 2.759-3.22s1.224-1.84 1.836-3.065.307-2.301-.153-3.22-4.032-10.011-5.666-13.647"/>
        </svg>
        <span className="text-xs font-bold leading-none">WhatsApp</span>
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

