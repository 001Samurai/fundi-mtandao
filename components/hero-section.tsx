'use client'

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Monitor, Rocket } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function Component() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Fundi Mtandao",
        "description": "Professional web development and digital marketing services",
        "url": "https://fundi-mtandao.vercel.app",
        "potentialAction": {
            "@type": "SearchAction",
            "target": "https://fundi-mtandao.vercel.app/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
        }
    }

    return (
        <section className="w-full py-12 min-h-[60vh]">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
                    <div className="order-first w-full lg:order-last lg:w-1/2">
                        <div className="relative aspect-square overflow-hidden rounded-xl">
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="h-full w-full object-cover rounded-lg"
                            >
                                <source src="/web-devices.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                    <div className="flex flex-col items-center text-center text-[#175379] px-3 lg:mt-32 lg:items-start lg:text-left lg:w-1/2">
                        <motion.h1
                            className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none mb-8 flex flex-col"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span>
                                <span className="text-[#e47a33] mb-2">Transforming</span> Ideas
                            </span>
                            <span className="flex justify-center mb-2" >Into</span>
                            <span>Digital Excellence</span>
                        </motion.h1>

                        <motion.p
                            className="max-w-[600px] text-gray-800 md:text-xl dark:text-gray-400 mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            Your partner in web development and digital marketing. We expertly craft stunning websites and
                            drive meaningful growth for your business using latest technologies.
                        </motion.p>

                        <motion.div
                            className="flex flex-row gap-4 justify-center lg:justify-start"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link href="/get-started">
                                    <Button className="inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-medium">
                                        <Rocket className="mr-2 h-5 w-5" />
                                        Get Started
                                    </Button>
                                </Link>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link href="/services">
                                    <Button
                                        variant="outline"
                                        className="inline-flex items-center justify-center rounded-lg border px-6 py-3 text-sm font-medium"
                                    >
                                        <Monitor className="mr-2 h-5 w-5" />
                                        Our Services
                                    </Button>
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}