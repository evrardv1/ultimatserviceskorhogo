import React from 'react';
import { ViewState } from '../types';

interface FooterProps {
  setView: (view: ViewState) => void;
}

const Footer: React.FC<FooterProps> = ({ setView }) => {
  const logoUrl = "https://image2url.com/r2/default/images/1770053607358-53047e46-d8f3-40e1-98ee-29170bae4130.jpg";

  return (
    <footer className="bg-slate-950 text-white pt-32 pb-12 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-4 gap-20 mb-24">
          <div className="lg:col-span-1 space-y-10">
            <div className="flex items-center gap-5">
              <div className="w-24 h-24 bg-white rounded-3xl p-2.5 flex items-center justify-center shadow-2xl">
                 <img src={logoUrl} alt="Logo Footer" className="w-full h-full object-contain" loading="lazy" />
              </div>
              <div>
                <h2 className="text-3xl font-black italic mb-0.5 tracking-tighter uppercase">ULTIMAT</h2>
                <p className="text-red-500 font-black text-[10px] uppercase tracking-[0.3em] mt-1">Services S.A.R.L.. Korhogo</p>
              </div>
            </div>
            <p className="text-slate-400 text-lg leading-relaxed font-medium">
              Le partenaire de confiance pour votre mobilité à Korhogo et dans toute la Côte d'Ivoire.
            </p>
          </div>

          <div className="lg:col-span-1">
             <h4 className="text-xs font-black uppercase tracking-[0.3em] text-blue-500 mb-10">Solutions</h4>
             <ul className="space-y-6 text-slate-300 font-bold text-sm uppercase tracking-widest">
               <li><button onClick={() => setView('rent')} className="hover:text-white transition-colors">Location 4x4</button></li>
               <li><button onClick={() => setView('buy')} className="hover:text-white transition-colors">Vente Auto</button></li>
               <li><button onClick={() => setView('home')} className="hover:text-white transition-colors">Logistique</button></li>
             </ul>
          </div>

          <div className="lg:col-span-1">
             <h4 className="text-xs font-black uppercase tracking-[0.3em] text-blue-500 mb-10">Localisation & Contact</h4>
             <div className="space-y-6 text-sm">
               <p className="text-slate-400"><span className="block text-white font-black mb-1">SIÈGE</span> Korhogo, Quartier Petit-Paris</p>
               <p className="text-slate-400"><span className="block text-white font-black mb-1">TÉLÉPHONE</span> +225 05 06 07 43 20</p>
               <p className="text-slate-400"><span className="block text-white font-black mb-1">EMAIL</span> ultimatservice@gmail.com</p>
               
               {/* Carte Interactive */}
               <div className="w-full h-40 rounded-2xl overflow-hidden border border-white/10 shadow-lg relative group bg-slate-900 mt-4">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://maps.google.com/maps?q=Korhogo,Cote+d+Ivoire&t=&z=14&ie=UTF8&iwloc=&output=embed"
                    title="Carte Korhogo"
                    className="filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                    loading="lazy"
                  ></iframe>
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=Korhogo+Cote+d+Ivoire" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20"
                  >
                    <span className="bg-white text-slate-900 text-[9px] font-black uppercase px-3 py-1 rounded-full tracking-widest shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      Ouvrir la carte
                    </span>
                  </a>
               </div>
             </div>
          </div>

          <div className="lg:col-span-1">
             <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-10 rounded-[3rem] text-center shadow-2xl relative overflow-hidden group">
               <div className="absolute top-0 left-0 w-full h-1 bg-red-600"></div>
               <h5 className="text-xl font-black uppercase italic mb-4">Besoin d'un devis ?</h5>
               <a href="https://wa.me/2250506074320" target="_blank" className="w-full block bg-red-600 hover:bg-red-700 text-white py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all">
                 WHATSAPP DIRECT
               </a>
             </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] text-slate-500 font-black uppercase tracking-[0.5em]">
          <p>© {new Date().getFullYear()} ULTIMAT SERVICES S.A.R.L.. KORHOGO, CI.</p>
          <button onClick={() => setView('admin')} className="hover:text-white transition-all">Administration</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;