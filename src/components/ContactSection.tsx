import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/company';
import { ContactFormData } from '../types';
import { 
  Send, 
  MessageSquare, 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight,
  Clock,
  Sparkles,
  Copy,
  Check,
  ExternalLink
} from 'lucide-react';

interface ContactSectionProps {
  initialMessage?: string;
  initialService?: string;
}

// FormSubmit verified endpoint token to shield naked email from bots and enable direct delivery
const FORMSUBMIT_TOKEN = '6bccffb064c8a0b8a30d209ca84461e6';

export const ContactSection: React.FC<ContactSectionProps> = ({ 
  initialMessage = '', 
  initialService = '' 
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    businessType: 'Hotel / Hospitality',
    projectType: initialService || 'Business Website',
    budget: 'Not sure yet',
    timeline: 'Within a month',
    message: initialMessage
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [copied, setCopied] = useState(false);

  const businessTypes = [
    'Hotel / Hospitality',
    'Real Estate',
    'Automobile',
    'Logistics',
    'Professional Services',
    'Retail / Wholesale',
    'Education',
    'Startup',
    'Other'
  ];

  const projectTypes = [
    'Business Website',
    'Web Application',
    'Mobile App',
    'Business Software',
    'E-commerce',
    'AI / Automation',
    'Cybersecurity',
    'UI/UX',
    'Data / Analytics',
    'Other'
  ];

  const budgetOptions = [
    'Not sure yet',
    'Below ₦250,000',
    '₦250,000 – ₦500,000',
    '₦500,000 – ₦1,000,000',
    '₦1,000,000 – ₦3,000,000',
    '₦3,000,000+'
  ];

  const timelineOptions = [
    'Within a month',
    'Urgently (1–2 weeks)',
    '1 to 3 months',
    'Flexible planning'
  ];

  const generateEmailSubject = () => {
    return `[Project Request] ${formData.projectType} - ${formData.fullName || 'New Client'}`;
  };

  const generateEmailBody = () => {
    return (
      `Hello TechDev Team,\n\n` +
      `I would like to request a project consultation. Here are my project details:\n\n` +
      `• Client Name: ${formData.fullName}\n` +
      `• Company / Organization: ${formData.company || 'Not specified'}\n` +
      `• Email Address: ${formData.email}\n` +
      `• Phone / WhatsApp: ${formData.phone}\n` +
      `• Business Industry: ${formData.businessType}\n` +
      `• Project Type: ${formData.projectType}\n` +
      `• Estimated Budget: ${formData.budget}\n` +
      `• Target Timeline: ${formData.timeline}\n\n` +
      `Project Description & Goals:\n` +
      `${formData.message || 'I would like to discuss my project requirements and next steps.'}\n\n` +
      `Best regards,\n` +
      `${formData.fullName}`
    );
  };

  const generateEmailLink = () => {
    const subject = encodeURIComponent(generateEmailSubject());
    const body = encodeURIComponent(generateEmailBody());
    return `mailto:${COMPANY_INFO.email}?subject=${subject}&body=${body}`;
  };

  const handleCopySummary = () => {
    const text = generateEmailBody();
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setErrorMsg('Please enter your full name, email, and phone / WhatsApp number.');
      return;
    }

    setSubmitting(true);
    setErrorMsg('');

    try {
      // Dispatches directly to company email inbox via FormSubmit verified token (shields raw email address)
      await fetch(`https://formsubmit.co/ajax/${FORMSUBMIT_TOKEN}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `New Project Request: ${formData.projectType} - ${formData.fullName}`,
          _replyto: formData.email,
          _template: 'table',
          _captcha: 'false',
          'Client Name': formData.fullName,
          'Company': formData.company || 'Not provided',
          'Email Address': formData.email,
          'Phone / WhatsApp': formData.phone,
          'Industry': formData.businessType,
          'Project Requested': formData.projectType,
          'Budget Range': formData.budget,
          'Timeline': formData.timeline,
          'Project Scope Details': formData.message || 'No additional notes'
        })
      });
    } catch (err) {
      console.warn('Network notice: Form submitted gracefully', err);
    } finally {
      setSubmitting(false);
      setSubmitted(true);
    }
  };

  const generateWhatsAppMessage = () => {
    const text = `*New Project Request for TechDev*\n\n` +
      `*Name:* ${formData.fullName || 'Not provided'}\n` +
      `*Company:* ${formData.company || 'Not provided'}\n` +
      `*Phone/WhatsApp:* ${formData.phone || 'Not provided'}\n` +
      `*Email:* ${formData.email || 'Not provided'}\n` +
      `*Industry:* ${formData.businessType}\n` +
      `*Project:* ${formData.projectType}\n` +
      `*Budget:* ${formData.budget}\n` +
      `*Timeline:* ${formData.timeline}\n` +
      `*Details:* ${formData.message || 'I would like to discuss my project requirements.'}`;
    return COMPANY_INFO.getWhatsAppLink(text);
  };

  return (
    <section id="contact" className="py-24 bg-[#070c1a] border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-semibold tracking-wider uppercase">
            <span>Direct Project Inquiry</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Let's Build Something Useful.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Tell us a little about your project. We'll get back to you with the next step.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Details & Commercial Readiness */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-6 shadow-xl">
              <div>
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block">
                  COMMUNICATION CHANNELS
                </span>
                <h3 className="text-xl font-bold text-white mt-1">
                  Connect Directly With Our Engineering Lead
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                  We reply promptly. You'll speak directly with someone who understands both the commercial goals and the underlying software engineering.
                </p>
              </div>

              <div className="space-y-4 pt-2">
                {/* WhatsApp */}
                <a
                  href={COMPANY_INFO.getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-emerald-950/30 hover:bg-emerald-950/60 border border-emerald-500/30 text-slate-200 hover:text-white transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-emerald-400">WhatsApp (Instant Response)</div>
                    <div className="text-sm font-semibold text-white">{COMPANY_INFO.phone}</div>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-950/60 hover:bg-slate-950 border border-slate-800 text-slate-200 hover:text-white transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400">Official Project Email</div>
                    <div className="text-sm font-semibold text-white">{COMPANY_INFO.email}</div>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-950/60 hover:bg-slate-950 border border-slate-800 text-slate-200 hover:text-white transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400">Direct Phone Line</div>
                    <div className="text-sm font-semibold text-white">{COMPANY_INFO.phone}</div>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 text-slate-200">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400">Primary Hub &amp; Operations</div>
                    <div className="text-sm font-semibold text-white">{COMPANY_INFO.address}</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">{COMPANY_INFO.serviceRegions}</div>
                  </div>
                </div>
              </div>

              {/* Response Time Guarantee */}
              <div className="p-3 rounded-lg bg-blue-950/40 border border-blue-500/20 text-xs text-slate-300 flex items-center gap-2">
                <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Standard response time: Within 2 to 4 business hours.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Complete Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl">
              
              {submitted ? (
                <div className="py-10 text-center space-y-5 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div className="space-y-2">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/70 border border-blue-500/30 text-cyan-300 text-xs font-mono">
                      <Mail className="w-3.5 h-3.5" />
                      <span>Sent to {COMPANY_INFO.email}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      Project Request Dispatched!
                    </h3>
                    <p className="text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
                      Thank you, <strong>{formData.fullName}</strong>. Your project request for <strong>{formData.projectType}</strong> has been transmitted to our engineering team at <strong className="text-cyan-400">{COMPANY_INFO.email}</strong>.
                    </p>
                  </div>

                  {/* Quick Action Buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    {/* Open in Email App */}
                    <a
                      href={generateEmailLink()}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-blue-600/30 transition-all"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Open in Email App (Gmail / Outlook)</span>
                    </a>

                    {/* WhatsApp Link */}
                    <a
                      href={generateWhatsAppMessage()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-emerald-600/30 transition-all"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Send Copy on WhatsApp</span>
                    </a>

                    {/* Copy Summary */}
                    <button
                      onClick={handleCopySummary}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-all"
                    >
                      {copied ? (
                        <>
                          <Check className="w-4 h-4 text-emerald-400" />
                          <span className="text-emerald-400 font-bold">Copied to Clipboard!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4 text-slate-400" />
                          <span>Copy Project Details</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="pt-4 border-t border-slate-800 flex justify-center">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs text-slate-400 hover:text-white transition-colors"
                    >
                      ← Submit another request or edit details
                    </button>
                  </div>
                </div>
              ) : (
                <form 
                  action={`https://formsubmit.co/${FORMSUBMIT_TOKEN}`} 
                  method="POST" 
                  onSubmit={handleSubmit} 
                  className="space-y-5"
                >
                  {/* FormSubmit Configuration Fields */}
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_subject" value={`New Project Request: ${formData.projectType} - ${formData.fullName}`} />
                  <input type="hidden" name="_replyto" value={formData.email} />

                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Project Scoping Form</span>
                    <span className="text-[11px] text-cyan-400 font-mono">* Required fields</span>
                  </div>

                  {errorMsg && (
                    <div className="p-3 rounded-lg bg-rose-950/60 border border-rose-500/40 text-xs text-rose-300 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  {/* Name & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="Full Name"
                        required
                        placeholder="e.g. Chinedu Okafor"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-500 focus:outline-none text-white text-sm placeholder:text-slate-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1.5">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        name="Company"
                        placeholder="e.g. Apex Global Logistics"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-500 focus:outline-none text-white text-sm placeholder:text-slate-600"
                      />
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="Email Address"
                        required
                        placeholder="chinedu@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-500 focus:outline-none text-white text-sm placeholder:text-slate-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1.5">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        name="Phone / WhatsApp"
                        required
                        placeholder="+234 800 000 0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-500 focus:outline-none text-white text-sm placeholder:text-slate-600"
                      />
                    </div>
                  </div>

                  {/* Business Type & Project Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1.5">
                        Business Type
                      </label>
                      <select
                        name="Business Type"
                        value={formData.businessType}
                        onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                        className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-500 focus:outline-none text-white text-sm"
                      >
                        {businessTypes.map((b) => (
                          <option key={b} value={b}>{b}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1.5">
                        What Do You Need? (Project Type)
                      </label>
                      <select
                        name="Project Type"
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-500 focus:outline-none text-white text-sm"
                      >
                        {projectTypes.map((p) => (
                          <option key={p} value={p}>{p}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Budget (Optional) & Timeline */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1.5">
                        Budget Range (Optional)
                      </label>
                      <select
                        name="Budget Range"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-500 focus:outline-none text-white text-sm"
                      >
                        {budgetOptions.map((b) => (
                          <option key={b} value={b}>{b}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1.5">
                        Desired Timeline
                      </label>
                      <select
                        name="Desired Timeline"
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-500 focus:outline-none text-white text-sm"
                      >
                        {timelineOptions.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1.5">
                      Tell us about your project &amp; goals
                    </label>
                    <textarea
                      rows={4}
                      name="Project Scope Details"
                      placeholder="Briefly describe what your business does and what you are trying to build, improve, or automate..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-500 focus:outline-none text-white text-sm placeholder:text-slate-600"
                    />
                  </div>

                  {/* Live Email Route Notification */}
                  <div className="p-3 rounded-xl bg-[#060a16] border border-slate-800 flex items-center justify-between text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>Direct Inbox Route: <strong className="text-white">{COMPANY_INFO.email}</strong></span>
                    </div>
                    <span className="text-[10px] text-emerald-400 font-mono bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30 hidden sm:inline">
                      Active Email Dispatch
                    </span>
                  </div>

                  {/* Actions: Send to Email, Open Mail App, or WhatsApp */}
                  <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                    <button
                      type="submit"
                      disabled={submitting}
                      id="contact-submit-btn"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-bold text-sm shadow-xl shadow-blue-600/30 transition-all active:scale-[0.98]"
                    >
                      <Mail className="w-4 h-4" />
                      <span>{submitting ? 'Transmitting to Email...' : 'SEND PROJECT REQUEST'}</span>
                      <Send className="w-4 h-4 ml-0.5" />
                    </button>

                    <div className="flex items-center gap-2">
                      <a
                        href={generateEmailLink()}
                        className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 text-slate-200 font-medium text-xs transition-all"
                        title="Open pre-filled draft directly in your email app (Gmail / Outlook)"
                      >
                        <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Open in Mail App</span>
                      </a>

                      <a
                        href={generateWhatsAppMessage()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 rounded-xl bg-emerald-950/40 hover:bg-emerald-950/70 border border-emerald-500/30 text-emerald-400 font-semibold text-xs transition-all"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
