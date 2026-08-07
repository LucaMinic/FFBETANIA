import { useMemo } from 'react'
import { useNavigate } from 'react-router'
import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet'
import L, { type LatLngBoundsExpression } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import emblema from '../../assets/logo/ffbetania-logo.svg'

export interface CasaMarker {
  slug: string
  nome: string
  luogo: string
  lat: number
  lng: number
  /** Case fuori dal cluster europeo: mostrate in una lente separata sulla mappa principale. */
  fuoriEuropa?: boolean
}

const casaIcon = L.divIcon({
  className: 'casa-map-marker',
  html: `<span class="flex items-center justify-center w-9 h-9 rounded-full bg-white border-2 border-[var(--warm-orange)] shadow-md cursor-pointer hover:scale-110 transition-transform"><img src="${emblema}" alt="" class="w-6 h-6" /></span>`,
  iconSize: [36, 36],
  iconAnchor: [18, 18],
  tooltipAnchor: [0, -20],
})

interface CaseMapProps {
  case_: CasaMarker[]
}

export function CaseMap({ case_ }: CaseMapProps) {
  const navigate = useNavigate()
  const vicine = useMemo(() => case_.filter((c) => !c.fuoriEuropa), [case_])
  const lontane = useMemo(() => case_.filter((c) => c.fuoriEuropa), [case_])

  const bounds = useMemo<LatLngBoundsExpression>(
    () => vicine.map((c) => [c.lat, c.lng] as [number, number]),
    [vicine],
  )

  const goTo = (slug: string) => navigate(`/cosa-facciamo/case-di-fraternita/${slug}`)
  const paeseLontano = lontane[0]?.luogo.split(',').pop()?.trim()

  return (
    <div className="relative rounded-2xl overflow-hidden border border-gray-100 h-[480px] sm:h-[520px] mb-4">
      <MapContainer bounds={bounds} boundsOptions={{ padding: [40, 40] }} scrollWheelZoom={false} className="w-full h-full">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {vicine.map((c) => (
          <Marker
            key={c.slug}
            position={[c.lat, c.lng]}
            icon={casaIcon}
            eventHandlers={{ click: () => goTo(c.slug) }}
          >
            <Tooltip direction="top">
              <span className="font-semibold">{c.nome}</span>
              <br />
              {c.luogo}
            </Tooltip>
          </Marker>
        ))}
      </MapContainer>

      {lontane.length > 0 && (
        <div className="absolute left-2 bottom-2 sm:left-6 sm:bottom-6 z-[500] pointer-events-auto">
          <div className="relative w-24 h-24 sm:w-60 sm:h-60 md:w-80 md:h-80">
            <div className="w-full h-full rounded-full overflow-hidden border-4 sm:border-[6px] border-white shadow-2xl">
              <MapContainer
                center={[lontane[0].lat, lontane[0].lng]}
                zoom={4}
                zoomControl={false}
                dragging={false}
                scrollWheelZoom={false}
                doubleClickZoom={false}
                boxZoom={false}
                keyboard={false}
                touchZoom={false}
                attributionControl={false}
                className="w-full h-full"
              >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                {lontane.map((c) => (
                  <Marker
                    key={c.slug}
                    position={[c.lat, c.lng]}
                    icon={casaIcon}
                    eventHandlers={{ click: () => goTo(c.slug) }}
                  >
                    <Tooltip direction="top">
                      <span className="font-semibold">{c.nome}</span>
                      <br />
                      {c.luogo}
                    </Tooltip>
                  </Marker>
                ))}
              </MapContainer>
            </div>
            {paeseLontano && (
              <span className="absolute -top-8 sm:-top-9 left-1/2 -translate-x-1/2 z-10 whitespace-nowrap px-3 py-1.5 rounded-full bg-[var(--warm-orange)] text-white text-xs sm:text-sm font-bold shadow-lg ring-2 ring-white">
                {paeseLontano}
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
