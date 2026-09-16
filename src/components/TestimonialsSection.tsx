import React from 'react';
import { ShieldCheck, MessageSquare, ArrowRight, Star } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

interface TestimonialsSectionProps {
  onOpenContact: (customMessage?: string) => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ onOpenContact }) => {
  return (
    <section className="py-20 bg-[#070c1a] border-b border-slate-800/80 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-2xl bg-gradient-to-r from-slate-900/90 via-[#0a1024] to-slate-900/90 border border-slate-800 p-8 sm:p-10 text-center shadow-xl">
          
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950 border border-slate-800 text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span>Honest Commercial Standards</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
            What Our Clients Say.
          </h2>

          <div className="max-w-2xl mx-auto space-y-4">
            <p className="text-base sm:text-lg text-slate-300 font-medium">
              "Client stories are being added as we complete more projects."
            </p>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              We uphold strict authenticity standards: we never publish fabricated reviews or synthetic ratings. Every story, quote, and business outcome that appears on this platform is verified and approved directly by the business owners we work with.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-center gap-4">
            <span className="text-xs text-slate-400">
              Ready to build a flagship solution and become our next documented success story?
            </span>
            <button
              onClick={() => onOpenContact("Hello TechDev, I'd like to partner with you on a technology project for my business.")}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-lg shadow-blue-600/30 transition-all"
            >
              <span>Partner With TechDev</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
