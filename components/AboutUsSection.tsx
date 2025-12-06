'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ChevronDown, Code, Megaphone, BarChart, Mail, Sparkles, ArrowRight, TrendingUp, Zap, Award, Users } from 'lucide-react'
import Link from 'next/link'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function AboutUsSection() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([])
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 200 }
  const x = useSpring(useTransform(mouseX, [0, 1], [-20, 20]), springConfig)
  const y = useSpring(useTransform(mouseY, [0, 1], [-20, 20]), springConfig)
  const rotateX = useSpring(useTransform(mouseY, [0, 1], [8, -8]), springConfig)
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-8, 8]), springConfig)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const width = rect.width
      const height = rect.height
      const mouseXRelative = (e.clientX - rect.left) / width
      const mouseYRelative = (e.clientY - rect.top) / height
      mouseX.set(mouseXRelative)
      mouseY.set(mouseYRelative)
      setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
    }

    const handleClick = (e: MouseEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const newRipple = { id: Date.now(), x, y }
      setRipples(prev => [...prev, newRipple])
      setTimeout(() => {
        setRipples(prev => prev.filter(r => r.id !== newRipple.id))
      }, 1000)
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener('mousemove', handleMouseMove)
      container.addEventListener('click', handleClick)
      return () => {
        container.removeEventListener('mousemove', handleMouseMove)
        container.removeEventListener('click', handleClick)
      }
    }
  }, [mouseX, mouseY])

  return (
    <section className="relative bg-gradient-to-b from-slate-50 via-white to-blue-50/30 py-20 lg:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
        <motion.div
          className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-[#175379]/10 via-[#15158c]/8 to-[#e47a33]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-md border border-[#175379]/20 text-[#175379] rounded-full text-sm font-semibold mb-6 shadow-lg"
          >
            <Sparkles className="h-4 w-4 text-[#e47a33]" />
            <span>About Us</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#15158c] via-[#175379] to-[#e47a33]">
              Welcome to Fundi wa Mtandao
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your Vision, Our Expertise: Digital Solutions Tailored for You!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            ref={containerRef}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group h-[500px] md:h-[600px] cursor-crosshair"
          >
            {/* Animated Background Glow with Mouse Interaction */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-[#175379]/20 via-[#15158c]/15 to-[#e47a33]/20 rounded-3xl blur-3xl"
              style={{ x, y }}
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            {/* Main Container with 3D Perspective */}
            <motion.div 
              className="relative h-full bg-gradient-to-br from-white/95 via-white/90 to-slate-50/95 backdrop-blur-2xl border border-gray-200/60 rounded-3xl shadow-2xl overflow-hidden"
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
            >
              {/* Animated Grid Pattern */}
              <div className="absolute inset-0 opacity-[0.04]">
                <motion.div 
                  className="absolute inset-0 bg-[linear-gradient(to_right,#175379_1px,transparent_1px),linear-gradient(to_bottom,#175379_1px,transparent_1px)] bg-[size:30px_30px]"
                  animate={{
                    x: [0, 30, 0],
                    y: [0, 30, 0],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </div>

              {/* Morphing Blob Animation */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg 
                  className="w-full h-full" 
                  viewBox="0 0 400 400" 
                  preserveAspectRatio="xMidYMid meet"
                >
                  <defs>
                    <linearGradient id="blobGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#175379" stopOpacity="0.3" />
                      <stop offset="50%" stopColor="#15158c" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#e47a33" stopOpacity="0.3" />
                    </linearGradient>
                    <linearGradient id="blobGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#e47a33" stopOpacity="0.25" />
                      <stop offset="50%" stopColor="#175379" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#15158c" stopOpacity="0.25" />
                    </linearGradient>
                    <filter id="blur">
                      <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
                    </filter>
                  </defs>

                  {/* Morphing Blob 1 */}
                  <motion.path
                    d="M200,150 Q250,100 300,150 T400,200 Q350,250 300,250 T200,250 Q150,200 200,150 Z"
                    fill="url(#blobGradient1)"
                    filter="url(#blur)"
                    animate={{
                      d: [
                        "M200,150 Q250,100 300,150 T400,200 Q350,250 300,250 T200,250 Q150,200 200,150 Z",
                        "M200,150 Q280,80 350,150 T400,220 Q320,280 250,280 T150,250 Q120,180 200,150 Z",
                        "M200,150 Q220,120 280,140 T360,200 Q340,240 280,260 T180,240 Q160,190 200,150 Z",
                        "M200,150 Q250,100 300,150 T400,200 Q350,250 300,250 T200,250 Q150,200 200,150 Z",
                      ],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  {/* Morphing Blob 2 */}
                  <motion.path
                    d="M100,200 Q150,150 200,200 T300,250 Q250,300 200,300 T100,250 Q50,200 100,200 Z"
                    fill="url(#blobGradient2)"
                    filter="url(#blur)"
                    animate={{
                      d: [
                        "M100,200 Q150,150 200,200 T300,250 Q250,300 200,300 T100,250 Q50,200 100,200 Z",
                        "M100,200 Q180,130 250,200 T350,280 Q270,340 200,340 T100,280 Q80,220 100,200 Z",
                        "M100,200 Q120,170 180,190 T260,240 Q240,280 180,300 T120,280 Q100,230 100,200 Z",
                        "M100,200 Q150,150 200,200 T300,250 Q250,300 200,300 T100,250 Q50,200 100,200 Z",
                      ],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                  />
                </svg>
              </div>

              {/* Floating 3D Cards - Interactive */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  {[
                    { icon: Code, delay: 0, x: "20%", y: "30%", rotate: -15, color: "from-blue-500/20 to-cyan-500/20" },
                    { icon: TrendingUp, delay: 0.3, x: "70%", y: "25%", rotate: 15, color: "from-purple-500/20 to-pink-500/20" },
                    { icon: Zap, delay: 0.6, x: "45%", y: "70%", rotate: -10, color: "from-orange-500/20 to-yellow-500/20" },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="absolute cursor-pointer"
                      style={{
                        left: item.x,
                        top: item.y,
                      }}
                      initial={{ opacity: 0, scale: 0, rotate: item.rotate }}
                      whileInView={{ opacity: 1, scale: 1, rotate: item.rotate }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        scale: 1.3, 
                        rotate: item.rotate + 15,
                        z: 50,
                      }}
                      whileTap={{ scale: 0.9 }}
                      animate={{
                        y: [0, -30, 0],
                        rotate: [item.rotate, item.rotate + 8, item.rotate],
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 4 + index * 0.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: item.delay,
                      }}
                    >
                      <motion.div 
                        className="p-5 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border-2 border-gray-200/50 relative overflow-hidden group"
                        whileHover={{ boxShadow: "0 20px 60px rgba(23, 83, 121, 0.3)" }}
                      >
                        <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                        <motion.div
                          className="relative z-10"
                          animate={{
                            rotate: [0, 5, -5, 0],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: item.delay,
                          }}
                        >
                          <item.icon className="h-10 w-10 text-[#175379] group-hover:text-[#e47a33] transition-colors duration-300" />
                        </motion.div>
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-br from-[#175379]/10 to-[#e47a33]/10 rounded-2xl"
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.6, 0.3],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: item.delay,
                          }}
                        />
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Interactive Particle System - Following Mouse */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(30)].map((_, i) => {
                  const baseX = Math.random() * 100
                  const baseY = Math.random() * 100
                  return (
                    <motion.div
                      key={i}
                      className="absolute w-1.5 h-1.5 bg-gradient-to-r from-[#175379] to-[#e47a33] rounded-full"
                      style={{
                        left: `${baseX}%`,
                        top: `${baseY}%`,
                      }}
                      animate={{
                        y: [0, -150, 0],
                        x: [0, (Math.random() - 0.5) * 80, 0],
                        opacity: [0, 0.8, 0],
                        scale: [0, 2, 0],
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 4 + Math.random() * 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: Math.random() * 3,
                      }}
                    />
                  )
                })}
              </div>

              {/* Mouse Following Particles */}
              <motion.div
                className="absolute w-3 h-3 pointer-events-none"
                style={{
                  left: mousePosition.x,
                  top: mousePosition.y,
                  x: "-50%",
                  y: "-50%",
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-[#e47a33] rounded-full blur-sm"
                  animate={{
                    scale: [1, 2, 1],
                    opacity: [0.6, 0, 0.6],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                />
                <motion.div
                  className="absolute inset-0 bg-[#175379] rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>

              {/* Ripple Effects on Click */}
              <AnimatePresence>
                {ripples.map((ripple) => (
                  <motion.div
                    key={ripple.id}
                    className="absolute pointer-events-none"
                    style={{
                      left: ripple.x,
                      top: ripple.y,
                      x: "-50%",
                      y: "-50%",
                    }}
                    initial={{ scale: 0, opacity: 0.8 }}
                    animate={{ scale: 4, opacity: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  >
                    <div className="w-20 h-20 rounded-full border-2 border-[#e47a33]" />
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Central Glowing Orb - Interactive */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 cursor-pointer"
                animate={{
                  scale: [1, 1.4, 1],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 1.2 }}
              >
                <motion.div 
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-[#175379] via-[#e47a33] to-[#15158c] opacity-30 blur-2xl"
                  animate={{
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div 
                  className="absolute inset-4 rounded-full border-2 border-[#175379]/40"
                  animate={{
                    borderColor: ["rgba(23, 83, 121, 0.4)", "rgba(228, 122, 51, 0.6)", "rgba(23, 83, 121, 0.4)"],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div 
                  className="absolute inset-8 rounded-full bg-gradient-to-br from-[#175379]/20 to-[#e47a33]/20"
                  animate={{
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <motion.div
                  className="absolute inset-12 rounded-full bg-gradient-to-br from-[#e47a33]/30 to-[#175379]/30"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>

              {/* Connecting Lines Between Elements */}
              <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none">
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#175379" stopOpacity="0.5" />
                    <stop offset="50%" stopColor="#e47a33" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#15158c" stopOpacity="0.5" />
                  </linearGradient>
                </defs>
                <motion.path
                  d="M 80 120 Q 200 200 280 100"
                  stroke="url(#lineGradient)"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="5,5"
                  initial={{ pathLength: 0, opacity: 0, strokeDashoffset: 0 }}
                  animate={{
                    pathLength: 1,
                    opacity: 1,
                    strokeDashoffset: [0, 20, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 1,
                  }}
                />
                <motion.path
                  d="M 120 280 Q 200 200 280 280"
                  stroke="url(#lineGradient)"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="5,5"
                  initial={{ pathLength: 0, opacity: 0, strokeDashoffset: 0 }}
                  animate={{
                    pathLength: 1,
                    opacity: 1,
                    strokeDashoffset: [0, 20, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 1.5,
                  }}
                />
              </svg>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden">
              {/* Animated Background Gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#175379]/5 via-transparent to-[#e47a33]/5 opacity-50"
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              
              <div className="relative z-10">
                <motion.h3 
                  className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-900"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#15158c] via-[#175379] to-[#e47a33]">
                    Crafting Digital Excellence
                  </span>
                </motion.h3>
                
                <motion.p 
                  className="text-gray-600 leading-relaxed mb-8 text-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  At <span className="font-semibold text-[#175379]">Fundi wa Mtandao</span>, we believe that every business deserves innovative, customized digital solutions. As a solopreneur-led startup, we leverage a network of top-tier freelance professionals from across the globe to meet your unique project needs.
                </motion.p>

                {/* Animated Stats */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {[
                    { value: "12+", label: "Projects", icon: Award },
                    { value: "100%", label: "Satisfaction", icon: Users },
                    { value: "24/7", label: "Support", icon: Zap },
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -5 }}
                      className="text-center p-4 bg-gradient-to-br from-[#175379]/5 to-[#e47a33]/5 rounded-xl border border-[#175379]/10"
                    >
                      <stat.icon className="h-5 w-5 text-[#175379] mx-auto mb-2" />
                      <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#175379] to-[#15158c]">
                        {stat.value}
                      </div>
                      <div className="text-xs text-gray-600 font-medium mt-1">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="group relative overflow-hidden bg-gradient-to-r from-[#175379] to-[#15158c] hover:from-[#e47a33] hover:to-[#175379] text-white shadow-xl hover:shadow-2xl transition-all duration-500"
                  >
                    <span className="relative z-10 flex items-center">
                  Learn More
                      <ChevronDown className={`ml-2 h-4 w-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-[#e47a33] to-[#175379] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      initial={false}
                    />
                </Button>
                <Link href="/about">
                    <Button 
                      variant="outline" 
                      className="w-full sm:w-auto border-2 border-[#175379] text-[#175379] hover:bg-[#175379] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                    See About Page
                      <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <AnimatePresence>
        {isExpanded && (
          <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
          >
              <Card className="bg-white/90 backdrop-blur-xl border border-gray-200/50 shadow-2xl">
                <CardContent className="pt-8 px-8 pb-8">
                  <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                  From web development to app design and digital marketing, we combine the best talents and industry insights to deliver exceptional results—on time, every time. Guided by a commitment to quality and collaboration, we manage every aspect of your project, ensuring seamless execution and your complete satisfaction.
                </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                  Whether you're a small startup or an established enterprise, we are committed to helping you thrive in the digital landscape. We pride ourselves on our innovative approach, attention to detail, and dedication to client success.
                  </p>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: Code, title: "Web Development", description: "Custom websites and web applications built with the latest technologies." },
                  { icon: Megaphone, title: "Digital Marketing", description: "Comprehensive strategies to boost your online presence and reach." },
                  { icon: BarChart, title: "Analytics & SEO", description: "Data-driven insights and optimization to improve your performance." },
                ].map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                  >
                    <Card className="h-full bg-white/90 backdrop-blur-xl border border-gray-200/50 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                      <CardContent className="pt-8 px-6 pb-8">
                        <div className="mb-4 p-4 bg-gradient-to-br from-[#175379]/10 to-[#e47a33]/10 rounded-xl w-fit group-hover:scale-110 transition-transform duration-300">
                          <service.icon className="h-8 w-8 text-[#175379] group-hover:text-[#e47a33] transition-colors duration-300" />
                        </div>
                        <h4 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h4>
                        <p className="text-gray-600 leading-relaxed">
                          {service.description}
                  </p>
                </CardContent>
              </Card>
                  </motion.div>
                ))}
            </div>

              <Accordion type="single" collapsible className="bg-white/90 backdrop-blur-xl border border-gray-200/50 rounded-2xl shadow-2xl overflow-hidden">
                <AccordionItem value="services" className="border-b border-gray-200/50">
                  <AccordionTrigger className="px-6 hover:bg-gray-50/50 transition-colors">
                    Our Core Services
                  </AccordionTrigger>
                  <AccordionContent className="px-6 text-gray-700">
                  We offer a wide range of services including responsive web design, e-commerce solutions, content management systems, search engine optimization (SEO), pay-per-click advertising (PPC), social media marketing, email marketing, and more.
                </AccordionContent>
              </AccordionItem>
                <AccordionItem value="process" className="border-b border-gray-200/50">
                  <AccordionTrigger className="px-6 hover:bg-gray-50/50 transition-colors">
                    Our Development Process
                  </AccordionTrigger>
                  <AccordionContent className="px-6 text-gray-700">
                  Our development process involves thorough planning, design, development, testing, and deployment. We use agile methodologies to ensure flexibility and continuous improvement throughout the project lifecycle.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="technologies">
                  <AccordionTrigger className="px-6 hover:bg-gray-50/50 transition-colors">
                    Technologies We Use
                  </AccordionTrigger>
                  <AccordionContent className="px-6 text-gray-700">
                  We work with a variety of modern technologies including React, Next.js, Node.js, Python, PHP, WordPress, and more. Our tech stack is always evolving to incorporate the latest and most effective tools in the industry.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

              <div className="bg-gradient-to-br from-[#175379]/10 via-[#15158c]/10 to-[#e47a33]/10 backdrop-blur-xl border border-[#175379]/20 rounded-2xl p-8 shadow-2xl">
                <h4 className="text-2xl font-bold mb-6 text-gray-900">Get in Touch</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-700">
                    <div className="p-2 bg-white/80 rounded-lg">
                      <Mail className="h-5 w-5 text-[#175379]" />
                    </div>
                <span>Email: info@fundi-mtandao.com</span>
              </div>
                  <Link href='/get-started' className="flex items-center gap-3 text-gray-700 hover:text-[#e47a33] transition-colors group">
                    <div className="p-2 bg-white/80 rounded-lg group-hover:bg-[#e47a33]/10 transition-colors">
                      <BarChart className="h-5 w-5 text-[#175379] group-hover:text-[#e47a33] transition-colors" />
                    </div>
                    <span className="font-semibold">Schedule a Free Consultation</span>
                  </Link>
                </div>
            </div>
          </motion.div>
        )}
        </AnimatePresence>
      </div>
    </section>
  )
}
