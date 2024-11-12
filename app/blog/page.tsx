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
        category: "Web Development",
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
        category: "Digital Marketing",
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
        category: "Web Development",
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
        category: "UX Design",
        tags: ["Motion Design", "UX", "Interaction"]
    }
]

const categories = ["All", "Web Development", "Digital Marketing", "SEO", "UX Design"]

const FeaturedPost = ({ post }: { post: { id: number; title: string; excerpt: string; author: string; date: string; readTime: string; image: string; category: string; tags: string[] } }) => (
    <Card className="overflow-hidden">
        <div className="relative h-64 md:h-80">
            <Image
                src={post.image}
                alt={post.title}
                layout="fill"
                objectFit="cover"
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
        <div className="relative h-48">
            <Image
                src={post.image}
                alt={post.title}
                layout="fill"
                objectFit="cover"
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
    const headerRef = useRef(null)
    const headerInView = useInView(headerRef, { once: true })

    const filteredPosts = blogPosts.filter(post =>
        (activeCategory === 'All' || post.category === activeCategory) &&
        (post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()))
    )

    return (
        <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
            <header ref={headerRef} className="py-20 text-center relative overflow-hidden" style={{ backgroundImage: 'url(/images/social.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <motion.div
                    className="absolute inset-0 z-0"
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.1 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="absolute inset-0 bg-grid-white/10 bg-grid-16 [mask-image:radial-gradient(ellipse_at_center,white,transparent_75%)]" />
                </motion.div>
                <div className="container mx-auto px-4 relative z-10">
                    <motion.h1
                        className="text-4xl md:text-6xl font-bold mb-4"
                        initial={{ y: -50, opacity: 0 }}
                        animate={headerInView ? { y: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.5 }}
                    >
                        DigitalCraft Insights
                    </motion.h1>
                    <motion.p
                        className="text-xl text-gray-800 font-semibold max-w-2xl mx-auto mb-8"
                        initial={{ y: 50, opacity: 0 }}
                        animate={headerInView ? { y: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Explore the latest trends, insights, and strategies in web development, digital marketing, and UX design.
                    </motion.p>
                    <motion.div
                        className="max-w-md mx-auto"
                        initial={{ opacity: 0 }}
                        animate={headerInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <div className="relative w-full">
                            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-800" />
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
                        <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
                            <TabsList className="flex flex-wrap">
                                {categories.map((category) => (
                                    <TabsTrigger key={category} value={category} className="flex-1">
                                        {category}
                                    </TabsTrigger>
                                ))}
                            </TabsList>
                        </Tabs>
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

                <section className="mt-16">
                    <Card className="bg-primary text-primary-foreground">
                        <CardHeader>
                            <CardTitle className="text-2xl">Stay Updated with DigitalCraft</CardTitle>
                            <CardDescription className="text-primary-foreground/80">
                                Subscribe to our newsletter for the latest insights and trends in web development and digital marketing.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form className="flex space-x-2">
                                <Input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="bg-primary-foreground text-primary"
                                />
                                <Button type="submit" variant="secondary">
                                    Subscribe
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </section>
            </main>
        </div>
    )
}