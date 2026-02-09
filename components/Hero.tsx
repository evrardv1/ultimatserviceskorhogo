import React from 'react';
import { ViewState } from '../types';

interface HeroProps {
  setView: (view: ViewState) => void;
}

const Hero: React.FC<HeroProps> = ({ setView }) => {
  return (
    <header className="relative min-h-[90vh] flex items-center bg-slate-900 text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=2000" 
          alt="Terrain 4x4" 
          className="w-full h-full object-cover opacity-50 scale-105 animate-pulse-slow"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-900/40 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-600/20 border border-red-500/30 rounded-full mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-red-400">Disponible 24/7 à Korhogo</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter uppercase italic">
            MAÎTRISEZ <br/> LE <span className="text-red-500 text-outline">TERRAIN</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-12 max-w-xl font-medium leading-relaxed">
            Spécialiste de la location de 4x4 Toyota Land Cruiser & Hilux. Performance, robustesse et sécurité pour vos missions d'envergure.
          </p>
          <div className="flex flex-col sm:flex-row gap-5">
            <button 
              onClick={() => setView('rent')}
              className="bg-red-600 hover:bg-red-700 text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-xl shadow-red-600/20 hover:-translate-y-1"
            >
              Louer un 4x4
            </button>
            <button 
              onClick={() => setView('buy')}
              className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all hover:-translate-y-1"
            >
              Voir le catalogue vente
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .text-outline { -webkit-text-stroke: 1px white; color: transparent; }
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1.05); }
          50% { transform: scale(1.1); }
        }
        .animate-pulse-slow { animation: pulse-slow 15s infinite ease-in-out; }
      `}</style>
    </header>
  );
};

export default Hero;