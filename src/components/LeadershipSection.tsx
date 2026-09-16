import React from 'react';
import { FOUNDER, TEAM_STATEMENT } from '../data/team';
import { COMPANY_INFO } from '../data/company';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  UserCheck, 
  Briefcase, 
  Code, 
  ShieldCheck, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

interface LeadershipSectionProps {
  onOpenContact: (customMessage?: string) => void;
}

export const LeadershipSection: React.FC<LeadershipSectionProps> = ({ onOpenContact }) => {
  return (
    <section id="team" className="py-24 bg-[#050811] border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-semibold tracking-wider uppercase">
            <span>Leadership &amp; Talent</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {TEAM_STATEMENT.heading}
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            {TEAM_STATEMENT.subheading}
          </p>
        </div>

        {/* Founder Showcase Card */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="rounded-2xl bg-gradient-to-br from-[#080d1e] to-[#0a1128] border border-blue-500/30 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Founder Avatar / Technical Profile Badge */}
              <div className="md:col-span-4 flex flex-col items-center text-center">
                <div className="relative">
                  <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-2xl bg-gradient-to-tr from-blue-600 via-cyan-500 to-indigo-600 p-1 shadow-xl shadow-blue-500/20">
                    {FOUNDER.photoUrl ? (
                      <img 
                        src={FOUNDER.photoUrl} 
                        alt={FOUNDER.name} 
                        referrerPolicy="no-referrer"
                        className="w-full h-full rounded-[14px] object-cover" 
                      />
                    ) : (
                      <div className="w-full h-full rounded-[14px] bg-[#070c1a] flex flex-col items-center justify-center p-3 border border-white/10">
                        <div className="w-14 h-14 rounded-full bg-blue-950/80 border border-blue-500/40 flex items-center justify-center text-cyan-400 mb-2">
                          <UserCheck className="w-7 h-7" />
                        </div>
                        <span className="text-xs font-mono font-bold text-slate-200">Tech Lead</span>
                        <span className="text-[10px] text-cyan-400 font-mono">Founding Engineer</span>
                      </div>
                    )}
                  </div>
                  <span className="absolute -bottom-2.5 px-3 py-0.5 rounded-full bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider shadow">
                    Verified Lead
                  </span>
                </div>

                <div className="mt-4 space-y-1">
                  <span className="text-xs text-slate-400 font-mono">Based in Onitsha, Nigeria</span>
                </div>
              </div>

              {/* Founder Bio & Credentials */}
              <div className="md:col-span-8 space-y-4 text-left">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                      {FOUNDER.role}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                      {FOUNDER.name}
                    </h3>
                  </div>
                  <span className="text-xs text-slate-400 font-mono bg-slate-900 px-2.5 py-1 rounded border border-slate-800">
                    {FOUNDER.title}
                  </span>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  "{FOUNDER.bio}"
                </p>

                {/* Core Competencies Badges */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {["Software Architecture", "UI/UX Systems", "Cybersecurity", "Data Analytics", "Tech Education"].map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium text-slate-300 bg-slate-900 border border-slate-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Social and Direct Links */}
                <div className="flex items-center gap-3 pt-3 border-t border-slate-800/80">
                  <a
                    href={FOUNDER.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={FOUNDER.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
                    aria-label="GitHub Profile"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={FOUNDER.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
                    aria-label="X / Twitter"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a
                    href={`mailto:${COMPANY_INFO.founderEmail}`}
                    className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
                    aria-label="Send direct email"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Growing Team & Hiring Culture Component (Strictly NO fake employees) */}
        <div className="rounded-2xl bg-slate-900/50 border border-slate-800 p-8 text-center max-w-4xl mx-auto space-y-6">
          <div className="max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-cyan-400 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Growing Specialist Collective</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Engineering Built on Authenticity &amp; Craft
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              "{TEAM_STATEMENT.cultureNote}"
            </p>
          </div>

          {/* Active Open Roles */}
          <div className="pt-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
              Open Positions &amp; Specialist Network:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
              {TEAM_STATEMENT.hiringRoles.map((role) => (
                <div key={role.title} className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1">
                  <div className="text-xs font-bold text-white">{role.title}</div>
                  <div className="text-[11px] text-cyan-400 font-mono">{role.type}</div>
                  <div className="text-[10px] text-slate-400">{role.location}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <button
              onClick={() => onOpenContact("Hello TechDev, I would like to inquire about joining the TechDev engineering/design team or collaborating as a technical partner.")}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-bold text-xs sm:text-sm border border-slate-700 transition-all"
            >
              <span>Join the Team / Technical Collaboration</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
