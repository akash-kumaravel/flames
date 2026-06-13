import { useState } from 'react';
import { 
  Check, 
  ArrowRight, 
  ChevronDown, 
  Droplets, 
  Ruler, 
  Clock, 
  Flame,
  Info,
  MessageCircle
} from 'lucide-react';
import { ProductDetails } from '../types';
import { motion, AnimatePresence } from 'motion/react';

interface ProductPageProps {
  product: ProductDetails;
  onNavigateContact: () => void;
}

// Highly precise technical specs matching standard luxury fireplace casing blueprints
const DETAILED_BLUEPRINTS: Record<string, Array<{
  name: string;
  width: string;
  depth: string;
  height: string;
  cutoutWidth: string;
  capacity: string;
  burnTime: string;
  electricalDraw: string;
  heatOutput: string;
}>> = {
  'vapor-fireplace': [
    { name: 'Flames 3D Vapor Aero 80', width: '800 mm', depth: '250 mm', height: '220 mm', cutoutWidth: '785 mm', capacity: '2.5 Liters', burnTime: '12 - 15 Hours', electricalDraw: '65 Watts (Eco)', heatOutput: '0.0 kW (Visual Mist Only)' },
    { name: 'Flames 3D Vapor Elite 120', width: '1200 mm', depth: '250 mm', height: '220 mm', cutoutWidth: '1185 mm', capacity: '4.8 Liters', burnTime: '14 - 18 Hours', electricalDraw: '110 Watts (Med)', heatOutput: '0.0 kW (Visual Mist Only)' },
    { name: 'Flames 3D Vapor Grand 150', width: '1500 mm', depth: '250 mm', height: '220 mm', cutoutWidth: '1485 mm', capacity: '6.2 Liters', burnTime: '14 - 18 Hours', electricalDraw: '145 Watts (High)', heatOutput: '0.0 kW (Visual Mist Only)' },
    { name: 'Flames 3D Vapor Quantum 200', width: '2000 mm', depth: '250 mm', height: '220 mm', cutoutWidth: '1985 mm', capacity: '8.5 Liters', burnTime: '16 - 22 Hours', electricalDraw: '200 Watts (Max)', heatOutput: '0.0 kW (Visual Mist Only)' },
    { name: 'Flames 3D Vapor Immense 240', width: '2400 mm', depth: '250 mm', height: '220 mm', cutoutWidth: '2385 mm', capacity: '10.5 Liters', burnTime: '16 - 22 Hours', electricalDraw: '260 Watts (Max)', heatOutput: '0.0 kW (Visual Mist Only)' },
  ],
  'indoor-ethanol': [
    { name: 'Flames Bio-Ethanol Aero 80', width: '800 mm', depth: '240 mm', height: '168 mm', cutoutWidth: '780 mm', capacity: '3.0 Liters', burnTime: '6 - 8 Hours', electricalDraw: 'Self-Powered (None)', heatOutput: '2.8 kW (9,500 BTU/h)' },
    { name: 'Flames Bio-Ethanol Elite 120', width: '1200 mm', depth: '240 mm', height: '168 mm', cutoutWidth: '1180 mm', capacity: '5.2 Liters', burnTime: '6 - 9 Hours', electricalDraw: 'Self-Powered (None)', heatOutput: '4.5 kW (15,300 BTU/h)' },
    { name: 'Flames Bio-Ethanol Grand 150', width: '1500 mm', depth: '240 mm', height: '168 mm', cutoutWidth: '1480 mm', capacity: '7.8 Liters', burnTime: '7 - 10 Hours', electricalDraw: 'Self-Powered (None)', heatOutput: '5.8 kW (19,800 BTU/h)' },
    { name: 'Flames Bio-Ethanol Quantum 200', width: '2000 mm', depth: '240 mm', height: '168 mm', cutoutWidth: '1980 mm', capacity: '10.0 Liters', burnTime: '7 - 10 Hours', electricalDraw: 'Self-Powered (None)', heatOutput: '7.2 kW (24,500 BTU/h)' },
    { name: 'Flames Bio-Ethanol Immense 240', width: '2400 mm', depth: '240 mm', height: '168 mm', cutoutWidth: '2380 mm', capacity: '12.5 Liters', burnTime: '8 - 12 Hours', electricalDraw: 'Self-Powered (None)', heatOutput: '9.0 kW (30,700 BTU/h)' },
  ],
  'outdoor-ethanol': [
    { name: 'Flames Patio Aero 80', width: '800 mm', depth: '260 mm', height: '190 mm', cutoutWidth: '780 mm', capacity: '3.5 Liters', burnTime: '5 - 7 Hours', electricalDraw: 'Self-Powered (None)', heatOutput: '3.2 kW (10,950 BTU/h)' },
    { name: 'Flames Patio Elite 120', width: '1200 mm', depth: '260 mm', height: '190 mm', cutoutWidth: '1180 mm', capacity: '5.8 Liters', burnTime: '5 - 8 Hours', electricalDraw: 'Self-Powered (None)', heatOutput: '5.0 kW (17,000 BTU/h)' },
    { name: 'Flames Patio Grand 150', width: '1500 mm', depth: '260 mm', height: '190 mm', cutoutWidth: '1480 mm', capacity: '8.2 Liters', burnTime: '6 - 9 Hours', electricalDraw: 'Self-Powered (None)', heatOutput: '6.4 kW (21,800 BTU/h)' },
    { name: 'Flames Patio Quantum 200', width: '2000 mm', depth: '260 mm', height: '190 mm', cutoutWidth: '1980 mm', capacity: '11.0 Liters', burnTime: '6 - 9 Hours', electricalDraw: 'Self-Powered (None)', heatOutput: '8.5 kW (29,000 BTU/h)' },
    { name: 'Flames Patio Immense 240', width: '2400 mm', depth: '260 mm', height: '190 mm', cutoutWidth: '2380 mm', capacity: '13.8 Liters', burnTime: '7 - 11 Hours', electricalDraw: 'Self-Powered (None)', heatOutput: '10.5 kW (35,800 BTU/h)' },
  ]
};

export default function ProductPage({ product, onNavigateContact }: ProductPageProps) {
  const [selectedLengthIdx, setSelectedLengthIdx] = useState<number>(1); // Default to 'Elite 120cm'
  const [activeTab, setActiveTab] = useState<'architectural' | 'safety' | 'materials' | 'dynamics'>('architectural');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Active blueprint selection
  const blueprintList = DETAILED_BLUEPRINTS[product.id] || DETAILED_BLUEPRINTS['vapor-fireplace'];
  const activeBlueprint = blueprintList[selectedLengthIdx] || blueprintList[1];

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div id={`product-page-${product.id}`} className="min-h-screen bg-[#FAF9F6] text-neutral-800 pt-24 pb-28 selection:bg-orange-500 selection:text-white">
      
      {/* 1. Light Premium Header Hero */}
      <section className="relative px-6 md:px-12 xl:px-16 pb-16 pt-6 overflow-hidden max-w-[1500px] mx-auto">
        <div className="absolute inset-0 bg-radial-gradient from-orange-500/5 via-transparent to-transparent pointer-events-none" />
        
        {/* Navigation Breadcrumbs */}
        <div className="mb-8 font-sans flex items-center gap-2.5 text-[11px] uppercase tracking-widest text-neutral-400 font-medium relative z-10">
          <span className="hover:text-orange-600 transition-colors cursor-pointer">FLAMES SYSTEM DESIGN</span>
          <span className="text-neutral-300">/</span>
          <span className="hover:text-orange-600 transition-colors cursor-pointer">
            {product.id.includes('vapor') ? 'HYDRO-SONIC 3D VAPOR' : 'BOTANICAL COZY ECO-ETHANOL'}
          </span>
          <span className="text-neutral-300">/</span>
          <span className="text-neutral-900 font-semibold">{product.name}</span>
        </div>

        {/* Hero split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10 font-sans">
          
          {/* Left Column: Architectural pitch */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100/70 border border-orange-200/55 shadow-xs mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                <span className="text-[10px] font-mono tracking-widest text-orange-700 uppercase font-bold">
                  ARCHITECT-SPEC READY • REGION EN-16647 COMPLIANT
                </span>
              </div>
              
              <h1 className="font-sans font-bold text-4xl sm:text-5xl xl:text-6xl text-neutral-900 tracking-tight leading-[1.1]">
                {product.name}
              </h1>
              
              <p className="font-sans text-xl xl:text-2xl font-light text-orange-600 tracking-tight mt-4">
                {product.tagline}
              </p>
            </div>

            <p className="font-sans text-neutral-600 text-sm sm:text-base leading-relaxed font-light">
              {product.detailedDescription}
            </p>

            {/* Casing Length Selection Pills */}
            <div className="space-y-3 pt-2">
              <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest font-bold block">
                SELECT SPECIFICATION MODEL SIZE:
              </span>
              <div className="flex flex-wrap gap-2">
                {blueprintList.map((item, idx) => (
                  <button
                    key={idx}
                    id={`casing-len-btn-light-${idx}`}
                    className={`text-xs font-mono font-semibold py-2.5 px-4 rounded-xl border transition-all text-center cursor-pointer ${
                      selectedLengthIdx === idx
                        ? 'bg-orange-500 text-white border-orange-500 shadow-md shadow-orange-500/10'
                        : 'bg-white text-neutral-600 border-[#e3dfd3] hover:bg-neutral-100/60'
                    }`}
                    onClick={() => setSelectedLengthIdx(idx)}
                  >
                    {item.width.split(' ')[0]}mm Model
                  </button>
                ))}
              </div>
            </div>

            {/* Quick architectural key credentials cards using selected size */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 bg-white border border-neutral-200/60 rounded-xl shadow-xs">
                <span className="text-[10px] text-neutral-400 uppercase tracking-widest font-semibold block font-mono">HOUSING MEASUREMENT</span>
                <span className="text-xs font-semibold text-neutral-800 mt-2 block flex items-center gap-1.5 font-mono">
                  <Ruler className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                  {activeBlueprint.width} x {activeBlueprint.height}
                </span>
              </div>
              <div className="p-4 bg-white border border-neutral-200/60 rounded-xl shadow-xs">
                <span className="text-[10px] text-neutral-400 uppercase tracking-widest font-semibold block font-mono">TANK VOLUME</span>
                <span className="text-xs font-semibold text-neutral-800 mt-2 block flex items-center gap-1.5 font-mono">
                  <Droplets className="w-3.5 h-3.5 text-sky-500 shrink-0" />
                  {activeBlueprint.capacity} Capacity
                </span>
              </div>
              <div className="p-4 bg-white border border-neutral-200/60 rounded-xl shadow-xs">
                <span className="text-[10px] text-neutral-400 uppercase tracking-widest font-semibold block font-mono">ESTIMATE STATUS</span>
                <span className="text-xs font-semibold text-neutral-800 mt-2 block font-mono flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  Quote on Request
                </span>
              </div>
            </div>

            {/* Premium CTA Actions */}
            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center pt-2">
              <button
                id="product-premium-quote-cta-btn"
                onClick={onNavigateContact}
                className="px-8 py-4 rounded-xl bg-neutral-900 hover:bg-orange-600 text-white font-sans text-sm font-semibold transition-all duration-300 shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                Request Architectural Quotation
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <a
                id="product-whatsapp-cta"
                href="https://wa.me/971542112891"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 font-sans text-xs font-semibold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600 fill-emerald-50" />
                Chat on WhatsApp (+971 54 211 2891)
              </a>
            </div>

          </div>

          {/* Right Column: Beautiful photo panel / details showcase */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden border border-neutral-200/70 shadow-lg bg-white p-3 group">
              <img
                src={product.imageUrl}
                alt={product.name}
                referrerPolicy="no-referrer"
                className="w-full h-[360px] sm:h-[480px] object-cover rounded-2xl opacity-95 group-hover:opacity-100 group-hover:scale-[1.01] transition-all duration-700"
              />
              
              {/* Dynamic glass effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/10 via-transparent to-transparent pointer-events-none" />
              
              {/* Overlay with details */}
              <div className="absolute top-8 left-8 block bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl border border-neutral-200/60 shadow-xs text-left">
                <span className="text-neutral-400 block text-[9px] uppercase font-bold mb-0.5 font-mono">SPECIFICATION ACTIVE</span>
                <span className="text-orange-600 font-semibold text-xs block font-mono">{activeBlueprint.name}</span>
                <span className="text-neutral-500 block text-[10px] mt-0.5 font-mono">Depth: {activeBlueprint.depth}</span>
              </div>

              {/* Firebox tech badge */}
              <div className="absolute bottom-8 right-8 flex items-center gap-2 bg-white/95 backdrop-blur-md border border-neutral-200/60 p-3.5 rounded-2xl shadow-sm text-left">
                <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600 shrink-0">
                  <Flame className="w-4.5 h-4.5" />
                </div>
                <div>
                  <span className="text-[9px] text-neutral-400 uppercase tracking-widest font-semibold font-mono block">Thermodynamic Casing</span>
                  <span className="text-xs font-bold text-neutral-800 block mt-0.5">
                    {product.id.includes('vapor') ? 'Hydro-Sonic Cold Vapor' : 'Bio-Ethanol Flame Loop'}
                  </span>
                </div>
              </div>

            </div>

            {/* UAE Delivery and Customization flags */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-white border border-neutral-200/60 p-4 rounded-2xl flex items-center gap-3 shadow-xs text-left">
                <div className="w-9 h-9 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 shrink-0">
                  <Droplets className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <span className="font-semibold block text-neutral-800 text-xs font-sans">Watermist / Bio Fuel</span>
                  <span className="text-neutral-500 text-[11px] block mt-0.5 font-light">Filtered local tap or sustainable Botanical Alcohol</span>
                </div>
              </div>
              <div className="bg-white border border-neutral-200/60 p-4 rounded-2xl flex items-center gap-3 shadow-xs text-left">
                <div className="w-9 h-9 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 shrink-0">
                  <Check className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <span className="font-semibold block text-neutral-800 text-xs font-sans">Premium Delivery</span>
                  <span className="text-neutral-500 text-[11px] block mt-0.5 font-light">Free white-glove courier to all UAE project sites</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. Complete Engineering Blueprint Spec Tabs (All light-themed!) */}
      <section className="py-20 px-6 md:px-12 max-w-4xl mx-auto font-sans">
        <div className="text-center mb-10">
          <span className="text-orange-600 font-mono text-[10px] font-bold uppercase tracking-widest block mb-2">Technical Blueprints</span>
          <h2 className="font-sans text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
            Architectural Engineering Specification
          </h2>
          <p className="text-neutral-500 text-xs sm:text-sm font-light mt-2 max-w-lg mx-auto">
            Review meticulous millimeter measurements, low-voltage power loads, certified safe offsets, and double-wall casing profiles across our models.
          </p>
        </div>

        {/* Tab Headers */}
        <div className="flex border-b border-neutral-200 mb-8 overflow-x-auto scroller-none gap-2 font-sans font-semibold text-xs sm:text-sm">
          {(['architectural', 'safety', 'materials', 'dynamics'] as const).map((tab) => {
            let label = '';
            if (tab === 'architectural') label = 'Dimensions / Recess';
            else if (tab === 'safety') label = 'Safety Sensors';
            else if (tab === 'materials') label = 'Casing Materials';
            else label = 'Sonic & Fluid Dynamics';

            return (
              <button
                key={tab}
                id={`blueprint-tab-btn-${tab}`}
                onClick={() => setActiveTab(tab)}
                className={`py-3 px-4 uppercase tracking-wider shrink-0 relative cursor-pointer -mb-px transition-colors duration-300 ${
                  activeTab === tab
                    ? 'text-orange-600 font-bold border-b-2 border-orange-500'
                    : 'text-neutral-450 hover:text-neutral-800'
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        {/* Tab Content Panels */}
        <div className="bg-white border border-neutral-200/80 rounded-3xl p-6 sm:p-8 min-h-[180px] font-sans shadow-xs">
          <AnimatePresence mode="wait">
            {activeTab === 'architectural' && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-xs sm:text-sm text-left"
              >
                <div className="border-b border-neutral-100 pb-2.5 flex justify-between">
                  <span className="text-neutral-500">Model Identifier</span>
                  <span className="font-mono text-neutral-800 font-bold">{activeBlueprint.name}</span>
                </div>
                <div className="border-b border-neutral-100 pb-2.5 flex justify-between">
                  <span className="text-neutral-500">Outer Width Dimensions</span>
                  <span className="font-mono text-neutral-800">{activeBlueprint.width}</span>
                </div>
                <div className="border-b border-neutral-100 pb-2.5 flex justify-between">
                  <span className="text-neutral-500">Outer Depth Requirements</span>
                  <span className="font-mono text-neutral-800">{activeBlueprint.depth}</span>
                </div>
                <div className="border-b border-neutral-100 pb-2.5 flex justify-between">
                  <span className="text-neutral-500">Outer Height Dimensions</span>
                  <span className="font-mono text-neutral-800">{activeBlueprint.height}</span>
                </div>
                <div className="border-b border-neutral-100 pb-2.5 flex justify-between col-span-1 md:col-span-2">
                  <span className="text-neutral-500 font-medium">Recommended Recess Cutout Width</span>
                  <span className="font-mono text-orange-600 font-bold">{activeBlueprint.cutoutWidth}</span>
                </div>
                <div className="text-[11px] text-neutral-450 leading-normal col-span-1 md:col-span-2 flex gap-1.5 mt-2">
                  <Info className="w-4.5 h-4.5 text-orange-500 shrink-0" />
                  <span>Always check the provided complete PDF Installation Blueprints before finalizing gypsum casing, marble wall cavities, or commercial millwork recess openings.</span>
                </div>
              </motion.div>
            )}

            {activeTab === 'safety' && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="space-y-4 text-left"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-neutral-50/50 rounded-xl border border-neutral-200/55 flex items-start gap-4">
                    <Check className="w-4.5 h-4.5 text-green-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold text-neutral-800 block">Auto Fill & Overflow Cutoff</span>
                      <span className="text-neutral-500 text-[11px] leading-normal block mt-1 font-light">Sensors detect water volume (or ethanol volume) limits to prevent tank overflow or dry running conditions.</span>
                    </div>
                  </div>
                  <div className="p-4 bg-neutral-50/50 rounded-xl border border-neutral-200/55 flex items-start gap-4">
                    <Check className="w-4.5 h-4.5 text-green-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold text-neutral-800 block">Dynamic Thermal Shutdown</span>
                      <span className="text-neutral-500 text-[11px] leading-normal block mt-1 font-light">Advanced thermistors trigger immediate shutdown loops in case of sub-ambient draft variations or overheating.</span>
                    </div>
                  </div>
                  <div className="p-4 bg-neutral-50/50 rounded-xl border border-neutral-200/55 flex items-start gap-4">
                    <Check className="w-4.5 h-4.5 text-green-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold text-neutral-800 block">Seismic Tilt Detectors</span>
                      <span className="text-neutral-500 text-[11px] leading-normal block mt-1 font-light">Shuts off active misting valves or flame plates if a tilt draft beyond 15 degrees is registered.</span>
                    </div>
                  </div>
                  <div className="p-4 bg-neutral-50/50 rounded-xl border border-neutral-200/55 flex items-start gap-4">
                    <Check className="w-4.5 h-4.5 text-green-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold text-neutral-800 block">Enclosed Low-Voltage Core</span>
                      <span className="text-neutral-500 text-[11px] leading-normal block mt-1 font-light">24V electrical stepdowns isolate moisture regions from core electronic mainboards completely.</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'materials' && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-neutral-600 font-light text-left"
              >
                <div className="p-4 bg-neutral-50/50 rounded-xl border border-neutral-200/55 space-y-2 font-sans">
                  <span className="font-bold text-neutral-800 block">Aero-grade SUS304 Structural Steel</span>
                  <p className="text-[11px] text-neutral-500 leading-relaxed font-light">
                    Every casing outer is constructed with premium grade high tensile cold-rolled double-walled stainless steel to prevent warping, oxidization or structural corrosion under maximum humidity or intense thermal heat.
                  </p>
                </div>
                <div className="p-4 bg-neutral-50/50 rounded-xl border border-neutral-200/55 space-y-2 font-sans">
                  <span className="font-bold text-neutral-800 block">Matte-Stealth Ceramic Coating</span>
                  <p className="text-[11px] text-neutral-500 leading-relaxed font-light">
                    Surfaces feature advanced dual-layered high temperature ceramic dust coatings resisting scratching, fingerprint markings, and preserving deep obsidian black light traps that accentuate flame contrast.
                  </p>
                </div>
              </motion.div>
            )}

            {activeTab === 'dynamics' && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-neutral-600 font-light text-left font-sans"
              >
                <div className="p-4 bg-neutral-50/50 rounded-xl border border-neutral-200/55 space-y-2">
                  <span className="font-bold text-neutral-800 block">Ultrasonic Hydro-Sonic Transducers</span>
                  <p className="text-[11px] text-neutral-500 leading-relaxed font-light">
                    Proprietary heavy-duty ceramic transducers vibrate at 2.4 MHz to break filtered water into sub-5 micron super fine cold dry droplets, mimicking real flame motion without raising room humidity levels.
                  </p>
                </div>
                <div className="p-4 bg-neutral-50/50 rounded-xl border border-neutral-200/55 space-y-2">
                  <span className="font-bold text-neutral-800 block">Pure Botanical Liquid Burners</span>
                  <p className="text-[11px] text-neutral-500 leading-relaxed font-light">
                    Engineered to perfectly atomize eco-focused pure botanical bioethanol, minimizing chemical soot build-up while releasing a safe wood-burning warmth spectrum of up to 35,000 BTU/h.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* 3. Complete Comparison Matrix ("Safety Standards vs Competitors") (All beautiful light style!) */}
      <section className="py-20 bg-white border-t border-b border-neutral-200/60 px-6 md:px-12 font-sans">
        <div className="max-w-6xl mx-auto space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-600 font-mono">Structural Assurance</span>
            <h2 className="font-sans text-3xl font-bold text-neutral-900 tracking-tight">
              Flames Quality Standards vs Alternatives
            </h2>
            <p className="font-sans text-neutral-500 text-xs sm:text-sm font-light">
              Don't compromise on building safety. Check why our architectural casing is the premier choice for luxury development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-sans text-left">
            
            {/* Flames Standard Card */}
            <div className="bg-[#FAF9F6] border border-orange-500/30 p-8 rounded-3xl flex flex-col justify-between shadow-xs relative">
              <div className="absolute top-0 right-10 w-20 h-20 bg-orange-500/[0.03] filter blur-2xl rounded-full" />
              <div>
                <div className="flex items-center gap-2 mb-6 font-sans">
                  <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse" />
                  <h4 className="text-sm font-bold uppercase tracking-widest text-neutral-800 font-mono">Flames Original</h4>
                </div>
                <ul className="space-y-4 text-xs font-light text-neutral-600">
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Double-Walled SUS304 military grade casing blocks heat diffusion safely.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Gold-plated ultrasonic transducers ensure ultra-dense consistent mist profiles.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Auto-fill valves plus electronic level shutoffs prevent any water damage risk.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-650 shrink-0 mt-0.5" />
                    <span>Silent magnetic fans with fluid bearings for zero low-frequency resonant hum.</span>
                  </li>
                </ul>
              </div>
              <div className="border-t border-neutral-200 pt-6 mt-8 font-mono">
                <span className="text-[10px] tracking-widest text-orange-600 block mb-1 font-bold">REGIONAL WARRANTY</span>
                <span className="text-xs text-neutral-800 font-bold">3-Year Regional Coverage Warranty</span>
              </div>
            </div>

            {/* Competitor / Replica Card */}
            <div className="bg-white border border-neutral-200/80 p-8 rounded-3xl flex flex-col justify-between">
              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-neutral-400 font-mono mb-6">Generic Replicas</h4>
                <ul className="space-y-4 text-xs font-light text-neutral-500">
                  <li className="flex items-start gap-2.5">
                    <span className="text-red-550 font-bold shrink-0 mt-0.5 font-mono">✕</span>
                    <span>Single-walled thin tin casing leaks thermal heat, risking gypsum wall cracks.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-red-550 font-bold shrink-0 mt-0.5 font-mono">✕</span>
                    <span>Cheap toy transducers sputter droplets, causing large surface puddle build-ups.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-red-550 font-bold shrink-0 mt-0.5 font-mono">✕</span>
                    <span>No auto-cutoff sensors, exposing rooms to hazardous electrical fire hazards.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-red-550 font-bold shrink-0 mt-0.5 font-mono">✕</span>
                    <span>Noisy ventilation fan hum disrupts peaceful domestic living areas.</span>
                  </li>
                </ul>
              </div>
              <div className="border-t border-neutral-200 pt-6 mt-8 font-mono">
                <span className="text-[10px] tracking-widest text-neutral-400 block mb-1 font-bold">WARRANTY STATUS</span>
                <span className="text-xs text-neutral-400 italic">None or standard 7-day swap</span>
              </div>
            </div>

            {/* Wood/Gas Systems Card */}
            <div className="bg-white border border-neutral-200/80 p-8 rounded-3xl flex flex-col justify-between">
              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-neutral-400 font-mono mb-6">Wood & Gas Units</h4>
                <ul className="space-y-4 text-xs font-light text-neutral-500">
                  <li className="flex items-start gap-2.5">
                    <span className="text-neutral-400 font-bold shrink-0 mt-0.5 font-mono">―</span>
                    <span>Mandatory structural masonry, chimneys and municipal venting permits.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-neutral-400 font-bold shrink-0 mt-0.5 font-mono">―</span>
                    <span>Releases toxic particulate matter, soot residue, and carbon monoxide.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-neutral-400 font-bold shrink-0 mt-0.5 font-mono">―</span>
                    <span>High recurring operational fuel wood/piped gas structural hookup expense.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-neutral-400 font-bold shrink-0 mt-0.5 font-mono">―</span>
                    <span>Constant wood ash cleaning, maintenance inspections and regulatory checks.</span>
                  </li>
                </ul>
              </div>
              <div className="border-t border-neutral-200 pt-6 mt-8 font-mono">
                <span className="text-[10px] tracking-widest text-neutral-400 block mb-1 font-bold">VENTILATION REQ</span>
                <span className="text-xs text-red-500 font-bold">100% Mandatory Chimney / Flue</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. Product-Specific Accordion FAQs (Light Theme!) */}
      <section className="py-20 px-6 max-w-4xl mx-auto font-sans">
        <div className="space-y-3 mb-12 text-center">
          <span className="text-orange-600 font-mono text-[10px] uppercase font-bold tracking-widest block font-bold">Client Q&A Matrix</span>
          <h2 className="font-sans text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
            Frequently Asked Questions: {product.name}
          </h2>
        </div>

        <div className="space-y-4 font-sans text-sm text-left">
          {product.faqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-neutral-200/70 rounded-2xl overflow-hidden transition-all duration-305 hover:border-orange-300"
              >
                <button
                  id={`faq-accordion-toggle-${product.id}-${idx}`}
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-6 flex justify-between items-center text-neutral-800 font-bold font-sans hover:text-orange-600 transition-colors cursor-pointer"
                >
                  <span className="pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-neutral-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-orange-500' : 'rotate-0'
                    }`}
                  />
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-[300px] border-t border-neutral-200/50 p-6 bg-[#FAF9F6]' : 'max-h-0'
                  }`}
                >
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-light">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
