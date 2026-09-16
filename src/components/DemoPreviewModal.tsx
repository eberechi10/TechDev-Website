import React, { useState } from 'react';
import { ProjectItem } from '../types';
import { 
  X, 
  ExternalLink, 
  MessageSquare, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  ChevronRight, 
  Search, 
  ShieldCheck, 
  Car, 
  Truck, 
  Package, 
  ShoppingBag, 
  Briefcase,
  Layers,
  ArrowRight
} from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

interface DemoPreviewModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onStartProjectForDemo: (demoTitle: string) => void;
}

export const DemoPreviewModal: React.FC<DemoPreviewModalProps> = ({ 
  project, 
  onClose, 
  onStartProjectForDemo 
}) => {
  if (!project) return null;

  // Interactive local states for each demo prototype
  // 1. Hotel State
  const [selectedRoom, setSelectedRoom] = useState('Executive Presidential Suite');
  const [nights, setNights] = useState(2);
  const [guestCount, setGuestCount] = useState(2);

  // 2. Real Estate State
  const [selectedPropertyType, setSelectedPropertyType] = useState('all');
  const [inspectionDate, setInspectionDate] = useState('Tomorrow, 10:00 AM');
  const [inspectionSubmitted, setInspectionSubmitted] = useState(false);

  // 3. Auto State
  const [selectedMake, setSelectedMake] = useState('All');
  const [selectedCar, setSelectedCar] = useState<string | null>(null);

  // 4. Logistics State
  const [origin, setOrigin] = useState('Onitsha Central Hub');
  const [destination, setDestination] = useState('Lagos Commercial Terminal');
  const [weightKg, setWeightKg] = useState(15);
  const [trackingCode, setTrackingCode] = useState('');
  const [trackingResult, setTrackingResult] = useState<string | null>(null);

  // 5. Advisory State
  const [advisoryTopic, setAdvisoryTopic] = useState('Corporate Tax & Structuring');
  const [advisoryBooked, setAdvisoryBooked] = useState(false);

  // 6. Wholesale State
  const [cartItems, setCartItems] = useState<{ name: string; cartons: number; price: number }[]>([
    { name: 'Industrial Solar Inverters 5KVA (Carton of 4)', cartons: 2, price: 920000 },
    { name: 'Premium Copper Core Cables 2.5mm (Coil of 10)', cartons: 5, price: 410000 }
  ]);

  const calculateHotelTotal = () => {
    const rate = selectedRoom.includes('Presidential') ? 85000 : selectedRoom.includes('Executive') ? 55000 : 35000;
    return rate * nights;
  };

  const getWhatsAppMessageForDemo = () => {
    switch (project.demoType) {
      case 'hotel':
        return `Hello TechDev, I saw your Grand Onitsha Hotel concept demo. I want a similar website with direct booking inquiries and WhatsApp routing for my hotel/hospitality business.`;
      case 'realestate':
        return `Hello TechDev, I saw your PrimeNest Properties concept demo. I want a similar property search and inspection booking platform for my real estate firm.`;
      case 'auto':
        return `Hello TechDev, I saw your Mgbuka Auto Hub concept demo. I'd like an online showroom and inventory portal for my car dealership.`;
      case 'logistics':
        return `Hello TechDev, I saw your EastLink Logistics concept demo. I need a similar rate calculation and freight booking portal for my logistics company.`;
      case 'advisory':
        return `Hello TechDev, I saw your Ebere & Partners concept demo. I want an authoritative practice portal and consultation booking flow for my advisory firm.`;
      case 'retail':
        return `Hello TechDev, I saw your Onitsha TradeHub concept demo. I need a digital bulk catalogue with WhatsApp ordering for my wholesale business.`;
      default:
        return `Hello TechDev, I saw your ${project.title} concept demo and want something similar for my business.`;
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="bg-[#070b18] border border-slate-700/80 rounded-2xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl relative text-left overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Top Bar: Browser Chrome Simulation */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#0a0f24] border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
            <span className="text-xs font-mono text-slate-400 ml-2 hidden sm:inline">
              demo.techdev.techstackgist.com/{project.slug}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="px-2.5 py-0.5 rounded text-[11px] font-bold tracking-wider uppercase bg-amber-500/20 text-amber-300 border border-amber-500/30">
              {project.demoLabel}
            </span>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg bg-slate-800 border border-slate-700 transition-colors"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Mandatory Concept Disclaimer Notice */}
        <div className="bg-blue-950/40 border-b border-blue-500/25 px-4 py-2 flex flex-wrap items-center justify-between text-xs text-slate-300 gap-2 shrink-0">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>
              <strong>Proof of Capability:</strong> Concept website designed by TechDev by Techstackgist.
            </span>
          </div>
          <div className="text-[11px] text-cyan-300">
            Interactive Test Sandbox
          </div>
        </div>

        {/* Scrollable Content Sandbox */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6">
          
          {/* Demo Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
            <div>
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                {project.category} • {project.type}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-0.5">
                {project.title}
              </h2>
              <p className="text-sm text-slate-300 mt-1 italic">
                "{project.tagline}"
              </p>
            </div>

            <button
              onClick={() => onStartProjectForDemo(project.title)}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-blue-600/30 shrink-0"
            >
              <span>Build This For My Business</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Real Visual Concept Showcase Image */}
          {project.imageUrl && (
            <div className="relative w-full h-48 sm:h-64 rounded-xl overflow-hidden border border-slate-800 shadow-xl">
              <img
                src={project.imageUrl}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070b18] via-transparent to-transparent"></div>
              <div className="absolute bottom-3 left-3 flex items-center gap-2">
                <span className="px-2.5 py-1 rounded bg-black/75 backdrop-blur-sm border border-white/10 text-xs font-mono text-cyan-300">
                  Concept Visualization
                </span>
                <span className="px-2.5 py-1 rounded bg-blue-950/80 backdrop-blur-sm border border-blue-500/30 text-xs font-semibold text-white">
                  {project.category} Industry Architecture
                </span>
              </div>
            </div>
          )}

          {/* ========================================================
              SPECIFIC INTERACTIVE PROTOTYPE SIMULATIONS
             ======================================================== */}
          
          {/* 1. HOTEL DEMO */}
          {project.demoType === 'hotel' && (
            <div className="space-y-6">
              <div className="rounded-xl bg-slate-900 border border-slate-800 p-4 sm:p-6 space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-800">
                  <div>
                    <h3 className="text-base font-bold text-white">Direct Booking Engine Simulator</h3>
                    <p className="text-xs text-slate-400">Experience how guests select rooms and submit WhatsApp reservation requests without OTA cuts.</p>
                  </div>
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded border border-emerald-500/30">
                    Direct Rate Guaranteed
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { name: 'Deluxe Queen Room', rate: 35000, beds: '1 Queen Bed', view: 'City View' },
                    { name: 'Executive Suite', rate: 55000, beds: '1 King Bed', view: 'Pool View' },
                    { name: 'Executive Presidential Suite', rate: 85000, beds: 'Master King + Lounge', view: 'Panoramic River View' }
                  ].map((room) => (
                    <div
                      key={room.name}
                      onClick={() => setSelectedRoom(room.name)}
                      className={`p-4 rounded-xl border transition-all cursor-pointer ${
                        selectedRoom === room.name
                          ? 'bg-blue-950/40 border-cyan-400 shadow-md ring-1 ring-cyan-400/40'
                          : 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <span className="text-xs font-bold text-white">{room.name}</span>
                        {selectedRoom === room.name && <CheckCircle2 className="w-4 h-4 text-cyan-400" />}
                      </div>
                      <div className="text-sm font-extrabold text-cyan-300 mt-2">
                        ₦{room.rate.toLocaleString()} <span className="text-[10px] text-slate-400 font-normal">/ night</span>
                      </div>
                      <div className="mt-3 text-[11px] text-slate-400 space-y-0.5">
                        <div>• {room.beds}</div>
                        <div>• {room.view}</div>
                        <div>• Free Breakfast &amp; Wi-Fi</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Booking Controls */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
                  <div>
                    <label className="block text-slate-400 mb-1">Duration of Stay</label>
                    <select
                      value={nights}
                      onChange={(e) => setNights(Number(e.target.value))}
                      className="w-full p-2 rounded-lg bg-slate-950 border border-slate-700 text-white font-medium"
                    >
                      <option value={1}>1 Night</option>
                      <option value={2}>2 Nights</option>
                      <option value={3}>3 Nights</option>
                      <option value={5}>5 Nights (Extended)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-400 mb-1">Guests</label>
                    <select
                      value={guestCount}
                      onChange={(e) => setGuestCount(Number(e.target.value))}
                      className="w-full p-2 rounded-lg bg-slate-950 border border-slate-700 text-white font-medium"
                    >
                      <option value={1}>1 Adult</option>
                      <option value={2}>2 Adults</option>
                      <option value={4}>Family (Up to 4)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-400 mb-1">Estimated Direct Total</label>
                    <div className="p-2 rounded-lg bg-slate-950 border border-slate-700 text-emerald-400 font-bold text-sm">
                      ₦{calculateHotelTotal().toLocaleString()} <span className="text-[10px] text-slate-400">(Save ₦{Math.round(calculateHotelTotal() * 0.18).toLocaleString()} vs OTA)</span>
                    </div>
                  </div>
                </div>

                {/* Action */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="text-xs text-slate-400">
                    Clicking reservation sends full room name and dates directly to hotel reception on WhatsApp.
                  </div>
                  <a
                    href={COMPANY_INFO.getWhatsAppLink(`Hello The Grand Onitsha Hotel, I would like to reserve the ${selectedRoom} for ${nights} nights (${guestCount} guests). Total estimate: ₦${calculateHotelTotal().toLocaleString()}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow transition-all"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Test Send WhatsApp Booking</span>
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* 2. REAL ESTATE DEMO */}
          {project.demoType === 'realestate' && (
            <div className="space-y-6">
              <div className="rounded-xl bg-slate-900 border border-slate-800 p-4 sm:p-6 space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-800">
                  <div>
                    <h3 className="text-base font-bold text-white">Searchable Property &amp; Inspection Desk</h3>
                    <p className="text-xs text-slate-400">Showcase property titles with full transparency so buyers can book verified physical inspections.</p>
                  </div>
                  <div className="flex gap-1.5 text-xs">
                    <button
                      onClick={() => setSelectedPropertyType('all')}
                      className={`px-2.5 py-1 rounded ${selectedPropertyType === 'all' ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-300'}`}
                    >
                      All
                    </button>
                    <button
                      onClick={() => setSelectedPropertyType('land')}
                      className={`px-2.5 py-1 rounded ${selectedPropertyType === 'land' ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-300'}`}
                    >
                      Estate Land
                    </button>
                    <button
                      onClick={() => setSelectedPropertyType('residential')}
                      className={`px-2.5 py-1 rounded ${selectedPropertyType === 'residential' ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-300'}`}
                    >
                      Houses
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { id: '1', title: 'Silicon Crest Estate (Phase 2)', type: 'land', loc: 'GRA Extension, Onitsha', price: '₦18,500,000 / plot', titleDoc: 'C of O / Gov. Consent' },
                    { id: '2', title: '4-Bedroom Contemporary Duplex', type: 'residential', loc: 'Trans-Amadi / New Haven', price: '₦95,000,000', titleDoc: 'Deed of Conveyance & Gazette' },
                    { id: '3', title: 'Commercial Logistics Yard (2,400sqm)', type: 'land', loc: 'Expressway Interchange', price: '₦45,000,000', titleDoc: 'Registered Survey & C of O' }
                  ]
                  .filter(p => selectedPropertyType === 'all' || p.type === selectedPropertyType)
                  .map((prop) => (
                    <div key={prop.id} className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2.5">
                      <div className="flex justify-between items-start">
                        <span className="text-xs font-bold text-white">{prop.title}</span>
                      </div>
                      <div className="text-xs text-slate-400 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-cyan-400" /> {prop.loc}
                      </div>
                      <div className="text-sm font-extrabold text-emerald-400">
                        {prop.price}
                      </div>
                      <div className="text-[10px] font-mono text-amber-300 bg-amber-950/40 p-1.5 rounded border border-amber-500/20">
                        Title: {prop.titleDoc}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Inspection Booking Simulation */}
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-3">
                  <span className="text-xs font-bold text-white block">Test Schedule Buyer Site Inspection</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div>
                      <label className="block text-slate-400 mb-1">Choose Inspection Slot</label>
                      <select
                        value={inspectionDate}
                        onChange={(e) => setInspectionDate(e.target.value)}
                        className="w-full p-2 rounded-lg bg-slate-900 border border-slate-700 text-white"
                      >
                        <option>Tomorrow, 10:00 AM</option>
                        <option>Saturday, 11:30 AM</option>
                        <option>Sunday, 2:00 PM</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-slate-400 mb-1">Inspection Format</label>
                      <select className="w-full p-2 rounded-lg bg-slate-900 border border-slate-700 text-white">
                        <option>Physical On-Site Inspection (Free chauffeur pickup)</option>
                        <option>Live HD Virtual Video Walkthrough (For Diaspora)</option>
                      </select>
                    </div>
                  </div>

                  {inspectionSubmitted ? (
                    <div className="p-2.5 rounded bg-emerald-950/60 border border-emerald-500/40 text-xs text-emerald-300">
                      ✓ Inspection appointment captured! WhatsApp notification dispatch triggered for agents.
                    </div>
                  ) : (
                    <button
                      onClick={() => setInspectionSubmitted(true)}
                      className="px-4 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold shadow"
                    >
                      Simulate Inspection Request
                    </button>
                  )}
                </div>

              </div>
            </div>
          )}

          {/* 3. AUTOMOBILE DEMO */}
          {project.demoType === 'auto' && (
            <div className="space-y-6">
              <div className="rounded-xl bg-slate-900 border border-slate-800 p-4 sm:p-6 space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-800">
                  <div>
                    <h3 className="text-base font-bold text-white">Digital Showroom &amp; VIN Verifier</h3>
                    <p className="text-xs text-slate-400">Display Tokunbo and certified vehicles with mileage, transmission, and verified duty payment tags.</p>
                  </div>
                  <span className="text-xs font-mono text-cyan-400">Lot Stock: 24 Cars Ready</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { id: '1', name: '2021 Toyota RAV4 XLE AWD', mileage: '34,200 mi', duty: 'Fully Paid Single Entry', price: '₦36,500,000' },
                    { id: '2', name: '2020 Lexus RX350 F-Sport', mileage: '41,800 mi', duty: 'Verified Tincan Customs', price: '₦52,000,000' },
                    { id: '3', name: '2019 Mercedes-Benz GLE 450', mileage: '28,900 mi', duty: 'Fully Cleared Documented', price: '₦68,000,000' }
                  ].map((car) => (
                    <div
                      key={car.id}
                      onClick={() => setSelectedCar(car.name)}
                      className={`p-4 rounded-xl border cursor-pointer transition-all ${
                        selectedCar === car.name 
                          ? 'bg-blue-950/40 border-cyan-400' 
                          : 'bg-slate-950 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      <span className="text-xs font-bold text-white block">{car.name}</span>
                      <div className="text-sm font-extrabold text-cyan-300 mt-2">{car.price}</div>
                      <div className="text-[11px] text-slate-400 mt-1">Mileage: {car.mileage}</div>
                      <div className="mt-2 text-[10px] text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/20 inline-block">
                        ✓ {car.duty}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                  <span className="text-slate-300">
                    Buyers can negotiate or book a physical test drive with vehicle VIN pre-attached.
                  </span>
                  <a
                    href={COMPANY_INFO.getWhatsAppLink(`Hello Mgbuka Auto Hub, I am interested in the ${selectedCar || '2020 Lexus RX350 F-Sport'}. Please send more photos and best cash price.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1.5"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Inquire Vehicle On WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* 4. LOGISTICS DEMO */}
          {project.demoType === 'logistics' && (
            <div className="space-y-6">
              <div className="rounded-xl bg-slate-900 border border-slate-800 p-4 sm:p-6 space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-800">
                  <div>
                    <h3 className="text-base font-bold text-white">Freight Rate &amp; Transit Calculator</h3>
                    <p className="text-xs text-slate-400">Allow shippers to check cargo rates and enter tracking waybills instantly.</p>
                  </div>
                  <span className="text-xs font-mono text-emerald-400">Interstate Express Active</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div>
                    <label className="block text-slate-400 mb-1">Pickup Hub</label>
                    <select
                      value={origin}
                      onChange={(e) => setOrigin(e.target.value)}
                      className="w-full p-2 rounded-lg bg-slate-950 border border-slate-700 text-white"
                    >
                      <option>Onitsha Central Hub</option>
                      <option>Lagos Mainland Terminal</option>
                      <option>Abuja Cargo Depot</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-slate-400 mb-1">Destination</label>
                    <select
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      className="w-full p-2 rounded-lg bg-slate-950 border border-slate-700 text-white"
                    >
                      <option>Lagos Commercial Terminal</option>
                      <option>Port Harcourt Express Yard</option>
                      <option>Kano City Terminal</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-slate-400 mb-1">Cargo Weight (KG)</label>
                    <input
                      type="number"
                      min={1}
                      max={500}
                      value={weightKg}
                      onChange={(e) => setWeightKg(Number(e.target.value))}
                      className="w-full p-2 rounded-lg bg-slate-950 border border-slate-700 text-white font-medium"
                    />
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div>
                    <span className="text-xs text-slate-400">Estimated Waybill Charge</span>
                    <div className="text-xl font-extrabold text-emerald-400">
                      ₦{(weightKg * 850 + 3500).toLocaleString()}
                    </div>
                    <span className="text-[10px] text-slate-400">Transit estimate: 24 - 36 hours door-to-door</span>
                  </div>

                  <button
                    onClick={() => setTrackingResult("Waybill #EL-89421 in transit • Left Onitsha terminal at 08:30AM • Driver assigned")}
                    className="px-4 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs"
                  >
                    Test Tracking Code Lookup
                  </button>
                </div>

                {trackingResult && (
                  <div className="p-3 bg-blue-950/50 border border-blue-500/30 rounded-lg text-xs text-cyan-300">
                    {trackingResult}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* 5. ADVISORY DEMO */}
          {project.demoType === 'advisory' && (
            <div className="space-y-6">
              <div className="rounded-xl bg-slate-900 border border-slate-800 p-4 sm:p-6 space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-800">
                  <div>
                    <h3 className="text-base font-bold text-white">Confidential Consultation Intake Portal</h3>
                    <p className="text-xs text-slate-400">Position practice partners as top authorities with tailored intake questionnaires.</p>
                  </div>
                  <span className="text-xs font-mono text-cyan-400">Retainer Engagements</span>
                </div>

                <div className="space-y-3 text-xs">
                  <div>
                    <label className="block text-slate-400 mb-1">Select Practice Scope</label>
                    <select
                      value={advisoryTopic}
                      onChange={(e) => setAdvisoryTopic(e.target.value)}
                      className="w-full p-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white"
                    >
                      <option>Corporate Tax &amp; Structuring</option>
                      <option>Cross-Border Trade &amp; Regulatory Compliance</option>
                      <option>Commercial Dispute &amp; Contract Advisory</option>
                    </select>
                  </div>

                  {advisoryBooked ? (
                    <div className="p-3 rounded bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs">
                      ✓ Consultation request dispatched to senior partner desk. Calendar invitation generated.
                    </div>
                  ) : (
                    <button
                      onClick={() => setAdvisoryBooked(true)}
                      className="px-4 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs"
                    >
                      Book 30-Minute Partner Briefing
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* 6. RETAIL DEMO */}
          {project.demoType === 'retail' && (
            <div className="space-y-6">
              <div className="rounded-xl bg-slate-900 border border-slate-800 p-4 sm:p-6 space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-800">
                  <div>
                    <h3 className="text-base font-bold text-white">Wholesale Catalogue &amp; WhatsApp Cart Dispatch</h3>
                    <p className="text-xs text-slate-400">Carton pricing and MOQs formatted automatically for wholesale sales desks.</p>
                  </div>
                  <span className="text-xs font-mono text-emerald-400">B2B Trade Pricing</span>
                </div>

                <div className="space-y-2">
                  {cartItems.map((item, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-between text-xs">
                      <div>
                        <span className="font-bold text-white block">{item.name}</span>
                        <span className="text-slate-400">{item.cartons} Cartons</span>
                      </div>
                      <div className="text-right">
                        <span className="font-extrabold text-emerald-400">₦{(item.price * item.cartons).toLocaleString()}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="text-xs text-slate-300">
                    Total: <strong className="text-emerald-400">₦{(cartItems.reduce((acc, i) => acc + (i.price * i.cartons), 0)).toLocaleString()}</strong>
                  </div>

                  <a
                    href={COMPANY_INFO.getWhatsAppLink(`Hello Onitsha TradeHub, I am ordering:\n- 2 Cartons Industrial Solar Inverters 5KVA\n- 5 Coils Premium Copper Core Cables\nTotal: ₦3,890,000. Please confirm stock and delivery waybill to my warehouse.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Dispatch Order to WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================
              FULL CASE STUDY BLUEPRINT DETAILS (FROM PROMPT SPEC)
             ======================================================== */}
          <div className="pt-6 border-t border-slate-800 space-y-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Layers className="w-4 h-4 text-cyan-400" />
              <span>Case Study &amp; Technical Architecture Breakdown</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800">
                <span className="font-bold text-rose-400 uppercase tracking-wider text-[11px] block mb-1">
                  THE CHALLENGE
                </span>
                <p className="text-slate-300 leading-relaxed">{project.problem}</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800">
                <span className="font-bold text-blue-400 uppercase tracking-wider text-[11px] block mb-1">
                  THE APPROACH
                </span>
                <p className="text-slate-300 leading-relaxed">{project.approach}</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800">
                <span className="font-bold text-cyan-400 uppercase tracking-wider text-[11px] block mb-1">
                  THE SOLUTION
                </span>
                <p className="text-slate-300 leading-relaxed">{project.solution}</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800">
                <span className="font-bold text-emerald-400 uppercase tracking-wider text-[11px] block mb-1">
                  BUSINESS OUTCOME
                </span>
                <p className="text-slate-300 leading-relaxed">{project.businessOutcome}</p>
              </div>
            </div>

            {/* Key Features & Technologies */}
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                Key Features Delivered:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {project.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2 p-2 rounded bg-slate-900 border border-slate-800/80 text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                Technology Stack Utilized:
              </span>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[11px] font-mono text-cyan-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Call to Action */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-950/60 to-slate-900 border border-blue-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="text-base font-bold text-white">Want Something Like This For Your Business?</h4>
                <p className="text-xs text-slate-300 mt-0.5">
                  This is a concept experience. We can adapt this exact proven framework to your brand, catalogue, and operational workflow.
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <a
                  href={COMPANY_INFO.getWhatsAppLink(getWhatsAppMessageForDemo())}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1.5 shadow"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>

                <button
                  onClick={() => {
                    onClose();
                    onStartProjectForDemo(project.title);
                  }}
                  className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-lg shadow-blue-600/30 transition-all"
                >
                  Start Your Project
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
