'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail, MapPin, Calendar, ArrowRight, Code, Megaphone, BarChart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const services = [
    { icon: Code, title: 'Web Development', description: 'Custom websites and web applications built with cutting-edge technologies.' },
    { icon: Megaphone, title: 'Digital Marketing', description: 'Comprehensive strategies to boost your online presence and reach.' },
    { icon: BarChart, title: 'Project Management', description: 'Efficient planning and execution of digital initiatives.' },
]

const timeline = [
    { year: 2020, event: 'Started freelancing in web development and digital marketing' },
    { year: 2021, event: 'Expanded services to include project management' },
    { year: 2022, event: 'Completed advanced certifications in web technologies and digital marketing' },
    { year: 2023, event: 'Founded DigitalCraft and secured first major clients' },
]

export default function AboutPage() {
    const [activeTab, setActiveTab] = useState('about')
    const { scrollYProgress } = useScroll()
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

    useEffect(() => {
        // Simulating loading of dynamic content
        const timer = setTimeout(() => {
            setActiveTab('about')
        }, 100)
        return () => clearTimeout(timer)
    }, [])

    return (
        <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
            <motion.header
                className="relative h-[50vh] flex items-center justify-center overflow-hidden"
                style={{ opacity, scale }}
            >
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/social.jpg"
                        alt="support-small-biz"
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                    />
                    <div className="absolute inset-0 bg-black/50" />
                </div>
                <motion.h1
                    className="text-4xl md:text-6xl font-bold text-white z-10 text-center"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    Crafting Digital Excellence
                </motion.h1>
            </motion.header>

            <main className="container mx-auto px-4 py-16">
                <Card className="mb-16">
                    <CardContent className="p-6 sm:p-10">
                        <div className="flex flex-col md:flex-row gap-8 items-center">
                            <Avatar className="w-32 h-32 md:w-48 md:h-48">
                                <AvatarImage src="/images/dmachua.png" alt="David Machua" />
                                <AvatarFallback>DM</AvatarFallback>
                            </Avatar>
                            <div>
                                <h2 className="text-3xl font-bold mb-2">David Machua</h2>
                                <p className="text-xl text-muted-foreground mb-4">Founder & Digital Craftsman</p>
                                <p className="mb-4">
                                    With 3 years of experience in web development, digital marketing, and project management,
                                    I'm passionate about crafting digital solutions that drive business growth and user engagement.
                                </p>
                                <div className="flex gap-4">
                                    <Link href="https://github.com/davidmachua" target="_blank" rel="noopener noreferrer">
                                        <Button variant="outline" size="icon">
                                            <Github className="h-4 w-4" />
                                            <span className="sr-only">GitHub</span>
                                        </Button>
                                    </Link>
                                    <Link href="https://linkedin.com/in/davidmachua" target="_blank" rel="noopener noreferrer">
                                        <Button variant="outline" size="icon">
                                            <Linkedin className="h-4 w-4" />
                                            <span className="sr-only">LinkedIn</span>
                                        </Button>
                                    </Link>
                                    <Link href="https://twitter.com/davidmachua" target="_blank" rel="noopener noreferrer">
                                        <Button variant="outline" size="icon">
                                            <Twitter className="h-4 w-4" />
                                            <span className="sr-only">Twitter</span>
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-16">
                    <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="about">About DigitalCraft</TabsTrigger>
                        <TabsTrigger value="services">Our Services</TabsTrigger>
                        <TabsTrigger value="journey">Our Journey</TabsTrigger>
                    </TabsList>
                    <TabsContent value="about">
                        <Card>
                            <CardHeader>
                                <CardTitle>About DigitalCraft</CardTitle>
                                <CardDescription>Your partner in digital excellence since 2023</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="mb-4">
                                    WebFundi is a solopreneur venture founded by David Machua in Mombasa, Kenya.
                                    We specialize in delivering high-quality web development, digital marketing, and
                                    project management services to businesses of all sizes.
                                </p>
                                <p className="mb-4">
                                    Since our establishment in 2023, we've successfully served three major clients,
                                    consistently exceeding expectations and delivering exceptional results. Our approach
                                    combines cutting-edge technology with creative strategies to help our clients thrive
                                    in the digital landscape.
                                </p>
                                <p>
                                    While primarily operating as a solo entrepreneur, DigitalCraft collaborates with a
                                    network of trusted local and online freelancers for larger projects, ensuring
                                    scalability and diverse expertise when needed.
                                </p>
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="services">
                        <div className="grid gap-6 md:grid-cols-3">
                            {services.map((service, index) => (
                                <Card key={index}>
                                    <CardHeader>
                                        <service.icon className="h-10 w-10 text-primary mb-2" />
                                        <CardTitle>{service.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p>{service.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </TabsContent>
                    <TabsContent value="journey">
                        <Card>
                            <CardHeader>
                                <CardTitle>Our Journey</CardTitle>
                                <CardDescription>From freelancing to founding DigitalCraft</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="relative border-l border-primary/30 pl-6 ml-6">
                                    {timeline.map((item, index) => (
                                        <motion.div
                                            key={index}
                                            className="mb-10 last:mb-0"
                                            initial={{ opacity: 0, x: -50 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                        >
                                            <Badge className="absolute -left-[42px] mt-1.5">{item.year}</Badge>
                                            <p>{item.event}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>

                <Card className="bg-primary text-primary-foreground">
                    <CardHeader>
                        <CardTitle>Ready to Elevate Your Digital Presence?</CardTitle>
                        <CardDescription className="text-primary-foreground/80">Let's discuss how DigitalCraft can help your business thrive online.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col md:flex-row gap-4 items-center">
                            <div className="flex-1 space-y-2">
                                <div className="flex items-center">
                                    <Mail className="h-5 w-5 mr-2" />
                                    <span>david@digitalcraft.com</span>
                                </div>
                                <div className="flex items-center">
                                    <MapPin className="h-5 w-5 mr-2" />
                                    <span>Based in Mombasa, Kenya</span>
                                </div>
                                <div className="flex items-center">
                                    <Calendar className="h-5 w-5 mr-2" />
                                    <span>Available for projects worldwide</span>
                                </div>
                            </div>
                            <Button size="lg" variant="secondary">
                                Schedule a Consultation
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </main>

        </div>
    )
}