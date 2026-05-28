'use client'

import { useState } from 'react'

export function WifiSection() {
  const [copied, setCopied] = useState(false)

  function copyPassword() {
    navigator.clipboard.writeText('luccia2022').then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <div className="max-w-4xl mx-auto px-4 pb-16">
      <div className="bg-cream border border-sage rounded-lg p-6">
        <div className="flex items-center gap-3 mb-5">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-forest shrink-0">
            <path d="M5 12.55a11 11 0 0114.08 0" />
            <path d="M1.42 9a16 16 0 0121.16 0" />
            <path d="M8.53 16.11a6 6 0 016.95 0" />
            <circle cx="12" cy="20" r="1" fill="currentColor" stroke="none" />
          </svg>
          <h2 className="font-cormorant text-2xl font-semibold text-forest">WiFi</h2>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 bg-white/60 rounded-md px-4 py-3">
            <p className="font-inter text-xs text-charcoal/50 uppercase tracking-wider mb-1">Red</p>
            <p className="font-inter text-base text-charcoal font-medium">LUCCIA</p>
          </div>

          <div className="flex-1 bg-white/60 rounded-md px-4 py-3 flex items-center justify-between gap-3">
            <div>
              <p className="font-inter text-xs text-charcoal/50 uppercase tracking-wider mb-1">Contraseña</p>
              <p className="font-inter text-base text-charcoal font-medium">luccia2022</p>
            </div>
            <button
              onClick={copyPassword}
              className="shrink-0 inline-flex items-center gap-2 border border-forest text-forest px-3 py-1.5 rounded-md font-inter text-sm font-medium hover:bg-forest hover:text-white transition-colors"
            >
              {copied ? (
                <>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Copiado
                </>
              ) : (
                <>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                    <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                  </svg>
                  Copiar
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
