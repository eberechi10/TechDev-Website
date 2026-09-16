import React, { useState } from 'react';
import { MessageSquare, X, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export const WhatsAppFloatingButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const quickMessages = [
    { label: "General Project Inquiry", msg: "Hello TechDev, I would like to discuss a website or software project for my business." },
    { label: "Hotel / Hospitality Website", msg: "Hello TechDev, I saw your hotel website demo and I'd like something similar for my hotel." },
    { label: "Real Estate Portal", msg: "Hello TechDev, I need a property listing and inspection platform for my real estate firm." },
    { label: "Car Dealer Showroom", msg: "Hello TechDev, I want an online vehicle inventory showroom for my car dealership." },
    { label: "Logistics Freight Portal", msg: "Hello TechDev, I want a freight rate and tracking portal for my logistics company." }
  ];

  return (
    <div className="fixed bottom-6 left-6 z-40 flex flex-col items-start">
      
      {/* Quick Selection Popup Menu */}
      {isOpen && (
        <div className="mb-3 w-72 sm:w-80 rounded-2xl bg-[#090e22] border border-slate-700 p-4 shadow-2xl space-y-3 animate-fadeIn text-left">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-xs font-bold text-white">Direct WhatsApp Desk</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-slate-400 hover:text-white rounded"
              aria-label="Close"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          <p className="text-[11px] text-slate-300">
            Connect directly with our technology lead for fast scoping and pricing:
          </p>

          <div className="space-y-1.5">
            {quickMessages.map((item, idx) => (
              <a
                key={idx}
                href={COMPANY_INFO.getWhatsAppLink(item.msg)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2 rounded-lg bg-slate-900/90 hover:bg-emerald-950/60 border border-slate-800 hover:border-emerald-500/40 text-[11px] font-medium text-slate-200 hover:text-emerald-300 transition-all group"
              >
                <span className="truncate">{item.label}</span>
                <ArrowRight className="w-3 h-3 text-slate-400 group-hover:text-emerald-400 shrink-0 ml-2" />
              </a>
            ))}
          </div>

          <div className="pt-2 text-[10px] text-slate-400 text-center font-mono">
            Direct Line: {COMPANY_INFO.phone}
          </div>
        </div>
      )}

      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Chat with TechDev on WhatsApp"
        className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-xl shadow-emerald-600/30 transition-all active:scale-95 group border border-emerald-400/30"
      >
        <MessageSquare className="w-5 h-5 group-hover:scale-110 transition-transform" />
        <span className="hidden sm:inline">Chat on WhatsApp</span>
      </button>
    </div>
  );
};
