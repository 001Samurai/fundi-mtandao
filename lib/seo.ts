/**
 * SEO Utilities and Structured Data Helpers
 * Comprehensive SEO implementation for Fundi wa Mtandao
 */

export const siteConfig = {
  name: "Fundi wa Mtandao",
  description: "Professional web development and digital marketing services in Kenya. Custom websites, e-commerce solutions, SEO, and digital strategies.",
  url: "https://fundi-wa-mtandao.co.ke",
  ogImage: "/images/og-image.jpg",
  twitterHandle: "@fundi-wa-mtandao",
  creator: "David Machua",
  locale: "en_KE",
  keywords: [
    "web development Kenya",
    "web design Mombasa",
    "digital marketing Kenya",
    "M-pesa integration",
    "SEO services Kenya",
    "e-commerce development",
    "website management",
    "social media marketing",
    "web developer Mombasa",
    "digital agency Kenya"
  ],
  contact: {
    email: "dmachua.freelance@gmail.com",
    phone: "+254707211023",
    address: {
      streetAddress: "Mombasa",
      addressLocality: "Mombasa",
      addressRegion: "Mombasa County",
      addressCountry: "KE"
    }
  },
  social: {
    twitter: "https://x.com/machua_001",
    linkedin: "https://linkedin.com/in/davidmachua",
    github: "https://github.com/001Samurai"
  }
}

/**
 * Generate Organization Schema (JSON-LD)
 */
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": siteConfig.name,
    "url": siteConfig.url,
    "logo": `${siteConfig.url}/fwm-logo.png`,
    "description": siteConfig.description,
    "foundingDate": "2023",
    "founder": {
      "@type": "Person",
      "name": siteConfig.creator,
      "jobTitle": "Founder & Web Developer",
      "url": siteConfig.social.linkedin
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": siteConfig.contact.phone,
      "contactType": "Customer Service",
      "email": siteConfig.contact.email,
      "areaServed": "KE",
      "availableLanguage": ["en", "sw"]
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": siteConfig.contact.address.addressLocality,
      "addressRegion": siteConfig.contact.address.addressRegion,
      "addressCountry": siteConfig.contact.address.addressCountry
    },
    "sameAs": [
      siteConfig.social.twitter,
      siteConfig.social.linkedin,
      siteConfig.social.github
    ],
    "areaServed": {
      "@type": "Country",
      "name": "Kenya"
    }
  }
}

/**
 * Generate WebSite Schema with SearchAction
 */
export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": siteConfig.name,
    "url": siteConfig.url,
    "description": siteConfig.description,
    "publisher": {
      "@type": "Organization",
      "name": siteConfig.name
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${siteConfig.url}/blog?search={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  }
}

/**
 * Generate BreadcrumbList Schema
 */
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  }
}

/**
 * Generate Service Schema
 */
export function generateServiceSchema(service: {
  name: string
  description: string
  provider: string
  areaServed?: string
  serviceType?: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.name,
    "description": service.description,
    "provider": {
      "@type": "Organization",
      "name": service.provider,
      "url": siteConfig.url
    },
    "areaServed": service.areaServed || "KE",
    "serviceType": service.serviceType || "Web Development"
  }
}

/**
 * Generate Article Schema for Blog Posts
 */
export function generateArticleSchema(article: {
  title: string
  description: string
  image: string
  datePublished: string
  dateModified?: string
  author: string
  url: string
  tags?: string[]
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.description,
    "image": article.image.startsWith("http") ? article.image : `${siteConfig.url}${article.image}`,
    "datePublished": article.datePublished,
    "dateModified": article.dateModified || article.datePublished,
    "author": {
      "@type": "Person",
      "name": article.author,
      "url": siteConfig.social.linkedin
    },
    "publisher": {
      "@type": "Organization",
      "name": siteConfig.name,
      "logo": {
        "@type": "ImageObject",
        "url": `${siteConfig.url}/fwm-logo.png`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": article.url
    },
    "keywords": article.tags?.join(", ") || "",
    "articleSection": "Digital Marketing"
  }
}

/**
 * Generate FAQPage Schema
 */
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }
}

/**
 * Generate LocalBusiness Schema
 */
export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}#business`,
    "name": siteConfig.name,
    "image": `${siteConfig.url}/fwm-logo.png`,
    "description": siteConfig.description,
    "url": siteConfig.url,
    "telephone": siteConfig.contact.phone,
    "email": siteConfig.contact.email,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": siteConfig.contact.address.addressLocality,
      "addressRegion": siteConfig.contact.address.addressRegion,
      "addressCountry": siteConfig.contact.address.addressCountry
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-4.0435",
      "longitude": "39.6682"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "priceRange": "$$",
    "areaServed": {
      "@type": "Country",
      "name": "Kenya"
    }
  }
}

/**
 * Generate Person Schema for Founder
 */
export function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": siteConfig.creator,
    "jobTitle": "Founder, Web Developer & Digital Strategist",
    "worksFor": {
      "@type": "Organization",
      "name": siteConfig.name
    },
    "url": siteConfig.social.linkedin,
    "sameAs": [
      siteConfig.social.twitter,
      siteConfig.social.linkedin,
      siteConfig.social.github
    ],
    "knowsAbout": [
      "Web Development",
      "Digital Marketing",
      "SEO",
      "E-commerce",
      "Project Management"
    ]
  }
}

/**
 * Generate SoftwareApplication Schema (for web development services)
 */
export function generateSoftwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Custom Web Development Services",
    "applicationCategory": "WebApplication",
    "offers": {
      "@type": "Offer",
      "priceCurrency": "KES",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "ratingCount": "12"
    }
  }
}

/**
 * Helper to generate full page metadata
 */
export function generateMetadata({
  title,
  description,
  keywords,
  image,
  url,
  type = "website",
  publishedTime,
  modifiedTime,
  authors,
  tags
}: {
  title: string
  description: string
  keywords?: string[]
  image?: string
  url?: string
  type?: "website" | "article"
  publishedTime?: string
  modifiedTime?: string
  authors?: string[]
  tags?: string[]
}) {
  const fullUrl = url ? `${siteConfig.url}${url}` : siteConfig.url
  const ogImage = image ? (image.startsWith("http") ? image : `${siteConfig.url}${image}`) : `${siteConfig.url}${siteConfig.ogImage}`

  return {
    title,
    description,
    keywords: keywords || siteConfig.keywords,
    authors: authors ? authors.map(name => ({ name })) : [{ name: siteConfig.creator }],
    creator: siteConfig.creator,
    publisher: siteConfig.name,
    openGraph: {
      type,
      locale: siteConfig.locale,
      url: fullUrl,
      siteName: siteConfig.name,
      title,
      description,
      images: [{
        url: ogImage,
        width: 1200,
        height: 630,
        alt: title
      }],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(authors && { authors }),
      ...(tags && { tags })
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: siteConfig.twitterHandle,
      images: [ogImage]
    },
    alternates: {
      canonical: fullUrl
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1
      }
    },
    verification: {
      // Add your verification codes here when available
      // google: "your-google-verification-code",
      // yandex: "your-yandex-verification-code",
      // yahoo: "your-yahoo-verification-code",
    }
  }
}


