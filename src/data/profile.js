export const profile = {
  name: "Arshdeep Sandhu",
  location: "San Antonio, TX",
  tagline: "Software Engineer — Full-Stack Systems & Cloud Infrastructure",
  email: "arsh.sandhu.dev@gmail.com",
  phone: "210-636-8014",
  linkedin: "https://linkedin.com/in/arsh-sandhu-dev",
  github: "https://github.com/arshdeep-sandhu-dev",
  intro:
    "I build and maintain scalable enterprise systems, full-stack applications, and cloud infrastructure that serve millions of users.",
  education: {
    school: "University of Texas at San Antonio",
    degree: "Bachelor of Science in Computer Science",
    concentration: "Software Engineering",
    gpa: "3.87",
    dates: "Aug 2022 – Dec 2025"
  }
}

export const highlights = [
  { title: "Enterprise Systems", body: "Java + Spring Boot backends serving 13M+ members with high-throughput transaction processing." },
  { title: "Full-Stack & Cloud", body: "React frontends, AWS infrastructure, Docker, Kubernetes, and CI/CD pipelines." },
  { title: "Ship & Scale", body: "Database migrations, batch processing, RESTful APIs — production systems that save real money." }
]

export const skills = {
  Languages: ["Java", "Python", "C", "JavaScript", "SQL", "HTML/CSS"],
  "Frameworks & Libraries": ["Spring Boot", "Spring Batch", "React", "Node.js", "Flask", "JUnit", "Mockito", "Material-UI", "PyTorch"],
  "Cloud & DevOps": ["AWS (Lambda, RDS, EC2, CloudFront, API Gateway)", "Docker", "Kubernetes", "Git", "GitLab CI/CD"],
  "Tools & Practices": ["RESTful APIs", "Agile/Scrum", "Oracle DB", "DB2", "MySQL", "Postman", "IntelliJ", "VS Code"]
}

export const experience = [
  {
    role: "Software Engineer",
    company: "USAA",
    dates: "Jan 2026 – Present",
    bullets: [
      "Develop and maintain scalable enterprise financial systems serving 13M+ members, designing backend services with Java and Spring Boot for high-throughput transaction processing.",
      "Build batch processing systems using Spring Batch to aggregate and summarize enterprise-wide loss data, integrating across distributed systems for General Ledger reporting.",
      "Lead database migration from legacy DB2 to Oracle, optimizing RESTful APIs and batch processing efficiency to reduce annual operational costs from $1.2M to $600K.",
      "Collaborate multi-functionally with product owners and Agile/Scrum teams to gather requirements and deliver robust, scalable solutions."
    ]
  },
  {
    role: "Software Engineering Intern",
    company: "USAA",
    dates: "May 2025 – Aug 2025",
    bullets: [
      "Engineered a full-stack dashboard (Spring Boot, React, REST APIs) to monitor CI/CD test results and downstream health, improving release visibility for 20+ projects.",
      "Automated real-time pipeline tracking, cutting manual analysis time and boosting debugging efficiency for 12 developers across multiple Agile squads.",
      "Resolved deployment failures across GitLab CI/CD and Kubernetes, ensuring stable and scalable release workflows.",
      "Built secure backend APIs with service account integration, wrote unit tests (JUnit, Mockito) achieving 90%+ coverage, and validated endpoints with Postman."
    ]
  }
]

export const projects = [
  {
    title: "TandoorPalaceRestaurant.com",
    dates: "Mar 2026 – Apr 2026",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Clover", "Vercel"],
    siteUrl: "https://tandoorpalacerestaurant.com",
    links: [{ label: "Site", href: "https://tandoorpalacerestaurant.com" }],
    summary: "Production web application serving 3,000+ monthly users with responsive UI design and integrated payment/catering systems.",
    bullets: [
      "Designed and deployed a production web application using Next.js, TypeScript, and Tailwind CSS with responsive UI across all devices.",
      "Built 12 modular React components with a typed data layer powering 100+ menu items across 12 categories.",
      "Reduced monthly platform costs 7.5x by migrating payment systems and added a catering inquiry flow generating an estimated $10,000/month in new revenue."
    ]
  },
  {
    title: "OSRSRecipes.com",
    dates: "Sep 2025 – Oct 2025",
    stack: ["Java", "Spring Boot", "React", "AWS", "MySQL"],
    siteUrl: "https://osrsrecipes.com",
    links: [{ label: "Site", href: "https://osrsrecipes.com" }, { label: "GitHub", href: "https://github.com/arshdeep-sandhu-dev/OSRS" }],
    summary: "Full-stack web application delivering real-time market data for 10,000+ items via RESTful APIs with cloud deployment.",
    bullets: [
      "Developed a full-stack web application with a Java/Spring Boot backend and React frontend, delivering real-time market data for 10,000+ items via RESTful APIs.",
      "Implemented AWS Lambda functions and API Gateway to process user requests with scalable, serverless architecture.",
      "Deployed infrastructure leveraging AWS RDS (MySQL) and CloudFront for low-latency global content delivery."
    ]
  },
  {
    title: "Senior Design – American Tenant ML Vision System",
    dates: "Aug 2025 – Dec 2025",
    stack: ["Python", "PyTorch", "YOLO"],
    videoUrl: "https://www.youtube.com/embed/5BrvMlDfVB8",
    links: [{ label: "GitHub", href: "https://github.com/AnushaAbdulla/seniorDesign" }],
    summary: "YOLOv5-based object detection pipeline for real-time property inspection analysis, built for an industry sponsor.",
    bullets: [
      "Designed and implemented a YOLOv5-based object detection pipeline using Python and PyTorch for real-time property inspection analysis.",
      "Led development of the backbone architecture (convolutional layers, CSPDarkNet feature extraction, PANet/FPN fusion), applying best practices in model optimization for accuracy and scalability."
    ]
  },
  {
    title: "LetterBoxed Movie Chooser",
    dates: "Jan 2025 – May 2025",
    stack: ["Python", "Flask", "React", "SQL", "Firebase"],
    links: [{ label: "GitHub", href: "https://github.com/arshdeep-sandhu-dev/LetterBoxd_website" }],
    summary: "Web app that fetches a user's movie wishlist and helps pick a movie with secure auth and a clean UI.",
    bullets: [
      "Integrated a movie API + database, with dynamic frontend/backend flows.",
      "Firebase Authentication (email/password + OAuth)."
    ]
  },
  {
    title: "Movie Recommendation System",
    dates: "Aug 2024 – Nov 2024",
    stack: ["Python", "C", "CUDA", "FAISS"],
    links: [{ label: "GitHub", href: "https://github.com/arshdeep-sandhu-dev/Movie-Reccomendation" }],
    summary: "GPU-accelerated movie recommendation system on 32M ratings from 200K+ users using collaborative filtering and deep learning.",
    bullets: [
      "Built a GPU-accelerated recommendation system using PyCUDA, FAISS-GPU, and multi-GPU DNNs on 32 million ratings.",
      "Implemented custom matrix factorization with sparse matrix representation and CUDA kernels for parallel SGD optimization.",
      "Deployed FAISS-GPU for scalable KNN retrieval and trained deep collaborative filtering models with custom forward/backprop."
    ]
  }
]
