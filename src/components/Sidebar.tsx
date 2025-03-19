import React, { useState, useEffect } from 'react';
import { useSidebar } from '@/contexts/SidebarContext';
import { ChevronLeft, ChevronRight, LayoutDashboard, Image, Wand2, Settings, Download, Layers, Plus, Package } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link, useLocation } from 'react-router-dom';

type NavItemProps = {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  isNew?: boolean;
  expanded: boolean;
  onClick?: () => void;
  to?: string;
};

const NavItem = ({ icon, label, active, isNew, expanded, onClick, to = '#' }: NavItemProps) => {
  return (
    <Link 
      to={to}
      className={cn(
        'nav-item group', 
        active && 'active',
        'flex items-center px-4 py-3 cursor-pointer'
      )}
      onClick={onClick}
    >
      <div className="w-6 h-6 flex items-center justify-center relative">
        {icon}
      </div>
      
      {/* Always show label on mobile when menu is open, or on desktop when expanded */}
      {expanded && (
        <span className={cn('nav-label ml-3 whitespace-nowrap', active ? 'text-white' : 'text-gray-400')}>
          {label}
        </span>
      )}
      
      {isNew && expanded && (
        <span className="badge-new ml-2 text-xs bg-gradient-to-r from-neon-blue to-neon-green px-1.5 py-0.5 rounded-full">New!</span>
      )}
    </Link>
  );
};

export default function Sidebar() {
  const { expanded, toggleSidebar, isMobile, mobileOpen, closeMobileMenu } = useSidebar();
  const [activeItem, setActiveItem] = useState('dashboard');
  const location = useLocation();
  
  // Update active item based on current route
  useEffect(() => {
    const path = location.pathname;
    if (path === '/') setActiveItem('dashboard');
    else if (path === '/gallery') setActiveItem('gallery');
    else if (path === '/ai-tools') setActiveItem('ai-tools');
    else if (path === '/templates') setActiveItem('templates');
    else if (path === '/create') setActiveItem('create');
    else if (path === '/extensions') setActiveItem('extensions');
    else if (path === '/downloads') setActiveItem('downloads');
    else if (path === '/settings') setActiveItem('settings');
  }, [location]);
  
  const handleNavItemClick = (item: string) => {
    setActiveItem(item);
    if (isMobile) {
      closeMobileMenu();
    }
  };
  
  if (isMobile && !mobileOpen) {
    return null;
  }
  
  return (
    <aside className={cn(
      'fixed z-50 h-full bg-black/90 backdrop-blur-xl border-r border-white/5',
      isMobile ? 'w-[var(--sidebar-mobile-width)]' : expanded ? 'w-[var(--sidebar-width)]' : 'w-[var(--sidebar-collapsed-width)]',
      isMobile ? 'transition-transform ease-out duration-300' : 'transition-all duration-300',
      isMobile && !mobileOpen ? '-translate-x-full' : 'translate-x-0'
    )}>
      <div className="flex flex-col h-full">
        {/* Logo and toggle */}
        <div className="p-4 flex items-center justify-between">
          {(expanded || isMobile) ? (
            <h1 className="text-xl font-bold text-gradient">AI Image Editor</h1>
          ) : (
            <div className="w-6 h-6 mx-auto">
              <div className="w-6 h-6 rounded-md bg-gradient-to-br from-neon-blue to-neon-green"></div>
            </div>
          )}
          
          {!isMobile && (
            <button 
              onClick={toggleSidebar}
              className="sidebar-trigger p-1 rounded-md hover:bg-white/5 transition-colors"
              aria-label={expanded ? 'Collapse Sidebar' : 'Expand Sidebar'}
            >
              {expanded ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
            </button>
          )}
        </div>
        
        {/* Navigation */}
        <nav className="flex-1 py-4 overflow-y-auto scrollbar-none">
          <NavItem 
            icon={<LayoutDashboard size={20} />} 
            label="Dashboard" 
            active={activeItem === 'dashboard'} 
            expanded={expanded || isMobile}
            onClick={() => handleNavItemClick('dashboard')}
            to="/"
          />
          <NavItem 
            icon={<Image size={20} />} 
            label="My Gallery" 
            active={activeItem === 'gallery'} 
            expanded={expanded || isMobile}
            onClick={() => handleNavItemClick('gallery')}
            to="/gallery"
          />
          <NavItem 
            icon={<Wand2 size={20} />} 
            label="AI Tools" 
            active={activeItem === 'ai-tools'} 
            expanded={expanded || isMobile}
            onClick={() => handleNavItemClick('ai-tools')}
            to="/ai-tools"
          />
          <NavItem 
            icon={<Layers size={20} />} 
            label="Templates" 
            active={activeItem === 'templates'} 
            expanded={expanded || isMobile}
            onClick={() => handleNavItemClick('templates')}
            to="/templates"
          />
          <NavItem 
            icon={<Plus size={20} />} 
            label="Create New" 
            active={activeItem === 'create'} 
            expanded={expanded || isMobile}
            onClick={() => handleNavItemClick('create')}
            to="/create"
          />
          
          {/* Separator */}
          <div className="mx-4 my-4 h-px bg-white/10" />
          
          <NavItem 
            icon={<Package size={20} />} 
            label="Extensions" 
            active={activeItem === 'extensions'} 
            expanded={expanded || isMobile}
            onClick={() => handleNavItemClick('extensions')}
            to="/extensions"
          />
          <NavItem 
            icon={<Download size={20} />} 
            label="Downloads" 
            active={activeItem === 'downloads'} 
            expanded={expanded || isMobile}
            isNew={true}
            onClick={() => handleNavItemClick('downloads')}
            to="/downloads"
          />
          <NavItem 
            icon={<Settings size={20} />} 
            label="Settings" 
            active={activeItem === 'settings'} 
            expanded={expanded || isMobile}
            onClick={() => handleNavItemClick('settings')}
            to="/settings"
          />
        </nav>
        
        {/* User Profile */}
        <div className={cn(
          'border-t border-white/10 p-4', 
          expanded || isMobile ? 'flex items-center' : 'flex flex-col items-center'
        )}>
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-neon-blue to-neon-green flex items-center justify-center">
            <span className="text-xs font-bold">JD</span>
          </div>
          
          {(expanded || isMobile) && (
            <div className="ml-3">
              <p className="text-sm font-medium">John Doe</p>
              <p className="text-xs text-gray-400">Pro Account</p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
