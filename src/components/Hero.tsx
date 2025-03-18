
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles, Play } from "lucide-react";
import ImageEditor from "@/components/ImageEditor";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Hero: React.FC = () => {
  const [videoOpen, setVideoOpen] = useState(false);

  const scrollToPrompt = () => {
    const promptSection = document.getElementById('prompt-section');
    if (promptSection) {
      promptSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
            <Button size="lg" className="neo-glow text-base group" onClick={scrollToPrompt}>
              Try It Now
              <ArrowDown className="ml-1 h-4 w-4 group-hover:animate-bounce" />
            </Button>
            <Button size="lg" variant="outline" className="glass-panel text-base" onClick={() => setVideoOpen(true)}>
              Watch Demo
              <Play className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
        
        {/* Image Editor embedded directly in the hero section with enhanced styling */}
        <div className="max-w-6xl mx-auto glass-panel p-5 rounded-2xl border border-emerald-500/20 shadow-[0_8px_32px_rgba(56,178,172,0.2)]">
          <ImageEditor />
        </div>
      </div>

      {/* YouTube video modal */}
      <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
        <DialogContent className="sm:max-w-[800px] bg-black/90 border-emerald-500/20">
          <DialogHeader>
            <DialogTitle className="text-xl text-center mb-4">Watch Demo</DialogTitle>
          </DialogHeader>
          <div className="aspect-video w-full">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="Demo Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-md"
            ></iframe>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Hero;
