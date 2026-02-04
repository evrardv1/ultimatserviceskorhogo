import React from 'react';
import { Vehicle } from '../types';

interface VehicleCardProps {
  v: Vehicle;
  type: 'rent' | 'buy';
  idx: number; // Gardé pour compatibilité
}

const VehicleCard: React.FC<VehicleCardProps> = ({ v }) => {
  const whatsappLink = `https://wa.me/2250506074320?text=Je suis intéressé par ${v.name}`;

  const getStatusBadge = () => {
    switch (v.status) {
      case 'available':
        return (
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-emerald-100 text-emerald-700 border border-emerald-200 shadow-sm backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Disponible
          </span>
        );
      case 'booked':
        return (
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-100 text-amber-700 border border-amber-200 shadow-sm backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-amber-500"></span>
            Réservé
          </span>
        );
      case 'sold':
        return (
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-rose-100 text-rose-700 border border-rose-200 shadow-sm backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-rose-500"></span>
            Vendu
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 group">
      <div className="relative h-64 overflow-hidden bg-slate-200">
        <img 
          src={v.image} 
          alt={v.name} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
          loading="lazy" 
        />
        <div className="absolute top-5 right-5 z-10">
          {getStatusBadge()}
        </div>
        <div className="absolute bottom-5 left-5 z-10">
          <span className="px-4 py-1.5 bg-slate-900/70 backdrop-blur-md text-white text-[9px] font-black uppercase tracking-[0.2em] rounded-xl border border-white/20">
            {v.type === 'pickup' ? 'Utilitaire / Pickup' : v.type === 'suv' ? 'SUV / 4x4' : 'Berline'}
          </span>
        </div>
      </div>
      
      <div className="p-8 lg:p-10">
        <h3 className="text-2xl lg:text-3xl font-black text-slate-900 mb-8 uppercase tracking-tighter italic leading-tight group-hover:text-blue-800 transition-colors">
          {v.name}
        </h3>

        <div className="grid grid-cols-3 gap-4 mb-10">
          <div className="bg-slate-50 p-4 rounded-3xl text-center border border-slate-100 group-hover:border-blue-100 group-hover:bg-blue-50/50 transition-all duration-500">
            <span className="block text-[9px] text-slate-400 font-black uppercase tracking-widest mb-2">Moteur</span>
            <span className="block text-xs font-black text-slate-800 uppercase italic">{v.specs.engine}</span>
          </div>
          <div className="bg-slate-50 p-4 rounded-3xl text-center border border-slate-100 group-hover:border-blue-100 group-hover:bg-blue-50/50 transition-all duration-500">
            <span className="block text-[9px] text-slate-400 font-black uppercase tracking-widest mb-2">Places</span>
            <span className="block text-xs font-black text-slate-800">{v.specs.seats}</span>
          </div>
          <div className="bg-slate-50 p-4 rounded-3xl text-center border border-slate-100 group-hover:border-blue-100 group-hover:bg-blue-50/50 transition-all duration-500">
            <span className="block text-[9px] text-slate-400 font-black uppercase tracking-widest mb-2">Boîte</span>
            <span className="block text-xs font-black text-slate-800 uppercase italic">{v.specs.transmission === 'Auto' ? 'AUTO' : 'MAN'}</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-8 border-t border-slate-100">
          <div>
            <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.3em] mb-1">Investissement</p>
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
            {v.status === 'available' ? 'Réserver' : 'Indisponible'}
          </a>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;