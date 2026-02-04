
import React from 'react';
import { Vehicle } from '../types';
import VehicleCard from './VehicleCard';

interface VehicleMarketProps {
  type: 'rent' | 'buy';
  vehicles: Vehicle[];
  onBack: () => void;
}

const VehicleMarket: React.FC<VehicleMarketProps> = ({ type, vehicles, onBack }) => {
  const filteredVehicles = vehicles.filter(v => v.category === type);

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16 animate-fade-in">
          <div className="flex items-center gap-6">
            <button 
              onClick={onBack}
              className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all border border-slate-100 group/back"
            >
              <span className="group-hover/back:-translate-x-1 transition-transform">←</span>
            </button>
            <div className="flex flex-col">
              <h1 className="text-4xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter italic leading-none">
                {type === 'rent' ? 'Parc de Location' : 'Catalogue Vente'}
              </h1>
              <p className="text-[10px] text-red-500 font-black uppercase tracking-[0.5em] mt-2">Ultimat Services S.A.R.L.. Korhogo</p>
            </div>
          </div>
          
          <div className="flex gap-4">
             <div className="px-6 py-3 bg-white border border-slate-100 rounded-2xl shadow-sm flex items-center gap-3">
               <span className="text-blue-500 text-lg">✨</span>
               <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                 {filteredVehicles.length} véhicules disponibles
               </span>
             </div>
          </div>
        </div>

        {filteredVehicles.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredVehicles.map((v, idx) => (
              <VehicleCard key={v.id} v={v} type={type} idx={idx} />
            ))}
          </div>
        ) : (
          <div className="py-40 text-center bg-white rounded-[4rem] border-2 border-dashed border-slate-100">
            <span className="text-6xl mb-6 block opacity-20">🛻</span>
            <p className="text-slate-400 font-bold text-xl">Aucun véhicule disponible dans cette catégorie pour le moment.</p>
          </div>
        )}
      </div>
      
      <style>{`
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default VehicleMarket;