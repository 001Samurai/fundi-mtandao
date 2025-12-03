'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { ArrowRight, Sparkles, CheckCircle2, Zap, Shield, TrendingUp, Code2, Globe, Smartphone, Search } from "lucide-react"
import { useEffect, useRef } from "react"

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 200 }
  const x = useSpring(useTransform(mouseX, [0, 1], [0, 20]), springConfig)
  const y = useSpring(useTransform(mouseY, [0, 1], [0, 20]), springConfig)

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
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <section 
      ref={containerRef}
      className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50/30 py-20 lg:py-32 overflow-hidden"
    >
      {/* Animated Gradient Mesh Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        
        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-r from-[#175379]/20 via-[#15158c]/15 to-[#e47a33]/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-[#e47a33]/20 via-[#175379]/15 to-[#15158c]/20 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, -60, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-[400px] h-[400px] bg-gradient-to-r from-[#15158c]/15 via-[#e47a33]/20 to-[#175379]/15 rounded-full blur-3xl"
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Floating Tech Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[
          { icon: Code2, x: '10%', y: '20%', delay: 0 },
          { icon: Globe, x: '85%', y: '15%', delay: 0.5 },
          { icon: Smartphone, x: '15%', y: '70%', delay: 1 },
          { icon: Search, x: '80%', y: '75%', delay: 1.5 },
        ].map(({ icon: Icon, x, y, delay }, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{ left: x, top: y }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 0.1, 0.1, 0],
              scale: [0, 1, 1, 0],
              y: [0, -30, -30, 0],
            }}
            transition={{
              duration: 4,
              delay: delay,
              repeat: Infinity,
              repeatDelay: 2,
              ease: "easeInOut",
            }}
          >
            <Icon className="w-8 h-8 text-[#175379]/20" />
          </motion.div>
        ))}
      </div>

      {/* Parallax floating elements */}
      <motion.div
        className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-[#175379]/10 to-[#e47a33]/10 rounded-3xl blur-2xl"
        style={{ x, y }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-tr from-[#15158c]/10 to-[#175379]/10 rounded-full blur-3xl"
        style={{ 
          x: useTransform(x, (v) => -v * 0.5),
          y: useTransform(y, (v) => -v * 0.5),
        }}
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          {/* Premium Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/80 backdrop-blur-md border border-[#175379]/20 text-[#175379] rounded-full text-sm font-semibold mb-8 shadow-lg hover:shadow-xl transition-shadow"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="h-4 w-4 text-[#e47a33]" />
            </motion.div>
            <span className="bg-gradient-to-r from-[#175379] to-[#15158c] bg-clip-text text-transparent">
              Trusted by 50+ Kenyan Businesses
            </span>
            <div className="flex -space-x-2">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-6 h-6 rounded-full bg-gradient-to-br from-[#175379] to-[#15158c] border-2 border-white"
                />
              ))}
            </div>
          </motion.div>

          {/* Main Headline with Advanced Typography */}
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight leading-[1.1] mb-8 lg:mb-10"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.span 
              className="block bg-clip-text text-transparent bg-gradient-to-r from-[#15158c] via-[#175379] to-[#e47a33]"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                backgroundSize: "200% 200%",
              }}
            >
              Premium Web Solutions
            </motion.span>
            <br />
            <span className="block text-gray-900 mt-2">
              That Drive <span className="relative inline-block">
                <span className="relative z-10">Real Results</span>
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-3 bg-[#e47a33]/20 -z-0"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                />
              </span>
            </span>
          </motion.h1>

          {/* Enhanced Subheadline */}
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mb-10 lg:mb-14 leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We craft <span className="font-semibold text-[#175379]">cutting-edge digital experiences</span> that transform businesses. 
            Expert web development, digital marketing, and strategic consulting for ambitious Kenyan enterprises.
          </motion.p>

          {/* Premium CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 lg:gap-6 items-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link href="/get-started">
              <Button 
                size="lg" 
                className="group relative px-10 lg:px-12 py-6 lg:py-7 text-lg font-semibold bg-gradient-to-r from-[#175379] via-[#15158c] to-[#175379] text-white rounded-full shadow-2xl hover:shadow-[#175379]/50 transition-all duration-500 border-0 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start Your Project
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#e47a33] to-[#175379] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                />
              </Button>
            </Link>
            
            <Link href="/portfolio">
              <Button 
                variant="outline" 
                size="lg"
                className="group px-10 lg:px-12 py-6 lg:py-7 text-lg font-semibold border-2 border-[#175379] text-[#175379] hover:bg-[#175379] hover:text-white rounded-full transition-all duration-300 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl"
              >
                <span className="flex items-center gap-2">
                  View Portfolio
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="h-5 w-5" />
                  </motion.div>
                </span>
              </Button>
            </Link>
          </motion.div>

          {/* Premium Stats & Trust Indicators */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 w-full max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {[
              { icon: CheckCircle2, label: "100% Responsive", color: "text-green-600" },
              { icon: Zap, label: "Lightning Fast", color: "text-blue-600" },
              { icon: Shield, label: "Secure & Reliable", color: "text-purple-600" },
              { icon: TrendingUp, label: "SEO Optimized", color: "text-orange-600" },
            ].map(({ icon: Icon, label, color }, i) => (
              <motion.div
                key={i}
                className="group relative bg-white/60 backdrop-blur-md border border-gray-200/50 rounded-2xl p-6 hover:bg-white/80 hover:border-[#175379]/30 hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -4, scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 + i * 0.1 }}
              >
                <div className={`${color} mb-3 flex justify-center`}>
                  <Icon className="h-6 w-6" />
                </div>
                <p className="text-sm font-semibold text-gray-700">{label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-2 text-gray-400"
            >
              <span className="text-xs font-medium uppercase tracking-wider">Scroll</span>
              <div className="w-0.5 h-8 bg-gradient-to-b from-[#175379] to-transparent rounded-full" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

