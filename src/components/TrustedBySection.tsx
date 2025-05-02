
import React from 'react';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { ScrollArea } from "@/components/ui/scroll-area";

const TrustedBySection = () => {
  const partners = [
    { name: "Airbnb", logo: "/lovable-uploads/3ff4b181-cb87-4f68-8db6-3ea0c51d88e9.png", width: 120 },
    { name: "Google", logo: "/lovable-uploads/3ff4b181-cb87-4f68-8db6-3ea0c51d88e9.png", width: 120 },
    { name: "Slack", logo: "/lovable-uploads/3ff4b181-cb87-4f68-8db6-3ea0c51d88e9.png", width: 120 },
    { name: "YouTube", logo: "/lovable-uploads/3ff4b181-cb87-4f68-8db6-3ea0c51d88e9.png", width: 140 },
    { name: "CVS Pharmacy", logo: "/lovable-uploads/3ff4b181-cb87-4f68-8db6-3ea0c51d88e9.png", width: 160 },
    { name: "Netflix", logo: "/lovable-uploads/3ff4b181-cb87-4f68-8db6-3ea0c51d88e9.png", width: 120 },
    { name: "Amazon", logo: "/lovable-uploads/3ff4b181-cb87-4f68-8db6-3ea0c51d88e9.png", width: 130 },
    { name: "Microsoft", logo: "/lovable-uploads/3ff4b181-cb87-4f68-8db6-3ea0c51d88e9.png", width: 150 },
    { name: "Apple", logo: "/lovable-uploads/3ff4b181-cb87-4f68-8db6-3ea0c51d88e9.png", width: 120 },
  ];

  return (
    <section className="py-8 bg-white border-y border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <p className="text-sm uppercase tracking-wider text-gray-500 font-medium">
            TRUSTED BY LEADING COMPANIES
          </p>
        </div>
        
        <ScrollArea className="w-full">
          <div className="px-4">
            <Carousel
              opts={{
                align: "start",
                loop: true,
                dragFree: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {partners.map((partner, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 xs:basis-1/3 sm:basis-1/4 md:basis-1/5 lg:basis-1/6 xl:basis-1/7">
                    <div className="p-2 flex items-center justify-center h-16 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                      <img 
                        src={partner.logo} 
                        alt={`${partner.name} logo`} 
                        className="h-8 w-auto object-contain"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </ScrollArea>
      </div>
    </section>
  );
};

export default TrustedBySection;
