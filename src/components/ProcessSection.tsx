import React from 'react';
import { 
  Search, 
  Map, 
  Palette, 
  Code, 
  Rocket, 
  TrendingUp, 
  ArrowRight,
  MessageSquare
} from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

interface ProcessSectionProps {
  onOpenContact: (customMessage?: string) => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenContact }) => {
  const steps = [
    {
      step: "01",
      title: "DISCOVER",
      tagline: "We learn about your business, customers, problems and goals.",
      description: "We conduct an in-depth discovery session to map your current sales funnel, operational pain points, target customer personas, and competitors.",
      icon: Search
    },
    {
      step: "02",
      title: "PLAN",
      tagline: "We define the right scope, features and technical direction.",
      description: "We outline the exact feature set, database requirements, milestone deliverables, and budget before any code is written, eliminating scope surprises.",
      icon: Map
    },
    {
      step: "03",
      title: "DESIGN",
      tagline: "We shape the user experience before development begins.",
      description: "We create interactive UI/UX prototypes showing how your website or software looks, clicks, and feels on both mobile phones and desktop displays.",
      icon: Palette
    },
    {
      step: "04",
      title: "BUILD",
      tagline: "We develop, integrate and test the solution.",
      description: "Our engineers write clean, typed code, integrate APIs and WhatsApp routing, test payment flows, and ensure high page loading speeds.",
      icon: Code
    },
    {
      step: "05",
      title: "LAUNCH",
      tagline: "We deploy the product and prepare it for real users.",
      description: "We deploy to high-availability cloud servers, configure domain names and SSL security, set up business emails, and train your staff on daily operations.",
      icon: Rocket
    },
    {
      step: "06",
      title: "GROW",
      tagline: "We provide support and help improve the product over time.",
      description: "We monitor performance, apply security patches, review customer conversion analytics, and introduce feature improvements as your transaction volume expands.",
      icon: TrendingUp
    }
  ];

  return (
    <section id="process" className="py-24 bg-[#050811] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-semibold tracking-wider uppercase">
            <span>Execution Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            From Idea to Working Product.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            A clear, predictable roadmap from the first conversation to a production deployment running your business.
          </p>
        </div>

        {/* 6-Step Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="group relative rounded-2xl bg-[#080d1e] hover:bg-[#0a1128] border border-slate-800 hover:border-blue-500/50 p-6 sm:p-7 transition-all duration-300 shadow-xl shadow-black/30 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-mono font-extrabold text-cyan-400 bg-cyan-950/60 px-2.5 py-1 rounded border border-cyan-500/20">
                        PHASE {item.step}
                      </span>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-slate-800/80 group-hover:bg-blue-950/60 border border-slate-700/60 group-hover:border-blue-500/30 flex items-center justify-center text-slate-300 group-hover:text-cyan-400 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white tracking-wide mb-1.5 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm font-semibold text-slate-300 mb-3 italic">
                    "{item.tagline}"
                  </p>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 group-hover:text-cyan-400">
                  <span>Milestone Verified</span>
                  <span className="font-mono">Stage 0{idx + 1} of 06</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
            <span className="text-sm text-slate-300">
              Ready to turn your business requirement into a functional digital product?
            </span>
            <button
              onClick={() => onOpenContact("Hello TechDev, I want to start a conversation about a project.")}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-blue-600/30 transition-all"
            >
              <span>Start a Conversation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
