"use client";

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Menu, X, ArrowRight } from "lucide-react"
import Image from "next/image"
import { motion, AnimatePresence } from 'framer-motion';

export function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const menuItems = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/services", label: "Services" },
        { href: "/portfolio", label: "Portfolio" },
        { href: "/pricing", label: "Pricing" },
        { href: "/contact", label: "Contact" },
        { href: "/blog", label: "Blog" },
    ]

    return (
        <motion.header 
            className={`sticky top-0 z-50 w-full transition-all duration-500 ${
                scrolled 
                    ? 'bg-white/90 backdrop-blur-xl shadow-xl border-b border-gray-200/50' 
                    : 'bg-white/70 backdrop-blur-md'
            }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
            <div className="container mx-auto px-4 lg:px-6">
                <div className="flex h-16 lg:h-20 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center group">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="relative"
                        >
                            <Image
                                src="/fwm-logo.png"
                                alt="Fundi wa Mtandao Logo"
                                width={48}
                                height={48}
                                className="h-12 w-12 lg:h-14 lg:w-14 object-contain transition-transform duration-300 group-hover:rotate-2"
                            />
                        </motion.div>
                        <div className="ml-3 hidden sm:block">
                            <h1 className="text-lg lg:text-xl font-bold text-[#175379]">Fundi wa Mtandao</h1>
                            <p className="text-xs text-gray-600">Digital Solutions</p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-1">
                        {menuItems.map((item, index) => (
                            <motion.div
                                key={item.href}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                            >
                                <Link 
                                    href={item.href} 
                                    className="group relative px-4 py-2 text-sm font-semibold text-[#175379] hover:text-[#e47a33] transition-all duration-300 rounded-lg hover:bg-gradient-to-r hover:from-[#175379]/5 hover:to-[#e47a33]/5"
                                >
                                    {item.label}
                                    <motion.span 
                                        className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#175379] to-[#e47a33]"
                                        whileHover={{ width: "100%" }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </Link>
                            </motion.div>
                        ))}
                    </nav>

                    {/* Desktop CTA Buttons */}
                    <div className="hidden lg:flex items-center space-x-3">
                        <Link href="/get-started">
                            <Button 
                                variant="outline" 
                                size="sm"
                                className="group border-2 border-[#175379] text-[#175379] hover:bg-gradient-to-r hover:from-[#175379] hover:to-[#15158c] hover:text-white hover:border-transparent transition-all duration-300 shadow-sm hover:shadow-md"
                            >
                                Get Started
                            </Button>
                        </Link>
                        <Link href="/contact">
                            <Button 
                                size="sm"
                                className="bg-gradient-to-r from-[#175379] to-[#15158c] hover:from-[#e47a33] hover:to-[#175379] text-white transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
                            >
                                Contact Us
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild className="lg:hidden">
                            <Button 
                                variant="ghost" 
                                size="icon"
                                className="relative w-10 h-10"
                            >
                                <AnimatePresence mode="wait">
                                    {isOpen ? (
                                        <motion.div
                                            key="close"
                                            initial={{ rotate: -90, opacity: 0 }}
                                            animate={{ rotate: 0, opacity: 1 }}
                                            exit={{ rotate: 90, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <X className="h-5 w-5" />
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="menu"
                                            initial={{ rotate: 90, opacity: 0 }}
                                            animate={{ rotate: 0, opacity: 1 }}
                                            exit={{ rotate: -90, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <Menu className="h-5 w-5" />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent 
                            side="right" 
                            className="w-[320px] sm:w-[400px] bg-white/95 backdrop-blur-xl border-l border-gray-200/50 shadow-2xl"
                        >
                            <div className="flex flex-col h-full">
                                {/* Mobile Logo */}
                                <div className="flex items-center justify-center py-6 border-b border-gray-100">
                                    <Image
                                        src="/fwm-logo.png"
                                        alt="Fundi wa Mtandao Logo"
                                        width={80}
                                        height={80}
                                        className="h-20 w-20 object-contain"
                                    />
                                    <div className="ml-4">
                                        <h2 className="text-xl font-bold text-[#175379]">Fundi wa Mtandao</h2>
                                        <p className="text-sm text-gray-600">Digital Solutions Partner</p>
                                    </div>
                                </div>

                                {/* Mobile Navigation */}
                                <nav className="flex-1 py-6">
                                    <div className="space-y-2">
                                        {menuItems.map((item, index) => (
                                            <motion.div
                                                key={item.href}
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                            >
                                                <Link
                                                    href={item.href}
                                                    className="flex items-center justify-between w-full px-4 py-3 text-base font-medium text-[#175379] hover:text-[#e47a33] hover:bg-gray-50 rounded-lg transition-all duration-200"
                                                    onClick={() => setIsOpen(false)}
                                                >
                                                    {item.label}
                                                    <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                                </Link>
                                            </motion.div>
                                        ))}
                                    </div>
                                </nav>

                                {/* Mobile CTA Buttons */}
                                <div className="border-t border-gray-100 pt-6 space-y-3">
                                    <Link href="/get-started" onClick={() => setIsOpen(false)}>
                                        <Button 
                                            variant="outline" 
                                            size="lg"
                                            className="w-full border-[#175379] text-[#175379] hover:bg-[#175379] hover:text-white transition-all duration-200"
                                        >
                                            Get Started
                                        </Button>
                                    </Link>
                                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                                        <Button 
                                            size="lg"
                                            className="w-full bg-[#175379] hover:bg-[#e47a33] text-white transition-all duration-200"
                                        >
                                            Contact Us
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </motion.header>
    )
}