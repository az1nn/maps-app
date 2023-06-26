import { useMemo } from 'react'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'
import './Map.css'

export default function MapContainer() {
  const key = 'AIzaSyDxmJzqEDLoDCj7-BeRNjHmGkEiP5TV-ao'
  const center = useMemo(() => ({ lat: 44, lng: -80 }), [])
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: key
  })

  if (!isLoaded) return <div>Loading...</div>

  return (
    <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
      <Marker position={center} />
    </GoogleMap>
  )
}
