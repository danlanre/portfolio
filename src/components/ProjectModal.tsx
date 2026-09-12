import { useEffect, useState } from 'react';
import { 
  X, 
  Terminal, 
  Copy, 
  Check, 
  FolderGit2, 
  Layers, 
  Cpu, 
  CheckCircle2, 
  ShieldAlert, 
  Zap,
  ExternalLink,
  Github
} from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'tech' | 'run'>('overview');

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const copyRunCommand = () => {
    const fullCommand = `cd "c:\\Users\\LENOVO\\Documents\\${project.localDir}"; ${project.runCommand}`;
    navigator.clipboard.writeText(fullCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#0d121f] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header with Project Gradient Banner */}
        <div className={`relative bg-gradient-to-r ${project.primaryColor} px-6 sm:px-8 py-6 text-white overflow-hidden`}>
          <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]"></div>
          <div className="relative z-10 flex items-start justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2.5">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-black/40 border border-white/20">
                  {project.categoryLabel}
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/20 border border-white/20">
                  {project.status}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                {project.title}
              </h2>
              <p className="text-sm text-white/90 font-medium max-w-2xl">
                {project.subtitle}
              </p>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-black/30 hover:bg-black/50 text-white/80 hover:text-white transition-colors"
              aria-label="Close Case Study"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Local Folder Path & External Links Banner */}
          <div className="relative z-10 mt-4 pt-3 border-t border-white/15 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-white/80">
            <div className="flex items-center gap-2">
              <FolderGit2 className="w-4 h-4 text-white/90" />
              <span>Location: <strong className="text-white font-semibold">Documents/{project.localDir}</strong></span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {project.links?.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white text-slate-950 hover:bg-cyan-300 font-bold text-xs shadow-lg transition-all"
                  title="Open live on Vercel / Web"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Open Live App ↗</span>
                </a>
              )}

              {project.links?.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/40 hover:bg-black/60 border border-white/20 text-white font-medium text-xs transition-colors"
                  title="View Source on GitHub"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
              )}

              <button
                onClick={copyRunCommand}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/40 hover:bg-black/60 border border-white/20 text-white transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied!' : 'Copy Command'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex items-center gap-1 px-6 bg-slate-900/90 border-b border-slate-800 text-xs sm:text-sm font-medium overflow-x-auto">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-3 border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'overview'
                ? 'border-cyan-400 text-cyan-400 font-semibold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Overview & Problem
          </button>
          <button
            onClick={() => setActiveTab('architecture')}
            className={`px-4 py-3 border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'architecture'
                ? 'border-cyan-400 text-cyan-400 font-semibold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Architecture & Features
          </button>
          <button
            onClick={() => setActiveTab('tech')}
            className={`px-4 py-3 border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'tech'
                ? 'border-cyan-400 text-cyan-400 font-semibold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Tech Stack Deep Dive
          </button>
          <button
            onClick={() => setActiveTab('run')}
            className={`px-4 py-3 border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'run'
                ? 'border-cyan-400 text-cyan-400 font-semibold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Run Locally
          </button>
        </div>

        {/* Modal Body Content (Scrollable) */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 text-slate-200">
          
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2">
                  System Summary
                </h4>
                <p className="text-base text-slate-200 leading-relaxed">
                  {project.fullDescription}
                </p>
              </div>

              {/* Live Web Link Banner */}
              {project.links?.demo && (
                <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-950/50 via-slate-900 to-indigo-950/50 border border-cyan-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-lg">
                  <div className="space-y-1">
                    <div className="text-xs font-mono text-cyan-400 font-semibold flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span>ONLINE / VERCEL WEB DEPLOYMENT</span>
                    </div>
                    <div className="text-sm font-semibold text-white font-mono break-all">
                      {project.links.demo}
                    </div>
                  </div>
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs shadow-md shadow-cyan-500/25 transition-all whitespace-nowrap"
                  >
                    <span>Launch on Vercel</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}

              {/* Metrics Grid */}
              {project.metrics && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  {project.metrics.map((m, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                      <div className="text-xs text-slate-400">{m.label}</div>
                      <div className="text-lg font-bold text-white font-mono mt-0.5">{m.value}</div>
                    </div>
                  ))}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-red-950/20 border border-red-900/30 space-y-2">
                  <div className="flex items-center gap-2 text-red-400 font-semibold text-sm">
                    <ShieldAlert className="w-4 h-4" />
                    <span>The Challenge / Problem</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-900/30 space-y-2">
                  <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm">
                    <Zap className="w-4 h-4" />
                    <span>The Engineered Solution</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: ARCHITECTURE & FEATURES */}
          {activeTab === 'architecture' && (
            <div className="space-y-6">
              {/* Architecture Highlights */}
              <div>
                <h4 className="text-sm font-bold text-white flex items-center gap-2 mb-3">
                  <Cpu className="w-4 h-4 text-cyan-400" />
                  <span>Key Architectural Decisions</span>
                </h4>
                <div className="space-y-3">
                  {project.architectureHighlights.map((highlight, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/80 flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <p className="text-sm text-slate-300 leading-relaxed">
                        {highlight}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Features List */}
              <div className="pt-2">
                <h4 className="text-sm font-bold text-white flex items-center gap-2 mb-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Core Capabilities & Features</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.keyFeatures.map((feat, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-slate-900/50 border border-slate-800 flex items-center gap-2.5 text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: TECH STACK */}
          {activeTab === 'tech' && (
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Layers className="w-4 h-4 text-cyan-400" />
                <span>Technologies & Framework Roles</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.techStack.map((tech, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between space-y-1 hover:border-slate-700 transition-colors">
                    <div className="font-semibold text-white text-base font-mono flex items-center justify-between">
                      <span>{tech.name}</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-950/60 text-cyan-400 border border-cyan-800/40">Active</span>
                    </div>
                    <p className="text-xs text-slate-400">
                      {tech.role}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: RUN LOCALLY */}
          {activeTab === 'run' && (
            <div className="space-y-5">
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                  <span>Execute App Locally in PowerShell / Terminal</span>
                </h4>
                <p className="text-xs text-slate-400">
                  You can launch this application directly on this machine with the following command:
                </p>

                <div className="relative group">
                  <pre className="p-4 rounded-lg bg-black/70 border border-slate-800 text-cyan-300 font-mono text-xs sm:text-sm overflow-x-auto whitespace-pre-wrap select-all">
                    cd "c:\Users\LENOVO\Documents\{project.localDir}"; {project.runCommand}
                  </pre>
                  <button
                    onClick={copyRunCommand}
                    className="absolute top-2.5 right-2.5 px-2.5 py-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-sans flex items-center gap-1.5 transition-colors"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
              </div>

              <div className="text-xs text-slate-400 space-y-2">
                <div className="font-semibold text-slate-300">Run Notes:</div>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Folder path: <code className="text-cyan-300">c:\Users\LENOVO\Documents\{project.localDir}</code></li>
                  <li>Prerequisites: Node.js, npm, or relevant engine (Godot for game projects).</li>
                  <li>To launch Next.js / Vite apps, execute <code className="text-cyan-300">npm run dev</code> or <code className="text-cyan-300">npm.cmd run dev</code>.</li>
                </ul>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:px-8 bg-slate-900/95 border-t border-slate-800 flex items-center justify-between">
          <div className="text-xs text-slate-400 font-mono">
            App {project.id} • Built by Dan Lanre
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
