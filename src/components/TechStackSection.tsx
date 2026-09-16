import React from 'react';
import { 
  ShieldCheck, 
  Activity, 
  Search, 
  Lock, 
  Server, 
  Zap, 
  CheckCircle2,
  Cpu,
  Globe2,
  FileCheck
} from 'lucide-react';

export const TechStackSection: React.FC = () => {
  const guarantees = [
    {
      icon: ShieldCheck,
      badge: "DATA & INFRASTRUCTURE",
      title: "Enterprise-Grade Security",
      metric: "OWASP Top 10 Compliant",
      description: "End-to-end SSL/TLS encryption, parameterized SQL queries preventing injection, sanitized inputs, encrypted environment secrets, and strict Role-Based Access Control (RBAC).",
      bullets: [
        "Encrypted auth tokens & HTTPS enforcement",
        "Protection against CSRF, XSS & data leaks",
        "Automated database backup & recovery snapshots"
      ]
    },
    {
      icon: Activity,
      badge: "HOSTING & RELIABILITY",
      title: "99.9% Uptime Reliability",
      metric: "High Availability SLA",
      description: "Deployed across containerized cloud infrastructure and global edge CDN networks with auto-scaling to absorb traffic surges without crashing your digital sales desk.",
      bullets: [
        "Edge-cached asset distribution (sub-100ms)",
        "Zero-downtime rolling updates & health checks",
        "Fault-tolerant serverless API endpoints"
      ]
    },
    {
      icon: Search,
      badge: "ORGANIC DISCOVERY",
      title: "Google SEO Optimization",
      metric: "Lighthouse 95+ Core Web Vitals",
      description: "Semantic HTML5, automated XML sitemaps, OpenGraph social cards, structured Schema.org JSON-LD data, and mobile-first compression ensuring top rankings on Google.",
      bullets: [
        "Sub-second First Contentful Paint (FCP)",
        "Automated Google indexing & meta tags",
        "Local business schema for Google Maps discovery"
      ]
    }
  ];

  const auditedTechnologies = [
    { label: "Frontend Speed", tech: "React • TypeScript • Tailwind CSS • Vite" },
    { label: "Cloud & APIs", tech: "Node.js • Express • PostgreSQL • Redis" },
    { label: "Integrations", tech: "Paystack • Flutterwave • WhatsApp Business API" },
    { label: "Security & Edge", tech: "Cloudflare SSL • JWT Auth • Automated CDN" }
  ];

  return (
    <section id="architecture" className="py-24 bg-[#050811] border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/40 text-cyan-400 text-xs font-mono font-bold tracking-wider uppercase">
            <Lock className="w-3.5 h-3.5" />
            <span>Architecture &amp; Reliability Standards</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Enterprise-Grade Security. 99.9% Uptime. SEO Built-In.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            We don’t just assemble libraries. We engineer robust, battle-tested software assets that protect customer payment details, withstand traffic spikes, and dominate search rankings.
          </p>
        </div>

        {/* 3 High-Impact Enterprise Architecture Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {guarantees.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-[#080d1e] border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-cyan-400 shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-cyan-300 bg-blue-950/70 px-2.5 py-1 rounded-full border border-blue-500/30 uppercase tracking-wider">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1">
                    {item.title}
                  </h3>
                  <div className="text-xs font-mono text-emerald-400 font-semibold mb-4">
                    {item.metric}
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-slate-800/80">
                    {item.bullets.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-800/60 flex items-center gap-2 text-[11px] text-slate-400 font-mono">
                  <FileCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Verified across all client deployments</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Concise Engineering Foundations Bar */}
        <div className="rounded-2xl bg-[#090e22] border border-slate-800/90 p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 mb-4 border-b border-slate-800/80">
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-cyan-400" />
              <span className="text-xs font-mono font-bold text-slate-200 uppercase tracking-wider">
                Audited Production Stack
              </span>
            </div>
            <span className="text-xs text-slate-400">
              Selected for speed, security, maintainability, and zero unnecessary runtime overhead.
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            {auditedTechnologies.map((techItem, tIdx) => (
              <div key={tIdx} className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-850">
                <span className="text-[10px] font-mono text-cyan-400 font-semibold uppercase block mb-1">
                  {techItem.label}
                </span>
                <p className="text-xs font-mono text-slate-200">
                  {techItem.tech}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
