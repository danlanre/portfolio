import { 
  ArrowDown, 
  Sparkles, 
  Github, 
  Layers, 
  Cpu, 
  ShieldCheck, 
  WifiOff 
} from 'lucide-react';
import { DEVELOPER_INFO } from '../data/skills';

interface HeroProps {
  onExploreProjects: () => void;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProjects, onOpenResume }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Decorative Radial Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-slow"></div>
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute top-1/2 right-1/4 w-[450px] h-[450px] bg-purple-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f29370f_1px,transparent_1px),linear-gradient(to_bottom,#1f29370f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          {/* Profile Photo Display */}
          <div className="flex flex-col items-center justify-center">
            <div className="relative group cursor-pointer">
              {/* Outer Glowing Ambient Ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 rounded-full blur-md opacity-75 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105 animate-pulse-slow"></div>
              
              {/* Avatar Frame */}
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 rounded-full p-1 bg-gradient-to-tr from-cyan-400 via-blue-500 to-indigo-600 shadow-2xl">
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-900 border-2 border-slate-950">
                  <img
                    src="/profile.jpg"
                    alt="Dan Lanre | Full-Stack & AI Systems Developer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Status Floating Pill */}
              <div className="absolute bottom-1 right-1 sm:right-2 px-3 py-1 rounded-full bg-slate-950/95 border border-emerald-500/50 text-emerald-400 text-[11px] font-mono font-semibold flex items-center gap-1.5 shadow-xl backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Active & Building</span>
              </div>
            </div>
          </div>

          {/* Availability & Specialty Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-medium shadow-lg shadow-cyan-950/40">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Available for Full-time Roles & High-Impact Contracts</span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400 font-mono text-[11px] sm:text-xs">Kaduna & Global Remote</span>
          </div>

          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
              Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">Intelligent</span>, Resilient & High-Performance Software
            </h1>
            <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
              Hi, I'm <strong className="text-white font-semibold">{DEVELOPER_INFO.name}</strong>. I build autonomous enterprise AI guardrails, generative video pipelines, offline-first educational PWAs, low-bandwidth fintech platforms, and in-browser graphic engines.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={onExploreProjects}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-sm sm:text-base shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 group"
            >
              <Layers className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
              <span>Explore 9 Built Applications</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </button>

            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700 hover:border-slate-600 font-semibold text-sm sm:text-base transition-all duration-200 shadow-md"
            >
              <span>View Professional CV</span>
            </button>

            <a
              href="https://github.com/danlanre"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 transition-all duration-200"
              title="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>

          {/* Core Focus Badges */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs text-slate-400 font-mono">
            <span className="px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              AI Agent Guardrails & Governance
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              Google Gemini & Replicate GenAI
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800 flex items-center gap-1.5">
              <WifiOff className="w-3.5 h-3.5 text-amber-400" />
              100% Offline PWAs & PRNG Multiplayer
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800 flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-sky-400" />
              Full-Stack Next.js & React 19
            </span>
          </div>

          {/* Impact Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-8">
            {DEVELOPER_INFO.stats.map((stat, idx) => (
              <div 
                key={idx}
                className="p-4 rounded-xl bg-slate-900/70 border border-slate-800/80 backdrop-blur-sm text-center space-y-1 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-200 font-mono">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-400 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
