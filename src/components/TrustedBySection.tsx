import React, { useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { ScrollArea } from "@/components/ui/scroll-area";

const TrustedBySection = () => {
  const partners = [
    { 
      name: "Second Tree", 
      logo: "/lovable-uploads/fe40ce14-8ace-4394-819d-7c99107ce700.png", 
      width: 140 
    },
    { 
      name: "UNHCR", 
      logo: "/lovable-uploads/ce79e40e-8a3d-49fd-bdc0-96c965d6c09a.png", 
      width: 180 
    },
    { 
      name: "IsraAID", 
      logo: "/lovable-uploads/1c7679f1-48e2-48c7-bece-661f9b6422ae.png", 
      width: 160 
    },
    { 
      name: "Global Protection Cluster", 
      logo: "/lovable-uploads/global-protection-cluster.png", 
      width: 180 
    },
    // Keep a few placeholders to have enough items for the carousel effect
    { 
      name: "Second Tree", 
      logo: "/lovable-uploads/fe40ce14-8ace-4394-819d-7c99107ce700.png", 
      width: 140 
    },
    { 
      name: "UNHCR", 
      logo: "/lovable-uploads/ce79e40e-8a3d-49fd-bdc0-96c965d6c09a.png", 
      width: 180 
    },
    { 
      name: "IsraAID", 
      logo: "/lovable-uploads/1c7679f1-48e2-48c7-bece-661f9b6422ae.png", 
      width: 160 
    },
  ];

  const [api, setApi] = React.useState<any>();

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000); // Scroll every 3 seconds

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="py-10 bg-white border-y border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-sm uppercase tracking-wider text-gray-500 font-medium">
            CONTRIBUTED TO LEADING ORGANIZATIONS
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
              setApi={setApi}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {partners.map((partner, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/3 sm:basis-1/3 md:basis-1/4 lg:basis-1/4">
                    <div className="p-4 flex items-center justify-center h-24 opacity-80 hover:opacity-100 transition-all duration-300">
                      <img 
                        src={partner.logo} 
                        alt={`${partner.name} logo`} 
                        className="h-16 w-auto object-contain" 
                        style={{ maxWidth: partner.width }}
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
