import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import './ProjectCard.css';

export default function ProjectCard({ project, onSelect }) {
  return (
    <article
      onClick={() => onSelect(project)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(project);
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`View technical case study for ${project.title}`}
      className="project-card"
    >
      <div>
        {/* Category & Status */}
        <div className="project-card-header">
          <span className="project-card-category">{project.category}</span>
          {project.metrics && project.metrics[0] && (
            <span className="project-card-metric">
              {project.metrics[0].value} {project.metrics[0].label}
            </span>
          )}
        </div>

        {/* Project Title */}
        <h3 className="project-card-title">
          {project.title}
        </h3>

        {/* Short Description */}
        <p className="project-card-desc">
          {project.shortDescription}
        </p>

        {/* Key Technologies */}
        <div className="project-card-techs">
          {project.technologies.slice(0, 4).map((tech, idx) => (
            <React.Fragment key={tech}>
              <span>{tech}</span>
              {idx < 3 && idx < project.technologies.length - 1 && (
                <span aria-hidden="true" className="project-card-tech-dot">·</span>
              )}
            </React.Fragment>
          ))}
          {project.technologies.length > 4 && (
            <span>+{project.technologies.length - 4}</span>
          )}
        </div>
      </div>

      {/* Footer Action */}
      <div className="project-card-footer">
        <span>View Technical Case Study</span>
        <ArrowUpRight className="project-card-arrow" />
      </div>
    </article>
  );
}
