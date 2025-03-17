
import React from "react";
import { ChevronDown, Github, Menu, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

const Header: React.FC = () => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full glass-panel transition-all duration-300">
      <div className="container mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
        <div className="flex items-center space-x-1">
          <Sparkles className="h-6 w-6 text-primary animate-pulse-slow" />
          <span className="text-xl font-bold tracking-tight text-gradient">Gemini <span className="text-primary">Alchemist</span></span>
        </div>
        
        {isMobile ? (
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        ) : (
          <nav className="flex items-center space-x-6">
            <NavLinks />
            <Button className="neo-glow">
              <Github className="mr-2 h-4 w-4" />
              <span>GitHub</span>
            </Button>
          </nav>
        )}
      </div>
      
      {/* Mobile menu */}
      {isMobile && (
        <div className={cn(
          "overflow-hidden transition-all duration-300 glass-panel border-t border-white/5",
          isMenuOpen ? "max-h-64" : "max-h-0"
        )}>
          {isMenuOpen && (
            <div className="p-4 flex flex-col space-y-4">
              <NavLinks isMobile />
              <Button className="w-full neo-glow">
                <Github className="mr-2 h-4 w-4" />
                <span>GitHub</span>
              </Button>
            </div>
          )}
        </div>
      )}
    </header>
  );
};

const NavLinks: React.FC<{ isMobile?: boolean }> = ({ isMobile }) => {
  const baseClassName = "flex items-center text-muted-foreground hover:text-foreground transition-colors";
  const navItemClass = isMobile ? `${baseClassName} py-2` : baseClassName;
  
  return (
    <>
      <a href="#features" className={navItemClass}>
        Features
        <ChevronDown className="ml-1 h-4 w-4" />
      </a>
      <a href="#how-it-works" className={navItemClass}>How it works</a>
      <a href="#examples" className={navItemClass}>Examples</a>
    </>
  );
};

export default Header;
