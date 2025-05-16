
import React from 'react';

interface ProjectProblemSolutionProps {
  problemStatement: string;
  solutionStatement: string;
  citation?: string;
}

const ProjectProblemSolution: React.FC<ProjectProblemSolutionProps> = ({
  problemStatement,
  solutionStatement,
  citation
}) => {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">The Problem</h2>
            <div className="text-gray-700 text-justify">
              <p>{problemStatement}</p>
              {citation && (
                <p className="text-sm mt-2 text-gray-500">{citation}</p>
              )}
            </div>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">The Solution</h2>
            <div className="text-gray-700 text-justify whitespace-pre-line">
              {solutionStatement}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectProblemSolution;
