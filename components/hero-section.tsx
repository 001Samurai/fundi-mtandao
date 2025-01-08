'use client'

import { useState } from 'react'
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Monitor, Rocket } from 'lucide-react'
import { motion } from "framer-motion"
import Link from "next/link"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

const carouselItems = [
  {
    image: '/images/web.jpg?height=400&width=600',
    title: 'Web Development',
    description: 'Create stunning, responsive websites',
    cta: 'Learn More',
      link: '/services/service/web-development',
  },
    {
    image: '/images/digmark.jpg?height=400&width=600',
    title: 'Digital Marketing',
    description: 'Run strategic, impactful campaigns to improve your online presence.',
    cta: 'Learn More',
      link: '/services/service/digital-marketing',
  },
  {
    image: '/images/mobileapp.jpg?height=400&width=600',
    title: 'Mobile Apps',
    description: 'Build powerful mobile applications',
    cta: 'Learn More',
      link: '/services/service/mobile-app-development',
  },
  {
    image: '/images/social.jpg?height=400&width=600',
    title: 'UI/UX Design',
    description: 'Design intuitive user interfaces',
    cta: 'Learn More',
      link: '/services/service/ui-ux-design',
  },
    {
    image: '/images/ecommerce.jpg?height=400&width=600',
    title: 'Ecommerce',
    description: 'Create stunning, responsive ecommerce apps',
    cta: 'Learn More',
      link: '/services/service/ecommerce',
  },
]

export default function HeroSection() {
    const [isHoveredGet, setIsHoveredGet] = useState(false)
    const [isHoveredServices, setIsHoveredServices] = useState(false)

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
        <section className="relative w-full py-12 min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
            <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    {/* Monitor Frame (Showcase) */}
                    <motion.div 
                        className="w-full lg:w-1/2 order-1 lg:order-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <div className="relative w-full aspect-video">
                            {/* Monitor Frame SVG */}
                            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="10" y="10" width="980" height="560" rx="10" fill="#1E1E1E" />
                                <rect x="20" y="20" width="960" height="540" rx="5" fill="#000000" />
                                <rect x="400" y="570" width="200" height="15" fill="#1E1E1E" />
                                <rect x="350" y="585" width="300" height="5" rx="2.5" fill="#1E1E1E" />
                            </svg>
                            
                            {/* Carousel Container */}
                            <div className="absolute overflow-hidden inset-[20px] lg:inset-[30px] rounded-lg">
                                <Swiper
                                    modules={[Pagination, Autoplay, EffectFade]}
                                    pagination={{ clickable: true }}
                                    autoplay={{ delay: 5000 }}
                                    effect="fade"
                                    loop
                                    className="w-full h-full"
                                >
                                    {carouselItems.map((item, index) => (
                                        <SwiperSlide key={index}>
                                            <div className="relative w-full h-full">
                                                <Image
                                                    src={item.image}
                                                    alt={item.title}
                                                    layout="fill"
                                                    objectFit="cover"
                                                />
                                                <div className="absolute bottom-0 left-0 right-0 p-6 bg-black/50 text-white">
                                                    <h3 className="text-xl text-white font-semibold mb-2">{item.title}</h3>
                                                    <p className="text-sm mb-4">{item.description}</p>
                                                    <Link href={item.link}>
                                                    <Button variant="secondary" size="sm">
                                                        {item.cta}
                                                    </Button>
                                                    </Link> 
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                    </motion.div>

                    {/* Text Content */}
                    <div className="w-full lg:w-1/2 order-2 lg:order-1 flex flex-col items-center text-center lg:items-start lg:text-left">
                        <h1 className="text-3xl font-bold tracking-tighter uppercase bg-clip-text text-transparent bg-gradient-to-r from-[#15158c] to-[#ee333c] whitespac overflow-hidden text-ellipsis w-full">
                            INNOVATE. CREATE. SUCCEED.
                        </h1>
                        <p className="mt-4 mb-8 max-w-[600px] text-gray-700 text-lg dark:text-gray-400">
                            Transform your business with expert digital solutions from Fundi wa Mtandao. Whether you need a stunning website, seamless e-commerce platform, or impactful digital marketing campaigns, we’re here to help your brand stand out. We also specialize in custom software solutions, Mpesa integration, and IT support to keep your operations running smoothly. Partner with us to grow your business and achieve digital dominance.
                        </p>

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
                                    <Button 
                                        className={`inline-flex items-center justify-center rounded-2 px-6 py-3 text-sm font-medium transition-all duration-300 ease-in-out ${
                                            isHoveredGet ? 'bg-[#e47a33] text-white' : 'bg-[#175379] text-white'
                                        }`}
                                        onMouseEnter={() => setIsHoveredGet(true)}
                                        onMouseLeave={() => setIsHoveredGet(false)}
                                    >
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
                                        className={`inline-flex items-center justify-center rounded-2 border px-6 py-3 text-sm font-medium transition-all duration-300 ease-in-out ${
                                            isHoveredServices ? 'bg-[#175379] text-white' : 'text-[#175379] border-[#175379]'
                                        }`}
                                        onMouseEnter={() => setIsHoveredServices(true)}
                                        onMouseLeave={() => setIsHoveredServices(false)}
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
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-cover"
                >
                    <source src="/web-devices.mp4" type="video/mp4" />
                </video>
            </div>
        </section>
    )
}

