'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Flame, MapPin, Phone } from 'lucide-react';
import { siteConfig } from '@/data/site-config';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { cn } from '@/lib/utils';

const NAV_LINKS = [
  { name: 'HOME', href: '#hero' },
  { name: 'STORY', href: '#story' },
  { name: 'SIGNATURES', href: '#showcase' },
  { name: 'MENU', href: '#menu' },
  { name: 'SPECIALTIES', href: '#specialties' },
  { name: 'PROJECTS', href: '#portfolio' },
  { name: 'VALUES', href: '#values' },
  { name: 'LOCATION', href: '#location' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['hero', 'story', 'showcase', 'menu', 'specialties', 'portfolio', 'values', 'location'];
      const scrollPos = window.scrollY + 200;

      for (const s of sections) {
        const el = document.getElementById(s);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(s);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-500 px-5 sm:px-8 py-4 sm:py-5',
          scrolled
            ? 'backdrop-blur-xl bg-slv-charcoal/85 shadow-slv-card border-b border-slv-red/20 !py-3'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Logo & Monogram */}
          <Link
            href="#hero"
            className="group flex items-center gap-3.5 focus:outline-none"
            data-cursor="HOME"
          >
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-tr from-slv-red to-slv-orange p-[1.5px] shadow-slv-glow transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-slv-charcoal rounded-[9.5px] flex items-center justify-center relative overflow-hidden">
                <span className="font-display font-black text-base sm:text-lg text-white tracking-tight">
                  SLV
                </span>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-slv-orange rounded-full blur-sm opacity-70" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-black text-base sm:text-lg tracking-wide uppercase text-white group-hover:text-slv-orange transition-colors">
                {siteConfig.brand.name}
              </span>
              <span className="text-[10px] tracking-widest uppercase text-white/50 font-sans font-semibold">
                {siteConfig.brand.tagline}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 px-3 py-1.5 rounded-full bg-slv-dark-card/80 border border-slv-red/20 backdrop-blur-md shadow-inner">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={cn(
                    'relative px-3.5 py-1.5 rounded-full text-xs font-sans font-bold tracking-wider transition-colors duration-300 focus:outline-none',
                    isActive
                      ? 'text-white'
                      : 'text-white/70 hover:text-slv-orange'
                  )}
                  data-cursor={link.name}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeSLVNav"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-slv-red to-slv-orange shadow-slv-glow"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Right Status Indicator & CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Live Kitchen Status Pill */}
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-slv-red/15 border border-slv-red/30 text-[11px] font-sans font-bold text-slv-orange">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slv-orange opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-slv-orange" />
              </span>
              <span className="tracking-wider uppercase">SIZZLING FRESH TODAY</span>
            </div>

            {/* Explore Menu CTA */}
            <MagneticButton strength={0.3}>
              <a
                href="#menu"
                className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-sans font-extrabold tracking-wider uppercase text-white bg-gradient-to-r from-slv-red to-slv-orange shadow-slv-glow hover:scale-105 transition-all duration-300"
                data-cursor="MENU"
              >
                <span>EXPLORE MENU</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </MagneticButton>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-3 xl:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="p-2.5 rounded-xl bg-slv-dark-card border border-slv-red/25 text-white hover:text-slv-orange focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 xl:hidden bg-slv-charcoal/95 backdrop-blur-2xl flex flex-col justify-between pt-24 pb-8 px-6 overflow-y-auto"
          >
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slv-red/20 border border-slv-red/40 w-fit">
                <Flame className="w-4 h-4 text-slv-orange" />
                <span className="text-[11px] font-sans font-bold text-slv-orange tracking-wider uppercase">
                  SLV FOOD COURT // SIZZLING FRESH
                </span>
              </div>

              <div className="flex flex-col gap-2">
                {NAV_LINKS.map((link, idx) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * idx }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between text-2xl font-serif font-black tracking-wide py-2.5 border-b border-slv-red/15 text-white/90 hover:text-slv-orange transition-colors"
                    >
                      <span>{link.name}</span>
                      <ArrowUpRight className="w-5 h-5 text-slv-orange opacity-70" />
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 pt-6 border-t border-slv-red/20 text-xs">
              <div className="flex items-center gap-2 text-white/70">
                <MapPin className="w-4 h-4 text-slv-orange shrink-0" />
                <span>{siteConfig.location.address}</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <Phone className="w-4 h-4 text-slv-red shrink-0" />
                <span>{siteConfig.contact.displayPhone}</span>
              </div>
              <a
                href="#menu"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded-full text-center font-sans font-extrabold uppercase tracking-wider text-white bg-gradient-to-r from-slv-red to-slv-orange shadow-slv-glow mt-2"
              >
                VIEW FULL MENU
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
