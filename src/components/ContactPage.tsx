import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageCircle, CheckCircle2, Clock, Shield } from 'lucide-react';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [interest, setInterest] = useState('indoor-ethanol');
  const [message, setMessage] = useState('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // Quick basic validation
    if (!name.trim()) {
      setErrorMsg('Full Name is required.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setErrorMsg('A valid Email Address is required.');
      return;
    }
    if (!phone.trim()) {
      setErrorMsg('Phone Number is required.');
      return;
    }

    setIsSubmitting(true);

    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const generateWhatsAppLink = () => {
    const interestLabel = 
      interest === 'indoor-ethanol' ? 'Indoor Bio Ethanol Fireplace' :
      interest === 'outdoor-features' ? 'Outdoor Fire Features' : 'General Enquiry';

    const text = `Hi Flames Fireplace team, I'm reaching out from your website contact form:\n\n` +
      `- Name: ${name || 'Interested Client'}\n` +
      `- Email: ${email || 'Not provided'}\n` +
      `- Phone: ${phone || 'Not provided'}\n` +
      `- Interest: ${interestLabel}\n` +
      `- Message: ${message || 'I would like to request more information.'}`;

    return `https://wa.me/971542112891?text=${encodeURIComponent(text)}`;
  };

  return (
    <div id="contact-us-page-wrapper" className="min-h-screen bg-[#FAF9F6] text-neutral-800 pb-28 selection:bg-orange-500 selection:text-white">
      {/* Top Header Block */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-8 pb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <span className="px-3 py-1 rounded-full bg-orange-100/80 text-orange-700 text-[10px] font-bold uppercase tracking-widest font-mono">
            Get In Touch
          </span>
          <h1 className="font-sans font-medium text-3xl md:text-5xl text-neutral-900 tracking-tight max-w-2xl mx-auto leading-none">
            Contact Our Design Team
          </h1>
          <p className="font-sans text-xs md:text-sm text-neutral-500 max-w-xl mx-auto leading-relaxed">
            Have a project in mind? Fill out the contact form below, and our engineering advisory group will reach out within 1 business day to coordinate specifications.
          </p>
        </motion.div>
      </section>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Direct Contact Form */}
        <div className="lg:col-span-7 bg-white rounded-3xl border border-neutral-200/60 shadow-xs p-8 md:p-10">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="contact-form"
                onSubmit={handleFormSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <h2 className="font-sans font-semibold text-lg text-neutral-900">Send an Enquiry</h2>
                  <p className="text-xs text-neutral-400 font-sans">
                    Please provide your contact details and message below. Fields marked with * are required.
                  </p>
                </div>

                {errorMsg && (
                  <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-sans">
                    {errorMsg}
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div className="space-y-1.5 text-left">
                    <label htmlFor="contact-name" className="block text-[10px] font-bold uppercase tracking-wider text-neutral-500 font-mono">
                      Full Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="Full Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 focus:bg-white focus:outline-none focus:border-orange-500 transition-all font-sans text-xs h-12"
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-1.5 text-left">
                    <label htmlFor="contact-email" className="block text-[10px] font-bold uppercase tracking-wider text-neutral-500 font-mono">
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="hello@flamesfireplace.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 focus:bg-white focus:outline-none focus:border-orange-500 transition-all font-sans text-xs h-12"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Phone field */}
                  <div className="space-y-1.5 text-left">
                    <label htmlFor="contact-phone" className="block text-[10px] font-bold uppercase tracking-wider text-neutral-500 font-mono">
                      Phone Number (WhatsApp preferred) *
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      placeholder="e.g. +971 50 123 4567"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 focus:bg-white focus:outline-none focus:border-orange-500 transition-all font-sans text-xs h-12"
                    />
                  </div>

                  {/* Product Interest Selector */}
                  <div className="space-y-1.5 text-left">
                    <label htmlFor="contact-interest" className="block text-[10px] font-bold uppercase tracking-wider text-neutral-500 font-mono">
                      Product Interest *
                    </label>
                    <select
                      id="contact-interest"
                      value={interest}
                      onChange={(e) => setInterest(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 focus:bg-white focus:outline-none focus:border-orange-500 transition-all font-sans text-xs h-12 cursor-pointer"
                    >
                      <option value="indoor-ethanol">Indoor Bio Ethanol Fireplace</option>
                      <option value="outdoor-features">Outdoor Fire Feature</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>
                </div>

                {/* Message field */}
                <div className="space-y-1.5 text-left">
                  <label htmlFor="contact-message" className="block text-[10px] font-bold uppercase tracking-wider text-neutral-500 font-mono">
                    Your Message / Project Scope
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    placeholder="Tell us about your project dimensions, desired finish, or structural timeline..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 focus:bg-white focus:outline-none focus:border-orange-500 transition-all font-sans text-xs leading-relaxed resize-none"
                  />
                </div>

                {/* Form Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-neutral-900 hover:bg-orange-500 text-white font-sans text-xs font-semibold transition-all duration-300 shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                      Submitting Enquiry...
                    </span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Submit Form
                    </>
                  )}
                </button>
              </motion.form>
            ) : (
              /* Simple beautiful success message */
              <motion.div
                key="success-card"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-10 text-center space-y-6"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-100">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-sans font-bold text-2xl text-neutral-900">
                    Enquiry Submitted Successfully!
                  </h3>
                  <p className="font-sans text-xs text-neutral-500 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-neutral-800">{name}</strong>. Your message has been routed directly to our Dubai advisor group. We will be in touch with you shortly.
                  </p>
                </div>

                {/* Direct alternative actions */}
                <div className="pt-4 flex flex-col sm:flex-row gap-3 max-w-md mx-auto justify-center">
                  <a
                    href={generateWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-sans text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md shadow-emerald-500/10"
                  >
                    <MessageCircle className="w-4.5 h-4.5 fill-current" />
                    Chat on WhatsApp Now
                  </a>

                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setName('');
                      setEmail('');
                      setPhone('');
                      setMessage('');
                    }}
                    className="flex-1 py-3.5 rounded-xl border border-neutral-250 text-neutral-600 hover:text-neutral-900 font-sans text-xs font-semibold text-center transition-all cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right Column: Project Details */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Company Details Block */}
          <div className="bg-white rounded-3xl border border-neutral-200/60 shadow-xs p-6 md:p-8 space-y-6 text-left">
            <div className="space-y-1">
              <span className="text-[9px] font-mono font-bold text-orange-500 uppercase tracking-widest block">
                Office &amp; Support
              </span>
              <h3 className="font-sans font-bold text-base text-neutral-900">
                Contact Details
              </h3>
            </div>

            <div className="space-y-4">
              {/* Detail item: Location */}
              <div className="flex gap-4 items-start">
                <div className="p-3 rounded-xl bg-neutral-50 text-neutral-600 border border-neutral-100">
                  <MapPin className="w-4 h-4 text-orange-500" />
                </div>
                <div className="space-y-1 font-sans">
                  <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider block font-mono">Office Location</span>
                  <span className="text-xs font-semibold text-neutral-900 block leading-tight">Business Bay, Dubai, United Arab Emirates</span>
                </div>
              </div>

              {/* Detail item: Phone */}
              <div className="flex gap-4 items-start">
                <div className="p-3 rounded-xl bg-neutral-50 text-neutral-600 border border-neutral-100">
                  <Phone className="w-4 h-4 text-orange-500" />
                </div>
                <div className="space-y-1 font-sans">
                  <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider block font-mono">Direct Technical Line</span>
                  <a href="tel:+971542112891" className="text-xs font-semibold text-neutral-900 hover:text-orange-500 block leading-tight">
                    +971 54 211 2891
                  </a>
                </div>
              </div>

              {/* Detail item: Email */}
              <div className="flex gap-4 items-start">
                <div className="p-3 rounded-xl bg-neutral-50 text-neutral-600 border border-neutral-100">
                  <Mail className="w-4 h-4 text-orange-500" />
                </div>
                <div className="space-y-1 font-sans">
                  <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider block font-mono">Enquiries Email</span>
                  <a href="mailto:info@flamesfireplace.com" className="text-xs font-semibold text-neutral-900 hover:text-orange-500 block leading-tight">
                    info@flamesfireplace.com
                  </a>
                </div>
              </div>

              {/* Business Hours removed per request */}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
