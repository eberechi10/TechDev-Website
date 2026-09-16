import React, { useState, useEffect } from 'react';
import { COMPANY_INFO } from '../data/company';
import { Menu, X, ArrowUpRight, MessageSquare, Shield, Terminal, Download } from 'lucide-react';

interface NavbarProps {
  onOpenContact: (customMessage?: string) => void;
  onOpenRateCard?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact, onOpenRateCard }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'services', 'solutions', 'work', 'process', 'about', 'team', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Work', href: '#work' },
    { name: 'Process', href: '#process' },
    { name: 'About', href: '#about' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050811]/95 backdrop-blur-md border-b border-white/10 shadow-2xl shadow-black/50 py-3'
          : 'bg-[#050811]/60 backdrop-blur-sm border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand */}
          <a
            href="#home"
            id="nav-brand-logo"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 p-[1px] shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/30 transition-all">
              <div className="w-full h-full bg-[#070b18] rounded-[11px] flex items-center justify-center">
                <Terminal className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold tracking-wider text-lg text-white font-sans flex items-center gap-1.5">
                TECHDEV
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
              </span>
              <span className="text-[11px] font-medium tracking-wider text-slate-400 uppercase -mt-1">
                by {COMPANY_INFO.parentBrand}
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.name.toLowerCase();
              return (
                <a
                  key={link.name}
                  href={link.href}
                  id={`nav-link-${link.name.toLowerCase()}`}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? 'text-cyan-400 bg-cyan-950/40 border border-cyan-500/20'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-3">
            {onOpenRateCard && (
              <button
                onClick={onOpenRateCard}
                id="nav-rate-card-button"
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 rounded-lg transition-all"
                title="View 2026 Commercial Pricing & Rate Card"
              >
                <Download className="w-3.5 h-3.5 text-cyan-400" />
                <span>Rate Card</span>
              </button>
            )}

            <a
              href={COMPANY_INFO.getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              id="nav-whatsapp-quick"
              className="flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-emerald-400 bg-emerald-950/30 hover:bg-emerald-950/60 border border-emerald-500/25 rounded-lg transition-all"
              title="Quick WhatsApp Chat"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={() => onOpenContact()}
              id="nav-cta-start-project"
              className="relative inline-flex items-center justify-center px-4 py-2 text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40 transition-all active:scale-[0.98] border border-blue-400/30 group"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-4 h-4 ml-1.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={COMPANY_INFO.getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="p-2 text-emerald-400 bg-emerald-950/30 border border-emerald-500/20 rounded-lg"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle"
              aria-label="Toggle Navigation Menu"
              className="p-2 rounded-lg text-slate-300 hover:text-white bg-white/5 border border-white/10"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer-menu"
          className="lg:hidden bg-[#070c1a] border-b border-white/10 px-4 pt-3 pb-6 space-y-2 max-h-[85vh] overflow-y-auto shadow-2xl"
        >
          <div className="py-2 border-b border-white/5 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Technology That Moves Your Business Forward
            </span>
          </div>

          <div className="grid grid-cols-2 gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:text-cyan-400 hover:bg-white/5 transition-colors border border-transparent hover:border-white/10"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-4 mt-2 border-t border-white/10 space-y-2.5">
            {onOpenRateCard && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenRateCard();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-slate-900 border border-slate-700/80 text-cyan-300 font-semibold text-sm"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>View Official 2026 Rate Card</span>
              </button>
            )}

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              id="mobile-cta-start-project"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-600/30"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <a
              href={COMPANY_INFO.getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 font-semibold text-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat Directly on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
