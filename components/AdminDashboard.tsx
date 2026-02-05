import React, { useState } from 'react';
import { Vehicle } from '../types';

interface AdminDashboardProps {
  vehicles: Vehicle[];
  onBack: () => void;
  onAdd: (vehicle: Vehicle) => void;
  onDelete: (id: string) => void;
  onUpdate: (vehicle: Vehicle) => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ vehicles, onBack, onAdd, onDelete, onUpdate }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const initialFormState: Partial<Vehicle> = {
    name: '', 
    type: 'pickup', 
    category: 'rent', 
    price: 0, 
    image: '',
    specs: { engine: 'Standard', seats: 5, transmission: 'Auto' },
    status: 'available'
  };

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<Partial<Vehicle>>(initialFormState);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'Sorho' && password === 'Sorho2025') setIsAuthenticated(true);
    else alert('Identifiants incorrects');
  };

  const handleEdit = (vehicle: Vehicle) => {
    setFormData({ ...vehicle });
    setEditingId(vehicle.id);
    setIsFormOpen(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer ce véhicule ?')) {
      onDelete(id);
    }
  };

  const handleCancel = () => {
    setFormData(initialFormState);
    setEditingId(null);
    setIsFormOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.image) {
      alert("Veuillez remplir les champs obligatoires (Nom et Image)");
      return;
    }

    const currentSpecs = formData.specs || { engine: 'Standard', seats: 5, transmission: 'Auto' };

    const vehicleData: Vehicle = {
      id: editingId || Date.now().toString(),
      name: formData.name || 'Modèle Inconnu',
      type: formData.type || 'pickup',
      category: formData.category || 'rent',
      price: formData.price || 0,
      image: formData.image || '',
      gallery: formData.gallery || [formData.image || ''],
      specs: {
        engine: currentSpecs.engine || 'Standard',
        seats: currentSpecs.seats || 5,
        transmission: currentSpecs.transmission || 'Auto'
      },
      status: formData.status || 'available'
    };

    if (editingId) {
      onUpdate(vehicleData);
    } else {
      onAdd(vehicleData);
    }
    handleCancel();
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <form onSubmit={handleLogin} className="bg-white p-8 rounded-xl shadow-lg w-96">
          <h2 className="text-2xl font-bold mb-6 text-center text-blue-800">Administration</h2>
          <div className="space-y-4">
            <input 
              type="text" placeholder="Utilisateur" 
              className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none"
              value={username} onChange={e => setUsername(e.target.value)}
            />
            <input 
              type="password" placeholder="Mot de passe" 
              className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none"
              value={password} onChange={e => setPassword(e.target.value)}
            />
            <button type="submit" className="w-full bg-blue-800 text-white py-2 rounded font-bold hover:bg-blue-900 transition">Connexion</button>
            <button type="button" onClick={onBack} className="w-full text-gray-500 text-sm">Retour</button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-blue-900">Gestion du Parc</h1>
          <div className="flex gap-4">
            <button 
              onClick={() => isFormOpen ? handleCancel() : setIsFormOpen(true)} 
              className={`${isFormOpen ? 'bg-gray-500' : 'bg-blue-600'} hover:opacity-90 transition text-white px-4 py-2 rounded`}
            >
              {isFormOpen ? 'Fermer le formulaire' : 'Ajouter un véhicule'}
            </button>
            <button onClick={onBack} className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">Quitter</button>
          </div>
        </div>

        {isFormOpen && (
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md mb-8">
            <h2 className="text-xl font-bold mb-4 text-gray-800">{editingId ? 'Modifier le véhicule' : 'Nouveau véhicule'}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Nom du modèle</label>
                <input 
                  placeholder="Ex: Toyota Hilux" className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none" required
                  value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Offre (Location / Vente)</label>
                <select 
                  className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none"
                  value={formData.category} onChange={e => setFormData({...formData, category: e.target.value as any})}
                >
                  <option value="rent">Location</option>
                  <option value="buy">Vente</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Type de véhicule</label>
                <select 
                  className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none"
                  value={formData.type} onChange={e => setFormData({...formData, type: e.target.value as any})}
                >
                  <option value="pickup">Pickup / Utilitaire</option>
                  <option value="suv">SUV / 4x4</option>
                  <option value="berline">Berline</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Prix (FCFA)</label>
                <input 
                  type="number" placeholder="Prix" className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none" required
                  value={formData.price || ''} onChange={e => setFormData({...formData, price: parseFloat(e.target.value)})}
                />
              </div>

              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-bold text-gray-700">URL Image</label>
                <input 
                  placeholder="https://..." className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none" required
                  value={formData.image} onChange={e => setFormData({...formData, image: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Moteur</label>
                <input 
                  placeholder="Ex: V6 3.0L" className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none"
                  value={formData.specs?.engine || ''} 
                  onChange={e => setFormData({...formData, specs: { ...formData.specs!, engine: e.target.value }})}
                />
              </div>

               <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Transmission</label>
                <select 
                  className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none"
                  value={formData.specs?.transmission || 'Auto'} 
                  onChange={e => setFormData({...formData, specs: { ...formData.specs!, transmission: e.target.value as any }})}
                >
                  <option value="Auto">Automatique</option>
                  <option value="Manuelle">Manuelle</option>
                </select>
              </div>

               <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Places</label>
                <input 
                  type="number" className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none"
                  value={formData.specs?.seats || 5} 
                  onChange={e => setFormData({...formData, specs: { ...formData.specs!, seats: parseInt(e.target.value) || 5 }})}
                />
              </div>

               <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Disponibilité</label>
                <select 
                  className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none"
                  value={formData.status} onChange={e => setFormData({...formData, status: e.target.value as any})}
                >
                  <option value="available">Disponible</option>
                  <option value="booked">Réservé / Loué</option>
                  <option value="sold">Vendu</option>
                </select>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
               <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded font-bold hover:bg-green-700 transition">
                 {editingId ? 'Mettre à jour' : 'Enregistrer'}
               </button>
               <button type="button" onClick={handleCancel} className="bg-gray-300 text-gray-800 px-6 py-2 rounded font-bold hover:bg-gray-400 transition">
                 Annuler
               </button>
            </div>
          </form>
        )}

        <div className="bg-white rounded-xl shadow overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-100 border-b">
              <tr>
                <th className="p-4 text-sm font-bold text-gray-600 uppercase">Véhicule</th>
                <th className="p-4 text-sm font-bold text-gray-600 uppercase">Catégorie</th>
                <th className="p-4 text-sm font-bold text-gray-600 uppercase">Prix</th>
                <th className="p-4 text-sm font-bold text-gray-600 uppercase">Statut</th>
                <th className="p-4 text-right text-sm font-bold text-gray-600 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {vehicles.map(v => (
                <tr key={v.id} className="hover:bg-blue-50 transition-colors">
                  <td className="p-4">
                    <div className="font-bold text-gray-900">{v.name}</div>
                    <div className="text-xs text-gray-500 uppercase">{v.type}</div>
                  </td>
                  <td className="p-4">
                     <span className={`px-2 py-1 rounded text-xs font-bold uppercase ${v.category === 'rent' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'}`}>
                       {v.category === 'rent' ? 'Location' : 'Vente'}
                     </span>
                  </td>
                  <td className="p-4 font-bold text-gray-700">{v.price.toLocaleString()} FCFA</td>
                  <td className="p-4">
                    <span className={`inline-block w-3 h-3 rounded-full mr-2 ${v.status === 'available' ? 'bg-green-500' : 'bg-red-500'}`}></span>
                    <span className="text-sm text-gray-600">{v.status === 'available' ? 'Dispo' : v.status === 'booked' ? 'Loué' : 'Vendu'}</span>
                  </td>
                  <td className="p-4 text-right space-x-2">
                    <button 
                      onClick={() => handleEdit(v)} 
                      className="inline-flex items-center justify-center px-3 py-1 bg-blue-100 text-blue-700 hover:bg-blue-200 rounded text-sm font-bold transition"
                    >
                      Modifier
                    </button>
                    <button 
                      onClick={() => handleDelete(v.id)} 
                      className="inline-flex items-center justify-center px-3 py-1 bg-red-100 text-red-700 hover:bg-red-200 rounded text-sm font-bold transition"
                    >
                      Supprimer
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {vehicles.length === 0 && (
            <div className="p-8 text-center text-gray-500">Aucun véhicule dans le parc.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;