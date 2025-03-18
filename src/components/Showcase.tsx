
import React, { useState } from "react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

// Sample showcase items - these would be your real examples in production
const showcaseItems = [
  {
    id: 1,
    title: "Photo Enhancement",
    description: "Transform low-quality photos into sharp, vibrant masterpieces with our AI enhancement technology.",
    beforeImage: "https://picsum.photos/id/22/600/400",
    afterImage: "https://picsum.photos/id/21/600/400",
    keywords: ["photo enhancement", "image quality improvement", "AI photo editor"]
  },
  {
    id: 2,
    title: "Background Replacement",
    description: "Swap backgrounds with a simple text prompt - perfect for product photography or social media content.",
    beforeImage: "https://picsum.photos/id/28/600/400",
    afterImage: "https://picsum.photos/id/29/600/400",
    keywords: ["background removal", "background swap", "AI background editor"]
  },
  {
    id: 3,
    title: "Style Transfer",
    description: "Apply artistic styles to your photos - turn ordinary snapshots into works of art with just words.",
    beforeImage: "https://picsum.photos/id/31/600/400",
    afterImage: "https://picsum.photos/id/30/600/400",
    keywords: ["AI style transfer", "artistic photo filter", "neural style transfer"]
  }
];

const Showcase: React.FC = () => {
  return (
    <section id="showcase" className="py-20 w-full">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">AI Transformation Showcase</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See the power of AI image editing in action with these real-world examples. 
            Transform your images with simple text prompts - no design skills required.
          </p>
        </div>
        
        <Carousel className="max-w-5xl mx-auto">
          <CarouselContent>
            {showcaseItems.map((item) => (
              <CarouselItem key={item.id}>
                <div className="glass-panel p-6 md:p-8 rounded-2xl">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-gradient">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                      
                      <div className="hidden md:block">
                        <h4 className="text-sm font-medium text-emerald-200 mb-2">Key Features:</h4>
                        <ul className="space-y-2">
                          {item.keywords.map((keyword, idx) => (
                            <li key={idx} className="flex items-start">
                              <div className="p-1 glass-panel rounded-full mr-2 mt-0.5">
                                <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                              </div>
                              <p className="text-sm text-muted-foreground">{keyword}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <Button variant="outline" className="glass-panel mt-4">
                        Try This Effect
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                    
                    <div className="space-y-6">
                      <div>
                        <h5 className="text-xs font-medium uppercase text-muted-foreground tracking-wider mb-2">Before</h5>
                        <div className="relative rounded-lg overflow-hidden glass-panel h-40">
                          <img 
                            src={item.beforeImage} 
                            alt={`Before ${item.title}`} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-center">
                        <div className="h-px w-12 bg-emerald-500/30"></div>
                        <ArrowRight className="mx-3 h-4 w-4 text-emerald-500" />
                        <div className="h-px w-12 bg-emerald-500/30"></div>
                      </div>
                      
                      <div>
                        <h5 className="text-xs font-medium uppercase text-muted-foreground tracking-wider mb-2">After</h5>
                        <div className="relative rounded-lg overflow-hidden glass-panel h-40">
                          <img 
                            src={item.afterImage} 
                            alt={`After ${item.title}`} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-1 md:-left-12 glass-panel text-emerald-500" />
          <CarouselNext className="right-1 md:-right-12 glass-panel text-emerald-500" />
        </Carousel>
      </div>
    </section>
  );
};

export default Showcase;
