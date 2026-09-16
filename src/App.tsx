/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TechDevStandardSection } from './components/TechDevStandardSection';
import { ServicesSection } from './components/ServicesSection';
import { SolutionsSection } from './components/SolutionsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ProcessSection } from './components/ProcessSection';
import { AboutSection } from './components/AboutSection';
import { LeadershipSection } from './components/LeadershipSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { TechStackSection } from './components/TechStackSection';
import { FAQSection } from './components/FAQSection';
import { CTASection } from './components/CTASection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { ChatBot } from './components/ChatBot';
import { DemoPreviewModal } from './components/DemoPreviewModal';
import { LegalModal, LegalType } from './components/LegalModal';
import { PremiumTrustGuarantee } from './components/PremiumTrustGuarantee';
import { RateCardModal } from './components/RateCardModal';
import { ProjectItem } from './types';
import { PROJECTS } from './data/projects';

export default function App() {
  const [activeDemoProject, setActiveDemoProject] = useState<ProjectItem | null>(null);
  const [activeLegalModal, setActiveLegalModal] = useState<LegalType>(null);
  const [isRateCardOpen, setIsRateCardOpen] = useState(false);
  const [contactInitialMessage, setContactInitialMessage] = useState<string>('');
  const [contactInitialService, setContactInitialService] = useState<string>('');

  // Close modals on Esc key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveDemoProject(null);
        setActiveLegalModal(null);
        setIsRateCardOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenContact = (customMessage?: string, service?: string) => {
    if (customMessage) setContactInitialMessage(customMessage);
    if (service) setContactInitialService(service);
    scrollToSection('contact');
  };

  const handleSelectService = (serviceName: string) => {
    setContactInitialService(serviceName);
    setContactInitialMessage(`Hello TechDev, I would like to discuss scoping a project for: ${serviceName}.`);
    scrollToSection('contact');
  };

  const handleSelectDemoById = (demoId: string) => {
    const found = PROJECTS.find(p => p.id === demoId || p.slug.includes(demoId));
    if (found) {
      setActiveDemoProject(found);
    } else {
      scrollToSection('work');
    }
  };

  const handleStartProjectForDemo = (demoTitle: string) => {
    setActiveDemoProject(null);
    handleOpenContact(`Hello TechDev, I want to build a solution similar to your concept demo: "${demoTitle}".`);
  };

  return (
    <div className="min-h-screen bg-[#050811] text-[#f8fafc] selection:bg-blue-600 selection:text-white relative">
      
      {/* Sticky Navigation */}
      <Navbar 
        onOpenContact={() => handleOpenContact()} 
        onOpenRateCard={() => setIsRateCardOpen(true)}
      />

      <main>
        {/* 1. Hero Section with Interactive Ecosystem Visual */}
        <Hero 
          onOpenContact={() => handleOpenContact()} 
          onViewWork={() => scrollToSection('work')} 
        />

        {/* 2. The TechDev Standard (Consolidated Engineering Principles, Commercial Guarantees & 6 Functional Jobs) */}
        <TechDevStandardSection onOpenContact={handleOpenContact} />

        {/* 3. Services Section (What We Build - 8 Core Services) */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* 4. Business Solutions (By Industry) */}
        <SolutionsSection onSelectDemo={handleSelectDemoById} />

        {/* 5. Demo Projects Grid (6 Concept Demos with Miniature Case Studies) */}
        <ProjectsSection 
          onOpenDemo={(project) => setActiveDemoProject(project)} 
          onOpenContact={handleOpenContact} 
        />

        {/* 6. Premium Risk-Reversal, 30-Day Warranty & 4-Step Onboarding Roadmap */}
        <PremiumTrustGuarantee 
          onOpenContact={handleOpenContact}
          onOpenRateCard={() => setIsRateCardOpen(true)}
        />

        {/* 7. Process Section (6-Step Timeline) */}
        <ProcessSection onOpenContact={handleOpenContact} />

        {/* 9. About TechDev (Mission, Vision, 5 Core Values, Techstackgist parent relationship) */}
        <AboutSection />

        {/* 10. Leadership & Authentic Team Section */}
        <LeadershipSection onOpenContact={handleOpenContact} />

        {/* 11. Testimonials (Honest Standard Note) */}
        <TestimonialsSection onOpenContact={handleOpenContact} />

        {/* 12. Technology Stack (Frontend, Backend, DB, Mobile, AI/Data, Security) */}
        <TechStackSection />

        {/* 13. Frequently Asked Questions (12 Accordion items + Search) */}
        <FAQSection />

        {/* 14. Large Call To Action */}
        <CTASection onOpenContact={handleOpenContact} />

        {/* 15. Contact Section (Complete Form + Direct Channels) */}
        <ContactSection 
          initialMessage={contactInitialMessage} 
          initialService={contactInitialService} 
        />
      </main>

      {/* Footer */}
      <Footer 
        onOpenLegal={(type) => setActiveLegalModal(type)} 
        onOpenContact={handleOpenContact} 
        onOpenRateCard={() => setIsRateCardOpen(true)}
      />

      {/* Floating WhatsApp Quick Desk */}
      <WhatsAppFloatingButton />

      {/* Fixed-position Quick Answers ChatBot Drawer */}
      <ChatBot 
        onOpenContact={handleOpenContact}
        onNavigateSection={scrollToSection}
      />

      {/* Concept Demo Interactive Sandbox & Case Study Modal */}
      <DemoPreviewModal 
        project={activeDemoProject}
        onClose={() => setActiveDemoProject(null)}
        onStartProjectForDemo={handleStartProjectForDemo}
      />

      {/* Legal Pages Modal (Privacy, Terms, Cookies) */}
      <LegalModal 
        type={activeLegalModal}
        onClose={() => setActiveLegalModal(null)}
      />

      {/* Official 2026 Commercial Rate Card & Milestone Schedule Modal */}
      <RateCardModal 
        isOpen={isRateCardOpen}
        onClose={() => setIsRateCardOpen(false)}
        onOpenContact={handleOpenContact}
      />

    </div>
  );
}
