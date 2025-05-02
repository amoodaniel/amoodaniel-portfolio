
import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    title: "Disaster Response Platform",
    description: "Real-time coordination platform for emergency response teams, deployed in 3 major humanitarian crises.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=900",
    tags: ["Emergency Response", "React", "Real-time Data"],
    link: "#"
  },
  {
    title: "Aid Distribution Tracker",
    description: "Mobile application for tracking aid distribution in remote areas with limited connectivity.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=900",
    tags: ["Mobile App", "Offline-first", "Data Visualization"],
    link: "#"
  },
  {
    title: "Community Health Monitoring",
    description: "Data collection and analysis system for community health workers in rural regions.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=900",
    tags: ["Healthcare", "Data Analysis", "React Native"],
    link: "#"
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 lg:py-24 bg-humanitarian-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-humanitarian-dark">
            Recent <span className="text-humanitarian-primary">Projects</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Innovative technology solutions designed and implemented for humanitarian organizations worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300 bg-white border-0">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag, idx) => (
                    <Badge key={idx} variant="secondary" className="bg-humanitarian-primary/10 text-humanitarian-primary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{project.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full border-humanitarian-primary text-humanitarian-primary hover:bg-humanitarian-primary hover:text-white">
                  <ExternalLink className="mr-2 h-4 w-4" /> View Project
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="border-humanitarian-primary text-humanitarian-primary hover:bg-humanitarian-primary hover:text-white">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
