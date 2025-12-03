/** @jsxImportSource react */
'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote, Sparkles, Star } from 'lucide-react'
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
        name: "Ken",
        role: "CEO, Hotsprings Technologies",
        content: "Fundi wa Mtandao transformed our online presence. Their expertise in web development and digital marketing strategies led to a 200% increase in our customer engagement.",
        avatar: "/images/avatars/placeholder-avatar.png?height=100&width=100",
        rating: 5
    },
    {
        id: 2,
        name: "Mercy",
        role: "Director, Orion Homes",
        content: "The team at Fundi wa Mtandao is simply outstanding. Their innovative approach to our SEO and content strategy put us on the first page of search results for our key terms.",
        avatar: "/images/avatars/placeholder-avatar.png?height=100&width=100",
        rating: 5
    },
    {
        id: 3,
        name: "Khadija",
        role: "Founder, Serenita Hostels",
        content: "Fundi wa Mtandao's web design skills are unparalleled. They created a stunning, user-friendly site that perfectly captures our brand essence and has significantly boosted our conversions.",
        avatar: "/images/avatars/placeholder-avatar.png?height=100&width=100",
        rating: 5
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
        <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-blue-50/30">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
                <motion.div
                    className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-gradient-to-r from-[#175379]/10 via-[#e47a33]/10 to-[#15158c]/10 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360],
                    }}
                    transition={{
                        duration: 30,
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
                        <span>Testimonials</span>
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#15158c] via-[#175379] to-[#e47a33]">
                            What Our Clients Say
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Real results from real businesses we've helped transform
                    </p>
                </motion.div>

                <div className="relative max-w-5xl mx-auto">
                    <div className="relative h-[500px] md:h-[400px] overflow-hidden">
                        <AnimatePresence initial={false} custom={direction}>
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={{
                                    enter: (direction) => ({
                                        x: direction > 0 ? '100%' : '-100%',
                                        opacity: 0,
                                        scale: 0.9,
                                    }),
                                    center: {
                                        x: 0,
                                        opacity: 1,
                                        scale: 1,
                                    },
                                    exit: (direction) => ({
                                        x: direction < 0 ? '100%' : '-100%',
                                        opacity: 0,
                                        scale: 0.9,
                                    }),
                                }}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.3 },
                                    scale: { duration: 0.3 },
                                }}
                                className="absolute inset-0 flex items-center justify-center"
                            >
                                <Card className="w-full max-w-4xl bg-white/90 backdrop-blur-md border border-gray-200/50 shadow-2xl">
                                    <CardContent className="p-8 md:p-12">
                                        <div className="flex justify-center mb-6">
                                            <div className="p-4 bg-gradient-to-br from-[#175379]/10 to-[#e47a33]/10 rounded-full">
                                                <Quote className="text-[#175379] w-10 h-10" />
                                            </div>
                                        </div>
                                        <div className="flex justify-center mb-6">
                                            {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                                <Star key={i} className="w-5 h-5 fill-[#e47a33] text-[#e47a33]" />
                                            ))}
                                        </div>
                                        <p className="text-lg md:text-xl text-center mb-8 text-gray-700 leading-relaxed italic">
                                            "{testimonials[currentIndex].content}"
                                        </p>
                                        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                                            <div className="relative">
                                                <div className="absolute inset-0 bg-gradient-to-r from-[#175379] to-[#e47a33] rounded-full blur-md opacity-50" />
                                                <Image
                                                    src={testimonials[currentIndex].avatar}
                                                    alt={testimonials[currentIndex].name}
                                                    width={80}
                                                    height={80}
                                                    className="relative rounded-full border-4 border-white shadow-lg"
                                                />
                                            </div>
                                            <div className="text-center md:text-left">
                                                <h3 className="font-bold text-xl text-gray-900">{testimonials[currentIndex].name}</h3>
                                                <p className="text-gray-600">{testimonials[currentIndex].role}</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <Button
                        variant="outline"
                        size="icon"
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md hover:bg-white border-2 border-[#175379] text-[#175379] hover:text-white hover:bg-[#175379] z-40 shadow-lg hover:shadow-xl transition-all duration-300"
                        onClick={handlePrevious}
                    >
                        <ChevronLeft className="h-5 w-5" />
                        <span className="sr-only">Previous testimonial</span>
                    </Button>
                    <Button
                        variant="outline"
                        size="icon"
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white/90 backdrop-blur-md hover:bg-white border-2 border-[#175379] text-[#175379] hover:text-white hover:bg-[#175379] z-40 shadow-lg hover:shadow-xl transition-all duration-300"
                        onClick={handleNext}
                    >
                        <ChevronRight className="h-5 w-5" />
                        <span className="sr-only">Next testimonial</span>
                    </Button>
                </div>

                <div className="flex justify-center mt-12 gap-2">
                    {testimonials.map((_, index) => (
                        <motion.button
                            key={index}
                            className={`h-3 rounded-full transition-all duration-300 ${
                                index === currentIndex 
                                    ? 'w-8 bg-gradient-to-r from-[#175379] to-[#e47a33]' 
                                    : 'w-3 bg-gray-300 hover:bg-gray-400'
                            }`}
                            onClick={() => {
                                setDirection(index > currentIndex ? 1 : -1)
                                setCurrentIndex(index)
                            }}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <span className="sr-only">Go to testimonial {index + 1}</span>
                        </motion.button>
                    ))}
                </div>
            </div>
        </section>
    )
}
