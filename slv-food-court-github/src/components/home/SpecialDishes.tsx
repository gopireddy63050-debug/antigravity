'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Flame, ArrowUpRight } from 'lucide-react';
import { menuItems, specialDishes } from '@/data/menu-data';
import { MenuItem } from '@/types/slv';
import { cn } from '@/lib/utils';

interface SignatureShowcaseProps {
  onSelectItem?: (item: MenuItem) => void;
}

export function SignatureShowcase({ onSelectItem }: SignatureShowcaseProps) {
  const showcaseIds = [
    'chicken-65',
    'chicken-noodles',
    'chicken-fried-rice',
    'chilli-chicken',
    'chilli-paneer',
    'chicken-roll',
    'veg-pizza',
    'baby-corn-rice',
  ];

  const showcaseItems = menuItems.filter((item) => showcaseIds.includes(item.id));
  const [activeItem, setActiveItem] = useState<MenuItem>(showcaseItems[0] || menuItems[0]);

  return (
    <section id="showcase" className="py-24 sm:py-32 px-5 sm:px-8 lg:px-12 bg-slv-dark-card/60 relative overflow-hidden border-t border-slv-red/15">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-slv-red/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col gap-16 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slv-red/20 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slv-orange/15 border border-slv-orange/30 text-slv-orange text-xs font-sans font-bold uppercase tracking-wider mb-3">
              <Flame className="w-3.5 h-3.5" />
              <span>CULINARY HIGHLIGHTS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-black tracking-tight text-white">
              SIGNATURE SHOWCASE.
            </h2>
          </div>

          <p className="text-sm sm:text-base text-white/70 font-serif max-w-md">
            Wok-charred noodles, blazing chili chicken, golden fried rice mounds, and layered flaky rolls made fresh on fire.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7">
            <motion.div
              key={activeItem.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-[16/11] rounded-3xl overflow-hidden bg-slv-charcoal border border-slv-red/35 shadow-slv-card group flex items-center justify-center p-3"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={activeItem.image}
                alt={activeItem.name}
                className="w-full h-full object-contain rounded-2xl transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slv-charcoal/70 via-transparent to-transparent pointer-events-none" />

              <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
                <span className="px-3.5 py-1 rounded-full bg-slv-red text-white text-xs font-sans font-extrabold uppercase tracking-wider shadow-md">
                  {activeItem.category}
                </span>

                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slv-charcoal/80 border border-white/10 backdrop-blur-md">
                  <div
                    className={cn(
                      'w-2.5 h-2.5 rounded-full',
                      activeItem.diet === 'veg'
                        ? 'bg-emerald-400'
                        : activeItem.diet === 'egg'
                        ? 'bg-amber-400'
                        : 'bg-slv-red'
                    )}
                  />
                  <span className="text-[10px] font-sans font-bold uppercase text-white/80">
                    {activeItem.diet.toUpperCase()}
                  </span>
                </div>
              </div>

              <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl sm:text-4xl font-serif font-black text-white">
                    {activeItem.name}
                  </h3>
                  <div className="text-xl sm:text-2xl font-serif font-black text-slv-orange">
                    {activeItem.portions ? (
                      <span>Full ₹{activeItem.portions.full} · Half ₹{activeItem.portions.half}</span>
                    ) : activeItem.price ? (
                      <span>₹{activeItem.price}</span>
                    ) : (
                      <span>{activeItem.priceText}</span>
                    )}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-white/80 font-sans max-w-xl leading-relaxed">
                  {activeItem.description}
                </p>

                <div className="flex items-center gap-3 pt-2">
                  <a
                    href="#menu"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-slv-red to-slv-orange text-white text-xs font-sans font-extrabold uppercase tracking-wider shadow-slv-glow hover:scale-105 transition-all"
                    data-cursor="ORDER"
                  >
                    <span>EXPLORE IN MENU</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {showcaseItems.map((item) => {
              const isSelected = activeItem.id === item.id;
              return (
                <div
                  key={item.id}
                  onClick={() => setActiveItem(item)}
                  className={cn(
                    'relative p-3 rounded-2xl cursor-pointer transition-all duration-300 border flex flex-col gap-2 group',
                    isSelected
                      ? 'bg-slv-red/20 border-slv-orange shadow-slv-glow'
                      : 'bg-slv-dark-card/90 border-slv-red/15 hover:border-slv-red/40 hover:bg-slv-dark-card'
                  )}
                  data-cursor="SELECT"
                >
                  <div className="relative aspect-video rounded-xl overflow-hidden bg-slv-charcoal flex items-center justify-center p-1">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-2 left-2">
                      <div
                        className={cn(
                          'w-2 h-2 rounded-full ring-2 ring-slv-charcoal',
                          item.diet === 'veg'
                            ? 'bg-emerald-400'
                            : item.diet === 'egg'
                            ? 'bg-amber-400'
                            : 'bg-slv-red'
                        )}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-slv-orange truncate">
                      {item.category}
                    </span>
                    <h4 className="text-white text-xs font-serif font-bold truncate">
                      {item.name}
                    </h4>
                    <span className="text-[11px] font-serif font-black text-white/90 mt-0.5">
                      {item.portions
                        ? `₹${item.portions.half} / ₹${item.portions.full}`
                        : item.price
                        ? `₹${item.price}`
                        : item.priceText}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export function SpecialDishes({ onSelectItem }: { onSelectItem?: (item: MenuItem) => void }) {
  return (
    <section id="specialties" className="py-24 sm:py-32 px-5 sm:px-8 lg:px-12 bg-slv-charcoal relative overflow-hidden border-t border-slv-red/15">
      <div className="absolute top-1/4 -left-48 w-[600px] h-[600px] bg-slv-red/20 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-[600px] h-[600px] bg-slv-orange/20 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col gap-16 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slv-red/20 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slv-red/15 border border-slv-red/35 text-slv-orange text-xs font-sans font-bold uppercase tracking-wider mb-3">
              <Flame className="w-3.5 h-3.5" />
              <span>THE CROWN JEWELS</span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-black tracking-tight text-white leading-none">
              SPECIAL DISHES.
            </h2>
          </div>

          <p className="text-sm sm:text-base text-white/70 font-serif max-w-md">
            The five culinary legends that put SLV Food Court on the map. High-fire wok charred, aromatic, and unapologetically flavorful.
          </p>
        </div>

        <div className="flex flex-col gap-16 sm:gap-24">
          {specialDishes.map((dish, index) => {
            const isEven = index % 2 === 0;
            const dishNumber = (index + 1).toString().padStart(2, '0');

            return (
              <motion.div
                key={dish.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className={cn(
                  'grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center group cursor-pointer',
                  isEven ? '' : 'lg:flex-row-reverse'
                )}
                onClick={() => onSelectItem && onSelectItem(dish)}
                data-cursor="TASTE"
              >
                <div
                  className={cn(
                    'relative w-full aspect-[16/10] rounded-3xl overflow-hidden bg-slv-charcoal border border-slv-red/25 shadow-slv-card flex items-center justify-center p-3',
                    isEven ? 'lg:col-span-7' : 'lg:col-span-7 lg:order-2'
                  )}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-contain rounded-2xl transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slv-charcoal/50 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute top-5 left-5">
                    <span className="px-3.5 py-1 rounded-full bg-slv-red text-white text-xs font-sans font-black uppercase tracking-wider shadow-md">
                      Specialty #{dishNumber}
                    </span>
                  </div>

                  <div className="absolute bottom-5 left-6 right-6 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-slv-charcoal/90 border border-white/20 text-white text-xs font-sans font-bold uppercase tracking-wider backdrop-blur-md">
                        {dish.category}
                      </span>
                    </div>

                    <div className="px-4 py-1.5 rounded-full bg-gradient-to-r from-slv-red to-slv-orange text-white font-serif font-black text-sm shadow-md">
                      {dish.portions ? (
                        <span>Full ₹{dish.portions.full} · Half ₹{dish.portions.half}</span>
                      ) : (
                        <span>₹{dish.price}</span>
                      )}
                    </div>
                  </div>
                </div>

                <div
                  className={cn(
                    'flex flex-col gap-4 lg:col-span-5',
                    isEven ? '' : 'lg:order-1'
                  )}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-4xl sm:text-6xl font-display font-black text-slv-red/30 tracking-tighter">
                      /{dishNumber}
                    </span>
                    <div className="p-3 rounded-full bg-slv-dark-card border border-slv-red/25 group-hover:bg-slv-red group-hover:text-white transition-colors duration-300">
                      <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>

                  <h3 className="text-2xl sm:text-4xl font-serif font-black text-white group-hover:text-slv-orange transition-colors">
                    {dish.name}
                  </h3>

                  <p className="text-sm sm:text-base text-white/80 font-sans leading-relaxed">
                    {dish.description}
                  </p>

                  {dish.tags && (
                    <div className="flex flex-wrap gap-2 pt-2">
                      {dish.tags.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 rounded-full bg-slv-dark-card border border-slv-red/20 text-xs font-sans font-bold text-slv-orange"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
