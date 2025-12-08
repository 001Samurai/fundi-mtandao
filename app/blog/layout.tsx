import { generateMetadata as generateSEOMetadata } from "@/lib/seo"
import type { Metadata } from "next"

export const metadata: Metadata = generateSEOMetadata({
  title: "Blog - Web Development & Digital Marketing Insights",
  description: "Read the latest articles on web development, digital marketing, SEO, and UX design. Expert insights and strategies for growing your online presence in Kenya.",
  keywords: ["web development blog", "digital marketing articles", "SEO tips Kenya", "web design blog", "digital marketing insights"],
  url: "/blog",
  type: "website"
})

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}



