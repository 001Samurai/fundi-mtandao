import { generateMetadata as generateSEOMetadata } from "@/lib/seo"
import type { Metadata } from "next"

export const metadata: Metadata = generateSEOMetadata({
  title: "Services - Web Development & Digital Marketing Services in Kenya",
  description: "Comprehensive web development and digital marketing services including custom websites, e-commerce solutions, SEO, social media marketing, M-pesa integration, and more. Serving businesses across Kenya.",
  keywords: ["web development services", "digital marketing Kenya", "SEO services", "e-commerce development", "website design Mombasa", "social media marketing"],
  url: "/services",
  type: "website"
})

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}



