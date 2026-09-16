import React from 'react';
import { 
  HelpCircle, 
  Users, 
  CheckCircle, 
  Eye, 
  Rocket, 
  TrendingUp 
} from 'lucide-react';

export const WhyTechDev: React.FC = () => {
  const reasons = [
    {
      number: "01",
      title: "WE START WITH THE PROBLEM",
      quote: "Before we write code, we understand what you are trying to achieve.",
      description: "We don't push trendy frameworks or unnecessary software. We begin with your business objectives, your customer bottlenecks, and your operational priorities.",
      icon: HelpCircle
    },
    {
      number: "02",
      title: "WE THINK ABOUT YOUR CUSTOMER",
      quote: "A good digital product should make things easier for the people using it.",
      description: "If your website or app is confusing, customers simply leave. We design intuitive, fast-loading, mobile-friendly interfaces where finding answers and taking action takes seconds.",
      icon: Users
    },
    {
      number: "03",
      title: "WE BUILD FOR REAL USE",
      quote: "Your solution should work outside a presentation or demo.",
      description: "Real businesses experience spotty internet, sudden inventory surges, and diverse staff skill levels. Our tools are resilient, tested with real transaction loads, and easy to run.",
      icon: CheckCircle
    },
    {
      number: "04",
      title: "WE KEEP THINGS CLEAR",
      quote: "You should understand what we're building and why.",
      description: "No confusing technical jargon, hidden costs, or secretive codebases. We maintain transparent communication, clear milestone demos, and straightforward documentation.",
      icon: Eye
    },
    {
      number: "05",
      title: "WE THINK BEYOND LAUNCH",
      quote: "Launch is the beginning, not the end.",
      description: "A digital product needs care to remain high-performing. We provide security patches, feature iterations, performance tuning, and technical guidance long after go-live.",
      icon: Rocket
    },
    {
      number: "06",
      title: "WE BUILD FOR GROWTH",
      quote: "Your technology should have room to evolve with your business.",
      description: "Our database designs, modular code, and cloud architectures accommodate growing order volumes, branch additions, and new service lines without painful rebuilds.",
      icon: TrendingUp
    }
  ];

  return (
    <section className="py-24 bg-[#070c1a] border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-semibold tracking-wider uppercase">
            <span>The TechDev Difference</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Why Businesses Choose TechDev
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            We operate as a strategic technology partner, not an assembly-line agency. Here is how we protect your investment.
          </p>
        </div>

        {/* 6 Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.number}
                className="group relative rounded-2xl bg-slate-900/60 hover:bg-slate-900/95 border border-slate-800 hover:border-blue-500/40 p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-black/40 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-cyan-400 px-2.5 py-1 rounded bg-cyan-950/60 border border-cyan-500/20">
                      {item.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-800/80 group-hover:bg-blue-950/60 border border-slate-700/60 group-hover:border-blue-500/30 flex items-center justify-center text-slate-300 group-hover:text-cyan-400 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-white tracking-wide mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm font-semibold text-cyan-200/90 italic mb-3">
                    "{item.quote}"
                  </p>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-800/80 flex items-center text-[11px] text-slate-400 group-hover:text-cyan-400 transition-colors">
                  <span>Tested In Production</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
