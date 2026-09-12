import { 
  User, 
  MapPin, 
  ShieldCheck, 
  WifiOff, 
  Sparkles,
  Award
} from 'lucide-react';
import { DEVELOPER_INFO } from '../data/skills';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Personal Bio */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-950/60 border border-emerald-800/50 text-emerald-400 text-xs font-mono font-semibold">
            <User className="w-3.5 h-3.5" />
            <span>ENGINEERING PHILOSOPHY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Building Systems That Solve Tangible Real-World Problems
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            I am a full-stack engineer and AI systems developer based in Lagos, Nigeria, working globally. I specialize in designing and engineering software that performs flawlessly under demanding real-world conditions—from low-bandwidth African commerce to zero-latency generative video and enterprise agent security.
          </p>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Rather than building superficial clones, every application I construct addresses real edge cases: like building offline PRNG multiplayer challenge rooms so students without internet can still practice for national exams (CBT Master), or writing canvas pixel-manipulation algorithms that run on-device with zero server uploads (PassPortPro).
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
            <span className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800">
              <MapPin className="w-4 h-4 text-emerald-400" />
              <span>{DEVELOPER_INFO.location}</span>
            </span>
            <span className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800">
              <Award className="w-4 h-4 text-cyan-400" />
              <span>Full-Stack & Systems Mindset</span>
            </span>
          </div>
        </div>

        {/* Right Column: Three Core Principles */}
        <div className="lg:col-span-5 space-y-4">
          
          <div className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-2 hover:border-cyan-500/40 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                <WifiOff className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white">Resilience & Offline-First</h3>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed pl-12">
              High-value software should never crash or become useless when connectivity drops. I architect applications with Service Workers, IndexedDB, and low-data modes.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-2 hover:border-emerald-500/40 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white">Deterministic AI Safety</h3>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed pl-12">
              LLMs need deterministic boundaries. I build policy pipelines, risk scoring engines, and human approval queues to govern autonomous agents safely.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-2 hover:border-purple-500/40 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white">Native Performance</h3>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed pl-12">
              Leveraging the HTML5 Canvas API, Web Audio, and multi-threading for buttery 60 FPS client experiences without bloated third-party dependencies.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
