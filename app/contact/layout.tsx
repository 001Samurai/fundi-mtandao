import { generateMetadata as generateSEOMetadata } from "@/lib/seo"
import type { Metadata } from "next"

export const metadata: Metadata = generateSEOMetadata({
  title: "Contact Us - Get in Touch with Fundi wa Mtandao",
  description: "Contact Fundi wa Mtandao for web development and digital marketing services. Based in Mombasa, Kenya. Email: dmachua.freelance@gmail.com | Phone: +254707211023",
  keywords: ["contact web developer", "web development contact Kenya", "digital marketing consultation", "Mombasa web developer"],
  url: "/contact",
  type: "website"
})

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}



