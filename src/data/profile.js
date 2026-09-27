/**
 * Profile Configuration & Personal Positioning Data
 * Loaded with authentic contact details & profile for Ahmed Al-Taweel.
 */

export const profileData = {
  name: "Ahmed Al-Taweel",
  FullName:"Ahmed Mufeed Al-Taweel",
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
    email: "ahmedaltweel58@gmail.com",
    // PLACEHOLDER: Replace with verified GitHub profile
    github: "https://github.com/ahmed-altaweel",
    // PLACEHOLDER: Replace with verified LinkedIn profile
    linkedin: "https://www.linkedin.com/in/ahmed-altaweel-5906293a8",
  },

  // Asset paths
  assets: {
    photo: "/assets/image.png",
    photoFallback: "/assets/image.png",
    cv: "/assets/Ahmed-Mufeed-Al-Taweel-CV.pdf",
    cvFilename: "Ahmed-Mufeed-Al-Taweel-CV.pdf",
  },

  // Core engineering principles (Section: How I Build)
  principles: [
    {
      id: "systems-around-models",
      number: "01",
      title: "Systems around models, not just models",
      description:
        "Building production-grade AI means robust data ingestion pipelines, verified backend inference services, and clean UI orchestration rather than standalone notebooks.",
    },
    {
      id: "arabic-nlp-rigor",
      number: "02",
      title: "Rigor in Arabic NLP & Transformers",
      description:
        "Tackling morphological complexity, dialectal variance, and sequence modeling with structured tokenization, reproducible evaluations, and verified test-set metrics.",
    },
    {
      id: "clean-architecture",
      number: "03",
      title: "Decoupled Clean Architecture",
      description:
        "Separating domain logic, data models, presentation layers, and external providers ensures systems remain resilient, testable, and maintainable over time.",
    },
    {
      id: "reproducible-workflows",
      number: "04",
      title: "Reproducible workflows & reliability",
      description:
        "Clear specifications, deterministic builds, and systematic validation guarantee dependable behavior from local development to production deployment.",
    },
  ],
};
