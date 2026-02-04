
import React from 'react';

const PROJECTS = [
  { title: "Maison Design", category: "Architecture", image: "https://picsum.photos/600/400?1" },
  { title: "Eco-Friendly App", category: "Mobile Development", image: "https://picsum.photos/600/400?2" },
  { title: "Modern Brand", category: "Identity", image: "https://picsum.photos/600/400?3" },
  { title: "Cloud Services", category: "SaaS", image: "https://picsum.photos/600/400?4" },
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-indigo-600 font-bold tracking-widest text-sm uppercase mb-3">Portfolio</h2>
            <h3 className="text-4xl font-serif font-bold text-slate-900">Découvrez nos projets récents</h3>
          </div>
          <button className="text-indigo-600 font-bold hover:underline">Voir tous les projets &rarr;</button>
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          {PROJECTS.map((project, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-3xl aspect-[4/3]">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <span className="text-indigo-400 text-sm font-bold uppercase mb-2">{project.category}</span>
                  <h4 className="text-white text-2xl font-bold">{project.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
