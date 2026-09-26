import React, { useState, useMemo } from 'react';
import { filterCategories, projects } from '../data/projects.js';
import ProjectCard from './ProjectCard.jsx';
import ProjectModal from './ProjectModal.jsx';

export default function ProjectGrid() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return projects;
    return projects.filter(
      (p) =>
        p.category === selectedCategory ||
        (p.categories && p.categories.includes(selectedCategory))
    );
  }, [selectedCategory]);

  return (
    <div>
      {/* Category Filter Bar - Functional Segmented Buttons (No static pills) */}
      <div className="mb-8 flex flex-wrap items-center gap-1.5 rounded-[6px] border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-1.5 sm:inline-flex">
        {filterCategories.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-[4px] px-3.5 py-1.5 text-xs font-mono transition-all duration-200 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] ${
                isActive
                  ? 'bg-[var(--accent)] text-[var(--bg-primary)] font-bold shadow-[0_2px_12px_rgba(79,189,186,0.35)]'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)]'
              }`}
              aria-pressed={isActive}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onSelect={setActiveModalProject}
          />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="rounded-[8px] border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-12 text-center text-sm text-[var(--text-secondary)]">
          No projects found in this category.
        </div>
      )}

      {/* Project Detail Modal */}
      {activeModalProject && (
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      )}
    </div>
  );
}
