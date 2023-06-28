import React from 'react'

const Form = (props: any) => {
  const { dispatch, formDispatch, formState } = props
  return (
    <div>
      <div className="flex flex-col flex-wrap items-center">
        <p className="pb-4 pt-6 text-xl font-bold text-white">Add a new one:</p>
        <div className="flex w-full flex-row">
          <div className="flex w-1/2 flex-col items-center">
            <div className="my-4 flex w-1/2 justify-between">
              <label htmlFor="lat" className="text-xl font-normal text-white">
                Lat:
              </label>
              <input
                id="lat"
                type="number"
                className="ml-4 w-2/3 rounded px-2"
                value={formState.lat}
                onChange={(e) => {
                  formDispatch({ payload: e.target.value, field: 'lat' })
                }}
              />
            </div>
            <div className="my-4 flex w-1/2 justify-between">
              <label htmlFor="long" className="text-xl font-normal text-white">
                Long:
              </label>
              <input
                id="long"
                type="number"
                className="ml-4 w-2/3 rounded px-2"
                value={formState.long}
                onChange={(e) => {
                  formDispatch({ payload: e.target.value, field: 'long' })
                }}
              />
            </div>
          </div>
          <div className="flex w-1/2 flex-col items-start">
            <div className="my-4 flex w-2/3 justify-between">
              <label htmlFor="text" className="text-xl font-normal text-white">
                Comments:
              </label>
              <textarea
                id="text"
                className="ml-4 h-24 w-2/3 rounded px-2"
                value={formState.text}
                onChange={(e) => {
                  formDispatch({ payload: e.target.value, field: 'text' })
                }}
              />
            </div>
          </div>
        </div>
        <button
          className="mt-4 rounded border bg-white px-8 py-2 font-bold hover:scale-105"
          onClick={() => {
            dispatch({
              lat: Number(formState.lat),
              long: Number(formState.long),
              text: formState.text
            })
          }}
        >
          OK
        </button>
      </div>
    </div>
  )
}

export default Form
