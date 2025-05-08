
import React from 'react';
import { Heart, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HumanitarianTechSection = () => {
  const projects = [
    {
      title: "Anenasawa - A GBV Response Bot",
      description: "Anenesawa is a WhatsApp-based chatbot designed to streamline gender-based violence (GBV) reporting by enabling outreach workers to record disclosures quickly, efficiently, and securely.",
      link: "#"
    },
    {
      title: "Maji Monitor",
      description: "An SMS-based reporting bot that streamlines the collection and real-time tracking of water access issues in underserved communities.",
      link: "#"
    }
  ];

  const handleContactClick = () => {
    window.location.href = 'mailto:danielamoo35@gmail.com';
  };

  return (
    <section id="humanitarian-tech" className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <span className="inline-flex items-center gap-2 text-sm uppercase tracking-wider text-gray-500 font-medium">
            <Heart className="w-4 h-4" />
            Humanitarian Tech
          </span>
        </div>
        
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Tech for Humanitarian Organizations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I build technology solutions that help humanitarian organizations make a greater impact in their communities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center">
            {/* Placeholder for project image */}
            <div className="p-6 bg-gray-200 rounded-full">
              <ExternalLink className="w-8 h-8 text-gray-400" />
            </div>
          </div>
          
          <div className="space-y-10 flex flex-col justify-center">
            {projects.map((project, index) => (
              <div key={index}>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-0">{project.description}</p>
              </div>
            ))}
            
            <div>
              <Button variant="outline" className="flex items-center gap-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white rounded-md">
                View All Humanitarian Projects
                <ExternalLink className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HumanitarianTechSection;
