
import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, ExternalLink, MoveRight } from "lucide-react";

// Sample examples - in a real app, these would be actual before/after images
const exampleItems = [
  {
    id: 1,
    title: "Landscape Enhancement",
    prompt: "Make the sunset more vibrant and dramatic with orange and purple hues",
    beforeImage: "https://picsum.photos/id/10/600/400",
    afterImage: "https://picsum.photos/id/16/600/400",
  },
  {
    id: 2,
    title: "Portrait Style Transfer",
    prompt: "Transform this portrait into a renaissance painting style with golden tones",
    beforeImage: "https://picsum.photos/id/64/600/400",
    afterImage: "https://picsum.photos/id/65/600/400",
  },
  {
    id: 3,
    title: "Object Removal",
    prompt: "Remove the car from the street and replace it with pedestrians",
    beforeImage: "https://picsum.photos/id/133/600/400",
    afterImage: "https://picsum.photos/id/116/600/400",
  },
];

const Examples: React.FC = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  
  const nextExample = () => {
    setActiveIndex((prev) => (prev + 1) % exampleItems.length);
  };
  
  const prevExample = () => {
    setActiveIndex((prev) => (prev - 1 + exampleItems.length) % exampleItems.length);
  };
  
  return (
    <section id="examples" className="py-16 w-full">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">See It In Action</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore examples of how Gemini Alchemist can transform ordinary images into extraordinary visuals
          </p>
        </div>
        
        <div className="glass-panel rounded-2xl p-6 md:p-8 overflow-hidden">
          <div className="relative">
            {exampleItems.map((example, index) => (
              <div
                key={example.id}
                className={cn(
                  "transition-all duration-500 ease-in-out",
                  index === activeIndex ? "opacity-100" : "opacity-0 absolute inset-0"
                )}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Before and After Images */}
                  <div className="space-y-6">
                    <div className="space-y-1">
                      <h3 className="text-xs font-medium uppercase text-muted-foreground tracking-wider">Before</h3>
                      <div className="relative h-60 rounded-lg overflow-hidden glass-panel">
                        <img 
                          src={example.beforeImage} 
                          alt="Before" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-center">
                      <div className="h-px w-12 bg-primary/30"></div>
                      <ArrowRight className="mx-3 h-4 w-4 text-primary" />
                      <div className="h-px w-12 bg-primary/30"></div>
                    </div>
                    
                    <div className="space-y-1">
                      <h3 className="text-xs font-medium uppercase text-muted-foreground tracking-wider">After</h3>
                      <div className="relative h-60 rounded-lg overflow-hidden glass-panel">
                        <img 
                          src={example.afterImage} 
                          alt="After" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Example Details */}
                  <div className="flex flex-col justify-between">
                    <div>
                      <span className="inline-block px-3 py-1 rounded-full glass-panel text-sm text-primary mb-3">
                        Example {index + 1}/{exampleItems.length}
                      </span>
                      <h3 className="text-2xl font-bold text-gradient mb-3">{example.title}</h3>
                      
                      <div className="mb-6">
                        <h4 className="text-sm font-medium text-muted-foreground mb-2">Prompt Used:</h4>
                        <div className="glass-panel p-3 rounded-lg">
                          <p className="text-sm text-foreground italic">"{example.prompt}"</p>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <h4 className="text-sm font-medium text-muted-foreground">What Changed:</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <div className="p-1 glass-panel rounded-full mr-2 mt-0.5">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            </div>
                            <p className="text-sm text-muted-foreground">Colors and lighting transformed based on prompt</p>
                          </li>
                          <li className="flex items-start">
                            <div className="p-1 glass-panel rounded-full mr-2 mt-0.5">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            </div>
                            <p className="text-sm text-muted-foreground">Style adjustments applied while preserving composition</p>
                          </li>
                          <li className="flex items-start">
                            <div className="p-1 glass-panel rounded-full mr-2 mt-0.5">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            </div>
                            <p className="text-sm text-muted-foreground">Details enhanced based on contextual understanding</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex justify-between mt-8">
                      <Button 
                        variant="outline" 
                        className="glass-panel"
                        onClick={prevExample}
                      >
                        Previous
                      </Button>
                      <Button 
                        className="neo-glow"
                        onClick={nextExample}
                      >
                        Next Example
                        <MoveRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8">
            <div className="flex space-x-2">
              {exampleItems.map((_, index) => (
                <button
                  key={index}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all",
                    index === activeIndex 
                      ? "bg-primary w-6" 
                      : "bg-primary/30 hover:bg-primary/50"
                  )}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <Button 
            variant="outline" 
            className="glass-panel"
          >
            <span>View More Examples</span>
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Examples;
