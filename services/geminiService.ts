import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateMarketingContent = async (
  section: string,
  businessDescription: string,
  tone: string = 'professionnel et convaincant'
): Promise<string> => {
  try {
    const prompt = `Agis en tant qu'expert en copywriting et marketing digital. 
    Génère un contenu textuel captivant pour la section "${section}" d'un site vitrine haut de gamme.
    
    Contexte de l'entreprise : "${businessDescription}"
    Ton à adopter : "${tone}"
    
    Consignes :
    1. Réponds EXCLUSIVEMENT en français.
    2. Le contenu doit être structuré, avec un titre accrocheur et un paragraphe persuasif si pertinent.
    3. Utilise un langage moderne qui inspire confiance et excellence.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        temperature: 0.8,
      },
    });

    return response.text?.trim() || "Désolé, je n'ai pas pu générer de contenu pour le moment.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Erreur technique lors de la génération.";
  }
};

export const generateServicesContent = async (): Promise<any[]> => {
  try {
    const prompt = `Agis comme un expert en marketing automobile de luxe.
    Génère un contenu marketing ultra-professionnel pour les 3 services d'ULTIMAT SERVICES (1. Location 4x4, 2. Vente Auto, 3. Logistique). 
    L'entreprise est basée à Korhogo.
    
    Consignes strictes :
    - Le ton doit être autoritaire, rassurant et axé sur l'expertise technique et la fiabilité absolue.
    - Mets en avant la sécurité pour les missions en zone difficile.
    - Utilise un vocabulaire précis (maintenance, performance, disponibilité).
    - Les titres doivent être courts et percutants (max 3 mots).
    - Les descriptions doivent faire moins de 25 mots.
    - Les boutons (btn) doivent être incitatifs (Call to Action).`;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              id: { type: Type.STRING },
              title: { type: Type.STRING },
              description: { type: Type.STRING },
              btn: { type: Type.STRING }
            },
            required: ["id", "title", "description", "btn"]
          }
        }
      }
    });

    const text = response.text || "[]";
    return JSON.parse(text);
  } catch (error) {
    console.error("Gemini Services Error:", error);
    return [];
  }
};