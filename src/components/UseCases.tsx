
import React from "react";
import { 
  ImageIcon, 
  ShoppingBag, 
  Users, 
  Wand2, 
  Palette, 
  ImagePlus,
  Globe,
  Camera,
  Layers
} from "lucide-react";
import { cn } from "@/lib/utils";

interface UseCaseCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  delay?: number;
}

const UseCaseCard: React.FC<UseCaseCardProps> = ({ 
  icon, 
  title, 
  description, 
  className,
  delay = 0
}) => {
  return (
    <div 
      className={cn(
        "relative overflow-hidden glass-panel p-8 rounded-2xl neo-glow",
        "transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl",
        "before:absolute before:inset-0 before:bg-gradient-to-br before:from-primary/5 before:to-transparent before:opacity-0 before:transition-opacity hover:before:opacity-100",
        className
      )}
      style={{ 
        animationDelay: `${delay}ms`,
        opacity: 0,
        animation: `zoom-in 0.5s ease-out ${delay}ms forwards`
      }}
    >
      <div className="relative z-10">
        <div className="flex items-center space-x-4 mb-6">
          <div className="p-3 glass-panel rounded-xl text-primary transform transition-transform group-hover:scale-110 hover:rotate-6">
            {icon}
          </div>
          <h3 className="text-xl font-semibold text-gradient">{title}</h3>
        </div>
        <p className="text-base text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

const UseCases: React.FC = () => {
  return (
    <section id="use-cases" className="py-16 w-full">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">Endless Possibilities</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our AI image editing technology can be applied to countless scenarios across industries.
            Discover how our image transformation tools can revolutionize your workflow.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <UseCaseCard 
            icon={<Wand2 className="h-5 w-5" />}
            title="Portrait Enhancement"
            description="Transform portraits with natural language commands - change hairstyles, add accessories, or modify facial features while maintaining photorealistic quality."
            delay={0}
          />
          
          <UseCaseCard 
            icon={<ImagePlus className="h-5 w-5" />}
            title="Background Magic"
            description="Simply describe your desired setting and watch as AI seamlessly places your subjects in new environments - from exotic locations to fantasy worlds."
            delay={100}
          />
          
          <UseCaseCard 
            icon={<Palette className="h-5 w-5" />}
            title="Style Transfer"
            description="Transform your photos into different artistic styles with text prompts - turn snapshots into oil paintings, watercolors, or any artistic style you can describe."
            delay={200}
          />
          
          <UseCaseCard 
            icon={<Users className="h-5 w-5" />}
            title="Group Photo Perfection"
            description="Fix group photos effortlessly - replace closed eyes, add missing people, or adjust positioning using simple text instructions."
            delay={300}
          />
          
          <UseCaseCard 
            icon={<ImageIcon className="h-5 w-5" />}
            title="Object Manipulation"
            description="Add, remove, or modify objects in your images naturally - from removing photobombers to adding props, all through conversational commands."
            delay={400}
          />
          
          <UseCaseCard 
            icon={<Layers className="h-5 w-5" />}
            title="Creative Effects"
            description="Apply complex visual effects with simple words - add magical glows, dramatic lighting, weather effects, or any creative enhancement you can imagine."
            delay={500}
          />
        </div>
      </div>
    </section>
  );
};

export default UseCases;
