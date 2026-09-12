import { Code2, ArrowUp, Github } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-[#080b11] py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-600 p-[1.5px] flex items-center justify-center">
              <div className="w-full h-full bg-[#0a0d14] rounded-[6.5px] flex items-center justify-center">
                <Code2 className="w-4 h-4 text-cyan-400" />
              </div>
            </div>
            <div>
              <div className="font-bold text-white text-sm">Dan Lanre</div>
              <div className="text-[10px] text-slate-400 font-mono">Full-Stack & AI Systems Developer</div>
            </div>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-slate-400">
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#architecture" className="hover:text-white transition-colors">Architecture</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills & Tech</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            <a href="https://github.com/danlanre" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
              <Github className="w-3.5 h-3.5" />
              GitHub
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 shadow-sm"
            title="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
            <span className="text-[11px] font-mono">Back to top</span>
          </button>

        </div>

        <div className="border-t border-slate-800/60 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Dan Lanre. All engineering projects and codebases built with precision.
          </div>
          <div className="flex items-center gap-1">
            <span>Built with React, Vite, TypeScript & Tailwind CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
