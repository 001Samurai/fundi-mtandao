import { generateMetadata as generateSEOMetadata } from "@/lib/seo"
import type { Metadata } from "next"

export const metadata: Metadata = generateSEOMetadata({
  title: "Pricing - Web Development & Digital Marketing Packages",
  description: "Transparent pricing for web development and digital marketing services. Choose from starter, professional, or enterprise packages. All packages include responsive design, SEO optimization, and ongoing support.",
  keywords: ["web development pricing", "website cost Kenya", "digital marketing packages", "affordable web design Mombasa"],
  url: "/pricing",
  type: "website"
})

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}



