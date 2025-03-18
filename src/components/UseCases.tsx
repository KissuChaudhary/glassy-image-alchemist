
import React from "react";
import { 
  ImageIcon, 
  ShoppingBag, 
  Users, 
  MessageSquare, 
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
        "glass-panel p-6 rounded-xl",
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
        <div className="p-2 glass-panel rounded-lg text-sky-400">
          {icon}
        </div>
        <h3 className="text-lg font-medium">{title}</h3>
      </div>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
};

const UseCases: React.FC = () => {
  return (
    <section id="use-cases" className="py-16 w-full bg-gradient-to-b from-background to-emerald-950/10">
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
            icon={<ShoppingBag className="h-5 w-5" />}
            title="E-commerce"
            description="Enhance product photos, remove backgrounds, and create consistent product imagery across your entire catalog without professional photography."
            delay={0}
          />
          
          <UseCaseCard 
            icon={<Users className="h-5 w-5" />}
            title="Social Media"
            description="Create eye-catching posts and profile images with AI-enhanced visuals that stand out from the crowd and increase engagement."
            delay={100}
          />
          
          <UseCaseCard 
            icon={<Globe className="h-5 w-5" />}
            title="Web Design"
            description="Generate and modify website imagery, banners, and graphics to match your brand's aesthetic without expensive design software."
            delay={200}
          />
          
          <UseCaseCard 
            icon={<MessageSquare className="h-5 w-5" />}
            title="Marketing"
            description="Create compelling visual content for campaigns, ads, and promotional materials in seconds rather than hours or days."
            delay={300}
          />
          
          <UseCaseCard 
            icon={<Camera className="h-5 w-5" />}
            title="Photography"
            description="Rescue poor-quality shots, adjust lighting, remove unwanted elements, and apply artistic effects to elevate your photography."
            delay={400}
          />
          
          <UseCaseCard 
            icon={<Layers className="h-5 w-5" />}
            title="Content Creation"
            description="Generate custom imagery for blogs, articles, presentations, and other content without worrying about copyright issues."
            delay={500}
          />
        </div>
      </div>
    </section>
  );
};

export default UseCases;
