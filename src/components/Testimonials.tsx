import React, { useState, useEffect, useRef } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
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
  {
    id: 4,
    name: "Michael Thompson",
    role: "UI/UX Designer",
    avatar: "https://i.pravatar.cc/150?img=7",
    content: "The quality of the AI-generated edits is remarkable. It's become an essential part of my design process, saving me countless hours of manual editing.",
    rating: 5,
  },
  {
    id: 5,
    name: "Lisa Wong",
    role: "E-commerce Manager",
    avatar: "https://i.pravatar.cc/150?img=9",
    content: "We use this tool for all our product photos now. The consistency and quality of the output have significantly improved our online store's appearance.",
    rating: 5,
  },
  {
    id: 6,
    name: "James Anderson",
    role: "Professional Photographer",
    avatar: "https://i.pravatar.cc/150?img=11",
    content: "Even as a professional photographer, I find this tool invaluable. It handles complex edits with ease and maintains the natural look I aim for in my work.",
    rating: 4,
  },
];

const Testimonials: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (carouselRef.current?.offsetLeft || 0));
    setScrollLeft(carouselRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (carouselRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (isMobile) {
      const timer = setInterval(nextSlide, 5000);
      return () => clearInterval(timer);
    }
  }, [isMobile]);

  return (
    <section id="testimonials" className="py-16 w-full relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-emerald-500/20 rounded-full blur-[120px] opacity-30" />
      <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-sky-500/20 rounded-full blur-[120px] opacity-30" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center text-sm font-medium px-3 py-1 glass-panel rounded-full text-primary mb-4 neo-glow">
            <Quote className="h-3.5 w-3.5 mr-1.5" />
            <span>Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">What Our Users Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Join thousands of satisfied users who are transforming their images with AI
          </p>
        </div>
        
        {isMobile ? (
          <div className="relative w-full overflow-hidden">
            <div
              ref={carouselRef}
              className={cn(
                "flex transition-transform duration-300 ease-out snap-x snap-mandatory",
                isDragging ? "cursor-grabbing" : "cursor-grab"
              )}
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id} // Added key prop
                  className="min-w-full glass-panel rounded-xl p-6 transition-all duration-500 neo-glow"
                  style={{
                    opacity: 0,
                    animation: `fade-in-up 0.6s ease-out ${index * 100}ms forwards`
                  }}
                >
                  <div className="relative mb-6">
                    <Quote className="absolute -top-2 -left-2 h-6 w-6 text-primary/30 rotate-180" />
                    <p className="text-base text-foreground/90 leading-relaxed">{testimonial.content}</p>
                    <Quote className="absolute -bottom-2 -right-2 h-6 w-6 text-primary/30" />
                  </div>

                  <div className="flex items-center">
                    <div className="relative group">
                      <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-primary/40 transition-all duration-300 group-hover:ring-primary/60">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-emerald-500/20 to-sky-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    
                    <div className="ml-3 flex-1">
                      <h3 className="font-medium text-gradient">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground/80">{testimonial.role}</p>
                      <div className="flex mt-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={cn(
                              "w-3 h-3 mr-0.5 transition-all duration-300",
                              i < testimonial.rating
                                ? "text-yellow-400 fill-yellow-400 hover:scale-110"
                                : "text-gray-400"
                            )}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 glass-panel p-2 rounded-full z-10 hover:bg-primary/10 transition-colors"
            >
              <ChevronLeft className="h-6 w-6 text-primary" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 glass-panel p-2 rounded-full z-10 hover:bg-primary/10 transition-colors"
            >
              <ChevronRight className="h-6 w-6 text-primary" />
            </button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all",
                    currentSlide === index
                      ? "bg-primary scale-125"
                      : "bg-primary/50"
                  )}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="glass-panel rounded-xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl neo-glow"
                style={{
                  opacity: 0,
                  animation: `fade-in-up 0.6s ease-out ${index * 100}ms forwards`
                }}
              >
                <div className="relative mb-8">
                  <Quote className="absolute -top-3 -left-3 h-8 w-8 text-primary/30 rotate-180" />
                  <p className="text-base text-foreground/90 leading-relaxed">{testimonial.content}</p>
                  <Quote className="absolute -bottom-3 -right-3 h-8 w-8 text-primary/30" />
                </div>

                <div className="flex items-center">
                  <div className="relative group">
                    <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-primary/40 transition-all duration-300 group-hover:ring-primary/60">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-emerald-500/20 to-sky-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <div className="ml-4 flex-1">
                    <h3 className="font-medium text-gradient text-lg">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground/80">{testimonial.role}</p>
                    <div className="flex mt-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={cn(
                            "w-4 h-4 mr-0.5 transition-all duration-300",
                            i < testimonial.rating
                              ? "text-yellow-400 fill-yellow-400 hover:scale-110"
                              : "text-gray-400"
                          )}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;