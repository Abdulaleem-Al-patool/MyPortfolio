import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import './ProjectCard.css';
import { useRevealOnMount } from '../hooks/useRevealOnMount.js';

export default function ProjectCard({ project, onSelect }) {
  const revealRef = useRevealOnMount();

  return (
    <article
      ref={revealRef}
      className="project-showcase-panel reveal-on-scroll"
      id={project.id}
    >
      {/* Editorial Content Breakdown */}
      <div className="showcase-content-side">
        {/* Unboxed Metadata & Category Kicker */}

        {/* Title */}
        <h3 className="showcase-title">
          <a
            href={`#${project.id}`}
            onClick={(e) => {
              e.preventDefault();
              onSelect(project);
            }}
          >
            {project.title}
          </a>
        </h3>

        {/* Summary Description */}
        <p className="showcase-description">
          {project.shortDescription || project.description}
        </p>

        {/* Compact Technology Tokens */}

        {/* Refined Case Study Action Trigger */}
        <div className="showcase-action-bar">
          <button
            type="button"
            className="showcase-action-btn"
            onClick={() => onSelect(project)}
            aria-label={`View Architecture & Case Study for ${project.title}`}
          >
            <span>Architecture &amp; Specs</span>
            <ArrowUpRight className="action-icon" aria-hidden="true" />
          </button>
        </div>
      </div>
    </article>
  );
}
