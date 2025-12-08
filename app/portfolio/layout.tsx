import { generateMetadata as generateSEOMetadata } from "@/lib/seo"
import type { Metadata } from "next"

export const metadata: Metadata = generateSEOMetadata({
  title: "Portfolio - Web Development Projects & Case Studies",
  description: "View our portfolio of web development and digital marketing projects. See examples of custom websites, e-commerce solutions, and digital strategies we've created for businesses in Kenya.",
  keywords: ["web development portfolio", "website examples Kenya", "digital marketing case studies", "web design portfolio Mombasa"],
  url: "/portfolio",
  type: "website"
})

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}


