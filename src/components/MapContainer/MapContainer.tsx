import { useMemo } from 'react'
import GoogleMapReact from 'google-map-react'

import { IMark } from 'components/App'
import Mark from 'components/Mark/Mark'

export default function MapContainer(props: { data: IMark[] }) {
  const { data } = props
  const key = import.meta.env.VITE_GMAPS_KEY
  const center = useMemo(() => ({ lat: 0, lng: 0 }), [])

  return (
    <div className="h-[60vh] w-full">
      <GoogleMapReact
        bootstrapURLKeys={{ key: key }}
        defaultCenter={center}
        defaultZoom={0}
      >
        {data.map((item, i) => {
          return (
            <Mark key={i} text={item.text} lat={item.lat} lng={item.long} />
          )
        })}
      </GoogleMapReact>
    </div>
  )
}
