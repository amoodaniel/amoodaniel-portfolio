import React from 'react';
import { Video, FileText, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ContentSection = () => {
  const contentItems = [
    {
      title: "Tech for Good Series",
      type: "YouTube Channel",
      description: "Weekly videos exploring how technology can be used to address humanitarian challenges.",
      icon: <Video className="w-5 h-5" />,
      buttonText: "Watch Videos",
      link: "https://www.youtube.com/@amoodaniel",
      image: '/lovable-uploads/video.JPG'
    },
    {
      title: "Tech Blog",
      type: "Medium Publication",
      description: "In-depth articles about technology implementation in humanitarian contexts.",
      icon: <FileText className="w-5 h-5" />,
      buttonText: "Read Articles",
      link: "https://amoodaniel.medium.com/list/amoos-tech-articles-0bccbf7a8830",
      image: '/lovable-uploads/Blog.jpeg'
    }
  ];

  return (
    <section id="content" className="py-24 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <span className="text-sm uppercase tracking-wider text-gray-500 font-medium">
            Content Creation
          </span>
        </div>
        
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Sharing Knowledge & Experiences
          </h2>
          <p className="text-xl text-gray-600">
            I create content about technology, humanitarian work, and my journey as an entrepreneur.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {contentItems.map((item, index) => (
            <Card key={index} className="bg-white border border-gray-100 rounded-lg shadow-sm overflow-hidden">
              <div className="h-48 bg-gray-100 flex items-center justify-center overflow-hidden relative">
                {item.title === 'Tech for Good Series' ? (
                  <>
                    <img src="/lovable-uploads/video.JPG" alt="Tech for Good Series" className="object-cover w-full h-full" />
                    <span className="absolute inset-0 flex items-center justify-center">
                      <span className="bg-white bg-opacity-80 rounded-full p-3 shadow-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-red-600" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.2"/><polygon points="10,8 16,12 10,16" fill="currentColor"/></svg>
                      </span>
                    </span>
                  </>
                ) : item.title === 'Tech Blog' ? (
                  <img src="/lovable-uploads/Blog2.JPG" alt="Tech Blog" className="object-cover w-full h-full" />
                ) : (
                <div className="p-4 bg-gray-200 rounded-full">
                  {item.icon}
                </div>
                )}
              </div>
              <CardContent className="pt-6 px-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-500 mb-3">{item.type}</p>
                <p className="text-gray-600">{item.description}</p>
              </CardContent>
              <CardFooter className="px-6 py-4">
                <Button 
                  variant="ghost" 
                  className="text-gray-800 hover:text-black flex items-center gap-2 p-0 h-auto"
                  onClick={() => window.open(item.link, '_blank')}
                >
                  {item.buttonText}
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
