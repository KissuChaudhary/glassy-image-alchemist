
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FileQuestion } from "lucide-react";

const NotFound: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="glass-panel rounded-xl p-8 max-w-md w-full text-center animate-zoom-in">
        <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full glass-panel">
          <FileQuestion className="h-8 w-8 text-primary" />
        </div>
        
        <h1 className="text-4xl font-bold text-gradient mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Oops! This page doesn't exist in our universe.
        </p>
        
        <Link to="/">
          <Button className="neo-glow">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Return to Home
          </Button>
        </Link>
        
        <div className="mt-8 pt-6 border-t border-white/10">
          <p className="text-sm text-muted-foreground">
            If you believe this is an error, please contact our support team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
