// Service simulé pour le déploiement statique
// Cela évite les erreurs de build si la clé API ou la librairie n'est pas présente

export const generateMarketingContent = async (
  section: string,
  businessDescription: string,
  tone: string = 'professionnel'
): Promise<string> => {
  // Simulation d'une réponse
  return `Contenu généré (simulation): Voici un texte marketing optimisé pour ${section} concernant ${businessDescription}. Le ton est ${tone}.`;
};

export const generateServicesContent = async (): Promise<any[]> => {
  // Retourne un tableau vide ou des données par défaut simulées
  // Cela permet au composant Services de continuer à fonctionner avec ses données par défaut
  return [];
};