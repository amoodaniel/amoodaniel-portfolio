
import React, { useState } from 'react';
import { ExternalLink, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const PersonalProjectsSection = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  const projects = [
    {
      title: "Sales-Analysis-with-Pyspark",
      description: "A project analyzing sales data using PySpark's distributed processing for scalable data analytics.",
      image: "placeholder.svg",
      tags: ["Jupyter Notebook", "PySpark"],
      category: "data",
      link: "https://github.com/amoodaniel/Sales-Analysis-with-Pyspark"
    },
    {
      title: "LLM-hiring-system-analysis",
      description: "An exploration of hiring systems using LLMs, potentially examining bias, performance, and fairness in AI-driven recruitment tools.",
      image: "placeholder.svg",
      tags: ["Jupyter Notebook"],
      category: "ai",
      link: "https://github.com/amoodaniel/LLM-hiring-system-analysis"
    },
    {
      title: "AI-PDF-summarizer",
      description: "An AI tool for extracting and summarizing content from PDF documents, making large texts easier to digest.",
      image: "placeholder.svg",
      tags: ["Python"],
      category: "ai",
      link: "https://github.com/amoodaniel/AI-PDF-summarizer"
    },
    {
      title: "Python-crash-course",
      description: "Practical code samples and exercises based on the \"Python Crash Course\" book for hands-on learning.",
      image: "placeholder.svg",
      tags: ["Python"],
      category: "learning",
      link: "https://github.com/amoodaniel/Python-crash-course"
    },
    {
      title: "Data-Analysis-with-Pandas",
      description: "Demonstrates various data wrangling and analysis techniques using the Pandas library.",
      image: "placeholder.svg",
      tags: ["Python", "Pandas", "Jupyter Notebook"],
      category: "data",
      link: "https://github.com/amoodaniel/Data-Analysis-with-Pandas"
    },
    {
      title: "Machine-Learning-Projects",
      description: "Contains different machine learning experiments with model training, evaluation, and comparison.",
      image: "placeholder.svg",
      tags: ["Python", "Scikit-learn"],
      category: "ai",
      link: "https://github.com/amoodaniel/Machine-Learning-Projects"
    },
    {
      title: "Web-Scraping-Examples",
      description: "A variety of scripts for scraping and extracting structured data from web pages.",
      image: "placeholder.svg",
      tags: ["Python", "BeautifulSoup", "Requests"],
      category: "web",
      link: "https://github.com/amoodaniel/Web-Scraping-Examples"
    },
    {
      title: "Django-Blog-Application",
      description: "A fully functional blog site with user authentication, post creation/editing, and dynamic views.",
      image: "placeholder.svg",
      tags: ["Python", "Django"],
      category: "web",
      link: "https://github.com/amoodaniel/Django-Blog-Application"
    },
    {
      title: "JavaScript-Game-Projects",
      description: "Fun browser games built to practice and showcase JavaScript fundamentals and DOM manipulation.",
      image: "placeholder.svg",
      tags: ["JavaScript", "HTML", "CSS"],
      category: "web",
      link: "https://github.com/amoodaniel/JavaScript-Game-Projects"
    },
    {
      title: "Portfolio-Website",
      description: "A personal site built to highlight professional experience, projects, and contact details.",
      image: "placeholder.svg",
      tags: ["HTML", "CSS", "JavaScript"],
      category: "web",
      link: "https://github.com/amoodaniel/Portfolio-Website"
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
