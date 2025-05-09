
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface ProjectHeroSectionProps {
  title: string;
  description: string;
  problemStatement: string;
  solutionStatement: string;
  targetAudience: string;
  citation: string;
  imageUrl: string;
}

const ProjectHeroSection = ({ 
  title, 
  description, 
  problemStatement, 
  solutionStatement, 
  targetAudience, 
  citation,
  imageUrl 
}: ProjectHeroSectionProps) => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <Button 
            variant="ghost" 
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
            asChild
          >
            <Link to="/">
              <ArrowLeft size={16} />
              Back to Home
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left content column - takes up 7/12 of the grid on large screens */}
          <div className="lg:col-span-7 space-y-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{title}</h1>
            <p className="text-xl text-gray-700 mb-8 text-justify">{description}</p>
            
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-3">Problem Statement</h2>
              <p className="text-gray-700 text-justify">{problemStatement}</p>
            </div>
            
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-3">Solution Statement</h2>
              <div className="text-gray-700 whitespace-pre-line text-justify">{solutionStatement}</div>
            </div>
            
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-3">Target Audience</h2>
              <p className="text-gray-700 text-justify">{targetAudience}</p>
            </div>
            
            {citation && (
              <div className="text-sm text-gray-500 italic">
                {citation}
              </div>
            )}
          </div>
          
          {/* Right image column - takes up 5/12 of the grid on large screens */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="rounded-2xl overflow-hidden shadow-xl bg-white">
              <img 
                src={imageUrl} 
                alt={title} 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectHeroSection;
