import React from 'react';
import { ArrowUp, Terminal, Activity, Layers, Cpu, ShieldCheck } from 'lucide-react';
import './ProjectCard.css';

export default function ProjectCard({ project, onSelect, index }) {
  // Determine an illustrative graphic mockup/preview based on visualType
  const renderVisual = () => {
    switch (project.visualType) {
      case 'pipeline':
        return (
          <div className="project-preview-box pipeline-preview">
            <div className="preview-top-bar">
              <span className="dot dot-red" />
              <span className="dot dot-yellow" />
              <span className="dot dot-green" />
              <span className="preview-title">arat5_hierarchical_eval.py</span>
            </div>
            <div className="preview-body font-mono">
              <div className="code-line"><span className="c-blue">from</span> transformers <span className="c-blue">import</span> AutoModelForSeq2SeqLM</div>
              <div className="code-line">model = <span className="c-green">"UBC-NLP/AraT5-base"</span></div>
              <div className="code-line c-dim"># Multi-tier Arabic Taxonomy Path</div>
              <div className="code-line">target = <span className="c-yellow">"اقتصاد &gt; بنوك &gt; نتائج مالية"</span></div>
              <div className="metric-badge-floating">
                <span className="badge-value">95.70%</span>
                <span className="badge-note">Exact Match</span>
              </div>
            </div>
          </div>
        );
      case 'ledger':
        return (
          <div className="project-preview-box ledger-preview">
            <div className="preview-top-bar">
              <span className="dot dot-red" />
              <span className="dot dot-yellow" />
              <span className="dot dot-green" />
              <span className="preview-title">FWallet · SRS Merchant Dashboard</span>
            </div>
            <div className="ledger-card-demo">
              <div className="ledger-stat">
                <span className="l-label">Merchant Balance</span>
                <span className="l-val">$48,290.00</span>
              </div>
              <div className="ledger-row">
                <span>Provider: Al-Kuraimi</span>
                <span className="status-ok">Active</span>
              </div>
              <div className="ledger-row">
                <span>Sync Cache</span>
                <span className="c-yellow">TanStack Query</span>
              </div>
            </div>
          </div>
        );
      case 'terminal':
        return (
          <div className="project-preview-box terminal-preview">
            <div className="preview-top-bar">
              <Terminal style={{ width: '14px', height: '14px', color: 'var(--main_color)' }} />
              <span className="preview-title">ftool --clean-architecture</span>
            </div>
            <div className="preview-body font-mono">
              <div className="code-line prompt">$ ftool del --final -r ./build</div>
              <div className="code-line c-dim">[Domain] Entity validation OK</div>
              <div className="code-line c-dim">[Application] Recursive use case run</div>
              <div className="code-line"><span className="c-green">✓ Clean Architecture (4 Layers)</span></div>
            </div>
          </div>
        );
      case 'simulator':
        return (
          <div className="project-preview-box simulator-preview">
            <div className="preview-top-bar">
              <Activity style={{ width: '14px', height: '14px', color: 'var(--main_color)' }} />
              <span className="preview-title">Algorithm Simulator · PySide6</span>
            </div>
            <div className="simulator-graph font-mono">
              <div className="sim-bars">
                <div className="bar b1" style={{ height: '30%' }}><span>4</span></div>
                <div className="bar b2" style={{ height: '75%' }}><span>9</span></div>
                <div className="bar b3 active" style={{ height: '90%' }}><span>12</span></div>
                <div className="bar b4" style={{ height: '50%' }}><span>6</span></div>
              </div>
              <div className="sim-step">Step 14/42 · State Machine Bidirectional</div>
            </div>
          </div>
        );
      default:
        return (
          <div className="project-preview-box default-preview">
            <Layers style={{ width: '48px', height: '48px', color: 'var(--main_color)' }} />
            <span>{project.title}</span>
          </div>
        );
    }
  };

  return (
    <article className="project_box" id={project.id}>
      {/* Visual Side */}
      <div className="visual_wrap" onClick={() => onSelect(project)}>
        {renderVisual()}
      </div>

      {/* Text Content Side */}
      <div className="text">
        <h4>
          <span>{project.category}</span>
        </h4>
        <h3>
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
        <p>{project.description || project.shortDescription}</p>

        {/* Technologies List */}
        <div className="project-tech-tags">
          {project.technologies.slice(0, 4).map((tech) => (
            <span key={tech} className="tech-tag">
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="tech-tag-more">+{project.technologies.length - 4} more</span>
          )}
        </div>

        {/* Signature Circular 45-degree arrow button from uploaded design */}
        <div className="project-action-row">
          <button
            type="button"
            className="link"
            aria-label={`Open details for ${project.title}`}
            onClick={() => onSelect(project)}
          >
            <ArrowUp style={{ width: '22px', height: '22px' }} />
          </button>
          <span className="case-study-label" onClick={() => onSelect(project)}>
            View Case Study &amp; Architecture
          </span>
        </div>
      </div>
    </article>
  );
}
