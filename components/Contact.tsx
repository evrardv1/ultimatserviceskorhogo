import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message envoyé !");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Contactez-nous</h2>
          <p className="text-gray-600 mb-8">Une question ? Besoin d'un devis ? Écrivez-nous.</p>

          <div className="flex flex-col md:flex-row justify-center gap-6 mb-8">
            <a href="mailto:ultimatservice@gmail.com" className="flex items-center justify-center gap-2 bg-white px-6 py-3 rounded-xl shadow-sm border border-gray-100 text-blue-800 font-bold hover:shadow-md hover:border-blue-200 transition">
              <span className="text-xl">✉️</span> ultimatservice@gmail.com
            </a>
            <a href="tel:+2250506074320" className="flex items-center justify-center gap-2 bg-white px-6 py-3 rounded-xl shadow-sm border border-gray-100 text-blue-800 font-bold hover:shadow-md hover:border-blue-200 transition">
              <span className="text-xl">📞</span> +225 05 06 07 43 20
            </a>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Nom</label>
                <input 
                  type="text" required
                  className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                <input 
                  type="email" required
                  className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
              <textarea 
                rows={4} required
                className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>
            <button 
              type="submit"
              className="w-full bg-blue-800 text-white py-4 rounded-lg font-bold text-lg hover:bg-blue-900 transition"
            >
              Envoyer le message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;