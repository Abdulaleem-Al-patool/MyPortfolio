import React, { useEffect } from 'react';
import { X, ExternalLink, Github, FileText, Cpu, CheckCircle2, AlertCircle } from 'lucide-react';

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
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-3xl rounded-[8px] border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-6 sm:p-8 shadow-[0_8px_32px_rgba(0,0,0,0.6)] my-8 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close project modal"
          className="absolute right-4 top-4 rounded-[4px] border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-2 text-[var(--text-secondary)] hover:text-white hover:border-[var(--accent-dim)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Header */}
        <div className="pr-10">
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[var(--accent)]">
            <span>{project.category}</span>
            {project.categories && project.categories.length > 1 && (
              <>
                <span aria-hidden="true" className="text-[var(--text-secondary)]">·</span>
                <span className="text-[var(--text-secondary)]">
                  {project.categories.filter((c) => c !== project.category).join(' · ')}
                </span>
              </>
            )}
          </div>
          <h2
            id="modal-title"
            className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]"
          >
            {project.title}
          </h2>
          <p className="mt-3 text-base text-[var(--text-secondary)] leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Links bar */}
        <div className="mt-6 flex flex-wrap items-center gap-3 border-y border-[var(--border-subtle)] py-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-[4px] border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-3 py-1.5 text-xs font-mono text-[var(--text-primary)] hover:border-[var(--accent-dim)] hover:text-[var(--accent)] transition-colors"
            >
              <Github className="h-3.5 w-3.5" />
              <span>Source Repository</span>
              {project.github === '#' && (
                <span className="text-[10px] text-[var(--text-secondary)]">(Pending release)</span>
              )}
            </a>
          )}
          {project.huggingFace && (
            <a
              href={project.huggingFace}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-[4px] border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-3 py-1.5 text-xs font-mono text-[var(--text-primary)] hover:border-[var(--accent-dim)] hover:text-[var(--accent)] transition-colors"
            >
              <Cpu className="h-3.5 w-3.5" />
              <span>Hugging Face Checkpoint</span>
              {project.huggingFace === '#' && (
                <span className="text-[10px] text-[var(--text-secondary)]">(Checkpoint)</span>
              )}
            </a>
          )}
          {project.paper && (
            <a
              href={project.paper}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-[4px] border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-3 py-1.5 text-xs font-mono text-[var(--text-primary)] hover:border-[var(--accent-dim)] hover:text-[var(--accent)] transition-colors"
            >
              <FileText className="h-3.5 w-3.5" />
              <span>Technical Report</span>
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-[4px] border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-3 py-1.5 text-xs font-mono text-[var(--accent)] hover:border-[var(--accent)] transition-colors"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              <span>Interactive Demo</span>
            </a>
          )}
        </div>

        {/* Technical Deep Dive Sections */}
        <div className="mt-6 space-y-6 text-sm">
          {/* Problem & Approach */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-[6px] border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-4">
              <div className="flex items-center gap-2 font-mono text-xs font-medium text-[var(--warning)]">
                <AlertCircle className="h-3.5 w-3.5" />
                <span>The Problem</span>
              </div>
              <p className="mt-2 text-xs text-[var(--text-secondary)] leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="rounded-[6px] border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-4">
              <div className="flex items-center gap-2 font-mono text-xs font-medium text-[var(--accent)]">
                <CheckCircle2 className="h-3.5 w-3.5" />
                <span>Engineering Approach</span>
              </div>
              <p className="mt-2 text-xs text-[var(--text-secondary)] leading-relaxed">
                {project.approach}
              </p>
            </div>
          </div>

          {/* Architecture */}
          <div>
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)]">
              Architecture & System Flow
            </h3>
            <p className="mt-2 rounded-[4px] border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-3.5 font-body text-xs text-[var(--text-primary)] leading-relaxed">
              {project.architecture}
            </p>
          </div>

          {/* Pipeline Steps if present */}
          {project.pipelineSteps && (
            <div>
              <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)]">
                Pipeline Execution Stages
              </h3>
              <div className="mt-2.5 grid gap-2 sm:grid-cols-2">
                {project.pipelineSteps.map((st) => (
                  <div
                    key={st.step}
                    className="flex gap-3 rounded-[4px] border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-2.5 text-xs"
                  >
                    <span className="font-mono font-bold text-[var(--accent)]">{st.step}</span>
                    <div>
                      <div className="font-semibold text-[var(--text-primary)]">{st.name}</div>
                      <div className="mt-0.5 text-[11px] text-[var(--text-secondary)] leading-normal">
                        {st.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Reported Results (Explicitly labeled) */}
          {project.results && project.results.length > 0 && (
            <div>
              <div className="flex items-center justify-between">
                <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)]">
                  Evaluation & Verification Metrics
                </h3>
                <span className="font-mono text-[10px] text-[var(--accent)]">
                  Evaluated Test-Set Benchmarks
                </span>
              </div>
              <div className="mt-2.5 grid grid-cols-2 gap-2 sm:grid-cols-4">
                {project.results.map((res) => (
                  <div
                    key={res.metric}
                    className="rounded-[4px] border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-3 text-center"
                  >
                    <div className="font-mono text-lg font-bold text-[var(--text-primary)] tabular-nums">
                      {res.value}
                    </div>
                    <div className="mt-1 font-body text-xs font-medium text-[var(--text-primary)]">
                      {res.metric}
                    </div>
                    <div className="mt-0.5 text-[10px] text-[var(--text-secondary)]">
                      {res.note}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technologies */}
          <div>
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)]">
              Technologies & Frameworks
            </h3>
            <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1.5 font-mono text-xs text-[var(--text-secondary)]">
              {project.technologies.map((t, idx) => (
                <React.Fragment key={t}>
                  <span className="text-[var(--text-primary)]">{t}</span>
                  {idx < project.technologies.length - 1 && (
                    <span aria-hidden="true" className="text-[var(--border-subtle)]">·</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Technical Challenges */}
          {project.challenges && (
            <div className="border-t border-[var(--border-subtle)] pt-4">
              <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)]">
                Key Engineering Challenges Overcome
              </h3>
              <p className="mt-1.5 text-xs text-[var(--text-secondary)] leading-relaxed">
                {project.challenges}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
