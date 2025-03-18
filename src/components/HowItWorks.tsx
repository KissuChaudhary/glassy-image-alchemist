
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
    <div 
      className="relative flex flex-col items-center w-full h-full max-w-xs mx-auto transform transition-all duration-500 hover:scale-105 animate-fade-in"
      style={{
        animationDelay: `${number * 200}ms`
      }}
    >
      <div className="w-full flex flex-col items-center h-full">
        {/* Step number and icon */}
        <div className="z-10 flex-shrink-0 w-16 h-16 rounded-full glass-panel flex items-center justify-center shadow-lg bg-primary/5 group-hover:bg-primary/20 transition-all duration-300">
          {icon}
        </div>
        
        {/* Content */}
        <div className="mt-6 text-center w-full flex-1 flex flex-col">
          <div className="glass-panel px-4 py-1 rounded-full text-xs font-medium text-primary mb-3 inline-flex items-center space-x-2 mx-auto">
            <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-[10px]">{number}</span>
            <span>Step {number}</span>
          </div>
          <h3 className="text-xl font-medium text-gradient mb-3">{title}</h3>
          <p className="text-sm text-muted-foreground mb-6">{description}</p>
          
          {/* Interactive Mockup */}
          <div className="glass-panel p-4 rounded-xl neo-glow w-full max-w-sm mx-auto transform transition-all duration-500 hover:-translate-y-1 flex-1 flex flex-col justify-center min-h-[200px]">
            {number === 1 && (
              <div className="border-2 border-dashed border-primary/30 rounded-lg p-6 text-center">
                <Upload className="h-8 w-8 mx-auto mb-3 text-primary" />
                <p className="text-sm text-primary/70">Drag & Drop or Click to Upload</p>
              </div>
            )}
            {number === 2 && (
              <div className="bg-primary/5 rounded-lg p-4">
                <div className="glass-panel rounded-md p-3 mb-2">
                  <Type className="h-4 w-4 text-primary inline mr-2" />
                  <span className="text-sm text-primary/70">Write your prompt here...</span>
                </div>
                <div className="flex space-x-2">
                  <div className="glass-panel rounded-md p-2 text-xs text-primary/70">Style Transfer</div>
                  <div className="glass-panel rounded-md p-2 text-xs text-primary/70">Background Change</div>
                </div>
              </div>
            )}
            {number === 3 && (
              <div className="relative overflow-hidden rounded-lg aspect-video bg-primary/5">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="animate-pulse">
                    <Sparkles className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary/20">
                  <div className="h-full w-1/2 bg-primary animate-[progress_2s_ease-in-out_infinite]"></div>
                </div>
              </div>
            )}
            {number === 4 && (
              <div className="space-y-3">
                <div className="glass-panel rounded-lg p-2 flex items-center justify-between">
                  <span className="text-sm text-primary/70">transformed_image.png</span>
                  <Download className="h-4 w-4 text-primary" />
                </div>
                <div className="glass-panel rounded-lg p-2 flex items-center justify-between opacity-50">
                  <span className="text-sm text-primary/70">original_image.png</span>
                  <Download className="h-4 w-4 text-primary" />
                </div>
              </div>
            )}
          </div>
        </div>
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
        
        <div className="glass-panel rounded-2xl p-8 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-4">
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
