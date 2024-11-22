'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from 'next/link'
import { services, Service } from '@/data/serviceData'

export default function ServicePage({ params }: { params: { slug: string } }) {
    const [service, setService] = useState<Service | null>(null)

    useEffect(() => {
        const currentService = services.find(s => s.slug === params.slug)
        setService(currentService || null)
    }, [params.slug])

    if (!service) {
        return <div>Loading...</div>
    }

    const ServiceIcon = service.icon

    return (
        <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
            <header className="py-20 text-center relative overflow-hidden bg-primary text-primary-foreground">
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
                        className="text-4xl md:text-6xl font-bold mb-4"
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        {service.title}
                    </motion.h1>
                    <motion.p
                        className="text-xl max-w-2xl mx-auto mb-8"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        {service.description}
                    </motion.p>
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
            </header>

            <main className="container mx-auto px-4 py-16">
                <div className="grid gap-8 md:grid-cols-2">

                    <Card>
                        <CardHeader>
                            <CardTitle>What is {service.title}?</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>{service.whatIs}</p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center">
                                <ServiceIcon className="h-8 w-8 text-primary mr-2" />
                                What We Offer
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="list-disc list-inside space-y-2">
                                {service.details.map((detail, idx) => (
                                    <li key={idx}>{detail}</li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Our Approach</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="mb-4">At Fundi wa Mtandao, we take a client-centric approach to {service.title.toLowerCase()}. Our process includes:</p>
                            <ol className="list-decimal list-inside space-y-2">
                                <li>In-depth consultation to understand your unique needs</li>
                                <li>Customized strategy development</li>
                                <li>Agile implementation with regular check-ins</li>
                                <li>Continuous optimization based on data and feedback</li>
                                <li>Comprehensive reporting and analytics</li>
                            </ol>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Pricing</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="mb-4">Our pricing for {service.title.toLowerCase()} is tailored to your specific needs and project scope. Generally, our services range from:</p>
                            <p className="text-2xl font-bold text-primary">{service.priceRange}</p>
                            <p className="mt-2 text-sm text-muted-foreground">Factors affecting the price include project complexity, timeline, and ongoing support needs.</p>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                            <Button variant="outline" asChild>
                                <Link href="/services">
                                    <ArrowLeft className="mr-2 h-4 w-4" />
                                    Back to Services
                                </Link>
                            </Button>
                            <Button asChild>
                                <Link href="/get-started">
                                    Get Started
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>
                </div>

                <section className="mt-20">
                    <h2 className="text-3xl font-bold text-center mb-8">Why Choose Fundi wa Mtandao for {service.title}?</h2>
                    <div className="grid gap-8 md:grid-cols-3">
                        {[
                            { title: 'Expertise', description: `Our team has years of experience in ${service.title.toLowerCase()}, ensuring top-notch results.` },
                            { title: 'Customization', description: 'We tailor our approach to your unique business needs and goals.' },
                            { title: 'Transparency', description: 'Regular updates and clear communication throughout the project lifecycle.' },
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

                <section className="mt-20 text-center">
                    <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
                    <p className="text-xl text-muted-foreground mb-8">Let's discuss how our {service.title.toLowerCase()} services can help your business thrive.</p>
                    <Button size="lg" asChild>
                        <Link href="/get-started">
                            Start Your Project
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </section>
            </main>
        </div>
    )
}