import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const handleBookCall = () => {
    window.open('https://cal.com/danielamoo/30min', '_blank');
  };

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
            <span
              className="inline-block border border-gray-300 bg-white text-gray-800 rounded-full px-6 py-2 text-base font-medium shadow-sm cursor-pointer hover:bg-gray-100 transition"
              style={{ userSelect: 'none' }}
            >
              Tech Consultant
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            <span className="block md:whitespace-nowrap">
              I build innovative, user-first tools
            </span>
            <span className="block">
              that empower organizations
            </span>
            <span className="block">
              to amplify their impact
            </span>
          </h1>
          
          <p className="mt-8 text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your organization's humanitarian mission through innovative tech?
          </p>
          
          <div className="mt-12 flex justify-center">
            <Button 
              className="bg-black hover:bg-gray-800 text-white rounded-md py-6 px-8 text-lg flex items-center gap-2 shadow-md"
              onClick={handleBookCall}
            >
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
