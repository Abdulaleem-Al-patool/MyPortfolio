import React from 'react';
import { ArrowUpRight, Terminal, Activity, Layers, Sparkles } from 'lucide-react';
import './ProjectCard.css';

export default function ProjectCard({ project, onSelect }) {
  // Render high-fidelity, immersive mini-viewport previews
  const renderVisual = () => {
    switch (project.visualType) {
      case 'pipeline':
        return (
          <div className="showcase-preview-frame pipeline-preview">
            <div className="preview-chrome">
              <div className="chrome-controls">
                <span className="chrome-dot dot-red" />
                <span className="chrome-dot dot-yellow" />
                <span className="chrome-dot dot-green" />
              </div>
              <span className="chrome-filename font-mono">arat5_hierarchical_eval.py</span>
              <span className="chrome-badge font-mono">AraT5-base</span>
            </div>
            <div className="preview-canvas font-mono">
              <div className="code-line"><span className="c-blue">from</span> transformers <span className="c-blue">import</span> AutoModelForSeq2SeqLM</div>
              <div className="code-line">model = <span className="c-green">"UBC-NLP/AraT5-base"</span></div>
              <div className="code-line c-dim"># Multi-tier Arabic Taxonomy Path</div>
              <div className="code-line">target = <span className="c-yellow">"اقتصاد &gt; بنوك &gt; نتائج مالية"</span></div>
              <div className="preview-metric-chip">
                <span className="chip-score">95.70%</span>
                <span className="chip-label">Exact Match · Test Set</span>
              </div>
            </div>
          </div>
        );

      case 'ledger':
        return (
          <div className="showcase-preview-frame ledger-preview">
            <div className="preview-chrome">
              <div className="chrome-controls">
                <span className="chrome-dot dot-red" />
                <span className="chrome-dot dot-yellow" />
                <span className="chrome-dot dot-green" />
              </div>
              <span className="chrome-filename font-mono">FWallet · SRS Merchant Ledger</span>
              <span className="chrome-badge font-mono">SRS Compliant</span>
            </div>
            <div className="preview-canvas ledger-canvas">
              <div className="ledger-balance-block">
                <span className="ledger-kicker">Merchant Available Balance</span>
                <div className="ledger-amount font-mono">$48,290.00</div>
              </div>
              <div className="ledger-meta-row font-mono">
                <span className="ledger-meta-item">
                  <span className="status-live-dot" />
                  Provider: Al-Kuraimi
                </span>
                <span className="ledger-meta-tag">TanStack Query</span>
              </div>
            </div>
          </div>
        );

      case 'terminal':
        return (
          <div className="showcase-preview-frame terminal-preview">
            <div className="preview-chrome">
              <div className="chrome-controls">
                <span className="chrome-dot dot-red" />
                <span className="chrome-dot dot-yellow" />
                <span className="chrome-dot dot-green" />
              </div>
              <span className="chrome-filename font-mono">ftool --clean-architecture</span>
              <span className="chrome-badge font-mono">Python 3</span>
            </div>
            <div className="preview-canvas font-mono terminal-canvas">
              <div className="code-line prompt">$ ftool del --final -r ./build</div>
              <div className="code-line c-dim">[Domain] Entity validation passed</div>
              <div className="code-line c-dim">[Application] Recursive use case run</div>
              <div className="code-line terminal-success">
                <span>✓ Clean Architecture (4 Decoupled Layers)</span>
              </div>
            </div>
          </div>
        );

      case 'simulator':
        return (
          <div className="showcase-preview-frame simulator-preview">
            <div className="preview-chrome">
              <div className="chrome-controls">
                <span className="chrome-dot dot-red" />
                <span className="chrome-dot dot-yellow" />
                <span className="chrome-dot dot-green" />
              </div>
              <span className="chrome-filename font-mono">State Machine Engine</span>
              <span className="chrome-badge font-mono">PySide6 · Qt</span>
            </div>
            <div className="preview-canvas simulator-canvas font-mono">
              <div className="sim-bars-track">
                <div className="sim-bar" style={{ height: '36%' }}><span>4</span></div>
                <div className="sim-bar" style={{ height: '68%' }}><span>9</span></div>
                <div className="sim-bar active-bar" style={{ height: '94%' }}><span>12</span></div>
                <div className="sim-bar" style={{ height: '52%' }}><span>6</span></div>
                <div className="sim-bar" style={{ height: '78%' }}><span>10</span></div>
              </div>
              <div className="sim-status-row">
                <span>Step 14/42 · Bidirectional History</span>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="showcase-preview-frame default-preview">
            <Layers style={{ width: '40px', height: '40px', color: 'var(--main_color)' }} />
            <span className="font-mono">{project.title}</span>
          </div>
        );
    }
  };

  return (
    <article className="project-showcase-panel reveal-on-scroll" id={project.id}>
      {/* Immersive Product Preview Window */}
      {/* <div
        className="showcase-media-side"
        onClick={() => onSelect(project)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && onSelect(project)}
        aria-label={`View interactive preview of ${project.title}`}
      >
         {renderVisual()} 
      </div> */}

      {/* Editorial Content Breakdown */}
      <div className="showcase-content-side">
        {/* Unboxed Metadata & Category Kicker */}
        {/* <div className="showcase-category-kicker">
          <span>{project.category}</span>
          {project.categories && project.categories.length > 1 && (
            <>
              <span aria-hidden="true" className="kicker-separator">·</span>
              <span className="kicker-secondary">
                {project.categories.filter((c) => c !== project.category).join(' · ')}
              </span>
            </>
          )}
        </div> */}

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
        {/* <div className="showcase-tech-tokens">
          {project.technologies.slice(0, 5).map((tech) => (
            <span key={tech} className="tech-token">
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="tech-token-more font-mono">
              +{project.technologies.length - 5}
            </span>
          )}
        </div> */}

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
