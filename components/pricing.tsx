'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Check, HelpCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import Link from 'next/link'

const plans = [
    {
        name: 'Starter',
        description: 'For small businesses & startups',
        price: 'KES 15,000 - 30,000',
        features: [
            'Single-page website',
            'Responsive design',
            'Basic CMS integration',
            'Professional logo design',
            'Basic social media setup (1-2 platforms)',
        ],
        addons: [
            { name: 'Basic SEO services', price: 'KES 5k - 10k' },
            { name: 'Analytics setup', price: 'KES 3k' },
        ],
    },
    {
        name: 'Growth',
        description: 'For scaling businesses',
        price: 'KES 35,000 - 60,000',
        features: [
            'Multi-page website with CMS',
            'SEO-friendly structure',
            'On-page optimization',
            'Social media management (3 platforms)',
            '3 blog posts or articles',
            'Mpesa integration',
        ],
        addons: [
            { name: 'PPC Advertising Campaign setup', price: 'Starting at KES 10k' },
            { name: 'Advanced analytics and reporting', price: 'KES 8k' },
        ],
    },
    {
        name: 'Premium',
        description: 'Comprehensive digital presence',
        price: 'KES 70,000 - 100,000',
        features: [
            'Custom functionality & advanced CMS',
            'Fully functional online store',
            'Advanced SEO strategy',
            'Social media management (5 platforms)',
            '5-8 pieces of content',
            'Detailed analytics & reporting',
        ],
        addons: [
            { name: 'Mobile App Development', price: 'KES 50k+' },
            { name: 'DevOps and hosting setup', price: 'KES 5k+' },
        ],
    },
    {
        name: 'Enterprise',
        description: 'Custom solutions for large businesses',
        price: 'KES 120,000+',
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

export default function PricingCards() {
    const [hoveredPlan, setHoveredPlan] = useState<string | null>(null)

    return (
        <div className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="font-semibold text-5xl">Pricing</h2>
                    <p className="mt-2 text-xl font-bold tracking-tight sm:text-5xl">
                        Choose the right plan for your business
                    </p>
                </div>
                <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-muted-foreground">
                    From startups to enterprises, we have a plan that fits your needs. All plans include our core features to help you grow your online presence.
                </p>
                <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {plans.map((plan) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            whileHover={{ scale: 1.05 }}
                            onHoverStart={() => setHoveredPlan(plan.name)}
                            onHoverEnd={() => setHoveredPlan(null)}
                        >
                            <Card className={`flex flex-col justify-between h-full ${hoveredPlan === plan.name ? 'shadow-lg' : ''}`}>
                                <CardHeader>
                                    <CardTitle>{plan.name}</CardTitle>
                                    <CardDescription className='text-xs'>{plan.description}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="mt-2 flex items-baseline gap-x-1">
                                        <span className="text-lg font-bold tracking-tight">{plan.price}</span>
                                    </div>
                                    <ul role="list" className="mt-8 space-y-3 text-sm leading-6">
                                        {plan.features.map((feature) => (
                                            <li key={feature} className="flex gap-x-3">
                                                <Check className="h-6 w-5 flex-none text-primary" aria-hidden="true" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    {plan.addons.length > 0 && (
                                        <div className="mt-6">
                                            <h4 className="text-sm font-semibold mb-2">Optional Add-ons:</h4>
                                            <ul className="space-y-2 text-sm">
                                                {plan.addons.map((addon) => (
                                                    <li key={addon.name} className="flex justify-between">
                                                        <span className='text-xs'>{addon.name}</span>
                                                        <span className="text-xs text-muted-foreground">{addon.price}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </CardContent>
                                <CardFooter className="mt-auto">
                                    <Button asChild className="w-full">
                                        <Link href="/get-started">
                                            Get started
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
            <div className="mt-16 text-center">
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button variant="outline">
                                Need help choosing?
                                <HelpCircle className="ml-2 h-4 w-4" />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Contact us for a personalized recommendation</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
        </div>
    )
}