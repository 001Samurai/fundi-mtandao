'use client'

import { Twitter, Facebook, Linkedin } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface SocialShareProps {
  title: string
  slug: string
}

export function SocialShare({ title, slug }: SocialShareProps) {
  const url = `https://fundi-wa-mtandao.co.ke/blog/${slug}`
  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)

  return (
    <div className="flex space-x-4 my-8">
      <Button
        variant="outline"
        size="icon"
        onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`, '_blank')}
      >
        <Twitter className="h-4 w-4" />
        <span className="sr-only">Share on Twitter</span>
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`, '_blank')}
      >
        <Facebook className="h-4 w-4" />
        <span className="sr-only">Share on Facebook</span>
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={() => window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`, '_blank')}
      >
        <Linkedin className="h-4 w-4" />
        <span className="sr-only">Share on LinkedIn</span>
      </Button>
    </div>
  )
}

