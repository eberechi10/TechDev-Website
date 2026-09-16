import React from 'react';
import { 
  ShieldCheck, 
  Code2, 
  Clock, 
  RotateCcw, 
  CheckCircle2, 
  FileText, 
  Award,
  ArrowRight,
  Download,
  CalendarCheck
} from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

interface PremiumTrustGuaranteeProps {
  onOpenContact: (message?: string) => void;
  onOpenRateCard: () => void;
}

export const PremiumTrustGuarantee: React.FC<PremiumTrustGuaranteeProps> = ({ 
  onOpenContact,
  onOpenRateCard
}) => {
  const guarantees = [
    {
      icon: Clock,
      title: "30-Day Post-Launch Warranty",
      subtitle: "100% Free Bug Fixes & Tuning",
      description: "We don't disappear after deployment. Every project includes 30 days of proactive monitoring, bug resolution, and operational guidance at zero extra charge."
    },
    {
      icon: Code2,
      title: "Full Code & IP Ownership",
      subtitle: "No Proprietary Lock-In",
      description: "Upon final milestone handover, 100% of your source code, design assets, database schemas, and credentials belong entirely to your business. Zero lock-in."
    },
    {
      icon: RotateCcw,
      title: "Milestone-Guaranteed Delivery",
      subtitle: "40% / 30% / 30% Low-Risk Billing",
      description: "Never pay upfront in full. Work is divided into clear sprint gates: 40% initial commitment, 30% interactive prototype review, and 30% final sign-off."
    },
    {
      icon: ShieldCheck,
      title: "Direct Engineering Lead Access",
      subtitle: "No Middlemen or Account Fluff",
      description: "Speak directly with the engineers building your software. Clear technical briefings, zero corporate jargon, and guaranteed WhatsApp updates within hours."
    }
  ];

  const roadmapSteps = [
    {
      days: "Days 1 – 3",
      title: "Scoping & Blueprint",
      badge: "Zero Obligation",
      desc: "30-minute discovery call, technical requirements breakdown, and transparent milestone quote."
    },
    {
      days: "Days 5 – 7",
      title: "Interactive Prototype",
      badge: "Visual Sign-off",
      desc: "Clickable UI/UX prototype showing exact user flows, booking forms, and mobile layouts."
    },
    {
      days: "Days 8 – 21",
      title: "Core Engineering",
      badge: "Milestone Review",
      desc: "Database creation, WhatsApp / payment integrations, performance optimization, and staging test."
    },
    {
      days: "Day 28+",
      title: "Deployment & Training",
      badge: "30-Day Warranty",
      desc: "Live domain setup, SSL encryption, staff training walkthrough, and full IP handover."
    }
  ];

  return (
    <section id="guarantee" className="py-20 bg-[#060a17] border-y border-slate-850 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-blue-600/10 blur-[90px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/40 text-cyan-400 text-xs font-bold uppercase tracking-wider">
            <Award className="w-4 h-4 text-cyan-400" />
            <span>The TechDev Commercial Guarantee</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Engineered For High-Value Clients Who Value Certainty.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Hiring software engineers shouldn't feel like a gamble. We eliminate delivery risks with contractual milestones, source code handover, and post-launch warranties.
          </p>
        </div>

        {/* 4 Trust & Risk-Reversal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {guarantees.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-[#090e22] border border-slate-800 hover:border-cyan-500/40 shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-cyan-400 mb-4 shadow-md">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-white tracking-wide">
                    {item.title}
                  </h3>
                  <div className="text-[11px] font-mono text-cyan-400 font-semibold mt-0.5 mb-2">
                    {item.subtitle}
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center gap-1.5 text-[11px] text-emerald-400 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span>Contractually Enforced</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Client Onboarding Delivery Roadmap */}
        <div className="rounded-3xl bg-[#080d1e] border border-slate-800 p-6 sm:p-10 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-8 border-b border-slate-800">
            <div>
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block">
                PREDICTABLE DELIVERY SCHEDULE
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                From First Conversation to Production Launch
              </h3>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={onOpenRateCard}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-200 hover:text-white transition-all active:scale-98"
              >
                <Download className="w-3.5 h-3.5 text-cyan-400" />
                <span>View Rate Card</span>
              </button>
              <button
                onClick={() => onOpenContact("Hello TechDev, I would like to schedule a 30-minute scoping call for my business.")}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-xs font-bold text-white transition-all shadow-md shadow-blue-600/30 active:scale-98"
              >
                <CalendarCheck className="w-3.5 h-3.5" />
                <span>Book Scoping Call</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {roadmapSteps.map((step, idx) => (
              <div 
                key={idx} 
                className="relative p-5 rounded-2xl bg-[#0b1126] border border-slate-800/80 space-y-2.5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-white bg-blue-600/30 px-2 py-0.5 rounded border border-blue-500/40">
                    {step.days}
                  </span>
                  <span className="text-[10px] text-emerald-400 font-mono">
                    {step.badge}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-slate-100">
                  {step.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Trust Quote */}
          <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center sm:text-left">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Registered Entity: <strong>{COMPANY_INFO.fullName}</strong> • Serving clients across Nigeria, Diaspora & West Africa</span>
            </div>
            <a 
              href={COMPANY_INFO.getWhatsAppLink("Hello TechDev, I'd like to review your milestone engagement contract.")}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 font-medium inline-flex items-center gap-1 transition-colors"
            >
              <span>Ask about custom enterprise SLAs</span>
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
