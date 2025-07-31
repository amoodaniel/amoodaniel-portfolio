import React, { useState } from 'react';
import { ExternalLink, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const PersonalProjectsSection = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  const projects = [
    {
      title: "Scheme Royal Limited Website",
      description: "A professional corporate website for Scheme Royal Limited, featuring modern design and user-friendly navigation. Built with WordPress and enhanced with custom HTML/CSS styling and Elementor page builder for optimal performance and visual appeal.",
      image: "/lovable-uploads/9d6435a7-ae28-43d7-b0e2-64d975d4dece.png",
      tags: ["WordPress", "HTML", "CSS", "Elementor"],
      category: "web",
      link: "#"
    },
    {
      title: "Invoice Nomad",
      description: "Invoice-Nomad is a web-based invoicing application designed to help freelancers and small businesses generate, manage, and track invoices efficiently.",
      image: "/lovable-uploads/invoicenomad.png",
      tags: ["Vite", "TypeScript", "React", "shadcn-ui", "Tailwind CSS"],
      category: "web",
      link: "https://invoicenomad.com"
    },
    {
      title: "LLM Hiring System Analysis",
      description: "Made an indepth analysis of the Pariti LLM hiring model. My analysis revealed the most common applicants country, the populated hiring stage, the most sought after job, and how the llm performs in filtering qualified candidates for the job.",
      image: "/lovable-uploads/pariti.png",
      tags: ["Python", "Data Analysis", "LLM"],
      category: "data",
      link: "https://github.com/amoodaniel/LLM-hiring-system-analysis"
    },
    {
      title: "Recommendation-system-using-twitter-data",
      description: "This project focuses on developing an intelligent recommender system by integrating collaborative filtering with social network analysis (SNA) using Twitter data.",
      image: "/lovable-uploads/recommend.webp",
      tags: ["Python", "NetworkX", "Pandas", "Scikit-learn", "Twitter API"],
      category: "ai",
      link: "https://github.com/amoodaniel/Recommendation-system-using-twitter-data"
    },
    {
      title: "Portfolio-Website",
      description: "A personal site built to highlight professional experience, projects, and contact details.",
      image: "/lovable-uploads/portfolio.png",
      tags: ["HTML", "CSS", "JavaScript"],
      category: "web",
      link: "https://github.com/amoodaniel/amoodaniel-portfolio"
    },
    {
      title: "Sales-Analysis-with-Pyspark",
      description: "A project analyzing sales data using PySpark's distributed processing for scalable data analytics.",
      image: "/lovable-uploads/pyspark_sales_logo.jpg",
      tags: ["Jupyter Notebook", "PySpark"],
      category: "data",
      link: "https://github.com/amoodaniel/Sales-Analysis-with-Pyspark"
    },
    {
      title: "AI-PDF-summarizer",
      description: "An AI tool for extracting and summarizing content from PDF documents, making large texts easier to digest.",
      image: "/lovable-uploads/AI-summ.png",
      tags: ["Python"],
      category: "ai",
      link: "https://github.com/amoodaniel/AI-PDF-summarizer"
    }
  ];

  // Update category filter to include data, ai, and learning categories
  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeTab);

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
              Web Dev
            </button>
            <button 
              className={`px-6 py-2 rounded-full text-sm font-medium ${activeTab === 'data' ? 'bg-white shadow-sm' : 'text-gray-600 hover:text-gray-800'}`}
              onClick={() => setActiveTab('data')}
            >
              Data Analysis
            </button>
            <button 
              className={`px-6 py-2 rounded-full text-sm font-medium ${activeTab === 'ai' ? 'bg-white shadow-sm' : 'text-gray-600 hover:text-gray-800'}`}
              onClick={() => setActiveTab('ai')}
            >
              AI/ML
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {filteredProjects.map((project, index) => (
            <div key={index} className="bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm">
              <div className="h-48 bg-gray-100 flex items-center justify-center">
                {/* Project image */}
                <img src={project.image} alt={project.title} className="object-cover h-full w-full" />
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
                
                <Button 
                  variant="outline" 
                  className="flex items-center gap-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white rounded-md"
                  onClick={() => window.open(project.link, '_blank')}
                >
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
