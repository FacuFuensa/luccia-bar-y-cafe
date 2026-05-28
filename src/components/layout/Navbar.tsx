'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { href: '/carta', label: 'Carta' },
  { href: '/eventos', label: 'Eventos' },
  { href: '/ubicaciones', label: 'Ubicaciones' },
]

function WifiIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12.55a11 11 0 0114.08 0" />
      <path d="M1.42 9a16 16 0 0121.16 0" />
      <path d="M8.53 16.11a6 6 0 016.95 0" />
      <circle cx="12" cy="20" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function WifiButton() {
  const [open, setOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    function handle(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handle)
    return () => document.removeEventListener('mousedown', handle)
  }, [open])

  function copyPassword() {
    navigator.clipboard.writeText('luccia2022').then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        aria-label="Ver WiFi"
        title="WiFi"
        className={`p-1.5 rounded-md transition-colors ${open ? 'text-forest bg-forest/10' : 'text-charcoal/60 hover:text-forest hover:bg-forest/5'}`}
      >
        <WifiIcon />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full right-0 mt-2 w-60 bg-cream border border-sage rounded-lg shadow-lg p-4 z-50"
          >
            <div className="flex items-center gap-2 mb-3">
              <WifiIcon size={16} />
              <span className="font-cormorant text-lg font-semibold text-forest">WiFi</span>
            </div>

            <div className="space-y-2">
              <div className="bg-white/60 rounded-md px-3 py-2">
                <p className="font-inter text-xs text-charcoal/50 uppercase tracking-wider mb-0.5">Red</p>
                <p className="font-inter text-sm text-charcoal font-medium">LUCCIA</p>
              </div>

              <div className="bg-white/60 rounded-md px-3 py-2 flex items-center justify-between gap-2">
                <div>
                  <p className="font-inter text-xs text-charcoal/50 uppercase tracking-wider mb-0.5">Contraseña</p>
                  <p className="font-inter text-sm text-charcoal font-medium">luccia2022</p>
                </div>
                <button
                  onClick={copyPassword}
                  className="shrink-0 inline-flex items-center gap-1.5 border border-forest text-forest px-2.5 py-1 rounded-md font-inter text-xs font-medium hover:bg-forest hover:text-white transition-colors"
                >
                  {copied ? (
                    <>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Copiado
                    </>
                  ) : (
                    <>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                        <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                      </svg>
                      Copiar
                    </>
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-40 bg-cream transition-shadow duration-300 ${scrolled ? 'shadow-md' : ''}`}>
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex flex-col leading-none">
            <span className="font-cormorant text-xl font-semibold tracking-logo text-forest">LUCCIA</span>
            <span className="font-dancing text-sm italic text-gold">creando momentos</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-inter text-sm font-medium transition-colors hover:text-forest ${
                  pathname === link.href
                    ? 'text-forest border-b-2 border-gold pb-0.5'
                    : 'text-charcoal/70'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <WifiButton />
          </nav>

          {/* Mobile right side */}
          <div className="md:hidden flex items-center gap-1">
            <WifiButton />
            <button
              className="p-2 text-charcoal"
              onClick={() => setOpen(!open)}
              aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            >
              {open ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M3 12h18M3 6h18M3 18h18" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-30 bg-black/40"
              onClick={() => setOpen(false)}
            />
            <motion.nav
              key="drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.25 }}
              className="fixed top-0 right-0 h-full w-72 z-40 bg-cream shadow-xl flex flex-col pt-24 px-8 gap-8"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-cormorant text-2xl font-medium text-forest hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
