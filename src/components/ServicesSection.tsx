
import React from 'react';
import { BookOpen, Shield, Info } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ServicesSection = () => {
  const services = [
    {
      icon: <BookOpen className="w-6 h-6 text-gray-800" />,
      title: "Strategic Technology Planning",
      description: "Develop comprehensive technology strategies aligned with your organization's mission and goals. I help you identify the right technologies and create roadmaps for implementation.",
    },
    {
      icon: <Shield className="w-6 h-6 text-gray-800" />,
      title: "Custom Solution Development",
      description: "Design and build tailored technology solutions for your specific humanitarian challenges. From mobile apps to data platforms, I create tools that drive impact.",
    },
    {
      icon: <Info className="w-6 h-6 text-gray-800" />,
      title: "Technology Training & Capacity Building",
      description: "Empower your team with the skills they need to leverage technology effectively. I provide customized training programs and workshops tailored to your organization's needs.",
    }
  ];

  return (
    <section id="services" className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center mb-8 animate-fade-in">
          <p className="text-sm uppercase tracking-wider text-gray-500 font-medium mb-3">
            Consulting Services
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            How I Can Help Your Organization
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            I offer specialized consulting services to help humanitarian organizations leverage technology effectively.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-white border border-gray-100 rounded-lg shadow-sm overflow-hidden transform transition-all duration-300 hover:shadow-md"
              style={{
                opacity: 0,
                animation: 'fade-in 0.8s ease-out forwards',
                animationDelay: `${index * 0.2}s`,
                animationFillMode: 'forwards'
              }}
            >
              <CardContent className="pt-6 px-6">
                <div className="bg-gray-100 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
              <CardFooter className="px-6 py-4">
                <Button variant="ghost" className="text-gray-800 hover:text-black p-0 h-auto font-medium">
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button variant="default" className="bg-black hover:bg-gray-800 text-white px-6 py-6 rounded-md">
            Schedule a Consultation
            <span className="ml-2">→</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
