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

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
      images: [
        {
          url: post.image,
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
      images: [post.image],
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getPost(params.slug)

  if (!post) {
    notFound()
  }

  return (
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
  )
}

