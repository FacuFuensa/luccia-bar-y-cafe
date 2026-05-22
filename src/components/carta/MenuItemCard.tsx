import { Badge } from '@/components/ui/Badge'
import { formatPrice } from '@/lib/utils'
import { cn } from '@/lib/utils'
import type { MenuItem } from '@/data/menu'

interface MenuItemCardProps {
  item: MenuItem
  sinTaccActive: boolean
}

export function MenuItemCard({ item, sinTaccActive }: MenuItemCardProps) {
  const dimmed = sinTaccActive && !item.sinTacc

  return (
    <div
      className={cn(
        'flex items-start justify-between gap-4 py-3 border-b border-sage/60 last:border-0 transition-opacity duration-200',
        dimmed && 'opacity-25'
      )}
    >
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="font-inter font-medium text-charcoal text-sm">{item.name}</span>
          {item.isNew && <Badge variant="nuevo" />}
          {item.sinTacc && <Badge variant="sinTacc" />}
        </div>
        {item.description && (
          <p className="font-inter text-xs text-charcoal/55 mt-0.5 leading-relaxed">
            {item.description}
          </p>
        )}
      </div>
      <span className="font-inter font-semibold text-forest text-sm whitespace-nowrap">
        {item.price === 0 ? 'Consultar' : formatPrice(item.price)}
      </span>
    </div>
  )
}
