import type { Metadata } from 'next'
import { Cormorant_Garamond, Dancing_Script, Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Analytics } from '@vercel/analytics/next'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
})

const dancing = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-dancing',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Luccia Bar & Café | creando momentos',
  description:
    'Bar, café y helados en Yerba Buena, Tucumán. Te esperamos Lunes a Domingos de 07:00 a 00:00.',
  openGraph: {
    title: 'Luccia Bar & Café',
    description: 'creando momentos — Yerba Buena, Tucumán',
    locale: 'es_AR',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body
        className={`${cormorant.variable} ${dancing.variable} ${inter.variable} font-inter bg-cream text-charcoal`}
      >
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
