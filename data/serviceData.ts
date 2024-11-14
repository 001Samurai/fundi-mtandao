import { Code, Megaphone, BarChart, Zap, Layers, Search, ShoppingCart, PenTool, Users, Smartphone } from 'lucide-react'

export interface Service {
    icon: React.ElementType;
    title: string;
    description: string;
    details: string[];
    category: string;
    slug: string;
}

export const services: Service[] = [
    {
        icon: Code,
        title: 'Web Development',
        description: 'Custom websites and web applications tailored to your unique business needs.',
        details: [
            'Responsive design for all devices',
            'Performance optimization',
            'Custom functionality and integrations',
            'Content Management Systems (CMS)',
        ],
        category: 'web',
        slug: 'web-development'
    },
    {
        icon: Megaphone,
        title: 'Digital Marketing',
        description: 'Comprehensive strategies to boost your online presence and reach your target audience.',
        details: [
            'Search Engine Optimization (SEO)',
            'Pay-Per-Click (PPC) advertising',
            'Social Media Marketing',
            'Content Marketing',
        ],
        category: 'marketing',
        slug: 'digital-marketing'
    },
    {
        icon: BarChart,
        title: 'Analytics & Reporting',
        description: 'Data-driven insights to measure and improve your digital performance.',
        details: [
            'Website analytics setup and tracking',
            'Custom dashboard creation',
            'Conversion rate optimization',
            'Regular performance reports',
        ],
        category: 'analytics',
        slug: 'analytics-and-reporting'
    },
    {
        icon: Zap,
        title: 'Performance Optimization',
        description: 'Enhance your website\'s speed and efficiency for better user experience and SEO.',
        details: [
            'Page speed optimization',
            'Server-side rendering',
            'Caching strategies',
            'Image and asset optimization',
        ],
        category: 'web',
        slug: 'performance-optimization'
    },
    {
        icon: Layers,
        title: 'UI/UX Design',
        description: 'Create intuitive and visually appealing interfaces that delight your users.',
        details: [
            'User research and persona development',
            'Wireframing and prototyping',
            'Visual design and branding',
            'Usability testing',
        ],
        category: 'design',
        slug: 'ui-ux-design'
    },
    {
        icon: Search,
        title: 'SEO Services',
        description: 'Improve your search engine rankings and drive organic traffic to your website.',
        details: [
            'Keyword research and strategy',
            'On-page and technical SEO',
            'Link building and outreach',
            'Local SEO optimization',
        ],
        category: 'marketing',
        slug: 'seo-services'
    },
    {
        icon: ShoppingCart,
        title: 'E-commerce Solutions',
        description: 'Build and optimize online stores that drive sales and customer satisfaction.',
        details: [
            'Custom e-commerce website development',
            'Shopping cart and checkout optimization',
            'Payment gateway integration',
            'Inventory management systems',
        ],
        category: 'web',
        slug: 'e-commerce-solutions'
    },
    {
        icon: PenTool,
        title: 'Content Creation',
        description: 'Develop engaging and SEO-friendly content that resonates with your audience.',
        details: [
            'Blog post and article writing',
            'Copywriting for websites and ads',
            'Infographic and visual content design',
            'Video script writing',
        ],
        category: 'marketing',
        slug: 'content-creation'
    },
    {
        icon: Users,
        title: 'Social Media Management',
        description: 'Build and engage your community across various social media platforms.',
        details: [
            'Social media strategy development',
            'Content calendar creation and management',
            'Community engagement and moderation',
            'Social media advertising campaigns',
        ],
        category: 'marketing',
        slug: 'social-media-management'
    },
    {
        icon: Smartphone,
        title: 'Mobile App Design',
        description: 'Create stunning and user-friendly mobile app interfaces for iOS and Android.',
        details: [
            'User-centered design approach',
            'Cross-platform UI/UX design',
            'Prototyping and user testing',
            'App icon and branding design',
        ],
        category: 'mobile',
        slug: 'mobile-app-design'
    },
    {
        icon: Smartphone,
        title: 'Mobile App Development',
        description: 'Build powerful and scalable mobile applications for various platforms.',
        details: [
            'Native iOS and Android development',
            'Cross-platform development (React Native, Flutter)',
            'App performance optimization',
            'Integration with backend services and APIs',
        ],
        category: 'mobile',
        slug: 'mobile-app-development'
    },
    {
        icon: Code,
        title: 'Web Management',
        description: 'Comprehensive web management services to keep your site running smoothly.',
        details: [
            'Regular updates and maintenance',
            'Security monitoring and patches',
            'Backup and recovery solutions',
            'Performance monitoring and optimization',
        ],
        category: 'web',
        slug: 'web-management'
    },
]