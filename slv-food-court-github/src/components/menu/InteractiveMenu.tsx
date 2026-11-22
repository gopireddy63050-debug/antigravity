'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame, Search, Utensils, Sparkles, Check, Info, X } from 'lucide-react';
import { menuItems, MENU_CATEGORIES, MenuCategory } from '@/data/menu-data';
import { MenuItem, DietType } from '@/types/slv';
import { cn } from '@/lib/utils';

export function DishDetailModal({
  isOpen,
  onClose,
  item,
}: {
  isOpen: boolean;
  onClose: () => void;
  item: MenuItem | null;
}) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !item) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-slv-charcoal/90 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.94, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.94, opacity: 0, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl bg-slv-dark-card rounded-3xl overflow-hidden border border-slv-red/30 shadow-2xl my-8 text-white"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            aria-label="Close Dish Details"
            className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-slv-charcoal/80 hover:bg-slv-red text-white transition-colors border border-white/10"
            data-cursor="CLOSE"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="relative aspect-[16/10] w-full bg-slv-charcoal overflow-hidden flex items-center justify-center p-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-contain rounded-2xl shadow-md"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slv-dark-card/50 via-transparent to-transparent pointer-events-none" />

            <div className="absolute bottom-5 left-6 right-6 flex items-center justify-between">
              <span className="px-3.5 py-1.5 rounded-full bg-slv-red text-white text-xs font-sans font-black uppercase tracking-wider shadow-md">
                {item.category}
              </span>

              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-slv-charcoal/80 border border-white/10 text-xs font-sans font-bold text-white">
                <span
                  className={cn(
                    'w-2.5 h-2.5 rounded-full',
                    item.diet === 'veg'
                      ? 'bg-emerald-400'
                      : item.diet === 'egg'
                      ? 'bg-amber-400'
                      : 'bg-slv-red'
                  )}
                />
                <span className="uppercase">{item.diet}</span>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-2xl sm:text-4xl font-serif font-black text-white">
                  {item.name}
                </h2>

                <div className="text-xl sm:text-2xl font-serif font-black text-slv-orange">
                  {item.portions ? (
                    <span>Full ₹{item.portions.full} · Half ₹{item.portions.half}</span>
                  ) : item.price ? (
                    <span>₹{item.price}</span>
                  ) : (
                    <span>{item.priceText}</span>
                  )}
                </div>
              </div>

              <p className="text-sm sm:text-base text-white/80 font-sans leading-relaxed">
                {item.description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slv-red/15">
              <div className="p-3.5 rounded-2xl bg-slv-charcoal/80 border border-slv-red/15 flex flex-col gap-1">
                <span className="text-[10px] font-sans font-bold uppercase text-slv-orange tracking-wider">
                  Preparation
                </span>
                <span className="text-xs font-serif font-bold text-white">
                  High-Flame Wok Stir-Fry
                </span>
              </div>

              <div className="p-3.5 rounded-2xl bg-slv-charcoal/80 border border-slv-red/15 flex flex-col gap-1">
                <span className="text-[10px] font-sans font-bold uppercase text-slv-orange tracking-wider">
                  Spice Profile
                </span>
                <span className="text-xs font-serif font-bold text-white flex items-center gap-1">
                  {item.spicyLevel === 3
                    ? 'Fiery & Piquant'
                    : item.spicyLevel === 2
                    ? 'Medium Hot & Savory'
                    : 'Mild & Aromatic'}
                </span>
              </div>

              <div className="p-3.5 rounded-2xl bg-slv-charcoal/80 border border-slv-red/15 flex flex-col gap-1">
                <span className="text-[10px] font-sans font-bold uppercase text-slv-orange tracking-wider">
                  Pairing Tip
                </span>
                <span className="text-xs font-serif font-bold text-white">
                  {item.category === 'Noodles' || item.category === 'Fried Rice'
                    ? 'Pairs with Chicken 65 / Manchurian'
                    : item.category === 'Rolls'
                    ? 'Pairs with Sweet Corn Cup'
                    : 'Pairs with Hakka Fried Rice'}
                </span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slv-red/15 border border-slv-red/30 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Utensils className="w-5 h-5 text-slv-orange shrink-0" />
                <p className="text-xs text-white/90 font-sans">
                  Available for dine-in &amp; takeaway at <strong className="text-white">Old Jail Road, Khammam</strong>.
                </p>
              </div>
              <button
                onClick={onClose}
                className="px-5 py-2 rounded-full bg-slv-red hover:bg-slv-orange text-white text-xs font-sans font-bold uppercase tracking-wider shrink-0 transition-colors"
              >
                Got It
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

interface InteractiveMenuProps {
  onSelectItem?: (item: MenuItem) => void;
}

export function InteractiveMenu({ onSelectItem }: InteractiveMenuProps) {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('All');
  const [dietFilter, setDietFilter] = useState<'all' | DietType>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showBoardModal, setShowBoardModal] = useState(false);

  const [selectedPortions, setSelectedPortions] = useState<Record<string, 'full' | 'half'>>({});

  const togglePortion = (itemId: string, portion: 'full' | 'half') => {
    setSelectedPortions((prev) => ({ ...prev, [itemId]: portion }));
  };

  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
      const matchesDiet = dietFilter === 'all' || item.diet === dietFilter;
      const matchesSearch =
        searchQuery.trim() === '' ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesDiet && matchesSearch;
    });
  }, [activeCategory, dietFilter, searchQuery]);

  return (
    <section id="menu" className="py-24 sm:py-32 px-5 sm:px-8 lg:px-12 bg-slv-charcoal relative overflow-hidden border-t border-slv-red/15">
      <div className="absolute top-1/4 -right-40 w-[600px] h-[600px] bg-slv-red/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 -left-40 w-[600px] h-[600px] bg-slv-orange/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col gap-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slv-red/20 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slv-red/15 border border-slv-red/35 text-slv-orange text-xs font-sans font-bold uppercase tracking-wider mb-3">
              <Utensils className="w-3.5 h-3.5" />
              <span>FRESHLY SIZZLED ON ORDER</span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-black tracking-tight text-white leading-none">
              OUR COMPLETE MENU.
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <p className="text-sm sm:text-base text-white/70 font-serif max-w-md">
              Prepared fresh in roaring woks with genuine Andhra spices, crisp veggies, and premium cuts. Choose full or half portions where available.
            </p>
            <button
              onClick={() => setShowBoardModal(true)}
              className="px-4 py-2.5 rounded-xl bg-slv-red/15 hover:bg-slv-red/30 border border-slv-red/40 text-slv-orange hover:text-white text-xs font-sans font-bold uppercase tracking-wider transition-colors flex items-center gap-2 shrink-0 self-start sm:self-auto shadow-sm"
              data-cursor="ORIGINAL"
            >
              <Sparkles className="w-3.5 h-3.5 text-slv-yellow" />
              <span>Original Wall Board</span>
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <div className="flex items-center gap-1.5 p-1 rounded-full bg-slv-dark-card border border-slv-red/25 backdrop-blur-md">
              {MENU_CATEGORIES.map((category) => {
                const isActive = activeCategory === category;
                return (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={cn(
                      'relative px-4 py-2 rounded-full text-xs font-sans font-bold tracking-wider uppercase transition-colors whitespace-nowrap focus:outline-none',
                      isActive ? 'text-white' : 'text-white/60 hover:text-white'
                    )}
                    data-cursor="FILTER"
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeCategoryPill"
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-slv-red to-slv-orange shadow-md"
                        transition={{ type: 'spring', damping: 25, stiffness: 350 }}
                      />
                    )}
                    <span className="relative z-10">{category}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 w-full sm:w-auto">
              {(['all', 'non-veg', 'veg', 'egg'] as const).map((diet) => (
                <button
                  key={diet}
                  onClick={() => setDietFilter(diet)}
                  className={cn(
                    'px-3.5 py-1.5 rounded-full text-xs font-sans font-bold uppercase tracking-wider border transition-colors flex items-center gap-1.5',
                    dietFilter === diet
                      ? 'bg-white text-slv-charcoal border-white font-extrabold'
                      : 'bg-slv-dark-card text-white/70 border-slv-red/20 hover:border-slv-red/40'
                  )}
                >
                  {diet !== 'all' && (
                    <span
                      className={cn(
                        'w-2 h-2 rounded-full',
                        diet === 'veg' ? 'bg-emerald-500' : diet === 'egg' ? 'bg-amber-400' : 'bg-slv-red'
                      )}
                    />
                  )}
                  <span>{diet === 'all' ? 'All Diets' : diet}</span>
                </button>
              ))}
            </div>

            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40" />
              <input
                type="text"
                placeholder="Search noodles, 65, rolls..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-full bg-slv-dark-card border border-slv-red/25 text-white text-xs font-sans placeholder:text-white/40 focus:outline-none focus:border-slv-orange"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 hover:text-white"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredItems.map((item) => {
              const portionChoice = selectedPortions[item.id] || (item.portions ? 'full' : undefined);
              const activePrice = item.portions
                ? portionChoice === 'half'
                  ? item.portions.half
                  : item.portions.full
                : item.price;

              return (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                  onClick={() => onSelectItem && onSelectItem(item)}
                  className="group relative rounded-3xl overflow-hidden bg-slv-dark-card border border-slv-red/20 hover:border-slv-orange/60 transition-all duration-300 shadow-slv-card flex flex-col justify-between cursor-pointer"
                  data-cursor="VIEW"
                >
                  <div className="relative aspect-[16/10] w-full bg-slv-charcoal overflow-hidden flex items-center justify-center p-2">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-contain rounded-2xl transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slv-dark-card via-transparent to-transparent opacity-60" />

                    <div className="absolute top-3 left-3">
                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slv-charcoal/80 border border-white/10 backdrop-blur-md">
                        <span
                          className={cn(
                            'w-2 h-2 rounded-full',
                            item.diet === 'veg'
                              ? 'bg-emerald-400'
                              : item.diet === 'egg'
                              ? 'bg-amber-400'
                              : 'bg-slv-red'
                          )}
                        />
                        <span className="text-[9px] font-sans font-bold uppercase text-white/90">
                          {item.diet}
                        </span>
                      </div>
                    </div>

                    <div className="absolute top-3 right-3">
                      <span className="px-2.5 py-1 rounded-full bg-slv-charcoal/80 border border-slv-red/30 text-[10px] font-sans font-bold uppercase tracking-wider text-slv-orange backdrop-blur-md">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 flex flex-col gap-3 flex-1 justify-between">
                    <div className="flex flex-col gap-1.5">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="text-lg font-serif font-bold text-white group-hover:text-slv-orange transition-colors">
                          {item.name}
                        </h3>
                      </div>
                      <p className="text-xs text-white/70 font-sans line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {item.portions && (
                      <div
                        className="flex items-center gap-2 pt-2"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <button
                          type="button"
                          onClick={() => togglePortion(item.id, 'full')}
                          className={cn(
                            'flex-1 py-1 px-2 rounded-xl text-[11px] font-sans font-bold uppercase tracking-wider transition-colors border',
                            portionChoice === 'full'
                              ? 'bg-slv-red text-white border-slv-red shadow-sm'
                              : 'bg-slv-charcoal text-white/60 border-white/10 hover:text-white'
                          )}
                        >
                          Full: ₹{item.portions.full}
                        </button>

                        <button
                          type="button"
                          onClick={() => togglePortion(item.id, 'half')}
                          className={cn(
                            'flex-1 py-1 px-2 rounded-xl text-[11px] font-sans font-bold uppercase tracking-wider transition-colors border',
                            portionChoice === 'half'
                              ? 'bg-slv-orange text-white border-slv-orange shadow-sm'
                              : 'bg-slv-charcoal text-white/60 border-white/10 hover:text-white'
                          )}
                        >
                          Half: ₹{item.portions.half}
                        </button>
                      </div>
                    )}

                    <div className="flex items-center justify-between pt-3 border-t border-slv-red/15 mt-auto">
                      <div className="flex flex-col">
                        <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-white/40">
                          {item.portions ? `${portionChoice?.toUpperCase()} PORTION` : 'STANDARD SERVING'}
                        </span>
                        <div className="text-xl font-serif font-black text-white">
                          {activePrice ? (
                            <span>₹{activePrice}</span>
                          ) : (
                            <span className="text-sm font-sans text-slv-orange">{item.priceText}</span>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 text-xs font-sans font-bold text-slv-orange group-hover:translate-x-1 transition-transform">
                        <span>Details</span>
                        <span>→</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 && (
          <div className="py-20 flex flex-col items-center justify-center text-center gap-3">
            <Utensils className="w-12 h-12 text-slv-red/60" />
            <h3 className="text-xl font-serif font-bold text-white">No dishes match your selection</h3>
            <p className="text-xs text-white/60 max-w-sm">
              Try switching your category or searching for another savory treat like noodles, chicken 65, or rolls.
            </p>
            <button
              onClick={() => {
                setActiveCategory('All');
                setDietFilter('all');
                setSearchQuery('');
              }}
              className="mt-2 px-5 py-2 rounded-full bg-slv-red text-white text-xs font-sans font-bold uppercase tracking-wider"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      <AnimatePresence>
        {showBoardModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slv-charcoal/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-8"
            onClick={() => setShowBoardModal(false)}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl bg-slv-dark-card rounded-3xl overflow-hidden border border-slv-red/35 shadow-2xl p-4 sm:p-6 flex flex-col gap-4 text-white"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-3 border-b border-slv-red/20">
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-slv-red animate-ping" />
                  <h3 className="text-xl font-display font-bold uppercase tracking-wide">
                    Authentic Wall Menu Board · SLV Food Court
                  </h3>
                </div>
                <button
                  onClick={() => setShowBoardModal(false)}
                  className="p-2 rounded-full bg-white/10 hover:bg-slv-red text-white transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="relative rounded-2xl overflow-hidden border border-white/10 max-h-[75vh]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/images/slv-menu-board.jpg"
                  alt="Original SLV Food Court Wall Menu Board"
                  className="w-full h-auto object-contain max-h-[75vh]"
                />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-white/60 font-sans pt-2">
                <span>📍 Mounted at Old Jail Road, behind New Lucky Shopping Mall</span>
                <span className="text-slv-orange font-bold uppercase tracking-wider">
                  All menu items &amp; prices shown on this website strictly match this official board
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
