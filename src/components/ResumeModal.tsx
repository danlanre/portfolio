import { useEffect } from 'react';
import { X, Printer, Mail, MapPin, Github } from 'lucide-react';
import { DEVELOPER_INFO } from '../data/skills';
import { PROJECTS } from '../data/projects';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      
      <div 
        className="relative w-full max-w-3xl max-h-[92vh] bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Controls Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-950 border-b border-slate-800">
          <div className="text-xs font-mono text-cyan-400 font-semibold flex items-center gap-2">
            <span>CURRICULUM VITAE / RESUME</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold transition-colors shadow-sm"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable Resume Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-6 text-slate-200 bg-[#0a0d14]">
          
          {/* Resume Header */}
          <div className="border-b border-slate-800 pb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-2">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {DEVELOPER_INFO.name}
              </h1>
              <div className="text-cyan-400 text-sm font-mono font-semibold">
                {DEVELOPER_INFO.role}
              </div>
              <div className="flex flex-wrap gap-4 text-xs text-slate-400 font-mono pt-1">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  {DEVELOPER_INFO.location}
                </span>
                <span className="flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-cyan-400" />
                  {DEVELOPER_INFO.email}
                </span>
                <a href={DEVELOPER_INFO.github} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-cyan-300">
                  <Github className="w-3.5 h-3.5" />
                  github.com/danlanre
                </a>
              </div>
            </div>

            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-slate-700 shrink-0 shadow-lg bg-slate-950">
              <img src="/profile.jpg" alt="Dan Lanre" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-xs uppercase tracking-wider font-bold text-cyan-400 font-mono">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {DEVELOPER_INFO.bio}
            </p>
          </div>

          {/* Core Technical Stack */}
          <div className="space-y-2.5">
            <h2 className="text-xs uppercase tracking-wider font-bold text-cyan-400 font-mono">
              Technical Core Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 space-y-1">
                <span className="font-semibold text-white">AI & Machine Learning:</span>
                <p className="text-slate-400">Google Gemini & GenAI SDK, Replicate APIs, AI Policy/Guardrail Engines, STT/TTS Pipelines</p>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 space-y-1">
                <span className="font-semibold text-white">Frontend & Web Engineering:</span>
                <p className="text-slate-400">React 18/19, Next.js 14, TypeScript, Tailwind CSS, HTML5 Canvas API, Web Audio API, Vite</p>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 space-y-1">
                <span className="font-semibold text-white">Backend & Offline Architectures:</span>
                <p className="text-slate-400">Node.js, Express, Firebase Firestore & Auth, Progressive Web Apps (PWA), Service Workers, IndexedDB</p>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 space-y-1">
                <span className="font-semibold text-white">Systems, Tools & Web3:</span>
                <p className="text-slate-400">Godot 4 & GDScript, Solidity & Hardhat, Fluent-FFmpeg, Git/GitHub, Low-Bandwidth Optimizations</p>
              </div>
            </div>
          </div>

          {/* Key Production Projects */}
          <div className="space-y-4">
            <h2 className="text-xs uppercase tracking-wider font-bold text-cyan-400 font-mono">
              Selected Engineered Systems & Applications
            </h2>

            <div className="space-y-4">
              {PROJECTS.slice(0, 5).map((proj) => (
                <div key={proj.id} className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-white">{proj.title} — {proj.subtitle}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-cyan-300 border border-slate-700">{proj.status}</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">{proj.shortDescription}</p>
                  <div className="text-[11px] font-mono text-slate-400 flex flex-wrap gap-1 pt-1">
                    <span className="text-slate-500 font-semibold">Tech:</span>
                    {proj.techStack.map(t => t.name).join(' • ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
