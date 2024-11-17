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
import Image from 'next/image';

const footerLinks = [
    {
        title: "Company",
        links: [
            { name: "About", path: "/about" },
            { name: "Services", path: "/services" },
            { name: "Portfolio", path: "/portfolio" },
            { name: "Contact", path: "/contact" },
            { name: "Careers", path: "/careers" }
        ]
    },
    {
        title: "Services",
        links: [
            { name: "Web Development", path: "/services/service/web-development" },
            { name: "Digital Marketing", path: "/services/service/digital-marketing" },
            { name: "UI/UX Design", path: "/services/service/ui-ux-design" },
            { name: "Mobile App Development", path: "/services/service/mobile-app-development" }
        ]
    },
    {
        title: "Resources",
        links: [
            { name: "Blog", path: "/blog" },
            { name: "Case Studies", path: "/case-studies" },
            { name: "Documentation", path: "/documentation" }
        ]
    },
    {
        title: "Legal",
        links: [
            { name: "Privacy Policy", path: "/privacy-policy" },
            { name: "Terms of Service", path: "/terms-of-service" },
            { name: "Cookie Policy", path: "/cookie-policy" }
        ]
    },
]

const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
]

export default function SophisticatedFooter() {
    const [email, setEmail] = useState('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/new-sub', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }), // Send the email in the request body
            });

            if (!response.ok) {
                throw new Error('Failed to send subscription data');
            }

            // If the response is successful, show a success alert
            alert('Subscription Successful');
            setEmail(''); // Clear the email input
        } catch (error) {
            // Assert that error is of type Error
            const errorMessage = (error as Error).message || 'An unknown error occurred';
            console.error('Error:', error);
            alert('Subscription Failed: ' + errorMessage);
        }
    };

    return (
        <footer className="bg-gradient-to-b from-background to-primary/20 pt-16 pb-8 border-t-2 border-border">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 gap-8 mb-12">
                    <div className="md:col-span-full lg:col-span-2 px-2 flex flex-col items-center">
                        <Link href="/" className="flex items-center space-x-2">
                            <motion.div
                                className="w-32 h-32 rounded-sm overflow-hidden"
                                whileHover={{ scale: 1.1, rotate: 180 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <Image
                                    src="/fwm-logo.png"
                                    alt="FwM Logo"
                                    width={128}
                                    height={128}
                                    className="object-cover"
                                />
                            </motion.div>
                        </Link>
                        <p className="text-muted-foreground mb-1 text-center">
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
                                <Button type="submit" >
                                    Subscribe
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </div>
                        </form>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 lg:px-3 gap-8">
                        {footerLinks.map((column, index) => (
                            <div key={index}>
                                <h3 className="font-semibold mb-4">{column.title}</h3>
                                <ul className="space-y-2">
                                    {column.links.map((link, linkIndex) => (
                                        <li key={linkIndex}>
                                            <Link href={link.path} className="text-muted-foreground hover:text-foreground transition-colors">
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t-2 border-border">
                    <p className="text-sm lg:mx-4 text-muted-foreground mb-4 md:mb-0">
                        © {new Date().getFullYear()} Fundi wa Mtandao. All rights reserved.
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
                    Made with <span className="text-red-500 mx-1">♥</span> by Fundi wa Mtandao Team
                </Button>
            </div>
        </footer>
    )
}