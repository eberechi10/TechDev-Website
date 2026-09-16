import React, { useState } from 'react';
import { 
  Target, 
  Wrench, 
  TrendingUp, 
  ShieldCheck, 
  Compass, 
  MessageSquare, 
  CreditCard, 
  Boxes, 
  Eye, 
  Rocket, 
  CheckCircle2, 
  ArrowRight,
  HelpCircle,
  Users
} from 'lucide-react';

interface TechDevStandardSectionProps {
  onOpenContact: (customMessage?: string) => void;
}

export const TechDevStandardSection: React.FC<TechDevStandardSectionProps> = ({ onOpenContact }) => {
  const [activeJob, setActiveJob] = useState(0);

  // 4 Core Foundations
  const pillars = [
    {
      number: "01",
      title: "Business Problem First",
      subtitle: "Never writing code for its own sake",
      description: "We don't recommend or build software until we understand your exact operational bottlenecks — whether that's stopping OTA commission cuts, eliminating manual waybill calls, or capturing high-intent buyer inquiries.",
      icon: Target
    },
    {
      number: "02",
      title: "Built For Real Daily Use",
      subtitle: "Zero fragile, bloated tools",
      description: "Real businesses face variable network speeds and diverse staff skills. We engineer resilient, lightning-fast interfaces that your team and customers can operate effortlessly on any smartphone.",
      icon: Wrench
    },
    {
      number: "03",
      title: "Architected For Scale",
      subtitle: "No costly full rebuilds later",
      description: "Whether you manage 20 inventory items today or 20,000 next year, our database schemas, modular code, and cloud architectures expand smoothly as your branch count and order volumes grow.",
      icon: TrendingUp
    },
    {
      number: "04",
      title: "Long-Term Accountability",
      subtitle: "30-day warranty & direct access",
      description: "Launch day is only step one. We stand beside you with a 30-day post-launch warranty, ongoing security updates, and direct engineering access to ensure 99.9% operational reliability.",
      icon: ShieldCheck
    }
  ];

  // 6 Functional Jobs Every Product Must Perform
  const jobs = [
    {
      title: "GET FOUND",
      tagline: "Search & Local Intent",
      description: "Ensure customers searching for your products and services find your official business before your competitors.",
      icon: Compass,
      metric: "Optimized for Google SEO & Local Maps",
      color: "text-blue-400 border-blue-500/30 bg-blue-950/20"
    },
    {
      title: "GET TRUSTED",
      tagline: "Credibility Before The Call",
      description: "Present verified specs, legal documentation badges, and transparent pricing so clients feel confident committing.",
      icon: ShieldCheck,
      metric: "Reduces Customer Hesitation",
      color: "text-emerald-400 border-emerald-500/30 bg-emerald-950/20"
    },
    {
      title: "GET CONTACTED",
      tagline: "Zero-Friction Inquiries",
      description: "Prefilled WhatsApp order dispatches, inspection calendars, and instant quote calculators connected in seconds.",
      icon: MessageSquare,
      metric: "Instant WhatsApp & Call Routing",
      color: "text-cyan-400 border-cyan-500/30 bg-cyan-950/20"
    },
    {
      title: "GET PAID",
      tagline: "Fast Cash Conversion",
      description: "Structured digital invoices, instant bank transfer notifications, or Paystack/Flutterwave/Stripe checkouts.",
      icon: CreditCard,
      metric: "Shorter Cash Collection Cycle",
      color: "text-amber-400 border-amber-500/30 bg-amber-950/20"
    },
    {
      title: "GET ORGANIZED",
      tagline: "Zero Internal Leaks",
      description: "Centralized stock catalogues, booking slots, and customer logs that eliminate manual confusion and lost orders.",
      icon: Boxes,
      metric: "Eliminates Manual Clipboard Chaos",
      color: "text-indigo-400 border-indigo-500/30 bg-indigo-950/20"
    },
    {
      title: "GET REFERRED",
      tagline: "Remarkable Experience",
      description: "A fast, polished, bug-free customer experience that makes clients proud to recommend your firm to others.",
      icon: Rocket,
      metric: "Organic Repeat Business",
      color: "text-rose-400 border-rose-500/30 bg-rose-950/20"
    }
  ];

  return (
    <section id="standard" className="py-24 bg-[#070c1a] border-y border-slate-800/80 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-2/3 h-48 bg-blue-600/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Unified Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/40 text-cyan-400 text-xs font-mono font-bold tracking-wider uppercase">
            <span>The TechDev Standard</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            How We Build Software That Solves Real Commercial Problems.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            We do not sell abstract code or inflated promises. Every system we deliver is engineered around clear business outcomes: transparent pricing, fast milestone delivery, dedicated engineering support, and reliable daily execution.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.number}
                className="group relative rounded-2xl bg-[#090e22] hover:bg-[#0b122c] border border-slate-800 hover:border-cyan-500/40 p-6 transition-all duration-300 hover:-translate-y-1 shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/30">
                      STANDARD {pillar.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-white mb-1 tracking-wide">
                    {pillar.title}
                  </h3>
                  <div className="text-[11px] font-mono text-cyan-400 font-semibold mb-3">
                    {pillar.subtitle}
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center gap-1.5 text-[11px] text-emerald-400 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span>Guaranteed Commitment</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive "Every Product Has a Job" Architecture Tray */}
        <div className="rounded-3xl bg-[#080d1e] border border-slate-800 p-6 sm:p-10 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-8 border-b border-slate-800">
            <div>
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block">
                FUNCTIONAL MANDATE
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                Every Digital Asset We Build Must Fulfill 6 Critical Jobs
              </h3>
              <p className="text-xs text-slate-400 mt-1 max-w-2xl">
                A website or portal isn't an ornament. It is an automated commercial employee working 24/7. Select a job to view its operational function:
              </p>
            </div>
            
            <button
              onClick={() => onOpenContact("Hello TechDev, I'd like to discuss the functional scope and objectives for my digital project.")}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-xs font-bold text-white transition-all shadow-md shadow-blue-600/30 shrink-0 self-start md:self-auto"
            >
              <span>Scope Your Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Job Selector Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
            {jobs.map((job, idx) => {
              const Icon = job.icon;
              const isActive = activeJob === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveJob(idx)}
                  className={`p-3.5 rounded-xl text-left border transition-all flex flex-col justify-between ${
                    isActive 
                      ? 'bg-blue-950/60 border-cyan-400 shadow-lg shadow-cyan-500/10 ring-1 ring-cyan-400/40' 
                      : 'bg-[#0a0f24] border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-cyan-400' : 'text-slate-400'}`} />
                    <span className="text-[10px] font-mono text-slate-500 font-bold">0{idx + 1}</span>
                  </div>
                  <div>
                    <span className={`text-xs font-bold block ${isActive ? 'text-white' : 'text-slate-300'}`}>
                      {job.title}
                    </span>
                    <span className="text-[10px] text-slate-400 truncate block mt-0.5">
                      {job.tagline}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Job Focus Card */}
          <div className="p-6 rounded-2xl bg-[#0b1126] border border-slate-800/90 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold">
                <span>Core Objective:</span>
                <span className="text-white font-bold">{jobs[activeJob].title}</span>
              </div>
              <p className="text-sm text-slate-200 leading-relaxed max-w-2xl font-medium">
                {jobs[activeJob].description}
              </p>
            </div>

            <div className="px-4 py-3 rounded-xl bg-slate-900 border border-slate-700/80 text-left sm:text-right shrink-0">
              <span className="text-[10px] uppercase tracking-wider font-mono text-slate-400 block">
                Verification Metric
              </span>
              <span className="text-xs font-bold text-emerald-400 block mt-0.5">
                {jobs[activeJob].metric}
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
