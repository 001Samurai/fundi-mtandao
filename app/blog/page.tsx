'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Tag, Calendar, User, Clock, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Label } from '@/components/ui/label'
import dynamic from 'next/dynamic'
import { Search } from './Search'
import type { BlogPost } from './blogPosts'
import { blogPosts } from './blogPosts'
import { Input } from "@/components/ui/input"
import { SearchIcon } from 'lucide-react'


// Lazy load non-critical components
const DynamicTabs = dynamic(() => import('@/components/ui/tabs').then(mod => mod.Tabs), {
    loading: () => <p>Loading...</p>
})

const categories = ["All", "Web", "Marketing", "SEO", "Design"]

const FeaturedPost = ({ post }: { post: BlogPost }) => (
    <Card className="overflow-hidden">
        <div className="relative">
            <Image
                src={post.image}
                alt={post.title}
                width={600}
                height={300}
                className="object-cover w-full h-[300px]"
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

const BlogPost = ({ post }: { post: BlogPost }) => (
    <Card>
        <div className="relative">
            <Image
                src={post.image}
                alt={post.title}
                width={600}
                height={300}
                className="object-cover w-full h-[200px]"
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
    const [searchResults, setSearchResults] = useState<BlogPost[]>([])
    const [activeCategory, setActiveCategory] = useState('All')
    const [email, setEmail] = useState('')
    const headerRef = useRef(null)
    const headerInView = useInView(headerRef, { once: true })

    const handleSearch = (term: string) => {
        setSearchTerm(term);
        if (term.trim() === '') {
            setSearchResults([]);
        } else {
            const results = blogPosts.filter((post) =>
                post.title.toLowerCase().includes(term.toLowerCase()) ||
                post.excerpt.toLowerCase().includes(term.toLowerCase()) ||
                post.tags.some((tag) => tag.toLowerCase().includes(term.toLowerCase()))
            );
            setSearchResults(results);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/new-sub', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            if (!response.ok) {
                throw new Error('Failed to send subscription data');
            }

            alert('Subscription Successful');
            setEmail('');
        } catch (error) {
            const errorMessage = (error as Error).message || 'An unknown error occurred';
            console.error('Error:', error);
            alert('Subscription Failed: ' + errorMessage);
        }
    };

    const filteredPosts = activeCategory === 'All'
        ? blogPosts
        : blogPosts.filter(post => post.category === activeCategory);

    return (
        <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
            <header ref={headerRef} className="py-20 text-center overflow-hidden relative">
                <div
                    className="absolute inset-0 bg-cover bg-center z-0"
                    style={{ backgroundImage: "url('/images/branding.jpg')" }}
                />
                <div className="absolute inset-0 bg-black opacity-50 z-10" />
                <div className="container mx-auto px-4 relative z-20">
                    <motion.h1
                        className="text-4xl md:text-6xl text-white font-bold mb-4"
                        initial={{ y: -50, opacity: 0 }}
                        animate={headerInView ? { y: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.5 }}
                    >
                        Discover the Digital Frontier
                    </motion.h1>
                    <motion.p
                        className="text-xl text-white font-semibold max-w-2xl mx-auto mb-8"
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
                        <Search onSearch={handleSearch} blogPosts={blogPosts} />
                    </motion.div>
                </div>
            </header>

            <main className="container mx-auto px-4 py-16">
                {searchTerm && (
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold mb-8">Search Results</h2>
                        {searchResults.length === 0 ? (
                            <p className="text-center text-gray-500 my-8">No results found for "{searchTerm}"</p>
                        ) : (
                            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                                {searchResults.map((post, index) => (
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
                        )}
                    </section>
                )}

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
                    {searchTerm && searchResults.length === 0 && (
                        <p className="text-center text-gray-500 my-8">No results found for "{searchTerm}"</p>
                    )}
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {(searchTerm ? searchResults : filteredPosts).map((post, index) => (
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
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        className="w-full sm:w-auto px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-white/50"
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

