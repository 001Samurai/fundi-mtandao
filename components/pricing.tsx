'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Check, HelpCircle, Sparkles, Zap, TrendingUp, Crown } from 'lucide-react'
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
        icon: Zap,
        gradient: 'from-blue-500/20 to-cyan-500/20',
        borderColor: 'border-blue-200',
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
        icon: TrendingUp,
        gradient: 'from-purple-500/20 to-pink-500/20',
        borderColor: 'border-purple-200',
        popular: true,
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
        icon: Crown,
        gradient: 'from-orange-500/20 to-red-500/20',
        borderColor: 'border-orange-200',
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
        icon: Crown,
        gradient: 'from-[#175379]/20 to-[#15158c]/20',
        borderColor: 'border-[#175379]',
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
        <div className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-white">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
                <motion.div
                    className="absolute top-1/2 left-1/2 w-[900px] h-[900px] bg-gradient-to-r from-[#175379]/10 via-[#e47a33]/10 to-[#15158c]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
                    animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 90, 0],
                    }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </div>

            <div className="mx-auto max-w-7xl px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mx-auto max-w-4xl text-center mb-16"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-md border border-[#175379]/20 text-[#175379] rounded-full text-sm font-semibold mb-6 shadow-lg"
                    >
                        <Sparkles className="h-4 w-4 text-[#e47a33]" />
                        <span>Pricing</span>
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#15158c] via-[#175379] to-[#e47a33]">
                            Choose the right plan
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        From startups to enterprises, we have a plan that fits your needs. All plans include our core features to help you grow your online presence.
                    </p>
                </motion.div>

                <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -12, scale: 1.02 }}
                            onHoverStart={() => setHoveredPlan(plan.name)}
                            onHoverEnd={() => setHoveredPlan(null)}
                            className="relative"
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                                    <Badge className="bg-gradient-to-r from-[#e47a33] to-[#175379] text-white px-4 py-1 shadow-lg">
                                        Most Popular
                                    </Badge>
                                </div>
                            )}
                            <Card className={`flex flex-col justify-between h-full bg-white/80 backdrop-blur-md border-2 ${plan.borderColor} shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden relative group ${
                                hoveredPlan === plan.name ? 'ring-2 ring-[#175379] ring-offset-2' : ''
                            }`}>
                                <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                                <CardHeader className="relative z-10">
                                    <div className={`p-4 bg-gradient-to-br ${plan.gradient} rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                        <plan.icon className="h-8 w-8 text-[#175379]" />
                                    </div>
                                    <CardTitle className="text-2xl font-bold text-gray-900">{plan.name}</CardTitle>
                                    <CardDescription className='text-sm font-medium text-gray-600'>{plan.description}</CardDescription>
                                </CardHeader>
                                <CardContent className="relative z-10">
                                    <div className="mt-4 mb-6">
                                        <span className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#175379] to-[#15158c]">
                                            {plan.price}
                                        </span>
                                    </div>
                                    <ul role="list" className="space-y-4 text-sm leading-6 mb-6">
                                        {plan.features.map((feature) => (
                                            <li key={feature} className="flex gap-x-3 items-start">
                                                <Check className="h-5 w-5 flex-none text-[#175379] mt-0.5" aria-hidden="true" />
                                                <span className="text-gray-700">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    {plan.addons.length > 0 && (
                                        <div className="mt-6 pt-6 border-t border-gray-200">
                                            <h4 className="text-sm font-semibold mb-3 text-gray-900">Optional Add-ons:</h4>
                                            <ul className="space-y-2 text-sm">
                                                {plan.addons.map((addon) => (
                                                    <li key={addon.name} className="flex justify-between items-center">
                                                        <span className='text-xs text-gray-600'>{addon.name}</span>
                                                        <span className="text-xs font-semibold text-[#175379]">{addon.price}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </CardContent>
                                <CardFooter className="mt-auto relative z-10">
                                    <Button 
                                        asChild 
                                        className={`w-full group ${
                                            plan.popular 
                                                ? 'bg-gradient-to-r from-[#175379] to-[#15158c] hover:from-[#e47a33] hover:to-[#175379] text-white shadow-lg hover:shadow-xl' 
                                                : 'bg-white border-2 border-[#175379] text-[#175379] hover:bg-[#175379] hover:text-white'
                                        } transition-all duration-300`}
                                    >
                                        <Link href="/get-started">
                                            Get started
                                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
            <div className="mt-16 text-center relative z-10">
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button 
                                variant="outline" 
                                className="border-2 border-[#175379] text-[#175379] hover:bg-[#175379] hover:text-white transition-all duration-300"
                            >
                                Need help choosing?
                                <HelpCircle className="ml-2 h-4 w-4" />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent className="bg-gray-900 text-white">
                            <p>Contact us for a personalized recommendation</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
        </div>
    )
}
