import React from 'react';
import { COMPANY_INFO } from '../data/company';
import { Shield, Target, Lightbulb, BookOpen, Award, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const valueIcons = [Shield, Target, Lightbulb, BookOpen, Award];

  return (
    <section id="about" className="py-24 bg-[#070c1a] border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-semibold tracking-wider uppercase">
            <span>Our Foundation &amp; Purpose</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Technology With a Purpose.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            TechDev by Techstackgist builds practical digital products for businesses and organizations that want to use technology more effectively.
          </p>
        </div>

        {/* Narrative & Relationship Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          
          {/* Left Narrative */}
          <div className="lg:col-span-7 space-y-5 text-left">
            <h3 className="text-2xl font-bold text-white">
              Engineering solutions that stand up to real business demands.
            </h3>
            
            <p className="text-base text-slate-300 leading-relaxed">
              We combine software development, UI/UX design, cybersecurity, data and emerging technologies to turn ideas and everyday commercial bottlenecks into useful, high-converting digital solutions.
            </p>

            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3">
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block">
                Brand Architecture
              </span>
              <p className="text-sm text-slate-300 leading-relaxed">
                <strong>Techstackgist</strong> represents our broader technology media, education, and research brand. 
                <br />
                <strong>TechDev</strong> is the specialized software engineering and digital solutions arm — dedicated entirely to designing, building, and deploying production-grade systems for clients.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block mb-1">
                  OUR MISSION
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  To eliminate commercial friction by engineering accessible, high-performance technology that directly generates sales and simplifies operations for African and global enterprises.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <span className="text-xs font-bold text-blue-400 uppercase tracking-wider block mb-1">
                  OUR VISION
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  To be the most trusted technology engineering partner for businesses transitioning from manual or outdated tools to modern digital platforms.
                </p>
              </div>
            </div>
          </div>

          {/* Right Highlights Panel */}
          <div className="lg:col-span-5 space-y-6">
            {/* Engineering Studio Image Card */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl group">
              <img 
                src="/src/assets/images/software_studio_1789594455706.jpg" 
                alt="TechDev Software Engineering Studio & UI/UX Lab" 
                referrerPolicy="no-referrer"
                className="w-full h-52 sm:h-60 object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070b18] via-black/20 to-transparent"></div>
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                <span className="px-2.5 py-1 rounded-md bg-[#050811]/90 backdrop-blur-sm border border-slate-700 text-cyan-300 font-mono text-[11px]">
                  TechDev Studio Lab
                </span>
                <span className="text-[11px] text-slate-300 bg-black/60 px-2 py-0.5 rounded">
                  Crafted for Performance
                </span>
              </div>
            </div>

            <div className="rounded-2xl bg-gradient-to-b from-[#0a1128] to-[#070b18] border border-slate-800 p-6 sm:p-8 space-y-5 shadow-2xl">
              <h4 className="text-lg font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                <span>What Guides Every Build</span>
              </h4>

              <div className="space-y-3 text-xs text-slate-300">
                <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                  <strong className="text-white block mb-0.5">Commercial Utility Over Novelty:</strong>
                  Every feature must earn its place by solving a tangible bottleneck.
                </div>
                <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                  <strong className="text-white block mb-0.5">Mobile-First Realities:</strong>
                  Designed specifically for real African mobile data networks and handheld screens.
                </div>
                <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                  <strong className="text-white block mb-0.5">Zero Data Vulnerabilities:</strong>
                  Rigorous input sanitization, hardened authentication, and automatic backups.
                </div>
              </div>

              <div className="pt-2 text-center">
                <span className="text-xs font-mono text-cyan-400">
                  TECHDEV BY TECHSTACKGIST
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* 5 Core Values */}
        <div className="pt-8 border-t border-slate-800">
          <div className="text-center mb-10">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Our Core Operating Values
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              The fundamental standards that inform how we advise clients, quote projects, and write software.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {COMPANY_INFO.values.map((val, idx) => {
              const Icon = valueIcons[idx] || Shield;
              return (
                <div
                  key={val.title}
                  className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/30 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-8 h-8 rounded-lg bg-blue-950/60 border border-blue-500/20 flex items-center justify-center text-cyan-400 mb-3">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-bold text-white mb-2 tracking-wide">
                      {val.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-2 border-t border-slate-800/80 text-[10px] font-mono text-slate-400">
                    Standard 0{idx + 1}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
