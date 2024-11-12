import Hero from "@/components/hero-section"
import AboutUsSection from "@/components/AboutUsSection"
import { ServicesSection } from "@/components/services-section"
import AdvancedPortfolio from "@/components/Portfolio"
import AdvancedTestimonials from "@/components/testimonial"
import Pricing from "@/components/pricing"
import SophisticatedCTA from "@/components/cta"

export default function Page() {
  return (
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

  )
}
