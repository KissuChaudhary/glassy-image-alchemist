
import React from "react";
import { 
  Sparkles, 
  Wand2, 
  Repeat, 
  Zap, 
  Lock, 
  Layers, 
  Clock,
  DownloadCloud 
} from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon, 
  title, 
  description, 
  className,
  delay = 0
}) => {
  return (
    <div 
      className={cn(
        "glass-panel p-6 rounded-xl neo-glow",
        "transform transition-all duration-500 hover:-translate-y-1",
        className
      )}
      style={{ 
        animationDelay: `${delay}ms`,
        opacity: 0,
        animation: `zoom-in 0.5s ease-out ${delay}ms forwards`
      }}
    >
      <div className="flex items-center space-x-4 mb-4">
        <div className="p-2 glass-panel rounded-lg text-primary">
          {icon}
        </div>
        <h3 className="text-lg font-medium text-gradient">{title}</h3>
      </div>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  return (
    <section id="features" className="py-16 w-full">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center text-sm font-medium px-3 py-1 glass-panel rounded-full text-primary mb-4">
            <Sparkles className="h-3.5 w-3.5 mr-1.5" />
            <span>Cutting-edge AI Technology</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">Features that Transform Your Workflow</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Harness the full potential of Google's Gemini 2.0 Flash model with our intuitive interface.
            Transform images with simple prompts, no complex editing skills required.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard 
            icon={<Wand2 className="h-5 w-5" />}
            title="Intuitive Transformations"
            description="Simply describe what you want to change about your image, and let the AI handle the technical details."
            delay={0}
          />
          
          <FeatureCard 
            icon={<Repeat className="h-5 w-5" />}
            title="Unlimited Edits"
            description="Experiment with different prompts and transformations until you achieve the perfect result."
            delay={100}
          />
          
          <FeatureCard 
            icon={<Zap className="h-5 w-5" />}
            title="Lightning Fast"
            description="Powered by Google's Gemini 2.0 Flash model for rapid image generation without compromising on quality."
            delay={200}
          />
          
          <FeatureCard 
            icon={<Lock className="h-5 w-5" />}
            title="Privacy First"
            description="Your images and API keys remain on your device. We never store or access your content or credentials."
            delay={300}
          />
          
          <FeatureCard 
            icon={<Layers className="h-5 w-5" />}
            title="Advanced Edits"
            description="From style transfers to complex manipulations, achieve professional-level edits with simple text prompts."
            delay={400}
          />
          
          <FeatureCard 
            icon={<DownloadCloud className="h-5 w-5" />}
            title="Easy Export"
            description="Download your transformed images in high resolution for use in any project."
            delay={500}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
