
import React from 'react';
import { Vehicle, ViewState } from '../types';
import VehicleCard from './VehicleCard';

interface FeaturedVehiclesProps {
  vehicles: Vehicle[];
  setView: (view: ViewState) => void;
}

const FeaturedVehicles: React.FC<FeaturedVehiclesProps> = ({ vehicles, setView }) => {
  // On prend les 3 premiers véhicules disponibles pour la vitrine
  const showcaseVehicles = vehicles
    .filter(v => v.status === 'available')
    .slice(0, 3);

  return (
    <section className="py-24 bg-slate-50 relative border-t border-slate-200">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-blue-600 font-black tracking-[0.4em] text-xs uppercase mb-4">Opportunités du moment</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase italic leading-none">
              Dernières <span className="text-red-500">Arrivées</span>
            </h3>
          </div>
          <button 
            onClick={() => setView('rent')}
            className="group flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-blue-700 transition-colors"
          >
            Explorer tout le parc
            <span className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-blue-700 group-hover:text-white group-hover:border-blue-700 transition-all">→</span>
          </button>
        </div>

        {showcaseVehicles.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {showcaseVehicles.map((vehicle, idx) => (
              <VehicleCard 
                key={vehicle.id} 
                v={vehicle} 
                type={vehicle.category} 
                idx={idx} 
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-slate-100">
            <p className="text-slate-400 font-bold">Aucun véhicule en vitrine pour le moment.</p>
          </div>
        )}

        <div className="mt-16 text-center">
          <p className="text-slate-400 font-medium text-sm mb-6">Vous cherchez un modèle spécifique ?</p>
          <div className="flex justify-center gap-4">
             <button 
               onClick={() => setView('rent')}
               className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-4 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all shadow-xl hover:-translate-y-1"
             >
               Voir les Locations
             </button>
             <button 
               onClick={() => setView('buy')}
               className="bg-white border border-slate-200 hover:border-red-500 hover:text-red-500 text-slate-900 px-8 py-4 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all hover:-translate-y-1"
             >
               Voir les Ventes
             </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedVehicles;