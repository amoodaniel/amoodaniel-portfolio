
import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    title: "Refugee Resource Platform",
    description: "Centralized information system for displaced populations to access critical services and resources.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=900",
    tags: ["Resource Mapping", "React", "Offline-first"],
    link: "#"
  },
  {
    title: "Field Data Collection",
    description: "Mobile solution for humanitarian workers to gather and analyze data in remote areas with limited connectivity.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=900",
    tags: ["Mobile App", "Data Collection", "Analytics"],
    link: "#"
  },
  {
    title: "Crisis Response Coordination",
    description: "Real-time coordination platform connecting frontline responders with headquarter operations during emergencies.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=900",
    tags: ["Emergency Response", "Real-time", "Communication"],
    link: "#"
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center mb-16 lg:mb-24">
          <p className="text-sm uppercase tracking-wider text-gray-500 font-medium mb-3">
            CASE STUDIES
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            See our work <br className="hidden md:block" />
            in action
          </h2>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Real solutions delivering measurable impact for humanitarian organizations worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden border-0 shadow-lg transition-all duration-300 bg-white hover:shadow-xl">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag, idx) => (
                    <Badge key={idx} variant="secondary" className="bg-gray-100 text-gray-600 font-medium">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{project.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white rounded-full">
                  <ExternalLink className="mr-2 h-4 w-4" /> View Case Study
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-gray-900 hover:bg-gray-800 text-white rounded-full py-6 px-8 text-lg">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
