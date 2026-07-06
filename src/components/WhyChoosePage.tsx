import React, { useState } from 'react';
import { ShieldCheck, Zap, Flame, Droplet, Star, ArrowRight, HeartHandshake, Check, HelpCircle } from 'lucide-react';
import { motion } from 'motion/react';

interface MetricDetail {
  label: string;
  ethanol: string;
  traditional: string;
}

export default function WhyChoosePage() {
  const [activeTab, setActiveTab] = useState<'matrix' | 'safety' | 'efficiency'>('matrix');
  
  // Interactive Advisor states
  const [roomType, setRoomType] = useState<string>('bedroom');
  const [needsHeat, setNeedsHeat] = useState<string>('no');
  const [hasKids, setHasKids] = useState<string>('yes');

  const getAdvisorRecommendation = () => {
    if (roomType === 'outdoor') {
      return {
        title: "Outdoor Bio Ethanol Fireplace",
        tagline: "Weather-Resistant Living Flames Fireplace",
        reason: "For pool decks, outdoor terraces, and gardens, our weather-proof Bio Ethanol fire tables and tall pillar torches cut through the wind and sea breeze, offering authentic cozy warmth without pesky electrical cords.",
        features: ["Genuine living fire", "316 Marine-grade stainless steel", "Tempered wind guards", "100% wireless"],
        buttonCode: "outdoor-ethanol",
        whatsappMsg: "Hi, I ran your Room Advisor. I got recommended an Outdoor Bio Ethanol Fireplace. Can I get more details?"
      };
    } else {
      return {
        title: "Indoor Bio Ethanol Fireplace",
        tagline: "Cozy Real Flame with Zero Soot",
        reason: hasKids === 'yes'
          ? "Your setting calls for beautiful real warmth. For homes with children and pets, our Indoor Bio Ethanol cassettes include custom heat-shielded glass guards and active automatic safety valves that prevent accidental fuel contact."
          : "Your setting calls for real flame ambience and comfortable heat. Our Indoor Bio Ethanol system burns plant-derived fuel, producing cozy warmth with zero soot, zero chimneys, and zero permit hurdles.",
        features: ["Real warming fire", "Chimney-free", "Clean burn", "Active safety guards"],
        buttonCode: "indoor-ethanol",
        whatsappMsg: "Hi, I ran your Room Advisor. I got recommended an Indoor Bio Ethanol Fireplace. Can I explore built-in cassette specs?"
      };
    }
  };

  const recommendation = getAdvisorRecommendation();

  const comparisonData: MetricDetail[] = [
    {
      label: "Atmosphere",
      ethanol: "Warm, sculptural flame that elevates interiors without visual clutter",
      traditional: "Often heavy, permanent, and visually dominant in the room"
    },
    {
      label: "Safety",
      ethanol: "Protected flame with clean operation and no ash, smoke, or soot",
      traditional: "Higher exposure to sparks, residue, and maintenance concerns"
    },
    {
      label: "Installation",
      ethanol: "Flexible placement with minimal structural requirements",
      traditional: "Often demands masonry, flues, or fuel line planning"
    },
    {
      label: "Climate Fit",
      ethanol: "Well suited to contemporary UAE interiors and outdoor living spaces",
      traditional: "Less adaptable for modern, low-maintenance, high-design homes"
    },
    {
      label: "Maintenance",
      ethanol: "Simple upkeep with a refined, elegant finish and no chimney cleaning",
      traditional: "Regular care, ash handling, and service routines are typically required"
    },
    {
      label: "Design Freedom",
      ethanol: "A seamless option for custom interiors, lounges, and hospitality settings",
      traditional: "More constrained by construction limitations and existing infrastructure"
    }
  ];

  return (
    <div id="section-why-choose" className="pt-28 pb-20 px-6 md:px-12 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Block Description */}
        <section className="text-center max-w-4xl mx-auto mb-16">
          <span className="px-3.5 py-1.5 rounded-full bg-orange-100 text-orange-700 text-xs font-semibold uppercase tracking-widest font-sans inline-block mb-4">
            Engineering Excellence
          </span>
          <h1 className="font-sans font-semibold text-3xl sm:text-4xl md:text-5xl text-neutral-900 tracking-tight leading-none mb-6">
            The Sustainable Alternative to Traditional Firepoints
          </h1>
          <p className="font-sans text-base sm:text-lg text-neutral-500 leading-relaxed">
            By merging high-specification casing designs with plant-derived clean fuel, we completely bypass the soot, ash, permit paperwork, and safety hazards of older wood or gas line systems.
          </p>
        </section>



        {/* Bento highlights of material excellence */}
        <section className="mb-12">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-700 block mb-2">Quality Standards</span>
            <h2 className="font-sans text-2xl sm:text-3xl font-semibold text-neutral-900 tracking-tight leading-snug">
              Uncompromising Physical Security Specs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-neutral-200/50 p-8 rounded-3xl space-y-4 shadow-2xs hover:shadow-md transition">
              <div className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center text-orange-600">
                <ShieldCheck className="w-5 h-5 shrink-0" />
              </div>
              <h3 className="font-sans font-semibold text-neutral-900 text-base">Grade 316 Marine Stainless Steel</h3>
              <p className="text-xs font-sans text-neutral-500 leading-relaxed">
                All burner bays and outdoor casings utilize double-wall marine-grade steel resistant to high atmospheric humidity, garden water spray, and fuel thermal stress.
              </p>
            </div>

            <div className="bg-white border border-neutral-200/50 p-8 rounded-3xl space-y-4 shadow-2xs hover:shadow-md transition">
              <div className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center text-orange-600">
                <Star className="w-5 h-5 shrink-0" />
              </div>
              <h3 className="font-sans font-semibold text-neutral-900 text-base">Adjustable Safety Slides</h3>
              <p className="text-xs font-sans text-neutral-500 leading-relaxed">
                Manually control physical flame length and thermal intensity easily with quick-slide structural dampers, ensuring absolute control over fuel consumption and local room ambient heating.
              </p>
            </div>

            <div className="bg-white border border-neutral-200/50 p-8 rounded-3xl space-y-4 shadow-2xs hover:shadow-md transition">
              <div className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center text-orange-600">
                <Star className="w-5 h-5 shrink-0" />
              </div>
              <h3 className="font-sans font-semibold text-neutral-900 text-base">CE, UL, and AHD Certifications</h3>
              <p className="text-xs font-sans text-neutral-500 leading-relaxed">
                Our technology adheres to globally recognized testing compliance structures guaranteeing safety triggers that shut down system feeds automatically in case of temperature surges or tilt.
              </p>
            </div>
          </div>
        </section>
        
        {/* Comparison Matrix */}
        <section className="mb-12 bg-white p-8 rounded-3xl border border-neutral-200/50">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-700 block mb-2">Direct Comparison</span>
            <h3 className="font-sans text-xl font-semibold text-neutral-900">Ethanol vs Traditional Firepoints</h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left table-auto">
              <thead>
                <tr className="text-xs text-neutral-500 uppercase border-b border-neutral-100">
                  <th className="py-3 pl-3">Metric</th>
                  <th className="py-3">Ethanol</th>
                  <th className="py-3">Traditional</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((m, idx) => (
                  <tr key={idx} className="align-top border-b border-neutral-100">
                    <td className="py-4 pl-3 text-sm font-semibold text-neutral-800">{m.label}</td>
                    <td className="py-4 text-sm text-neutral-600">{m.ethanol}</td>
                    <td className="py-4 text-sm text-neutral-600">{m.traditional}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Interactive Room Advisor Recommendation */}
        <section className="mb-12 grid grid-cols-1 gap-8 items-start">
          <div className="bg-white rounded-3xl p-8 border border-neutral-200/50">
            <h4 className="text-sm font-bold text-neutral-400 uppercase tracking-widest mb-3">Room Advisor</h4>
            <p className="text-neutral-600 text-sm mb-4">A quick, personality-free recommendation based on your answers above. Change the options to refine results.</p>

            <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100">
              <h3 className="font-sans font-semibold text-neutral-900 text-lg">{recommendation.title}</h3>
              <p className="text-xs text-neutral-500 mt-1 mb-3">{recommendation.tagline}</p>
              <p className="text-sm text-neutral-600 mb-3">{recommendation.reason}</p>
              <ul className="list-none space-y-2 mb-4">
                {recommendation.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-neutral-700">
                    <Check className="w-4 h-4 text-orange-500 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/971542112891?text=${encodeURIComponent(recommendation.whatsappMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-orange-500 text-white text-sm font-semibold"
              >
                Discuss This Option
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        <section className="mb-16 bg-white rounded-3xl border border-neutral-200/50 p-8 md:p-10">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.24em] text-orange-700">Complete project support</span>
            <h3 className="font-sans text-2xl md:text-3xl font-semibold text-neutral-900 tracking-tight mt-4">From design consultation to installation handover, every step is supported by our technical team.</h3>
            <p className="font-sans text-sm text-neutral-600 leading-relaxed mt-4">We help clients choose the right burner format, fuel type, finish, placement, and safety plan for modern homes, hospitality projects, and outdoor living spaces.</p>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-700 block mb-2">Trusted By</span>
            <h3 className="font-sans text-2xl font-semibold text-neutral-900">What Our Clients Say</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-3xl border border-neutral-200/50">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-500">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold text-sm">Laila — Private Client</div>
                  <p className="text-xs text-neutral-500">"Flawless install, warm ambience, and zero maintenance. Perfect for our family lounge."</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-neutral-200/50">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-500">
                  <Star className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold text-sm">Hassan — Architect</div>
                  <p className="text-xs text-neutral-500">"The design freedom saved our concept. Their technical team delivered precise CAD and install guidance."</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-neutral-200/50">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-500">
                  <Check className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold text-sm">Mariam — Developer</div>
                  <p className="text-xs text-neutral-500">"Reliable delivery and excellent aftercare. We repeated the layout across three villas."</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="mb-20">
          <div className="bg-neutral-900 text-white rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-2xl">
              <h3 className="font-sans text-2xl font-semibold">Ready to reimagine your space?</h3>
              <p className="text-xs text-neutral-300 mt-2">Get a tailored recommendation, CAD drawings, and comprehensive specifications from our project team.</p>
            </div>
            <a
              href="https://wa.me/971542112891?text=Hi%20Flames%20Fireplace%20team%2C%20I'd%20like%20to%20discuss%20a%20bespoke%20fireplace%20project."
              target="_blank"
              rel="noreferrer noopener"
              className="px-6 py-3.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-sans text-xs font-semibold"
            >
              Speak to a Project Engineer
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}
