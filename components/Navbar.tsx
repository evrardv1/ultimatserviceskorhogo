import React, { useState, useEffect } from 'react';
import { ViewState } from '../types';

interface NavbarProps {
  setView: (view: ViewState) => void;
}

const Navbar: React.FC<NavbarProps> = ({ setView }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const logoUrl = "https://image2url.com/r2/default/images/1770053607358-53047e46-d8f3-40e1-98ee-29170bae4130.jpg";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-3 glass shadow-lg' : 'py-6 bg-transparent text-white'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => setView('home')}>
          <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl flex items-center justify-center p-1.5 shadow-sm group-hover:scale-105 transition-transform">
             <img src={logoUrl} alt="Logo Ultimat" className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col">
            <h1 className={`text-sm md:text-xl font-extrabold tracking-tight leading-none ${isScrolled ? 'text-blue-900' : 'text-white'}`}>ULTIMAT SERVICES</h1>
            <span className={`text-[8px] md:text-[10px] font-bold tracking-[0.2em] uppercase ${isScrolled ? 'text-red-500' : 'text-red-300'}`}>Mobilité Korhogo</span>
          </div>
        </div>
        
        <div className="hidden md:flex gap-8 font-bold text-sm uppercase tracking-widest">
          <button onClick={() => setView('home')} className="hover:text-red-500 transition-colors">Accueil</button>
          <button onClick={() => setView('rent')} className="hover:text-red-500 transition-colors">Location</button>
          <button onClick={() => setView('buy')} className="hover:text-red-500 transition-colors">Vente</button>
        </div>

        <button 
          onClick={() => window.open('https://wa.me/2250506074320', '_blank')}
          className={`${isScrolled ? 'bg-blue-800 text-white' : 'bg-white text-blue-900'} px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-md`}
        >
          Contact Rapide
        </button>
      </div>
    </nav>
  );
};

export default Navbar;