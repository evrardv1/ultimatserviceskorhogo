import React from 'react';
import { Testimonial } from '../types';

const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: "Amadou Koné",
    role: "Directeur Logistique, ONG Sahel",
    content: "Une fiabilité absolue. Les véhicules Ultimat sont les seuls capables de tenir la cadence de nos missions humanitaires dans les zones reculées du Nord.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: '2',
    name: "Sarah Traoré",
    role: "Gérante, BTP Ivoire",
    content: "Le service client est exceptionnel. J'ai renouvelé toute ma flotte de supervision avec eux. Transparence sur les prix et SAV très réactif à Korhogo.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: '3',
    name: "Jean-Marc Delacroix",
    role: "Consultant Minier",
    content: "Pour nos expatriés, la sécurité est la priorité. Ultimat fournit des Land Cruiser aux normes internationales avec un suivi maintenance rigoureux.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="mb-20 text-center max-w-3xl mx-auto">
           <h2 className="text-blue-600 font-black tracking-[0.4em] text-xs uppercase mb-6">Retours d'Expérience</h2>
           <h3 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase italic">
             ILS NOUS FONT <span className="text-red-500">CONFIANCE</span>
           </h3>
        </div>

        <div className="flex overflow-x-auto pb-12 gap-8 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 md:grid md:grid-cols-3 md:overflow-visible md:pb-0 md:px-0">
          {TESTIMONIALS.map((t, idx) => (
            <div 
              key={t.id} 
              className="min-w-[85vw] md:min-w-0 snap-center bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 relative group hover:-translate-y-2 transition-transform duration-500 hover:shadow-xl hover:shadow-slate-200/50"
            >
              <div className="absolute top-10 right-10 text-6xl text-slate-200 font-serif italic opacity-50 group-hover:text-blue-100 transition-colors">"</div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div>
                  <h4 className="font-black text-slate-900 uppercase text-sm tracking-wide">{t.name}</h4>
                  <p className="text-[10px] text-blue-600 font-bold uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
              <p className="text-slate-500 font-medium leading-relaxed relative z-10 text-lg">
                {t.content}
              </p>
              
              <div className="mt-8 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-sm">★</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;