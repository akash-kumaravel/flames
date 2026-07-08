import { useState } from 'react';
import { Check, Shield, ArrowRight, MessageCircle, ChevronDown } from 'lucide-react';

interface ProductPageProps {
  productId: string;
  title: string;
  tagline: string;
  description: string;
  detailedDescription: string;
  imageUrl: string;
  features: string[];
  benefits: string[];
  howItWorks: string[];
  faqs: { question: string; answer: string }[];
  bgGradient: string;
  onNavigate: (section: 'contact') => void;
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
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div id={`product-${productId}`} className="bg-[#0b0b0b] text-neutral-100 selection:bg-orange-500 selection:text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(251,146,60,0.18),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(249,115,22,0.14),_transparent_35%)] pointer-events-none" />
        <div className="relative">
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 lg:py-32">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative z-10">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 text-orange-300 text-xs font-semibold uppercase tracking-[0.3em] mb-6">
                  {title}
                </span>
                <h1 className="font-sans font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight leading-tight text-white mb-6">
                  {tagline}
                </h1>
                <p className="text-lg md:text-xl text-neutral-300 leading-relaxed max-w-3xl mb-10">
                  {description}
                </p>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <a
                    id={`wa-cta-service-${productId}`}
                    href={`https://wa.me/971542112891?text=${encodeURIComponent(`Book now for ${title}`)}`}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="w-full sm:min-w-[220px] justify-center px-6 py-4 rounded-3xl bg-[#151515] hover:bg-emerald-950/60 border border-neutral-700 hover:border-emerald-500/50 transition-all duration-300 flex items-center gap-3 cursor-pointer text-base font-semibold text-neutral-100"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 175.216 175.552" className="w-5 h-5 shrink-0">
                      <defs>
                        <linearGradient id={`wa-sh-service-${productId}`} x1="85.915" x2="86.535" y1="32.567" y2="137.092" gradientUnits="userSpaceOnUse">
                          <stop offset="0" stopColor="#57d163" />
                          <stop offset="1" stopColor="#23b33a" />
                        </linearGradient>
                      </defs>
                      <path fill="#fff" d="m12.966 161.238 10.439-38.114a73.42 73.42 0 0 1-9.821-36.772c.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954z" />
                      <path fill={`url(#wa-sh-service-${productId})`} d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.559 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.524h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.929z" />
                      <path fill="#fff" fillRule="evenodd" d="M68.016 54.843c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043c-1.226 0-3.218.46-4.902 2.3s-6.435 6.287-6.435 15.332 6.588 17.785 7.506 19.013c.918 1.228 12.718 20.381 31.405 27.75 15.529 6.124 18.689 4.906 22.061 4.6s10.877-4.447 12.408-8.74c1.531-4.293 1.531-7.971 1.072-8.74-.459-.769-1.685-1.226-3.525-2.146s-10.877-5.367-12.562-5.981-2.91-.919-4.137.921-4.746 5.979-5.819 7.206-2.144 1.381-3.984.462-7.76-2.861-14.784-9.124c-5.465-4.873-9.154-10.891-10.228-12.73s-.114-2.835.808-3.751c.825-.824 1.838-2.147 2.759-3.22s1.224-1.84 1.836-3.065.307-2.301-.153-3.22-4.032-10.011-5.666-13.647" />
                    </svg>
                    Book Now
                  </a>
                </div>
              </div>

              <div className="rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-black/5">
                <img
                  src={imageUrl}
                  alt={`Premium ${title} installation showroom view — Flames Fireplace Dubai`}
                  width={800}
                  height={600}
                  loading="eager"
                  decoding="async"
                  className="w-full h-full min-h-[420px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="grid lg:grid-cols-[1.3fr_0.9fr] gap-16 items-start">
          <div className="space-y-10">
            <div className="bg-[#121212] rounded-[2rem] p-10 shadow-sm border border-neutral-800">
              <span className="text-xs uppercase tracking-[0.3em] text-orange-600 font-semibold">Overview</span>
              <h2 className="mt-4 text-3xl font-semibold text-white">A complete fireplace solution built for UAE homes</h2>
              <p className="mt-6 text-neutral-300 leading-relaxed text-base md:text-lg">
                {detailedDescription}
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-[1.5rem] border border-neutral-800 bg-[#121212] p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-white mb-4">What makes it different</h3>
                <ul className="space-y-4 text-neutral-300">
                  {benefits.slice(0, 3).map((benefit, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="mt-1 text-orange-600"><Check className="w-5 h-5" /></span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[1.5rem] border border-neutral-800 bg-[#121212] p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-white mb-4">How it works</h3>
                <ol className="space-y-4 text-neutral-300 list-decimal list-inside">
                  {howItWorks.map((step, idx) => (
                    <li key={idx}>{step}</li>
                  ))}
                </ol>
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-[2rem] border border-neutral-800 bg-neutral-950/95 p-8 text-white shadow-2xl shadow-orange-500/10">
              <span className="text-xs uppercase tracking-[0.3em] text-orange-300 font-semibold">Need help choosing?</span>
              <h3 className="mt-4 text-2xl font-semibold">Talk to our UAE fireplace experts</h3>
              <p className="mt-4 text-neutral-300 leading-relaxed">
                We help you pick the best fireplace option for your space, whether you want indoor ambience, outdoor drama, or a modern media wall feature.
              </p>
              <button
                onClick={() => onNavigate('contact')}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-4 text-sm font-semibold text-white hover:bg-orange-400 transition-all"
              >
                Get a Consultation
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="rounded-[2rem] border border-neutral-800 bg-[#121212] p-8 shadow-sm">
              <h4 className="text-base font-semibold text-white mb-4 uppercase tracking-[0.16em] text-orange-400">Quick links</h4>
              <ul className="space-y-3 text-neutral-300">
                <li><a href="https://www.flamesfireplace.com/best-fireplace-dubai" onClick={(e) => { e.preventDefault(); onNavigate('best-fireplace-dubai'); }} className="hover:text-orange-600 transition-colors">Best Fireplace in Dubai</a></li>
                <li><a href="https://www.flamesfireplace.com/services" onClick={(e) => { e.preventDefault(); onNavigate('services'); }} className="hover:text-orange-600 transition-colors">Explore all services</a></li>
                <li><a href="https://www.flamesfireplace.com/contact" onClick={(e) => { e.preventDefault(); onNavigate('contact'); }} className="hover:text-orange-600 transition-colors">Book a site visit</a></li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-[#0f0f0f] py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-14">
            <span className="text-xs uppercase tracking-[0.3em] text-orange-600 font-semibold">Key Benefits</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-white">What owners love most</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="rounded-[1.75rem] border border-neutral-800 bg-[#121212] p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-400">
                    <Check className="w-5 h-5" />
                  </span>
                  <p className="font-semibold text-white">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {faqs.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">
          <div className="text-center mb-14">
            <span className="text-xs uppercase tracking-[0.3em] text-orange-600 font-semibold">Questions answered</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-white">Frequently Asked Questions</h2>
          </div>

          <div className="grid gap-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="rounded-[1.5rem] border border-neutral-800 bg-[#121212] shadow-sm overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left gap-6 hover:bg-[#161616] transition-colors"
                >
                  <span className="font-medium text-white">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-neutral-500 transition-transform ${expandedFaq === idx ? 'rotate-180' : ''}`}
                  />
                </button>
                {expandedFaq === idx && (
                  <div className="px-8 py-6 bg-[#0f0f0f] border-t border-neutral-800">
                    <p className="text-neutral-300 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="bg-gradient-to-r from-orange-600 to-orange-700 py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Make your next fireplace the best one yet.</h2>
          <p className="mx-auto max-w-2xl text-orange-100 leading-relaxed mb-8">
            Talk to our Dubai team for a tailored recommendation, fast installation, and a solution that matches your design, safety, and lifestyle goals.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-3 rounded-full bg-neutral-900 px-8 py-4 text-sm font-semibold text-white shadow-xl hover:bg-neutral-950 transition-all border border-white/10"
          >
            <MessageCircle className="w-5 h-5" />
            Schedule a Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
