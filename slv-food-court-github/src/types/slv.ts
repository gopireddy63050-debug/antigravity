export type DietType = 'veg' | 'non-veg' | 'egg';

export interface PortionPrice {
  full: number;
  half?: number;
}

export interface MenuItem {
  id: string;
  name: string;
  category: 'Noodles' | 'Fried Rice' | 'Chicken Specials' | 'Rolls' | 'Snacks' | 'Vegetarian Specials';
  description: string;
  diet: DietType;
  priceText?: string;
  price?: number;
  portions?: PortionPrice;
  isSpecialty?: boolean;
  isChefSpecial?: boolean;
  spicyLevel?: 1 | 2 | 3;
  image: string;
  tags?: string[];
}

export interface CreativeProject {
  id: string;
  title: string;
  category: 'Cinematic Ad' | 'AI Food Cinema' | 'Brand Story' | 'Visual Identity' | 'Social Reel';
  description: string;
  year: string;
  mediaType: 'image' | 'video';
  mediaUrl: string;
  thumbnailUrl: string;
  tools?: string[];
  credits?: string;
  featured?: boolean;
}

export interface BrandValue {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
}

export interface SiteConfig {
  brand: {
    name: string;
    tagline: string;
    subTagline: string;
    establishedYear: string;
    primaryColor: string;
    secondaryColor: string;
    accentColor: string;
    personality: string[];
    tone: string[];
  };
  story: {
    headline: string;
    subheadline: string;
    paragraphs: string[];
  };
  values: BrandValue[];
  location: {
    address: string;
    landmark: string;
    city: string;
    state: string;
    googleMapsEmbedUrl?: string;
    operatingHours: {
      weekdays: string;
      weekends: string;
      timing: string;
    };
  };
  contact: {
    phone: string;
    displayPhone: string;
    email: string;
    whatsappNumber: string;
    instagram: {
      handle: string;
      url: string;
    };
    youtube: {
      channel: string;
      url: string;
    };
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}
