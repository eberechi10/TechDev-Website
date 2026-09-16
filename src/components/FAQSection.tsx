import React, { useState } from 'react';
import { FAQS } from '../data/faq';
import { FAQItem } from '../types';
import { ChevronDown, Search, HelpCircle, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export const FAQSection: React.FC = () => {
  const [openIds, setOpenIds] = useState<string[]>(['faq-1', 'faq-7']);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const toggleFAQ = (id: string) => {
    setOpenIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const filteredFAQs = FAQS.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  return (
    <section className="py-24 bg-[#070c1a] border-b border-slate-800/80 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-semibold tracking-wider uppercase">
            <span>Direct Answers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Straightforward answers to the questions business owners ask us most frequently.
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="space-y-3 mb-8">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search questions (e.g., cost, timeline, WhatsApp, software)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-cyan-500 focus:outline-none text-white text-sm placeholder:text-slate-500"
            />
          </div>

          <div className="flex items-center gap-2 flex-wrap text-xs">
            {[
              { id: 'all', label: 'All Questions' },
              { id: 'general', label: 'General & Scope' },
              { id: 'pricing', label: 'Pricing & Timelines' },
              { id: 'technical', label: 'Technical & Integrations' },
              { id: 'support', label: 'Maintenance & Support' }
            ].map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFAQs.length === 0 ? (
            <div className="p-8 text-center text-slate-400 rounded-xl bg-slate-900/60 border border-slate-800">
              No matching questions found. Feel free to ask us directly on WhatsApp!
            </div>
          ) : (
            filteredFAQs.map((faq) => {
              const isOpen = openIds.includes(faq.id);
              return (
                <div
                  key={faq.id}
                  id={faq.id}
                  className="rounded-xl bg-slate-900/60 border border-slate-800/90 hover:border-slate-700 transition-colors overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-semibold text-white hover:text-cyan-300 transition-colors"
                  >
                    <span className="text-sm sm:text-base leading-snug">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-cyan-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-cyan-300' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Bottom Direct Inquiry Box */}
        <div className="mt-12 p-6 rounded-2xl bg-[#090e22] border border-blue-500/25 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-base font-bold text-white">Have a question not listed here?</h4>
            <p className="text-xs text-slate-300 mt-0.5">We reply quickly and help you evaluate what technology fits your needs.</p>
          </div>
          <a
            href={COMPANY_INFO.getWhatsAppLink("Hello TechDev, I have a question regarding a project.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow shrink-0"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Ask on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
