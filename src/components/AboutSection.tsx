
import React from 'react';
import { Award, Briefcase, Star } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 lg:py-24 bg-humanitarian-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-humanitarian-dark mb-8">
              About <span className="text-humanitarian-primary">Me</span>
            </h2>
            
            <p className="text-lg text-gray-700 mb-6">
              I'm a technology consultant with over 10 years of experience building innovative solutions specifically designed for humanitarian organizations around the world.
            </p>
            
            <p className="text-lg text-gray-700 mb-6">
              My journey began as a software developer at a major international NGO, where I witnessed firsthand the challenges of implementing technology in resource-constrained environments. Today, I work with organizations of all sizes to create tech solutions that make a meaningful impact.
            </p>
            
            <p className="text-lg text-gray-700">
              I'm passionate about open-source technologies, user-centered design, and building sustainable solutions that can be maintained and scaled by local teams. When I'm not working with clients, I create educational content to share knowledge and inspire others in the humanitarian tech community.
            </p>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center">
                <Briefcase className="w-8 h-8 text-humanitarian-primary mr-3" />
                <div>
                  <p className="font-bold text-2xl text-humanitarian-dark">10+</p>
                  <p className="text-gray-600">Years Experience</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Star className="w-8 h-8 text-humanitarian-primary mr-3" />
                <div>
                  <p className="font-bold text-2xl text-humanitarian-dark">30+</p>
                  <p className="text-gray-600">Projects Delivered</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Award className="w-8 h-8 text-humanitarian-primary mr-3" />
                <div>
                  <p className="font-bold text-2xl text-humanitarian-dark">15+</p>
                  <p className="text-gray-600">Countries Served</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=900" 
                alt="Tech Consultant" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-lg shadow-lg">
              <p className="text-humanitarian-primary font-bold">
                "Technology should serve humanity, not the other way around."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
