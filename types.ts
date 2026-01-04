
export interface Service {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  features: string[];
  icon: string;
  color: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
}

export interface EstimateResult {
  complexity: 'Low' | 'Medium' | 'High';
  estimatedWeeks: number;
  suggestedTechStack: string[];
  briefAnalysis: string;
}

export type View = 'home' | 'privacy' | 'terms' | 'cookies' | 'about';
