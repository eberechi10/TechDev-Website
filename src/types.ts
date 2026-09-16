export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  examples: string[];
  iconName: string;
  deliverables: string[];
  ctaText: string;
  imageUrl?: string;
}

export interface SolutionIndustry {
  id: string;
  title: string;
  headline: string;
  description: string;
  features: string[];
  ctaText: string;
  demoId: string;
  iconName: string;
  imageUrl?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  slug: string;
  category: string;
  type: string;
  demoLabel: string;
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  approach: string;
  features: string[];
  technologies: string[];
  businessOutcome: string;
  demoUrl: string;
  demoType: 'hotel' | 'realestate' | 'auto' | 'logistics' | 'advisory' | 'retail';
  featured: boolean;
  metricsLabel: string;
  imageUrl?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  title: string;
  bio: string;
  photoUrl?: string;
  linkedin?: string;
  github?: string;
  twitter?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'pricing' | 'technical' | 'support';
}

export interface TechnologyCategory {
  title: string;
  description: string;
  items: string[];
}

export interface ContactFormData {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  businessType: string;
  projectType: string;
  budget: string;
  timeline: string;
  message: string;
}
