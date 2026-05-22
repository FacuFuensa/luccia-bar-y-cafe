'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'

const cards = [
  {
    href: '/carta',
    title: 'Nuestra Carta',
    description: 'Cafetería, desayunos, sándwiches, pizzas y más. Todo lo que necesitás.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" />
        <path d="M6 1v3M10 1v3M14 1v3" />
      </svg>
    ),
  },
  {
    href: '/eventos',
    title: 'Eventos',
    description: 'Celebrá tus momentos especiales. Cumpleaños, reuniones y encuentros.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
  {
    href: '/ubicaciones',
    title: 'Ubicaciones',
    description: 'Dos sucursales en Yerba Buena. Encontranos cerca tuyo.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
]

export function FeaturedCards() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, i) => (
          <motion.div
            key={card.href}
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Link
              href={card.href}
              className="group block h-full p-8 bg-cream rounded-lg border border-sage hover:border-gold hover:shadow-lg transition-all duration-200"
            >
              <span className="text-forest group-hover:text-gold transition-colors mb-4 block">
                {card.icon}
              </span>
              <h3 className="font-cormorant text-xl font-semibold text-forest mb-2 group-hover:text-gold transition-colors">
                {card.title}
              </h3>
              <p className="font-inter text-sm text-charcoal/60 leading-relaxed mb-4">
                {card.description}
              </p>
              <span className="font-inter text-sm text-gold font-medium">
                Ver más →
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
