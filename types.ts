
export interface Vehicle {
  id: string;
  name: string;
  type: 'pickup' | 'suv' | 'berline';
  price: number;
  priceWeekly?: number;
  priceMonthly?: number;
  category: 'rent' | 'buy';
  image: string;
  gallery?: string[];
  specs: {
    engine: string;
    seats: number;
    transmission: 'Auto' | 'Manuelle';
  };
  status: 'available' | 'sold' | 'booked';
}

export type ViewState = 'home' | 'rent' | 'buy' | 'admin';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
}

export type SectionType = 'hero' | 'services' | 'about' | 'contact';
