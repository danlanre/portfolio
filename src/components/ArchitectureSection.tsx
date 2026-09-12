import { useState } from 'react';
import { 
  GitBranch, 
  Cpu, 
  ShieldAlert, 
  WifiOff, 
  Terminal, 
  Check, 
  Copy, 
  ArrowRight, 
  Sliders, 
  AlertTriangle, 
  Sparkles,
  Zap
} from 'lucide-react';
import { ARCHITECTURES, ArchitectureCaseStudy } from '../data/architectures';

export const ArchitectureSection: React.FC = () => {
  const [activeStudyId, setActiveStudyId] = useState<string>(ARCHITECTURES[0].id);
  const [activeTab, setActiveTab] = useState<'solution' | 'tradeoffs' | 'flow' | 'code'>('solution');
  const [copiedCode, setCopiedCode] = useState(false);

  const activeStudy: ArchitectureCaseStudy = 
    ARCHITECTURES.find(a => a.id === activeStudyId) || ARCHITECTURES[0];

  const handleCopyCode = () => {
    navigator.clipboard.writeText(activeStudy.codeHighlight.code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'concurrency': return <Zap className="w-4 h-4 text-amber-400" />;
      case 'offline': return <WifiOff className="w-4 h-4 text-emerald-400" />;
      case 'security': return <Cpu className="w-4 h-4 text-cyan-400" />;
      case 'ai-safety': return <ShieldAlert className="w-4 h-4 text-purple-400" />;
      default: return <GitBranch className="w-4 h-4 text-blue-400" />;
    }
  };

  return (
    <section id="architecture" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Section Header */}
      <div className="space-y-4 text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-300 text-xs font-mono font-medium shadow-sm">
          <GitBranch className="w-3.5 h-3.5" />
          <span>SENIOR ARCHITECTURAL DEEP-DIVES</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
          How I Solve Real-World <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">Hard Engineering Problems</span>
        </h2>

        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          Junior engineers list syntax. Senior engineers design resilient architectures, eliminate race conditions, and navigate technical trade-offs. Here is the engineering logic behind my core systems.
        </p>
      </div>

      {/* Case Study Switcher Pills */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
        {ARCHITECTURES.map((study) => {
          const isSelected = study.id === activeStudyId;
          return (
            <button
              key={study.id}
              onClick={() => {
                setActiveStudyId(study.id);
                setCopiedCode(false);
              }}
              className={`text-left p-4 rounded-2xl border transition-all duration-200 flex flex-col justify-between gap-3 relative overflow-hidden ${
                isSelected
                  ? 'bg-slate-900 border-cyan-500/60 shadow-xl shadow-cyan-950/30'
                  : 'bg-slate-950/50 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/50'
              }`}
            >
              {isSelected && (
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 to-indigo-500" />
              )}
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 text-xs font-mono font-medium">
                  {getCategoryIcon(study.category)}
                  <span className={isSelected ? 'text-cyan-300' : 'text-slate-400'}>
                    {study.categoryLabel}
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/90 text-slate-300">
                  {study.level}
                </span>
              </div>
              <div>
                <h4 className={`text-sm font-bold leading-snug line-clamp-2 ${isSelected ? 'text-white' : 'text-slate-200'}`}>
                  {study.title}
                </h4>
                <p className="text-xs text-slate-400 font-mono mt-1 truncate">
                  {study.projectTitle}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Architectural Study Console */}
      <div className="rounded-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-10 shadow-2xl space-y-8 relative overflow-hidden backdrop-blur-sm">
        
        {/* Ambient background glow */}
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Console Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 border-b border-slate-800/80 pb-6">
          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
              <span className="px-2.5 py-1 rounded-md bg-cyan-950 border border-cyan-800/60 text-cyan-400 font-semibold">
                {activeStudy.badge}
              </span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-300 font-semibold">
                Project: {activeStudy.projectTitle}
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {activeStudy.title}
            </h3>
            <p className="text-slate-300 text-sm max-w-4xl leading-relaxed">
              {activeStudy.summary}
            </p>
          </div>
        </div>

        {/* Production Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {activeStudy.metrics.map((metric, idx) => (
            <div 
              key={idx} 
              className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-1 hover:border-slate-700 transition-colors"
            >
              <div className="text-[11px] text-slate-400 font-mono">{metric.label}</div>
              <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-cyan-300 font-mono tracking-tight">
                {metric.value}
              </div>
              <div className="text-[11px] text-slate-500 leading-tight">{metric.detail}</div>
            </div>
          ))}
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap items-center gap-2 border-b border-slate-800/80 pb-3">
          <button
            onClick={() => setActiveTab('solution')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors flex items-center gap-2 ${
              activeTab === 'solution'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>The Problem & Solution</span>
          </button>

          <button
            onClick={() => setActiveTab('tradeoffs')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors flex items-center gap-2 ${
              activeTab === 'tradeoffs'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Sliders className="w-4 h-4" />
            <span>Trade-Offs & Rationale</span>
          </button>

          <button
            onClick={() => setActiveTab('flow')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors flex items-center gap-2 ${
              activeTab === 'flow'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <GitBranch className="w-4 h-4" />
            <span>Execution Flowchart</span>
          </button>

          <button
            onClick={() => setActiveTab('code')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors flex items-center gap-2 ${
              activeTab === 'code'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Terminal className="w-4 h-4" />
            <span>Code Architecture Blueprint</span>
          </button>
        </div>

        {/* Tab Content Panels */}
        <div className="min-h-[260px]">
          {activeTab === 'solution' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-5 space-y-4 p-5 rounded-2xl bg-rose-950/20 border border-rose-900/40">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold text-rose-400">
                  <AlertTriangle className="w-4 h-4" />
                  <span>THE NAIVE PITFALL</span>
                </div>
                <h4 className="text-base font-bold text-white leading-snug">
                  {activeStudy.problemStatement}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {activeStudy.whyNaiveApproachFails}
                </p>
              </div>

              <div className="lg:col-span-7 space-y-4 p-5 rounded-2xl bg-slate-950/70 border border-slate-800">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold text-emerald-400">
                  <Zap className="w-4 h-4" />
                  <span>THE ENGINEERED ARCHITECTURE</span>
                </div>
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                  {activeStudy.engineeredSolution}
                </p>
                <div className="pt-2 flex flex-wrap gap-2">
                  {activeStudy.tags.map((tag) => (
                    <span key={tag} className="text-xs font-mono px-2.5 py-1 rounded bg-slate-800/80 text-cyan-300 border border-slate-700">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'tradeoffs' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-slate-950/70 border border-emerald-500/30 space-y-2">
                  <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
                    ✓ What Was Prioritized
                  </div>
                  <h4 className="text-lg font-bold text-white">
                    {activeStudy.keyTradeoffs.prioritized}
                  </h4>
                </div>

                <div className="p-6 rounded-2xl bg-slate-950/70 border border-amber-500/30 space-y-2">
                  <div className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
                    ⚡ Accepted Engineering Cost
                  </div>
                  <h4 className="text-lg font-bold text-white">
                    {activeStudy.keyTradeoffs.acceptedCost}
                  </h4>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                  Architectural Rationale & Trade-off Justification
                </div>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {activeStudy.keyTradeoffs.rationale}
                </p>
              </div>
            </div>
          )}

          {activeTab === 'flow' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {activeStudy.flowSteps.map((step, idx) => (
                <div 
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3 relative flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-black text-cyan-400 px-2 py-0.5 rounded bg-cyan-950 border border-cyan-800/60">
                      STEP {step.step}
                    </span>
                    {idx < activeStudy.flowSteps.length - 1 && (
                      <ArrowRight className="w-4 h-4 text-slate-600 hidden lg:block absolute -right-3 top-6 z-10" />
                    )}
                  </div>
                  <div className="space-y-1.5">
                    <h5 className="text-sm font-bold text-white">{step.title}</h5>
                    <p className="text-xs text-slate-400 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'code' && (
            <div className="rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden">
              <div className="px-5 py-3 border-b border-slate-800 flex items-center justify-between bg-slate-900/60">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                  <span>{activeStudy.codeHighlight.title}</span>
                </div>
                <button
                  onClick={handleCopyCode}
                  className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-mono flex items-center gap-1.5 transition-colors"
                >
                  {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedCode ? 'Copied' : 'Copy Code'}</span>
                </button>
              </div>
              <div className="p-5 overflow-x-auto font-mono text-xs text-slate-300 leading-relaxed bg-[#0a0d14]">
                <pre>
                  <code>{activeStudy.codeHighlight.code}</code>
                </pre>
              </div>
            </div>
          )}
        </div>

      </div>

    </section>
  );
};
