
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { title: 'Services', href: '#services' },
    { title: 'Projects', href: '#projects' },
    { title: 'Content', href: '#content' },
    { title: 'About', href: '#about' },
  ];

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex-shrink-0 font-bold text-xl md:text-2xl text-humanitarian-dark">
            <a href="#" className="flex items-center gap-2">
              <span className="text-humanitarian-primary">Tech</span>Impact
            </a>
          </div>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="text-gray-700 hover:text-humanitarian-primary font-medium transition-colors"
              >
                {link.title}
              </a>
            ))}
            <Button className="bg-humanitarian-primary hover:bg-humanitarian-secondary">
              <a href="#contact">Get in Touch</a>
            </Button>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-humanitarian-primary focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-gray-700 hover:text-humanitarian-primary font-medium py-2"
              >
                {link.title}
              </a>
            ))}
            <Button 
              className="w-full bg-humanitarian-primary hover:bg-humanitarian-secondary mt-3"
              onClick={() => setIsOpen(false)}
            >
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
