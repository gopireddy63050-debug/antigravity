'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Navigation,
  Car,
  Bike,
  MessageSquare,
  Copy,
  Check,
  Sparkles,
  ArrowUpRight,
  Flame,
  ShieldCheck,
  Lock,
  ExternalLink,
} from 'lucide-react';
import { siteConfig } from '@/data/site-config';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { PrivacySecurityModal } from '@/components/ui/FloatingActions';
import { WhatsAppShareModal } from '@/components/ui/FloatingActions';

export function LocationSection() {
  const { location } = siteConfig;

  return (
    <section id="location" className="py-24 sm:py-32 px-5 sm:px-8 lg:px-12 bg-slv-dark-card/60 relative overflow-hidden border-t border-slv-red/15">
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-slv-orange/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-slv-red/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col gap-16 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slv-red/20 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slv-red/15 border border-slv-red/35 text-slv-orange text-xs font-sans font-bold uppercase tracking-wider mb-3">
              <MapPin className="w-3.5 h-3.5" />
              <span>VISIT OUR FOOD COURT</span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-black tracking-tight text-white leading-none">
              FIND US.
            </h2>
          </div>

          <p className="text-sm sm:text-base text-white/70 font-serif max-w-md">
            Located in the bustling heart of town on Old Jail Road. Easy parking, cozy dining, and lightning-fast takeaway service.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-5 flex flex-col justify-between gap-6 p-8 rounded-3xl bg-slv-dark-card border border-slv-red/30 shadow-slv-card">
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-slv-red/20 border border-slv-red/40 text-slv-orange shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-sans font-bold uppercase tracking-widest text-slv-orange">
                    Official Address
                  </span>
                  <h3 className="text-2xl font-serif font-black text-white mt-1">
                    {location.address}
                  </h3>
                  <p className="text-xs text-white/60 font-sans mt-1">
                    Landmark: {location.landmark}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-6 border-t border-slv-red/15">
                <div className="p-3 rounded-2xl bg-slv-orange/20 border border-slv-orange/40 text-slv-orange shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-sans font-bold uppercase tracking-widest text-slv-orange">
                    Kitchen Operating Hours
                  </span>
                  <p className="text-sm font-serif font-bold text-white mt-1">
                    {location.operatingHours.weekdays}
                  </p>
                  <p className="text-sm font-serif font-bold text-white">
                    {location.operatingHours.weekends}
                  </p>
                  <span className="text-[11px] font-sans text-emerald-400 mt-1 inline-block font-semibold">
                    ✓ Open 7 Days a Week
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-6 border-t border-slv-red/15">
                <div className="p-3.5 rounded-2xl bg-slv-charcoal border border-slv-red/15 flex items-center gap-3">
                  <Car className="w-5 h-5 text-slv-orange shrink-0" />
                  <span className="text-xs text-white/80 font-sans font-semibold">Car Parking Available</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-slv-charcoal border border-slv-red/15 flex items-center gap-3">
                  <Bike className="w-5 h-5 text-slv-red shrink-0" />
                  <span className="text-xs text-white/80 font-sans font-semibold">Quick Two-Wheeler Bay</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slv-red/15">
              <MagneticButton strength={0.25} className="w-full">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.address)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-4 rounded-full bg-gradient-to-r from-slv-red to-slv-orange text-white font-sans font-extrabold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-slv-glow hover:scale-[1.02] transition-transform"
                  data-cursor="MAP"
                >
                  <Navigation className="w-4 h-4" />
                  <span>GET GOOGLE MAPS DIRECTIONS</span>
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </MagneticButton>
            </div>
          </div>

          <div className="lg:col-span-7 relative rounded-3xl overflow-hidden bg-slv-charcoal border border-slv-red/30 shadow-slv-card min-h-[380px] flex flex-col justify-between p-8 sm:p-10">
            <div className="absolute inset-0 bg-slv-charcoal opacity-95" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slv-red/20 via-slv-charcoal/80 to-slv-charcoal pointer-events-none" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#341212_1px,transparent_1px),linear-gradient(to_bottom,#341212_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-35" />

            <div className="relative z-10 flex flex-col items-center justify-center m-auto text-center gap-3">
              <div className="relative">
                <div className="w-20 h-20 rounded-full bg-slv-red/30 animate-ping absolute inset-0 m-auto" />
                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-slv-red to-slv-orange text-white flex items-center justify-center shadow-slv-glow relative z-10">
                  <MapPin className="w-8 h-8" />
                </div>
              </div>

              <div className="flex flex-col items-center gap-1">
                <span className="font-serif font-black text-2xl text-white">
                  SLV FOOD COURT
                </span>
                <span className="text-xs font-sans font-bold text-slv-orange uppercase tracking-wider bg-slv-dark-card/90 px-3.5 py-1 rounded-full border border-slv-red/30">
                  Behind New Lucky Shopping Mall · Old Jail Road
                </span>
                <p className="text-xs text-white/60 font-sans max-w-sm mt-1">
                  Step in for piping hot Chicken 65, wok fried rice, and fresh egg noodles served straight from the flame.
                </p>
              </div>
            </div>

            <div className="relative z-10 flex items-center justify-between text-xs font-sans text-white/60 pt-4 border-t border-slv-red/20">
              <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Dine-In &amp; Takeaway Active
              </span>
              <span>Khammam, Telangana</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [securityModalOpen, setSecurityModalOpen] = useState(false);
  const [shareModalOpen, setShareModalOpen] = useState(false);
  const { contact } = siteConfig;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 px-5 sm:px-8 lg:px-12 bg-slv-dark-card/80 relative overflow-hidden border-t border-slv-red/15">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-slv-red/15 via-slv-orange/15 to-transparent blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col gap-16 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slv-red/20 pb-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slv-red/10 border border-slv-red/20 text-slv-orange text-xs font-bold uppercase tracking-widest mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Connect With Us</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black text-white tracking-tight uppercase leading-[1.05]">
              GET IN TOUCH <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slv-red via-slv-orange to-slv-yellow">
                &amp; TASTE THE PASSION.
              </span>
            </h2>
          </div>
          <div className="flex flex-col gap-3 max-w-md">
            <p className="text-sm sm:text-base text-white/70 font-sans leading-relaxed">
              Planning a celebration, group food order, or craving the best street-gourmet woks in town? We are always delighted to welcome you.
            </p>
            <button
              onClick={() => setSecurityModalOpen(true)}
              className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 hover:text-emerald-300 transition-colors self-start"
              data-cursor="SECURITY"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span className="underline underline-offset-4">Privacy &amp; Personal Info Guaranteed 100% Safe</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-2xl bg-slv-charcoal/90 border border-slv-red/25 hover:border-slv-red/60 transition-all duration-300 flex flex-col justify-between group shadow-lg"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-slv-red/10 border border-slv-red/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6 text-slv-red" />
              </div>
              <span className="text-xs font-mono uppercase tracking-widest text-slv-orange/80">Direct Front Counter</span>
              <h3 className="text-2xl font-display font-bold text-white mt-2 mb-3">
                {contact.displayPhone}
              </h3>
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-sans">
                Call our counter directly for takeaway orders, party reservations, or daily specials. No automated phone trees.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
              <a
                href={`tel:${contact.phone.replace(/\s+/g, '')}`}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slv-orange hover:text-white transition-colors"
                data-cursor="CALL"
              >
                <span>Call Counter</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <span className="text-[11px] font-mono text-emerald-400">Lines Open 11:30 AM</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-8 rounded-2xl bg-slv-charcoal/90 border border-emerald-500/25 hover:border-emerald-500/60 transition-all duration-300 flex flex-col justify-between group shadow-lg"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <MessageSquare className="w-6 h-6 text-emerald-400" />
              </div>
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">WhatsApp Instant Connect</span>
              <h3 className="text-2xl font-display font-bold text-white mt-2 mb-3">
                Instant Chat &amp; Share
              </h3>
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-sans">
                Send a quick WhatsApp message to check item availability, pre-order for quick pickup, or share the menu link.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
              <button
                onClick={() => setShareModalOpen(true)}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400 hover:text-white transition-colors"
                data-cursor="WHATSAPP"
              >
                <span>Open WhatsApp Tools</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
              <span className="text-[11px] font-mono text-emerald-400">Direct Link</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-8 rounded-2xl bg-slv-charcoal/90 border border-slv-red/25 hover:border-slv-red/60 transition-all duration-300 flex flex-col justify-between group shadow-lg"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-slv-red/10 border border-slv-red/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6 text-slv-orange" />
              </div>
              <span className="text-xs font-mono uppercase tracking-widest text-slv-orange/80">Catering &amp; Events</span>
              <h3 className="text-xl font-display font-bold text-white mt-2 mb-3 break-all">
                {contact.email}
              </h3>
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-sans">
                For bulk celebration orders, college fests, office lunches, or brand collaborations. Replies within 24 hours.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-white/5 flex items-center gap-3">
              <a
                href={`mailto:${contact.email}`}
                className="flex-1 py-3 px-4 rounded-xl bg-slv-red hover:bg-slv-red-hover text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                data-cursor="EMAIL"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email Us</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="p-3 rounded-xl bg-white/5 hover:bg-white/10 text-white/80 hover:text-white border border-white/10 transition-colors"
                title="Copy Email Address"
                data-cursor="COPY"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </motion.div>
        </div>

        <div className="p-6 sm:p-8 rounded-2xl bg-slv-charcoal/90 border border-emerald-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
              <Lock className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <h4 className="text-sm font-display font-bold text-white uppercase tracking-wider">
                100% Personal Information &amp; Privacy Protected
              </h4>
              <p className="text-xs text-white/60 font-sans mt-0.5">
                We never store personal customer data, tracking cookies, or browsing history. Your visit is strictly confidential.
              </p>
            </div>
          </div>

          <button
            onClick={() => setSecurityModalOpen(true)}
            className="px-4 py-2 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/40 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider transition-colors shrink-0"
            data-cursor="POLICY"
          >
            Review Security Policy
          </button>
        </div>

        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-slv-red/20 via-slv-charcoal to-slv-orange/15 border border-slv-red/30 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex flex-col gap-3 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 text-slv-orange text-xs font-bold uppercase tracking-widest">
              <Flame className="w-4 h-4 text-slv-red" />
              <span>Dine In or Takeaway</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-display font-black text-white uppercase tracking-tight">
              Ready to savor the authentic fire?
            </h3>
            <p className="text-sm text-white/70 max-w-xl font-sans">
              Visit us behind New Lucky Shopping Mall on Old Jail Road. Watch our chefs toss fresh noodles and sizzle crispy Manchurian right before your eyes.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <MagneticButton strength={0.25}>
              <a
                href="#menu"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-slv-red to-slv-orange text-white font-bold text-xs uppercase tracking-widest shadow-glow hover:scale-105 transition-all duration-300"
                data-cursor="EXPLORE"
              >
                Browse Menu
              </a>
            </MagneticButton>

            <MagneticButton strength={0.25}>
              <button
                onClick={() => setShareModalOpen(true)}
                className="px-8 py-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-widest transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-emerald-600/30"
                data-cursor="SHARE"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Share via WhatsApp</span>
              </button>
            </MagneticButton>
          </div>
        </div>
      </div>

      <PrivacySecurityModal isOpen={securityModalOpen} onClose={() => setSecurityModalOpen(false)} />
      <WhatsAppShareModal isOpen={shareModalOpen} onClose={() => setShareModalOpen(false)} />
    </section>
  );
}
