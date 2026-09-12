import { SkillCategory } from '../types';

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'AI & Machine Learning Engineering',
    icon: 'BrainCircuit',
    description: 'Autonomous agents, guardrail security, multi-modal generative media, and LLM integrations.',
    skills: [
      { name: 'Google Gemini & GenAI SDK', level: 'Expert', percentage: 95, badge: 'Multimodal' },
      { name: 'AI Policy & Guardrail Engines', level: 'Advanced', percentage: 92, badge: 'Enterprise Safety' },
      { name: 'Replicate & Diffusion APIs', level: 'Advanced', percentage: 88, badge: 'Visual GenAI' },
      { name: 'Speech-to-Text & TTS Pipelines', level: 'Advanced', percentage: 86, badge: 'Audio AI' },
      { name: 'Prompt Engineering & Evaluation', level: 'Expert', percentage: 96, badge: 'Systems' }
    ]
  },
  {
    title: 'Frontend & Modern Web',
    icon: 'Layout',
    description: 'High-performance interactive web applications, client-side graphic processing, and design systems.',
    skills: [
      { name: 'React 18 / 19 & Next.js 14', level: 'Expert', percentage: 96, badge: 'Full-Stack' },
      { name: 'TypeScript', level: 'Expert', percentage: 94, badge: 'Type-Safe' },
      { name: 'Tailwind CSS & Modern UI', level: 'Expert', percentage: 98, badge: 'Responsive' },
      { name: 'HTML5 Canvas & 2D Graphics', level: 'Advanced', percentage: 88, badge: 'Pixel Engine' },
      { name: 'Vite & Modern Bundlers', level: 'Expert', percentage: 95, badge: 'High Speed' }
    ]
  },
  {
    title: 'Backend, Cloud & Offline Systems',
    icon: 'Server',
    description: 'Resilient APIs, offline-first architectures, low-bandwidth optimizations, and databases.',
    skills: [
      { name: 'Node.js & Express', level: 'Advanced', percentage: 90, badge: 'Microservices' },
      { name: 'Firebase & Cloud Firestore', level: 'Advanced', percentage: 92, badge: 'Realtime DB' },
      { name: 'Progressive Web Apps (PWA)', level: 'Expert', percentage: 94, badge: 'Offline-First' },
      { name: 'Service Workers & IndexedDB', level: 'Advanced', percentage: 90, badge: 'Client Storage' },
      { name: 'RESTful API & Webhooks', level: 'Expert', percentage: 95, badge: 'Integrations' }
    ]
  },
  {
    title: 'Game Dev, Systems & Web3',
    icon: 'Terminal',
    description: 'Game mechanics, algorithmic simulations, smart contracts, and media transcoding pipelines.',
    skills: [
      { name: 'Godot 4 & GDScript', level: 'Proficient', percentage: 82, badge: 'Game Engine' },
      { name: 'Solidity & Hardhat', level: 'Proficient', percentage: 80, badge: 'Smart Contracts' },
      { name: 'Fluent-FFmpeg & Video Transcoding', level: 'Advanced', percentage: 85, badge: 'Media' },
      { name: 'Git & Open Source Workflow', level: 'Expert', percentage: 94, badge: 'DevOps' },
      { name: 'Finite State Machines (FSM)', level: 'Advanced', percentage: 88, badge: 'Game AI' }
    ]
  }
];

export const DEVELOPER_INFO = {
  name: 'Dan Lanre',
  role: 'Full-Stack & AI Systems Developer',
  location: 'Kaduna, Nigeria (Available Globally / Remote)',
  email: 'danlanre@gmail.com',
  github: 'https://github.com/danlanre',
  bio: 'Systems-minded software engineer specializing in building intelligent, resilient web applications, autonomous AI guardrails, offline-first PWAs, and high-performance user experiences. Experienced across modern React/Next.js architectures, generative media engines, localized fintech solutions, and interactive graphics.',
  stats: [
    { label: 'Applications Built', value: '9+' },
    { label: 'Core Technologies', value: '15+' },
    { label: 'Code Quality', value: '100%' },
    { label: 'Availability', value: 'Open for Roles' }
  ]
};
