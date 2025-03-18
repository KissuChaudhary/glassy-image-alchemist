
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles } from "lucide-react";
import ImageEditor from "@/components/ImageEditor";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full pt-20 overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-500/20 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-sky-500/20 rounded-full filter blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-teal-500/10 rounded-full filter blur-3xl animate-float" style={{ animationDelay: "4s" }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-cyan-500/15 rounded-full filter blur-3xl animate-float" style={{ animationDelay: "3s" }}></div>
      </div>
      
      <div className="container relative z-10 px-4 py-8 md:py-16">
        <div className="max-w-5xl mx-auto text-center mb-10">
          <div className="inline-flex items-center text-sm font-medium px-3 py-1 glass-panel rounded-full bg-gradient-to-r from-emerald-500/20 to-sky-500/20 mb-6 animate-pulse-slow">
            <Sparkles className="h-3.5 w-3.5 mr-1.5 text-emerald-400" />
            <span>Powered by Google Gemini 2.0 Flash</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-zoom-in">
            <span className="bg-gradient-to-r from-white via-emerald-200 to-cyan-200 bg-clip-text text-transparent">Transform Images</span>
            <br />
            <span className="bg-gradient-to-r from-white via-teal-200 to-emerald-200 bg-clip-text text-transparent">With Just Words</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-zoom-in" style={{ animationDelay: "200ms" }}>
            Edit, enhance, and reimagine your images using AI-powered text prompts.
            No design skills needed – just describe what you want, and watch the magic happen.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button size="lg" className="neo-glow text-base group">
              Try It Now
              <ArrowDown className="ml-1 h-4 w-4 group-hover:animate-bounce" />
            </Button>
            <Button size="lg" variant="outline" className="glass-panel text-base">
              Watch Demo
            </Button>
          </div>
        </div>
        
        {/* Image Editor embedded directly in the hero section with enhanced styling */}
        <div className="max-w-6xl mx-auto glass-panel p-5 rounded-2xl border border-emerald-500/20 shadow-[0_8px_32px_rgba(56,178,172,0.2)]">
          <ImageEditor />
        </div>
      </div>
    </section>
  );
};

export default Hero;
