import React from 'react';
import { 
  BrainCircuit, 
  Layout, 
  Server, 
  Terminal, 
  CheckCircle2, 
  Sparkles,
  Layers
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/skills';

const ICON_MAP: Record<string, React.ElementType> = {
  BrainCircuit,
  Layout,
  Server,
  Terminal,
};

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-slate-950/40 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-950/60 border border-indigo-800/50 text-indigo-400 text-xs font-mono font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Specialized Skills & Technology Stack
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Hands-on expertise cultivated through building full-scale applications, autonomous AI engines, localized fintech workflows, and high-performance client-side graphic tools.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const Icon = ICON_MAP[cat.icon] || Layers;
            return (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700/90 transition-all duration-300 space-y-6"
              >
                {/* Category Header */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {cat.description}
                    </p>
                  </div>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-slate-200 flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                          {skill.name}
                        </span>
                        <div className="flex items-center gap-2 font-mono">
                          {skill.badge && (
                            <span className="px-2 py-0.5 rounded bg-slate-800 text-[10px] text-slate-300 border border-slate-700">
                              {skill.badge}
                            </span>
                          )}
                          <span className="text-slate-400 text-[11px] font-semibold">{skill.level}</span>
                        </div>
                      </div>
                      
                      {/* Visual progress bar */}
                      <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 transition-all duration-500"
                          style={{ width: `${skill.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
