'use client'

import { useState } from 'react'
import { menuSections } from '@/data/menu'
import { MenuEjecutivoBanner } from '@/components/carta/MenuEjecutivoBanner'
import { MenuTabs } from '@/components/carta/MenuTabs'
import { MenuSection } from '@/components/carta/MenuSection'

export default function CartaPage() {
  const [sinTaccActive, setSinTaccActive] = useState(false)

  return (
    <div className="min-h-screen">
      <MenuEjecutivoBanner />

      {/* Sin TACC toggle */}
      <div className="bg-white px-4 py-2.5 flex items-center justify-end border-b border-sage/50 gap-3">
        <span className="font-inter text-xs text-charcoal/60">Solo Sin TACC</span>
        <button
          role="switch"
          aria-checked={sinTaccActive}
          onClick={() => setSinTaccActive(!sinTaccActive)}
          className={`relative w-10 h-5 rounded-full transition-colors duration-200 focus:outline-none ${
            sinTaccActive ? 'bg-forest' : 'bg-sage'
          }`}
        >
          <span
            className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform duration-200 ${
              sinTaccActive ? 'translate-x-5' : ''
            }`}
          />
        </button>
      </div>

      <MenuTabs sections={menuSections} />

      <div className="max-w-2xl mx-auto px-4 py-8 space-y-6">
        {menuSections.map((section) => (
          <MenuSection key={section.id} section={section} sinTaccActive={sinTaccActive} />
        ))}
        <p className="font-inter text-xs text-gold/70 italic text-center pb-6">
          Nuestras opciones Sin TACC son en pan de lino o arroz.
        </p>
      </div>
    </div>
  )
}
