
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
    <section className="py-16 md:py-24 bg-white">
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
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
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
          
          <div className="rounded-lg overflow-hidden shadow-xl h-[500px]">
            <img 
              src={imageUrl} 
              alt={title} 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectHeroSection;
