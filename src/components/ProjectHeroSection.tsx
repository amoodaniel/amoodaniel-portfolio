import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';

interface ProjectHeroSectionProps {
  title: string;
  description: string;
  problemStatement: string;
  solutionStatement: string;
  targetAudience?: string;
  citation: string;
  imageUrl: string;
  funding?: string;
  location?: string;
  techStack?: string[];
}

const ProjectHeroSection = ({ 
  title, 
  description, 
  imageUrl,
  funding,
  location,
  techStack,
  ...otherProps // We'll keep these props but use them in other sections 
}: ProjectHeroSectionProps) => {
  // Default values if not provided
  const displayFunding = funding || '£149,082+';
  const displayLocation = location || 'South Sudan';
  const displayTechStack = techStack || ['Python', 'DSL', 'Streamlit', 'Ruby'];

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-gray-50 to-white border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
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
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left content column - takes up 5/12 of the grid on large screens */}
          <div className="lg:col-span-5">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{title}</h1>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-justify mb-8">{description}</p>
            
            {/* Project Details Badges */}
            <div className="flex flex-wrap gap-3 mb-6">
              <Badge variant="secondary" className="bg-green-100 text-green-800 px-4 py-2">
                Project funding: {displayFunding}
              </Badge>
              <Badge variant="secondary" className="bg-blue-100 text-blue-800 px-4 py-2">
                Location: {displayLocation}
              </Badge>
            </div>
            
            {/* Tech Stack Badges */}
            <div className="flex flex-wrap items-center gap-1">
              <span className="text-sm font-medium text-gray-700">Tech:</span>
              {displayTechStack.map((tech, idx) => (
                <Badge key={idx} variant="outline" className="border-gray-300 text-gray-700 px-4 py-2">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
          
          {/* Right image column - takes up 7/12 of the grid on large screens */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl overflow-hidden shadow-2xl bg-white transform hover:scale-[1.02] transition-transform duration-300">
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
