
import React from 'react';
import { Check } from 'lucide-react';

interface ProjectDeliverablesProps {
  deliverables: string[];
}

const ProjectDeliverables = ({ deliverables }: ProjectDeliverablesProps) => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Deliverables</h2>
          
          <ul className="space-y-4">
            {deliverables.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-3 mt-1 bg-green-100 rounded-full p-1">
                  <Check size={16} className="text-green-600" />
                </span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProjectDeliverables;
