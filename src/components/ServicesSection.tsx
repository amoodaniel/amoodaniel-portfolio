
import React from 'react';
import { Code, Laptop, Users, Globe } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    icon: <Code className="w-12 h-12 text-humanitarian-primary" />,
    title: "Custom Software Development",
    description: "Tailored software solutions designed to address specific humanitarian challenges, from data collection to resource management."
  },
  {
    icon: <Laptop className="w-12 h-12 text-humanitarian-primary" />,
    title: "Tech Strategy Consulting",
    description: "Strategic guidance to help organizations leverage technology effectively, maximize impact, and optimize resource allocation."
  },
  {
    icon: <Users className="w-12 h-12 text-humanitarian-primary" />,
    title: "Training & Capacity Building",
    description: "Equipping teams with the technical skills and knowledge needed to maintain and evolve their technology solutions."
  },
  {
    icon: <Globe className="w-12 h-12 text-humanitarian-primary" />,
    title: "Global Tech Implementation",
    description: "Experience deploying solutions in challenging environments with limited connectivity and diverse cultural contexts."
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-humanitarian-dark">
            Specialized <span className="text-humanitarian-primary">Services</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Expertise in developing technology solutions specifically designed for the unique challenges faced by humanitarian organizations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border border-gray-100">
              <CardHeader className="text-center pb-2">
                <div className="mx-auto mb-4">{service.icon}</div>
                <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
