'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from 'lucide-react'
import { Checkbox } from "@/components/ui/checkbox"

const services = [
    { id: 'web-development', label: 'Web Development' },
    { id: 'seo', label: 'Search Engine Optimization' },
    { id: 'content-creation', label: 'Content Creation' },
    { id: 'social-media', label: 'Social Media Management' },
    { id: 'email-marketing', label: 'Email Marketing' },
    { id: 'analytics', label: 'Analytics and Reporting' },
]

export function PackageSelectionForm() {
    const searchParams = useSearchParams()
    const [formData, setFormData] = useState({
        plan: '',
        name: '',
        email: '',
        phone: '',
        company: '',
        website: '',
        projectDescription: '',
        desiredServices: [] as string[],
        otherServices: '',
    })

    useEffect(() => {
        const plan = searchParams.get('plan')
        if (plan) {
            setFormData(prev => ({ ...prev, plan }))
        }
    }, [searchParams])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleServiceChange = (serviceId: string, checked: boolean) => {
        setFormData(prev => ({
            ...prev,
            desiredServices: checked
                ? [...prev.desiredServices, serviceId]
                : prev.desiredServices.filter(id => id !== serviceId)
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            const response = await fetch('/api/package-selection', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })
            if (response.ok) {
                console.log('Form submitted successfully')
                // You might want to redirect or show a success message here
            } else {
                console.error('Form submission failed')
                // You might want to show an error message to the user here
            }
        } catch (error) {
            console.error('Error submitting form:', error)
            // You might want to show an error message to the user here
        }
    }

    return (
        <Card className="max-w-2xl mx-auto">
            <CardHeader>
                <CardTitle>Complete Your Package Selection</CardTitle>
                <CardDescription>Please provide additional information to customize your {formData.plan} package.</CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="company">Company</Label>
                        <Input
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="website">Current Website (if applicable)</Label>
                        <Input
                            id="website"
                            name="website"
                            type="url"
                            value={formData.website}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label>Desired Services</Label>
                        <div className="grid grid-cols-2 gap-2">
                            {services.map((service) => (
                                <div key={service.id} className="flex items-center space-x-2">
                                    <Checkbox
                                        id={service.id}
                                        checked={formData.desiredServices.includes(service.id)}
                                        onCheckedChange={(checked) => handleServiceChange(service.id, checked as boolean)}
                                    />
                                    <Label htmlFor={service.id}>{service.label}</Label>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="otherServices">Other Services</Label>
                        <Textarea
                            id="otherServices"
                            name="otherServices"
                            value={formData.otherServices}
                            onChange={handleInputChange}
                            placeholder="Please specify any other services you're interested in"
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="projectDescription">Project Description</Label>
                        <Textarea
                            id="projectDescription"
                            name="projectDescription"
                            value={formData.projectDescription}
                            onChange={handleInputChange}
                            placeholder="Tell us more about your project and specific needs"
                            required
                        />
                    </div>
                    <Button type="submit" className="w-full">
                        Submit
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </form>
            </CardContent>
        </Card>
    )
}