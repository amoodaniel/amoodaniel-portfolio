
import React from 'react';

interface ProjectApproachProps {
  approach: string;
}

const ProjectApproach = ({ approach }: ProjectApproachProps) => {
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Approach</h2>
          <div className="text-gray-700 whitespace-pre-line leading-relaxed text-justify">
            {approach}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectApproach;
