'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Github, Twitter, Linkedin, Instagram, Mail } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

const footerLinks = [
    { title: "Company", links: ["About", "Careers", "Press"] },
    { title: "Services", links: ["Web Development", "Digital Marketing", "UI/UX Design"] },
    { title: "Resources", links: ["Blog", "Case Studies", "Documentation"] },
    { title: "Legal", links: ["Privacy Policy", "Terms of Service", "Cookie Policy"] },
]

const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
]

export default function SophisticatedFooter() {
    const [email, setEmail] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle newsletter signup logic here
        console.log('Newsletter signup:', email)
        setEmail('')
    }

    return (
        <footer className="bg-gradient-to-b from-background to-primary/20 pt-16 pb-8 border-t-2 border-border">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
                    <div className="lg:col-span-2">
                        <Link href="/" className="flex items-center space-x-2 mb-4">
                            <motion.div
                                className="w-8 h-8 bg-primary rounded-full"
                                whileHover={{ scale: 1.1, rotate: 90 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            />
                            <span className="text-2xl font-bold">DigitalCraft</span>
                        </Link>
                        <p className="text-muted-foreground mb-4">
                            Crafting digital excellence with cutting-edge web solutions and innovative marketing strategies.
                        </p>
                        <form onSubmit={handleSubmit} className="space-y-2">
                            <Label htmlFor="email" className="sr-only">Email</Label>
                            <div className="flex space-x-2">
                                <Input
                                    type="email"
                                    id="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="flex-grow"
                                />
                                <Button type="submit" size="sm">
                                    Subscribe
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </div>
                        </form>
                    </div>
                    {footerLinks.map((column, index) => (
                        <div key={index}>
                            <h3 className="font-semibold mb-4">{column.title}</h3>
                            <ul className="space-y-2">
                                {column.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                                            {link}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t-2 border-border">
                    <p className="text-sm lg:mx-4 text-muted-foreground mb-4 md:mb-0">
                        © {new Date().getFullYear()} DigitalCraft. All rights reserved.
                    </p>
                    <div className="flex lg:mx-4 space-x-4">
                        <TooltipProvider>
                            {socialLinks.map((social, index) => (
                                <Tooltip key={index}>
                                    <TooltipTrigger asChild>
                                        <Link href={social.href} className="text-muted-foreground hover:text-foreground transition-colors">
                                            <social.icon className="h-5 w-5" />
                                            <span className="sr-only">{social.label}</span>
                                        </Link>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Follow us on {social.label}</p>
                                    </TooltipContent>
                                </Tooltip>
                            ))}
                        </TooltipProvider>
                    </div>
                </div>
            </div>
            <div className="mt-8 text-center">
                <Button variant="link" className="text-xs text-muted-foreground hover:text-foreground">
                    Made with <span className="text-red-500 mx-1">♥</span> by DigitalCraft Team
                </Button>
            </div>
        </footer>
    )
}