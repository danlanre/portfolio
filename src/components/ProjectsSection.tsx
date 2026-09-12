import { useState, useMemo } from 'react';
import { Search, X, Sparkles } from 'lucide-react';
import { Project, ProjectCategory } from '../types';
import { ProjectCard } from './ProjectCard';
import { CATEGORIES } from '../data/projects';

interface ProjectsSectionProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects,
  onSelectProject,
  searchQuery,
  setSearchQuery,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');

  // Filter projects based on category and search query
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      // Category filter
      const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;

      // Search query filter (matches title, subtitle, description, tech stack tags)
      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory;

      const matchesQuery = 
        project.title.toLowerCase().includes(query) ||
        project.subtitle.toLowerCase().includes(query) ||
        project.shortDescription.toLowerCase().includes(query) ||
        project.categoryLabel.toLowerCase().includes(query) ||
        project.techStack.some((tech) => tech.name.toLowerCase().includes(query));

      return matchesCategory && matchesQuery;
    });
  }, [projects, selectedCategory, searchQuery]);

  const handleTagClick = (tag: string) => {
    setSearchQuery(tag);
    setSelectedCategory('all');
  };

  return (
    <section id="projects" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-slate-800/80">
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/60 border border-cyan-800/50 text-cyan-400 text-xs font-mono font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured Applications & Engineering Projects
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Every app below was designed, built, and tested locally. Click any project to inspect its architecture, problem-solving approach, and copy the local launch command.
          </p>
        </div>

        {/* Live Search Input */}
        <div className="relative w-full md:w-80">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by tech or keyword..."
            className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 text-slate-200 placeholder-slate-500 text-sm transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Filter Category Pills */}
      <div className="py-6 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id as ProjectCategory)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-cyan-500 text-white shadow-md shadow-cyan-500/20'
                    : 'bg-slate-900/60 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  isActive ? 'bg-cyan-600 text-white' : 'bg-slate-800 text-slate-500'
                }`}>
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Count indicator */}
        <div className="text-xs text-slate-400 font-mono">
          Showing <span className="text-cyan-400 font-bold">{filteredProjects.length}</span> of {projects.length} apps
        </div>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={onSelectProject}
              onTagClick={handleTagClick}
            />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="py-16 text-center space-y-4 rounded-2xl bg-slate-900/40 border border-slate-800">
          <div className="w-12 h-12 rounded-full bg-slate-800 text-slate-400 flex items-center justify-center mx-auto">
            <Search className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-white">No projects found matching "{searchQuery}"</h3>
            <p className="text-sm text-slate-400">Try adjusting your search query or reset your filters.</p>
          </div>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
            }}
            className="px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold"
          >
            Reset Filters
          </button>
        </div>
      )}

    </section>
  );
};
