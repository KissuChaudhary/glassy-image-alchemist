import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown, Wand2, Sparkles, ImageIcon, Download } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Squares } from "@/components/ui/squares-background"

const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [demoStep, setDemoStep] = useState(0);
  const [typedPrompt, setTypedPrompt] = useState('');
  const [currentDemo, setCurrentDemo] = useState(0);
  
  const demoSequences = [
    {
      prompt: "Transform this photo into a magical fantasy scene",
      originalImage: "https://picsum.photos/id/22/600/400",
      generatedImage: "https://picsum.photos/id/21/600/400"
    },
    {
      prompt: "Add a dramatic sunset with golden hour lighting",
      originalImage: "https://picsum.photos/id/28/600/400",
      generatedImage: "https://picsum.photos/id/29/600/400"
    },
    {
      prompt: "Convert to cinematic sci-fi atmosphere",
      originalImage: "https://picsum.photos/id/36/600/400",
      generatedImage: "https://picsum.photos/id/37/600/400"
    }
  ];
  const isMobile = useIsMobile();

  // Demo animation sequence
  useEffect(() => {
    if (isLoaded) {
      // Start demo sequence after initial load
      const sequence = async () => {
        await new Promise(resolve => setTimeout(resolve, 2000)); // Wait before starting
        setDemoStep(1); // Show upload animation
        await new Promise(resolve => setTimeout(resolve, 2000));
        setDemoStep(2); // Start typing prompt
        
        // Simulate typing effect
        const demo = demoSequences[currentDemo];
        for (let i = 0; i <= demo.prompt.length; i++) {
          await new Promise(resolve => setTimeout(resolve, 50));
          setTypedPrompt(demo.prompt.slice(0, i));
        }
        
        await new Promise(resolve => setTimeout(resolve, 1000));
        setDemoStep(3); // Show generation effect
        await new Promise(resolve => setTimeout(resolve, 3000));
        setDemoStep(0); // Reset sequence
        setTypedPrompt('');
        setCurrentDemo((prev) => (prev + 1) % demoSequences.length); // Cycle through demos
      };
      
      const interval = setInterval(sequence, 12000); // Repeat every 12 seconds
      sequence(); // Start immediately
      
      return () => clearInterval(interval);
    }
  }, [isLoaded]);

  // Smooth loading effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col justify-center pt-20 pb-10 overflow-hidden">
      {/* Squares Background */}
      <div className="absolute inset-0 z-0">
        <Squares direction="diagonal" speed={0.5} borderColor="#333" squareSize={50} hoverFillColor="#222" className="opacity-30" />
      </div>

      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-radial from-dark-lighter/30 to-transparent opacity-40 pointer-events-none"></div>
       
      {/* Noise overlay */}
      <div className="noise-overlay"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-6 transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-block backdrop-blur-md bg-white/5 border border-white/10 rounded-full px-4 py-1 text-sm text-white/70">
              AI-Powered Image Editor
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Transform Images with <span className="text-gradient">AI Magic</span> in Seconds
            </h1>
            <p className="text-white/70 text-lg max-w-lg">
              Effortlessly enhance, edit, and reimagine your photos using advanced AI technology. No design skills needed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="#editor" 
                className="bg-neon-blue/10 backdrop-blur-md border border-neon-blue/30 text-white px-6 py-3 rounded-full hover:bg-neon-blue/20 transition-colors inline-flex items-center justify-center"
              >
                Try it now
                <Wand2 className="ml-2 h-4 w-4" />
              </a>
              <a 
                href="#examples" 
                className="backdrop-blur-md bg-white/5 border border-white/10 text-white px-6 py-3 rounded-full hover:bg-white/10 transition-colors inline-flex items-center justify-center"
              >
                View examples
              </a>
            </div>
          </div>
          
          <div className={`relative transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            {/* Professional Mockup */}
            <div className="glass-card backdrop-blur-xl bg-black/30 border border-white/10 rounded-xl p-6 shadow-xl relative overflow-hidden group">
              {/* Glass reflection effect */}
              <div className="absolute -inset-full h-56 w-56 opacity-30 bg-gradient-to-r from-white via-white/20 to-transparent blur-lg transform rotate-12 group-hover:animate-shift"></div>
              
              {/* AI Editor Interface */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-emerald-500/70"></div>
                  <div className="w-3 h-3 rounded-full bg-blue-500/70"></div>
                  <div className="w-3 h-3 rounded-full bg-purple-500/70"></div>
                </div>
                <div className="w-1/2 h-5 bg-white/10 rounded-full relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs text-white/50">AI Image Editor</span>
                  </div>
                </div>
                <div className="w-6"></div>
              </div>
              
              {/* Editor Interface */}
              <div className="space-y-4 group-hover:opacity-90 transition-opacity duration-300">
                {/* Tools Bar */}
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <div className="h-8 w-8 bg-neon-blue/20 rounded-full flex items-center justify-center">
                      <ImageIcon className="h-4 w-4 text-neon-blue" />
                    </div>
                    <div className="h-8 w-8 bg-emerald-500/20 rounded-full flex items-center justify-center">
                      <Wand2 className="h-4 w-4 text-emerald-400" />
                    </div>
                    <div className="h-8 w-8 bg-purple-500/20 rounded-full flex items-center justify-center">
                      <Sparkles className="h-4 w-4 text-purple-400" />
                    </div>
                  </div>
                  <div className="h-8 w-8 bg-neon-green/20 rounded-full flex items-center justify-center">
                    <Download className="h-4 w-4 text-neon-green" />
                  </div>
                </div>
                
                {/* Image Preview */}
                <div className="relative h-[280px] md:h-[320px] lg:h-[360px] bg-gradient-to-br from-emerald-500/10 to-blue-500/10 rounded-lg overflow-hidden">
                  <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${demoStep === 1 || demoStep === 0 ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="text-center">
                      <ImageIcon className="h-12 w-12 text-white/30 mx-auto mb-2" />
                      <p className="text-sm text-white/50">Drop your image here</p>
                    </div>
                  </div>
                  
                  {/* Demo Image */}
                  <div className={`absolute inset-0 transition-all duration-1000 ${demoStep >= 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} ${demoStep === 3 ? 'blur-xl' : ''}`}>
                    <img 
                      src={demoSequences[currentDemo].originalImage}
                      alt="Demo" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Generated Image */}
                  <div className={`absolute inset-0 transition-all duration-1000 ${demoStep === 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}>
                    <img 
                      src={demoSequences[currentDemo].generatedImage}
                      alt="Generated" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {/* Prompt Input */}
                <div className="relative">
                  <div className="h-10 bg-white/5 rounded-full px-4 flex items-center">
                    <Wand2 className="h-4 w-4 text-emerald-400 mr-2" />
                    <div className={`h-4 flex-1 flex items-center ${demoStep === 2 ? 'text-white' : ''}`}>
                      {typedPrompt || <div className="h-4 w-3/4 bg-white/10 rounded animate-pulse"></div>}
                    </div>
                  </div>
                  <div className="absolute right-2 top-1/2 -translate-y-1/2">
                    <div className={`h-8 w-8 rounded-full flex items-center justify-center transition-all duration-300 ${demoStep === 2 ? 'bg-emerald-500/40 scale-110' : 'bg-emerald-500/20'}`}>
                      <Sparkles className={`h-4 w-4 transition-all ${demoStep === 2 ? 'text-emerald-300' : 'text-emerald-400'}`} />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Hover Overlay - appears on hover with smoky animation */}
              <div className="absolute inset-0 bg-neon-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm rounded-xl pointer-events-none"></div>
            </div>
            
            {/* Feature badges */}
            <div className="hidden md:flex mt-6 space-x-4 justify-center">
              <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-full px-4 py-2 flex items-center">
                <Wand2 className="h-4 w-4 mr-2 text-neon-blue" />
                <span className="text-sm">Instant Edits</span>
              </div>
              <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-full px-4 py-2 flex items-center">
                <Sparkles className="h-4 w-4 mr-2 text-neon-green" />
                <span className="text-sm">AI-Powered</span>
              </div>
              <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-full px-4 py-2 flex items-center">
                <Download className="h-4 w-4 mr-2 text-neon-blue" />
                <span className="text-sm">High Quality</span>
              </div>
            </div>
            
            {/* Background elements */}
            <div className="absolute -z-10 w-full h-full top-0 left-0 rounded-full bg-green-glow opacity-20 filter blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-white/5 rounded-full animate-rotate-slow"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 border border-neon-blue/10 rounded-full animate-rotate-slow" style={{ animationDirection: 'reverse' }}></div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-white/50 text-sm mb-2">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
          <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;