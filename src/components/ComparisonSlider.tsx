import React from "react";
import { Compare } from "@/components/ui/compare";

export default function ComparisonSlider() {
  return (
    <section 
      aria-label="Image Comparison Tool"
      className="flex items-center justify-center"
    >
      <div className="relative p-4 sm:p-6 rounded-3xl bg-black/5 glass-card backdrop-blur-xl bg-white/5 border border-white/10 p-6 rounded-xl text-center transition-all duration-300 w-[90vw] max-w-[600px]">
        <div className="absolute inset-0 rounded-3xl " />
        <div className="relative">
          <Compare
            firstImage="https://assets.aceternity.com/code-problem.png"
            secondImage="https://assets.aceternity.com/code-solution.png"
            firstImageClassName="object-cover object-left-top rounded-2xl w-full h-full"
            secondImageClassname="object-cover object-left-top rounded-2xl w-full h-full"
            className="h-[250px] w-full md:h-[400px] relative z-10"
            slideMode="hover"
            showHandlebar={true}
            autoplay={true}
            autoplayDuration={3000}
          />
    
        </div>
      </div>
    </ section>
    
  );
}
