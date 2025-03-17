
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero: React.FC = () => {
  const scrollToEditor = () => {
    const editorElement = document.getElementById("editor-section");
    if (editorElement) {
      editorElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center pt-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full filter blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      </div>
      
      <div className="container relative z-10 px-4 py-20 md:py-32">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center text-sm font-medium px-3 py-1 glass-panel rounded-full text-primary mb-6 animate-pulse-slow">
            <span>Powered by Google Gemini 2.0 Flash</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-zoom-in">
            <span className="text-gradient">Transform Images</span>
            <br />
            <span className="text-gradient">With Just Words</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 animate-zoom-in" style={{ animationDelay: "200ms" }}>
            Edit, enhance, and reimagine your images using AI-powered text prompts.
            No design skills needed – just describe what you want, and watch the magic happen.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-zoom-in" style={{ animationDelay: "400ms" }}>
            <Button onClick={scrollToEditor} className="neo-glow px-8 py-6 text-lg">
              Try It Now
            </Button>
            <Button variant="outline" className="glass-panel px-8 py-6 text-lg">
              Learn More
            </Button>
          </div>
          
          <div className="mt-16 animate-float">
            <Button 
              variant="ghost" 
              size="icon" 
              className="rounded-full glass-panel h-12 w-12"
              onClick={scrollToEditor}
            >
              <ArrowDown className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
