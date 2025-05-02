
import React from 'react';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';
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
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-humanitarian-dark">
            Get in <span className="text-humanitarian-primary">Touch</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Interested in working together? I'd love to hear about your project and explore how we can create impact.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-start">
              <div className="bg-humanitarian-primary/10 p-3 rounded-full mr-4">
                <Mail className="text-humanitarian-primary h-6 w-6" />
              </div>
              <div>
                <h3 className="font-medium text-humanitarian-dark mb-1">Email</h3>
                <p className="text-gray-600">contact@techimpact.org</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-humanitarian-primary/10 p-3 rounded-full mr-4">
                <Phone className="text-humanitarian-primary h-6 w-6" />
              </div>
              <div>
                <h3 className="font-medium text-humanitarian-dark mb-1">Phone</h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-humanitarian-primary/10 p-3 rounded-full mr-4">
                <MapPin className="text-humanitarian-primary h-6 w-6" />
              </div>
              <div>
                <h3 className="font-medium text-humanitarian-dark mb-1">Location</h3>
                <p className="text-gray-600">New York, NY (Available Globally)</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-humanitarian-primary/10 p-3 rounded-full mr-4">
                <MessageSquare className="text-humanitarian-primary h-6 w-6" />
              </div>
              <div>
                <h3 className="font-medium text-humanitarian-dark mb-1">Consultation</h3>
                <p className="text-gray-600">Book a free 30-minute consultation</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <Input required placeholder="Your name" className="w-full" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <Input required type="email" placeholder="your.email@example.com" className="w-full" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Organization</label>
                <Input placeholder="Your organization (optional)" className="w-full" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <Textarea 
                  required 
                  placeholder="Tell me about your project or inquiry..."
                  className="w-full min-h-[150px]"
                />
              </div>
              
              <Button type="submit" className="w-full bg-humanitarian-primary hover:bg-humanitarian-secondary text-white py-6">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
