module.exports = {
    siteUrl: 'https://fundi-wa-mtandao.co.ke', // Updated to match actual domain
    generateRobotsTxt: true,
    generateIndexSitemap: false,
    sitemapSize: 7000,
    exclude: [
        '/admin/*',
        '/private/*',
        '/api/*',
        '/_next/*',
        '/404',
        '/500'
    ],
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/admin', '/private', '/api']
            },
            {
                userAgent: 'Googlebot',
                allow: '/',
                disallow: ['/admin', '/private', '/api']
            },
            {
                userAgent: 'Bingbot',
                allow: '/',
                disallow: ['/admin', '/private', '/api']
            }
        ],
        additionalSitemaps: []
    },
    // Page-specific configurations
    changefreq: 'weekly',
    priority: 0.7,
    // Custom transform function for better URLs
    transform: async (config, path) => {
        // Set different priorities for different pages
        let priority = 0.7;
        let changefreq = 'weekly';

        if (path === '/') {
            priority = 1.0;
            changefreq = 'daily';
        } else if (path.startsWith('/blog')) {
            priority = 0.8;
            changefreq = 'weekly';
        } else if (path.startsWith('/services')) {
            priority = 0.9;
            changefreq = 'weekly';
        } else if (path.startsWith('/portfolio')) {
            priority = 0.8;
            changefreq = 'monthly';
        } else if (['/about', '/contact', '/pricing'].includes(path)) {
            priority = 0.8;
            changefreq = 'monthly';
        }

        return {
            loc: path,
            changefreq,
            priority,
            lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
        };
    },
} 