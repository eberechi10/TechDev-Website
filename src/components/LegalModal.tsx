import React from 'react';
import { X, ShieldCheck, FileText, Cookie } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export type LegalType = 'privacy' | 'terms' | 'cookies' | null;

interface LegalModalProps {
  type: LegalType;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm overflow-y-auto animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="bg-[#080d1e] border border-slate-700 rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative text-left my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg bg-slate-800 border border-slate-700"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {type === 'privacy' && (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-cyan-400">
              <ShieldCheck className="w-6 h-6" />
              <h3 className="text-xl font-bold text-white">Privacy Policy</h3>
            </div>
            <span className="text-xs text-slate-400 block">Last updated: September 2026</span>

            <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
              <p>
                At <strong>{COMPANY_INFO.fullName}</strong>, we respect your commercial privacy. This policy outlines how we handle information submitted when you request technical proposals or communicate with our engineering desk.
              </p>
              <h4 className="text-white font-bold text-sm">1. Information We Collect</h4>
              <p>
                We collect your contact details (full name, email, phone / WhatsApp number, company name) and project specifications solely to evaluate technical feasibility, prepare estimates, and provide software services.
              </p>
              <h4 className="text-white font-bold text-sm">2. Confidentiality of Business Logic</h4>
              <p>
                Any proprietary business processes, inventory figures, product catalogues, or commercial plans shared during scoping sessions are treated with strict confidentiality. We never sell, rent, or disclose your proprietary data to third-party marketing brokers.
              </p>
              <h4 className="text-white font-bold text-sm">3. Security Standards</h4>
              <p>
                We implement industry-standard encryption protocols (TLS/HTTPS), hardened cloud access controls, and restricted credential handling to prevent unauthorized access to your project briefings.
              </p>
              <h4 className="text-white font-bold text-sm">4. Contact</h4>
              <p>
                For privacy inquiries or data removal requests, contact our technology desk at <a href={`mailto:${COMPANY_INFO.email}`} className="text-cyan-400 underline">{COMPANY_INFO.email}</a>.
              </p>
            </div>
          </div>
        )}

        {type === 'terms' && (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-blue-400">
              <FileText className="w-6 h-6" />
              <h3 className="text-xl font-bold text-white">Terms of Service</h3>
            </div>
            <span className="text-xs text-slate-400 block">Last updated: September 2026</span>

            <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
              <p>
                Welcome to <strong>{COMPANY_INFO.fullName}</strong>. By accessing our platform, viewing concept demonstrations, or requesting engineering proposals, you agree to these operating terms.
              </p>
              <h4 className="text-white font-bold text-sm">1. Scope of Concept Demonstrations</h4>
              <p>
                The interactive prototypes displayed on our website (including hospitality, real estate, automobile, logistics, and retail mockups) are proprietary concept demonstrations engineered by TechDev to illustrate technical capabilities. They represent simulated business environments.
              </p>
              <h4 className="text-white font-bold text-sm">2. Professional Service Engagements</h4>
              <p>
                All commissioned client projects are governed by individual written Service Level Agreements (SLAs) and Statements of Work (SOWs) specifying exact milestones, payment schedules, intellectual property transfer, and warranty periods.
              </p>
              <h4 className="text-white font-bold text-sm">3. Intellectual Property</h4>
              <p>
                Upon receipt of full payment for custom bespoke developments, full ownership of client-specific application code, assets, and databases is transferred to the client.
              </p>
            </div>
          </div>
        )}

        {type === 'cookies' && (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-amber-400">
              <Cookie className="w-6 h-6" />
              <h3 className="text-xl font-bold text-white">Cookie Policy</h3>
            </div>
            <span className="text-xs text-slate-400 block">Last updated: September 2026</span>

            <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
              <p>
                This website uses essential browser storage to remember interface preferences (such as demo sandbox filter states) and aggregated anonymous performance indicators.
              </p>
              <h4 className="text-white font-bold text-sm">1. Essential Operations</h4>
              <p>
                We do not track you across third-party ad networks or deploy predatory tracking beacons. Our cookies are minimal and strictly utilized to ensure fast page loads, secure session handling, and responsive navigation.
              </p>
              <h4 className="text-white font-bold text-sm">2. Managing Preferences</h4>
              <p>
                You can clear or block cookies via your browser settings at any time without impacting your ability to browse our services or contact our team.
              </p>
            </div>
          </div>
        )}

        <div className="pt-4 border-t border-slate-800 text-right">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold"
          >
            Close Document
          </button>
        </div>

      </div>
    </div>
  );
};
