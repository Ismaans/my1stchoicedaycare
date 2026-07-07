import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { business } from '../data/site'

// Custom maroon pin as a divIcon — avoids the broken default-marker-image
// problem with bundlers and keeps the map on-brand.
const pinIcon = L.divIcon({
  className: 'daycare-map-pin',
  html: `
    <svg width="34" height="46" viewBox="0 0 24 34" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M12 0C5.4 0 0 5.3 0 11.9 0 20.9 12 34 12 34s12-13.1 12-22.1C24 5.3 18.6 0 12 0z" fill="#7C2A35"/>
      <circle cx="12" cy="12" r="4.5" fill="#FBE3E6"/>
    </svg>
  `,
  iconSize: [34, 46],
  iconAnchor: [17, 46],
  popupAnchor: [0, -42],
})

export default function LocationMap({ className = '' }) {
  const { lat, lng } = business.coords

  return (
    <div
      className={`isolate overflow-hidden rounded-[16px] border border-sand shadow-[0_18px_40px_-30px_rgba(44,64,71,0.5)] ${className}`}
    >
      <MapContainer
        center={[lat, lng]}
        zoom={15}
        scrollWheelZoom={false}
        style={{ height: '100%', width: '100%', minHeight: '320px' }}
        aria-label="Map showing the daycare's general location"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[lat, lng]} icon={pinIcon}>
          <Popup>
            <strong>{business.name}</strong>
            <br />
            {business.area}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}
