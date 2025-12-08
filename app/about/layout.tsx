import { generateMetadata as generateSEOMetadata } from "@/lib/seo"
import type { Metadata } from "next"

export const metadata: Metadata = generateSEOMetadata({
  title: "About Us - Fundi wa Mtandao | Web Developer & Digital Strategist in Mombasa",
  description: "Learn about Fundi wa Mtandao, a web development and digital marketing studio in Mombasa, Kenya. Founded by David Machua, we help businesses build fast, modern websites and digital experiences.",
  keywords: ["about fundi wa mtandao", "web developer Mombasa", "David Machua", "digital agency Kenya", "web development studio"],
  url: "/about",
  type: "website"
})

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}



