'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Github, Twitter, Linkedin, Instagram, Mail, Heart, Sparkles } from 'lucide-react'
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
    { icon: Github, href: "#", label: "GitHub", color: "hover:text-gray-900" },
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:text-blue-400" },
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:text-blue-600" },
    { icon: Instagram, href: "#", label: "Instagram", color: "hover:text-pink-500" },
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
                body: JSON.stringify({ email }),
            });

            if (!response.ok) {
                throw new Error('Failed to send subscription data');
            }

            alert('Subscription Successful');
            setEmail('');
        } catch (error) {
            const errorMessage = (error as Error).message || 'An unknown error occurred';
            console.error('Error:', error);
            alert('Subscription Failed: ' + errorMessage);
        }
    };

    return (
        <footer className="relative bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 pt-20 pb-8 border-t border-slate-700/50 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]" />
                <motion.div
                    className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-r from-[#175379]/20 via-[#e47a33]/20 to-[#15158c]/20 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, -50, 0],
                    }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 gap-12 mb-12 lg:grid-cols-5">
                    <div className="lg:col-span-2 flex flex-col items-center lg:items-start">
                        <Link href="/" className="flex items-center space-x-3 mb-6 group">
                            <motion.div
                                className="relative"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-[#175379] to-[#e47a33] rounded-lg blur-md opacity-50 group-hover:opacity-75 transition-opacity" />
                                <Image
                                    src="/fwm-logo.png"
                                    alt="FwM Logo"
                                    width={80}
                                    height={80}
                                    className="relative object-cover rounded-lg"
                                />
                            </motion.div>
                            <div>
                                <h3 className="text-2xl font-bold text-white">Fundi wa Mtandao</h3>
                                <p className="text-slate-400 text-sm">Digital Solutions</p>
                            </div>
                        </Link>
                        <p className="text-slate-300 mb-6 text-center lg:text-left max-w-md">
                            Crafting digital excellence with cutting-edge web solutions and innovative marketing strategies.
                        </p>
                        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-3">
                            <Label htmlFor="email" className="sr-only">Email</Label>
                            <div className="flex gap-2">
                                <Input
                                    type="email"
                                    id="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="flex-grow bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-400 focus:border-[#175379] focus:ring-[#175379]"
                                />
                                <Button 
                                    type="submit"
                                    className="bg-gradient-to-r from-[#175379] to-[#15158c] hover:from-[#e47a33] hover:to-[#175379] text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                                >
                                    Subscribe
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </div>
                        </form>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-3 gap-8 lg:col-span-3">
                        {footerLinks.map((column, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <h3 className="font-bold text-white mb-4 text-lg">{column.title}</h3>
                                <ul className="space-y-3">
                                    {column.links.map((link, linkIndex) => (
                                        <li key={linkIndex}>
                                            <Link 
                                                href={link.path} 
                                                className="text-slate-400 hover:text-[#e47a33] transition-colors duration-300 flex items-center gap-2 group"
                                            >
                                                <span className="w-0 group-hover:w-2 h-0.5 bg-[#e47a33] transition-all duration-300" />
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-700/50">
                    <p className="text-sm text-slate-400 mb-4 md:mb-0">
                        © {new Date().getFullYear()} Fundi wa Mtandao. All rights reserved.
                    </p>
                    <div className="flex space-x-4">
                        <TooltipProvider>
                            {socialLinks.map((social, index) => (
                                <Tooltip key={index}>
                                    <TooltipTrigger asChild>
                                        <motion.a
                                            href={social.href}
                                            className={`text-slate-400 ${social.color} transition-colors duration-300 p-2 rounded-lg hover:bg-slate-800/50`}
                                            whileHover={{ scale: 1.1, y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <social.icon className="h-5 w-5" />
                                            <span className="sr-only">{social.label}</span>
                                        </motion.a>
                                    </TooltipTrigger>
                                    <TooltipContent className="bg-gray-900 text-white">
                                        <p>Follow us on {social.label}</p>
                                    </TooltipContent>
                                </Tooltip>
                            ))}
                        </TooltipProvider>
                    </div>
                </div>
            </div>
            <div className="mt-8 text-center relative z-10">
                <motion.div
                    className="inline-flex items-center gap-2 text-sm text-slate-400"
                    whileHover={{ scale: 1.05 }}
                >
                    <span>Made with</span>
                    <motion.span
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                    >
                        <Heart className="h-4 w-4 text-red-500 fill-red-500" />
                    </motion.span>
                    <span>by Fundi wa Mtandao Team</span>
                </motion.div>
            </div>
        </footer>
    )
}
