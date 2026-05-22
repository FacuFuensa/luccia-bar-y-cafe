'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export function AboutSnippet() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="bg-cream py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center"
      >
        <div className="flex items-center justify-center gap-4 mb-8">
          <span className="h-px w-16 bg-gold" />
          <span className="font-inter text-xs text-gold tracking-widest uppercase">Nuestra filosofía</span>
          <span className="h-px w-16 bg-gold" />
        </div>
        <p className="font-cormorant text-3xl md:text-4xl font-medium text-charcoal leading-relaxed">
          No solo servimos café,
          <br />
          <em>creamos momentos inolvidables</em>
        </p>
      </motion.div>
    </section>
  )
}
