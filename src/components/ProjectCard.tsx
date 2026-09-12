import { 
  ShieldCheck, 
  Video, 
  Camera, 
  ShoppingBag, 
  GraduationCap, 
  ShieldAlert, 
  Music, 
  Subtitles, 
  Gamepad2,
  Terminal,
  ChevronRight,
  FolderGit2,
  Sparkles,
  ExternalLink,
  Github
} from 'lucide-react';
import { Project } from '../types';

// Map icon string names to Lucide icons
const ICON_MAP: Record<string, React.ElementType> = {
  ShieldCheck,
  Video,
  Camera,
  ShoppingBag,
  GraduationCap,
  ShieldAlert,
  Music,
  Subtitles,
  Gamepad2,
};

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
  onTagClick: (tag: string) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect, onTagClick }) => {
  const IconComponent = ICON_MAP[project.iconName] || Terminal;

  return (
    <div className="group relative flex flex-col rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700/80 transition-all duration-300 hover:shadow-2xl hover:shadow-black/40 hover:-translate-y-1 overflow-hidden">
      
      {/* Top Graphic Banner with Ambient Gradient */}
      <div className={`relative h-44 w-full bg-gradient-to-br ${project.primaryColor} p-6 flex flex-col justify-between overflow-hidden`}>
        {/* Background Mesh/Noise Effects */}
        <div className="absolute inset-0 bg-black/25 backdrop-blur-[2px]"></div>
        <div className="absolute -right-6 -bottom-6 w-36 h-36 bg-white/10 rounded-full blur-xl pointer-events-none group-hover:scale-150 transition-transform duration-700"></div>

        {/* Top Badges */}
        <div className="relative z-10 flex items-center justify-between">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-black/40 text-white border border-white/15 backdrop-blur-md">
            {project.categoryLabel}
          </span>
          <div className="flex items-center gap-1.5">
            {project.links?.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold tracking-wide bg-white text-slate-950 hover:bg-cyan-300 shadow-md flex items-center gap-1 transition-colors"
                title={`Open ${project.title} live on Vercel / Web`}
              >
                <span>Live App</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium tracking-wide bg-white/20 text-white border border-white/20 backdrop-blur-md">
              {project.status}
            </span>
          </div>
        </div>

        {/* Center Icon Graphic */}
        <div className="relative z-10 flex items-center gap-3">
          <div className="w-14 h-14 rounded-2xl bg-white/15 border border-white/25 backdrop-blur-md flex items-center justify-center shadow-lg group-hover:rotate-6 group-hover:scale-110 transition-all duration-300">
            <IconComponent className="w-7 h-7 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white tracking-tight drop-shadow-sm">
              {project.title}
            </h3>
            <p className="text-xs text-white/80 font-medium">
              {project.subtitle}
            </p>
          </div>
        </div>

        {/* Local Folder indicator at bottom right of card header */}
        <div className="relative z-10 flex items-center justify-between text-[11px] text-white/70 font-mono">
          <span className="flex items-center gap-1">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>/{project.localDir}</span>
          </span>
          {project.featured && (
            <span className="flex items-center gap-1 text-amber-300 font-semibold">
              <Sparkles className="w-3 h-3" />
              Featured
            </span>
          )}
        </div>
      </div>

      {/* Body Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        
        {/* Description */}
        <div className="space-y-3">
          <p className="text-sm text-slate-300 line-clamp-3 leading-relaxed">
            {project.shortDescription}
          </p>

          {/* Metrics Pills (if available) */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-2 gap-2 py-1">
              {project.metrics.slice(0, 2).map((metric, idx) => (
                <div key={idx} className="px-2.5 py-1.5 rounded-lg bg-slate-800/60 border border-slate-800 text-xs flex flex-col">
                  <span className="text-[10px] text-slate-400 font-medium">{metric.label}</span>
                  <span className="font-semibold text-slate-200 font-mono truncate">{metric.value}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Tech Stack Pills */}
        <div className="space-y-2 pt-2 border-t border-slate-800/80">
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  onTagClick(tech.name);
                }}
                className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-800/80 hover:bg-cyan-950/60 hover:text-cyan-300 text-slate-300 border border-slate-700/60 transition-colors"
                title={`Filter projects by ${tech.name}`}
              >
                {tech.name}
              </button>
            ))}
          </div>
        </div>

        {/* Card Footer Actions */}
        <div className="pt-3 border-t border-slate-800 flex flex-wrap items-center justify-between gap-2">
          {/* Live App / Demo Link */}
          {project.links?.demo ? (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-xs font-semibold shadow-md shadow-cyan-500/20 transition-all duration-200 group/link"
              title={`Open ${project.title} live on Vercel/Web`}
            >
              <span>Launch App</span>
              <ExternalLink className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
            </a>
          ) : (
            <button
              onClick={() => onSelect(project)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/90 hover:bg-slate-700 text-slate-300 text-xs font-mono font-medium transition-colors"
              title="Click to view local execution command"
            >
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span>Run Locally</span>
            </button>
          )}

          {/* Right Action Buttons */}
          <div className="flex items-center gap-1.5">
            {project.links?.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                title="View Source Code on GitHub"
              >
                <Github className="w-3.5 h-3.5" />
              </a>
            )}

            {/* Open Details / Case Study Button */}
            <button
              onClick={() => onSelect(project)}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-400 hover:text-cyan-300 text-xs font-semibold transition-all duration-200 group/btn"
              title="View Architecture & Case Study"
            >
              <span>Details</span>
              <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};
