import React, { useEffect, useRef } from 'react';

const CursorEffect: React.FC = () => {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorCircleRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const cursorDot = cursorDotRef.current;
    const cursorCircle = cursorCircleRef.current;
    
    if (!cursorDot || !cursorCircle) return;
    
    const mouseMoveHandler = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      
      // Position the dot cursor directly at the mouse position
      cursorDot.style.left = `${clientX}px`;
      cursorDot.style.top = `${clientY}px`;
      
      // Add a slight delay for the circle cursor (trailer effect)
      setTimeout(() => {
        cursorCircle.style.left = `${clientX}px`;
        cursorCircle.style.top = `${clientY}px`;
      }, 100);
    };
    
    const mouseDownHandler = () => {
      cursorDot.classList.add('scale-150');
      cursorCircle.classList.add('scale-75');
    };
    
    const mouseUpHandler = () => {
      cursorDot.classList.remove('scale-150');
      cursorCircle.classList.remove('scale-75');
    };
    
    const mouseLinkHoverHandler = () => {
      cursorDot.classList.add('scale-150');
      cursorCircle.classList.add('scale-150');
    };
    
    const mouseLinkLeaveHandler = () => {
      cursorDot.classList.remove('scale-150');
      cursorCircle.classList.remove('scale-150');
    };
    
    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mousedown', mouseDownHandler);
    document.addEventListener('mouseup', mouseUpHandler);
    
    // Add hover effects for all links and buttons
    const links = document.querySelectorAll('a, button');
    links.forEach(link => {
      link.addEventListener('mouseenter', mouseLinkHoverHandler);
      link.addEventListener('mouseleave', mouseLinkLeaveHandler);
    });
    
    return () => {
      document.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('mousedown', mouseDownHandler);
      document.removeEventListener('mouseup', mouseUpHandler);
      
      links.forEach(link => {
        link.removeEventListener('mouseenter', mouseLinkHoverHandler);
        link.removeEventListener('mouseleave', mouseLinkLeaveHandler);
      });
    };
  }, []);
  
  return (
    <>
      <div 
        ref={cursorDotRef}
        className="custom-cursor hidden md:block"
      ></div>
      <div 
        ref={cursorCircleRef}
        className="custom-cursor-trailer hidden md:block"
      ></div>
    </>
  );
};

export default CursorEffect;
