// ============================================================
// All editable portfolio content lives in this one file.
// Replace placeholder values (marked "REPLACE_ME") before deploying.
// ============================================================

export const profile = {
  name: "Rahul Prasad",
  location: "Trivandrum, Kerala, India",
  role: "Data Science Intern",
  headline: "Data Science Enthusiast",
  subhead: "Machine Learning & Analytics",
  summary:
    "Mechanical Engineering graduate transitioning into Data Science, with practical internship experience and hands-on projects in data analysis, machine learning, and model evaluation.",
  github: "https://github.com/rprasad753-dot",
  linkedin: "REPLACE_ME_LINKEDIN_URL",
  email: "REPLACE_ME_EMAIL@example.com",
  resumeFile: "/resume/Rahul_Prasad_CV_Final.pdf", // see /public/resume/README.txt
};

export const about = {
  paragraphs: [
    "I'm a Mechanical Engineering graduate who made a deliberate switch into Data Science — not through a bootcamp shortcut, but through structured training, a live internship, and a stack of projects I built to actually understand the fundamentals.",
    "My foundation is the Advanced Diploma in AI & ML from GITH Global India Techno Hub, followed by hands-on experience as a Data Science Intern at OSPYN, where I work with real data: cleaning it, exploring it, engineering features, and evaluating models rather than just reading about it.",
    "Alongside the internship, I've built independent projects in classic machine learning — data cleaning, exploratory analysis, and model evaluation on real datasets. I'm not claiming to be a senior engineer — I'm early in this path, and I'm building in the open to prove it.",
  ],
  highlights: [
    { label: "Background", value: "Mechanical Engineering (B.Tech, 2017)" },
    { label: "Training", value: "Advanced Diploma in AI & ML, 2025" },
    { label: "Current role", value: "Data Science Intern, OSPYN" },
    { label: "Focus", value: "Data analysis & machine learning fundamentals" },
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
      "Structured training in Python, statistics, and machine learning fundamentals. Completed June 2025.",
  },
  {
    year: "Jun 2026 – Sep 2026",
    title: "Data Science Intern",
    org: "OSPYN, Trivandrum",
    description:
      "Applying the fundamentals on real assignments: data cleaning, EDA, feature engineering, and model evaluation.",
  },
  {
    year: "Ongoing",
    title: "Independent Projects",
    org: "Self-directed",
    description:
      "Building end-to-end machine learning pipelines to deepen practical understanding outside the internship scope.",
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

export const projectCategories = ["All", "Machine Learning"];
