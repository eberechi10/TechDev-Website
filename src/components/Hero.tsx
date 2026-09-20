import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  Layers, 
  Smartphone, 
  BarChart3, 
  Zap, 
  ShieldCheck, 
  CheckCircle2, 
  TrendingUp, 
  Calendar, 
  MessageSquare,
  Globe,
  Sliders,
  DollarSign,
  Users
} from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

interface HeroProps {
  onOpenContact: (customMessage?: string) => void;
  onViewWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact, onViewWork }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'studio' | 'website' | 'dashboard' | 'mobile' | 'automation'>('overview');

  const trustBadges = [
    "BUSINESS WEBSITES",
    "CUSTOM SOFTWARE",
    "AI & AUTOMATION",
    "CYBERSECURITY",
    "DATA & ANALYTICS"
  ];

  return (
    <section id="home" className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      {/* Background Subtle Grid & Ambient Tones (No AI slop gradients) */}
      <div className="absolute inset-0 -z-10 pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Strategic Positioning */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Small Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-950/60 border border-blue-500/30 text-cyan-400 text-xs font-semibold tracking-wider uppercase shadow-inner">
              <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
              <span>TECHDEV BY TECHSTACKGIST</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Technology That Moves Your Business Forward.
            </h1>

            {/* Alternative Supporting Headline */}
            <h2 className="text-lg sm:text-xl font-medium text-slate-300 leading-snug">
              Digital products, websites and software built around the way your business actually works.
            </h2>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-xl">
              We design and build practical digital solutions that help businesses attract customers, simplify operations and create better experiences.
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                onClick={() => onOpenContact()}
                id="hero-cta-start-project"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-base shadow-xl shadow-blue-600/25 hover:shadow-blue-500/35 transition-all border border-blue-400/30 active:scale-[0.98]"
              >
                <span>START A PROJECT</span>
                <ArrowUpRight className="w-5 h-5" />
              </button>

              <button
                onClick={onViewWork}
                id="hero-cta-view-work"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-base border border-slate-700/70 hover:border-slate-600 transition-all active:scale-[0.98]"
              >
                <span>VIEW OUR WORK</span>
              </button>
            </div>

            {/* Hero Trust Points */}
            <div className="pt-4 border-t border-slate-800/80">
              <span className="block text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-2.5">
                Core Capabilities
              </span>
              <div className="flex flex-wrap gap-2">
                {trustBadges.map((badge) => (
                  <span
                    key={badge}
                    className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-semibold text-slate-300 bg-slate-900/80 border border-slate-800 tracking-wide"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Real Interactive TechDev Product Ecosystem Visual */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto max-w-lg lg:max-w-none rounded-2xl bg-gradient-to-b from-slate-800/60 to-slate-950/80 p-1 border border-slate-700/60 shadow-2xl shadow-black/80">
              {/* Device Mockup Shell */}
              <div className="rounded-[14px] bg-[#070b16] overflow-hidden border border-white/5">
                
                {/* Visual Window Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#0a0f20] border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                    <span className="text-xs text-slate-400 font-mono ml-2">techdev-ecosystem.system</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-medium text-emerald-400 bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-500/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                    <span>ALL SYSTEMS LIVE</span>
                  </div>
                </div>

                {/* Ecosystem Mode Switcher Tabs */}
                <div className="flex items-center gap-1 p-2 bg-[#090e1c] border-b border-slate-800/80 overflow-x-auto text-xs">
                  <button
                    onClick={() => setActiveTab('overview')}
                    className={`px-3 py-1.5 rounded-md font-medium transition-all flex items-center gap-1.5 whitespace-nowrap ${
                      activeTab === 'overview'
                        ? 'bg-blue-600 text-white shadow'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                    }`}
                  >
                    <Layers className="w-3.5 h-3.5" />
                    <span>Ecosystem</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('studio')}
                    className={`px-3 py-1.5 rounded-md font-medium transition-all flex items-center gap-1.5 whitespace-nowrap ${
                      activeTab === 'studio'
                        ? 'bg-blue-600 text-white shadow'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                    }`}
                  >
                    <Users className="w-3.5 h-3.5" />
                    <span>Our Studio</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('website')}
                    className={`px-3 py-1.5 rounded-md font-medium transition-all flex items-center gap-1.5 whitespace-nowrap ${
                      activeTab === 'website'
                        ? 'bg-blue-600 text-white shadow'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                    }`}
                  >
                    <Globe className="w-3.5 h-3.5" />
                    <span>Business Web</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('dashboard')}
                    className={`px-3 py-1.5 rounded-md font-medium transition-all flex items-center gap-1.5 whitespace-nowrap ${
                      activeTab === 'dashboard'
                        ? 'bg-blue-600 text-white shadow'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                    }`}
                  >
                    <BarChart3 className="w-3.5 h-3.5" />
                    <span>Analytics</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('mobile')}
                    className={`px-3 py-1.5 rounded-md font-medium transition-all flex items-center gap-1.5 whitespace-nowrap ${
                      activeTab === 'mobile'
                        ? 'bg-blue-600 text-white shadow'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                    }`}
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                    <span>Mobile App</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('automation')}
                    className={`px-3 py-1.5 rounded-md font-medium transition-all flex items-center gap-1.5 whitespace-nowrap ${
                      activeTab === 'automation'
                        ? 'bg-blue-600 text-white shadow'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                    }`}
                  >
                    <Zap className="w-3.5 h-3.5" />
                    <span>Automation</span>
                  </button>
                </div>

                {/* Tab Display Area */}
                <div className="p-4 sm:p-6 min-h-[340px] flex flex-col justify-between">
                  
                  {activeTab === 'overview' && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                        <div>
                          <div className="text-xs font-semibold uppercase text-cyan-400">Integrated Digital Stack</div>
                          <div className="text-base font-bold text-white">How TechDev Powers Client Operations</div>
                        </div>
                        <span className="text-xs text-slate-400">Sync: Real-time</span>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        {/* Box 1 */}
                        <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-colors">
                          <div className="flex items-center gap-2 text-cyan-400 mb-1.5">
                            <Globe className="w-4 h-4" />
                            <span className="text-xs font-bold text-white">Fast Web Frontends</span>
                          </div>
                          <p className="text-[11px] text-slate-400 leading-normal">
                            High-converting landing pages &amp; online booking portals.
                          </p>
                          <div className="mt-2 text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                            <TrendingUp className="w-3 h-3" /> +142% Direct Enquiries
                          </div>
                        </div>

                        {/* Box 2 */}
                        <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-colors">
                          <div className="flex items-center gap-2 text-blue-400 mb-1.5">
                            <BarChart3 className="w-4 h-4" />
                            <span className="text-xs font-bold text-white">Operations Dashboard</span>
                          </div>
                          <p className="text-[11px] text-slate-400 leading-normal">
                            Central sales, order tracking, and stock synchronization.
                          </p>
                          <div className="mt-2 text-[10px] font-mono text-blue-400">
                            0.02s Query Latency
                          </div>
                        </div>

                        {/* Box 3 */}
                        <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-colors">
                          <div className="flex items-center gap-2 text-emerald-400 mb-1.5">
                            <Zap className="w-4 h-4" />
                            <span className="text-xs font-bold text-white">WhatsApp &amp; AI Bots</span>
                          </div>
                          <p className="text-[11px] text-slate-400 leading-normal">
                            Instant lead dispatch directly into staff phones.
                          </p>
                          <div className="mt-2 text-[10px] font-mono text-emerald-400">
                            24/7 Automated Response
                          </div>
                        </div>

                        {/* Box 4 */}
                        <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-colors">
                          <div className="flex items-center gap-2 text-amber-400 mb-1.5">
                            <ShieldCheck className="w-4 h-4" />
                            <span className="text-xs font-bold text-white">Encrypted &amp; Secure</span>
                          </div>
                          <p className="text-[11px] text-slate-400 leading-normal">
                            Protected client data, automated daily cloud snapshots.
                          </p>
                          <div className="mt-2 text-[10px] font-mono text-amber-400">
                            99.98% High Uptime
                          </div>
                        </div>
                      </div>

                      <div className="p-2.5 rounded-lg bg-blue-950/40 border border-blue-500/25 flex items-center justify-between">
                        <div className="flex items-center gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                          <span>Built for real business workflows — not theoretical code.</span>
                        </div>
                        <button
                          onClick={onViewWork}
                          className="text-[11px] font-bold text-cyan-400 hover:underline shrink-0"
                        >
                          Explore Demos →
                        </button>
                      </div>
                    </div>
                  )}

                  {activeTab === 'studio' && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                        <span className="text-xs font-bold text-white">Engineering Studio &amp; Tech Team</span>
                        <span className="text-[10px] font-mono text-cyan-400">Onitsha • Nigeria</span>
                      </div>
                      
                      <div className="relative h-48 rounded-xl overflow-hidden border border-slate-800 shadow-lg group">
                        <img
                          src="/assets/images/tech_hero_workspace_1789594430536.jpg"
                          alt="TechDev Engineering Lab & Modern Workspace"
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#070b16] via-transparent to-transparent"></div>
                        <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between">
                          <span className="text-[11px] font-medium text-white bg-black/70 px-2 py-0.5 rounded backdrop-blur-sm">
                            Real Engineers • Dedicated Craft
                          </span>
                          <span className="text-[10px] font-mono text-cyan-300 bg-blue-950/80 px-2 py-0.5 rounded border border-blue-500/30">
                            Production Ready
                          </span>
                        </div>
                      </div>

                      <p className="text-xs text-slate-300 leading-relaxed">
                        We build custom software, web platforms, and mobile apps with clean architectures and battle-tested modern stacks.
                      </p>
                    </div>
                  )}

                  {activeTab === 'website' && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                        <span className="text-xs font-bold text-white">Client Showcase Preview: The Grand Onitsha Hotel</span>
                        <span className="text-[10px] font-mono text-cyan-400">200 OK • 0.38s Load</span>
                      </div>
                      <div className="p-3.5 rounded-lg bg-slate-900 border border-slate-800 space-y-2.5">
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-slate-400">Selected Room</span>
                          <span className="font-semibold text-white">Executive Presidential Suite</span>
                        </div>
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-slate-400">Direct Rate</span>
                          <span className="font-bold text-emerald-400">₦85,000 / night (Save 18% vs OTA)</span>
                        </div>
                        <div className="p-2 rounded bg-slate-950 text-xs text-slate-300 flex items-center justify-between">
                          <span>WhatsApp Direct Booking</span>
                          <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold text-[10px]">PREFILLED</span>
                        </div>
                      </div>
                      <p className="text-xs text-slate-400">
                        Designed to turn random Google and social searches into confirmed bookings directly on WhatsApp.
                      </p>
                    </div>
                  )}

                  {activeTab === 'dashboard' && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                        <span className="text-xs font-bold text-white">Live Client Operations Hub</span>
                        <span className="text-[10px] text-emerald-400">Active</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-center">
                        <div className="p-2.5 rounded bg-slate-900 border border-slate-800">
                          <div className="text-[10px] text-slate-400">Enquiries (30d)</div>
                          <div className="text-base font-bold text-white mt-1">428</div>
                          <div className="text-[9px] text-emerald-400">↑ 34% MoM</div>
                        </div>
                        <div className="p-2.5 rounded bg-slate-900 border border-slate-800">
                          <div className="text-[10px] text-slate-400">Conversion</div>
                          <div className="text-base font-bold text-white mt-1">14.2%</div>
                          <div className="text-[9px] text-emerald-400">Target &gt;10%</div>
                        </div>
                        <div className="p-2.5 rounded bg-slate-900 border border-slate-800">
                          <div className="text-[10px] text-slate-400">Response Time</div>
                          <div className="text-base font-bold text-white mt-1">2.4m</div>
                          <div className="text-[9px] text-cyan-400">WhatsApp sync</div>
                        </div>
                      </div>
                      <div className="p-2.5 rounded bg-slate-900 border border-slate-800 text-xs text-slate-300">
                        Real-time sync across inventory, inspection bookings, and corporate billing.
                      </div>
                    </div>
                  )}

                  {activeTab === 'mobile' && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                        <span className="text-xs font-bold text-white">Mobile-First Experience</span>
                        <span className="text-[10px] text-slate-400">iOS &amp; Android Ready</span>
                      </div>
                      <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 space-y-2 text-xs">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                          <span className="text-slate-200">Fluid touch gestures &amp; bottom-sheet filters</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                          <span className="text-slate-200">Instant 1-tap WhatsApp chat &amp; quote dispatch</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                          <span className="text-slate-200">Offline caching for fast repeat visits</span>
                        </div>
                      </div>
                      <p className="text-xs text-slate-400">
                        Over 82% of African business clients browse via mobile. We design for phones first, not as an afterthought.
                      </p>
                    </div>
                  )}

                  {activeTab === 'automation' && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                        <span className="text-xs font-bold text-white">Automated Lead Workflow</span>
                        <span className="text-[10px] text-cyan-400">Zero Manual Effort</span>
                      </div>
                      <div className="space-y-1.5 font-mono text-[11px]">
                        <div className="p-2 rounded bg-slate-900 border border-slate-800 flex items-center justify-between">
                          <span className="text-slate-300">1. Customer requests car quote</span>
                          <span className="text-emerald-400 font-bold">TRIGGER</span>
                        </div>
                        <div className="p-2 rounded bg-slate-900 border border-slate-800 flex items-center justify-between">
                          <span className="text-slate-300">2. System verifies lot stock &amp; VIN</span>
                          <span className="text-cyan-400 font-bold">AUTO</span>
                        </div>
                        <div className="p-2 rounded bg-slate-900 border border-slate-800 flex items-center justify-between">
                          <span className="text-slate-300">3. Formatted specs sent to sales WhatsApp</span>
                          <span className="text-emerald-400 font-bold">DISPATCHED</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Visual Footer */}
                  <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                      <span>TechDev Engine v2.6</span>
                    </span>
                    <span className="font-mono text-[11px] text-slate-300">Built for Serious Commercial Scale</span>
                  </div>

                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
