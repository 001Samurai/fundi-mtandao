'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { ArrowRight, ExternalLink, Github, Sparkles } from 'lucide-react'
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
import Link from "next/link"
import Image from "next/image"

// Define the Project interface
interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    liveUrl: string;
    githubUrl: string;
    testimonial: {
        content: string;
        author: string;
    };
}

const projects = [
    {
        id: 1,
        title: "E-commerce Platform Design",
        description: "Created a major e-commerce site for a company that sales computers, printers, and other devices, resulting in a 40% increase in overall sales.",
        image: "/images/projects/hotsprings-1.webp?height=600&width=800",
        tags: ["React", "Next.js", "Tailwind CSS", "Mpesa"],
        liveUrl: "https://hotsprings-techs.vercel.app/",
        githubUrl: "https://github.com/001Samurai",
        testimonial: {
            content: "The web design transformed our online presence. Our sales have skyrocketed!",
            author: "Ken, CEO of Hotsprings Technologies"
        }
    },
    {
        id: 2,
        title: "Hostel Website and Records Management System",
        description: "Developed a marketing website for Serenita Hostels and a records management system.",
        image: "/images/projects/serenita.webp?height=600&width=800",
        tags: ["React", "Nextjs", "Tailwind CSS", "Javascript"],
        liveUrl: "https://serenita-hostels-site.vercel.app/",
        githubUrl: "https://github.com/001Samurai",
        testimonial: {
            content: "This Website has enabled us to market our hostel to a broader audience.The record management system has helped better manage our records.",
            author: "John, Director at Serenita Hostels"
        }
    },
    {
        id: 3,
        title: "A Serviced Apartments Website ",
        description: "Created a website a  serviced apartments business in Kenya. Led to a 50% increase in brand awareness and 30% increase in sales.",
        image: "/images/projects/orionhomes.webp?height=600&width=800",
        tags: ["HTML", "CSS", "Javascript", "Bootstrap"],
        liveUrl: "https://orionhomeskenya.co.ke",
        githubUrl: "https://github.com/001Samurai",
        testimonial: {
            content: "The website has enabled us to reach a broader audience thus increase sales with time thanks to Fundi wa Mtandao!",
            author: "Mercy, CEO, Orion Homes Kenya"
        }
    }
]

// Update the PortfolioItem props type
const PortfolioItem: React.FC<{ project: Project; isEven: boolean }> = ({ project, isEven }) => {
    const controls = useAnimation()
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: "-100px" })

    useEffect(() => {
        if (inView) {
            controls.start("visible")
        }
    }, [controls, inView])

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
                hidden: { opacity: 0, y: 80 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
            }}
            className={`flex flex-col ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 mb-20`}
        >
            <motion.div 
                className="w-full md:w-1/2 relative group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-[#175379]/20 to-[#e47a33]/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
                <Card className="relative overflow-hidden border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
                    <CardContent className="p-0">
                        <div className="relative overflow-hidden rounded-2xl">
                            <Image 
                                src={project.image} 
                                alt={project.title} 
                                width={800} 
                                height={600} 
                                className="w-full h-auto transition-transform duration-700 group-hover:scale-110" 
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                    </CardContent>
                </Card>
            </motion.div>
            
            <motion.div 
                className="w-full md:w-1/2 space-y-6"
                initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <div className="bg-white/80 backdrop-blur-md border border-gray-200/50 rounded-2xl p-8 shadow-xl">
                    <h3 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#15158c] to-[#175379]">
                        {project.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                        {project.description}
                    </p>
                    <div className="flex flex-wrap gap-3 mb-6">
                        {project.tags.map((tag, index) => (
                            <motion.span 
                                key={index} 
                                className="px-4 py-2 bg-gradient-to-r from-[#175379]/10 to-[#e47a33]/10 text-[#175379] rounded-full text-sm font-semibold border border-[#175379]/20"
                                whileHover={{ scale: 1.1, backgroundColor: "#175379", color: "white" }}
                                transition={{ duration: 0.2 }}
                            >
                                {tag}
                            </motion.span>
                        ))}
                    </div>
                    <div className="flex flex-wrap gap-4">
                        <Button 
                            asChild
                            className="group bg-gradient-to-r from-[#175379] to-[#15158c] hover:from-[#e47a33] hover:to-[#175379] text-white shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                View Live 
                                <ExternalLink className="ml-2 h-4 w-4 group-hover:rotate-45 transition-transform" />
                            </a>
                        </Button>
                        <Button 
                            variant="outline" 
                            asChild
                            className="border-2 border-[#175379] text-[#175379] hover:bg-[#175379] hover:text-white transition-all duration-300"
                        >
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                GitHub 
                                <Github className="ml-2 h-4 w-4" />
                            </a>
                        </Button>
                    </div>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button 
                                variant="link" 
                                className="p-0 mt-4 text-[#175379] hover:text-[#e47a33] transition-colors"
                            >
                                Read Testimonial →
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="bg-white/95 backdrop-blur-md border border-gray-200/50">
                            <DialogHeader>
                                <DialogTitle className="text-2xl font-bold text-[#175379]">Client Testimonial</DialogTitle>
                                <DialogDescription className="pt-4">
                                    <p className="text-lg italic mb-6 text-gray-700 leading-relaxed">"{project.testimonial.content}"</p>
                                    <p className="text-right font-semibold text-[#175379]">— {project.testimonial.author}</p>
                                </DialogDescription>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default function AdvancedPortfolio() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

    return (
        <section className="relative py-20 lg:py-32 bg-gradient-to-b from-white via-slate-50/50 to-white overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
                <motion.div
                    className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#175379]/10 via-[#15158c]/8 to-[#e47a33]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
                    animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 90, 0],
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
                        <span>Portfolio</span>
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#15158c] via-[#175379] to-[#e47a33]">
                            Our Top Projects
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Showcasing excellence in digital innovation and client success
                    </p>
                </motion.div>

                <div className="mb-16">
                    {projects.map((project, index) => (
                        <PortfolioItem key={project.id} project={project} isEven={index % 2 !== 0} />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h3 className="text-3xl font-bold mb-8 text-gray-900">Ready to start your project?</h3>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/contact">
                            <Button 
                                size="lg" 
                                className="group px-8 py-6 text-lg font-semibold bg-gradient-to-r from-[#175379] to-[#15158c] hover:from-[#e47a33] hover:to-[#175379] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                Get in Touch
                                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </Link>
                        <Button 
                            size="lg" 
                            variant="outline" 
                            asChild
                            className="px-8 py-6 text-lg font-semibold border-2 border-[#175379] text-[#175379] hover:bg-[#175379] hover:text-white rounded-full transition-all duration-300"
                        >
                            <a href="/portfolio">View All Projects</a>
                        </Button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-white/80 backdrop-blur-md border border-gray-200/50 rounded-3xl p-12 shadow-xl"
                >
                    <h3 className="text-3xl font-bold text-center mb-10 text-gray-900">Technologies We Excel In</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        {Array.from(new Set(projects.flatMap(p => p.tags))).map((tech, index) => (
                            <motion.div
                                key={tech}
                                className="relative"
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                whileHover={{ scale: 1.15, y: -5 }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="px-6 py-3 bg-gradient-to-r from-[#175379] to-[#15158c] text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
                                    {tech}
                                </div>
                                {hoveredIndex === index && (
                                    <motion.div
                                        className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg shadow-xl text-sm whitespace-nowrap"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                    >
                                        Expert Level
                                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45" />
                                    </motion.div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
