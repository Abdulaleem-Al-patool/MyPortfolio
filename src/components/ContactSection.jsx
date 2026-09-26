import React, { useState } from 'react';
import { Mail, Github, Linkedin, Copy, Check, Send } from 'lucide-react';
import { profileData } from '../data/profile.js';
import SectionHeader from './SectionHeader.jsx';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'Software Engineering Project',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Construct mailto link as resilient client action
    const subject = encodeURIComponent(`[Portfolio Inquiry: ${formData.topic}] from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nTopic: ${formData.topic}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${profileData.contact.email}?subject=${subject}&body=${body}`;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 border-t border-[var(--border-subtle)]">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeader
          number="05"
          title="Let's Build Something"
          subtitle="Interested in software engineering, AI, Arabic NLP, or building a technical project together?"
        />

        <div className="grid gap-8 lg:grid-cols-12">
          {/* Left Column: Direct Coordinates */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-[8px] border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-6">
              <h3 className="font-heading text-lg font-bold text-[var(--text-primary)]">
                Direct Contact
              </h3>
              <p className="mt-1 text-xs text-[var(--text-secondary)]">
                Open for technical collaboration, research discussions, and software engineering opportunities.
              </p>

              {/* Email Card with Copy button */}
              <div className="mt-5 rounded-[4px] border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-3 flex items-center justify-between">
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <Mail className="h-4 w-4 shrink-0 text-[var(--accent)]" />
                  <span className="font-mono text-xs text-[var(--text-primary)] truncate">
                    {profileData.contact.email}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label="Copy email address"
                  className="rounded-[4px] border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-1.5 text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent-dim)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] shrink-0 ml-2"
                >
                  {copied ? (
                    <Check className="h-3.5 w-3.5 text-[var(--success)]" />
                  ) : (
                    <Copy className="h-3.5 w-3.5" />
                  )}
                </button>
              </div>

              {/* Social Channels */}
              <div className="mt-6 space-y-2">
                <a
                  href={profileData.contact.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center justify-between rounded-[4px] border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-3 text-xs font-mono text-[var(--text-primary)] hover:border-[var(--accent-dim)] hover:text-[var(--accent)] transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <Github className="h-4 w-4" />
                    <span>GitHub Profile</span>
                  </div>
                  <span className="text-[11px] text-[var(--text-secondary)]">@ahmed-mufeed</span>
                </a>

                <a
                  href={profileData.contact.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center justify-between rounded-[4px] border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-3 text-xs font-mono text-[var(--text-primary)] hover:border-[var(--accent-dim)] hover:text-[var(--accent)] transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <Linkedin className="h-4 w-4" />
                    <span>LinkedIn Profile</span>
                  </div>
                  <span className="text-[11px] text-[var(--text-secondary)]">in/ahmed-mufeed</span>
                </a>
              </div>

              {/* Academic Location Note */}
              <div className="mt-6 border-t border-[var(--border-subtle)] pt-4 text-xs font-mono text-[var(--text-secondary)]">
                <div>Academic Affiliation:</div>
                <div className="text-[var(--text-primary)] mt-0.5">{profileData.status}</div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Message Form */}
          <div className="lg:col-span-7">
            <div className="rounded-[8px] border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-6 sm:p-7">
              <h3 className="font-heading text-lg font-bold text-[var(--text-primary)]">
                Send a Message
              </h3>
              <p className="mt-1 text-xs text-[var(--text-secondary)]">
                Leave a project brief or research inquiry. The form dispatches directly to your local mail client.
              </p>

              {formSubmitted ? (
                <div className="mt-6 rounded-[4px] border border-[var(--success)]/40 bg-[var(--bg-surface)] p-6 text-center">
                  <div className="font-mono text-sm font-semibold text-[var(--success)]">
                    Email Client Triggered
                  </div>
                  <p className="mt-2 text-xs text-[var(--text-secondary)]">
                    Thank you. Your message draft has been prepared for dispatch to {profileData.contact.email}.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-4 rounded-[4px] border border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-4 py-1.5 text-xs font-mono text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="sender-name"
                        className="block font-mono text-xs text-[var(--text-secondary)] mb-1.5"
                      >
                        Your Name *
                      </label>
                      <input
                        id="sender-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full rounded-[4px] border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-3 py-2 text-sm text-[var(--text-primary)] placeholder-[var(--text-secondary)]/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="sender-email"
                        className="block font-mono text-xs text-[var(--text-secondary)] mb-1.5"
                      >
                        Your Email *
                      </label>
                      <input
                        id="sender-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. sarah@example.com"
                        className="w-full rounded-[4px] border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-3 py-2 text-sm text-[var(--text-primary)] placeholder-[var(--text-secondary)]/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="inquiry-topic"
                      className="block font-mono text-xs text-[var(--text-secondary)] mb-1.5"
                    >
                      Inquiry Topic
                    </label>
                    <select
                      id="inquiry-topic"
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      className="w-full rounded-[4px] border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-3 py-2 text-sm text-[var(--text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                    >
                      <option value="Software Engineering Project">Software Engineering Project</option>
                      <option value="Arabic NLP / AraT5 Research">Arabic NLP / AraT5 Research</option>
                      <option value="Backend / Systems Architecture">Backend / Systems Architecture</option>
                      <option value="Technical Collaboration">Technical Collaboration</option>
                      <option value="General Technical Question">General Technical Question</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="inquiry-message"
                      className="block font-mono text-xs text-[var(--text-secondary)] mb-1.5"
                    >
                      Message *
                    </label>
                    <textarea
                      id="inquiry-message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Outline your project scope, technical question, or collaboration idea..."
                      className="w-full rounded-[4px] border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-3 py-2 text-sm text-[var(--text-primary)] placeholder-[var(--text-secondary)]/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-[4px] bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-[var(--bg-primary)] hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                  >
                    <Send className="h-4 w-4" />
                    <span>Send Inquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
