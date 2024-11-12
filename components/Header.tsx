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
        <header className="sticky top-0 z-50 w-full px-4 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 items-center">
                <Link href="/" className="flex items-center space-x-2">
                    <MonitorCog className="h-6 w-6" />
                    <span className="font-bold">WEBFUNDI</span>
                </Link>
                <nav className="hidden sm:flex items-center justify-center flex-1 mx-4">
                    {menuItems.map((item) => (
                        <Link key={item.href} href={item.href} className="text-sm font-medium px-4">
                            {item.label}
                        </Link>
                    ))}
                </nav>
                <div className="hidden sm:flex items-center space-x-4">
                    <Button variant="outline" size="sm">
                        Login
                    </Button>
                    <Button size="sm">Register</Button>
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
                                    className="text-sm font-medium"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <Button variant="outline" size="sm" className="w-full">
                                Login
                            </Button>
                            <Button size="sm" className="w-full">
                                Register
                            </Button>
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    )
}