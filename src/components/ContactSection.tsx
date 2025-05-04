
import React from 'react';
import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:danielamoo35@gmail.com';
  };
  
  const handleScheduleClick = () => {
    window.open('https://cal.com/danielamoo/30min', '_blank');
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Let's Work Together
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Ready to enhance your organization's impact through 
              technology? I'm available for consulting projects, speaking 
              engagements, and strategic partnerships. Let's discuss how I can 
              help you achieve your goals.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              variant="default" 
              className="bg-black hover:bg-gray-800 text-white rounded-md py-6 flex items-center justify-center gap-2"
              onClick={handleEmailClick}
            >
              <Mail className="h-5 w-5" />
              <span>Email Me</span>
            </Button>
            
            <Button
              variant="outline"
              className="border-gray-300 text-gray-800 hover:bg-gray-100 rounded-md py-6"
              onClick={handleScheduleClick}
            >
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
