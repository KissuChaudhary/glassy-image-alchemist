
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import ImageEditor from "@/components/ImageEditor";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full pt-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/20 rounded-full filter blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-pink-500/10 rounded-full filter blur-3xl animate-float" style={{ animationDelay: "4s" }}></div>
      </div>
      
      <div className="container relative z-10 px-4 py-12 md:py-20">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <div className="inline-flex items-center text-sm font-medium px-3 py-1 glass-panel rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 mb-6 animate-pulse-slow">
            <span>Powered by Google Gemini 2.0 Flash</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-zoom-in">
            <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">Transform Images</span>
            <br />
            <span className="bg-gradient-to-r from-white via-pink-200 to-purple-200 bg-clip-text text-transparent">With Just Words</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-zoom-in" style={{ animationDelay: "200ms" }}>
            Edit, enhance, and reimagine your images using AI-powered text prompts.
            No design skills needed – just describe what you want, and watch the magic happen.
          </p>
        </div>
        
        {/* Image Editor embedded directly in the hero section */}
        <div className="max-w-6xl mx-auto">
          <ImageEditor />
        </div>
      </div>
    </section>
  );
};

export default Hero;
