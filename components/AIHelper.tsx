
import React, { useState } from 'react';
import { generateMarketingContent } from '../services/geminiService';

const AIHelper: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [generatedText, setGeneratedText] = useState('');

  const handleGenerate = async () => {
    if (!description) return;
    setLoading(true);
    const content = await generateMarketingContent('Hero Section', description);
    setGeneratedText(content);
    setLoading(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      {isOpen ? (
        <div className="glass-card w-80 p-6 rounded-3xl shadow-2xl mb-4 border-indigo-100 flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-slate-900 flex items-center gap-2">
              <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
              Générateur d'IA
            </h3>
            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-slate-900">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <p className="text-xs text-slate-500 mb-3">Décrivez votre activité pour générer des textes marketing percutants.</p>
          
          <textarea
            className="w-full p-3 bg-white border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none mb-3 min-h-[80px]"
            placeholder="Ex: Je suis un photographe de mariage à Paris..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          
          <button 
            onClick={handleGenerate}
            disabled={loading || !description}
            className="w-full py-2 bg-indigo-600 text-white rounded-xl text-sm font-bold disabled:opacity-50 hover:bg-indigo-700 transition-all flex items-center justify-center gap-2"
          >
            {loading ? (
              <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : "Générer les textes"}
          </button>

          {generatedText && (
            <div className="mt-4 p-3 bg-slate-50 rounded-xl text-xs text-slate-700 max-h-40 overflow-y-auto">
              <p className="font-bold mb-1 text-indigo-600 uppercase text-[10px]">Suggestion Gemini :</p>
              {generatedText}
            </div>
          )}
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-indigo-600 text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform shadow-indigo-400 group"
        >
          <svg className="w-6 h-6 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default AIHelper;
