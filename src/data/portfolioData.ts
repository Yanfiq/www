export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription?: string;
  role?: string;
  keyFeatures?: string[];
  category: 'ml' | 'web' | 'mobile-sys';
  categoryLabel: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  images?: string[];
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
        "Website profiling for 'Aisyiyah Kartasura, a Muhammadiyah organization focused on women's empowerment and community service. Developed as part of a team of nine, where I led the backend development and deployment of the website.",
      longDescription:
        "A comprehensive organizational portal engineered for Pimpinan Cabang 'Aisyiyah (PCA) Kartasura. Developed collaboratively within a team of nine developers, this platform serves as the digital front for community outreach, organizational activities, publications, and member administration. As the backend and DevOps lead, I architected the server-side API services, database schema, containerized deployment pipelines, and reverse proxy routing.",
      role: "Backend Lead & DevOps Engineer",
      keyFeatures: [
        "Architected secure RESTful API backend using Express.js and TypeScript",
        "Configured PostgreSQL database schemas with optimized relational querying",
        "Containerized full-stack services using Docker and Docker Compose",
        "Set up production server deployment with Nginx reverse proxy and SSL certificates",
        "Collaborated with frontend developers building in Next.js and Tailwind CSS",
      ],
      category: "web",
      categoryLabel: "Web Development",
      technologies: ["Next.js", "TailwindCSS", "TypeScript", "Express.js", "PostgreSQL", "Docker", "Nginx", "Node.js"],
      status: "Completed",
      featured: true,
      liveUrl: "https://pcakartasura.or.id",
    },
    {
      id: "heallink",
      title: "HealLink",
      tagline: "AI-Powered Mental Health Journaling & NLP Analysis",
      description:
        "Daily journaling application equipped with NLP models to analyze psychological indicators in user-submitted stories. Designed for early detection and personalized wellness resources including relaxation streaming and healthcare facility locators.",
      longDescription:
        "HealLink is an innovative daily journaling platform built as a capstone project during the Bangkit Academy Machine Learning Cohort. The system incorporates natural language processing (NLP) pipelines to evaluate user journal entries for mental health sentiment, distress indicators, and emotional trends. By detecting early signs of distress, it provides empathetic prompts, relaxation music streaming, and geo-located healthcare assistance facilities.",
      role: "Machine Learning",
      keyFeatures: [
        "Trained and fine-tuned NLP classification models using TensorFlow and Python",
        "Engineered preprocessing pipelines for tokenization, sentiment extraction, and text embedding",
        "Deployed cloud inference service using Tensorflow Serving",
      ],
      category: "ml",
      categoryLabel: "Machine Learning & NLP",
      technologies: ["TensorFlow", "NLP", "Python", "Cloud Deployment"],
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
      longDescription:
        "An interactive decision support application built on Mamdani Fuzzy Inference System (FIS) methodology. The platform assesses complex qualitative parameters—such as student mental wellness, academic passion, and extracurricular collegiate workload—mapping them through fuzzy membership functions and rule sets to compute tailored study interest recommendations.",
      role: "Lead Developer & Algorithm Designer",
      keyFeatures: [
        "Implemented custom Fuzzy Inference System (FIS) engine from mathematical foundations in TypeScript",
        "Defined multi-variable membership functions for student psychological and academic metrics",
        "Interactive real-time visualization of rule evaluation and defuzzification outputs",
        "Lightweight, dependency-free frontend with instantaneous client-side calculation",
      ],
      category: "ml",
      categoryLabel: "Machine Learning / FIS",
      technologies: ["TypeScript", "HTML5", "CSS3", "Fuzzy Logic", "Algorithm Design"],
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
      longDescription:
        "A formal computation simulator designed to visually represent step-by-step Turing Machine state transitions, head movements, and tape read/write operations. Engineered specifically to solve the non-trivial mathematical expression x = ((m+n)^a)/b through formal automata theory principles.",
      role: "Creator & Developer",
      keyFeatures: [
        "Step-by-step and continuous automated execution of Turing state transitions",
        "Visual tape display with dynamic tape expansion and active head position markers",
        "Equation parsing, unary numerical encoding, and state table verification",
        "Clean, responsive web interface built with modern TypeScript",
      ],
      category: "web",
      categoryLabel: "Web Simulation",
      technologies: ["TypeScript", "HTML5", "CSS3", "Automata Theory", "Algorithm Design"],
      githubUrl: "https://github.com/Yanfiq/LiteraLog",
      liveUrl: "https://yanfiq.github.io/TuringMachineSimulator/",
      image: "/projects/turingmachine/turingmachine.png",
      images: ["/projects/turingmachine/turingmachine.png"],
      status: "Completed",
      featured: true,
    },
    {
      id: "streamfusion",
      title: "StreamFusion",
      tagline: "Unified Cross-Platform Music Aggregator",
      description:
        "Modern Android application consolidating multiple streaming ecosystems (Audius, SoundCloud, Spotify, and YouTube) into a singular, cohesive audio playback interface.",
      longDescription:
        "StreamFusion bridges fragmented digital music ecosystems into a unified Android audio player. By integrating public APIs and streaming protocols across SoundCloud, Audius, Spotify, and YouTube, users can discover, search, and curate multi-platform playlists from a single modern mobile client.",
      role: "Creator & Developer",
      keyFeatures: [
        "Built with modern Android Jetpack Compose declarative UI and Kotlin Coroutines",
        "Unified search indexing across disparate music streaming platform APIs",
        "Background audio playback service with Android media session controls",
        "Local SQLite playlist curation and persistent playback history caching",
      ],
      category: "mobile-sys",
      categoryLabel: "Android & Mobile",
      technologies: ["Kotlin", "Jetpack Compose", "REST APIs", "Android Media3", "Coroutines"],
      githubUrl: "https://github.com/Yanfiq/StreamFusion",
      status: "In Progress",
      featured: true,
    },
    {
      id: "literalog",
      title: "LiteraLog",
      tagline: "Personal Library & Reading Habit Tracker",
      description:
        "A desktop client engineered for tracking personal book collections, logging detailed chapter reading milestones, and organizing literature wishlists.",
      longDescription:
        "LiteraLog is an offline-first desktop application designed for book lovers to catalog their personal physical and digital book libraries. Built with JavaFX and JDBC, it provides structured logging for reading velocity, chapter progress tracking, custom book tags, and future reading wishlists.",
      role: "Creator & Developer",
      keyFeatures: [
        "JavaFX desktop client with responsive layouts and custom CSS styling",
        "Robust JDBC persistence layer integrated with SQLite relational database",
        "Book tracking with status filtering (Reading, Completed, On Hold, Wishlist)",
        "Reading milestone progress bars and statistical summaries",
      ],
      category: "mobile-sys",
      categoryLabel: "Desktop Application",
      technologies: ["Java", "JavaFX", "Gradle", "JDBC API", "SQLite / SQL"],
      githubUrl: "https://github.com/Yanfiq/LiteraLog",
      image: "/projects/literalog/literalog.png",
      images: ["/projects/literalog/literalog.png"],
      status: "Archived",
      featured: false,
    },
    {
      id: "nnp-game",
      title: "NonsenseNebulaProblem Game",
      tagline: "2D Space Combat Action Game",
      description:
        "A 2D arcade combat game featuring real-time collision detection, projectile physics, particle effects, and enemy AI state machines.",
      longDescription:
        "An arcade-style 2D space action game engineered in C++ using the Simple and Fast Multimedia Library (SFML). The game demonstrates core game development concepts including object-oriented entity-component architectures, continuous collision detection, particle generation, and enemy AI behavioral patterns.",
      role: "Creator & Developer",
      keyFeatures: [
        "Custom 2D game loop with fixed-timestep physics updates and delta-time rendering",
        "Dynamic projectile trajectory calculations and bounding-box collision detection",
        "Enemy state machine AI with progressive difficulty scaling",
        "Audio synthesis and particle visual effects for laser blasts and explosions",
      ],
      category: "mobile-sys",
      categoryLabel: "Game Development",
      technologies: ["C++", "SFML", "OOP", "Game Engine", "Linear Algebra"],
      githubUrl: "https://github.com/Yanfiq/NonsenseNebulaProblem",
      image: "/projects/nnp_game/img_1.webp",
      images: ["/projects/nnp_game/img_1.webp", "/projects/nnp_game/img_2.webp", "/projects/nnp_game/img_3.webp", "/projects/nnp_game/img_4.webp", "/projects/nnp_game/img_5.webp"],
      status: "Completed",
      featured: true,
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
