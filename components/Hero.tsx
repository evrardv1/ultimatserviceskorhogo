import React from 'react';
import { ViewState } from '../types';

interface HeroProps {
  setView: (view: ViewState) => void;
}

const Hero: React.FC<HeroProps> = ({ setView }) => {
  return (
    <header className="relative bg-slate-900 text-white py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=2000" 
          alt="Background" 
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Votre Partenaire Mobilité à Korhogo
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Location de 4x4 et vente de véhicules. Fiabilité et sécurité pour toutes vos missions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => setView('rent')}
            className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-bold text-lg transition"
          >
            Louer un véhicule
          </button>
          <button 
            onClick={() => setView('buy')}
            className="bg-white hover:bg-blue-50 text-blue-900 px-8 py-3 rounded-lg font-bold text-lg transition"
          >
            Acheter un véhicule
          </button>
        </div>
      </div>
    </header>
  );
};

export default Hero;