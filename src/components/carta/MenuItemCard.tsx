import { Badge } from '@/components/ui/Badge'
import { formatPrice } from '@/lib/utils'
import type { MenuItem } from '@/data/menu'

export function MenuItemCard({ item }: { item: MenuItem }) {
  return (
    <div className="bg-white rounded-md px-4 py-3 border border-sage/30">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 flex-wrap min-w-0">
          <span className="font-inter font-medium text-charcoal text-sm">{item.name}</span>
          {item.isNew && <Badge variant="nuevo" />}
          {item.sinTacc && <Badge variant="sinTacc" />}
        </div>
        <span className="font-inter font-semibold text-forest text-sm whitespace-nowrap shrink-0">
          {item.price === 0 ? 'Consultar' : formatPrice(item.price)}
        </span>
      </div>
      {item.description && (
        <p className="font-inter text-xs text-charcoal/50 mt-1 leading-relaxed">
          {item.description}
        </p>
      )}
    </div>
  )
}
