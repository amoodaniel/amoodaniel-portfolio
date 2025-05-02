
import React from 'react';
import { Calendar, Video, FileText } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const contentItems = [
  {
    type: 'article',
    icon: <FileText className="w-5 h-5 text-humanitarian-primary" />,
    title: "Building Tech for Low-Resource Environments",
    excerpt: "Strategies and best practices for developing technology solutions that work effectively in areas with limited infrastructure.",
    date: "May 15, 2025",
    link: "#"
  },
  {
    type: 'video',
    icon: <Video className="w-5 h-5 text-red-500" />,
    title: "Tech Solutions for Disaster Response",
    excerpt: "A comprehensive overview of how technology can enhance the effectiveness of disaster response efforts.",
    date: "April 3, 2025",
    link: "#"
  },
  {
    type: 'article',
    icon: <FileText className="w-5 h-5 text-humanitarian-primary" />,
    title: "Data Privacy in Humanitarian Tech",
    excerpt: "Exploring the ethical considerations and best practices for handling sensitive data in humanitarian contexts.",
    date: "March 22, 2025",
    link: "#"
  }
];

const ContentSection = () => {
  return (
    <section id="content" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-humanitarian-dark">
            Thought <span className="text-humanitarian-primary">Leadership</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Insights, analysis, and knowledge-sharing on humanitarian technology and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contentItems.map((item, index) => (
            <Card key={index} className="border border-gray-100 hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center text-sm text-gray-500">
                    {item.icon}
                    <span className="ml-2 capitalize">{item.type}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-1" />
                    {item.date}
                  </div>
                </div>
                <CardTitle className="text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{item.excerpt}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full text-humanitarian-primary hover:bg-humanitarian-primary/10">
                  Read More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="border-humanitarian-primary text-humanitarian-primary hover:bg-humanitarian-primary hover:text-white">
            View All Content
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
