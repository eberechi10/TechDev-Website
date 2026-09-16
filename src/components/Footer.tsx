import React from 'react';
import { COMPANY_INFO } from '../data/company';
import { LegalType } from './LegalModal';
import { 
  Terminal, 
  ArrowUpRight, 
  Github, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Instagram, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  MessageSquare
} from 'lucide-react';

interface FooterProps {
  onOpenLegal: (type: LegalType) => void;
  onOpenContact: (customMessage?: string) => void;
  onOpenRateCard?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal, onOpenContact, onOpenRateCard }) => {
  const currentYear = 2026;

  return (
    <footer className="bg-[#04060d] text-slate-400 border-t border-slate-800/80 pt-16 pb-24 sm:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand & Purpose (4 cols) */}
          <div className="lg:col-span-4 space-y-4 text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 p-[1px] shadow-lg shadow-blue-500/20">
                <div className="w-full h-full bg-[#070b18] rounded-[11px] flex items-center justify-center">
                  <Terminal className="w-5 h-5 text-cyan-400" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold tracking-wider text-xl text-white font-sans">
                  TECHDEV
                </span>
                <span className="text-xs font-semibold tracking-wider text-slate-400 uppercase -mt-0.5">
                  by {COMPANY_INFO.parentBrand}
                </span>
              </div>
            </div>

            <p className="text-sm font-semibold text-slate-300 italic">
              "{COMPANY_INFO.tagline}"
            </p>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              The technology and software development arm of Techstackgist. We help businesses, organizations and startups use technology to solve real problems, attract customers, and scale operations.
            </p>

            {/* Direct Contact Links */}
            <div className="space-y-1.5 pt-2 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors">{COMPANY_INFO.email}</a>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">{COMPANY_INFO.phone}</a>
              </div>
            </div>
          </div>

          {/* Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3 text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {['Home', 'Services', 'Solutions', 'Work', 'Process', 'About', 'Team', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="hover:text-cyan-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3 text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Services
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                'Business Websites',
                'Web Applications',
                'Mobile Applications',
                'Business Software',
                'AI & Automation',
                'Cybersecurity',
                'UI/UX Design',
                'Data & Analytics'
              ].map((serv) => (
                <li key={serv}>
                  <a 
                    href="#services" 
                    onClick={() => onOpenContact(`Inquiry regarding ${serv}`)} 
                    className="hover:text-cyan-400 transition-colors"
                  >
                    {serv}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries & Social (3 cols) */}
          <div className="lg:col-span-3 space-y-4 text-left">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-2">
                Industry Solutions
              </h4>
              <div className="flex flex-wrap gap-1.5 text-xs">
                {['Hotels', 'Real Estate', 'Automobile', 'Logistics', 'Professional Services', 'Retail', 'Education'].map((ind) => (
                  <a
                    key={ind}
                    href="#solutions"
                    className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 hover:border-cyan-500/40 text-[11px] text-slate-300 hover:text-white transition-colors"
                  >
                    {ind}
                  </a>
                ))}
              </div>
            </div>

            {/* Social Accounts */}
            <div className="pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-2">
                Connect With TechDev
              </h4>
              <div className="flex items-center gap-2">
                <a
                  href={COMPANY_INFO.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={COMPANY_INFO.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={COMPANY_INFO.socials.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
                  aria-label="X / Twitter"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href={COMPANY_INFO.socials.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
                <a
                  href={COMPANY_INFO.getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-emerald-950/50 hover:bg-emerald-950 text-emerald-400 border border-emerald-500/30 transition-colors"
                  aria-label="WhatsApp"
                >
                  <MessageSquare className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal (Centered to avoid overlap with bottom-right floating chat buttons) */}
        <div className="pt-8 flex flex-col items-center justify-center text-center gap-4 text-xs border-t border-slate-850">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-slate-300 font-medium">
            {onOpenRateCard && (
              <>
                <button
                  onClick={onOpenRateCard}
                  className="text-cyan-400 hover:text-cyan-300 font-bold transition-colors py-1 px-2 rounded hover:bg-slate-800/40"
                >
                  Official 2026 Rate Card
                </button>
                <span className="text-slate-700 hidden sm:inline">•</span>
              </>
            )}
            <button
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-cyan-400 transition-colors py-1 px-2 rounded hover:bg-slate-800/40"
            >
              Privacy Policy
            </button>
            <span className="text-slate-700 hidden sm:inline">•</span>
            <button
              onClick={() => onOpenLegal('terms')}
              className="hover:text-cyan-400 transition-colors py-1 px-2 rounded hover:bg-slate-800/40"
            >
              Terms of Service
            </button>
            <span className="text-slate-700 hidden sm:inline">•</span>
            <button
              onClick={() => onOpenLegal('cookies')}
              className="hover:text-cyan-400 transition-colors py-1 px-2 rounded hover:bg-slate-800/40"
            >
              Cookie Policy
            </button>
          </div>

          <div className="text-slate-400 max-w-xl mx-auto">
            © {currentYear} {COMPANY_INFO.fullName}. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
};
