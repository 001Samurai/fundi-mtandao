'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Share2, Facebook, Linkedin, Instagram } from 'lucide-react'
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
      name: 'X',
      icon: () => (
        <svg 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
          <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
        </svg>
      ),
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
    {
      name: 'WhatsApp',
      icon: () => (
        <svg 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
          <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
        </svg>
      ),
      url: `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`,
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: `instagram://share?url=${encodedUrl}`,
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
                {typeof button.icon === 'function' ? 
                  <button.icon /> : 
                  <button.icon className="h-5 w-5" />
                }
              </Button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}