import React, { createContext, useContext, useState, useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

type SidebarContextType = {
  expanded: boolean;
  toggleSidebar: () => void;
  setExpanded: (expanded: boolean) => void;
  isMobile: boolean;
  mobileOpen: boolean;
  toggleMobileMenu: () => void;
  closeMobileMenu: () => void;
};

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const isMobile = useIsMobile();
  const [expanded, setExpanded] = useState(!isMobile);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Adjust sidebar state when screen size changes
  useEffect(() => {
    setExpanded(!isMobile);
    if (isMobile) {
      setMobileOpen(false);
    }
  }, [isMobile]);

  const toggleSidebar = () => {
    setExpanded(!expanded);
  };
  
  const toggleMobileMenu = () => {
    setMobileOpen(!mobileOpen);
  };
  
  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  // Close mobile menu when escape key is pressed
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && mobileOpen) {
        closeMobileMenu();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileOpen]);

  return (
    <SidebarContext.Provider value={{ 
      expanded, 
      toggleSidebar, 
      setExpanded, 
      isMobile,
      mobileOpen,
      toggleMobileMenu,
      closeMobileMenu
    }}>
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  const context = useContext(SidebarContext);
  
  if (context === undefined) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  
  return context;
}
