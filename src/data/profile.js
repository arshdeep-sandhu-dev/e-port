export const profile = {
  name: "Arshdeep Sandhu",
  location: "San Antonio, TX",
  tagline: "Software Engineer • ML Systems • Cloud & DevOps",
  email: "arsh.sandhu.dev@gmail.com",
  phone: "210-636-8014",
  linkedin: "https://linkedin.com/in/arsh-sandhu-dev",
  github: "https://github.com/arshdeep-sandhu-dev",
  intro:
    "I build production-grade full-stack systems, ML pipelines, and developer tooling that improves reliability and speed for real teams."
}

export const highlights = [
  { title: "Full-stack + DevOps", body: "Spring Boot + React, CI/CD, Kubernetes, AWS deployments." },
  { title: "ML Systems", body: "RAG pipelines, embeddings, vector search (FAISS + pgvector), YOLO-style CV work." },
  { title: "Ship mindset", body: "Clean APIs, tests, monitoring, and performance wins — not just demos." }
]

export const skills = {
  Languages: ["Java", "Python", "C", "SQL", "JavaScript", "HTML/CSS"],
  "Frameworks & Libraries": ["Spring Boot", "React", "Node.js", "Flask", "JUnit", "Mockito", "Material-UI", "YOLO"],
  "Cloud & DevOps": ["AWS", "Lambda", "RDS", "EC2", "Git", "GitHub", "GitLab", "GitLab CI/CD", "Kubernetes"],
  Tools: ["VS Code", "Visual Studio", "IntelliJ", "Eclipse", "Postman"]
}

export const experience = [
  {
    role: "Software Engineering Intern",
    company: "USAA",
    dates: "May 2025 - Aug 2025",
    bullets: [
      "Engineered a full-stack dashboard (Spring Boot, React, GitLab API) to monitor CI/CD test results and downstream health across 20+ projects.",
      "Automated real-time pipeline tracking, cutting manual analysis time and boosting debugging efficiency for a 12-developer team.",
      "Resolved deployment failures across GitLab CI/CD and Kubernetes to stabilize release workflows.",
      "Integrated secure backend service accounts, added unit tests (JUnit, Mockito) with 90%+ coverage, and validated APIs with Postman."
    ]
  },
  {
    role: "Computer Science Tutor",
    company: "University of Texas at San Antonio",
    dates: "Jan 2025 - May 2025",
    bullets: [
      "Tutored 100+ students in Java, Python, C, data structures, algorithms, and OOP.",
      "Mentored students on debugging, interview prep, and software engineering fundamentals."
    ]
  }
]

export const projects = [
  {
    title: "Retrieval-Augmented Generation (RAG) System",
    dates: "Dec 2025 - Current",
    stack: ["LangChain", "FAISS", "OpenAI", "PostgreSQL", "pgvector"],
    links: [{ label: "GitHub", href: "https://github.com/arshdeep-sandhu-dev" }],
    summary: "Production-style RAG that enables semantic search over user-uploaded PDFs with multi-stage retrieval and re-ranking.",
    bullets: [
      "Built ingestion pipeline: chunking → embeddings → storage (FAISS + pgvector).",
      "Designed multi-stage retrieval with re-ranking/context filtering to improve relevance and reduce hallucinations.",
      "Unified OpenAI + Ollama model access behind a single inference interface.",
      "Optimized retrieval latency with batching and caching."
    ]
  },
  {
    title: "CI/CD Downstream Health Dashboard",
    dates: "May 2025 - Aug 2025",
    stack: ["Spring Boot", "React", "GitLab API", "Kubernetes"],
    links: [],
    summary: "Internal dashboard to monitor pipeline results and downstream health across many services.",
    bullets: [
      "Aggregated downstream pipeline statuses to improve release visibility and debugging speed.",
      "Hardened deployments and improved reliability across CI/CD + Kubernetes."
    ]
  },
  {
    title: "Senior Design – YOLOv5-Based Vision System",
    dates: "Aug 2025 - Dec 2025",
    stack: ["Python", "PyTorch", "YOLOv5"],
    links: [{ label: "GitHub", href: "https://github.com/AnushaAbdulla/seniorDesign" }],
    summary: "Object-detection pipeline for a real sponsor, focusing on backbone/neck architecture design for accuracy + speed.",
    bullets: [
      "Led development of backbone + neck (CSPDarkNet-inspired extraction, PANet/FPN fusion).",
      "Applied best practices in CNN design and training optimization to balance accuracy and inference speed."
    ]
  },
  {
    title: "OSRSRecipes.com",
    dates: "Sep 2025 - Oct 2025",
    stack: ["Java", "Spring Boot", "React", "AWS", "Firebase", "MySQL"],
    links: [{ label: "Site", href: "https://osrsrecipes.com" },{ label: "GitHub", href: "https://github.com/arshdeep-sandhu-dev/OSRS" }],
    summary: "Full-stack web application with cloud deployment and serverless request processing.",
    bullets: [
      "Built Spring Boot backend + React frontend.",
      "Implemented AWS Lambda + API Gateway for processing user requests.",
      "Deployed scalable architecture leveraging AWS RDS and CloudFront."
    ]
  },
  {
    title: "LetterBoxed Movie Chooser",
    dates: "Jan 2025 - May 2025",
    stack: ["Python", "Flask", "React", "SQL", "Firebase"],
    links: [{ label: "GitHub", href: "https://github.com/arshdeep-sandhu-dev/LetterBoxd_website" }],
    summary: "Fetches a user's wishlist from a movie API and helps pick a movie fast with secure auth and a clean UI.",
    bullets: [
      "Integrated a movie API + database, with dynamic frontend/backend flows.",
      "Firebase Authentication (email/password + OAuth)."
    ]
  },
  {
    title: "Movie Reccommendation System",
    dates: "Aug 2024 - Nov 2024",
    stack: ["Python", "C", "Cuda", "FAISS"],
    links: [{ label: "GitHub", href: "https://github.com/arshdeep-sandhu-dev/Movie-Reccomendation" }],
    summary: "Movie Reccomendation System using Collaborative Filtering and Content-Based Filtering and large neural networks for embeddings. Using FAISS for fast similarity search.",
    bullets: [
      "Built a GPU-accelerated movie recommendation system on 32 million ratings from 200,000+ users using PyCUDA, FAISS-GPU, and multi-GPU DNNs",
      "Implemented custom matrix factorization with sparse matrix representation and CUDA kernels for parallel SGD optimization",
      "Deployed FAISS-GPU for scalable KNN retrieval and trained deep collaborative filtering models with custom forward/backprop on multi-GPU",
      "Achieved fast convergence and high accuracy while benchmarking RMSE and GPU utilization across all models"
    ]
  }
]
