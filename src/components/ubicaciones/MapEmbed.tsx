interface MapEmbedProps {
  src: string
  title: string
}

export function MapEmbed({ src, title }: MapEmbedProps) {
  return (
    <div className="w-full h-56 rounded-lg overflow-hidden border border-sage">
      <iframe
        src={src}
        title={title}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  )
}
