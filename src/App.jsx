import { useState } from 'react'
import './App.css'
import Button from './components/button/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Calculator & Test</h1>
      <div>
        <Button text={`count is ${count}`} onClick={() => setCount((count) => count + 1)} />
      </div>
    </>
  )
}

export default App
