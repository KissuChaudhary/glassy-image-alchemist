
import React from "react";
import { cn } from "@/lib/utils";
import { 
  Upload, 
  Type, 
  Sparkles, 
  Download,
  ArrowRight
} from "lucide-react";

interface StepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  isLast?: boolean;
}

const Step: React.FC<StepProps> = ({ number, title, description, icon, isLast = false }) => {
  return (
    <div className="relative flex flex-col md:flex-row items-start group">
      {/* Step number and icon */}
      <div className="z-10 flex-shrink-0 w-12 h-12 rounded-full glass-panel flex items-center justify-center shadow-lg group-hover:bg-primary/20 transition-colors duration-300">
        {icon}
      </div>
      
      {/* Connecting line */}
      {!isLast && (
        <div className="absolute left-6 top-12 h-full w-0.5 bg-gradient-to-b from-primary/20 to-primary/5 md:h-0.5 md:w-full md:top-6 md:left-12 md:bg-gradient-to-r"></div>
      )}
      
      {/* Content */}
      <div className="ml-0 md:ml-6 mt-4 md:mt-0">
        <span className="inline-block px-2.5 py-0.5 rounded-full glass-panel text-xs font-medium text-primary mb-2">Step {number}</span>
        <h3 className="text-lg font-medium text-gradient mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-16 w-full">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">How It Works</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Transform your images in just a few simple steps with our intuitive workflow
          </p>
        </div>
        
        <div className="glass-panel rounded-2xl p-8 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4">
            <Step 
              number={1} 
              title="Upload Image"
              description="Drag and drop or select an image from your device to begin the transformation process."
              icon={<Upload className="h-5 w-5 text-primary" />}
            />
            
            <Step 
              number={2} 
              title="Write Prompt"
              description="Describe how you want to transform your image using natural language."
              icon={<Type className="h-5 w-5 text-primary" />}
            />
            
            <Step 
              number={3} 
              title="Generate"
              description="Let Gemini AI work its magic, analyzing your image and applying your requested changes."
              icon={<Sparkles className="h-5 w-5 text-primary" />}
            />
            
            <Step 
              number={4} 
              title="Download"
              description="Save your transformed image to your device in high quality for any use."
              icon={<Download className="h-5 w-5 text-primary" />}
              isLast
            />
          </div>
          
          <div className="mt-12 flex flex-col items-center">
            <div className="glass-panel p-4 rounded-xl border border-primary/20 mb-4 neo-glow">
              <div className="flex items-center space-x-3">
                <div className="p-2 glass-panel rounded-lg bg-primary/10">
                  <ArrowRight className="h-4 w-4 text-primary" />
                </div>
                <p className="text-sm">
                  <span className="font-medium text-gradient">Pro Tip:</span> <span className="text-muted-foreground">Be specific in your prompts for best results. Try "Make the sky more dramatic with stormy clouds" instead of just "Change the sky".</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
