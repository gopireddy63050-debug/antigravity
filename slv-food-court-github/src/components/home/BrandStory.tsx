'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Sparkles, Clock, Heart, Award, ShieldCheck, UtensilsCrossed, Users, HeartHandshake } from 'lucide-react';
import { siteConfig } from '@/data/site-config';
import { cn } from '@/lib/utils';

export function BrandStory() {
  const { brand } = siteConfig;

  return (
    <section id="story" className="py-24 sm:py-32 px-5 sm:px-8 lg:px-12 bg-slv-dark-card/50 relative overflow-hidden border-t border-slv-red/15">
      <div className="absolute top-0 right-0 w-96 h-96 bg-slv-red/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-slv-orange/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col gap-16 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slv-red/20 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slv-red/15 border border-slv-red/35 text-slv-orange text-xs font-sans font-bold uppercase tracking-wider mb-3">
              <Flame className="w-3.5 h-3.5" />
              <span>CULINARY HERITAGE</span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-black tracking-tight text-white leading-none">
              OUR STORY.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-white/70 font-serif max-w-md">
            Born from a deep love for street flavors and authentic wok cooking, SLV Food Court is where culinary tradition meets contemporary passion.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <span className="text-xs sm:text-sm font-sans font-bold uppercase tracking-widest text-slv-orange">
                Est. Khammam &bull; Old Jail Road
              </span>
              <h3 className="text-3xl sm:text-5xl font-serif font-black text-white leading-tight">
                Fresh Flavors, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slv-red via-slv-orange to-amber-400">
                  Endless Choice.
                </span>
              </h3>
            </div>

            <p className="text-base sm:text-lg text-white/80 font-sans leading-relaxed">
              At SLV Food Court, we believe extraordinary food is created through mastery of the flame, fresh farm produce, and secret spice blends perfected over years. From the moment our woks roar to life each morning to the late-night sizzle of chicken rolls, every dish is an homage to honest, vibrant street food.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slv-red/20">
              <div className="flex flex-col gap-1">
                <span className="text-2xl sm:text-3xl font-display font-black text-slv-orange">22+</span>
                <span className="text-xs font-sans font-medium text-white/60 uppercase tracking-wider">Authentic Dishes</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-2xl sm:text-3xl font-display font-black text-slv-red">100%</span>
                <span className="text-xs font-sans font-medium text-white/60 uppercase tracking-wider">Fresh Daily</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-2xl sm:text-3xl font-display font-black text-slv-orange">Wok</span>
                <span className="text-xs font-sans font-medium text-white/60 uppercase tracking-wider">High Flame Toss</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-2xl sm:text-3xl font-display font-black text-slv-red">â‚¹50+</span>
                <span className="text-xs font-sans font-medium text-white/60 uppercase tracking-wider">Starting Price</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-slv-red/30 shadow-2xl aspect-[4/5] bg-slv-charcoal">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/images/slv-menu-board.jpg"
                alt="SLV Food Court Authentic Menu Board"
                className="w-full h-full object-cover brightness-95 contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slv-charcoal via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-slv-dark-card/90 backdrop-blur-md border border-slv-red/30">
                <span className="text-xs font-mono uppercase tracking-wider text-slv-orange block mb-1">
                  Authentic Food Court
                </span>
                <span className="text-sm font-serif font-bold text-white block">
                  Original Recipe &bull; Fresh Ingredients &bull; Cooked to Order
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const ICON_MAP: Record<string, React.ReactNode> = {
  Sparkles: <Sparkles className="w-7 h-7 text-slv-orange" />,
  UtensilsCrossed: <UtensilsCrossed className="w-7 h-7 text-slv-red" />,
  Users: <Users className="w-7 h-7 text-slv-orange" />,
  HeartHandshake: <HeartHandshake className="w-7 h-7 text-slv-red" />,
  Flame: <Flame className="w-7 h-7 text-slv-orange" />,
};

export function BrandValues() {
  const { values } = siteConfig;

  return (
    <section id="values" className="py-24 sm:py-32 px-5 sm:px-8 lg:px-12 bg-slv-charcoal relative overflow-hidden border-t border-slv-red/15">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-gradient-to-r from-slv-red/10 via-slv-orange/10 to-transparent blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col gap-16 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slv-red/20 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slv-red/15 border border-slv-red/35 text-slv-orange text-xs font-sans font-bold uppercase tracking-wider mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>THE FIVE PILLARS</span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-black tracking-tight text-white leading-none">
              BRAND VALUES.
            </h2>
          </div>

          <p className="text-sm sm:text-base text-white/70 font-serif max-w-md">
            The enduring principles that guide every flame lit, every spice ground, and every plate served at SLV Food Court.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((val, index) => {
            const icon = ICON_MAP[val.iconName] || <Flame className="w-7 h-7 text-slv-orange" />;
            const isFullWidth = index === 4;

            return (
              <motion.div
                key={val.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className={cn(
                  'group relative p-8 rounded-3xl bg-slv-dark-card border border-slv-red/20 hover:border-slv-orange/50 transition-all duration-300 shadow-slv-card flex flex-col justify-between gap-6',
                  isFullWidth ? 'lg:col-span-2' : ''
                )}
                data-cursor="VALUE"
              >
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-slv-red/15 border border-slv-red/30 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-sm">
                    {icon}
                  </div>
                  <span className="text-2xl font-display font-black text-slv-red/30">
                    0{index + 1}
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="text-xs font-sans font-bold uppercase tracking-wider text-slv-orange">
                    {val.subtitle}
                  </span>
                  <h3 className="text-2xl font-serif font-black text-white group-hover:text-slv-orange transition-colors">
                    {val.title}
                  </h3>
                  <p className="text-sm text-white/75 font-sans leading-relaxed">
                    {val.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slv-red/15 flex items-center justify-between text-xs font-sans font-semibold text-white/50">
                  <span>SLV Standard</span>
                  <span className="text-slv-orange">100% Authentic</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
