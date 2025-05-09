import React from 'react';

interface ProjectProblemSolutionProps {
  problemStatement: string;
  solutionStatement: string;
  targetAudience?: string;
  citation: string;
}

const ProjectProblemSolution = ({
  problemStatement,
  solutionStatement,
  targetAudience,
  citation,
}: ProjectProblemSolutionProps) => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {/* Problem Statement */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Problem</h2>
              <p className="text-gray-700 leading-relaxed text-justify">{problemStatement}</p>
            </div>

            {/* Solution Statement */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Solution</h2>
              <p className="text-gray-700 leading-relaxed text-justify whitespace-pre-line">{solutionStatement}</p>
            </div>

            {/* Citation */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Citation</h2>
              <p className="text-gray-700 leading-relaxed text-justify">{citation}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectProblemSolution; 