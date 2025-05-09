
import React from 'react';

interface ImpactItem {
  title: string;
  description: string;
}

interface ProjectImpactProps {
  impactItems: ImpactItem[];
}

const ProjectImpact = ({ impactItems }: ProjectImpactProps) => {
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Impact</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {impactItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
              <p className="text-gray-700 text-justify">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectImpact;
