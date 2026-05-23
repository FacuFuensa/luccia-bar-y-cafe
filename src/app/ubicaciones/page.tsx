import { LocationCard } from '@/components/ubicaciones/LocationCard'
import { contact } from '@/data/contact'

export default function UbicacionesPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Page header */}
      <div className="bg-forest py-16 px-4 text-center">
        <p className="font-dancing text-5xl text-white mb-2">Ubicaciones</p>
        <p className="font-inter text-sm text-cream/80">Dos sucursales en Yerba Buena, Tucumán</p>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <LocationCard
          name="Sucursal La Sirga"
          address="Av. Solano Vera, Cno. de Sirga, Yerba Buena, Tucumán"
          mapSrc="https://maps.google.com/maps?cid=73850214913254079&output=embed"
          mapsUrl="https://maps.app.goo.gl/ZoPiEQZpc2beL1J3A"
          whatsappUrl={contact.whatsapp.sirga.url}
          whatsappLabel={contact.whatsapp.sirga.display}
        />
        <LocationCard
          name="Sucursal Aconquija"
          address="Av. Aconquija 2496, T4107 Yerba Buena, Tucumán"
          mapSrc="https://maps.google.com/maps?cid=13873814193118358085&output=embed"
          mapsUrl="https://maps.app.goo.gl/YHH1yiSdQuoGt32ZA"
          whatsappUrl={contact.whatsapp.aconquija.url}
          whatsappLabel={contact.whatsapp.aconquija.display}
        />
      </div>
    </div>
  )
}
