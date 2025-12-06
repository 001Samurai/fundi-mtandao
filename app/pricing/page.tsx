'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import PricingCards from '@/components/pricing'
import { Button } from '@/components/ui/button'

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-background to-secondary/10">
      {/* Pricing Hero */}
      <header className="py-20 md:py-24 text-center relative overflow-hidden bg-gradient-to-br from-[#15158c] via-[#175379] to-[#e47a33] text-white">
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.25 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#ffffff55,_transparent_55%),radial-gradient(circle_at_bottom,_#00000066,_transparent_55%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff22_1px,transparent_1px),linear-gradient(to_bottom,#ffffff22_1px,transparent_1px)] bg-[size:24px_24px]" />
        </motion.div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.p
            className="text-xs md:text-sm uppercase tracking-[0.25em] text-white/70 mb-3"
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            Pricing
          </motion.p>
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4"
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Transparent pricing for every stage of growth.
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            From starter sites to full digital ecosystems, choose a plan that matches your ambition and budget.
          </motion.p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16 space-y-16">
        {/* Reuse homepage pricing cards to keep packages consistent */}
        <section aria-label="Pricing plans">
          <PricingCards />
        </section>

        {/* Simple custom-solution CTA */}
        <section className="mt-10 text-center bg-slate-900/80 text-slate-50 rounded-lg p-8 backdrop-blur-xl border border-slate-800/60">
          <h2 className="text-3xl font-bold mb-4">Need a custom solution?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            If your project doesn&apos;t quite fit into a package, we&apos;re happy to scope a tailored engagement for your brand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild variant="secondary">
              <Link href="/get-started">
                Talk about a custom quote
              </Link>
            </Button>
            <Button size="lg" asChild variant="outline">
              <Link href="/contact">
                Contact us
              </Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}