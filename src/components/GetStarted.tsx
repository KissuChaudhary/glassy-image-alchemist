
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Upload, MessageSquare, Download, Check } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Upload Your Image",
    description: "Start by uploading the image you want to transform. We support JPG, PNG, and WebP formats.",
    icon: <Upload className="h-5 w-5" />,
  },
  {
    id: 2,
    title: "Describe Your Vision",
    description: "Write a prompt describing how you want to transform the image. Be specific for best results.",
    icon: <MessageSquare className="h-5 w-5" />,
  },
  {
    id: 3,
    title: "Download and Share",
    description: "Once the AI has transformed your image, download it and share your creation with the world.",
    icon: <Download className="h-5 w-5" />,
  },
];

const GetStarted: React.FC = () => {
  return (
    <section id="get-started" className="py-16 w-full">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">How to Get Started</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Transform your images in just a few simple steps
          </p>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          {/* Connect line between steps */}
          <div className="absolute top-16 left-1/2 -translate-x-1/2 w-px h-[calc(100%-8rem)] bg-gradient-to-b from-purple-500/30 to-pink-500/30 hidden md:block"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {steps.map((step, index) => (
              <div 
                key={step.id}
                className="relative z-10"
                style={{ 
                  opacity: 0,
                  animation: `zoom-in 0.5s ease-out ${index * 200}ms forwards`
                }}
              >
                <div className="glass-panel p-6 rounded-xl h-full neo-glow">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-14 h-14 rounded-full glass-panel flex items-center justify-center mb-4 text-primary bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                      {step.icon}
                    </div>
                    
                    <div className="inline-block px-3 py-1 rounded-full glass-panel text-xs font-medium mb-3">
                      Step {step.id}
                    </div>
                    
                    <h3 className="text-lg font-medium text-gradient mb-3">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 left-full -translate-y-1/2 -translate-x-1/2 text-primary">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center glass-panel p-4 rounded-xl mb-8 bg-gradient-to-r from-purple-500/10 to-pink-500/10">
            <div className="p-2 rounded-full bg-green-500/20 mr-3">
              <Check className="h-5 w-5 text-green-400" />
            </div>
            <p className="text-sm">
              <span className="font-medium">No credit card required</span> - Try it free today!
            </p>
          </div>
          
          <Button size="lg" className="neo-glow">
            Transform Your First Image
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
