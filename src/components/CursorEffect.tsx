import React, { useEffect, useRef } from 'react';
import { Sparkle } from 'lucide-react';

const CursorEffect: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const cursor = cursorRef.current;
    const trail = trailRef.current;
    const glow = glowRef.current;
    
    if (!cursor || !trail || !glow) return;
    
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let trailX = 0;
    let trailY = 0;
    let isHovering = false;
    let rafId: number;
    
    const mouseMoveHandler = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    
    const updateCursorPosition = () => {
      // Smooth cursor following with easing
      const easing = isHovering ? 0.2 : 0.15;
      
      // Update main cursor with smoother movement
      cursorX += (mouseX - cursorX) * easing;
      cursorY += (mouseY - cursorY) * easing;
      
      // Update trail with more lag
      trailX += (mouseX - trailX) * 0.08;
      trailY += (mouseY - trailY) * 0.08;
      
      if (cursor) {
        cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) scale(${isHovering ? 1.5 : 1})`;
      }
      
      if (trail) {
        trail.style.transform = `translate3d(${trailX}px, ${trailY}px, 0) scale(${isHovering ? 1.2 : 1})`;
      }
      
      if (glow) {
        glow.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) scale(${isHovering ? 3 : 2.5})`;
        glow.style.opacity = isHovering ? '0.25' : '0.15';
      }
      
      rafId = requestAnimationFrame(updateCursorPosition);
    };
    
    const interactiveElementsHandler = (e: MouseEvent) => {
      const target = e.target as Element;
      // Fix: Check if the element or its parent matches interactive elements
      // Each check now explicitly returns a boolean
      const isInteractive = 
        target.tagName.toLowerCase() === 'a' || 
        target.tagName.toLowerCase() === 'button' ||
        !!target.closest('a') || 
        !!target.closest('button') ||
        target.tagName.toLowerCase() === 'input' ||
        target.tagName.toLowerCase() === 'textarea' ||
        !!target.closest('input') ||
        !!target.closest('textarea');
      
      isHovering = isInteractive;
      
      if (cursor) {
        if (isInteractive) {
          cursor.classList.add('cursor-hover');
          document.body.style.cursor = 'pointer';
        } else {
          cursor.classList.remove('cursor-hover');
          document.body.style.cursor = 'none';
        }
      }
    };
    
    // Start animation loop
    rafId = requestAnimationFrame(updateCursorPosition);
    
    // Hide the default cursor
    document.body.style.cursor = 'none';
    
    // Add event listeners
    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseover', interactiveElementsHandler);
    
    // Show cursor effect only on desktop
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    const handleMediaChange = (e: MediaQueryListEvent | MediaQueryList) => {
      if (e.matches) {
        cursor.style.display = 'block';
        trail.style.display = 'block';
        glow.style.display = 'block';
        document.body.style.cursor = 'none';
      } else {
        cursor.style.display = 'none';
        trail.style.display = 'none';
        glow.style.display = 'none';
        document.body.style.cursor = 'auto';
      }
    };
    
    // Check initially
    handleMediaChange(mediaQuery);
    
    // Add media query listener
    mediaQuery.addEventListener('change', handleMediaChange);
    
    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('mouseover', interactiveElementsHandler);
      mediaQuery.removeEventListener('change', handleMediaChange);
      document.body.style.cursor = 'auto';
    };
  }, []);
  
  return (
    <>
      {/* Glowing background aura */}
      <div 
        ref={glowRef}
        className="fixed pointer-events-none z-40 hidden md:block w-24 h-24 rounded-full bg-[#23c7b0]/10 blur-xl"
        style={{ 
          transform: 'translate(-50%, -50%)',
          transition: 'opacity 0.3s ease'
        }}
      />
      
      {/* Trailing element */}
      <div 
        ref={trailRef}
        className="fixed pointer-events-none z-50 hidden md:block w-6 h-6 rounded-full border border-[#23c7b0]/50"
        style={{ 
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.2s, height 0.2s'
        }}
      />
      
      {/* Main cursor element */}
      <div 
        ref={cursorRef}
        className="fixed pointer-events-none z-50 hidden md:block flex items-center justify-center w-4 h-4"
        style={{ 
          transform: 'translate(-50%, -50%)'
        }}
      >
        <div className="w-3 h-3 rounded-full bg-[#23c7b0] cursor-hover:scale-150 transition-transform" />
        <Sparkle className="absolute text-white/80 w-3 h-3 animate-pulse" />
      </div>
    </>
  );
};

export default CursorEffect;
