import React, { useState, useMemo } from 'react';
import { filterCategories, projects } from '../data/projects.js';
import ProjectCard from './ProjectCard.jsx';
import ProjectModal from './ProjectModal.jsx';
import './ProjectGrid.css';

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
      {/* Category Filter Bar */}
      <div className="project-filter-bar">
        {filterCategories.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`project-filter-btn ${isActive ? 'is-active' : ''}`}
              aria-pressed={isActive}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div className="project-grid-cards">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onSelect={setActiveModalProject}
          />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="project-grid-empty">
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
