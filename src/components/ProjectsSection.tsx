import React, { useState } from 'react';
import { PROJECTS } from '../data/projects';
import { ProjectItem } from '../types';
import { 
  ArrowUpRight, 
  ExternalLink, 
  Layers, 
  Check, 
  ShieldCheck, 
  Building, 
  Home, 
  Car, 
  Truck, 
  Briefcase, 
  ShoppingBag,
  Sparkles,
  ArrowRight,
  TrendingUp
} from 'lucide-react';

interface ProjectsSectionProps {
  onOpenDemo: (project: ProjectItem) => void;
  onOpenContact: (customMessage?: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onOpenDemo, onOpenContact }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Hospitality', 'Real Estate', 'Automobile', 'Logistics', 'Professional Services', 'Wholesale & Retail'];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category.toLowerCase().includes(activeCategory.toLowerCase()));

  const getIndustryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'hospitality': return Building;
      case 'real estate': return Home;
      case 'automobile': return Car;
      case 'logistics': return Truck;
      case 'professional services': return Briefcase;
      case 'wholesale & retail': return ShoppingBag;
      default: return Layers;
    }
  };

  return (
    <section id="work" className="py-24 bg-[#050811] border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-cyan-400 text-xs font-semibold tracking-wider uppercase">
            <span>Proof of Capability &amp; Working Concepts</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            See What Your Business Could Look Like.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            We've created concept experiences for different types of businesses so you can see how technology can be shaped around a real business.
          </p>
        </div>

        {/* Category Pills Filter */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25 border border-blue-400/40'
                  : 'bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 3-Column Desktop / 2-Column Tablet / 1-Column Mobile Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const Icon = getIndustryIcon(project.category);
            return (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                className="group rounded-2xl bg-[#080d1e] hover:bg-[#0a1128] border border-slate-800 hover:border-cyan-500/40 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 shadow-xl shadow-black/50 flex flex-col justify-between"
              >
                <div>
                  {/* Visual Browser Mockup Preview */}
                  <div className="relative bg-[#0b1024] p-4 border-b border-slate-800/80 overflow-hidden">
                    {/* Browser Chrome Header */}
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800/80">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70 inline-block"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70 inline-block"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70 inline-block"></span>
                        <span className="text-[10px] font-mono text-slate-400 ml-1.5 truncate max-w-[140px]">
                          {project.slug}.com
                        </span>
                      </div>
                      <span className="text-[9px] font-bold tracking-wider px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 uppercase">
                        {project.demoLabel}
                      </span>
                    </div>

                    {/* Real Visual Image & Interface Preview */}
                    <div className="relative h-48 rounded-lg overflow-hidden border border-slate-800 flex flex-col justify-between group-hover:scale-[1.02] transition-transform duration-300">
                      {project.imageUrl ? (
                        <>
                          <img
                            src={project.imageUrl}
                            alt={project.title}
                            referrerPolicy="no-referrer"
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#080d1e] via-[#080d1e]/50 to-transparent"></div>
                        </>
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-950"></div>
                      )}

                      <div className="relative z-10 p-3 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-md bg-[#050811]/80 backdrop-blur-sm border border-blue-500/40 flex items-center justify-center text-cyan-400">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-white tracking-wide truncate max-w-[160px] drop-shadow-md">
                              {project.title}
                            </div>
                            <div className="text-[10px] text-cyan-300 uppercase font-mono drop-shadow">
                              {project.category}
                            </div>
                          </div>
                        </div>
                        <span className="text-[10px] text-emerald-300 bg-emerald-950/80 backdrop-blur-sm px-2 py-0.5 rounded border border-emerald-500/40 font-mono">
                          LIVE SIM
                        </span>
                      </div>

                      {/* Mockup Core Visual Bottom Bar */}
                      <div className="relative z-10 p-3 pt-0">
                        <div className="p-2 rounded bg-black/60 backdrop-blur-md border border-white/10 space-y-0.5 text-left">
                          <div className="text-[11px] font-semibold text-white truncate">
                            "{project.tagline}"
                          </div>
                          <div className="text-[10px] text-cyan-300 font-mono flex items-center justify-between">
                            <span>{project.metricsLabel}</span>
                            <span className="font-bold text-white group-hover:underline">Explore Demo →</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                        {project.category}
                      </span>
                      <span className="text-[11px] text-slate-400 font-mono">
                        {project.type}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>

                    {/* Business Impact & Outcome */}
                    <div className="p-3 rounded-xl bg-blue-950/30 border border-blue-500/25 space-y-1">
                      <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-cyan-400">
                        <TrendingUp className="w-3.5 h-3.5" />
                        <span>Commercial Impact</span>
                      </div>
                      <p className="text-[11px] text-slate-200 font-medium leading-relaxed">
                        {project.businessOutcome}
                      </p>
                    </div>

                    {/* Problem & Solution Box */}
                    <div className="space-y-2 text-xs">
                      <div className="text-slate-300">
                        <strong className="text-slate-400 uppercase tracking-wider text-[10px] block">Problem:</strong>
                        <p className="line-clamp-2 text-slate-400 mt-0.5">{project.problem}</p>
                      </div>
                      <div className="text-slate-300 pt-1 border-t border-slate-800/80">
                        <strong className="text-cyan-400 uppercase tracking-wider text-[10px] block">Solution:</strong>
                        <p className="line-clamp-2 text-slate-300 mt-0.5">{project.solution}</p>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded text-[10px] font-mono text-slate-300 bg-slate-900 border border-slate-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action */}
                <div className="p-6 pt-0">
                  <button
                    onClick={() => onOpenDemo(project)}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-900 group-hover:bg-blue-600 text-slate-200 group-hover:text-white font-bold text-xs sm:text-sm border border-slate-700/80 group-hover:border-blue-500 shadow-md transition-all active:scale-[0.99]"
                  >
                    <span>VIEW LIVE DEMO</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* IMPORTANT SALES FEATURE: "Want Something Like This?" */}
        <div className="mt-16 rounded-2xl bg-gradient-to-r from-[#0a1128] via-[#0b1433] to-[#070c1a] border border-blue-500/30 p-8 shadow-2xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-500/40 text-cyan-400 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>Custom Built For You</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Want Something Like This?
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                This is a concept experience. We can adapt the same approach to your business, brand, customers and goals.
              </p>
            </div>

            <button
              onClick={() => onOpenContact("Hello TechDev, I saw your concept experiences and would like to build a custom solution for my business.")}
              id="projects-cta-build-mine"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-sm sm:text-base shadow-xl shadow-blue-600/30 hover:shadow-blue-500/40 transition-all shrink-0 active:scale-[0.98]"
            >
              <span>BUILD MINE</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* FINAL CTA AFTER PROJECTS */}
        <div className="mt-12 text-center space-y-4 py-8 border-t border-slate-800/80">
          <p className="text-sm font-bold uppercase tracking-widest text-slate-400">
            Don't Just Put Your Business Online.
          </p>
          <h4 className="text-2xl sm:text-3xl font-extrabold text-white">
            Give your customers a better reason to choose you.
          </h4>
          <div>
            <button
              onClick={() => onOpenContact()}
              id="projects-cta-start-project"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-cyan-400 hover:text-white font-bold text-sm border border-cyan-500/30 hover:border-cyan-400 transition-all shadow-lg"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
