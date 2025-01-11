export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
  tags: string[];
  slug: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "10 Web Development Trends to Watch in 2024",
    excerpt: "Stay ahead of the curve with these emerging web development trends that are shaping the digital landscape.",
    author: "David Machua",
    date: "2023-11-15",
    readTime: "8 min read",
    image: "/images/branding.jpg",
    category: "Web",
    tags: ["Trends", "Technology", "Innovation"],
    slug: "web-development-trends-2024"
  },
  {
    id: 2,
    title: "The Impact of AI on Digital Marketing Strategies",
    excerpt: "Explore how artificial intelligence is revolutionizing digital marketing and how businesses can leverage it for success.",
    author: "Sarah Johnson",
    date: "2023-11-10",
    readTime: "6 min read",
    image: "/images/branding.jpg",
    category: "Marketing",
    tags: ["AI", "Marketing", "Technology"],
    slug: "ai-impact-digital-marketing"
  },
  {
    id: 3,
    title: "Optimizing Website Performance: A Comprehensive Guide",
    excerpt: "Learn essential techniques to boost your website's speed and performance, improving user experience and SEO.",
    author: "David Machua",
    date: "2023-11-05",
    readTime: "10 min read",
    image: "/images/branding.jpg",
    category: "Web",
    tags: ["Performance", "Optimization", "SEO"],
    slug: "optimizing-website-performance"
  },
  {
    id: 4,
    title: "The Rise of Voice Search: Implications for SEO",
    excerpt: "Discover how voice search is changing the SEO landscape and strategies to optimize your content for voice queries.",
    author: "Emily Chen",
    date: "2023-10-30",
    readTime: "7 min read",
    image: "/images/branding.jpg",
    category: "SEO",
    tags: ["Voice Search", "SEO", "Content Strategy"],
    slug: "rise-of-voice-search-seo"
  },
  {
    id: 5,
    title: "Creating Engaging User Experiences with Motion Design",
    excerpt: "Explore the power of motion design in creating captivating and intuitive user interfaces for web and mobile applications.",
    author: "David Machua",
    date: "2023-10-25",
    readTime: "9 min read",
    image: "/images/branding.jpg",
    category: "Design",
    tags: ["Motion Design", "UX", "Interaction"],
    slug: "engaging-ux-motion-design"
  }
];

