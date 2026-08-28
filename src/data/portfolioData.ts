export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: 'ml' | 'web' | 'mobile-sys';
  categoryLabel: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  status: 'Completed' | 'In Progress' | 'Archived';
  featured?: boolean;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; level?: string; icon?: string }[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  description: string;
  badge?: string;
  highlights: string[];
}

export const portfolioData = {
  personal: {
    name: "Ryan Fikri",
    title: "Software Engineer & ML Enthusiast",
    shortBio:
      "Informatics student passionate about machine learning, full-stack systems, and crafting human-centered digital solutions.",
    location: "Surakarta, Indonesia",
    status: "Available for internships & collaborations",
    email: "ryanfikri@ryanfikri.dev",
    github: "https://github.com/Yanfiq",
    linkedin: "https://linkedin.com/in/yanfiq",
  },

  about: {
    heading: "Building Intelligent & Human-Centered Technology",
    paragraphs: [
      "I am an Informatics student at Sebelas Maret University (UNS) and a graduate of the Bangkit Academy Machine Learning Cohort. My passion lies at the intersection of practical machine learning, systems programming, and modern web application development.",
      "Throughout my journey, I have developed solutions ranging from NLP-driven mental health analysis pipelines in my capstone project (HealLink) to interactive simulators and cross-platform desktop applications. I believe technology should not only be algorithmically sound, but intuitive and empathetic to user needs.",
      "I constantly explore emerging domains—whether building distributed streaming architectures, tuning neural networks with TensorFlow and Scikit-learn, or writing high-performance code in C++, Kotlin, and TypeScript.",
    ],
    stats: [
      { label: "Academic Focus", value: "Informatics @ UNS" },
      { label: "Core Domains", value: "ML, NLP & Full-Stack" },
      { label: "Capstone", value: "Bangkit ML Cohort" },
    ],
  },

  skillCategories: [
    {
      title: "Machine Learning & AI",
      description: "Model building, NLP pipelines, data processing & analysis",
      skills: [
        { name: "Python" },
        { name: "TensorFlow" },
        { name: "Scikit-Learn" },
        { name: "Pandas" },
        { name: "NumPy" },
        { name: "NLP" },
        { name: "Fuzzy Logic (FIS)" },
      ],
    },
    {
      title: "Web & Full-Stack",
      description: "Modern, responsive web applications and backend APIs",
      skills: [
        { name: "TypeScript" },
        { name: "JavaScript" },
        { name: "React" },
        { name: "Next.js" },
        { name: "Node.js" },
        { name: "Express.js" },
        { name: "Tailwind CSS" },
        { name: "HTML5 / CSS3" },
      ],
    },
    {
      title: "Systems, Mobile & Data",
      description: "Low-level programming, mobile development & persistence",
      skills: [
        { name: "C++" },
        { name: "Kotlin" },
        { name: "Jetpack Compose" },
        { name: "Java / JavaFX" },
        { name: "C#" },
        { name: "SQL" },
        { name: "MongoDB" },
        { name: "Docker" },
        { name: "Git" },
      ],
    },
  ] as SkillCategory[],

  projects: [
    {
      id: "pcakartasura",
      title: "Website PCA Kartasura",
      tagline: "Website Profil Organisasi 'Aisyiyah Kartasura",
      description:
        "Website profiling for 'Aisyiyah Kartasura, a Muhammadiyah organization focused on women's empowerment and community service.",
      category: "web",
      categoryLabel: "Web Development",
      technologies: ["Next.js", "TailwindCSS", "Typescript", "Express.js", "PostgreSQL", "Docker", "Nginx", "Node.js"],
      status: "Completed",
      featured: true,
      liveUrl: "https://pcakartasura.or.id"
    },
    {
      id: "heallink",
      title: "HealLink",
      tagline: "AI-Powered Mental Health Journaling & NLP Analysis",
      description:
        "Daily journaling application equipped with NLP models to analyze psychological indicators in user-submitted stories. Designed for early detection and personalized wellness resources including relaxation streaming and healthcare facility locators.",
      category: "ml",
      categoryLabel: "Machine Learning & NLP",
      technologies: ["TensorFlow", "NLP", "Python", "Hapi.js", "Kotlin"],
      githubUrl: "https://github.com/HealLink",
      status: "Completed",
      featured: true,
    },
    {
      id: "study-interest-prediction",
      title: "Study Interest Prediction",
      tagline: "Fuzzy Inference System for Academic Orientation",
      description:
        "An intelligent web-based prediction system leveraging Fuzzy Inference System (FIS) algorithms to evaluate mental health conditions, personal passion, and collegiate activities to recommend suitable academic paths.",
      category: "ml",
      categoryLabel: "Machine Learning / FIS",
      technologies: ["TypeScript", "HTML5", "CSS3", "Fuzzy Logic"],
      githubUrl: "https://github.com/Yanfiq/StudyInterestPrediction",
      liveUrl: "https://yanfiq.github.io/StudyInterestPrediction/",
      status: "Completed",
      featured: true,
    },
    {
      id: "turing-machine-simulator",
      title: "Turing Machine Simulator",
      tagline: "Mathematical Computation Engine for Complex Equations",
      description:
        "An interactive, visual Turing machine simulator built to compute and step through formal mathematical equations such as x = ((m+n)^a)/b with live state transitions.",
      category: "web",
      categoryLabel: "Web Simulation",
      technologies: ["TypeScript", "HTML5", "CSS3", "Algorithm Design"],
      githubUrl: "https://github.com/Yanfiq/LiteraLog",
      liveUrl: "https://yanfiq.github.io/TuringMachineSimulator/",
      image: "/projects/turingmachine.png",
      status: "Completed",
      featured: true,
    },
    {
      id: "streamfusion",
      title: "StreamFusion",
      tagline: "Unified Cross-Platform Music Aggregator",
      description:
        "Modern Android application consolidating multiple streaming ecosystems (Audius, SoundCloud, Spotify, and YouTube) into a singular, cohesive audio playback interface.",
      category: "mobile-sys",
      categoryLabel: "Android & Mobile",
      technologies: ["Kotlin", "Jetpack Compose", "REST APIs", "Android SDK"],
      githubUrl: "https://github.com/Yanfiq/StreamFusion",
      status: "In Progress",
      featured: false,
    },
    {
      id: "literalog",
      title: "LiteraLog",
      tagline: "Personal Library & Reading Habit Tracker",
      description:
        "A desktop client engineered for tracking personal book collections, logging detailed chapter reading milestones, and organizing literature wishlists.",
      category: "mobile-sys",
      categoryLabel: "Desktop Application",
      technologies: ["Java", "JavaFX", "Gradle", "JDBC API", "SQLite / SQL"],
      githubUrl: "https://github.com/Yanfiq/LiteraLog",
      image: "/projects/literalog.png",
      status: "Archived",
      featured: false,
    },
    {
      id: "nnp-game",
      title: "NonsenseNebulaProblem Game",
      tagline: "2D Space Combat Action Game",
      description:
        "A 2D arcade combat game featuring real-time collision detection, projectile physics, particle effects, and enemy AI state machines.",
      category: "mobile-sys",
      categoryLabel: "Game Development",
      technologies: ["C++", "SFML", "OOP", "Game Engine"],
      githubUrl: "https://github.com/Yanfiq/NonsenseNebulaProblem",
      image: "/projects/nnp_game.webp",
      status: "Completed",
      featured: false,
    },
  ] as Project[],

  educationAndExperience: {
    education: [
      {
        institution: "Universitas Sebelas Maret (UNS)",
        degree: "Bachelor of Computer Science / Informatics",
        period: "2022 — Present",
        description:
          "Focused on artificial intelligence, algorithm design, data structures, software engineering principles, and distributed computing.",
        highlights: [
          "Active coursework in Machine Learning, Natural Language Processing, and Software Architecture",
          "Collaborative engineering in multi-disciplinary capstone projects",
        ],
      },
    ],
    experience: [
      {
        role: "Machine Learning Cohort Graduate",
        organization: "Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka",
        period: "2024",
        badge: "Distinction",
        description:
          "Intensive machine learning specialization covering end-to-end model development, deep neural networks, computer vision, NLP, and cloud deployment.",
        highlights: [
          "Engineered NLP models for the capstone project HealLink targeting mental health support",
          "Completed comprehensive curriculum on TensorFlow Developer certification readiness",
        ],
      },
    ],
  },
};
