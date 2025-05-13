import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectHeroSection from '@/components/ProjectHeroSection';
import ProjectProblemSolution from '@/components/ProjectProblemSolution';
import ContactSection from '@/components/ContactSection';

const MajiMonitor = () => {
  const projectData = {
    title: "Maji Monitor",
    description: "A reporting system that streamlines the collection and real-time tracking of water access issues in underserved communities.",
    problemStatement: "Communities in conflict-affected and water-scarce regions such as Turkana West Sub-County are heavily reliant on NGOs and WASH professionals for the maintenance and monitoring of water sources. This dependence leads to delayed responses to service issues, inadequate water quality testing, and exacerbates water scarcity problems.",
    solutionStatement: "Undisclosed",
    targetAudience: "50,000+ community members across 20 underserved communities",
    imageUrl: "/lovable-uploads/maji-monitor-hero.jpg",
    citation: "",
    funding: "Undisclosed",
    location: "TBD",
    techStack: ["TBD"],
  };

  const DevSection = ({ title }: { title: string }) => (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">{title}</h2>
          <p className="text-xl text-gray-600">Still in development stage.</p>
        </div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <ProjectHeroSection 
        title={projectData.title}
        description={projectData.description}
        problemStatement={projectData.problemStatement}
        solutionStatement={projectData.solutionStatement}
        targetAudience={projectData.targetAudience}
        citation={''}
        imageUrl={projectData.imageUrl}
        funding={projectData.funding}
        location={projectData.location}
        techStack={projectData.techStack}
      />
      <ProjectProblemSolution 
        problemStatement={projectData.problemStatement}
        solutionStatement={''}
        targetAudience={''}
        citation={''}
      />
      <DevSection title="Approach" />
      <DevSection title="Deliverables" />
      <DevSection title="Impact" />
      <DevSection title="Project in the News" />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default MajiMonitor; 