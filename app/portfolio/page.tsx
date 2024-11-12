'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useAnimation, useInView } from 'framer-motion'
import { ArrowRight, ExternalLink, Github, Star, Award, TrendingUp } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

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
        company: string;
    };
    results: {
        icon: React.ElementType;
        label: string;
        value: string;
    }[];
}

const projects: Project[] = [
    {
        id: 1,
        title: "E-commerce Platform Redesign",
        description: "Revamped a major e-commerce site, resulting in a 40% increase in conversions and 25% decrease in bounce rate. Implemented modern UI/UX principles and optimized for mobile devices.",
        image: "/images/projects/ecommerce-redesign.jpg",
        tags: ["React", "Next.js", "Tailwind CSS", "Stripe"],
        liveUrl: "https://example-ecommerce.com",
        githubUrl: "https://github.com/example/ecommerce",
        testimonial: {
            content: "The redesign transformed our online presence. Our sales have skyrocketed, and customer feedback has been overwhelmingly positive.",
            author: "Jane Doe",
            company: "CEO of ExampleShop"
        },
        results: [
            { icon: TrendingUp, label: "Conversion Rate Increase", value: "40%" },
            { icon: Star, label: "Customer Satisfaction", value: "4.8/5" },
            { icon: Award, label: "Design Award Nominee", value: "2023" }
        ]
    },
    {
        id: 2,
        title: "AI-Powered Content Management System",
        description: "Developed a CMS with AI-driven content suggestions, improving content quality and reducing production time by 50%. Integrated machine learning algorithms for personalized user experiences.",
        image: "/images/projects/ai-cms.jpg",
        tags: ["Python", "Django", "React", "TensorFlow"],
        liveUrl: "https://example-cms.com",
        githubUrl: "https://github.com/example/ai-cms",
        testimonial: {
            content: "This CMS has revolutionized our content strategy. It's like having an AI assistant that understands our brand voice perfectly.",
            author: "John Smith",
            company: "Content Director at TechMedia"
        },
        results: [
            { icon: TrendingUp, label: "Content Production Efficiency", value: "50%" },
            { icon: Star, label: "User Engagement Increase", value: "35%" },
            { icon: Award, label: "AI Innovation Award", value: "2023" }
        ]
    },
    {
        id: 3,
        title: "Blockchain-based Supply Chain Solution",
        description: "Created a transparent supply chain tracking system using blockchain, increasing trust and efficiency for a Fortune 500 company. Implemented smart contracts for automated processes.",
        image: "/images/projects/blockchain-supply.jpg",
        tags: ["Solidity", "Ethereum", "React", "Node.js"],
        liveUrl: "https://example-supplychain.com",
        githubUrl: "https://github.com/example/blockchain-supply",
        testimonial: {
            content: "The transparency and efficiency gained from this solution have been game-changing for our operations. We've seen a significant reduction in disputes and delays.",
            author: "Alice Johnson",
            company: "CTO of GlobalLogistics"
        },
        results: [
            { icon: TrendingUp, label: "Operational Efficiency Increase", value: "30%" },
            { icon: Star, label: "Stakeholder Trust Score", value: "9.2/10" },
            { icon: Award, label: "Supply Chain Innovation", value: "2023" }
        ]
    }
]

const PortfolioItem: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
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
            className="mb-16"
        >
            <Card className="overflow-hidden">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold">{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="relative h-64 md:h-full">
                            <Image
                                src={project.image}
                                alt={project.title}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-lg"
                            />
                        </div>
                        <div className="space-y-4">
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag, index) => (
                                    <Badge key={index} variant="secondary">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                {project.results.map((result, index) => (
                                    <div key={index} className="flex items-center space-x-2">
                                        <result.icon className="h-5 w-5 text-primary" />
                                        <div>
                                            <p className="text-sm font-medium">{result.label}</p>
                                            <p className="text-2xl font-bold">{result.value}</p>
                                        </div>
                                    </div>
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
                        </div>
                    </div>
                </CardContent>
                <CardFooter>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button variant="link" className="p-0">Read Client Testimonial</Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Client Testimonial</DialogTitle>
                                <DialogDescription>
                                    <blockquote className="text-lg italic mb-4">"{project.testimonial.content}"</blockquote>
                                    <p className="text-right font-semibold">- {project.testimonial.author}, {project.testimonial.company}</p>
                                </DialogDescription>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>
                </CardFooter>
            </Card>
        </motion.div>
    )
}

export default function PortfolioPage() {
    const [activeTab, setActiveTab] = useState('all')
    const headerRef = useRef(null)
    const headerInView = useInView(headerRef, { once: true })

    const filterProjects = (category: string) => {
        if (category === 'all') return projects
        return projects.filter(project => project.tags.some(tag => tag.toLowerCase().includes(category.toLowerCase())))
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
            <header ref={headerRef} className="py-20 text-center relative overflow-hidden" style={{ backgroundImage: 'url(/images/responsive-web.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <motion.div
                    className="absolute inset-0 z-0"
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.1 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="absolute inset-0 bg-grid-white/10 bg-grid-16 [mask-image:radial-gradient(ellipse_at_center,white,transparent_75%)]" />
                </motion.div>
                <div className="container mx-auto px-4 relative z-10">
                    <motion.h1
                        className="text-4xl text-white md:text-6xl font-bold mb-4"
                        initial={{ y: -50, opacity: 0 }}
                        animate={headerInView ? { y: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.5 }}
                    >
                        Our Portfolio
                    </motion.h1>
                    <motion.p
                        className="text-xl text-white text-muted-foreground max-w-2xl mx-auto mb-8"
                        initial={{ y: 50, opacity: 0 }}
                        animate={headerInView ? { y: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Explore our showcase of innovative digital solutions that have transformed businesses and delighted users.
                    </motion.p>
                </div>
            </header>

            <main className="container mx-auto px-4 py-16">
                <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-12">
                    <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 gap-2">
                        <TabsTrigger value="all">All Projects</TabsTrigger>
                        <TabsTrigger value="react">React</TabsTrigger>
                        <TabsTrigger value="python">Python</TabsTrigger>
                        <TabsTrigger value="blockchain">Blockchain</TabsTrigger>
                        <TabsTrigger value="ai">AI/ML</TabsTrigger>
                    </TabsList>
                </Tabs>

                <div className="space-y-16">
                    {filterProjects(activeTab).map((project, index) => (
                        <PortfolioItem key={project.id} project={project} index={index} />
                    ))}
                </div>

                <section className="mt-20 bg-primary text-primary-foreground rounded-lg p-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-4">Ready to Bring Your Vision to Life?</h2>
                        <p className="text-lg mb-8">Let's collaborate on your next digital project and create something extraordinary together.</p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Button size="lg" variant="secondary" asChild>
                                <Link href="/contact">
                                    Start Your Project
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                            <Button size="lg" variant="outline" asChild>
                                <Link href="/services">
                                    Explore Our Services
                                </Link>
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}