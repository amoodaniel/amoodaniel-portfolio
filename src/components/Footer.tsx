import React from 'react';
import { Linkedin, Twitter, Youtube, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-humanitarian-dark text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          <div>
            <h3 className="font-bold text-xl mb-4 flex items-center">
              <span className="text-humanitarian-primary">Amoo</span> Daniel
            </h3>
            <p className="text-gray-300 mb-6">
              Building technology solutions for humanitarian impact. Let's create positive change together.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-humanitarian-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-humanitarian-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-humanitarian-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-humanitarian-primary transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-300 hover:text-humanitarian-primary transition-colors">Services</a></li>
              <li><a href="#projects" className="text-gray-300 hover:text-humanitarian-primary transition-colors">Projects</a></li>
              <li><a href="#content" className="text-gray-300 hover:text-humanitarian-primary transition-colors">Content</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-humanitarian-primary transition-colors">About</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-humanitarian-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to receive updates on humanitarian tech trends and insights.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 bg-gray-700 text-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-humanitarian-primary flex-1"
              />
              <button 
                type="submit" 
                className="bg-humanitarian-primary hover:bg-humanitarian-secondary px-4 py-2 rounded-r-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Amoo Daniel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
