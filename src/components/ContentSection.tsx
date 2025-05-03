
import React from 'react';
import { Calendar, Video, FileText, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const contentItems = [
  {
    type: 'article',
    icon: <FileText className="w-5 h-5 text-gray-900" />,
    title: "Technology Solutions for Resource-Limited Settings",
    excerpt: "How to design and implement effective tech solutions in environments with connectivity and infrastructure challenges.",
    date: "May 15, 2025",
    link: "#"
  },
  {
    type: 'video',
    icon: <Video className="w-5 h-5 text-gray-900" />,
    title: "Digital Transformation in Humanitarian Response",
    excerpt: "A comprehensive overview of how technology is revolutionizing the effectiveness of humanitarian operations.",
    date: "April 3, 2025",
    link: "#"
  },
  {
    type: 'article',
    icon: <FileText className="w-5 h-5 text-gray-900" />,
    title: "Ethical Data Collection in Vulnerable Communities",
    excerpt: "Best practices for responsible data handling when working with vulnerable populations in crisis settings.",
    date: "March 22, 2025",
    link: "#"
  }
];

const ContentSection = () => {
  return (
    <section id="content" className="py-24 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center mb-16 lg:mb-24">
          <p className="text-sm uppercase tracking-wider text-gray-500 font-medium mb-3">
            INSIGHTS & KNOWLEDGE
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Explore our <br className="hidden md:block" />
            latest thinking
          </h2>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Insights and perspectives on humanitarian technology from our team of experts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {contentItems.map((item, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
              <CardHeader>
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center text-sm text-gray-600">
                    {item.icon}
                    <span className="ml-2 capitalize">{item.type}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-1" />
                    {item.date}
                  </div>
                </div>
                <CardTitle className="text-xl text-gray-900">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{item.excerpt}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full text-gray-900 hover:bg-gray-100 group">
                  <span>Read More</span>
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-gray-900 hover:bg-gray-800 text-white rounded-full py-6 px-8 text-lg">
            View All Content
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
