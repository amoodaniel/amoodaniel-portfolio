
import React from 'react';
import { LayoutGrid, Rocket, Brush } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <LayoutGrid className="w-10 h-10 text-gray-900" />,
      title: "User Experience Design",
      description: "Creating intuitive digital experiences that center human needs and drive meaningful engagement in humanitarian contexts."
    },
    {
      icon: <Rocket className="w-10 h-10 text-gray-900" />,
      title: "Technical Strategy",
      description: "Developing comprehensive technology roadmaps that align with humanitarian goals and maximize impact with limited resources."
    },
    {
      icon: <Brush className="w-10 h-10 text-gray-900" />,
      title: "Solution Architecture",
      description: "Building resilient technology frameworks that function reliably in challenging environments with limited connectivity."
    }
  ];

  return (
    <section id="services" className="py-24 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center mb-16 lg:mb-24">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-start">
              <div className="bg-white p-4 rounded-full shadow-sm mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
