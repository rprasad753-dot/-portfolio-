// ============================================================
// All editable portfolio content lives in this one file.
// Replace placeholder values (marked "REPLACE_ME") before deploying.
// ============================================================

export const profile = {
  name: "Rahul Prasad",
  location: "Trivandrum, Kerala, India",
  role: "Data Science Intern",
  headline: "AI & Data Science Enthusiast",
  subhead: "Generative AI & RAG",
  summary:
    "Mechanical Engineering graduate transitioning into AI and Data Science, with practical internship experience and hands-on projects in machine learning, Generative AI, LLM applications, and Retrieval-Augmented Generation.",
  github: "https://github.com/rprasad753-dot",
  linkedin: "REPLACE_ME_LINKEDIN_URL",
  email: "REPLACE_ME_EMAIL@example.com",
  resumeFile: "/resume/Rahul_Prasad_CV_Final.pdf", // see /public/resume/README.txt
};

export const about = {
  paragraphs: [
    "I'm a Mechanical Engineering graduate who made a deliberate switch into AI and Data Science — not through a bootcamp shortcut, but through structured training, a live internship, and a stack of projects I built to actually understand the fundamentals.",
    "My foundation is the Advanced Diploma in AI & ML from GITH Global India Techno Hub, followed by hands-on experience as a Data Science Intern at OSPYN, where I work with real data: cleaning it, exploring it, engineering features, and evaluating models rather than just reading about it.",
    "Alongside the internship, I've built a set of independent projects spanning classic ML (churn prediction), and Generative AI (LLM chatbots and Retrieval-Augmented Generation systems). I'm not claiming to be a senior engineer — I'm early in this path, and I'm building in the open to prove it.",
  ],
  highlights: [
    { label: "Background", value: "Mechanical Engineering (B.Tech, 2017)" },
    { label: "Training", value: "Advanced Diploma in AI & ML, 2025" },
    { label: "Current role", value: "Data Science Intern, OSPYN" },
    { label: "Focus", value: "ML fundamentals, Generative AI, RAG" },
  ],
};

// A literal sequence — used for the timeline / pipeline motif.
export const journey = [
  {
    year: "2013 – 2017",
    title: "B.Tech, Mechanical Engineering",
    org: "Noorul Islam University",
    description:
      "Built a foundation in analytical problem-solving and systems thinking — the habits I carried into data work.",
  },
  {
    year: "2025",
    title: "Advanced Diploma in AI & ML",
    org: "GITH Global India Techno Hub, Trivandrum",
    description:
      "Structured training in Python, statistics, machine learning, and the fundamentals of Generative AI. Completed June 2025.",
  },
  {
    year: "Jun 2026 – Sep 2026",
    title: "Data Science Intern",
    org: "OSPYN, Trivandrum",
    description:
      "Applying the fundamentals on real assignments: data cleaning, EDA, feature engineering, model evaluation, and applied AI/LLM/RAG projects.",
  },
  {
    year: "Ongoing",
    title: "Independent Projects",
    org: "Self-directed",
    description:
      "Building end-to-end ML pipelines and Generative AI / RAG applications to deepen practical understanding outside the internship scope.",
  },
];

export const experience = [
  {
    role: "Data Science Intern",
    org: "OSPYN",
    location: "Trivandrum, Kerala, India",
    period: "June 2026 – September 2026",
    type: "Internship",
    points: [
      "Worked with Python for data analysis and data science tasks",
      "Performed data cleaning and preprocessing on real datasets",
      "Conducted exploratory data analysis (EDA) to surface patterns and data quality issues",
      "Applied feature engineering techniques to prepare data for modeling",
      "Built and evaluated machine learning workflows using standard metrics",
      "Completed practical data science assignments as part of the internship curriculum",
      "Learned and applied Generative AI / LLM / RAG concepts through guided projects",
    ],
  },
];

export const skills = [
  {
    category: "Programming",
    items: ["Python", "SQL"],
  },
  {
    category: "Data Science",
    items: [
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Jupyter Notebook",
      "Excel",
      "Exploratory Data Analysis",
      "Data Cleaning",
      "Data Preprocessing",
      "Feature Engineering",
      "Statistical Analysis",
    ],
  },
  {
    category: "Machine Learning",
    items: [
      "Scikit-learn",
      "Regression",
      "Classification",
      "Clustering",
      "PCA",
      "Train/Test Split",
      "Cross Validation",
      "Hyperparameter Tuning",
      "Model Evaluation",
    ],
  },
  {
    category: "Model Evaluation",
    items: ["MAE", "MSE", "R²", "Accuracy", "Precision", "Recall", "F1 Score", "ROC-AUC", "Confusion Matrix"],
  },
  {
    category: "AI / Generative AI",
    items: [
      "LLM APIs",
      "Prompt Engineering",
      "Generative AI",
      "Retrieval-Augmented Generation (RAG)",
      "Embeddings",
      "Vector Search",
      "FAISS",
      "Document Question Answering",
      "PDF Processing",
      "Basic AI Agents / Tool Calling",
      "LangChain",
      "LangGraph",
      "Streamlit",
    ],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "OpenCV"],
  },
];

export const projects = [
  {
    id: "churn-prediction",
    title: "Telecom Customer Churn Prediction",
    category: "Machine Learning",
    dataset: "Kaggle Telco Customer Churn Dataset",
    description:
      "End-to-end machine learning pipeline to predict telecom customer churn, from raw data to interpretable model output.",
    problem:
      "Telecom providers need to identify customers likely to churn before they leave, using historical account and usage data.",
    solution:
      "Cleaned and encoded the dataset, engineered features, and trained multiple classifiers, then compared them using standard evaluation metrics and used SHAP to interpret which features drove predictions.",
    features: [
      "Data cleaning & missing-value handling",
      "Exploratory data analysis",
      "Categorical encoding & feature scaling",
      "Train/test split with cross-validation",
      "Hyperparameter tuning",
      "Confusion matrix & ROC-AUC evaluation",
      "SHAP-based model interpretation",
    ],
    models: ["Logistic Regression", "Decision Tree", "Random Forest", "SVM", "XGBoost"],
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "XGBoost", "SHAP", "Jupyter Notebook"],
    github: "#",
    demo: null,
  },
  {
    id: "ai-chatbot",
    title: "AI Chatbot",
    category: "Generative AI",
    description:
      "A conversational AI chatbot built with an LLM API and a Streamlit front end.",
    problem:
      "Explore how to wire a hosted LLM API into an interactive chat interface with proper state and secrets handling.",
    solution:
      "Built a Streamlit chat UI that sends user input to the Gemini API, maintains conversation history in session state, and keeps API keys out of source control via environment variables.",
    features: [
      "Chat interface with conversation history",
      "AI-generated responses via LLM API",
      "Clear chat functionality",
      "Environment-variable based API key management",
    ],
    workflow: ["User", "Prompt", "LLM API", "AI Response", "Streamlit Interface"],
    tech: ["Python", "Streamlit", "Gemini API", "python-dotenv"],
    github: "#",
    demo: null,
  },
  {
    id: "document-rag",
    title: "Company Document RAG Assistant",
    category: "RAG",
    description:
      "A document question-answering app that lets users ask questions about uploaded PDF files and get answers grounded in the source documents.",
    problem:
      "Finding specific information inside long company documents is slow when done manually, page by page.",
    solution:
      "Extracted and chunked PDF text, embedded the chunks, indexed them in FAISS, and retrieved the most relevant context for each question before passing it to the LLM for a grounded answer.",
    features: [
      "PDF text extraction & chunking",
      "Embedding generation",
      "Vector similarity search (FAISS)",
      "Retrieval-Augmented Generation",
      "Context-aware answers with source references",
    ],
    workflow: [
      "PDF Documents",
      "Text Extraction",
      "Chunking",
      "Embeddings",
      "FAISS Vector DB",
      "Similarity Search",
      "LLM",
      "Answer",
    ],
    tech: ["Python", "Streamlit", "PyPDF", "Gemini API", "Embeddings", "FAISS"],
    github: "#",
    demo: null,
  },
  {
    id: "enterprise-assistant",
    title: "Enterprise AI Knowledge Assistant",
    category: "RAG",
    description:
      "A learning/capstone project building an enterprise-style knowledge assistant over multiple organizational documents.",
    problem:
      "Single-document RAG doesn't scale to an organization's full body of documents, and answers need memory across a conversation.",
    solution:
      "Extended the RAG pattern to multiple documents with conversation memory and structured responses, while treating agentic planning and tool-calling as an explored, in-progress concept rather than a finished feature.",
    features: [
      "Multi-document parsing & chunking (implemented)",
      "Embeddings & vector search (implemented)",
      "RAG-based question answering (implemented)",
      "Conversation memory (implemented)",
      "Structured responses (implemented)",
      "Basic planning / tool-calling concepts (in progress — learning focus, not production-complete)",
    ],
    tech: ["Python", "Streamlit", "LangChain", "LangGraph", "FAISS / Chroma", "LLM APIs", "PyPDF"],
    github: "#",
    demo: null,
  },
  {
    id: "research-assistant",
    title: "AI Research Assistant",
    category: "Generative AI",
    description:
      "A mini project exploring how an LLM-based assistant can help organize research information and produce structured summaries.",
    problem:
      "Raw research notes and articles are unstructured and time-consuming to synthesize by hand.",
    solution:
      "Used prompt engineering and structured output formatting to extract key information from source text and summarize it consistently.",
    features: [
      "LLM prompting for information extraction",
      "Summarization of source content",
      "Structured output formatting",
    ],
    tech: ["Python", "LLM APIs", "Prompt Engineering"],
    github: "#",
    demo: null,
  },
];

export const education = [
  {
    degree: "B.Tech / B.E. — Mechanical Engineering",
    school: "Noorul Islam University / Noorul Islam Centre for Higher Education",
    period: "Graduated 2017",
  },
];

export const certifications = [
  {
    name: "Advanced Diploma in AI & ML",
    org: "GITH Global India Techno Hub, Karimpanal Arcade, Trivandrum",
    period: "Completed June 2025",
    note: "Private training program — not a work engagement.",
  },
];

export const projectCategories = ["All", "Machine Learning", "Generative AI", "RAG"];
