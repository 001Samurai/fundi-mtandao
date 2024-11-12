'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Mail, Phone, MapPin, Clock, CheckCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Switch } from "@/components/ui/switch"

export default function ContactPage() {
    const [formSubmitted, setFormSubmitted] = useState(false)
    const formRef = useRef(null)
    const inView = useInView(formRef, { once: true })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission logic here
        setFormSubmitted(true)
    }

    const contactInfo = [
        { icon: Mail, label: 'Email', value: 'david@digitalcraft.com' },
        { icon: Phone, label: 'Phone', value: '+254 123 456 789' },
        { icon: MapPin, label: 'Location', value: 'Mombasa, Kenya' },
        { icon: Clock, label: 'Business Hours', value: 'Mon-Fri: 9AM - 5PM EAT' },
    ]

    return (
        <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
            <header className="py-20 text-center relative overflow-hidden">
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
                        Let's Create Something Amazing Together
                    </motion.h1>
                    <motion.p
                        className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Ready to elevate your digital presence? Get in touch with DigitalCraft today and let's bring your vision to life.
                    </motion.p>
                </div>
            </header>

            <main className="container mx-auto px-4 py-16">
                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <motion.div
                        ref={formRef}
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Card>
                            <CardHeader>
                                <CardTitle>Contact Us</CardTitle>
                                <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="name">Name</Label>
                                        <Input id="name" placeholder="Your full name" required />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input id="email" type="email" placeholder="you@example.com" required />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="phone">Phone (optional)</Label>
                                        <Input id="phone" type="tel" placeholder="Your phone number" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label>Preferred contact method</Label>
                                        <RadioGroup defaultValue="email">
                                            <div className="flex items-center space-x-2">
                                                <RadioGroupItem value="email" id="contact-email" />
                                                <Label htmlFor="contact-email">Email</Label>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <RadioGroupItem value="phone" id="contact-phone" />
                                                <Label htmlFor="contact-phone">Phone</Label>
                                            </div>
                                        </RadioGroup>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="message">Message</Label>
                                        <Textarea id="message" placeholder="Tell us about your project or inquiry" required />
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Switch id="newsletter" />
                                        <Label htmlFor="newsletter">Subscribe to our newsletter</Label>
                                    </div>
                                    <Button type="submit" className="w-full">
                                        Send Message
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </motion.div>

                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
                            <Card>
                                <CardContent className="p-6">
                                    <ul className="space-y-4">
                                        {contactInfo.map((item, index) => (
                                            <li key={index} className="flex items-center space-x-3">
                                                <item.icon className="h-5 w-5 text-primary" />
                                                <div>
                                                    <p className="font-medium">{item.label}</p>
                                                    <p className="text-muted-foreground">{item.value}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                        >
                            <h2 className="text-2xl font-bold mb-4">Why Choose DigitalCraft?</h2>
                            <Card>
                                <CardContent className="p-6">
                                    <ul className="space-y-2">
                                        {[
                                            "3+ years of experience in web development and digital marketing",
                                            "Tailored solutions for your unique business needs",
                                            "Cutting-edge technology and innovative approaches",
                                            "Dedicated support and clear communication throughout your project",
                                            "Proven track record of delivering results for clients"
                                        ].map((item, index) => (
                                            <li key={index} className="flex items-center space-x-2">
                                                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </div>

                <motion.section
                    className="mt-20"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                >
                    <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
                    <Tabs defaultValue="general" className="max-w-3xl mx-auto">
                        <TabsList className="grid w-full grid-cols-3">
                            <TabsTrigger value="general">General</TabsTrigger>
                            <TabsTrigger value="services">Services</TabsTrigger>
                            <TabsTrigger value="pricing">Pricing</TabsTrigger>
                        </TabsList>
                        <TabsContent value="general">
                            <Card>
                                <CardHeader>
                                    <CardTitle>General Questions</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div>
                                        <h3 className="font-semibold">How quickly can you start on my project?</h3>
                                        <p className="text-muted-foreground">We typically can begin work within 1-2 weeks of project approval, depending on our current workload and the scope of your project.</p>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">Do you work with clients internationally?</h3>
                                        <p className="text-muted-foreground">Yes, we work with clients from all over the world. We use various communication tools to ensure smooth collaboration across different time zones.</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>
                        <TabsContent value="services">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Services Questions</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div>
                                        <h3 className="font-semibold">What types of projects do you specialize in?</h3>
                                        <p className="text-muted-foreground">We specialize in web development, digital marketing, and UI/UX design. Our expertise covers e-commerce platforms, custom web applications, and comprehensive digital marketing campaigns.</p>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">Do you offer ongoing maintenance and support?</h3>
                                        <p className="text-muted-foreground">Yes, we offer various maintenance and support packages to ensure your digital assets remain up-to-date, secure, and performing optimally.</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>
                        <TabsContent value="pricing">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Pricing Questions</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div>
                                        <h3 className="font-semibold">How do you structure your pricing?</h3>
                                        <p className="text-muted-foreground">Our pricing is project-based and depends on the scope, complexity, and timeline of your specific needs. We provide detailed quotes after our initial consultation.</p>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">Do you offer any payment plans?</h3>
                                        <p className="text-muted-foreground">Yes, for larger projects, we typically structure payments in milestones. This allows for better budget management and ensures alignment throughout the project lifecycle.</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </motion.section>
            </main>


            {formSubmitted && (
                <motion.div
                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <Card className="max-w-md w-full">
                        <CardHeader>
                            <CardTitle className="text-center">Thank You!</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-center">Your message has been sent successfully. We'll get back to you as soon as possible.</p>
                        </CardContent>
                        <CardFooter className="justify-center">
                            <Button onClick={() => setFormSubmitted(false)}>Close</Button>
                        </CardFooter>
                    </Card>
                </motion.div>
            )}
        </div>
    )
}