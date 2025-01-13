import Link from 'next/link'
import Image from 'next/image'
import { BlogPost, blogPosts } from '@/data/blogPosts'

interface RelatedPostsProps {
  currentPost: BlogPost
}

export function RelatedPosts({ currentPost }: RelatedPostsProps) {
  const relatedPosts = blogPosts
    .filter((post) => post.id !== currentPost.id && post.category === currentPost.category)
    .slice(0, 3)

  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold mb-4">Related Posts</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {relatedPosts.map((post) => (
          <Link key={post.id} href={`/blog/${post.slug}`} className="group">
            <div className="relative aspect-video mb-2 overflow-hidden rounded-lg">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <h3 className="font-semibold group-hover:underline">{post.title}</h3>
          </Link>
        ))}
      </div>
    </section>
  )
}

