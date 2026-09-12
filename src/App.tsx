import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { ArchitectureSection } from './components/ArchitectureSection';
import { SkillsSection } from './components/SkillsSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
import { PROJECTS } from './data/projects';
import { Project } from './types';

export function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('portfolio_theme');
    return saved ? saved === 'dark' : true;
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    localStorage.setItem('portfolio_theme', darkMode ? 'dark' : 'light');
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, [darkMode]);

  const handleExploreProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'bg-[#0a0d14] text-slate-100' : 'bg-slate-50 text-slate-900'
    }`}>
      
      {/* Navigation Bar */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero */}
        <Hero
          onExploreProjects={handleExploreProjects}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* 9 Applications Showcase Hub */}
        <ProjectsSection
          projects={PROJECTS}
          onSelectProject={(proj) => setSelectedProject(proj)}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        {/* Senior Architectural Deep-Dives */}
        <ArchitectureSection />

        {/* Technical Skills Radar */}
        <SkillsSection />

        {/* Engineering Philosophy & Bio */}
        <AboutSection />

        {/* Contact & Inquiries */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Project Case Study Drawer Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Resume / CV Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

    </div>
  );
}

export default App;
