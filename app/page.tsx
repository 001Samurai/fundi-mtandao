import Hero from "@/components/hero-section"
import AboutUsSection from "@/components/AboutUsSection"
import { ServicesSection } from "@/components/services-section"
import AdvancedPortfolio from "@/components/Portfolio"
import AdvancedTestimonials from "@/components/testimonial"
import Pricing from "@/components/pricing"
import SophisticatedCTA from "@/components/cta"
import { StructuredData } from "@/components/StructuredData"
import { generateLocalBusinessSchema, generatePersonSchema } from "@/lib/seo"

export const metadata = {
  title: "Home",
  description: "Professional web development and digital marketing services in Kenya. Custom websites, e-commerce solutions, M-pesa integration, SEO, and social media marketing. Based in Mombasa, serving clients nationwide.",
  openGraph: {
    title: "Fundi wa Mtandao - Web Development & Digital Marketing Services",
    description: "Professional web development and digital marketing services in Kenya. Custom websites, e-commerce solutions, and digital strategies.",
    url: "https://fundi-wa-mtandao.co.ke",
    type: "website",
  }
}

export default function Page() {
  return (
    <>
      <StructuredData data={[
        generateLocalBusinessSchema(),
        generatePersonSchema()
      ]} />
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <Hero />
          <AboutUsSection />
          <ServicesSection />
          <AdvancedPortfolio />
          <AdvancedTestimonials />
          <Pricing />
          <SophisticatedCTA />
        </main>
      </div>
    </>
  )
}
