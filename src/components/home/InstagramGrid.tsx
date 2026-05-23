const GRID_IMAGES = [
  { src: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&q=80', alt: 'Café' },
  { src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80', alt: 'Latte' },
  { src: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=400&q=80', alt: 'Ambiente' },
  { src: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&q=80', alt: 'Postre' },
  { src: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&q=80', alt: 'Brunch' },
  { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&q=80', alt: 'Mesa' },
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
            <div key={img.src} className="aspect-square overflow-hidden rounded-sm">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </a>
      </div>
    </section>
  )
}
