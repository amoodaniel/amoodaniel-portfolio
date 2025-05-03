
import React from 'react';
import { Mail, Phone, MapPin, MessageSquare, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. We'll get back to you soon.",
    });
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <p className="text-sm uppercase tracking-wider text-gray-500 font-medium mb-3">
            GET IN TOUCH
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Let's create impact <br className="hidden md:block" />
            together
          </h2>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your humanitarian operations with technology? We're here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          <div className="lg:col-span-2 space-y-10">
            <div className="flex items-start">
              <div className="bg-white p-3 rounded-full shadow-md mr-4">
                <Mail className="text-gray-900 h-6 w-6" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-1">Email</h3>
                <p className="text-gray-600">hello@humanitariantech.org</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-white p-3 rounded-full shadow-md mr-4">
                <Phone className="text-gray-900 h-6 w-6" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-1">Phone</h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-white p-3 rounded-full shadow-md mr-4">
                <MapPin className="text-gray-900 h-6 w-6" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-1">Location</h3>
                <p className="text-gray-600">Geneva, Switzerland (Global Operations)</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-white p-3 rounded-full shadow-md mr-4">
                <MessageSquare className="text-gray-900 h-6 w-6" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-1">Consultation</h3>
                <p className="text-gray-600">Book a free 45-minute consultation</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 bg-white p-10 rounded-3xl shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <Input required placeholder="Your name" className="w-full rounded-xl" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <Input required type="email" placeholder="your.email@example.com" className="w-full rounded-xl" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Organization</label>
                <Input placeholder="Your organization" className="w-full rounded-xl" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <Textarea 
                  required 
                  placeholder="Tell us about your project or inquiry..."
                  className="w-full min-h-[150px] rounded-xl"
                />
              </div>
              
              <Button type="submit" className="w-full bg-gray-900 hover:bg-gray-800 text-white rounded-full py-6 flex items-center justify-center gap-2">
                <span>Send Message</span>
                <ArrowRight size={20} />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
