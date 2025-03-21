
import React from "react";
import { Sparkles, Github, Twitter, Mail, Heart } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-8  overflow-hidden">
      
      <div className="container mx-auto px-4  z-10 ">
        {/* Animated elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/5 rounded-full filter blur-3xl animate-float"></div>
          <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-primary/10 rounded-full filter blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
        </div>
        
        <div className="glass-panel rounded-xl p-6 md:p-8 relative ">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Logo and description */}
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-1">
                <Sparkles className="h-5 w-5 text-primary" />
                <span className="text-lg font-bold tracking-tight text-gradient">Gemini <span className="text-primary">Alchemist</span></span>
              </div>
              <p className="text-sm text-muted-foreground">
                Transform your images with the power of AI. Gemini Alchemist uses Google's cutting-edge Gemini 2.0 model to edit and enhance your images with simple text prompts.
              </p>
            </div>
            
            {/* Quick links */}
            <div className="flex flex-col space-y-4">
              <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Quick Links</h3>
              <div className="grid grid-cols-2 gap-2">
                <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a>
                <a href="#examples" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Examples</a>
                <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">How it works</a>
                <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
                <a href="#privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy</a>
                <a href="#terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms</a>
              </div>
            </div>
            
            {/* Connect */}
            <div className="flex flex-col space-y-4">
              <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Connect</h3>
              <div className="flex space-x-4">
                <a href="#" className="p-2 glass-panel rounded-full hover:bg-primary/20 transition-colors">
                  <Github className="h-4 w-4" />
                </a>
                <a href="#" className="p-2 glass-panel rounded-full hover:bg-primary/20 transition-colors">
                  <Twitter className="h-4 w-4" />
                </a>
                <a href="#" className="p-2 glass-panel rounded-full hover:bg-primary/20 transition-colors">
                  <Mail className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-4 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>© 2024 Gemini Alchemist. All rights reserved.</p>
            <p className="flex items-center mt-2 md:mt-0">
              Made with <Heart className="h-3 w-3 mx-1 text-red-500" /> by Gemini Alchemist Team
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
