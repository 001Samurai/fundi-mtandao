'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ArrowLeft, Check, Briefcase, Users, Clock, DollarSign, Sparkles } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const projectTypes = [
    "New Website",
    "Website Redesign",
    "E-commerce",
    "Web Application",
    "Digital Marketing Campaign",
]

const industries = [
    "Technology",
    "Healthcare",
    "Finance",
    "Education",
    "Retail",
    "Manufacturing",
    "Other",
]

const timelines = [
    "1-3 months",
    "3-6 months",
    "6-12 months",
    "1 year+",
]

const budgetRanges = [
    "KES 15,000 - KES 20,000",
    "KES 20,000 - KES 30,000",
    "KES 30,000 - KES 50,000",
    "KES 50,000+",
]

export default function CTASection() {
    const [step, setStep] = useState(1)
    const [projectInfo, setProjectInfo] = useState({
        project_type: '',
        industry: '',
        project_description: '',
        target_audience: '',
        timeline: '',
        budget_range: '',
        name: '',
        company: '',
        email: '',
        phone: '',
        website_url: '',
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setProjectInfo(prev => ({ ...prev, [name]: value }))
    }

    const handleSelectChange = (name: string, value: string) => {
        setProjectInfo(prev => ({ ...prev, [name]: value }))
    }

    const handleNext = () => {
        if (step < 4) setStep(step + 1)
    }

    const handleBack = () => {
        if (step > 1) setStep(step - 1)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            const response = await fetch('/api/cta', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(projectInfo),
            })
            if (response.ok) {
                console.log('Quote request submitted successfully')
                setStep(5) // Move to the thank you step
            } else {
                console.error('Failed to submit quote request')
                // Handle error (e.g., show error message to user)
            }
        } catch (error) {
            console.error('Error submitting quote request:', error)
            // Handle error (e.g., show error message to user)
        }
    }

    const isStepComplete = () => {
        switch (step) {
            case 1:
                return projectInfo.project_type && projectInfo.industry && projectInfo.project_description
            case 2:
                return projectInfo.target_audience && projectInfo.timeline && projectInfo.budget_range
            case 3:
                return projectInfo.name && projectInfo.company && projectInfo.email && projectInfo.phone && projectInfo.website_url
            default:
                return true
        }
    }

    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                    <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="space-y-4">
                            <div>
                                <Label htmlFor="project_type">Project Type</Label>
                                <Select
                                    onValueChange={(value: string) => handleSelectChange('project_type', value)}
                                    value={projectInfo.project_type}
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select project type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {projectTypes.map((type) => (
                                            <SelectItem key={type} value={type}>{type}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                            <div>
                                <Label htmlFor="industry">Industry</Label>
                                <Select
                                    onValueChange={(value: string) => handleSelectChange('industry', value)}
                                    value={projectInfo.industry}
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select your industry" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {industries.map((industry) => (
                                            <SelectItem key={industry} value={industry}>{industry}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                            <div>
                                <Label htmlFor="project_description">Project Description</Label>
                                <Textarea
                                    id="project_description"
                                    name="project_description"
                                    value={projectInfo.project_description}
                                    onChange={handleInputChange}
                                    placeholder="Describe your project in detail"
                                    className='w-full'
                                    required
                                />
                            </div>
                        </div>
                    </motion.div>
                )
            case 2:
                return (
                    <motion.div
                        key="step2"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="space-y-4">
                            <div>
                                <Label htmlFor="target_audience">Target Audience</Label>
                                <Input
                                    id="target_audience"
                                    name="target_audience"
                                    value={projectInfo.target_audience}
                                    onChange={handleInputChange}
                                    placeholder="Describe your target audience"
                                    className='w-full'
                                    required
                                />
                            </div>
                            <div>
                                <Label>Desired Timeline</Label>
                                <RadioGroup
                                    onValueChange={(value) => handleSelectChange('timeline', value)}
                                    value={projectInfo.timeline}
                                >
                                    {timelines.map((timeline) => (
                                        <div key={timeline} className="flex items-center space-x-2">
                                            <RadioGroupItem value={timeline} id={timeline} />
                                            <Label htmlFor={timeline}>{timeline}</Label>
                                        </div>
                                    ))}
                                </RadioGroup>
                            </div>
                            <div>
                                <Label>Estimated Budget</Label>
                                <RadioGroup
                                    onValueChange={(value) => handleSelectChange('budget_range', value)}
                                    value={projectInfo.budget_range}
                                >
                                    {budgetRanges.map((range) => (
                                        <div key={range} className="flex items-center space-x-2">
                                            <RadioGroupItem value={range} id={range} />
                                            <Label htmlFor={range}>{range}</Label>
                                        </div>
                                    ))}
                                </RadioGroup>
                            </div>
                        </div>
                    </motion.div>
                )
            case 3:
                return (
                    <motion.div
                        key="step3"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="space-y-4">
                            <div>
                                <Label htmlFor="name">Name</Label>
                                <Input
                                    id="name"
                                    name="name"
                                    value={projectInfo.name}
                                    onChange={handleInputChange}
                                    placeholder="Your full name"
                                    className='w-ful'
                                    required
                                />
                            </div>
                            <div>
                                <Label htmlFor="company">Company</Label>
                                <Input
                                    id="company"
                                    name="company"
                                    value={projectInfo.company}
                                    onChange={handleInputChange}
                                    placeholder="Your company name"
                                    className='w-ful'
                                    required
                                />
                            </div>
                            <div>
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={projectInfo.email}
                                    onChange={handleInputChange}
                                    placeholder="your@email.com"
                                    className='w-ful'
                                    required
                                />
                            </div>
                            <div>
                                <Label htmlFor="phone">Phone</Label>
                                <Input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    value={projectInfo.phone}
                                    onChange={handleInputChange}
                                    placeholder="Your phone number"
                                    className='w-ful'
                                    required
                                />
                            </div>
                            <div>
                                <Label htmlFor="website_url">Current Website (if applicable)</Label>
                                <Input
                                    id="website_url"
                                    name="website_url"
                                    type="url"
                                    value={projectInfo.website_url}
                                    onChange={handleInputChange}
                                    className='w-ful'
                                    placeholder="https://example.com"
                                />
                            </div>
                        </div>
                    </motion.div>
                )
            case 4:
                return (
                    <motion.div
                        key="step4"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold">Review Your Information</h3>
                            <div className="space-y-2">
                                <p><strong>Project Type:</strong> {projectInfo.project_type}</p>
                                <p><strong>Industry:</strong> {projectInfo.industry}</p>
                                <p><strong>Project Description:</strong> {projectInfo.project_description}</p>
                                <p><strong>Target Audience:</strong> {projectInfo.target_audience}</p>
                                <p><strong>Timeline:</strong> {projectInfo.timeline}</p>
                                <p><strong>Budget Range:</strong> {projectInfo.budget_range}</p>
                                <p><strong>Name:</strong> {projectInfo.name}</p>
                                <p><strong>Company:</strong> {projectInfo.company}</p>
                                <p><strong>Email:</strong> {projectInfo.email}</p>
                                <p><strong>Phone:</strong> {projectInfo.phone}</p>
                                <p><strong>Website:</strong> {projectInfo.website_url || 'N/A'}</p>
                            </div>
                        </div>
                    </motion.div>
                )
            case 5:
                return (
                    <motion.div
                        key="step5"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="text-center space-y-4">
                            <h3 className="text-2xl font-bold">Thank You for Your Interest!</h3>
                            <p>We've received your project details and will get back to you with a custom quote within 2 business days.</p>
                            <p>If you have any immediate questions, please don't hesitate to contact us.</p>
                        </div>
                    </motion.div>
                )
        }
    }

    return (
        <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-blue-50/30">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] bg-gradient-to-r from-[#175379]/10 via-[#e47a33]/10 to-[#15158c]/10 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, 50, 0],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto text-center mb-16"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-md border border-[#175379]/20 text-[#175379] rounded-full text-sm font-semibold mb-6 shadow-lg"
                    >
                        <Sparkles className="h-4 w-4 text-[#e47a33]" />
                        <span>Get Started</span>
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#15158c] via-[#175379] to-[#e47a33]">
                            Let's Craft Your Digital Success
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Tell us about your project, and we'll provide a tailored quote to elevate your online presence.
                    </p>
                </motion.div>

                <Card className="max-w-2xl mx-auto bg-white/90 backdrop-blur-md border border-gray-200/50 shadow-2xl">
                    <CardHeader className="bg-gradient-to-r from-[#175379]/10 to-[#e47a33]/10 border-b border-gray-200/50">
                        <CardTitle className="text-2xl font-bold text-gray-900">Request a Quote</CardTitle>
                        <CardDescription className="text-gray-600 font-medium">Step {step} of 5</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit}>
                            <AnimatePresence mode="wait">
                                {renderStep()}
                            </AnimatePresence>
                        </form>
                    </CardContent>
                    <CardFooter className="flex justify-between bg-gray-50/50 border-t border-gray-200/50">
                        {step > 1 && step < 5 && (
                            <Button 
                                variant="outline" 
                                onClick={handleBack}
                                className="border-2 border-[#175379] text-[#175379] hover:bg-[#175379] hover:text-white transition-all duration-300"
                            >
                                <ArrowLeft className="mr-2 h-4 w-4" /> Back
                            </Button>
                        )}
                        {step < 4 ? (
                            <Button 
                                onClick={handleNext} 
                                disabled={!isStepComplete()} 
                                className="ml-auto bg-gradient-to-r from-[#175379] to-[#15158c] hover:from-[#e47a33] hover:to-[#175379] text-white shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
                            >
                                Next <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        ) : step === 4 ? (
                            <Button 
                                type="submit" 
                                onClick={handleSubmit} 
                                className="ml-auto bg-gradient-to-r from-[#175379] to-[#15158c] hover:from-[#e47a33] hover:to-[#175379] text-white shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                Submit Request <Check className="ml-2 h-4 w-4" />
                            </Button>
                        ) : (
                            <Button 
                                onClick={() => setStep(1)} 
                                className="mx-auto bg-gradient-to-r from-[#175379] to-[#15158c] hover:from-[#e47a33] hover:to-[#175379] text-white shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                Start New Quote <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        )}
                    </CardFooter>
                </Card>
            </div>
        </section>
    )
}