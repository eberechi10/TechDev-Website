import React from 'react';
import { Target, Wrench, TrendingUp, ShieldCheck } from 'lucide-react';

export const TrustSection: React.FC = () => {
  const cards = [
    {
      number: "01",
      title: "BUSINESS FIRST",
      quote: "We understand the goal before choosing the technology.",
      description: "We don't write code until we know what your business is trying to achieve — whether that's filling hotel suites, generating property inspections, or taking wholesale re-orders.",
      icon: Target
    },
    {
      number: "02",
      title: "PRACTICAL SOLUTIONS",
      quote: "Technology should solve a problem, not create another one.",
      description: "We avoid bloated software, unnecessary complexity, and fragile tools that frustrate your staff. We build tools that make daily operations faster, simpler, and less stressful.",
      icon: Wrench
    },
    {
      number: "03",
      title: "BUILT TO GROW",
      quote: "We design with your next stage of growth in mind.",
      description: "Whether you have 50 items in your catalogue today or 5,000 next year, our database structures, hosting architectures, and interfaces scale comfortably without needing a complete rewrite.",
      icon: TrendingUp
    },
    {
      number: "04",
      title: "LONG-TERM THINKING",
      quote: "We don't disappear after launch.",
      description: "Launching your website or software is day one. We stay beside our clients to maintain security, optimize conversion rates, add new features, and ensure high operational uptime.",
      icon: ShieldCheck
    }
  ];

  return (
    <section className="py-20 bg-[#070c1a] border-y border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-semibold tracking-wider uppercase">
            <span>Philosophy &amp; Standards</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technology Built Around Real Business Problems.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Your customers don't care what framework your website uses. They care whether they can find you, trust you, contact you and buy from you. We start with that problem and build the technology around it.
          </p>
        </div>

        {/* 4 Trust Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.number}
                className="group relative rounded-xl bg-slate-900/70 hover:bg-slate-900 border border-slate-800 hover:border-blue-500/40 p-6 transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-black/40 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-cyan-400 px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/20">
                      {card.number}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-blue-950/40 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:text-cyan-300 group-hover:scale-110 transition-all">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-white tracking-wide mb-2">
                    {card.title}
                  </h3>

                  <p className="text-sm font-semibold text-cyan-200/90 italic mb-3">
                    "{card.quote}"
                  </p>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-800/80 flex items-center text-[11px] text-slate-400 font-medium group-hover:text-cyan-400 transition-colors">
                  <span>Guaranteed Standard</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
