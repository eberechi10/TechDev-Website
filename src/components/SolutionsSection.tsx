import React from 'react';
import { SOLUTIONS } from '../data/solutions';
import { 
  Building, 
  Home, 
  Car, 
  Truck, 
  Briefcase, 
  ShoppingBag, 
  GraduationCap, 
  CheckCircle2, 
  ArrowRight
} from 'lucide-react';

interface SolutionsSectionProps {
  onSelectDemo: (demoId: string) => void;
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({ onSelectDemo }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building': return Building;
      case 'Home': return Home;
      case 'Car': return Car;
      case 'Truck': return Truck;
      case 'Briefcase': return Briefcase;
      case 'ShoppingBag': return ShoppingBag;
      case 'GraduationCap': return GraduationCap;
      default: return Building;
    }
  };

  return (
    <section id="solutions" className="py-24 bg-[#050811] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-semibold tracking-wider uppercase">
            <span>Tailored By Industry</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Built for the Way Your Business Works.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Different businesses have different problems. Your website or software should reflect that.
          </p>
        </div>

        {/* Industry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SOLUTIONS.map((solution) => {
            const Icon = getIcon(solution.iconName);
            return (
              <div
                key={solution.id}
                id={`solution-${solution.id}`}
                className="group relative rounded-2xl bg-[#080d1e] hover:bg-[#0a1126] border border-slate-800 hover:border-cyan-500/40 p-6 sm:p-7 transition-all duration-300 shadow-xl shadow-black/40 flex flex-col justify-between"
              >
                <div>
                  {/* Industry Label & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-10 h-10 rounded-xl bg-blue-950/60 border border-blue-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                        {solution.title}
                      </span>
                    </div>
                  </div>

                  {/* Headline */}
                  <h3 className="text-lg sm:text-xl font-extrabold text-white group-hover:text-cyan-300 transition-colors mb-2.5 leading-snug">
                    "{solution.headline}"
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-5">
                    {solution.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2 pt-4 border-t border-slate-800/80 mb-6">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      Targeted Features:
                    </span>
                    {solution.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-2">
                  <button
                    onClick={() => onSelectDemo(solution.demoId)}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-900 group-hover:bg-blue-600 text-slate-200 group-hover:text-white font-bold text-xs sm:text-sm border border-slate-700/80 group-hover:border-blue-500 transition-all shadow-md active:scale-[0.99]"
                  >
                    <span>{solution.ctaText}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
