import { menuSections } from '@/data/menu'
import { MenuEjecutivoBanner } from '@/components/carta/MenuEjecutivoBanner'
import { MenuTabs } from '@/components/carta/MenuTabs'
import { MenuSection } from '@/components/carta/MenuSection'

export default function CartaPage() {
  return (
    <div className="min-h-screen">
      <MenuEjecutivoBanner />
      <MenuTabs sections={menuSections} />
      <div className="max-w-2xl mx-auto px-4 py-8 space-y-6">
        {menuSections.map((section) => (
          <MenuSection key={section.id} section={section} />
        ))}
        <p className="font-inter text-xs text-gold/70 italic text-center pb-6">
          Nuestras opciones Sin TACC son en pan de lino o arroz.
        </p>
      </div>
    </div>
  )
}
