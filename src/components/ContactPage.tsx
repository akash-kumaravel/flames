import React, { useState } from 'react';
import { Calendar, PhoneCall, ShieldCheck, Mail, ArrowRight, Check, Send, Sparkles, MessageCircle, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [productInterest, setProductInterest] = useState('vapor-fireplace');
  const [projectDetails, setProjectDetails] = useState('');
  
  // Interactive Custom Estimator States
  const [desiredLength, setDesiredLength] = useState<number>(120); // in cm
  const [includeAppControl, setIncludeAppControl] = useState<boolean>(true);
  const [selectedFinish, setSelectedFinish] = useState<'brushed-steel' | 'midnight-matte' | 'titanium-brass'>('midnight-matte');

  // Submit flow states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Dynamic Quote Estimator Formula
  // Base cost per cm is roughly AED 32. 
  // Accessories: smart app control adds AED 450.
  // Premium metallic finishes: steel is standard, midnight is +AED 300, titanium is +AED 600.
  const calculateEstimate = () => {
    let basePrice = desiredLength * 32.5;
    if (productInterest === 'vapor-fireplace') {
      basePrice += 800; // ultrasonic modules cost slightly more
    } else if (productInterest === 'outdoor-ethanol') {
      basePrice += 1100; // weatherproofing materials
    }
    
    if (includeAppControl) basePrice += 450;
    
    if (selectedFinish === 'midnight-matte') basePrice += 300;
    if (selectedFinish === 'titanium-brass') basePrice += 650;
    
    return Math.round(basePrice);
  };

  const currentEstimate = calculateEstimate();

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone) {
      alert('Please fill out all required fields.');
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate real server delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <div id="contact-enquiry-page" className="pt-28 pb-20 px-6 md:px-12 bg-neutral-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-semibold uppercase tracking-widest font-sans">
            Contact &amp; Quotes
          </span>
          <h1 className="font-sans font-semibold text-3xl md:text-5xl text-neutral-900 tracking-tight mt-4 mb-3">
            Get a Personalized Quote
          </h1>
          <p className="font-sans text-sm text-neutral-500 leading-relaxed">
            Tell us about your architectural project. Use our configuration tool on the right to simulate your desired dimensions and review real pricing estimates instantly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Block: The Contact Form */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-8 border border-neutral-200/50 shadow-xs">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                /* 1. INITIAL FORM ENTRY STATE */
                <motion.form
                  key="contact-form"
                  onSubmit={handleFormSubmit}
                  className="space-y-6"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <h3 className="font-sans text-lg font-semibold text-neutral-900 tracking-tight pb-3 border-b border-neutral-100">
                    Enquiry Details
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">
                        Full Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        placeholder="e.g. Akash Al-Maktoum"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-sm focus:outline-none focus:border-orange-500 font-sans"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">
                        Phone Number *
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        required
                        placeholder="e.g. +971 50 123 4567"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-sm focus:outline-none focus:border-orange-500 font-sans"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="e.g. akash@luxuryinteriors.ae"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-sm focus:outline-none focus:border-orange-500 font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">
                      Product Architecture Type
                    </label>
                    <select
                      id="contact-product"
                      value={productInterest}
                      onChange={(e) => setProductInterest(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-sm focus:outline-none focus:border-orange-500 font-sans cursor-pointer h-12"
                    >
                      <option value="vapor-fireplace">3D Water Vapor Fireplace (Zero Heat, Multi-Color)</option>
                      <option value="indoor-ethanol">Indoor Bio Ethanol Fireplace (Real Heat, Chimneyless)</option>
                      <option value="outdoor-ethanol">Outdoor Bio Ethanol Fireplace (Weather-Resistant)</option>
                      <option value="not-sure">Not Sure — Request Technical Advisory</option>
                    </select>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                        Project/Message Details
                      </label>
                      <span className="text-[10px] text-neutral-400">Optional</span>
                    </div>
                    <textarea
                      id="contact-message"
                      rows={4}
                      placeholder="Describe your wall material, room size, or custom housing dimensions..."
                      value={projectDetails}
                      onChange={(e) => setProjectDetails(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-sm focus:outline-none focus:border-orange-500 font-sans"
                    />
                  </div>

                  {/* Submission triggers */}
                  <button
                    id="submit-enquiry-btn"
                    disabled={isSubmitting} // check state
                    type="submit"
                    className="w-full py-4 rounded-xl bg-neutral-900 hover:bg-orange-500 text-white font-sans text-sm font-semibold transition-all duration-300 shadow-lg shadow-orange-500/5 hover:shadow-orange-500/15 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isScmittingState() ? (
                      <span className="flex items-center gap-2 animate-pulse">
                        <Sparkles className="w-4 h-4 animate-spin" />
                        Transmitting to CRM...
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Project Enquiry
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                /* 2. TRANSACTION SUCCESS STATE SHOWING CALCULATED BILL SHEET */
                <motion.div
                  key="success-receipt"
                  className="space-y-6 pt-2"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-center py-6">
                    <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-650 mx-auto mb-4">
                      <Check className="w-7 h-7" />
                    </div>
                    <h3 className="font-sans text-xl font-semibold text-neutral-900 tracking-tight">
                      Enquiry Submitted Successfully!
                    </h3>
                    <p className="font-sans text-xs text-neutral-500 mt-2">
                      Thank you, <strong className="text-neutral-800">{name}</strong>. Your structured project estimate sheet has been generated for review:
                    </p>
                  </div>

                  {/* Calculated Project Casing Specification Receipt Sheet */}
                  <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-200/60 font-sans text-xs space-y-4">
                    <div className="flex items-center gap-2 pb-3 border-b border-neutral-200">
                      <FileText className="w-4 h-4 text-orange-500" />
                      <span className="font-bold uppercase tracking-wider text-neutral-500 text-[10px]">
                        Flames Casing Specification Sheet
                      </span>
                    </div>

                    <div className="space-y-2 text-neutral-600">
                      <div className="flex justify-between">
                        <span>Lead Contact:</span>
                        <strong className="text-neutral-900">{name}</strong>
                      </div>
                      <div className="flex justify-between">
                        <span>Assigned Email:</span>
                        <strong className="text-neutral-900">{email}</strong>
                      </div>
                      <div className="flex justify-between">
                        <span>Fulfillment Number:</span>
                        <strong className="text-neutral-900">{phone}</strong>
                      </div>
                      <div className="flex justify-between pt-2 border-t border-dotted border-neutral-200">
                        <span>Selected Fireplace:</span>
                        <strong className="text-neutral-900 uppercase">
                          {productInterest === 'vapor-fireplace' && '3D Water Vapor'}
                          {productInterest === 'indoor-ethanol' && 'Indoor Bio Ethanol'}
                          {productInterest === 'outdoor-ethanol' && 'Outdoor Bio Ethanol'}
                          {productInterest === 'not-sure' && 'Aesthetic Assessment Needed'}
                        </strong>
                      </div>
                      <div className="flex justify-between">
                        <span>Modular Dimension Length:</span>
                        <strong className="text-neutral-900">{desiredLength} cm</strong>
                      </div>
                      <div className="flex justify-between">
                        <span>Premium Outer Finishes:</span>
                        <strong className="text-neutral-900 uppercase">
                          {selectedFinish.replace('-', ' ')}
                        </strong>
                      </div>
                      <div className="flex justify-between">
                        <span>Wi-Fi Smartphone App Integration:</span>
                        <strong className="text-neutral-900">{includeAppControl ? 'Yes (Shielded)' : 'Disabled'}</strong>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-neutral-300 flex justify-between items-center bg-orange-50/50 p-3 rounded-xl">
                      <span className="font-bold text-[10px] text-neutral-500 uppercase tracking-widest">
                        Estimate Status
                      </span>
                      <strong className="text-sm font-bold text-orange-600">
                        Quote on Request
                      </strong>
                    </div>
                  </div>

                  <p className="text-[11px] text-neutral-400 text-center leading-normal italic">
                    A copy of this calculated estimate has been sent to {email}. One of our architectural casing designers will ring you on {phone} within 1 business day.
                  </p>

                  <button
                    id="submit-another-btn"
                    onClick={() => setIsSubmitted(false)}
                    className="w-full py-2.5 rounded-lg border border-neutral-200 text-xs text-neutral-500 hover:text-neutral-800 transition text-center cursor-pointer font-semibold"
                  >
                    Configure Another Layout
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Block: The Modular Custom Dimension Quoting Tool */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-8 border border-neutral-200/50 shadow-xs space-y-6">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-orange-500 block mb-2">Interactive Casing Tool</span>
              <h3 className="font-sans text-xl font-semibold text-neutral-900 tracking-tight">
                Modular Dimension Configurator
              </h3>
              <p className="font-sans text-xs text-neutral-500 leading-normal mt-1">
                Drag the sliders to preview estimated budget rates based on standard UAE material and manufacturing logistics.
              </p>
            </div>

            {/* Scribing Length */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                  Desired Modular Length (cm)
                </label>
                <span className="text-xs font-bold text-neutral-800 bg-neutral-100 px-2 py-0.5 rounded-md">
                  {desiredLength} cm
                </span>
              </div>
              <input
                id="contact-length-slider"
                type="range"
                min="80"
                max="240"
                step="10"
                value={desiredLength}
                onChange={(e) => setDesiredLength(Number(e.target.value))}
                className="w-full accent-orange-500 bg-neutral-200 rounded-lg h-1"
              />
              <div className="flex justify-between text-[9px] text-neutral-400 font-mono uppercase mt-1">
                <span>Min: 80cm</span>
                <span>Max: 240cm</span>
              </div>
            </div>

            {/* Finish option selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2.5">
                Premium Outer Frame Finishing
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(['brushed-steel', 'midnight-matte', 'titanium-brass'] as const).map((finish) => {
                  const labelMap = {
                    'brushed-steel': 'Brushed Steel',
                    'midnight-matte': 'Midnight Matte',
                    'titanium-brass': 'Titanium Brass',
                  };
                  return (
                    <button
                      key={finish}
                      id={`finish-${finish}`}
                      onClick={() => setSelectedFinish(finish)}
                      className={`py-3 px-1 rounded-xl text-[10px] font-bold uppercase border cursor-pointer transition-all ${
                        selectedFinish === finish
                          ? 'border-neutral-900 bg-neutral-900 text-white shadow-xs'
                          : 'border-neutral-200 text-neutral-500 hover:border-neutral-450 hover:text-neutral-800'
                      }`}
                    >
                      {labelMap[finish]}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Smart Accessory checklist */}
            <div className="flex items-center justify-between p-4 bg-neutral-50 rounded-2xl border border-neutral-200/50">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-neutral-700 block">
                  Wi-Fi Alexa / Apple Integration
                </label>
                <span className="text-[10px] text-neutral-400">Allows vocal height and color trigger</span>
              </div>
              <button
                id="app-integration-toggle"
                onClick={() => setIncludeAppControl(!includeAppControl)}
                className={`w-12 h-6 rounded-full p-1 cursor-pointer transition-colors ${
                  includeAppControl ? 'bg-orange-500' : 'bg-neutral-200'
                }`}
              >
                <div
                  className={`bg-white w-4 h-4 rounded-full shadow-xs transition-transform transform ${
                    includeAppControl ? 'translate-x-6' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>

            {/* Estimated Quote Summary Sheet */}
            <div className="p-4 bg-orange-50/60 rounded-2xl border border-orange-100 flex justify-between items-center">
              <div>
                <span className="text-[9px] uppercase font-bold text-neutral-500 tracking-wider">
                  Estimate Status
                </span>
                <span className="block font-sans text-lg font-bold text-neutral-900 mt-1">
                  Quote on Request
                </span>
              </div>
              <div className="text-right">
                <span className="text-[9px] text-neutral-400 font-bold uppercase block leading-none">
                  Fulfillment Time
                </span>
                <span className="text-xs font-semibold text-neutral-700 mt-1 block">
                  3-5 Business Days
                </span>
              </div>
            </div>

          </div>

        </div>

        {/* Traditional Contact Info Sidebar Grid */}
        <section className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <a 
            href="https://wa.me/971542112891"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-8 rounded-3xl border border-neutral-200/50 flex flex-col justify-between hover:border-emerald-500 hover:shadow-lg transition-all duration-300 group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 group-hover:bg-emerald-500 group-hover:text-white transition-all">
              <MessageCircle className="w-5 h-5 fill-current" />
            </div>
            <div>
              <h4 className="font-sans font-semibold text-neutral-900 text-sm">WhatsApp Advisory</h4>
              <p className="font-sans text-xs text-neutral-500 mt-2 leading-relaxed">
                Chat with our design experts for immediate custom dimensions support, photos, or architectural query.
              </p>
              <span className="font-semibold block text-emerald-650 mt-3 text-sm flex items-center gap-1">
                +971 54 211 2891
                <span className="text-[10px] text-emerald-500 font-bold bg-emerald-50 px-2 py-0.5 rounded-full uppercase">Online</span>
              </span>
            </div>
          </a>

          <div className="bg-white p-8 rounded-3xl border border-neutral-200/50 flex flex-col justify-between">
            <div className="w-10 h-10 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center mb-4">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-sans font-semibold text-neutral-900 text-sm">Automated Email Queries</h4>
              <p className="font-sans text-xs text-neutral-500 mt-2 leading-relaxed">
                Transmit PDF architectural blueprints or space dimensions directly to our corporate validation group.
              </p>
              <span className="font-semibold block text-neutral-900 mt-3 text-sm">order@flamesfireplaces.ae</span>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-neutral-200/50 flex flex-col justify-between">
            <div className="w-10 h-10 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-sans font-semibold text-neutral-900 text-sm">Flames Guarantee Standard</h4>
              <p className="font-sans text-xs text-neutral-500 mt-2 leading-relaxed">
                All customized fireplace products are fully tested, and shipped in custom heavy-duty shockproof casing crates.
              </p>
              <span className="font-semibold block text-emerald-600 mt-3 text-xs uppercase tracking-wide">
                UAE Standard Fire Compliant
              </span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );

  function isScmittingState() {
    return isSubmitting;
  }
}
