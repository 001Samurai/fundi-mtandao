'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail, MapPin, Calendar, ArrowRight, Code, Megaphone, BarChart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { StructuredData } from "@/components/StructuredData"
import { generatePersonSchema, generateBreadcrumbSchema, generateOrganizationSchema } from "@/lib/seo"

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
        <>
            <StructuredData data={[
                generatePersonSchema(),
                generateOrganizationSchema(),
                generateBreadcrumbSchema([
                    { name: 'Home', url: 'https://fundi-wa-mtandao.co.ke' },
                    { name: 'About', url: 'https://fundi-wa-mtandao.co.ke/about' }
                ])
            ]} />
            <div className="min-h-screen bg-gradient-to-b from-slate-50 via-background to-secondary/10">
            {/* Hero / Page Header */}
            <motion.header
                className="relative overflow-hidden bg-gradient-to-br from-[#15158c] via-[#175379] to-[#e47a33] text-white py-20 md:py-28"
                style={{ opacity, scale }}
            >
                <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_top,_#ffffff55,_transparent_55%),radial-gradient(circle_at_bottom,_#00000066,_transparent_55%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff22_1px,transparent_1px),linear-gradient(to_bottom,#ffffff22_1px,transparent_1px)] bg-[size:24px_24px] opacity-10" />
                <div className="container mx-auto px-4 relative z-10">
                    <motion.p
                        className="text-sm md:text-base uppercase tracking-[0.25em] text-white/70 mb-4"
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.4 }}
                    >
                        About Fundi wa Mtandao
                    </motion.p>
                    <motion.h1
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 max-w-3xl text-white"
                        initial={{ y: -30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        Web & digital solutions for ambitious Kenyan brands.
                    </motion.h1>
                    <motion.p
                        className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Based in Mombasa, we design and build fast, modern websites and digital experiences
                        that help local businesses look world‑class online.
                    </motion.p>
                </div>
            </motion.header>

            <main className="container mx-auto px-4 py-16 space-y-16">
                {/* Founder / Studio intro */}
                <section aria-labelledby="about-founder">
                    <Card className="mb-4 bg-white/80 backdrop-blur-xl border border-gray-200/60 shadow-xl">
                        <CardContent className="p-6 sm:p-10">
                            <div className="flex flex-col md:flex-row gap-8 items-center">
                                <Avatar className="w-32 h-32 md:w-44 md:h-44 ring-4 ring-[#175379]/10 shadow-lg">
                                    <AvatarImage src="/images/dmachua.png" alt="David Machua" />
                                    <AvatarFallback>DM</AvatarFallback>
                                </Avatar>
                                <div>
                                    <h2 id="about-founder" className="text-3xl md:text-4xl font-bold mb-2 text-[#175379]">
                                        David Machua
                                    </h2>
                                    <p className="text-lg text-muted-foreground mb-4">
                                        Founder, Web Developer & Digital Strategist at Fundi wa Mtandao
                                    </p>
                                    <p className="mb-4 text-gray-700">
                                        With 3+ years of experience in web development, digital marketing, and project management,
                                        I help businesses turn ideas into fast, user‑friendly digital experiences that actively
                                        support their growth.
                                    </p>
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 text-sm">
                                        <div>
                                            <p className="font-semibold text-gray-900">Focus Areas</p>
                                            <p className="text-gray-600">Web development, SEO, digital marketing</p>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-900">Based In</p>
                                            <p className="text-gray-600">Mombasa, Kenya – serving clients worldwide</p>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-900">Ideal Clients</p>
                                            <p className="text-gray-600">Service businesses, real estate, hospitality, SMEs</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap gap-3">
                                        <Link href="https://github.com/001Samurai" target="_blank" rel="noopener noreferrer">
                                            <Button variant="outline" size="icon" aria-label="Visit GitHub profile">
                                                <Github className="h-4 w-4" />
                                            </Button>
                                        </Link>
                                        <Link href="https://linkedin.com/in/davidmachua" target="_blank" rel="noopener noreferrer">
                                            <Button variant="outline" size="icon" aria-label="Visit LinkedIn profile">
                                                <Linkedin className="h-4 w-4" />
                                            </Button>
                                        </Link>
                                        <Link href="https://x.com/machua_001" target="_blank" rel="noopener noreferrer">
                                            <Button variant="outline" size="icon" aria-label="Visit X (Twitter) profile">
                                                <Twitter className="h-4 w-4" />
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* Studio story & services */}
                <section aria-label="About Fundi wa Mtandao details">
                    <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-16">
                        <TabsList className="grid w-full grid-cols-3 bg-[#175379] text-white">
                        <TabsTrigger value="about">About Us</TabsTrigger>
                        <TabsTrigger value="services">Our Services</TabsTrigger>
                        <TabsTrigger value="journey">Our Journey</TabsTrigger>
                        </TabsList>
                        <TabsContent value="about">
                            <Card className="bg-white/80 backdrop-blur-xl border border-gray-200/60 shadow-xl">
                                <CardHeader>
                                    <CardTitle>About Fundi wa Mtandao</CardTitle>
                                    <CardDescription>Your web & digital partner in Mombasa, Kenya</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4 text-gray-700">
                                    <p>
                                        Fundi wa Mtandao is a web development and digital marketing studio led by David Machua.
                                        We help service‑based businesses, real‑estate brands, hostels, and local organizations
                                        build credible, high‑performing digital presences.
                                    </p>
                                    <p>
                                        Since 2023, we&apos;ve delivered websites, marketing experiences, and digital assets that
                                        are not only visually appealing but also optimized for speed, SEO, and real‑world
                                        business goals.
                                    </p>
                                    <p>
                                        For larger initiatives, we collaborate with a trusted network of designers, developers,
                                        and marketers—allowing us to scale without compromising on quality or communication.
                                    </p>
                                </CardContent>
                            </Card>
                        </TabsContent>
                        <TabsContent value="services">
                            <div className="grid gap-6 md:grid-cols-3">
                                {services.map((service, index) => (
                                    <Card key={index} className="bg-white/80 backdrop-blur-xl border border-gray-200/60 shadow-md">
                                        <CardHeader>
                                            <service.icon className="h-10 w-10 text-[#e47a33] mb-3" />
                                            <CardTitle>{service.title}</CardTitle>
                                            <CardDescription>{service.description}</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                                                {service.title === 'Web Development' && (
                                                    <>
                                                        <li>Responsive, mobile‑first builds</li>
                                                        <li>SEO‑ready architecture</li>
                                                        <li>Performance‑focused implementation</li>
                                                    </>
                                                )}
                                                {service.title === 'Digital Marketing' && (
                                                    <>
                                                        <li>Content and campaign strategy</li>
                                                        <li>Search and social visibility</li>
                                                        <li>Analytics‑driven optimization</li>
                                                    </>
                                                )}
                                                {service.title === 'Project Management' && (
                                                    <>
                                                        <li>Clear timelines and milestones</li>
                                                        <li>Transparent communication</li>
                                                        <li>Vendor and stakeholder coordination</li>
                                                    </>
                                                )}
                                            </ul>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </TabsContent>
                        <TabsContent value="journey">
                            <Card className="bg-white/80 backdrop-blur-xl border border-gray-200/60 shadow-xl">
                                <CardHeader>
                                    <CardTitle>Our Journey</CardTitle>
                                    <CardDescription>From freelancing to Fundi wa Mtandao</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="relative border-l border-primary/20 pl-6 ml-6">
                                        {timeline.map((item, index) => (
                                            <motion.div
                                                key={index}
                                                className="mb-10 last:mb-0"
                                                initial={{ opacity: 0, x: -40 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                            >
                                                <Badge className="absolute -left-[42px] mt-1.5">
                                                    {item.year}
                                                </Badge>
                                                <p className="text-gray-700">{item.event}</p>
                                            </motion.div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </section>

                {/* SEO-friendly closing CTA */}
                <section aria-labelledby="about-cta">
                    <Card className="bg-slate-900/80 backdrop-blur-xl text-slate-50 border border-slate-700/60 shadow-2xl">
                        <CardHeader>
                            <CardTitle id="about-cta">Ready to elevate your digital presence?</CardTitle>
                            <CardDescription className="text-primary-foreground/80">
                                Let&apos;s discuss how Fundi wa Mtandao can design, build, and market a website that moves
                                your business forward.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-col md:flex-row gap-4 items-center">
                                <div className="flex-1 space-y-2 text-sm">
                                    <div className="flex items-center">
                                        <Mail className="h-5 w-5 mr-2" />
                                        <span>dmachua.freelance@gmail.com</span>
                                    </div>
                                    <div className="flex items-center">
                                        <MapPin className="h-5 w-5 mr-2" />
                                        <span>Based in Mombasa, Kenya</span>
                                    </div>
                                    <div className="flex items-center">
                                        <Calendar className="h-5 w-5 mr-2" />
                                        <span>Available for remote projects worldwide</span>
                                    </div>
                                </div>
                                <Link href="/get-started">
                                    <Button size="lg" variant="secondary" className="shadow-lg hover:shadow-xl">
                                        Schedule a consultation
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </Link>
                            </div>
                        </CardContent>
                    </Card>
                </section>
            </main>

        </div>
        </>
    )
}