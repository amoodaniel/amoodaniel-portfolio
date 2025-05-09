
import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NewsItem {
  title: string;
  url: string;
  description: string;
}

interface ProjectNewsProps {
  newsItems: NewsItem[];
}

const ProjectNews = ({ newsItems }: ProjectNewsProps) => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Project in the News
          </h2>
          
          <div className="space-y-6">
            {newsItems.map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-700 mb-4">{item.description}</p>
                <Button 
                  variant="outline" 
                  className="flex items-center gap-2"
                  onClick={() => window.open(item.url, '_blank')}
                >
                  Read Article
                  <ExternalLink size={16} />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectNews;
