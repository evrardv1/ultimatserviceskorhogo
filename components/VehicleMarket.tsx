import React, { useState, useMemo } from 'react';
import { Vehicle } from '../types';
import VehicleCard from './VehicleCard';

interface VehicleMarketProps {
  type: 'rent' | 'buy';
  vehicles: Vehicle[];
  onBack: () => void;
}

const VehicleMarket: React.FC<VehicleMarketProps> = ({ type, vehicles, onBack }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState<'all' | 'pickup' | 'suv' | 'berline'>('all');

  const filteredVehicles = useMemo(() => {
    return vehicles.filter(v => {
      const isCorrectCategory = v.category === type;
      const matchesSearch = v.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilter = activeFilter === 'all' || v.type === activeFilter;
      return isCorrectCategory && matchesSearch && matchesFilter;
    });
  }, [type, vehicles, searchTerm, activeFilter]);

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
          <div className="flex items-center gap-6">
            <button 
              onClick={onBack}
              className="w-12 h-12 rounded-2xl bg-white shadow-md flex items-center justify-center text-blue-900 hover:bg-blue-900 hover:text-white transition-all border border-slate-100 group"
            >
              <span className="group-hover:-translate-x-1 transition-transform font-bold">←</span>
            </button>
            <div>
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter italic">
                {type === 'rent' ? 'Location 4x4' : 'Vente Auto'}
              </h1>
              <p className="text-[10px] text-red-500 font-bold uppercase tracking-[0.4em] mt-1">Parc Ultimat Korhogo</p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
            <input 
              type="text" 
              placeholder="Rechercher un modèle..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-6 py-3 bg-white border border-slate-200 rounded-2xl shadow-sm focus:ring-2 focus:ring-blue-600 outline-none text-sm w-full md:w-64"
            />
            <div className="flex p-1 bg-white border border-slate-200 rounded-2xl shadow-sm overflow-x-auto scrollbar-hide">
              {['all', 'pickup', 'suv', 'berline'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter as any)}
                  className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${activeFilter === filter ? 'bg-blue-900 text-white shadow-md' : 'text-slate-400 hover:text-slate-600'}`}
                >
                  {filter === 'all' ? 'Tous' : filter}
                </button>
              ))}
            </div>
          </div>
        </div>

        {filteredVehicles.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVehicles.map((v, idx) => (
              <VehicleCard key={v.id} v={v} type={type} idx={idx} />
            ))}
          </div>
        ) : (
          <div className="py-32 text-center bg-white rounded-[3rem] border-2 border-dashed border-slate-200">
            <span className="text-5xl mb-6 block grayscale opacity-40">🏎️</span>
            <p className="text-slate-400 font-bold text-lg uppercase tracking-widest">Aucun véhicule ne correspond à vos critères.</p>
            <button onClick={() => {setSearchTerm(''); setActiveFilter('all');}} className="mt-4 text-blue-600 font-black text-xs uppercase underline">Réinitialiser les filtres</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default VehicleMarket;