import Balancer from "react-wrap-balancer";
import { Article, Container, Section } from "@/components/ui/craft";
import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { CircleCheck } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface PricingCardProps {
    title: "Basic" | "Standard" | "Entreprise";
    price: string;
    description?: string;
    features: string[];
    cta: string;
    href: string;
}

// Dummy pricing data
const pricingData: PricingCardProps[] = [
    {
        title: "Basic",
        price: "KES 15,000/Month",
        description: "Perfect for small businesses and professional individuals.",
        features: ["3 Pages", "Basic SEO", "Email Support", "Responsive Design"],
        cta: "Choose Basic",
        href: "/package-selection?plan=basic",
    },
    {
        title: "Standard",
        price: "KES 25,000/month",
        description: "Best for growing businesses with more needs.",
        features: [
            "10 Pages",
            "Advanced SEO",
            "CMS Integration",
            "24/7 Chat Support",
        ],
        cta: "Choose Standard",
        href: "/package-selection?plan=standard",
    },
    {
        title: "Entreprise",
        price: "KES 50,000/Month",
        description: "Ideal for larger businesses that need scalability.",
        features: [
            "Unlimited Pages",
            "E-commerce Integration",
            "Priority Support",
            "Custom API Integration",
        ],
        cta: "Choose Entreprise",
        href: "/package-selection?plan=pro",
    },
];

const Pricing = () => {
    return (
        <Section>
            <Container className="flex flex-col items-center gap-4 text-center">
                <h1 className="text-4xl font-bold text-center mb-12 !my-0">Pricing</h1>
                <p className="text-lg opacity-70 md:text-2xl">
                    <Balancer>Select the plan that best suits your needs.</Balancer>
                </p>

                <div className="not-prose mt-4 grid grid-cols-1 gap-6 min-[850px]:grid-cols-3">
                    {pricingData.map((plan, index) => (
                        <PricingCard plan={plan} key={index} />
                    ))}
                </div>
            </Container>
        </Section>
    );
};

const PricingCard = ({ plan }: { plan: PricingCardProps }) => {
    return (
        <div className="flex flex-col rounded-lg shadow-md border p-6">
            <div className="text-center">
                <Badge className="text-lg bg-[#175391]">{plan.title}</Badge>
                <h4 className="mb-2 mt-4 text-2xl text-primary">{plan.price}</h4>
                <p className="text-base opacity-70">{plan.description}</p>
            </div>

            <div className="my-4 border-t"></div>

            <ul className="space-y-3 text-left">
                {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm opacity-70">
                        <CircleCheck className="mr-2 h-4 w-4" />
                        {feature}
                    </li>
                ))}
            </ul>

            <div className="mt-auto pt-6">
                <Link href={plan.href}>
                    <Button size={"sm"} className="w-full">
                        {plan.cta}
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default Pricing;