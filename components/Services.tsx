
import React, { useState, useEffect } from 'react';
import { ViewState } from '../types';
import { generateServicesContent } from '../services/geminiService';

interface ServicesProps {
  setView: (view: ViewState) => void;
}

const DEFAULT_SERVICES = [
  {
    id: 'rent',
    title: "MOBILITÉ TOUT-TERRAIN",
    description: "Une flotte de Land Cruiser et Hilux rigoureusement entretenue pour garantir une fiabilité mécanique absolue lors de vos missions critiques en zone difficile.",
    icon: "🛻",
    btn: "Réserver un 4x4"
  },
  {
    id: 'buy',
    title: "VENTE CERTIFIÉE",
    description: "Investissez dans la durabilité. Nos véhicules d'occasion sont inspectés sur 150 points de contrôle et remis à neuf par nos experts motoristes.",
    icon: "🚗",
    btn: "Voir le stock"
  },
  {
    id: 'logistics',
    title: "EXPERTISE DE FLOTTE",
    description: "Maximisez votre taux de disponibilité opérationnelle grâce à nos solutions de gestion de parc, maintenance préventive et transport logistique.",
    icon: "🛠️",
    btn: "Solutions Pro"
  }
];

const Services: React.FC<ServicesProps> = ({ setView }) => {
  const [services, setServices] = useState(DEFAULT_SERVICES);
  const [loading, setLoading] = useState(false);

  const handleRefreshContent = async () => {
    setLoading(true);
    const aiContent = await generateServicesContent();
    if (aiContent && aiContent.length === 3) {
      // On conserve les icônes originales
      const merged = aiContent.map((item, index) => ({
        ...item,
        icon: DEFAULT_SERVICES[index].icon
      }));
      setServices(merged);
    }
    setLoading(false);
  };

  useEffect(() => {
    // Optionnel : Générer au premier chargement pour avoir un contenu frais
    // handleRefreshContent();
  }, []);

  return (
    <section id="services" className="py-32 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
          <div className="max-w-xl">
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-blue-600 font-black tracking-[0.4em] text-xs uppercase">Nos Engagements</h2>
              <button 
                onClick={handleRefreshContent}
                disabled={loading}
                className="flex items-center gap-2 px-3 py-1 bg-slate-100 hover:bg-blue-50 text-slate-500 hover:text-blue-600 rounded-full text-[9px] font-black uppercase tracking-widest transition-all disabled:opacity-50 group"
              >
                <span className={`${loading ? 'animate-spin' : 'group-hover:rotate-180 transition-transform duration-500'}`}>✨</span>
                {loading ? 'Optimisation IA...' : 'Optimiser par IA'}
              </button>
            </div>
            <h3 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter uppercase italic leading-none">
              L'EXCELLENCE <span className="text-red-500">ULTIMAT</span>
            </h3>
          </div>
          <p className="text-slate-500 max-w-sm text-lg font-medium leading-relaxed border-l-4 border-red-500 pl-6">
            Nous garantissons des véhicules entretenus selon les plus hauts standards de sécurité pour le Grand Nord.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {services.map((service, idx) => (
            <div 
              key={service.id} 
              onClick={() => (service.id === 'rent' || service.id === 'buy') && setView(service.id as ViewState)}
              className={`group p-14 bg-slate-50 rounded-[3.5rem] hover:bg-blue-900 transition-all duration-700 cursor-pointer border border-slate-100 hover:border-blue-800 hover:shadow-2xl animate-slide-up`}
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <div className="w-24 h-24 bg-white rounded-[2.5rem] shadow-xl flex items-center justify-center mb-12 group-hover:bg-red-500 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                <span className="text-5xl">{service.icon}</span>
              </div>
              <h4 className="text-3xl font-black mb-5 text-slate-900 group-hover:text-white uppercase tracking-tighter italic transition-colors">
                {service.title}
              </h4>
              <p className="text-slate-500 group-hover:text-blue-200 mb-10 font-medium text-lg leading-relaxed transition-colors">
                {service.description}
              </p>
              <div className="flex items-center gap-3 text-red-500 group-hover:text-red-400 font-black uppercase text-xs tracking-[0.2em] transition-colors">
                {service.btn} <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up {
          animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </section>
  );
};

export default Services;