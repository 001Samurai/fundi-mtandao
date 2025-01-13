import React from 'react'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import type { Components } from 'react-markdown'

interface BlogContentProps {
  content: string
}

export function BlogContent({ content }: BlogContentProps) {
  const customRenderers: Components = {
    h1: ({ node, children }) => {
      const headingText = String(children)
      const id = headingText.toLowerCase().replace(/\s+/g, '-')
      return <h1 id={id} className="text-3xl font-bold mt-8 mb-4">{children}</h1>
    },
    h2: ({ node, children }) => {
      const headingText = String(children)
      const id = headingText.toLowerCase().replace(/\s+/g, '-')
      return <h2 id={id} className="text-2xl font-semibold mt-6 mb-3">{children}</h2>
    },
    h3: ({ node, children }) => {
      const headingText = String(children)
      const id = headingText.toLowerCase().replace(/\s+/g, '-')
      return <h3 id={id} className="text-xl font-medium mt-4 mb-2">{children}</h3>
    },
    img: ({ src, alt }) => {
      if (!src) return null;
      return (
        <Image
          src={src}
          alt={alt || ''}
          width={800}
          height={400}
          className="rounded-lg shadow-md my-8"
        />
      );
    },
  }

  return (
    <div className="blog-content">
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <ReactMarkdown components={customRenderers}>{content}</ReactMarkdown>
      </div>
    </div>
  )
}