'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 py-20 overflow-hidden">
      {/* Creative SVG Abstract Background */}
      <svg
        className="absolute inset-0 w-full h-full -z-10 pointer-events-none"
        viewBox="0 0 1440 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="hero-gradient" x1="0" y1="0" x2="1440" y2="600" gradientUnits="userSpaceOnUse">
            <stop stopColor="#15158c" stopOpacity="0.18" />
            <stop offset="1" stopColor="#e47a33" stopOpacity="0.14" />
          </linearGradient>
        </defs>
        <ellipse cx="400" cy="200" rx="500" ry="220" fill="url(#hero-gradient)" />
        <ellipse cx="1200" cy="500" rx="340" ry="120" fill="#e47a33" fillOpacity="0.08" />
        <ellipse cx="900" cy="100" rx="200" ry="80" fill="#15158c" fillOpacity="0.10" />
      </svg>
      <div className="container mx-auto px-4 flex flex-col items-center text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#15158c] to-[#ee333c] mb-6">
          Affordable web solutions to grow your brand.
        </h1>
        <p className="text-lg md:text-2xl text-gray-700 max-w-2xl mb-10 dark:text-gray-400">
          Expert web development and digital marketing for ambitious Kenyan businesses.
        </p>
        <Link href="/get-started">
          <Button size="lg" className="px-8 py-4 text-lg font-semibold bg-[#175379] text-white rounded-full shadow-lg hover:bg-[#e47a33] transition-colors">
            Start Your Project
          </Button>
        </Link>
      </div>
    </section>
  )
}

