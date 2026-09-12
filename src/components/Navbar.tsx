import { useState, useEffect } from 'react';
import { 
  Code2, 
  Layers, 
  Cpu, 
  User, 
  Mail, 
  FileText, 
  Menu, 
  X, 
  Sun, 
  Moon, 
  Sparkles
} from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode, onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Projects', href: '#projects', icon: Layers },
    { name: 'Skills & Tech', href: '#skills', icon: Cpu },
    { name: 'About', href: '#about', icon: User },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#0a0d14]/85 dark:bg-[#0a0d14]/85 bg-white/90 backdrop-blur-md border-b border-slate-800/60 shadow-lg shadow-black/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-400 to-indigo-600 p-[2px] shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all duration-300">
              <div className="w-full h-full rounded-full overflow-hidden bg-[#0a0d14]">
                <img src="/profile.jpg" alt="Dan Lanre" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
            <div>
              <div className="font-bold text-base sm:text-lg tracking-tight text-white dark:text-white flex items-center gap-1.5">
                <span>Dan Lanre</span>
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" title="Available for work"></span>
              </div>
              <p className="text-[11px] text-slate-400 font-mono">Full-Stack & AI Systems</p>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3.5 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/50 transition-colors flex items-center gap-2"
                >
                  <Icon className="w-4 h-4 text-slate-400" />
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs & Controls */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Resume Button */}
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-lg bg-slate-800/80 hover:bg-slate-700/80 text-cyan-300 border border-cyan-500/30 hover:border-cyan-400/60 shadow-sm transition-all duration-200"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume / CV</span>
            </button>

            {/* Quick Contact Button */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-md shadow-cyan-500/25 transition-all duration-200"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Hire Me</span>
            </a>

            {/* Dark/Light toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors"
              aria-label="Toggle Theme"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-slate-300" />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors"
              aria-label="Toggle Theme"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-slate-300" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors"
              aria-label="Open Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#0a0d14]/95 border-b border-slate-800/80 px-4 pt-3 pb-6 space-y-3 backdrop-blur-xl">
          <div className="space-y-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:text-cyan-400 hover:bg-slate-800/50 transition-colors"
                >
                  <Icon className="w-5 h-5 text-slate-400" />
                  {link.name}
                </a>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full py-2.5 px-4 rounded-lg bg-slate-800 text-cyan-300 border border-cyan-500/30 text-sm font-semibold flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4" />
              <span>View Resume / CV</span>
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 px-4 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-md"
            >
              <Mail className="w-4 h-4" />
              <span>Get in Touch</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
