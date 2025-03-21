"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Wand2, Sparkles, ImagePlus, Palette, Layers, Type, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { useInView } from "react-intersection-observer"

// Showcase items with more creative titles and descriptions
const showcaseItems = [
  {
    id: 1,
    title: "Text-to-Edit",
    description:
      "Simply describe your desired changes in natural language, and watch as our AI transforms your image exactly as you imagined. No technical skills needed.",
    beforeImage: "https://picsum.photos/id/22/800/600",
    afterImage: "https://picsum.photos/id/21/800/600",
    icon: <Type className="h-5 w-5" />,
    color: "from-emerald-500 to-sky-500",
    features: ["Natural language editing", "Instant transformations", "Intuitive interface"],
  },
  {
    id: 2,
    title: "Background Magic",
    description:
      "Change or replace backgrounds instantly with a simple text prompt. From office to beach, or studio to street - the possibilities are endless.",
    beforeImage: "https://picsum.photos/id/28/800/600",
    afterImage: "https://picsum.photos/id/29/800/600",
    icon: <Layers className="h-5 w-5" />,
    color: "from-emerald-500 to-sky-500",
    features: ["Smart background detection", "Seamless blending", "Realistic lighting adaptation"],
  },
  {
    id: 3,
    title: "Object Control",
    description:
      "Add, remove, or modify objects in your images with simple text commands. Perfect for e-commerce, social media, or creative projects.",
    beforeImage: "https://picsum.photos/id/31/800/600",
    afterImage: "https://picsum.photos/id/30/800/600",
    icon: <ImagePlus className="h-5 w-5" />,
    color: "from-emerald-500 to-sky-500",
    features: ["Object removal", "Smart addition", "Size and position control"],
  },
  {
    id: 4,
    title: "Style Transfer",
    description:
      "Transform the look and feel of your images while preserving their core content. Apply artistic styles, adjust moods, or match brand guidelines.",
    beforeImage: "https://picsum.photos/id/26/800/600",
    afterImage: "https://picsum.photos/id/25/800/600",
    icon: <Palette className="h-5 w-5" />,
    color: "from-emerald-500 to-sky-500",
    features: ["Artistic style transfer", "Color scheme adjustment", "Mood enhancement"],
  },
]

const ImageTransformer = ({ item }: { item: (typeof showcaseItems)[0] }) => {
  const [showAfter, setShowAfter] = useState(false)
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  })

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setShowAfter(true)
      }, 1000)
      return () => clearTimeout(timer)
    } else {
      setShowAfter(false)
    }
  }, [inView])

  return (
    <div ref={ref} className="relative w-full h-full rounded-2xl overflow-hidden glass-panel">
      <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px] z-10 rounded-2xl"></div>

      <AnimatePresence mode="wait">
        {!showAfter ? (
          <motion.div
            key="before"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img
              src={item.beforeImage || "/placeholder.svg"}
              alt="Original image"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 glass-panel px-3 py-1 rounded-full text-xs text-primary z-20">
              Original
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="after"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img
              src={item.afterImage || "/placeholder.svg"}
              alt="Transformed image"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 right-4 glass-panel neo-glow px-3 py-1 rounded-full text-xs text-primary z-50 flex items-center backdrop-blur-sm bg-black/20 border border-white/20 shadow-lg">
              <Sparkles className="h-3 w-3 mr-1 text-primary" />
              Transformed
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Magic particles effect during transition */}
      {!showAfter && inView && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 z-20 pointer-events-none"
        >
          <MagicParticles />
        </motion.div>
      )}

      {/* Replay button */}
      <button
        onClick={() => setShowAfter(false)}
        className="absolute top-4 right-4 z-30 glass-panel text-primary p-2 rounded-full hover:bg-primary/10 transition-colors"
      >
        <ArrowRight className="h-4 w-4 rotate-[-45deg]" />
      </button>
    </div>
  )
}

// Magic particles animation component
const MagicParticles = () => {
  return (
    <div className="relative w-full h-full">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          initial={{
            x: "50%",
            y: "50%",
            scale: 0,
            opacity: 0,
          }}
          animate={{
            x: `${Math.random() * 100}%`,
            y: `${Math.random() * 100}%`,
            scale: Math.random() * 0.5 + 0.5,
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 1 + Math.random() * 1,
            ease: "easeOut",
            times: [0, 0.2, 1],
          }}
          className={cn(
            "absolute w-2 h-2 rounded-full bg-gradient-to-r",
            i % 4 === 0
              ? "from-emerald-400 to-sky-400"
              : i % 4 === 1
                ? "from-sky-400 to-emerald-400"
                : i % 4 === 2
                  ? "from-emerald-400 to-teal-400"
                  : "from-teal-400 to-sky-400",
          )}
          style={{
            filter: "blur(1px)",
            boxShadow: "0 0 8px currentColor",
          }}
        />
      ))}
    </div>
  )
}

const Showcase: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeItem = showcaseItems[activeIndex]

  return (
    <section
      id="showcase"
      className="py-24 w-full bg-gradient-to-b from-background to-emerald-950/10 overflow-hidden"
    >
      <div className="container mx-auto px-4 relative">
        {/* Background glow effects */}
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-emerald-500/20 rounded-full blur-[120px] opacity-30" />
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-sky-500/20 rounded-full blur-[120px] opacity-30" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto relative z-10"
        >
          <div className="inline-flex items-center justify-center gap-2 mb-4 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <Wand2 className="h-5 w-5 " />
            <span className="text-sm font-medium  uppercase tracking-wider">
              AI Transformation Studio
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            <span className="text-3xl md:text-4xl font-bold text-gradient mb-4">
              Transform Images with AI Magic
            </span>
          </h2>
          <p className="text-gray-300 mx-auto text-lg">
            Experience the future of image editing. Our AI transforms ordinary photos into extraordinary visual
            experiences with just a few clicks. No design skills required.
          </p>
        </motion.div>



        {/* Main Showcase Display */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Image transformer */}
            <div className="relative w-full max-w-[1200px] aspect-[3/2] mx-auto overflow-hidden">
              <div className="absolute inset-0">
                <ImageTransformer item={activeItem} />
              </div>
            </div>
            
            {/* Right side - Content */}
            <div className="space-y-8">
              {/* Description area */}
              <div className="glass-panel p-8 rounded-2xl backdrop-blur-sm border border-white/10 space-y-4">
                <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
                  {activeItem.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{activeItem.description}</p>
                
                {/* Features list */}
                <div className="pt-4 space-y-2">
                  {activeItem.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-sm text-gray-300">
                      <Sparkles className="h-4 w-4 text-primary" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Tabs navigation */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {showcaseItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => setActiveIndex(index)}
                    className={cn(
                      "relative px-4 py-3 rounded-xl transition-all duration-300 group overflow-hidden",
                      activeIndex === index
                        ? "glass-panel border border-white/20 shadow-lg"
                        : "hover:glass-panel hover:border hover:border-white/10"
                    )}
                  >
                    <div className="flex flex-col items-center gap-2 relative z-10">
                      <div
                        className={cn(
                          "p-2 rounded-lg transition-all duration-300",
                          activeIndex === index
                            ? "bg-gradient-to-r from-primary/20 to-primary/10 shadow-lg"
                            : "bg-white/5 group-hover:bg-white/10"
                        )}
                      >
                        {item.icon}
                      </div>
                      <span className="text-sm font-medium text-center line-clamp-1">
                        {item.title}
                      </span>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Feature Dots */}
        <div className="flex justify-center mt-12 gap-2">
          {showcaseItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "w-2.5 h-2.5 rounded-full transition-all duration-300",
                activeIndex === index
                  ? `bg-gradient-to-r ${showcaseItems[index].color} w-8`
                  : "bg-white/20 hover:bg-white/40",
              )}
              aria-label={`Go to ${showcaseItems[index].title}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Showcase

