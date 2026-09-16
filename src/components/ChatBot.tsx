import React, { useState, useRef, useEffect } from 'react';
import { 
  Bot, 
  X, 
  Send, 
  MessageSquare, 
  DollarSign, 
  Layers, 
  Phone, 
  Clock, 
  RotateCcw, 
  ChevronDown, 
  Sparkles, 
  ArrowRight, 
  ExternalLink,
  HelpCircle,
  CheckCircle2,
  Minimize2
} from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export interface ChatBotProps {
  onOpenContact?: (message?: string, service?: string) => void;
  onNavigateSection?: (sectionId: string) => void;
}

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
  options?: Array<{ label: string; action: () => void; icon?: React.ReactNode }>;
  badges?: string[];
  cta?: {
    text: string;
    action: () => void;
    icon?: React.ReactNode;
  };
}

interface FAQItem {
  id: string;
  category: 'pricing' | 'services' | 'contact' | 'timeline' | 'process';
  label: string;
  question: string;
  response: string;
  highlights?: string[];
  suggestedAction?: {
    text: string;
    sectionId?: string;
    contactMessage?: string;
    isWhatsApp?: boolean;
  };
}

const PREDEFINED_FAQS: FAQItem[] = [
  {
    id: 'pricing-general',
    category: 'pricing',
    label: '💰 Pricing & Rates',
    question: 'How much do projects typically cost?',
    response: 'Our pricing is structured, transparent, and based on project scope with zero hidden costs. We work on milestone-based billing (40% start / 30% prototype / 30% handover):',
    highlights: [
      '• Business & Corporate Portals: ₦250,000 – ₦550,000 (~$350 – $750)',
      '• Industry Portals (Hotels, Real Estate, E-Commerce): ₦600,000 – ₦1,800,000 (~$800 – $2,400)',
      '• Custom Enterprise Software & Logistics Platforms: ₦2,000,000+ (~$2,600+)',
      '• 100% Free Scoping & Initial Consultation included'
    ],
    suggestedAction: {
      text: 'Request Exact Fixed Quote',
      contactMessage: 'Hello TechDev, I would like to request a fixed pricing quote for my upcoming project.'
    }
  },
  {
    id: 'pricing-payment',
    category: 'pricing',
    label: '💳 Payment Terms',
    question: 'Do you offer installment or milestone billing?',
    response: 'Yes! We believe in low-risk collaborations for business owners. Standard project engagements follow structured milestones:',
    highlights: [
      '• 40% Initial Commitment upon formal scope agreement',
      '• 30% Mid-Phase Review upon functional interactive prototype demonstration',
      '• 30% Final Handover following rigorous testing and client approval'
    ],
    suggestedAction: {
      text: 'Talk on WhatsApp',
      isWhatsApp: true
    }
  },
  {
    id: 'services-overview',
    category: 'services',
    label: '🛠️ Our Core Services',
    question: 'What digital solutions does TechDev build?',
    response: 'TechDev engineers business-focused digital systems across 8 specialized domains:',
    highlights: [
      '1. Custom Web Applications & Enterprise Dashboards',
      '2. Hotel & Hospitality Direct Booking Engines',
      '3. Real Estate Property Listing & Virtual Inspection Portals',
      '4. Logistics, Freight Rate & Consignment Tracking Systems',
      '5. High-Conversion E-Commerce & Inventory Platforms',
      '6. Modern Corporate & Brand Websites',
      '7. Custom API Development & ERP Integrations',
      '8. Cloud Hosting, Security Hardening & Continuous Support'
    ],
    suggestedAction: {
      text: 'Explore Services Section',
      sectionId: 'services'
    }
  },
  {
    id: 'services-mobile',
    category: 'services',
    label: '📱 Mobile Applications',
    question: 'Do you build mobile apps?',
    response: 'Yes! We build high-performance Progressive Web Apps (PWAs) that install directly on iOS and Android with offline caching, push notifications, and ultra-fast loading without app store friction, as well as native mobile application interfaces.',
    highlights: [
      '• Progressive Web Apps (Zero-install download friction)',
      '• Cross-platform responsive mobile interfaces',
      '• Integrated push notifications & offline support'
    ],
    suggestedAction: {
      text: 'Inquire About Mobile App',
      contactMessage: 'Hello TechDev, I would like to inquire about building a mobile app/PWA for my business.'
    }
  },
  {
    id: 'contact-details',
    category: 'contact',
    label: '📞 Contact & Office',
    question: 'How can I reach TechDev directly?',
    response: 'You can connect directly with our engineering and project scoping desk through any of these official channels:',
    highlights: [
      `• Primary Email: ${COMPANY_INFO.email}`,
      `• Direct Phone / WhatsApp: ${COMPANY_INFO.phone}`,
      `• Office: ${COMPANY_INFO.address}`,
      '• Working Hours: Mon – Sat, 8:00 AM – 6:00 PM WAT',
      '• Typical WhatsApp response time: Under 30 minutes'
    ],
    suggestedAction: {
      text: 'Open Contact Form',
      sectionId: 'contact'
    }
  },
  {
    id: 'timelines-delivery',
    category: 'timeline',
    label: '⏱️ Project Timelines',
    question: 'How fast can TechDev deliver a project?',
    response: 'We value speed to market so your business can start generating revenue and inquiries as soon as possible:',
    highlights: [
      '• Interactive Concept Prototype: 5 – 7 business days',
      '• Corporate & Brand Websites: 1 – 2 weeks',
      '• Hotel, Real Estate & E-Commerce Portals: 2 – 4 weeks',
      '• Custom Complex Enterprise Web Applications: 4 – 8 weeks',
      '• Includes 30 days of free post-launch support and warranty'
    ],
    suggestedAction: {
      text: 'Check Our Process',
      sectionId: 'process'
    }
  },
  {
    id: 'free-consultation',
    category: 'process',
    label: '🚀 Free Consultation',
    question: 'How does an engagement with TechDev start?',
    response: 'Starting is simple, clear, and carries no upfront obligation:',
    highlights: [
      '1. Free Scoping Call (30 mins to understand your business goals)',
      '2. Transparent Proposal with fixed timeline and milestone breakdown',
      '3. Interactive Wireframe & Functional Prototype',
      '4. Production Engineering & Bi-weekly progress updates',
      '5. Staff Training, Deployment & Seamless Handover'
    ],
    suggestedAction: {
      text: 'Book Free Scoping Session',
      contactMessage: 'Hello TechDev, I would like to book a free 30-minute scoping session for my business.'
    }
  }
];

export const ChatBot: React.FC<ChatBotProps> = ({ onOpenContact, onNavigateSection }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isMinimized, setIsMinimized] = useState<boolean>(false);
  const [hasUnread, setHasUnread] = useState<boolean>(true);
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [inputText, setInputText] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<'all' | 'pricing' | 'services' | 'contact' | 'timeline'>('all');

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const getInitialMessage = (): Message => ({
    id: 'welcome-1',
    sender: 'bot',
    text: "Hello! 👋 I'm your TechDev Virtual Desk Assistant. How can I assist your business today?",
    timestamp: 'Just now',
    options: [
      {
        label: '💰 Pricing & Rates',
        action: () => handleSelectFAQ('pricing-general'),
        icon: <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
      },
      {
        label: '🛠️ Our Services',
        action: () => handleSelectFAQ('services-overview'),
        icon: <Layers className="w-3.5 h-3.5 text-cyan-400" />
      },
      {
        label: '📞 Contact Channels',
        action: () => handleSelectFAQ('contact-details'),
        icon: <Phone className="w-3.5 h-3.5 text-blue-400" />
      },
      {
        label: '⏱️ Project Timelines',
        action: () => handleSelectFAQ('timelines-delivery'),
        icon: <Clock className="w-3.5 h-3.5 text-amber-400" />
      }
    ]
  });

  const [messages, setMessages] = useState<Message[]>([getInitialMessage()]);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    if (isOpen && !isMinimized) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping, isOpen, isMinimized]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen && !isMinimized) {
      setHasUnread(false);
      setTimeout(() => {
        inputRef.current?.focus();
      }, 300);
    }
  }, [isOpen, isMinimized]);

  const handleToggle = () => {
    if (!isOpen) {
      setIsOpen(true);
      setIsMinimized(false);
      setHasUnread(false);
    } else {
      setIsOpen(false);
    }
  };

  const handleReset = () => {
    setMessages([getInitialMessage()]);
    setInputText('');
  };

  const handleSelectFAQ = (faqId: string) => {
    const faq = PREDEFINED_FAQS.find(f => f.id === faqId);
    if (!faq) return;

    // Add user question
    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: faq.question,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);

      const botMsg: Message = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: faq.response,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        badges: faq.highlights,
        cta: faq.suggestedAction ? {
          text: faq.suggestedAction.text,
          action: () => {
            if (faq.suggestedAction?.isWhatsApp) {
              window.open(COMPANY_INFO.getWhatsAppLink(faq.suggestedAction.contactMessage || 'Hello TechDev, I would like to inquire about project pricing and terms.'), '_blank');
            } else if (faq.suggestedAction?.sectionId) {
              setIsOpen(false);
              if (onNavigateSection) {
                onNavigateSection(faq.suggestedAction.sectionId);
              } else {
                const el = document.getElementById(faq.suggestedAction.sectionId);
                el?.scrollIntoView({ behavior: 'smooth' });
              }
            } else if (faq.suggestedAction?.contactMessage) {
              setIsOpen(false);
              if (onOpenContact) {
                onOpenContact(faq.suggestedAction.contactMessage);
              } else {
                const el = document.getElementById('contact');
                el?.scrollIntoView({ behavior: 'smooth' });
              }
            }
          },
          icon: faq.suggestedAction.isWhatsApp ? <MessageSquare className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />
        } : undefined
      };

      setMessages(prev => [...prev, botMsg]);
    }, 450);
  };

  // Rule-based keyword matching for free-form user text
  const processUserInput = (rawText: string) => {
    const text = rawText.trim().toLowerCase();
    if (!text) return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: rawText.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);

      let matchedFaq: FAQItem | undefined;

      if (text.includes('price') || text.includes('cost') || text.includes('rate') || text.includes('budget') || text.includes('quote') || text.includes('fee') || text.includes('naira') || text.includes('dollar') || text.includes('how much')) {
        matchedFaq = PREDEFINED_FAQS.find(f => f.id === 'pricing-general');
      } else if (text.includes('installment') || text.includes('milestone') || text.includes('deposit') || text.includes('pay')) {
        matchedFaq = PREDEFINED_FAQS.find(f => f.id === 'pricing-payment');
      } else if (text.includes('hotel') || text.includes('hospitality') || text.includes('booking')) {
        matchedFaq = {
          id: 'hotel-service',
          category: 'services',
          label: '🏨 Hotel Booking Systems',
          question: 'Do you build hotel booking platforms?',
          response: 'Yes! We engineer full-stack hotel and hospitality websites with zero commission fees, direct room reservations, instant WhatsApp confirmation, and secure local/international payment integrations.',
          highlights: [
            '• Direct room booking engine with live calendar',
            '• Zero third-party commission fees on your bookings',
            '• Automated guest email and WhatsApp check-in confirmations'
          ],
          suggestedAction: {
            text: 'View Hotel Demo in Portfolio',
            sectionId: 'work'
          }
        };
      } else if (text.includes('real estate') || text.includes('property') || text.includes('house') || text.includes('land')) {
        matchedFaq = {
          id: 'real-estate-service',
          category: 'services',
          label: '🏢 Real Estate Portals',
          question: 'Do you build real estate platforms?',
          response: 'Yes! Our real estate solutions feature categorized property listings, neighborhood insights, instant inspection booking, and automated lead capture.',
          highlights: [
            '• High-res property portfolios with filter search',
            '• WhatsApp direct inspection schedule links',
            '• Interactive lead capture forms'
          ],
          suggestedAction: {
            text: 'View Real Estate Demo',
            sectionId: 'work'
          }
        };
      } else if (text.includes('logistics') || text.includes('freight') || text.includes('tracking') || text.includes('shipping')) {
        matchedFaq = {
          id: 'logistics-service',
          category: 'services',
          label: '🚚 Logistics & Tracking',
          question: 'Do you build logistics and freight systems?',
          response: 'Yes! We create logistics tracking platforms with real-time waypoint progression, instant container/waybill status checks, and instant freight quote calculators.',
          highlights: [
            '• Instant consignment/waybill tracking engine',
            '• Freight quote and volumetric calculator',
            '• Automated dispatch & receipt notifications'
          ],
          suggestedAction: {
            text: 'View Logistics Demo',
            sectionId: 'work'
          }
        };
      } else if (text.includes('service') || text.includes('what do you do') || text.includes('offer') || text.includes('build') || text.includes('software') || text.includes('web')) {
        matchedFaq = PREDEFINED_FAQS.find(f => f.id === 'services-overview');
      } else if (text.includes('mobile') || text.includes('app') || text.includes('ios') || text.includes('android')) {
        matchedFaq = PREDEFINED_FAQS.find(f => f.id === 'services-mobile');
      } else if (text.includes('contact') || text.includes('reach') || text.includes('phone') || text.includes('email') || text.includes('call') || text.includes('address') || text.includes('location') || text.includes('office')) {
        matchedFaq = PREDEFINED_FAQS.find(f => f.id === 'contact-details');
      } else if (text.includes('time') || text.includes('duration') || text.includes('how long') || text.includes('fast') || text.includes('turnaround') || text.includes('deadline')) {
        matchedFaq = PREDEFINED_FAQS.find(f => f.id === 'timelines-delivery');
      } else if (text.includes('process') || text.includes('start') || text.includes('consult') || text.includes('how it works') || text.includes('step')) {
        matchedFaq = PREDEFINED_FAQS.find(f => f.id === 'free-consultation');
      } else if (text.includes('hi') || text.includes('hello') || text.includes('hey') || text.includes('good morning') || text.includes('good afternoon')) {
        matchedFaq = {
          id: 'greeting',
          category: 'contact',
          label: '👋 Greetings',
          question: 'Greetings',
          response: `Hello there! I am your TechDev virtual desk. We design and develop bespoke software, websites, and business applications. Select any quick topic below or type your inquiry!`,
          suggestedAction: {
            text: 'Message on WhatsApp',
            isWhatsApp: true
          }
        };
      }

      if (matchedFaq) {
        const botMsg: Message = {
          id: `bot-${Date.now()}`,
          sender: 'bot',
          text: matchedFaq.response,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          badges: matchedFaq.highlights,
          cta: matchedFaq.suggestedAction ? {
            text: matchedFaq.suggestedAction.text,
            action: () => {
              if (matchedFaq?.suggestedAction?.isWhatsApp) {
                window.open(COMPANY_INFO.getWhatsAppLink(matchedFaq.suggestedAction.contactMessage || `Inquiry regarding: ${rawText}`), '_blank');
              } else if (matchedFaq?.suggestedAction?.sectionId) {
                setIsOpen(false);
                if (onNavigateSection) {
                  onNavigateSection(matchedFaq.suggestedAction.sectionId);
                } else {
                  document.getElementById(matchedFaq.suggestedAction.sectionId)?.scrollIntoView({ behavior: 'smooth' });
                }
              } else if (matchedFaq?.suggestedAction?.contactMessage) {
                setIsOpen(false);
                if (onOpenContact) {
                  onOpenContact(matchedFaq.suggestedAction.contactMessage);
                } else {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }
              }
            },
            icon: matchedFaq.suggestedAction.isWhatsApp ? <MessageSquare className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />
          } : undefined
        };
        setMessages(prev => [...prev, botMsg]);
      } else {
        // Fallback with quick choices
        const botFallback: Message = {
          id: `bot-${Date.now()}`,
          sender: 'bot',
          text: `Thank you for asking! While I am a fast pre-defined desk assistant, I want to make sure you get the exact information you need. Choose one of our popular quick topics or reach our technical lead directly:`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          options: [
            {
              label: '💰 View Pricing & Rates',
              action: () => handleSelectFAQ('pricing-general'),
              icon: <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
            },
            {
              label: '🛠️ Explore Services',
              action: () => handleSelectFAQ('services-overview'),
              icon: <Layers className="w-3.5 h-3.5 text-cyan-400" />
            },
            {
              label: '📞 Contact Channels',
              action: () => handleSelectFAQ('contact-details'),
              icon: <Phone className="w-3.5 h-3.5 text-blue-400" />
            },
            {
              label: '💬 Chat on WhatsApp Now',
              action: () => window.open(COMPANY_INFO.getWhatsAppLink(`Hello TechDev, I have an inquiry: "${rawText}"`), '_blank'),
              icon: <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
            }
          ]
        };
        setMessages(prev => [...prev, botFallback]);
      }
    }, 400);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    processUserInput(inputText);
  };

  const filteredFaqs = activeCategory === 'all' 
    ? PREDEFINED_FAQS 
    : PREDEFINED_FAQS.filter(f => f.category === activeCategory);

  return (
    <div id="techdev-chatbot" className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Floating Chat Drawer Container */}
      {isOpen && (
        <div 
          className={`mb-3 w-[360px] sm:w-[410px] max-w-[calc(100vw-32px)] bg-[#090d20] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col transition-all duration-300 ${
            isMinimized ? 'h-14' : 'h-[560px] max-h-[calc(100vh-100px)]'
          }`}
          style={{
            boxShadow: '0 20px 45px -10px rgba(0, 0, 0, 0.7), 0 0 30px 2px rgba(37, 99, 235, 0.15)'
          }}
        >
          {/* Header Bar */}
          <div className="px-4 py-3 bg-[#0c122c] border-b border-slate-800 flex items-center justify-between select-none">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="w-8 h-8 rounded-xl bg-blue-600/30 border border-blue-500/50 flex items-center justify-center text-blue-400">
                  <Bot className="w-4 h-4" />
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-[#0c122c]"></span>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-bold text-white tracking-wide">TechDev Desk</span>
                  <span className="text-[10px] px-1.5 py-0.2 rounded bg-blue-950/80 border border-blue-500/30 text-blue-300 font-mono">
                    Instant
                  </span>
                </div>
                <p className="text-[10px] text-slate-400">Pre-defined Quick Answers</p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleReset}
                title="Restart chat"
                className="p-1.5 text-slate-400 hover:text-slate-200 rounded-lg hover:bg-slate-800/60 transition-colors"
                aria-label="Restart chat"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                title={isMinimized ? "Expand" : "Minimize"}
                className="p-1.5 text-slate-400 hover:text-slate-200 rounded-lg hover:bg-slate-800/60 transition-colors"
                aria-label="Minimize or Expand"
              >
                {isMinimized ? <ChevronDown className="w-3.5 h-3.5 rotate-180" /> : <Minimize2 className="w-3.5 h-3.5" />}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                title="Close chat"
                className="p-1.5 text-slate-400 hover:text-rose-400 rounded-lg hover:bg-slate-800/60 transition-colors"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Drawer Body (Visible when not minimized) */}
          {!isMinimized && (
            <>
              {/* Category Quick Tabs */}
              <div className="px-3 py-2 bg-[#080b1b] border-b border-slate-800/80 flex items-center gap-1.5 overflow-x-auto scrollbar-none text-[11px]">
                <button
                  onClick={() => setActiveCategory('all')}
                  className={`px-2.5 py-1 rounded-full whitespace-nowrap transition-colors ${
                    activeCategory === 'all' 
                      ? 'bg-blue-600 text-white font-medium shadow-sm' 
                      : 'bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                  }`}
                >
                  All Topics
                </button>
                <button
                  onClick={() => setActiveCategory('pricing')}
                  className={`px-2.5 py-1 rounded-full whitespace-nowrap transition-colors ${
                    activeCategory === 'pricing' 
                      ? 'bg-blue-600 text-white font-medium shadow-sm' 
                      : 'bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                  }`}
                >
                  Pricing
                </button>
                <button
                  onClick={() => setActiveCategory('services')}
                  className={`px-2.5 py-1 rounded-full whitespace-nowrap transition-colors ${
                    activeCategory === 'services' 
                      ? 'bg-blue-600 text-white font-medium shadow-sm' 
                      : 'bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                  }`}
                >
                  Services
                </button>
                <button
                  onClick={() => setActiveCategory('timeline')}
                  className={`px-2.5 py-1 rounded-full whitespace-nowrap transition-colors ${
                    activeCategory === 'timeline' 
                      ? 'bg-blue-600 text-white font-medium shadow-sm' 
                      : 'bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                  }`}
                >
                  Timeline
                </button>
                <button
                  onClick={() => setActiveCategory('contact')}
                  className={`px-2.5 py-1 rounded-full whitespace-nowrap transition-colors ${
                    activeCategory === 'contact' 
                      ? 'bg-blue-600 text-white font-medium shadow-sm' 
                      : 'bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                  }`}
                >
                  Contact
                </button>
              </div>

              {/* Messages Stream */}
              <div className="flex-1 p-3.5 overflow-y-auto space-y-3.5 text-xs">
                {messages.map((msg) => (
                  <div 
                    key={msg.id} 
                    className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                  >
                    <div 
                      className={`max-w-[88%] rounded-2xl p-3 leading-relaxed ${
                        msg.sender === 'user'
                          ? 'bg-blue-600 text-white rounded-tr-none'
                          : 'bg-[#111836] border border-slate-700/80 text-slate-200 rounded-tl-none shadow-md'
                      }`}
                    >
                      <p className="whitespace-pre-line text-[12px]">{msg.text}</p>

                      {/* Highlighted Bullets/Badges */}
                      {msg.badges && msg.badges.length > 0 && (
                        <div className="mt-2.5 pt-2 border-t border-slate-700/60 space-y-1 text-[11px] text-slate-300">
                          {msg.badges.map((b, idx) => (
                            <div key={idx} className="font-mono text-slate-300">
                              {b}
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Call-To-Action Button inside message */}
                      {msg.cta && (
                        <div className="mt-3 pt-2 border-t border-slate-700/60">
                          <button
                            onClick={msg.cta.action}
                            className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-[11px] transition-all active:scale-[0.98] shadow-sm shadow-blue-600/30"
                          >
                            <span>{msg.cta.text}</span>
                            {msg.cta.icon}
                          </button>
                        </div>
                      )}

                      {/* Interactive Option Chips inside message */}
                      {msg.options && msg.options.length > 0 && (
                        <div className="mt-3 pt-2.5 border-t border-slate-700/60 flex flex-col gap-1.5">
                          <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
                            Quick Inquiries:
                          </span>
                          {msg.options.map((opt, idx) => (
                            <button
                              key={idx}
                              onClick={opt.action}
                              className="w-full flex items-center justify-between p-2 rounded-lg bg-slate-900/90 hover:bg-blue-900/30 border border-slate-700/60 hover:border-blue-500/40 text-[11px] text-slate-200 hover:text-white transition-all text-left group"
                            >
                              <div className="flex items-center gap-2">
                                {opt.icon}
                                <span>{opt.label}</span>
                              </div>
                              <ArrowRight className="w-3 h-3 text-slate-400 group-hover:text-blue-400 transition-transform group-hover:translate-x-0.5" />
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    <span className="text-[9px] text-slate-400 mt-1 px-1">
                      {msg.sender === 'user' ? 'You' : 'TechDev Desk'} • {msg.timestamp}
                    </span>
                  </div>
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                  <div className="flex items-center gap-1.5 p-2.5 rounded-2xl rounded-tl-none bg-[#111836] border border-slate-700/80 w-20 text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: '0ms' }}></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: '150ms' }}></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: '300ms' }}></span>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Pre-defined Topic Pill Carousel */}
              <div className="px-3 py-2 bg-[#0a0f26] border-t border-slate-800">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] text-slate-400 uppercase font-semibold tracking-wider flex items-center gap-1">
                    <HelpCircle className="w-3 h-3 text-cyan-400" />
                    Frequent Questions
                  </span>
                  <span className="text-[10px] text-slate-400">Tap to answer</span>
                </div>
                <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none pb-1">
                  {filteredFaqs.slice(0, 5).map((faq) => (
                    <button
                      key={faq.id}
                      onClick={() => handleSelectFAQ(faq.id)}
                      className="px-2.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white text-[11px] whitespace-nowrap transition-colors shrink-0"
                    >
                      {faq.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Input Form with Rule-based Matching */}
              <form 
                onSubmit={handleFormSubmit}
                className="p-2.5 bg-[#090d20] border-t border-slate-800 flex items-center gap-2"
              >
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Ask about pricing, services, or contact..."
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  className="flex-1 px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 focus:border-blue-500 focus:outline-none text-white text-xs placeholder:text-slate-400"
                />
                <button
                  type="submit"
                  disabled={!inputText.trim() || isTyping}
                  className="p-2 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-40 text-white transition-all active:scale-95 shrink-0"
                  aria-label="Send query"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>

              {/* Direct Channels Quick Links Footer */}
              <div className="px-3 py-1.5 bg-[#060917] border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-400">
                <a 
                  href={`mailto:${COMPANY_INFO.email}`} 
                  className="hover:text-cyan-400 flex items-center gap-1 transition-colors"
                >
                  <span>Email: {COMPANY_INFO.email}</span>
                </a>
                <a 
                  href={COMPANY_INFO.getWhatsAppLink()} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-emerald-400 flex items-center gap-1 text-emerald-400 font-medium transition-colors"
                >
                  <MessageSquare className="w-3 h-3" />
                  <span>WhatsApp Desk</span>
                </a>
              </div>
            </>
          )}
        </div>
      )}

      {/* Floating Launcher Button */}
      <div className="flex items-center gap-2">
        <button
          onClick={handleToggle}
          aria-label="Toggle TechDev ChatBot"
          aria-expanded={isOpen}
          className={`relative flex items-center gap-2 px-4 py-3 rounded-full text-white font-bold text-xs sm:text-sm shadow-xl transition-all active:scale-95 group border ${
            isOpen 
              ? 'bg-slate-800 hover:bg-slate-700 border-slate-600 text-slate-200' 
              : 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 border-cyan-400/30 shadow-blue-600/30'
          }`}
        >
          {isOpen ? (
            <>
              <X className="w-4 h-4 text-slate-300 group-hover:text-white" />
              <span>Close Assistant</span>
            </>
          ) : (
            <>
              <div className="relative">
                <Bot className="w-5 h-5 group-hover:scale-110 transition-transform text-white" />
                {hasUnread && (
                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-blue-600 animate-ping"></span>
                )}
              </div>
              <span className="font-semibold tracking-wide">Quick Answers</span>
              <span className="hidden sm:inline text-[10px] font-normal opacity-80 border-l border-white/20 pl-2">
                FAQ & Pricing
              </span>
            </>
          )}

          {/* Unread Badge indicator */}
          {!isOpen && hasUnread && (
            <span className="absolute -top-1.5 -right-1.5 px-1.5 py-0.5 rounded-full bg-emerald-500 text-[9px] font-bold text-black font-mono shadow-md">
              NEW
            </span>
          )}
        </button>
      </div>

    </div>
  );
};
