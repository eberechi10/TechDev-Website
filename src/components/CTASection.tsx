import React from 'react';
import { ArrowUpRight, MessageSquare, ShieldCheck, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

interface CTASectionProps {
  onOpenContact: (customMessage?: string) => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onOpenContact }) => {
  return (
    <section className="py-24 bg-[#050811] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl bg-gradient-to-b from-[#09122a] via-[#070d1e] to-[#050811] border border-blue-500/30 p-8 sm:p-14 text-center shadow-2xl overflow-hidden">
          
          {/* Subtle Ambient Radial Mask */}
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-600/10 via-transparent to-transparent" />

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/40 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Ready To Move Forward?</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight max-w-2xl mx-auto">
            Have a Business Problem We Can Solve?
          </h2>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl mx-auto mt-4 mb-8">
            Tell us what you're trying to build, improve or automate. We'll help you figure out the right digital solution.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenContact()}
              id="cta-start-project"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-base shadow-xl shadow-blue-600/35 transition-all border border-blue-400/40 active:scale-[0.98]"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-5 h-5" />
            </button>

            <a
              href={COMPANY_INFO.getWhatsAppLink("Hello TechDev, I would like to talk to your team about a project for my business.")}
              target="_blank"
              rel="noopener noreferrer"
              id="cta-talk-to-techdev"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-cyan-300 hover:text-white font-bold text-base border border-slate-700 transition-all active:scale-[0.98]"
            >
              <MessageSquare className="w-5 h-5 text-emerald-400" />
              <span>TALK TO TECHDEV</span>
            </a>
          </div>

          {/* Footer note */}
          <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center justify-center gap-2 text-xs text-slate-400">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>No obligations • Initial consultation &amp; technical scoping provided</span>
          </div>

        </div>

      </div>
    </section>
  );
};
