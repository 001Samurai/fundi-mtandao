'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Search, Tag, Calendar, User, Clock, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Label } from '@/components/ui/label'
import dynamic from 'next/dynamic'

// Lazy load non-critical components
const DynamicTabs = dynamic(() => import('@/components/ui/tabs').then(mod => mod.Tabs), {
    loading: () => <p>Loading...</p>
})

// Mock data for blog posts
const blogPosts = [
    {
        id: 1,
        title: "10 Web Development Trends to Watch in 2024",
        excerpt: "Stay ahead of the curve with these emerging web development trends that are shaping the digital landscape.",
        author: "David Machua",
        date: "2023-11-15",
        readTime: "8 min read",
        image: "/images/blog/placeholder.jpg",
        category: "Web",
        tags: ["Trends", "Technology", "Innovation"]
    },
    {
        id: 2,
        title: "The Impact of AI on Digital Marketing Strategies",
        excerpt: "Explore how artificial intelligence is revolutionizing digital marketing and how businesses can leverage it for success.",
        author: "Sarah Johnson",
        date: "2023-11-10",
        readTime: "6 min read",
        image: "/images/blog/placeholder.jpg",
        category: "Marketing",
        tags: ["AI", "Marketing", "Technology"]
    },
    {
        id: 3,
        title: "Optimizing Website Performance: A Comprehensive Guide",
        excerpt: "Learn essential techniques to boost your website's speed and performance, improving user experience and SEO.",
        author: "David Machua",
        date: "2023-11-05",
        readTime: "10 min read",
        image: "/images/blog/placeholder.jpg",
        category: "Web",
        tags: ["Performance", "Optimization", "SEO"]
    },
    {
        id: 4,
        title: "The Rise of Voice Search: Implications for SEO",
        excerpt: "Discover how voice search is changing the SEO landscape and strategies to optimize your content for voice queries.",
        author: "Emily Chen",
        date: "2023-10-30",
        readTime: "7 min read",
        image: "/images/blog/placeholder.jpg",
        category: "SEO",
        tags: ["Voice Search", "SEO", "Content Strategy"]
    },
    {
        id: 5,
        title: "Creating Engaging User Experiences with Motion Design",
        excerpt: "Explore the power of motion design in creating captivating and intuitive user interfaces for web and mobile applications.",
        author: "David Machua",
        date: "2023-10-25",
        readTime: "9 min read",
        image: "/images/blog/placeholder.jpg",
        category: "Design",
        tags: ["Motion Design", "UX", "Interaction"]
    }
]

const categories = ["All", "Web", "Marketing", "SEO", "Design"]

const FeaturedPost = ({ post }: { post: { id: number; title: string; excerpt: string; author: string; date: string; readTime: string; image: string; category: string; tags: string[] } }) => (
    <Card className="overflow-hidden">
        <div className="relative">
            <Image
                src={post.image}
                alt={post.title}
                width={600}
                height={300}
                className="object-contain"
                priority={false}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRg..."
            />
        </div>
        <CardHeader>
            <div className="flex justify-between items-center mb-2">
                <Badge>{post.category}</Badge>
                <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="mr-1 h-4 w-4" />
                    {post.date}
                </div>
            </div>
            <CardTitle className="text-2xl md:text-3xl">{post.title}</CardTitle>
        </CardHeader>
        <CardContent>
            <p className="text-muted-foreground">{post.excerpt}</p>
        </CardContent>
        <CardFooter className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
                <Avatar>
                    <AvatarImage src="/images/blog/authors/david-machua.png" alt={post.author} />
                    <AvatarFallback>{post.author[0]}</AvatarFallback>
                </Avatar>
                <div>
                    <p className="text-sm font-medium">{post.author}</p>
                    <p className="text-xs text-muted-foreground">{post.readTime}</p>
                </div>
            </div>
            <Button variant="outline">
                Read More
                <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
        </CardFooter>
    </Card>
)

const BlogPost = ({ post }: { post: { id: number; title: string; excerpt: string; author: string; date: string; readTime: string; image: string; category: string; tags: string[] } }) => (
    <Card>
        <div className="relative">
            <Image
                src={post.image}
                alt={post.title}
                width={600}
                height={300}
                className="object-contain"
                priority={false}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRg..."
            />
        </div>
        <CardHeader>
            <div className="flex justify-between items-center mb-2">
                <Badge>{post.category}</Badge>
                <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="mr-1 h-4 w-4" />
                    {post.date}
                </div>
            </div>
            <CardTitle>{post.title}</CardTitle>
        </CardHeader>
        <CardContent>
            <p className="text-muted-foreground line-clamp-2">{post.excerpt}</p>
        </CardContent>
        <CardFooter className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
                <Avatar>
                    <AvatarImage src="/images/blog/authors/david-machua.png" alt={post.author} />
                    <AvatarFallback>{post.author[0]}</AvatarFallback>
                </Avatar>
                <p className="text-sm font-medium">{post.author}</p>
            </div>
            <Button variant="ghost" size="sm">
                Read More
                <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
        </CardFooter>
    </Card>
)

export default function BlogHomePage() {
    const [searchTerm, setSearchTerm] = useState('')
    const [activeCategory, setActiveCategory] = useState('All')
    const [email, setEmail] = useState('')
    const headerRef = useRef(null)
    const headerInView = useInView(headerRef, { once: true })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/new-sub', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }), // Send the email in the request body
            });

            if (!response.ok) {
                throw new Error('Failed to send subscription data');
            }

            // If the response is successful, show a success alert
            alert('Subscription Successful');
            setEmail(''); // Clear the email input
        } catch (error) {
            // Assert that error is of type Error
            const errorMessage = (error as Error).message || 'An unknown error occurred';
            console.error('Error:', error);
            alert('Subscription Failed: ' + errorMessage);
        }
    };

    const filteredPosts = blogPosts.filter(post =>
        (activeCategory === 'All' || post.category === activeCategory) &&
        (post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()))
    )

    return (
        <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
            <header className="py-20 text-center overflow-hidden relative">
                <motion.div
                    className="absolute inset-0 z-10"
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.1 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="absolute inset-0 z-0 bg-grid-white/10 bg-grid-16" />
                </motion.div>
                <div className="container mx-auto px-4 relative">
                    <motion.h1
                        className="text-4xl md:text-6xl text-gray-900 font-bold mb-4"
                        initial={{ y: -50, opacity: 0 }}
                        animate={headerInView ? { y: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.5 }}
                    >
                        Fundi wa Mtandao Insights.
                    </motion.h1>
                    <motion.p
                        className="text-xl text-dark font-semibold max-w-2xl mx-auto mb-8"
                        initial={{ y: 50, opacity: 0 }}
                        animate={headerInView ? { y: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Explore the latest trends, insights, and strategies in web development, digital marketing, and UX design and much more.
                    </motion.p>
                    <motion.div
                        className="max-w-md mx-auto"
                        initial={{ opacity: 0 }}
                        animate={headerInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <div className="relative w-full">
                            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-dark" />
                            <Input
                                type="search"
                                placeholder="Search articles..."
                                className="pl-10 w-full bg-transparent"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </motion.div>
                </div>
            </header>

            <main className="container mx-auto px-4 py-16">
                <section className="mb-16">
                    <h2 className="text-3xl font-bold mb-8">Featured Article</h2>
                    <FeaturedPost post={blogPosts[0]} />
                </section>

                <section>
                    <div className="flex flex-col items-start mb-8">
                        <h2 className="text-3xl font-bold">Latest Articles</h2>
                        <DynamicTabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
                            <TabsList className="flex flex-wrap bg-[#175379] text-white">
                                {categories.map((category) => (
                                    <TabsTrigger key={category} value={category} className="flex-1">
                                        {category}
                                    </TabsTrigger>
                                ))}
                            </TabsList>
                        </DynamicTabs>
                    </div>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {filteredPosts.slice(1).map((post, index) => (
                            <motion.div
                                key={post.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <BlogPost post={post} />
                            </motion.div>
                        ))}
                    </div>
                </section>

                <section className="mt-16 flex justify-center">
                    <Card className="bg-primary/45 justify-center text-primary-foreground w-full">
                        <CardHeader>
                            <CardTitle className="text-2xl">Stay Updated with Fundi wa Mtandao</CardTitle>
                            <CardDescription className="text-primary-foreground/80">
                                Subscribe to our newsletter for the latest insights and trends in web development and digital marketing.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit} className="space-y-2">
                                <Label htmlFor="email" className="sr-only">Email</Label>
                                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                                    <Input
                                        type="email"
                                        id="email"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        className="w-full sm:w-auto"
                                    />
                                    <Button type="submit" className="w-full sm:w-auto">
                                        Subscribe
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </section>
            </main>
        </div>
    )
}