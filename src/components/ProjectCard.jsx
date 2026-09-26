import React from 'react';
import { ArrowUpRight } from 'lucide-react';

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
      className="group relative flex flex-col justify-between overflow-hidden rounded-[8px] border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-6 transition-all duration-200 hover:border-[var(--accent)] hover:bg-[var(--bg-surface)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] text-left cursor-pointer"
    >
      <div>
        {/* Category & Status */}
        <div className="flex items-center justify-between text-xs font-mono mb-3">
          <span className="text-[var(--accent)] font-semibold">{project.category}</span>
          {project.metrics && project.metrics[0] && (
            <span className="text-[11px] text-[var(--text-secondary)] font-mono">
              {project.metrics[0].value} {project.metrics[0].label}
            </span>
          )}
        </div>

        {/* Project Title */}
        <h3 className="text-xl font-bold tracking-tight text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors duration-150">
          {project.title}
        </h3>

        {/* Short Description */}
        <p className="mt-2.5 text-sm text-[var(--text-secondary)] line-clamp-3 leading-relaxed font-body">
          {project.shortDescription}
        </p>

        {/* Key Technologies */}
        <div className="mt-5 flex flex-wrap items-center gap-1.5 text-xs text-[var(--text-secondary)] font-mono">
          {project.technologies.slice(0, 4).map((tech, idx) => (
            <React.Fragment key={tech}>
              <span className="text-[var(--text-secondary)]">{tech}</span>
              {idx < 3 && idx < project.technologies.length - 1 && (
                <span aria-hidden="true" className="text-[var(--border-subtle)]">·</span>
              )}
            </React.Fragment>
          ))}
          {project.technologies.length > 4 && (
            <span className="text-[var(--text-secondary)]">+{project.technologies.length - 4}</span>
          )}
        </div>
      </div>

      {/* Footer Action */}
      <div className="mt-6 pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs font-mono text-[var(--text-secondary)] group-hover:text-[var(--accent)] transition-colors duration-150">
        <span>View Technical Case Study</span>
        <ArrowUpRight className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </article>
  );
}
