import './App.css'
import Canvas from './components/Canvas.jsx'

const SIZE = 100
const initialState = new Array(SIZE)

for (let i = 0; i < SIZE; i++) {
    initialState[i] = new Array(SIZE)
    initialState[i] = new Array(SIZE)
    for (let j = 0; j < SIZE; j++) {
        initialState[i][j] = 'black'
    }
}

function App() {

  return (
      <div className="App">
          <Canvas initialState={initialState}></Canvas>
      </div>
  )
}

export default App
