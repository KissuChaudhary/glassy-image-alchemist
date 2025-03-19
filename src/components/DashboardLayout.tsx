import React from 'react';
import Sidebar from './Sidebar';
import { useSidebar } from '@/contexts/SidebarContext';
import { cn } from '@/lib/utils';
import { Menu } from 'lucide-react';
import ProfileDropdown from './ProfileDropdown';
import CreditsDisplay from './CreditsDisplay';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const { expanded, isMobile, mobileOpen, toggleMobileMenu } = useSidebar();

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className={cn(
        'flex flex-col flex-grow transition-all duration-300 ease-out',
        !isMobile && expanded ? 'ml-[var(--sidebar-width)]' : !isMobile ? 'ml-[var(--sidebar-collapsed-width)]' : 'ml-0'
      )}>
        {/* Header with mobile menu toggle and user profile */}
        <header className="h-16 backdrop-blur-xl bg-black/40 border-b border-white/5 flex items-center justify-between px-2 sm:px-4 sticky top-0 z-40">
          <div className="flex items-center">
            {isMobile && (
              <button 
                onClick={toggleMobileMenu}
                className="mr-2 p-1.5 hover:bg-white/5 rounded-md transition-colors"
                aria-label="Toggle Menu"
              >
                <Menu size={20} />
              </button>
            )}
            <h1 className="text-lg sm:text-xl font-bold text-gradient truncate">AI Image Editor</h1>
          </div>
          
          <div className="flex items-center gap-2 sm:gap-4">
            <CreditsDisplay />
            <ProfileDropdown />
          </div>
        </header>
        
        <main className="p-4 sm:p-6 flex-grow">
          {children}
        </main>
      </div>
      
      {/* Mobile overlay when sidebar is open */}
      {isMobile && mobileOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm transition-opacity duration-300"
          onClick={toggleMobileMenu}
          aria-hidden="true"
        />
      )}
      
      {/* Noise overlay */}
      <div className="noise-overlay"></div>
    </div>
  );
}
