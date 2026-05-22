'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const options = [
  {
    title: 'Menú Cerrado',
    description:
      'Elegís un menú fijo pensado especialmente para tu grupo. Ideal para cumpleaños, reuniones corporativas y celebraciones donde querés que todo fluya sin complicaciones. Nosotros nos encargamos de todo.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Libre con carta reducida',
    description:
      'Cada invitado elige lo que quiere de nuestra carta reducida. La libertad de elegir tu favorito, con la comodidad de tenerlo todo organizado de antemano. Perfecto para grupos que quieren variedad.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M4 6h16M4 10h16M4 14h8" />
        <circle cx="17" cy="17" r="3" />
        <path d="M19.5 19.5L22 22" />
      </svg>
    ),
  },
]

export function EventOptions() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} className="py-20 px-4 bg-cream">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="font-dancing text-4xl text-forest mb-2">¿Cómo funciona?</p>
          <p className="font-inter text-sm text-charcoal/60">Dos opciones para que elijas la que mejor se adapta a tu evento</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {options.map((option, i) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-white border border-sage rounded-lg p-8 hover:border-gold hover:shadow-md transition-all"
            >
              <span className="text-forest mb-4 block">{option.icon}</span>
              <h3 className="font-cormorant text-2xl font-semibold text-forest mb-3">{option.title}</h3>
              <p className="font-inter text-sm text-charcoal/65 leading-relaxed">{option.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
