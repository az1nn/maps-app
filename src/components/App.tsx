import { useReducer } from 'react'

import MapContainer from './MapContainer/MapContainer'
import Form from './Form/Form'
export interface IMark {
  lat: number
  long: number
  text: string
}
export interface IFormMark {
  lat: string
  long: string
  text: string
}
export interface FormAction {
  field: string
  payload: string
}

function App() {
  function reducer(state: IMark[], action: IMark) {
    return [...state, action]
  }

  const [state, dispatch] = useReducer(reducer, [])

  function formReducer(state: IFormMark, action: FormAction) {
    return {
      ...state,
      [action.field]: action.payload
    }
  }

  const [formState, formDispatch] = useReducer(formReducer, {
    lat: '',
    long: '',
    text: ''
  })

  return (
    <div className="h-full min-h-[100vh] w-full bg-sky-700/80">
      <div>
        <div className="flex justify-center">
          <h1 className="p-4 text-3xl font-bold text-white">
            My Favorite Places in the World
          </h1>
        </div>
        <MapContainer data={state} />
        <Form
          dispatch={dispatch}
          formDispatch={formDispatch}
          formState={formState}
        />
      </div>
    </div>
  )
}

export default App
