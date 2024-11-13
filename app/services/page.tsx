'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Code, Megaphone, BarChart, Zap, Layers, Search, ShoppingCart, PenTool, Users } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const services = [
    {
        icon: Code,
        title: 'Web Development',
        description: 'Custom websites and web applications tailored to your unique business needs.',
        details: [
            'Responsive design for all devices',
            'Performance optimization',
            'Custom functionality and integrations',
            'Content Management Systems (CMS)',
        ]
    },
    {
        icon: Megaphone,
        title: 'Digital Marketing',
        description: 'Comprehensive strategies to boost your online presence and reach your target audience.',
        details: [
            'Search Engine Optimization (SEO)',
            'Pay-Per-Click (PPC) advertising',
            'Social Media Marketing',
            'Content Marketing',
        ]
    },
    {
        icon: BarChart,
        title: 'Analytics & Reporting',
        description: 'Data-driven insights to measure and improve your digital performance.',
        details: [
            'Website analytics setup and tracking',
            'Custom dashboard creation',
            'Conversion rate optimization',
            'Regular performance reports',
        ]
    },
    {
        icon: Zap,
        title: 'Performance Optimization',
        description: 'Enhance your website\'s speed and efficiency for better user experience and SEO.',
        details: [
            'Page speed optimization',
            'Server-side rendering',
            'Caching strategies',
            'Image and asset optimization',
        ]
    },
    {
        icon: Layers,
        title: 'UI/UX Design',
        description: 'Create intuitive and visually appealing interfaces that delight your users.',
        details: [
            'User research and persona development',
            'Wireframing and prototyping',
            'Visual design and branding',
            'Usability testing',
        ]
    },
    {
        icon: Search,
        title: 'SEO Services',
        description: 'Improve your search engine rankings and drive organic traffic to your website.',
        details: [
            'Keyword research and strategy',
            'On-page and technical SEO',
            'Link building and outreach',
            'Local SEO optimization',
        ]
    },
    {
        icon: ShoppingCart,
        title: 'E-commerce Solutions',
        description: 'Build and optimize online stores that drive sales and customer satisfaction.',
        details: [
            'Custom e-commerce website development',
            'Shopping cart and checkout optimization',
            'Payment gateway integration',
            'Inventory management systems',
        ]
    },
    {
        icon: PenTool,
        title: 'Content Creation',
        description: 'Develop engaging and SEO-friendly content that resonates with your audience.',
        details: [
            'Blog post and article writing',
            'Copywriting for websites and ads',
            'Infographic and visual content design',
            'Video script writing',
        ]
    },
    {
        icon: Users,
        title: 'Social Media Management',
        description: 'Build and engage your community across various social media platforms.',
        details: [
            'Social media strategy development',
            'Content calendar creation and management',
            'Community engagement and moderation',
            'Social media advertising campaigns',
        ]
    },
]

export default function ServicesPage() {
    const [activeTab, setActiveTab] = useState('all')
    const headerRef = useRef(null)
    const headerInView = useInView(headerRef, { once: true })

    const filterServices = (category: string) => {
        if (category === 'all') return services
        return services.filter(service => service.title.toLowerCase().includes(category))
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
            <header ref={headerRef} className="py-20 text-center relative overflow-hidden" style={{ backgroundImage: 'url(/images/social.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
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
                        Our Services
                    </motion.h1>
                    <motion.p
                        className="text-xl text-white max-w-2xl mx-auto mb-8"
                        initial={{ y: 50, opacity: 0 }}
                        animate={headerInView ? { y: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Elevate your digital presence with our comprehensive range of services tailored to your unique business needs.
                    </motion.p>
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={headerInView ? { scale: 1, opacity: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                            Get Started
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </motion.div>
                </div>
            </header>

            <main className="container mx-auto px-4 py-16">
                <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-12">
                    <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2">
                        <TabsTrigger value="all">All Services</TabsTrigger>
                        <TabsTrigger value="web">Web</TabsTrigger>
                        <TabsTrigger value="marketing">Marketing</TabsTrigger>
                        <TabsTrigger value="design">Design</TabsTrigger>
                        <TabsTrigger value="analytics">Analytics</TabsTrigger>
                    </TabsList>
                </Tabs>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {filterServices(activeTab).map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="h-full flex flex-col">
                                <CardHeader>
                                    <service.icon className="h-10 w-10 text-primary mb-2" />
                                    <CardTitle>{service.title}</CardTitle>
                                    <CardDescription>{service.description}</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <ul className="list-disc list-inside space-y-2">
                                        {service.details.map((detail, idx) => (
                                            <li key={idx}>{detail}</li>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardFooter>
                                    <Button className="w-full">
                                        Learn More
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <section className="mt-20">
                    <h2 className="text-3xl font-bold text-center mb-8">Why Choose DigitalCraft?</h2>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {[
                            { title: 'Expertise', description: '3+ years of experience in web development and digital marketing.' },
                            { title: 'Tailored Solutions', description: 'Custom strategies designed to meet your unique business goals.' },
                            { title: 'Results-Driven', description: 'Focus on delivering measurable outcomes and ROI.' },
                            { title: 'Cutting-Edge Technology', description: 'Utilization of the latest tools and technologies in the industry.' },
                            { title: 'Transparent Communication', description: 'Regular updates and clear reporting throughout the project.' },
                            { title: 'Ongoing Support', description: 'Continued assistance and optimization after project completion.' },
                        ].map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card>
                                    <CardHeader>
                                        <CardTitle>{item.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p>{item.description}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </section>

                <section className="mt-20">
                    <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
                    <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
                        {[
                            { question: 'What is your typical project timeline?', answer: 'Project timelines vary depending on the scope and complexity. A simple website might take 4-6 weeks, while more complex projects can take 2-3 months or more. We will provide a detailed timeline during our initial consultation.' },
                            { question: 'Do you offer ongoing maintenance and support?', answer: 'Yes, we offer various maintenance and support packages to ensure your digital assets remain up-to-date, secure, and performing optimally.' },
                            { question: 'How do you measure the success of your services?', answer: 'We establish clear KPIs at the beginning of each project and provide regular reports on these metrics. This may include website traffic, conversion rates, search engine rankings, and more.' },
                            { question: 'Can you work with my existing systems and tools?', answer: 'We are experienced in integrating with a wide range of existing systems and can recommend the best approach for your specific situation.' },
                        ].map((item, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger>{item.question}</AccordionTrigger>
                                <AccordionContent>{item.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </section>

                <section className="mt-20 bg-primary text-primary-foreground rounded-lg p-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Digital Presence?</h2>
                        <p className="text-lg mb-8">Let's discuss how DigitalCraft can help your business thrive in the digital landscape.</p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Button size="lg" variant="secondary">
                                Schedule a Consultation
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                            <Button size="lg" variant="outline">
                                View Our Portfolio
                            </Button>
                        </div>
                    </div>
                </section>
            </main>


        </div>
    )
}