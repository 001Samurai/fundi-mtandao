import { generateMetadata as generateSEOMetadata } from "@/lib/seo"
import type { Metadata } from "next"

export const metadata: Metadata = generateSEOMetadata({
  title: "Get Started - Start Your Web Development Project Today",
  description: "Get started with your web development or digital marketing project. Fill out our form to receive a customized quote and consultation. Fast, professional service in Kenya.",
  keywords: ["get started web development", "web project consultation", "website quote Kenya", "digital marketing consultation"],
  url: "/get-started",
  type: "website"
})

export default function GetStartedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}


