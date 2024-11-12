'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { ArrowRight, ExternalLink, Github } from 'lucide-react'
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
        title: "E-commerce Platform Redesign",
        description: "Revamped a major e-commerce site, resulting in a 40% increase in conversions and 25% decrease in bounce rate.",
        image: "/images/projects/hotsprings-1.png?height=600&width=800",
        tags: ["React", "Next.js", "Tailwind CSS", "Stripe"],
        liveUrl: "https://hotsprings-techs.vercel.app/",
        githubUrl: "https://github.com/example/ecommerce",
        testimonial: {
            content: "The redesign transformed our online presence. Our sales have skyrocketed!",
            author: "Jane Doe, CEO of ExampleShop"
        }
    },
    {
        id: 2,
        title: "AI-Powered Content Management System",
        description: "Developed a CMS with AI-driven content suggestions, improving content quality and reducing production time by 50%.",
        image: "/images/projects/hotsprings-1.png?height=600&width=800",
        tags: ["Python", "Django", "React", "TensorFlow"],
        liveUrl: "https://example-cms.com",
        githubUrl: "https://github.com/example/ai-cms",
        testimonial: {
            content: "This CMS has revolutionized our content strategy. It's like having an AI assistant!",
            author: "John Smith, Content Director at TechMedia"
        }
    },
    {
        id: 3,
        title: "Blockchain-based Supply Chain Solution",
        description: "Created a transparent supply chain tracking system using blockchain, increasing trust and efficiency for a Fortune 500 company.",
        image: "/images/projects/hotsprings-1.png?height=600&width=800",
        tags: ["Solidity", "Ethereum", "React", "Node.js"],
        liveUrl: "https://example-supplychain.com",
        githubUrl: "https://github.com/example/blockchain-supply",
        testimonial: {
            content: "The transparency and efficiency gained from this solution have been game-changing for our operations.",
            author: "Alice Johnson, CTO of GlobalLogistics"
        }
    }
]

// Update the PortfolioItem props type
const PortfolioItem: React.FC<{ project: Project; isEven: boolean }> = ({ project, isEven }) => {
    const controls = useAnimation()
    const ref = useRef(null)
    const inView = useInView(ref, { once: true })

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
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
            }}
            className={`flex flex-col ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 mb-16`}
        >
            <div className="w-full md:w-1/2">
                <Card className="overflow-hidden">
                    <CardContent className="p-0">
                        <img src={project.image} alt={project.title} className="w-full h-auto transition-transform duration-300 hover:scale-105" />
                    </CardContent>
                </Card>
            </div>
            <div className="w-full md:w-1/2 space-y-4">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-primary/10 text-primary rounded-full text-sm">
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="flex gap-4">
                    <Button asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            View Live <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                    </Button>
                    <Button variant="outline" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            GitHub <Github className="ml-2 h-4 w-4" />
                        </a>
                    </Button>
                </div>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant="link" className="p-0">Read Testimonial</Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Client Testimonial</DialogTitle>
                            <DialogDescription>
                                <p className="text-lg italic mb-4">"{project.testimonial.content}"</p>
                                <p className="text-right font-semibold">- {project.testimonial.author}</p>
                            </DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>
            </div>
        </motion.div>
    )
}

export default function AdvancedPortfolio() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

    return (
        <section className="py-20 bg-gradient-to-b from-primary/10 to-background">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12">Our Top Projects</h2>
                <div className="mb-12">
                    {projects.map((project, index) => (
                        <PortfolioItem key={project.id} project={project} isEven={index % 2 !== 0} />
                    ))}
                </div>
                <div className="text-center">
                    <h3 className="text-2xl font-bold mb-6">Ready to start your project?</h3>
                    <div className="flex justify-center gap-4">
                        <Button size="lg" className="group">
                            Get in Touch
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                        <Button size="lg" variant="outline" asChild>
                            <a href="/portfolio">View All Projects</a>
                        </Button>
                    </div>
                </div>
                <div className="mt-16">
                    <h3 className="text-2xl font-bold text-center mb-6">Technologies We Excel In</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        {Array.from(new Set(projects.flatMap(p => p.tags))).map((tech, index) => (
                            <motion.div
                                key={tech}
                                className="relative"
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                whileHover={{ scale: 1.1 }}
                            >
                                <div className="px-4 py-2 bg-primary text-primary-foreground rounded-full">
                                    {tech}
                                </div>
                                {hoveredIndex === index && (
                                    <motion.div
                                        className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-background text-foreground px-3 py-1 rounded shadow-lg text-sm"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                    >
                                        Expert Level
                                    </motion.div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}