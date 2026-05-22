import Image from 'next/image'
import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="relative h-[88vh] min-h-[520px] overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1600&q=80"
        alt="Interior de Luccia Bar & Café"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-forest/60" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 gap-4">
        <p className="font-cormorant text-6xl sm:text-7xl md:text-9xl font-semibold tracking-logo text-white drop-shadow">
          LUCCIA
        </p>
        <p className="font-dancing text-2xl md:text-3xl text-cream/90">
          creando momentos
        </p>
        <Link
          href="/carta"
          className="mt-4 border-2 border-cream text-cream px-8 py-3 font-inter text-sm font-medium tracking-widest uppercase hover:bg-cream hover:text-forest transition-colors duration-200"
        >
          Ver nuestra carta
        </Link>
      </div>
    </section>
  )
}
