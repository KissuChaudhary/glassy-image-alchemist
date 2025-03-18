
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
            <span>PicshotAI - www.picshotai.com</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">Edit Images with Natural Language</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Transform your images using simple text prompts. Just describe the changes you want,
            and watch PicshotAI bring your creative vision to life instantly.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard 
            icon={<Wand2 className="h-5 w-5" />}
            title="Magical Transformations"
            description="Change appearances with ease - make someone bald, add costumes, or transform objects like turning a bike into a horse, all through simple text prompts."
            delay={0}
          />
          
          <FeatureCard 
            icon={<Repeat className="h-5 w-5" />}
            title="Background Wizardry"
            description="Instantly change or replace backgrounds with your desired scene - from serene beaches to urban graffiti walls, the possibilities are endless."
            delay={100}
          />
          
          <FeatureCard 
            icon={<Zap className="h-5 w-5" />}
            title="Object Addition & Removal"
            description="Add or remove objects naturally - surround a person with puppies, remove unwanted elements, or add new objects that blend seamlessly."
            delay={200}
          />
          
          <FeatureCard 
            icon={<Lock className="h-5 w-5" />}
            title="Character Customization"
            description="Dress up subjects in any style - add superhero costumes, change outfits, or transform characters while maintaining natural looks."
            delay={300}
          />
          
          <FeatureCard 
            icon={<Layers className="h-5 w-5" />}
            title="Creative Freedom"
            description="Let your imagination run wild - combine multiple edits, create fantastical scenes, or make subtle adjustments using natural language."
            delay={400}
          />
          
          <FeatureCard 
            icon={<DownloadCloud className="h-5 w-5" />}
            title="Instant Results"
            description="See your ideas come to life immediately. No technical skills needed - just describe what you want, and let AI handle the rest."
            delay={500}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
