"use client";

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { ChevronDown, Menu, MonitorCog, X } from "lucide-react"
import Image from "next/image"
import { motion } from 'framer-motion';

export function Header() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => setIsOpen(!isOpen)

    const menuItems = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/services", label: "Services" },
        { href: "/portfolio", label: "Portfolio" },
        { href: "/contact", label: "Contact" },
        { href: "/blog", label: "Blog" },
    ]

    return (
        <header className="sticky top-0 z-50 w-full px-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center">
                <Link href="/" className="flex items-center">
                    <motion.div
                        whileHover={{ scale: 1.2, rotate: 7 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <Image
                            src="/fwm-logo.png"
                            alt="Fundi wa Mtandao Logo"
                            width={96}
                            height={96}
                            className="h-24 w-24 px-2 object-contain"
                        />
                    </motion.div>
                </Link>
                <nav className="hidden sm:flex items-center justify-center flex-1 mx-4">
                    {menuItems.map((item) => (
                        <Link key={item.href} href={item.href} className="text-sm text-[#175379] hover:text-[#e47a33] font-medium px-4">
                            {item.label}
                        </Link>
                    ))}
                </nav>
                <div className="hidden sm:flex items-center space-x-4">
                    <Link href="/get-started">
                        <Button variant="outline" size="sm">
                            Get Started
                        </Button>
                    </Link>
                    <Link href="/contact">
                        <Button size="sm">Contact Us</Button>
                    </Link>

                </div>
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild className="ml-auto sm:hidden">
                        <Button variant="ghost" size="icon">
                            <Menu className="h-5 w-5" />
                            <span className="sr-only">Toggle menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                        <nav className="flex flex-col space-y-4">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="text-sm text-[#175379] font-medium"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <Link href="/get-started">
                                <Button variant="outline" size="sm" className="w-full">
                                    Get Started
                                </Button>
                            </Link>
                            <Link href="/contact">
                                <Button size="sm" className="w-full">
                                    Contact Us
                                </Button>
                            </Link>
                        </nav>

                        <div className="flex flex-col items-center space-y-2 mt-7">
                            <Image
                                src="/fwm-logo.png"
                                alt="Fundi wa Mtandao Logo"
                                width={160}
                                height={160}
                                className="h-40 w-40 object-contain"
                            />
                            <p className="text-sm text-muted-foreground italic text-center">
                                Your Digital Solutions Partner
                            </p>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    )
}