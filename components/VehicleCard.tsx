import React from 'react';
import { Vehicle } from '../types';

interface VehicleCardProps {
  v: Vehicle;
  type: 'rent' | 'buy';
  idx: number; // Gardé pour compatibilité mais non utilisé pour l'animation
}

const VehicleCard: React.FC<VehicleCardProps> = ({ v, type }) => {
  const whatsappLink = `https://wa.me/2250506074320?text=Je suis intéressé par ${v.name}`;

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-gray-100">
      <div className="h-48 overflow-hidden bg-gray-200">
        <img 
          src={v.image} 
          alt={v.name} 
          className="w-full h-full object-cover" 
          loading="lazy" 
        />
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <span className="text-xs font-bold text-red-500 uppercase tracking-wide">{v.type}</span>
            <h3 className="text-xl font-bold text-gray-900 mt-1">{v.name}</h3>
          </div>
          <span className={`px-2 py-1 rounded text-xs font-bold ${v.status === 'available' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            {v.status === 'available' ? 'Disponible' : 'Indisponible'}
          </span>
        </div>

        <div className="grid grid-cols-3 gap-2 mb-6 text-sm text-gray-600">
          <div className="bg-gray-50 p-2 rounded text-center">
            <span className="block font-bold">{v.specs.engine}</span>
          </div>
          <div className="bg-gray-50 p-2 rounded text-center">
            <span className="block font-bold">{v.specs.seats} places</span>
          </div>
          <div className="bg-gray-50 p-2 rounded text-center">
            <span className="block font-bold">{v.specs.transmission}</span>
          </div>
        </div>

        <div className="flex items-center justify-between border-t pt-4">
          <div>
            <p className="text-xs text-gray-500 uppercase">Prix</p>
            <p className="text-lg font-bold text-blue-700">{v.price.toLocaleString()} FCFA</p>
          </div>
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-800 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-900 transition"
          >
            Contacter
          </a>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;