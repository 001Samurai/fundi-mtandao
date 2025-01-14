'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import type { Components } from 'react-markdown'

interface TableOfContentsItem {
  id: string
  title: string
  level: number
}

interface BlogContentProps {
  content: string
}

export function BlogContent({ content }: BlogContentProps) {
  const [toc, setToc] = useState<TableOfContentsItem[]>([]);

  // Extract headings and their IDs when content changes
  useEffect(() => {
    const extractHeadings = (markdown: string) => {
      const headingRegex = /^(#{1,3})\s+(.+)$/gm;
      const matches = Array.from(markdown.matchAll(headingRegex));

      return matches.map(match => ({
        id: match[2].toLowerCase().replace(/\s+/g, '-'),
        title: match[2],
        level: match[1].length
      }));
    };

    setToc(extractHeadings(content));
  }, [content]);

  const TableOfContents = () => (
    <nav className="toc mb-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
      <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Table of Contents</h2>
      <ul className="space-y-2">
        {toc.map((item, index) => (
          <li 
            key={index}
            style={{ paddingLeft: `${(item.level - 1) * 1}rem` }}
          >
            <a
              href={`#${item.id}`}
              className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 transition-colors"
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );

  const customRenderers: Components = {
    h1: ({ node, children }) => {
      const headingText = String(children)
      const id = headingText.toLowerCase().replace(/\s+/g, '-')
      return (
        <h1 
          id={id} 
          className="text-4xl font-serif font-bold mt-10 mb-6 tracking-tight text-gray-900 dark:text-gray-100 scroll-mt-20"
        >
          {children}
        </h1>
      )
    },
    h2: ({ node, children }) => {
      const headingText = String(children)
      const id = headingText.toLowerCase().replace(/\s+/g, '-')
      return (
        <h2 
          id={id} 
          className="text-3xl font-semibold mt-8 mb-4 tracking-tight text-gray-800 dark:text-gray-200 scroll-mt-20"
        >
          {children}
        </h2>
    )
    },
    h3: ({ node, children }) => {
      const headingText = String(children)
      const id = headingText.toLowerCase().replace(/\s+/g, '-')
      return (
        <h3 
          id={id} 
          className="text-2xl font-medium mt-6 mb-3 tracking-tight text-gray-800 dark:text-gray-200 scroll-mt-20"
        >
          {children}
        </h3>
      )
    },
    p: ({ children }) => (
      <p className="text-lg leading-relaxed my-6 text-gray-700 dark:text-gray-300">
        {children}
      </p>
    ),
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
    blockquote: ({ children }) => (
      <blockquote className="pl-6 italic border-l-4 border-blue-500 my-6 text-gray-700 dark:text-gray-300">
        {children}
      </blockquote>
    ),
    ul: ({ children }) => (
      <ul className="list-disc pl-6 my-6 text-gray-700 dark:text-gray-300">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal pl-6 my-6 text-gray-700 dark:text-gray-300">
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <li className="my-2">
        {children}
      </li>
    ),
  }

  return (
    <div className="blog-content">
      <TableOfContents />
      <div className="prose prose-lg dark:prose-invert max-w-none [&>p]:text-lg [&>p]:leading-relaxed custom-blog-typography">
        <ReactMarkdown components={customRenderers}>{content}</ReactMarkdown>
      </div>
    </div>
  )
}