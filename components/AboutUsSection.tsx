'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ChevronDown, Code, Megaphone, BarChart, Mail } from 'lucide-react'
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
    <section className="bg-gradient-to-b flex flex-col from-primary/10 to-background py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          Welcome to Fundi wa Mtandao.
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/images/new-about-img.png?height=400&width=600"
              alt="Fundi wa Mtandao About us Image"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="px-4 sm:px-6 md:px-8 max-w-full overflow-hidden">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-4">Your Vision, Our Expertise: Digital Solutions Tailored for You!</h3>
              <p className="text-sm sm:text-base mb-4">
                At Fundi wa Mtandao, we believe that every business deserves innovative, customized digital solutions. As a solopreneur-led startup, we leverage a network of top-tier freelance professionals from across the globe to meet your unique project needs.
              </p>
              <div className="flex space-x-2">
                <Button onClick={() => setIsExpanded(!isExpanded)}>
                  Learn More
                  <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                </Button>
                <Link href="/about">
                  <Button variant="outline" className="w-full sm:w-auto">
                    See About Page
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {isExpanded && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <Card className="mb-8">
              <CardContent className="pt-6">
                <p className="mb-4">
                  From web development to app design and digital marketing, we combine the best talents and industry insights to deliver exceptional results—on time, every time. Guided by a commitment to quality and collaboration, we manage every aspect of your project, ensuring seamless execution and your complete satisfaction.
                </p>
                <p>
                  Whether you're a small startup or an established enterprise, we are committed to helping you thrive in the digital landscape. We pride ourselves on our innovative approach, attention to detail, and dedication to client success.
                </p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardContent className="pt-6">
                  <Code className="h-12 w-12 text-[#e47a33] mb-4" />
                  <h4 className="text-xl font-semibold mb-2">Web Development</h4>
                  <p className="text-sm text-muted-foreground">
                    Custom websites and web applications built with the latest technologies.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <Megaphone className="h-12 w-12 text-[#e47a33] mb-4" />
                  <h4 className="text-xl font-semibold mb-2">Digital Marketing</h4>
                  <p className="text-sm text-muted-foreground">
                    Comprehensive strategies to boost your online presence and reach.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <BarChart className="h-12 w-12 text-[#e47a33] mb-4" />
                  <h4 className="text-xl font-semibold mb-2">Analytics & SEO</h4>
                  <p className="text-sm text-muted-foreground">
                    Data-driven insights and optimization to improve your performance.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Accordion type="single" collapsible className="mb-8">
              <AccordionItem value="services">
                <AccordionTrigger>Our Core Services</AccordionTrigger>
                <AccordionContent>
                  We offer a wide range of services including responsive web design, e-commerce solutions, content management systems, search engine optimization (SEO), pay-per-click advertising (PPC), social media marketing, email marketing, and more.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="process">
                <AccordionTrigger>Our Development Process</AccordionTrigger>
                <AccordionContent>
                  Our development process involves thorough planning, design, development, testing, and deployment. We use agile methodologies to ensure flexibility and continuous improvement throughout the project lifecycle.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="technologies">
                <AccordionTrigger>Technologies We Use</AccordionTrigger>
                <AccordionContent>
                  We work with a variety of modern technologies including React, Next.js, Node.js, Python, PHP, WordPress, and more. Our tech stack is always evolving to incorporate the latest and most effective tools in the industry.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="bg-primary/10 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-4">Get in Touch</h4>
              <div className="flex items-center mb-2">
                <Mail className="h-5 w-5 mr-2" />
                <span>Email: info@fundi-mtandao.com</span>
              </div>
              <a href='/get-started'>
                <div className="flex items-center hover:text-[#e47a33] mb-2">
                  <BarChart className="h-5 w-5 mr-2" />
                  <span>Schedule a Free Consultation</span>
                </div>
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}