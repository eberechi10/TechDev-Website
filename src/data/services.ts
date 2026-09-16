import { ServiceItem } from '../types';

export const SERVICES: ServiceItem[] = [
  {
    id: "business-websites",
    number: "01",
    title: "Business Websites",
    tagline: "Turn visitors into enquiries, bookings and paying customers.",
    description: "Professional, fast, search-optimized websites designed to showcase your offerings clearly, build immediate trust, and give potential clients direct ways to contact you.",
    examples: [
      "Hotel & hospitality booking websites",
      "Real estate search & inspection portals",
      "Corporate & professional service sites",
      "School & educational institution portals",
      "Business product catalogues & landing pages",
      "Executive & founder portfolio platforms"
    ],
    deliverables: [
      "Custom responsive design (mobile-first)",
      "WhatsApp click-to-chat integration",
      "Direct quote & enquiry booking forms",
      "Fast page load & Core Web Vitals optimization",
      "Technical SEO & Google Business readiness",
      "Clean content management setup"
    ],
    iconName: "Globe",
    ctaText: "Build My Website"
  },
  {
    id: "web-applications",
    number: "02",
    title: "Web Applications",
    tagline: "Custom web applications designed around your workflow and customers.",
    description: "Interactive, reliable web software tailored to your specific operational needs, client management processes, and digital transaction flows.",
    examples: [
      "Customer & client self-service portals",
      "Online booking & appointment engines",
      "Business intelligence dashboards",
      "Internal operations management systems",
      "Document generation & verification tools",
      "Multi-branch administrative platforms"
    ],
    deliverables: [
      "Role-based access control (RBAC)",
      "Secure user authentication & sessions",
      "Real-time database sync & APIs",
      "Automated PDF receipts & invoices",
      "Audit logs & transactional tracking"
    ],
    iconName: "LayoutDashboard",
    ctaText: "Discuss Web App"
  },
  {
    id: "mobile-applications",
    number: "03",
    title: "Mobile Applications",
    tagline: "Put your services directly in your customers' pockets.",
    description: "High-performance iOS and Android mobile apps that make browsing inventory, submitting requests, and managing accounts effortless for on-the-go users.",
    examples: [
      "Customer ordering & tracking apps",
      "Field agent & inspection mobile tools",
      "School communication & student apps",
      "Fleet & delivery driver utilities",
      "Business utility & offline-first apps",
      "Loyalty & customer rewards apps"
    ],
    deliverables: [
      "Cross-platform iOS and Android builds",
      "Push notification systems",
      "Offline sync & local storage resilience",
      "Secure biometric authentication",
      "App store release preparation"
    ],
    iconName: "Smartphone",
    ctaText: "Build Mobile App"
  },
  {
    id: "business-software",
    number: "04",
    title: "Business Software",
    tagline: "Software that helps you manage operations and make better decisions.",
    description: "Robust software systems that eliminate paperwork bottlenecks, sync multi-location stock, track invoices, and centralize business records in one reliable system.",
    examples: [
      "Inventory & stock management systems",
      "Point of Sale (POS) retail software",
      "Custom Customer Relationship Management (CRM)",
      "School & student management platforms",
      "Staff attendance & payroll trackers",
      "Supply chain & vendor tracking tools"
    ],
    deliverables: [
      "Multi-store / warehouse inventory sync",
      "Automated low-stock alerts & reports",
      "Daily profit & sales reconciliation",
      "Receipt printing & barcode scanner support",
      "Automated backups & access auditing"
    ],
    iconName: "Cpu",
    ctaText: "Streamline Operations"
  },
  {
    id: "ai-automation",
    number: "05",
    title: "AI & Automation",
    tagline: "Practical AI solutions that reduce repetitive work and lift productivity.",
    description: "Targeted automation workflows and intelligent assistants that answer common customer questions, extract invoice data, and trigger follow-ups without manual effort.",
    examples: [
      "24/7 WhatsApp & web AI customer assistants",
      "Automated document & receipt processing",
      "Lead qualification & CRM dispatch bots",
      "Automated inventory re-ordering alerts",
      "Smart recommendation engines",
      "Business reporting summaries"
    ],
    deliverables: [
      "Custom trained customer support agents",
      "Zero-latency automated notifications",
      "Structured data extraction from scans/PDFs",
      "Multi-channel webhook integrations",
      "Cost-controlled AI model orchestration"
    ],
    iconName: "Bot",
    ctaText: "Explore AI Solutions"
  },
  {
    id: "cybersecurity",
    number: "06",
    title: "Cybersecurity",
    tagline: "Security-focused architectures designed to protect your data and uptime.",
    description: "Proactive defenses, access controls, encrypted communications, and security audits to ensure your business assets and customer records remain secure.",
    examples: [
      "Web application vulnerability assessments",
      "Two-factor authentication (2FA) enforcement",
      "Database encryption & safe key handling",
      "Data leak prevention & privilege audits",
      "Secure payment gateway integration",
      "Backup & disaster recovery strategy"
    ],
    deliverables: [
      "Hardened server & firewall configurations",
      "Sanitized API endpoints (OWASP compliant)",
      "Encrypted credential & token storage",
      "Incident response & backup blueprints",
      "Executive security compliance reports"
    ],
    iconName: "ShieldCheck",
    ctaText: "Secure Systems"
  },
  {
    id: "ui-ux-design",
    number: "07",
    title: "UI/UX Design",
    tagline: "Interfaces designed to make digital products clear, fast and easy to use.",
    description: "User experience blueprints and visual designs that eliminate user confusion, shorten onboarding, and guide visitors smoothly toward taking action.",
    examples: [
      "High-converting landing page design",
      "SaaS product interface design",
      "Mobile app UX flows & wireframing",
      "Design systems & component libraries",
      "Interactive prototypes for validation",
      "Usability audits on existing platforms"
    ],
    deliverables: [
      "Figma design tokens & wireframes",
      "Clickable interactive prototypes",
      "Accessible color & typography scales",
      "Production-ready UI design assets",
      "Conversion rate optimization (CRO) review"
    ],
    iconName: "Palette",
    ctaText: "Design My Product"
  },
  {
    id: "data-analytics",
    number: "08",
    title: "Data & Analytics",
    tagline: "Turn raw business transactions into actionable, profit-driving insights.",
    description: "Clean data pipelines, sales tracking charts, and executive summaries that show you exactly where your revenue is coming from and which operations need attention.",
    examples: [
      "Executive revenue & performance dashboards",
      "Customer acquisition & retention metrics",
      "Branch-by-branch sales analytics",
      "Inventory turnover & dead-stock reporting",
      "Automated weekly email summaries",
      "Predictive demand forecasting models"
    ],
    deliverables: [
      "Clean interactive charts & KPI cards",
      "Exportable CSV/Excel report generators",
      "Real-time event logging pipelines",
      "Actionable metric benchmarking",
      "Automated executive report dispatches"
    ],
    iconName: "BarChart3",
    ctaText: "Unpack Business Data"
  }
];
