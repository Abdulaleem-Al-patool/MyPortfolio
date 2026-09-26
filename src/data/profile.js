/**
 * Profile Configuration & Personal Positioning Data
 * Placeholders are marked explicitly. All changes here automatically propagate across the portfolio.
 */

export const profileData = {
  name: "Ahmed Mufeed Al-Taweel",
  role: "Software Developer & AI Engineer",
  status: "IT / CS Student, Ibb University, Yemen",
  positioning: "Software Engineering + Practical AI Systems",
  tagline:
    "Building complete software systems around models, not just the models themselves.",

  // Hero summary
  heroBio:
    "I build practical software systems and intelligent applications, with a particular focus on Arabic NLP, machine learning, and modern software engineering.",

  // About paragraphs (Section 6.4: Two-paragraph structure)
  about: {
    paragraph1:
      "My work sits at the intersection of Software Engineering and Artificial Intelligence. Rather than treating machine learning as an isolated exercise in training models, my goal is building complete, production-ready systems around them — from structured data collection and preprocessing pipelines, to robust backend APIs, intuitive user interfaces, and reliable model deployment.",
    paragraph2:
      "My primary areas of focus include backend systems, APIs, data pipelines, Transformers and NLP architectures, Arabic natural language processing, and clean software architecture. I value clear separation of concerns, reproducible workflows, and verifiable test-set metrics over superficial complexity.",
  },

  // Contact & Social links (Placeholders - edit here)
  contact: {
    // PLACEHOLDER: Replace with verified contact email
    email: "contact@ahmedmufeed.dev",
    // PLACEHOLDER: Replace with verified GitHub profile
    github: "https://github.com/ahmed-mufeed",
    // PLACEHOLDER: Replace with verified LinkedIn profile
    linkedin: "https://linkedin.com/in/ahmed-mufeed",
  },

  // Asset paths
  assets: {
    photo: "/assets/image.png",
    photoFallback: "/assets/image.png",
    cv: "/assets/Ahmed-Mufeed-Al-Taweel-CV.pdf",
    cvFilename: "Ahmed-Mufeed-Al-Taweel-CV.pdf",
  },

  // Core engineering principles (Section 6.8: How I Build)
  principles: [
    {
      id: "understand",
      number: "01",
      title: "Understand before implementing",
      description:
        "The problem statement, algorithm constraints, and architecture design come before writing code. Rushing to code before clarifying requirements leads to fragile systems.",
    },
    {
      id: "systems",
      number: "02",
      title: "Build complete systems",
      description:
        "The pipeline surrounding a model — ingestion, cleaning, tokenization, evaluation, inference APIs, and user interfaces — matters just as much as the model weights.",
    },
    {
      id: "metrics",
      number: "03",
      title: "Prefer measurable results",
      description:
        "Technical credibility comes from concrete evaluation metrics and repeatable benchmarks on defined test sets, never from vague or exaggerated claims.",
    },
    {
      id: "maintainable",
      number: "04",
      title: "Keep systems maintainable",
      description:
        "Strict separation of concerns, reusable component architectures, predictable data flows, and readable code make software durable and easy to extend.",
    },
  ],
};
