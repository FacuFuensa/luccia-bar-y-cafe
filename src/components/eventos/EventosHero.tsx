import Image from 'next/image'

export function EventosHero() {
  return (
    <section className="relative h-[52vh] min-h-[320px] overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1600&q=80"
        alt="Eventos en Luccia"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-forest/65" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 gap-3">
        <p className="font-dancing text-5xl md:text-6xl text-white">Eventos</p>
        <p className="font-inter text-base md:text-lg text-cream/85 max-w-md leading-relaxed">
          Ambiente acogedor, atención cálida y todo pensado para que disfrutes sin preocuparte por nada
        </p>
      </div>
    </section>
  )
}
