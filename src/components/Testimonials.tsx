
import React from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    id: 1,
    name: "Emily Johnson",
    role: "Graphic Designer",
    avatar: "https://i.pravatar.cc/150?img=1",
    content: "This tool has completely transformed my workflow! I can create stunning visuals in seconds instead of hours. The AI understands exactly what I'm looking for.",
    rating: 5,
  },
  {
    id: 2,
    name: "David Chen",
    role: "Marketing Director",
    avatar: "https://i.pravatar.cc/150?img=3",
    content: "We've been using this for our social media campaigns and the results are incredible. The ease of transforming images with just text prompts is game-changing.",
    rating: 5,
  },
  {
    id: 3,
    name: "Sarah Martinez",
    role: "Content Creator",
    avatar: "https://i.pravatar.cc/150?img=5",
    content: "As a content creator, I need to produce high-quality visuals quickly. This tool lets me experiment with different styles without having to learn complex editing software.",
    rating: 4,
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 w-full">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">What Our Users Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied users who are transforming their images with AI
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className="glass-panel rounded-xl p-6 neo-glow"
              style={{ 
                animationDelay: `${index * 150}ms`,
                opacity: 0,
                animation: `zoom-in 0.5s ease-out ${index * 150}ms forwards`
              }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4 ring-2 ring-purple-500/30">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium text-gradient">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star 
                    key={i}
                    className={cn(
                      "w-4 h-4 mr-1",
                      i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-400"
                    )}
                  />
                ))}
              </div>
              
              <p className="text-sm text-foreground italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
