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
        tagline: "Weather-Resistant Living Flames",
        reason: "For pool decks, outdoor terraces, and gardens, our weather-proof Bio Ethanol fire tables and tall pillar torches cut through the wind and sea breeze, offering authentic cozy warmth without pesky electrical cords.",
        features: ["Genuine living fire", "316 Marine-grade stainless steel", "Tempered wind guards", "100% wireless"],
        buttonCode: "outdoor-ethanol",
        whatsappMsg: "Hi, I ran your Room Advisor. I got recommended an Outdoor Bio Ethanol Fireplace. Can I get a quote?"
      };
    } else {
      return {
        title: "Indoor Bio Ethanol Fireplace",
        tagline: "Cozy Real Flame with Zero Soot",
        reason: hasKids === 'yes'
          ? "Your setting calls for beautiful real warmth. For homes with children and pets, our premium Indoor Bio Ethanol cassettes include custom heat-shielded glass guards and active automatic safety valves that prevent accidental fuel contact."
          : "Your setting calls for real flame ambience and comfortable heat. Our Indoor Bio Ethanol system burns plant-derived fuel, producing cozy warmth with zero soot, zero chimneys, and zero permit hurdles.",
        features: ["Real warming fire", "Chimney-free", "Premium clean burn", "Active safety guards"],
        buttonCode: "indoor-ethanol",
        whatsappMsg: "Hi, I ran your Room Advisor. I got recommended an Indoor Bio Ethanol Fireplace. Can I explore built-in cassette specs?"
      };
    }
  };

  const recommendation = getAdvisorRecommendation();

  const comparisonData: MetricDetail[] = [
    {
      label: "Flame Nature",
      ethanol: "Real Living Fire (Plant-derived Bioethanol burn)",
      traditional: "Wood Sourced / LPG gas plumbing"
    },
    {
      label: "Surface Safety",
      ethanol: "Hot Golden Flame (Protected with glass shield)",
      traditional: "High Burn Hazard (Spits embers, dangerous ash)"
    },
    {
      label: "Venting & Chimney",
      ethanol: "Ventless (No chimney needed, only natural indoor air)",
      traditional: "Mandatory Chimney (Major construction and heat loss)"
    },
    {
      label: "UAE Climate Suitability",
      ethanol: "Winter Desert Nights (Produces comfortable ambient heat)",
      traditional: "Unusable in Hot Seasons (Overheats modern buildings)"
    },
    {
      label: "Emission profile",
      ethanol: "Clean Combustion (Water vapor and trace CO2 equal to candles)",
      traditional: "High Carbon/Soot (Ash particles, toxic CO, heavy odor)"
    },
    {
      label: "Installation Complexity",
      ethanol: "Minimalist (Freestanding or standard recess trim)",
      traditional: "Extreme (Requires masonry, structural brick, gas line permits)"
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

        {/* Dynamic Head-to-Head comparison section */}
        <section className="bg-white rounded-3xl border border-neutral-200/50 p-6 md:p-14 mb-24 shadow-xs">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-12 border-b border-neutral-100 pb-8">
            <div>
              <h2 className="font-sans text-xl md:text-2xl font-semibold text-neutral-900 tracking-tight">
                Head-To-Head Technology Matrix
              </h2>
              <p className="text-xs text-neutral-400 font-sans mt-1.5">
                Compare architectural options to make the right spatial selection.
              </p>
            </div>
            
            <div className="flex items-center gap-1.5 bg-neutral-100 p-1 rounded-xl self-start">
              {(['matrix', 'safety', 'efficiency'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-wider transition ${
                    activeTab === tab
                      ? 'bg-neutral-900 text-white shadow-xs'
                      : 'text-neutral-500 hover:text-neutral-900'
                  }`}
                >
                  {tab === 'matrix' ? 'Overview Matrix' : tab === 'safety' ? 'Safety Rating' : 'Running Cost'}
                </button>
              ))}
            </div>
          </div>

          {activeTab === 'matrix' && (
            <div className="overflow-x-auto">
              <table className="w-full text-left font-sans text-sm border-collapse min-w-[640px]">
                <thead>
                  <tr className="border-b border-neutral-100 text-[10px] font-bold uppercase text-neutral-400 tracking-widest">
                    <th className="pb-4 w-[34%]">Feature Parameter</th>
                    <th className="pb-4 px-4 w-[33%] text-orange-600 font-bold bg-orange-50/20 rounded-t-xl">Bio Ethanol Fire</th>
                    <th className="pb-4 w-[33%]">Traditional Wood/Gas</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100 text-neutral-600">
                  {comparisonData.map((row, idx) => (
                    <tr key={idx} className="hover:bg-neutral-50/40 transition">
                      <td className="py-4.5 font-semibold text-neutral-900">{row.label}</td>
                      <td className="py-4.5 px-4 font-medium text-orange-700 bg-orange-50/15">{row.ethanol}</td>
                      <td className="py-4.5 font-normal text-neutral-400">{row.traditional}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'safety' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-4">
              <div className="space-y-4">
                <span className="px-2.5 py-0.5 rounded-sm bg-orange-100 text-orange-800 font-mono text-[9px] font-bold">INDOOR FIRE STANDARDS</span>
                <h3 className="font-sans text-lg font-semibold text-neutral-900">Indoor Bio-Ethanol Safety Protocols</h3>
                <p className="text-xs text-neutral-500 leading-relaxed font-sans">
                  Our indoor cassettes are engineered with double-wall high-grade stainless steel to isolate fuel tanks from structural recess cavities. Active safety locks, overflow level sensors, and spill-proof absorbent linings guarantee simple, worry-free operation.
                </p>
                <ul className="space-y-2 text-xs text-neutral-600 font-sans">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-orange-500 shrink-0" /> Zero chimney or toxic draft losses</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-orange-500 shrink-0" /> Safety-hardened tempered glass shields</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-orange-500 shrink-0" /> Automatic fuel tank sensors prevent overfill</li>
                </ul>
              </div>
              <div className="space-y-4">
                <span className="px-2.5 py-0.5 rounded-sm bg-amber-100 text-amber-800 font-mono text-[9px] font-bold">OUTDOOR DESIGN SAFETY</span>
                <h3 className="font-sans text-lg font-semibold text-neutral-900">Outdoor Fireplace Elements</h3>
                <p className="text-xs text-neutral-500 leading-relaxed font-sans">
                  Our outdoor fire pits, fire tables, and taller structural torch columns feature high-efficiency wind protectors and stable concrete or steel foundations. Engineered to withstand intense Gulf elements, the clean-burning fuel generates instant golden warmth without hazardous ash.
                </p>
                <ul className="space-y-2 text-xs text-neutral-600 font-sans">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-orange-500 shrink-0" /> Grade 316 Marine Stainless Steel weatherproofing</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-orange-500 shrink-0" /> Safe, physical fuel shut-off slide gates</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-orange-500 shrink-0" /> Stable heavy-duty concrete and stone frames</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'efficiency' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-4">
              <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-150 space-y-3">
                <span className="font-bold text-neutral-400 font-mono text-[9px] uppercase tracking-wider block">EFFICIENCY & COST</span>
                <h4 className="font-sans text-base font-semibold text-neutral-900">Running Cost Analysis</h4>
                <p className="text-xs text-neutral-500 leading-relaxed font-sans">
                  A traditional brick fireplace loses up to 80% of heat straight up the chimney, making fuel highly inefficient. Our ventless Bio Ethanol designs stay 100% internal, converting all fuel into usable radiant heat.
                </p>
              </div>
              <div className="p-6 bg-[#FAF9F6] rounded-2xl border border-neutral-150 space-y-3">
                <h4 className="font-sans text-sm font-semibold text-neutral-800 flex items-center gap-1.5">
                  <Flame className="w-4 h-4 shrink-0 text-orange-500" />
                  Bio Ethanol Cost & Consumption
                </h4>
                <p className="text-xs text-neutral-500 leading-relaxed font-sans">
                  Consumes pure botanical liquid to cast authentic golden warmth with zero soot. High heating value with zero construction permit fees or brick masonry expenses.
                </p>
                <span className="block font-bold text-neutral-800 font-sans text-sm">~ 8.00 - 12.00 AED per operational hour</span>
              </div>
            </div>
          )}
        </section>

        {/* INTERACTIVE ROOM-BY-ROOM ADVISOR */}
        <section className="bg-neutral-900 text-white rounded-3xl p-8 md:p-14 mb-24 relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-radial from-orange-500/10 to-transparent blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left selector form */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-[10px] font-mono font-bold text-orange-400 uppercase tracking-widest block mb-2">Help Me Choose</span>
                <h2 className="font-sans text-2xl md:text-3xl font-semibold text-white tracking-tight">
                  Find Your Ideal Fireplace
                </h2>
                <p className="text-xs text-neutral-400 mt-2 font-sans">
                  Answer 3 short questions to discover the ideal system match for your space.
                </p>
              </div>

              {/* Question 1 */}
              <div className="space-y-2.5">
                <span className="block text-xs font-bold text-neutral-300 font-sans uppercase tracking-wider">1. Where will this fireplace go?</span>
                <div id="advisor-room-group" className="grid grid-cols-3 gap-2">
                  {[
                    { key: 'bedroom', label: 'Bedroom' },
                    { key: 'living', label: 'Living' },
                    { key: 'outdoor', label: 'Outdoor' }
                  ].map((item) => (
                    <button
                      key={item.key}
                      onClick={() => setRoomType(item.key)}
                      className={`py-2 rounded-xl text-xs font-semibold font-sans cursor-pointer transition ${
                        roomType === item.key 
                          ? 'bg-orange-500 text-white shadow-xs' 
                          : 'bg-neutral-800 hover:bg-neutral-750 text-neutral-400'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Question 2 */}
              <div className="space-y-2.5">
                <span className="block text-xs font-bold text-neutral-300 font-sans uppercase tracking-wider">2. Do you need active heating output?</span>
                <div id="advisor-heat-group" className="grid grid-cols-2 gap-2">
                  {[
                    { key: 'no', label: 'No (Visuals only)' },
                    { key: 'yes', label: 'Yes (Heat & Fire)' }
                  ].map((item) => (
                    <button
                      key={item.key}
                      onClick={() => setNeedsHeat(item.key)}
                      className={`py-2 rounded-xl text-xs font-semibold font-sans cursor-pointer transition ${
                        needsHeat === item.key 
                          ? 'bg-orange-500 text-white shadow-xs' 
                          : 'bg-neutral-800 hover:bg-neutral-750 text-neutral-400'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Question 3 */}
              <div className="space-y-2.5">
                <span className="block text-xs font-bold text-neutral-300 font-sans uppercase tracking-wider">3. Are there active toddlers or pets run around?</span>
                <div id="advisor-kids-group" className="grid grid-cols-2 gap-2">
                  {[
                    { key: 'yes', label: 'Yes, safety first' },
                    { key: 'no', label: 'No restrictions' }
                  ].map((item) => (
                    <button
                      key={item.key}
                      onClick={() => setHasKids(item.key)}
                      className={`py-2 rounded-xl text-xs font-semibold font-sans cursor-pointer transition ${
                        hasKids === item.key 
                          ? 'bg-orange-500 text-white shadow-xs' 
                          : 'bg-neutral-800 hover:bg-neutral-750 text-neutral-400'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right recommendation card */}
            <div className="lg:col-span-6 bg-neutral-800/80 border border-neutral-700/50 p-6 md:p-8 rounded-2xl flex flex-col justify-between h-full">
              <div>
                <span className="px-2.5 py-0.5 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20 text-[9px] font-bold uppercase tracking-wider font-mono inline-block">
                  Our Recommendation
                </span>
                <h3 className="font-sans text-xl font-bold mt-4 text-white">
                  {recommendation.title}
                </h3>
                <span className="text-xs text-neutral-400 font-medium italic block mt-0.5 mb-4">
                  {recommendation.tagline}
                </span>
                
                <p className="text-xs text-neutral-300 leading-relaxed font-sans mb-6">
                  {recommendation.reason}
                </p>

                <div className="grid grid-cols-2 gap-3 mb-8">
                  {recommendation.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-neutral-300">
                      <Check className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                id="advisor-whatsapp-cta"
                href={`https://wa.me/971542112891?text=${encodeURIComponent(recommendation.whatsappMsg)}`}
                target="_blank"
                rel="noreferrer"
                className="w-full text-center py-3.5 rounded-full bg-orange-500 hover:bg-orange-600 font-sans text-xs font-semibold text-white transition block cursor-pointer"
              >
                Inquire on WhatsApp about {recommendation.title}
              </a>
            </div>

          </div>
        </section>

        {/* Bento highlights of material excellence */}
        <section className="mb-12">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-500 block mb-2">Quality Standards</span>
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
                All burner bays and outdoor casings utilize premium double-wall marine-grade steel resistant to high atmospheric humidity, garden water spray, and fuel thermal stress.
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

      </div>
    </div>
  );
}
