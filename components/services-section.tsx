import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Link as LucideLink, Megaphone, Paintbrush } from "lucide-react"
import NextLink from "next/link"

export function ServicesSection() {
    const services = [
        {
            icon: Code,
            title: "Web Development",
            description: "Custom websites tailored to your unique business needs, built with the latest technologies.",
        },
        {
            icon: Megaphone,
            title: "Digital Marketing",
            description: "Comprehensive digital marketing strategies to boost your online presence and drive growth.",
        },
        {
            icon: Paintbrush,
            title: "Branding",
            description: "Create a strong, memorable brand identity that resonates with your target audience.",
        },
    ]

    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Our Services</h2>
                <div className="grid gap-6 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <Card key={index}>
                            <CardContent className="flex flex-col items-center space-y-4 p-6">
                                <service.icon className="h-12 w-12 text-[#e47a33] " />
                                <h3 className="text-xl font-bold">{service.title}</h3>
                                <p className="text-center text-gray-600">{service.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
                <div className="mt-8 text-center">
                    <NextLink href="/services">
                        <Button>View All Services</Button>
                    </NextLink>
                </div>
            </div>
        </section>
    )
}