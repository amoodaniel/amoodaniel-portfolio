
import React, { useState } from 'react';
import { ExternalLink, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const PersonalProjectsSection = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  const projects = [
    {
      title: "AI for Good",
      description: "An open-source platform that uses AI to analyze satellite imagery for disaster response.",
      image: "placeholder.svg",
      tags: ["AI", "Python", "Open Source"],
      category: "web",
      link: "#"
    },
    {
      title: "Community Connect",
      description: "A mobile app that connects volunteers with local community projects.",
      image: "placeholder.svg",
      tags: ["React Native", "Firebase"],
      category: "mobile",
      link: "#"
    },
    {
      title: "Resource Tracker",
      description: "A web application for tracking and managing resources in disaster zones.",
      image: "placeholder.svg",
      tags: ["Next.js", "MongoDB"],
      category: "web",
      link: "#"
    }
  ];

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(project => 
        (activeTab === 'web' && project.category === 'web') ||
        (activeTab === 'mobile' && project.category === 'mobile')
      );

  return (
    <section id="personal-projects" className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <span className="inline-flex items-center gap-2 text-sm uppercase tracking-wider text-gray-500 font-medium">
            <Code className="w-4 h-4" />
            Personal Projects
          </span>
        </div>
        
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Exploring New Technologies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm constantly learning and building new things. Here are some of my personal projects.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-100 rounded-full p-1">
            <button 
              className={`px-6 py-2 rounded-full text-sm font-medium ${activeTab === 'all' ? 'bg-white shadow-sm' : 'text-gray-600 hover:text-gray-800'}`}
              onClick={() => setActiveTab('all')}
            >
              All Projects
            </button>
            <button 
              className={`px-6 py-2 rounded-full text-sm font-medium ${activeTab === 'web' ? 'bg-white shadow-sm' : 'text-gray-600 hover:text-gray-800'}`}
              onClick={() => setActiveTab('web')}
            >
              Web Apps
            </button>
            <button 
              className={`px-6 py-2 rounded-full text-sm font-medium ${activeTab === 'mobile' ? 'bg-white shadow-sm' : 'text-gray-600 hover:text-gray-800'}`}
              onClick={() => setActiveTab('mobile')}
            >
              Mobile Apps
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {filteredProjects.map((project, index) => (
            <div key={index} className="bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm">
              <div className="h-48 bg-gray-100 flex items-center justify-center">
                {/* Placeholder for project image */}
                <div className="p-6 bg-gray-200 rounded-full">
                  <ExternalLink className="w-8 h-8 text-gray-400" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, idx) => (
                    <Badge key={idx} variant="secondary" className="bg-gray-100 text-gray-600">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <Button variant="outline" className="flex items-center gap-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white rounded-md">
                  View Project
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonalProjectsSection;
