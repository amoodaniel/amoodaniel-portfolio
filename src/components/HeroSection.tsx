
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="hero" className="relative py-24 lg:py-32 min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gray-50 z-0" aria-hidden="true" />
      
      {/* Background circles */}
      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-300 opacity-20 blur-xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-green-300 opacity-20 blur-xl animate-pulse" style={{
          animationDelay: '1s'
        }} />
        <div className="absolute top-3/4 left-1/2 w-80 h-80 rounded-full bg-red-300 opacity-20 blur-xl animate-pulse" style={{
          animationDelay: '2s'
        }} />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block mb-6">
            <Button variant="outline" className="text-gray-600 border border-gray-300 rounded-full text-sm font-medium">
              Tech Consultant
            </Button>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
            I help organizations <br className="hidden md:block" />
            amplify their impact <br className="hidden md:block" /> 
            through <span className="relative inline-flex items-center">
              smart
              <span className="flex absolute -right-14 top-1/2 -translate-y-1/2 md:translate-y-0 md:relative md:inline-flex md:ml-6 md:mr-4 md:top-0">
                
                
                
              </span>
            </span>, user-focused technology.
          </h1>
          
          <p className="mt-8 text-xl text-gray-600 max-w-3xl mx-auto">
            Let's transform your organization's humanitarian mission through innovative tech.
          </p>
          
          <div className="mt-12 flex justify-center">
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
