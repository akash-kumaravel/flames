import { useState } from 'react';
import { Check, Zap, Shield, Award, ArrowRight, MessageCircle, ChevronDown } from 'lucide-react';

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
    <div id={`product-${productId}`} className="min-h-screen bg-[#FAF9F6] text-neutral-800 pt-28 pb-16 selection:bg-orange-500 selection:text-white">
      {/* Hero Section (render immediately without entrance animation) */}
      <section className="bg-white border-b border-neutral-200 py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <h1 className="font-sans font-semibold text-4xl sm:text-5xl md:text-6xl text-neutral-900 tracking-tight leading-tight mb-4">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 font-light mb-6">
              {tagline}
            </p>
            <p className="text-base text-neutral-600 leading-relaxed max-w-2xl">
              {description}
            </p>
          </div>
        </div>
      </section>

      {/* Product Image & Details */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={imageUrl}
              alt={title}
              loading="eager"
              className="w-full h-auto rounded-2xl shadow-xl object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-neutral-900 mb-6">
              Why Choose This Solution?
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-8">
              {detailedDescription}
            </p>

            {/* Key Benefits */}
            <div className="space-y-4 mb-8">
              {benefits.slice(0, 3).map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <p className="text-neutral-700">{benefit}</p>
                </div>
              ))}
            </div>

            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-8 py-3 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition-colors"
            >
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-neutral-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900 mb-4">
              Key Features
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Designed with precision and built for excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-xl border border-neutral-200 hover:border-orange-300 transition-colors"
              >
                <div className="flex gap-4">
                  <Shield className="w-6 h-6 text-orange-600 flex-shrink-0" />
                  <p className="text-neutral-700 leading-relaxed">{feature}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      {faqs.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-neutral-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-neutral-50 transition-colors text-left"
                >
                  <span className="font-medium text-neutral-900">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-neutral-600 transition-transform ${
                      expandedFaq === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {expandedFaq === idx && (
                  <div className="px-6 py-4 bg-neutral-50 border-t border-neutral-200">
                    <p className="text-neutral-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-700 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
              Ready to Transform Your Space?
            </h2>
            <p className="text-orange-100 text-lg mb-8">
              Contact our team today for a consultation and a tailored recommendation.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-orange-600 rounded-lg font-semibold hover:bg-neutral-100 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Contact Us Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
