export type ProjectCategory = 
  | 'all' 
  | 'ai' 
  | 'fullstack' 
  | 'web3' 
  | 'offline' 
  | 'tools-games';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  categoryLabel: string;
  status: 'Production' | 'Live System' | 'Prototype' | 'PWA' | 'Open Source';
  featured: boolean;
  shortDescription: string;
  fullDescription: string;
  problem: string;
  solution: string;
  architectureHighlights: string[];
  keyFeatures: string[];
  techStack: {
    name: string;
    role: string;
    tagClass?: string;
  }[];
  primaryColor: string; // e.g. from-indigo-500 to-purple-600
  accentColor: string; // hex or tailwind text color
  iconName: string; // lucide icon identifier
  localDir: string;
  runCommand: string;
  links?: {
    demo?: string;
    github?: string;
    docs?: string;
  };
  metrics?: {
    label: string;
    value: string;
  }[];
}

export interface SkillCategory {
  title: string;
  icon: string;
  description: string;
  skills: {
    name: string;
    level: string; // e.g. "Advanced", "Expert"
    percentage: number;
    badge?: string;
  }[];
}
