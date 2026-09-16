import { TechnologyCategory } from '../types';

export const TECH_CATEGORIES: TechnologyCategory[] = [
  {
    title: "Frontend Development",
    description: "Responsive, lightning-fast client interfaces with seamless interaction states and accessible typography.",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vite", "HTML5 & Semantic Web"]
  },
  {
    title: "Backend & Systems",
    description: "Secure, horizontally scalable API services engineered for high uptime, clean data flow, and minimal latency.",
    items: ["Node.js", "Express", "Python", "REST APIs", "Serverless Functions", "Webhooks"]
  },
  {
    title: "Databases & Storage",
    description: "ACID-compliant relational engines and cloud document stores with automated snapshotting and zero data loss.",
    items: ["PostgreSQL", "Supabase", "Firebase / Firestore", "Redis Caching", "Cloud Storage"]
  },
  {
    title: "Mobile Development",
    description: "Cross-platform mobile apps for iOS and Android delivering fluid 60fps animations and offline resilience.",
    items: ["React Native", "Flutter", "Mobile APIs", "Push Notifications", "Biometrics"]
  },
  {
    title: "AI & Data Engineering",
    description: "Production-ready machine learning workflows, automated document parsers, and custom conversational AI agents.",
    items: ["Google Gemini API", "Python Analytics", "Pandas", "NLP Pipelines", "Automated Workflows"]
  },
  {
    title: "Security & Infrastructure",
    description: "Hardened server configurations, OWASP-compliant endpoints, and encrypted secret management.",
    items: ["OAuth 2.0 & JWT", "Role-Based Access (RBAC)", "SSL/TLS Hardening", "Penetration Testing", "Cloudflare"]
  }
];
