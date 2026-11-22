'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowUp, ArrowUpRight, Flame, MapPin, Phone, Mail, Instagram, Youtube, Clock, Sparkles, ShieldCheck, MessageSquare } from 'lucide-react';
import { siteConfig } from '@/data/site-config';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { PrivacySecurityModal, WhatsAppShareModal } from '@/components/ui/FloatingActions';

export function Footer() {
  const [securityModalOpen, setSecurityModalOpen] = useState(false);
  const [shareModalOpen, setShareModalOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const { brand, location, contact } = siteConfig;

  return (
    <footer className="relative bg-slv-charcoal text-white overflow-hidden border-t border-slv-red/20">
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-b from-slv-red/10 via-slv-orange/5 to-transparent blur-3xl pointer-events-none" />

      {/* Main Call to Action Block */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-24 pb-16 relative z-10">
        <div className="flex flex-col items-start gap-8 border-b border-white/10 pb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slv-red/10 border border-slv-red/30 text-xs font-bold text-slv-orange tracking-widest uppercase">
            <Flame className="w-3.5 h-3.5 text-slv-red" />
            <span>Serving Hot &amp; Fresh Everyday</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 w-full">
            <div>
              <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-black tracking-tight leading-[0.95] uppercase">
                FRESH FLAVORS. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slv-red via-slv-orange to-slv-yellow">
                  ENDLESS CHOICE.
                </span>
              </h2>
              <p className="text-sm sm:text-base text-white/60 max-w-xl mt-4 font-sans leading-relaxed">
                Experience the finest fire-tossed noodles, aromatic fried rice, crispy chicken delicacies, and fresh rolls crafted with authentic culinary pride.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#menu"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-slv-red to-slv-orange text-white font-bold text-xs uppercase tracking-widest shadow-glow hover:scale-105 transition-all duration-300"
                data-cursor="MENU"
              >
                Explore Full Menu
              </a>

              <button
                onClick={() => setShareModalOpen(true)}
                className="px-6 py-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-widest transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-emerald-600/30"
                data-cursor="SHARE"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Share on WhatsApp</span>
              </button>

              <a
                href="#location"
                className="px-6 py-4 rounded-full bg-white/5 hover:bg-white/10 text-white font-bold text-xs uppercase tracking-widest border border-white/15 transition-all duration-300"
                data-cursor="DIRECTIONS"
              >
                Visit Location
              </a>
            </div>
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 py-16 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slv-red to-slv-orange flex items-center justify-center font-display font-black text-xl text-white shadow-glow">
                S
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-lg tracking-wider text-white">
                  {brand.name}
                </span>
                <span className="text-[10px] tracking-widest uppercase text-slv-orange font-mono">
                  {brand.tagline}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-white/60 max-w-sm leading-relaxed mt-2 font-sans">
              A premier neighborhood food court offering authentic Indo-Chinese, street delicacies, hot appetizers, and satisfying meal combos prepared live on order.
            </p>

            {/* Privacy & Security Verified Callout */}
            <button
              onClick={() => setSecurityModalOpen(true)}
              className="mt-2 p-3 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/25 flex items-center gap-3 max-w-sm text-left transition-colors group"
            >
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 group-hover:scale-110 transition-transform" />
              <div>
                <span className="text-emerald-400 block font-mono uppercase text-[10px] font-bold">Privacy Guaranteed</span>
                <span className="text-white/80 text-xs">Zero tracking &bull; 100% Client-side safe</span>
              </div>
            </button>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-bold tracking-widest uppercase text-slv-orange mb-4 font-mono">
              DISCOVER
            </h3>
            <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-white/70">
              <li>
                <a href="#hero" className="hover:text-slv-red transition-colors">
                  Home Experience
                </a>
              </li>
              <li>
                <a href="#story" className="hover:text-slv-red transition-colors">
                  Our Culinary Story
                </a>
              </li>
              <li>
                <a href="#showcase" className="hover:text-slv-red transition-colors">
                  Signature Dishes
                </a>
              </li>
              <li>
                <a href="#specialties" className="hover:text-slv-red transition-colors">
                  Chef Specialties
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-slv-red transition-colors">
                  Brand Showcase
                </a>
              </li>
              <li>
                <button
                  onClick={() => setShareModalOpen(true)}
                  className="hover:text-emerald-400 transition-colors text-left flex items-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Share on WhatsApp</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Menu Categories */}
          <div>
            <h3 className="text-xs font-bold tracking-widest uppercase text-slv-orange mb-4 font-mono">
              MENU SECTIONS
            </h3>
            <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-white/70">
              <li>
                <a href="#menu" className="hover:text-slv-orange transition-colors">
                  Fire-Tossed Noodles
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-slv-orange transition-colors">
                  Aromatic Fried Rice
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-slv-orange transition-colors">
                  Chicken Specials
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-slv-orange transition-colors">
                  Savory Gourmet Rolls
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-slv-orange transition-colors">
                  Crispy Hot Snacks
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-slv-orange transition-colors">
                  Vegetarian Specialties
                </a>
              </li>
            </ul>
          </div>

          {/* Location & Contact */}
          <div>
            <h3 className="text-xs font-bold tracking-widest uppercase text-slv-orange mb-4 font-mono">
              VISIT &amp; CONNECT
            </h3>
            <ul className="flex flex-col gap-3 text-xs text-white/70">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-slv-red shrink-0 mt-0.5" />
                <span>{location.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-slv-red shrink-0" />
                <a href={`tel:${contact.phone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
                  {contact.displayPhone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-slv-red shrink-0" />
                <a href={`mailto:${contact.email}`} className="hover:text-white transition-colors">
                  {contact.email}
                </a>
              </li>
              <li className="pt-2 flex items-center gap-3">
                <a
                  href={contact.instagram.url}
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-lg bg-white/5 hover:bg-slv-red hover:text-white flex items-center justify-center transition-all"
                  aria-label="Instagram"
                  data-cursor="INSTAGRAM"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={contact.youtube.url}
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-lg bg-white/5 hover:bg-slv-red hover:text-white flex items-center justify-center transition-all"
                  aria-label="YouTube"
                  data-cursor="YOUTUBE"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div className="flex items-center gap-4 flex-wrap">
            <span>&copy; {new Date().getFullYear()} {brand.name}. All rights reserved.</span>
            <span className="text-white/20">&bull;</span>
            <button
              onClick={() => setSecurityModalOpen(true)}
              className="text-emerald-400 hover:underline flex items-center gap-1 font-mono text-[11px]"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Privacy &amp; Data Security Policy</span>
            </button>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[11px] uppercase tracking-wider text-white/40 hidden sm:inline">
              Fresh Quality &bull; Community &bull; Hospitality
            </span>

            <MagneticButton strength={0.3}>
              <button
                onClick={scrollToTop}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-slv-red hover:text-white flex items-center justify-center transition-all duration-300"
                aria-label="Back to top"
                data-cursor="TOP"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </MagneticButton>
          </div>
        </div>
      </div>

      {/* Modals */}
      <PrivacySecurityModal isOpen={securityModalOpen} onClose={() => setSecurityModalOpen(false)} />
      <WhatsAppShareModal isOpen={shareModalOpen} onClose={() => setShareModalOpen(false)} />
    </footer>
  );
}
