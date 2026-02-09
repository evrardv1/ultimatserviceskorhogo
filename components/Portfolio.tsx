import React from 'react';

const FLEET_MOMENTS = [
  { title: "Mission Humanitaire", category: "Location ONG", image: "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&q=80&w=800" },
  { title: "Convoi Officiel", category: "Escorte & Sécurité", image: "https://images.unsplash.com/photo-1590333746434-582875f54c30?auto=format&fit=crop&q=80&w=800" },
  { title: "Exploration Minière", category: "Logistique Terrain", image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800" },
  { title: "Transport VIP", category: "Berlines Premium", image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=800" },
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-32 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-xl">
            <h2 className="text-red-500 font-black tracking-[0.4em] text-xs uppercase mb-4">Notre Expertise en Action</h2>
            <h3 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter leading-none">
              LA FLOTTE <span className="text-white/30 italic">OPÉRATIONNELLE</span>
            </h3>
          </div>
          <p className="text-slate-400 font-medium max-w-xs text-sm border-l border-white/20 pl-6">
            Aperçu de nos véhicules déployés sur les terrains les plus exigeants de Côte d'Ivoire.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FLEET_MOMENTS.map((item, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-[2rem] aspect-[3/4] cursor-pointer shadow-2xl">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale hover:grayscale-0"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent opacity-60"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <span className="text-red-500 text-[10px] font-black uppercase tracking-widest mb-2 block">{item.category}</span>
                <h4 className="text-xl font-black uppercase italic leading-tight">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;