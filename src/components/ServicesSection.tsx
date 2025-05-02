
import React from 'react';
import { LayoutGrid, Rocket, Brush } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <LayoutGrid className="w-10 h-10 text-blue-500" />,
      title: "UI/UX design",
      description: "Crafting user-centered digital experiences with intuitive interfaces and seamless interactions."
    },
    {
      icon: <Rocket className="w-10 h-10 text-blue-500" />,
      title: "Logo & branding",
      description: "Creating memorable logos and comprehensive branding strategies that reflect a brand's identity and values."
    },
    {
      icon: <Brush className="w-10 h-10 text-blue-500" />,
      title: "2D & 3D illustration",
      description: "Bringing concepts to life through vibrant 2D and 3D illustrations, adding creativity to visual storytelling."
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-blue-500 uppercase tracking-wide font-medium mb-2">I'M READY TO ASSIST!</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Offer a range of services to <br />
            elevate your projects
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-14 gap-x-8">
          {services.map((service, index) => (
            <div key={index} className={`flex gap-6 ${index === 2 ? 'lg:col-span-2 lg:max-w-2xl lg:mx-auto' : ''}`}>
              <div className="flex-shrink-0 mt-1">
                {service.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
