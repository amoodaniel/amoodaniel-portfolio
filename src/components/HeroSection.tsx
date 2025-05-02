
import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="hero" className="relative pt-24 lg:pt-32 pb-16 lg:pb-24 overflow-hidden">
      <div 
        className="absolute inset-0 bg-gradient-to-br from-humanitarian-muted via-white to-humanitarian-muted opacity-80 z-0" 
        aria-hidden="true"
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-humanitarian-dark animate-fade-in">
            Technology Solutions for <span className="text-humanitarian-primary">Humanitarian Impact</span>
          </h1>
          
          <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto animate-slide-up">
            Building innovative tech products that help humanitarian organizations create positive change worldwide. Let's transform your mission through technology.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Button className="bg-humanitarian-primary hover:bg-humanitarian-secondary text-white py-6 px-8 rounded-md text-lg">
              <a href="#contact">Work With Me</a>
            </Button>
            <Button variant="outline" className="border-humanitarian-primary text-humanitarian-primary hover:bg-humanitarian-muted py-6 px-8 rounded-md text-lg">
              <a href="#projects">View Projects</a>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#services" className="text-humanitarian-primary hover:text-humanitarian-secondary transition-colors">
          <ChevronDown size={36} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
