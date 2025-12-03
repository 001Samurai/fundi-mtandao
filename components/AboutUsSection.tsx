'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Code, Megaphone, BarChart, Mail, Sparkles, ArrowRight, Globe, Smartphone, Zap, TrendingUp, Layers } from 'lucide-react'
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

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } }
  }

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
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            {/* Animated Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#175379]/20 to-[#e47a33]/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
            
            {/* Main Container */}
            <div className="relative bg-white/80 backdrop-blur-md border border-gray-200/50 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden">
              {/* Animated Grid Background */}
              <div className="absolute inset-0 opacity-30">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#17537908_1px,transparent_1px),linear-gradient(to_bottom,#17537908_1px,transparent_1px)] bg-[size:20px_20px]" />
              </div>

              {/* Floating Icons */}
              <div className="relative z-10 grid grid-cols-3 gap-6">
                {[
                  { icon: Globe, delay: 0, color: "from-blue-500/20 to-cyan-500/20" },
                  { icon: Code, delay: 0.2, color: "from-purple-500/20 to-pink-500/20" },
                  { icon: Smartphone, delay: 0.4, color: "from-orange-500/20 to-red-500/20" },
                  { icon: Zap, delay: 0.6, color: "from-yellow-500/20 to-orange-500/20" },
                  { icon: TrendingUp, delay: 0.8, color: "from-green-500/20 to-emerald-500/20" },
                  { icon: Layers, delay: 1, color: "from-indigo-500/20 to-blue-500/20" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: item.delay }}
                    whileHover={{ scale: 1.15, y: -8, rotate: [0, -5, 5, 0] }}
                    className="relative"
                  >
                    <motion.div
                      className={`p-6 bg-gradient-to-br ${item.color} rounded-2xl shadow-lg transition-all duration-300 relative`}
                      whileHover={{ scale: 1.1, shadow: "xl" }}
                    >
                      <motion.div
                        animate={{
                          scale: [1, 1.05, 1],
                        }}
                        transition={{
                          duration: 2 + index * 0.3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <item.icon className="h-8 w-8 text-[#175379]" />
                      </motion.div>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-[#175379]/10 to-[#e47a33]/10 rounded-2xl opacity-0"
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.div>
                  </motion.div>
                ))}
              </div>

              {/* Central Animated Element */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 z-0">
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-[#175379] via-[#15158c] to-[#e47a33] opacity-20 blur-2xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <motion.div
                  className="absolute inset-4 rounded-full border-2 border-[#175379]/30"
                  animate={{
                    rotate: [0, -360],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </div>

              {/* Connecting Lines Animation */}
              <svg className="absolute inset-0 w-full h-full opacity-20 z-0" viewBox="0 0 400 400">
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#175379" stopOpacity="0.5" />
                    <stop offset="50%" stopColor="#e47a33" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#15158c" stopOpacity="0.5" />
                  </linearGradient>
                </defs>
                <motion.path
                  d="M 100 100 Q 200 50 300 100 T 300 200"
                  stroke="url(#lineGradient)"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: 1 }}
                />
                <motion.path
                  d="M 100 300 Q 200 350 300 300 T 300 200"
                  stroke="url(#lineGradient)"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: 1.5 }}
                />
              </svg>

              {/* Floating Particles */}
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-[#e47a33] rounded-full opacity-40"
                  style={{
                    left: `${20 + (i * 7)}%`,
                    top: `${15 + (i * 6)}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.2, 0.6, 0.2],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 3 + i * 0.3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-white/60 backdrop-blur-md border border-gray-200/50 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                Crafting Digital Excellence
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                At Fundi wa Mtandao, we believe that every business deserves innovative, customized digital solutions. As a solopreneur-led startup, we leverage a network of top-tier freelance professionals from across the globe to meet your unique project needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="group bg-gradient-to-r from-[#175379] to-[#15158c] hover:from-[#e47a33] hover:to-[#175379] text-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Learn More
                  <ChevronDown className={`ml-2 h-4 w-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                </Button>
                <Link href="/about">
                  <Button 
                    variant="outline" 
                    className="w-full sm:w-auto border-2 border-[#175379] text-[#175379] hover:bg-[#175379] hover:text-white transition-all duration-300"
                  >
                    See About Page
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
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
              <Card className="bg-white/80 backdrop-blur-md border border-gray-200/50 shadow-xl">
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
                    <Card className="h-full bg-white/80 backdrop-blur-md border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300 group">
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

              <Accordion type="single" collapsible className="bg-white/80 backdrop-blur-md border border-gray-200/50 rounded-2xl shadow-xl overflow-hidden">
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

              <div className="bg-gradient-to-br from-[#175379]/10 via-[#15158c]/10 to-[#e47a33]/10 backdrop-blur-md border border-[#175379]/20 rounded-2xl p-8 shadow-xl">
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
