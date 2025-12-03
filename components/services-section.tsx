'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Link as LucideLink, Megaphone, Paintbrush, ArrowRight, Sparkles } from "lucide-react"
import NextLink from "next/link"
import { motion } from "framer-motion"

export function ServicesSection() {
    const services = [
        {
            icon: Code,
            title: "Web Development",
            description: "Custom websites tailored to your unique business needs, built with the latest technologies and best practices.",
            gradient: "from-blue-500/20 to-cyan-500/20",
            iconColor: "text-blue-600",
        },
        {
            icon: Megaphone,
            title: "Digital Marketing",
            description: "Comprehensive digital marketing strategies to boost your online presence and drive sustainable growth.",
            gradient: "from-purple-500/20 to-pink-500/20",
            iconColor: "text-purple-600",
        },
        {
            icon: Paintbrush,
            title: "Branding",
            description: "Create a strong, memorable brand identity that resonates with your target audience and stands out.",
            gradient: "from-orange-500/20 to-red-500/20",
            iconColor: "text-orange-600",
        },
    ]

    return (
        <section className="relative w-full py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-white">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
                <motion.div
                    className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-r from-[#e47a33]/10 via-[#175379]/10 to-[#15158c]/10 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, -50, 0],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </div>

            <div className="container px-4 md:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-md border border-[#175379]/20 text-[#175379] rounded-full text-sm font-semibold mb-6 shadow-lg"
                    >
                        <Sparkles className="h-4 w-4 text-[#e47a33]" />
                        <span>Our Services</span>
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#15158c] via-[#175379] to-[#e47a33]">
                            What We Offer
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Comprehensive digital solutions designed to elevate your business
                    </p>
                </motion.div>

                <div className="grid gap-8 lg:grid-cols-3 mb-12">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -12, scale: 1.02 }}
                            className="group"
                        >
                            <Card className="h-full bg-white/80 backdrop-blur-md border border-gray-200/50 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                                <CardContent className="relative flex flex-col items-center space-y-6 p-8">
                                    <motion.div
                                        className={`p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-500 ${service.iconColor}`}
                                        whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <service.icon className="h-12 w-12" />
                                    </motion.div>
                                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#175379] transition-colors duration-300">
                                        {service.title}
                                    </h3>
                                    <p className="text-center text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                                        {service.description}
                                    </p>
                                    <motion.div
                                        className="w-full h-1 bg-gradient-to-r from-[#175379] to-[#e47a33] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                        initial={{ width: 0 }}
                                        whileHover={{ width: "100%" }}
                                    />
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center"
                >
                    <NextLink href="/services">
                        <Button
                            size="lg"
                            className="group px-8 py-6 text-lg font-semibold bg-gradient-to-r from-[#175379] to-[#15158c] hover:from-[#e47a33] hover:to-[#175379] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            View All Services
                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </NextLink>
                </motion.div>
            </div>
        </section>
    )
}
