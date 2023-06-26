import MapContainer from './Map/MapContainer'

function App() {
  return (
    <div className="h-[100vh] w-full bg-sky-700/80">
      <div>
        <div className="flex justify-center">
          <h1 className="p-4 text-3xl font-bold text-white">
            My Favorite Places in the World
          </h1>
        </div>
        <MapContainer />
      </div>
    </div>
  )
}

export default App
