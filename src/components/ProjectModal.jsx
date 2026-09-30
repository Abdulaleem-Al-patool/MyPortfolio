import React, { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import {
  X,
  ExternalLink,
  Github,
  FileText,
  Cpu,
  CheckCircle2,
  AlertCircle,
  Network,
  Flag,
} from 'lucide-react';
import './ProjectModal.css';

const ICON = { width: '1rem', height: '1rem' };

const CLOSE_MS = 200; // must match the exit animation duration in the CSS

export default function ProjectModal({ project, onClose }) {
  const closeRef = useRef(null);
  const timerRef = useRef(null);
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;
  const [closing, setClosing] = useState(false);

  // Play the exit animation first, then let the parent unmount us
  const requestClose = useCallback(() => {
    if (timerRef.current) return;
    setClosing(true);
    timerRef.current = setTimeout(() => onCloseRef.current(), CLOSE_MS);
  }, []);

  useEffect(() => () => clearTimeout(timerRef.current), []);

  // Stable deps: the effect no longer re-runs on every parent re-render
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') requestClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus({ preventScroll: true });
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [requestClose]);

  if (!project) return null;

  const categories = project.categories?.length
    ? project.categories
    : [project.category].filter(Boolean);

  const hasLinks =
    project.github || project.huggingFace || project.paper || project.demo;

  // Rendered in document.body so it escapes .app-main's stacking context
  // (z-index: 10) and sits above the fixed navbar.
  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className={`project-modal-backdrop ${closing ? 'is-closing' : ''}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) requestClose();
      }}
    >
      <div className="project-modal-window">
        {/* ---------- Header (stays visible while the body scrolls) ---------- */}
        <header className="project-modal-header">
          <div className="project-modal-header-text">
         
            <h2 id="modal-title" className="project-modal-title">
              {project.title}
            </h2>
          </div>

          <button
            ref={closeRef}
            type="button"
            onClick={requestClose}
            aria-label="Close project details"
            className="project-modal-close-btn"
          >
            <X style={ICON} />
          </button>
        </header>

        {/* ---------- Scrollable body ---------- */}
        <div className="project-modal-body">
          <p className="project-modal-desc">{project.description}</p>

          {hasLinks && (
            <div className="project-modal-links">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="project-modal-link-item link-accent"
                >
                  <ExternalLink style={ICON} />
                  <span>Live demo</span>
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="project-modal-link-item"
                >
                  <Github style={ICON} />
                  <span>Source code</span>
                </a>
              )}
              {project.huggingFace && (
                <a
                  href={project.huggingFace}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="project-modal-link-item"
                >
                  <Cpu style={ICON} />
                  <span>Hugging Face model</span>
                </a>
              )}
              {project.paper && (
                <a
                  href={project.paper}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="project-modal-link-item"
                >
                  <FileText style={ICON} />
                  <span>Technical report</span>
                </a>
              )}
            </div>
          )}

          {/* Key results: the focal point of the modal */}
          {project.results?.length > 0 && (
            <section className="project-modal-section">
              <h3 className="project-modal-section-title">Key results</h3>
              <div className="project-modal-metrics-grid">
                {project.results.map((res) => (
                  <div key={res.metric} className="project-modal-metric-card">
                    <div className="project-modal-metric-val">{res.value}</div>
                    <div className="project-modal-metric-lbl">{res.metric}</div>
                    <div className="project-modal-metric-note">{res.note}</div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Problem and approach */}
          <section className="project-modal-section">
            <div className="project-modal-problem-grid">
              <div className="project-modal-box is-problem">
                <div className="project-modal-box-header">
                  <AlertCircle style={ICON} />
                  <span>The problem</span>
                </div>
                <p className="project-modal-box-desc">{project.problem}</p>
              </div>

              <div className="project-modal-box is-approach">
                <div className="project-modal-box-header">
                  <CheckCircle2 style={ICON} />
                  <span>Engineering approach</span>
                </div>
                <p className="project-modal-box-desc">{project.approach}</p>
              </div>
            </div>
          </section>

          {/* Architecture */}
          <section className="project-modal-section">
            <h3 className="project-modal-section-title">
              <Network style={ICON} />
              <span>Architecture and system flow</span>
            </h3>
            <p className="project-modal-architecture">{project.architecture}</p>
          </section>

          {/* Pipeline steps (only when the project defines them) */}
          {project.pipelineSteps?.length > 0 && (
            <section className="project-modal-section">
              <h3 className="project-modal-section-title">Pipeline stages</h3>
              <ol className="project-modal-pipeline-grid">
                {project.pipelineSteps.map((st) => (
                  <li key={st.step} className="project-modal-pipeline-card">
                    <span className="pipeline-step">{st.step}</span>
                    <div>
                      <div className="pipeline-name">{st.name}</div>
                      <div className="pipeline-desc">{st.desc}</div>
                    </div>
                  </li>
                ))}
              </ol>
            </section>
          )}

          {/* Technologies */}
          <section className="project-modal-section">
            <h3 className="project-modal-section-title">Technologies</h3>
            <div className="project-modal-tech">
              {project.technologies.map((t) => (
                <span key={t} className="project-modal-tech-token">
                  {t}
                </span>
              ))}
            </div>
          </section>

          {/* Challenges */}
          {project.challenges && (
            <section className="project-modal-section project-modal-challenges">
              <h3 className="project-modal-section-title">
                <Flag style={ICON} />
                <span>Challenges overcome</span>
              </h3>
              <p className="project-modal-challenges-text">
                {project.challenges}
              </p>
            </section>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}