export interface AnalysisTerm {
  id: string;
  title: string;
  definition: string;
  structuralFunction: string;
  operationalRisk: 'Low' | 'Medium' | 'High' | 'Critical';
  forensicSignature: string;
  details: string[];
  source?: string;
}

export interface StorySegment {
  id: number;
  content: string;
}
