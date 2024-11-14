'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, CheckCircle, Zap, Users, Rocket, Send } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { services } from '@/data/serviceData'

const steps = [
    { icon: Users, title: 'Discovery Call', description: 'We\'ll discuss your goals and challenges.' },
    { icon: Zap, title: 'Strategy Session', description: 'We\'ll craft a tailored plan for your success.' },
    { icon: Rocket, title: 'Project Kickoff', description: 'We\'ll start bringing your vision to life.' },
]

export default function GetStartedPage() {
    const [currentStep, setCurrentStep] = useState(0)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        service: '',
        message: '',
    })
    const headerRef = useRef(null)
    const headerInView = useInView(headerRef, { once: true })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prevData => ({ ...prevData, [name]: value }))
    }

    const handleServiceChange = (value: string) => {
        setFormData(prevData => ({ ...prevData, service: value }))
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // Send email using EmailJS
        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            if (response.ok) {
                console.log('Email sent successfully')
                setCurrentStep(prevStep => prevStep + 1)
            } else {
                console.error('Failed to send email')
            }
        } catch (error) {
            console.error('Error sending email:', error)
        }
    }

    const renderStep = () => {
        switch (currentStep) {
            case 0:
                return (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" name="name" className="w-full" value={formData.name} onChange={handleInputChange} required />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" name="email" type="email" className="w-full" value={formData.email} onChange={handleInputChange} required />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="service">Service</Label>
                            <Select name="service" value={formData.service} onValueChange={handleServiceChange}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                                <SelectContent>
                                    {services.map((service) => (
                                        <SelectItem key={service.slug} value={service.slug}>
                                            {service.title}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="message">Tell us about your project</Label>
                            <Textarea id="message" name="message" className="w-full" value={formData.message} onChange={handleInputChange} required />
                        </div>
                        <Button type="submit">
                            Next Step
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </form>
                )
            case 1:
                return (
                    <div className="text-center space-y-6">
                        <CheckCircle className="mx-auto h-16 w-16 text-green-500" />
                        <h2 className="text-2xl font-bold">Thank You for Reaching Out!</h2>
                        <p className="text-muted-foreground">We've received your information and will be in touch shortly to schedule your discovery call.</p>
                        <Button onClick={() => setCurrentStep(prevStep => prevStep + 1)}>
                            See Next Steps
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                )
            case 2:
                return (
                    <div className="space-y-8">
                        <h2 className="text-2xl font-bold text-center">Your Journey with DigitalCraft</h2>
                        <div className="grid gap-6 md:grid-cols-3">
                            {steps.map((step, index) => (
                                <Card key={index} className="text-center">
                                    <CardHeader>
                                        <step.icon className="mx-auto h-12 w-12 text-primary" />
                                        <CardTitle>{step.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p>{step.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                        <div className="text-center">
                            <Button asChild>
                                <a href="/contact">
                                    Contact Us
                                    <Send className="ml-2 h-4 w-4" />
                                </a>
                            </Button>
                        </div>
                    </div>
                )
            default:
                return null
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
            <header ref={headerRef} className="py-20 text-center relative overflow-hidden">
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
                        animate={headerInView ? { y: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.5 }}
                    >
                        Let's Craft Your Digital Success
                    </motion.h1>
                    <motion.p
                        className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
                        initial={{ y: 50, opacity: 0 }}
                        animate={headerInView ? { y: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Start your journey with DigitalCraft and transform your online presence.
                    </motion.p>
                </div>
            </header>

            <main className="container mx-auto px-4 py-16">
                <Card className="max-w-3xl mx-auto">
                    <CardHeader>
                        <CardTitle>Get Started with DigitalCraft</CardTitle>
                        <CardDescription>Fill out the form below and we'll be in touch to discuss your project.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Tabs value={currentStep.toString()} className="w-full">
                            <TabsList className="grid w-full grid-cols-3">
                                <TabsTrigger value="0" disabled={currentStep !== 0}>
                                    <Badge variant={currentStep >= 0 ? "default" : "outline"}>1</Badge> Project Details
                                </TabsTrigger>
                                <TabsTrigger value="1" disabled={currentStep !== 1}>
                                    <Badge variant={currentStep >= 1 ? "default" : "outline"}>2</Badge> Confirmation
                                </TabsTrigger>
                                <TabsTrigger value="2" disabled={currentStep !== 2}>
                                    <Badge variant={currentStep >= 2 ? "default" : "outline"}>3</Badge> Next Steps
                                </TabsTrigger>
                            </TabsList>
                            <TabsContent value={currentStep.toString()} className="mt-6">
                                {renderStep()}
                            </TabsContent>
                        </Tabs>
                    </CardContent>
                </Card>

                <section className="mt-20">
                    <h2 className="text-3xl font-bold text-center mb-8">Why Choose DigitalCraft?</h2>
                    <div className="grid gap-8 md:grid-cols-3">
                        {[
                            { title: 'Expertise', description: '3+ years of experience in web development and digital marketing.' },
                            { title: 'Tailored Solutions', description: 'Custom strategies designed to meet your unique business goals.' },
                            { title: 'Proven Results', description: 'Track record of delivering successful projects for our clients.' },
                        ].map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
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
            </main>
        </div>
    )
}