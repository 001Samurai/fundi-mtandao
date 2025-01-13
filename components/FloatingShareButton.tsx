'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Share2, Twitter, Facebook, Linkedin } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface FloatingShareButtonProps {
  title: string
  slug: string
}

export function FloatingShareButton({ title, slug }: FloatingShareButtonProps) {
  const [isOpen, setIsOpen] = useState(false)
  const url = `https://fundi-wa-mtandao.co.ke/blog/${slug}`
  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)

  const shareButtons = [
    {
      name: 'Twitter',
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`,
    },
  ]

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <Button
        variant="default"
        size="icon"
        className="rounded-full shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Share2 className="h-5 w-5" />
      </Button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-16 right-0 space-y-2"
          >
            {shareButtons.map((button) => (
              <Button
                key={button.name}
                variant="outline"
                size="icon"
                className="rounded-full shadow-md"
                onClick={() => window.open(button.url, '_blank')}
              >
                <button.icon className="h-5 w-5" />
              </Button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

