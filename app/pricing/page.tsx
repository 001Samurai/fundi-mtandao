'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Check, HelpCircle, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Link from 'next/link'

const tiers = [
    {
        name: 'Starter',
        description: 'For small businesses & startups',
        price: 'KES 25,000 - 50,000',
        features: [
            '5-page website',
            'Responsive design',
            'Basic SEO Services',
            'Basic CMS integration',
            'Professional logo design',
            'Basic social media setup (1-2 platforms)',
        ],
        addons: [
            { name: 'Advanced SEO services', price: 'KES 5,000 - 10,000' },
            { name: 'Analytics setup', price: 'KES 3,000' },
        ],
    },
    {
        name: 'Growth',
        description: 'For scaling businesses',
        price: 'KES 60,000 - 120,000',
        features: [
            '10-page website with CMS',
            'SEO-friendly structure',
            'On-page optimization',
            'Social media management (2 platforms)',
            'Blog with 5 blog posts',
            'Mpesa integration',
        ],
        addons: [
            { name: 'PPC Ads Campaign setup', price: 'Starting at KES 10,000' },
            { name: 'Advanced analytics and reporting', price: 'KES 8,000' },
        ],
    },
    {
        name: 'Premium',
        description: 'Comprehensive digital presence',
        price: 'KES 150,000 - 250,000',
        features: [
            'Custom functionality & advanced CMS',
            'Fully functional online store',
            'Advanced SEO strategy',
            'Social media management (3 platforms)',
            'Blog with 10 blog posts',
            'Detailed analytics & reporting',
        ],
        addons: [
            { name: 'Mobile App Development', price: 'KES 80,000+' },
            { name: 'DevOps and hosting setup', price: 'KES 15,000+' },
        ],
    },
    {
        name: 'Enterprise',
        description: 'Custom solutions for large businesses',
        price: 'KES 300,000+',
        features: [
            'Fully customizable solutions',
            'Advanced mobile app development',
            'Enterprise-level e-commerce',
            'Dedicated cybersecurity services',
            'Long-term digital marketing campaigns',
        ],
        addons: [],
    },
]

const comparisonFeatures = [
    '5-page website',
    'Responsive design',
    'Basic SEO Services',
    'Basic CMS integration',
    'Professional logo design',
    'Basic social media setup (1-2 platforms)',
]

const faqs = [
    {
        question: "How do I choose the right package for my business?",
        answer: "Consider your business size, goals, and budget. Our Starter package is ideal for small businesses just establishing their online presence, while the Growth and Premium packages cater to businesses looking to expand their digital footprint. For large enterprises with specific needs, our Custom Enterprise package offers tailored solutions."
    },
    {
        question: "Can I customize the packages?",
        answer: "Yes, all our packages can be customized to some extent. Each tier has optional add-ons, and we're happy to discuss specific requirements to tailor a solution that best fits your needs."
    },
    {
        question: "Do you offer ongoing support after the initial setup?",
        answer: "Yes, we provide ongoing support for all our services. The level of support varies by package, with higher tiers receiving more comprehensive ongoing assistance. We also offer separate maintenance packages for long-term support."
    },
    {
        question: "How long does it take to complete the services in each package?",
        answer: "The timeline varies depending on the package and specific requirements. Generally, the Starter package can be completed in 2-4 weeks, Growth in 4-8 weeks, and Premium in 8-12 weeks. Enterprise solutions are custom-scoped based on the project complexity."
    },
]

export default function PricingPage() {
    const [selectedTier, setSelectedTier] = useState('Starter')

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
                        Pricing Plans
                    </motion.h1>
                    <motion.p
                        className="text-xl max-w-2xl mx-auto mb-8"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Choose the perfect plan to elevate your digital presence
                    </motion.p>
                </div>
            </header>

            <main className="container mx-auto px-4 py-16">
                <Tabs defaultValue="Starter" className="w-full" onValueChange={setSelectedTier}>
                    <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-4">
                        {tiers.map((tier) => (
                            <TabsTrigger key={tier.name} value={tier.name} className="text-lg">
                                {tier.name}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                    {tiers.map((tier) => (
                        <TabsContent key={tier.name} value={tier.name}>
                            <Card>
                                <CardHeader>
                                    <CardTitle>{tier.name} Package</CardTitle>
                                    <CardDescription>{tier.description}</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="text-3xl font-bold">{tier.price}</div>
                                    <ul className="space-y-2">
                                        {tier.features.map((feature, index) => (
                                            <li key={index} className="flex items-center">
                                                <Check className="h-5 w-5 text-primary mr-2" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    {tier.addons.length > 0 && (
                                        <div>
                                            <h4 className="font-semibold mt-4 mb-2">Optional Add-ons:</h4>
                                            <ul className="space-y-2">
                                                {tier.addons.map((addon, index) => (
                                                    <li key={index} className="flex items-center justify-between">
                                                        <span>{addon.name}</span>
                                                        <span className="text-muted-foreground">{addon.price}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </CardContent>
                                <CardFooter>
                                    <Button asChild className="w-full">
                                        <Link href="/get-started">
                                            Get Started
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        </TabsContent>
                    ))}
                </Tabs>

                <section className="mt-20">
                    <h2 className="text-3xl font-bold text-center mb-8">Features Comparison</h2>
                    <Table>
                        <TableCaption>Comprehensive comparison of features across all tiers</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[200px]">Feature</TableHead>
                                {tiers.map((tier) => (
                                    <TableHead key={tier.name} className="text-center">{tier.name}</TableHead>
                                ))}
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {comparisonFeatures.map((feature) => (
                                <TableRow key={feature}>
                                    <TableCell className="font-medium">{feature}</TableCell>
                                    {tiers.map((tier) => (
                                        <TableCell key={tier.name} className="text-center">
                                            {tier.features.some(f => f.toLowerCase().includes(feature.toLowerCase())) ? (
                                                <Check className="h-5 w-5 text-primary mx-auto" />
                                            ) : (
                                                <X className="h-5 w-5 text-muted-foreground mx-auto" />
                                            )}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </section>

                <section className="mt-20">
                    <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
                    <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger>{faq.question}</AccordionTrigger>
                                <AccordionContent>{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </section>

                <section className="mt-20 text-center">
                    <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
                    <p className="text-xl text-muted-foreground mb-8">
                        Contact us for a tailored package that meets your specific business needs.
                    </p>
                    <Button size="lg" asChild>
                        <Link href="/contact">
                            Contact Us
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </section>
            </main>
        </div>
    )
}