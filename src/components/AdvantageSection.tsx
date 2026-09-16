import React, { useState } from 'react';
import { 
  Compass, 
  ShieldCheck, 
  MessageSquare, 
  CreditCard, 
  Boxes, 
  TrendingUp,
  ArrowRight
} from 'lucide-react';

interface AdvantageSectionProps {
  onOpenContact: (customMessage?: string) => void;
}

export const AdvantageSection: React.FC<AdvantageSectionProps> = ({ onOpenContact }) => {
  const [activeJob, setActiveJob] = useState(0);

  const jobs = [
    {
      title: "GET FOUND",
      subtitle: "High-intent search visibility",
      description: "Ensure customers searching for your services in Onitsha, Lagos, Abuja, or across Nigeria find you before they find your competitors.",
      icon: Compass,
      metric: "Optimized for Local & Google Search",
      color: "text-blue-400 border-blue-500/30 bg-blue-950/20"
    },
    {
      title: "GET TRUSTED",
      subtitle: "Credibility before the call",
      description: "Show verified details, high-res photos, clear pricing, and legal documentation so customers feel safe making high-ticket commitments.",
      icon: ShieldCheck,
      metric: "Reduces Customer Hesitation",
      color: "text-emerald-400 border-emerald-500/30 bg-emerald-950/20"
    },
    {
      title: "GET CONTACTED",
      subtitle: "Zero-friction channels",
      description: "Direct WhatsApp buttons with prefilled item details, instant inspection forms, and fast quote calculators so buyers connect in seconds.",
      icon: MessageSquare,
      metric: "Direct WhatsApp & Call Routing",
      color: "text-cyan-400 border-cyan-500/30 bg-cyan-950/20"
    },
    {
      title: "GET PAID",
      subtitle: "Fast transaction flow",
      description: "Streamlined invoices, receipt generation, direct bank payment instructions, or card gateways so orders turn into bank credits immediately.",
      icon: CreditCard,
      metric: "Shorter Cash Conversion Cycle",
      color: "text-amber-400 border-amber-500/30 bg-amber-950/20"
    },
    {
      title: "GET ORGANIZED",
      subtitle: "Operations that don't leak",
      description: "Centralized stock counts, booking calendars, and customer records that stop errors, misplaced inventory, and double-bookings.",
      icon: Boxes,
      metric: "Eliminates Manual Chaos",
      color: "text-indigo-400 border-indigo-500/30 bg-indigo-950/20"
    },
    {
      title: "GROW",
      subtitle: "Predictable scaling",
      description: "Clear data summaries that show you which products sell, which routes make money, and where your next revenue leap lies.",
      icon: TrendingUp,
      metric: "Data-Driven Business Decisions",
      color: "text-rose-400 border-rose-500/30 bg-rose-950/20"
    }
  ];

  return (
    <section className="py-24 bg-[#050811] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Eyebrow */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-3">
            <span>The TechDev Principle</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technology Should Make Business Simpler.
          </h2>
        </div>

        {/* 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Bold Statement */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
                "Your website is not decoration.
                <br />
                <span className="text-cyan-400">
                  Your software is not just code."
                </span>
              </h3>

              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" />
            </div>

            <p className="text-base text-slate-300 leading-relaxed">
              Too many businesses invest in websites that sit online like static billboards, bringing zero inquiries. Or they purchase expensive software that employees find too complicated to use.
            </p>

            <p className="text-base text-slate-400 leading-relaxed">
              At TechDev, we reject vanity projects. Every piece of software or website we deliver has a specific, measurable commercial job to perform for your company.
            </p>

            <div className="pt-4">
              <button
                onClick={() => onOpenContact("Hello TechDev, I'd like to discuss a digital solution with a clear business outcome.")}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-cyan-400 font-bold text-sm border border-cyan-500/30 hover:border-cyan-400 transition-all group"
              >
                <span>Put Technology to Work for You</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: "Every digital product should have a job" + 6 Jobs */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#090d1c] border border-slate-800 p-6 sm:p-8 shadow-2xl">
              <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">The 6 Commercial Jobs</span>
                  <h4 className="text-lg sm:text-xl font-extrabold text-white mt-0.5">
                    Every Digital Product Should Have a Job:
                  </h4>
                </div>
                <span className="text-xs font-mono text-cyan-400 bg-cyan-950/60 px-2.5 py-1 rounded border border-cyan-500/30">
                  CORE OUTCOMES
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                {jobs.map((job, idx) => {
                  const Icon = job.icon;
                  const isSelected = activeJob === idx;
                  return (
                    <div
                      key={job.title}
                      onClick={() => setActiveJob(idx)}
                      className={`p-4 rounded-xl border transition-all cursor-pointer ${
                        isSelected 
                          ? 'bg-slate-800/90 border-cyan-500/60 shadow-lg shadow-cyan-950/30 scale-[1.01]' 
                          : 'bg-slate-900/60 border-slate-800/80 hover:border-slate-700 hover:bg-slate-800/40'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2.5">
                        <div className="flex items-center gap-2">
                          <div className={`p-1.5 rounded-lg border ${job.color}`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <span className="font-extrabold text-sm text-white tracking-wide">
                            {job.title}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono text-slate-400">
                          0{idx + 1}
                        </span>
                      </div>

                      <div className="text-xs font-semibold text-slate-300 mb-1">
                        {job.subtitle}
                      </div>

                      <p className="text-xs text-slate-400 leading-normal mb-2.5">
                        {job.description}
                      </p>

                      <div className="text-[10px] font-mono text-cyan-400/90 bg-slate-950/60 px-2 py-1 rounded inline-block">
                        ✓ {job.metric}
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
