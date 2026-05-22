import { menuEjecutivo } from '@/data/menu'
import { formatPrice } from '@/lib/utils'

export function MenuEjecutivoBanner() {
  return (
    <div className="bg-gold text-white px-4 py-3">
      <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 text-center sm:text-left">
        <div className="flex items-center gap-3">
          <span className="font-dancing text-xl">Menú Ejecutivo</span>
          <span className="font-inter text-xs text-white/80 hidden sm:inline">
            {menuEjecutivo.hours}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="font-inter text-xs text-white/80 hidden md:inline">
            Incluye: {menuEjecutivo.includes}
          </span>
          <span className="font-cormorant text-2xl font-semibold">
            {formatPrice(menuEjecutivo.price)}
          </span>
        </div>
      </div>
      <p className="font-inter text-xs text-white/70 text-center mt-1 sm:hidden">
        {menuEjecutivo.hours} · Incluye: {menuEjecutivo.includes}
      </p>
    </div>
  )
}
