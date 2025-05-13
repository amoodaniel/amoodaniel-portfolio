import React from 'react';

const partners = [
  { name: "Second Tree", logo: "/lovable-uploads/fe40ce14-8ace-4394-819d-7c99107ce700.png", width: 140 },
  { name: "UNHCR", logo: "/lovable-uploads/ce79e40e-8a3d-49fd-bdc0-96c965d6c09a.png", width: 180 },
  { name: "IsraAID", logo: "/lovable-uploads/1c7679f1-48e2-48c7-bece-661f9b6422ae.png", width: 160 },
  { name: "Global Protection Cluster", logo: "/lovable-uploads/global-protection-cluster.png", width: 180 },
  { name: "Second Tree", logo: "/lovable-uploads/fe40ce14-8ace-4394-819d-7c99107ce700.png", width: 140 },
  { name: "UNHCR", logo: "/lovable-uploads/ce79e40e-8a3d-49fd-bdc0-96c965d6c09a.png", width: 180 },
  { name: "IsraAID", logo: "/lovable-uploads/1c7679f1-48e2-48c7-bece-661f9b6422ae.png", width: 160 },
];

const TrustedBySection = () => {
  return (
    <section className="py-10 bg-white border-y border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-sm uppercase tracking-wider text-gray-500 font-medium">
            CONTRIBUTED TO LEADING ORGANIZATIONS
          </p>
        </div>
        <div className="overflow-hidden w-full">
          <div className="flex items-center gap-8 animate-marquee whitespace-nowrap">
            {partners.concat(partners).map((partner, index) => (
              <div key={index} className="p-4 flex items-center justify-center h-24 opacity-80 hover:opacity-100 transition-all duration-300">
                      <img 
                        src={partner.logo} 
                        alt={`${partner.name} logo`} 
                        className="h-16 w-auto object-contain" 
                        style={{ maxWidth: partner.width }}
                      />
                    </div>
                ))}
          </div>
        </div>
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: flex;
            animation: marquee 30s linear infinite;
          }
        `}</style>
      </div>
    </section>
  );
};

export default TrustedBySection;
