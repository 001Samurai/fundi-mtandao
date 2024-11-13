module.exports = {
    siteUrl: 'https://fundi-mtandao.vercel.app',
    generateRobotsTxt: true,
    sitemapSize: 7000,
    exclude: ['/admin/*', '/private/*'],
    robotsTxtOptions: {
        additionalSitemaps: [
            'https://fundi-mtandao.vercel.app/server-sitemap.xml',
        ],
        policies: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/admin', '/private']
            }
        ]
    },
    changefreq: 'weekly',
    priority: 0.7
} 