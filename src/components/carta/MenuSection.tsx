import type { MenuSection as MenuSectionType } from '@/data/menu'
import { MenuItemCard } from './MenuItemCard'

interface MenuSectionProps {
  section: MenuSectionType
  sinTaccActive: boolean
}

export function MenuSection({ section, sinTaccActive }: MenuSectionProps) {
  return (
    <div id={section.id} className="scroll-mt-32">
      <div className="bg-forest px-5 py-3 rounded-t-md">
        <h2 className="font-dancing text-2xl text-white">{section.title}</h2>
      </div>
      <div className="bg-cream px-5 pb-3 rounded-b-md border border-t-0 border-sage/40">
        {section.note && (
          <p className="font-inter text-xs text-gold italic pt-3 pb-1">{section.note}</p>
        )}
        {section.items.map((item) => (
          <MenuItemCard key={item.name} item={item} sinTaccActive={sinTaccActive} />
        ))}
      </div>
    </div>
  )
}
