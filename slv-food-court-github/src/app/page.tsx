'use client';

import React, { useState } from 'react';
import { HeroSection } from '@/components/home/HeroSection';
import { BrandStory, BrandValues } from '@/components/home/BrandStory';
import { SignatureShowcase, SpecialDishes } from '@/components/home/SpecialDishes';
import { InteractiveMenu, DishDetailModal } from '@/components/menu/InteractiveMenu';
import { CreativePortfolio } from '@/components/portfolio/CreativePortfolio';
import { CinematicShowreel } from '@/components/home/CinematicShowreel';
import { LocationSection, ContactSection } from '@/components/home/ContactSection';
import { MenuItem } from '@/types/slv';

export default function HomePage() {
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);

  const handleSelectDish = (dish: MenuItem) => {
    setSelectedDish(dish);
  };

  return (
    <main className="min-h-screen bg-slv-charcoal text-white overflow-hidden">
      {/* 1. Immersive Animated Hero */}
      <HeroSection />

      {/* 2. Brand Story: "GOOD FOOD. GREAT MOMENTS." */}
      <BrandStory />

      {/* 3. Signature Food Showcase */}
      <SignatureShowcase onSelectItem={handleSelectDish} />

      {/* 4. Complete Interactive Menu with Portion Pricing & Filters */}
      <InteractiveMenu onSelectItem={handleSelectDish} />

      {/* 5. Special Dishes Editorial Showcase */}
      <SpecialDishes onSelectItem={handleSelectDish} />

      {/* 6. Creative Project Portfolio (AI Ads, Brand Films, Motion Graphics) */}
      <CreativePortfolio />

      {/* 7. Brand Values */}
      <BrandValues />

      {/* 8. Cinematic Video Showreel with Custom Controls */}
      <CinematicShowreel />

      {/* 9. Location & Hours (Old Jail Road, behind New Lucky Shopping Mall) */}
      <LocationSection />

      {/* 10. Direct Contact, Phone, WhatsApp & Socials */}
      <ContactSection />

      {/* Interactive Dish Inspection Modal */}
      <DishDetailModal
        isOpen={Boolean(selectedDish)}
        item={selectedDish}
        onClose={() => setSelectedDish(null)}
      />
    </main>
  );
}
