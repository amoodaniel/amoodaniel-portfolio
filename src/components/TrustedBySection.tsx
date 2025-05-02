
import React from 'react';

const TrustedBySection = () => {
  const partners = [
    { name: "Airbnb", logo: "/lovable-uploads/3ff4b181-cb87-4f68-8db6-3ea0c51d88e9.png", width: 120 },
    { name: "Google", logo: "/lovable-uploads/3ff4b181-cb87-4f68-8db6-3ea0c51d88e9.png", width: 120 },
    { name: "Slack", logo: "/lovable-uploads/3ff4b181-cb87-4f68-8db6-3ea0c51d88e9.png", width: 120 },
    { name: "YouTube", logo: "/lovable-uploads/3ff4b181-cb87-4f68-8db6-3ea0c51d88e9.png", width: 140 },
    { name: "CVS Pharmacy", logo: "/lovable-uploads/3ff4b181-cb87-4f68-8db6-3ea0c51d88e9.png", width: 160 }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-sm uppercase tracking-wider text-gray-500 font-medium">
            TRUSTED BY THESE COMPANY ON THE RISE:
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {partners.map((partner, index) => (
            <div key={index} className="opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <img 
                src={partner.logo} 
                alt={`${partner.name} logo`} 
                className="h-8 w-auto"
                style={{ maxWidth: partner.width }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
