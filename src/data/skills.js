/**
 * Technical Skills Data
 * Grouped strictly into domain categories without proficiency bars or percentage ratings.
 */

export const skillGroups = [
  {
    id: "programming",
    title: "Programming",
    description: "Core languages used for systems development, machine learning, and data processing.",
    skills: [
      { name: "Python", context: "Primary language for ML, data pipelines, and CLI tooling" },
      { name: "JavaScript", context: "Modern ES6+ frontend architectures and web interfaces" },
      { name: "C++", context: "Systems programming, algorithms, and computational efficiency" },
      { name: "SQL", context: "Relational data modeling, querying, and schema definition" },
    ],
  },
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    description: "Model fine-tuning, sequence-to-sequence pipelines, and NLP systems.",
    skills: [
      { name: "Natural Language Processing", context: "Arabic NLP, tokenization, text normalization" },
      { name: "Transformers", context: "Encoder-decoder architectures, sequence classification" },
      { name: "Model Fine-Tuning", context: "AraT5, Hugging Face Trainer, PyTorch workflows" },
      { name: "Text Classification", context: "Hierarchical labeling, multi-level category taxonomy" },
      { name: "Machine Learning", context: "Supervised pipelines, feature extraction, evaluation metrics" },
      { name: "Deep Learning", context: "Neural network representations, sequence modeling" },
    ],
  },
  {
    id: "software-engineering",
    title: "Software Engineering",
    description: "Clean architecture, component-driven UI, and robust API integration.",
    skills: [
      { name: "Software Architecture", context: "Layered domain separation, modular decoupled modules" },
      { name: "Clean Architecture", context: "Presentation → Application → Domain → Infrastructure" },
      { name: "React & Vite", context: "Component reuse, hooks, state management, fast builds" },
      { name: "REST APIs", context: "Structured endpoints, contract adherence, error handling" },
      { name: "Component Design", context: "Declarative design systems, accessibility, strict styling" },
      { name: "Git", context: "Version control, branching strategy, disciplined commit logs" },
    ],
  },
  {
    id: "data",
    title: "Data Engineering",
    description: "Dataset curation, automated web extraction, and systematic validation.",
    skills: [
      { name: "Pandas", context: "Large tabular data manipulation and restructuring" },
      { name: "Data Preprocessing", context: "Deduplication, normalization, text cleansing at scale" },
      { name: "Data Collection", context: "Multi-source scraping, parsing, structured storage" },
      { name: "Data Analysis", context: "Label distribution analysis, class balance verification" },
    ],
  },
  {
    id: "tools",
    title: "Developer Tools & Ecosystem",
    description: "Development environments, ML hubs, and collaborative workflows.",
    skills: [
      { name: "Hugging Face", context: "Model Hub, Datasets library, Transformers pipeline" },
      { name: "Google Colab", context: "Accelerated GPU model training and experiments" },
      { name: "VS Code", context: "Primary development environment and debugging" },
      { name: "Jupyter Notebooks", context: "Exploratory data analysis, validation workflows" },
      { name: "GitHub", context: "Open source collaboration, issue tracking, CI/CD" },
    ],
  },
];
