import { useMemo } from 'react'
import GoogleMapReact from 'google-map-react'
import { BiSolidPin } from 'react-icons/bi'

import { IMark } from 'components/App'

import './Map.css'

export function MarkCard(props: any) {
  const { text, lat, lng } = props
  return (
    <div>
      <div className="mb-[-0.2em] ml-[-1.2em]">
        <BiSolidPin size={30} color="#A52A2A" />
      </div>
      <div className="w-max max-w-xs rounded border bg-white p-[1em] text-[1.4em]">
        <p>
          <b>Notes: </b>
          {text}
        </p>
        <div className="mt-4 flex flex-row justify-between pr-24">
          <p>
            <b>Lat: </b>
            {lat}
          </p>
          <p>
            <b>Long: </b>
            {lng}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function MapContainer(props: { data: IMark[] }) {
  const { data } = props
  const key = import.meta.env.VITE_GMAPS_KEY
  const center = useMemo(() => ({ lat: 0, lng: 0 }), [])

  return (
    <div className="h-[50vh] w-full">
      <GoogleMapReact
        bootstrapURLKeys={{ key: key }}
        defaultCenter={center}
        defaultZoom={0}
      >
        {data.map((item, i) => {
          return (
            <MarkCard key={i} text={item.text} lat={item.lat} lng={item.long} />
          )
        })}
      </GoogleMapReact>
    </div>
  )
}
