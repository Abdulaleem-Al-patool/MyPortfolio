import React, { useEffect } from 'react';
import { X, ExternalLink, Github, FileText, Cpu, CheckCircle2, AlertCircle } from 'lucide-react';
import './ProjectModal.css';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    // Lock body scroll
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="project-modal-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="project-modal-window">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close project modal"
          className="project-modal-close-btn"
        >
          <X style={{ width: '1rem', height: '1rem' }} />
        </button>

        {/* Header */}
        <div className="project-modal-header">
          <div className="project-modal-categories">
            <span>{project.category}</span>
            {project.categories && project.categories.length > 1 && (
              <>
                <span aria-hidden="true" style={{ color: 'var(--text-secondary)' }}>·</span>
                <span style={{ color: 'var(--text-secondary)' }}>
                  {project.categories.filter((c) => c !== project.category).join(' · ')}
                </span>
              </>
            )}
          </div>
          <h2
            id="modal-title"
            className="project-modal-title"
          >
            {project.title}
          </h2>
          <p className="project-modal-desc">
            {project.description}
          </p>
        </div>

        {/* Links bar */}
        <div className="project-modal-links">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer noopener"
              className="project-modal-link-item"
            >
              <Github style={{ width: '0.875rem', height: '0.875rem' }} />
              <span>Source Repository</span>
              {project.github === '#' && (
                <span style={{ fontSize: '0.625rem', color: 'var(--text-secondary)' }}>(Pending release)</span>
              )}
            </a>
          )}
          {project.huggingFace && (
            <a
              href={project.huggingFace}
              target="_blank"
              rel="noreferrer noopener"
              className="project-modal-link-item"
            >
              <Cpu style={{ width: '0.875rem', height: '0.875rem' }} />
              <span>Hugging Face Checkpoint</span>
              {project.huggingFace === '#' && (
                <span style={{ fontSize: '0.625rem', color: 'var(--text-secondary)' }}>(Checkpoint)</span>
              )}
            </a>
          )}
          {project.paper && (
            <a
              href={project.paper}
              target="_blank"
              rel="noreferrer noopener"
              className="project-modal-link-item"
            >
              <FileText style={{ width: '0.875rem', height: '0.875rem' }} />
              <span>Technical Report</span>
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer noopener"
              className="project-modal-link-item link-accent"
            >
              <ExternalLink style={{ width: '0.875rem', height: '0.875rem' }} />
              <span>Interactive Demo</span>
            </a>
          )}
        </div>

        {/* Technical Deep Dive Sections */}
        <div className="project-modal-deepdive">
          {/* Problem & Approach */}
          <div className="project-modal-problem-grid">
            <div className="project-modal-box">
              <div className="project-modal-box-header" style={{ color: 'var(--warning)' }}>
                <AlertCircle style={{ width: '0.875rem', height: '0.875rem' }} />
                <span>The Problem</span>
              </div>
              <p className="project-modal-box-desc">
                {project.problem}
              </p>
            </div>

            <div className="project-modal-box">
              <div className="project-modal-box-header" style={{ color: 'var(--accent)' }}>
                <CheckCircle2 style={{ width: '0.875rem', height: '0.875rem' }} />
                <span>Engineering Approach</span>
              </div>
              <p className="project-modal-box-desc">
                {project.approach}
              </p>
            </div>
          </div>

          {/* Architecture */}
          <div>
            <h3 className="project-modal-section-title">
              Architecture & System Flow
            </h3>
            <p style={{
              marginTop: '0.5rem',
              borderRadius: '4px',
              border: '1px solid var(--border-subtle)',
              backgroundColor: 'var(--bg-surface)',
              padding: '0.875rem',
              fontSize: '0.75rem',
              color: 'var(--text-primary)',
              lineHeight: 1.6,
            }}>
              {project.architecture}
            </p>
          </div>

          {/* Pipeline Steps if present */}
          {project.pipelineSteps && (
            <div>
              <h3 className="project-modal-section-title">
                Pipeline Execution Stages
              </h3>
              <div className="project-modal-pipeline-grid">
                {project.pipelineSteps.map((st) => (
                  <div
                    key={st.step}
                    className="project-modal-pipeline-card"
                  >
                    <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--accent)' }}>
                      {st.step}
                    </span>
                    <div>
                      <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{st.name}</div>
                      <div style={{ marginTop: '0.125rem', fontSize: '0.6875rem', color: 'var(--text-secondary)' }}>
                        {st.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Reported Results */}
          {project.results && project.results.length > 0 && (
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <h3 className="project-modal-section-title">
                  Evaluation & Verification Metrics
                </h3>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', color: 'var(--accent)' }}>
                  Evaluated Test-Set Benchmarks
                </span>
              </div>
              <div className="project-modal-metrics-grid">
                {project.results.map((res) => (
                  <div
                    key={res.metric}
                    className="project-modal-metric-card"
                  >
                    <div className="project-modal-metric-val">
                      {res.value}
                    </div>
                    <div className="project-modal-metric-lbl">
                      {res.metric}
                    </div>
                    <div className="project-modal-metric-note">
                      {res.note}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technologies */}
          <div>
            <h3 className="project-modal-section-title">
              Technologies & Frameworks
            </h3>
            <div style={{
              marginTop: '0.5rem',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '0.375rem 0.75rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: 'var(--text-secondary)',
            }}>
              {project.technologies.map((t, idx) => (
                <React.Fragment key={t}>
                  <span style={{ color: 'var(--text-primary)' }}>{t}</span>
                  {idx < project.technologies.length - 1 && (
                    <span aria-hidden="true" style={{ color: 'var(--border-subtle)' }}>·</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Technical Challenges */}
          {project.challenges && (
            <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1rem' }}>
              <h3 className="project-modal-section-title">
                Key Engineering Challenges Overcome
              </h3>
              <p style={{ marginTop: '0.375rem', fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                {project.challenges}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
