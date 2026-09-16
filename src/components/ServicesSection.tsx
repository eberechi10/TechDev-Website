import React, { useState } from 'react';
import { SERVICES } from '../data/services';
import { ServiceItem } from '../types';
import { 
  Globe, 
  LayoutDashboard, 
  Smartphone, 
  Cpu, 
  Bot, 
  ShieldCheck, 
  Palette, 
  BarChart3, 
  ArrowRight, 
  Check, 
  X,
  Sparkles
} from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [selectedModalService, setSelectedModalService] = useState<ServiceItem | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe': return Globe;
      case 'LayoutDashboard': return LayoutDashboard;
      case 'Smartphone': return Smartphone;
      case 'Cpu': return Cpu;
      case 'Bot': return Bot;
      case 'ShieldCheck': return ShieldCheck;
      case 'Palette': return Palette;
      case 'BarChart3': return BarChart3;
      default: return Globe;
    }
  };

  return (
    <section id="services" className="py-24 bg-[#070c1a] border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-semibold tracking-wider uppercase">
            <span>Capabilities &amp; Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            What We Build
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            From your first professional website to the systems running your business, we build technology around your goals.
          </p>
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => {
            const Icon = getIcon(service.iconName);
            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className="group relative rounded-xl bg-slate-900/60 hover:bg-slate-900/95 border border-slate-800 hover:border-blue-500/50 p-6 transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-black/30 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Number and Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-cyan-400 transition-colors">
                      SERVICE {service.number}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-slate-800/80 group-hover:bg-blue-950/60 border border-slate-700/60 group-hover:border-blue-500/40 flex items-center justify-center text-slate-300 group-hover:text-cyan-400 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-1.5">
                    {service.title}
                  </h3>
                  <p className="text-xs font-medium text-slate-400 mb-3 italic">
                    "{service.tagline}"
                  </p>

                  {/* Description */}
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Examples List */}
                  <div className="space-y-1.5 pt-3 border-t border-slate-800/80 mb-5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      Key Implementations:
                    </span>
                    {service.examples.slice(0, 4).map((ex, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span className="truncate">{ex}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action */}
                <div className="pt-2 flex items-center justify-between border-t border-slate-800/60">
                  <button
                    onClick={() => setSelectedModalService(service)}
                    className="text-xs font-bold text-slate-300 hover:text-cyan-400 flex items-center gap-1 group/btn"
                  >
                    <span>View Scope</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={() => onSelectService(service.title)}
                    className="text-xs font-semibold px-2.5 py-1 rounded bg-blue-950/50 hover:bg-blue-600 text-cyan-300 hover:text-white border border-blue-500/30 transition-all"
                  >
                    Request
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Service Detail Modal */}
      {selectedModalService && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
          onClick={() => setSelectedModalService(null)}
        >
          <div 
            className="bg-[#090e1e] border border-slate-700 rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl space-y-6 relative text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedModalService(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg bg-slate-800/60 border border-slate-700"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-950/60 px-2.5 py-1 rounded border border-cyan-500/30">
                SERVICE {selectedModalService.number}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {selectedModalService.title}
              </h3>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              {selectedModalService.description}
            </p>

            <div className="space-y-4">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  What We Deliver:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedModalService.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-200 bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
                      <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Common Real-World Examples:
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {selectedModalService.examples.map((ex, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{ex}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-4">
              <button
                onClick={() => setSelectedModalService(null)}
                className="px-4 py-2 text-sm text-slate-400 hover:text-white"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const title = selectedModalService.title;
                  setSelectedModalService(null);
                  onSelectService(title);
                }}
                className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-600/30 transition-all flex items-center gap-1.5"
              >
                <span>{selectedModalService.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
