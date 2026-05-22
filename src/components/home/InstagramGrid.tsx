import Image from 'next/image'

const GRID_IMAGES = [
  { src: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&q=80', alt: 'Café' },
  { src: 'https://images.unsplash.com/photo-1484723091739-30990f53f0d6?w=400&q=80', alt: 'Desayuno' },
  { src: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=400&q=80', alt: 'Ambiente' },
  { src: 'https://images.unsplash.com/photo-1551504734-5da14e39e00c?w=400&q=80', alt: 'Postre' },
  { src: 'https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?w=400&q=80', alt: 'Croissant' },
  { src: 'https://images.unsplash.com/photo-1485963631004-f2f00b1d6606?w=400&q=80', alt: 'Desayuno especial' },
]

export function InstagramGrid() {
  return (
    <section className="py-16 px-4 bg-cream">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <p className="font-dancing text-3xl text-forest mb-1">Seguinos</p>
          <a
            href="https://instagram.com/luccia.barcafe"
            target="_blank"
            rel="noopener noreferrer"
            className="font-inter text-sm text-gold hover:underline"
          >
            @luccia.barcafe
          </a>
        </div>
        <a
          href="https://instagram.com/luccia.barcafe"
          target="_blank"
          rel="noopener noreferrer"
          className="grid grid-cols-3 gap-1 md:gap-2"
        >
          {GRID_IMAGES.map((img) => (
            <div key={img.src} className="relative aspect-square overflow-hidden rounded-sm">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </a>
      </div>
    </section>
  )
}
