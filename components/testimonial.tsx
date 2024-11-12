/** @jsxImportSource react */
'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

const testimonials = [
    {
        id: 1,
        name: "Alex Johnson",
        role: "CEO, TechInnovate",
        content: "DigitalCraft transformed our online presence. Their expertise in web development and digital marketing strategies led to a 200% increase in our customer engagement.",
        avatar: "/images/avatars/placeholder-avatar.png?height=100&width=100"
    },
    {
        id: 2,
        name: "Samantha Lee",
        role: "Marketing Director, GrowthGenius",
        content: "The team at DigitalCraft is simply outstanding. Their innovative approach to our SEO and content strategy put us on the first page of search results for our key terms.",
        avatar: "/images/avatars/placeholder-avatar.png?height=100&width=100"
    },
    {
        id: 3,
        name: "Michael Chen",
        role: "Founder, EcoTech Solutions",
        content: "DigitalCraft's web design skills are unparalleled. They created a stunning, user-friendly site that perfectly captures our brand essence and has significantly boosted our conversions.",
        avatar: "/images/avatars/placeholder-avatar.png?height=100&width=100"
    }
]

export default function AdvancedTestimonials() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [direction, setDirection] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            handleNext();
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    const handlePrevious = () => {
        setDirection(-1)
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
    }

    const handleNext = () => {
        setDirection(1);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }

    return (
        <section className="relative py-20">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 z-0" />
            <div className="absolute inset-0 z-10">
                <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path
                        d="M0,0 C40,30 60,70 100,100 L100,0 Z"
                        fill="rgba(255,255,255,0.1)"
                        className="animate-pulse"
                    />
                    <path
                        d="M0,100 C40,70 60,30 100,0 L0,0 Z"
                        fill="rgba(255,255,255,0.05)"
                        className="animate-pulse"
                    />
                </svg>
            </div>

            <div className="container mx-auto px-4 relative z-20">
                <h2 className="text-4xl font-bold text-center mb-12">What Our Clients Say</h2>

                <div className="relative max-w-4xl mx-auto">
                    <div className="relative h-[400px] md:h-[300px] overflow-hidden">
                        <AnimatePresence initial={false} custom={direction}>
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={{
                                    enter: (direction) => ({
                                        x: direction > 0 ? '100%' : '-100%',
                                        opacity: 0,
                                    }),
                                    center: {
                                        x: 0,
                                        opacity: 1,
                                    },
                                    exit: (direction) => ({
                                        x: direction < 0 ? '100%' : '-100%',
                                        opacity: 0,
                                    }),
                                }}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.2 },
                                }}
                                className="absolute inset-0 flex items-center justify-center"
                            >
                                <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-8 md:p-12">
                                    <Quote className="text-primary w-12 h-12 mb-6 mx-auto" />
                                    <p className="text-lg md:text-xl text-center mb-6">{testimonials[currentIndex].content}</p>
                                    <div className="flex items-center justify-center">
                                        <Image
                                            src={testimonials[currentIndex].avatar}
                                            alt={testimonials[currentIndex].name}
                                            width={64}
                                            height={64}
                                            className="rounded-full mr-4"
                                        />
                                        <div>
                                            <h3 className="font-semibold text-lg">{testimonials[currentIndex].name}</h3>
                                            <p className="text-muted-foreground">{testimonials[currentIndex].role}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <Button
                        variant="outline"
                        size="icon"
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white/80 hover:bg-white z-40"
                        onClick={handlePrevious}
                    >
                        <ChevronLeft className="h-4 w-4" />
                        <span className="sr-only">Previous testimonial</span>
                    </Button>
                    <Button
                        variant="outline"
                        size="icon"
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white/80 hover:bg-white z-40"
                        onClick={handleNext}
                    >
                        <ChevronRight className="h-4 w-4" />
                        <span className="sr-only">Next testimonial</span>
                    </Button>
                </div>

                <div className="flex justify-center mt-8">
                    {testimonials.map((_, index) => (
                        <Button
                            key={index}
                            variant="ghost"
                            size="sm"
                            className={`mx-1 ${index === currentIndex ? 'bg-primary text-primary-foreground' : 'bg-secondary'}`}
                            onClick={() => setCurrentIndex(index)}
                        >
                            <span className="sr-only">Go to testimonial {index + 1}</span>
                        </Button>
                    ))}
                </div>
            </div>
        </section>
    )
}