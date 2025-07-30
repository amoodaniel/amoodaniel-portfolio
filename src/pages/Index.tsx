
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import TrustedBySection from '@/components/TrustedBySection';
import ContentSection from '@/components/ContentSection';
import PersonalProjectsSection from '@/components/PersonalProjectsSection';
import HumanitarianTechSection from '@/components/HumanitarianTechSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <HeroSection />
      <TrustedBySection />
      <HumanitarianTechSection />
      <PersonalProjectsSection />
      <ContentSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
