import React from 'react';
import { Vehicle } from '../types';

interface VehicleCardProps {
  v: Vehicle;
  type: 'rent' | 'buy';
  idx: number;
}

/**
 * Composant d'affichage d'un véhicule sous forme de carte premium.
 * Inclut des animations d'entrée différées basées sur l'index.
 */
// Fixed: Explicitly typed as React.FC to handle React's special 'key' prop correctly in lists and resolve TS errors in parent components.
const VehicleCard: React.FC<VehicleCardProps> = ({ v, type, idx }) => {
  const whatsappLink = `https://wa.me/2250506074320?text=Je suis intéressé par le modèle ${v.name} en ${type === 'rent' ? 'location' : 'vente'}. Pouvez-vous me donner plus d'informations ?`;

  const getStatusConfig = () => {
    switch (v.status) {
      case 'available':
        return {
          label: 'Disponible',
          classes: 'bg-emerald-100 text-emerald-700 border-emerald-200',
          dot: 'bg-emerald-500 animate-pulse'
        };
      case 'booked':
        return {
          label: 'Réservé',
          classes: 'bg-amber-100 text-amber-700 border-amber-200',
          dot: 'bg-amber-500'
        };
      case 'sold':
        return {
          label: 'Vendu',
          classes: 'bg-rose-100 text-rose-700 border-rose-200',
          dot: 'bg-rose-500'
        };
      default:
        return {
          label: 'Inconnu',
          classes: 'bg-gray-100 text-gray-700 border-gray-200',
          dot: 'bg-gray-500'
        };
    }
  };

  const status = getStatusConfig();

  return (
    <div 
      className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 border border-slate-100 group animate-card-entry"
      style={{ 
        animationDelay: `${idx * 150}ms`,
        opacity: 0,
        animationFillMode: 'forwards'
      }}
    >
      <div className="relative h-72 overflow-hidden bg-slate-200">
        <img 
          src={v.image} 
          alt={v.name} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
          loading="lazy" 
        />
        
        {/* Status Badge */}
        <div className="absolute top-5 right-5 z-10">
          <span className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-wider border shadow-sm backdrop-blur-md ${status.classes}`}>
            <span className={`w-2 h-2 rounded-full ${status.dot}`}></span>
            {status.label}
          </span>
        </div>

        {/* Category Tag */}
        <div className="absolute bottom-5 left-5 z-10">
          <span className="px-4 py-1.5 bg-slate-900/80 backdrop-blur-md text-white text-[9px] font-black uppercase tracking-[0.2em] rounded-xl border border-white/20">
            {v.type === 'pickup' ? 'Utilitaire / Pickup' : v.type === 'suv' ? 'SUV / 4x4' : 'Berline'}
          </span>
        </div>
      </div>
      
      <div className="p-8 lg:p-10">
        <h3 className="text-2xl lg:text-3xl font-black text-slate-900 mb-8 uppercase tracking-tighter italic leading-tight group-hover:text-blue-800 transition-colors line-clamp-2 min-h-[4rem]">
          {v.name}
        </h3>

        <div className="grid grid-cols-3 gap-4 mb-10">
          <div className="bg-slate-50 p-4 rounded-3xl text-center border border-slate-100 group-hover:border-blue-100 group-hover:bg-blue-50/50 transition-all duration-500">
            <span className="block text-[9px] text-slate-400 font-black uppercase tracking-widest mb-2">Moteur</span>
            <span className="block text-xs font-black text-slate-800 uppercase italic truncate">{v.specs.engine}</span>
          </div>
          <div className="bg-slate-50 p-4 rounded-3xl text-center border border-slate-100 group-hover:border-blue-100 group-hover:bg-blue-50/50 transition-all duration-500">
            <span className="block text-[9px] text-slate-400 font-black uppercase tracking-widest mb-2">Places</span>
            <span className="block text-xs font-black text-slate-800">{v.specs.seats}</span>
          </div>
          <div className="bg-slate-50 p-4 rounded-3xl text-center border border-slate-100 group-hover:border-blue-100 group-hover:bg-blue-50/50 transition-all duration-500">
            <span className="block text-[9px] text-slate-400 font-black uppercase tracking-widest mb-2">Boîte</span>
            <span className="block text-xs font-black text-slate-800 uppercase italic">
              {v.specs.transmission === 'Auto' ? 'AUTO' : 'MAN'}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-8 border-t border-slate-100">
          <div>
            <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.3em] mb-1">
              {type === 'rent' ? 'Tarif Jour' : 'Prix de Vente'}
            </p>
            <p className="text-2xl font-black text-blue-900 italic tracking-tighter">
              {v.price.toLocaleString()} <span className="text-[10px] font-black not-italic text-slate-400 ml-1 uppercase">FCFA</span>
            </p>
          </div>
          <a 
            href={v.status === 'available' ? whatsappLink : '#'}
            target={v.status === 'available' ? '_blank' : '_self'}
            rel="noopener noreferrer"
            className={`px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all duration-300 ${
              v.status === 'available' 
              ? 'bg-blue-800 text-white hover:bg-red-500 shadow-xl shadow-blue-200 hover:shadow-red-200 hover:-translate-y-1 active:scale-95' 
              : 'bg-slate-100 text-slate-400 cursor-not-allowed opacity-60'
            }`}
          >
            {v.status === 'available' ? 'Réserver' : 'Occupé'}
          </a>
        </div>
      </div>
      <style>{`
        @keyframes cardEntry {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-card-entry {
          animation: cardEntry 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
};

export default VehicleCard;