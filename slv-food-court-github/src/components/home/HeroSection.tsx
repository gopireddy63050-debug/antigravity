'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Flame, Sparkles, Utensils } from 'lucide-react';
import dynamic from 'next/dynamic';
import gsap from 'gsap';
import { siteConfig } from '@/data/site-config';
import { MagneticButton } from '@/components/ui/MagneticButton';

// Dynamically import 3D Canvas
const FoodCanvas = dynamic(() => import('@/components/3d/FoodCanvas'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-56 h-56 rounded-full border border-slv-red/30 animate-pulse bg-gradient-to-tr from-slv-red/20 via-slv-orange/20 to-transparent blur-2xl" />
    </div>
  ),
});

export function HeroSection() {
  const floatingCardRef = useRef<HTMLDivElement>(null);

  // GSAP Mouse Parallax on floating food preview card
  useEffect(() => {
    if (!floatingCardRef.current) return;
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    const el = floatingCardRef.current;
    const xTo = gsap.quickTo(el, 'x', { duration: 0.9, ease: 'power2.out' });
    const yTo = gsap.quickTo(el, 'y', { duration: 0.9, ease: 'power2.out' });
    const rotateTo = gsap.quickTo(el, 'rotation', { duration: 1.2, ease: 'power2.out' });

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const xOffset = (e.clientX / innerWidth - 0.5) * 32;
      const yOffset = (e.clientY / innerHeight - 0.5) * 32;
      const rot = (e.clientX / innerWidth - 0.5) * 6;

      xTo(xOffset);
      yTo(yOffset);
      rotateTo(rot);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-between pt-28 sm:pt-36 pb-14 px-5 sm:px-8 lg:px-12 overflow-hidden bg-slv-charcoal"
    >
      {/* Cinematic Crimson & Fiery Orange Ambient Glows */}
      <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] rounded-full bg-slv-red/20 blur-[130px] pointer-events-none animate-pulse-slow" />
      <div className="absolute top-1/3 -right-40 w-[550px] h-[550px] rounded-full bg-slv-orange/20 blur-[140px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[700px] h-[250px] rounded-full bg-slv-red/15 blur-[120px] pointer-events-none" />

      {/* Main Grid Container */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center flex-1 relative z-10">
        {/* Left Column: Bold Expressive Culinary Typography */}
        <div className="lg:col-span-7 flex flex-col gap-6 sm:gap-7">
          {/* Animated Brand Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slv-red/15 border border-slv-red/35 w-fit backdrop-blur-md shadow-sm"
          >
            <Flame className="w-4 h-4 text-slv-orange" />
            <span className="text-xs font-sans font-bold tracking-widest uppercase text-slv-orange">
              {siteConfig.brand.name} · SINCE {siteConfig.brand.establishedYear}
            </span>
          </motion.div>

          {/* Hero Headline */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-display font-black tracking-tight leading-[0.96] text-white"
            >
              FRESH FLAVORS. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slv-red via-slv-orange to-[#FFAA28]">
                ENDLESS CHOICE.
              </span>
            </motion.h1>
          </div>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-lg sm:text-xl text-white/85 font-serif max-w-xl leading-relaxed"
          >
            {siteConfig.brand.subTagline} High-flame Chinese wok specialties, savory Andhra fried rice, sizzling crispy Chicken 65, and hot flaky rolls crafted fresh for you every single day.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <MagneticButton strength={0.3}>
              <a
                href="#menu"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-slv-red to-slv-orange text-white font-sans font-black text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-slv-glow hover:scale-105"
                data-cursor="MENU"
              >
                <Utensils className="w-4 h-4" />
                <span>EXPLORE OUR MENU</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </MagneticButton>

            <MagneticButton strength={0.25}>
              <a
                href="#story"
                className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-slv-dark-card border border-slv-red/30 text-white font-sans font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 hover:border-slv-orange hover:bg-slv-dark-card/90"
                data-cursor="STORY"
              >
                <span>DISCOVER SLV</span>
                <ArrowDown className="w-4 h-4 text-slv-orange transition-transform duration-300 group-hover:translate-y-0.5" />
              </a>
            </MagneticButton>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap items-center gap-4 sm:gap-6 pt-3 text-xs font-sans text-white/60"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-slv-red" />
              <span className="font-semibold text-white/80">100% Fresh Preparation</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-slv-orange" />
              <span className="font-semibold text-white/80">Authentic Wok Mastery</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="font-semibold text-white/80">Pure Veg & Non-Veg Kitchens</span>
            </div>
          </motion.div>
        </div>

        {/* Right Column: 3D Food Experience + Floating Signature Dish */}
        <div className="lg:col-span-5 relative w-full h-[400px] sm:h-[480px] lg:h-[580px] flex items-center justify-center">
          {/* React Three Fiber 3D Centerpiece */}
          <div className="absolute inset-0 w-full h-full z-10">
            <FoodCanvas />
          </div>

          {/* Floating Aesthetic Dish Card (Chicken 65 Showcase) */}
          <div
            ref={floatingCardRef}
            className="absolute -bottom-4 right-0 sm:right-4 z-20 w-64 sm:w-72 p-3.5 rounded-2xl bg-slv-dark-card/95 border border-slv-red/35 backdrop-blur-xl shadow-slv-card group cursor-pointer transition-transform duration-300 hover:scale-105"
            data-cursor="TASTE"
          >
            <div className="relative aspect-video rounded-xl overflow-hidden bg-slv-charcoal flex items-center justify-center p-1.5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/images/dishes/chicken-65.jpg"
                alt="SLV Signature Chicken 65"
                className="w-full h-full object-contain rounded-lg transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slv-charcoal/50 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-2 left-2 flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-slv-red text-white text-[10px] font-sans font-extrabold uppercase tracking-wider shadow-sm">
                <Flame className="w-2.5 h-2.5 fill-current" />
                <span>CHEF&apos;S #1 SPECIALTY</span>
              </div>
            </div>
            <div className="pt-2.5 px-1 flex items-center justify-between">
              <div>
                <h4 className="text-white text-xs font-serif font-black truncate max-w-[170px]">
                  Crispy Chicken 65
                </h4>
                <p className="text-slv-orange text-[10px] font-sans font-bold">₹140 · Fire Curry Temper</p>
              </div>
              <a
                href="#menu"
                className="p-1.5 rounded-full bg-slv-red/20 text-slv-orange hover:bg-slv-red hover:text-white transition-colors"
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator & Category Teasers */}
      <div className="max-w-7xl mx-auto w-full pt-12 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-slv-red/15 relative z-10">
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs tracking-wider text-white/60 uppercase font-sans font-semibold">
          <span>NOODLES</span>
          <span className="text-slv-red font-bold">•</span>
          <span>FRIED RICE</span>
          <span className="text-slv-orange font-bold">•</span>
          <span>CHICKEN 65</span>
          <span className="text-slv-red font-bold">•</span>
          <span>HOT ROLLS</span>
          <span className="text-slv-orange font-bold">•</span>
          <span>CHILLI PANEER</span>
        </div>

        <motion.a
          href="#story"
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-widest text-white/50 hover:text-slv-orange transition-colors"
        >
          <span>Scroll to explore</span>
          <ArrowDown className="w-3.5 h-3.5 text-slv-orange" />
        </motion.a>
      </div>
    </section>
  );
}
