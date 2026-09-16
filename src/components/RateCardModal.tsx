import React, { useState } from 'react';
import { 
  X, 
  Download, 
  FileText, 
  CheckCircle2, 
  Printer, 
  Copy, 
  Check, 
  ExternalLink,
  ShieldCheck,
  Building2,
  Calendar,
  Layers,
  DollarSign
} from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

interface RateCardModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: (message?: string) => void;
}

export const RateCardModal: React.FC<RateCardModalProps> = ({ 
  isOpen, 
  onClose,
  onOpenContact 
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const tiers = [
    {
      category: "Corporate & Professional Websites",
      priceRange: "₦250,000 – ₦550,000",
      intlRange: "$350 – $750 USD",
      timeline: "1 – 2 Weeks",
      deliverables: [
        "Modern, high-conversion responsive design",
        "Direct WhatsApp lead routing & inquiries",
        "Search engine optimization (Google SEO)",
        "Fast hosting configuration & custom domain",
        "Interactive services catalogue & quote forms"
      ]
    },
    {
      category: "Specialized Industry Portals",
      subtitle: "Hotels, Real Estate, E-Commerce, Logistics",
      priceRange: "₦600,000 – ₦1,800,000",
      intlRange: "$800 – $2,400 USD",
      timeline: "2 – 4 Weeks",
      popular: true,
      deliverables: [
        "Direct reservation / property inspection booking engines",
        "Zero OTA commission fees (keep 100% of room/unit revenue)",
        "Real-time waypoint consignment/waybill tracking",
        "Payment integration (Paystack / Flutterwave / Stripe)",
        "Comprehensive admin dashboard for internal staff"
      ]
    },
    {
      category: "Custom Enterprise & Web Apps",
      subtitle: "Internal ERPs, Multi-Branch Portals, APIs",
      priceRange: "₦2,000,000+",
      intlRange: "$2,600+ USD",
      timeline: "4 – 8 Weeks",
      deliverables: [
        "Custom database architecture (PostgreSQL / Redis / Node)",
        "Role-Based Access Control (RBAC) for managers and staff",
        "Automated reporting, SMS & email dispatch systems",
        "Progressive Web App (PWA) with offline support",
        "Dedicated staging server & penetration testing audit"
      ]
    }
  ];

  const handleCopySummary = () => {
    const text = `TechDev (Ebetech Digital Solutions) - Official 2026 Rate Card Summary
- Corporate Websites: ₦250,000 – ₦550,000 (1-2 Weeks)
- Specialized Portals (Hotels, Real Estate, Logistics): ₦600,000 – ₦1,800,000 (2-4 Weeks)
- Enterprise Software & Web Apps: ₦2,000,000+ (4-8 Weeks)
Payment Terms: 40% Kick-off / 30% Functional Prototype / 30% Handover
Warranty: 30-Day Post-Launch Bug Guarantee + Full IP Ownership
Email: ${COMPANY_INFO.email} | WhatsApp: ${COMPANY_INFO.phone}`;
    
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="bg-[#080d1e] border border-slate-700/90 rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl relative text-left my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-start justify-between pb-5 border-b border-slate-800 shrink-0">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-blue-900/60 border border-blue-500/40 text-cyan-400 text-[11px] font-mono font-bold uppercase">
                OFFICIAL 2026 RATE CARD
              </span>
              <span className="text-[11px] text-emerald-400 font-mono flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" /> Verified
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              {COMPANY_INFO.fullName}
            </h3>
            <p className="text-xs text-slate-400">
              Commercial Service Pricing, Milestone Schedule & Scope Guidelines
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body Content */}
        <div className="flex-1 overflow-y-auto py-5 space-y-6 pr-1 sm:pr-2 text-xs text-slate-300">
          
          {/* Milestone Billing Notice */}
          <div className="p-4 rounded-2xl bg-blue-950/40 border border-blue-500/30 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="space-y-0.5 text-center sm:text-left">
              <span className="text-[11px] font-bold text-cyan-300 uppercase tracking-wider">
                Low-Risk Milestone Structure
              </span>
              <p className="text-xs text-slate-300">
                40% Initial Commitment • 30% Interactive Prototype Demonstration • 30% Final Sign-off
              </p>
            </div>
            <span className="px-2.5 py-1 rounded-lg bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-[11px] font-bold shrink-0">
              Zero 100% Upfront Requirement
            </span>
          </div>

          {/* Pricing Tiers */}
          <div className="space-y-4">
            {tiers.map((tier, idx) => (
              <div 
                key={idx}
                className={`p-5 rounded-2xl border transition-all ${
                  tier.popular 
                    ? 'bg-[#0c132c] border-cyan-500/50 shadow-lg shadow-cyan-500/10 relative' 
                    : 'bg-[#0a0f24] border-slate-800'
                }`}
              >
                {tier.popular && (
                  <span className="absolute -top-2.5 right-6 px-2.5 py-0.5 rounded-full bg-cyan-500 text-black text-[10px] font-extrabold uppercase tracking-wider shadow">
                    Most Popular with Businesses
                  </span>
                )}

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-800/80">
                  <div>
                    <h4 className="text-base font-bold text-white">
                      {tier.category}
                    </h4>
                    {tier.subtitle && (
                      <p className="text-[11px] text-cyan-400 font-mono mt-0.5">
                        {tier.subtitle}
                      </p>
                    )}
                  </div>
                  <div className="text-left sm:text-right">
                    <div className="text-lg font-black text-white">
                      {tier.priceRange}
                    </div>
                    <div className="text-[10px] font-mono text-slate-400">
                      {tier.intlRange} • {tier.timeline}
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                    Scope Highlights:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                    {tier.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-1.5 text-[11px] text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Included Guarantees Checklist */}
          <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2">
            <span className="text-xs font-bold text-white uppercase tracking-wider block">
              Included Standard on All TechDev Client Projects:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-slate-300">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>30 Days Free Post-Launch Technical Support</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Complete IP & Source Code Transfer</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>High-Speed Mobile Responsive Optimization</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Admin Staff Onboarding & Video Walkthrough</span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopySummary}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-300 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? "Copied Rate Card!" : "Copy Summary"}</span>
            </button>
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-300 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => {
                onClose();
                onOpenContact("Hello TechDev, I have reviewed your official 2026 Rate Card and would like to request an exact quote for my project.");
              }}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all shadow-md shadow-blue-600/30"
            >
              Request Custom Quote
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
