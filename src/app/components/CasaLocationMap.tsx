import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import emblema from '../../assets/logo/ffbetania-logo.svg'

const casaIcon = L.divIcon({
  className: 'casa-map-marker',
  html: `<span class="flex items-center justify-center w-9 h-9 rounded-full bg-white border-2 border-[var(--warm-orange)] shadow-md"><img src="${emblema}" alt="" class="w-6 h-6" /></span>`,
  iconSize: [36, 36],
  iconAnchor: [18, 18],
})

interface CasaLocationMapProps {
  lat: number
  lng: number
  nome: string
}

export function CasaLocationMap({ lat, lng, nome }: CasaLocationMapProps) {
  return (
    <div className="rounded-2xl overflow-hidden border border-gray-100 h-72 sm:h-full sm:min-h-72">
      <MapContainer center={[lat, lng]} zoom={13} scrollWheelZoom={false} className="w-full h-full">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[lat, lng]} icon={casaIcon}>
          <Tooltip direction="top" permanent>
            {nome}
          </Tooltip>
        </Marker>
      </MapContainer>
    </div>
  )
}
