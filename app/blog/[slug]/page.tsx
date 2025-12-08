import { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { BlogPost, blogPosts } from '@/data/blogPosts'
import { BlogHeader } from '../../../components/BlogHeader'
import { BlogContent } from '../../../components/BlogContent'
import { BlogAuthor } from '../../../components/BlogAuthor'
import { BlogTags } from '../../../components/BlogTags'
import { RelatedPosts } from '../../../components/RelatedPosts'
import { FloatingShareButton } from '../../../components/FloatingShareButton'
import { StructuredData } from '@/components/StructuredData'
import { generateArticleSchema, generateBreadcrumbSchema, siteConfig } from '@/lib/seo'

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

async function getPost(slug: string): Promise<BlogPost | undefined> {
  return blogPosts.find((post) => post.slug === slug)
}

interface BlogPostPageProps {
  params: { slug: string }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = await getPost(params.slug)

  if (!post) {
    return {}
  }

  const postUrl = `${siteConfig.url}/blog/${params.slug}`
  const imageUrl = post.image.startsWith('http') ? post.image : `${siteConfig.url}${post.image}`

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.tags,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      url: postUrl,
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [imageUrl],
    },
    alternates: {
      canonical: postUrl,
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getPost(params.slug)

  if (!post) {
    notFound()
  }

  const postUrl = `${siteConfig.url}/blog/${params.slug}`
  const imageUrl = post.image.startsWith('http') ? post.image : `${siteConfig.url}${post.image}`

  return (
    <>
      <StructuredData data={[
        generateArticleSchema({
          title: post.title,
          description: post.excerpt,
          image: imageUrl,
          datePublished: post.date,
          author: post.author,
          url: postUrl,
          tags: post.tags
        }),
        generateBreadcrumbSchema([
          { name: 'Home', url: siteConfig.url },
          { name: 'Blog', url: `${siteConfig.url}/blog` },
          { name: post.title, url: postUrl }
        ])
      ]} />
      <article className="max-w-4xl mx-auto px-4 py-12">
        <BlogHeader title={post.title} category={post.category} date={post.date} readTime={post.readTime} />
        <Image
          src={post.image}
          alt={post.title}
          width={1200}
          height={630}
          className="w-full h-auto rounded-lg shadow-lg my-8"
          priority
        />
        <BlogContent content={post.content} />
        <BlogAuthor author={post.author} />
        <BlogTags tags={post.tags} />
        <RelatedPosts currentPost={post} />
        <FloatingShareButton title={post.title} slug={post.slug} />
      </article>
    </>
  )
}

