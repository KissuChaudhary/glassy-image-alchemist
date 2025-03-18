
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
];

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-16 w-full">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get answers to common questions about our image transformation tool
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto glass-panel rounded-xl p-6 md:p-8">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-white/10 last:border-0">
                <AccordionTrigger className="text-left font-medium py-4">
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
    </section>
  );
};

export default FAQ;
