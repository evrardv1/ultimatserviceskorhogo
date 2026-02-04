import React from 'react';
import { ViewState } from '../types';

interface NavbarProps {
  setView: (view: ViewState) => void;
}

const Navbar: React.FC<NavbarProps> = ({ setView }) => {
  const logoUrl = "https://image2url.com/r2/default/images/1770053607358-53047e46-d8f3-40e1-98ee-29170bae4130.jpg";

  return (
    <nav className="bg-blue-800 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => setView('home')}>
          <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center p-1 shadow-sm group-hover:scale-105 transition-transform">
             <img src={logoUrl} alt="Logo Ultimat" className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-lg md:text-2xl font-bold tracking-tight leading-none">ULTIMAT SERVICES</h1>
            <span className="text-[10px] font-bold text-red-300 tracking-[0.1em] uppercase">Services S.A.R.L.. Korhogo</span>
          </div>
        </div>
        
        <div className="hidden md:flex gap-6 font-medium">
          <button onClick={() => setView('home')} className="hover:text-red-300 transition">Accueil</button>
          <button onClick={() => setView('rent')} className="hover:text-red-300 transition">Location</button>
          <button onClick={() => setView('buy')} className="hover:text-red-300 transition">Vente</button>
        </div>

        <button 
          onClick={() => window.open('https://wa.me/2250506074320', '_blank')}
          className="bg-white text-blue-800 px-4 py-2 rounded-lg font-bold hover:bg-red-50 hover:text-red-600 transition"
        >
          Contact
        </button>
      </div>
    </nav>
  );
};

export default Navbar;