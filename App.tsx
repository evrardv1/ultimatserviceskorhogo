import React, { useState, useEffect } from 'react';
import { ViewState, Vehicle } from './types';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import VehicleMarket from './components/VehicleMarket';
import AdminDashboard from './components/AdminDashboard';
import FeaturedVehicles from './components/FeaturedVehicles';
import WhatsAppBubble from './components/WhatsAppBubble';

const INITIAL_VEHICLES: Vehicle[] = [
  {
    id: 'tucson-2007-1',
    name: 'Hyundai Tucson 2007',
    type: 'suv',
    category: 'rent',
    price: 35000,
    image: 'https://image2url.com/r2/default/images/1770215615305-449207ce-bce4-4ca3-9786-877a6845894a.jpeg',
    gallery: [
      'https://image2url.com/r2/default/images/1770215615305-449207ce-bce4-4ca3-9786-877a6845894a.jpeg'
    ],
    specs: { engine: 'V6 3.5L', seats: 5, transmission: 'Auto' },
    status: 'available'
  },
  {
    id: 'ford-explorer-1',
    name: 'Ford Explorer 4x4',
    type: 'suv',
    category: 'rent',
    price: 40000,
    image: 'https://image2url.com/r2/default/images/1770219037697-1f836c92-ab61-4517-8913-969df56a5966.jpeg',
    gallery: [
      'https://image2url.com/r2/default/images/1770219037697-1f836c92-ab61-4517-8913-969df56a5966.jpeg'
    ],
    specs: { engine: 'V6 4.5L', seats: 7, transmission: 'Auto' },
    status: 'available'
  },
  {
    id: 'mazda-cx9-1',
    name: 'Mazda CX-9',
    type: 'suv',
    category: 'rent',
    price: 35000,
    image: 'https://image2url.com/r2/default/images/1770219069876-a08c3081-741b-4ff9-8986-e7db06c3e375.jpeg',
    gallery: [
      'https://image2url.com/r2/default/images/1770219069876-a08c3081-741b-4ff9-8986-e7db06c3e375.jpeg'
    ],
    specs: { engine: 'V6 3.5L', seats: 5, transmission: 'Auto' },
    status: 'available'
  },
  {
    id: 'renault-premium-1',
    name: 'Renault Premium',
    type: 'pickup', // Utilisé comme catégorie utilitaire/camion
    category: 'rent',
    price: 100000,
    image: 'https://image2url.com/r2/default/images/1770219134052-2b64a911-bc00-4e9f-906c-2db2b9d633af.jpeg',
    gallery: [
      'https://image2url.com/r2/default/images/1770219134052-2b64a911-bc00-4e9f-906c-2db2b9d633af.jpeg'
    ],
    specs: { engine: 'Diesel Heavy', seats: 2, transmission: 'Manuelle' },
    status: 'available'
  },
  {
    id: 'hilux-1',
    name: 'Toyota Hilux Ultimat Edition',
    type: 'pickup',
    category: 'rent',
    price: 75000,
    image: 'https://images.unsplash.com/photo-1590333746434-582875f54c30?auto=format&fit=crop&q=80&w=2000',
    gallery: [
      'https://images.unsplash.com/photo-1590333746434-582875f54c30?auto=format&fit=crop&q=80&w=2000'
    ],
    specs: { engine: 'D-4D Turbo', seats: 5, transmission: 'Manuelle' },
    status: 'available'
  }
];

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('home');
  const [vehicles, setVehicles] = useState<Vehicle[]>(INITIAL_VEHICLES);

  const handleAddVehicle = (newVehicle: Vehicle) => {
    setVehicles([...vehicles, newVehicle]);
    setView('admin');
  };

  const handleDeleteVehicle = (id: string) => {
    setVehicles(vehicles.filter(v => v.id !== id));
  };

  const handleUpdateVehicle = (updatedVehicle: Vehicle) => {
    setVehicles(vehicles.map(v => v.id === updatedVehicle.id ? updatedVehicle : v));
    setView('admin');
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {view !== 'admin' && <Navbar setView={setView} />}
      
      <main>
        {view === 'home' && (
          <>
            <Hero setView={setView} />
            <FeaturedVehicles vehicles={vehicles} setView={setView} />
            <Services setView={setView} />
            <Testimonials />
            <Contact />
          </>
        )}

        {view === 'rent' && (
          <VehicleMarket type="rent" vehicles={vehicles} onBack={() => setView('home')} />
        )}

        {view === 'buy' && (
          <VehicleMarket type="buy" vehicles={vehicles} onBack={() => setView('home')} />
        )}

        {view === 'admin' && (
          <AdminDashboard 
            vehicles={vehicles} 
            onBack={() => setView('home')}
            onAdd={handleAddVehicle}
            onDelete={handleDeleteVehicle}
            onUpdate={handleUpdateVehicle}
          />
        )}
      </main>

      {view !== 'admin' && <Footer setView={setView} />}
      {view !== 'admin' && <WhatsAppBubble />}
    </div>
  );
};

export default App;