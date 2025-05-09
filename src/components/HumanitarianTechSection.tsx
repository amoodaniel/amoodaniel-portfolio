import React from 'react';
import { Heart, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HumanitarianTechSection = () => {
  const projects = [
    {
      title: "Anenasawa - A GBV Response Bot",
      description: "Anenesawa is a WhatsApp-based chatbot designed to streamline gender-based violence (GBV) reporting by enabling outreach workers to record disclosures quickly, efficiently, and securely.",
      link: "/anenasawa"
    },
    {
      title: "Maji Monitor",
      description: "A reporting bot that streamlines the collection and real-time tracking of water access issues in underserved communities.",
      link: "/maji-monitor"
    }
  ];

  const handleContactClick = () => {
    window.location.href = 'mailto:danielamoo35@gmail.com';
  };

  return (
    <section id="humanitarian-tech" className="py-24 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Humanitarian Tech for Social Impact
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            I build digital tools to empower communities, improve service delivery, and drive positive change in crisis-affected regions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center overflow-hidden">
            <img 
              src="/lovable-uploads/humanitarian-section.jpg" 
              alt="Humanitarian project" 
              className="object-cover w-full h-full" 
            />
          </div>
          
          <div className="space-y-10 flex flex-col justify-center">
            {projects.map((project, index) => (
              <div key={index}>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <Button 
                  variant="outline" 
                  className="flex items-center gap-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white rounded-md"
                  asChild
                >
                  <Link to={project.link}>
                    View Project
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HumanitarianTechSection;
