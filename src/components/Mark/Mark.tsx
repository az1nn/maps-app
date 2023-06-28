import { BiSolidPin } from 'react-icons/bi'

const Mark = (props: any) => {
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
          <p className="px-2">
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

export default Mark
