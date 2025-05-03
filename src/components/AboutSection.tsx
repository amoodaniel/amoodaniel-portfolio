
import React from 'react';
import { Award, Briefcase, Globe } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <div>
            <p className="text-sm uppercase tracking-wider text-gray-500 font-medium mb-3">
              ABOUT OUR MISSION
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Technology that <span className="relative">
                empowers
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-red-400"></span>
              </span> humanitarian action
            </h2>
            
            <p className="text-xl text-gray-600 mb-6">
              We're a team of technologists passionate about creating digital solutions that address the unique challenges faced by humanitarian organizations around the world.
            </p>
            
            <p className="text-gray-600 mb-6">
              Our experience spans conflict zones, refugee settlements, natural disasters, and development contexts across five continents. We understand the technical, operational, and ethical complexities of deploying technology in humanitarian settings.
            </p>
            
            <p className="text-gray-600">
              We're committed to building solutions that are sustainable, accessible, and designed with the needs of both humanitarian workers and affected communities at the center.
            </p>
            
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-center">
                <Globe className="w-8 h-8 text-gray-900 mr-3" />
                <div>
                  <p className="font-bold text-2xl text-gray-900">43+</p>
                  <p className="text-gray-600">Countries</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Briefcase className="w-8 h-8 text-gray-900 mr-3" />
                <div>
                  <p className="font-bold text-2xl text-gray-900">87+</p>
                  <p className="text-gray-600">Projects</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Award className="w-8 h-8 text-gray-900 mr-3" />
                <div>
                  <p className="font-bold text-2xl text-gray-900">12+</p>
                  <p className="text-gray-600">Years Experience</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=900" 
                alt="Humanitarian Tech Team" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-lg max-w-xs">
              <p className="text-gray-900 font-bold">
                "Technology should amplify human capacity, not replace it."
              </p>
            </div>
            <div className="absolute -top-12 -left-12 w-24 h-24 rounded-full bg-red-400 opacity-80"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
