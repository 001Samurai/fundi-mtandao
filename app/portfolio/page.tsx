'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useAnimation, useInView } from 'framer-motion'
import { ArrowRight, ExternalLink, Github, Star, TrendingUp, Code, Palette, Smartphone, Globe } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

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
    deliverables: {
        icon: React.ElementType;
        label: string;
    }[];
}

const projects: Project[] = [
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
            author: "Ken ",
            company: "CEO of Hotsprings Technologies"
        },
        results: [
            { icon: TrendingUp, label: "Conversion Rate Increase", value: "40%" },
            { icon: Star, label: "Customer Satisfaction", value: "4.8/5" }
        ],
        deliverables: [
            { icon: Code, label: "Custom E-commerce Development" },
            { icon: Palette, label: "UI/UX Design" },
            { icon: Smartphone, label: "Responsive Design" },
            { icon: Globe, label: "Payment Gateway Integration" }
        ]
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
            author: "John",
            company: "Director at Serenita Hostels"
        },
        results: [
            { icon: TrendingUp, label: "Operational Efficiency Increase", value: "50%" },
            { icon: Star, label: "User Engagement Increase", value: "35%" }
        ],
        deliverables: [
            { icon: Globe, label: "Marketing Website" },
            { icon: Code, label: "Records Management System" },
            { icon: Palette, label: "Branding and Design" },
            { icon: Smartphone, label: "Mobile-Responsive Interface" }
        ]
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
            author: "Mercy",
            company: "CEO Orion Homes Kenya"
        },
        results: [
            { icon: TrendingUp, label: "Content Marketing Efficiency", value: "30%" },
            { icon: Star, label: "Stakeholder Trust Score", value: "9.2/10" }
        ],
        deliverables: [
            { icon: Globe, label: "Custom Website Development" },
            { icon: Palette, label: "Visual Design" },
            { icon: Code, label: "Booking System Integration" },
            { icon: Smartphone, label: "Mobile-Friendly Design" }
        ]
    },
    {
        id: 4,
        title: "Blog section for Orion Homes website ",
        description: "Created a blog website for a  serviced apartments business in Kenya. Performed research and generated the content for the blog posts. Led to a 50% increase in brand awareness and 30% increase in sales.",
        image: "/images/projects/orionhomes-blog.webp?height=600&width=800",
        tags: ["HTML", "CSS", "Javascript", "Bootstrap"],
        liveUrl: "https://orionhomeskenya.co.ke/blog",
        githubUrl: "https://github.com/001Samurai",
        testimonial: {
            content: "The website has enabled us to reach a broader audience thus increase sales with time thanks to Fundi wa Mtandao!",
            author: "Mercy",
            company: "CEO Orion Homes Kenya"
        },
        results: [
            { icon: TrendingUp, label: "Content Marketing Efficiency", value: "30%" },
            { icon: Star, label: "Stakeholder Trust Score", value: "9.2/10" }
        ],
        deliverables: [
            { icon: Code, label: "Blog Development" },
            { icon: Palette, label: "Content Strategy" },
            { icon: Globe, label: "SEO Optimization" },
            { icon: Smartphone, label: "Responsive Blog Design" }
        ]
    },
    {
        id: 5,
        title: "Wazo La Mkenya - Youth-Focused Blog",
        description: "Developed a dynamic blog website called 'Wazo La Mkenya' for a local influencer, targeting Kenyan youth with diverse content ranging from tech innovation to philosophical musings.",
        image: "/images/projects/wazo-la-mkenya.webp?height=600&width=800",
        tags: ["HTML", "CSS", "Javascript", "Bootstrap"],
        liveUrl: "https://wazolamkenya.soon.it/",
        githubUrl: "https://github.com/001Samurai/wazo-la-mkenya",
        testimonial: {
            content: "The blog has become a powerful platform for Kenyan youth to engage with important topics. The design and functionality perfectly capture our vision!",
            author: "Amani",
            company: "Founder, Wazo La Mkenya"
        },
        results: [
            { icon: TrendingUp, label: "Monthly Active Users", value: "50K+" },
            { icon: Star, label: "User Engagement Rate", value: "78%" }
        ],
        deliverables: [
            { icon: Globe, label: "Responsive Blog Website" },
            { icon: Palette, label: "Custom Theme Design" },
            { icon: Code, label: "Content Management System" },
            { icon: Smartphone, label: "Mobile-Optimized Interface" }
        ]
    },
    {
        id: 6,
        title: "Team HK CBO - Youth Empowerment Website",
        description: "Designed and developed a website for Team HK CBO, a local organization focused on youth empowerment. This project marked a significant milestone as one of the first major web development undertakings.",
        image: "/images/projects/teamHK.webp?height=600&width=800",
        tags: ["HTML", "CSS", "Javascript", "Bootstrap"],
        liveUrl: "https://001samurai.github.io/",
        githubUrl: "https://github.com/001Samurai/team-hk-cbo",
        testimonial: {
            content: "The website has significantly boosted our online presence and helped us reach more youth. It's user-friendly and perfectly represents our mission.",
            author: "Elvis",
            company: "Director, Team HK CBO"
        },
        results: [
            { icon: TrendingUp, label: "Volunteer Sign-ups", value: "+150%" },
            { icon: Star, label: "Community Engagement", value: "85%" }
        ],
        deliverables: [
            { icon: Globe, label: "Responsive Website" },
            { icon: Palette, label: "Branding Integration" },
            { icon: Code, label: "Interactive Elements" },
            { icon: Smartphone, label: "Mobile-First Design" }
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
                                className="rounded-lg w-full h-auto transition-transform duration-300 hover:scale-105"
                            />
                        </div>
                        <div className="space-y-6">
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag, index) => (
                                    <Badge key={index} variant="secondary">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold">Delivered Services:</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    {project.deliverables.map((deliverable, index) => (
                                        <div key={index} className="flex items-center space-x-2">
                                            <deliverable.icon className="h-5 w-5 text-primary" />
                                            <p className="text-sm font-medium">{deliverable.label}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold">Delivered results:</h3>
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
                            </div>
                            <div className="flex gap-4">
                                <Button asChild>
                                    <a href={project.liveUrl} target="_blank" className='hover:text-white' rel="noopener noreferrer">
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
        <div className="min-h-screen bg-gradient-to-b from-slate-50 via-background to-secondary/10">
            {/* Portfolio Hero */}
            <header
                ref={headerRef}
                className="py-20 md:py-24 text-center relative overflow-hidden bg-gradient-to-br from-[#15158c] via-[#175379] to-[#e47a33] text-white"
            >
                <motion.div
                    className="absolute inset-0 z-0"
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.25 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#ffffff55,_transparent_55%),radial-gradient(circle_at_bottom,_#00000066,_transparent_55%)]" />
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff22_1px,transparent_1px),linear-gradient(to_bottom,#ffffff22_1px,transparent_1px)] bg-[size:24px_24px]" />
                </motion.div>
                <div className="container mx-auto px-4 relative z-10">
                    <motion.p
                        className="text-xs md:text-sm uppercase tracking-[0.25em] text-white/70 mb-3"
                        initial={{ y: -10, opacity: 0 }}
                        animate={headerInView ? { y: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.4 }}
                    >
                        Portfolio
                    </motion.p>
                    <motion.h1
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-slate-900"
                        initial={{ y: -40, opacity: 0 }}
                        animate={headerInView ? { y: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.5 }}
                    >
                        Real projects for real Kenyan brands.
                    </motion.h1>
                    <motion.p
                        className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8"
                        initial={{ y: 30, opacity: 0 }}
                        animate={headerInView ? { y: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.15 }}
                    >
                        Explore websites, platforms, and digital experiences we&apos;ve crafted for e‑commerce, hospitality,
                        youth organizations, and more.
                    </motion.p>
                </div>
            </header>

            <main className="container mx-auto px-4 py-16 space-y-16">
                <section aria-label="Filter portfolio projects by technology">
                    <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-12">
                        <TabsList className="grid w-full grid-cols-5 text-xs md:grid-cols-5 bg-[#175379] text-white gap-2">
                            <TabsTrigger value="all">All</TabsTrigger>
                            <TabsTrigger value="react">React</TabsTrigger>
                            <TabsTrigger value="python">Python</TabsTrigger>
                            <TabsTrigger value="bootstrap">Bootstrap</TabsTrigger>
                            <TabsTrigger value="Nextjs">NextJS</TabsTrigger>
                        </TabsList>
                    </Tabs>
                </section>

                <section aria-labelledby="portfolio-list">
                    <h2 id="portfolio-list" className="sr-only">
                        List of portfolio projects
                    </h2>
                    <div className="space-y-16">
                        {filterProjects(activeTab).map((project, index) => (
                            <PortfolioItem key={project.id} project={project} index={index} />
                        ))}
                    </div>
                </section>

                <section className="mt-20 bg-slate-900/80 text-slate-50 rounded-lg p-8 backdrop-blur-xl border border-slate-800/60">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-4">Ready to bring your vision to life?</h2>
                        <p className="text-lg mb-8">
                            Let&apos;s collaborate on your next website or digital experience and create something your
                            audience will remember.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Button size="lg" variant="secondary" asChild>
                                <Link href="/get-started">
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