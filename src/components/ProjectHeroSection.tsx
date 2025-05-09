
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
  imageUrl,
  ...otherProps // We'll keep these props but use them in other sections 
}: ProjectHeroSectionProps) => {
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
          {/* Left content column - takes up 7/12 of the grid on large screens */}
          <div className="lg:col-span-7">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">{title}</h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed text-justify">{description}</p>
          </div>
          
          {/* Right image column - takes up 5/12 of the grid on large screens */}
          <div className="lg:col-span-5">
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
