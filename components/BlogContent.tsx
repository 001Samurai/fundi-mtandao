import React from 'react'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import { Heading } from 'react-markdown/lib/ast-to-react'


interface BlogContentProps {
  content: string
}

export function BlogContent({ content }: BlogContentProps) {
  const customRenderers = {
    h1: (props: Heading) => {
      const id = props.children[0].toString().toLowerCase().replace(/\s+/g, '-')
      return <h1 id={id} className="text-3xl font-bold mt-8 mb-4">{props.children}</h1>
    },
    h2: (props: Heading) => {
      const id = props.children[0].toString().toLowerCase().replace(/\s+/g, '-')
      return <h2 id={id} className="text-2xl font-semibold mt-6 mb-3">{props.children}</h2>
    },
    h3: (props: Heading) => {
      const id = props.children[0].toString().toLowerCase().replace(/\s+/g, '-')
      return <h3 id={id} className="text-xl font-medium mt-4 mb-2">{props.children}</h3>
    },
    img: (props: { src?: string; alt?: string }) => (
      <Image
        src={props.src || ''}
        alt={props.alt || ''}
        width={800}
        height={400}
        className="rounded-lg shadow-md my-8"
      />
    ),
  }

  return (
    <div className="blog-content">
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <ReactMarkdown components={customRenderers}>{content}</ReactMarkdown>
      </div>
    </div>
  )
}

