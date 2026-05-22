type BadgeVariant = 'nuevo' | 'sinTacc'

export function Badge({ variant }: { variant: BadgeVariant }) {
  if (variant === 'nuevo') {
    return (
      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-green-500 text-white uppercase tracking-wide">
        Nuevo
      </span>
    )
  }
  return (
    <span
      className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-gold/20 text-gold border border-gold/30"
      title="Sin TACC disponible"
    >
      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
        <path d="M12 2c1 0 2 .5 2.5 1.5M12 2c-1 0-2 .5-2.5 1.5M12 6v14M8 8c1-2 2.5-2.5 4-1.5M16 8c-1-2-2.5-2.5-4-1.5M8 14c1-2 2.5-2 4-.5M16 14c-1-2-2.5-2-4-.5" />
        <line x1="3" y1="3" x2="21" y2="21" />
      </svg>
      Sin TACC
    </span>
  )
}
