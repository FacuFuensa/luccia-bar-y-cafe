'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import type { MenuSection } from '@/data/menu'

export function MenuTabs({ sections }: { sections: MenuSection[] }) {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? '')
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({})

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      setActiveId(id)
    }
  }

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    sections.forEach((section) => {
      const el = document.getElementById(section.id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveId(section.id) },
        { rootMargin: '-25% 0px -65% 0px' }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [sections])

  useEffect(() => {
    const tab = tabRefs.current[activeId]
    if (tab) {
      tab.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
    }
  }, [activeId])

  return (
    <div className="sticky top-16 z-30 bg-white border-b border-sage shadow-sm">
      <div className="overflow-x-auto scrollbar-none">
        <div className="flex min-w-max px-2">
          {sections.map((section) => {
            const active = activeId === section.id
            return (
              <button
                key={section.id}
                ref={(el) => { tabRefs.current[section.id] = el }}
                onClick={() => scrollTo(section.id)}
                className={`relative px-3 py-3 font-inter text-xs whitespace-nowrap transition-colors ${
                  active ? 'text-forest font-semibold' : 'text-charcoal/50 hover:text-forest'
                }`}
              >
                {section.title}
                {active && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-forest"
                  />
                )}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
