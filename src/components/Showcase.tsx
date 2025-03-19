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
            <span className="text-sm font-medium uppercase tracking-wider">
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

        {/* Feature Selection Tabs */}
        <div className="mb-12 overflow-x-auto scrollbar-hide">
          <div className="flex justify-center space-x-2 md:space-x-4 min-w-max mx-auto">
            {showcaseItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "relative px-6 py-4 rounded-xl transition-all duration-300 group",
                  activeIndex === index ? "bg-white/5 backdrop-blur-md" : "hover:bg-white/5",
                )}
              >
                {/* Glow effect for active tab */}
                {activeIndex === index && (
                  <motion.div
                    layoutId="activeGlow"
                    className={cn("absolute inset-0 -z-10 rounded-xl opacity-30 blur-xl bg-gradient-to-r", item.color)}
                  />
                )}

                <div className="flex flex-col items-center">
                  <div
                    className={cn(
                      "p-3 rounded-xl bg-gradient-to-r mb-3",
                      item.color,
                      activeIndex === index ? "opacity-100" : "opacity-50 group-hover:opacity-70",
                    )}
                  >
                    {item.icon}
                  </div>
                  <span
                    className={cn(
                      "text-base font-medium",
                      activeIndex === index ? "text-white" : "text-gray-400 group-hover:text-gray-300",
                    )}
                  >
                    {item.title}
                  </span>
                </div>


              </motion.button>
            ))}
          </div>
        </div>

        {/* Main Showcase Display */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Image Transformation Display */}
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7 aspect-[4/3] rounded-2xl overflow-hidden relative"
            >
              {/* Animated gradient border */}
              <div className="absolute inset-0 p-[1px] rounded-2xl z-0">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent animate-border-flow" />
              </div>

              <div className="absolute inset-[1px] rounded-2xl overflow-hidden z-10">
                <ImageTransformer item={activeItem} />
              </div>
            </motion.div>

            {/* Information Panel */}
            <motion.div
              key={`info-${activeIndex}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-5 space-y-6"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className={cn("p-2 rounded-lg bg-gradient-to-r", activeItem.color)}>{activeItem.icon}</div>
                  <h3
                    className={cn(
                      "text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r",
                      activeItem.color,
                    )}
                  >
                    {activeItem.title}
                  </h3>
                </div>

                <p className="text-lg text-gray-300 leading-relaxed">{activeItem.description}</p>
              </div>

              <div className="space-y-4 mt-8">
                <h4 className="text-lg font-medium text-white">Transformation Features</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {activeItem.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.1 }}
                      className="flex items-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
                    >
                      <div className={cn("p-2 rounded-full bg-gradient-to-r", activeItem.color)}>
                        <Sparkles className="h-4 w-4" />
                      </div>
                      <p className="text-sm text-gray-300">{feature}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="pt-6">
                <a
                  href="#editor"
                  className="bg-neon-blue/10 backdrop-blur-md border border-neon-blue/30 text-white px-6 py-3 rounded-full hover:bg-neon-blue/20 transition-colors inline-flex items-center justify-center"
                >
                  Try it now
                  <Wand2 className="ml-2 h-4 w-4" />
                </a>
              </div>
            </motion.div>
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

