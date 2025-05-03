
import React from 'react';
import { LightbulbIcon, Code, Bot, Database } from 'lucide-react';
import { cn } from '@/lib/utils';

const ServicesSection = () => {
  const services = [
    {
      icon: <LightbulbIcon className="w-10 h-10 text-gray-900" />,
      title: "Digital Strategy & Innovation Consulting",
      description: "Guiding organizations through digital transformation with tailored strategies that align technology solutions with humanitarian mission objectives."
    },
    {
      icon: <Code className="w-10 h-10 text-gray-900" />,
      title: "Web Design & Development",
      description: "Creating intuitive, accessible, and responsive web platforms that enhance user engagement and effectively communicate your organization's impact."
    },
    {
      icon: <Bot className="w-10 h-10 text-gray-900" />,
      title: "Chatbot & Automation Solutions",
      description: "Developing intelligent conversation systems and workflow automation tools that improve service delivery and operational efficiency."
    },
    {
      icon: <Database className="w-10 h-10 text-gray-900" />,
      title: "Data & Impact Reporting",
      description: "Building comprehensive data collection frameworks and visualization tools that demonstrate program effectiveness and inform decision-making."
    }
  ];

  return (
    <section id="services" className="py-24 lg:py-32 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center mb-16 lg:mb-24 animate-fade-in">
          <p className="text-sm uppercase tracking-wider text-gray-500 font-medium mb-3">
            OUR EXPERTISE
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Technical solutions for <br className="hidden md:block" />
            humanitarian challenges
          </h2>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            We specialize in creating technology that works in the most challenging contexts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={cn(
                "flex flex-col items-start p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1",
                "opacity-0 animate-fade-in",
                {
                  "animation-delay-100": index === 0,
                  "animation-delay-300": index === 1,
                  "animation-delay-500": index === 2,
                  "animation-delay-700": index === 3,
                }
              )}
              style={{
                animationFillMode: 'forwards',
                animationDelay: `${index * 200}ms`
              }}
            >
              <div className="bg-gray-50 p-4 rounded-full mb-6 transform transition-transform duration-300 hover:scale-110">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
