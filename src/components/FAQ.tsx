
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "How does the image transformation work?",
    answer: "Our app uses Google's Gemini 2.0 Flash AI model to understand your text prompts and apply the requested changes to your images. The AI has been trained on millions of images and can understand complex instructions to transform your images accordingly.",
  },
  {
    question: "Do I need to have design skills to use this tool?",
    answer: "Not at all! That's the beauty of our app - you only need to describe what you want in plain English. The AI handles all the technical aspects of the image transformation, making it accessible to everyone regardless of design experience.",
  },
  {
    question: "What types of images can I transform?",
    answer: "You can transform virtually any type of image, including photographs, illustrations, and graphics. The AI works best with clear, high-quality images, but can handle a wide variety of inputs.",
  },
  {
    question: "Are there any usage limits?",
    answer: "Free accounts can transform a limited number of images per month. For unlimited transformations and priority processing, check out our premium plans.",
  },
  {
    question: "How do I get the best results?",
    answer: "For best results, use clear and specific prompts. Instead of 'make it better,' try 'enhance the colors and make the background blurrier.' The more details you provide, the better the AI can understand your vision.",
  },
  {
    question: "Is my data private and secure?",
    answer: "Yes, we take data privacy very seriously. Your images are processed securely and not stored permanently on our servers. We never use your images for training our models without explicit consent.",
  },
  {
    question: "What is the maximum image resolution supported?",
    answer: "Our tool supports images up to 4K resolution (3840x2160 pixels). For optimal performance and faster processing, we recommend using images between 1080p and 4K. Larger images will be automatically resized while maintaining quality.",
  },
  {
    question: "How long does the transformation process take?",
    answer: "Most transformations are completed within 5-15 seconds, depending on the complexity of your request and image size. Premium users enjoy priority processing with even faster turnaround times.",
  },
  {
    question: "What file formats are supported?",
    answer: "We support all major image formats including JPEG, PNG, WebP, and HEIC. The transformed images can be downloaded in your preferred format, with options for quality and compression settings.",
  },
  {
    question: "Can I save my transformation presets?",
    answer: "Yes! Premium users can save their favorite transformation settings as custom presets. This is perfect for maintaining consistent styles across multiple images or streamlining your workflow.",
  },
];

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-16 w-full relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-emerald-500/20 rounded-full blur-[120px] opacity-30" />
      <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-sky-500/20 rounded-full blur-[120px] opacity-30" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get answers to common questions about our image transformation tool
          </p>
        </div>
        
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-panel rounded-xl p-6 md:p-8 neo-glow">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.slice(0, 5).map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`} 
                  className="border-b border-white/10 last:border-0"
                  style={{
                    opacity: 0,
                    animation: `fade-in-up 0.5s ease-out ${index * 100}ms forwards`
                  }}
                >
                  <AccordionTrigger 
                    className="text-left font-medium py-4 hover:no-underline transition-colors hover:text-primary"
                  >
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          
          <div className="glass-panel rounded-xl p-6 md:p-8 neo-glow">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.slice(5).map((item, index) => (
                <AccordionItem 
                  key={index + 5} 
                  value={`item-${index + 5}`} 
                  className="border-b border-white/10 last:border-0"
                  style={{
                    opacity: 0,
                    animation: `fade-in-up 0.5s ease-out ${(index + 5) * 100}ms forwards`
                  }}
                >
                  <AccordionTrigger 
                    className="text-left font-medium py-4 hover:no-underline transition-colors hover:text-primary"
                  >
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
