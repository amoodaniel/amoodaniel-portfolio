
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="hero" className="relative py-24 lg:py-32 min-h-[90vh] flex items-center">
      <div className="absolute inset-0 bg-gray-50 z-0" aria-hidden="true" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
            We help humanitarian <br className="hidden md:block" />
            organizations build impact <br className="hidden md:block" /> 
            with <span className="relative inline-flex items-center">
              technology
              <span className="flex absolute -right-14 top-1/2 -translate-y-1/2 md:translate-y-0 md:relative md:inline-flex md:ml-6 md:mr-4 md:top-0">
                <span className="w-12 h-12 rounded-full bg-red-400 opacity-90"></span>
                <span className="w-12 h-12 rounded-full bg-purple-400 opacity-90 -ml-6"></span>
                <span className="w-12 h-12 rounded-full bg-green-400 opacity-90 -ml-6"></span>
              </span>
            </span> solutions.
          </h1>
          
          <p className="mt-8 text-xl text-gray-600 max-w-3xl">
            Let's transform your organization's humanitarian mission through innovative tech.
          </p>
          
          <div className="mt-12">
            <Button className="bg-gray-900 hover:bg-gray-800 text-white rounded-full py-6 px-8 text-lg flex items-center gap-2 shadow-md">
              <span>Book an intro call</span>
              <ArrowRight size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
