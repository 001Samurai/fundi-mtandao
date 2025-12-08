'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from 'next/link'
import { services, Service } from '@/data/serviceData'
import { StructuredData } from "@/components/StructuredData"
import { generateBreadcrumbSchema, generateFAQSchema, generateServiceSchema, siteConfig } from "@/lib/seo"

export default function ServicesPage() {
    const [activeTab, setActiveTab] = useState('all')
    const headerRef = useRef(null)
    const headerInView = useInView(headerRef, { once: true })

    const filterServices = (category: string) => {
        if (category === 'all') return services
        return services.filter(service => service.category === category)
    }

    // FAQ data for structured data
    const faqs = [
        { question: 'What is your typical project timeline?', answer: 'Project timelines vary depending on the scope and complexity. A simple website might take 4-6 weeks, while more complex projects can take 2-3 months or more. We will provide a detailed timeline during our initial consultation.' },
        { question: 'Do you offer ongoing maintenance and support?', answer: 'Yes, we offer various maintenance and support packages to ensure your digital assets remain up-to-date, secure, and performing optimally.' },
        { question: 'How do you measure the success of your services?', answer: 'We establish clear KPIs at the beginning of each project and provide regular reports on these metrics. This may include website traffic, conversion rates, search engine rankings, and more.' },
        { question: 'Can you work with my existing systems and tools?', answer: 'We are experienced in integrating with a wide range of existing systems and can recommend the best approach for your specific situation.' },
    ]

    // Generate service schemas for top services
    const topServices = services.slice(0, 5).map(service => 
        generateServiceSchema({
            name: service.title,
            description: service.description,
            provider: siteConfig.name,
            areaServed: 'KE',
            serviceType: service.category
        })
    )

    return (
        <>
            <StructuredData data={[
                generateBreadcrumbSchema([
                    { name: 'Home', url: 'https://fundi-wa-mtandao.co.ke' },
                    { name: 'Services', url: 'https://fundi-wa-mtandao.co.ke/services' }
                ]),
                generateFAQSchema(faqs),
                ...topServices
            ]} />
            <div className="min-h-screen bg-gradient-to-b from-slate-50 via-background to-secondary/10">
            {/* Hero / Services Header */}
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
                        Services
                    </motion.p>
                    <motion.h1
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-slate-900"
                        initial={{ y: -40, opacity: 0 }}
                        animate={headerInView ? { y: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.5 }}
                    >
                        Web & digital services for growing Kenyan businesses.
                    </motion.h1>
                    <motion.p
                        className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8"
                        initial={{ y: 30, opacity: 0 }}
                        animate={headerInView ? { y: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.15 }}
                    >
                        From modern websites to ongoing digital marketing, we design and build solutions that are fast,
                        SEO‑friendly, and tailored to your brand.
                    </motion.p>
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={headerInView ? { scale: 1, opacity: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <Button size="lg" className="bg-white text-[#175379] hover:bg-slate-100 shadow-lg">
                            Get Started
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </motion.div>
                </div>
            </header>

            <main className="container mx-auto px-4 py-16 space-y-16">
                <section aria-label="Filter services by category">
                    <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-12">
                        <TabsList className="grid w-full grid-cols-6 text-xs md:grid-cols-6 lg:grid-cols-6 gap-2 bg-[#175379] text-white">
                        <TabsTrigger value="all">All</TabsTrigger>
                        <TabsTrigger value="web">Web</TabsTrigger>
                        <TabsTrigger value="marketing">Marketing</TabsTrigger>
                        <TabsTrigger value="design">Design</TabsTrigger>
                        <TabsTrigger value="analytics">Analytics</TabsTrigger>
                        <TabsTrigger value="mobile">Mobile</TabsTrigger>
                        </TabsList>
                    </Tabs>
                </section>

                <section aria-labelledby="services-list">
                    <h2 id="services-list" className="sr-only">
                        Detailed list of web and digital services
                    </h2>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {filterServices(activeTab).map((service, index) => {
                            const ServiceIcon = service.icon
                            return (
                                <motion.div
                                    key={service.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <Card className="h-full flex flex-col bg-white/80 backdrop-blur-xl border border-gray-200/60 shadow-md hover:shadow-xl transition-shadow">
                                        <CardHeader>
                                            <div className="flex justify-between items-start">
                                                <ServiceIcon className="h-10 w-10 text-[#e47a33] mb-2" />
                                                <Badge
                                                    variant="outline"
                                                    className={`
                                                        ${service.demand === 'moderate' && 'bg-green-100 text-green-800 border-green-200 hover:bg-green-100'}
                                                        ${service.demand === 'high' && 'bg-orange-100 text-orange-800 border-orange-200 hover:bg-orange-100'}
                                                        ${service.demand === 'very high' && 'bg-red-100 text-red-800 border-red-200 hover:bg-red-100'}
                                                    `}
                                                >
                                                    {service.demand.charAt(0).toUpperCase() + service.demand.slice(1)} Demand
                                                </Badge>
                                            </div>
                                            <CardTitle>{service.title}</CardTitle>
                                            <CardDescription>{service.description}</CardDescription>
                                        </CardHeader>
                                        <CardContent className="flex-grow">
                                            <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
                                                {service.details.map((detail, idx) => (
                                                    <li key={idx}>{detail}</li>
                                                ))}
                                            </ul>
                                        </CardContent>
                                        <CardFooter>
                                            <Button className="w-full hover:text-white" asChild>
                                                <Link href={`/services/service/${service.slug}`}>
                                                    Learn More
                                                    <ArrowRight className="ml-2 h-4 w-4" />
                                                </Link>
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                </motion.div>
                            )
                        })}
                    </div>
                </section>


                <section className="mt-20" aria-labelledby="why-choose">
                    <h2 id="why-choose" className="text-3xl font-bold text-center mb-8">
                        Why choose Fundi wa Mtandao?
                    </h2>
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
                                <Card className="bg-white/80 backdrop-blur-xl border border-gray-200/60">
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

                <section className="mt-20" aria-labelledby="services-faq">
                    <h2 id="services-faq" className="text-3xl font-bold text-center mb-8">
                        Frequently asked questions
                    </h2>
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

                <section className="mt-20 bg-slate-900/80 text-slate-50 rounded-lg p-8 backdrop-blur-xl border border-slate-800/60">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-4">Ready to elevate your digital presence?</h2>
                        <p className="text-lg mb-8">
                            Let&apos;s discuss how Fundi wa Mtandao can help your business thrive online with modern web design,
                            development, and digital marketing.
                        </p>
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
        </>
    )
}